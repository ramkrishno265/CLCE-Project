"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import API from '@/app/services/api';
import {
  FaSearch,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaStore
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
  createdAt?: string;
}

const FALLBACK_COVER = "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800";
const FALLBACK_LOGO = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150";

export default function StoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"newest" | "rating">("newest");

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        const res = await API.get('/stores');
        const data = res.data.data || res.data;
        setStores(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching stores:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStores();
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(stores.map((s) => s.category).filter(Boolean)))],
    [stores]
  );

  const filteredStores = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = stores.filter((s) => {
      const matchCategory = activeCategory === "All" || s.category === activeCategory;
      const matchSearch =
        !q ||
        s.name?.toLowerCase().includes(q) ||
        s.address?.toLowerCase().includes(q) ||
        s.category?.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });

    list = [...list].sort((a, b) => {
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    });

    return list;
  }, [stores, search, activeCategory, sortBy]);

  const featuredStores = useMemo(
    () => stores.filter((s) => s.isFeatured).slice(0, 3),
    [stores]
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-gray-800 selection:bg-[#D97706] selection:text-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-[#D97706]">
            <FaStore className="text-[11px]" /> Partner Stores
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Discover Our Partner Stores
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
            Browse verified stores, check their timings and contact details, and find the one closest to you.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by store name, category or address..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-gray-200 bg-[#FAF9F6] text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Featured */}
        {!loading && featuredStores.length > 0 && !search && activeCategory === "All" && (
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <FaStar className="text-[#D97706]" /> Featured Stores
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {featuredStores.map((store) => (
                <Link
                  key={store.id}
                  href={`/about/stories/${store.id}`}
                  className="group relative h-56 rounded-3xl overflow-hidden shadow-md border border-gray-200"
                >
                  <img
                    src={store.coverImage || store.logo || FALLBACK_COVER}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold">
                      {store.category}
                    </p>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {store.name}
                      {store.isVerified && <FaCheckCircle className="text-sm text-indigo-300" />}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition ${
                  activeCategory === cat
                    ? "bg-[#D97706] text-white border-[#D97706] shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#D97706] hover:text-[#D97706]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "newest" | "rating")}
              className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706]/40"
            >
              <option value="newest">Newest</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </section>

        {/* Result count */}
        {!loading && (
          <p className="text-xs text-gray-500 -mt-6">
            Showing <span className="font-bold text-gray-800">{filteredStores.length}</span> store
            {filteredStores.length !== 1 && "s"}
          </p>
        )}

        {/* Grid */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden animate-pulse">
                <div className="h-44 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                  <div className="h-3 w-1/2 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredStores.length === 0 ? (
          <div className="text-center py-20 space-y-3 bg-white rounded-3xl border border-gray-100">
            <FaStore className="mx-auto text-4xl text-gray-300" />
            <h3 className="text-lg font-bold text-gray-800">No stores found</h3>
            <p className="text-sm text-gray-500">Try a different search or category.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="text-sm font-semibold text-[#D97706] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStores.map((store) => (
              <Link
                key={store.id}
                href={`/about/stories/${store.id}`}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Cover */}
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  <img
                    src={store.coverImage || store.logo || FALLBACK_COVER}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur text-[#D97706]">
                    {store.category}
                  </span>
                  {store.isFeatured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#D97706] text-white">
                      Featured
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <img
                      src={store.logo || store.coverImage || FALLBACK_LOGO}
                      alt=""
                      className="w-12 h-12 -mt-9 rounded-2xl object-cover border-2 border-white shadow-md bg-white"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 flex items-center gap-1.5 truncate">
                        <span className="truncate">{store.name}</span>
                        {store.isVerified && (
                          <FaCheckCircle className="text-indigo-600 text-sm shrink-0" title="Verified Store" />
                        )}
                      </h3>
                      <p className="text-xs text-amber-600 font-semibold flex items-center gap-1 mt-0.5">
                        <FaStar /> {store.rating || 5.0}
                        <span className="text-gray-400 font-normal">({store.reviewsCount || 0} reviews)</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-500">
                    <p className="flex items-start gap-2">
                      <FaMapMarkerAlt className="text-amber-600 mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{store.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaPhoneAlt className="text-gray-400 shrink-0" /> {store.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaClock className="text-gray-400 shrink-0" /> {store.timing || "10:00 AM - 08:00 PM"}
                    </p>
                  </div>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-900 group-hover:text-[#D97706] transition-colors">
                    View Store
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}