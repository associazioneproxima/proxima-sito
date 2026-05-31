SITO ASSOCIAZIONE PROXIMA — istruzioni
======================================
Apri index.html nel browser. Pagine collegate dal menu.

PAGINE
  index.html ........ Home: hero + Prossimi eventi + sezione Summer League (4 gironi)
  eventi.html ....... Prossimi + Eventi passati (le schede aprono evento.html)
  evento.html ....... Dettaglio evento (locandina, info, iscrizione). Tema colore per evento.
                      Si apre con ?e=CHIAVE  -> gorgo-jam (arancione) / summer-league (blu) / summer-live
  chi-siamo.html .... Chi siamo + team
  archivio.html ..... Locandine (scroll orizzontale) + galleria foto
  trasparenza.html .. Statuto, atto costitutivo, bilancio + C.F.
  contatti.html ..... Form contatti/iscrizioni

AGGIUNGERE UN EVENTO
1. In eventi.html (e/o index.html) copia una scheda <a class="card ..."> e cambia testo.
   Tema colore scheda: classe  t-orange  (arancione)  oppure  t-blue  (blu).  Nessuna classe = neutro.
2. In evento.html, nello <script>, aggiungi una voce all'oggetto EVENTS con una nuova CHIAVE:
     "mia-chiave":{cat:"...",theme:"#ff6a2b",title:"...",when:"...",where:"...",who:"...",
                   desc:["paragrafo 1","paragrafo 2"],cta:"Testo bottone",poster:"img/mia-locandina.jpg"}
3. Fai puntare la scheda a  evento.html?e=mia-chiave

LOGO SUMMER LEAGUE
Metti il file in  img/summer-league-logo.svg  (oppure .png e aggiorna il src nella sezione league di index.html).
Lo spazio tratteggiato si riempie da solo quando il file esiste.

PERSONALIZZARE
- Foto team: chi-siamo.html, sostituisci <div class="ph"><span>Foto</span></div> con <img src="img/..."> 
- Locandine/foto archivio: sostituisci i <div> con <img>
- Locandina dettaglio evento: campo "poster" nello script di evento.html
- Classifiche gironi: righe delle 4 tabelle in index.html
- Colori brand: css/style.css -> :root  (--yellow --violet --orange --grape)
- Font titoli: css/style.css -> :root --display

SOCIAL: aggiorna gli href "#" nel footer (Instagram/Facebook/TikTok) col vostro profilo.
FORM: mostra solo conferma a schermo. Per ricevere le email collega Formspree.
PUBBLICAZIONE: trascina la cartella su https://app.netlify.com/drop
