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

  useEffect(() => {
    if (isAuthed) navigate('/', { replace: true });
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
                  <h1 className="mb-3">Police Report Request Portal</h1>
                  <h3 className="mb-3">Need a report from LAPD, LBPD, Highway Patrol, San Fenando Police deaprtment?</h3>
                  <p className="text-body-secondary mb-4">
                    Use your Metro Metro Login credentials to continue.
                  </p>

                  <CButton
                    color="info"
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

 

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}


