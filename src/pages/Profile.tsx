import { useState, useEffect } from "react";
import { 
  User, Mail, MapPin, Phone, Calendar, Edit, 
  Shield, Star, Award, Settings, 
  LogOut, Building2, Store, Users as UsersIcon, ChevronRight,
  BookOpen, Bell, Globe, CheckCircle,
  MessageSquare, Eye, Download, Heart
} from "lucide-react";
import { Link } from "react-router-dom";

interface UserProfile {
  id: string;
  namaLengkap: string;
  email: string;
  nik: string;
  umur: number;
  nomorHP: string;
  alamat: string;
  joinedDate: string;
  avatar: string;
  role: string;
}

interface BookingHistory {
  id: number;
  facility: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface UMKMActivity {
  id: number;
  type: 'discussion' | 'product' | 'review';
  title: string;
  date: string;
  engagement: number;
}

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'activities' | 'settings'>('profile');

  useEffect(() => {
      const fetchUserData = () => {
        const userName = localStorage.getItem("userName") || "Pengguna";
      const userEmail = localStorage.getItem("userEmail") || "user@example.com";
      const userAvatar = localStorage.getItem("userAvatar") || 
        `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=10B981&color=fff`;

      const mockUser: UserProfile = {
        id: "USR001",
        namaLengkap: userName,
        email: userEmail,
        nik: "3174030101010001",
        umur: 28,
        nomorHP: "+62 812 3456 7890",
        alamat: "Jl. Kebon Sirih No. 123, Jakarta Pusat",
        joinedDate: "15 Januari 2024",
        avatar: userAvatar,
        role: "Warga Aktif"
      };

      setTimeout(() => {
        setUser(mockUser);
        setLoading(false);
      }, 500);
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.dispatchEvent(new Event('authChange'));
    window.location.href = "/";
  };

  const bookingHistory: BookingHistory[] = [
    { id: 1, facility: "Aula Serbaguna", date: "10 Des 2024", time: "09:00-12:00", status: 'confirmed' },
    { id: 2, facility: "Lapangan Olahraga", date: "12 Des 2024", time: "14:00-16:00", status: 'confirmed' },
    { id: 3, facility: "Ruang Komunitas", date: "15 Des 2024", time: "18:00-21:00", status: 'pending' },
    { id: 4, facility: "Studio Musik", date: "18 Des 2024", time: "08:00-12:00", status: 'cancelled' },
  ];

  const umkmActivities: UMKMActivity[] = [
    { id: 1, type: 'discussion', title: 'Tips Meningkatkan Penjualan Online', date: '2 hari lalu', engagement: 24 },
    { id: 2, type: 'product', title: 'Produk Batik Tulis Terbaru', date: '1 minggu lalu', engagement: 156 },
    { id: 3, type: 'review', title: 'Review Supplier Bahan Lokal', date: '2 minggu lalu', engagement: 42 },
    { id: 4, type: 'discussion', title: 'Strategi Pemasaran Digital', date: '3 minggu lalu', engagement: 89 },
  ];

  const stats = {
    totalBookings: 12,
    completedBookings: 8,
    forumPosts: 24,
    communityRating: 4.5
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600">Memuat profil...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
        <div className="text-center">
          <User className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Data tidak ditemukan</h3>
          <p className="text-slate-600 mb-6">Silakan login terlebih dahulu</p>
          <Link
            to="/login"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Login Sekarang
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.namaLengkap}
                  className="w-24 h-24 rounded-2xl border-4 border-white shadow-xl"
                />
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                >
                  <Edit className="w-5 h-5" />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{user.namaLengkap}</h1>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                    {user.role}
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                    <span className="text-sm text-slate-600 ml-1">4.8</span>
                  </div>
                </div>
                <p className="text-slate-600 mt-2">Bergabung sejak {user.joinedDate}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-3 bg-white border border-green-200 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-colors flex items-center gap-2"
              >
                <Edit className="w-5 h-5" />
                Edit Profil
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Keluar
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.totalBookings}</p>
                  <p className="text-sm text-slate-600">Total Booking</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.completedBookings}</p>
                  <p className="text-sm text-slate-600">Selesai</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl">
                  <Store className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.forumPosts}</p>
                  <p className="text-sm text-slate-600">Posting Forum</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.communityRating}</p>
                  <p className="text-sm text-slate-600">Rating Komunitas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-slate-200 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'profile' 
                      ? 'border-green-500 text-green-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <User className="inline-block w-5 h-5 mr-2" />
                  Profil Saya
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'bookings' 
                      ? 'border-green-500 text-green-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <BookOpen className="inline-block w-5 h-5 mr-2" />
                  Riwayat Booking
                </button>
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'activities' 
                      ? 'border-green-500 text-green-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Store className="inline-block w-5 h-5 mr-2" />
                  Aktivitas UMKM
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'settings' 
                      ? 'border-green-500 text-green-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Settings className="inline-block w-5 h-5 mr-2" />
                  Pengaturan
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Pribadi</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoField icon={<User className="w-5 h-5" />} label="Nama Lengkap" value={user.namaLengkap} />
                    <InfoField icon={<Mail className="w-5 h-5" />} label="Email" value={user.email} />
                    <InfoField icon={<Shield className="w-5 h-5" />} label="NIK" value={user.nik} />
                    <InfoField icon={<Calendar className="w-5 h-5" />} label="Umur" value={`${user.umur} tahun`} />
                    <InfoField icon={<Phone className="w-5 h-5" />} label="Nomor HP" value={user.nomorHP} />
                    <InfoField icon={<MapPin className="w-5 h-5" />} label="Alamat" value={user.alamat} />
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Riwayat Booking</h3>
                    <Link
                      to="/fasilitas"
                      className="px-4 py-2 text-green-600 hover:text-green-700 font-medium flex items-center gap-2"
                    >
                      Booking Baru
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {bookingHistory.map((booking) => (
                      <div key={booking.id} className="p-6 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-slate-900">{booking.facility}</h4>
                            <p className="text-sm text-slate-600">{booking.date} • {booking.time}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {booking.status === 'confirmed' ? 'Dikonfirmasi' :
                             booking.status === 'pending' ? 'Menunggu' : 'Dibatalkan'}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                            Lihat Detail
                          </button>
                          <button className="text-slate-600 hover:text-slate-700 font-medium text-sm">
                            Unduh Tiket
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'activities' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Aktivitas UMKM</h3>
                    <Link
                      to="/forum"
                      className="px-4 py-2 text-green-600 hover:text-green-700 font-medium flex items-center gap-2"
                    >
                      Lihat Forum
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {umkmActivities.map((activity) => (
                      <div key={activity.id} className="p-6 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            activity.type === 'discussion' ? 'bg-blue-100 text-blue-600' :
                            activity.type === 'product' ? 'bg-amber-100 text-amber-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            {activity.type === 'discussion' ? <MessageSquare className="w-6 h-6" /> :
                             activity.type === 'product' ? <Store className="w-6 h-6" /> :
                             <Star className="w-6 h-6" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 mb-2">{activity.title}</h4>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-slate-600">{activity.date}</p>
                              <p className="text-sm text-slate-600">
                                {activity.engagement} interaksi
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Pengaturan Akun</h3>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-green-600" />
                        Notifikasi
                      </h4>
                      <div className="space-y-3">
                        <ToggleSetting label="Notifikasi booking" defaultChecked />
                        <ToggleSetting label="Update forum" defaultChecked />
                        <ToggleSetting label="Promo UMKM" />
                        <ToggleSetting label="Pengumuman komunitas" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Keamanan
                      </h4>
                      <div className="space-y-4">
                        <button className="w-full py-3 text-left border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors px-4">
                          Ganti Password
                        </button>
                        <button className="w-full py-3 text-left border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors px-4">
                          Verifikasi Email
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-green-600" />
                        Privasi
                      </h4>
                      <div className="space-y-3">
                        <ToggleSetting label="Profil publik" />
                        <ToggleSetting label="Tampilkan aktivitas" defaultChecked />
                        <ToggleSetting label="Izinkan pesan" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Aksi Cepat</h3>
              <div className="space-y-3">
                <Link
                  to="/fasilitas"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow transition-all"
                >
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Booking Fasilitas</p>
                    <p className="text-sm text-slate-600">Reservasi sekarang</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
                
                <Link
                  to="/forum"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow transition-all"
                >
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Store className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Forum UMKM</p>
                    <p className="text-sm text-slate-600">Diskusi terbaru</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
                
                <Link
                  to="/tentang-kami"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow transition-all"
                >
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <UsersIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Komunitas</p>
                    <p className="text-sm text-slate-600">Lihat kegiatan</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="bg-white rounded-3xl shadow border border-slate-100 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Prestasi
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm font-medium">Anggota Aktif</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium">Pengguna Setia</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                    <Store className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-sm font-medium">Kontributor</p>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4">Butuh Bantuan?</h3>
              <p className="text-blue-100 mb-6">
                Tim support kami siap membantu 24/7 untuk masalah akun dan platform.
              </p>
              <button className="w-full py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Hubungi Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

interface InfoFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoField({ icon, label, value }: InfoFieldProps) {
  return (
    <div className="p-4 rounded-2xl border border-slate-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-green-600">{icon}</div>
        <span className="text-sm font-medium text-slate-600">{label}</span>
      </div>
      <p className="text-slate-900 font-medium">{value}</p>
    </div>
  );
}

interface ToggleSettingProps {
  label: string;
  defaultChecked?: boolean;
}

function ToggleSetting({ label, defaultChecked }: ToggleSettingProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-700">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
      </label>
    </div>
  );
}