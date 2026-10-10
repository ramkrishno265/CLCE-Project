'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import API from '@/app/services/api';

export default function AdminTeamPage() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [uploadingCover, setUploadingCover] = useState(false);
    const [savingCover, setSavingCover] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    // কভার ছবির স্টেট
    const [coverImage, setCoverImage] = useState('/team/cover.jpg');

    const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
        shortBio: '',
        education: '',
        image: '/team/member1.jpg',
        facebook: '',
        linkedin: '',
        instagram: '',
        website: '',
        order: 1,
    });

    const fetchTeamMembers = async () => {
        try {
            const response = await API.get('/team');
            const members = response.data;
            setTeamMembers(members);

            // ডাটাবেজ থেকে যদি কোনো মেম্বারের কভার ফটো থাকে, সেটা লোড করা
            const memberWithCover = members.find((m: any) => m.cover && m.cover.trim() !== '');
            if (memberWithCover) {
                setCoverImage(memberWithCover.cover);
            }
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    // পিসি থেকে মেম্বারের ছবি ক্লাউডিনারি (Cloudinary)-তে আপলোড করার হ্যান্ডলার
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const uploadData = new FormData();
        uploadData.append('image', file);

        try {
            setUploadingImage(true);
            const res = await API.post('/upload', uploadData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setFormData({ ...formData, image: res.data.url });
            alert('Profile picture uploaded successfully!');
        } catch (error) {
            console.error('Image upload error:', error);
            alert('Failed to upload profile picture');
        } finally {
            setUploadingImage(false);
        }
    };

    // কভার ফটো পিসি থেকে আপলোড করার হ্যান্ডলার
    const handleCoverChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const uploadData = new FormData();
        uploadData.append('image', file);

        try {
            setUploadingCover(true);
            const res = await API.post('/upload', uploadData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setCoverImage(res.data.url);
            alert('Cover photo uploaded! Now click "Save Cover" to store it.');
        } catch (error) {
            console.error('Cover upload error:', error);
            alert('Failed to upload cover photo');
        } finally {
            setUploadingCover(false);
        }
    };

    // কভার ফটো ডাটাবেজে সেভ করার ফাংশন (প্রথম মেম্বারের সাথে কভার আপডেট করা)
    const handleSaveCover = async () => {
        try {
            setSavingCover(true);
            // যদি টিম মেম্বার থাকে, তবে প্রথম মেম্বারের ডাটাতেই কভার ফিল্ড আপডেট করে পাঠানো হচ্ছে
            if (teamMembers.length > 0) {
                const firstMember = teamMembers[0] as any;
                await API.put(`/team/${firstMember.id}`, {
                    ...firstMember,
                    cover: coverImage,
                });
                alert('Cover photo saved to database successfully!');
            } else {
                alert('Please add at least one team member first so the cover can be linked.');
            }
        } catch (error) {
            console.error('Error saving cover:', error);
            alert('Failed to save cover photo to database');
        } finally {
            setSavingCover(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.role || !formData.email) return;

        setLoading(true);
        try {
            if (editingId) {
                await API.put(`/team/${editingId}`, formData);
            } else {
                await API.post('/team', formData);
            }
            setIsModalOpen(false);
            resetForm();
            fetchTeamMembers();
        } catch (error) {
            console.error('Error saving member:', error);
            alert('Failed to save team member');
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (member: any) => {
        setEditingId(member.id);
        setFormData({
            name: member.name,
            role: member.role,
            email: member.email,
            shortBio: member.shortBio || '',
            education: member.education || '',
            image: member.image || '/team/member1.jpg',
            facebook: member.facebook || '',
            linkedin: member.linkedin || '',
            instagram: member.instagram || '',
            website: member.website || '',
            order: member.order || 1,
        });
        setIsModalOpen(true);
    };

    const handleDeleteMember = async (id: string) => {
        if (!confirm('Are you sure you want to delete this member?')) return;
        try {
            await API.delete(`/team/${id}`);
            fetchTeamMembers();
        } catch (error) {
            console.error('Error deleting member:', error);
            alert('Failed to delete member');
        }
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData({
            name: '',
            role: '',
            email: '',
            shortBio: '',
            education: '',
            image: '/team/member1.jpg',
            facebook: '',
            linkedin: '',
            instagram: '',
            website: '',
            order: 1,
        });
    };

    return (
        <div className="space-y-8">
            
            {/* Top Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
                    <p className="text-xs text-gray-500 mt-0.5">Add, edit, or manage your organization's leadership team.</p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsModalOpen(true); }}
                    className="bg-[#D97706] hover:bg-[#b86404] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-600/20 flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                    <span> Add New Member</span>
                </button>
            </div>

            {/* কভার ফটো আপলোড এবং সেভ কার্ড */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-28 h-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                        <Image src={coverImage} alt="Team Cover" fill className="object-cover" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">Team Page Cover Photo</h3>
                        <p className="text-xs text-gray-500">
                            {uploadingCover ? 'Uploading to cloud...' : 'Upload banner image and click save.'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                    <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors border border-gray-200 text-center">
                        <span>{uploadingCover ? 'Uploading...' : 'Change Cover Photo'}</span>
                        <input type="file" accept="image/*" onChange={handleCoverChange} className="hidden" disabled={uploadingCover} />
                    </label>

                    <button
                        onClick={handleSaveCover}
                        disabled={savingCover}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md disabled:opacity-50"
                    >
                        {savingCover ? 'Saving...' : 'Save Cover'}
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">All Team Members ({teamMembers.length})</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                                <th className="py-3 px-4 text-center w-16">Position</th>
                                <th className="py-3 px-6">Member Profile</th>
                                <th className="py-3 px-6">Role & Position</th>
                                <th className="py-3 px-6">Email Address</th>
                                <th className="py-3 px-6">Social Links</th>
                                <th className="py-3 px-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {teamMembers.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-8 text-center text-gray-400 text-sm">
                                        No team members found. Click "+ Add New Member" to create one.
                                    </td>
                                </tr>
                            ) : (
                                teamMembers.map((member: any) => (
                                    <tr key={member.id} className="hover:bg-gray-50/60 transition-colors">
                                        <td className="py-4 px-4 text-center font-extrabold text-amber-600 bg-amber-50/50">
                                            #{member.order || 1}
                                        </td>
                                        <td className="py-4 px-6 flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                                                <Image src={member.image || '/team/member1.jpg'} alt={member.name} fill className="object-cover object-top" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{member.name}</p>
                                                <p className="text-xs text-gray-400 truncate max-w-xs">{member.shortBio}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-[#D97706] font-semibold text-xs">{member.role}</td>
                                        <td className="py-4 px-6 text-gray-600 text-xs">{member.email}</td>
                                        <td className="py-4 px-6 text-xs text-gray-500">
                                            <div className="flex gap-2">
                                                {member.facebook && <span className="text-blue-600 font-bold">FB</span>}
                                                {member.linkedin && <span className="text-blue-700 font-bold">IN</span>}
                                                {member.instagram && <span className="text-pink-600 font-bold">IG</span>}
                                                {member.website && <span className="text-emerald-600 font-bold">WEB</span>}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-right space-x-2">
                                            <button 
                                                onClick={() => handleEditClick(member)}
                                                className="text-blue-600 hover:text-blue-800 font-semibold text-xs bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => handleDeleteMember(member.id)}
                                                className="text-red-500 hover:text-red-700 font-semibold text-xs bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Popup Modal (Add & Edit) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 relative">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">
                                    {editingId ? 'Edit Team Member' : 'Add New Team Member'}
                                </h3>
                                <p className="text-xs text-gray-500">Fill in the details to publish on the website.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Dr. Anisur Rahman"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Role / Designation</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Head of Programs"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="e.g. name@clcebd.org"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Display Order / Position</label>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="e.g. 1, 2, 3..."
                                        value={formData.order}
                                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                            </div>

                            {/* পিসি থেকে ছবি আপলোড ইনপুট */}
                            <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/60">
                                <label className="block text-xs font-bold uppercase text-amber-800 mb-2">
                                    {uploadingImage ? 'Uploading to Cloudinary...' : 'Upload Profile Picture (From PC)'}
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    disabled={uploadingImage}
                                    className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#D97706] file:text-white hover:file:bg-[#b86404] cursor-pointer"
                                />
                                <span className="text-[11px] text-gray-400 mt-1 block">Image will be securely stored on Cloudinary.</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Education / Degree</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Ph.D. in Development Studies"
                                        value={formData.education}
                                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Facebook Profile Link</label>
                                    <input
                                        type="url"
                                        placeholder="https://facebook.com/username"
                                        value={formData.facebook}
                                        onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">LinkedIn Link</label>
                                    <input
                                        type="url"
                                        placeholder="https://linkedin.com/in/..."
                                        value={formData.linkedin}
                                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Instagram Link</label>
                                    <input
                                        type="url"
                                        placeholder="https://instagram.com/..."
                                        value={formData.instagram}
                                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Personal Website</label>
                                    <input
                                        type="url"
                                        placeholder="https://example.com"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Short Biography / Bio</label>
                                <textarea
                                    rows={3}
                                    placeholder="Write a brief description..."
                                    value={formData.shortBio}
                                    onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D97706]"
                                />
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-100 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading || uploadingImage}
                                    className="px-6 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#b86404] text-white font-semibold text-sm shadow-md transition-colors disabled:opacity-50"
                                >
                                    {loading ? 'Saving...' : editingId ? 'Update Member' : 'Save Member'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}