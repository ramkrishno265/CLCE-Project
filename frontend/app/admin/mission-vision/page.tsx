'use client';

import React, { useState } from 'react';

// Form Data Type
interface Point {
  id: number;
  text: string;
}

interface MissionVisionData {
  sectionTitle: string;
  heading: string;
  subheading: string;
  missionTitle: string;
  missionDescription: string;
  missionPoints: Point[];
  visionTitle: string;
  visionDescription: string;
  visionPoints: Point[];
  valuesHeading: string;
  valuesDescription: string;
}

export default function AdminMissionVision() {
  // Demo Initial Data (Database or API backend থেকে এই Data লোড হবে)
  const [formData, setFormData] = useState<MissionVisionData>({
    sectionTitle: 'Who We Are',
    heading: 'Driving Innovation for a Better Tomorrow',
    subheading: 'We are dedicated to building solutions that empower individuals and organizations to achieve their highest potential.',
    missionTitle: 'Our Mission',
    missionDescription: 'To simplify complex challenges through innovative digital solutions and exceptional user experiences.',
    missionPoints: [
      { id: 1, text: 'User-Centric Innovation' },
      { id: 2, text: 'Scalable & Sustainable Solutions' },
      { id: 3, text: 'Uncompromised Quality' },
    ],
    visionTitle: 'Our Vision',
    visionDescription: 'To become a global leader in empowering digital transformation across industries worldwide.',
    visionPoints: [
      { id: 1, text: 'Global Excellence & Reach' },
      { id: 2, text: 'Fostering Positive Community Impact' },
      { id: 3, text: 'Continuous Future-Ready Tech' },
    ],
    valuesHeading: 'Driven by Strong Values',
    valuesDescription: 'Integrity, Innovation, and Collaboration form the core foundation of everything we build and deliver.',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Bullet point change handler
  const handlePointChange = (type: 'mission' | 'vision', index: number, value: string) => {
    if (type === 'mission') {
      const updated = [...formData.missionPoints];
      updated[index].text = value;
      setFormData((prev) => ({ ...prev, missionPoints: updated }));
    } else {
      const updated = [...formData.visionPoints];
      updated[index].text = value;
      setFormData((prev) => ({ ...prev, visionPoints: updated }));
    }
  };

  // Add new bullet point
  const addPoint = (type: 'mission' | 'vision') => {
    if (type === 'mission') {
      const newPoint = { id: Date.now(), text: '' };
      setFormData((prev) => ({ ...prev, missionPoints: [...prev.missionPoints, newPoint] }));
    } else {
      const newPoint = { id: Date.now(), text: '' };
      setFormData((prev) => ({ ...prev, visionPoints: [...prev.visionPoints, newPoint] }));
    }
  };

  // Remove bullet point
  const removePoint = (type: 'mission' | 'vision', index: number) => {
    if (type === 'mission') {
      setFormData((prev) => ({
        ...prev,
        missionPoints: prev.missionPoints.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        visionPoints: prev.visionPoints.filter((_, i) => i !== index),
      }));
    }
  };

  // Save / Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Backend API Call (Example: await fetch('/api/mission-vision', { method: 'POST', body: JSON.stringify(formData) }))
      console.log('Updated Mission & Vision Data:', formData);

      // Toast feedback
      setToastMessage('Mission & Vision content updated successfully!');
      setTimeout(() => setToastMessage(null), 3000);
    } catch (error) {
      console.error('Failed to update:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-200 mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manage Mission & Vision</h1>
            <p className="text-sm text-slate-500 mt-1">
              Update the heading, mission, vision, and core values displayed on your main site.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSaving}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl transition shadow-sm text-sm disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving ? (
              <span>Saving...</span>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </>
            )}
          </button>
        </div>

        {/* Success Toast */}
        {toastMessage && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-medium flex items-center justify-between">
            <span>{toastMessage}</span>
            <button onClick={() => setToastMessage(null)} className="text-emerald-600 hover:text-emerald-900 font-bold">✕</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Section 1: Header / Intro Settings */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Page Header Content</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tagline / Category</label>
                <input
                  type="text"
                  name="sectionTitle"
                  value={formData.sectionTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Main Heading</label>
                <input
                  type="text"
                  name="heading"
                  value={formData.heading}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-900 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subheading / Description</label>
              <textarea
                rows={3}
                name="subheading"
                value={formData.subheading}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-900 text-sm resize-none"
              />
            </div>
          </div>

          {/* Section 2: Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Form */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span> Mission Section
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Card Title</label>
                <input
                  type="text"
                  name="missionTitle"
                  value={formData.missionTitle}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-900 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Description</label>
                <textarea
                  rows={4}
                  name="missionDescription"
                  value={formData.missionDescription}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-900 text-sm bg-white resize-none"
                />
              </div>

              {/* Mission Points */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase text-slate-500">Key Highlights</label>
                  <button
                    type="button"
                    onClick={() => addPoint('mission')}
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    + Add Point
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.missionPoints.map((point, index) => (
                    <div key={point.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={point.text}
                        onChange={(e) => handlePointChange('mission', index, e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 text-slate-800 text-xs bg-white"
                        placeholder="Key point details"
                      />
                      <button
                        type="button"
                        onClick={() => removePoint('mission', index)}
                        className="text-slate-400 hover:text-red-500 p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Form */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-600"></span> Vision Section
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Card Title</label>
                <input
                  type="text"
                  name="visionTitle"
                  value={formData.visionTitle}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Description</label>
                <textarea
                  rows={4}
                  name="visionDescription"
                  value={formData.visionDescription}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 text-sm bg-white resize-none"
                />
              </div>

              {/* Vision Points */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase text-slate-500">Key Highlights</label>
                  <button
                    type="button"
                    onClick={() => addPoint('vision')}
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-800"
                  >
                    + Add Point
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.visionPoints.map((point, index) => (
                    <div key={point.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={point.text}
                        onChange={(e) => handlePointChange('vision', index, e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 text-slate-800 text-xs bg-white"
                        placeholder="Key point details"
                      />
                      <button
                        type="button"
                        onClick={() => removePoint('vision', index)}
                        className="text-slate-400 hover:text-red-500 p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Section 3: Core Values Banner */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Bottom Banner / Core Values</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Banner Title</label>
                <input
                  type="text"
                  name="valuesHeading"
                  value={formData.valuesHeading}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Banner Description</label>
                <input
                  type="text"
                  name="valuesDescription"
                  value={formData.valuesDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-900 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl transition shadow text-sm disabled:opacity-50"
            >
              {isSaving ? 'Updating...' : 'Save All Changes'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}