import { 
  Target, Users, Shield, Heart, Globe, Award, 
  TrendingUp, Clock, CheckCircle, Handshake, 
  Building2, MapPin, Phone, Mail, Calendar,
  ChevronRight, Star, Users as UsersIcon, Lightbulb,
  Linkedin, Github, Mail as MailIcon
} from "lucide-react";
import { Link } from "react-router-dom";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: string;
  department: string;
  linkedin?: string;
  github?: string;
  email: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function TentangKami() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Muhammad Nur Arif",
      role: "Project Manager & Backend Developer",
      description: "Mengelola keseluruhan proyek dan mengembangkan sistem backend yang scalable. Berpengalaman dalam arsitektur sistem dan database management.",
      avatar: "MA",
      department: "Leadership & Technology",
      linkedin: "#",
      github: "#",
      email: "muhammad.arif@sahabatwarga.id"
    },
    {
      id: 2,
      name: "Adil Saleh Makarim",
      role: "Frontend Developer & UI/UX Designer",
      description: "Mendesain interface yang user-friendly dan mengembangkan frontend dengan React. Fokus pada pengalaman pengguna yang optimal.",
      avatar: "AS",
      department: "Design & Development",
      linkedin: "#",
      github: "#",
      email: "adil.saleh@sahabatwarga.id"
    },
    {
      id: 3,
      name: "Farhan Aditya",
      role: "UI/UX Designer & System Analyst",
      description: "Mengembangkan fitur-fitur utama dan menganalisis kebutuhan sistem. Ahli dalam mengintegrasikan frontend dan backend.",
      avatar: "FA",
      department: "Development & Analysis",
      linkedin: "#",
      github: "#",
      email: "farhan.aditya@sahabatwarga.id"
    }
  ];

  const milestones: Milestone[] = [
    {
      year: "Bulan 1",
      title: "Ide Awal",
      description: "Lahirnya ide platform digital untuk masyarakat yang dikembangkan oleh tiga mahasiswa berdedikasi",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "Bulan 2-3",
      title: "Development Phase",
      description: "Pengembangan platform oleh tim tiga orang dengan fokus pada kebutuhan masyarakat",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "Bulan 4",
      title: "Platform Launch",
      description: "Peluncuran beta platform dengan fitur-fitur utama untuk warga",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "Bulan 5",
      title: "Community Growth",
      description: "Ekspansi ke beberapa komunitas warga dengan sistem yang stabil",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: "Bulan 6",
      title: "Future Vision",
      description: "Target pengembangan fitur advanced dan ekspansi ke lebih banyak daerah",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const values: Value[] = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparansi",
      description: "Setiap proses dan data terbuka untuk publik dengan sistem yang dapat dipercaya",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Kolaborasi",
      description: "Bekerja sama tim kecil yang solid untuk kebaikan bersama masyarakat",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inklusif",
      description: "Platform untuk semua warga tanpa terkecuali dengan interface yang mudah",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Inovasi",
      description: "Terus berinovasi meskipun dengan tim kecil untuk kemajuan masyarakat",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    { number: "3", label: "Pengembang Utama", icon: <UsersIcon className="w-6 h-6" /> },
    { number: "10.000+", label: "Warga Terdaftar", icon: <Users className="w-6 h-6" /> },
    { number: "500+", label: "UMKM Terhubung", icon: <Building2 className="w-6 h-6" /> },
    { number: "98%", label: "Kepuasan Pengguna", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Mengenal Lebih Dekat
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Sahabat Warga</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Platform digital yang dikembangkan oleh tiga mahasiswa berdedikasi untuk mengubah cara warga 
            berinteraksi, berkolaborasi, dan membangun komunitas yang lebih baik melalui teknologi.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                    <div className="text-green-600">
                      {achievement.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.number}</div>
                <div className="text-slate-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-green-600 to-emerald-500 text-white p-8 rounded-3xl shadow-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Misi Kami</h2>
            <p className="text-green-100 leading-relaxed">
              Sebagai tim kecil yang terdiri dari tiga pengembang, kami berkomitmen membangun 
              platform digital yang memberdayakan warga dalam mengelola fasilitas publik, 
              mendukung UMKM lokal, dan menciptakan komunitas yang lebih transparan dan inklusif.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visi Kami</h2>
            <p className="text-slate-600 leading-relaxed">
              Menjadi platform digital terpercaya yang menghubungkan dan memberdayakan 
              komunitas warga di seluruh Indonesia, membuktikan bahwa tim kecil dengan 
              dedikasi besar dapat menciptakan perubahan positif untuk masyarakat.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Perjalanan Kami</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Perjalanan tiga mahasiswa dalam membangun platform untuk masyarakat
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 to-emerald-200 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Year Badge */}
                  <div className="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{milestone.year}</div>
                      <div className="text-sm text-slate-600">Tahun</div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                      <div className={`inline-flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? '' : 'md:flex-row-reverse'
                      }`}>
                        <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                          <div className="text-green-600">
                            {milestone.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{milestone.title}</h3>
                      </div>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tim Pengembang</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tiga mahasiswa berdedikasi di balik platform Sahabat Warga
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-4">
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-green-600 font-medium mt-2">{member.role}</p>
                      <span className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-center mb-8">{member.description}</p>

                  {/* Contact Info */}
                  <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <MailIcon className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-700">{member.email}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github} 
                        className="p-3 bg-slate-50 text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Philosophy */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Filosofi Tim Kami</h3>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Sebagai tim kecil yang terdiri dari tiga orang, kami percaya bahwa dedikasi, 
                kolaborasi, dan passion untuk melayani masyarakat dapat menciptakan dampak besar. 
                Setiap anggota membawa keahlian unik yang saling melengkapi dalam membangun platform ini.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Prinsip Kami</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nilai-nilai yang memandu setiap langkah kami sebagai tim kecil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${value.color} w-fit text-white mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{value.title}</h3>
                <p className="text-slate-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Dampak yang Kami Ciptakan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Perubahan positif dari dedikasi tim kecil kami untuk masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inovasi Teknologi</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span>Platform digital yang mudah digunakan</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span>Sistem real-time untuk transparansi</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span>Solusi teknologi tepat guna</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white mb-6">
                <UsersIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pemberdayaan Masyarakat</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Meningkatkan partisipasi warga</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Memudahkan akses layanan publik</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Membangun komunitas digital</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border border-amber-100">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-400 rounded-2xl flex items-center justify-center text-white mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ekonomi Lokal</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span>Mendukung UMKM sekitar</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span>Menciptakan peluang ekonomi</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span>Memfasilitasi kolaborasi bisnis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ingin Berkontribusi?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-green-100">
              Bergabunglah dengan kami dalam misi memberdayakan masyarakat melalui teknologi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-10 py-4 bg-white text-green-700 rounded-2xl font-bold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Daftar sebagai Pengguna
              </Link>
              <Link
                to="/kontak"
                className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                Hubungi Tim Pengembang
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-3xl shadow border border-slate-100">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Base Development</h3>
            <p className="text-slate-600">Remote Team - Indonesia</p>
            <p className="text-sm text-slate-500 mt-1">Beroperasi secara remote</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-3xl shadow border border-slate-100">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Kontak Tim</h3>
            <p className="text-slate-600">support@sahabatwarga.id</p>
            <p className="text-sm text-slate-500 mt-1">Respon dalam 24 jam kerja</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-3xl shadow border border-slate-100">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Kolaborasi</h3>
            <p className="text-slate-600">partnership@sahabatwarga.id</p>
            <p className="text-sm text-slate-500 mt-1">Untuk kemitraan dan kolaborasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}