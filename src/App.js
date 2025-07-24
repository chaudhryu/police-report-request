// src/App.js
import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { CSpinner, useColorModes } from '@coreui/react';

import './scss/style.scss';
import './scss/examples.scss';

// lazy pages
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const Login         = React.lazy(() => import('./views/pages/login/Login'));
const Register      = React.lazy(() => import('./views/pages/register/Register'));
const Page404       = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500       = React.lazy(() => import('./views/pages/page500/Page500'));
const AuthResponse  = React.lazy(() => import('./views/AuthResponse'));

const Loader = () => <CSpinner color="primary" />;

/* ── Auth gate ─────────────────────────────────────────────── */
function RequireAuth({ children }) {
  const isAuthed       = useIsAuthenticated();
  const { inProgress } = useMsal();
  const location       = useLocation();

  // Wait while MSAL handles the redirect result
  if (inProgress !== InteractionStatus.None) return <Loader />;

  return isAuthed
    ? children
    : <Navigate to="/login" state={{ from: location }} replace />;
}
/* ───────────────────────────────────────────────────────────── */

export default function App() {
  // CoreUI color‑mode logic (unchanged)
  const { isColorModeSet, setColorMode } =
    useColorModes('coreui-free-react-admin-template-theme');
  const storedTheme = useSelector((state) => state.theme);
  useEffect(() => {
    const t =
      new URLSearchParams(window.location.search)
        .get('theme')?.match(/^[A-Za-z0-9\\s]+/)?.[0];
    if (t) setColorMode(t);
    else if (!isColorModeSet()) setColorMode(storedTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Azure AD redirect target */}
          <Route path="/auth-response" element={<AuthResponse />} />

          {/* Public routes */}
          <Route path="/login"    element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404"      element={<Page404 />} />
          <Route path="/500"      element={<Page500 />} />

          {/* Protected application */}
          <Route
            path="/*"
            element={
              <RequireAuth>
                <DefaultLayout />
              </RequireAuth>
            }
          />

          {/* Catch‑all */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
