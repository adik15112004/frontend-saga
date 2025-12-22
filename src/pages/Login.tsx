import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Home, Users, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      localStorage.setItem("userName", form.email.split('@')[0] || "User");
      localStorage.setItem("userEmail", form.email);
      localStorage.setItem("userAvatar", `https://ui-avatars.com/api/?name=${encodeURIComponent(form.email.split('@')[0] || "User")}&background=10B981&color=fff`);
      
      setMessage("Login berhasil! Mengalihkan...");
      
      // Trigger auth change event for navbar update
      window.dispatchEvent(new Event('authChange'));
      
      // Redirect to home
      setTimeout(() => {
        navigate("/");
      }, 1000);
      
    } catch (error) {
      setMessage("Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    "Akses fasilitas publik",
    "Forum UMKM warga",
    "Diskusi komunitas",
    "Booking online mudah"
  ];

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Info & Benefits */}
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-3xl p-10 shadow-2xl">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Platform Digital Lingkungan
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Bergabung dengan <span className="text-yellow-300">Komunitas</span>
              </h1>
              
              <p className="text-green-100 text-lg mb-8">
                Akses semua fitur eksklusif untuk mengelola fasilitas publik, 
                mendukung UMKM lokal, dan membangun komunitas yang lebih baik.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-green-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold">10.000+ Warga</p>
                  <p className="text-green-100 text-sm">Sudah bergabung dan aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Selamat Datang Kembali
            </h2>
            <p className="text-slate-600">
              Masuk untuk melanjutkan ke platform Sahabat Warga
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Masukkan password"
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-green-600 bg-slate-100 border-slate-300 rounded focus:ring-green-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-slate-600">
                  Ingat saya
                </label>
              </div>
              <Link 
                to="#" 
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Lupa password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Memproses...
                </div>
              ) : (
                "Masuk ke Akun"
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
          </form>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="text-center">
              <p className="text-slate-600 mb-4">
                Belum punya akun?{" "}
                <Link 
                  to="/register" 
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Daftar di sini
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Benefits */}
        <div className="md:hidden bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Manfaat Bergabung</h3>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
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