// Cloudflare Pages Function: callback OAuth, restituisce il token a Decap CMS
export async function onRequest(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (!code) return new Response("Missing code", { status: 400 });

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code: code,
    }),
  });
  const data = await tokenRes.json();
  const token = data.access_token;
  const provider = "github";

  // Pagina che comunica il token alla finestra del CMS e si chiude
  const result = token
    ? `success:${JSON.stringify({ token, provider })}`
    : `error:${JSON.stringify(data)}`;

  const html = `<!doctype html><html><body><script>
  (function(){
    function send(status, msg){
      window.opener && window.opener.postMessage(
        "authorization:${provider}:" + status + ":" + msg, "*");
    }
    var t = ${JSON.stringify(token || "")};
    if (t) {
      // handshake con Decap: prima un messaggio "in attesa", poi il token
      window.addEventListener("message", function(e){
        send("success", JSON.stringify({ token: t, provider: "${provider}" }));
      }, false);
      window.opener && window.opener.postMessage("authorizing:${provider}", "*");
    } else {
      send("error", JSON.stringify(${JSON.stringify(data)}));
    }
  })();
  </script><p>Login completato, puoi chiudere questa finestra.</p></body></html>`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
