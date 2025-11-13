// Servicios para consumir APIs
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

interface AccidentData {
  title: string;
  description: string;
  date: string;
  location: string;
  severity?: string;
}

export const accidentService = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/accidents`);
    return response.json();
  },
  
  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/accidents/${id}`);
    return response.json();
  },
  
  create: async (data: AccidentData) => {
    const response = await fetch(`${API_BASE_URL}/accidents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export const equipmentService = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/equipment`);
    return response.json();
  },
  
  getAvailable: async () => {
    const response = await fetch(`${API_BASE_URL}/equipment?available=true`);
    return response.json();
  },
};
