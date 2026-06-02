// Cloudflare Pages Function: avvia il flusso OAuth con GitHub
export async function onRequest(context) {
  const { env } = context;
  const clientId = env.GITHUB_CLIENT_ID;
  const url = new URL(context.request.url);
  const redirectUri = `${url.origin}/api/callback`;
  const provider = "github";
  const scope = "repo"; // accesso al repo per salvare i contenuti
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${provider}`;
  return Response.redirect(authUrl, 302);
}
