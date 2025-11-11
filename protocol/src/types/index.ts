// Tipos de datos para el sistema
export interface AccidentData {
  id: string;
  fecha: Date;
  area: string;
  turno: string;
  tipo: string;
  descripcion: string;
  severidad: 'leve' | 'moderado' | 'grave' | 'crítico';
}

export interface EquipmentData {
  id: string;
  nombre: string;
  categoria: string;
  disponible: boolean;
  ultimaRevision: Date;
}

export interface UserData {
  id: string;
  nombre: string;
  email: string;
  rol: 'trabajador' | 'supervisor' | 'administrador';
}
