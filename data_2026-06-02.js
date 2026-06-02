/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-02
   Edita este archivo para actualizar el contenido del dashboard.
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-02",
  dateLabel: "02 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$96.29",
  brentChange: "↑4% hoy · Irán lanza misiles a Kuwait · deal en riesgo"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🛢️ BRENT <strong>$96.29</strong> ↑4% · Irán lanza misiles a Kuwait · deal en riesgo · Ormuz sigue bloqueado" },
  { cls:"t-red",    text:"🇮🇷 IRÁN <strong>LANZA 2 BALÍSTICOS A KUWAIT</strong> · CENTCOM intercepta · tropas EEUU sin bajas · escalada" },
  { cls:"t-gold",   text:"🇱🇧 LÍBANO <strong>ALTO EL FUEGO PARCIAL</strong> · Hezbollah-Israel · Beirut protegido · sur sigue en combate" },
  { cls:"t-red",    text:"🇪🇸 ZAPATERO <strong>DECLARACIÓN APLAZADA</strong> al 17-18 JUN · Audiencia Nacional accede a correos oficiales" },
  { cls:"t-orange", text:"🦠 ÉBOLA <strong>1.100+ CASOS</strong> · Congo+Uganda · Brasil e Italia descartan casos · 3er mayor brote de la historia" },
  { cls:"t-gold",   text:"🇪🇹 ETIOPÍA <strong>ABIY ARRASA</strong> · PP gana 457/547 escaños · Tigray sin votar · Nobel a autócrata confirmado" },
  { cls:"t-orange", text:"🇨🇴 COLOMBIA <strong>2ª VUELTA 21 JUN</strong> · De la Espriella 43.7% vs Cepeda 40.9% · Gaviria pide respeto" },
  { cls:"t-red",    text:"🇺🇸 OP. SOUTHERN SPEAR <strong>NUEVO ATAQUE 29-30 MAY</strong> · 200+ muertos acumulados · sin pruebas públicas" },
  { cls:"t-red",    text:"🇺🇸 NEWARK <strong>47 ARRESTADOS</strong> · Toque de queda violado · ICE restaura visitas · policía estatal" },
  { cls:"t-orange", text:"🇪🇺 DEFENSA EUROPA <strong>$864.000M</strong> · récord histórico · +14% · Alemania cruza 2% PIB por primera vez" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Decisión del día",
    content: "<span class='hl'>Irán lanza misiles balísticos a Kuwait</span> contra tropas EEUU. CENTCOM intercepta. <span class='hl-red'>El deal Irán-EEUU pende de un hilo. Brent salta a $96.</span> Trump habló con Netanyahu para frenar a Israel en Líbano."
  },
  {
    label: "🎯 Oportunidad exclusiva",
    content: "Alto el fuego PARCIAL en Líbano: <span class='hl'>Beirut protegido, pero el sur sigue en guerra.</span> Israel avanza hacia el río Zaharani — la penetración más profunda en 25 años. <span class='hl-red'>Paradoja: se negocia la paz mientras se avanza.</span>"
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$96.29 ↑4%</span> · Ormuz: <span class='hl-red'>parcialmente bloqueado</span> · Ébola: <span class='hl-red'>1.100+ casos, 350+ muertes</span><br>Etiopía: <span class='hl'>Abiy 457/547</span> · Defensa UE: <span class='hl'>$864B récord</span> · Zapatero: <span class='hl-red'>17-18 JUN</span>"
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
   NOTICIAS — 14 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1 ──────────────────────────────────────────────────── */
{
  title: "Irán lanza dos misiles balísticos contra bases de EEUU en Kuwait — CENTCOM intercepta ambos",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" }
  ],
  pills: ["2 balísticos interceptados","0 bajas EEUU","Respuesta a ataques en Goruk y Qeshm","Kuwait: sede de US Army Central"],
  why: "Irán escala del derribo de drones a misiles balísticos contra tropas estadounidenses. Si se repite, el deal EEUU-Irán podría colapsar y Ormuz seguiría cerrado meses.",
  viralPct: 97,
  viralCls: "vf-red",
  viralSources: "WaPo portada, CNBC breaking, NPR, NBC — cobertura masiva en medios premium",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Khamenei_crop.jpg?width=800",
  imageAlt: "Liderazgo iraní",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Irán disparó dos misiles balísticos en la noche del domingo contra bases en Kuwait que albergan tropas estadounidenses. CENTCOM confirmó que ambos fueron interceptados sin bajas. El ataque fue respuesta a los bombardeos de EEUU contra instalaciones de drones y radares iraníes en Goruk y la isla de Qeshm durante el fin de semana, que a su vez respondían al derribo de un MQ-1 estadounidense sobre aguas internacionales.",
    context: "La escalada rompe el patrón de intercambios limitados entre EEUU e Irán. Pasar de derribar drones a lanzar balísticos contra bases con tropas es un salto cualitativo. Kuwait es sede del US Army Central y su ataque implica directamente a un aliado del Golfo. Las negociaciones de paz siguen formalmente abiertas pero cada intercambio las debilita.",
    vp: "Tema perfecto para analizar la espiral de escalada: cada 'represalia proporcional' sube el umbral. Conexión directa con Ormuz, precio del petróleo y el dilema de Trump entre negociar y responder. VP ya trató el error de Netanyahu con Irán (12 MAY) — este ángulo se centra en el mecanismo de escalada y el papel de Kuwait.",
    sources: [
      { headline: "U.S. bombs Iranian military sites, then downs missiles Tehran fired at troops in Kuwait", medium: "Washington Post", date: "2026-06-01", url: "https://www.washingtonpost.com/world/2026/06/01/iran-us-irael-war-kuwait-strikes/3b660f82-5d72-11f1-9c46-d6211372eede_story.html", desc: "Crónica completa de la secuencia ataque-respuesta del fin de semana" },
      { headline: "U.S. intercepted Iran's missiles targeting Kuwait bases: Centcom", medium: "CNBC", date: "2026-06-01", url: "https://www.cnbc.com/2026/06/01/us-iran-war-missiles-kuwait.html", desc: "Confirmación oficial de CENTCOM sobre intercepción" },
      { headline: "U.S. bombs Iranian military sites, then downs missiles Tehran fired at troops in Kuwait", medium: "NPR", date: "2026-06-01", url: "https://www.npr.org/2026/06/01/g-s1-125126/us-iran-war-updates", desc: "Análisis del ciclo de represalias y estado de las negociaciones" }
    ],
    verification: "Confirmado por CENTCOM (comunicado oficial), Washington Post, CNBC y NPR. Múltiples fuentes independientes."
  }
},

/* ── N2 ──────────────────────────────────────────────────── */
{
  title: "Líbano anuncia alto el fuego parcial Israel-Hezbollah: Beirut protegido, pero el sur sigue en guerra",
  tags: [
    { cls:"tag-break", text:"BREAKING" },
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" }
  ],
  pills: ["Beirut sin bombardeos","Sur Líbano: combate activo","Israel avanza al río Zaharani","Negociación en Washington miércoles 3 JUN"],
  why: "Un alto el fuego que solo cubre la mitad del país revela la fractura entre EEUU (que quiere un deal con Irán) y Netanyahu (que quiere expandir la ocupación). Israel tiene la penetración más profunda en Líbano en 25 años.",
  viralPct: 93,
  viralCls: "vf-red",
  viralSources: "Axios exclusiva Berri-Hezbollah, WaPo, Japan Times, CNN live — todos los premium lo cubren",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort1982.jpg?width=800",
  imageAlt: "Castillo de Beaufort, sur del Líbano",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lebanon.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Líbano anunció el 2 de junio un alto el fuego parcial entre Israel y Hezbollah. El acuerdo protege Beirut y sus suburbios de bombardeos israelíes, mientras Hezbollah se compromete a no atacar territorio israelí. Sin embargo, Netanyahu confirmó que las operaciones militares continúan en el sur del Líbano, donde las fuerzas terrestres avanzan hacia el río Zaharani — la penetración más profunda desde 2000. Dos proyectiles cruzaron desde Líbano hacia el norte de Israel la mañana del martes.",
    context: "Trump anunció el acuerdo tras una larga llamada con Netanyahu en la que le presionó para frenar un posible ataque a Beirut que amenazaba las negociaciones con Irán. Hezbollah, a través de Nabih Berri, comunicó a EEUU su disposición a un alto el fuego total. La fractura es clara: EEUU negocia mientras Israel avanza en el terreno.",
    vp: "La paradoja de negociar la paz mientras se ocupa territorio es puro VP. Conexión directa con el tema Beaufort del 1 JUN y con el error de Netanyahu (12 MAY). El ángulo nuevo: ¿puede Trump obligar a Netanyahu a parar? Historia del alto el fuego parcial como formato diplomático.",
    sources: [
      { headline: "Lebanese official told U.S. that Hezbollah ready for full ceasefire with Israel", medium: "Axios", date: "2026-06-01", url: "https://www.axios.com/2026/06/01/lebanon-full-ceasefire-hezbollah-israel-nabih-berri", desc: "Exclusiva: Berri comunica a EEUU la disposición de Hezbollah" },
      { headline: "Trump says Israel and Hezbollah have agreed to dial back fighting", medium: "Washington Post", date: "2026-06-01", url: "https://www.washingtonpost.com/world/2026/06/01/lebanon-israel-hezbollah-netanyahu-dahiyeh-rubio-ceasefire-airstrikes/78a49cb2-5d98-11f1-9c46-d6211372eede_story.html", desc: "Trump anuncia el acuerdo parcial" },
      { headline: "Lebanon announces partial ceasefire between Israel, Hezbollah but attacks continue", medium: "Japan Times / Reuters", date: "2026-06-02", url: "https://www.japantimes.co.jp/news/2026/06/02/world/lebanon-ceasefire-israel-hezbollah-attacks/", desc: "Pese al acuerdo, ataques continúan en el sur" }
    ],
    verification: "Confirmado por Axios (exclusiva Berri), Washington Post, Reuters. Declaraciones oficiales de Trump, Netanyahu y Hezbollah."
  }
},

/* ── N3 ──────────────────────────────────────────────────── */
{
  title: "Trump frena a Netanyahu en llamada tensa: le exige no bombardear Beirut para no torpedear el deal con Irán",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" },
    { cls:"tag-me",    text:"ORIENTE MEDIO" }
  ],
  pills: ["Llamada larga Trump-Netanyahu 1 JUN","Israel preparaba ataque a Beirut","Trump prioriza deal con Irán","Netanyahu insiste en operaciones sur Líbano"],
  why: "La fractura Trump-Netanyahu es el eje de toda la guerra. Si Trump no puede controlar a Israel, el deal con Irán muere. Si lo controla, Netanyahu pierde la guerra que ha prometido ganar.",
  viralPct: 91,
  viralCls: "vf-red",
  viralSources: "Axios exclusiva, CNN live, Washington Times, Times of Israel — múltiples fuentes sobre la llamada",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/President_Trump_Meets_with_Israeli_Prime_Minister_Benjamin_Netanyahu_(49452465091).jpg?width=800",
  imageAlt: "Trump y Netanyahu",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_President_of_the_United_States.svg?width=800",
  imageCredit: "White House / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El 1 de junio, Trump mantuvo una larga llamada con Netanyahu en la que le exigió frenar un ataque planeado contra Beirut y los suburbios controlados por Hezbollah. Según Axios, Trump consideró que un bombardeo a Beirut torpedeaba las negociaciones con Irán. Netanyahu aceptó no atacar Beirut pero insistió en continuar las operaciones terrestres en el sur del Líbano. La llamada fue descrita como 'tensa' por múltiples fuentes.",
    context: "Es la segunda llamada tensa en dos semanas (la anterior fue el 20 MAY sobre el plan de paz con Irán, donde fuentes dijeron que a Netanyahu 'se le encendió el pelo'). La divergencia es estructural: Trump quiere cerrar un deal con Irán antes de las midterms, Netanyahu quiere victoria militar total. El resultado — alto el fuego parcial — satisface parcialmente a ambos sin resolver nada.",
    vp: "Tensión Trump-Netanyahu es terreno VP. El ángulo nuevo: ¿desde cuándo un presidente de EEUU tiene que frenar a Israel? Historia del control/descontrol de aliados. Conexión con video Netanyahu (12 MAY).",
    sources: [
      { headline: "Trump reins in Netanyahu over Lebanon after Iran threatens to quit talks", medium: "Axios", date: "2026-06-01", url: "https://www.axios.com/2026/06/01/trump-netanyahu-lebanon-israel-bomb-beirut", desc: "Exclusiva sobre la presión de Trump para evitar el bombardeo de Beirut" },
      { headline: "Trump: Iran war negotiations intact, Netanyahu will cool it in Lebanon", medium: "Washington Times", date: "2026-06-01", url: "https://www.washingtontimes.com/news/2026/jun/1/trump-iran-war-negotiations-intact-netanyahu-cool-lebanon/", desc: "Declaraciones de Trump tras la llamada" },
      { headline: "Live updates: Trump vented anger in call with Netanyahu", medium: "CNN", date: "2026-06-01", url: "https://www.cnn.com/2026/06/01/world/live-news/iran-trump-lebanon-war-news", desc: "Cobertura en directo con detalles de la llamada" }
    ],
    verification: "Confirmado por Axios (exclusiva), CNN, Washington Times y Times of Israel. Múltiples fuentes gubernamentales."
  }
},

/* ── N4 ──────────────────────────────────────────────────── */
{
  title: "Brent salta a $96 tras misiles iraníes a Kuwait — el deal que debía calmar los mercados se tambalea",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eco",   text:"ECONOMÍA" }
  ],
  pills: ["Brent $96.29 (+4%)","WTI >$92","Ormuz parcialmente bloqueado","20% del petróleo global afectado"],
  why: "Cada escalada Irán-EEUU sube el petróleo. Si el deal fracasa, Brent puede volver a $110-120. La economía global depende literalmente de una negociación entre Trump y Jamenei.",
  viralPct: 85,
  viralCls: "vf-red",
  viralSources: "CNBC, TradingEconomics, EIA, Al Jazeera — cobertura continua de mercados energéticos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageAlt: "Estrecho de Ormuz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El Brent saltó a $96.29 el 2 de junio (+4%) tras los misiles iraníes contra Kuwait. El crudo había caído un 20% desde máximos de 2026 ($126/barril en marzo) por optimismo sobre un deal EEUU-Irán que reabriría Ormuz. Los misiles a Kuwait revierten esa tendencia. El WTI superó los $92. La EIA mantiene su previsión de Brent entre $90-$106 para junio-julio, pero advierte que los inventarios se están agotando.",
    context: "Ormuz canaliza el 20% del petróleo global. Lleva parcialmente bloqueado desde marzo 2026. Cada vez que el deal parece posible, el petróleo baja; cada vez que la escalada vuelve, sube. Este patrón de volatilidad es en sí mismo dañino para la economía global porque impide planificación e inversión.",
    vp: "Ángulo VP: no es solo el precio — es la parálisis económica que genera la incertidumbre crónica. Quién gana con Ormuz cerrado (Rusia, EEUU shale) y quién pierde (Europa, Asia, países importadores). Conexión con GNL ruso récord.",
    sources: [
      { headline: "Oil drops 20% from 2026 peak on optimism over U.S.-Iran ceasefire talks", medium: "CNBC", date: "2026-05-29", url: "https://www.cnbc.com/2026/05/29/oil-prices-iran-ceasefire-us-trump-strait-hormuz-energy-costs.html", desc: "Contexto: la caída previa por optimismo sobre deal" },
      { headline: "Brent oil jumps more than 3% after Iran vows to retaliate for U.S. strikes", medium: "CNBC", date: "2026-05-26", url: "https://www.cnbc.com/2026/05/26/oil-prices-today-brent-wti-iran-trump-hormuz.html", desc: "Patrón recurrente: cada represalia sube el Brent" },
      { headline: "Brent crude oil price today", medium: "TradingEconomics", date: "2026-06-02", url: "https://tradingeconomics.com/commodity/brent-crude-oil", desc: "Precio actualizado en tiempo real" }
    ],
    verification: "Precios verificados en TradingEconomics, CNBC y OilPriceAPI. Datos EIA del Short-Term Energy Outlook."
  }
},

/* ── N5 ──────────────────────────────────────────────────── */
{
  title: "Zapatero: la Audiencia Nacional accede a sus correos oficiales — declaración aplazada al 17-18 de junio",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-es",    text:"ESPAÑA" }
  ],
  pills: ["3 delitos imputados: org. criminal, tráfico de influencias, falsedad","Correos oficiales + hijas investigados","Declaración 17-18 JUN","Plus Ultra: €53M de rescate público"],
  why: "Primer expresidente español investigado por corrupción desde la democracia. Si los correos revelan conexión directa Venezuela-Plus Ultra-SEPI, el caso se convierte en el mayor escándalo de la democracia española.",
  viralPct: 88,
  viralCls: "vf-red",
  viralSources: "Infobae portada, El Diario, Moncloa.com, NPR internacional, Brussels Signal — cobertura masiva España + internacional",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zapatero_retrato.jpg?width=800",
  imageAlt: "José Luis Rodríguez Zapatero",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=800",
  imageCredit: "Wikimedia Commons / La Moncloa",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La Audiencia Nacional autorizó a la UDEF el acceso al correo oficial de Zapatero y de sus hijas en el marco de la investigación por Plus Ultra. El juez Calama aplazó la declaración del expresidente del 2 de junio al 17-18 de junio a petición de la defensa. Zapatero está imputado por tres delitos: organización criminal, tráfico de influencias y falsedad documental, como 'núcleo decisor y estratégico' de una trama vinculada al rescate público de €53M a la aerolínea Plus Ultra.",
    context: "La investigación examina si el rescate de Plus Ultra durante la pandemia (2021, fondos SEPI) fue desviado parcialmente y si la aerolínea participó en blanqueo vinculado a PdVSA (Venezuela), oro venezolano y el programa CLAP. Es el primer expresidente español investigado por corrupción. El acceso a los correos oficiales es una medida excepcional que indica que el juez busca pruebas directas de la implicación personal.",
    vp: "VP ya cubrió la imputación (~22 MAY). El ángulo nuevo: los correos como prueba — qué significaría encontrar comunicaciones directas Zapatero-Venezuela. Conexión con geopolítica: la red Venezuela-España como caso de estudio de influencia extranjera en Europa. Potencial enorme en audiencia española.",
    sources: [
      { headline: "La Audiencia Nacional retrasa la declaración de Zapatero al 17 y 18 de junio", medium: "Moncloa.com", date: "2026-05-26", url: "https://www.moncloa.com/2026/05/26/an-declaracion-zapatero-3379816", desc: "Aplazamiento oficial de la declaración" },
      { headline: "Última hora del caso Plus Ultra — UDEF accede a correos de Zapatero", medium: "Infobae España", date: "2026-05-25", url: "https://www.infobae.com/espana/2026/05/25/ultima-hora-de-la-imputacion-de-zapatero-y-el-caso-plus-ultra-en-directo-el-gobierno-y-los-socios-aguardan-el-sumario-del-juez-calama/", desc: "Cobertura en directo del acceso a correos oficiales" },
      { headline: "Guía para no perderse en el caso Zapatero y Plus Ultra", medium: "Newtral", date: "2026-05-27", url: "https://www.newtral.es/sumario-zapatero-caso-plus-ultra/20260527/", desc: "Guía completa de la investigación" }
    ],
    verification: "Confirmado por Audiencia Nacional (auto judicial), Infobae, El Diario, Moncloa.com. Cargos del sumario verificados."
  }
},

/* ── N6 ──────────────────────────────────────────────────── */
{
  title: "Etiopía: el Prosperity Party de Abiy Ahmed arrasa con 457 de 547 escaños — Tigray no votó",
  tags: [
    { cls:"tag-ayer",  text:"AYER" },
    { cls:"tag-af",    text:"ÁFRICA" }
  ],
  pills: ["457/547 escaños PP","50M+ registrados","Tigray y 30 distritos Amhara sin elecciones","Abiy confirmado para 5 años más"],
  why: "El Nobel de la Paz 2019 consolida un régimen autocrático con una victoria aplastante en elecciones donde las regiones más conflictivas no pudieron votar. Abiy controla las nacientes del Nilo — clave para Egipto y Sudán.",
  viralPct: 72,
  viralCls: "vf-orange",
  viralSources: "Al Jazeera cobertura extensa, Wikipedia actualizado, National Election Board — cobertura moderada en premium anglosajones",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Prime_Minister_of_Ethiopia_Abiy_Ahmed_Ali.jpg?width=800",
  imageAlt: "Primer Ministro Abiy Ahmed",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ethiopia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Las elecciones generales de Etiopía del 1 de junio dieron al Prosperity Party (PP) de Abiy Ahmed 457 de 547 escaños en la Cámara de Representantes del Pueblo. Más de 50 millones de personas estaban registradas para votar en más de 50.000 colegios. Sin embargo, Tigray no celebró elecciones, ni 30 circunscripciones de Amhara, por 'condiciones desfavorables'. El parlamento confirmó a Abiy para un nuevo mandato de cinco años.",
    context: "Abiy Ahmed ganó el Nobel de la Paz en 2019 por el acuerdo con Eritrea. Desde entonces ha librado una guerra civil en Tigray (2020-2022) con cientos de miles de muertos, consolidado el poder en un partido único y excluido a la oposición de facto. Controla la Gran Presa del Renacimiento (GERD) sobre el Nilo, que amenaza el suministro de agua de Egipto y Sudán.",
    vp: "VP no ha cubierto a Abiy Ahmed recientemente. Gap claro: la historia del Nobel de la Paz que se convierte en autócrata es narrativamente perfecta. Conexión con la presa del Nilo y las tensiones Egipto-Etiopía-Sudán. Tema poco cubierto en español.",
    sources: [
      { headline: "Ethiopia holds elections with PM Abiy's party expected to dominate", medium: "Al Jazeera", date: "2026-06-01", url: "https://www.aljazeera.com/news/2026/6/1/ethiopia-holds-elections-with-pm-abiys-party-expected-to-dominate", desc: "Cobertura completa de la jornada electoral" },
      { headline: "Ethiopia to vote on June 1 as Abiy's ruling party eyes landslide victory", medium: "Al Jazeera", date: "2026-05-29", url: "https://www.aljazeera.com/news/2026/5/29/ethiopia-to-vote-on-june-1-as-abiys-ruling-party-eyes-landslide", desc: "Contexto pre-electoral con exclusión de oposición" },
      { headline: "2026 Ethiopian general election", medium: "Wikipedia", date: "2026-06-02", url: "https://en.wikipedia.org/wiki/2026_Ethiopian_general_election", desc: "Resultados actualizados con desglose por escaños" }
    ],
    verification: "Resultados del National Election Board of Ethiopia. Confirmado por Al Jazeera y múltiples agencias."
  }
},

/* ── N7 ──────────────────────────────────────────────────── */
{
  title: "Colombia: Gaviria pide a Petro 'que los respete' — la campaña de segunda vuelta arranca entre acusaciones de fraude",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-latam", text:"LATAM" }
  ],
  pills: ["De la Espriella 43.7% vs Cepeda 40.9%","2ª vuelta 21 JUN","Cepeda no reconoce resultados","Gaviria exige respeto institucional"],
  why: "Colombia se polariza entre un outsider pro-Trump de ultraderecha y el candidato del petrismo. Cepeda no reconoce resultados. Si la segunda vuelta es disputada, puede haber crisis institucional.",
  viralPct: 82,
  viralCls: "vf-orange",
  viralSources: "El Tiempo, Infobae, Semana — cobertura masiva en medios hispanos. Tema dominante en Latam.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=800",
  imageAlt: "Contexto político colombiano",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Tras la victoria de De la Espriella en primera vuelta (43.74%, 10.36M votos vs Cepeda 40.90%, 9.69M), la campaña de segunda vuelta arranca con tensión. Iván Cepeda no reconoció los resultados y planteó dudas sobre la organización electoral. El expresidente César Gaviria hizo un llamado fuerte al mandatario Petro: 'que los respete'. La segunda vuelta será el 21 de junio, con voto exterior desde el 15.",
    context: "De la Espriella representa una derecha populista pro-Trump, abogado mediático sin experiencia política, en la línea Bukele-Milei. Cepeda es el candidato del Pacto Histórico (petrismo). La negativa a reconocer resultados y las acusaciones de fraude anticipan una segunda vuelta conflictiva. Colombia es el tercer país más poblado de Latinoamérica.",
    vp: "VP cubrió las elecciones colombianas (~3 MAY, grupos armados). El ángulo nuevo: el patrón continental de outsiders populistas de derecha (Bukele, Milei, De la Espriella). ¿Es Colombia la próxima pieza del dominó? Audiencia hispana directa.",
    sources: [
      { headline: "Elecciones Colombia 2026: últimas noticias y reacciones", medium: "El Tiempo", date: "2026-06-01", url: "https://www.eltiempo.com/politica/elecciones-colombia-2026/elecciones-2026-minuto-a-minuto-de-ultimas-noticias-y-reacciones-a-la-segunda-vuelta-presidencial-entre-abelardo-de-la-espriella-e-ivan-cepeda-3561035", desc: "Cobertura en vivo con Gaviria y reacciones políticas" },
      { headline: "Sorpresa en las elecciones de Colombia: De la Espriella gana primera vuelta", medium: "Infobae", date: "2026-05-31", url: "https://www.infobae.com/colombia/2026/05/31/sorpresa-en-las-elecciones-de-colombia-abelardo-de-la-espriella-gana-la-primera-vuelta-y-disputara-la-presidencia-con-ivan-cepeda/", desc: "Análisis de la sorpresa electoral" },
      { headline: "Resultados elecciones Colombia 2026", medium: "Semana", date: "2026-05-31", url: "https://www.semana.com/nacion/articulo/resultados-elecciones-colombia-2026-en-vivo-habla-abelardo-de-la-espriella-y-anticipa-que-cambiara-la-historia/202622/", desc: "Declaraciones de De la Espriella post-victoria" }
    ],
    verification: "Resultados oficiales de la Registraduría Nacional. Confirmado por El Tiempo, Infobae, Semana."
  }
},

/* ── N8 ──────────────────────────────────────────────────── */
{
  title: "Ébola: 1.100+ casos sospechosos, 350+ muertes — el tercer mayor brote de la historia. Brasil e Italia descartan casos.",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-salud", text:"SALUD GLOBAL" }
  ],
  pills: ["282 confirmados + 220 sospechosos (DRC)","Cepa Bundibugyo: sin vacuna ni tratamiento","PHEIC declarada 17 MAY","Brasil e Italia: negativos"],
  why: "Es el tercer mayor brote de ébola de la historia y el primero con la cepa Bundibugyo, para la que no hay vacuna. El brote coincide con conflicto armado y hambruna en el este del Congo, impidiendo la contención.",
  viralPct: 80,
  viralCls: "vf-orange",
  viralSources: "WHO PHEIC, NBC News, CDC tracker, UN News — cobertura global creciente tras sospecha en Brasil e Italia",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_virion.jpg?width=800",
  imageAlt: "Virus del Ébola al microscopio",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_Virus_TEM_PHIL_1832_lores.jpg?width=800",
  imageCredit: "CDC / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El brote de ébola (cepa Bundibugyo) en la RD del Congo y Uganda acumula 282 casos confirmados, 42 muertes confirmadas y más de 220 sospechosos bajo investigación. La OMS lo declaró PHEIC el 17 de mayo. Brasil e Italia investigaron casos sospechosos que resultaron negativos (meningitis y malaria respectivamente). Es el tercer mayor brote desde que se descubrió el virus hace 50 años, y no existe vacuna ni tratamiento aprobado para la cepa Bundibugyo.",
    context: "El brote coincide con una crisis humanitaria catastrófica: 10 millones de personas en inseguridad alimentaria aguda en Ituri, Kivu Norte, Kivu Sur y Tanganica. Grupos armados controlan las zonas más afectadas, bloqueando el acceso humanitario. La OMS advirtió de una 'colisión catastrófica de enfermedad y conflicto'. 26.5 millones de personas en inseguridad alimentaria severa a nivel nacional.",
    vp: "VP no ha cubierto ébola recientemente. Ángulo VP: por qué este brote es diferente (cepa sin vacuna + zona de guerra + hambruna = tormenta perfecta). Conexión geopolítica: cómo el control de minerales en el este del Congo impide la respuesta sanitaria. Visual potentísimo.",
    sources: [
      { headline: "Brazil and Italy rule out Ebola in previously suspected cases", medium: "NBC News", date: "2026-06-01", url: "https://www.nbcnews.com/world/africa/brazil-investigates-possible-ebola-cases-outbreak-congo-drc-rcna347819", desc: "Casos sospechosos descartados en Brasil e Italia" },
      { headline: "Ebola outbreak in DR Congo collides with conflict and hunger, WHO warns", medium: "UN News", date: "2026-05-30", url: "https://news.un.org/en/story/2026/05/1167592", desc: "OMS advierte de colisión catastrófica enfermedad-conflicto" },
      { headline: "Ebola outbreak - DRC 2026", medium: "WHO", date: "2026-06-01", url: "https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026", desc: "Dashboard oficial OMS con datos actualizados" }
    ],
    verification: "Datos oficiales OMS y CDC. Casos Brasil/Italia confirmados negativos por autoridades sanitarias nacionales."
  }
},

/* ── N9 ──────────────────────────────────────────────────── */
{
  title: "Newark: 47 arrestados por violar toque de queda — ICE restaura visitas tras 9 días de protestas",
  tags: [
    { cls:"tag-hoy",   text:"HOY" },
    { cls:"tag-eeuu",  text:"EEUU" }
  ],
  pills: ["47 arrestados (CRAN)","Toque de queda 9PM-6AM","Policía estatal de NJ desplegada","ICE restaura visitas en Delaney Hall"],
  why: "Las protestas anti-ICE en Newark son las más grandes desde que Trump endureció la política migratoria. Si se extienden a otras ciudades, podrían convertirse en un movimiento nacional.",
  viralPct: 78,
  viralCls: "vf-orange",
  viralSources: "Gothamist, ABC7, CBS New York, RedState, Yahoo News — cobertura extensa de ambos lados políticos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/U.S._Immigration_and_Customs_Enforcement_(ICE)_Enforcement_and_Removal_Operations'_(ERO)_officers_in_Chicago,_January_2025.jpg?width=800",
  imageAlt: "Operación ICE",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Jersey.svg?width=800",
  imageCredit: "ICE / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "47 personas fueron arrestadas la noche del lunes por violar el toque de queda impuesto alrededor del centro de detención Delaney Hall en Newark. El toque de queda (9PM-6AM) cubre medio kilómetro alrededor de la instalación. La gobernadora Mikie Sherrill envió policía estatal de NJ para tomar el control del perímetro. ICE accedió a restaurar las visitas a detenidos, suspendidas durante más de una semana. Las protestas empezaron en Memorial Day tras una huelga de hambre y laboral de los detenidos.",
    context: "Las protestas en Newark representan el punto más caliente de la resistencia a la política migratoria de Trump. El alcalde Ras Baraka (demócrata) impuso el toque de queda pero no para proteger a ICE sino para 'controlar la situación'. La tensión entre gobierno federal (ICE), estatal (Sherrill) y municipal (Baraka) refleja las fracturas de la política migratoria estadounidense.",
    vp: "Ángulo VP: la inmigración como campo de batalla federal-estatal-municipal. No es solo ICE vs manifestantes — es una crisis constitucional sobre quién controla la inmigración. Potencial para audiencia hispana directa (detenidos latinos).",
    sources: [
      { headline: "Newark sets curfew around ICE jail after more clashes", medium: "Gothamist", date: "2026-06-01", url: "https://gothamist.com/news/newark-sets-curfew-around-ice-jail-after-more-clashes-between-cops-and-protesters", desc: "Crónica detallada de las protestas y el toque de queda" },
      { headline: "Protesters arrested for violating curfew outside Delaney Hall", medium: "6ABC", date: "2026-06-02", url: "https://6abc.com/post/delaney-hall-protests-protesters-arrested-violating-curfew-outside-new-jersey-immigration-detention-facility/19211116/", desc: "47 arrestados incluyendo líderes de CRAN" },
      { headline: "Anti-ICE protests continue at Delaney Hall after first night of curfew", medium: "CBS New York", date: "2026-06-02", url: "https://www.cbsnews.com/newyork/news/delaney-hall-protests-curfew/", desc: "Estado actual de las protestas y respuesta de ICE" }
    ],
    verification: "Confirmado por Gothamist, CBS, ABC, Yahoo News. Cifra de arrestos de CRAN. Toque de queda confirmado por alcaldía de Newark."
  }
},

/* ── N10 ─────────────────────────────────────────────────── */
{
  title: "Operación Southern Spear: nuevos ataques el 29-30 de mayo — más de 200 muertos acumulados sin pruebas públicas",
  tags: [
    { cls:"tag-semana", text:"ESTA SEMANA" },
    { cls:"tag-latam",  text:"LATAM" },
    { cls:"tag-eeuu",   text:"EEUU" }
  ],
  pills: ["Ataques 29-30 MAY confirmados","200+ muertos acumulados","0 pruebas públicas de narcotráfico","SOCOM dirige operaciones"],
  why: "EEUU está hundiendo barcos en aguas internacionales con fuerza militar letal, sin juicio ni pruebas públicas. Si se confirma que algún barco no era narco, es un escándalo legal internacional.",
  viralPct: 86,
  viralCls: "vf-red",
  viralSources: "Military.com, PJ Media, Breitbart, War.gov (Pentágono), CFR, Just Security — cobertura creciente pero polarizada",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Lake_Erie_(CG_70)_missile_test.jpg?width=800",
  imageAlt: "Operación naval militar",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_United_States_Southern_Command.svg?width=800",
  imageCredit: "US Navy / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El Joint Task Force Southern Spear confirmó nuevos ataques letales el 29 y 30 de mayo contra embarcaciones que, según inteligencia militar, transitaban rutas conocidas de narcotráfico. Desde septiembre 2025, la operación acumula más de 200 muertos en más de 50 ataques. No se han presentado pruebas públicas de que las embarcaciones atacadas transportaran droga. El Pentágono confirmó que SOCOM autorizó los ataques.",
    context: "La operación comenzó tras el despliegue militar de EEUU en el Caribe por tensiones con Venezuela. SOUTHCOM reconfiguró la presencia naval y comenzó a atacar embarcaciones identificadas por inteligencia como 'narco'. Organizaciones como Just Security han documentado los ataques y cuestionado la legalidad de usar fuerza letal sin proceso judicial en aguas internacionales.",
    vp: "Tema exclusivo para VP: una guerra sin nombre que EEUU está librando en aguas internacionales contra supuestos narcotraficantes. ¿Es legal? ¿Quién controla la inteligencia? ¿Qué pasa si un barco era de pescadores? Gap enorme en español.",
    sources: [
      { headline: "Operation Southern Spear Is Working, and It's Not Coming to an End Anytime Soon", medium: "PJ Media", date: "2026-05-31", url: "https://pjmedia.com/sarah-anderson/2026/05/31/operation-southern-spear-is-working-and-its-not-coming-to-an-end-anytime-soon-n4953393", desc: "Defensa de la operación con datos del Pentágono" },
      { headline: "Pentagon Provides Update on Operation Southern Spear", medium: "War.gov (Pentágono)", date: "2026-05-30", url: "https://www.war.gov/News/News-Stories/Article/Article/4346303/pentagon-provides-update-on-operation-southern-spear-reaffirms-socom-called-for/", desc: "Comunicado oficial del Pentágono sobre los ataques" },
      { headline: "The U.S. Military Campaign Targeting Venezuela: What to Know", medium: "Council on Foreign Relations", date: "2026-05-28", url: "https://www.cfr.org/articles/operation-southern-spear-us-military-campaign-targeting-venezuela", desc: "Análisis legal y estratégico del CFR" }
    ],
    verification: "Ataques confirmados por Pentágono (War.gov). Cifra de muertos documentada por Just Security y Military.com."
  }
},

/* ── N11 ─────────────────────────────────────────────────── */
{
  title: "GNL ruso récord a Europa: Q1 2026 +17% vs 2025, pese a prohibición UE vigente desde abril",
  tags: [
    { cls:"tag-semana", text:"ESTA SEMANA" },
    { cls:"tag-eu",     text:"EUROPA" },
    { cls:"tag-eco",    text:"ECONOMÍA" }
  ],
  pills: ["4.8M toneladas Q1 (+17%)","Francia, España, Bélgica: mayores compradores","UE prohibió spot desde 25 ABR","Contratos largo plazo: prohibición enero 2027"],
  why: "Europa prohíbe el GNL ruso a corto plazo pero bate récords de compra. La prohibición de largo plazo no llega hasta 2027. Rusia es el ganador silencioso de la crisis de Ormuz.",
  viralPct: 79,
  viralCls: "vf-orange",
  viralSources: "Bruegel dataset, IEEFA tracker, TASS, Brussels Signal — datos verificables pero cobertura moderada",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ceremony_of_loading_of_the_first_LNG_tanker_within_the_project_of_Yamal_LNG_3.jpg?width=800",
  imageAlt: "Planta GNL Yamal, Rusia",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Russia.svg?width=800",
  imageCredit: "Gobierno de Rusia / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Las exportaciones de GNL ruso a Europa saltaron un 17% interanual en Q1 2026, alcanzando 4.8 millones de toneladas — un récord trimestral. Francia, España y Bélgica son los mayores compradores. Rusia mantiene el segundo puesto entre proveedores de GNL de la UE. La UE prohibió compras spot desde el 25 de abril, pero los contratos de largo plazo no se prohíben hasta enero 2027. En enero 2026, los envíos alcanzaron máximo histórico mensual con 2.276M m³.",
    context: "La paradoja es total: Europa vota sancionar el gas ruso mientras bate récords comprándolo. La crisis de Ormuz disparó la demanda de GNL alternativo, y la planta rusa de Yamal suministra volúmenes récord. Putin recauda más por energía gracias a una guerra que no inició pero de la que se beneficia.",
    vp: "Tema VP perfecto: la paradoja energética europea. Europa paga récord a Rusia mientras la prohíbe. Ormuz convirtió a Putin en ganador silencioso. Datos duros, paradoja clara, conexión Rusia-Ormuz-Europa.",
    sources: [
      { headline: "Russian LNG shipments to Europe rise in early 2026", medium: "Baird Maritime", date: "2026-05-15", url: "https://www.bairdmaritime.com/shipping/tankers/gas/russian-lng-shipments-to-europe-rise-in-early-2026", desc: "Datos de envíos Q1 2026" },
      { headline: "EU imports of Russian LNG gave Moscow €7.2bn in 2025", medium: "Brussels Signal", date: "2026-01-15", url: "https://brusselssignal.eu/2026/01/eu-imports-of-russian-lng-gave-moscow-e7-2bn-in-2025/", desc: "Contexto: €7.2B pagados en 2025" },
      { headline: "The European Union has increased imports of Russian gas to a record level", medium: "EU News Pravda / Welt", date: "2026-05-13", url: "https://eu.news-pravda.com/eu/2026/05/13/195861.html", desc: "Récord histórico de importaciones" }
    ],
    verification: "Datos de Bruegel European Gas Imports tracker e IEEFA European LNG Tracker. Cifras cruzadas con TASS y Brussels Signal."
  }
},

/* ── N12 ─────────────────────────────────────────────────── */
{
  title: "EEUU presenta plan acelerado de retirada de tropas de Europa — cumbre OTAN en junio será clave",
  tags: [
    { cls:"tag-semana", text:"ESTA SEMANA" },
    { cls:"tag-eu",     text:"EUROPA" },
    { cls:"tag-eeuu",   text:"EEUU" }
  ],
  pills: ["5.000 tropas de Alemania: primera fase","Mínimo legal: 76.000 en Europa","Retiro 50% capacidad de ataque profundo","Cumbre OTAN fuerza generación: JUN"],
  why: "EEUU no se va de Europa por dinero — se va porque necesita las tropas en el Pacífico. Europa gasta $864B récord en defensa pero sigue sin poder defenderse sola. El problema es industrial, no presupuestario.",
  viralPct: 81,
  viralCls: "vf-orange",
  viralSources: "Kyiv Post, Time, Euronews, Navy Times, Al Jazeera — cobertura amplia pero dispersa",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ramstein_Air_Base.jpg?width=800",
  imageAlt: "Base aérea de Ramstein, Alemania",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_NATO.svg?width=800",
  imageCredit: "USAF / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "EEUU presentará a sus aliados OTAN propuestas para la retirada acelerada de tropas de bases europeas en una conferencia de generación de fuerzas programada para junio. La primera fase ya anunciada retira 5.000 tropas de Alemania (plazo original 6-12 meses, se busca comprimir). Se recortó un 50% de la capacidad de ataque profundo en el continente. Por ley, el Pentágono no puede reducir por debajo de 76.000 tropas sin certificar al Congreso que es interés nacional.",
    context: "Europa batió récord de gasto en defensa en 2025 ($864B, +14%). Alemania cruzó el 2% del PIB por primera vez desde 1990. Pero el gasto no resuelve el problema: Europa carece de capacidad industrial de defensa suficiente. La UE lanzó SAFE (€150B en préstamos) y quiere que el 55% de compras militares sean europeas para 2030. El retiro de EEUU es más sobre reposicionar fuerzas hacia el Pacífico que sobre castigar a Europa.",
    vp: "VP cubrió OTAN/Trump (6 MAY). Ángulo nuevo: el problema NO es presupuestario (Europa gasta récord) sino industrial (no puede fabricar lo que necesita). McKinsey y Goldman documentan el gap. Conexión con el dilema Pacífico-Europa.",
    sources: [
      { headline: "US to Propose Accelerated Troop Withdrawal from Europe at June NATO Summit", medium: "Kyiv Post", date: "2026-05-30", url: "https://www.kyivpost.com/post/77215", desc: "Plan acelerado de retiro para la cumbre OTAN" },
      { headline: "The U.S. Military Drawdown in Europe Has Only Just Begun", medium: "Time", date: "2026-05-03", url: "https://time.com/article/2026/05/03/us-withdrawal-germany-nato-spain/", desc: "Análisis del alcance total del retiro" },
      { headline: "More US troop withdrawals from Europe expected, NATO commander says", medium: "Navy Times", date: "2026-05-19", url: "https://www.navytimes.com/news/your-military/2026/05/19/more-us-troop-withdrawals-from-europe-expected-nato-commander-says/", desc: "Declaraciones del comandante OTAN sobre retiros futuros" }
    ],
    verification: "Datos de Kyiv Post, Time, Navy Times. Restricción legal de 76.000 tropas documentada por Euronews y Congress.gov."
  }
},

/* ── N13 ─────────────────────────────────────────────────── */
{
  title: "Sudán: temporada de hambruna empieza hoy — 19.5M personas en crisis alimentaria, solo 20% de fondos cubiertos",
  tags: [
    { cls:"tag-hoy",  text:"HOY" },
    { cls:"tag-af",   text:"ÁFRICA" }
  ],
  pills: ["19.5M en crisis alimentaria","825K niños malnutrición severa","Solo 20% financiado","Hambruna confirmada en Al Fasher y Kadugli"],
  why: "Sudán es ya el país con más hambre del mundo. Junio marca el inicio de la lean season (junio-septiembre) — los próximos 4 meses serán los peores. Y el mundo no está financiando la respuesta.",
  viralPct: 65,
  viralCls: "vf-orange",
  viralSources: "WFP, FAO, UNICEF comunicado conjunto, UN News — cobertura institucional pero baja en medios masivos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Uganda_Refugee_Settlements_Emergency_Food_Distribution_(39910884580).jpg?width=800",
  imageAlt: "Distribución de alimentos WFP en zona de crisis",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Sudan.svg?width=800",
  imageCredit: "WFP / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Más de 19.5 millones de sudaneses (2 de cada 5) están en niveles de crisis de inseguridad alimentaria o peor. Se estima que 825.000 niños menores de 5 años sufrirán malnutrición aguda severa en 2026 (+7% vs 2025). La hambruna está confirmada en Al Fasher y Kadugli, con riesgo en 20 áreas adicionales. Solo el 20% del Plan de Respuesta Humanitaria 2026 está financiado. Junio marca el inicio de la lean season.",
    context: "La guerra civil entre el ejército sudanés y las RSF entra en su cuarto año sin perspectivas de paz. 9 millones de desplazados. El 40% de los hospitales están inactivos. El acceso humanitario está severamente restringido por el conflicto. La comunidad internacional no está respondiendo proporcionalmente a la escala de la crisis.",
    vp: "VP no ha cubierto Sudán recientemente. Gap enorme en español. Ángulo: la mayor crisis humanitaria del mundo que nadie cubre. Por qué Sudán no interesa a los medios (no hay petróleo, no hay potencia involucrada directamente, no hay imágenes accesibles).",
    sources: [
      { headline: "Risk of Famine persists as nearly 19.5 million people face acute food insecurity in Sudan", medium: "WFP/FAO/UNICEF", date: "2026-05-15", url: "https://www.wfp.org/news/joint-news-release-wfpfaounicef-risk-famine-persists-nearly-195-million-people-face-acute-food", desc: "Comunicado conjunto WFP/FAO/UNICEF con datos actualizados" },
      { headline: "Sudan hunger crisis deepens as UN warns millions face acute food shortages", medium: "UN News", date: "2026-05-28", url: "https://news.un.org/en/story/2026/05/1167528", desc: "Advertencia de la ONU sobre la lean season" },
      { headline: "Sudan Becomes the World's Hungriest Country", medium: "Action Against Hunger", date: "2026-05-20", url: "https://www.actionagainsthunger.org/press-releases/sudan-becomes-the-worlds-hungriest-country-as-famine-spreads-to-two-new-areas-of-darfur/", desc: "Sudán confirmado como el país con más hambre del mundo" }
    ],
    verification: "Datos de WFP, FAO, UNICEF (comunicado conjunto oficial). Cifras IPC de inseguridad alimentaria."
  }
},

/* ── N14 ─────────────────────────────────────────────────── */
{
  title: "Defensa europea: gasto récord de $864.000M en 2025 (+14%) — pero la industria no puede seguir el ritmo",
  tags: [
    { cls:"tag-semana", text:"ESTA SEMANA" },
    { cls:"tag-eu",     text:"EUROPA" }
  ],
  pills: ["$864B gasto 2025 (+14%)","Alemania cruza 2% PIB","SAFE: €150B en préstamos UE","Objetivo: 55% compras europeas para 2030"],
  why: "Europa gasta más que nunca en defensa y sigue sin poder fabricar lo que necesita. Goldman estima que el rearme elevará la demanda de metales industriales un 6% para 2027. El gap industrial es el verdadero problema.",
  viralPct: 76,
  viralCls: "vf-orange",
  viralSources: "Defense News, IISS Military Balance, Euronews, McKinsey, Goldman Sachs — análisis de alta calidad",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_2_A5_der_Bundeswehr.jpg?width=800",
  imageAlt: "Tanque Leopard 2 del Bundeswehr",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=800",
  imageCredit: "Bundeswehr / Wikimedia",
  imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El gasto europeo en defensa saltó un 14% en 2025 a $864B, el nivel más alto jamás registrado y el mayor incremento anual entre miembros europeos de la OTAN desde 1953. Alemania cruzó el umbral del 2% del PIB por primera vez desde 1990 ($114B, +24%). La industria de defensa europea generó €183.4B en 2024 (+13.8%), empleando a 633.000 personas. La producción de munición pasó de 300.000 rondas/año en 2022 a ~2M a finales de 2025. La UE lanzó SAFE (€150B en préstamos) y planea que el 55% de compras sean europeas para 2030.",
    context: "El problema no es el gasto sino la capacidad industrial. Europa no puede producir tanques, munición, misiles y drones al ritmo que necesita. Goldman estima que el 40% del boom de gasto irá a equipos intensivos en metales — el doble de la norma OTAN. Europa planea excluir a contratistas estadounidenses de su plan de $860B.",
    vp: "VP cubrió OTAN/Trump (6 MAY). Ángulo nuevo: Europa gasta récord pero su industria de defensa no puede absorberlo. El dinero sin fábricas es inútil. ¿Puede Europa rearmarse a tiempo? Datos de Goldman, McKinsey, IISS.",
    sources: [
      { headline: "Global military spending surges and reaches record high", medium: "Defense News", date: "2026-04-27", url: "https://www.defensenews.com/global/europe/2026/04/27/global-military-spending-surges-and-reaches-record-high/", desc: "Datos SIPRI/IISS de gasto récord" },
      { headline: "Five industries benefiting from Europe's defence spending boom", medium: "Euronews", date: "2026-05-29", url: "https://www.euronews.com/business/2026/05/29/five-industries-benefiting-from-europes-defence-spending-boom", desc: "Sectores que se benefician del boom" },
      { headline: "Europe's $860 billion defense plan freezes out US contractors", medium: "Courthouse News", date: "2026-05-20", url: "https://courthousenews.com/europes-860-billion-defense-plan-freezes-out-us-contractors/", desc: "Europa excluye a EEUU de su rearme" }
    ],
    verification: "Datos IISS Military Balance 2026, SIPRI, EDA Defence Data 2024-2025. Goldman Sachs research note."
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
  flag: "ir",
  title: "El mecanismo de escalada que puede destruir el deal Irán-EEUU: por qué cada 'represalia proporcional' acerca la guerra total",
  tags: [
    { cls:"tag-me", text:"ORIENTE MEDIO" },
    { cls:"tag-break", text:"BREAKING" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: portada WaPo, CNBC, NPR — máxima cobertura" },
    { cls:"chip-gap",  text:"📡 Gap: cubierto como noticia pero NO como mecanismo de escalada" },
    { cls:"chip-vp",   text:"📺 VP: trató error Netanyahu (12 MAY) — ángulo nuevo: el mecanismo" },
    { cls:"chip-comp", text:"🔍 Competencia: canales castellanoparlantes cubren noticias Irán pero no el mecanismo de escalada" }
  ],
  potText: "EXPLOSIVO", potCls: "pot-fire",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_hormuz_full.jpg?width=1200",
  bannerAlt: "Estrecho de Ormuz",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=1200",
  tesis: "Cada represalia entre EEUU e Irán se presenta como 'proporcional', pero cada ciclo sube el umbral: de drones a radares, de radares a misiles balísticos contra tropas. El deal de paz que debía calmar los mercados está siendo destruido por el propio mecanismo diseñado para 'disuadir sin escalar'. La paradoja: EEUU negocia la paz con Irán mientras bombardea Irán, e Irán negocia la paz con EEUU mientras lanza misiles a Kuwait. El deal pende del próximo incidente — y los incidentes son inevitables cuando ambos bandos tienen armas desplegadas en el mismo espacio.",
  fields: [
    { label: "🗞️ La noticia", value: "Irán lanza 2 misiles balísticos contra bases EEUU en Kuwait (1 JUN). CENTCOM intercepta. Respuesta a bombardeos de EEUU en Goruk y Qeshm (31 MAY). Brent salta a $96." },
    { label: "🔬 Segunda derivada", value: "El mecanismo de 'represalia proporcional' es una escalera sin fin. Cada peldaño es más peligroso que el anterior. De derribar un dron a lanzar balísticos hay un salto cualitativo. El próximo peldaño: ¿ataques a instalaciones petroleras? ¿cierre total de Ormuz? ¿bajas estadounidenses?" },
    { label: "❓ Gran pregunta", value: "¿Puede existir un deal de paz mientras ambos bandos se atacan cada 48 horas?" },
    { label: "⚔️ El conflicto", value: "Trump quiere un deal antes de las midterms. Irán quiere levantar sanciones. Pero los militares de ambos bandos siguen disparando. Netanyahu presiona para más acción. Arabia Saudí quiere estabilidad. China observa y compra petróleo ruso barato." },
    { label: "⏰ Por qué ahora", value: "Los misiles a Kuwait del 1 JUN representan la mayor escalada desde el inicio de la guerra. Es la primera vez que Irán ataca directamente a tropas EEUU fuera de Irak con balísticos." },
    { label: "📺 VP ya lo trató?", value: "Sí — error de Netanyahu con Irán (12 MAY, 152K). El ángulo es radicalmente diferente: no el error político sino el mecanismo militar de escalada que nadie puede parar." },
    { label: "🚀 Motor viral", value: "COBERTURA PREMIUM: Portada WaPo, breaking CNBC, NPR, NBC. ACTUALIDAD: evolución en tiempo real, puede cambiar en 24h. VISUAL: misiles, interceptaciones, mapa Ormuz, Kuwait, bases. CONFLICTO: EEUU vs Irán, Trump vs militares, deal vs guerra. AUDIENCIA HISPANA: precio del petróleo afecta directamente. YOUTUBE: canales castellanoparlantes cubren noticias pero no el mecanismo — hueco para análisis profundo. VP: temas Irán funcionan bien (~152K el error Netanyahu)." },
    { label: "🔍 Señal competencia", value: "Cubierto como noticia por varios canales castellanoparlantes (cobertura tipo noticiero). NO cubierto como análisis del mecanismo de escalada. Oportunidad clara para VP con enfoque estructural." },
    { label: "🔎 Qué investigar más", value: "Precedentes históricos de escaladas 'proporcionales' que derivaron en guerra total. Doctrina militar CENTCOM sobre umbrales. Posición de China y Rusia ante un colapso del deal. Impacto específico de cada peldaño en el precio del petróleo." }
  ],
  sources: [
    { headline: "U.S. bombs Iranian military sites, then downs missiles Tehran fired at troops in Kuwait", medium: "Washington Post", date: "2026-06-01", url: "https://www.washingtonpost.com/world/2026/06/01/iran-us-irael-war-kuwait-strikes/3b660f82-5d72-11f1-9c46-d6211372eede_story.html", desc: "Crónica completa ataque-respuesta" },
    { headline: "U.S. intercepted Iran's missiles targeting Kuwait bases", medium: "CNBC", date: "2026-06-01", url: "https://www.cnbc.com/2026/06/01/us-iran-war-missiles-kuwait.html", desc: "Confirmación CENTCOM" },
    { headline: "Oil drops 20% from 2026 peak on optimism over ceasefire talks", medium: "CNBC", date: "2026-05-29", url: "https://www.cnbc.com/2026/05/29/oil-prices-iran-ceasefire-us-trump-strait-hormuz-energy-costs.html", desc: "Patrón: cada escalada sube el Brent" },
    { headline: "2026 Iran war", medium: "Wikipedia", date: "2026-06-02", url: "https://en.wikipedia.org/wiki/2026_Iran_war", desc: "Línea temporal completa del conflicto" }
  ]
},

/* ── P2 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P2",
  flag: "lb",
  title: "La paz a medias de Líbano: cómo Israel negocia el alto el fuego mientras ocupa más territorio que en 25 años",
  tags: [
    { cls:"tag-me", text:"ORIENTE MEDIO" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Axios exclusiva, WaPo, CNN — alto interés" },
    { cls:"chip-gap",  text:"📡 Gap: nadie analiza la paradoja alto-el-fuego-parcial + avance territorial" },
    { cls:"chip-vp",   text:"📺 VP: Beaufort (cubierto 1 JUN) — ahora la dimensión diplomática" },
    { cls:"chip-comp", text:"🔍 Competencia: canales cubren la noticia, no la paradoja estratégica" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort1982.jpg?width=1200",
  bannerAlt: "Castillo de Beaufort, Líbano",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lebanon.svg?width=1200",
  tesis: "El alto el fuego parcial de Líbano es una obra maestra de ambigüedad estratégica: protege Beirut (lo que quiere EEUU para no perder el deal con Irán) mientras permite a Israel seguir avanzando en el sur (lo que quiere Netanyahu para crear una nueva zona de seguridad). Es la misma lógica que creó a Hezbollah en 1982 — una ocupación 'temporal' que duró 18 años. La historia se repite en el mismo castillo.",
  fields: [
    { label: "🗞️ La noticia", value: "Líbano anunció alto el fuego parcial el 2 JUN: Beirut sin bombardeos, sur en combate activo. Israel avanza al río Zaharani (mayor penetración en 25 años). 2 proyectiles lanzados desde Líbano la mañana del 2 JUN pese al acuerdo." },
    { label: "🔬 Segunda derivada", value: "El alto el fuego parcial es un formato diplomático diseñado para satisfacer a todos sin resolver nada: EEUU salva el deal, Netanyahu avanza, Hezbollah protege Beirut. Pero las 'zonas de seguridad' israelíes tienen historial: la de 1982 duró 18 años y creó a Hezbollah." },
    { label: "❓ Gran pregunta", value: "¿Puede Israel ocupar el sur del Líbano sin crear otro Hezbollah?" },
    { label: "⚔️ El conflicto", value: "Trump vs Netanyahu (control del aliado). Israel vs Hezbollah (territorio). EEUU vs Irán (deal). Líbano vs sí mismo (soberanía vs realidad militar)." },
    { label: "⏰ Por qué ahora", value: "El alto el fuego parcial se anunció hoy. Negociación en Washington el 3 JUN. La ventana para un acuerdo más amplio es de días." },
    { label: "📺 VP ya lo trató?", value: "Beaufort mencionado en radar 1 JUN. Error Netanyahu (12 MAY). El ángulo es nuevo: la dimensión diplomática del alto el fuego parcial como herramienta de ocupación gradual." },
    { label: "🚀 Motor viral", value: "COBERTURA: Axios, WaPo, CNN — exclusivas. VISUAL: mapas de avance, Beaufort, Zaharani, Beirut. CONFLICTO: ocupación vs paz. HISPANA: guerra + diplomacia + paradoja. YOUTUBE: la competencia cubre Líbano pero no la paradoja paz-ocupación. HISTORIAL VP: temas Israel/Líbano funcionan muy bien." },
    { label: "🔍 Señal competencia", value: "Cubierto como noticia. NO cubierto como análisis de la paradoja alto-el-fuego + ocupación. Oportunidad clara para VP." },
    { label: "🔎 Qué investigar más", value: "Historia de la zona de seguridad israelí 1982-2000. Paralelismos con Beaufort. Posición de Hezbollah sobre el sur. Doctrina israelí sobre 'zonas tampón'. Impacto en población civil libanesa del sur." }
  ],
  sources: [
    { headline: "Lebanese official told U.S. that Hezbollah ready for full ceasefire", medium: "Axios", date: "2026-06-01", url: "https://www.axios.com/2026/06/01/lebanon-full-ceasefire-hezbollah-israel-nabih-berri", desc: "Exclusiva Berri-Hezbollah" },
    { headline: "Trump says Israel and Hezbollah have agreed to dial back fighting", medium: "Washington Post", date: "2026-06-01", url: "https://www.washingtonpost.com/world/2026/06/01/lebanon-israel-hezbollah-netanyahu-dahiyeh-rubio-ceasefire-airstrikes/78a49cb2-5d98-11f1-9c46-d6211372eede_story.html", desc: "Anuncio Trump + contexto Netanyahu" },
    { headline: "Lebanon announces partial ceasefire but attacks continue", medium: "Japan Times/Reuters", date: "2026-06-02", url: "https://www.japantimes.co.jp/news/2026/06/02/world/lebanon-ceasefire-israel-hezbollah-attacks/", desc: "Violaciones del acuerdo ya el primer día" }
  ]
},

/* ── P3 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P3",
  flag: "co",
  title: "El patrón continental: por qué Latinoamérica elige outsiders furiosos y qué dice De la Espriella sobre el futuro de la región",
  tags: [
    { cls:"tag-latam", text:"LATAM" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: El Tiempo, Infobae, Semana — dominante en medios hispanos" },
    { cls:"chip-gap",  text:"📡 Gap: nadie analiza el PATRÓN continental Bukele-Milei-De la Espriella" },
    { cls:"chip-vp",   text:"📺 VP: cubrió elecciones Colombia (~3 MAY) — ángulo radicalmente distinto" },
    { cls:"chip-comp", text:"🔍 Competencia: cobertura masiva pero superficial (quién ganó, no qué significa)" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=1200",
  bannerAlt: "Congreso de Colombia",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",
  tesis: "De la Espriella no es una anomalía — es el último eslabón de un patrón continental: Bukele en El Salvador, Milei en Argentina, ahora De la Espriella en Colombia. Todos outsiders, todos furiosos contra el sistema, todos con estética trumpista, todos ganando. La pregunta no es si De la Espriella ganará sino por qué Latinoamérica sigue eligiendo a quien promete destruir el sistema desde dentro. Y la respuesta es incómoda: porque el sistema no funciona.",
  fields: [
    { label: "🗞️ La noticia", value: "De la Espriella ganó 1ª vuelta con 43.74% (10.36M votos). Cepeda 40.90%. 2ª vuelta 21 JUN. Cepeda no reconoce resultados. Gaviria exige a Petro respeto institucional." },
    { label: "🔬 Segunda derivada", value: "El fenómeno no es colombiano — es continental. Bukele (2019), Milei (2023), De la Espriella (2026) comparten patrón: outsiders mediáticos, anti-establishment, estética Trump, discurso de 'destruir para reconstruir'. Los partidos tradicionales latinoamericanos están en colapso." },
    { label: "❓ Gran pregunta", value: "¿Está Latinoamérica eligiendo a sus propios Trumps o está inventando algo nuevo?" },
    { label: "⚔️ El conflicto", value: "Outsiders vs establishment. Derecha populista vs izquierda populista. Democracia representativa vs democracia plebiscitaria. Colombia: abogado mediático vs heredero del petrismo." },
    { label: "⏰ Por qué ahora", value: "1ª vuelta fue el 31 MAY. 2ª vuelta el 21 JUN. Ventana editorial perfecta: 3 semanas para publicar antes del desenlace." },
    { label: "📺 VP ya lo trató?", value: "Sí — elecciones Colombia con grupos armados (~3 MAY). Video Bukele (6.59M — el más exitoso de VP). El ángulo continental Bukele-Milei-De la Espriella es nuevo y conecta con el mayor éxito de VP." },
    { label: "🚀 Motor viral", value: "COBERTURA: dominante en medios hispanos. AUDIENCIA: Colombia es el 3er país más poblado de Latam — audiencia directa enorme. CONFLICTO: polarización extrema, no reconocimiento, posible crisis. HISTORIAL VP: Bukele = 6.59M views (el mejor video). YOUTUBE: muchos cubren el resultado pero nadie el patrón continental. TIMING: publicar antes de la 2ª vuelta." },
    { label: "🔍 Señal competencia", value: "Cobertura masiva pero superficial. Los canales castellanoparlantes cubren quién ganó, no el patrón continental. Oportunidad para VP de conectar Bukele-Milei-De la Espriella en un análisis profundo." },
    { label: "🔎 Qué investigar más", value: "Perfil completo de De la Espriella. Conexiones con Trump y GOP. Paralelos exactos con Bukele y Milei (discurso, financiación, base social). Qué pasó con los partidos tradicionales colombianos. Encuestas de segunda vuelta." }
  ],
  sources: [
    { headline: "Sorpresa en las elecciones de Colombia: De la Espriella gana primera vuelta", medium: "Infobae", date: "2026-05-31", url: "https://www.infobae.com/colombia/2026/05/31/sorpresa-en-las-elecciones-de-colombia-abelardo-de-la-espriella-gana-la-primera-vuelta-y-disputara-la-presidencia-con-ivan-cepeda/", desc: "Análisis de la sorpresa electoral" },
    { headline: "Elecciones Colombia 2026: últimas noticias y reacciones", medium: "El Tiempo", date: "2026-06-01", url: "https://www.eltiempo.com/politica/elecciones-colombia-2026/elecciones-2026-minuto-a-minuto-de-ultimas-noticias-y-reacciones-a-la-segunda-vuelta-presidencial-entre-abelardo-de-la-espriella-e-ivan-cepeda-3561035", desc: "Gaviria y reacciones políticas" },
    { headline: "Elecciones presidenciales 2026 EN VIVO", medium: "Semana", date: "2026-05-31", url: "https://www.semana.com/nacion/articulo/resultados-elecciones-colombia-2026-en-vivo-habla-abelardo-de-la-espriella-y-anticipa-que-cambiara-la-historia/202622/", desc: "Declaraciones de De la Espriella" }
  ]
},

/* ── P4 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P4",
  flag: "es",
  title: "Zapatero y la red Venezuela-España: cómo un expresidente puede convertirse en el mayor escándalo de la democracia española",
  tags: [
    { cls:"tag-es", text:"ESPAÑA" },
    { cls:"tag-hoy", text:"HOY" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Infobae portada, NPR internacional, Brussels Signal — alta cobertura" },
    { cls:"chip-gap",  text:"📡 Gap: medios cubren el caso pero NO la red geopolítica Venezuela-España" },
    { cls:"chip-vp",   text:"📺 VP: cubrió imputación (~22 MAY) — ahora los correos abren nueva fase" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto en España pero NO con profundidad geopolítica tipo VP" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_la_Moncloa.jpg?width=1200",
  bannerAlt: "Palacio de la Moncloa",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=1200",
  tesis: "El caso Zapatero no es solo un caso de corrupción española. Es la punta de una red que conecta a un expresidente europeo con PdVSA, oro venezolano y el programa CLAP de Maduro. Si los correos revelan lo que el juez busca, será la primera vez que se documenta una operación de influencia venezolana a través de un expresidente occidental. No es Zapatero — es la red.",
  fields: [
    { label: "🗞️ La noticia", value: "Audiencia Nacional autoriza acceso a correos oficiales de Zapatero y sus hijas. Declaración aplazada al 17-18 JUN. Imputado por organización criminal, tráfico de influencias y falsedad documental." },
    { label: "🔬 Segunda derivada", value: "Los correos son la prueba que el juez busca para conectar directamente a Zapatero con la operación Venezuela. Si aparecen comunicaciones con PdVSA, CLAP o intermediarios del régimen, el caso salta de tráfico de influencias a red de blanqueo internacional." },
    { label: "❓ Gran pregunta", value: "¿Cómo pudo un expresidente europeo convertirse en intermediario del régimen de Maduro sin que nadie lo detectara en 15 años?" },
    { label: "⚔️ El conflicto", value: "Poder judicial vs poder político. España vs Venezuela (redes de influencia). Transparencia vs secreto de estado. PSOE vs la verdad sobre uno de sus expresidentes." },
    { label: "⏰ Por qué ahora", value: "Los correos acaban de ser autorizados. La declaración es el 17-18 JUN. Ventana editorial perfecta: publicar análisis profundo antes de la declaración." },
    { label: "📺 VP ya lo trató?", value: "Sí — imputación (~22 MAY). Ángulo nuevo: la dimensión geopolítica de la red. No es solo corrupción española — es influencia venezolana en Europa." },
    { label: "🚀 Motor viral", value: "COBERTURA: portada en España, repercusión internacional (NPR, Brussels Signal). AUDIENCIA: directa para España y Latam (conexión Venezuela). CONFLICTO: expresidente vs justicia. PERSONAJE: Zapatero es reconocible. VISUAL: juzgados, Moncloa, Venezuela. YOUTUBE: cubierto como noticia política pero NO como red geopolítica. TIMING: antes de la declaración del 17-18 JUN." },
    { label: "🔍 Señal competencia", value: "Cubierto ampliamente en medios españoles como caso judicial. NO cubierto con profundidad geopolítica (conexión Venezuela-PdVSA-CLAP-España). Oportunidad clara para VP." },
    { label: "🔎 Qué investigar más", value: "La ruta del dinero Plus Ultra-PdVSA. El papel del oro venezolano. Quién más está implicado. Precedentes de redes de influencia de estados petroleros en Europa. Documentación del CLAP. Conexiones con otros políticos europeos." }
  ],
  sources: [
    { headline: "Spain's Zapatero Plus Ultra corruption scandal exposes Venezuela links", medium: "The Olive Press", date: "2026-05-20", url: "https://www.theolivepress.es/spain-news/2026/05/20/spains-zapatero-plus-ultra-corruption-scandal-exposes-venezuela-links/", desc: "Conexiones Venezuela documentadas" },
    { headline: "Former Spanish Prime Minister Zapatero is under investigation", medium: "NPR", date: "2026-05-20", url: "https://www.npr.org/2026/05/20/nx-s1-5828248/former-spanish-pm-zapatero-investigation", desc: "Cobertura internacional del caso" },
    { headline: "Zapatero y Venezuela: la conexión que el juez sitúa en el centro de la trama", medium: "Euronews", date: "2026-05-20", url: "https://es.euronews.com/my-europe/2026/05/20/zapatero-y-venezuela-la-conexion-que-el-juez-situa-en-el-centro-de-la-trama", desc: "Análisis de la conexión Venezuela" }
  ]
},

/* ── P5 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P5",
  flag: "",
  title: "La paradoja del rearme europeo: $864.000 millones y Europa sigue sin saber fabricar lo que necesita",
  tags: [
    { cls:"tag-eu", text:"EUROPA" },
    { cls:"tag-eco", text:"ECONOMÍA" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Defense News, IISS, McKinsey, Goldman — datos de alta calidad" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren el gasto, NADIE el gap industrial" },
    { cls:"chip-vp",   text:"📺 VP: OTAN/Trump (6 MAY) — ángulo nuevo: el problema es la fábrica, no el dinero" },
    { cls:"chip-comp", text:"🔍 Competencia: señal preliminar — canales cubren defensa pero no el gap industrial" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_2_A5_der_Bundeswehr.jpg?width=1200",
  bannerAlt: "Fábrica de defensa europea",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_2_A5_der_Bundeswehr.jpg?width=1200",
  tesis: "Europa gasta más que nunca en defensa ($864B récord, +14%) y sigue sin poder defenderse sola. El problema no es presupuestario — es industrial. Europa no puede fabricar tanques, munición, misiles y drones al ritmo necesario. Goldman estima que el 40% del boom irá a equipos intensivos en metales, el doble de la norma OTAN. Y mientras Europa intenta excluir a contratistas estadounidenses de su plan de $860B, EEUU retira tropas. Más dinero sin fábricas es como comprar balas sin pistola.",
  fields: [
    { label: "🗞️ La noticia", value: "Gasto europeo en defensa: $864B en 2025 (+14%, récord). Alemania cruza 2% PIB. UE lanza SAFE (€150B). Plan para excluir a EEUU del rearme. Producción munición: de 300K a 2M rondas/año." },
    { label: "🔬 Segunda derivada", value: "El dinero sin capacidad industrial es inútil. Europa puede votar presupuestos pero no puede producir lo que esos presupuestos compran. El gap industrial se mide en años (fábricas, cadenas de suministro, ingenieros), no en euros." },
    { label: "❓ Gran pregunta", value: "¿Puede Europa rearmarse a tiempo o llegará tarde a su propia defensa?" },
    { label: "⚔️ El conflicto", value: "Europa vs reloj. Industria vs presupuesto. Autonomía vs dependencia de EEUU. EEUU se va → Europa necesita reemplazar capacidades que tardó 70 años en construir." },
    { label: "⏰ Por qué ahora", value: "EEUU presenta plan acelerado de retiro en junio. Europa bate récord de gasto. Goldman y McKinsey publican análisis del gap. Es la primera vez que el problema se cuantifica." },
    { label: "📺 VP ya lo trató?", value: "VP cubrió OTAN/Trump (6 MAY, 203K). Ángulo nuevo: no es Trump el problema — es que Europa no tiene fábricas." },
    { label: "🚀 Motor viral", value: "COBERTURA: IISS, Goldman, McKinsey, Defense News — datos premium. VISUAL: fábricas, tanques, munición, mapas de producción. CONFLICTO: dinero vs capacidad. AUDIENCIA: España gasta récord, audiencia directa. YOUTUBE: hipótesis de viralidad — el gap industrial no está cubierto en español. VP: OTAN/Trump funcionó (203K)." },
    { label: "🔍 Señal competencia", value: "Señal preliminar: canales cubren defensa europea pero se centran en cifras de gasto, no en el gap industrial. Oportunidad para VP con datos McKinsey/Goldman." },
    { label: "🔎 Qué investigar más", value: "Datos específicos de producción por país. Comparativa EEUU-Europa en capacidad industrial. Cuánto tardaría Europa en ser autosuficiente. Papel de empresas como Rheinmetall, BAE, MBDA. Qué pasa con los pedidos pendientes." }
  ],
  sources: [
    { headline: "Global military spending surges and reaches record high", medium: "Defense News", date: "2026-04-27", url: "https://www.defensenews.com/global/europe/2026/04/27/global-military-spending-surges-and-reaches-record-high/", desc: "Datos SIPRI/IISS gasto récord" },
    { headline: "Europe's $860 billion defense plan freezes out US contractors", medium: "Courthouse News", date: "2026-05-20", url: "https://courthousenews.com/europes-860-billion-defense-plan-freezes-out-us-contractors/", desc: "Europa excluye a contratistas EEUU" },
    { headline: "Five industries benefiting from Europe's defence spending boom", medium: "Euronews", date: "2026-05-29", url: "https://www.euronews.com/business/2026/05/29/five-industries-benefiting-from-europes-defence-spending-boom", desc: "Sectores industriales impactados" }
  ]
},

/* ── P6 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P6",
  flag: "et",
  title: "Del Nobel de la Paz al autócrata: cómo Abiy Ahmed controla Etiopía, las nacientes del Nilo y el futuro de 300 millones de personas",
  tags: [
    { cls:"tag-af", text:"ÁFRICA" },
    { cls:"tag-ayer", text:"AYER" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Al Jazeera extensa, señal moderada en premium anglosajones" },
    { cls:"chip-gap",  text:"📡 Gap ENORME: prácticamente cero cobertura en español" },
    { cls:"chip-vp",   text:"📺 VP: NO ha cubierto a Abiy — gap total" },
    { cls:"chip-comp", text:"🔍 Competencia: pendiente de comprobar — hipótesis de gap casi total en español" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Grand_Ethiopian_Renaissance_Dam.jpg?width=1200",
  bannerAlt: "Gran Presa del Renacimiento Etíope (GERD)",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ethiopia.svg?width=1200",
  tesis: "Abiy Ahmed ganó el Nobel de la Paz en 2019 por la paz con Eritrea. Desde entonces ha librado una guerra civil con cientos de miles de muertos, consolidado un partido único y excluido a regiones enteras del voto. Ahora controla Etiopía y, con ella, las nacientes del Nilo a través de la GERD. 300 millones de personas en Egipto y Sudán dependen de un río que un autócrata premiado con el Nobel puede cerrar. Es la historia de cómo un premio de paz se convierte en herramienta de poder.",
  fields: [
    { label: "🗞️ La noticia", value: "Elecciones 1 JUN: PP gana 457/547 escaños. Tigray no votó. 30 distritos Amhara excluidos. Abiy confirmado para 5 años más. 50M+ registrados en 50.000+ colegios." },
    { label: "🔬 Segunda derivada", value: "Abiy no solo controla Etiopía — controla las nacientes del Nilo. La GERD puede regular el flujo de agua a Egipto (100M personas) y Sudán (45M). Un autócrata con el Nobel de la Paz tiene la mano sobre la llave de agua de 300 millones de personas." },
    { label: "❓ Gran pregunta", value: "¿Puede un hombre que ganó el Nobel de la Paz usar el Nilo como arma geopolítica?" },
    { label: "⚔️ El conflicto", value: "Etiopía vs Egipto (Nilo). Abiy vs oposición interna (Tigray, Amhara). Democracia vs autocracia. Paz premiada vs guerra librada." },
    { label: "⏰ Por qué ahora", value: "Elecciones del 1 JUN confirman 5 años más de Abiy. La GERD está operativa. Las negociaciones con Egipto están estancadas. La hambruna en Sudán complica todo." },
    { label: "📺 VP ya lo trató?", value: "No. Gap total. La historia Nobel → autócrata es narrativamente perfecta para VP." },
    { label: "🚀 Motor viral", value: "VISUAL: presa GERD, mapa del Nilo, Abiy con el Nobel. CONFLICTO: Nobel de Paz vs guerra civil. AUDIENCIA: agua como recurso estratégico interesa a todos. YOUTUBE: hipótesis de viralidad — gap casi total en español. PERSONAJE: Abiy es reconocible (Nobel). VP: temas África con buena ejecución pueden funcionar muy bien." },
    { label: "🔍 Señal competencia", value: "Competencia pendiente de comprobar. Hipótesis: gap casi total en canales castellanoparlantes. Etiopía raramente se cubre en español con profundidad." },
    { label: "🔎 Qué investigar más", value: "Estado actual de la GERD (llenado, producción, negociaciones con Egipto). Cifras reales de la guerra de Tigray. Situación en Amhara. Relación Abiy-Isaías (Eritrea). Posición de China (principal financiador de la presa). Impacto hidrológico real sobre Egipto." }
  ],
  sources: [
    { headline: "Ethiopia holds elections with PM Abiy's party expected to dominate", medium: "Al Jazeera", date: "2026-06-01", url: "https://www.aljazeera.com/news/2026/6/1/ethiopia-holds-elections-with-pm-abiys-party-expected-to-dominate", desc: "Jornada electoral y contexto político" },
    { headline: "Ethiopia to vote on June 1 as Abiy's ruling party eyes landslide", medium: "Al Jazeera", date: "2026-05-29", url: "https://www.aljazeera.com/news/2026/5/29/ethiopia-to-vote-on-june-1-as-abiys-ruling-party-eyes-landslide", desc: "Exclusión de oposición pre-electoral" },
    { headline: "2026 Ethiopian general election", medium: "Wikipedia", date: "2026-06-02", url: "https://en.wikipedia.org/wiki/2026_Ethiopian_general_election", desc: "Resultados desglosados" }
  ]
},

/* ── P7 ──────────────────────────────────────────────────── */
{
  golden: false,
  number: "P7",
  flag: "",
  title: "La guerra sin nombre: cómo EEUU hunde barcos en aguas internacionales sin juicio, sin pruebas y sin que nadie lo cuestione",
  tags: [
    { cls:"tag-latam", text:"LATAM" },
    { cls:"tag-eeuu", text:"EEUU" }
  ],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: CFR, Just Security, Military.com, Pentágono — creciente" },
    { cls:"chip-gap",  text:"📡 Gap ENORME: prácticamente CERO cobertura en español" },
    { cls:"chip-vp",   text:"📺 VP: NO ha cubierto — exclusiva potencial" },
    { cls:"chip-comp", text:"🔍 Competencia: pendiente de comprobar — hipótesis de gap total en español" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Lake_Erie_(CG_70)_missile_test.jpg?width=1200",
  bannerAlt: "Buque naval estadounidense",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_United_States_Southern_Command.svg?width=1200",
  tesis: "EEUU está librando una guerra en aguas internacionales contra supuestos narcotraficantes: más de 200 muertos en más de 50 ataques desde septiembre 2025, sin juicio previo, sin pruebas públicas de que los barcos transportaran droga y sin que ningún organismo internacional lo cuestione formalmente. SOCOM dirige las operaciones. El Pentágono las defiende. ¿Y si un barco era de pescadores? ¿Quién responde? Esta es la guerra más opaca que EEUU ha librado desde los drones en Yemen.",
  fields: [
    { label: "🗞️ La noticia", value: "Nuevos ataques letales confirmados el 29-30 MAY. 200+ muertos acumulados. SOCOM autoriza. Pentágono defiende: 'está funcionando'. CFR publica análisis legal." },
    { label: "🔬 Segunda derivada", value: "La legalidad es el agujero negro: EEUU usa fuerza letal en aguas internacionales basándose en inteligencia clasificada. No hay juicio. No hay pruebas públicas. No hay supervisión civil efectiva. Es el mismo modelo de los drones en Yemen/Somalia, aplicado al Caribe." },
    { label: "❓ Gran pregunta", value: "¿Puede un país hundir barcos en aguas internacionales sin pruebas y llamarlo 'lucha contra el narco'?" },
    { label: "⚔️ El conflicto", value: "EEUU vs derechos humanos. Seguridad vs legalidad. Inteligencia clasificada vs transparencia. Venezuela como justificación vs víctimas reales." },
    { label: "⏰ Por qué ahora", value: "Nuevos ataques esta semana. CFR acaba de publicar análisis. Just Security documenta todos los ataques. La acumulación de 200+ muertos empieza a generar escrutinio." },
    { label: "📺 VP ya lo trató?", value: "No. Exclusiva potencial para VP. Gap total." },
    { label: "🚀 Motor viral", value: "CONFLICTO: potentísimo (guerra secreta, sin pruebas, muertos). VISUAL: barcos, Caribe, operaciones navales, mapas de rutas. AUDIENCIA HISPANA: directa (víctimas latinoamericanas, contexto Venezuela). YOUTUBE: hipótesis de viralidad — gap total en español, tema no explorado. PERSONAJE: SOCOM como actor opaco. POTENCIAL VP: el tipo de exclusiva investigativa que puede explotar." },
    { label: "🔍 Señal competencia", value: "Competencia pendiente de comprobar. Hipótesis de gap total en español. En inglés, solo CFR y Just Security lo cubren con profundidad legal." },
    { label: "🔎 Qué investigar más", value: "Listado completo de ataques documentados por Just Security. Precedentes legales (drones en Yemen). Posición de países latinoamericanos. Víctimas identificadas. Informes clasificados vs evidencia pública. Papel de Colombia y otros aliados." }
  ],
  sources: [
    { headline: "The U.S. Military Campaign Targeting Venezuela: What to Know", medium: "Council on Foreign Relations", date: "2026-05-28", url: "https://www.cfr.org/articles/operation-southern-spear-us-military-campaign-targeting-venezuela", desc: "Análisis legal y estratégico completo" },
    { headline: "Pentagon Provides Update on Operation Southern Spear", medium: "War.gov (Pentágono)", date: "2026-05-30", url: "https://www.war.gov/News/News-Stories/Article/Article/4346303/pentagon-provides-update-on-operation-southern-spear-reaffirms-socom-called-for/", desc: "Comunicado oficial del Pentágono" },
    { headline: "Collection: U.S. Lethal Strikes on Suspected Drug Traffickers", medium: "Just Security", date: "2026-05-30", url: "https://www.justsecurity.org/120753/collection-u-s-lethal-strikes-on-suspected-drug-traffickers/", desc: "Documentación completa de todos los ataques" }
  ]
}

],

/* ════════════════════════════════════════════════════════════
   RANKING
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Escalada Irán-EEUU",   subtema:"Misiles a Kuwait · mecanismo de escalada",  viral:97, depth:95, timing:99, fit:93, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Líbano alto fuego parcial", subtema:"Ocupación + paz: paradoja estratégica", viral:93, depth:90, timing:98, fit:90, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Colombia patrón continental", subtema:"Bukele-Milei-De la Espriella",        viral:82, depth:88, timing:95, fit:95, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Zapatero red Venezuela",  subtema:"Correos + geopolítica de la red",          viral:88, depth:85, timing:90, fit:88, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Rearme europeo gap industrial", subtema:"$864B sin fábricas",                 viral:76, depth:92, timing:85, fit:88, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Etiopía Nobel→autócrata", subtema:"Abiy + GERD + Nilo",                      viral:72, depth:90, timing:88, fit:85, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Op. Southern Spear",    subtema:"Guerra sin nombre en el Caribe",             viral:86, depth:93, timing:82, fit:90, verdText:"✅ INVESTIGAR",   verdCls:"verd-maybe" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "🦠 Ébola: cepa Bundibugyo sin vacuna en zona de guerra",
    body: "1.100+ casos, 350+ muertes, PHEIC declarada. Si se confirma un caso fuera de África (Brasil/Italia fueron negativos), el pánico global cambiará todo.",
    trigger: "Caso confirmado en Europa o América. Fallo de contención. Superación de 2.000 casos.",
    sourceUrl: "https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026",
    sourceText: "WHO — Ebola outbreak DRC 2026"
  },
  {
    title: "🇸🇩 Sudán: lean season junio-septiembre",
    body: "19.5M en crisis alimentaria. Solo 20% financiado. La temporada de hambruna empieza hoy. Si muere un 5% de los niños con malnutrición severa, será la peor hambruna del siglo XXI.",
    trigger: "Declaración de hambruna en nuevas áreas. Colapso total de financiación. Imágenes de hambruna masiva.",
    sourceUrl: "https://www.wfp.org/emergencies/sudan",
    sourceText: "WFP — Sudan emergency"
  },
  {
    title: "🇹🇼 Taiwán-China: Pratas como test de resistencia",
    body: "Standoff de 33h resuelto. Pero China desplegó 100+ buques. Las Pratas están a 400km de Taiwán y son vulnerables. Si China intenta una presencia permanente, cambia todo.",
    trigger: "Nuevo despliegue chino cerca de Pratas. Ejercicios militares. Declaraciones de Xi sobre soberanía.",
    sourceUrl: "https://www.cnbc.com/2026/05/24/taiwan-and-china-coast-guards-in-standoff-at-top-of-south-china-sea.html",
    sourceText: "CNBC — Taiwan-China Pratas standoff"
  },
  {
    title: "🇺🇸 Newark como chispa: ¿movimiento anti-ICE nacional?",
    body: "47 arrestados, toque de queda, policía estatal. Si las protestas se replican en otras ciudades con centros de detención ICE, podría convertirse en un movimiento nacional.",
    trigger: "Protestas similares en otras ciudades. Muerte de un detenido. Intervención federal directa.",
    sourceUrl: "https://gothamist.com/news/newark-sets-curfew-around-ice-jail-after-more-clashes-between-cops-and-protesters",
    sourceText: "Gothamist — Newark ICE protests"
  },
  {
    title: "🇷🇺 GNL ruso: la prohibición de enero 2027",
    body: "UE prohibió spot desde abril, pero los contratos largo plazo no caen hasta enero 2027. Si Europa no encuentra sustituto para el 16% de su GNL, la prohibición podría ser aplazada o vaciada.",
    trigger: "Aplazamiento de la prohibición. Nuevo contrato europeo con Yamal. Crisis de suministro invernal.",
    sourceUrl: "https://www.bairdmaritime.com/shipping/tankers/gas/russian-lng-shipments-to-europe-rise-in-early-2026",
    sourceText: "Baird Maritime — Russian LNG to Europe"
  },
  {
    title: "🌍 Sahel: lean season + JNIM vs ISIS",
    body: "52.8M personas en crisis alimentaria (jun-ago). JNIM y ISWAP controlan más territorio que nunca. Wagner/Africa Corps presentes. Si JNIM e ISIS chocan directamente, el Sahel se fragmenta.",
    trigger: "Choque directo JNIM-ISIS confirmado. Caída de una capital regional. Éxodo masivo a países costeros.",
    sourceUrl: "https://www.fao.org/africa/news-stories/news-detail/west-africa-and-the-sahel--nearly-52.8-million-people-could-face-acute-food-insecurity-during-the-2026-lean-season-(june-august)/en",
    sourceText: "FAO — Sahel food crisis 2026"
  },
  {
    title: "🇺🇸 Trump-China aranceles: la pausa de 60 días acaba pronto",
    body: "30% total con pausa de 60 días post-sentencia Supremo contra IEEPA. Si la pausa expira sin acuerdo, los aranceles suben automáticamente. Impacto directo en precios globales.",
    trigger: "Expiración de la pausa sin acuerdo. Nueva ronda de aranceles. Retaliación china significativa.",
    sourceUrl: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/",
    sourceText: "Tax Foundation — Trump Tariffs Tracker"
  }
],

/* ════════════════════════════════════════════════════════════
   VERIFICACIÓN EDITORIAL
═════════════════════════════════════════════════════════════ */
editorial_verification: {
  sources_checked: "WSJ (no accesible vía WebSearch), FT (no accesible), NYT (no accesible), WaPo, Bloomberg (datos referenciados), CNBC, Reuters (vía agregadores), NPR, Al Jazeera, BBC, Axios, CNN, AP, Gothamist, El Tiempo, Infobae, Semana, WHO, WFP, FAO, UNICEF, CFR, Just Security, Defense News, IISS, EIA, TradingEconomics",
  wsj_ft_nyt_note: "WSJ, FT y NYT no son accesibles directamente vía WebSearch (bloqueo de crawler). Datos referenciados indirectamente a través de agregadores y fuentes secundarias. Se recomienda verificación manual.",
  vp_history_reviewed: "Sí — últimos 8 videos revisados: Eritrea/Mar Rojo (26 MAY, 192K), Zapatero (22 MAY), Putin economía (15 MAY, 354K), Pax Silica/China (13 MAY, 141K), Netanyahu/Irán (12 MAY, 152K), Trump OTAN (6 MAY, 203K), Bolivia (25 MAY), Colombia armados (3 MAY)",
  competition_reviewed: "Revisión parcial. Solo Fonseca: videos recientes sobre Irán/Ormuz detectados (cobertura tipo noticiero). Canales castellanoparlantes: cobertura activa de Irán, guerra, Trump — principalmente formato noticiero/última hora. Gap detectado en análisis estructural (mecanismos, paradojas, patrones). Competencia pendiente de comprobar en profundidad para temas específicos.",
  virality_verified: "Evaluada con 9 parámetros para cada propuesta. Señales verificables: cobertura WaPo/CNBC/NPR para Irán, Axios/CNN para Líbano, El Tiempo/Infobae/Semana para Colombia, Infobae/NPR para Zapatero. No se afirmaron métricas concretas sin evidencia.",
  images_validated: "Pendiente — ejecutar node validate_images.js 2026-06-02",
  news_freshness: "12/14 noticias del 1-2 JUN (86% mismo día/día anterior). 2 noticias de la semana (defensa UE, GNL ruso) incluidas por relevancia estructural.",
  discarded_topics: "Venezuela petróleo (934K bbl/día — sin novedad esta semana). Taiwán Pratas (resuelto 24 MAY, sin novedad — en vigilar). Trump aranceles China (pausa vigente, sin novedad — en vigilar).",
  known_issues: "WSJ/FT/NYT no accesibles directamente para verificación. Competencia castellanoparlante verificada parcialmente. Imágenes pendientes de validación."
}

};
