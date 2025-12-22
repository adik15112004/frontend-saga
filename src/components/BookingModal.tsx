import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  facility: string;
};

const schedule = [
  { date: "2025-01-12", status: "Tersedia" },
  { date: "2025-01-13", status: "Dibooking" },
  { date: "2025-01-14", status: "Tersedia" },
  { date: "2025-01-15", status: "Tersedia" },
];

export default function BookingModal({ open, onClose, facility }: Props) {
  const navigate = useNavigate();
  if (!open) return null;

  const handleBooking = (date: string, status: string) => {
    const isLogin = localStorage.getItem("isLogin") === "true";

    if (!isLogin) {
      alert("Silakan login terlebih dahulu untuk booking fasilitas");
      navigate("/login");
      return;
    }

    if (status === "Dibooking") return;

    alert(`✅ Booking berhasil!\n\nFasilitas: ${facility}\nTanggal: ${date}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative animate-fadeIn">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X />
        </button>

        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Jadwal {facility}
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {schedule.map((item) => (
            <button
              key={item.date}
              disabled={item.status === "Dibooking"}
              onClick={() => handleBooking(item.date, item.status)}
              className={`flex justify-between items-center border rounded-xl px-4 py-3 transition
                ${
                  item.status === "Tersedia"
                    ? "hover:bg-green-50 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }
              `}
            >
              <span className="font-medium">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  item.status === "Tersedia"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {item.status}
              </span>
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Klik tanggal untuk melakukan booking.
        </p>
      </div>
    </div>
  );
}

// Inline schedule viewer for pages that display schedule without modal
export function ScheduleCalendar({ facility }: { facility: string }) {
  const navigate = useNavigate();

  const handleBooking = (date: string, status: string) => {
    const isLogin = localStorage.getItem("isLogin") === "true";

    if (!isLogin) {
      alert("Silakan login terlebih dahulu untuk booking fasilitas");
      navigate("/login");
      return;
    }

    if (status === "Dibooking") return;

    alert(`✅ Booking berhasil!\n\nFasilitas: ${facility}\nTanggal: ${date}`);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow border border-slate-100">
      <h3 className="text-2xl font-bold text-green-700 mb-4">Jadwal {facility}</h3>

      <div className="grid grid-cols-1 gap-3">
        {schedule.map((item) => (
          <button
            key={item.date}
            disabled={item.status === "Dibooking"}
            onClick={() => handleBooking(item.date, item.status)}
            className={`flex justify-between items-center border rounded-xl px-4 py-3 transition
              ${
                item.status === "Tersedia"
                  ? "hover:bg-green-50 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }
            `}
          >
            <span className="font-medium">
              {new Date(item.date).toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                item.status === "Tersedia"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {item.status}
            </span>
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">Klik tanggal untuk melakukan booking.</p>
    </div>
  );
}
