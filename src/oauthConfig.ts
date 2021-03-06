const authEndpoint = 'https://accounts.spotify.com/authorize';

const scopes = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'ugc-image-upload',
  'playlist-modify-public',
  'playlist-modify-private'
];

export const getAuthorizeHref = (): string => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;
}
