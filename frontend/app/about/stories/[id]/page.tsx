"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import API from "@/app/services/api";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaStar,
  FaStore,
  FaBookOpen,
  FaSlidersH,
} from "react-icons/fa";

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

const FALLBACK_COVER =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=85";
const FALLBACK_LOGO =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&auto=format&fit=crop&q=80";

export default function StoriesPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"newest" | "rating">("newest");

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        const res = await API.get("/stores");
        const data = res.data?.data || res.data;
        setStores(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching stories:", error);
        setStores([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(stores.map((store) => store.category).filter(Boolean))),
    ],
    [stores]
  );

  const filteredStores = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = stores.filter((store) => {
      const matchesCategory =
        activeCategory === "All" || store.category === activeCategory;
      const matchesSearch =
        !query ||
        store.name?.toLowerCase().includes(query) ||
        store.address?.toLowerCase().includes(query) ||
        store.category?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    return [...result].sort((a, b) => {
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return (
        new Date(b.createdAt || 0).getTime() -
        new Date(a.createdAt || 0).getTime()
      );
    });
  }, [stores, search, activeCategory, sortBy]);

  const featuredStore = useMemo(
    () => stores.find((store) => store.isFeatured) || stores[0],
    [stores]
  );

  const showFeatured =
    !loading &&
    featuredStore &&
    !search.trim() &&
    activeCategory === "All";

  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#24231f]">
      {/* Editorial hero */}
      <section className="relative overflow-hidden border-b border-[#e9e3d9] bg-[#f4efe6]">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dfd3bf] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#93601e]">
              <FaBookOpen />
              Stories from our community
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-[#25231f] sm:text-5xl lg:text-6xl">
              Every store has a story
              <span className="text-[#b87522]"> worth discovering.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#716b61] sm:text-lg">
              Meet the people, places, and local businesses behind the storefront.
              Explore their journey and find a story that inspires you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#716b61]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-[#e9e3d9]">
                <FaStore className="text-[#b87522]" />
                {loading ? "Discovering stores..." : `${stores.length} stories to explore`}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-[#e9e3d9]">
                <FaBookOpen className="text-[#b87522]" />
                Read at your own pace
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#dfc8a7]/60" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.7rem] bg-[#e7dfd2] shadow-2xl">
              <img
                src={featuredStore?.coverImage || FALLBACK_COVER}
                alt={featuredStore?.name || "Local store"}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                  <FaStar className="text-amber-300" />
                  {featuredStore?.isFeatured ? "Featured story" : "Community spotlight"}
                </span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {featuredStore?.name || "Stories that bring us together"}
                </h2>
                {featuredStore?.category && (
                  <p className="mt-1 text-sm text-white/80">{featuredStore.category}</p>
                )}
                {featuredStore && (
                  <Link
                    href={`/about/stories/${featuredStore.id}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#29251f] transition hover:bg-amber-100"
                  >
                    Read the story <FaArrowRight />
                  </Link>
                )}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-[#e9e3d9] bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8378]">
                Discover
              </p>
              <p className="mt-1 text-sm font-bold text-[#29251f]">Local journeys. Real people.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* Section heading */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b87522]">
              The story collection
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Explore the stories
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#777066] sm:text-base">
              Browse the collection, choose a category, and open a story to learn more.
            </p>
          </div>
          {!loading && (
            <p className="text-sm font-medium text-[#777066]">
              <span className="font-bold text-[#29251f]">{filteredStores.length}</span>{" "}
              {filteredStores.length === 1 ? "result" : "results"}
            </p>
          )}
        </div>

        {/* Search + sort */}
        <div className="mb-7 flex flex-col gap-4 rounded-2xl border border-[#e9e3d9] bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:p-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#938b80]" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search stories, stores, categories, or locations..."
              aria-label="Search stories"
              className="w-full rounded-xl border border-transparent bg-[#faf8f4] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#a39b90] focus:border-[#c18a43] focus:bg-white focus:ring-4 focus:ring-[#c18a43]/10"
            />
          </div>
          <label className="flex items-center gap-2 rounded-xl bg-[#faf8f4] px-3 text-sm text-[#777066]">
            <FaSlidersH className="text-[#b87522]" />
            <span className="whitespace-nowrap">Sort by</span>
            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as "newest" | "rating")
              }
              className="max-w-[135px] cursor-pointer bg-transparent py-3 font-semibold text-[#29251f] outline-none"
              aria-label="Sort stories"
            >
              <option value="newest">Newest</option>
              <option value="rating">Top rated</option>
            </select>
          </label>
        </div>

        {/* Categories */}
        <div className="mb-9 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-[#29251f] bg-[#29251f] text-white shadow-md"
                    : "border-[#e4ddd2] bg-white text-[#716b61] hover:border-[#c18a43] hover:text-[#9a641f]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Story cards */}
        {loading ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-[#e9e3d9] bg-white"
              >
                <div className="aspect-[4/3] animate-pulse bg-[#e9e3d9]" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-1/3 animate-pulse rounded bg-[#e9e3d9]" />
                  <div className="h-5 w-3/4 animate-pulse rounded bg-[#e9e3d9]" />
                  <div className="h-3 w-full animate-pulse rounded bg-[#e9e3d9]" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-[#e9e3d9]" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredStores.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#d8cbb8] bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f4efe6] text-2xl text-[#b87522]">
              <FaSearch />
            </div>
            <h3 className="mt-5 text-xl font-bold">No stories found</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#777066]">
              Try another keyword or choose a different category to discover more stories.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-full bg-[#29251f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4a4034]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStores.map((store) => (
              <article key={store.id} className="group min-w-0">
                <Link
                  href={`/about/stories/${store.id}`}
                  className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[#c18a43]/40"
                  aria-label={`Read the story of ${store.name}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-[#e9e3d9] shadow-sm">
                    <img
                      src={store.coverImage || store.logo || FALLBACK_COVER}
                      alt={`${store.name} cover`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 opacity-90" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {store.category && (
                        <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#57432b] shadow-sm">
                          {store.category}
                        </span>
                      )}
                      {store.isFeatured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#c18a43] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm">
                          <FaStar /> Featured
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-200">
                        A community story
                      </p>
                      <h3 className="text-2xl font-bold leading-tight tracking-tight">
                        {store.name}
                      </h3>
                      {store.isVerified && (
                        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white/90">
                          <FaCheckCircle className="text-sky-300" />
                          Verified store
                        </span>
                      )}
                    </div>
                    <span className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#29251f] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <FaArrowRight />
                    </span>
                  </div>
                </Link>

                <div className="px-1 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <img
                        src={store.logo || store.coverImage || FALLBACK_LOGO}
                        alt=""
                        loading="lazy"
                        className="h-10 w-10 shrink-0 rounded-full border border-[#e9e3d9] bg-white object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-[#29251f]">
                          {store.name}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-[#8a8277]">
                          <FaStar className="text-[#c18a43]" />
                          {(store.rating || 5).toFixed(1)}
                          <span>·</span>
                          {store.reviewsCount || 0} reviews
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/about/stories/${store.id}`}
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#a56b24] transition hover:text-[#29251f]"
                    >
                      Read story <FaArrowRight className="text-xs" />
                    </Link>
                  </div>

                  <div className="mt-4 space-y-2 border-t border-[#e9e3d9] pt-4 text-xs leading-5 text-[#777066]">
                    <p className="flex items-start gap-2">
                      <FaMapMarkerAlt className="mt-1 shrink-0 text-[#b87522]" />
                      <span className="line-clamp-2">{store.address || "Location not provided"}</span>
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {store.timing && (
                        <p className="flex items-center gap-2">
                          <FaClock className="shrink-0 text-[#9b9388]" />
                          {store.timing}
                        </p>
                      )}
                      {store.phone && (
                        <p className="flex items-center gap-2">
                          <FaPhoneAlt className="shrink-0 text-[#9b9388]" />
                          {store.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Closing callout */}
      {!loading && stores.length > 0 && (
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#29251f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Keep exploring
              </p>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                There is always another story to discover.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                Find a business that catches your eye and take a closer look at its journey.
              </p>
            </div>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
                setSortBy("newest");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#29251f] transition hover:bg-amber-100 lg:mt-0"
            >
              Explore all stories <FaArrowRight />
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
