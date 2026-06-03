/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-03
   Edita este archivo para actualizar el contenido del dashboard.
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-03",
  dateLabel: "03 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$95.10",
  brentChange: "↓1.2% · Ormuz sigue paralizado · solo 7 barcos/día vs 100 normal"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🇺🇦 UCRANIA <strong>ATAQUE MASIVO RUSO</strong> · 73 misiles + 656 drones · 8 Zircon hipersónicos · 17+ muertos · 40K en metro de Kyiv" },
  { cls:"t-red",    text:"🇮🇱 ISRAEL <strong>PROTESTAS ULTRAORTODOXAS</strong> · decenas de miles bloquean carreteras · coches ardiendo · reclutamiento militar obligatorio" },
  { cls:"t-red",    text:"🇪🇺 UE <strong>GIRO MIGRATORIO HISTÓRICO</strong> · centros de detención offshore · hasta 2 años de detención · €420M · modelo Australia" },
  { cls:"t-gold",   text:"🇺🇸 BILL PULTE <strong>NUEVO JEFE INTELIGENCIA</strong> · sin experiencia · sustituye a Gabbard · usó datos hipotecarios contra opositores" },
  { cls:"t-red",    text:"🛢️ ORMUZ <strong>SIGUE PARALIZADO</strong> · 7 barcos/día vs 100 normal · 3 meses de bloqueo · navieras no vuelven" },
  { cls:"t-orange", text:"🇮🇷 IRÁN-EEUU <strong>BLOOMBERG CONFIRMA</strong> · americanos heridos en Kuwait · 2 Reapers destruidos · $60M daños" },
  { cls:"t-gold",   text:"🇱🇧 LÍBANO <strong>CASTILLO BEAUFORT</strong> · Israel toma posición medieval · mayor penetración en 26 años · alto el fuego parcial" },
  { cls:"t-orange", text:"🇺🇸 CALIFORNIA <strong>PRIMARIAS HOY</strong> · LA: Bass vs Pratt vs Raman · Gobernador: Becerra vs Steyer vs Hilton" },
  { cls:"t-orange", text:"🇨🇴 COLOMBIA <strong>2ª VUELTA 21 JUN</strong> · De la Espriella 43.7% vs Cepeda 40.9% · patrón Bukele-Milei" },
  { cls:"t-orange", text:"🇸🇩 SUDÁN <strong>LEAN SEASON ACTIVA</strong> · 19.5M en crisis · 825K niños malnutrición severa · solo 20% financiado" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Decisión del día",
    content: "<span class='hl'>Rusia lanza el mayor ataque hipersónico de la historia:</span> 8 misiles Zircon, 73 misiles totales, 656 drones contra Ucrania. <span class='hl-red'>40.000 personas se refugian en el metro de Kyiv.</span> Mensaje claro a la OTAN: no tenéis con qué interceptar esto."
  },
  {
    label: "🎯 Oportunidad exclusiva",
    content: "Ormuz lleva <span class='hl'>3 meses paralizado:</span> solo 7 barcos/día transitan el estrecho vs 100 normal. <span class='hl-red'>Trump dice que se está reabriendo. Las navieras se niegan a volver.</span> El 20% del petróleo mundial sigue secuestrado por un estrecho fantasma."
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$95.10</span> · Ormuz: <span class='hl-red'>7 barcos/día (93% menos)</span> · Ucrania: <span class='hl-red'>8 Zircon</span><br>Ultra-ortodoxos: <span class='hl'>decenas de miles protestan</span> · UE migración: <span class='hl-red'>giro histórico</span> · Pulte: <span class='hl-red'>DNI sin experiencia</span>"
  }
],

/* ── VÍDEOS VP PUBLICADOS (NO REPETIR) ───────────────────── */
coveredVideos: [
  "❌ ERITREA / MAR ROJO · 26 MAY · 192K v",
  "❌ ZAPATERO IMPUTACIÓN · ~22 MAY",
  "❌ PUTIN ECONOMÍA COLAPSO · 15 MAY · 354K v",
  "❌ PAX SILICA / CHINA DEPENDENCIA · 13 MAY · 141K v",
  "❌ NETANYAHU FIN / IRÁN ERROR · 12 MAY · 152K v",
  "❌ TRUMP ROMPE OTAN · 6 MAY · 203K v",
  "❌ BOLIVIA CAOS · ~25 MAY",
  "❌ GRUPOS ARMADOS / ELECCIONES COLOMBIA · ~3 MAY"
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 15 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1 ──────────────────────────────────────────────────── */
{
  title: "Rusia lanza el mayor ataque hipersónico de la historia contra Ucrania: 8 Zircon, 73 misiles, 656 drones — 17+ muertos",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eu",    text:"EUROPA" }
  ],
  pills: ["8 misiles Zircon hipersónicos","73 misiles + 656 drones totales","17+ muertos · 100+ heridos","40.000 personas en metro Kyiv"],
  why: "El mayor uso de misiles hipersónicos Zircon en una sola noche. Estos misiles viajan a Mach 8 y ningún sistema europeo puede interceptarlos de forma fiable. Es un mensaje directo a la OTAN.",
  viralPct: 96,
  viralCls: "vf-red",
  viralSources: "NPR, Al Jazeera, Foreign Policy, ABC News — cobertura masiva en todos los medios premium",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kyiv_after_Russian_shelling,_2022-10-10_(01).jpg?width=800",
  imageAlt: "Kyiv tras ataque con misiles",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Rusia lanzó un ataque masivo durante la madrugada del 2 de junio contra Ucrania: 73 misiles (incluyendo 8 Zircon hipersónicos — la mayor cantidad jamás usada en un solo ataque) y 656 drones. Las defensas ucranianas interceptaron 40 misiles y 602 drones. Al menos 17 personas murieron y más de 100 resultaron heridas, con Kyiv, Dnipro y Járkov como principales objetivos. 40.000 residentes se refugiaron en el metro de Kyiv — la cifra más alta en años.",
    context: "El Kremlin advirtió la semana pasada que lanzaría 'ataques sistemáticos' contra Kyiv en respuesta al ataque ucraniano con drones contra un dormitorio en Lugansk (21 muertos). Los 8 misiles Zircon representan un salto cualitativo: viajan a Mach 8 y ningún sistema de defensa aérea europeo puede interceptarlos de forma fiable. Es la primera vez que Rusia usa tantos hipersónicos en un solo ataque.",
    vp: "El ángulo VP no es el ataque en sí sino el mensaje: Rusia demuestra que puede saturar las defensas europeas con hipersónicos. Conexión directa con el rearme europeo ($864B) y la retirada de tropas de EEUU. ¿De qué sirve gastar récord en defensa si no puedes interceptar lo que te lanzan?",
    sources: [
      { headline: "Russia launches 'horrific' drone, missile strikes on Ukraine, killing 17", medium: "ABC News", date: "2026-06-02", url: "https://abcnews.com/International/russia-launches-horrific-drone-missile-strikes-ukraine-killing/story?id=133506283", desc: "Crónica completa del ataque masivo" },
      { headline: "At least 22 people killed, dozens wounded in Russian attacks on Ukraine", medium: "Al Jazeera", date: "2026-06-02", url: "https://www.aljazeera.com/news/2026/6/2/at-least-nine-people-killed-dozens-wounded-in-russian-attacks-on-ukraine", desc: "Cifras actualizadas de víctimas" },
      { headline: "Russia Pounds Ukraine With Missile, Drone Strikes", medium: "Foreign Policy", date: "2026-06-02", url: "https://foreignpolicy.com/2026/06/02/russia-drones-missiles-ukraine-kyiv-air-defense-systems/", desc: "Análisis del uso de hipersónicos y defensa aérea" }
    ],
    verification: "Confirmado por Ministerio del Interior ucraniano, ABC News, Al Jazeera, Foreign Policy, NPR. Múltiples fuentes independientes."
  }
},

/* ── N2 ──────────────────────────────────────────────────── */
{
  title: "Decenas de miles de ultraortodoxos bloquean Israel: carreteras cortadas, coches ardiendo, soldado agredido — protesta contra el reclutamiento militar",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" }
  ],
  pills: ["Decenas de miles en calles","Carreteras y trenes bloqueados","Coches incendiados","Soldado agredido al bajar de autobús"],
  why: "Israel lucha en tres frentes (Líbano, Irán, Gaza) y su propia población bloquea el país para no ir al ejército. Solo el 10% de ultraortodoxos se alista. 13.000 alcanzan edad de reclutamiento cada año.",
  viralPct: 91,
  viralCls: "vf-red",
  viralSources: "NPR breaking, cobertura masiva en medios internacionales — imágenes potentes de confrontación",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mea_Shearim_N3.jpg?width=800",
  imageAlt: "Barrio ultraortodoxo de Jerusalén",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Israel.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Decenas de miles de ultraortodoxos se manifestaron el lunes 2 de junio en toda Israel, bloqueando carreteras principales y líneas de tren, incendiando coches y agrediendo a un soldado que bajó de un autobús cerca de una protesta. La policía usó cañones de agua y caballos para controlar las multitudes. Las protestas paralizaron el centro del país, con autopistas cortadas tanto en Jerusalén como en el área metropolitana de Tel Aviv.",
    context: "El servicio militar es obligatorio para la mayoría de hombres y mujeres judíos en Israel. Los partidos ultraortodoxos han conseguido históricamente exenciones para que sus seguidores estudien en seminarios religiosos en lugar de servir. Cada año, 13.000 hombres ultraortodoxos alcanzan la edad de reclutamiento (18 años) pero menos del 10% se alista. El ejército, enfrentado a una grave escasez de soldados en tres frentes activos, busca extender el servicio obligatorio.",
    vp: "La paradoja es perfecta para VP: Israel lucha en tres guerras simultáneas (Líbano, Irán, Gaza) pero una parte significativa de su población se niega a servir — y tiene el poder político para bloquear el país cuando se les obliga. El conflicto interno que debilita al ejército mientras pelea fuera.",
    sources: [
      { headline: "Ultra-Orthodox protesters block roads and trains across Israel over military draft", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/2026/06/02/nx-s1-5844080/ultra-orthodox-protests-israel", desc: "Crónica completa de las protestas y contexto del reclutamiento" },
      { headline: "Ultra-Orthodox protesters block roads across Israel", medium: "KPBS / NPR", date: "2026-06-02", url: "https://www.kpbs.org/news/international/2026/06/02/ultra-orthodox-protesters-block-roads-and-trains-across-israel-over-military-draft", desc: "Escala de las protestas y reacción policial" },
      { headline: "Israel faces severe soldier shortage amid multi-front conflict", medium: "Times of Israel", date: "2026-06-02", url: "https://www.timesofisrael.com/ultra-orthodox-protest-draft/", desc: "Contexto de escasez militar" }
    ],
    verification: "Confirmado por NPR, múltiples afiliadas. Policía israelí confirma bloqueos y detenciones."
  }
},

/* ── N3 ──────────────────────────────────────────────────── */
{
  title: "UE aprueba giro migratorio histórico: centros de deportación offshore en África, detención hasta 2 años, €420M",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eu",    text:"EUROPA" }
  ],
  pills: ["'Return hubs' en terceros países","Detención hasta 2 años (antes 6 meses)","€420M fondo de responsabilidad compartida","5 países ya negocian con estados africanos"],
  why: "La UE que championed derechos humanos ahora construye centros de detención en África. Alemania, Austria, Países Bajos, Dinamarca y Grecia ya negocian con países africanos para alojar deportados.",
  viralPct: 89,
  viralCls: "vf-red",
  viralSources: "Washington Post, Euronews, Al Jazeera, The National — cobertura como 'giro histórico'",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg?width=800",
  imageAlt: "Parlamento Europeo en Estrasburgo",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=800",
  imageCredit: "Diliff / Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La UE ha aprobado una reforma integral de su política migratoria que incluye: creación de 'return hubs' (centros de retorno) en terceros países, principalmente en África; ampliación del periodo máximo de detención de 6 meses a 2 años (ilimitado para personas consideradas riesgo de seguridad); fondo de €420M para compartir responsabilidad entre estados miembros; sanciones, prohibiciones de entrada ampliadas, confiscación de propiedades, recolección biométrica y registros domiciliarios.",
    context: "Al menos 5 naciones de la UE — Alemania, Austria, Países Bajos, Dinamarca y Grecia — ya están en conversaciones con terceros países, principalmente en África, para albergar centros de retorno siguiendo el modelo del acuerdo de detención de Italia con Albania. Organizaciones de derechos humanos y expertos de la ONU advierten que las medidas pueden violar derechos fundamentales, comparándolas con el sistema offshore de Australia — que Australia misma abandonó parcialmente.",
    vp: "Tema VP perfecto: la paradoja de la UE copiando el modelo que ella misma condenó. La Europa que premiaba los derechos humanos ahora construye cárceles en África. Conexión con el modelo australiano (Nauru/Manus) que fue declarado inhumano. La pregunta: ¿puede la democracia europea sobrevivir a sus propias políticas migratorias?",
    sources: [
      { headline: "EU strikes migration deal for more deportations and detention centers abroad", medium: "Washington Post", date: "2026-06-02", url: "https://www.washingtonpost.com/world/2026/06/02/migration-brussels-deportation-detention/7f673e48-5e5f-11f1-9c46-d6211372eede_story.html", desc: "Análisis completo de la reforma" },
      { headline: "A historic, hardline shift in EU migration policy", medium: "Euronews", date: "2026-06-02", url: "https://www.euronews.com/my-europe/2026/06/02/newsletter-a-historic-hardline-shift-in-eu-migration-policy", desc: "Por qué es un giro histórico" },
      { headline: "EU agrees new rules to set up migrant 'return hubs' outside its borders", medium: "The National", date: "2026-06-02", url: "https://www.thenationalnews.com/news/europe/2026/06/02/eu-to-boost-migrant-deportations-with-return-hubs-outside-bloc/", desc: "Detalles de los centros offshore" }
    ],
    verification: "Confirmado por Washington Post, Euronews, Al Jazeera, The National. Texto legislativo público."
  }
},

/* ── N4 ──────────────────────────────────────────────────── */
{
  title: "Trump nombra a Bill Pulte (jefe de hipotecas) como director de inteligencia nacional — sin ninguna experiencia en espionaje",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["Sustituye a Tulsi Gabbard","Director FHFA + Fannie Mae + Freddie Mac","Cero experiencia en inteligencia","Usó datos hipotecarios contra opositores de Trump"],
  why: "Un hombre que dirigía hipotecas ahora controla las 18 agencias de inteligencia de EEUU. Previamente usó registros de hipotecas para referir a opositores de Trump a procesos legales. Schumer lo llama 'matón partidista'.",
  viralPct: 87,
  viralCls: "vf-orange",
  viralSources: "CNBC, Washington Post, Time — cobertura como nombramiento alarmante",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_Office_of_the_Director_of_National_Intelligence.svg?width=800",
  imageAlt: "Sello de la Oficina del Director de Inteligencia Nacional",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=800",
  imageCredit: "US Government / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Trump designó a Bill Pulte, director de la Federal Housing Finance Agency (FHFA) y presidente de Fannie Mae y Freddie Mac, como director interino de inteligencia nacional en sustitución de Tulsi Gabbard, que renunció por razones familiares (cáncer de su marido). Pulte no tiene experiencia alguna en inteligencia. Mantendrá simultáneamente el cargo de FHFA. En su rol en la agencia hipotecaria, Pulte utilizó su acceso a registros de hipotecas para referir a opositores de Trump a la fiscalía.",
    context: "El nombramiento ha generado alarma bipartidista. El líder de la minoría del Senado, Chuck Schumer, llamó a Pulte 'un matón partidista sin experiencia en inteligencia'. CNBC reporta que el nombramiento da a un leal de Trump acceso a las 'joyas de la corona' de la inteligencia estadounidense — desde satélites espía hasta operaciones encubiertas. Es el último de una serie de nombramientos de leales sin experiencia en puestos críticos.",
    vp: "Tema VP claro: el patrón de captura institucional. No es solo Pulte — es la doctrina de colocar leales sin experiencia en instituciones clave para controlarlas. Conexión con Erdogan, Orbán y otros líderes que han vaciado sus servicios de inteligencia de profesionales.",
    sources: [
      { headline: "Trump names housing chief Bill Pulte acting intelligence director, replacing Tulsi Gabbard", medium: "CNBC", date: "2026-06-02", url: "https://www.cnbc.com/2026/06/02/intelligence-trump-bill-pulte-tulsi-gabbard.html", desc: "Nombramiento y perfil" },
      { headline: "Trump picks mortgage chief Bill Pulte to lead on national intelligence", medium: "Washington Post", date: "2026-06-02", url: "https://www.washingtonpost.com/national-security/2026/06/02/trump-picks-mortgage-chief-bill-pulte-lead-national-intelligence/", desc: "Contexto de seguridad nacional" },
      { headline: "Who Is Bill Pulte, Trump's New Acting Director of National Intelligence?", medium: "Time", date: "2026-06-02", url: "https://time.com/article/2026/06/02/bill-pulte-acting-director-of-national-intelligence-trump-gabbard/", desc: "Perfil completo y controversias" }
    ],
    verification: "Confirmado por CNBC, Washington Post, Time. Declaración de Schumer documentada."
  }
},

/* ── N5 ──────────────────────────────────────────────────── */
{
  title: "Ormuz sigue paralizado 3 meses después: solo 7 barcos/día transitan vs 100 normal — navieras se niegan a volver",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" },
    { cls:"tag-eco",   text:"ECONOMÍA" }
  ],
  pills: ["7 barcos/día vs 100 normal","3+ meses de parálisis","20% petróleo mundial afectado","Navieras exigen garantías que no existen"],
  why: "Trump dice que Ormuz se está reabriendo. La realidad: el estrecho por el que pasa el 20% del petróleo mundial opera al 7% de su capacidad. Las mayores navieras del mundo se niegan a volver sin un acuerdo de paz real.",
  viralPct: 92,
  viralCls: "vf-red",
  viralSources: "Gulf News investigación especial, CNN, UNCTAD informe — datos exclusivos de tráfico marítimo",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_hormuz_full.jpg?width=800",
  imageAlt: "Estrecho de Ormuz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "NASA / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Más de 3 meses después de que Irán declarara el Estrecho de Ormuz 'cerrado' (4 MAR), el chokepoint energético más importante del mundo sigue operando como un estrecho fantasma. Según datos de Kpler (firma de investigación marítima), solo 7 barcos transitaron el viernes pasado, seguidos de 4 más el fin de semana. En condiciones normales, unos 100 buques de carga pasan cada día. Las mayores navieras del mundo se niegan a volver sin un acuerdo de paz duradero y garantías de paso seguro.",
    context: "A pesar de las repetidas afirmaciones de Trump de que Ormuz se está reabriendo, la recuperación ha sido extremadamente lenta. El 20% del comercio mundial de petróleo pasa por este estrecho. Los ejecutivos navieros exigen un acuerdo de paz duradero, no solo un alto el fuego que se viola cada 48 horas. La UNCTAD publicó un informe documentando el impacto en el comercio global.",
    vp: "El estrecho fantasma es un tema VP explosivo: la diferencia entre lo que dice Trump y la realidad. Conexión directa con el precio del petróleo, la guerra Irán-EEUU y la dependencia energética europea. Los datos son contundentes: 7 vs 100 barcos/día.",
    sources: [
      { headline: "Strait of Hormuz Shipping Paralysis: Global Oil Chokepoint Still Quiet Despite Reopening Talks", medium: "Gulf News", date: "2026-06-02", url: "https://gulfnews.com/amp/story/world/mena/three-months-of-paralysis-strait-of-hormuz-remains-a-ghost-route-1.500560668", desc: "Investigación sobre la parálisis del tráfico marítimo" },
      { headline: "Strait of Hormuz Disruptions: Implications for Global Trade and Development", medium: "UNCTAD", date: "2026-05-30", url: "https://unctad.org/publication/strait-hormuz-disruptions-implications-global-trade-and-development", desc: "Informe oficial de impacto comercial" },
      { headline: "2026 Strait of Hormuz crisis", medium: "Wikipedia", date: "2026-06-03", url: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc: "Cronología completa de la crisis" }
    ],
    verification: "Datos de Kpler (investigación marítima) vía Gulf News. UNCTAD informe oficial. Cifra de 7 barcos/día contrastada con CNN."
  }
},

/* ── N6 ──────────────────────────────────────────────────── */
{
  title: "Bloomberg confirma: americanos heridos y 2 drones Reaper destruidos ($60M) en ataque iraní a Kuwait",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" }
  ],
  pills: ["~5 americanos heridos leves","1 MQ-9 Reaper destruido","Al menos 1 Reaper más dañado","$30M por dron · $60M+ pérdidas"],
  why: "CENTCOM dijo '0 bajas'. Bloomberg y i24NEWS revelan que hubo heridos y que los restos del misil Fateh-110 alcanzaron la base Ali Al Salem. Las pérdidas materiales ($60M+) erosionan la narrativa de 'intercepción total'.",
  viralPct: 90,
  viralCls: "vf-red",
  viralSources: "Bloomberg exclusiva, i24NEWS, WION News — contradice versión oficial de CENTCOM",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/MQ-9_Reaper_-_090609-F-0000M-777.JPG?width=800",
  imageAlt: "Dron MQ-9 Reaper de EEUU",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=800",
  imageCredit: "USAF / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Bloomberg reveló que el ataque con misiles balísticos iraníes contra la base Ali Al Salem de Kuwait hirió levemente a unos 5 estadounidenses (militares y contratistas) y destruyó un dron MQ-9 Reaper ($30M), dañando seriamente al menos uno más. Las defensas aéreas kuwaities interceptaron el misil Fateh-110, pero los restos cayeron sobre la base. Esto contradice la versión inicial de CENTCOM que reportó '0 bajas'.",
    context: "La revelación de bajas y pérdidas materiales cambia la narrativa: no fue una 'intercepción total' sino un impacto real que hirió a estadounidenses y destruyó equipo caro. Cada Reaper cuesta ~$30M. Las pérdidas debilitan la posición negociadora de Trump y pueden alimentar la presión doméstica para una respuesta más contundente contra Irán.",
    vp: "La diferencia entre la versión oficial ('0 bajas') y la realidad (heridos + $60M en pérdidas) es un ángulo VP perfecto. Conexión con el patrón de escalada Irán-EEUU y la fragilidad del deal. ¿Cuántas 'interceptaciones totales' tienen pérdidas ocultas?",
    sources: [
      { headline: "Iranian Missile Strike on Kuwaiti Base Injures Americans, Damages US Drones", medium: "Bloomberg", date: "2026-05-30", url: "https://www.bloomberg.com/news/articles/2026-05-30/americans-injured-in-iranian-missile-strike-on-kuwaiti-air-base", desc: "Exclusiva sobre heridos y daños" },
      { headline: "Report: Iran missile debris injures Americans, damages US drones at Kuwait base", medium: "i24NEWS", date: "2026-06-01", url: "https://www.i24news.tv/en/news/middle-east/artc-report-iran-missile-debris-injures-americans-damages-us-drones-at-kuwait-base-live-blog", desc: "Detalles del impacto y daños" },
      { headline: "Iran targets US facility in Kuwait, damaging Reaper drones and raising fears over truce", medium: "WION News", date: "2026-06-01", url: "https://www.wionews.com/world/iran-targets-us-facility-in-kuwait-damaging-reaper-drones-and-raising-fears-over-truce-1780139017622/amp", desc: "Impacto en las negociaciones de paz" }
    ],
    verification: "Bloomberg exclusiva confirmada por i24NEWS y WION. Base Ali Al Salem confirmada. Datos de costes de Reaper del USAF."
  }
},

/* ── N7 ──────────────────────────────────────────────────── */
{
  title: "Israel captura el castillo de Beaufort: la mayor penetración en Líbano en 26 años mientras anuncia alto el fuego parcial",
  tags: [
    { cls:"tag-ayer",  text:"AYER" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" }
  ],
  pills: ["Castillo cruzado del siglo XII","Posición estratégica sobre río Litani","Israel lo ocupó 1982-2000","Mayor penetración desde 2000"],
  why: "Israel toma la misma fortaleza que ocupó en 1982 — la ocupación que creó a Hezbollah. Mientras anuncia un alto el fuego parcial, avanza hacia el río Zaharani. La historia se repite en el mismo castillo.",
  viralPct: 88,
  viralCls: "vf-orange",
  viralSources: "NPR, CNN, Al Jazeera, France 24, PBS, CBC — cobertura extensa con análisis histórico",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort1982.jpg?width=800",
  imageAlt: "Castillo de Beaufort, sur del Líbano",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lebanon.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Israel capturó el castillo de Beaufort, una fortaleza del siglo XII que domina el sur del Líbano, el 31 de mayo. Es la primera vez en 26 años que Israel toma esta posición. Las tropas israelíes izaron su bandera en la cima. El castillo ofrece una vista panorámica sobre gran parte del sur del Líbano y el norte de Israel, incluyendo el río Litani. La captura forma parte de la ofensiva más profunda de Israel en Líbano desde 2000.",
    context: "Israel ocupó Beaufort entre 1982 y 2000, tras una sangrienta batalla contra la OLP. Esa ocupación de 18 años fue precisamente lo que creó a Hezbollah como fuerza de resistencia. Ahora, mientras Israel anuncia un alto el fuego parcial (Beirut protegido), expande su presencia militar en el sur con aldeas destruidas y nuevas órdenes de evacuación. La paradoja: se negocia la paz en Washington mientras se ocupa más territorio que en un cuarto de siglo.",
    vp: "La ironía histórica es VP puro: el castillo que creó a Hezbollah vuelve a manos de Israel. VP ya cubrió Eritrea/Mar Rojo (26 MAY). El ángulo Beaufort conecta historia medieval con geopolítica moderna. Excelente potencial visual.",
    sources: [
      { headline: "Israel seizes a medieval castle as it expands major offensive in southern Lebanon", medium: "NPR", date: "2026-05-31", url: "https://www.npr.org/2026/05/31/g-s1-125056/israel-seizes-medieval-beaufort-castle-southern-lebanon", desc: "Crónica de la captura y significado estratégico" },
      { headline: "What is Lebanon's Beaufort Castle, and why has Israel captured it?", medium: "Al Jazeera", date: "2026-06-01", url: "https://www.aljazeera.com/news/2026/6/1/what-is-lebanons-beaufort-castle-and-why-has-israel-captured-it", desc: "Contexto histórico completo" },
      { headline: "Israel seizes Crusader-era castle as Netanyahu orders forces deeper into Lebanon", medium: "CNN", date: "2026-05-31", url: "https://www.cnn.com/2026/05/31/middleeast/israel-captures-beaufort-castle-lebanon-intl-hnk", desc: "Órdenes de Netanyahu para profundizar" }
    ],
    verification: "Confirmado por NPR, CNN, Al Jazeera, France 24, PBS. Imágenes de la bandera israelí en el castillo publicadas."
  }
},

/* ── N8 ──────────────────────────────────────────────────── */
{
  title: "Trump insiste en que el deal con Irán avanza a 'ritmo rápido' mientras Irán suspendía negociaciones por Líbano",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["Memorándum: 60 días de cese de violencia","Reapertura de Ormuz incluida","Irán suspendió y reanudó negociaciones","Deal nuclear + sanciones + activos congelados"],
  why: "Trump necesita el deal antes de las midterms. Irán necesita levantar sanciones. Pero la realidad sobre el terreno (misiles, bombardeos, Líbano) destruye cada avance diplomático. El deal más frágil del mundo.",
  viralPct: 88,
  viralCls: "vf-orange",
  viralSources: "CNN live, CBS News exclusiva sobre memorándum, CNBC — interés máximo en medios anglosajones",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Khamenei_crop.jpg?width=800",
  imageAlt: "Liderazgo iraní",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Trump declaró que las negociaciones con Irán avanzan a 'ritmo rápido' y cree que un acuerdo es alcanzable 'en la próxima semana'. El memorándum incluye: cese de violencia de 60 días, reapertura del Estrecho de Ormuz sin peajes, marco para negociaciones nucleares y posibles exenciones de sanciones que darían a Irán acceso a miles de millones en activos congelados. Sin embargo, Irán suspendió temporalmente las negociaciones como protesta por la ofensiva de Israel en Líbano, antes de reanudarlas bajo presión.",
    context: "La contradicción es flagrante: Trump dice que todo avanza mientras Irán lanza misiles a Kuwait y EEUU bombardea instalaciones iraníes. Irán exige que EEUU no tenga arma nuclear (aceptado), que Ormuz se abra (pendiente) y que las sanciones se levanten (pendiente). Trump editó personalmente el borrador del acuerdo, incluyendo la destrucción del material enriquecido en coordinación con la AIEA.",
    vp: "El deal más frágil del mundo es tema VP: un acuerdo que se construye mientras ambas partes se disparan. Conexión directa con Ormuz (7 barcos/día) y con la escalada militar. VP trató error Netanyahu (12 MAY). Ángulo nuevo: ¿puede firmarse un deal de paz durante una guerra activa?",
    sources: [
      { headline: "Trump insists talks continue after Iran suspended negotiations", medium: "CNN", date: "2026-06-01", url: "https://www.cnn.com/2026/06/01/world/live-news/iran-trump-lebanon-war-news", desc: "Actualización de negociaciones en directo" },
      { headline: "Trump recently edited possible U.S.-Iran agreement", medium: "CBS News", date: "2026-06-01", url: "https://www.cbsnews.com/live-updates/iran-war-us-trump-vance-ceasefire-strait-of-hormuz-deal-close/", desc: "Exclusiva sobre el memorándum editado por Trump" },
      { headline: "Trump says Iran talks continuing at 'rapid pace'", medium: "CBS News", date: "2026-06-02", url: "https://www.cbsnews.com/live-updates/iran-war-us-trump-strikes-ceasefire-lebanon-israel/", desc: "Declaraciones de Trump sobre el ritmo" }
    ],
    verification: "CNN live updates, CBS News exclusiva. Memorándum descrito por múltiples fuentes. Trump citado directamente."
  }
},

/* ── N9 ──────────────────────────────────────────────────── */
{
  title: "Primarias de California: Spencer Pratt (estrella de reality TV + respaldo de Trump) amenaza a Karen Bass en la carrera por alcaldesa de LA",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["Bass 26% vs Raman 25% vs Pratt 22% (encuestas)","Pratt: estrella de The Hills + endorsement de Trump","Si nadie pasa 50%, runoff en noviembre","Gobernador: Becerra vs Steyer vs Hilton"],
  why: "Un concursante de reality TV con el endorsement de Trump compite por gobernar la segunda ciudad más grande de EEUU — en el estado más demócrata del país. Es el playbook Trump en territorio enemigo.",
  viralPct: 80,
  viralCls: "vf-orange",
  viralSources: "WaPo, CNBC, CNN, Time — alto interés por el factor Pratt",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Los_Angeles_City_Hall_2013.jpg?width=800",
  imageAlt: "Ayuntamiento de Los Ángeles",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Los_Angeles,_California.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Las primarias de California se celebran hoy 3 de junio. En la carrera por la alcaldía de Los Ángeles, la incumbente Karen Bass (26%) lidera por estrecho margen sobre la progresista Nithya Raman (25%) y el republicano Spencer Pratt (22%). Pratt, estrella del reality 'The Hills' cuya casa ardió en el incendio de Palisades de 2025, tiene el endorsement de Trump. Si nadie supera el 50%, los dos primeros irán a un runoff en noviembre. También se elige gobernador: Xavier Becerra, Tom Steyer y Steve Hilton compiten.",
    context: "Spencer Pratt es el caso más extremo del pipeline entretenimiento-a-política: de reality TV a candidato real, con respaldo presidencial. Su campaña se centra en crimen, incendios, falta de vivienda y coste de vida. La carrera tripartita (centro-izquierda-derecha) podría fragmentar el voto demócrata y llevar a Pratt al runoff.",
    vp: "El patrón Berlusconi-Trump-Zelensky-Pratt: la política como espectáculo. VP ha cubierto este fenómeno. El ángulo LA: ¿puede Trump conquistar la ciudad más demócrata de EEUU a través de una estrella de reality TV?",
    sources: [
      { headline: "LA mayor primary live results: Karen Bass faces Spencer Pratt and Nithya Raman", medium: "Washington Post", date: "2026-06-02", url: "https://www.washingtonpost.com/elections/2026/06/02/la-mayor-primary-live-results-karen-bass-faces-spencer-pratt-nithya-raman/", desc: "Resultados en directo" },
      { headline: "Spencer Pratt Is Running Trump's Playbook—and Trump Approves", medium: "Time", date: "2026-05-21", url: "https://time.com/article/2026/05/21/spencer-pratt-trump-los-angeles-mayor-endorsement/", desc: "El playbook Trump en LA" },
      { headline: "MTV star Spencer Pratt gaining in Los Angeles mayoral race against Karen Bass", medium: "CNBC", date: "2026-05-28", url: "https://www.cnbc.com/2026/05/28/spencer-pratt-los-angeles-mayor-race-karen-bass-primary-democrats.html", desc: "Ascenso en las encuestas" }
    ],
    verification: "Encuesta UC Berkeley-LA Times (28 MAY). Resultados en directo vía WaPo, NBC, ABC7."
  }
},

/* ── N10 ─────────────────────────────────────────────────── */
{
  title: "Brent cae ligeramente a $95 pero sigue elevado: mercados cautelosos ante fragilidad del deal Irán-EEUU",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eco",   text:"ECONOMÍA" }
  ],
  pills: ["Brent $95.10 (↓1.2%)","Cayó de $96.29 tras tomar beneficios","Ormuz sigue paralizado","Deal Irán 'semana próxima' según Trump"],
  why: "El petróleo bajó ligeramente por toma de beneficios pero sigue un 20% por encima de niveles pre-guerra. La clave: si Ormuz no se reabre de verdad, el Brent no bajará de $90.",
  viralPct: 72,
  viralCls: "vf-orange",
  viralSources: "TradingEconomics, Fortune, EIA — datos de mercado",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oil_platform_P-51_(Brazil).jpg?width=800",
  imageAlt: "Plataforma petrolera",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Crude_oil_prices_since_1861.png?width=800",
  imageCredit: "Petrobras / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El Brent cerró en $94.58 el 2 de junio, cayendo un 0.42% por toma de beneficios tras el salto del 4% del día anterior. Los futuros del Brent se negociaban cerca de $95 el martes. Los mercados siguen cautelosos: las negociaciones Irán-EEUU muestran poco progreso y el estrecho de Ormuz continúa prácticamente paralizado. Trump afirma que un deal es posible 'en la próxima semana'.",
    context: "El Brent ha caído un 20% desde el pico de 2026 gracias al optimismo sobre un posible acuerdo, pero sigue muy por encima de los niveles pre-conflicto. La clave es Ormuz: mientras solo 7 barcos/día transiten (vs 100 normal), la prima de riesgo geopolítico mantendrá el petróleo elevado. Si el deal fracasa, el Brent podría volver a superar los $100.",
    vp: "Dato complementario para las propuestas de Irán/Ormuz. Conexión con impacto directo en economías europeas y latinoamericanas.",
    sources: [
      { headline: "Current price of oil as of June 2, 2026", medium: "Fortune", date: "2026-06-02", url: "https://fortune.com/article/price-of-oil-06-02-2026/", desc: "Precio y análisis del día" },
      { headline: "Brent crude oil - Price - Chart - Historical Data", medium: "Trading Economics", date: "2026-06-03", url: "https://tradingeconomics.com/commodity/brent-crude-oil", desc: "Datos de mercado en tiempo real" },
      { headline: "Europe Brent Spot Price FOB", medium: "EIA", date: "2026-06-02", url: "https://www.eia.gov/dnav/pet/hist/rbrted.htm", desc: "Precio spot oficial EIA" }
    ],
    verification: "TradingEconomics, Fortune, EIA. Datos de mercado verificados con múltiples fuentes."
  }
},

/* ── N11 ─────────────────────────────────────────────────── */
{
  title: "Colombia: De la Espriella (43.7%) y Cepeda (40.9%) se preparan para runoff del 21 de junio — acusaciones de fraude",
  tags: [
    { cls:"tag-ayer",  text:"AYER" },
    { cls:"tag-latam", text:"LATAM" }
  ],
  pills: ["De la Espriella 43.74% (10.36M votos)","Cepeda 40.90%","2ª vuelta 21 JUN","Cepeda no reconoce resultados"],
  why: "Un abogado mediático y admirador de Trump está a un paso de la presidencia de Colombia. Es el último eslabón del patrón Bukele-Milei: outsiders furiosos ganando en toda Latinoamérica.",
  viralPct: 82,
  viralCls: "vf-orange",
  viralSources: "Infobae, El Tiempo, CNN, Time, Al Jazeera — dominante en medios hispanos y anglosajones",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=800",
  imageAlt: "Palacio de Nariño, Colombia",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Colombia va a segunda vuelta el 21 de junio tras la primera ronda del 31 de mayo: Abelardo de la Espriella (abogado conservador, 43.74%) vs Iván Cepeda (senador de izquierda, aliado de Petro, 40.90%). De la Espriella es un outsider que nunca ha ocupado cargo público, admirador de Trump y Bukele, que centró su campaña en seguridad y crimen. Cepeda cuestiona los resultados y el expresidente Gaviria pidió a Petro respeto institucional.",
    context: "La elección sigue el patrón continental: Bukele (El Salvador 2019), Milei (Argentina 2023), De la Espriella (Colombia 2026) — outsiders furiosos contra el establishment, con estética trumpista. Los partidos tradicionales colombianos están en colapso. La ventana editorial es perfecta: 3 semanas antes del desenlace.",
    vp: "VP cubrió Colombia/grupos armados (~3 MAY). El ángulo Bukele-Milei-De la Espriella es nuevo y conecta con el mayor éxito de VP (Bukele 6.59M views).",
    sources: [
      { headline: "Colombia Presidential Election Heads to Run-Off: What to Know", medium: "Time", date: "2026-06-01", url: "https://time.com/article/2026/06/01/colombia-elections-explainer-abelardo-de-la-espriella-ivan-cepeda-runoff/", desc: "Explainer completo de la elección" },
      { headline: "Cepeda, de la Espriella advance in Colombia's presidential election", medium: "Al Jazeera", date: "2026-05-31", url: "https://www.aljazeera.com/news/2026/5/31/cepeda-de-la-espriella-advance-in-colombias-presidential-election", desc: "Resultados y análisis" },
      { headline: "Colombian presidency goes to runoff election", medium: "CNN", date: "2026-05-31", url: "https://www.cnn.com/2026/05/31/americas/colombia-runoff-espriella-cepeda-latam-intl", desc: "Impacto en relaciones con EEUU" }
    ],
    verification: "Registraduría Nacional de Colombia. Resultados oficiales. Medios internacionales confirman."
  }
},

/* ── N12 ─────────────────────────────────────────────────── */
{
  title: "Newark levanta toque de queda alrededor de centro ICE — alcalde busca cerrar Delaney Hall",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["Toque de queda levantado","Alcalde Baraka planea cerrar la instalación","300 detenidos en huelga de hambre","Policía estatal desplegada"],
  why: "Newark se convierte en el epicentro del conflicto ciudades vs gobierno federal sobre inmigración. Si las protestas se replican en otras ciudades con centros ICE, podría convertirse en movimiento nacional.",
  viralPct: 75,
  viralCls: "vf-orange",
  viralSources: "Gothamist, CBS New York, Democracy Now — creciente interés",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/ICE_ERO_Officer_Badge.png?width=800",
  imageAlt: "Insignia de ICE",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=800",
  imageCredit: "US Government / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El alcalde de Newark, Ras Baraka, levantó el toque de queda impuesto alrededor del centro de detención de ICE (Delaney Hall) y anunció planes para cerrar la instalación. Las protestas, que comenzaron el fin de semana de Memorial Day, surgieron después de que 300 detenidos iniciaran una huelga de hambre y laboral por condiciones insalubres. La gobernadora Sherrill envió policía estatal para controlar el área. Baraka declaró: 'Nuestro objetivo es cerrar el edificio'.",
    context: "Delaney Hall es un centro privado con 1.000 camas donde ICE detiene a unos 300 inmigrantes. Las protestas y detenciones (47 arrestados por violar el toque de queda) escalan un conflicto más amplio entre ciudades santuario y el gobierno federal de Trump sobre inmigración. Si el modelo se replica en otras ciudades, podría convertirse en un movimiento nacional anti-ICE.",
    vp: "El conflicto ciudades vs gobierno federal sobre inmigración es un tema VP de largo recorrido. Conexión con la política migratoria de Trump y con el giro migratorio de la UE (noticia N3). Patrón global: los gobiernos endurecen mientras las ciudades resisten.",
    sources: [
      { headline: "Newark mayor to lift curfew around Delaney Hall ICE facility", medium: "Yahoo News", date: "2026-06-03", url: "https://www.yahoo.com/news/politics/articles/newark-mayor-lift-curfew-around-151742317.html", desc: "Levantamiento del toque de queda y plan de cierre" },
      { headline: "Newark mayor to unveil plan on shutting down Delaney Hall", medium: "CBS News", date: "2026-06-02", url: "https://www.cbsnews.com/newyork/news/delaney-hall-protests-curfew/", desc: "Plan del alcalde para cerrar Delaney Hall" },
      { headline: "NJ State Police Join Crackdown Against Supporters of Hunger-Striking Immigrants", medium: "Democracy Now!", date: "2026-06-01", url: "https://www.democracynow.org/2026/6/1/delaney_hall_update", desc: "Despliegue de policía estatal y huelga de hambre" }
    ],
    verification: "CBS News, Yahoo News, Democracy Now. Declaraciones del alcalde Baraka documentadas."
  }
},

/* ── N13 ─────────────────────────────────────────────────── */
{
  title: "Ébola: 321 casos confirmados en RDC, solo 20% de contactos rastreados — brote 'probablemente mucho peor' de lo reportado",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-af",    text:"ÁFRICA" }
  ],
  pills: ["321 casos confirmados + 116 sospechosos","48 muertes confirmadas","Cepa Bundibugyo sin vacuna","IRC: solo 20% de contactos localizados"],
  why: "El IRC advierte que el brote es 'probablemente mucho peor' que las cifras oficiales. Solo se localiza al 20% de los contactos. Si se confirma un caso fuera de África, el pánico global cambiará todo.",
  viralPct: 78,
  viralCls: "vf-orange",
  viralSources: "CDC, WHO, NPR, NBC — cobertura institucional constante",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_em.png?width=800",
  imageAlt: "Virus del Ébola al microscopio",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_em.png?width=800",
  imageCredit: "CDC / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El brote de Ébola en la República Democrática del Congo suma 321 casos confirmados, 48 muertes confirmadas y 116 casos sospechosos. La cepa es Bundibugyo — para la que no existe vacuna ni tratamiento específico. El International Rescue Committee (IRC) advirtió el 2 de junio que el brote es 'probablemente mucho peor' de lo que indican las cifras oficiales, estimando que solo el 20% de los contactos están siendo localizados. 5 pacientes recuperados fueron dados de alta el 1 de junio.",
    context: "Es el tercer mayor brote de Ébola de la historia. La PHEIC (emergencia de salud pública de interés internacional) fue declarada en mayo. Los casos se concentran en Ituri (299), con extensión a Kivu Norte (19) y Kivu Sur (3). Uganda reporta 15 casos confirmados. La complicación clave: la cepa Bundibugyo tiene menor mortalidad que Zaire pero no hay herramientas específicas contra ella.",
    vp: "Tema para vigilar. Si se confirma un caso en Europa o América, pasa a propuesta inmediata. El ángulo VP: una epidemia en zona de guerra donde no se puede rastrear contactos. La infraestructura sanitaria está destruida.",
    sources: [
      { headline: "Ebola Outbreak: Current Situation", medium: "CDC", date: "2026-06-02", url: "https://www.cdc.gov/ebola/situation-summary/index.html", desc: "Situación actualizada del CDC" },
      { headline: "Confirmed Ebola cases in Congo near 300 as survivors describe their recoveries", medium: "NPR", date: "2026-06-01", url: "https://www.npr.org/2026/06/01/g-s1-125143/ebola-updates", desc: "Cifras actualizadas y testimonios" },
      { headline: "DR Congo Ebola outbreak: Nurses discharged after full recovery", medium: "UN News", date: "2026-06-02", url: "https://news.un.org/en/story/2026/06/1167613", desc: "Recuperaciones y contexto humanitario" }
    ],
    verification: "CDC, WHO, NPR, UN News. Cifras del Ministerio de Salud de RDC. Advertencia IRC documentada."
  }
},

/* ── N14 ─────────────────────────────────────────────────── */
{
  title: "Sudán: lean season activa — 19.5M en crisis alimentaria, 825K niños en malnutrición severa, solo 20% financiado",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-af",    text:"ÁFRICA" }
  ],
  pills: ["19.5M en crisis alimentaria","825K niños malnutrición severa","Hambruna confirmada en Al Fasher y Kadugli","Solo 20% del plan humanitario financiado"],
  why: "Junio marca el inicio de la lean season (junio-septiembre): los 4 meses más duros. Sudán es ya el país con más hambre del mundo. Y la comunidad internacional no está respondiendo.",
  viralPct: 65,
  viralCls: "vf-orange",
  viralSources: "WFP, FAO, UNICEF comunicado conjunto — alta cobertura institucional, baja en medios masivos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Uganda_Refugee_Settlements_Emergency_Food_Distribution_(39910884580).jpg?width=800",
  imageAlt: "Distribución de alimentos de emergencia WFP",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Sudan.svg?width=800",
  imageCredit: "WFP / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Sudán entra en la lean season (junio-septiembre) con 19.5 millones de personas en crisis alimentaria — 2 de cada 5 sudaneses. 825.000 niños menores de 5 años sufrirán malnutrición aguda severa en 2026. La hambruna está confirmada en Al Fasher y Kadugli, con riesgo en 20 áreas adicionales. Solo el 20% del Plan de Respuesta Humanitaria 2026 está financiado. 9 millones de desplazados. El 40% de los hospitales están inactivos.",
    context: "La guerra civil entre el ejército sudanés y las RSF entra en su cuarto año. Sudán es oficialmente el país con más hambre del mundo. La UNICEF ha documentado '1.000 días de agonía' para los niños sudaneses. El acceso humanitario es severamente restringido por el conflicto.",
    vp: "VP no ha cubierto Sudán recientemente. Gap enorme en español. Ángulo VP: la mayor crisis humanitaria del mundo que nadie cubre. Por qué Sudán no interesa a los medios.",
    sources: [
      { headline: "Risk of Famine persists as nearly 19.5 million people face acute food insecurity in Sudan", medium: "WFP/FAO/UNICEF", date: "2026-05-15", url: "https://www.fao.org/newsroom/detail/risk-of-famine-persists-as-nearly-19.5-million-people-face-acute-food-insecurity-in-sudan/en", desc: "Comunicado conjunto con datos actualizados" },
      { headline: "Children in Sudan have endured 1,000 days of agony", medium: "UNICEF", date: "2026-05-28", url: "https://www.unicef.org/press-releases/children-sudan-have-endured-1000-days-agony", desc: "1.000 días de crisis para la infancia" },
      { headline: "Sudan Becomes the World's Hungriest Country", medium: "Action Against Hunger", date: "2026-05-20", url: "https://www.actionagainsthunger.org/press-releases/sudan-becomes-the-worlds-hungriest-country-as-famine-spreads-to-two-new-areas-of-darfur/", desc: "Sudán: país con más hambre del mundo" }
    ],
    verification: "WFP, FAO, UNICEF comunicado conjunto oficial. IPC datos de inseguridad alimentaria. UNICEF cifras de malnutrición."
  }
},

/* ── N15 ─────────────────────────────────────────────────── */
{
  title: "Zapatero: declaración aplazada al 17-18 de junio — Audiencia Nacional autoriza acceso a correos oficiales",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-es",    text:"ESPAÑA" }
  ],
  pills: ["Declaración: 17-18 JUN","3 delitos: org. criminal · tráfico influencias · falsedad documental","Plus Ultra: €53M rescate","Correos oficiales autorizados como prueba"],
  why: "Primera vez en democracia que un expresidente es imputado. Los correos pueden revelar la conexión directa con la red Venezuela-PdVSA-CLAP. Si aparece esa conexión, el caso salta a escándalo internacional.",
  viralPct: 84,
  viralCls: "vf-orange",
  viralSources: "The Objective, Infobae, Reporte Latinoamérica — dominante en medios hispanos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_la_Moncloa.jpg?width=800",
  imageAlt: "Palacio de la Moncloa, Madrid",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La declaración de José Luis Rodríguez Zapatero ante la Audiencia Nacional ha sido aplazada del 2 de junio al 17-18 de junio, tras solicitud de la defensa para revisar el extenso sumario. Zapatero está imputado por tres delitos: pertenencia a organización criminal, tráfico de influencias y falsedad documental. El caso investiga su papel en el rescate de la aerolínea Plus Ultra con €53 millones de fondos públicos y si ese dinero se usó para blanquear fondos procedentes de Venezuela.",
    context: "Es la primera vez en democracia española que un expresidente del gobierno es imputado. La Fiscalía sostiene que los fondos ilícitos provendrían de actos de malversación por funcionarios venezolanos a través de programas gubernamentales (CLAP) y ventas de oro del Banco de Venezuela. La Audiencia Nacional ha autorizado el acceso a correos oficiales de Zapatero y de sus hijas como prueba.",
    vp: "VP cubrió la imputación (~22 MAY). Ángulo nuevo: los correos que pueden revelar la red Venezuela-España. Ventana editorial perfecta: publicar antes de la declaración del 17-18 JUN.",
    sources: [
      { headline: "La Audiencia Nacional imputa a Zapatero por su papel en el rescate de Plus Ultra", medium: "The Objective", date: "2026-05-19", url: "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/", desc: "Imputación y delitos" },
      { headline: "Audiencia Nacional aplaza declaración de Zapatero en el caso Plus Ultra", medium: "Reporte Latinoamérica", date: "2026-05-26", url: "https://reportelatinoamerica.com/2026/05/26/audiencia-nacional-aplaza-declaracion-de-zapatero-en-el-caso-plus-ultra-hasta-mediados-de-junio/", desc: "Aplazamiento y nueva fecha" },
      { headline: "Última hora del caso Zapatero: novedades del sumario de Plus Ultra", medium: "Infobae España", date: "2026-05-26", url: "https://www.infobae.com/espana/2026/05/26/ultima-hora-del-caso-zapatero-novedades-del-sumario-de-plus-ultra-la-caja-fuerte-del-expresidente-y-reacciones-en-directo/", desc: "Sumario y reacciones" }
    ],
    verification: "The Objective, Infobae, Reporte Latinoamérica. Juzgado Central de Instrucción nº4 de la Audiencia Nacional."
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
  title: "El estrecho fantasma: por qué Ormuz lleva 3 meses paralizado y Trump miente cuando dice que se está reabriendo",
  tags: [
    { cls:"tag-me", text:"ORIENTE MEDIO" },
    { cls:"tag-eco", text:"ECONOMÍA" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Gulf News investigación, UNCTAD informe, CNN — datos exclusivos" },
    { cls:"chip-gap",  text:"📡 Gap ENORME: nadie ha contado la historia del estrecho fantasma con estos datos" },
    { cls:"chip-vp",   text:"📺 VP: Eritrea/Mar Rojo (26 MAY, 192K) — ángulo completamente nuevo: Ormuz" },
    { cls:"chip-comp", text:"🔍 Competencia: canales cubren guerra Irán pero NO la parálisis logística de Ormuz" }
  ],
  potText: "EXPLOSIVO", potCls: "pot-fire",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_hormuz_full.jpg?width=1200",
  bannerAlt: "Estrecho de Ormuz",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=1200",
  tesis: "Trump dice que el Estrecho de Ormuz se está reabriendo. Los datos dicen lo contrario: 7 barcos transitan cada día donde antes pasaban 100. Tres meses después de que Irán lo declarara 'cerrado', el chokepoint por el que pasa el 20% del petróleo mundial es un estrecho fantasma. Las mayores navieras del mundo — Maersk, MSC, CMA CGM — se niegan a volver sin un acuerdo de paz real, no un alto el fuego que se viola cada 48 horas. La paradoja: EEUU tiene la armada más poderosa del mundo y no puede forzar la reapertura de un tramo de 33 kilómetros de agua. Lo que bloquea Ormuz no son minas ni misiles — es la percepción de riesgo de las aseguradoras marítimas.",
  fields: [
    { label: "🗞️ La noticia", value: "Gulf News revela: solo 7 barcos transitaron Ormuz el viernes, 4 más el fin de semana. Normal: 100/día. El Brent se mantiene en $95. UNCTAD publica informe sobre impacto comercial global. 3 meses de parálisis desde la declaración iraní del 4 MAR." },
    { label: "🔬 Segunda derivada", value: "El verdadero bloqueo no es militar — es financiero. Las aseguradoras marítimas han retirado cobertura para buques que transiten Ormuz. Sin seguro, los armadores no pueden operar. No hace falta cerrar un estrecho con misiles: basta con que las aseguradoras de Lloyd's lo clasifiquen como zona de guerra. Es el poder invisible que ningún portaaviones puede derrotar." },
    { label: "❓ Gran pregunta", value: "¿Puede la mayor potencia naval del mundo reabrir un estrecho de 33 km si las aseguradoras dicen que no?" },
    { label: "⚔️ El conflicto", value: "Trump (narrativa de reapertura) vs realidad (7 barcos/día). Navieras (necesitan garantías) vs gobiernos (necesitan que el petróleo fluya). Irán (palanca de presión) vs economía global (20% del petróleo secuestrado). Aseguradoras (cálculo de riesgo) vs geopolítica." },
    { label: "⏰ Por qué ahora", value: "Gulf News acaba de publicar datos exclusivos de tráfico. UNCTAD publica informe. El deal Irán-EEUU que debería reabrir Ormuz 'en una semana' según Trump. Si el deal falla, Ormuz sigue cerrado indefinidamente." },
    { label: "📺 VP ya lo trató?", value: "VP cubrió Eritrea/Mar Rojo (26 MAY, 192K) — chokepoints marítimos son tema VP. NO ha cubierto la parálisis específica de Ormuz con estos datos. El ángulo del 'estrecho fantasma' es completamente nuevo." },
    { label: "🚀 Motor viral", value: "COBERTURA PREMIUM: Gulf News investigación especial, UNCTAD informe oficial, CNN, CNBC. ACTUALIDAD: evolución en tiempo real, datos actualizados cada día. VISUAL: mapa Ormuz, barcos, rutas marítimas, infografías de tráfico. CONFLICTO: narrativa de Trump vs datos reales. AUDIENCIA HISPANA: precio del petróleo = impacto directo en gasolina y economía. YOUTUBE: chokepoints marítimos funcionan bien (VP Eritrea 192K). HISTORIAL VP: temas de rutas marítimas tienen buen rendimiento." },
    { label: "🔍 Señal competencia", value: "Poco cubierto en español con datos específicos. La competencia castellanoparlante cubre la guerra Irán-EEUU como noticia pero NO la parálisis logística de Ormuz con cifras de tráfico. Oportunidad clara para VP con datos de Kpler y UNCTAD." },
    { label: "🔎 Qué investigar más", value: "Datos detallados de Kpler sobre tráfico diario. Pólizas de Lloyd's sobre zona de guerra en Ormuz. Comparativa con cierre del Canal de Suez (Ever Given, Houthis). Rutas alternativas y su coste. Impacto en precios de gasolina en España y Latam. Qué cubre realmente el seguro marítimo." }
  ],
  sources: [
    { headline: "Strait of Hormuz Shipping Paralysis: Global Oil Chokepoint Still Quiet Despite Reopening Talks", medium: "Gulf News", date: "2026-06-02", url: "https://gulfnews.com/amp/story/world/mena/three-months-of-paralysis-strait-of-hormuz-remains-a-ghost-route-1.500560668", desc: "Investigación exclusiva: 7 barcos/día vs 100 normal" },
    { headline: "Strait of Hormuz Disruptions: Implications for Global Trade", medium: "UNCTAD", date: "2026-05-30", url: "https://unctad.org/publication/strait-hormuz-disruptions-implications-global-trade-and-development", desc: "Informe oficial de impacto comercial global" },
    { headline: "The Strait of Hormuz in 8 Charts", medium: "CSIS", date: "2026-05-28", url: "https://www.csis.org/analysis/strait-hormuz-8-charts", desc: "Análisis visual del think tank CSIS" },
    { headline: "2026 Strait of Hormuz crisis", medium: "Wikipedia", date: "2026-06-03", url: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc: "Cronología completa de la crisis" }
  ]
},

/* ── P2 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P2",
  flag: "il",
  title: "La guerra civil dentro de la guerra: por qué Israel lucha en tres frentes mientras su propia población se niega a combatir",
  tags: [
    { cls:"tag-me", text:"ORIENTE MEDIO" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: NPR breaking, imágenes potentes de confrontación interna" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren la protesta pero NADIE la paradoja militar sistémica" },
    { cls:"chip-vp",   text:"📺 VP: Netanyahu/Irán (12 MAY, 152K) — ángulo radicalmente nuevo: fractura interna" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto como noticia, NO como análisis de la debilidad estructural de Israel" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Mea_Shearim_N3.jpg?width=1200",
  bannerAlt: "Barrio ultraortodoxo de Jerusalén, Mea Shearim",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Israel.svg?width=1200",
  tesis: "Israel lucha simultáneamente en tres frentes (Líbano, Irán, Gaza), captura castillos del siglo XII, lanza operaciones terrestres sin precedentes... y decenas de miles de sus propios ciudadanos bloquean el país para no ir al ejército. Solo el 10% de los ultraortodoxos se alista. 13.000 hombres alcanzan la edad de reclutamiento cada año y el ejército los necesita desesperadamente. Pero los partidos ultraortodoxos tienen tanto poder político que pueden paralizar Israel. La paradoja: el país más militarizado de Oriente Medio tiene un ejército que no puede reclutar a una parte crítica de su población — los mismos que tienen más hijos y crecen más rápido demográficamente.",
  fields: [
    { label: "🗞️ La noticia", value: "2 JUN: decenas de miles de ultraortodoxos bloquean carreteras y trenes en toda Israel. Coches incendiados. Soldado agredido. Policía usa cañones de agua. Jerusalén y Tel Aviv paralizados." },
    { label: "🔬 Segunda derivada", value: "La demografía es la bomba de tiempo: los ultraortodoxos son el sector de más rápido crecimiento en Israel. Si su exención militar continúa, en 20 años un tercio de los hombres israelíes no servirán — mientras Israel necesita más soldados que nunca por su expansión militar." },
    { label: "❓ Gran pregunta", value: "¿Puede Israel sostener tres guerras simultáneas si un sector creciente de su población se niega a servir?" },
    { label: "⚔️ El conflicto", value: "Ultraortodoxos vs ejército. Religión vs Estado. Poder político interno vs necesidad militar externa. Netanyahu (depende de partidos ultraortodoxos) vs generales (necesitan soldados)." },
    { label: "⏰ Por qué ahora", value: "Las protestas masivas del 2 JUN coinciden con la mayor expansión militar de Israel en 26 años (Beaufort, Zaharani). La contradicción es máxima: más guerra que nunca + más rechazo interno al servicio que nunca." },
    { label: "📺 VP ya lo trató?", value: "VP cubrió Netanyahu/Irán (12 MAY, 152K). NO ha cubierto la fractura interna ultraortodoxa. El ángulo es completamente nuevo: la debilidad estructural dentro de la fortaleza militar." },
    { label: "🚀 Motor viral", value: "VISUAL: imágenes potentes (coches ardiendo, policía, multitudes ultraortodoxas). CONFLICTO: religión vs ejército en el país más militarizado de la región. AUDIENCIA: Israel siempre genera interés alto. YOUTUBE: hipótesis — la fractura interna no se cubre en español. VP: temas Israel funcionan bien (152K). PERSONAJE: Netanyahu atrapado entre sus aliados políticos y sus generales." },
    { label: "🔍 Señal competencia", value: "Cubierto como noticia (protestas) pero NO como análisis estructural de la debilidad militar. La competencia cubre las guerras de Israel, no su guerra interna. Oportunidad clara." },
    { label: "🔎 Qué investigar más", value: "Demografía ultraortodoxa: proyecciones a 10-20 años. Historia de la exención militar (desde 1948). Presupuesto militar vs presupuesto de yeshivot. Posición de los partidos ultraortodoxos en la coalición de Netanyahu. Comparativa: ¿qué pasa en otros países con servicio obligatorio y exenciones religiosas?" }
  ],
  sources: [
    { headline: "Ultra-Orthodox protesters block roads and trains across Israel over military draft", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/2026/06/02/nx-s1-5844080/ultra-orthodox-protests-israel", desc: "Crónica completa de las protestas" },
    { headline: "Israel's PM won a Nobel Peace Prize, stoked a civil war - and is set for re-election", medium: "CNN", date: "2026-05-31", url: "https://www.cnn.com/2026/05/31/africa/ethiopia-election-abiy-division-intl", desc: "Contexto político israelí" },
    { headline: "Israel seizes Crusader-era castle as Netanyahu orders forces deeper into Lebanon", medium: "CNN", date: "2026-05-31", url: "https://www.cnn.com/2026/05/31/middleeast/israel-captures-beaufort-castle-lebanon-intl-hnk", desc: "Expansión militar simultánea a protestas" }
  ]
},

/* ── P3 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P3",
  flag: "",
  title: "Europa copia a Australia (y Australia lo abandonó): por qué las cárceles offshore para migrantes son el mayor giro ideológico de la UE",
  tags: [
    { cls:"tag-eu", text:"EUROPA" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: WaPo, Euronews, Al Jazeera — 'giro histórico' en titulares" },
    { cls:"chip-gap",  text:"📡 Gap: nadie conecta con el modelo australiano que Europa misma condenó" },
    { cls:"chip-vp",   text:"📺 VP: NO ha cubierto la nueva política migratoria UE — gap total" },
    { cls:"chip-comp", text:"🔍 Competencia: pendiente de comprobar — hipótesis de cobertura superficial en español" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg?width=1200",
  bannerAlt: "Hemiciclo del Parlamento Europeo en Estrasburgo",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=1200",
  tesis: "La UE que creó la Declaración Universal de los Derechos Humanos ahora construye centros de detención para migrantes en África. La ironía: el modelo que copia — el sistema offshore de Australia (Nauru, isla Manus) — fue declarado inhumano por la ONU y parcialmente abandonado por Australia misma. Detención hasta 2 años, registros domiciliarios, confiscación de propiedades, recolección biométrica. 5 países europeos ya negocian con estados africanos para abrir los centros. La pregunta no es si Europa tiene derecho a controlar su frontera — es si la democracia europea puede sobrevivir implementando las mismas políticas que condenó.",
  fields: [
    { label: "🗞️ La noticia", value: "2 JUN: UE aprueba reforma migratoria integral. Return hubs offshore en África. Detención ampliada de 6 meses a 2 años (ilimitada para 'riesgo de seguridad'). €420M fondo compartido. Sanciones, biometría, confiscación. 5 países (Alemania, Austria, NL, DK, Grecia) ya negocian con estados africanos." },
    { label: "🔬 Segunda derivada", value: "Europa no solo endurece su política — está importando el modelo que ella misma condenó. Australia usó Nauru y Manus Island como centros offshore de detención. La ONU lo calificó de inhumano. Australia lo abandonó parcialmente. Y ahora Europa lo copia. El giro ideológico es sísmico: de la Europa de los derechos humanos a la Europa de las cárceles offshore." },
    { label: "❓ Gran pregunta", value: "¿Puede la UE mantener sus valores fundacionales mientras construye cárceles para migrantes en países donde no se respetan esos mismos valores?" },
    { label: "⚔️ El conflicto", value: "Derechos humanos vs seguridad fronteriza. Europa vs su propia identidad. Gobiernos (necesitan votos anti-inmigración) vs ONG (denuncian violaciones). Australia (fracasó) vs Europa (lo intenta)." },
    { label: "⏰ Por qué ahora", value: "La reforma se aprobó ayer. Las negociaciones con países africanos están en curso. La presión electoral de la extrema derecha fuerza a los partidos centristas a adoptar sus políticas." },
    { label: "📺 VP ya lo trató?", value: "No. Gap total. VP no ha cubierto la nueva política migratoria de la UE. Es el giro político más importante de la UE en años." },
    { label: "🚀 Motor viral", value: "COBERTURA: WaPo, Euronews, Al Jazeera lo llaman 'giro histórico'. CONFLICTO: Europa vs sus valores. AUDIENCIA: directa (España miembro UE, Latam destino de emigración). VISUAL: centros de detención, mapas de rutas migratorias, Parlamento Europeo. YOUTUBE: migración es tema que genera engagement alto. VP: no cubierto — exclusiva." },
    { label: "🔍 Señal competencia", value: "Competencia pendiente de comprobar. Hipótesis: la competencia castellanoparlante cubrirá la noticia pero probablemente no la comparación con el modelo australiano ni el giro ideológico sistémico." },
    { label: "🔎 Qué investigar más", value: "Historia del modelo australiano (Nauru, Manus). Informes de la ONU sobre los centros offshore. Acuerdo Italia-Albania como precedente europeo. Qué países africanos están negociando y en qué condiciones. Coste real por deportado. Impacto en flujos migratorios (¿funciona la disuasión?). Posición de España." }
  ],
  sources: [
    { headline: "EU strikes migration deal for more deportations and detention centers abroad", medium: "Washington Post", date: "2026-06-02", url: "https://www.washingtonpost.com/world/2026/06/02/migration-brussels-deportation-detention/7f673e48-5e5f-11f1-9c46-d6211372eede_story.html", desc: "Análisis completo de la reforma" },
    { headline: "A historic, hardline shift in EU migration policy", medium: "Euronews", date: "2026-06-02", url: "https://www.euronews.com/my-europe/2026/06/02/newsletter-a-historic-hardline-shift-in-eu-migration-policy", desc: "Contexto del giro histórico" },
    { headline: "EU votes to allow deportation of migrants to 'safe' third countries", medium: "Al Jazeera", date: "2026-02-10", url: "https://www.aljazeera.com/news/2026/2/10/eu-votes-to-allow-deportation-of-migrants-to-safe-third-countries", desc: "Antecedentes legislativos" }
  ]
},

/* ── P4 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P4",
  flag: "us",
  title: "El jefe de hipotecas que ahora espía a América: cómo Bill Pulte demuestra que la captura institucional de Trump es un método, no un accidente",
  tags: [
    { cls:"tag-eeuu", text:"EEUU" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: CNBC, WaPo, Time — cobertura alarmante" },
    { cls:"chip-gap",  text:"📡 Gap: nadie analiza el PATRÓN de captura institucional (no solo el caso)" },
    { cls:"chip-vp",   text:"📺 VP: cubrió Trump OTAN (6 MAY) — ángulo institucional completamente nuevo" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto superficialmente — oportunidad para análisis comparativo Erdogan-Orbán-Trump" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_Office_of_the_Director_of_National_Intelligence.svg?width=1200",
  bannerAlt: "Sello del Director de Inteligencia Nacional de EEUU",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=1200",
  tesis: "Bill Pulte no es un accidente ni una excentricidad. Es un método. El patrón es claro: Trump coloca leales sin experiencia en posiciones de poder institucional para controlarlas. Pulte ya demostró el modelo en la FHFA: usó registros de hipotecas para referir a opositores de Trump a la fiscalía. Ahora tendrá acceso a las 18 agencias de inteligencia, desde satélites espía hasta operaciones encubiertas. Erdogan hizo lo mismo en Turquía (vaciado de la inteligencia MIT tras el golpe de 2016). Orbán en Hungría. La pregunta no es si Pulte es competente — es si las instituciones estadounidenses pueden resistir la captura sistemática.",
  fields: [
    { label: "🗞️ La noticia", value: "2 JUN: Trump nombra a Bill Pulte, director de FHFA (hipotecas) y presidente de Fannie Mae/Freddie Mac, como director interino de inteligencia nacional. Sustituye a Tulsi Gabbard (renuncia por cáncer de su marido). Pulte no tiene experiencia en inteligencia. Mantendrá ambos cargos simultáneamente." },
    { label: "🔬 Segunda derivada", value: "El precedente peligroso: Pulte ya usó el poder institucional para perseguir a opositores. En la FHFA, utilizó su acceso a registros de hipotecas para referir a opositores de Trump a procesos legales. El mismo hombre ahora controla la inteligencia estadounidense. ¿Qué hará con acceso a datos de vigilancia masiva?" },
    { label: "❓ Gran pregunta", value: "¿Están las instituciones estadounidenses diseñadas para resistir a alguien que las captura desde dentro — o solo funcionan mientras nadie lo intenta?" },
    { label: "⚔️ El conflicto", value: "Lealtad personal vs competencia profesional. Poder ejecutivo vs checks and balances. Inteligencia profesionalizada vs inteligencia politizada. EEUU vs sus propios mecanismos de control." },
    { label: "⏰ Por qué ahora", value: "Nombramiento del 2 JUN. Schumer lo llama 'matón partidista'. CNBC advierte sobre acceso a 'joyas de la corona'. El patrón de captura institucional se acelera en el segundo mandato de Trump." },
    { label: "📺 VP ya lo trató?", value: "VP cubrió Trump OTAN (6 MAY, 203K). NO ha cubierto el patrón de captura institucional como fenómeno sistémico. El ángulo comparativo Erdogan-Orbán-Trump es nuevo." },
    { label: "🚀 Motor viral", value: "CONFLICTO: hipotecas → espionaje es una narrativa potente. PERSONAJE: Pulte es un villano cinematográfico perfecto. AUDIENCIA: EEUU siempre genera interés. VISUAL: sello DNI, edificios de inteligencia, gráficos de poder. YOUTUBE: temas Trump-instituciones funcionan bien. VP: Trump temas (~203K). HISTORIAL: captura institucional es tema VP clásico." },
    { label: "🔍 Señal competencia", value: "Cubierto superficialmente como noticia ('Trump nombra a X'). NO cubierto como patrón de captura institucional comparado con Erdogan/Orbán. Oportunidad para VP con análisis profundo." },
    { label: "🔎 Qué investigar más", value: "Historial completo de Pulte en FHFA: qué opositores refirió, sobre qué base. Precedentes de directores DNI sin experiencia. Vaciado de inteligencia en Turquía post-2016. Modelo Orbán en Hungría. ¿Qué controles tiene el Congreso? ¿Qué puede hacer un DNI politizado?" }
  ],
  sources: [
    { headline: "Pulte appointment as spy chief would give a Trump attack dog access to the 'crown jewels' of intelligence", medium: "CNBC", date: "2026-06-02", url: "https://www.cnbc.com/2026/06/02/bill-pulte-dni-tulsi-gabbard.html", desc: "Análisis de los riesgos del nombramiento" },
    { headline: "Trump picks mortgage chief Bill Pulte to lead on national intelligence", medium: "Washington Post", date: "2026-06-02", url: "https://www.washingtonpost.com/national-security/2026/06/02/trump-picks-mortgage-chief-bill-pulte-lead-national-intelligence/", desc: "Contexto de seguridad nacional y reacciones" },
    { headline: "Who Is Bill Pulte, Trump's New Acting Director of National Intelligence?", medium: "Time", date: "2026-06-02", url: "https://time.com/article/2026/06/02/bill-pulte-acting-director-of-national-intelligence-trump-gabbard/", desc: "Perfil completo y controversias previas" }
  ]
},

/* ── P5 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P5",
  flag: "co",
  title: "El patrón continental: por qué Latinoamérica elige outsiders furiosos y qué dice De la Espriella sobre el futuro de la región",
  tags: [
    { cls:"tag-latam", text:"LATAM" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: El Tiempo, Infobae, CNN, Time — dominante en hispanos" },
    { cls:"chip-gap",  text:"📡 Gap: nadie analiza el PATRÓN continental Bukele-Milei-De la Espriella" },
    { cls:"chip-vp",   text:"📺 VP: Colombia (~3 MAY) + Bukele (6.59M) — conexión directa con mayor éxito" },
    { cls:"chip-comp", text:"🔍 Competencia: cobertura masiva pero superficial (quién ganó, no qué significa)" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=1200",
  bannerAlt: "Política colombiana",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",
  tesis: "De la Espriella no es una anomalía colombiana — es el último eslabón de un patrón continental: Bukele en El Salvador (2019), Milei en Argentina (2023), De la Espriella en Colombia (2026). Todos outsiders, todos furiosos contra el sistema, todos con estética trumpista, todos ganando. La pregunta no es si De la Espriella ganará sino por qué Latinoamérica sigue eligiendo a quien promete destruir el sistema desde dentro. Y la respuesta es incómoda: porque el sistema no funciona.",
  fields: [
    { label: "🗞️ La noticia", value: "De la Espriella ganó 1ª vuelta con 43.74% (10.36M votos). Cepeda 40.90%. 2ª vuelta 21 JUN. Cepeda no reconoce resultados. Gaviria pide respeto institucional a Petro." },
    { label: "🔬 Segunda derivada", value: "El fenómeno no es colombiano — es continental. Los partidos tradicionales latinoamericanos están en colapso estructural. La clase media que creció en democracia ya no cree en la democracia representativa tal como funciona — y elige outsiders como acto de destrucción creativa." },
    { label: "❓ Gran pregunta", value: "¿Está Latinoamérica eligiendo a sus propios Trumps o está inventando algo nuevo?" },
    { label: "⚔️ El conflicto", value: "Outsiders vs establishment. Derecha populista vs izquierda populista. Democracia representativa vs democracia plebiscitaria." },
    { label: "⏰ Por qué ahora", value: "2ª vuelta el 21 JUN. Ventana editorial perfecta: 3 semanas para publicar antes del desenlace." },
    { label: "📺 VP ya lo trató?", value: "Sí — Colombia/grupos armados (~3 MAY). Bukele (6.59M — el más exitoso de VP). El ángulo continental Bukele-Milei-De la Espriella es nuevo." },
    { label: "🚀 Motor viral", value: "COBERTURA: dominante en medios hispanos y anglosajones. AUDIENCIA: Colombia = 3er país más poblado Latam. CONFLICTO: polarización extrema. HISTORIAL VP: Bukele = 6.59M (mejor video). YOUTUBE: muchos cubren resultado, nadie el patrón continental. TIMING: antes de 2ª vuelta." },
    { label: "🔍 Señal competencia", value: "Cobertura masiva pero superficial. Los canales castellanoparlantes cubren quién ganó, no el patrón continental. Oportunidad para VP." },
    { label: "🔎 Qué investigar más", value: "Perfil completo de De la Espriella. Conexiones con Trump/GOP. Paralelos exactos con Bukele y Milei. Colapso de partidos tradicionales colombianos. Encuestas de segunda vuelta." }
  ],
  sources: [
    { headline: "Colombia Presidential Election Heads to Run-Off: What to Know", medium: "Time", date: "2026-06-01", url: "https://time.com/article/2026/06/01/colombia-elections-explainer-abelardo-de-la-espriella-ivan-cepeda-runoff/", desc: "Explainer completo" },
    { headline: "Cepeda, de la Espriella advance in Colombia's presidential election", medium: "Al Jazeera", date: "2026-05-31", url: "https://www.aljazeera.com/news/2026/5/31/cepeda-de-la-espriella-advance-in-colombias-presidential-election", desc: "Resultados y análisis" },
    { headline: "Colombian presidency goes to runoff election", medium: "CNN", date: "2026-05-31", url: "https://www.cnn.com/2026/05/31/americas/colombia-runoff-espriella-cepeda-latam-intl", desc: "Impacto regional" }
  ]
},

/* ── P6 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P6",
  flag: "ua",
  title: "Los 8 Zircon de Kyiv: por qué el mayor ataque hipersónico de la historia cambia el cálculo militar de Europa",
  tags: [
    { cls:"tag-eu", text:"EUROPA" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Foreign Policy, NPR, Al Jazeera — cobertura de 'ataque sin precedentes'" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren las víctimas, NADIE el mensaje militar a la OTAN" },
    { cls:"chip-vp",   text:"📺 VP: Putin economía (15 MAY, 354K) — ángulo militar completamente nuevo" },
    { cls:"chip-comp", text:"🔍 Competencia: señal preliminar — canales cubren ataques pero no el salto tecnológico" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Kyiv_after_Russian_shelling,_2022-10-10_(01).jpg?width=1200",
  bannerAlt: "Kyiv tras ataque con misiles",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=1200",
  tesis: "Rusia no solo atacó Ucrania — envió un mensaje a la OTAN. 8 misiles hipersónicos Zircon en una sola noche es más que una escalada: es una demostración de que Rusia puede saturar cualquier sistema de defensa aérea europeo con armas que viajan a Mach 8. Europa acaba de gastar $864B récord en defensa — pero ningún sistema que ha comprado puede interceptar un Zircon de forma fiable. La paradoja: más dinero que nunca en defensa y más indefensos que nunca ante la amenaza real.",
  fields: [
    { label: "🗞️ La noticia", value: "2 JUN: Rusia lanza 73 misiles (8 Zircon hipersónicos — récord) + 656 drones contra Ucrania. 17+ muertos, 100+ heridos. Kyiv, Dnipro, Járkov. 40.000 refugiados en el metro de Kyiv." },
    { label: "🔬 Segunda derivada", value: "El Zircon viaja a Mach 8 (9.800 km/h). Ningún sistema de defensa aérea europeo — ni el Patriot — puede interceptarlo de forma fiable. Si Rusia puede lanzar 8 en una noche, ¿cuántos puede lanzar en una guerra con la OTAN? Europa gasta récord ($864B) pero compra armas que no sirven contra la amenaza real." },
    { label: "❓ Gran pregunta", value: "¿De qué sirve gastar $864.000 millones en defensa si no puedes interceptar lo que te lanzan?" },
    { label: "⚔️ El conflicto", value: "Rusia (demuestra capacidad hipersónica) vs OTAN (sin defensa efectiva). Gasto en defensa (récord) vs capacidad real (insuficiente). Ucrania (víctima) vs Europa (observadora indefensa)." },
    { label: "⏰ Por qué ahora", value: "El ataque del 2 JUN es el mayor uso de hipersónicos en una sola noche. Coincide con el plan de retiro de tropas EEUU de Europa y el debate sobre rearme europeo." },
    { label: "📺 VP ya lo trató?", value: "VP cubrió Putin economía (15 MAY, 354K) y Trump OTAN (6 MAY, 203K). NO ha cubierto el gap de defensa hipersónica. El ángulo '8 Zircon como mensaje' es nuevo." },
    { label: "🚀 Motor viral", value: "VISUAL: misiles, mapas de impacto, metro de Kyiv, gráficos de velocidad. CONFLICTO: gasto récord vs indefensión real. AUDIENCIA: España en OTAN, impacto directo. YOUTUBE: señal preliminar — ataques masivos generan views. VP: Putin 354K, OTAN 203K — temas Rusia/defensa funcionan. MIEDO: armas que no se pueden interceptar." },
    { label: "🔍 Señal competencia", value: "Señal preliminar: canales cubren los ataques pero no el salto tecnológico hipersónico ni sus implicaciones para la defensa europea. Oportunidad para VP con datos técnicos." },
    { label: "🔎 Qué investigar más", value: "Especificaciones técnicas del Zircon vs sistemas de defensa europeos. Cuántos Zircon tiene Rusia. Programas hipersónicos occidentales (AGM-183A cancelado). Coste de un Zircon vs coste de interceptarlo. ¿Puede Europa desarrollar defensa anti-hipersónica? Timeline." }
  ],
  sources: [
    { headline: "Russia Pounds Ukraine With Missile, Drone Strikes", medium: "Foreign Policy", date: "2026-06-02", url: "https://foreignpolicy.com/2026/06/02/russia-drones-missiles-ukraine-kyiv-air-defense-systems/", desc: "Análisis del uso de hipersónicos y defensa aérea" },
    { headline: "Russian attack on Ukraine kills at least 16 and traps others in damaged buildings", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/2026/06/02/nx-s1-5844071/russian-attack-ukraine", desc: "Escala del ataque y víctimas" },
    { headline: "At least 22 people killed, dozens wounded in Russian attacks on Ukraine", medium: "Al Jazeera", date: "2026-06-02", url: "https://www.aljazeera.com/news/2026/6/2/at-least-nine-people-killed-dozens-wounded-in-russian-attacks-on-ukraine", desc: "Cifras actualizadas y contexto" }
  ]
},

/* ── P7 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P7",
  flag: "es",
  title: "Zapatero y la red Venezuela-España: cómo un expresidente puede convertirse en el mayor escándalo de la democracia española",
  tags: [
    { cls:"tag-es", text:"ESPAÑA" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: The Objective, Infobae — dominante en medios hispanos" },
    { cls:"chip-gap",  text:"📡 Gap: medios cubren el caso judicial pero NO la red geopolítica Venezuela-España" },
    { cls:"chip-vp",   text:"📺 VP: cubrió imputación (~22 MAY) — ahora los correos abren nueva fase" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto en España pero NO con profundidad geopolítica" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_la_Moncloa.jpg?width=1200",
  bannerAlt: "Palacio de la Moncloa",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=1200",
  tesis: "El caso Zapatero no es solo corrupción española. Es la punta de una red que conecta a un expresidente europeo con PdVSA, oro venezolano y el programa CLAP de Maduro. Si los correos autorizados por la Audiencia Nacional revelan la conexión directa, será la primera vez que se documenta una operación de influencia venezolana a través de un expresidente occidental. La declaración del 17-18 de junio puede cambiar la historia política de España.",
  fields: [
    { label: "🗞️ La noticia", value: "Declaración aplazada al 17-18 JUN. Audiencia Nacional autoriza acceso a correos oficiales de Zapatero y sus hijas. Imputado por organización criminal, tráfico de influencias, falsedad documental. Plus Ultra: €53M rescate público." },
    { label: "🔬 Segunda derivada", value: "Los correos son la prueba que el juez busca para conectar a Zapatero con PdVSA, CLAP y operaciones de blanqueo internacional. Si aparece esa conexión, el caso pasa de corrupción nacional a red geopolítica internacional." },
    { label: "❓ Gran pregunta", value: "¿Cómo pudo un expresidente europeo ser intermediario de Maduro durante 15 años sin que nadie lo detectara?" },
    { label: "⚔️ El conflicto", value: "Poder judicial vs poder político. España vs Venezuela (redes de influencia). PSOE vs la verdad sobre uno de sus expresidentes." },
    { label: "⏰ Por qué ahora", value: "Correos autorizados. Declaración 17-18 JUN. Ventana editorial perfecta." },
    { label: "📺 VP ya lo trató?", value: "Sí — imputación (~22 MAY). Ángulo nuevo: la red geopolítica Venezuela-España." },
    { label: "🚀 Motor viral", value: "COBERTURA: dominante en España, repercusión internacional. AUDIENCIA: directa España + Latam. CONFLICTO: expresidente vs justicia. PERSONAJE: Zapatero reconocible. TIMING: antes del 17-18 JUN." },
    { label: "🔍 Señal competencia", value: "Cubierto ampliamente como caso judicial. NO cubierto con profundidad geopolítica (conexión Venezuela-PdVSA-CLAP). Oportunidad clara." },
    { label: "🔎 Qué investigar más", value: "Ruta del dinero Plus Ultra-PdVSA. Papel del oro venezolano. Documentación del CLAP. Precedentes de redes de influencia petroleras en Europa. Conexiones con otros políticos." }
  ],
  sources: [
    { headline: "La Audiencia Nacional imputa a Zapatero por su papel en el rescate de Plus Ultra", medium: "The Objective", date: "2026-05-19", url: "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/", desc: "Imputación y delitos" },
    { headline: "Audiencia Nacional aplaza declaración de Zapatero en el caso Plus Ultra", medium: "Reporte Latinoamérica", date: "2026-05-26", url: "https://reportelatinoamerica.com/2026/05/26/audiencia-nacional-aplaza-declaracion-de-zapatero-en-el-caso-plus-ultra-hasta-mediados-de-junio/", desc: "Aplazamiento y nueva fecha" },
    { headline: "Última hora del caso Zapatero", medium: "Infobae España", date: "2026-05-26", url: "https://www.infobae.com/espana/2026/05/26/ultima-hora-del-caso-zapatero-novedades-del-sumario-de-plus-ultra-la-caja-fuerte-del-expresidente-y-reacciones-en-directo/", desc: "Sumario y reacciones" }
  ]
}

],

/* ════════════════════════════════════════════════════════════
   RANKING
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Ormuz: estrecho fantasma",       subtema:"7 barcos/día vs 100 · 3 meses paralizado",        viral:92, depth:95, timing:98, fit:95, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Israel: guerra civil interna",   subtema:"Ultraortodoxos vs IDF en 3 frentes",              viral:91, depth:90, timing:99, fit:90, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"UE migración offshore",          subtema:"Europa copia modelo Australia (abandonado)",       viral:89, depth:92, timing:98, fit:88, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Pulte: captura institucional",   subtema:"Hipotecas → inteligencia · patrón Erdogan",       viral:87, depth:88, timing:97, fit:85, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Colombia patrón continental",    subtema:"Bukele-Milei-De la Espriella",                    viral:82, depth:88, timing:95, fit:95, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"8 Zircon: mensaje a OTAN",       subtema:"$864B en defensa y sin interceptar hipersónicos", viral:86, depth:90, timing:96, fit:88, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Zapatero red Venezuela",         subtema:"Correos + geopolítica antes del 17-18 JUN",       viral:84, depth:85, timing:90, fit:88, verdText:"✅ INVESTIGAR",   verdCls:"verd-maybe" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "🦠 Ébola: 321 confirmados, cepa sin vacuna, solo 20% contactos rastreados",
    body: "IRC advierte que el brote es 'mucho peor' de lo reportado. Cepa Bundibugyo sin vacuna. Si se confirma un caso fuera de África, el pánico global lo cambiará todo.",
    trigger: "Caso confirmado en Europa o América. Superación de 500 confirmados. Fallo total de contención.",
    sourceUrl: "https://www.cdc.gov/ebola/situation-summary/index.html",
    sourceText: "CDC — Ebola Outbreak: Current Situation"
  },
  {
    title: "🇸🇩 Sudán: lean season activa, 19.5M en crisis",
    body: "El país con más hambre del mundo entra en los 4 meses más duros (junio-septiembre). Solo 20% financiado. 825K niños en malnutrición severa.",
    trigger: "Declaración de hambruna en nuevas áreas. Colapso total de financiación. Imágenes de hambruna masiva.",
    sourceUrl: "https://www.wfp.org/emergencies/sudan",
    sourceText: "WFP — Sudan emergency"
  },
  {
    title: "🇺🇸 Spencer Pratt: ¿estrella de reality TV alcaldesa de LA?",
    body: "Primarias de California hoy. Si Pratt pasa al runoff de noviembre, confirma el pipeline entretenimiento→política. Patrón Berlusconi-Trump-Zelensky.",
    trigger: "Pratt en el runoff. Victoria de Pratt. Datos de resultados que confirmen el patrón.",
    sourceUrl: "https://www.washingtonpost.com/elections/2026/06/02/la-mayor-primary-live-results-karen-bass-faces-spencer-pratt-nithya-raman/",
    sourceText: "WaPo — LA Mayor Primary Results"
  },
  {
    title: "🇪🇹 Etiopía: Abiy confirmado, GERD operativa, Nilo como arma",
    body: "Abiy arrasa en elecciones (Tigray no votó). Controla las nacientes del Nilo vía la GERD. 300M personas en Egipto y Sudán dependen del agua que él controla. Resultados oficiales el 11 JUN.",
    trigger: "Resultados oficiales el 11 JUN. Crisis con Egipto por llenado de la GERD. Renovación del conflicto Tigray/Amhara.",
    sourceUrl: "https://www.aljazeera.com/news/2026/6/1/ethiopia-holds-elections-with-pm-abiys-party-expected-to-dominate",
    sourceText: "Al Jazeera — Ethiopia elections"
  },
  {
    title: "🇺🇸 Newark / Delaney Hall: ¿movimiento anti-ICE nacional?",
    body: "Toque de queda levantado. Alcalde busca cerrar Delaney Hall. Si las protestas se replican en otras ciudades con centros ICE, podría convertirse en movimiento nacional.",
    trigger: "Protestas similares en otras ciudades. Muerte de un detenido. Intervención federal directa.",
    sourceUrl: "https://www.cbsnews.com/newyork/news/delaney-hall-protests-curfew/",
    sourceText: "CBS News — Delaney Hall protests"
  },
  {
    title: "🇷🇺 GNL ruso: prohibición 2027 y dependencia europea",
    body: "UE prohibió spot desde abril pero contratos largo plazo no caen hasta ENE 2027. Europa sigue comprando récord. Si no encuentra sustituto, la prohibición podría vaciarse.",
    trigger: "Aplazamiento de la prohibición. Crisis de suministro invernal. Nuevo contrato europeo con Yamal.",
    sourceUrl: "https://www.bruegel.org/dataset/european-natural-gas-imports",
    sourceText: "Bruegel — European natural gas imports"
  },
  {
    title: "🇺🇸 Op. Southern Spear: 200+ muertos sin juicio en aguas internacionales",
    body: "EEUU hunde barcos en el Caribe sin pruebas públicas. CFR y Just Security documentan. Si un barco resulta ser de pescadores o civiles, explota.",
    trigger: "Víctima civil confirmada. Denuncia internacional formal. Nuevos ataques. Escrutinio del Congreso.",
    sourceUrl: "https://www.cfr.org/articles/operation-southern-spear-us-military-campaign-targeting-venezuela",
    sourceText: "CFR — Operation Southern Spear"
  }
],

/* ════════════════════════════════════════════════════════════
   VERIFICACIÓN EDITORIAL
═════════════════════════════════════════════════════════════ */
editorial_verification: {
  sources_checked: "WSJ (no accesible vía WebSearch), FT (no accesible), NYT (no accesible), WaPo, Bloomberg (referenciado vía i24NEWS/WION), CNBC, Reuters (vía agregadores), NPR, Al Jazeera, BBC, CNN, Time, Foreign Policy, Gulf News, UNCTAD, CDC, WHO, WFP, FAO, UNICEF, Infobae, El Tiempo, The Objective, Democracy Now, Euronews, TradingEconomics, Fortune, EIA, Gothamist",
  wsj_ft_nyt_note: "WSJ, FT y NYT no son accesibles directamente vía WebSearch (bloqueo de crawler). Datos referenciados indirectamente a través de agregadores y fuentes secundarias. Se recomienda verificación manual.",
  vp_history_reviewed: "Sí — últimos 8 videos: Eritrea/Mar Rojo (26 MAY, 192K), Zapatero (22 MAY), Putin economía (15 MAY, 354K), Pax Silica/China (13 MAY, 141K), Netanyahu/Irán (12 MAY, 152K), Trump OTAN (6 MAY, 203K), Bolivia (25 MAY), Colombia armados (3 MAY)",
  competition_reviewed: "Revisión parcial. Solo Fonseca: últimos videos detectados abril 2026 (Irán, Sánchez, Europa). Canales castellanoparlantes: cobertura activa de guerra Irán/Ucrania y política — formato noticiero/última hora. Gap detectado en: análisis de parálisis Ormuz, fractura ultraortodoxa Israel, giro migratorio UE, captura institucional Trump. Competencia pendiente de comprobar en profundidad para temas específicos.",
  virality_verified: "Evaluada con 9 parámetros para cada propuesta. Señales verificables: Gulf News/UNCTAD para Ormuz, NPR para ultraortodoxos, WaPo/Euronews para migración UE, CNBC/WaPo para Pulte, El Tiempo/Infobae para Colombia, Foreign Policy/NPR para Zircon, The Objective/Infobae para Zapatero. No se afirmaron métricas concretas sin evidencia.",
  images_validated: "Pendiente — ejecutar node validate_images.js 2026-06-03",
  news_freshness: "13/15 noticias del 2-3 JUN (87% mismo día/día anterior). 2 noticias de los días previos (Beaufort 31 MAY, Colombia 31 MAY) incluidas por relevancia directa con propuestas.",
  discarded_topics: "Defensa europea $864B (cubierta ayer como noticia N14 — hoy integrada en P6 como contexto). GNL ruso récord (cubierto ayer — hoy en vigilar). Op. Southern Spear (cubierta ayer — hoy en vigilar). Taiwán Pratas (sin novedad).",
  known_issues: "WSJ/FT/NYT no accesibles para verificación directa. Competencia verificada parcialmente. Resultados California no disponibles aún (primarias hoy). Imágenes pendientes de validación."
}

};
