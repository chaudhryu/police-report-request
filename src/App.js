// src/App.js
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MsalAuthenticationTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest } from './config/authConfig';
import { CSpinner, useColorModes } from '@coreui/react';

import './scss/style.scss';
import './scss/examples.scss';

// Lazy-loaded containers / pages
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const Login       = React.lazy(() => import('./views/pages/login/Login'));
const Register    = React.lazy(() => import('./views/pages/register/Register'));
const Page404     = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500     = React.lazy(() => import('./views/pages/page500/Page500'));

// Small wrapper so MsalAuthenticationTemplate receives a *component*, not an element
const Loader = () => <CSpinner color="primary" />;

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes(
    'coreui-free-react-admin-template-theme',
  );
  const storedTheme = useSelector((state) => state.theme);

  // keep your colour-mode side-effect as-is
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme =
      urlParams.get('theme')?.match(/^[A-Za-z0-9\s]+/)?.[0] ?? null;

    if (theme) setColorMode(theme);
    else if (!isColorModeSet()) setColorMode(storedTheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      {/* -------- Signed-in branch -------- */}
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
        loadingComponent={Loader}     // <- component *reference*, not <JSX/>
      >
        <Suspense fallback={<Loader />}>
          <DefaultLayout />
        </Suspense>
      </MsalAuthenticationTemplate>

      {/* -------- Signed-out branch -------- */}
      <UnauthenticatedTemplate>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login"    element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/404"     element={<Page404 />} />
            <Route path="/500"     element={<Page500 />} />
          </Routes>
        </Suspense>
      </UnauthenticatedTemplate>
    </BrowserRouter>
  );
};

export default App;
