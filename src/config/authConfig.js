
const currentHostname = window.location.hostname;

let determinedRedirectUri;

switch (currentHostname) {
    // --- Production Environment ---
    case 'prr.metro.net':
        determinedRedirectUri = 'https://prr.metro.net/auth-response'; 
        break;

    case 'webappprodtest.metro.net':
        determinedRedirectUri = 'https://webappprodtest.metro.net/auth-response';
        break;
        
    // --- Development Environment ---
    case 'prrdev.metro.net': 
        determinedRedirectUri = 'https://prrdev.metro.net/auth-response'; 
        break;

    // --- Local Development Environment ---
    case 'localhost':
        determinedRedirectUri = 'http://localhost:3000/auth-response'; 
        break;

    // --- Default/Fallback Case ---
    default:
        console.warn(`MSAL config: Unrecognized hostname "${currentHostname}", defaulting redirectUri to localhost.`);
        determinedRedirectUri = 'http://localhost:3000/auth-response';
}

// --- MSAL Configuration Object ---

export const msalConfig = {
    auth: {
        clientId: "0f9167a6-e2bc-47a2-8841-86cbc729f089", 
        authority: "https://login.microsoftonline.com/organizations",
        redirectUri: determinedRedirectUri, 
    },
    cache: {
        cacheLocation: "localStorage", 
        storeAuthStateInCookie: false,
    },

};


export const loginRequest = {
    scopes: ["User.Read"],
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", 
};

