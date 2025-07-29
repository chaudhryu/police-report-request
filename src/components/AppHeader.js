// src/components/AppHeader.jsx
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useMsal } from '@azure/msal-react'          // ⬅️ MSAL hook
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
  cilAccountLogout,                                   // ⬅️ logout icon
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const headerRef = useRef()
  const { colorMode, setColorMode } =
    useColorModes('coreui-free-react-admin-template-theme')

  // Redux sidebar state
  const dispatch     = useDispatch()
  const sidebarShow  = useSelector((state) => state.sidebarShow)

  // MSAL sign‑out
  const { instance, inProgress } = useMsal()
  const handleLogout = () => {
    if (inProgress === 'none') {
      instance.logoutRedirect()         // or logoutPopup()
    }
  }

  // Add drop‑shadow when scrolling
  useEffect(() => {
    const onScroll = () => {
      headerRef.current?.classList.toggle(
        'shadow-sm',
        document.documentElement.scrollTop > 0,
      )
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>

        {/* ─── Sidebar toggler ─── */}
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>


        {/* ─── Right‑hand icon strip ─── */}
        <CHeaderNav className="ms-auto">


          {/* Sign‑out button */}
          <CNavItem className="d-flex align-items-center ms-2">
            <CButton>
            <CNavLink
              role="button"
              onClick={handleLogout}
              style={{ cursor: inProgress === 'none' ? 'pointer' : 'not-allowed' }}
              title="Sign out"
            >
              <CIcon icon={cilAccountLogout} size="lg" />
            </CNavLink>
            </CButton>
          </CNavItem>
        </CHeaderNav>

        {/* ─── Color‑mode & profile section ─── */}
        <CHeaderNav>
          {/* divider */}
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75" />
          </li>

          {/* Color‑mode selector */}
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem active={colorMode === 'light'} onClick={() => setColorMode('light')}>
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem active={colorMode === 'dark'} onClick={() => setColorMode('dark')}>
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem active={colorMode === 'auto'} onClick={() => setColorMode('auto')}>
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

          {/* divider */}
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75" />
          </li>

          {/* Profile dropdown */}
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>

    </CHeader>
  )
}

export default AppHeader
