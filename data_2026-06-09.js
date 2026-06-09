/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-09
   Auditoría de Oportunidad v8.2 — 5 competencia + 3 ventana
   Competencia ACTIVA: minas de views · Test de profundidad
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-09",
  dateLabel: "09 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$102.15",
  brentChange: "↑ Israel-Irán intercambian misiles · Alto el fuego día 100 se desmorona · Ormuz sigue paralizado"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🇮🇱🇮🇷 ISRAEL-IRÁN <strong>INTERCAMBIAN MISILES</strong> · Primera vez desde alto el fuego abril · Día 100 de la guerra · Negociaciones paralizadas" },
  { cls:"t-gold",   text:"🇺🇦 CRIMEA <strong>TRAMPA MORTAL</strong> · CONVERGENCIA 2 canales: 541K (1.80x) + 192K (1.28x) · Sin gasolina, sin flota, sin escapatoria" },
  { cls:"t-red",    text:"🇻🇦 PAPA LEO XIV <strong>HOY EN BARCELONA</strong> · Sagrada Familia mañana · Primer papa estadounidense en España · Sánchez acorralado" },
  { cls:"t-orange", text:"🇵🇪 PERÚ <strong>50.01% vs 49.99%</strong> · Fujimori vs Sánchez · Semanas para contar · Polarización extrema" },
  { cls:"t-red",    text:"🇨🇴 COLOMBIA <strong>BUKELE COLOMBIANO</strong> · Espriella vs Cepeda · 2ª vuelta 21 JUN · 13 días para decidir" },
  { cls:"t-orange", text:"🇵🇭 FILIPINAS <strong>TERREMOTO 7.8</strong> · 32 muertos · Tsunami 1m · Réplicas M6.7 · Vuelos cancelados" },
  { cls:"t-red",    text:"🇨🇩 ÉBOLA CONGO <strong>515 CASOS SIN VACUNA</strong> · Cepa Bundibugyo · OMS: emergencia internacional · CDC: 65% probabilidad >20.000 casos" },
  { cls:"t-orange", text:"🇺🇸 PENTÁGONO <strong>RECORTA OTAN</strong> · 1/3 menos cazas · Elimina submarinos · Europa debe elegir: estado de bienestar o defensa" },
  { cls:"t-red",    text:"🛢️ BRENT <strong>$102</strong> · Irán-Israel escalan · Ormuz paralizado · Trump aranceles Section 301 a 60 países" },
  { cls:"t-orange", text:"⚽ MUNDIAL 2026 <strong>ARRANCA 11 JUN</strong> · Irán juega en EEUU · Amenazas seguridad · 48 equipos · 104 partidos" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>CRIMEA ES UNA TRAMPA:</span> Putin conquistó la península como su mayor triunfo — ahora 2 millones de personas están atrapadas sin gasolina, sin flota y sin escapatoria. <span class='hl-red'>CONVERGENCIA: 2 canales del nicho con rendimiento anormal simultáneo (1.80x + 1.28x en 4 días). La señal más fuerte del radar.</span>"
  },
  {
    label: "🎯 Breaking del día",
    content: "<span class='hl'>ISRAEL-IRÁN ROMPEN EL ALTO EL FUEGO:</span> Día 100 de la guerra. Irán lanza misiles por primera vez desde abril. <span class='hl-red'>El patrón Irán es el más probado de VP: 388K, 377K, 363K. Cada escalada = video ganador.</span>"
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$102</span> · Crimea <span class='hl-red'>sin gasolina</span> · Israel-Irán <span class='hl-red'>misiles</span> · Papa <span class='hl'>Barcelona HOY</span> · Perú <span class='hl'>50.01%</span> · Colombia <span class='hl'>runoff 21 JUN</span> · Ébola <span class='hl-red'>515 casos</span>"
  }
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 14 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1: ISRAEL-IRÁN MISILES ── */
{
  id: "n1",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iron_Dome_near_Sderot.jpg?width=800",
  imageAlt: "Sistema Iron Dome interceptando misiles iraníes",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "ISRAEL E IRÁN INTERCAMBIAN MISILES — El alto el fuego del día 100 se desmorona",
  pills: ["Misiles balísticos iraníes hacia Israel", "Primera vez desde abril", "Israel bombardeó Beirut antes", "Pausa frágil el 8 JUN"],
  why: "El alto el fuego de abril se rompe definitivamente. Irán responde a un bombardeo israelí en Beirut. Las negociaciones nucleares EEUU-Irán quedan en el aire.",
  viralPct: 95, viralCls: "viral-high",
  viralSources: "CBS News · NPR · CNBC · Al Jazeera — cobertura masiva global",
  detail: {
    summary: "Israel e Irán intercambiaron fuego el 7-8 de junio, la primera escalada directa desde el alto el fuego de abril. Israel bombardeó los suburbios del sur de Beirut (2 muertos, 20 heridos). Irán respondió con misiles balísticos hacia el norte de Israel. El IRGC declaró que fue 'legítima defensa'. Ambas partes anunciaron una pausa el 8 JUN pero la situación sigue extremadamente frágil.",
    context: "El alto el fuego EEUU-Irán de abril era condicional. Israel nunca dejó de atacar objetivos de Hezbollah en Líbano. Las negociaciones nucleares incluyen un memorando de moratoria de enriquecimiento y $24.000M en activos congelados. Cada escalada Israel-Irán torpedea meses de diplomacia.",
    vp: "La segunda derivada: EEUU negocia simultáneamente la paz nuclear con Irán y la alianza militar con Israel. Las dos cosas son incompatibles. Trump no puede controlar a Netanyahu. Irán usa cada violación para justificar escalada. El ciclo es irreversible salvo que EEUU discipline a Israel — políticamente imposible en año de midterms.",
    sources: [
      { headline:"Israel and Iran trade strikes, imperiling fragile ceasefire in war's 100th day", medium:"CBS News", date:"2026-06-08", url:"https://www.cbsnews.com/live-updates/iran-us-war-israel-hezbollah-fighting-ceasefire-efforts/", desc:"Día 100: alto el fuego se desmorona" },
      { headline:"Israel says Iran launched a missile at it, in a first during fragile ceasefire", medium:"NPR", date:"2026-06-07", url:"https://www.npr.org/2026/06/07/g-s1-126816/israel-iran-missile-ceasefire", desc:"Confirmación de misiles iraníes" },
      { headline:"2026 Iran war ceasefire", medium:"Wikipedia", date:"2026-06-08", url:"https://en.wikipedia.org/wiki/2026_Iran_war_ceasefire", desc:"Cronología completa del alto el fuego" }
    ],
    verification: "Verificado: misiles iraníes a Israel (NPR, CBS), bombardeo israelí Beirut (CBS), pausa 8 JUN (CBS). Fecha: 7-8 JUN 2026."
  }
},

/* ── N2: PAPA LEO XIV EN BARCELONA ── */
{
  id: "n2",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 EUROPA / ESPAÑA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sagrada_Familia_nave_roof_detail.jpg?width=800",
  imageAlt: "Interior de la Sagrada Familia — el Papa la inaugura mañana",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "PAPA LEO XIV LLEGA HOY A BARCELONA — Mañana inaugura la torre más alta de la Sagrada Familia (172,5m)",
  pills: ["Primer papa estadounidense", "Sagrada Familia: 144 años de construcción", "Torre de Jesucristo: iglesia más alta del mundo", "Discurso al Parlamento español"],
  why: "La inauguración de la torre convierte a la Sagrada Familia en la iglesia más alta del mundo. Es el primer papa que habla ante el Parlamento español. Sánchez recibe al Papa en plena crisis política.",
  viralPct: 80, viralCls: "viral-medium",
  viralSources: "Vatican News · NCR · America Magazine · idealista — cobertura masiva en España",
  detail: {
    summary: "Papa Leo XIV aterriza hoy 9 JUN en Barcelona-El Prat. Programa: oración en la Catedral de la Santa Cruz, vigilia en el Estadio Olímpico Lluís Companys. Mañana 10 JUN: visita a prisión Brians 1, Monasterio de Montserrat, y la inauguración de la Torre de Jesucristo de la Sagrada Familia (172,5m), que convierte al templo en la iglesia más alta del mundo. La piedra angular se puso en 1882 bajo León XIII — 144 años después, su homónimo la inaugura.",
    context: "Leo XIV (Robert Prevost, primer papa estadounidense) llegó a España el 6 JUN. Ya habló ante el Parlamento español pidiendo 'renovación moral'. La visita incluye defensa de migrantes, visita a presos y el acto más simbólico: inaugurar la torre que Gaudí diseñó como coronación de la Sagrada Familia.",
    vp: "Segunda derivada para VP: el Papa en España no es solo religión — es geopolítica del Vaticano. Un papa estadounidense en España durante la guerra de Irán, la crisis migratoria europea y la tensión EEUU-Europa sobre defensa. Cada palabra del Papa tiene peso diplomático. Pero el ángulo VP requiere conectar con poder, no con liturgia.",
    sources: [
      { headline:"Pope Leo kicks off Apostolic Journey to Spain", medium:"Vatican News", date:"2026-06-06", url:"https://www.vaticannews.va/en/pope/news/2026-06/pope-leo-kicks-off-apostolic-journey-to-spain-lands-in-madrid.html", desc:"Agenda completa de la visita" },
      { headline:"Pope Leo XIV in Barcelona: events, schedule and access", medium:"idealista", date:"2026-06-08", url:"https://www.idealista.com/en/news/lifestyle-in-spain/2026/06/08/900495-pope-leo-xiv-s-visit-to-barcelona-key-events-and-schedule", desc:"Programa detallado Barcelona" },
      { headline:"Sagrada Familia's papal connection comes full circle", medium:"NCR", date:"2026-06-06", url:"https://www.ncronline.org/sagrada-familias-papal-connection-comes-full-circle-pope-leo-xiv", desc:"Conexión histórica León XIII - Leo XIV" }
    ],
    verification: "Verificado: llegada Barcelona 9 JUN (Vatican.va), inauguración torre 10 JUN (Sagrada Familia oficial), 172,5m = iglesia más alta (NCR). Fecha: 9-10 JUN 2026."
  }
},

/* ── N3: PERÚ ELECCIONES ── */
{
  id: "n3",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Peru.svg?width=800",
  imageAlt: "Keiko Fujimori — cuarto intento de llegar a la presidencia de Perú",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Peru.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "PERÚ: 50.01% vs 49.99% — La elección más reñida de la historia con menos de 4.300 votos de diferencia",
  pills: ["Sánchez 50.01% vs Fujimori 49.99%", "94% escrutado", "Semanas para resultado final", "4.300 votos de diferencia"],
  why: "La elección más reñida de la historia peruana ilustra la polarización extrema del país. El resultado puede tardar semanas. Es el cuarto intento de Keiko Fujimori de llegar a la presidencia.",
  viralPct: 82, viralCls: "viral-medium",
  viralSources: "Al Jazeera · CNN · Americas Quarterly · Infobae — cobertura masiva Latam",
  detail: {
    summary: "Con el 94% de mesas escrutadas, el izquierdista Roberto Sánchez lidera con 50.01% frente a Keiko Fujimori con 49.99% — apenas 4.300 votos de diferencia en un país de 33 millones. ONPE advierte que el conteo completo podría tardar hasta mediados de julio. Es la cuarta candidatura presidencial de Fujimori.",
    context: "Perú ha tenido 6 presidentes en 5 años. La inestabilidad es crónica: Castillo fue destituido, Boluarte enfrentó protestas masivas. El país está profundamente dividido entre Lima (derecha) y provincias (izquierda). El ganador hereda una economía del cobre que depende de China.",
    vp: "Segunda derivada: Perú no es solo una elección reñida — es un laboratorio de lo que le pasa a una democracia cuando NINGÚN presidente termina su mandato. 6 presidentes en 5 años. El verdadero tema VP: ¿puede un país funcionar sin instituciones estables, y qué pasa con el cobre (esencial para la transición energética) si Perú se convierte en un Estado fallido democrático?",
    sources: [
      { headline:"Race tied between left- and right-wing rivals in Peru's presidential vote", medium:"Al Jazeera", date:"2026-06-08", url:"https://www.aljazeera.com/news/2026/6/8/race-tied-between-left-and-right-wing-rivals-in-perus-presidential-vote", desc:"Empate técnico con 94% escrutado" },
      { headline:"Peru: Keiko Fujimori first lady at 19, fourth try to be president", medium:"CNN", date:"2026-06-07", url:"https://edition.cnn.com/2026/06/07/americas/peru-president-election-keiko-fujimori-intl-latam", desc:"Cuarto intento de Fujimori" },
      { headline:"REACTION: Peru Runoff Is Too Close to Call (Again)", medium:"Americas Quarterly", date:"2026-06-08", url:"https://americasquarterly.org/article/reaction-peru-runoff-is-too-close-to-call-again/", desc:"Análisis de la polarización" }
    ],
    verification: "Verificado: 50.01% vs 49.99% con 94% escrutado (Al Jazeera, CNN). 4.300 votos diferencia. Fecha: 8 JUN 2026."
  }
},

/* ── N4: FILIPINAS TERREMOTO ── */
{
  id: "n4",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🌍 ASIA-PACÍFICO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Philippines.svg?width=800",
  imageAlt: "Daños por terremoto en Filipinas",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Philippines.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "FILIPINAS: Terremoto 7.8 deja 32 muertos, tsunami de 1 metro y 138 réplicas — la más fuerte M6.7",
  pills: ["Magnitud 7.8 en Mindanao", "32 muertos, 200+ heridos", "Tsunami 1m", "138 réplicas en horas"],
  why: "El terremoto más fuerte en Filipinas en años. Mindanao es la isla donde EEUU tiene bases militares clave para la estrategia del Indo-Pacífico.",
  viralPct: 70, viralCls: "viral-medium",
  viralSources: "CNN · NPR · Al Jazeera · GMA News — cobertura masiva Asia-Pacífico",
  detail: {
    summary: "Un terremoto de magnitud 7.8 sacudió Mindanao el 8 JUN a las 7:40am local. Epicentro: 32 km al oeste de Maasim, Sarangani. 32 muertos, 200+ heridos. Un tsunami de 1 metro alcanzó costas cercanas. 138 réplicas registradas, la mayor de M6.7. Olas menores detectadas en Indonesia, Palau y Japón. Vuelos cancelados 9-10 JUN.",
    context: "Mindanao alberga bases militares filipinas y estadounidenses clave para la estrategia del Indo-Pacífico. La isla también es escenario de conflictos armados con grupos islamistas. Un desastre natural de esta magnitud pone a prueba la capacidad de respuesta del gobierno Marcos Jr.",
    vp: "Ángulo VP limitado salvo conexión con bases militares EEUU-Filipinas o con la competición China-EEUU por influencia en el archipiélago. Como noticia de última hora sí, como propuesta de video no alcanza profundidad VP.",
    sources: [
      { headline:"Philippines earthquake: Deadly 7.8 magnitude quake hits Mindanao", medium:"CNN", date:"2026-06-08", url:"https://www.cnn.com/2026/06/07/asia/southern-philippines-mindanao-earthquake-intl-hnk", desc:"Terremoto y tsunami en Mindanao" },
      { headline:"A 7.8 magnitude quake in the Philippines kills at least 32", medium:"NPR", date:"2026-06-07", url:"https://www.npr.org/2026/06/07/g-s1-126830/7-8-magnitude-quake-hits-southern-philippines-tsunami-risk-for-some-coasts", desc:"32 muertos y riesgo de tsunami" },
      { headline:"Philippines earthquake kills 15, prompts tsunami fears", medium:"Al Jazeera", date:"2026-06-08", url:"https://www.aljazeera.com/news/2026/6/8/philippines-earthquake-kills-15-prompts-tsunami-fears-all-to-know", desc:"Impacto regional del terremoto" }
    ],
    verification: "Verificado: M7.8 (USGS), 32 muertos (NPR), tsunami 1m (CNN), 138 réplicas (GMA). Fecha: 8 JUN 2026."
  }
},

/* ── N5: CRIMEA CRISIS COMBUSTIBLE ── */
{
  id: "n5",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 UCRANIA / RUSIA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crimea_in_Ukraine.svg?width=800",
  imageAlt: "Sebastopol — la base de la flota del Mar Negro que ya no existe",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "CRIMEA SUSPENDE VENTA DE GASOLINA Y CUPONES — Crisis se extiende a Lugansk · Mercado negro a 350 rublos/litro",
  pills: ["Cupones suspendidos 4 JUN", "20 litros máximo por vehículo", "R-280 cortada por drones", "Luhansk también raciona"],
  why: "La crisis de combustible se extiende de Crimea a los territorios ocupados de Lugansk. Ucrania está estrangulando la logística rusa sin ofensiva terrestre.",
  viralPct: 90, viralCls: "viral-high",
  viralSources: "Moscow Times · RFERL · Meduza · Kyiv Post · Bloomberg",
  detail: {
    summary: "Crimea suspendió la venta de gasolina y la emisión de cupones el 4 JUN (Moscow Times). La mayor cadena de gasolineras de la península ya había suspendido cupones el 1 JUN. Límite: 20 litros por vehículo, prohibido llenar bidones. Policía desplegada en cada gasolinera registrando matrículas. Reventa en mercado negro a 200-350 rublos/litro. La crisis se ha extendido a Lugansk, donde también se impuso racionamiento estricto (NV Ukraine).",
    context: "Ucrania ha destruido ~25% de la capacidad de refinación rusa con drones y misiles de largo alcance. La autopista R-280 'Novorossiya' (corredor terrestre Rostov-Crimea) está bajo fuego sistemático de drones Shark-M. El puente de Kerch tiene capacidad limitada. La flota del Mar Negro ha perdido más de un tercio de sus buques.",
    vp: "La segunda derivada: Crimea no tiene una crisis de combustible — tiene una crisis existencial. La península depende al 100% de suministros terrestres desde Rusia. Ucrania ha cortado la arteria principal sin necesidad de una ofensiva. Putin anexionó Crimea como su mayor victoria; ahora se está convirtiendo en su mayor vulnerabilidad.",
    sources: [
      { headline:"Crimea Suspends Gasoline Sales and Distribution of Fuel Vouchers", medium:"Moscow Times", date:"2026-06-04", url:"https://www.themoscowtimes.com/2026/06/04/crimea-suspends-gasoline-sales-and-distribution-of-fuel-vouchers-a92932", desc:"Suspensión total de ventas y cupones" },
      { headline:"No Gas, Long Queues: Fuel Crisis Hits Russian-Occupied Crimea", medium:"RFERL", date:"2026-06-03", url:"https://www.rferl.org/a/fuel-crisis-hits-russian-occupied-crimea/33773280.html", desc:"Colas kilométricas en Sebastopol" },
      { headline:"Following Crimea, Russia's proxies in Luhansk impose strict fuel rationing", medium:"NV Ukraine", date:"2026-06-05", url:"https://english.nv.ua/nation/deficit-paliva-na-tot-u-luganskiy-oblasti-obmezhili-prodazh-benzinu-50612934.html", desc:"Racionamiento se extiende a Lugansk" }
    ],
    verification: "Verificado: suspensión 4 JUN (Moscow Times), 20L límite (RFERL), extensión a Lugansk (NV Ukraine). Fecha: 1-5 JUN 2026."
  }
},

/* ── N6: COLOMBIA RUNOFF ── */
{
  id: "n6",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=800",
  imageAlt: "Casa de Nariño — sede de la presidencia colombiana",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "COLOMBIA: Espriella 43.7% vs Cepeda 40.9% — El 'Bukele colombiano' a 13 días del balotaje",
  pills: ["Runoff 21 junio", "Espriella: outsider conservador", "Cepeda: heredero de Petro", "13 días para decidir"],
  why: "Un outsider sin escaños que admira a Bukele y Milei lidera las encuestas para la presidencia. Colombia podría girar radicalmente a la derecha después de Petro.",
  viralPct: 85, viralCls: "viral-high",
  viralSources: "CNN · Infobae · El Tiempo · Americas Quarterly — cobertura masiva Latam",
  detail: {
    summary: "Abelardo de la Espriella ganó la primera vuelta el 31 MAY con 43.74% (10.36M votos) frente a Iván Cepeda del Pacto Histórico con 40.90% (9.69M). El balotaje será el 21 JUN. Espriella es un abogado outsider sin partido propio que admira a Bukele y Milei. Tiene pasado chavista que ha intentado ocultar. AtlasIntel (la encuestadora que acertó la primera vuelta) lo da ganador en segunda.",
    context: "Colombia sale de 4 años de gobierno Petro (izquierda). Espriella representa la reacción conservadora con retórica populista de derecha. Su modelo es Bukele (El Salvador) y Milei (Argentina). La conexión latinoamericana es clara: el patrón outsider-populista-derecha se repite en toda la región.",
    vp: "VP publicó 'Sorpresa Colombia' (340K, 1 JUN) sobre la primera vuelta. El equipo tiene este tema APROBADO con deadline 14 JUN. La segunda vuelta es el SEQUEL perfecto. Solo Fonseca acaba de publicar su versión (67K en 3h). La ventana está abierta para VP.",
    sources: [
      { headline:"Sorpresa en las elecciones de Colombia: Abelardo de la Espriella gana la primera vuelta", medium:"Infobae", date:"2026-05-31", url:"https://www.infobae.com/colombia/2026/05/31/sorpresa-en-las-elecciones-de-colombia-abelardo-de-la-espriella-gana-la-primera-vuelta-y-disputara-la-presidencia-con-ivan-cepeda/", desc:"Resultados primera vuelta" },
      { headline:"Encuesta AtlasIntel: Espriella ganaría la segunda vuelta", medium:"El Tiempo", date:"2026-06-06", url:"https://www.eltiempo.com/politica/elecciones-colombia-2026/encuesta-de-atlasintel-la-que-acerto-en-victoria-de-abelardo-de-la-espriella-en-primera-vuelta-dice-que-ganaria-la-segunda-segun-nueva-medicion-3561651", desc:"Encuestas segunda vuelta" },
      { headline:"Resultados elecciones presidenciales Colombia 2026", medium:"CNN", date:"2026-05-31", url:"https://cnnespanol.cnn.com/2026/05/31/colombia/live-news/elecciones-presidenciales-cepeda-abelardo-paloma-resultados-orix", desc:"Cobertura en vivo CNN" }
    ],
    verification: "Verificado: Espriella 43.74%, Cepeda 40.90% (Infobae, CNN). Runoff 21 JUN. AtlasIntel lo da ganador (El Tiempo). Fecha: 31 MAY 2026."
  }
},

/* ── N7: ÉBOLA CONGO ── */
{
  id: "n7",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ÁFRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_Virus_TEM_PHIL_1832_lores.jpg?width=800",
  imageAlt: "Virus del Ébola — cepa Bundibugyo sin vacuna disponible",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Democratic_Republic_of_the_Congo.svg?width=800",
  imageCredit: "CDC / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "ÉBOLA CONGO: 515 casos confirmados, 91 muertos, cepa SIN VACUNA — OMS declara emergencia internacional",
  pills: ["Cepa Bundibugyo: sin vacuna", "515 casos, 91 muertos", "17 de 36 zonas afectadas en Ituri", "CDC: 65% probabilidad >20.000 casos"],
  why: "El brote más rápido de Ébola en la historia se propaga en una zona de conflicto armado. No hay vacuna para la cepa Bundibugyo. La OMS lo declaró emergencia de salud pública internacional.",
  viralPct: 75, viralCls: "viral-medium",
  viralSources: "NPR · WHO · CDC · NBC News — cobertura creciente",
  detail: {
    summary: "El brote de Ébola en RD Congo alcanza 515 casos confirmados y 91 muertos. La cepa es Bundibugyo — una de las 4 que causa enfermedad en humanos pero para la que NO hay vacuna aprobada. En 24 horas se reportaron 27 nuevas infecciones. Se ha extendido a 17 de 36 zonas de salud en Ituri, provincia plagada por el ADF (afiliado al Estado Islámico). La OMS lo declaró emergencia de salud pública internacional el 17 MAY.",
    context: "El CDC de EEUU proyecta que si solo el 20% de los pacientes son aislados, hay un 65% de probabilidad de que los casos superen 20.000 en 3 meses. Eso rivalizaría con la epidemia de 2014-2016 en África Occidental (28.000 casos, 11.300 muertos). La diferencia: esta vez el brote está en una zona de guerra activa donde los equipos médicos no pueden acceder.",
    vp: "Ángulo VP potencial: ¿puede un brote de Ébola sin vacuna, en una zona controlada por el Estado Islámico, convertirse en la próxima pandemia? El conflicto armado impide la contención. Si el virus cruza a Uganda (ya lo hizo), la ecuación cambia. Conexión con geopolítica del Sahel y presencia del EI en África.",
    sources: [
      { headline:"Ebola outbreak accelerates across Eastern Congo", medium:"NPR", date:"2026-06-08", url:"https://www.npr.org/2026/06/08/nx-s1-5849203/ebola-outbreak-drc-africa-cdc", desc:"Aceleración sin precedentes del brote" },
      { headline:"Ebola outbreak - DRC 2026", medium:"WHO", date:"2026-06-08", url:"https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026", desc:"Situación oficial OMS" },
      { headline:"Tracking the 2026 Ebola outbreak in maps and figures", medium:"NBC News", date:"2026-06-06", url:"https://www.nbcnews.com/data-graphics/ebola-outbreak-2026-cases-virus-tracking-maps-spread-congo-ugangda-us-rcna347102", desc:"Mapas y datos del brote" }
    ],
    verification: "Verificado: 515 casos, 91 muertos (NPR, WHO). PHEIC declarado 17 MAY (WHO). Cepa Bundibugyo sin vacuna (CDC). Fecha: 8 JUN 2026."
  }
},

/* ── N8: TRUMP ARANCELES SECTION 301 ── */
{
  id: "n8",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌍 EEUU / GLOBAL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Donald_Trump_official_portrait.jpg?width=800",
  imageAlt: "Donald Trump — nueva ronda de aranceles a 60 países",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=800",
  imageCredit: "Casa Blanca / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "TRUMP RECONSTRUYE SU MURO ARANCELARIO: Section 301 contra 60 países por 'trabajo forzado' — 10-12.5%",
  pills: ["Section 301: sin límite ni caducidad", "60 países afectados", "China 12.5%, UE 10%, Brasil 10%", "Comentarios públicos hasta 6 JUL"],
  why: "Después de que el Supremo tumbara los aranceles IEEPA, Trump usa la Sección 301 para reconstruir su política arancelaria. Sin límite legal ni temporal.",
  viralPct: 78, viralCls: "viral-medium",
  viralSources: "CNN · Al Jazeera · CBS News — cobertura económica global",
  detail: {
    summary: "La USTR anunció aranceles propuestos del 10-12.5% a importaciones de 60 países bajo Section 301, citando 'trabajo forzado'. China, Japón, Corea del Sur y Brasil enfrentan 12.5%. UE, Canadá, México, Indonesia y Pakistán: 10%. Periodo de comentarios públicos hasta 6 JUL, audiencias 7 JUL. Es la respuesta de Trump después de que el Tribunal Supremo tumbara los aranceles IEEPA en febrero.",
    context: "Section 301 permite aranceles sin límite de nivel ni duración — a diferencia de IEEPA. Trump ya tiene un 30% efectivo sobre China (20% fentanilo + 10% recíproco). La nueva ronda afecta a aliados y socios comerciales. Brasil ya expresó 'indignación'. La estrategia es usar 'trabajo forzado' como justificación legal inexpugnable.",
    vp: "Trump no se rindió cuando el Supremo tumbó sus aranceles — encontró otra ley sin límite. Es la demostración de que la guerra comercial es estructural, no coyuntural. Afecta a 60 países incluyendo aliados europeos. La paradoja: EEUU acusa de trabajo forzado mientras negocia con Arabia Saudí.",
    sources: [
      { headline:"Trump is quietly rebuilding his tariff engine", medium:"CNN", date:"2026-06-03", url:"https://www.cnn.com/2026/06/03/economy/tariffs-trump", desc:"Reconstrucción silenciosa del muro arancelario" },
      { headline:"US cites forced labour concerns as grounds for new tariffs", medium:"Al Jazeera", date:"2026-06-03", url:"https://www.aljazeera.com/economy/2026/6/3/us-cites-forced-labour-concerns-as-grounds-for-new-tariffs", desc:"Trabajo forzado como justificación" },
      { headline:"Trump administration floats tariffs on 60 trading partners", medium:"CBS News", date:"2026-06-03", url:"https://www.cbsnews.com/news/trump-administration-tariffs-60-trading-partners-forced-labor-probes/", desc:"60 socios comerciales afectados" }
    ],
    verification: "Verificado: Section 301, 60 países, 10-12.5% (CNN, CBS, Al Jazeera). Periodo comentarios hasta 6 JUL. Fecha: 3 JUN 2026."
  }
},

/* ── N9: PENTÁGONO RECORTA OTAN ── */
{
  id: "n9",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌍 EEUU / EUROPA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_OTAN_landscape_logo.svg?width=800",
  imageAlt: "Logo de la OTAN — EEUU recorta fuerzas comprometidas",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_NATO.svg?width=800",
  imageCredit: "OTAN / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "PENTÁGONO RECORTA 1/3 DE CAZAS, ELIMINA SUBMARINOS Y DRONES DE LA OTAN — Europa debe defenderse sola",
  pills: ["1/3 menos cazas disponibles", "Cero submarinos para la OTAN", "Bombarderos estratégicos: -50%", "Rubio: 'Europa debe pagar'"],
  why: "EEUU comunica oficialmente que Europa ya no es su teatro prioritario. El Indo-Pacífico es la nueva prioridad. Europa debe asumir su propia defensa convencional.",
  viralPct: 80, viralCls: "viral-medium",
  viralSources: "DefenseNews · CNBC · Stars and Stripes · Japan Times",
  detail: {
    summary: "El Pentágono comunicó a los aliados el 3 JUN que recortará un tercio de los cazas disponibles para la OTAN, eliminará submarinos (nucleares y convencionales) del paquete, reducirá a la mitad los bombarderos estratégicos, retirará drones armados y reducirá destructores con sistemas AEGIS. Rubio declaró: 'Europa tendrá que abandonar algunos programas sociales para pagar su defensa'.",
    context: "La NDAA 2026 impide bajar de 76.000 tropas en Europa, pero la versión borrador de NDAA 2027 ya contempla más recortes. Simultáneamente, EEUU discute expandir el despliegue de armas nucleares a más países OTAN (CNBC). El mensaje: menos defensa convencional, más disuasión nuclear.",
    vp: "La paradoja perfecta para VP: EEUU le dice a Europa 'defiéndete sola' mientras le ofrece MÁS armas nucleares. Es la nuclearización de la defensa europea por falta de gasto convencional. VP ya hizo 'Trump OTAN' (203K) — este es el sequel con datos nuevos.",
    sources: [
      { headline:"US tells Europe, Canada to boost NATO air and naval forces", medium:"DefenseNews", date:"2026-06-03", url:"https://www.defensenews.com/global/europe/2026/06/03/us-tells-europe-canada-to-boost-nato-air-and-naval-forces/", desc:"Recortes detallados de EEUU" },
      { headline:"Nuclear weapons could soon be hosted in more NATO nations", medium:"CNBC", date:"2026-06-02", url:"https://www.cnbc.com/2026/06/02/nuclear-weapons-us-nato-europe-jets.html", desc:"Expansión nuclear OTAN" },
      { headline:"Pentagon to cut strategic bombers in NATO crisis force", medium:"Stars and Stripes", date:"2026-05-27", url:"https://www.stripes.com/theaters/europe/2026-05-27/pentagon-slashes-nato-crisis-forces-21793499.html", desc:"Detalles del recorte" }
    ],
    verification: "Verificado: recorte 1/3 cazas (DefenseNews), cero submarinos (Stars and Stripes), expansión nuclear (CNBC). Fecha: 27 MAY - 3 JUN 2026."
  }
},

/* ── N10: VP PUBLICA UCRANIA VICTORIA ── */
{
  id: "n10",
  tags: [{ cls:"tag-gold", text:"⭐ VP" }, { cls:"tag-blue", text:"🌍 UCRANIA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/2022_Russian_invasion_of_Ukraine.svg?width=800",
  imageAlt: "Mapa de la invasión rusa de Ucrania",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "VP PUBLICA HOY: '¿Es realmente posible una VICTORIA de Ucrania sobre Rusia?' — 170K views en 7 horas",
  pills: ["Publicado hoy 9 JUN", "170K en 7 horas", "Ucrania recupera 250 km² en 30 días", "Revolución de drones"],
  why: "VP publica su análisis sobre la posibilidad real de victoria ucraniana justo cuando Crimea colapsa por falta de combustible. Timing perfecto.",
  viralPct: 75, viralCls: "viral-medium",
  viralSources: "YouTube VisualPolitik — verificado directamente",
  detail: {
    summary: "VisualPolitik publicó hoy 9 JUN el video '¿Es realmente posible una VICTORIA de Ucrania sobre Rusia?' que lleva 170K views en 7 horas. El video analiza la recuperación ucraniana de 250 km² en 30 días (The Economist) y la revolución de drones que ha cambiado la dinámica del frente.",
    context: "El video coincide con: la crisis de combustible en Crimea, la destrucción de la flota del Mar Negro, y el estancamiento del avance ruso. El Economist y Washington Post confirman que Ucrania ha retomado la iniciativa.",
    vp: "Video VP actual. Relevante para el radar porque confirma que VP está cubriendo Ucrania/Rusia — pero con ángulo GENERAL (victoria posible). La propuesta P1 (Crimea trampa) es el ángulo ESPECÍFICO complementario.",
    sources: [
      { headline:"UCRANIA da la SORPRESA: ¿Es realmente posible una VICTORIA sobre RUSIA?", medium:"VisualPolitik YouTube", date:"2026-06-09", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"Video VP publicado hoy" },
      { headline:"Russia-Ukraine War Report Card June 3 2026", medium:"Russia Matters", date:"2026-06-03", url:"https://www.russiamatters.org/news/russia-ukraine-war-report-card/russia-ukraine-war-report-card-june-3-2026", desc:"Análisis del frente" },
      { headline:"Ukraine has recaptured 250 km² in 30 days", medium:"The Economist", date:"2026-06-02", url:"https://www.economist.com/europe/2026/06/02/ukraine-recaptures-territory", desc:"Datos de recuperación territorial" }
    ],
    verification: "Verificado: 170K views en 7h (YouTube directo). Fecha: 9 JUN 2026."
  }
},

/* ── N11: MUNDIAL 2026 ARRANCA 11 JUN ── */
{
  id: "n11",
  tags: [{ cls:"tag-orange", text:"🟠 2 DÍAS" }, { cls:"tag-blue", text:"🌍 GLOBAL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_FIFA.svg?width=800",
  imageAlt: "Logo del Mundial 2026 — arranca el 11 de junio",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_FIFA.svg?width=800",
  imageCredit: "FIFA / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "MUNDIAL 2026 ARRANCA EN 2 DÍAS: Irán juega en EEUU durante la guerra — amenazas de seguridad sin precedentes",
  pills: ["48 equipos, 104 partidos", "EEUU + México + Canadá", "Irán juega en Seattle y LA", "Amenazas terrorismo + protestas"],
  why: "El primer Mundial de 48 equipos arranca durante una guerra activa EEUU-Irán. El equipo iraní jugará sus partidos de grupo en suelo estadounidense. Las implicaciones de seguridad son enormes.",
  viralPct: 72, viralCls: "viral-medium",
  viralSources: "Security Magazine · MEMRI · IranWire — análisis de seguridad",
  detail: {
    summary: "El Mundial 2026 arranca el 11 JUN con 48 equipos y 104 partidos en 16 ciudades de EEUU, México y Canadá. Es el primer Mundial de tres países anfitriones. Irán jugará sus partidos de grupo en Seattle y Los Ángeles — en suelo del país con el que está en guerra. MEMRI alerta sobre 'lobos solitarios radicalizados' y proxies cibernéticos iraníes como amenazas principales.",
    context: "La guerra EEUU-Irán lleva 100 días. Los misiles iraníes a Israel fueron ayer. El equipo iraní es un focal point para manifestaciones de ambos bandos (pro y anti régimen). Las agencias de seguridad estadounidenses operan bajo nivel de alerta máximo.",
    vp: "Ángulo VP interesante pero limitado. El Mundial como escenario geopolítico (Irán en EEUU, Qatar 2022 precedente, diplomacia del deporte). Sin embargo, el formato VP requiere más profundidad que 'problemas de seguridad'. Mejor como noticia que como propuesta.",
    sources: [
      { headline:"How the Current Iran-US Conflict May Impact World Cup Security", medium:"Security Magazine", date:"2026-06-05", url:"https://www.securitymagazine.com/articles/102342-how-the-current-iran-us-conflict-may-impact-world-cup-security", desc:"Análisis de amenazas" },
      { headline:"Islamic Republic's Football Team Causes Security Concerns", medium:"IranWire", date:"2026-06-04", url:"https://iranwire.com/en/features/153161-islamic-republics-football-team-causes-security-concerns-at-the-world-cup/", desc:"Equipo iraní como focal point" },
      { headline:"FIFA World Cup 2026 Kicks Off: Lone Wolves and Iran Cyber Proxies as Key Threats", medium:"MEMRI", date:"2026-06-06", url:"https://www.memri.org/reports/fifa-world-cup-2026-kicks-radicalized-lone-wolves-and-irans-cyber-resistance-proxies-emerge", desc:"Lobos solitarios y proxies cibernéticos" }
    ],
    verification: "Verificado: 48 equipos, arranca 11 JUN (FIFA), Irán en Seattle/LA (IranWire), amenazas MEMRI. Fecha: JUN 2026."
  }
},

/* ── N12: UCRANIA RECUPERA TERRITORIO ── */
{
  id: "n12",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌍 UCRANIA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageAlt: "Dron militar — la revolución que cambió la guerra en Ucrania",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "UCRANIA RECUPERA 250 KM² EN 30 DÍAS — El avance ruso se estanca y la revolución de drones cambia la guerra",
  pills: ["250 km² recuperados en mayo", "Avance ruso estancado", "Drones como factor decisivo", "Rusia bombardea ciudades como respuesta"],
  why: "Por primera vez en meses, Ucrania retoma la iniciativa territorial. Los drones han equilibrado el campo de batalla. Rusia responde con bombardeos masivos a ciudades.",
  viralPct: 78, viralCls: "viral-medium",
  viralSources: "The Economist · Washington Post · Russia Matters",
  detail: {
    summary: "The Economist estimó el 2 JUN que Ucrania recuperó ~250 km² en 30 días. El avance ruso se estancó. Oficiales europeos atribuyen el cambio a los drones ucranianos y a las crecientes dificultades militares y económicas de Rusia. Moscú respondió con bombardeos aéreos masivos — al menos 2 muertos en Kiev en uno de los mayores ataques nocturnos desde el inicio de la invasión.",
    context: "Un dron que entró a Letonia desde Rusia violó el espacio aéreo de un país OTAN — el último de una serie de incidentes. La revolución de drones ucraniana (producción masiva, IA para targeting) ha cambiado la dinámica del frente sin necesidad de más tropas.",
    vp: "VP publicó hoy mismo un video sobre la posibilidad de victoria ucraniana. La recuperación territorial confirma el análisis. El ángulo Crimea como trampa (P1) es el complemento perfecto: Ucrania no necesita conquistar la península — solo cortarle el suministro.",
    sources: [
      { headline:"Russia's advance has suddenly stalled", medium:"Washington Post", date:"2026-06-05", url:"https://www.washingtonpost.com/world/ukraine-russia/", desc:"Estancamiento del avance ruso" },
      { headline:"Russia-Ukraine War Report Card June 3 2026", medium:"Russia Matters", date:"2026-06-03", url:"https://www.russiamatters.org/news/russia-ukraine-war-report-card/russia-ukraine-war-report-card-june-3-2026", desc:"Balance semanal del frente" },
      { headline:"A drone entered Latvia from Russia", medium:"Reuters", date:"2026-06-06", url:"https://www.reuters.com/world/europe/drone-enters-latvia-from-russia-latest-nato-airspace-violation-2026-06-06/", desc:"Violación espacio aéreo OTAN" }
    ],
    verification: "Verificado: 250 km² (Economist), estancamiento ruso (WashPost), dron en Letonia (Reuters). Fecha: 2-6 JUN 2026."
  }
},

/* ── N13: BOLIVIA MINISTROS DIMITEN ── */
{
  id: "n13",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_Quemado_La_Paz.jpg?width=800",
  imageAlt: "Palacio Quemado — sede del gobierno de Bolivia en crisis",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bolivia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "BOLIVIA: Ministros de Defensa y Educación dimiten bajo presiones de protestas que exigen la renuncia de Paz",
  pills: ["2 ministros dimiten", "Protestas piden caída de Paz", "+60% violencia crimen organizado en mayo", "Crisis de dólares continúa"],
  why: "Bolivia se desestabiliza con dimisiones de alto nivel y violencia del crimen organizado. El mercado negro de dólares sigue activo.",
  viralPct: 65, viralCls: "viral-low",
  viralSources: "ACLED · Reuters — cobertura moderada",
  detail: {
    summary: "Los ministros de Defensa y Educación de Bolivia renunciaron en la primera semana de junio bajo presión de protestas que exigen la dimisión del presidente Rodrigo Paz. ACLED reporta un aumento del 60% en muertes por violencia del crimen organizado en mayo. Múltiples masacres en diferentes regiones del país.",
    context: "Bolivia vive una crisis múltiple: escasez de dólares, mercado negro de divisas, caída de producción de gas natural, y ahora violencia del crimen organizado al nivel de Honduras. El patrón se asemeja al colapso venezolano de 2015-2017.",
    vp: "Memorias de Pez hizo un video sobre Bolivia que lleva 147K (3.68x su media) — confirmando demanda. PERO VP ya cubrió Bolivia recientemente. Solo vale si hay un giro radical (caída del gobierno, intervención militar).",
    sources: [
      { headline:"Latin America and Caribbean Overview June 2026", medium:"ACLED", date:"2026-06-08", url:"https://acleddata.com/update/latin-america-and-caribbean-overview-june-2026", desc:"Violencia crimen organizado +60%" },
      { headline:"Bolivia ministers resign amid protests", medium:"Reuters", date:"2026-06-07", url:"https://www.reuters.com/world/americas/bolivia-ministers-resign-2026-06-07/", desc:"Dimisiones ministeriales" },
      { headline:"¿Qué está PASANDO en BOLIVIA?", medium:"Memorias de Pez", date:"2026-06-04", url:"https://www.youtube.com/@MemoriasdePez/videos", desc:"147K views (3.68x media) = demanda confirmada" }
    ],
    verification: "Verificado: dimisiones (Reuters), violencia +60% (ACLED), Memorias de Pez 147K/3.68x (YouTube directo). Fecha: JUN 2026."
  }
},

/* ── N14: FRANCIA IA MILITAR NATO ── */
{
  id: "n14",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 EUROPA / DEFENSA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_France.svg?width=800",
  imageAlt: "Rafale francés — Francia desarrolla su propia IA de combate",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_France.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "FRANCIA PRUEBA SU PROPIA IA MILITAR EN EJERCICIO OTAN — Alternativa europea al sistema Palantir de EEUU",
  pills: ["Sistema Arcadia: IA de combate francesa", "Alternativa a Maven/Palantir", "Ejercicio OTAN en Polonia 8-26 JUN", "Soberanía tecnológica militar"],
  why: "Francia desarrolla su propia IA de mando de batalla como alternativa al sistema estadounidense Palantir. Es la batalla por la soberanía tecnológica militar europea.",
  viralPct: 68, viralCls: "viral-low",
  viralSources: "DefenseNews — cobertura especializada",
  detail: {
    summary: "Francia desplegará su sistema de mando de batalla con IA 'Arcadia' durante el ejercicio CWIX de la OTAN en Polonia (8-26 JUN). Es una alternativa al Maven Smart System desarrollado por Palantir Technologies (EEUU). Francia busca autonomía tecnológica militar para no depender de sistemas estadounidenses en el campo de batalla.",
    context: "La batalla por la IA militar es paralela a la batalla por la defensa convencional. EEUU domina con Palantir/Maven. Francia quiere su propia versión. Es parte del debate más amplio: ¿puede Europa depender de tecnología militar estadounidense cuando EEUU está recortando su compromiso con la OTAN?",
    vp: "Conexión con P8 (EEUU abandona Europa): si EEUU recorta fuerzas Y controla la tecnología militar europea, la dependencia es doble. Francia intenta romper ambas. Es un ángulo interesante pero quizás demasiado técnico para un video VP completo.",
    sources: [
      { headline:"France to test its own AI-powered battlefield command in June NATO exercise", medium:"DefenseNews", date:"2026-06-06", url:"https://www.defensenews.com/global/europe/2026/06/06/france-to-test-its-own-ai-powered-battlefield-command-in-june-nato-exercise/", desc:"Francia despliega Arcadia en OTAN" },
      { headline:"US, NATO allies to launch scaled-back Baltic Sea drills", medium:"DefenseNews", date:"2026-06-02", url:"https://www.defensenews.com/global/europe/2026/06/02/us-nato-allies-to-launch-scaled-back-baltic-sea-drills/", desc:"Ejercicios OTAN reducidos" },
      { headline:"America's new Defence Strategy and Europe's moment of truth", medium:"EPC", date:"2026-06-04", url:"https://www.epc.eu/publication/americas-new-defence-strategy-and-europes-moment-of-truth/", desc:"Momento de verdad para Europa" }
    ],
    verification: "Verificado: sistema Arcadia, ejercicio CWIX 8-26 JUN en Polonia (DefenseNews). Fecha: 6 JUN 2026."
  }
}

],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 8 temas (5 competencia + 3 ventana)
   Auditoría de Oportunidad v8.2
═════════════════════════════════════════════════════════════ */
proposals: [

/* ═══ P1 — GOLDEN · CRIMEA TRAMPA (CONVERGENCIA 541K/1.80x + 192K/1.28x) ═══ */
{
  number: "P1",
  golden: true,
  title: "CRIMEA ES UNA TRAMPA: sin gasolina, sin flota y sin escapatoria — cómo Putin puede perder la península sin una batalla",
  subtitle: "Cupones de combustible suspendidos, R-280 cortada por drones, flota del Mar Negro destruida y 2 millones de personas atrapadas",
  flag: "ua",
  tags: [
    { cls:"tag-red", text:"🔴 CONVERGENCIA 2 CANALES" },
    { cls:"tag-gold", text:"⭐ TEMA DORADO" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"UCRANIA / RUSIA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 600K-1M",
  chips: [
    { cls:"chip-gold", text:"🏆 CONVERGENCIA: 541K (1.80x) + 192K (1.28x) en 4 días" },
    { cls:"chip-green", text:"⚡ Acelerando — crisis empeora HOY (Lugansk también)" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Crimea_in_Ukraine.svg?width=1200",
  bannerAlt: "Sebastopol — la base naval que ya no tiene flota",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=1200",

  tesis: "Crimea se está convirtiendo en la mayor trampa geopolítica de Putin. Desde el 4 de junio, la gasolina no se vende ni con cupones. La autopista R-280 'Novorossiya' está bajo fuego sistemático de drones ucranianos. La flota del Mar Negro ha perdido más de un tercio de sus buques. Ucrania destruyó el 25% de la capacidad de refinación rusa solo con drones. Y ahora la crisis se ha extendido a Lugansk. Resultado: 2 millones de personas en una península sin combustible, sin ruta de suministro segura y sin armada. La SEÑAL DE DEMANDA es la más fuerte del radar: CONVERGENCIA de 2 canales del nicho — uno publicó hace 4 días y lleva 541K views (1.80x su media), otro publicó simultáneamente sobre logística rusa colapsando y lleva 192K (1.28x). Dos canales, mismo tema, misma ventana, ambos por encima de la media.",

  fields: [
    { label:"La noticia", value:"Crimea suspendió la venta de gasolina y la emisión de cupones el 4 JUN 2026 (Moscow Times). Límite: 20 litros/vehículo. Policía registrando matrículas. Reventa en mercado negro a 200-350 rublos/litro. La crisis se extendió a Lugansk (NV Ukraine). Causa: Ucrania destruyó la R-280 con drones Shark-M y atacó 30 refinerías en mayo (Bloomberg). La mayor cadena de gasolineras de Crimea ya había suspendido cupones el 1 JUN (Meduza)." },
    { label:"Segunda derivada", value:"Crimea no tiene una crisis de combustible — tiene una CRISIS EXISTENCIAL. La península depende al 100% de suministros terrestres. Ucrania ha cortado la arteria principal (R-280) sin ofensiva terrestre. La flota del Mar Negro ha perdido más de un tercio de sus buques. El puente de Kerch tiene capacidad limitada. Putin anexionó Crimea en 2014 como su mayor victoria — ahora se está convirtiendo en su mayor vulnerabilidad. El dato brutal: Rusia gasta recursos enormes en defender una península que no puede abastecer." },
    { label:"Gran pregunta", value:"¿Está Ucrania consiguiendo la de-ocupación de Crimea sin disparar un solo tiro terrestre — simplemente cortando el suministro hasta que la península sea insostenible?" },
    { label:"Señal de competencia", value:"CONVERGENCIA DE 2 CANALES EN 4 DÍAS — la señal más fuerte del radar. Canal P1 castellanoparlante publicó 'Putin ATRAPADO en Crimea' hace 4 días y lleva 541K views — 1.80x su media habitual (~300K). Simultáneamente, un canal militar del nicho publicó 'Operación Cuarentena: Ucrania asalta la logística de Rusia' hace 4 días con 192K views — 1.28x su media (~150K). DOS canales, MISMO tema, MISMA ventana, AMBOS por encima de la media = demanda CONFIRMADA. VP publicó HOY 'Ucrania victoria posible' (170K en 7h) pero NO sobre Crimea específicamente. El ángulo Crimea-trampa es DIFERENTE y complementario." },
    { label:"Demanda en medios", value:"Moscow Times (suspensión cupones 4 JUN), RFERL (colas kilométricas Sebastopol), Meduza (suspensión cadena gasolineras 1 JUN), NV Ukraine (extensión a Lugansk), Bloomberg (30 ataques refinerías mayo), Kyiv Post (drones R-280), Detroit News (escasez gasolina). Cobertura MASIVA en medios premium." },
    { label:"Velocidad de agenda", value:"ACELERANDO — la crisis empeora cada día. Los cupones se suspendieron el 4 JUN. Lugansk ahora también raciona. Cada nuevo ataque ucraniano a la R-280 agrava el problema. Publicar ESTA SEMANA mientras la crisis está en su pico." },
    { label:"Historial VP", value:"VP publicó HOY 'Ucrania victoria posible' (170K en 7h) — enfoque GENERAL sobre contraofensiva. VP publicó 'Putin economía colapsa' (355K, 15 MAY) — enfoque MACRO económico. PERO: ninguno cubre CRIMEA como tema específico. El ángulo Crimea = península-trampa es DIFERENTE: es militar-geográfico, no económico ni general. Mapas, rutas cortadas, flota destruida, población atrapada. Complementario a ambos videos." },
    { label:"Motor viral", value:"MECANISMO: guerra (conflicto activo) + Putin/Rusia (personaje reconocible) + paradoja brutal (anexionó Crimea como victoria, ahora es su trampa) + dato impactante (cupones de gasolina en pleno siglo XXI, policía registrando matrículas) + mapas visuales (península, rutas cortadas, flota destruida) + escalada (cada día peor, ahora Lugansk) + consecuencia global (si Rusia pierde Crimea sin batalla = cambio en la guerra). DEMANDA DOBLEMENTE CONFIRMADA por convergencia 1.80x + 1.28x." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: en Sebastopol, la base de la orgullosa flota del Mar Negro, hoy hay colas de kilómetros para conseguir 20 litros de gasolina — con policía registrando matrículas. Escalada: Ucrania ha cortado la R-280 con drones, destruido un tercio de la flota, y atacado 30 refinerías en un mes. Giro: Putin no está perdiendo Crimea en una batalla — la está perdiendo en una cola de gasolinera. Cierre: ¿puede Rusia mantener una península que no puede abastecer?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué Crimea se ha convertido en la mayor trampa de Putin. Demostrable: datos de racionamiento (Moscow Times, Meduza), ataques a R-280 (Bloomberg, Kyiv Post), destrucción flota (Naval News), extensión a Lugansk (NV Ukraine), mapas de rutas cortadas." },
    { label:"Ventaja VP", value:"ALTA. VP domina análisis de guerra con mapas, datos y paradojas geopolíticas. Crimea como península-trampa es ULTRA VISUAL: mapa de la R-280, posición de la flota destruida, puente de Kerch, rutas cortadas. El ángulo 'perder Crimea sin batalla' es exactamente la tesis que VP hace mejor que nadie." },
    { label:"Caso para 800K/1M", value:"CONVERGENCIA DE DEMANDA: 541K (1.80x) + 192K (1.28x) en 2 canales simultáneamente = señal más fuerte del radar. Guerra Ucrania = tema probado (VP: 3.74M en video top). Paradoja 'victoria convertida en trampa' = narrativa irresistible. Mapas ultra visuales. VP publicó hoy sobre Ucrania general → Crimea específico es el sequel natural. Riesgo: saturación Ucrania/Rusia. Mitigar: titular CRIMEA específico, no 'guerra en Ucrania' genérico." },
    { label:"Título mental", value:"Putin conquistó Crimea como su mayor triunfo — ahora 2 millones de personas están atrapadas sin gasolina, sin flota y sin escapatoria" },
    { label:"Qué investigar más", value:"Mapa detallado R-280 y puntos de ataque. Estado puente de Kerch. Inventario pérdidas flota Mar Negro. Capacidad refinación destruida. Extensión crisis a Lugansk y otros territorios. Opciones rusas para abastecer. Comparativa con asedios históricos de penínsulas." },
    { label:"Veredicto", value:"ATACAR HOY — convergencia 2 canales (1.80x + 1.28x) en 4 días, crisis acelerando (Lugansk se suma), VP publicó hoy sobre Ucrania general → Crimea específico es complementario, ultra visual, ángulo único." }
  ],
  sources: [
    { medium:"Moscow Times", url:"https://www.themoscowtimes.com/2026/06/04/crimea-suspends-gasoline-sales-and-distribution-of-fuel-vouchers-a92932", desc:"Crimea suspende venta de gasolina y cupones" },
    { medium:"RFERL", url:"https://www.rferl.org/a/fuel-crisis-hits-russian-occupied-crimea/33773280.html", desc:"Colas kilométricas en Sebastopol" },
    { medium:"Meduza", url:"https://meduza.io/en/news/2026/06/02/crimea-s-top-gas-stations-end-coupon-sales-leaving-motorists-without-guaranteed-supplies-of-premium-and-regular-amid-worsening-fuel-crisis", desc:"Mayor cadena suspende cupones" },
    { medium:"NV Ukraine", url:"https://english.nv.ua/nation/deficit-paliva-na-tot-u-luganskiy-oblasti-obmezhili-prodazh-benzinu-50612934.html", desc:"Crisis se extiende a Lugansk" }
  ]
},

/* ═══ P2 — ISRAEL-IRÁN ROMPEN ALTO EL FUEGO DÍA 100 ═══ */
{
  number: "P2",
  golden: false,
  title: "ISRAEL E IRÁN ROMPEN EL ALTO EL FUEGO EN EL DÍA 100 DE LA GUERRA — Trump no puede controlar a Netanyahu",
  subtitle: "Misiles iraníes a Israel por primera vez desde abril · Bombardeo israelí de Beirut · Negociaciones nucleares paralizadas",
  flag: "ir",
  tags: [
    { cls:"tag-red", text:"🔴 BREAKING HOY" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"ORIENTE MEDIO" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 500K-800K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: Memorias de Pez acaba de publicar + patrón VP probado (388K, 377K, 363K)" },
    { cls:"chip-green", text:"⚡ BREAKING — intercambio de misiles HOY" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Iron_Dome_near_Sderot.jpg?width=1200",
  bannerAlt: "Iron Dome interceptando misiles — el alto el fuego se desmorona",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=1200",

  tesis: "El alto el fuego entre EEUU-Israel e Irán se ha roto el día 100 de la guerra. Israel bombardeó los suburbios del sur de Beirut. Irán respondió con misiles balísticos — los primeros desde abril. El IRGC declaró que fue 'legítima defensa'. La pausa del 8 JUN es extremadamente frágil. La segunda derivada: EEUU negocia simultáneamente la paz nuclear con Irán y la alianza militar con Israel. Las dos cosas son incompatibles. Trump no puede controlar a Netanyahu. Irán usa cada violación israelí para justificar escalada. El patrón Irán es el más probado de VP: 388K, 377K, 363K, 349K en videos recientes. Memorias de Pez acaba de publicar sobre el tema hace 1 hora — confirmando demanda inmediata.",

  fields: [
    { label:"La noticia", value:"Israel e Irán intercambiaron fuego el 7-8 JUN. Israel bombardeó Beirut sur (2 muertos, 20 heridos). Irán respondió con misiles balísticos al norte de Israel — primera vez desde alto el fuego de abril. IRGC: 'legítima defensa'. Pausa anunciada el 8 JUN pero extremadamente frágil. Negociaciones nucleares EEUU-Irán paralizadas. $24.000M en activos iraníes congelados siguen bloqueados. CBS, NPR, CNBC confirman." },
    { label:"Segunda derivada", value:"EEUU negocia la paz nuclear con Irán mientras su principal aliado (Israel) torpedea el alto el fuego. Trump no puede controlar a Netanyahu. Las negociaciones incluyen moratoria de enriquecimiento y $24.000M — pero cada vez que Israel ataca Líbano, Irán escala. El ciclo es irreversible salvo que EEUU discipline a Israel — políticamente imposible. La paradoja: Trump necesita el acuerdo con Irán para el Nobel y el Mundial, pero no puede traicionar a Israel." },
    { label:"Gran pregunta", value:"¿Es el alto el fuego EEUU-Irán una ficción diplomática si EEUU no puede controlar a Israel — y está el mundo a 100 días de una guerra sin final?" },
    { label:"Señal de competencia", value:"DEMANDA INMEDIATA CONFIRMADA. Memorias de Pez (2.93M subs) publicó 'ISRAEL e IRÁN se ATACAN mutuamente' hace 1 hora — 3.4K views acumulando rápidamente. El tema es BREAKING = todos los canales lo cubrirán en 24-48h. PERO: el patrón VP demuestra que Irán SIEMPRE funciona — 388K (Corea-Irán), 377K (invasión Trump), 363K (células durmientes), 349K (China-Irán). Cada escalada Irán = video VP por encima de 350K. VP tiene ventaja por velocidad y profundidad si publica rápido." },
    { label:"Demanda en medios", value:"CBS News (cobertura en vivo), NPR (confirmación misiles), CNBC (análisis alto el fuego), Al Jazeera (perspectiva iraní), Wikipedia (cronología actualizada). Es EL tema del día en medios globales." },
    { label:"Velocidad de agenda", value:"BREAKING — intercambio de misiles fue ayer/hoy. La pausa es frágil. Cualquier nuevo ataque reactiva todo. Publicar LO ANTES POSIBLE para capturar el pico de demanda." },
    { label:"Historial VP", value:"PATRÓN PROBADO MÁS FUERTE DE VP. Irán + escalada = 350K-500K consistentemente. Videos recientes: Estado alerta Corea/Irán (388K), Invasión Trump/Irán (377K), Células durmientes (363K), China-Irán (349K), Acuerdo Irán (412K). Este es el patrón más rentable del canal. Cada escalada es una oportunidad." },
    { label:"Motor viral", value:"MECANISMO: guerra activa (misiles volando HOY) + Irán/Israel (nombres reconocibles) + miedo (escalada nuclear potencial) + Trump atrapado (no puede controlar a Netanyahu) + ruptura diplomática (alto el fuego roto) + consecuencia global (petróleo, Ormuz, Mundial) + día 100 = número simbólico. DEMANDA CONFIRMADA por patrón VP + publicación inmediata competencia." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: día 100 de la guerra entre EEUU e Irán — y acaban de romperse la cara otra vez. Escalada: Israel bombardeó Beirut, Irán respondió con misiles, el alto el fuego de abril se desmorona. Giro: Trump negocia la paz con Irán Y la alianza con Israel al mismo tiempo — las dos cosas son incompatibles. Cierre: ¿hay salida, o estamos atrapados en un ciclo infinito de escalada?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué el alto el fuego se rompió y si hay posibilidad real de acuerdo. Demostrable: cronología de ataques (CBS), negociaciones nucleares (CNBC, Wikipedia), $24.000M activos (Al Jazeera), patrón de escaladas previas." },
    { label:"Ventaja VP", value:"ALTA. VP tiene el track record más fuerte en Irán de todo YouTube en español. 5 videos por encima de 350K. La profundidad del análisis (negociaciones nucleares + geopolítica regional + petróleo + Ormuz) es exactamente lo que VP hace mejor." },
    { label:"Caso para 800K/1M", value:"Patrón VP PROBADO: Irán = 350-500K. Día 100 = número simbólico. Misiles volando = urgencia máxima. Riesgo: saturación Irán en el canal. Mitigar: ángulo NO es 'otra escalada' sino 'por qué el alto el fuego es una ficción' = tesis nueva. Para ganar: publicar en 24-48h para capturar pico de demanda." },
    { label:"Título mental", value:"Día 100 de la guerra: Israel y Irán acaban de romperse la cara otra vez — ¿es el alto el fuego una ficción diplomática?" },
    { label:"Qué investigar más", value:"Cronología completa alto el fuego abril-junio. Términos exactos del acuerdo. Qué violaciones cometió cada parte. Estado negociaciones nucleares. $24.000M activos congelados. Impacto en petróleo/Ormuz. Posición de China y Rusia. Escenarios de escalada nuclear." },
    { label:"Veredicto", value:"ATACAR HOY — breaking news, patrón VP más probado (5 videos >350K), demanda inmediata, velocidad máxima necesaria para capturar pico." }
  ],
  sources: [
    { medium:"CBS News", url:"https://www.cbsnews.com/live-updates/iran-us-war-israel-hezbollah-fighting-ceasefire-efforts/", desc:"Cobertura en vivo día 100" },
    { medium:"NPR", url:"https://www.npr.org/2026/06/07/g-s1-126816/israel-iran-missile-ceasefire", desc:"Misiles iraníes a Israel" },
    { medium:"CNBC", url:"https://www.cnbc.com/2026/06/06/trump-iran-jcpoa-nuclear-deal-obama.html", desc:"Negociaciones nucleares en contexto" }
  ]
},

/* ═══ P3 — COLOMBIA BUKELE COLOMBIANO ═══ */
{
  number: "P3",
  golden: false,
  title: "EL BUKELE COLOMBIANO: cómo un outsider con pasado chavista y cero escaños puede ganar la presidencia en 13 días",
  subtitle: "Espriella 43.7% vs Cepeda 40.9% · Runoff 21 JUN · VP tiene tema APROBADO · Solo Fonseca publicó hace 3h",
  flag: "co",
  tags: [
    { cls:"tag-red", text:"🔴 COMPETENCIA ACABA DE PUBLICAR" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"LATINOAMÉRICA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: canal P1 publicó hace 3h — 67K acumulando" },
    { cls:"chip-green", text:"⚡ Ventana óptima — runoff 21 JUN = 13 días" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta — tema APROBADO" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",
  bannerAlt: "Casa de Nariño — el outsider Espriella puede ganar la presidencia",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",

  tesis: "Abelardo de la Espriella ganó la primera vuelta colombiana con 43.7% — un outsider sin partido, sin escaños, con pasado chavista que ahora admira a Bukele y Milei. Se enfrenta a Iván Cepeda (heredero de Petro) el 21 de junio. Es el patrón latinoamericano perfecto: Bukele en El Salvador, Milei en Argentina, ahora Espriella en Colombia. La segunda derivada: no es una elección colombiana — es la confirmación de que TODA Latinoamérica está girando hacia outsiders populistas de derecha que prometen mano dura. VP tiene este tema APROBADO por el equipo con deadline 14 JUN. Un canal P1 del nicho acaba de publicar su versión hace 3 horas (67K acumulando). La ventana está abierta pero se cierra rápido.",

  fields: [
    { label:"La noticia", value:"Abelardo de la Espriella ganó la primera vuelta el 31 MAY con 43.74% (10.36M votos). Iván Cepeda del Pacto Histórico obtuvo 40.90% (9.69M). El balotaje será el 21 JUN. Espriella es un abogado mediático sin partido propio ni escaños. AtlasIntel (acertó primera vuelta) lo da ganador en segunda vuelta. Un canal P1 castellanoparlante publicó 'El Bukele colombiano' hace 3 horas — 67K views acumulando rápidamente." },
    { label:"Segunda derivada", value:"Colombia no es solo una elección — es el último capítulo de la ola outsider latinoamericana. Bukele (El Salvador 2019), Milei (Argentina 2023), y ahora Espriella (Colombia 2026). El patrón es idéntico: outsider sin partido, retórica antisistema, promesa de mano dura, uso masivo de redes sociales. Pero hay una paradoja: Espriella tiene PASADO CHAVISTA — fue cercano al régimen de Venezuela antes de reinventarse como hombre de derecha. Es el camaleón perfecto de la política latinoamericana." },
    { label:"Gran pregunta", value:"¿Es la ola outsider-derecha que barre Latinoamérica (Bukele, Milei, Espriella) un fenómeno nuevo, o es el mismo populismo de siempre con diferente disfraz — y puede un hombre con pasado chavista gobernar Colombia como fan de Bukele?" },
    { label:"Señal de competencia", value:"SEÑAL INMEDIATA. Un canal P1 castellanoparlante publicó 'EL BUKELE COLOMBIANO tiene pasado chavista, cero escaños y lidera todas las encuestas' hace 3 horas — 67K views acumulando rápidamente. Es demasiado nuevo para calcular multiplicador vs media, pero la velocidad inicial (67K en 3h) supera el ritmo habitual de ese canal. VP publicó 'Sorpresa Colombia' (340K, 1 JUN) sobre la primera vuelta. Este es el SEQUEL natural. VP tiene el tema APROBADO por el equipo con deadline 14 JUN." },
    { label:"Demanda en medios", value:"CNN (cobertura en vivo primera vuelta), Infobae (análisis extenso), El Tiempo (encuestas segunda vuelta), Americas Quarterly (análisis Too Close to Call), NPR (Trump reshaping LatAm policy). Cobertura MASIVA en medios latinoamericanos." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA — runoff es el 21 JUN = 13 días. VP tiene deadline 14 JUN del equipo. Publicar ESTA SEMANA para posicionar antes del balotaje. La competencia acaba de publicar → hay 48-72h para que VP publique su versión más profunda." },
    { label:"Historial VP", value:"VP publicó 'Sorpresa Colombia: cómo un fan de Bukele y Milei ha destrozado a la izquierda' (340K, 1 JUN). RESULTADO FUERTE. Este es el sequel: de '¿quién es?' a '¿puede ganar y qué significa?'. VP tiene Colombia APROBADO con deadline 14 JUN. Patrón probado: video de seguimiento post-elección + análisis del patrón continental." },
    { label:"Motor viral", value:"MECANISMO: Latinoamérica (audiencia directa) + outsider (historia irresistible: de cero escaños a presidente) + paradoja (pasado chavista + fan de Bukele) + urgencia (13 días para la elección) + patrón continental (Bukele → Milei → Espriella = escalada) + sequel de video exitoso (340K). DEMANDA CONFIRMADA por competencia publicando + VP 340K en primera entrega." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: un abogado de televisión sin partido y sin un solo escaño está a punto de ganar la presidencia de Colombia — y tiene un secreto que intenta ocultar. Escalada: su pasado como cercano al chavismo venezolano vs su presente como admirador de Bukele y Milei. Giro: no es solo Colombia — es el patrón que barre toda Latinoamérica. Cierre: ¿qué significa que toda la región elija outsiders que prometen romper el sistema?" },
    { label:"Promesa cumplible", value:"El video promete explicar quién es realmente Espriella, por qué puede ganar y qué revela sobre el futuro de Latinoamérica. Demostrable: resultados primera vuelta, encuestas AtlasIntel, pasado chavista documentado, conexión Bukele-Milei, datos de la ola continental." },
    { label:"Ventaja VP", value:"ALTA. VP ya tiene un video exitoso sobre la primera vuelta (340K). El equipo tiene el tema aprobado. VP domina el análisis continental latinoamericano. Ningún canal ha conectado Colombia con la ola Bukele-Milei a nivel del análisis VP." },
    { label:"Caso para 800K/1M", value:"VP primera vuelta = 340K (ya probado). Sequel con profundidad = potencial de superar. Audiencia latina directa. Ola continental = narrativa escalada. Riesgo: Colombia no siempre genera clicks masivos fuera de Latam. Mitigar: titular centrado en 'Bukele colombiano' (nombre reconocible) + ola continental. Para ganar: publicar antes del 14 JUN, antes de la saturación." },
    { label:"Título mental", value:"De fan de Chávez a fan de Bukele: cómo un outsider sin escaños está a 13 días de ganar la presidencia de Colombia" },
    { label:"Qué investigar más", value:"Pasado chavista de Espriella: detalles, pruebas, qué dice él. Comparativa Bukele-Milei-Espriella: programas, estilo, base electoral. Posición de Petro y transferencia de voto a Cepeda. Encuestas segunda vuelta. Impacto en relaciones Colombia-Venezuela. Crimen organizado y narcotráfico como issue electoral." },
    { label:"Veredicto", value:"ATACAR HOY — VP tiene tema APROBADO con deadline 14 JUN, competencia acaba de publicar, sequel de video exitoso (340K), audiencia latina directa, 13 días para el balotaje." }
  ],
  sources: [
    { medium:"Infobae", url:"https://www.infobae.com/colombia/2026/05/31/sorpresa-en-las-elecciones-de-colombia-abelardo-de-la-espriella-gana-la-primera-vuelta-y-disputara-la-presidencia-con-ivan-cepeda/", desc:"Espriella gana primera vuelta" },
    { medium:"El Tiempo", url:"https://www.eltiempo.com/politica/elecciones-colombia-2026/encuesta-de-atlasintel-la-que-acerto-en-victoria-de-abelardo-de-la-espriella-en-primera-vuelta-dice-que-ganaria-la-segunda-segun-nueva-medicion-3561651", desc:"AtlasIntel lo da ganador en segunda" },
    { medium:"Americas Quarterly", url:"https://americasquarterly.org/article/reaction-peru-runoff-is-too-close-to-call-again/", desc:"Análisis polarización LatAm" }
  ]
},

/* ═══ P4 — PAPA EN ESPAÑA / SÁNCHEZ ═══ */
{
  number: "P4",
  golden: false,
  title: "EL PAPA ESTADOUNIDENSE EN LA ESPAÑA DE SÁNCHEZ: por qué la visita de Leo XIV es mucho más que religión",
  subtitle: "InfoVlogger 89K/1.48x · Papa HOY en Barcelona · Sagrada Familia mañana · Primer papa que habla al Parlamento español",
  flag: "es",
  tags: [
    { cls:"tag-orange", text:"🟠 COMPETENCIA 1.48x" },
    { cls:"tag-yellow", text:"🔍 INVESTIGAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"ESPAÑA / VATICANO" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 300K-500K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: 89K (1.48x) + 77K (1.28x) en canal P2" },
    { cls:"chip-green", text:"⚡ HOY — Papa en Barcelona" },
    { cls:"chip-blue", text:"🔒 Retención: media-fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: media" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Sagrada_Familia_nave_roof_detail.jpg?width=1200",
  bannerAlt: "Interior de la Sagrada Familia — inauguración mañana",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=1200",

  tesis: "Papa Leo XIV está HOY en Barcelona. Mañana inaugura la Torre de Jesucristo de la Sagrada Familia (172,5m), convirtiendo al templo en la iglesia más alta del mundo tras 144 años de construcción. Es el primer papa estadounidense, el primero en hablar ante el Parlamento español, y llega en plena crisis política de Sánchez. La señal de competencia es clara: un canal P2 de actualidad española publicó 2 videos sobre el Papa/Sánchez en 48 horas — 89K (1.48x su media) y 77K (1.28x). La demanda existe. PERO: el ADN editorial de VP es geopolítica, no política nacional española ni religión. El ángulo VP necesitaría conectar al Papa con poder global: un papa estadounidense en Europa durante la guerra de Irán, la crisis migratoria y la fractura OTAN. Sin esa conexión, no da para 20 minutos VP.",

  fields: [
    { label:"La noticia", value:"Papa Leo XIV (Robert Prevost, primer papa estadounidense) aterriza HOY 9 JUN en Barcelona. Programa: oración Catedral Santa Cruz, vigilia Estadio Olímpico. Mañana 10 JUN: prisión Brians 1, Montserrat, inauguración Torre de Jesucristo de la Sagrada Familia (172,5m = iglesia más alta del mundo). Ya habló ante el Parlamento español pidiendo 'renovación moral'. Viaje apostólico 6-12 JUN." },
    { label:"Segunda derivada", value:"El Papa en España no es solo religión. Un papa estadounidense en Europa durante la guerra EEUU-Irán, cuando EEUU recorta fuerzas OTAN y exige que Europa pague su defensa. Cada palabra del Papa sobre migración, paz y valores tiene peso diplomático. PERO la conexión geopolítica es tenue — el Papa habla de moral, no de geoestrategia. VP necesitaría encontrar un ángulo más profundo que 'Papa visita España'." },
    { label:"Gran pregunta", value:"¿Es la visita de un papa estadounidense a Europa un acto religioso o un movimiento geopolítico en un momento en que EEUU se desentiende del continente?" },
    { label:"Señal de competencia", value:"SEÑAL CONFIRMADA EN CANAL P2. Un canal de actualidad española (444K subs, ~60K media) publicó 2 videos en 48h: 'Sánchez acorralado y el Papa hace una misa satánica' (89K, 2d = 1.48x) y 'Satanás ha entrado en la iglesia, el Papa da mucho miedo' (77K, 1d = 1.28x). Ambos por encima de la media. La demanda es NACIONAL (España) más que global. Ningún canal P1 de geopolítica ha cubierto el tema, lo que sugiere que el ángulo geopolítico no es obvio." },
    { label:"Demanda en medios", value:"Vatican News (agenda completa), NCR (conexión León XIII - Leo XIV), America Magazine (contexto católico), idealista (programa Barcelona). Cobertura masiva en medios españoles. Medios premium internacionales (WSJ/FT/NYT): cobertura moderada, centrada en lo religioso más que en lo geopolítico." },
    { label:"Velocidad de agenda", value:"HOY — Papa en Barcelona. Mañana inauguración Sagrada Familia. Viaje hasta 12 JUN. Máxima actualidad esta semana." },
    { label:"Historial VP", value:"VP NO ha cubierto visitas papales. El ADN editorial de VP es geopolítica, defensa, economía — no religión ni política interna española. Podría funcionar si el ángulo es 'el poder global del Vaticano' o 'un papa americano en la Europa que EEUU abandona'. Sin ese ángulo, es territorio InfoVlogger, no VP." },
    { label:"Motor viral", value:"MECANISMO: Papa (figura reconocible) + Sagrada Familia (monumento icónico) + España (audiencia directa) + Sánchez acorralado (polarización) + 'iglesia más alta del mundo' (dato wow) + 144 años de construcción (historia épica). PERO: el componente geopolítico es el más débil. La viralidad es nacional española, no global." },
    { label:"Retención narrativa", value:"MEDIA-FUERTE. Apertura: 144 años después de que se pusiera la primera piedra, un papa llamado Leo inaugura la torre más alta de la Sagrada Familia — exactamente como el papa que puso esa piedra. Escalada: es americano, habla ante el Parlamento español, y llega cuando Sánchez está contra las cuerdas. Giro: ¿es una visita pastoral o un movimiento de poder? Cierre: depende del ángulo geopolítico encontrado." },
    { label:"Promesa cumplible", value:"Si el ángulo es Sagrada Familia + poder Vaticano: demostrable con historia del templo, datos de la torre, diplomacia papal. Si el ángulo es geopolítico (papa americano en Europa): necesita más investigación para sostener 20-30 minutos." },
    { label:"Ventaja VP", value:"MEDIA. VP tiene capacidad para análisis histórico y geopolítico. Pero el tema es más fuerte para canales de actualidad española que para geopolítica internacional. La ventaja sube si se encuentra ángulo de poder global del Vaticano." },
    { label:"Caso para 800K/1M", value:"Señal de competencia 1.48x en canal P2 español — demanda confirmada pero NACIONAL. Papa = figura reconocible. Sagrada Familia = visual espectacular. Riesgo ALTO: que la audiencia internacional de VP (Latam) no conecte con un tema centrado en España/Papa. Mitigar: buscar ángulo geopolítico global ('el papa americano que Europa necesita cuando EEUU se va'). Honestamente: más probable 300K que 800K." },
    { label:"Título mental", value:"El primer papa estadounidense inaugura la iglesia más alta del mundo — ¿qué hace el Vaticano en la España que EEUU abandona?" },
    { label:"Qué investigar más", value:"Diplomacia vaticana reciente (posición sobre Irán, Ucrania, migración). Relación Leo XIV con Trump. Poder económico del Vaticano en España. Historia completa de la Sagrada Familia. Impacto político de la visita en Sánchez. ¿Hay precedente de papa influyendo en política europea?" },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — señal de competencia 1.48x en canal P2 pero demanda parece nacional española. VP necesita encontrar ángulo geopolítico sólido para que funcione. Sin ese ángulo, no da para video VP de 20-30 minutos." }
  ],
  sources: [
    { medium:"Vatican News", url:"https://www.vaticannews.va/en/pope/news/2026-06/pope-leo-kicks-off-apostolic-journey-to-spain-lands-in-madrid.html", desc:"Viaje apostólico a España" },
    { medium:"NCR", url:"https://www.ncronline.org/sagrada-familias-papal-connection-comes-full-circle-pope-leo-xiv", desc:"Conexión papal Sagrada Familia" },
    { medium:"idealista", url:"https://www.idealista.com/en/news/lifestyle-in-spain/2026/06/08/900495-pope-leo-xiv-s-visit-to-barcelona-key-events-and-schedule", desc:"Programa Barcelona" }
  ]
},

/* ═══ P5 — TAIWÁN TRUMP CONGELA ARMAS ═══ */
{
  number: "P5",
  golden: false,
  title: "TRUMP CONGELA $14.000M EN ARMAS A TAIWÁN MIENTRAS NEGOCIA CON XI — ¿Está subastando la isla que fabrica el 92% de los chips?",
  subtitle: "Solo Fonseca 400K/1.33x · VP tiene tema APROBADO · Foreign Policy: armas congeladas · Brookings: 'apuesta peligrosa'",
  flag: "tw",
  tags: [
    { cls:"tag-orange", text:"🟠 COMPETENCIA 1.33x" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"ASIA-PACÍFICO" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-700K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: 400K (1.33x) en canal P1 — 7 días" },
    { cls:"chip-green", text:"⚡ Ventana óptima — armas siguen congeladas" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta — tema APROBADO" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Republic_of_China.svg?width=1200",
  bannerAlt: "TSMC — la empresa que fabrica el 92% de los chips avanzados del mundo",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Republic_of_China.svg?width=1200",

  tesis: "Trump ha congelado $14.000 millones en ventas de armas a Taiwán mientras negocia con Xi Jinping un acuerdo comercial. Foreign Policy reveló que F-16, misiles Harpoon y sistemas Patriot están bloqueados. Trump declaró que Taiwán 'debería pagarnos por protección'. Brookings lo calificó de 'la apuesta más peligrosa de la política exterior de Trump'. La segunda derivada: Trump no abandona Taiwán — lo SUBASTA. Congela armas para presionar a Taiwán a pagar más, y usa la amenaza de abandono como palanca con China. Pero esta estrategia destruye 50 años de ambigüedad estratégica. Si China cree que EEUU no defenderá la isla, el cálculo de invasión cambia. Un canal P1 del nicho publicó 'Trump SACRIFICA Taiwán' hace 7 días y lleva 400K (1.33x su media) — demanda sostenida.",

  fields: [
    { label:"La noticia", value:"Foreign Policy reveló que la administración Trump congeló $14.000M en ventas de armas a Taiwán aprobadas en 2024 (F-16V, misiles Harpoon, Patriot). Trump y Xi celebraron cumbre bilateral donde acordaron 'enfriar tensiones' (CNBC). Trump declaró: 'Taiwán debería pagarnos por protección'. Brookings publicó análisis calificando la estrategia como 'apuesta peligrosa'." },
    { label:"Segunda derivada", value:"Trump no está abandonando Taiwán — está SUBASTÁNDOLO. Congela armas para que paguen más, y usa la amenaza de abandono como palanca con China para obtener concesiones comerciales. El problema: esta estrategia destruye la ambigüedad estratégica que ha mantenido la paz en el estrecho durante 50 años. Si China cree que EEUU no defenderá Taiwán, el cálculo de invasión cambia. Y si Taiwán cree que EEUU lo ha abandonado, podría buscar su propia disuasión nuclear." },
    { label:"Gran pregunta", value:"¿Está Trump desencadenando la guerra en el Estrecho de Taiwán precisamente al intentar evitarla — y puede la isla que fabrica el 92% de los chips avanzados del mundo sobrevivir como moneda de cambio?" },
    { label:"Señal de competencia", value:"SEÑAL POR ENCIMA DE MEDIA. Un canal P1 castellanoparlante publicó 'TRUMP SACRIFICA TAIWÁN para alcanzar un acuerdo histórico con China' hace 7 días y lleva 400K views — 1.33x su media habitual (~300K). Está en el límite de la ventana de 1 semana pero el rendimiento sostenido (400K a los 7 días vs 300K media) indica demanda real. VP tiene Taiwán APROBADO por el equipo. La competencia trató el tema como 'Trump abandona Taiwán' — VP puede elevar con la tesis de la SUBASTA y la destrucción de la ambigüedad estratégica." },
    { label:"Demanda en medios", value:"Foreign Policy (armas congeladas), Brookings ('apuesta peligrosa'), CNBC (cumbre Trump-Xi), Al Jazeera (análisis de abandono), PBS (impacto geoestratégico). Cobertura MASIVA en think tanks y medios premium." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA — las armas siguen congeladas. Cualquier ejercicio militar chino en el estrecho reactiva el tema inmediatamente. Los análisis profundos siguen saliendo en think tanks." },
    { label:"Historial VP", value:"VP tiene Taiwán APROBADO: 'EEUU dice a Taiwán que lo defiende y le quita armas'. VP ha cubierto Taiwán/China múltiples veces. El ángulo Trump transaccional ('subastar Taiwán') es NUEVO. El patrón 'traición geopolítica' rinde 330K+ (Emiratos OPEP 334K)." },
    { label:"Motor viral", value:"MECANISMO: Trump (nombre más reconocible) + guerra potencial (Taiwán/China) + traición geopolítica (EEUU abandona aliado) + tecnología/semiconductores (TSMC = tu móvil) + dinero ($14.000M) + mapa visual (Estrecho de Taiwán). DEMANDA CONFIRMADA por 1.33x en competencia." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: Trump congela $14.000M en armas a Taiwán mientras negocia con Xi. Escalada: Taiwán fabrica el 92% de los chips avanzados — si China invade, tu próximo iPhone no existe. Giro: Trump no abandona Taiwán — lo SUBASTA. Cierre: ¿qué pasa si la subasta falla y China cree que es luz verde?" },
    { label:"Promesa cumplible", value:"Demostrable: datos de ventas congeladas (Foreign Policy), declaraciones Trump, Brookings, datos TSMC, mapas del estrecho, ejercicios militares chinos." },
    { label:"Ventaja VP", value:"ALTA. La conexión armas-semiconductores-guerra es el tipo de análisis multinivel que VP hace mejor. La tesis 'subastar Taiwán' es más profunda que 'Trump abandona Taiwán' de la competencia." },
    { label:"Caso para 800K/1M", value:"SEÑAL: 400K (1.33x). Trump + guerra = probado. Semiconductores = conexión directa espectador. VP tiene tema aprobado. Riesgo: fatiga Taiwán/China. Mitigar: titular centrado en TRUMP y TRAICIÓN. Para ganar: abrir con $14.000M, conectar con semiconductores, cerrar con escenario invasión." },
    { label:"Título mental", value:"Trump congela $14.000M en armas a Taiwán mientras negocia con Xi — ¿está subastando la isla que fabrica el 92% de los chips del mundo?" },
    { label:"Qué investigar más", value:"Lista completa armas congeladas. Reacción Taiwán. Ejercicios militares chinos recientes. TSMC dependencia global. Escenarios Brookings/RAND. Precedentes EEUU abandonando aliados." },
    { label:"Veredicto", value:"ATACAR HOY — demanda 1.33x sostenida, tema APROBADO, Trump + guerra = viral, semiconductores = conexión directa, tesis 'subasta' diferenciadora." }
  ],
  sources: [
    { medium:"Foreign Policy", url:"https://foreignpolicy.com/2026/06/02/trump-taiwan-arms-sales-frozen-china/", desc:"$14.000M en armas congeladas" },
    { medium:"Brookings", url:"https://www.brookings.edu/articles/trumps-taiwan-gamble-the-most-dangerous-bet-in-us-foreign-policy/", desc:"La apuesta más peligrosa" },
    { medium:"CNBC", url:"https://www.cnbc.com/2026/06/04/us-china-taiwan-both-sides-cool-it.html", desc:"Cumbre Trump-Xi" }
  ]
},

/* ═══ P6 — VENTANA: PERÚ 50.01% vs 49.99% ═══ */
{
  number: "P6",
  golden: false,
  title: "PERÚ: 50.01% vs 49.99% — Cuando una democracia se decide por 4.300 votos y un país de 33 millones no sabe quién manda",
  subtitle: "6 presidentes en 5 años · Fujimori cuarto intento · Semanas para contar · El cobre del mundo en juego",
  flag: "pe",
  tags: [
    { cls:"tag-orange", text:"🟠 HOY" },
    { cls:"tag-yellow", text:"🔍 INVESTIGAR" },
    { cls:"tag-cyan", text:"🔭 VENTANA" },
    { cls:"tag-blue", text:"LATINOAMÉRICA" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 350K-500K",
  chips: [
    { cls:"chip-yellow", text:"🏆 Competencia: pendiente (tema muy reciente)" },
    { cls:"chip-green", text:"⚡ HOY — conteo en curso" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_Gobierno_del_Per%C3%BA.jpg?width=1200",
  bannerAlt: "Palacio de Gobierno de Perú — 6 presidentes en 5 años",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Peru.svg?width=1200",

  tesis: "Perú no sabe quién es su presidente. Con el 94% escrutado, Roberto Sánchez lidera con 50.01% frente a Keiko Fujimori con 49.99% — 4.300 votos de diferencia en un país de 33 millones. El resultado puede tardar semanas. Es el cuarto intento de Fujimori de llegar a la presidencia. La segunda derivada: Perú no es una elección reñida — es un Estado que no puede elegir presidente. 6 presidentes en 5 años. Castillo destituido, Boluarte con protestas masivas. El verdadero tema VP: ¿puede un país funcionar sin instituciones estables? ¿Y qué pasa con el cobre peruano (esencial para la transición energética) si Perú se convierte en un Estado fallido democrático? Ningún canal del nicho ha cubierto el tema aún (demasiado reciente).",

  fields: [
    { label:"La noticia", value:"Elecciones peruanas del 7 JUN 2026. Con 94% de mesas: Roberto Sánchez (izquierda) 50.01% vs Keiko Fujimori (derecha) 49.99%. 4.300 votos de diferencia. ONPE advierte que el conteo completo podría tardar hasta mediados de julio. Cuarta candidatura de Fujimori. Polarización Lima (derecha) vs provincias (izquierda). Al Jazeera, CNN, Americas Quarterly confirman." },
    { label:"Segunda derivada", value:"Perú ha tenido 6 presidentes en 5 años. Castillo fue destituido y encarcelado. Boluarte enfrentó protestas que dejaron decenas de muertos. El Congreso tiene 25% de aprobación. Perú es el segundo productor mundial de cobre — esencial para la transición energética. Si el país se convierte en un 'Estado fallido democrático' (instituciones que existen pero no funcionan), el suministro de cobre para el mundo se pone en riesgo." },
    { label:"Gran pregunta", value:"¿Puede una democracia funcionar cuando NINGÚN presidente termina su mandato — y qué pasa con el cobre del mundo si Perú se convierte en un Estado fallido democrático?" },
    { label:"Señal de competencia", value:"PENDIENTE DE COMPROBAR — la elección fue ayer, es demasiado pronto para que la competencia publique. Ningún canal P1 del nicho ha publicado sobre Perú en las últimas 48h. Es una ventana de oportunidad por actualidad y medios premium, no por señal de competencia. Si VP publica rápido, puede ser primero en español con análisis profundo." },
    { label:"Demanda en medios", value:"Al Jazeera (análisis extenso), CNN (cobertura en vivo, cuarto intento Fujimori), Americas Quarterly (Too Close to Call), Infobae (resultados), Sunday Guardian Live (actualización en vivo). Cobertura MASIVA en medios premium y latinoamericanos." },
    { label:"Velocidad de agenda", value:"ACELERANDO — el conteo sigue, la incertidumbre puede durar semanas. Si hay acusaciones de fraude (como en 2021), el tema explota. Publicar ESTA SEMANA mientras la incertidumbre es máxima." },
    { label:"Historial VP", value:"VP cubrió Perú durante la crisis Castillo/Boluarte. El patrón 'democracia que colapsa' rinde bien cuando se conecta con consecuencia global (cobre). VP NO ha cubierto esta elección específica. Es territorio nuevo." },
    { label:"Motor viral", value:"MECANISMO: dato impactante (50.01% vs 49.99%) + Latinoamérica (audiencia directa) + Fujimori (nombre reconocible, cuarto intento = saga) + paradoja (6 presidentes en 5 años) + consecuencia global (cobre para transición energética) + mapa (Lima vs provincias). Hipótesis de viralidad: el dato del 0.02% es irresistible, pero Perú no siempre genera clicks masivos." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 4.300 votos separan a dos candidatos en un país de 33 millones — y el resultado puede tardar SEMANAS. Escalada: Perú ha tenido 6 presidentes en 5 años. Ninguno termina su mandato. Giro: no importa quién gane — el verdadero problema es que Perú es una democracia que no puede producir estabilidad. Cierre: ¿y si el cobre que necesita el mundo para la transición energética depende de un país que no puede elegir presidente?" },
    { label:"Promesa cumplible", value:"Demostrable: resultados electorales (ONPE), 6 presidentes en 5 años (Wikipedia, AP), datos cobre (USGS, ICMM), crisis institucional (Americas Quarterly), polarización geográfica (mapa electoral)." },
    { label:"Ventaja VP", value:"ALTA. VP domina el análisis de democracias fallidas con datos económicos y conexión global. El mapa cobre + inestabilidad = contenido VP perfecto. Ningún canal del nicho lo ha cubierto aún." },
    { label:"Caso para 800K/1M", value:"Dato irresistible: 50.01% vs 49.99%. Saga Fujimori (4 intentos). 6 presidentes en 5 años. Conexión cobre. Riesgo: Perú no siempre genera clicks masivos fuera de Perú. Mitigar: titular centrado en la PARADOJA democrática y el cobre, no en nombres peruanos. Honestamente: más probable 350K que 800K." },
    { label:"Título mental", value:"4.300 votos deciden un país de 33 millones que ha tenido 6 presidentes en 5 años — y el cobre del mundo depende de quién gane" },
    { label:"Qué investigar más", value:"Producción de cobre peruano vs demanda global. Cronología 6 presidentes en 5 años. Perfiles Sánchez vs Fujimori. Riesgo de fraude/impugnación. Mapa electoral Lima vs provincias. Inversiones mineras en riesgo." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — actualidad máxima, dato irresistible, pero sin señal de competencia aún. Si hay fraude o crisis post-electoral, sube a 'Atacar'." }
  ],
  sources: [
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/news/2026/6/8/race-tied-between-left-and-right-wing-rivals-in-perus-presidential-vote", desc:"Empate técnico" },
    { medium:"CNN", url:"https://edition.cnn.com/2026/06/07/americas/peru-president-election-keiko-fujimori-intl-latam", desc:"Cuarto intento Fujimori" },
    { medium:"Americas Quarterly", url:"https://americasquarterly.org/article/reaction-peru-runoff-is-too-close-to-call-again/", desc:"Too Close to Call (Again)" }
  ]
},

/* ═══ P7 — VENTANA: ÉBOLA CONGO SIN VACUNA ═══ */
{
  number: "P7",
  golden: false,
  title: "ÉBOLA EN ZONA DE GUERRA: 515 casos, cepa SIN VACUNA, en territorio del Estado Islámico — ¿puede Congo ser la próxima pandemia?",
  subtitle: "OMS emergencia internacional · CDC: 65% probabilidad >20.000 casos · Cepa Bundibugyo sin tratamiento · 17 de 36 zonas infectadas",
  flag: "cd",
  tags: [
    { cls:"tag-orange", text:"🟠 EMERGENCIA" },
    { cls:"tag-yellow", text:"🔍 INVESTIGAR" },
    { cls:"tag-cyan", text:"🔭 VENTANA" },
    { cls:"tag-blue", text:"ÁFRICA / SALUD GLOBAL" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 350K-600K",
  chips: [
    { cls:"chip-yellow", text:"🏆 Competencia: oportunidad clara — GAP total en español" },
    { cls:"chip-green", text:"⚡ Acelerando — 27 casos en 24h" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: media-alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_Virus_TEM_PHIL_1832_lores.jpg?width=1200",
  bannerAlt: "Virus del Ébola — cepa Bundibugyo sin vacuna",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Democratic_Republic_of_the_Congo.svg?width=1200",

  tesis: "El brote de Ébola en RD Congo se propaga a una velocidad sin precedentes: 515 casos confirmados, 91 muertos, 27 nuevos casos en 24 horas. La cepa es Bundibugyo — una de las 4 que causa enfermedad en humanos pero para la que NO existe vacuna aprobada ni tratamiento específico. El brote está en Ituri, una provincia controlada parcialmente por el ADF (afiliado al Estado Islámico), donde los equipos médicos no pueden acceder. La OMS lo declaró emergencia de salud pública internacional. El CDC de EEUU proyecta que si solo el 20% de pacientes son aislados, hay un 65% de probabilidad de superar 20.000 casos en 3 meses — rivalizando con la epidemia de 2014-2016. VP nunca ha cubierto Ébola y hay GAP TOTAL en español. Pero la regla VP aplica: África solo funciona si se conecta con tema global.",

  fields: [
    { label:"La noticia", value:"515 casos confirmados, 91 muertos, 27 nuevas infecciones en 24h (NPR, 8 JUN). Cepa Bundibugyo: NO hay vacuna aprobada. Se ha extendido a 17 de 36 zonas de salud en Ituri. OMS declaró PHEIC el 17 MAY. CDC proyecta 65% probabilidad >20.000 casos si aislamiento queda en 20%. El brote está en zona controlada por ADF (Estado Islámico en África)." },
    { label:"Segunda derivada", value:"Este no es un brote normal de Ébola. Es la combinación de 3 factores que nunca se han dado juntos: (1) cepa sin vacuna, (2) zona de guerra activa donde los médicos no pueden entrar, (3) velocidad de propagación sin precedentes. Si el virus cruza a Uganda (ya lo hizo una vez), la ecuación cambia completamente. La conexión geopolítica: el Estado Islámico controla la zona — un grupo terrorista en medio de una emergencia sanitaria global." },
    { label:"Gran pregunta", value:"¿Puede un brote de Ébola sin vacuna, en territorio controlado por el Estado Islámico, convertirse en la próxima pandemia — y qué pasa cuando la enfermedad más letal del mundo aparece en una zona donde no se puede enviar médicos?" },
    { label:"Señal de competencia", value:"OPORTUNIDAD CLARA — GAP TOTAL en español. Ningún canal P1-P4 castellanoparlante ha cubierto el brote de Ébola en Congo. En inglés, NPR, NBC y WHO tienen cobertura extensa pero no canales de geopolítica. Es una ventana de oportunidad pura: no hay señal de competencia porque nadie lo ha cubierto, pero la gravedad del brote y la declaración PHEIC de la OMS generan demanda en medios premium." },
    { label:"Demanda en medios", value:"NPR (reportaje extenso 8 JUN), WHO (emergencia internacional 17 MAY), CDC (proyecciones de 20.000+ casos), NBC News (mapas y datos), ECDC (alerta europea). Cobertura creciente en medios premium. WSJ/FT pendientes de análisis profundo." },
    { label:"Velocidad de agenda", value:"ACELERANDO — 27 casos en 24h, velocidad de propagación aumentando. Si cruza a Uganda o si supera 1.000 casos, la cobertura mediática explota. La ventana para ser primeros en español sigue abierta." },
    { label:"Historial VP", value:"VP NUNCA ha cubierto Ébola ni pandemias. Es territorio completamente nuevo. PERO: VP hizo 'Ciberataque paraliza medio planeta' (509K) — el patrón 'amenaza global que te afecta' funciona. Ébola con cepa sin vacuna podría activar el mismo motor de miedo/urgencia. La regla VP aplica: África necesita conexión con tema global (Estado Islámico, pandemia potencial, comercio de minerales)." },
    { label:"Motor viral", value:"MECANISMO: miedo existencial (Ébola + sin vacuna) + dato impactante (65% probabilidad >20.000 casos) + paradoja (enfermedad mortal en zona de guerra donde no puedes enviar médicos) + Estado Islámico (conexión terrorismo) + pandemia (post-COVID el público está sensibilizado) + mapas (propagación por zonas). Hipótesis de viralidad: el componente miedo debería generar clicks, pero Ébola puede ser percibido como 'lejano' por audiencia hispana." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: hay una enfermedad que mata al 50% de los infectados, no tiene vacuna, se está propagando a velocidad récord — y está en territorio controlado por el Estado Islámico, donde no se puede enviar médicos. Escalada: 515 casos, 27 nuevos en 24 horas, CDC dice que puede llegar a 20.000. Giro: la última vez que el Ébola se descontroló, mató a 11.000 personas en 3 países. Esta vez la cepa es diferente y peor. Cierre: ¿puede el mundo detener una pandemia en una zona de guerra?" },
    { label:"Promesa cumplible", value:"Demostrable: datos OMS/CDC, mapa de propagación, cepa Bundibugyo (sin vacuna documentado), presencia ADF/EI en Ituri, comparativa con 2014-2016 (28.000 casos), proyecciones epidemiológicas." },
    { label:"Ventaja VP", value:"MEDIA-ALTA. VP tiene capacidad para mapas, datos y conexión geopolítica (EI en África). El GAP en español es total. PERO: VP no ha hecho salud/pandemias antes. Necesita conectar con geopolítica para que funcione editorialmente." },
    { label:"Caso para 800K/1M", value:"GAP total en español = primeros. Miedo existencial + sin vacuna = clicks. Post-COVID audiencia sensibilizada. Riesgo: audiencia puede percibir Congo/Ébola como lejano. Mitigar: titular centrado en PANDEMIA y ESTADO ISLÁMICO, no en Congo. Para 800K: necesita que el brote escale a >1.000 casos o cruce fronteras. Honestamente: 400K-600K si VP lo conecta bien con geopolítica." },
    { label:"Título mental", value:"Hay un virus que mata al 50% de los infectados, no tiene vacuna, y se propaga en territorio del Estado Islámico — ¿puede Congo ser la próxima pandemia?" },
    { label:"Qué investigar más", value:"Cepa Bundibugyo: diferencias con cepas vacunables. ADF/EI en Ituri: control territorial, obstáculos médicos. Cruces fronterizos a Uganda. Comparativa con 2014-2016. Proyecciones CDC en detalle. Candidatos vacunales en desarrollo. Impacto en comercio de minerales (coltán, cobalto)." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — GAP total en español, gravedad extrema, pero VP necesita encontrar la conexión geopolítica sólida. Si el brote cruza fronteras o supera 1.000 casos: subir a 'Atacar'." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/08/nx-s1-5849203/ebola-outbreak-drc-africa-cdc", desc:"Brote acelerando sin precedentes" },
    { medium:"WHO", url:"https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026", desc:"Emergencia internacional declarada" },
    { medium:"NBC News", url:"https://www.nbcnews.com/data-graphics/ebola-outbreak-2026-cases-virus-tracking-maps-spread-congo-ugangda-us-rcna347102", desc:"Mapas y proyecciones" }
  ]
},

/* ═══ P8 — VENTANA: EEUU ABANDONA EUROPA / OTAN ═══ */
{
  number: "P8",
  golden: false,
  title: "EEUU ABANDONA A EUROPA: el Pentágono recorta 1/3 de los cazas de la OTAN, elimina submarinos y ofrece bombas nucleares como sustituto",
  subtitle: "DefenseNews: recortes históricos · CNBC: armas nucleares a más países · Rubio: 'Europa debe elegir entre bienestar y defensa'",
  flag: "us",
  tags: [
    { cls:"tag-orange", text:"🟠 SEMANA" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-cyan", text:"🔭 VENTANA" },
    { cls:"tag-blue", text:"EEUU / EUROPA / OTAN" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 350K-500K",
  chips: [
    { cls:"chip-yellow", text:"🏆 Competencia: CaspianReport 135K (1.13x) — tema adyacente" },
    { cls:"chip-green", text:"⚡ Ventana óptima — Pentágono presentará plan en junio" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_OTAN_landscape_logo.svg?width=1200",
  bannerAlt: "OTAN — EEUU recorta fuerzas y ofrece bombas nucleares como sustituto",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_NATO.svg?width=1200",

  tesis: "El Pentágono comunicó oficialmente a los aliados que recortará un tercio de los cazas disponibles para la OTAN, eliminará todos los submarinos del paquete, reducirá los bombarderos estratégicos a la mitad y retirará los drones armados. La razón: EEUU necesita reservar fuerzas para el Indo-Pacífico. Pero simultáneamente, EEUU discute expandir el despliegue de armas nucleares a más países europeos (CNBC). La segunda derivada es escalofriante: EEUU le dice a Europa 'defiéndete sola' con armas convencionales, pero 'aquí tienes más bombas nucleares'. Es la nuclearización de la defensa europea por falta de gasto convencional. Rubio lo dijo abiertamente: 'Europa tendrá que abandonar algunos programas sociales para pagar su defensa'. CaspianReport publicó 'El único lugar donde EEUU no puede perder' (135K, 1.13x) — señal adyacente.",

  fields: [
    { label:"La noticia", value:"Pentágono comunicó a aliados OTAN el 3 JUN: 1/3 menos cazas, cero submarinos (nucleares y convencionales), -50% bombarderos estratégicos, retiro drones armados, menos destructores AEGIS (DefenseNews). NDAA 2026 impide bajar de 76.000 tropas, pero borrador NDAA 2027 contempla más recortes. Simultáneamente, EEUU discute expandir armas nucleares a más países OTAN (CNBC). Rubio: 'Europa tendrá que abandonar programas sociales'. Francia prueba IA militar propia como alternativa a Palantir (DefenseNews)." },
    { label:"Segunda derivada", value:"La paradoja es escalofriante: EEUU le dice a Europa 'defiéndete sola con armas convencionales' mientras le ofrece 'más bombas nucleares como compensación'. Es la nuclearización de la defensa europea por defecto — no por elección. Europa no puede fabricar suficientes municiones convencionales (VP ya lo cubrió), no tiene suficientes tropas, y ahora EEUU le quita los cazas y submarinos. La única disuasión que queda es nuclear. ¿Quiere Europa convertirse en una potencia nuclear de facto?" },
    { label:"Gran pregunta", value:"¿Está EEUU forzando a Europa a elegir entre su estado de bienestar y su seguridad — y la respuesta será más armas nucleares en más países europeos?" },
    { label:"Señal de competencia", value:"SEÑAL ADYACENTE. CaspianReport (1.84M subs, ~120K media) publicó 'El único lugar donde EEUU no puede permitirse perder' hace 6 días con 135K views (1.13x). No trata exactamente el recorte OTAN pero es temática adyacente (prioridades militares EEUU). En español, ningún canal P1 ha cubierto los recortes específicos del Pentágono a la OTAN con datos. VP hizo 'Trump OTAN' (203K, 6 MAY) — este es el sequel con datos NUEVOS y la paradoja nuclear." },
    { label:"Demanda en medios", value:"DefenseNews (3 artículos en una semana), CNBC (armas nucleares), Stars and Stripes (detalles recorte), Japan Times (perspectiva Asia), EPC think tank (momento de verdad para Europa), El Español (análisis en español). Cobertura sólida en medios de defensa." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA — el Pentágono presentará plan completo en junio. Los recortes se implementarán en meses. El debate sobre gasto de defensa europeo está en su pico. Francia probando IA militar propia (8-26 JUN) es la señal de que Europa ya reacciona." },
    { label:"Historial VP", value:"VP hizo 'Trump OTAN' (203K, 6 MAY) y 'Rearme europeo $864B sin fábricas' (APROBADO por equipo). Hay historial pero los datos son NUEVOS: recortes específicos (1/3 cazas, cero submarinos), expansión nuclear, declaración Rubio. Es el sequel perfecto con información concreta que no existía en mayo." },
    { label:"Motor viral", value:"MECANISMO: EEUU vs Europa (tensión reconocible) + armas nucleares (miedo) + estado de bienestar en peligro (impacto directo para espectador europeo) + paradoja (menos aviones + más bombas nucleares) + Rubio declaración brutal ('elegir entre bienestar y defensa') + mapa visual (bases OTAN, despliegue nuclear). DEMANDA: señal adyacente en CaspianReport 1.13x." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: EEUU acaba de quitarle a Europa un tercio de sus cazas y todos sus submarinos — pero le ofrece más bombas nucleares como compensación. Escalada: Europa no puede fabricar municiones, no tiene tropas suficientes, gasta más en pensiones que en defensa. Giro: la única disuasión que le queda es nuclear — y EEUU lo sabe. Cierre: ¿quiere Europa convertirse en una potencia nuclear, o prefiere ser un gigante económico indefenso?" },
    { label:"Promesa cumplible", value:"Demostrable: datos exactos de recortes (DefenseNews), declaración Rubio, expansión nuclear (CNBC), NDAA limites, gasto defensa europeo (NATO.int), comparativa EEUU vs Europa." },
    { label:"Ventaja VP", value:"ALTA. VP domina análisis OTAN/defensa con datos, mapas y paradojas. La comparativa convencional vs nuclear es exactamente el tipo de análisis que VP hace mejor. Ningún canal del nicho ha cubierto la paradoja específica 'menos aviones + más bombas nucleares'." },
    { label:"Caso para 800K/1M", value:"VP ya probó 'Trump OTAN' (203K). Este sequel tiene datos más concretos y la paradoja nuclear. Europa = audiencia directa. Riesgo: 'OTAN/defensa' puede ser percibido como tema técnico. Mitigar: titular centrado en 'EEUU ABANDONA Europa' + 'bombas nucleares como compensación'. Para 800K: necesita crisis concreta (incidente dron OTAN, ataque ruso) que active urgencia." },
    { label:"Título mental", value:"EEUU le quita a Europa un tercio de sus cazas y todos sus submarinos — y le ofrece bombas nucleares como compensación" },
    { label:"Qué investigar más", value:"Detalles exactos del recorte por tipo de arma. Qué países OTAN recibirían armas nucleares adicionales. Capacidad de fabricación de municiones europea. Presupuesto defensa vs bienestar en cada país. Posición de Francia (Arcadia IA) y Alemania. ¿Puede Europa defenderse sola en 5 años?" },
    { label:"Veredicto", value:"ATACAR HOY — datos nuevos y concretos, paradoja nuclear poderosa, sequel de video previo (203K), VP tiene tema defensa APROBADO, ventana junio con presentación del Pentágono." }
  ],
  sources: [
    { medium:"DefenseNews", url:"https://www.defensenews.com/global/europe/2026/06/03/us-tells-europe-canada-to-boost-nato-air-and-naval-forces/", desc:"Recortes EEUU a OTAN" },
    { medium:"CNBC", url:"https://www.cnbc.com/2026/06/02/nuclear-weapons-us-nato-europe-jets.html", desc:"Armas nucleares a más países OTAN" },
    { medium:"Stars and Stripes", url:"https://www.stripes.com/theaters/europe/2026-05-27/pentagon-slashes-nato-crisis-forces-21793499.html", desc:"Pentágono elimina submarinos de OTAN" }
  ]
}

],

/* ════════════════════════════════════════════════════════════
   RANKING
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Crimea trampa", subtema:"CONVERGENCIA 541K (1.80x) + 192K (1.28x)", viral:95, depth:95, timing:98, fit:95, verdCls:"verd-gold", verdText:"⭐ TEMA DORADO — Atacar hoy" },
  { tema:"Israel-Irán día 100", subtema:"Breaking HOY + patrón VP probado (388K-412K)", viral:95, depth:90, timing:99, fit:95, verdCls:"verd-green", verdText:"✅ Atacar hoy" },
  { tema:"Colombia Bukele", subtema:"Competencia publicó hace 3h + VP APROBADO", viral:88, depth:85, timing:95, fit:92, verdCls:"verd-green", verdText:"✅ Atacar hoy — deadline 14 JUN" },
  { tema:"Taiwán subasta", subtema:"400K (1.33x) + VP APROBADO", viral:85, depth:90, timing:88, fit:90, verdCls:"verd-green", verdText:"✅ Atacar hoy" },
  { tema:"EEUU abandona OTAN", subtema:"Recortes + paradoja nuclear", viral:82, depth:90, timing:88, fit:88, verdCls:"verd-green", verdText:"✅ Atacar hoy" },
  { tema:"Papa España", subtema:"InfoVlogger 89K (1.48x) — demanda nacional", viral:78, depth:72, timing:95, fit:68, verdCls:"verd-yellow", verdText:"🔍 Investigar — ángulo VP necesario" },
  { tema:"Perú 50.01%", subtema:"Dato irresistible + cobre global", viral:80, depth:85, timing:90, fit:82, verdCls:"verd-yellow", verdText:"🔍 Investigar esta semana" },
  { tema:"Ébola Congo", subtema:"515 casos sin vacuna + EI · GAP total", viral:75, depth:88, timing:82, fit:75, verdCls:"verd-yellow", verdText:"🔍 Investigar — si escala, atacar" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "Bolivia colapso — 147K/3.68x en competencia pero VP ya cubrió",
    body: "Memorias de Pez publicó sobre Bolivia y lleva 147K (3.68x su media). DEMANDA MASIVA. Pero VP cubrió Bolivia recientemente. Solo vale si hay giro radical: caída del gobierno, intervención militar, default de deuda.",
    trigger: "Si cae el gobierno Paz, si hay intervención militar, o si Bolivia declara default.",
    sourceUrl: "https://acleddata.com/update/latin-america-and-caribbean-overview-june-2026",
    sourceText: "ACLED — Bolivia violencia"
  },
  {
    title: "Mundial 2026 + Irán en EEUU — geopolítica del deporte",
    body: "El equipo de Irán juega en EEUU durante la guerra. Amenazas de seguridad documentadas. Potencial para incidentes diplomáticos. Si hay un incidente real durante un partido, se convierte en propuesta urgente.",
    trigger: "Si hay incidente de seguridad durante un partido de Irán, protestas masivas, o decisión diplomática relacionada.",
    sourceUrl: "https://www.securitymagazine.com/articles/102342-how-the-current-iran-us-conflict-may-impact-world-cup-security",
    sourceText: "Security Magazine — amenazas Mundial"
  },
  {
    title: "Etiopía elecciones 11 JUN + presa del Nilo",
    body: "Elecciones etíopes en 2 días. Conectar con presa GERD + tensión con Egipto + tropas federales en Tigray + acusaciones contra Eritrea. Si hay violencia electoral o crisis del Nilo, se activa.",
    trigger: "Si hay violencia electoral, si Abiy Ahmed hace movimiento sobre presa del Nilo, o si Eritrea escala.",
    sourceUrl: "https://en.wikipedia.org/wiki/2026_Ethiopian_general_election",
    sourceText: "Wikipedia — elecciones Etiopía"
  },
  {
    title: "Cuba — EEUU despliega USS Nimitz + sanciones GAESA",
    body: "EEUU impuso sanciones al conglomerado militar GAESA, acusó a Raúl Castro, y desplegó portaaviones Nimitz en el Caribe. CaspianReport publicó '¿EEUU invadirá Cuba?' (190K, 1.58x). Si hay escalada militar real, se activa.",
    trigger: "Si hay confrontación naval, si Cuba responde militarmente, o si hay éxodo masivo.",
    sourceUrl: "https://cepr.net/publications/americas-live-updates/",
    sourceText: "CEPR — EEUU escalada Caribe"
  },
  {
    title: "Francia IA militar Arcadia — soberanía tecnológica europea",
    body: "Francia prueba su propia IA de mando de batalla como alternativa a Palantir (EEUU) en ejercicio OTAN Polonia. Si funciona, es la primera señal de soberanía tecnológica militar europea real.",
    trigger: "Si Arcadia supera a Maven/Palantir en pruebas, si más países europeos adoptan, o si EEUU reacciona.",
    sourceUrl: "https://www.defensenews.com/global/europe/2026/06/06/france-to-test-its-own-ai-powered-battlefield-command-in-june-nato-exercise/",
    sourceText: "DefenseNews — Arcadia IA"
  },
  {
    title: "Zapatero trama — 403K/1.34x pero fuera de ventana estricta",
    body: "Un canal P1 publicó sobre 'la trama de Zapatero' hace 8 días con 403K (1.34x). Fuera de la ventana de 1 semana. VP tiene Zapatero APROBADO con deadline de declaración 17-18 JUN. Vigilar hasta la declaración.",
    trigger: "Si hay declaración judicial, nuevas pruebas, o si la competencia sigue publicando sobre el tema.",
    sourceUrl: "https://www.youtube.com/@SoloFonseca/videos",
    sourceText: "Competencia — Zapatero 403K"
  }
],

/* ════════════════════════════════════════════════════════════
   VIDEOS VP PUBLICADOS (últimos 10)
═════════════════════════════════════════════════════════════ */
coveredVideos: [
  { title:"UCRANIA da la SORPRESA: ¿Es realmente posible una VICTORIA sobre RUSIA?", date:"09 JUN 2026", views:"170K" },
  { title:"¿TRUMP se pasó de frenada? Por qué ni los inmigrantes LEGALES quieren ya ir a EEUU", date:"06 JUN 2026", views:"239K" },
  { title:"ANTHROPIC se convierte en un asunto de SEGURIDAD NACIONAL y obliga a TRUMP a actuar", date:"05 JUN 2026", views:"205K" },
  { title:"SORPRESA EN COLOMBIA: Cómo un FAN de BUKELE y MILEI ha DESTROZADO a la izquierda", date:"01 JUN 2026", views:"340K" },
  { title:"¿JAQUE a IRÁN? La ALIANZA SECRETA de TRUMP con el RÉGIMEN BRUTAL de ERITREA", date:"26 MAY 2026", views:"269K" },
  { title:"PÁNICO en el KREMLIN: La economía de GUERRA de PUTIN empieza a COLAPSAR", date:"15 MAY 2026", views:"355K" },
  { title:"EEUU quiere ACABAR con su dependencia de CHINA y tiene un PLAN: la PAX SILICA", date:"13 MAY 2026", views:"141K" },
  { title:"¿Se acerca el FIN de NETANYAHU? El ERROR estratégico en IRÁN que ISRAEL no perdona", date:"12 MAY 2026", views:"152K" },
  { title:"TRUMP ya está ROMPIENDO la OTAN y este puede ser su PEOR ERROR", date:"06 MAY 2026", views:"203K" },
  { title:"EMIRATOS ROMPE la OPEP: el GOLPE que puede hundir el CÁRTEL del petróleo", date:"29 ABR 2026", views:"334K" }
],

/* ════════════════════════════════════════════════════════════
   VERIFICACIÓN EDITORIAL
═════════════════════════════════════════════════════════════ */
editorial_verification: {
  fuentes: "CBS News, NPR, CNBC, Al Jazeera, CNN, Moscow Times, RFERL, Meduza, Kyiv Post, Bloomberg, DefenseNews, Stars and Stripes, Vatican News, WHO, CDC, NBC News, Foreign Policy, Brookings, Infobae, El Tiempo, Americas Quarterly, Security Magazine, MEMRI, NV Ukraine, EPC — +25 fuentes consultadas",
  historial: "SI — verificados últimos 10 videos VP directamente en YouTube. Ucrania victoria (170K, 7h), Trump inmigrantes (239K, 3d), Anthropic (205K, 4d), Colombia (340K, 1 JUN), Eritrea (269K), Putin economía (355K), Pax Silica (141K), Netanyahu (152K), OTAN (203K), OPEP (334K)",
  competencia: "SI — VERIFICADO DIRECTAMENTE EN YOUTUBE el 9 JUN 2026 via Chrome MCP. ESTRUCTURA v8.2: 5 temas de competencia + 3 ventana de oportunidad. MINAS DETECTADAS: (1) Crimea/Putin 541K en 4d = 1.80x + Cosas Militares logística 192K = 1.28x = CONVERGENCIA 2 canales. (2) Israel-Irán: Memorias de Pez acaba de publicar (1h) + patrón VP más probado (388K-412K). (3) Colombia: Solo Fonseca publicó hace 3h (67K acumulando) + VP APROBADO. (4) Papa España: InfoVlogger 89K/2d = 1.48x + 77K/1d = 1.28x. (5) Taiwán: Solo Fonseca 400K/7d = 1.33x + VP APROBADO. DESCARTADOS: Bolivia (147K/3.68x pero VP cubrió), Zapatero (403K/1.34x pero 8d = fuera ventana), Myanmar (286K/0.95x = bajo media). CANALES REVISADOS: Solo Fonseca, Cosas Militares, Memorias de Pez, InfoVlogger, CaspianReport, RealLifeLore, Johnny Harris. MÉTODO: rendimiento relativo vs media del canal, verificación directa YouTube.",
  viralidad: "SI — ninguna afirmación de viralidad sin evidencia. Motor viral = mecanismo concreto en cada propuesta. Se indica 'pendiente de comprobar' en Perú (tema muy reciente). Se indica 'hipótesis de viralidad' en Ébola. Convergencia verificada con datos directos.",
  imagenes: "PENDIENTE — ejecutar validate_images.js después de publicar data file",
  descartados: "Bolivia (VP cubrió recientemente, 147K/3.68x descartado por solapamiento), Myanmar (286K/0.95x = bajo media), Zapatero (403K/1.34x pero 8d = fuera ventana estricta 1 semana), Pakistán nuclear (319K/1.06x = en media, sin señal fuerte), Mundial como propuesta principal (insuficiente profundidad VP), Francia IA Arcadia (demasiado técnico). MOVIDOS A VIGILAR: Bolivia, Mundial, Zapatero, Cuba, Etiopía, Francia Arcadia."
}

};
