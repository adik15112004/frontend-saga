const API_BASE_URL = `http://localhost:${import.meta.env.VITE_BACKEND_PORT}`;

export const loginWarga = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/login/warga`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const registerWarga = async (data: {
  namaLengkap: string;
  nik: string;
  umur: number;
  nomorHP: string;
  alamat: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/auth/register/warga`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log('Fetch status:', response.status, response.statusText);
  return response.json();
};

// Tambahkan fungsi untuk admin dan superadmin jika diperlukan
export const loginAdmin = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/login/admin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const registerAdmin = async (data: {
  namaLengkap: string;
  nik: string;
  umur: number;
  nomorHP: string;
  alamat: string;
  email: string;
  password: string;
  jabatan: string;
  wilayahRT: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/auth/register/admin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const loginSuperAdmin = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/login/superadmin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const registerSuperAdmin = async (data: {
  namaLengkap: string;
  nomorHP: string;
  username: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/auth/register/superadmin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/auth/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};