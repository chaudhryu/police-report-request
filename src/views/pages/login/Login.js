// src/views/pages/login/Login.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from '../../../config/authConfig';
import CIcon from '@coreui/icons-react';
import { cilArrowRight } from '@coreui/icons';

export default function Login() {
  const { instance, inProgress } = useMsal();
  const isAuthed   = useIsAuthenticated();
  const navigate   = useNavigate();

  /* ⟶ jump away if we somehow reach /login while already authenticated */
  useEffect(() => {
    if (isAuthed) navigate('/dashboard', { replace: true });
  }, [isAuthed, navigate]);

  const handleSignIn = () => instance.loginRedirect(loginRequest);

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>

              {/* left – sign‑in */}
              <CCard className="p-4">
                <CCardBody className="text-center">
                  <h1 className="mb-3">Sign in</h1>
                  <p className="text-body-secondary mb-4">
                    Use your Metro Microsoft credentials to continue.
                  </p>

                  <CButton
                    color="primary"
                    size="lg"
                    className="px-4"
                    onClick={handleSignIn}
                    disabled={inProgress !== 'none'}
                  >
                    <CIcon icon={cilArrowRight} className="me-2" />
                    Sign&nbsp;in with Microsoft
                  </CButton>
                </CCardBody>
              </CCard>

              {/* right – helper / register column */}
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>New here?</h2>
                    <p className="px-3">
                      Request an account or register using the link below.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register&nbsp;Now
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}


