import { useState } from "react";
import { 
  Search, Filter, MessageSquare, Users, Store, TrendingUp, 
  Star, MapPin, Calendar, Clock, Heart, Share2, MessageCircle,
  Plus, ChevronRight, Tag, Award, Eye, ShoppingBag, BookOpen,
  BarChart, TrendingUp as TrendingUpIcon, DollarSign, Users as UsersIcon
} from "lucide-react";

interface UMKM {
  id: number;
  name: string;
  category: string;
  description: string;
  owner: string;
  location: string;
  rating: number;
  totalReviews: number;
  products: string[];
  image: string;
  joinedDate: string;
  totalPosts: number;
  isFeatured: boolean;
}

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: string;
  authorRole: string;
  category: string;
  likes: number;
  comments: number;
  views: number;
  timestamp: string;
  isPinned: boolean;
  tags: string[];
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

export default function Forum() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState<"umkm" | "posts">("posts");

  const categories: Category[] = [
    { id: "all", name: "Semua", icon: <Store className="w-5 h-5" />, count: 48, color: "bg-blue-500" },
    { id: "culinary", name: "Kuliner", icon: <ShoppingBag className="w-5 h-5" />, count: 18, color: "bg-red-500" },
    { id: "handicraft", name: "Kerajinan", icon: <Award className="w-5 h-5" />, count: 12, color: "bg-amber-500" },
    { id: "services", name: "Jasa", icon: <Users className="w-5 h-5" />, count: 10, color: "bg-green-500" },
    { id: "fashion", name: "Fashion", icon: <Tag className="w-5 h-5" />, count: 8, color: "bg-purple-500" },
  ];

  const umkmList: UMKM[] = [
    {
      id: 1,
      name: "Warung Makan Sederhana",
      category: "Kuliner",
      description: "Menyajikan masakan rumahan dengan bahan lokal segar. Spesialisasi: Nasi Goreng Kampung dan Soto Ayam.",
      owner: "Bu Sari",
      location: "Jl. Melati No. 12",
      rating: 4.8,
      totalReviews: 124,
      products: ["Nasi Goreng", "Soto Ayam", "Mie Goreng", "Minuman Tradisional"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      joinedDate: "Jan 2024",
      totalPosts: 24,
      isFeatured: true
    },
    {
      id: 2,
      name: "Kerajinan Tangan Anyaman",
      category: "Kerajinan",
      description: "Produk anyaman tradisional dari rotan dan bambu. Custom order untuk souvenir dan dekorasi.",
      owner: "Pak Bambang",
      location: "Jl. Bambu Kuning No. 5",
      rating: 4.9,
      totalReviews: 89,
      products: ["Tas Anyaman", "Topi", "Karpet", "Pot Bunga"],
      image: "https://images.unsplash.com/photo-1573135766048-85d14d5e14b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      joinedDate: "Des 2023",
      totalPosts: 18,
      isFeatured: true
    },
    {
      id: 3,
      name: "Bengkel Sepeda Ontel",
      category: "Jasa",
      description: "Servis dan perbaikan sepeda ontel klasik. Juga menjual sparepart dan aksesoris vintage.",
      owner: "Pak Joko",
      location: "Jl. Pahlawan No. 45",
      rating: 4.7,
      totalReviews: 156,
      products: ["Servis Sepeda", "Sparepart", "Custom Paint", "Aksesoris"],
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      joinedDate: "Nov 2023",
      totalPosts: 32,
      isFeatured: false
    },
    {
      id: 4,
      name: "Batik Tulis Rumahan",
      category: "Fashion",
      description: "Batik tulis dengan motif tradisional dan modern. Menerima pesanan custom untuk baju dan kain.",
      owner: "Ibu Rini",
      location: "Jl. Batik Indah No. 8",
      rating: 5.0,
      totalReviews: 67,
      products: ["Kain Batik", "Baju Batik", "Sarung", "Tas Batik"],
      image: "https://images.unsplash.com/photo-1566305977571-5666677c6e98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      joinedDate: "Feb 2024",
      totalPosts: 15,
      isFeatured: true
    },
    {
      id: 5,
      name: "Katering Sehat Keluarga",
      category: "Kuliner",
      description: "Menu sehat untuk keluarga dengan bahan organik. Cocok untuk diet dan kesehatan.",
      owner: "Bu Dewi",
      location: "Jl. Sehat No. 23",
      rating: 4.6,
      totalReviews: 92,
      products: ["Paket Harian", "Paket Mingguan", "Menu Diet", "Catering Kantor"],
      image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      joinedDate: "Mar 2024",
      totalPosts: 21,
      isFeatured: false
    },
    {
      id: 6,
      name: "Tukang Kebun Profesional",
      category: "Jasa",
      description: "Layanan perawatan taman dan kebun. Desain landscape dan maintenance rutin.",
      owner: "Pak Heru",
      location: "Jl. Hijau No. 17",
      rating: 4.5,
      totalReviews: 78,
      products: ["Perawatan Taman", "Desain Landscape", "Potong Rumput", "Pemupukan"],
      image: "https://images.unsplash.com/photo-1589923186741-b7d59d6b2c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      joinedDate: "Jan 2024",
      totalPosts: 12,
      isFeatured: false
    },
  ];

  const forumPosts: ForumPost[] = [
    {
      id: 1,
      title: "Tips Meningkatkan Penjualan Online untuk UMKM",
      content: "Bagaimana strategi pemasaran digital yang efektif untuk produk lokal?",
      author: "Sari Wijaya",
      authorRole: "Pemilik Warung Makan",
      category: "Bisnis",
      likes: 42,
      comments: 18,
      views: 256,
      timestamp: "2 jam lalu",
      isPinned: true,
      tags: ["Pemasaran", "Digital", "Tips"]
    },
    {
      id: 2,
      title: "Pelatihan Pembukuan Sederhana untuk UMKM",
      content: "Ada yang tertarik ikut pelatihan pembukuan gratis minggu depan?",
      author: "Bambang Setiawan",
      authorRole: "Akuntan Komunitas",
      category: "Keuangan",
      likes: 38,
      comments: 24,
      views: 189,
      timestamp: "5 jam lalu",
      isPinned: true,
      tags: ["Pelatihan", "Keuangan", "Gratis"]
    },
    {
      id: 3,
      title: "Kolaborasi UMKM: Bazar Warga Bulan Depan",
      content: "Pendaftaran bazar warga dibuka! Siapa yang mau gabung?",
      author: "Ketua RW 05",
      authorRole: "Pengurus Komunitas",
      category: "Event",
      likes: 56,
      comments: 32,
      views: 312,
      timestamp: "1 hari lalu",
      isPinned: false,
      tags: ["Bazar", "Event", "Kolaborasi"]
    },
    {
      id: 4,
      title: "Review: Kemasan Produk yang Ramah Lingkungan",
      content: "Mau sharing pengalaman menggunakan kemasan ramah lingkungan untuk produk saya",
      author: "Rini Hartati",
      authorRole: "Pemilik Batik Tulis",
      category: "Sustainabilitas",
      likes: 29,
      comments: 15,
      views: 167,
      timestamp: "2 hari lalu",
      isPinned: false,
      tags: ["Kemasan", "Ramah Lingkungan", "Review"]
    },
    {
      id: 5,
      title: "Permasalahan Distribusi Produk Lokal",
      content: "Bagaimana solusi untuk distribusi produk UMKM ke pasar yang lebih luas?",
      author: "Joko Santoso",
      authorRole: "Pemilik Bengkel",
      category: "Logistik",
      likes: 31,
      comments: 22,
      views: 198,
      timestamp: "3 hari lalu",
      isPinned: false,
      tags: ["Distribusi", "Logistik", "Solusi"]
    },
  ];

  const filteredUMKM = selectedCategory === "all" 
    ? umkmList 
    : umkmList.filter(umkm => umkm.category.toLowerCase().includes(selectedCategory));

  const filteredPosts = forumPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const stats = {
    totalUMKM: umkmList.length,
    activeDiscussions: forumPosts.length,
    totalMembers: 324,
    monthlyGrowth: "15%"
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            Komunitas UMKM Warga
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
                Forum <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">UMKM</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl">
                Tempat diskusi, kolaborasi, dan pengembangan usaha mikro warga. 
                Bersama membangun ekonomi lokal yang kuat dan berkelanjutan.
              </p>
            </div>
            
            <button className="lg:self-start px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Buat Diskusi Baru
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">{stats.totalUMKM}+</p>
              <p className="text-sm text-slate-600">UMKM Terdaftar</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">{stats.activeDiscussions}+</p>
              <p className="text-sm text-slate-600">Diskusi Aktif</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">{stats.totalMembers}</p>
              <p className="text-sm text-slate-600">Anggota Aktif</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">{stats.monthlyGrowth}</p>
              <p className="text-sm text-slate-600">Pertumbuhan Bulanan</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-6 py-4 font-semibold text-lg border-b-2 transition-colors ${
                activeTab === "posts" 
                  ? "border-amber-500 text-amber-600" 
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              <MessageSquare className="inline-block w-5 h-5 mr-2" />
              Diskusi Forum
            </button>
            <button
              onClick={() => setActiveTab("umkm")}
              className={`px-6 py-4 font-semibold text-lg border-b-2 transition-colors ${
                activeTab === "umkm" 
                  ? "border-amber-500 text-amber-600" 
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              <Store className="inline-block w-5 h-5 mr-2" />
              Daftar UMKM
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "posts" ? (
              <>
                {/* Search Bar */}
                <div className="mb-8 bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Cari diskusi atau topik..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Pinned Posts */}
                {filteredPosts.filter(post => post.isPinned).length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      Postingan Penting
                    </h3>
                    <div className="space-y-4">
                      {filteredPosts
                        .filter(post => post.isPinned)
                        .map((post) => (
                          <ForumPostCard key={post.id} post={post} />
                        ))}
                    </div>
                  </div>
                )}

                {/* All Posts */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Semua Diskusi</h3>
                  <div className="space-y-4">
                    {filteredPosts
                      .filter(post => !post.isPinned)
                      .map((post) => (
                        <ForumPostCard key={post.id} post={post} />
                      ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Categories Filter for UMKM */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Kategori UMKM</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                            : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${selectedCategory === category.id ? 'bg-white/20' : category.color}`}>
                          {category.icon}
                        </div>
                        <span>{category.name}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          selectedCategory === category.id 
                            ? 'bg-white/20' 
                            : 'bg-slate-100'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* UMKM Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredUMKM.map((umkm) => (
                    <div 
                      key={umkm.id} 
                      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={umkm.image} 
                          alt={umkm.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {umkm.isFeatured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium">
                              Featured
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-bold">{umkm.rating}</span>
                            <span className="text-sm text-slate-600">({umkm.totalReviews})</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{umkm.name}</h3>
                            <p className="text-amber-600 font-medium">{umkm.category}</p>
                          </div>
                          <span className="text-sm text-slate-500">Bergabung {umkm.joinedDate}</span>
                        </div>

                        <p className="text-slate-600 mb-4">{umkm.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-slate-700">
                            <Users className="w-4 h-4 text-amber-600" />
                            <span className="text-sm">Pemilik: {umkm.owner}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-700">
                            <MapPin className="w-4 h-4 text-amber-600" />
                            <span className="text-sm">{umkm.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-700">
                            <MessageSquare className="w-4 h-4 text-amber-600" />
                            <span className="text-sm">{umkm.totalPosts} diskusi aktif</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {umkm.products.slice(0, 3).map((product, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm"
                            >
                              {product}
                            </span>
                          ))}
                          {umkm.products.length > 3 && (
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                              +{umkm.products.length - 3} lebih
                            </span>
                          )}
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          Chat dengan Pemilik
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Categories Stats */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-amber-600" />
                Statistik Kategori
              </h3>
              
              <div className="space-y-4">
                {categories.slice(1).map((category) => (
                  <div key={category.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${category.color} rounded-lg text-white`}>
                        {category.icon}
                      </div>
                      <span className="font-medium text-slate-900">{category.name}</span>
                    </div>
                    <span className="text-slate-600">{category.count} UMKM</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUpIcon className="w-5 h-5 text-amber-600" />
                Topik Tren
              </h3>
              
              <div className="space-y-4">
                {["Pemasaran Digital", "Modal UMKM", "Kemasan Produk", "Pajak UMKM", "Ekspor Lokal"].map((topic, index) => (
                  <div key={index} className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="font-medium text-slate-900 mb-1">{topic}</div>
                    <div className="text-sm text-slate-500">45 diskusi aktif</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Event Mendatang
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="font-bold mb-1">Pelatihan Digital Marketing</div>
                  <div className="text-amber-100 text-sm mb-2">15 Desember 2024</div>
                  <div className="text-xs text-amber-100">Bersama Pakar Pemasaran Digital</div>
                </div>
                
                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="font-bold mb-1">Bazar Warga Akhir Tahun</div>
                  <div className="text-amber-100 text-sm mb-2">22 Desember 2024</div>
                  <div className="text-xs text-amber-100">30 stan UMKM warga</div>
                </div>
              </div>
              
              <button className="w-full mt-4 py-3 bg-white text-amber-700 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                Lihat Semua Event
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aksi Cepat</h3>
              
              <div className="space-y-3">
                <button className="w-full py-3 bg-white border border-blue-200 text-blue-700 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Ajukan Pinjaman UMKM
                </button>
                <button className="w-full py-3 bg-white border border-green-200 text-green-700 rounded-xl font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Lihat Materi Pelatihan
                </button>
                <button className="w-full py-3 bg-white border border-purple-200 text-purple-700 rounded-xl font-medium hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                  <UsersIcon className="w-5 h-5" />
                  Gabung Komunitas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

interface ForumPostCardProps {
  post: ForumPost;
}

function ForumPostCard({ post }: ForumPostCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-slate-900">{post.author}</div>
              <div className="text-sm text-slate-500">{post.authorRole}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {post.isPinned && (
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">
                <Award className="inline w-3 h-3 mr-1" />
                Penting
              </span>
            )}
            <span className="text-sm text-slate-500">{post.timestamp}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
        <p className="text-slate-600 mb-4">{post.content}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
              <Heart className="w-5 h-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{post.comments} komentar</span>
            </button>
            <div className="flex items-center gap-2 text-slate-500">
              <Eye className="w-5 h-5" />
              <span>{post.views}</span>
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium">
            <Share2 className="w-5 h-5" />
            Bagikan
          </button>
        </div>
      </div>
    </div>
  );
}