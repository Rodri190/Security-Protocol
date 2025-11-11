// Configuración de navegación del sitio
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface NavMenu {
  label: string;
  items: NavItem[];
}

export const mainNavigation: (NavItem | NavMenu)[] = [
  {
    label: 'Vestimenta',
    items: [
      { label: 'Ropa de Trabajo', href: '/vestimenta#ropa' },
      { label: 'Equipos de Seguridad', href: '/vestimenta#equipos' },
      { label: 'Uniformes Industriales', href: '/vestimenta#uniformes' },
    ],
  },
  {
    label: 'Estadísticas Generales',
    items: [
      { label: 'Número total de accidentes', href: '/statistics/total' },
      { label: 'Accidentes por semana/mes', href: '/statistics/period' },
      { label: 'Área con mayor riesgo', href: '/statistics/area' },
      { label: 'Turno con mayor incidencia', href: '/statistics/shift' },
    ],
  },
  {
    label: 'Análisis',
    items: [
      { label: 'Por Área', href: '/analysis/area' },
      { label: 'Por Turno', href: '/analysis/shift' },
      { label: 'Por Tipo de Accidente', href: '/analysis/type' },
    ],
  },
  {
    label: 'Normas y Recomendaciones',
    items: [
      { label: 'Golpes de calor', href: '/norms/heat' },
      { label: 'Caídas', href: '/norms/falls' },
      { label: 'Cortes', href: '/norms/cuts' },
    ],
  },
];

export const userNavigation: NavItem[] = [
  { label: 'Mi Perfil', href: '/profile' },
  { label: 'Mis Préstamos', href: '/my-loans' },
  { label: 'Lista de Deseos', href: '/wishlist' },
];
