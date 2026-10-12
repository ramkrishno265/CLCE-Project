"use client";

import React, { useState, useEffect } from 'react';
import API from '@/app/services/api';
import { 
  FaPlus, 
  FaEdit, 
  FaTrashAlt, 
  FaSearch, 
  FaStore, 
  FaTimes, 
  FaCheckCircle, 
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaImage,
  FaUpload
} from 'react-icons/fa';

interface Store {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  address: string;
  timing: string;
  phone: string;
  logo: string;
  coverImage: string;
  isFeatured: boolean;
  isVerified: boolean;
}

const defaultCategories = ["Electronics", "Grocery", "Clothing", "Stationery"];

export default function AdminStoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStore, setEditingStore] = useState<Store | null>(null);

  // ক্যাটাগরি স্টেট
  const [categories, setCategories] = useState<string[]>(defaultCategories);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategoryInput, setCustomCategoryInput] = useState("");

  // Form state
  const [formData, setFormData] = useState<Omit<Store, 'id'>>({
    name: "",
    category: "Electronics",
    rating: 5.0,
    reviewsCount: 0,
    address: "",
    timing: "10:00 AM - 08:00 PM",
    phone: "",
    logo: "",
    coverImage: "",
    isFeatured: false,
    isVerified: true,
  });

  // API দিয়ে স্টোর ডাটা ফেচ করা
  const fetchStores = async () => {
    try {
      setLoading(true);
      const res = await API.get('/stores');
      const data = res.data;
      if (data.success || data) {
        const storeList = data.data || data;
        setStores(storeList);
        const fetchedCategories: string[] = storeList.map((s: Store) => s.category);
        const uniqueCats = Array.from(new Set([...defaultCategories, ...fetchedCategories]));
        setCategories(uniqueCats);
      }
    } catch (error) {
      console.error("Error fetching stores:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  // Modal open for ADD
  const handleOpenAddModal = () => {
    setEditingStore(null);
    setIsCustomCategory(false);
    setCustomCategoryInput("");
    setFormData({
      name: "",
      category: categories[0] || "Electronics",
      rating: 5.0,
      reviewsCount: 0,
      address: "",
      timing: "10:00 AM - 08:00 PM",
      phone: "",
      logo: "",
      coverImage: "",
      isFeatured: false,
      isVerified: true,
    });
    setIsModalOpen(true);
  };

  // Modal open for EDIT
  const handleOpenEditModal = (store: Store) => {
    setEditingStore(store);
    setIsCustomCategory(false);
    setCustomCategoryInput("");
    setFormData({ ...store });
    setIsModalOpen(true);
  };

  // পিসি থেকে লোগো ছবি আপলোড করার হ্যান্ডলার
  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      setUploadingLogo(true);
      const res = await API.post('/upload', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormData(prev => ({ ...prev, logo: res.data.url }));
      alert('Logo uploaded successfully!');
    } catch (error) {
      console.error('Logo upload error:', error);
      alert('Failed to upload logo image');
    } finally {
      setUploadingLogo(false);
    }
  };

  // সার্চ বারের পাশ থেকে কভার ছবি পিসি থেকে আপলোড করার হ্যান্ডলার
  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      const res = await API.post('/upload', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormData(prev => ({ ...prev, coverImage: res.data.url }));
      alert("Cover photo uploaded successfully!");
    } catch (error) {
      console.error("Cover image upload failed:", error);
      alert("কভার ছবি আপলোড করতে সমস্যা হয়েছে।");
    }
  };

  // DELETE Store via API
  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি সত্যিই এই স্টোরটি ডিলিট করতে চান?")) {
      try {
        await API.delete(`/stores/${id}`);
        setStores(stores.filter((store) => store.id !== id));
      } catch (error) {
        console.error("Error deleting store:", error);
        alert("ডিলিট করতে সমস্যা হয়েছে।");
      }
    }
  };

  // SAVE or UPDATE Store via API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let finalCategory = formData.category;
    if (isCustomCategory && customCategoryInput.trim() !== "") {
      finalCategory = customCategoryInput.trim();
      if (!categories.includes(finalCategory)) {
        setCategories([...categories, finalCategory]);
      }
    }

    const payload = {
      ...formData,
      category: finalCategory,
    };

    try {
      if (editingStore) {
        const res = await API.put(`/stores/${editingStore.id}`, payload);
        const updatedData = res.data.data || res.data;
        setStores(stores.map((s) => (s.id === editingStore.id ? updatedData : s)));
      } else {
        const res = await API.post('/stores', payload);
        const newData = res.data.data || res.data;
        setStores([newData, ...stores]);
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving store:", error);
    }
  };

  // Filtered Stores
  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-2">
              <FaStore className="text-indigo-600" /> Store Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Add, edit, delete and manage all partner stores from backend database.
            </p>
          </div>
          <button
            onClick={handleOpenAddModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-200"
          >
            <FaPlus /> Add New Store
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by store name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>

        {/* Stores Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold text-xs uppercase tracking-wider">
                  <th className="p-4">Store Details</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Location & Contact</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-500">
                      Loading stores from backend...
                    </td>
                  </tr>
                ) : filteredStores.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-500">
                      কোনো স্টোর পাওয়া যায়নি।
                    </td>
                  </tr>
                ) : (
                  filteredStores.map((store) => (
                    <tr key={store.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={store.logo || store.coverImage || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150"}
                            alt={store.name}
                            className="w-12 h-12 rounded-xl object-cover border border-gray-200"
                          />
                          <div>
                            <div className="font-bold text-gray-900 flex items-center gap-1.5">
                              {store.name}
                              {store.isVerified && (
                                <FaCheckCircle className="text-indigo-600 text-xs" title="Verified" />
                              )}
                            </div>
                            <span className="text-xs text-gray-400">ID: {store.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700">
                          {store.category}
                        </span>
                      </td>
                      <td className="p-4 space-y-1 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-indigo-500 shrink-0" />
                          <span className="truncate max-w-[180px]">{store.address}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaPhoneAlt className="text-indigo-500 shrink-0" />
                          <span>{store.phone}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs">
                          <FaStar />
                          <span>{store.rating}</span>
                          <span className="text-gray-400">({store.reviewsCount})</span>
                        </div>
                      </td>
                      <td className="p-4">
                        {store.isFeatured ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 uppercase">
                            Featured
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-500 uppercase">
                            Standard
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditModal(store)}
                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(store.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Delete"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for ADD / EDIT */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900">
                  {editingStore ? "Edit Store Details" : "Add New Store"}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Store Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. TechLand Express"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  {/* Category Selection with Custom Option */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Category *</label>
                    {!isCustomCategory ? (
                      <div className="flex gap-2">
                        <select
                          value={formData.category}
                          onChange={(e) => {
                            if (e.target.value === "ADD_NEW") {
                              setIsCustomCategory(true);
                              setCustomCategoryInput("");
                            } else {
                              setFormData({ ...formData, category: e.target.value });
                            }
                          }}
                          className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                          <option value="ADD_NEW" className="font-bold text-indigo-600">+ Add New Category</option>
                        </select>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter new category..."
                          value={customCategoryInput}
                          onChange={(e) => setCustomCategoryInput(e.target.value)}
                          className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomCategory(false);
                            if (customCategoryInput.trim()) {
                              setFormData({ ...formData, category: customCategoryInput.trim() });
                            }
                          }}
                          className="px-3 bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-300"
                        >
                          Back
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 1700-000000"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Gulshan-1, Dhaka-1212"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  {/* Timing */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Opening Hours</label>
                    <input
                      type="text"
                      value={formData.timing}
                      onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                      placeholder="10:00 AM - 08:00 PM"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Rating (1 - 5)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) || 5 })}
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  {/* Logo URL with PC Upload Option */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {uploadingLogo ? 'Uploading logo to server...' : 'Logo URL or Upload from PC'}
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={formData.logo}
                        onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                        placeholder="https://... or browse file"
                        className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                      <label className="cursor-pointer bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 transition border border-indigo-200">
                        <FaUpload /> Browse PC
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleLogoUpload}
                          disabled={uploadingLogo} 
                        />
                      </label>
                    </div>
                  </div>

                  {/* Cover Image Upload Option (পপআপের ভেতরেই কভার ফটো সিলেক্ট করার অপশন) */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Cover Image (Upload from PC)</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={formData.coverImage}
                        onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                        placeholder="Cover image URL..."
                        className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                      <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 transition border border-gray-200">
                        <FaImage /> Browse Cover
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleCoverImageUpload} 
                        />
                      </label>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="sm:col-span-2 flex items-center gap-6 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700">
                      <input
                        type="checkbox"
                        checked={formData.isFeatured}
                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                      />
                      Featured Store
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700">
                      <input
                        type="checkbox"
                        checked={formData.isVerified}
                        onChange={(e) => setFormData({ ...formData, isVerified: e.target.checked })}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                      />
                      Verified Merchant
                    </label>
                  </div>

                </div>

                {/* Submit Buttons */}
                <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-xs font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow transition"
                  >
                    {editingStore ? "Update Store" : "Save Store"}
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}