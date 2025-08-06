// src/views/private/AuthResponse.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

export default function AuthResponse() {
  const { instance } = useMsal();      
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    setShouldRedirect(true);
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  return null;
}
