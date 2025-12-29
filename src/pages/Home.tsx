import { Link } from "react-router-dom";
import { CalendarDays, Users, Store, MessageSquare, Bell, TrendingUp, Shield, Heart, CheckCircle, Star, Building2, Clock, Award, Zap, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-float-delayed {
        animation: float 3s ease-in-out infinite 0.5s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="pt-20 bg-gradient-to-b from-green-50 via-white to-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center py-12 md:py-20">
        {/* Left Column */}
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Platform Digital Lingkungan
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 mb-6">
            Bangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Komunitas</span> Lebih Baik
          </h1>

          <p className="mt-4 text-xl text-slate-600 max-w-xl leading-relaxed">
            Platform digital terpadu untuk warga dalam mengelola fasilitas publik, 
            mendukung UMKM lokal, dan membangun komunitas yang aktif, transparan, & berkelanjutan.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link
              to="/fasilitas"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <CalendarDays className="w-5 h-5" />
              Booking Fasilitas
            </Link>

            <Link
              to="/forum"
              className="px-8 py-4 bg-white text-slate-700 rounded-2xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-300 font-semibold flex items-center gap-2 border border-slate-200"
            >
              <Users className="w-5 h-5" />
              Bergabung Komunitas
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-300 border-2 border-white"></div>
                ))}
              </div>
              <div>
                <p className="font-bold text-slate-900">500+ Warga</p>
                <p className="text-sm text-slate-500">Bergabung bulan ini</p>
              </div>
            </div>
            
            <div className="h-10 w-px bg-slate-300"></div>
            
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <div>
                <p className="font-bold text-slate-900">4.8/5</p>
                <p className="text-sm text-slate-500">Rating Pengguna</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="order-1 md:order-2 relative">
          {/* Main Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-green-50 rounded-[3rem] shadow-2xl p-8 md:p-10 transform hover:scale-[1.02] transition duration-500 border border-slate-100">
              <div className="aspect-square relative">
                <img
                src="/images/rptra.jpg"
                alt="Fasilitas publik"
                className="w-full h-full object-cover rounded-2xl"
              />
              </div>
            </div>

            {/* Floating Card 1 - Top Right */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">85%</p>
                  <p className="text-sm text-slate-600">Penggunaan Fasilitas</p>
                  <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-full h-2 w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Left */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-2xl shadow-xl p-6 max-w-xs animate-float-delayed">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">150+</p>
                  <p className="text-sm text-emerald-100">Fasilitas Tersedia</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Aula, Lapangan, RPTRA</span>
              </div>
            </div>

            {/* Floating Card 3 - Middle Right */}
            <div className="absolute top-1/2 -right-12 bg-white rounded-2xl shadow-xl p-5 transform -translate-y-1/2 hidden lg:block">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-xl mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-900">50+</p>
                <p className="text-sm text-slate-600">Komunitas Aktif</p>
              </div>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Terverifikasi
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <Store className="w-4 h-4" />
              UMKM Lokal
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              Forum Aktif
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Layanan Utama Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan komunitas dan lingkungan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <CalendarDays className="w-8 h-8" />,
              title: "Fasilitas Publik",
              desc: "Booking aula, lapangan, RPTRA secara realtime dengan sistem yang transparan.",
              color: "from-blue-500 to-cyan-500",
              stats: "150+ fasilitas",
              link: "/fasilitas"
            },
            {
              icon: <Store className="w-8 h-8" />,
              title: "UMKM Lokal",
              desc: "Promosi usaha warga dan ruang diskusi eksklusif untuk pelaku UMKM.",
              color: "from-purple-500 to-pink-500",
              stats: "300+ UMKM",
              link: "/forum"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Komunitas",
              desc: "Kelola pengumuman, diskusi, dan kolaborasi antar warga secara mudah.",
              color: "from-orange-500 to-yellow-500",
              stats: "50+ komunitas",
              link: "/forum"
            },
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: "Forum Diskusi",
              desc: "Ruangan diskusi untuk berbagai topik lingkungan dan komunitas.",
              color: "from-red-500 to-rose-500",
              stats: "1000+ diskusi",
              link: "/forum"
            },
          ].map((f) => (
            <Link
              key={f.title}
              to={f.link}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 block"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${f.color} w-fit text-white`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mb-4">{f.desc}</p>
              <div className="flex items-center justify-between">
                <span className="inline-block text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  {f.stats}
                </span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Cara Kerja Platform
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mulai dalam 3 langkah mudah
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-100 to-emerald-100 hidden md:block -translate-y-1/2" />
          
          {[
            {
              number: "01",
              title: "Daftar & Verifikasi",
              desc: "Buat akun dengan data diri Anda dan verifikasi sebagai warga setempat.",
              icon: <Shield className="w-6 h-6" />,
              color: "from-blue-500 to-cyan-500"
            },
            {
              number: "02",
              title: "Jelajahi Layanan",
              desc: "Akses semua layanan mulai dari booking fasilitas hingga forum UMKM.",
              icon: <Bell className="w-6 h-6" />,
              color: "from-green-500 to-emerald-500"
            },
            {
              number: "03",
              title: "Berpartisipasi",
              desc: "Mulai booking, berdiskusi, dan bangun komunitas bersama warga lainnya.",
              icon: <Heart className="w-6 h-6" />,
              color: "from-purple-500 to-pink-500"
            },
          ].map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-lg text-center relative z-10 border border-slate-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl text-2xl font-bold mb-6`}>
                  {step.number}
                </div>
                <div className="flex justify-center mb-4 text-green-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Manfaat Bergabung
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Mengapa ratusan warga telah mempercayai platform kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Efisiensi Waktu",
                desc: "Kelola semua kebutuhan komunitas dalam satu platform tanpa perlu keluar rumah.",
                color: "text-amber-600",
                bg: "bg-amber-100"
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Transparansi",
                desc: "Semua proses booking dan pengelolaan dana dapat dipantau secara real-time.",
                color: "text-blue-600",
                bg: "bg-blue-100"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "24/7 Akses",
                desc: "Platform tersedia kapan saja untuk semua kebutuhan komunitas Anda.",
                color: "text-emerald-600",
                bg: "bg-emerald-100"
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-3xl shadow-lg">
                <div className={`${benefit.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <div className={benefit.color}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Kata Warga
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Lihat apa yang dikatakan oleh warga yang telah menggunakan platform kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Budi Santoso",
              role: "Ketua RW 05",
              comment: "Platform ini sangat membantu transparansi pengelolaan fasilitas umum. Booking lapangan jadi lebih mudah!",
              rating: 5,
              avatar: "BS"
            },
            {
              name: "Sari Wijaya",
              role: "Pemilik UMKM",
              comment: "Penjualan saya meningkat 40% sejak bergabung dengan marketplace UMKM lokal.",
              rating: 5,
              avatar: "SW"
            },
            {
              name: "Agus Setiawan",
              role: "Warga Aktif",
              comment: "Forum diskusinya sangat bermanfaat untuk koordinasi kegiatan lingkungan.",
              rating: 4,
              avatar: "AS"
            },
          ].map((testi) => (
            <div key={testi.name} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testi.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testi.name}</h4>
                  <p className="text-sm text-slate-600">{testi.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testi.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-slate-700 italic">"{testi.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32 mb-20">
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Membangun Komunitas?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-green-100">
              Bergabunglah dengan ratusan warga lainnya dalam membangun lingkungan yang lebih baik
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-10 py-4 bg-white text-green-700 rounded-2xl font-bold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Daftar Sekarang Gratis
              </Link>
              <Link
                to="/forum"
                className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                Lihat Forum Diskusi
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-green-100 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Gratis untuk warga</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Tanpa biaya bulanan</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>100% transparan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="border-t border-slate-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">S.A.-GA</h3>
                  <p className="text-sm text-slate-600">Platform Digital Lingkungan</p>
                </div>
              </div>
              <p className="text-slate-600 max-w-md">
                Membantu warga mengelola fasilitas publik, mendukung UMKM lokal, dan membangun komunitas yang aktif & transparan.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Platform</h4>
                <div className="space-y-2">
                  <Link to="/fasilitas" className="block text-slate-600 hover:text-green-600">Fasilitas Publik</Link>
                  <Link to="/forum" className="block text-slate-600 hover:text-green-600">Forum UMKM</Link>
                  <Link to="/tentang-kami" className="block text-slate-600 hover:text-green-600">Tentang Kami</Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Perusahaan</h4>
                <div className="space-y-2">
                  <Link to="/tentang-kami" className="block text-slate-600 hover:text-green-600">Tentang Kami</Link>
                  <Link to="#" className="block text-slate-600 hover:text-green-600">Kontak</Link>
                  <Link to="#" className="block text-slate-600 hover:text-green-600">Bantuan</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 mt-8 pt-8 text-center">
            <p className="text-slate-600">
              Platform ini dikembangkan untuk mendukung Tujuan Pembangunan Berkelanjutan (SDGs)
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <span className="text-sm text-slate-500 flex items-center gap-2">🏘️ Komunitas Inklusif</span>
              <span className="text-sm text-slate-500 flex items-center gap-2">🌿 Lingkungan Berkelanjutan</span>
              <span className="text-sm text-slate-500 flex items-center gap-2">💼 Ekonomi Lokal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}