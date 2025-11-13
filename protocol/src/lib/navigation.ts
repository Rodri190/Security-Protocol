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
    label: 'EQUIPOS DE PROTECCION SEGUN ZONAS DE TRABAJO',
    items: [
      { label: 'EQUIPOS', href: '/vestimenta#ropa' },
    ],
  },
  {
    label: 'ESTADISTICAS Y ANALISIS',
    items: [
      { label: 'Por Tipo de Accidente', href: '/analysis/type' },
    ],
  },
  {
    label: 'MARCO NORMATIVO BOLIVIANO',
    items: [
      { label: 'Cortes', href: '/norms/cuts' },
    ],
  },
];

export const userNavigation: NavItem[] = [
  { label: 'Mi Perfil', href: '/profile' },
  { label: 'Mis Préstamos', href: '/my-loans' },
  { label: 'Lista de Deseos', href: '/wishlist' },
];
