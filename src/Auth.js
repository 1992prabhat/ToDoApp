import auth0 from 'auth0-js';

const auth0Client = new auth0.WebAuth({
  domain: 'dev-ahdc697s.auth0.com',
  audience: 'https://dev-ahdc697s.auth0.com/userinfo',
  clientID: 'furCM0s4p4qGd6SWjG5J1tSxqcTjKBTd',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'id_token',
  scope: 'openid profile email'
});

export function handleAuthentication() {
  return new Promise((resolve, reject) => {
    auth0Client.parseHash((err, authResult) => {
      if (err) return reject(err);
      if (!authResult || !authResult.idToken) {
        return reject(err);
      }

      const idToken = authResult.idToken;
      const profile = authResult.idTokenPayload;

      const expiresAt = authResult.idTokenPayload.exp * 1000;

      resolve({
        authenticate: true,
        idToken,
        profile,
        expiresAt
      });
    });
  });
}

export function signIn() {
  auth0Client.authorize();
}

export function signOut() {
  auth0Client.logout({
    returnTo: 'hhtp://localhost:3000',
    clientID: 'furCM0s4p4qGd6SWjG5J1tSxqcTjKBTd'
  });
}
