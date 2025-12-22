import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, Home, ArrowRight, Shield, Users, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    namaLengkap: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (name === "password") {
      let strength = 0;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save data to localStorage
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("token", "dummy_token_12345");
      localStorage.setItem("userName", form.namaLengkap);
      localStorage.setItem("userEmail", form.email);
      localStorage.setItem("userAvatar", `https://ui-avatars.com/api/?name=${encodeURIComponent(form.namaLengkap)}&background=10B981&color=fff`);
      
      setMessage("Registrasi berhasil! Login otomatis...");
      
      // Trigger auth change event for navbar update
      window.dispatchEvent(new Event('authChange'));
      
      // Redirect to home
      setTimeout(() => {
        navigate("/");
      }, 1000);
      
    } catch (error) {
      setMessage("Terjadi kesalahan saat registrasi");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    "Booking fasilitas publik secara online",
    "Akses forum diskusi UMKM warga",
    "Promosi usaha lokal",
    "Notifikasi kegiatan komunitas",
    "Transparansi pengelolaan lingkungan"
  ];

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Form */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Bergabung dengan <span className="text-green-600">Sahabat Warga</span>
            </h1>
            <p className="text-slate-600">
              Buat akun Anda dan mulai manfaatkan semua fitur eksklusif
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="namaLengkap"
                  placeholder="Masukkan nama lengkap Anda"
                  value={form.namaLengkap}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="contoh@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Buat password yang kuat"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {form.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-2 flex-1 rounded-full transition-all ${
                          level <= passwordStrength
                            ? level === 1 ? "bg-red-400" :
                              level === 2 ? "bg-amber-400" :
                              level === 3 ? "bg-yellow-400" :
                              "bg-green-500"
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">
                    {passwordStrength === 0 ? "Masukkan password" :
                     passwordStrength === 1 ? "Password lemah" :
                     passwordStrength === 2 ? "Password cukup" :
                     passwordStrength === 3 ? "Password baik" : "Password kuat"}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 text-green-600 bg-slate-100 border-slate-300 rounded focus:ring-green-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-slate-600">
                Saya setuju dengan{" "}
                <Link to="#" className="text-green-600 hover:text-green-700 font-medium">
                  Syarat & Ketentuan
                </Link>{" "}
                dan{" "}
                <Link to="#" className="text-green-600 hover:text-green-700 font-medium">
                  Kebijakan Privasi
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Mendaftarkan...
                </>
              ) : (
                <>
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {message && (
              <div className={`p-4 rounded-xl text-center font-medium ${
                message.includes("berhasil") 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {message}
              </div>
            )}

            <div className="text-center">
              <p className="text-slate-600">
                Sudah punya akun?{" "}
                <Link 
                  to="/login" 
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Column - Benefits */}
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-3xl p-10 shadow-2xl">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Mulai Perjalanan Anda
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Bergabung dengan <span className="text-yellow-300">Komunitas Digital</span>
              </h1>
              
              <p className="text-green-100 text-lg mb-8">
                Jadilah bagian dari perubahan positif di lingkungan Anda. 
                Akses semua fitur untuk membangun komunitas yang lebih baik bersama warga lainnya.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-green-100 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">10.000+</p>
                    <p className="text-green-100 text-sm">Warga Aktif</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">98%</p>
                    <p className="text-green-100 text-sm">Kepuasan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold">Lingkungan Lebih Baik</p>
                  <p className="text-green-100 text-sm">Bersama kita bisa membangun komunitas yang lebih terhubung</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Benefits */}
        <div className="md:hidden bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Manfaat Bergabung</h3>
          <div className="space-y-3">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-100" />
                <span className="text-green-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}