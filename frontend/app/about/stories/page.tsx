"use client";

import React, { useState } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaStar, 
  FaStore, 
  FaClock, 
  FaPhoneAlt, 
  FaExternalLinkAlt,
  FaCheckCircle
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
  isFeatured?: boolean;
  isVerified?: boolean;
}

const mockStores: Store[] = [
  {
    id: "1",
    name: "TechLand Express",
    category: "Electronics",
    rating: 4.8,
    reviewsCount: 124,
    address: "Gulshan-1, Dhaka-1212",
    timing: "10:00 AM - 09:00 PM",
    phone: "+880 1711-000000",
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&auto=format&fit=crop&q=80",
    coverImage: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80",
    isFeatured: true,
    isVerified: true,
  },
  {
    id: "2",
    name: "Organic Daily Mart",
    category: "Grocery",
    rating: 4.6,
    reviewsCount: 89,
    address: "Banani 11, Dhaka-1213",
    timing: "08:00 AM - 10:00 PM",
    phone: "+880 1811-111111",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&auto=format&fit=crop&q=80",
    coverImage: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80",
    isFeatured: false,
    isVerified: true,
  },
  {
    id: "3",
    name: "Aura Fashion & Style",
    category: "Clothing",
    rating: 4.9,
    reviewsCount: 210,
    address: "Dhanmondi 27, Dhaka-1209",
    timing: "11:00 AM - 08:30 PM",
    phone: "+880 1911-222222",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&auto=format&fit=crop&q=80",
    coverImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=80",
    isFeatured: true,
    isVerified: true,
  },
  {
    id: "4",
    name: "Bookworm Station",
    category: "Stationery",
    rating: 4.5,
    reviewsCount: 45,
    address: "Uttara Sector 3, Dhaka-1230",
    timing: "09:30 AM - 08:00 PM",
    phone: "+880 1611-333333",
    logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=150&auto=format&fit=crop&q=80",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop&q=80",
    isFeatured: false,
    isVerified: false,
  }
];

const categories = ["All", "Electronics", "Grocery", "Clothing", "Stationery"];

export default function StoresPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStores = mockStores.filter((store) => {
    const matchesSearch = 
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || store.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] selection:bg-[#D97706]">
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

      {/* Stores Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredStores.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
            <FaStore className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">No stores found</h3>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Cover Image */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <img
                    src={store.coverImage}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  {store.isFeatured && (
                    <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                      Featured
                    </span>
                  )}

                  {/* Category Pill */}
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                    {store.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col relative">
                  {/* Store Logo Overlap */}
                  <div className="absolute -top-10 right-5 border-4 border-white rounded-xl shadow-md overflow-hidden bg-white w-14 h-14">
                    <img src={store.logo} alt="" className="w-full h-full object-cover" />
                  </div>

                  {/* Store Title */}
                  <div className="pr-12">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
                      {store.name}
                      {store.isVerified && (
                        <FaCheckCircle className="text-indigo-600 text-sm" title="Verified Store" />
                      )}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex items-center text-amber-400 text-xs gap-0.5">
                      <FaStar />
                      <span className="font-semibold text-gray-800 ml-1">{store.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">({store.reviewsCount} reviews)</span>
                  </div>

                  {/* Details List */}
                  <div className="mt-4 space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-indigo-500 shrink-0" />
                      <span className="truncate">{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-indigo-500 shrink-0" />
                      <span>{store.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="text-indigo-500 shrink-0" />
                      <span>{store.phone}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-2 flex items-center gap-3">
                    <a
                      href={`/stores/${store.id}`}
                      className="flex-1 text-center py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      Visit Store <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}