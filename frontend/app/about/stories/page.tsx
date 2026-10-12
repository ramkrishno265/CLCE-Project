"use client";

import StoryCard from '../../components/stores_card'; // আপনার StoryCard কম্পোনেন্টের পাথ
import React, { useState, useEffect } from 'react';
import { FaSearch, FaStore } from 'react-icons/fa';
import API from '@/app/services/api';

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
  isFeatured?: boolean;
  isVerified?: boolean;
}

const defaultCategories = ["All", "Electronics", "Grocery", "Clothing", "Stationery"];

export default function StoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(defaultCategories);

  // ব্যাকএন্ড থেকে স্টোর ডাটা ফেচ করার ফাংশন
  const fetchStores = async () => {
    try {
      setLoading(true);
      const res = await API.get('/stores');
      const responseData = res.data;
      const storeList = responseData.data || responseData;

      if (Array.isArray(storeList)) {
        setStores(storeList);
        
        // ডাটাবেজের ক্যাটাগরিগুলো ডাইনামিকালি ফিল্টারে যোগ করা
        const fetchedCategories: string[] = storeList.map((s: Store) => s.category);
        const uniqueCats = Array.from(new Set(["All", ...defaultCategories, ...fetchedCategories]));
        setCategories(uniqueCats);
      }
    } catch (error) {
      console.error("Error fetching stores from database:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  // সার্চ এবং ক্যাটাগরি অনুযায়ী ফিল্টার করা
  const filteredStores = stores.filter((store) => {
    const matchesSearch = 
      store.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || store.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] selection:bg-[#D97706]">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-3">
          <FaStore className="text-xs" /> Verified Partners
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore Partner Stores
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Find trusted local outlets, explore top product categories, and connect directly with verified merchants near you.
        </p>

        {/* Search & Filter Bar */}
        <div className="mt-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by store name or location..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stores Grid using StoryCard */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-20 text-gray-500 font-medium text-sm">
            Loading stores from database...
          </div>
        ) : filteredStores.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
            <FaStore className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">No stores found</h3>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStores.map((store) => (
              <StoryCard
                key={store.id}
                img={store.coverImage || store.logo || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"}
                title={store.name}
                tag={store.category}
                desc={`${store.address || 'Location unavailable'} • ⭐ ${store.rating || 5.0} (${store.reviewsCount || 0} reviews) • Open: ${store.timing || '10:00 AM - 08:00 PM'}`}
                link={`/about/stories/${store.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}