import { Link, NavLink } from "react-router-dom";
import { 
  Home, Building2, Store, Users, 
  LogOut, User, Menu, X 
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const checkLogin = () => {
      const loginStatus = localStorage.getItem("isLogin") === "true";
      const userAvatar = localStorage.getItem("userAvatar") || 
        "https://ui-avatars.com/api/?background=10B981&color=fff&name=User";
      
      setIsLogin(loginStatus);
      setAvatar(userAvatar);
    };

    checkLogin();
    
    // Listen for storage changes
    window.addEventListener('storage', checkLogin);
    
    // Custom event for login/logout
    window.addEventListener('authChange', checkLogin);
    
    return () => {
      window.removeEventListener('storage', checkLogin);
      window.removeEventListener('authChange', checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.dispatchEvent(new Event('authChange'));
    window.location.href = "/";
  };

  const navItems = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/fasilitas", label: "Fasilitas", icon: <Building2 className="w-4 h-4" /> },
    { to: "/forum", label: "Forum UMKM", icon: <Store className="w-4 h-4" /> },
    { to: "/tentang-kami", label: "Tentang Kami", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-slate-900 leading-tight">
                  Sahabat<span className="text-green-600">Warga</span>
                </span>
                <span className="text-xs text-slate-500">Platform Digital</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive 
                        ? "text-green-700 bg-gradient-to-r from-green-50 to-emerald-50" 
                        : "text-slate-700 hover:text-green-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Auth Section */}
            <div className="flex items-center gap-4">
              {!isLogin ? (
                <div className="flex items-center gap-3">
                  <Link 
                    to="/login" 
                    className="px-5 py-2.5 text-green-700 font-medium hover:text-green-800 transition-colors hidden sm:block"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Daftar
                  </Link>
                </div>
              ) : (
                <div className="relative group">
                  <div className="flex items-center gap-3 cursor-pointer">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-sm font-medium text-slate-900">
                        {localStorage.getItem("userName") || "Welcome!"}
                      </span>
                      <span className="text-xs text-slate-500">Pengguna</span>
                    </div>
                    <div className="relative">
                      <img
                        src={avatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <img
                          src={avatar}
                          alt="User Avatar"
                          className="w-12 h-12 rounded-full border-2 border-slate-100"
                        />
                        <div>
                          <p className="font-semibold text-slate-900">Akun Saya</p>
                          <p className="text-sm text-slate-500">Pengguna Terdaftar</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-2">
                      <Link 
                        to="/profile" 
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <User className="w-4 h-4" />
                        <span>Profil Saya</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Keluar</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white border-t border-slate-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive 
                        ? 'text-green-700 bg-gradient-to-r from-green-50 to-emerald-50' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
              
              {!isLogin ? (
                <div className="pt-4 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 text-green-700 font-medium hover:text-green-800"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold"
                  >
                    Daftar
                  </Link>
                </div>
              ) : (
                <div className="pt-4 space-y-2">
                  <Link
                    to="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl"
                  >
                    <User className="w-4 h-4" />
                    Profil Saya
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl"
                  >
                    <LogOut className="w-4 h-4" />
                    Keluar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}