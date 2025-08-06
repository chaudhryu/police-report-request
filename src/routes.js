import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


const Home = React.lazy(() => import('./views/Home'))

const PoliceReports = React.lazy(() => import('./views/PoliceReports'))

const FormPage = React.lazy(() => import('./views/FormPage'))

const AuthResponse = React.lazy(() => import ('./views/AuthResponse'))

const routes = [
  +  { path: '/', exact: true, element: Home, name: 'Home' },
  { path: '/form-page', exact: true, element:FormPage},
  { path: '/police-reports', exact: true, element:PoliceReports},
  { path: '/auth-response', name: 'Auth-Response', element: AuthResponse},
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes
