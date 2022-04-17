interface AppRouteLink {
  path: string;
  label: string;
}

export const routeLinks: AppRouteLink[] = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/users',
    label: 'Users'
  },
  {
    path: '/dashboard',
    label: 'Dashboard'
  }
]
