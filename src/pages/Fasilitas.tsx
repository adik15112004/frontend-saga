import { useState } from "react";
import { 
  CheckCircle, Calendar, Clock, Users, MapPin, Building2, 
  CalendarDays, Shield, Award, History, Download, Star, 
  Filter, Search, ChevronRight, Clock3, UserCheck, Bell
} from "lucide-react";
import BookingModal from "../components/BookingModal";

interface Facility {
  id: number;
  title: string;
  description: string;
  capacity: string;
  rate: string;
  location: string;
  image: string;
  available: boolean;
  rating: number;
  features: string[];
}

interface BookingSchedule {
  date: string;
  time: string;
  event: string;
  status: 'active' | 'upcoming' | 'completed';
}

export default function Fasilitas() {
  const [open, setOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const openModal = (name: string) => {
    setSelectedFacility(name);
    setOpen(true);
  };

  const facilities: Facility[] = [
    {
      id: 1,
      title: "Aula Serbaguna Kelurahan",
      description: "Ruang serbaguna untuk acara warga, pertemuan komunitas, pernikahan, dan kegiatan sosial lainnya.",
      capacity: "150 orang",
      rate: "Gratis untuk warga",
      location: "Gedung Utama Kelurahan",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      available: true,
      rating: 4.8,
      features: ["AC", "Sound System", "Proyektor", "Kursi 150", "Panggung"]
    },
    {
      id: 2,
      title: "Lapangan Olahraga",
      description: "Lapangan multi-fungsi untuk futsal, basket, voli, dan kegiatan olahraga warga.",
      capacity: "40 orang",
      rate: "Gratis",
      location: "Kompleks Olahraga RW 03",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      available: true,
      rating: 4.9,
      features: ["Lapangan Futsal", "Ring Basket", "Pencahayaan", "Bleacher", "Toilet"]
    },
    {
      id: 3,
      title: "Ruang Komunitas RPTRA",
      description: "Ruang terbuka hijau untuk kegiatan Posyandu, pelatihan, bimbingan belajar, dan kegiatan sosial.",
      capacity: "80 orang",
      rate: "Gratis",
      location: "RPTRA Bahagia",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      available: true,
      rating: 4.7,
      features: ["Ruang Terbuka", "Taman Bermain", "Area Baca", "Wifi", "Dapur"]
    },
    {
      id: 4,
      title: "Perpustakaan Digital",
      description: "Ruang baca dan belajar dengan koleksi buku serta akses internet untuk warga.",
      capacity: "50 orang",
      rate: "Gratis",
      location: "Gedung Pendidikan",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      available: true,
      rating: 4.6,
      features: ["Wifi", "Komputer", "Koleksi Buku", "Ruang Tenang", "AC"]
    },
    {
      id: 5,
      title: "Studio Musik & Seni",
      description: "Ruang untuk latihan musik, seni, dan budaya bagi kelompok kesenian warga.",
      capacity: "20 orang",
      rate: "Rp 50.000/jam",
      location: "Gedung Kesenian",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      available: true,
      rating: 4.5,
      features: ["Alat Musik", "Soundproof", "Rekaman", "Instrumen", "AC"]
    },
    {
      id: 6,
      title: "Kolam Renang Komunitas",
      description: "Kolam renang untuk latihan dan rekreasi keluarga warga dengan pengawasan lifeguard.",
      capacity: "30 orang",
      rate: "Rp 15.000/orang",
      location: "Area Olahraga",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      available: false,
      rating: 4.4,
      features: ["Dewasa & Anak", "Lifeguard", "Toilet", "Loker", "Kafetaria"]
    }
  ];

  const filteredFacilities = facilities.filter(facility => {
    const matchesSearch = facility.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         facility.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || 
                         (filter === "available" && facility.available) ||
                         (filter === "free" && facility.rate.includes("Gratis"));
    return matchesSearch && matchesFilter;
  });

  const bookingSchedule: BookingSchedule[] = [
    { date: "15 Des 2024", time: "09:00-12:00", event: "Rapat RT 05", status: 'completed' },
    { date: "16 Des 2024", time: "14:00-16:00", event: "Latihan Futsal RW", status: 'active' },
    { date: "17 Des 2024", time: "18:00-21:00", event: "Pernikahan Warga", status: 'upcoming' },
    { date: "18 Des 2024", time: "08:00-12:00", event: "Posyandu", status: 'upcoming' },
  ];

  const popularFacilities = facilities.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Booking Online & Real-time
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
            Fasilitas <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Publik</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl">
            Kelola dan booking fasilitas warga secara transparan, mudah, dan real-time. 
            Semua fasilitas tersedia untuk kesejahteraan bersama.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">{facilities.length}+</p>
              <p className="text-sm text-slate-600">Fasilitas Tersedia</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">150+</p>
              <p className="text-sm text-slate-600">Booking/Bulan</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">98%</p>
              <p className="text-sm text-slate-600">Kepuasan Warga</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-600">Akses Booking</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-10 bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari fasilitas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "all" 
                    ? "bg-green-600 text-white" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilter("available")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "available" 
                    ? "bg-green-600 text-white" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Tersedia
              </button>
              <button
                onClick={() => setFilter("free")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "free" 
                    ? "bg-green-600 text-white" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Gratis
              </button>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Daftar Fasilitas</h2>
            <span className="text-slate-600">
              {filteredFacilities.length} fasilitas ditemukan
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility) => (
              <div 
                key={facility.id} 
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      facility.available 
                        ? "bg-green-100 text-green-800" 
                        : "bg-rose-100 text-rose-800"
                    }`}>
                      {facility.available ? "Tersedia" : "Dalam Perbaikan"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="font-bold">{facility.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{facility.title}</h3>
                    <span className="text-green-600 font-bold">{facility.rate}</span>
                  </div>

                  <p className="text-slate-600 mb-4">{facility.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Kapasitas: {facility.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{facility.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {facility.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(facility.title)}
                    disabled={!facility.available}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      facility.available
                        ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-lg hover:scale-[1.02]"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    <CalendarDays className="w-5 h-5" />
                    {facility.available ? "Booking Sekarang" : "Tidak Tersedia"}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Columns Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Popular Facilities */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-500" />
                Fasilitas Terpopuler
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {popularFacilities.map((facility) => (
                  <div key={facility.id} className="bg-white p-6 rounded-2xl shadow border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{facility.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{facility.rate}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span className="text-sm font-medium">{facility.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Kenapa Booking di Platform Kami?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <FeatureCard 
                    icon={<Calendar className="w-5 h-5" />}
                    title="Kalender Realtime"
                    description="Lihat jadwal kosong secara real-time"
                  />
                  <FeatureCard 
                    icon={<UserCheck className="w-5 h-5" />}
                    title="Approval Otomatis"
                    description="Konfirmasi booking dalam hitungan menit"
                  />
                  <FeatureCard 
                    icon={<History className="w-5 h-5" />}
                    title="Histori Lengkap"
                    description="Akses semua riwayat booking Anda"
                  />
                </div>
                <div className="space-y-4">
                  <FeatureCard 
                    icon={<Bell className="w-5 h-5" />}
                    title="Notifikasi Real-time"
                    description="Dapatkan update status booking"
                  />
                  <FeatureCard 
                    icon={<Download className="w-5 h-5" />}
                    title="E-Tiket Digital"
                    description="Bukti booking yang mudah diakses"
                  />
                  <FeatureCard 
                    icon={<Clock3 className="w-5 h-5" />}
                    title="24/7 Support"
                    description="Bantuan tersedia kapan saja"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Booking Schedule */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600" />
                Jadwal Booking Hari Ini
              </h3>
              
              <div className="space-y-4">
                {bookingSchedule.map((schedule, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-slate-900">{schedule.event}</p>
                        <p className="text-sm text-slate-600">{schedule.time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        schedule.status === 'active' ? 'bg-green-100 text-green-800' :
                        schedule.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {schedule.status === 'active' ? 'Berlangsung' : 
                         schedule.status === 'upcoming' ? 'Akan Datang' : 'Selesai'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{schedule.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Statistik Penggunaan</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-green-100">Aula Serbaguna</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="w-full bg-green-700 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-green-100">Lapangan Olahraga</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="w-full bg-green-700 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[92%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-green-100">RPTRA</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="w-full bg-green-700 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[78%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Butuh Bantuan?</h3>
              <p className="text-slate-600 mb-4">
                Tim support kami siap membantu 24/7 untuk masalah booking dan fasilitas.
              </p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Hubungi Support
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Pertanyaan Umum
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <FAQItem 
                question="Bagaimana cara booking fasilitas?"
                answer="Pilih fasilitas, tentukan tanggal dan waktu, lalu tunggu konfirmasi dari admin."
              />
              <FAQItem 
                question="Apakah ada biaya booking?"
                answer="Sebagian fasilitas gratis untuk warga, beberapa dikenakan biaya operasional."
              />
              <FAQItem 
                question="Berapa lama waktu konfirmasi?"
                answer="Biasanya dalam 1-2 jam kerja untuk fasilitas gratis, lebih cepat untuk berbayar."
              />
            </div>
            <div className="space-y-4">
              <FAQItem 
                question="Bisa booking untuk acara komersial?"
                answer="Ya, dengan ketentuan khusus dan biaya yang berbeda."
              />
              <FAQItem 
                question="Bagaimana jika ingin membatalkan?"
                answer="Batalkan minimal 24 jam sebelum waktu booking melalui dashboard."
              />
              <FAQItem 
                question="Siapa yang bisa booking fasilitas?"
                answer="Semua warga terdaftar di platform ini dengan verifikasi KTP."
              />
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        facility={selectedFacility}
      />
    </div>
  );
}

/* COMPONENTS */

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
      <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
        <div className="text-green-600">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <ChevronRight 
          className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-slate-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-center text-slate-700">
      <CheckCircle className="text-green-600 w-5 h-5" />
      <span>{text}</span>
    </li>
  );
}