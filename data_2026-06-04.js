/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-04
   Edita este archivo para actualizar el contenido del dashboard.
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-04",
  dateLabel: "04 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$98.40",
  brentChange: "↑3.5% · 3a subida consecutiva · Irán deal 'aburrido' según Trump · Ormuz día 94"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🇺🇦 UCRANIA <strong>DRONES A SAN PETERSBURGO</strong> · terminal petróleo en llamas · foro de Putin · 1.000 km de profundidad" },
  { cls:"t-red",    text:"🛢️ BRENT <strong>$98.40 ↑3.5%</strong> · 3ª subida · Ormuz día 94 · 10 barcos/día vs 95 normal · deal Irán estancado" },
  { cls:"t-gold",   text:"🇺🇸 LOS ÁNGELES <strong>PRATT AL RUNOFF</strong> · Bass 38% vs Pratt 28% · reality TV + Trump → alcaldía · noviembre" },
  { cls:"t-red",    text:"🇺🇸 McCONNELL <strong>CONTRA PULTE</strong> · 'No necesitamos un DNI armado' · Thune también critica · rebelión GOP" },
  { cls:"t-red",    text:"🦠 ÉBOLA <strong>344 CONFIRMADOS</strong> · +23 en 24h · 60 muertes · cepa Bundibugyo sin vacuna · PHEIC activa" },
  { cls:"t-gold",   text:"🇱🇧 LÍBANO <strong>CEASEFIRE FRÁGIL</strong> · reconvocatoria 22 JUN · zonas piloto LAF · violaciones continuas en el sur" },
  { cls:"t-orange", text:"🇮🇷 IRÁN-EEUU <strong>DEAL 'ABURRIDO'</strong> · Trump pierde paciencia · MOU 60 días pendiente · Irán suspendió y reanudó" },
  { cls:"t-orange", text:"🇪🇺 UE MIGRACIÓN <strong>HUBS OFFSHORE APROBADOS</strong> · 5 países negocian con África · detención 2 años · France24: 'lo más duro'" },
  { cls:"t-orange", text:"🇨🇴 COLOMBIA <strong>RUNOFF 21 JUN</strong> · De la Espriella 43.7% vs Cepeda 40.9% · 17 días para el desenlace" },
  { cls:"t-orange", text:"🇸🇩 SUDÁN <strong>LEAN SEASON</strong> · 19.5M en crisis · país con más hambre del mundo · solo 20% financiado" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Decisión del día",
    content: "Ucrania ataca el corazón económico de Rusia: <span class='hl'>drones a 1.000 km alcanzan terminal petrolero en San Petersburgo</span> horas antes del foro de Putin. <span class='hl-red'>Kronstadt (base naval) y fábrica de armas en Tambov también atacados.</span> Rusia dice que derribó 354 drones."
  },
  {
    label: "🎯 Oportunidad exclusiva",
    content: "<span class='hl'>Spencer Pratt confirmado para el runoff de noviembre</span> en Los Ángeles. Estrella de reality TV con endorsement de Trump, al 28%. <span class='hl-red'>El pipeline entretenimiento→política se consolida: Berlusconi, Trump, Zelensky, Pratt.</span>"
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$98.40 ↑3.5%</span> · Ormuz: <span class='hl-red'>día 94, 10 barcos/día</span> · Ébola: <span class='hl-red'>344 (+23/día)</span><br>Pulte: <span class='hl-red'>McConnell critica</span> · Líbano: <span class='hl'>ceasefire → 22 JUN</span> · Deal Irán: <span class='hl-red'>estancado</span>"
  }
],

/* ── VÍDEOS VP PUBLICADOS (NO REPETIR) ───────────────────── */
coveredVideos: [
  "❌ COLOMBIA: FAN de BUKELE y MILEI destroza a la izquierda · 1 JUN · 265K v",
  "❌ JAQUE a IRÁN: Alianza secreta Trump-Eritrea · 26 MAY · 269K v",
  "❌ PÁNICO en el KREMLIN: economía de guerra de Putin colapsa · 15 MAY · 355K v",
  "❌ EEUU vs dependencia de CHINA: la PAX SILICA · 13 MAY · 141K v",
  "❌ ¿FIN de NETANYAHU? Error estratégico en Irán · 12 MAY · 152K v",
  "❌ TRUMP rompe la OTAN: su peor error · 6 MAY · 203K v",
  "❌ EMIRATOS rompe la OPEP: golpe al cártel del petróleo · 29 ABR · 334K v",
  "❌ CHINA decisión extraña sobre IRÁN · 27 ABR · 349K v",
  "❌ ESTADO DE ALERTA en COREA: Irán pone contra cuerdas · 24 ABR · 388K v",
  "❌ 10M de DRONES: plan de Ucrania para Oriente Medio · 16 ABR · 312K v"
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 14 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1 ──────────────────────────────────────────────────── */
{
  title: "Drones ucranianos atacan terminal petrolero en San Petersburgo horas antes del foro económico de Putin",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eu",    text:"EUROPA" }
  ],
  pills: ["1.000+ km de profundidad","Terminal petrolero en llamas","Aeropuerto suspendió vuelos","Kronstadt + fábrica armas Tambov también atacados"],
  why: "Ucrania demuestra que puede golpear la segunda ciudad de Rusia y su infraestructura petrolera crítica durante el evento de prestigio de Putin. Es el ataque más profundo y simbólico de la guerra.",
  viralPct: 95,
  viralCls: "vf-red",
  viralSources: "NPR, CNN, NBC, ABC News, PBS — cobertura masiva como 'humillación a Putin'",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Peter_%26_Paul_fortress_in_SPB_03.jpg?width=800",
  imageAlt: "San Petersburgo, Rusia",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Drones ucranianos atacaron un terminal petrolero en San Petersburgo la noche del 3 de junio, provocando un incendio visible, horas antes de la apertura del Foro Económico Internacional de San Petersburgo (SPIEF), conocido como 'el Davos de Putin'. Los drones volaron más de 1.000 km desde Ucrania. El aeropuerto de San Petersburgo suspendió vuelos brevemente. Zelensky confirmó que también atacaron la base naval de Kronstadt y una planta de armas en la región de Tambov (600 km de Ucrania). El Ministerio de Defensa ruso afirmó haber derribado 354 drones ucranianos durante la noche.",
    context: "El SPIEF es el evento económico de prestigio del Kremlin, donde Putin atrae inversores internacionales (aunque los occidentales no asisten desde 2022). Atacar San Petersburgo durante el foro es un mensaje directo: Rusia no puede proteger ni su segunda ciudad ni su infraestructura petrolera. Ucrania ha intensificado los ataques de largo alcance contra refinerías y terminales para reducir los ingresos petroleros de Rusia.",
    vp: "El ángulo VP no es el ataque sino la vulnerabilidad: Rusia gasta récord en defensa pero no puede proteger San Petersburgo de drones de $50.000. Conexión directa con Putin economía (15 MAY, 354K). El dato de los 354 drones derribados vs los que pasaron es clave. El SPIEF como escenario de la humillación.",
    sources: [
      { headline: "Ukrainian drones strike a St. Petersburg oil terminal ahead of Putin visit", medium: "NPR", date: "2026-06-03", url: "https://www.npr.org/2026/06/03/nx-s1-5844793/ukrainian-drones-hit-st-petersburg", desc: "Crónica del ataque y contexto SPIEF" },
      { headline: "Ukrainian drones strike St. Petersburg, hours before 'Putin's Davos' opens", medium: "CNN", date: "2026-06-03", url: "https://www.cnn.com/2026/06/03/europe/ukraine-drone-attack-russia-st-petersburg-intl-hnk", desc: "Impacto en el aeropuerto y la ciudad" },
      { headline: "Ukrainian drones hit St. Petersburg as key Putin economic forum opens", medium: "ABC News", date: "2026-06-03", url: "https://abcnews.com/International/ukrainian-drones-hit-st-petersburg-key-putin-economic/story?id=133544045", desc: "Kronstadt y Tambov también atacados" }
    ],
    verification: "NPR, CNN, ABC News, NBC, PBS. Zelensky confirmó en redes sociales. Ministerio de Defensa ruso confirmó derribo de drones."
  }
},

/* ── N2 ──────────────────────────────────────────────────── */
{
  title: "Spencer Pratt (reality TV) confirmado para el runoff de noviembre contra Karen Bass por la alcaldía de Los Ángeles",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["Bass 38% · Pratt 28% · Raman 20%","Pratt: The Hills + endorsement Trump","Runoff noviembre","2ª ciudad más grande de EEUU"],
  why: "Un concursante de reality TV con el endorsement de Trump se enfrentará a la incumbente por gobernar la segunda ciudad más grande de EEUU, en el estado más demócrata del país. El pipeline entretenimiento→política se consolida.",
  viralPct: 88,
  viralCls: "vf-orange",
  viralSources: "CNN, NBC, ABC7, NewsNation — cobertura amplia como fenómeno político",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Los_Angeles_City_Hall_2013.jpg?width=800",
  imageAlt: "Ayuntamiento de Los Ángeles",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Los_Angeles,_California.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Con el 39% de los votos contados, Karen Bass lidera con 38%, seguida de Spencer Pratt con 28% y Nithya Raman con 20%. Ningún candidato superará el 50%, por lo que los dos primeros — Bass y Pratt — avanzarán al runoff de noviembre. Pratt, estrella del reality 'The Hills' cuya casa ardió en el incendio de Palisades de 2025, tiene el endorsement de Trump y centró su campaña en crimen, incendios y coste de vida.",
    context: "Es la confirmación del pipeline entretenimiento→política: Berlusconi (TV→primer ministro), Trump (reality→presidente), Zelensky (comedia→presidente), ahora Pratt (reality→posible alcalde de LA). La diferencia: Pratt compite en territorio demócrata profundo. Si gana en noviembre, sería la prueba de que el playbook Trump funciona incluso donde Trump pierde.",
    vp: "El patrón Berlusconi-Trump-Zelensky-Pratt es puro VP. La pregunta: ¿es la democracia representativa compatible con la era del entretenimiento? Datos: Pratt gastó una fracción de lo que Bass, pero las redes sociales igualaron el campo. Conexión con Milei y De la Espriella (outsiders).",
    sources: [
      { headline: "Karen Bass punched her ticket for November. Spencer Pratt is still hoping for his", medium: "CNN", date: "2026-06-03", url: "https://www.cnn.com/2026/06/03/politics/spencer-pratt-karen-bass-los-angeles-mayor", desc: "Resultados y análisis del runoff" },
      { headline: "Los Angeles Mayor Primary 2026 Live Results", medium: "NBC News", date: "2026-06-03", url: "https://www.nbcnews.com/politics/2026-primary-elections/los-angeles-mayor-results", desc: "Resultados en directo con porcentajes" },
      { headline: "1st look at election results in LA mayor race", medium: "ABC7 Los Angeles", date: "2026-06-03", url: "https://abc7.com/live-updates/california-primary-election-2026-voters-decide-key-races-governor-los-angeles-mayor-congressional-districts/19213908/entry/19223955/", desc: "Análisis de primera hora" }
    ],
    verification: "CNN, NBC, ABC7 Los Angeles. Resultados parciales oficiales del condado de Los Ángeles."
  }
},

/* ── N3 ──────────────────────────────────────────────────── */
{
  title: "Brent sube a $98.40 — tercera subida consecutiva mientras Ormuz cumple 94 días paralizado",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eco",   text:"ECONOMÍA" }
  ],
  pills: ["Brent $98.40 ↑3.5%","3ª subida consecutiva","Ormuz día 94: 10 barcos/día vs 95","Deal Irán estancado: Trump dice 'aburrido'"],
  why: "El petróleo se acerca a $100 por tercera sesión consecutiva. La causa: Ormuz sigue paralizado (día 94) y Trump perdió paciencia con las negociaciones ('aburrido'). Si el deal falla, $100+ es inevitable.",
  viralPct: 85,
  viralCls: "vf-orange",
  viralSources: "Fortune, TradingEconomics, World Oil — datos de mercado + análisis Ormuz",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oil_platform_P-51_(Brazil).jpg?width=800",
  imageAlt: "Plataforma petrolera",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Crude_oil_prices_since_1861.png?width=800",
  imageCredit: "Petrobras / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El Brent subió un 3.5% hasta $98.40 el miércoles 3 de junio, marcando la tercera subida consecutiva. Fortune reportó $101.36 durante la sesión del martes como pico intradía. La subida se debe a la incertidumbre sobre el deal Irán-EEUU: Trump dijo que las negociaciones 'se estaban poniendo muy aburridas' y que no le importa si Irán las suspende. Ormuz cumple 94 días de parálisis con solo 10 barcos/día transitando (vs 95 normal).",
    context: "El Brent ha recuperado terreno tras caer un 20% desde el pico de 2026 por optimismo sobre un acuerdo. Pero cada vez que el deal parece más lejano, el petróleo sube. La clave sigue siendo Ormuz: mientras las navieras no vuelvan (exigen garantías que no existen), la prima geopolítica se mantiene. Trump perdiendo paciencia es una señal alcista para el petróleo.",
    vp: "Dato esencial para contextualizar todas las propuestas de Irán/Ormuz. El Brent cerca de $100 tiene impacto directo en gasolina en España y Latam. Conexión con propuesta del estrecho fantasma.",
    sources: [
      { headline: "Current price of oil as of June 3, 2026", medium: "Fortune", date: "2026-06-03", url: "https://fortune.com/article/price-of-oil-06-03-2026/", desc: "Precio y análisis del día" },
      { headline: "Strait of Hormuz traffic remains limited despite peace-deal talks", medium: "World Oil", date: "2026-06-02", url: "https://worldoil.com/news/2026/6/2/strait-of-hormuz-traffic-remains-limited-despite-peace-deal-talks/", desc: "Datos de tráfico Ormuz" },
      { headline: "Brent crude oil - Price - Chart", medium: "Trading Economics", date: "2026-06-04", url: "https://tradingeconomics.com/commodity/brent-crude-oil", desc: "Datos de mercado en tiempo real" }
    ],
    verification: "Fortune, TradingEconomics, World Oil. Datos de mercado verificados."
  }
},

/* ── N4 ──────────────────────────────────────────────────── */
{
  title: "McConnell y Thune critican a Pulte como DNI: 'No necesitamos un DNI armado, necesitamos profesionales'",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["Thune: 'necesitamos profesionales'","McConnell: 'falta experiencia'","Warner: 'peligroso'","210 días como interino sin confirmación"],
  why: "Cuando el propio partido de Trump critica su nombramiento de inteligencia, la señal es clara: la captura institucional ha llegado demasiado lejos incluso para los republicanos. Pulte puede servir 210 días sin confirmación del Senado.",
  viralPct: 86,
  viralCls: "vf-orange",
  viralSources: "The Hill, NPR, PBS, CNN — rebelión intrapartidista cubierta ampliamente",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_Office_of_the_Director_of_National_Intelligence.svg?width=800",
  imageAlt: "Sello del DNI",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=800",
  imageCredit: "US Government / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La resistencia republicana al nombramiento de Bill Pulte como director interino de inteligencia nacional creció el 3 de junio. El líder de la mayoría del Senado, John Thune, declaró: 'No necesitamos un DNI armado, necesitamos profesionales'. Mitch McConnell advirtió que Pulte 'carece de la experiencia' para el puesto. El senador Mark Warner (demócrata) lo llamó 'peligroso' en NPR. Pulte puede servir como interino 210 días sin confirmación del Senado.",
    context: "Es raro que el propio partido del presidente critique un nombramiento de inteligencia públicamente. Thune y McConnell representan el ala institucionalista del GOP. La preocupación principal: Pulte ya usó registros de hipotecas para perseguir a opositores de Trump desde la FHFA. Ahora tendrá acceso a las 18 agencias de inteligencia. Schumer lo llamó 'matón partidista'.",
    vp: "El ángulo VP es la rebelión interna: cuando tu propio partido dice que has ido demasiado lejos. Conexión con captura institucional (Erdogan/Orbán). La pregunta: ¿puede el Senado frenarlo si tiene 210 días sin necesitar confirmación?",
    sources: [
      { headline: "GOP senators balk at Donald Trump's pick of Bill Pulte to head national intelligence", medium: "The Hill", date: "2026-06-03", url: "https://thehill.com/homenews/senate/5906007-republican-bewilderment-trump-dni/", desc: "Reacciones del Senado republicano" },
      { headline: "Mitch McConnell warns Bill Pulte lacks experience to serve as DNI", medium: "The Hill", date: "2026-06-03", url: "https://thehill.com/homenews/senate/5908231-mcconnell-pulte-dni-qualifications/", desc: "McConnell cuestiona las cualificaciones" },
      { headline: "Warner questions Trump pick Bill Pulte for acting intelligence chief", medium: "NPR", date: "2026-06-03", url: "https://www.npr.org/2026/06/03/nx-s1-5844285/sen-mark-warner-on-bill-pulte-being-named-acting-national-intelligence-director", desc: "Warner: contexto y riesgos de seguridad" }
    ],
    verification: "The Hill, NPR, PBS, CNN. Declaraciones de Thune y McConnell documentadas en múltiples fuentes."
  }
},

/* ── N5 ──────────────────────────────────────────────────── */
{
  title: "Ébola sube a 344 confirmados (+23 en 24h) — IRC advierte que el brote es 'mucho peor' de lo reportado",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-af",    text:"ÁFRICA" }
  ],
  pills: ["344 confirmados (+23 en 24h)","60 muertes confirmadas","116 sospechosos","Cepa Bundibugyo: sin vacuna"],
  why: "23 casos nuevos en un solo día es la mayor subida diaria del brote. IRC dice que solo se rastrea al 20% de contactos. PHEIC declarada. Si la tasa de crecimiento se mantiene, superará 500 casos en 7-10 días.",
  viralPct: 80,
  viralCls: "vf-orange",
  viralSources: "CDC, WHO, ECDC, NPR — cobertura institucional creciente",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_em.png?width=800",
  imageAlt: "Virus del Ébola al microscopio",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_em.png?width=800",
  imageCredit: "CDC / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El brote de Ébola en RDC sumó 23 nuevos casos confirmados en 24 horas, elevando el total a 344 confirmados, 60 muertes y 116 sospechosos. La cepa Bundibugyo no tiene vacuna ni tratamiento específico. Uganda reporta 15 casos y 1 muerte. EEUU implementó screening en 4 aeropuertos para pasajeros de RDC, Sudán del Sur y Uganda. La ECDC mantiene riesgo 'bajo' para Europa pero 'moderado' para viajeros.",
    context: "La tasa de 23 casos/día es la más alta del brote. IRC estimó que solo el 20% de los contactos están siendo localizados, lo que sugiere que el brote es mucho mayor de lo reportado oficialmente. 5 personas se han recuperado (las primeras altas). La OMS declaró PHEIC el 17 de mayo.",
    vp: "Tema para vigilar. Si llega a 500 casos o se confirma uno fuera de África, pasa a propuesta. El ángulo VP: una epidemia en zona de guerra donde la infraestructura sanitaria está destruida.",
    sources: [
      { headline: "Ebola Outbreak: Current Situation", medium: "CDC", date: "2026-06-03", url: "https://www.cdc.gov/ebola/situation-summary/index.html", desc: "Datos actualizados del CDC" },
      { headline: "Ebola disease outbreak in the DRC and Uganda", medium: "ECDC", date: "2026-06-03", url: "https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda", desc: "Evaluación de riesgo para Europa" },
      { headline: "Confirmed Ebola cases in Congo near 300 as survivors describe recoveries", medium: "NPR", date: "2026-06-01", url: "https://www.npr.org/2026/06/01/g-s1-125143/ebola-updates", desc: "Testimonios de supervivientes" }
    ],
    verification: "CDC, ECDC, WHO, NPR. Datos del Ministerio de Salud de RDC."
  }
},

/* ── N6 ──────────────────────────────────────────────────── */
{
  title: "Israel y Líbano acuerdan reconvocar negociaciones el 22 de junio — zonas piloto para el ejército libanés",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" }
  ],
  pills: ["Reconvocatoria: 22 JUN","Zonas piloto: LAF control exclusivo","Sin actores no estatales (Hezbollah)","Alto el fuego sigue frágil"],
  why: "El acuerdo de crear 'zonas piloto' donde solo el ejército libanés opere es la primera concesión real de Hezbollah sobre control territorial. Si funciona, podría ser el modelo para el sur. Si falla, la guerra se reanuda.",
  viralPct: 82,
  viralCls: "vf-orange",
  viralSources: "CNN, Al Jazeera, Wikipedia compilación — seguimiento continuo",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort1982.jpg?width=800",
  imageAlt: "Castillo de Beaufort, sur del Líbano",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lebanon.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Israel y Líbano acordaron reconvocar las negociaciones políticas y de seguridad la semana del 22 de junio, con el objetivo de alcanzar un acuerdo integral. Los dos lados acordaron avanzar rápidamente en la creación de 'zonas piloto' donde las Fuerzas Armadas Libanesas (LAF) tomarán control exclusivo del territorio, excluyendo a todos los actores no estatales (es decir, Hezbollah). El alto el fuego anunciado el 1 de junio sigue vigente pero frágil, con violaciones reportadas en el sur.",
    context: "Las 'zonas piloto' son la prueba de concepto: si el ejército libanés puede mantener el orden sin Hezbollah en áreas limitadas, el modelo se podría expandir. Pero Hezbollah controla el sur de facto desde 2000 y cualquier concesión territorial real es un precedente peligroso para el grupo. Israel mantiene tropas más allá del río Zaharani.",
    vp: "Las zonas piloto son un concepto nuevo y tienen precedentes históricos interesantes (zonas de seguridad Israel 1982-2000, UNIFIL). Conexión con la propuesta de Líbano del radar anterior. VP cubrió Eritrea/Mar Rojo (26 MAY). Ángulo: ¿puede un ejército débil (LAF) reemplazar a una milicia fuerte (Hezbollah)?",
    sources: [
      { headline: "Israel and Lebanon agree to implement ceasefire, contingent on Hezbollah actions", medium: "CNN", date: "2026-06-02", url: "https://www.cnn.com/2026/06/02/world/live-news/iran-trump-israel-lebanon-war-intl-hnk", desc: "Acuerdo de reconvocatoria y zonas piloto" },
      { headline: "Iran war updates: Tehran ponders US deal; Lebanon-Israel talks under way", medium: "Al Jazeera", date: "2026-06-02", url: "https://www.aljazeera.com/news/liveblog/2026/6/2/iran-war-live-trump-talks-to-hezbollah-israel-as-lebanon-fighting-surges", desc: "Contexto negociaciones Líbano dentro de la guerra Irán" },
      { headline: "2026 Israel-Lebanon ceasefire", medium: "Wikipedia", date: "2026-06-04", url: "https://en.wikipedia.org/wiki/2026_Israel%E2%80%93Lebanon_ceasefire", desc: "Cronología del alto el fuego" }
    ],
    verification: "CNN live updates, Al Jazeera live blog. Acuerdo documentado por múltiples fuentes."
  }
},

/* ── N7 ──────────────────────────────────────────────────── */
{
  title: "Trump dice que negociaciones con Irán 'se ponen aburridas' mientras MOU de 60 días sigue sin firmarse",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["Trump: 'getting very boring'","MOU 60 días pendiente","Irán suspendió y reanudó","Ormuz, nuclear, sanciones: todo abierto"],
  why: "Trump perdiendo paciencia es la peor señal posible para un acuerdo del que depende el 20% del petróleo mundial. Si abandona las negociaciones, Ormuz sigue cerrado y el Brent supera $100.",
  viralPct: 90,
  viralCls: "vf-red",
  viralSources: "CNBC, CNN, Time, CBS — declaraciones directas de Trump ampliamente cubiertas",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Khamenei_crop.jpg?width=800",
  imageAlt: "Liderazgo iraní",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Trump declaró a CNBC que no le importa si Irán suspende las negociaciones y que el proceso 'empezaba a ponerse muy aburrido'. Esto contrasta con su afirmación del día anterior de que un deal era posible 'en la próxima semana'. El MOU de 60 días — que incluiría cese de violencia, reapertura de Ormuz y marco nuclear — sigue sin firmarse. Irán suspendió las negociaciones por la ofensiva de Israel en Líbano, pero las reanudó bajo presión.",
    context: "La declaración de 'aburrimiento' es consistente con el patrón Trump de negociación: presión máxima, amenaza de abandono, luego deal de último momento. Pero cada día sin acuerdo es un día más con Ormuz cerrado y el petróleo subiendo. Los mercados interpretan 'aburrido' como 'no hay deal pronto' y el Brent sube.",
    vp: "La psicología de negociación de Trump como variable geopolítica. VP trató Netanyahu/Irán (12 MAY). El ángulo: ¿qué pasa cuando el negociador más importante del mundo se aburre de la negociación más importante del mundo?",
    sources: [
      { headline: "Trump insists talks continue after Iran suspended negotiations", medium: "CNN", date: "2026-06-01", url: "https://www.cnn.com/2026/06/01/world/live-news/iran-trump-lebanon-war-news", desc: "Contradicciones de Trump sobre el estado de las negociaciones" },
      { headline: "Trump Says It's Time 'One Way or Another' for Iran to Make a Deal", medium: "Time", date: "2026-06-02", url: "https://time.com/article/2026/06/02/trump-netanyahu-crazy-lebanon-hezbollah-ceasefire-iran-us-peace-deal/", desc: "Impaciencia de Trump y presión a Netanyahu" },
      { headline: "US-Iran 60-day proposal: What we know", medium: "Al Jazeera", date: "2026-05-29", url: "https://www.aljazeera.com/news/2026/5/29/us-iran-60-day-proposal-what-we-know", desc: "Contenido del MOU pendiente" }
    ],
    verification: "CNBC (declaración directa Trump), CNN, Time, Al Jazeera. Múltiples fuentes independientes."
  }
},

/* ── N8 ──────────────────────────────────────────────────── */
{
  title: "Ormuz cumple 94 días paralizado: 10 barcos/día vs 95 normal — navieras siguen sin volver",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" },
    { cls:"tag-eco",   text:"ECONOMÍA" }
  ],
  pills: ["Día 94 de parálisis","10 barcos/día vs 95 normal","25% petróleo marítimo global","Navieras exigen paz real, no alto el fuego"],
  why: "Casi 100 días con el chokepoint más importante del mundo operando al 10%. Las navieras no volverán sin un acuerdo de paz real. Cada día que pasa, las rutas alternativas se consolidan y Ormuz pierde relevancia permanente.",
  viralPct: 90,
  viralCls: "vf-red",
  viralSources: "NBC data tracker, World Oil, Gulf News, CSIS — datos exclusivos de tráfico",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_hormuz_full.jpg?width=800",
  imageAlt: "Estrecho de Ormuz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "NASA / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El Estrecho de Ormuz cumple 94 días efectivamente cerrado al tráfico comercial. NBC News mantiene un tracker en tiempo real que muestra solo 10 barcos/día transitando, frente a los 95 normales. Irán declaró el estrecho 'abierto' el 17 de abril, pero las navieras se niegan a volver sin garantías reales. El 25% del comercio marítimo de petróleo y el 20% del GNL global pasaban por Ormuz antes del conflicto.",
    context: "La parálisis es ahora estructural: las aseguradoras marítimas clasifican Ormuz como zona de guerra, lo que hace prohibitivo el seguro. Sin seguro, los armadores no pueden operar. Trump dice que se reabre pero las navieras ven misiles cada semana. El riesgo a largo plazo: si las rutas alternativas (Cabo de Buena Esperanza) se consolidan, Ormuz podría perder relevancia permanente incluso tras un acuerdo de paz.",
    vp: "Propuesta dorada del radar. El estrecho fantasma: 94 días, 10 vs 95 barcos, $98 de Brent. VP cubrió Eritrea/Mar Rojo (chokepoints, 192K). Ormuz es el chokepoint definitivo.",
    sources: [
      { headline: "Tracking ship traffic through the Strait of Hormuz", medium: "NBC News", date: "2026-06-03", url: "https://www.nbcnews.com/data-graphics/strait-of-hormuz-ports-traffic-trump-us-iran-war-rcna331507", desc: "Tracker en tiempo real con datos Kpler" },
      { headline: "Strait of Hormuz traffic remains limited despite peace-deal talks", medium: "World Oil", date: "2026-06-02", url: "https://worldoil.com/news/2026/6/2/strait-of-hormuz-traffic-remains-limited-despite-peace-deal-talks/", desc: "Análisis de por qué las navieras no vuelven" },
      { headline: "The Strait of Hormuz in 8 Charts", medium: "CSIS", date: "2026-05-28", url: "https://www.csis.org/analysis/strait-hormuz-8-charts", desc: "Análisis visual del think tank CSIS" }
    ],
    verification: "NBC News tracker en tiempo real, World Oil, CSIS. Datos de Kpler (investigación marítima)."
  }
},

/* ── N9 ──────────────────────────────────────────────────── */
{
  title: "UE aprueba la ley migratoria 'más dura de su historia': hubs offshore, detención 2 años, biometría forzada",
  tags: [
    { cls:"tag-ayer",  text:"AYER" },
    { cls:"tag-eu",    text:"EUROPA" }
  ],
  pills: ["Return hubs en terceros países","Detención hasta 2 años","€420M fondo compartido","France24: 'lo más duro que ha hecho la UE'"],
  why: "France24 lo califica como 'the toughest EU migration law to date'. La UE copia el modelo offshore que ella misma condenó a Australia. 5 países europeos ya negocian con estados africanos.",
  viralPct: 87,
  viralCls: "vf-orange",
  viralSources: "France24, Euronews, WaPo, The National, ImpACT — cobertura como 'giro histórico'",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg?width=800",
  imageAlt: "Parlamento Europeo",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=800",
  imageCredit: "Diliff / Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La UE aprobó su ley migratoria más restrictiva: centros de retorno ('return hubs') en terceros países, detención ampliada de 6 meses a 2 años, confiscación de propiedades, recolección biométrica forzada, registros domiciliarios y sanciones penales por no cooperar. Alemania, Países Bajos, Austria, Dinamarca y Grecia ya negocian con países africanos para abrir centros. France24 la califica como 'the toughest crackdown yet'. Amnistía Internacional denuncia 'cárceles offshore y perfilamiento racial'.",
    context: "El modelo copia el sistema australiano de Nauru/Manus Island — que Australia misma abandonó parcialmente tras ser declarado inhumano por la ONU. La presión electoral de la extrema derecha fuerza a partidos centristas a adoptar sus políticas. La paradoja: la UE que creó la Declaración Universal de Derechos Humanos ahora construye cárceles para migrantes en África.",
    vp: "Propuesta fuerte para VP: la UE copia lo que condenó. Datos de France24, Euronews, WaPo. Gap en español: la competencia cubre inmigración pero no la comparación con el modelo australiano ni el giro ideológico.",
    sources: [
      { headline: "Toughest EU migration law to date clears path for offshore return hubs", medium: "Euronews", date: "2026-06-01", url: "https://www.euronews.com/my-europe/2026/06/01/eu-set-to-back-return-hubs-in-toughest-migration-crackdown-yet", desc: "La ley más dura de la historia de la UE" },
      { headline: "EU agrees deal for deporting migrants to third-country 'return hubs'", medium: "France 24", date: "2026-06-02", url: "https://www.france24.com/en/europe/20260602-eu-agrees-deal-for-deporting-migrants-to-third-country-return-hubs", desc: "Detalles del acuerdo" },
      { headline: "EU's New Deportation Framework: Practical Fix or Human-Rights Shortcut?", medium: "ImpACT International", date: "2026-06-03", url: "https://impactpolicies.org/news/939/eus-new-deportation-framework-practical-fix-or-humanrights-shortcut", desc: "Análisis crítico de derechos humanos" }
    ],
    verification: "France24, Euronews, ImpACT, Amnistía Internacional. Texto legislativo público."
  }
},

/* ── N10 ─────────────────────────────────────────────────── */
{
  title: "Rusia lanzó 73 misiles (8 Zircon) + 656 drones contra Ucrania — Zelensky pide defensas antimisiles a Occidente",
  tags: [
    { cls:"tag-ayer",  text:"AYER" },
    { cls:"tag-eu",    text:"EUROPA" }
  ],
  pills: ["73 misiles + 656 drones","8 Zircon hipersónicos (Mach 8)","22+ muertos · 138 heridos","Zelensky: 'si no nos protegen, seguirán'"],
  why: "El mayor uso de misiles hipersónicos Zircon en una noche. Ucrania responde atacando San Petersburgo. La escalada tiene dos direcciones: Rusia satura defensas, Ucrania golpea la retaguardia. Nadie está ganando.",
  viralPct: 88,
  viralCls: "vf-orange",
  viralSources: "CBS News, NPR, PBS, Al Jazeera — cobertura masiva",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kyiv_after_Russian_shelling,_2022-10-10_(01).jpg?width=800",
  imageAlt: "Kyiv tras ataque con misiles",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Rusia lanzó 73 misiles (incluyendo 8 Zircon hipersónicos) y 656 drones contra Ucrania la noche del 2 de junio. Ucrania interceptó 40 misiles y 602 drones. Al menos 22 personas murieron y 138 resultaron heridas. Kyiv fue el objetivo principal — 40.000 personas se refugiaron en el metro. Zelensky apeló a EEUU y Europa: 'si Ucrania no es protegida de misiles balísticos, los ataques continuarán'.",
    context: "Es la escalada cruzada más intensa: Rusia ataca con hipersónicos, Ucrania responde golpeando San Petersburgo 24 horas después. Los Zircon viajan a Mach 8 — ningún sistema europeo puede interceptarlos de forma fiable. Europa gasta $864B en defensa pero no tiene defensa anti-hipersónica efectiva.",
    vp: "Doble ángulo: los Zircon como mensaje a la OTAN + la respuesta ucraniana a San Petersburgo. VP cubrió Putin economía (15 MAY, 354K). El ángulo de vulnerabilidad rusa (drones de $50K golpean infraestructura petrolera) y vulnerabilidad europea (Zircon sin defensa) son complementarios.",
    sources: [
      { headline: "Major Russian missile, drone attack on Ukraine kills at least 22", medium: "CBS News", date: "2026-06-02", url: "https://www.cbsnews.com/news/russia-ukraine-war-major-attacks-missile-drone-kill-several-wound-dozens/", desc: "Escala del ataque y víctimas" },
      { headline: "Scenes from the aftermath of Russia's latest massive attack on Kyiv", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/sections/the-picture-show/2026/06/02/nx-s1-5844159/ukraine-kyiv-russia-drone-missile-strikes", desc: "Imágenes y testimonio desde Kyiv" },
      { headline: "Massive Russian attack on Kyiv kills 22 people", medium: "PBS", date: "2026-06-02", url: "https://www.pbs.org/newshour/world/massive-russian-attack-on-kyiv-and-other-ukrainian-cities-kills-22-people-officials-say-as-moscow-escalates-fighting", desc: "Apelación de Zelensky" }
    ],
    verification: "CBS, NPR, PBS, Al Jazeera. Ministerio del Interior ucraniano. CSIS tracker."
  }
},

/* ── N11 ─────────────────────────────────────────────────── */
{
  title: "Colombia: De la Espriella y Cepeda se preparan para runoff del 21 de junio — 17 días para el desenlace",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-latam", text:"LATAM" }
  ],
  pills: ["De la Espriella 43.74%","Cepeda 40.90%","2ª vuelta 21 JUN","Patrón Bukele-Milei continental"],
  why: "El tic-tac del runoff colombiano es una oportunidad editorial perfecta: 17 días para publicar un video antes del resultado. El patrón Bukele-Milei-De la Espriella puede ser el tema de mayor alcance en Latam.",
  viralPct: 82,
  viralCls: "vf-orange",
  viralSources: "Infobae, El Tiempo, Time, Al Jazeera, CNN — cobertura masiva en hispano y anglosajón",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=800",
  imageAlt: "Política colombiana",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "A 17 días del runoff colombiano (21 JUN), Abelardo de la Espriella (43.74%) se enfrenta a Iván Cepeda (40.90%). De la Espriella es un outsider conservador sin experiencia en cargo público, admirador de Trump y Bukele. Cepeda cuestiona los resultados de la primera vuelta. El expresidente Gaviria pidió respeto institucional a Petro.",
    context: "Ventana editorial perfecta: 17 días para publicar antes del desenlace. El patrón continental Bukele-Milei-De la Espriella es el análisis que nadie más está haciendo. VP tiene el video más exitoso sobre Bukele (6.59M views).",
    vp: "VP cubrió Colombia/grupos armados (~3 MAY). El ángulo Bukele-Milei-De la Espriella conecta con el mayor éxito de VP. Timing: publicar 10-14 días antes del runoff para máxima relevancia.",
    sources: [
      { headline: "Colombia Presidential Election Heads to Run-Off", medium: "Time", date: "2026-06-01", url: "https://time.com/article/2026/06/01/colombia-elections-explainer-abelardo-de-la-espriella-ivan-cepeda-runoff/", desc: "Explainer completo" },
      { headline: "Cepeda, de la Espriella advance in Colombia's presidential election", medium: "Al Jazeera", date: "2026-05-31", url: "https://www.aljazeera.com/news/2026/5/31/cepeda-de-la-espriella-advance-in-colombias-presidential-election", desc: "Resultados y contexto" },
      { headline: "Colombian presidency goes to runoff election", medium: "CNN", date: "2026-05-31", url: "https://www.cnn.com/2026/05/31/americas/colombia-runoff-espriella-cepeda-latam-intl", desc: "Impacto regional" }
    ],
    verification: "Time, Al Jazeera, CNN. Registraduría Nacional de Colombia."
  }
},

/* ── N12 ─────────────────────────────────────────────────── */
{
  title: "Zapatero: declaración aplazada al 17-18 de junio — 13 días para el momento clave del caso Plus Ultra",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-es",    text:"ESPAÑA" }
  ],
  pills: ["Declaración: 17-18 JUN","3 delitos imputados","Correos oficiales como prueba","13 días para publicar antes"],
  why: "Primera imputación de un expresidente español. Ventana editorial: 13 días para publicar un video profundo antes de la declaración. Si los correos revelan la red Venezuela-PdVSA-CLAP, el caso salta a escándalo internacional.",
  viralPct: 84,
  viralCls: "vf-orange",
  viralSources: "The Objective, Infobae, Reporte Latam — dominante en medios hispanos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_la_Moncloa.jpg?width=800",
  imageAlt: "Palacio de la Moncloa",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La declaración de Zapatero ante la Audiencia Nacional sigue programada para el 17-18 de junio. Está imputado por organización criminal, tráfico de influencias y falsedad documental en relación con el rescate de Plus Ultra (€53M). Los correos oficiales del expresidente y sus hijas fueron autorizados como prueba.",
    context: "VP cubrió la imputación (~22 MAY). El ángulo nuevo: la dimensión geopolítica de la red Venezuela-PdVSA-CLAP-España. Timing perfecto: publicar 7-10 días antes para máxima relevancia.",
    vp: "Ventana editorial de 13 días. El ángulo VP: no es corrupción española sino red geopolítica de influencia venezolana en Europa.",
    sources: [
      { headline: "La Audiencia Nacional imputa a Zapatero por Plus Ultra", medium: "The Objective", date: "2026-05-19", url: "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/", desc: "Imputación y delitos" },
      { headline: "Audiencia Nacional aplaza declaración de Zapatero", medium: "Reporte Latam", date: "2026-05-26", url: "https://reportelatinoamerica.com/2026/05/26/audiencia-nacional-aplaza-declaracion-de-zapatero-en-el-caso-plus-ultra-hasta-mediados-de-junio/", desc: "Aplazamiento" },
      { headline: "Última hora del caso Zapatero", medium: "Infobae España", date: "2026-05-26", url: "https://www.infobae.com/espana/2026/05/26/ultima-hora-del-caso-zapatero-novedades-del-sumario-de-plus-ultra-la-caja-fuerte-del-expresidente-y-reacciones-en-directo/", desc: "Sumario y caja fuerte" }
    ],
    verification: "The Objective, Infobae, Reporte Latam. Audiencia Nacional."
  }
},

/* ── N13 ─────────────────────────────────────────────────── */
{
  title: "Sudán: lean season activa — 19.5M en crisis alimentaria, el país con más hambre del mundo",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-af",    text:"AFRICA" }
  ],
  pills: ["19.5M en crisis alimentaria","825K niños malnutrición severa","Solo 20% financiado","Hambruna confirmada en Al Fasher, Kadugli"],
  why: "Sudán es el país con más hambre del mundo y acaba de entrar en los 4 meses más duros (junio-septiembre). Solo el 20% del plan humanitario está financiado. Si la tendencia continúa, será la peor hambruna del siglo XXI.",
  viralPct: 62,
  viralCls: "vf-orange",
  viralSources: "WFP, FAO, UNICEF, Action Against Hunger — cobertura institucional",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Uganda_Refugee_Settlements_Emergency_Food_Distribution_(39910884580).jpg?width=800",
  imageAlt: "Distribución de alimentos WFP",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Sudan.svg?width=800",
  imageCredit: "WFP / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Sudán entra en la lean season con 19.5M de personas en crisis alimentaria. 825.000 niños con malnutrición severa. Hambruna confirmada en Al Fasher y Kadugli. Solo el 20% del plan humanitario 2026 está financiado. La guerra civil RSF vs ejército entra en su cuarto año sin perspectiva de paz.",
    context: "Sudán es oficialmente el país con más hambre del mundo. 9M de desplazados. 40% de hospitales inactivos. La comunidad internacional no responde proporcionalmente.",
    vp: "VP no ha cubierto Sudán recientemente. Gap enorme en español. Ángulo: la mayor crisis humanitaria del mundo que nadie cubre.",
    sources: [
      { headline: "Risk of Famine persists: 19.5 million face acute food insecurity", medium: "WFP/FAO/UNICEF", date: "2026-05-15", url: "https://www.fao.org/newsroom/detail/risk-of-famine-persists-as-nearly-19.5-million-people-face-acute-food-insecurity-in-sudan/en", desc: "Comunicado conjunto" },
      { headline: "Children in Sudan have endured 1,000 days of agony", medium: "UNICEF", date: "2026-05-28", url: "https://www.unicef.org/press-releases/children-sudan-have-endured-1000-days-agony", desc: "1.000 días de crisis" },
      { headline: "Sudan Becomes the World's Hungriest Country", medium: "Action Against Hunger", date: "2026-05-20", url: "https://www.actionagainsthunger.org/press-releases/sudan-becomes-the-worlds-hungriest-country-as-famine-spreads-to-two-new-areas-of-darfur/", desc: "País con más hambre" }
    ],
    verification: "WFP, FAO, UNICEF comunicado conjunto. IPC datos."
  }
},

/* ── N14 ─────────────────────────────────────────────────── */
{
  title: "Pulte mantiene ambos cargos: DNI interino + FHFA + Fannie Mae + Freddie Mac — concentración de poder sin precedentes",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["DNI: 18 agencias de inteligencia","FHFA: $8.5T en hipotecas","Fannie Mae + Freddie Mac","Simultanear ambos cargos: sin precedentes"],
  why: "Un hombre controla simultáneamente las hipotecas de millones de estadounidenses Y las 18 agencias de espionaje. Ya usó los datos hipotecarios contra opositores. Ahora tiene acceso a vigilancia masiva además.",
  viralPct: 85,
  viralCls: "vf-orange",
  viralSources: "CNBC, WaPo, PBS, The Hill — cobertura como concentración de poder alarmante",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_Office_of_the_Director_of_National_Intelligence.svg?width=800",
  imageAlt: "Sello del DNI",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=800",
  imageCredit: "US Government / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Bill Pulte mantendrá simultáneamente los cargos de director interino de inteligencia nacional (DNI), director de la FHFA y presidente de Fannie Mae y Freddie Mac. La FHFA supervisa $8.5 billones en hipotecas. Como DNI, tendrá acceso a las 18 agencias de inteligencia. PBS detalla que Pulte puede servir 210 días como interino sin necesidad de confirmación del Senado.",
    context: "La concentración de poder es sin precedentes: datos hipotecarios de millones de personas + inteligencia de señales, satélites, operaciones encubiertas. Pulte ya demostró que está dispuesto a usar datos institucionales contra opositores (refirió a la fiscalía a opositores de Trump usando registros de la FHFA).",
    vp: "El ángulo concentración de poder es VP puro. Comparativa: ¿en qué otro país democrático una persona controla simultáneamente las hipotecas y el espionaje? Conexión con Erdogan (vaciado de MIT), Orbán (control de servicios). El dato de los 210 días sin confirmación es clave.",
    sources: [
      { headline: "Pulte appointment gives a Trump attack dog access to intelligence 'crown jewels'", medium: "CNBC", date: "2026-06-02", url: "https://www.cnbc.com/2026/06/02/bill-pulte-dni-tulsi-gabbard.html", desc: "Acceso a las 'joyas de la corona'" },
      { headline: "What to know about Trump's controversial pick of Bill Pulte", medium: "PBS", date: "2026-06-03", url: "https://www.pbs.org/newshour/show/what-to-know-about-trumps-controversial-pick-of-bill-pulte-for-acting-spy-chief", desc: "Los 210 días sin confirmación" },
      { headline: "Trump names controversial housing official to be acting DNI", medium: "CNN", date: "2026-06-02", url: "https://www.cnn.com/2026/06/02/politics/bill-pulte-intelligence-director-trump", desc: "Perfil y controversias" }
    ],
    verification: "CNBC, PBS, CNN, The Hill. Múltiples fuentes independientes."
  }
}

],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 7 temas
═════════════════════════════════════════════════════════════ */
proposals: [

/* ── P1 GOLDEN ───────────────────────────────────────────── */
{
  golden: true,
  number: "P1",
  flag: "",
  title: "El estrecho fantasma: 94 días, $98 de Brent y Trump 'aburrido' — por qué Ormuz no se reabrirá aunque haya paz",
  tags: [
    { cls:"tag-me", text:"ORIENTE MEDIO" },
    { cls:"tag-eco", text:"ECONOMÍA" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: NBC tracker, World Oil, CSIS, Fortune — datos exclusivos" },
    { cls:"chip-gap",  text:"📡 Gap ENORME: nadie explica por qué las navieras no vuelven (aseguradoras)" },
    { cls:"chip-vp",   text:"📺 VP: Eritrea/Mar Rojo (192K) — chokepoints funcionan. Ormuz es el definitivo" },
    { cls:"chip-comp", text:"🔍 Competencia: cubren la guerra Irán, NO la parálisis logística con datos" }
  ],
  potText: "EXPLOSIVO", potCls: "pot-fire",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_hormuz_full.jpg?width=1200",
  bannerAlt: "Estrecho de Ormuz",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=1200",
  tesis: "94 días. 10 barcos donde pasaban 95. $98 el barril y subiendo. Trump dice que Ormuz se reabre; las navieras dicen que no. Y la razón es invisible: no son los misiles lo que bloquea el estrecho — son las aseguradoras de Lloyd's. Sin póliza de seguro marítimo, un petrolero no puede zarpar. Y Lloyd's clasifica Ormuz como zona de guerra. Puedes firmar todos los acuerdos de paz que quieras: mientras una hoja de cálculo en Londres diga 'riesgo inaceptable', el 20% del petróleo mundial seguirá secuestrado. Es el poder que ningún portaaviones puede derrotar.",
  fields: [
    { label: "🗞️ La noticia", value: "NBC tracker muestra 10 barcos/día. Día 94 de parálisis. Brent $98.40 (+3.5%, 3ª subida). Trump: negociaciones 'aburridas'. MOU 60 días sin firmar. World Oil confirma que navieras no volverán sin paz real." },
    { label: "🔬 Segunda derivada", value: "El bloqueo real no es militar sino financiero. Las aseguradoras marítimas (Lloyd's, Norwegian War Risk) retiraron cobertura. Sin seguro, los armadores no operan. Un deal de paz no cambia la clasificación de riesgo: hacen falta meses de estabilidad verificada. Ormuz podría seguir paralizado 6-12 meses DESPUÉS de un acuerdo." },
    { label: "❓ Gran pregunta", value: "¿Puede la mayor armada del mundo reabrir un estrecho de 33 km si una hoja de cálculo en Londres dice que no?" },
    { label: "⚔️ El conflicto", value: "Trump (narrativa) vs navieras (realidad). Aseguradoras (riesgo) vs gobiernos (necesidad). Irán (palanca) vs economía global. Rutas alternativas (Cabo Buena Esperanza) vs Ormuz (velocidad)." },
    { label: "⏰ Por qué ahora", value: "Día 94. Brent cerca de $100. Trump pierde paciencia. NBC publica tracker en tiempo real. Si el deal no llega en días, Ormuz supera los 100 días cerrado — cifra simbólica." },
    { label: "📺 VP ya lo trató?", value: "Eritrea/Mar Rojo (26 MAY, 192K). Chokepoints marítimos son tema VP. Ormuz es el chokepoint definitivo y no se ha cubierto con estos datos." },
    { label: "🚀 Motor viral", value: "COBERTURA: NBC tracker, World Oil, CSIS, Fortune. VISUAL: mapas de rutas, barcos, infografías de tráfico. CONFLICTO: narrativa vs datos. AUDIENCIA: gasolina afecta a todos. YOUTUBE: chokepoints funcionan (192K). MIEDO: $100+ petróleo. VP: Eritrea 192K en tema similar." },
    { label: "🔍 Señal competencia", value: "Poco cubierto en español con datos de tráfico. Competencia cubre guerra Irán pero NO la parálisis logística ni el papel de las aseguradoras. Oportunidad clara." },
    { label: "🔎 Qué investigar más", value: "Pólizas de Lloyd's para zona de guerra en Ormuz. Comparativa con crisis del Canal de Suez. Rutas alternativas y sobrecostes. Cuánto tiempo tarda la reclasificación de riesgo tras paz. Impacto en precios de gasolina en España/Latam." }
  ],
  sources: [
    { headline: "Tracking ship traffic through the Strait of Hormuz", medium: "NBC News", date: "2026-06-03", url: "https://www.nbcnews.com/data-graphics/strait-of-hormuz-ports-traffic-trump-us-iran-war-rcna331507", desc: "Tracker en tiempo real" },
    { headline: "Strait of Hormuz traffic remains limited", medium: "World Oil", date: "2026-06-02", url: "https://worldoil.com/news/2026/6/2/strait-of-hormuz-traffic-remains-limited-despite-peace-deal-talks/", desc: "Navieras se niegan a volver" },
    { headline: "The Strait of Hormuz in 8 Charts", medium: "CSIS", date: "2026-05-28", url: "https://www.csis.org/analysis/strait-hormuz-8-charts", desc: "Análisis CSIS" },
    { headline: "Current price of oil as of June 3, 2026", medium: "Fortune", date: "2026-06-03", url: "https://fortune.com/article/price-of-oil-06-03-2026/", desc: "Brent cerca de $100" }
  ]
},

/* ── P2 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P2",
  flag: "ua",
  title: "San Petersburgo en llamas: cómo drones de $50.000 humillan a la segunda potencia militar del mundo durante su evento de prestigio",
  tags: [
    { cls:"tag-eu", text:"EUROPA" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: NPR, CNN, NBC, ABC — 'humillación a Putin' en titulares" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren el ataque, NADIE la paradoja coste-efectividad dron vs defensa" },
    { cls:"chip-vp",   text:"📺 VP: Putin economía (354K) — ángulo militar completamente nuevo" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto como noticia bélica, no como análisis de vulnerabilidad" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Peter_%26_Paul_fortress_in_SPB_03.jpg?width=1200",
  bannerAlt: "San Petersburgo, Rusia",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Russia.svg?width=1200",
  tesis: "Un dron ucraniano cuesta ~$50.000. El sistema de defensa aérea que intenta derribarlo cuesta millones. Ucrania envió drones a 1.000 km para incendiar un terminal petrolero en San Petersburgo — la segunda ciudad de Rusia — horas antes del evento económico estrella de Putin. Rusia dice que derribó 354 drones, pero los que pasaron incendiaron infraestructura petrolera crítica. La paradoja: Rusia lanza 8 Zircon hipersónicos a Kyiv (armas de millones) y Ucrania responde con drones baratos que golpean la retaguardia rusa. La guerra moderna no la gana quien tiene las armas más caras — sino quien tiene las más baratas.",
  fields: [
    { label: "🗞️ La noticia", value: "3 JUN: drones ucranianos atacan terminal petrolero en San Petersburgo durante SPIEF ('Davos de Putin'). 1.000+ km de profundidad. Aeropuerto cerrado. Kronstadt (base naval) y fábrica armas en Tambov también atacados. Rusia: 354 drones derribados." },
    { label: "🔬 Segunda derivada", value: "La asimetría coste-efectividad es demoledora: un dron de $50K que atraviesa defensas de miles de millones y destruye infraestructura petrolera de millones. Si Ucrania puede golpear San Petersburgo, puede golpear cualquier punto de Rusia. Y Rusia no puede defenderse de todos." },
    { label: "❓ Gran pregunta", value: "¿De qué sirve ser la segunda potencia nuclear del mundo si drones de $50.000 pueden incendiar tus terminales petroleros?" },
    { label: "⚔️ El conflicto", value: "Drones baratos vs defensa cara. Ucrania (asimetría) vs Rusia (escala). Putin (prestigio SPIEF) vs realidad (humo en San Petersburgo). Armas del siglo XXI vs doctrina del siglo XX." },
    { label: "⏰ Por qué ahora", value: "Ataque del 3 JUN durante el SPIEF. Respuesta directa al ataque masivo ruso del 2 JUN (73 misiles + 656 drones). La escalada cruzada se intensifica." },
    { label: "📺 VP ya lo trató?", value: "VP cubrió Putin economía (15 MAY, 354K). El ángulo de la vulnerabilidad militar rusa ante drones baratos es completamente nuevo." },
    { label: "🚀 Motor viral", value: "VISUAL: terminal en llamas, San Petersburgo, SPIEF, drones. CONFLICTO: David vs Goliat. AUDIENCIA: la guerra Rusia-Ucrania sigue generando interés. VP: Putin 354K. YOUTUBE: ataques a infraestructura petrolera son visualmente potentes." },
    { label: "🔍 Señal competencia", value: "Cubierto como noticia bélica. NO cubierto como análisis de la paradoja coste-efectividad ni de la vulnerabilidad estratégica rusa. Oportunidad para VP." },
    { label: "🔎 Qué investigar más", value: "Coste real de un dron ucraniano vs sistema de defensa ruso. Cuántos terminales petroleros tiene Rusia. Impacto acumulado en producción petrolera rusa. Doctrina de guerra asimétrica con drones. Comparativa: Houthis/drones en Mar Rojo vs Ucrania/drones en Rusia." }
  ],
  sources: [
    { headline: "Ukrainian drones strike a St. Petersburg oil terminal ahead of Putin visit", medium: "NPR", date: "2026-06-03", url: "https://www.npr.org/2026/06/03/nx-s1-5844793/ukrainian-drones-hit-st-petersburg", desc: "Crónica y contexto SPIEF" },
    { headline: "Ukrainian drones strike St. Petersburg, hours before 'Putin's Davos'", medium: "CNN", date: "2026-06-03", url: "https://www.cnn.com/2026/06/03/europe/ukraine-drone-attack-russia-st-petersburg-intl-hnk", desc: "Impacto aeropuerto y ciudad" },
    { headline: "St. Petersburg drone attack: Ukraine hits as 'Putin's Davos' begins", medium: "NBC News", date: "2026-06-03", url: "https://www.nbcnews.com/world/russia/st-petersburg-drone-attack-ukraine-putin-economic-forum-russia-war-rcna348214", desc: "Kronstadt y Tambov" }
  ]
},

/* ── P3 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P3",
  flag: "us",
  title: "De The Hills a City Hall: cómo Spencer Pratt confirma que el pipeline entretenimiento→política es el nuevo normal",
  tags: [
    { cls:"tag-eeuu", text:"EEUU" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: CNN, NBC, CNBC — 'fenómeno político' en titulares" },
    { cls:"chip-gap",  text:"📡 Gap: nadie analiza el PATRÓN Berlusconi-Trump-Zelensky-Pratt" },
    { cls:"chip-vp",   text:"📺 VP: no cubierto — gap total en el pipeline entretenimiento→política" },
    { cls:"chip-comp", text:"🔍 Competencia: pendiente de comprobar — hipótesis de gap en español" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Los_Angeles_City_Hall_2013.jpg?width=1200",
  bannerAlt: "Ayuntamiento de Los Ángeles",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Los_Angeles,_California.svg?width=1200",
  tesis: "Berlusconi fue TV→primer ministro. Trump fue reality→presidente. Zelensky fue comedia→presidente. Ahora Spencer Pratt — estrella de 'The Hills', un reality de MTV — está a un paso de gobernar la segunda ciudad más grande de EEUU. Con 28% y el endorsement de Trump. En el estado más demócrata del país. El pipeline entretenimiento→política ya no es una anomalía: es un sistema. La pregunta no es si Pratt puede ganar — es si la democracia representativa tal como la conocíamos ha terminado.",
  fields: [
    { label: "🗞️ La noticia", value: "3 JUN: resultados de primarias de California. Bass 38%, Pratt 28%, Raman 20%. Bass y Pratt al runoff de noviembre. Pratt: estrella de reality + endorsement Trump + casa ardida en incendio Palisades 2025." },
    { label: "🔬 Segunda derivada", value: "El patrón es claro: Berlusconi (1994), Schwarzenegger (2003), Trump (2016), Zelensky (2019), Pratt (2026). La fama mediática ha reemplazado a la experiencia política como credencial. Las redes sociales igualan el campo de juego: Pratt gastó una fracción de lo que Bass pero tiene más alcance orgánico." },
    { label: "❓ Gran pregunta", value: "¿Es la democracia representativa compatible con la era del entretenimiento, o el espectáculo ya ganó?" },
    { label: "⚔️ El conflicto", value: "Entretenimiento vs política. Fama vs experiencia. Redes sociales vs máquina partidista. Trump playbook vs territorio demócrata." },
    { label: "⏰ Por qué ahora", value: "Resultados confirmados el 3 JUN. Runoff en noviembre. Ventana editorial amplia." },
    { label: "📺 VP ya lo trató?", value: "No directamente. VP cubrió Bukele (6.59M) que tiene elementos similares (outsider). El patrón Berlusconi-Trump-Zelensky-Pratt es nuevo." },
    { label: "🚀 Motor viral", value: "PERSONAJE: Pratt es reconocible y polarizante. CONFLICTO: reality TV vs democracia. AUDIENCIA: EEUU siempre genera interés. VISUAL: Hollywood, City Hall, memes. YOUTUBE: temas sobre el pipeline entretenimiento→política son nuevos. TIMING: entre primaria y runoff." },
    { label: "🔍 Señal competencia", value: "Competencia pendiente de comprobar. Hipótesis: algunos canales cubrirán el resultado pero nadie analizará el patrón histórico. Oportunidad para VP." },
    { label: "🔎 Qué investigar más", value: "Historial completo de Berlusconi-Schwarzenegger-Trump-Zelensky-Pratt. Datos de gasto de campaña vs alcance. Perfil demográfico de votantes de Pratt. ¿Qué otros famosos podrían seguir este camino? Teoría política sobre 'celebritización' de la democracia." }
  ],
  sources: [
    { headline: "Karen Bass punched her ticket for November. Spencer Pratt is still hoping for his", medium: "CNN", date: "2026-06-03", url: "https://www.cnn.com/2026/06/03/politics/spencer-pratt-karen-bass-los-angeles-mayor", desc: "Resultados y análisis" },
    { headline: "Los Angeles Mayor Primary 2026 Live Results", medium: "NBC News", date: "2026-06-03", url: "https://www.nbcnews.com/politics/2026-primary-elections/los-angeles-mayor-results", desc: "Datos oficiales" },
    { headline: "Spencer Pratt Is Running Trump's Playbook—and Trump Approves", medium: "Time", date: "2026-05-21", url: "https://time.com/article/2026/05/21/spencer-pratt-trump-los-angeles-mayor-endorsement/", desc: "El playbook Trump en LA" }
  ]
},

/* ── P4 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P4",
  flag: "us",
  title: "Hipotecas + espionaje: cuando tu propio partido dice que la captura institucional de Trump ha ido demasiado lejos",
  tags: [
    { cls:"tag-eeuu", text:"EEUU" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: The Hill, NPR, PBS — rebelión GOP cubierta ampliamente" },
    { cls:"chip-gap",  text:"📡 Gap: nadie conecta Pulte con el patrón Erdogan-Orbán-Trump" },
    { cls:"chip-vp",   text:"📺 VP: Trump OTAN (203K) — ángulo institucional nuevo" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto como noticia, no como patrón de captura" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_Office_of_the_Director_of_National_Intelligence.svg?width=1200",
  bannerAlt: "Sello del DNI",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=1200",
  tesis: "Cuando el líder de la mayoría del Senado de tu propio partido dice 'no necesitamos un DNI armado', la señal es clara: Trump ha cruzado una línea que incluso los republicanos reconocen como peligrosa. Bill Pulte controla simultáneamente $8.5 billones en hipotecas (FHFA) y las 18 agencias de inteligencia (DNI). Ya usó los datos hipotecarios para perseguir a opositores. Tiene 210 días para actuar sin confirmación del Senado. La comparación con Erdogan (que vació la inteligencia turca de profesionales tras el golpe de 2016) no es retórica — es mecánica.",
  fields: [
    { label: "🗞️ La noticia", value: "3 JUN: Thune (líder mayoría Senado) critica a Pulte: 'necesitamos profesionales'. McConnell: 'falta experiencia'. Warner (demócrata): 'peligroso'. Pulte mantiene DNI + FHFA + Fannie/Freddie simultáneamente. 210 días como interino sin confirmación." },
    { label: "🔬 Segunda derivada", value: "La rebelión intrapartidista es la señal más importante: cuando los republicanos institucionalistas protestan públicamente, significa que la captura ha llegado al punto donde amenaza al propio sistema que les da poder. Pero Thune no puede frenarlo — 210 días sin necesidad de voto." },
    { label: "❓ Gran pregunta", value: "¿Están las instituciones estadounidenses diseñadas para resistir a alguien que las captura desde dentro, o solo funcionan mientras nadie lo intenta?" },
    { label: "⚔️ El conflicto", value: "Trump vs su propio partido. Lealtad personal vs instituciones. Poder ejecutivo vs Senado (que no puede frenarlo). Hipotecas + espionaje = concentración sin precedentes." },
    { label: "⏰ Por qué ahora", value: "La rebelión GOP del 3 JUN es nueva. McConnell y Thune critican públicamente. 210 días empiezan a contar." },
    { label: "📺 VP ya lo trató?", value: "VP cubrió Trump OTAN (6 MAY, 203K). NO cubrió captura institucional como patrón. Conexión Erdogan-Orbán-Trump es nueva." },
    { label: "🚀 Motor viral", value: "CONFLICTO: Trump vs su partido. PERSONAJE: Pulte = villano perfecto. AUDIENCIA: EEUU genera interés. VISUAL: sello DNI, edificios, gráficos de poder. VP: Trump 203K. HISTORIAL: captura institucional es tema VP clásico." },
    { label: "🔍 Señal competencia", value: "Cubierto superficialmente como nombramiento. NO como patrón de captura institucional ni con comparativa Erdogan/Orbán. Oportunidad clara." },
    { label: "🔎 Qué investigar más", value: "Historial de Pulte en FHFA. Vaciado de MIT en Turquía post-2016. Modelo Orbán en Hungría. ¿Qué controles tiene el Congreso? Precedentes de directores DNI sin experiencia." }
  ],
  sources: [
    { headline: "GOP senators balk at Trump's pick of Pulte", medium: "The Hill", date: "2026-06-03", url: "https://thehill.com/homenews/senate/5906007-republican-bewilderment-trump-dni/", desc: "Rebelión GOP" },
    { headline: "McConnell warns Pulte lacks experience", medium: "The Hill", date: "2026-06-03", url: "https://thehill.com/homenews/senate/5908231-mcconnell-pulte-dni-qualifications/", desc: "McConnell critica" },
    { headline: "Warner questions Trump pick Pulte", medium: "NPR", date: "2026-06-03", url: "https://www.npr.org/2026/06/03/nx-s1-5844285/sen-mark-warner-on-bill-pulte-being-named-acting-national-intelligence-director", desc: "Riesgos de seguridad" }
  ]
},

/* ── P5 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P5",
  flag: "",
  title: "Europa copia a Australia (y Australia lo abandonó): las cárceles offshore para migrantes son el mayor giro ideológico de la UE",
  tags: [
    { cls:"tag-eu", text:"EUROPA" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: France24, Euronews, WaPo, ImpACT — 'giro histórico'" },
    { cls:"chip-gap",  text:"📡 Gap: nadie conecta con Nauru/Manus (el modelo que Europa condenó)" },
    { cls:"chip-vp",   text:"📺 VP: NO cubierto — gap total en política migratoria UE" },
    { cls:"chip-comp", text:"🔍 Competencia: pendiente — hipótesis de cobertura superficial en español" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg?width=1200",
  bannerAlt: "Parlamento Europeo en Estrasburgo",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=1200",
  tesis: "La UE que creó la Declaración Universal de Derechos Humanos ahora construye centros de detención para migrantes en África. La ironía: el modelo que copia — el sistema offshore de Australia (Nauru, isla Manus) — fue declarado inhumano por la ONU y abandonado parcialmente. Detención hasta 2 años, registros domiciliarios, confiscación, biometría forzada. 5 países ya negocian. Amnistía dice: 'cárceles offshore y perfilamiento racial'. La pregunta: ¿puede la democracia europea sobrevivir implementando las políticas que condenó?",
  fields: [
    { label: "🗞️ La noticia", value: "2 JUN: UE aprueba ley migratoria más restrictiva de su historia. Return hubs offshore en África. Detención 2 años. €420M fondo compartido. Biometría, confiscación, sanciones penales. 5 países (DE, NL, AT, DK, GR) negocian con estados africanos." },
    { label: "🔬 Segunda derivada", value: "Europa no endurece — se contradice. El modelo australiano (Nauru/Manus) fue condenado por la propia UE. Australia lo abandonó parcialmente. Y ahora Europa lo copia. Es el mayor giro ideológico de la UE desde su fundación." },
    { label: "❓ Gran pregunta", value: "¿Puede la UE mantener sus valores fundacionales mientras construye cárceles para migrantes en países donde no se respetan esos valores?" },
    { label: "⚔️ El conflicto", value: "Derechos humanos vs seguridad. Europa vs su identidad. Extrema derecha (ganó la batalla cultural) vs centristas (copian sus políticas). Australia (fracasó) vs Europa (lo intenta)." },
    { label: "⏰ Por qué ahora", value: "Ley aprobada el 2 JUN. France24 lo califica como 'the toughest yet'. Negociaciones con países africanos en curso." },
    { label: "📺 VP ya lo trató?", value: "No. Gap total. VP no ha cubierto la nueva política migratoria de la UE." },
    { label: "🚀 Motor viral", value: "COBERTURA: France24, Euronews, WaPo, ImpACT, Amnistía. CONFLICTO: Europa vs sus valores. AUDIENCIA: España miembro UE, Latam emigración. VISUAL: centros detención, mapas rutas. YOUTUBE: migración genera engagement. VP: no cubierto — exclusiva." },
    { label: "🔍 Señal competencia", value: "Competencia pendiente. Hipótesis: cobertura como noticia pero sin comparación con modelo australiano ni giro ideológico." },
    { label: "🔎 Qué investigar más", value: "Historia Nauru/Manus. Informes ONU. Acuerdo Italia-Albania. Qué países africanos negocian. Coste por deportado. ¿Funciona la disuasión? Posición de España." }
  ],
  sources: [
    { headline: "Toughest EU migration law to date clears path for offshore return hubs", medium: "Euronews", date: "2026-06-01", url: "https://www.euronews.com/my-europe/2026/06/01/eu-set-to-back-return-hubs-in-toughest-migration-crackdown-yet", desc: "La ley más dura" },
    { headline: "EU agrees deal for deporting migrants to return hubs", medium: "France 24", date: "2026-06-02", url: "https://www.france24.com/en/europe/20260602-eu-agrees-deal-for-deporting-migrants-to-third-country-return-hubs", desc: "Detalles del acuerdo" },
    { headline: "EU's New Deportation Framework: Practical Fix or Human-Rights Shortcut?", medium: "ImpACT", date: "2026-06-03", url: "https://impactpolicies.org/news/939/eus-new-deportation-framework-practical-fix-or-humanrights-shortcut", desc: "Análisis crítico" }
  ]
},

/* ── P6 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P6",
  flag: "co",
  title: "El patrón continental: por qué Latinoamérica elige outsiders furiosos — 17 días para que Colombia lo confirme",
  tags: [
    { cls:"tag-latam", text:"LATAM" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Time, Al Jazeera, CNN, Infobae — dominante" },
    { cls:"chip-gap",  text:"📡 Gap: nadie analiza el patrón Bukele-Milei-De la Espriella" },
    { cls:"chip-vp",   text:"📺 VP: Bukele (6.59M) — conexión directa con mayor éxito" },
    { cls:"chip-comp", text:"🔍 Competencia: cobertura masiva pero superficial" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=1200",
  bannerAlt: "Política colombiana",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",
  tesis: "17 días para el runoff colombiano. De la Espriella (43.74%) es el último eslabón de un patrón continental: Bukele (2019), Milei (2023), De la Espriella (2026). Outsiders furiosos ganando en toda Latinoamérica. La pregunta no es si gana — es por qué el sistema que debería impedirlo ya no funciona.",
  fields: [
    { label: "🗞️ La noticia", value: "De la Espriella 43.74% vs Cepeda 40.90%. Runoff 21 JUN. 17 días. Cepeda no reconoce resultados. Gaviria pide respeto institucional." },
    { label: "🔬 Segunda derivada", value: "El colapso de los partidos tradicionales latinoamericanos es estructural. La clase media que creció en democracia ya no cree en la democracia representativa tal como funciona." },
    { label: "❓ Gran pregunta", value: "¿Está Latinoamérica eligiendo a sus propios Trumps o inventando algo nuevo?" },
    { label: "⚔️ El conflicto", value: "Outsiders vs establishment. Democracia representativa vs plebiscitaria." },
    { label: "⏰ Por qué ahora", value: "17 días para el runoff. Publicar 10-14 días antes para máxima relevancia." },
    { label: "📺 VP ya lo trató?", value: "Colombia (~3 MAY). Bukele (6.59M). El patrón continental es nuevo." },
    { label: "🚀 Motor viral", value: "AUDIENCIA: Colombia 3er país Latam. HISTORIAL: Bukele 6.59M. TIMING: antes del runoff. CONFLICTO: polarización extrema." },
    { label: "🔍 Señal competencia", value: "Cobertura masiva pero superficial. Nadie cubre el patrón continental. Oportunidad." },
    { label: "🔎 Qué investigar más", value: "Perfil De la Espriella. Conexiones Trump/GOP. Paralelos Bukele/Milei. Encuestas 2ª vuelta." }
  ],
  sources: [
    { headline: "Colombia Presidential Election Heads to Run-Off", medium: "Time", date: "2026-06-01", url: "https://time.com/article/2026/06/01/colombia-elections-explainer-abelardo-de-la-espriella-ivan-cepeda-runoff/", desc: "Explainer" },
    { headline: "Cepeda, de la Espriella advance", medium: "Al Jazeera", date: "2026-05-31", url: "https://www.aljazeera.com/news/2026/5/31/cepeda-de-la-espriella-advance-in-colombias-presidential-election", desc: "Resultados" },
    { headline: "Colombian presidency goes to runoff", medium: "CNN", date: "2026-05-31", url: "https://www.cnn.com/2026/05/31/americas/colombia-runoff-espriella-cepeda-latam-intl", desc: "Impacto regional" }
  ]
},

/* ── P7 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P7",
  flag: "es",
  title: "Zapatero y la red Venezuela-España: 13 días para que los correos revelen si un expresidente europeo fue intermediario de Maduro",
  tags: [
    { cls:"tag-es", text:"ESPAÑA" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: The Objective, Infobae — dominante en hispanos" },
    { cls:"chip-gap",  text:"📡 Gap: caso judicial cubierto, NO la red geopolítica Venezuela-España" },
    { cls:"chip-vp",   text:"📺 VP: imputación (~22 MAY) — correos abren nueva fase" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto en España, sin profundidad geopolítica" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_la_Moncloa.jpg?width=1200",
  bannerAlt: "Palacio de la Moncloa",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=1200",
  tesis: "13 días. Los correos autorizados por la Audiencia Nacional pueden revelar la conexión directa entre Zapatero y la red PdVSA-CLAP-Venezuela. Si aparece esa conexión, será la primera vez que se documenta una operación de influencia venezolana a través de un expresidente occidental. Publicar ahora es ideal: antes de la declaración del 17-18 JUN.",
  fields: [
    { label: "🗞️ La noticia", value: "Declaración 17-18 JUN. 3 delitos. Correos autorizados. Plus Ultra €53M. 13 días para publicar." },
    { label: "🔬 Segunda derivada", value: "No es corrupción española — es red geopolítica de influencia venezolana en Europa. PdVSA, CLAP, oro venezolano." },
    { label: "❓ Gran pregunta", value: "¿Cómo pudo un expresidente europeo ser intermediario de Maduro durante 15 años sin detección?" },
    { label: "⚔️ El conflicto", value: "Judicial vs político. España vs Venezuela. PSOE vs verdad." },
    { label: "⏰ Por qué ahora", value: "13 días antes de la declaración. Ventana editorial perfecta." },
    { label: "📺 VP ya lo trató?", value: "Imputación (~22 MAY). Ángulo nuevo: red geopolítica." },
    { label: "🚀 Motor viral", value: "AUDIENCIA: España + Latam directo. PERSONAJE: Zapatero reconocible. TIMING: antes del 17-18 JUN." },
    { label: "🔍 Señal competencia", value: "Cubierto como caso judicial. NO como red geopolítica. Oportunidad." },
    { label: "🔎 Qué investigar más", value: "Ruta del dinero Plus Ultra-PdVSA. Oro venezolano. CLAP. Precedentes de influencia petrolera en Europa." }
  ],
  sources: [
    { headline: "Zapatero imputado por Plus Ultra", medium: "The Objective", date: "2026-05-19", url: "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/", desc: "Imputación" },
    { headline: "Aplazamiento declaración Zapatero", medium: "Reporte Latam", date: "2026-05-26", url: "https://reportelatinoamerica.com/2026/05/26/audiencia-nacional-aplaza-declaracion-de-zapatero-en-el-caso-plus-ultra-hasta-mediados-de-junio/", desc: "Nueva fecha" },
    { headline: "Última hora caso Zapatero", medium: "Infobae España", date: "2026-05-26", url: "https://www.infobae.com/espana/2026/05/26/ultima-hora-del-caso-zapatero-novedades-del-sumario-de-plus-ultra-la-caja-fuerte-del-expresidente-y-reacciones-en-directo/", desc: "Sumario" }
  ]
}

],

/* ════════════════════════════════════════════════════════════
   RANKING
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Ormuz: estrecho fantasma",       subtema:"Día 94 · $98 Brent · Trump 'aburrido'",           viral:90, depth:95, timing:99, fit:95, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"San Petersburgo en llamas",      subtema:"Drones $50K humillan a Rusia durante SPIEF",      viral:95, depth:88, timing:99, fit:90, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Spencer Pratt al runoff",        subtema:"Pipeline entretenimiento→política",               viral:88, depth:85, timing:95, fit:82, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Pulte: rebelión GOP",           subtema:"Hipotecas + espionaje · McConnell critica",        viral:86, depth:88, timing:97, fit:85, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"UE migración offshore",          subtema:"Cárceles en África · modelo Australia abandonado", viral:87, depth:92, timing:95, fit:88, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Colombia patrón continental",    subtema:"17 días runoff · Bukele-Milei-Espriella",         viral:82, depth:88, timing:95, fit:95, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Zapatero red Venezuela",         subtema:"13 días declaración · correos · PdVSA-CLAP",      viral:84, depth:85, timing:90, fit:88, verdText:"✅ INVESTIGAR",   verdCls:"verd-maybe" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "🦠 Ébola: 344 confirmados, +23/día, cepa sin vacuna",
    body: "Mayor subida diaria del brote. IRC: 'mucho peor de lo reportado'. Si llega a 500 o sale de África, todo cambia.",
    trigger: "500+ confirmados. Caso fuera de África. Fallo total de contención.",
    sourceUrl: "https://www.cdc.gov/ebola/situation-summary/index.html",
    sourceText: "CDC — Ebola Outbreak"
  },
  {
    title: "🇸🇩 Sudán: lean season, 19.5M en crisis",
    body: "País con más hambre del mundo. Solo 20% financiado. Junio-septiembre: los 4 meses peores.",
    trigger: "Hambruna en nuevas áreas. Colapso de financiación. Imágenes masivas.",
    sourceUrl: "https://www.wfp.org/emergencies/sudan",
    sourceText: "WFP — Sudan emergency"
  },
  {
    title: "🇮🇱 Ultra-ortodoxos vs IDF: la fractura que no se cierra",
    body: "Protestas masivas del 2 JUN continúan. Solo 10% se alista. 13K/año alcanzan edad de reclutamiento. Israel necesita soldados en 3 frentes.",
    trigger: "Nuevas protestas. Legislación de reclutamiento. Crisis de coalición Netanyahu.",
    sourceUrl: "https://www.npr.org/2026/06/02/nx-s1-5844080/ultra-orthodox-protests-israel",
    sourceText: "NPR — Ultra-Orthodox protests"
  },
  {
    title: "🇱🇧 Líbano: zonas piloto LAF — ¿puede funcionar?",
    body: "Israel y Líbano reconvocan el 22 JUN. Zonas piloto donde solo el ejército libanés opera. Si Hezbollah acepta de verdad, es histórico.",
    trigger: "Negociaciones 22 JUN. Violación del ceasefire. Avance israelí más allá de Zaharani.",
    sourceUrl: "https://en.wikipedia.org/wiki/2026_Israel%E2%80%93Lebanon_ceasefire",
    sourceText: "Wikipedia — 2026 Israel-Lebanon ceasefire"
  },
  {
    title: "🇷🇺 SPIEF: ¿qué dice Putin el viernes?",
    body: "Putin habla el viernes en el SPIEF — tras el ataque a San Petersburgo. Su discurso puede anunciar escalada, deal o represalias. El contenido importa.",
    trigger: "Discurso de Putin. Anuncio de represalias. Cambio de doctrina.",
    sourceUrl: "https://www.cnn.com/2026/06/03/europe/ukraine-drone-attack-russia-st-petersburg-intl-hnk",
    sourceText: "CNN — St. Petersburg drone attack"
  },
  {
    title: "🇺🇸 Op. Southern Spear: 200+ muertos sin juicio",
    body: "EEUU hunde barcos en el Caribe sin pruebas públicas. Si un barco resulta ser de civiles, explota.",
    trigger: "Víctima civil confirmada. Denuncia internacional. Escrutinio del Congreso.",
    sourceUrl: "https://www.cfr.org/articles/operation-southern-spear-us-military-campaign-targeting-venezuela",
    sourceText: "CFR — Operation Southern Spear"
  },
  {
    title: "🛢️ Brent: ¿supera $100 esta semana?",
    body: "3ª subida consecutiva. $98.40 y subiendo. Si Trump abandona las negociaciones ('aburrido'), $100+ es inevitable.",
    trigger: "Brent supera $100. Deal Irán fracasa. Trump declara fin de negociaciones.",
    sourceUrl: "https://tradingeconomics.com/commodity/brent-crude-oil",
    sourceText: "Trading Economics — Brent Crude"
  }
],

/* ════════════════════════════════════════════════════════════
   VERIFICACIÓN EDITORIAL
═════════════════════════════════════════════════════════════ */
editorial_verification: {
  sources_checked: "NPR, CNN, NBC, ABC News, PBS, CBS, The Hill, Al Jazeera, Time, Fortune, World Oil, CSIS, CNBC, France24, Euronews, ImpACT, Infobae, El Tiempo, The Objective, Reporte Latam, CDC, ECDC, WHO, WFP, FAO, UNICEF, TradingEconomics",
  wsj_ft_nyt_note: "WSJ, FT y NYT no accesibles vía WebSearch. Datos referenciados indirectamente.",
  vp_history_reviewed: "Sí — 8 videos: Eritrea/Mar Rojo (26 MAY, 192K), Zapatero (22 MAY), Putin (15 MAY, 354K), Pax Silica (13 MAY, 141K), Netanyahu/Irán (12 MAY, 152K), Trump OTAN (6 MAY, 203K), Bolivia (25 MAY), Colombia (3 MAY)",
  competition_reviewed: "Revisión parcial. Gap en análisis estructural. Competencia cubre noticias, no patrones ni paradojas.",
  virality_verified: "9 parámetros por propuesta. Señales verificables documentadas.",
  images_validated: "Pendiente — ejecutar node validate_images.js 2026-06-04",
  news_freshness: "12/14 noticias del 3-4 JUN (86%). 2 noticias del 2 JUN incluidas por relevancia directa.",
  discarded_topics: "Ultra-ortodoxos Israel (cubierto ayer como N2, hoy en vigilar). GNL ruso (sin novedad, en vigilar ayer). Defensa europea $864B (integrado en contexto).",
  known_issues: "WSJ/FT/NYT no accesibles. Competencia verificada parcialmente. Imágenes pendientes."
}

};
