import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilFolder,
  cilNoteAdd,
  cilNotes,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Police Requests',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,

  },
  {
    component: CNavItem,
    name: 'Police Requests',
    to: '/dashboard',
    icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,

  },


  {
    component: CNavTitle,
    name: 'Form',
  },
  {
    component: CNavItem,
    name: 'Police Request Form',
    to: '/police-reports',
    icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,

  },
]

export default _nav
