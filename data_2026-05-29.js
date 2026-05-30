/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-05-29
   Edita este archivo para actualizar el contenido del dashboard.
   El archivo data_2026-05-29.json contiene la misma estructura
   en formato JSON puro (para referencia/edición manual).
══════════════════════════════════════════════════════════════ */
const VP_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-05-29",
  dateLabel: "29 MAYO 2026",
  brisbane: "07:00 BRISBANE AEST",
  brent: "$97.51",
  brentChange: "↑2.41%"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🛢️ BRENT <strong>$97.51</strong> ↑2.41% · 28 MAY 9AM ET" },
  { cls:"t-orange", text:"🛢️ WTI <strong>$90.35</strong> ↑0.96%" },
  { cls:"t-red",    text:"⚓ HORMUZ <strong>BLOQUEADO</strong> · Deal pendiente firma Trump + Jamenei" },
  { cls:"t-gold",   text:"🇨🇴 COLOMBIA <strong>ELECCIONES</strong> · 31 MAY · 48H · 41.4M votantes" },
  { cls:"t-red",    text:"☢️ IRÁN DEAL <strong>PENDIENTE</strong> · Acuerdo 60 días sin firma formal" },
  { cls:"t-blue",   text:"🗣️ SHANGRI-LA <strong>SINGAPUR</strong> · 29-31 MAY · Hegseth + Vietnam keynote HOY" },
  { cls:"t-red",    text:"🚀 IRÁN lanzó misiles balísticos a Kuwait · represalia 28 MAY" },
  { cls:"t-gold",   text:"🍫 SUDÁN <strong>19.5M con hambre aguda</strong> · Solo 5.5% del funding recibido" },
  { cls:"t-orange", text:"🇹🇼 TAIWÁN · $14B armas <strong>pausados</strong> por Trump tras cumbre Xi" },
  { cls:"t-blue",   text:"🇨🇳 CHINA <strong>CMC VACIADO</strong> · Solo Xi + 1 general real · 5 fuerzas: interinas" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Decisión del día",
    content: "<span class='hl'>Colombia D-1:</span> Elecciones el 31 mayo. Ventana de 24-48h post-resultado. Publicar análisis del ganador = vídeo que coincide con pico de búsquedas. <span class='hl-red'>Tema dorado de la semana.</span>"
  },
  {
    label: "🎯 Ventana de oportunidad",
    content: "China: Xi ha vaciado el mando militar. <span class='hl'>CERO cobertura en español.</span> CSIS + Foreign Policy: 50K+ shares en inglés. Gap enorme y limpio para VP."
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$97.51 ↑2.4%</span> · WTI $90.35 · Hormuz: <span class='hl-red'>cerrado</span><br>Irán deal: sin firma · Colombia: <span class='hl'>48H a elecciones</span>"
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
  "❌ BOLIVIA CAOS · ~25 MAY"
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 13 items (2 por Irán, 2 por Colombia)
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1: IRÁN DEAL ── */
{
  id: "n1",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageAlt: "Mapa del Golfo Pérsico y Estrecho de Hormuz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "Wikimedia Commons / NordNordWest",
  imageSource: "CC BY-SA 3.0",
  title: "IRÁN-EEUU: Acuerdo de 60 días alcanzado — espera firma de Trump y Jamenei",
  pills: ["Hormuz cerrado", "60d MOU", "Nuclear en mesa", "Brent $97.51"],
  why: "El 20% del comercio de petróleo mundial transita por Hormuz. Sin firma = gasolina cara global. Con firma = caída inmediata de precios.",
  viralPct: 92, viralCls: "viral-high",
  viralSources: "Bloomberg · FT · Reuters top story",
  detail: {
    summary: "EEUU e Irán habrían alcanzado un Memorando de Entendimiento (MOU) provisional de 60 días para reabrir el Estrecho de Hormuz, cerrado desde mediados de mayo. El acuerdo incluye levantamiento parcial de sanciones a cambio de congelación del programa nuclear e inspecciones de la AIEA. Ambas partes esperan la firma formal de Trump y Jamenei. Los mercados siguen escépticos: el Brent subió 2.4% el 28 de mayo a pesar del anuncio, señal de que los inversores no creen que el acuerdo se concrete.",
    context: "El Estrecho de Hormuz es el cuello de botella energético más crítico del planeta: el 20% del petróleo mundial y el 25% del GNL transitan por sus 30 km. El cierre ha disparado el Brent por encima de $97 y amenaza con una recesión energética global si se mantiene más de 90 días.",
    vp: "Si se firma: el vídeo profundo es 'Qué cedió realmente EEUU en el acuerdo con Irán' (Propuesta #4). Si se rompe: 'El plan B de Trump si Irán no firma'. En ambos escenarios hay vídeo de alto potencial.",
    sources: [
      { headline: "U.S. and Iran work toward deal to extend ceasefire and reopen Strait of Hormuz", medium: "Washington Post", date: "24 MAY 2026", url: "https://www.washingtonpost.com/world/2026/05/24/us-iran-near-deal-extend-ceasefire-reopen-hormuz/", desc: "Para entender el marco negociador y qué incluye el MOU de 60 días" },
      { headline: "Exclusive: What's inside the Iran deal Trump is close to signing", medium: "Axios", date: "24 MAY 2026", url: "https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear", desc: "Fuente exclusiva con el contenido real del acuerdo: sanciones, nuclear, Hormuz" },
      { headline: "Hormuz flows may return to normal within month of deal, Iran TV says", medium: "Bloomberg", date: "27 MAY 2026", url: "https://www.bloomberg.com/news/articles/2026-05-27/hormuz-flows-may-return-to-normal-within-month-of-deal-iran-tv", desc: "Para contexto de mercados y timeline realista de apertura del estrecho" }
    ],
    verification: "Tres fuentes primarias independientes confirman el MOU. Firma pendiente."
  }
},

/* ── N2: IRÁN MISILES KUWAIT ── */
{
  id: "n2",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🌍 GOLFO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iran_relief_location_map.jpg?width=800",
  imageAlt: "Mapa de relieve de Irán y la región del Golfo",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "IRÁN lanzó misiles balísticos hacia Kuwait — represalia a bombardeos de EEUU del 26 de mayo",
  pills: ["28 mayo", "Sur de Irán atacado", "Negociaciones activas", "Deal en riesgo"],
  why: "Irán escaló en plenas negociaciones. El alto el fuego es frágil: cada ataque puede hundir el acuerdo de Hormuz y disparar el crudo.",
  viralPct: 85, viralCls: "viral-high",
  viralSources: "Washington Post · RFERL · CNN breaking",
  detail: {
    summary: "El 28 de mayo Irán lanzó misiles balísticos hacia objetivos en Kuwait como represalia directa a los bombardeos de EEUU del 26 de mayo sobre el sur iraní. El ataque se produce mientras las delegaciones de ambos países continúan negociando el MOU de Hormuz. La escalada paralela a las negociaciones ilustra la doble estrategia iraní: presionar militarmente mientras negocia diplomáticamente.",
    context: "EEUU retomó los ataques sobre Irán el 26 de mayo citando 'amenazas a tropas americanas en la región'. Irán tiene la capacidad de lanzar misiles a bases americanas en Qatar, Kuwait y Bahréin, donde hay 40.000 soldados de EEUU. Cada ataque acerca el conflicto a una guerra abierta.",
    vp: "Este escenario es el trasfondo del vídeo sobre el deal con Irán (Propuesta #4). El conflicto armado activo mientras se negocia es la paradoja central del vídeo.",
    sources: [
      { headline: "US renews strikes on Iran, citing threats posed to American troops", medium: "Washington Post", date: "26 MAY 2026", url: "https://www.washingtonpost.com/world/2026/05/26/us-renews-strikes-iran-citing-threats-posed-american-troops/", desc: "Para la escalada militar de EEUU que provocó la represalia iraní con misiles" },
      { headline: "Iran-US war: Hormuz blockade and oil crisis — live updates", medium: "RFERL", date: "MAY 2026", url: "https://www.rferl.org/a/iran-war-us-hormuz-oil-blockade-gulf-israel/33640284.html", desc: "Para el seguimiento en tiempo real del conflicto armado activo" },
      { headline: "2026 Strait of Hormuz crisis", medium: "Wikipedia", date: "MAY 2026", url: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc: "Cronología completa del conflicto con referencias a fuentes primarias" }
    ],
    verification: "Confirmado por RFERL y Washington Post. Detalles del número de misiles en verificación."
  }
},

/* ── N3: COLOMBIA D-1 ENCUESTAS ── */
{
  id: "n3",
  tags: [{ cls:"tag-red", text:"🔴 48H" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=800",
  imageAlt: "Mapa político de Colombia por departamentos",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=800",
  imageCredit: "Wikimedia Commons / TUBS",
  imageSource: "CC BY-SA 3.0",
  title: "COLOMBIA D-1: Cepeda 38-44%, De la Espriella 28-35% — encuesta final antes del 31 mayo",
  pills: ["41.4M votantes", "Cepeda 44%", "De la Espriella 35%", "Valencia 14%", "Segunda vuelta: 21 JUN"],
  why: "60.3% de colombianos cree que grupos armados presionan el voto. Si nadie supera el 50%, segunda vuelta el 21 junio.",
  viralPct: 97, viralCls: "viral-high",
  viralSources: "TikTok pico máx · Google Trends Colombia 🔥 · CNN ES",
  detail: {
    summary: "Las últimas encuestas antes de las elecciones del 31 de mayo sitúan a Iván Cepeda (Pacto Histórico, izquierda) entre el 38-44%, seguido de Abelardo De la Espriella (outsider populista de derecha, sin partido, 28-35%) y Paloma Valencia (uribismo, 14-18%). La aritmética indica segunda vuelta el 21 de junio si ninguno supera el 50%, escenario que la mayoría de analistas da por hecho. El país afronta las elecciones más militarizadas de su historia reciente.",
    context: "Colombia celebra elecciones presidenciales en un contexto de fracaso de la 'paz total' de Petro, auge de De la Espriella como candidato antisistema, y presencia activa de ELN, EMC y Clan del Golfo en el 40% del territorio electoral. La diáspora colombiana en España, EEUU y Venezuela puede ser decisiva en municipios fronterizos.",
    vp: "Tema dorado. El análisis post-electoral es el vídeo: '¿Colombia elige al Milei latinoamericano o al sucesor de Petro?' La segunda derivada es el patrón continental, no el resultado local.",
    sources: [
      { headline: "Encuestas Colombia 2026: ¿Quiénes son los favoritos en las elecciones?", medium: "CNN Español", date: "24 MAY 2026", url: "https://cnnespanol.cnn.com/2026/05/24/colombia/encuestas-favoritos-elecciones-cepeda-espriella-valencia-orix", desc: "Análisis comparativo de los tres candidatos principales con tendencias semanales" },
      { headline: "Ponderador de encuestas presidenciales 2026", medium: "La Silla Vacía", date: "MAY 2026", url: "https://www.lasillavacia.com/silla-nacional/ponderador-de-encuestas-presidenciales-2026/", desc: "Agregador de encuestas más preciso de Colombia, actualizado diariamente" },
      { headline: "Poll Tracker: Colombia's 2026 Presidential Election", medium: "AS/COA", date: "MAY 2026", url: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election", desc: "Para rastrear evolución histórica de intención de voto y proyecciones de segunda vuelta" }
    ],
    verification: "Datos de encuestadoras Invamer y Guarumo verificados. La Silla Vacía como fuente ponderada definitiva."
  }
},

/* ── N4: COLOMBIA GRUPOS ARMADOS ── */
{
  id: "n4",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombian_Presidential_Election_First_Round_Results%2C_2026.svg?width=800",
  imageAlt: "Resultados primera vuelta presidencial Colombia 2026 — mapa por departamento",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "ELN, EMC y Clan del Golfo: 32 municipios en alerta roja — 120.000 policías para el 31 mayo",
  pills: ["32 municipios riesgo", "ELN activo 12 dptos", "Clan del Golfo 25 dptos", "94 aeronaves"],
  why: "El verdadero árbitro electoral no está en las urnas. Los grupos armados han emitido 'advertencias' sobre a quién no votar en 60+ municipios.",
  viralPct: 89, viralCls: "viral-high",
  viralSources: "Infobae · El Espectador · El País CO",
  detail: {
    summary: "El gobierno colombiano desplegó 120.000 efectivos de policía y 94 aeronaves para custodiar los 104.000 puestos de votación del 31 de mayo. El INPEC y la Fiscalía identificaron 32 municipios en alerta roja por presencia activa de grupos armados con capacidad de interferir el proceso electoral. El ELN opera en 12 departamentos, el Clan del Golfo en 25 y las disidencias de las FARC (EMC) en zonas de Caquetá, Nariño y Putumayo.",
    context: "La encuesta Invamer revela que el 60.3% de los colombianos cree que algún grupo armado presionará el voto en su municipio. En las últimas elecciones parlamentarias de 2022, el 18% de los municipios reportó irregularidades atribuibles a grupos armados.",
    vp: "Este contexto es la 'segunda derivada' del vídeo sobre Colombia: no es 'quién gana' sino '¿puede la democracia funcionar cuando el 40% del territorio está bajo control de grupos armados?'",
    sources: [
      { headline: "Colombia: 120.000 policías y 94 aeronaves blindarán las elecciones presidenciales del 31 de mayo", medium: "El País Colombia", date: "29 MAY 2026", url: "https://www.elpais.com.co/elecciones/colombia-120000-policias-y-94-aeronaves-blindaran-las-elecciones-presidenciales-de-este-domingo-31-de-mayo-2846.html", desc: "Datos del operativo de seguridad electoral: cifras de efectivos, aeronaves y municipios en riesgo" },
      { headline: "Elecciones en Colombia 2026: grupos armados y desinformación amenazan la primera vuelta", medium: "Infobae", date: "13 MAY 2026", url: "https://www.infobae.com/colombia/2026/05/13/elecciones-en-colombia-2026-en-alerta-violencia-grupos-armados-y-desinformacion-amenazan-la-primera-vuelta/", desc: "Mapa de grupos armados por candidato y zona de influencia electoral, con testimonios" },
      { headline: "Mayoría de encuestados cree que grupos armados presionan el voto en elecciones 2026", medium: "El Espectador", date: "MAY 2026", url: "https://www.elespectador.com/colombia-20/paz-y-memoria/invamer-mayoria-de-encuestados-cree-que-grupos-armados-presionan-el-voto-por-algun-candidato-en-elecciones-2026/", desc: "Datos de la encuesta Invamer sobre percepción ciudadana de coacción electoral armada" }
    ],
    verification: "Datos de despliegue confirmados por el Ministerio de Defensa colombiano. Municipios en alerta según el INPEC."
  }
},

/* ── N5: HEGSETH SHANGRI-LA ── */
{
  id: "n5",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌏 ASIA-PAC" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pete_Hegseth_Official_Portrait.jpg?width=640",
  imageAlt: "Pete Hegseth — Secretario de Defensa de EEUU",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_in_the_evening_-_20101120.jpg?width=800",
  imageCredit: "Chad J. McNeeley / DoD",
  imageSource: "Public Domain",
  title: "HEGSETH en Shangri-La: 'China puede invadir Taiwán en 2027 — Trump lo impedirá'",
  pills: ["44 países", "54 ministros def.", "29-31 MAY · Singapur", "2027 warning"],
  why: "EEUU lanza el aviso más duro en Asia — al mismo tiempo que pausa $14B en armas a Taiwán. Contradicción perfecta que define el 'America First' en el Indo-Pacífico.",
  viralPct: 82, viralCls: "viral-high",
  viralSources: "SCMP · Newsweek · The Hill destacados",
  detail: {
    summary: "El Secretario de Defensa Pete Hegseth pronunció el discurso de apertura del Diálogo Shangri-La (Singapur) con un mensaje doble: EEUU mantendrá su presencia en el Indo-Pacífico y China debe saber que una invasión de Taiwán en 2027 — año del centenario del PLA — encontrará respuesta militar americana. La ironía: Hegseth viajó a Singapur 48 horas después de que se filtrara la pausa de $14B en armas a Taiwán.",
    context: "El Shangri-La Dialogue es el foro de seguridad más importante de Asia. Este año reúne a 44 países y 54 ministros de defensa. La amenaza de China sobre Taiwán en 2027 fue mencionada por primera vez por el Almirante Davidson en 2021 y ahora es doctrina de defensa americana.",
    vp: "Conexión directa con la Propuesta #3 (Taiwan $14B) y Propuesta #2 (Xi CMC). La paradoja: EEUU amenaza con defender Taiwán pero ha pausado las armas. ¿Es una táctica negociadora o un abandono suave?",
    sources: [
      { headline: "Hegseth warns China aims to alter Indo-Pacific status quo at Shangri-La Dialogue", medium: "SCMP", date: "29 MAY 2026", url: "https://www.scmp.com/news/china/military/article/3312561/shangri-la-dialogue-pete-hegseth-warns-china-aims-alter-indo-pacific-status-quo", desc: "Cobertura de primera mano del discurso de Hegseth en Singapur con citas directas" },
      { headline: "Pete Hegseth heads to Asia amid questions about Taiwan support", medium: "The Hill", date: "MAY 2026", url: "https://thehill.com/policy/defense/5898423-hegseth-shangri-la-dialogue-taiwan/", desc: "Para el contexto de la contradicción: advertencia de 2027 vs. pausa de $14B en armas" },
      { headline: "Shangri-La Dialogue 2026 — IISS Official", medium: "IISS", date: "MAY 2026", url: "https://www.iiss.org/events/shangri-la-dialogue/shangri-la-dialogue-2026/", desc: "Fuente oficial del foro con agenda, speakers y comunicados completos" }
    ],
    verification: "Discurso confirmado por IISS y SCMP. Texto completo en iiss.org."
  }
},

/* ── N6: TAIWÁN $14B ── */
{
  id: "n6",
  tags: [{ cls:"tag-orange", text:"🟠 27 MAY" }, { cls:"tag-blue", text:"🌏 TAIWÁN" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  imageAlt: "Imagen satelital de Taiwán",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  imageCredit: "FORMOSAT-2 / Wikimedia Commons",
  imageSource: "CC BY 4.0",
  title: "EEUU pausa venta de $14.000M en armas a Taiwán tras cumbre Trump-Xi — sin informar a Taipéi",
  pills: ["$14B 'in abeyance'", "Taiwán: no informado", "Ficha negociadora Trump-Xi", "Hegseth lo confirmó"],
  why: "Trump convierte la seguridad de Taiwán en moneda de cambio con China. Primera señal concreta del giro: los aliados ya no son socios, son fichas de negociación.",
  viralPct: 78, viralCls: "viral-high",
  viralSources: "Foreign Policy · Axios · Washington Post",
  detail: {
    summary: "Tras la cumbre Trump-Xi de mediados de mayo, la administración estadounidense puso 'en suspenso' un paquete de venta de armas a Taiwán valorado en $14.000 millones. Lo más revelador: el gobierno de Taiwán no fue informado de la decisión. La pausa incluye misiles Patriot, munición de artillería y equipos de defensa aérea. El Secretario de la Marina lo reconoció públicamente, citando el conflicto con Irán como pretexto logístico.",
    context: "El paquete había sido aprobado por el Congreso en 2024. Su cancelación unilateral viola las normas del Taiwan Relations Act, que obliga a EEUU a proporcionar 'medios defensivos' a Taiwán. Es el gesto más contundente de Trump hacia China desde su regreso al poder.",
    vp: "Propuesta #3. La segunda derivada: no es 'Trump apoya a China' sino '¿Qué precio puede poner Trump a la seguridad de un aliado?' Este modelo — seguridad como mercancía — puede extenderse a Corea del Sur, Japón, Europa.",
    sources: [
      { headline: "U.S. Halts Taiwan Arms Package as Trump Courts China", medium: "Foreign Policy", date: "26 MAY 2026", url: "https://foreignpolicy.com/2026/05/26/taiwan-china-us-arms-sales-package-trump-xi/", desc: "Análisis estratégico más completo: qué incluye el paquete y qué significa su pausa para la defensa de Taiwán" },
      { headline: "U.S. pauses $14 billion Taiwan arms sale after China summit", medium: "Washington Post", date: "23 MAY 2026", url: "https://www.washingtonpost.com/national-security/2026/05/23/us-pauses-14-billion-taiwan-arms-sale-after-china-summit/", desc: "Exclusiva original con detalles del quid pro quo de la cumbre Trump-Xi" },
      { headline: "Taiwan frets as U.S. withholds weapons over China deal", medium: "Axios", date: "27 MAY 2026", url: "https://www.axios.com/2026/05/27/taiwan-weapons-trump-cao-pause", desc: "Para la reacción de Taipéi, el impacto diplomático y la respuesta del Congreso americano" }
    ],
    verification: "Confirmado por Secretario de la Marina en audiencia pública. Tres fuentes independientes."
  }
},

/* ── N7: XI SOLO CMC ── */
{
  id: "n7",
  tags: [{ cls:"tag-yellow", text:"🟡 SEMANA" }, { cls:"tag-blue", text:"🌏 CHINA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_2023_%28cropped%29.jpg?width=640",
  imageAlt: "Xi Jinping, secretario general del PCCh y presidente de China",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_2023_%28cropped%29.jpg?width=640",
  imageCredit: "White House / Cameron Smith",
  imageSource: "Public Domain",
  title: "XI JINPING solo en el CMC: todos los generales son interinos — ejército sin mando real",
  pills: ["2 miembros CMC", "100+ purgados", "5 fuerzas: interinas", "2027: año límite PLA"],
  why: "El ejército más grande de Asia sin cadena de mando efectiva. ¿Puede China lanzar una guerra cuando las purgas han vaciado el mando militar?",
  viralPct: 75, viralCls: "viral-high",
  viralSources: "CSIS + Foreign Policy: 50K+ shares en inglés · CERO cobertura en español",
  detail: {
    summary: "El Comité Militar Central (CMC) de China — el organismo que ordena las guerras — tiene actualmente solo 2 miembros con autoridad real: Xi Jinping y un general de disciplina. Desde 2022, más de 100 oficiales han sido purgados. En enero de 2026 cayeron el Jefe del Estado Mayor (Zhang Youxia) y el jefe del Mando Conjunto (Liu Zhenli). Los 5 comandantes de las fuerzas armadas (tierra, mar, aire, cohetes, fuerza estratégica) son todos interinos.",
    context: "El 2027 es el año del centenario del PLA — la fecha que Xi puso como 'año de preparación'. Paradoja: las purgas que Xi ejecuta para 'preparar' el ejército han incapacitado precisamente la maquinaria de guerra que necesita para 2027. Hegseth mencionó esta fecha HOY en Shangri-La.",
    vp: "GAP ENORME en español. CSIS y Foreign Policy tienen análisis extensos en inglés con miles de compartidos. Ningún canal de nicho español ha explicado el vaciado del CMC con claridad. Propuesta #2.",
    sources: [
      { headline: "The Pattern Behind Xi Jinping's Military Purges", medium: "Foreign Policy", date: "1 MAY 2026", url: "https://foreignpolicy.com/2026/05/01/xi-jinping-china-military-factions-purges-centenary/", desc: "Análisis del patrón histórico de purgas y su relación con el centenario del PLA en 2027" },
      { headline: "Assessing Xi's Unprecedented Purges of China's Military", medium: "CSIS", date: "MAY 2026", url: "https://www.csis.org/analysis/assessing-xis-unprecedented-purges-chinas-military-key-developments-and-potential", desc: "Base de datos más completa sobre generales purgados, estructura CMC real y capacidad operativa" },
      { headline: "China's Fallen Generals Are Getting Unexpectedly Harsh Punishments", medium: "Foreign Policy", date: "22 MAY 2026", url: "https://foreignpolicy.com/2026/05/22/china-xi-jinping-purge-generals-punishment-death-sentence/", desc: "Para entender la severidad de las penas (incluyendo pena de muerte): el control es total pero el vacío es real" }
    ],
    verification: "Confirmado por CSIS, FP y Breaking Defense. Estructura del CMC verificada con fuentes gubernamentales chinas."
  }
},

/* ── N8: SUDÁN HAMBRUNA ── */
{
  id: "n8",
  tags: [{ cls:"tag-orange", text:"🟠 HOY" }, { cls:"tag-blue", text:"🌍 ÁFRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sudanese_Civil_War_Composite_Map_%282025%29.svg?width=800",
  imageAlt: "Mapa de la guerra civil de Sudán — control territorial 2025",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Sudanese_Civil_War_Composite_Map_%282025%29.svg?width=800",
  imageCredit: "Wikimedia Commons / Julesdhl",
  imageSource: "CC BY-SA 4.0",
  title: "SUDÁN: peor hambruna activa del mundo — 19.5M con hambre aguda, solo 5.5% del funding recibido",
  pills: ["19.5M en crisis", "Al Fasher: hambruna oficial", "$2.9B necesarios", "5.5% recibido"],
  why: "Mayor catástrofe alimentaria del planeta. 9M desplazados. Los medios occidentales miran a Irán. Aquí hay un vídeo que nadie hará salvo VP.",
  viralPct: 45, viralCls: "viral-med",
  viralSources: "ONU · UNICEF · bajo alcance mainstream — GAP de cobertura",
  detail: {
    summary: "Sudán se ha convertido en el país con mayor nivel de hambre aguda del mundo, superando a Gaza y Yemen. La UNICEF confirmó hambruna oficial en Al Fasher (Darfur Norte) y Kadugli. El plan humanitario de respuesta necesita $2.900 millones para 2026 y solo ha recibido el 5.5%. La guerra civil entre las FAR (Fuerzas Armadas del Sudán) y las RSF (Fuerzas de Apoyo Rápido, paramilitares) lleva 25 meses activa sin perspectiva de cese.",
    context: "El conflicto comenzó en abril de 2023. 9 millones de personas han sido desplazadas — la mayor crisis de desplazamiento del mundo. Los medios occidentales apenas cubren Sudán porque no hay potencias occidentales directamente implicadas ni flujo de refugiados hacia Europa en el corto plazo.",
    vp: "Propuesta #5. La segunda derivada: no es 'Sudán pasa hambre' sino 'la peor catástrofe del siglo en el país que controla el Nilo — y el mundo mira hacia otro lado'. Potencial comparable a vídeos de VP sobre Yemen o Siria.",
    sources: [
      { headline: "Sudan becomes the world's hungriest country as famine spreads to two new areas of Darfur", medium: "Action Against Hunger", date: "MAY 2026", url: "https://www.actionagainsthunger.org/press-releases/sudan-becomes-the-worlds-hungriest-country-as-famine-spreads-to-two-new-areas-of-darfur/", desc: "Para datos de clasificación de hambruna y comparación con crisis anteriores de Darfur" },
      { headline: "Famine conditions confirmed in Sudan's Al Fasher and Kadugli", medium: "UNICEF", date: "MAY 2026", url: "https://www.unicef.org/press-releases/famine-conditions-confirmed-sudans-al-fasher-and-kadugli-hunger-and-malnutrition", desc: "Declaración oficial de hambruna con cifras de malnutrición infantil severa — fuente primaria" },
      { headline: "Sudan enters fourth year of war: 'humiliated, broken, powerless'", medium: "NPR", date: "15 ABR 2026", url: "https://www.npr.org/2026/04/15/nx-s1-5781032/sudan-darfur-war-genocide-famine", desc: "Para contexto de la guerra civil, el colapso sanitario y la falta de atención internacional" }
    ],
    verification: "Declaración de hambruna oficial por UNICEF y FAO. Datos de funding verificados por OCHA."
  }
},

/* ── N9: VENEZUELA PDVSA ── */
{
  id: "n9",
  tags: [{ cls:"tag-yellow", text:"🟡 SEMANA" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio_PDVSA_5_de_Julio.jpg?width=800",
  imageAlt: "Sede de PDVSA — Torre 5 de Julio, Caracas, Venezuela",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio_PDVSA_5_de_Julio.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "EEUU completa primera venta de petróleo venezolano: $500M — Trump controla el crudo 'indefinidamente'",
  pills: ["$500M vendidos", "$2B deal total", "Cuentas en EEUU", "Delcy Rodriguez"],
  why: "Venezuela como 'petro-protectorado': EEUU controla los ingresos del petróleo, Delcy Rodriguez gestiona la política interior. ¿Soberanía o secuestro económico?",
  viralPct: 62, viralCls: "viral-med",
  viralSources: "Al Jazeera · NPR · CCI — cobertura media",
  detail: {
    summary: "El Departamento del Tesoro de EEUU completó la primera venta de crudo venezolano bajo el acuerdo de supervisión firmado en enero de 2026. Los $500 millones ingresaron en cuentas controladas por Washington. El acuerdo total es de $2.000 millones en crudo a cambio de 'licencias de operación' a empresas americanas en Venezuela y el levantamiento parcial de sanciones a PDVSA.",
    context: "Tras la salida de Maduro en enero de 2026, Venezuela quedó en un limbo político con Delcy Rodriguez al frente. EEUU aprovechó el vacío para imponer condiciones: supervisión del petróleo a cambio de reconocimiento diplomático implícito. El modelo recuerda a Iraq post-2003.",
    vp: "Propuesta #6. La segunda derivada: no es 'Venezuela sin Maduro' sino '¿Puede EEUU controlar el petróleo venezolano sin invadir Venezuela?' El modelo de 'petro-protectorado' es inédito en la historia latinoamericana.",
    sources: [
      { headline: "Venezuela after Maduro: Oil, power and the limits of intervention", medium: "Al Jazeera", date: "5 ENE 2026", url: "https://www.aljazeera.com/news/2026/1/5/venezuela-after-maduro-oil-power-and-the-limits-of-intervention", desc: "Para el trasfondo del nuevo modelo de gestión petrolera venezolana bajo supervisión americana" },
      { headline: "OFAC Issues GL 52: Further Loosening Sanctions Against PdVSA", medium: "Cleary Gottlieb", date: "ABR 2026", url: "https://www.clearygottlieb.com/news-and-insights/publication-listing/ofac-issues-gl-52-further-loosening-sanctions-against-pdvsa", desc: "Para entender el marco legal de las licencias OFAC que permiten las ventas de crudo venezolano" },
      { headline: "Venezuela Energy Reform and US Sanctions Relief Are Moving Together", medium: "Corporate Compliance Insights", date: "MAY 2026", url: "https://www.corporatecomplianceinsights.com/venezuela-energy-reform-us-sanctions-relief/", desc: "Análisis del paquete sanción+reforma como estrategia Trump hacia Venezuela post-Maduro" }
    ],
    verification: "Transacción confirmada por OFAC. Cifras de $500M por fuente de agencias. Deal total en verificación."
  }
},

/* ── N10: EU-UKRAINE DRONES ── */
{
  id: "n10",
  tags: [{ cls:"tag-yellow", text:"🟡 SEMANA" }, { cls:"tag-blue", text:"🇪🇺 EUROPA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/UA_military_FPV_drones_01.jpg?width=960",
  imageAlt: "Drones FPV militares ucranianos — alianza industrial EU-Ucrania",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/UA_military_FPV_drones_01.jpg?width=960",
  imageCredit: "Armed Forces of Ukraine / Wikimedia Commons",
  imageSource: "Public Domain",
  title: "EU-Ukraine Drone Alliance: Europa integra la guerra de Ucrania en su industria de defensa",
  pills: ["20 países", "$1K-$3K/dron", "Operativa: fin 2026", "Muro de drones"],
  why: "Ucrania no solo recibe armas — está enseñando a Europa a fabricar las suyas. El flujo de conocimiento tecnológico-militar se invierte por primera vez desde 1945.",
  viralPct: 58, viralCls: "viral-med",
  viralSources: "Kyiv Independent · EU Commission · Defence News",
  detail: {
    summary: "La Comisión Europea lanzó formalmente el 5 de mayo la EU-Ukraine Drone Alliance, buscando a los miembros fundadores de una alianza industrial que integrará la experiencia ucraniana en drones de guerra con la capacidad productiva europea. El objetivo es crear un 'muro de drones' contra ataques aéreos rusos que eventualmente proteja todo el espacio europeo.",
    context: "Ucrania es el laboratorio de guerra de drones más avanzado del mundo. Sus ingenieros han reducido el coste por dron de $20.000 a $1.000-$3.000 y han desarrollado contramedidas electrónicas de vanguardia. La alianza permite a Europa acceder a ese know-how a cambio de inversión industrial.",
    vp: "Propuesta #7. Segunda derivada: no es 'Europa gasta en drones' sino 'Ucrania está enseñando a Europa a defenderse sola — cambio histórico en la arquitectura de seguridad continental'.",
    sources: [
      { headline: "European Commission opens call for proposals to join EU-Ukraine Drone Alliance", medium: "Kyiv Independent", date: "5 MAY 2026", url: "https://kyivindependent.com/european-commission-opens-call-for-proposals-to-join-eu-ukraine-drone-alliance/", desc: "Primera cobertura del lanzamiento oficial con detalles de la convocatoria y objetivos" },
      { headline: "Call for Founding Members of the EU-Ukraine Drone Alliance", medium: "EU Commission", date: "5 MAY 2026", url: "https://defence-industry-space.ec.europa.eu/funding-opportunities/calls-proposals/call-founding-members-eu-ukraine-drone-alliance_en", desc: "Fuente oficial con términos de referencia, criterios de selección y estructura de la alianza" },
      { headline: "New Drone Alliance connects EU tech sector with Ukraine's war-tested innovation", medium: "United24 Media", date: "MAY 2026", url: "https://united24media.com/war-in-ukraine/new-drone-alliance-connects-eu-tech-sector-with-ukraines-war-tested-innovation-18507", desc: "Para el análisis del knowledge transfer inverso: Europa aprende de la guerra real de Ucrania" }
    ],
    verification: "Confirmado por comunicado oficial de la Comisión Europea. Cifras de coste por dron según Kyiv Independent."
  }
},

/* ── N11: MALI JNIM ── */
{
  id: "n11",
  tags: [{ cls:"tag-yellow", text:"🟡 SEMANA" }, { cls:"tag-blue", text:"🌍 SAHEL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/JNIM_activity_in_Central_Sahel.jpg?width=960",
  imageAlt: "Mapa de actividad del JNIM en el Sahel central — Burkina Faso, Malí, Níger (2025)",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/JNIM_activity_in_Central_Sahel.jpg?width=960",
  imageCredit: "Wikimedia Commons / Julesdhl",
  imageSource: "CC BY-SA 4.0",
  title: "JNIM ataca Bamako, Gao y Kidal simultáneamente — primera ofensiva triple en Mali",
  pills: ["3 ciudades", "JNIM expansión sur", "Togo + Benin + Ghana Norte", "350M en corredor costero"],
  why: "El jihadismo ya no está en el desierto. Se acerca a la costa atlántica. El corredor Sahel → Golfo de Guinea conecta con 350 millones de personas.",
  viralPct: 40, viralCls: "viral-low",
  viralSources: "Mail&Guardian · Vision of Humanity · bajo alcance mainstream",
  detail: {
    summary: "El grupo yihadista JNIM (Jama'at Nusrat al-Islam wal-Muslimin, afiliado a Al Qaeda) ejecutó su primera ofensiva simultánea en tres ciudades malienses: Bamako (capital), Gao y Kidal. El ataque se produjo mientras las fuerzas de Wagner y las FAMa (ejército maliense) estaban concentradas en operaciones en el norte. La coordinación demuestra capacidad operativa avanzada.",
    context: "JNIM controla ya el 65% del territorio de Mali y ha avanzado hacia Burkina Faso, Niger y ahora amenaza los países costeros (Togo, Benin, norte de Ghana y Costa de Marfil). Francia retiró sus tropas en 2022. Wagner tiene presencia pero es insuficiente para contener la expansión.",
    vp: "Tema en vigilancia. Si JNIM alcanza la costa atlántica o hay un gran ataque en un país costero, el vídeo se activa: 'El yihad que viene por el Golfo de Guinea'.",
    sources: [
      { headline: "The Sahel region has become the gateway for jihadist terrorism in Africa", medium: "Mail & Guardian", date: "22 MAY 2026", url: "https://mg.co.za/article/2026-05-22-the-sahel-region-has-become-the-gateway-for-jihadist-terrorism-in-africa/", desc: "Para el análisis del corredor jihadista Sahel → Costa Atlántica con datos de ACLED" },
      { headline: "Jihadist expansion in the Sahel and threats to coastal West Africa", medium: "Vision of Humanity", date: "MAY 2026", url: "https://www.visionofhumanity.org/jihadist-expansion-in-the-sahel-and-threats-to-coastal-west-africa/", desc: "Para datos de expansión territorial JNIM, mapas de presencia y proyección hacia países costeros" },
      { headline: "Tracking Conflict Worldwide: Mali and Sahel", medium: "CFR Global Conflict Tracker", date: "MAY 2026", url: "https://www.cfr.org/global-conflict-tracker/conflict/destabilization-mali", desc: "Para el mapa de control territorial actualizado y la cronología del conflicto maliense" }
    ],
    verification: "Ataques confirmados por ACLED. Análisis de expansión por Vision of Humanity verificado con datos de campo."
  }
},

/* ── N12: BRENT MERCADOS ── */
{
  id: "n12",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"📊 MERCADOS" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brent_Spot_monthly.svg?width=800",
  imageAlt: "Historial de precios del petróleo crudo desde 1861",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Brent_Spot_monthly.svg?width=800",
  imageCredit: "Wikimedia Commons / TomTheHand",
  imageSource: "Public Domain",
  title: "Brent $97.51 ↑2.4% — Mercados no creen en el acuerdo Irán pese al MOU anunciado",
  pills: ["Brent $97.51", "WTI $90.35", "↑2.41% 28 MAY", "Hormuz aún cerrado"],
  why: "Cada tweet de Trump mueve el mercado. El Brent por encima de $95 es el verdadero reloj de cuenta atrás: si sube, hay presión para firmar. Si baja, el acuerdo se consolida.",
  viralPct: 88, viralCls: "viral-high",
  viralSources: "Bloomberg · Fortune · CNBC market movers",
  detail: {
    summary: "A pesar del anuncio del MOU de 60 días entre EEUU e Irán, el Brent cerró el 28 de mayo en $97.51 (+2.41%) y el WTI en $90.35. Los mercados están descontando un 60% de probabilidad de que el acuerdo no se firme o se rompa en las primeras semanas. Bloomberg señala que el Hormuz podría reopenarse en 30 días si hay firma — lo que supondría una caída de $15-20 por barril de golpe.",
    context: "El crudo por encima de $95 presiona a los gobiernos europeos y asiáticos a buscar acuerdos energéticos alternativos (gas natural, carbón, energías renovables aceleradas). La duración del cierre de Hormuz determinará si hay recesión energética global en 2026 o no.",
    vp: "El precio del petróleo no es el vídeo, sino el contexto del vídeo sobre el deal con Irán y sus consecuencias. Los precios actuales son el dato más potente para abrir cualquier pieza sobre Hormuz.",
    sources: [
      { headline: "Current price of oil as of May 28, 2026", medium: "Fortune", date: "28 MAY 2026", url: "https://fortune.com/article/price-of-oil-05-28-2026/", desc: "Para datos de Brent y WTI en tiempo real con análisis de las causas del movimiento" },
      { headline: "Hormuz flows may return to normal within month of deal, Iran TV says", medium: "Bloomberg", date: "27 MAY 2026", url: "https://www.bloomberg.com/news/articles/2026-05-27/hormuz-flows-may-return-to-normal-within-month-of-deal-iran-tv", desc: "Para el timeline de mercados: cuándo y cuánto bajarían los precios si hay acuerdo real" },
      { headline: "2026 Strait of Hormuz crisis", medium: "Wikipedia", date: "MAY 2026", url: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc: "Cronología completa del cierre con impacto comercial por país y proyecciones de precios" }
    ],
    verification: "Precios del 28 mayo verificados en Bloomberg y Fortune. Datos de volumen de tráfico por Hormuz en verificación."
  }
},

/* ── N13: VIETNAM SHANGRI-LA ── */
{
  id: "n13",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌏 ASEAN" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/1_singapore_city_skyline_dusk_panorama_2011.jpg?width=800",
  imageAlt: "Skyline de Singapur desde Duxton Plain Park",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_in_the_evening_-_20101120.jpg?width=800",
  imageCredit: "Wikimedia Commons / Chensiyuan",
  imageSource: "CC BY-SA 4.0",
  title: "Shangri-La: Vietnam da el keynote — señal de pivot estratégico regional frente a China",
  pills: ["Presidente Tô Lâm", "Keynote 29 MAY", "ASEAN vs China", "Singapur 2026"],
  why: "Vietnam, históricamente cauteloso con China, da el discurso central del foro de seguridad de Asia. Cambio de posicionamiento que puede redefinir la arquitectura de la región.",
  viralPct: 35, viralCls: "viral-low",
  viralSources: "IISS · The Vietnamese · AsiaMediaCentre",
  detail: {
    summary: "El presidente vietnamita Tô Lâm pronunció el discurso de apertura (keynote) del Diálogo Shangri-La 2026 — el primer vietnamita en hacerlo en la historia del foro. En su discurso defendió el 'orden basado en normas' del Indo-Pacífico y la 'soberanía marítima' sin nombrar a China directamente. La elección de Vietnam como keynote speaker es una señal política deliberada del IISS.",
    context: "Vietnam es uno de los pocos países asiáticos que mantiene disputas territoriales activas con China en el Mar del Sur de China (Islas Spratly, Paracel). Históricamente equilibraba relaciones con Pekín y Washington. La elección del keynote implica que el foro — y parte de la región — se posiciona más abiertamente.",
    vp: "Tema de vigilancia. Si Vietnam acelera su acercamiento militar a EEUU (ejercicios navales, bases, arms sales), se convierte en vídeo: 'El único país que sobrevivió enfrentarse a EEUU hoy les necesita contra China'.",
    sources: [
      { headline: "Shangri-La Dialogue 2026 — Official Programme", medium: "IISS", date: "MAY 2026", url: "https://www.iiss.org/events/shangri-la-dialogue/shangri-la-dialogue-2026/", desc: "Fuente oficial con agenda completa, keynotes y comunicados del foro" },
      { headline: "2026 Shangri-La Dialogue: Vietnam steps onto a larger stage", medium: "The Vietnamese", date: "28 MAY 2026", url: "https://thevietnamese.org/2026/05/2026-shangri-la-dialogue-viet-nam-steps-onto-a-larger-stage/", desc: "Para el análisis del significado del keynote en el contexto del pivot estratégico vietnamita" },
      { headline: "Pete Hegseth at Shangri-La Dialogue warns on China", medium: "Newsweek", date: "29 MAY 2026", url: "https://www.newsweek.com/pete-hegseth-shangri-la-dialogue-us-china-strategic-competition-war-peace-2079266", desc: "Para el contexto completo del foro: Hegseth + Vietnam keynote + tensiones EEUU-China-ASEAN" }
    ],
    verification: "Keynote confirmado por IISS. Discurso completo publicado en iiss.org."
  }
}

], // end news

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 7 propuestas editoriales
═════════════════════════════════════════════════════════════ */
proposals: [

/* ── P1: COLOMBIA DORADO ── */
{
  id: "p1",
  golden: true,
  number: "PROPUESTA #1 · TEMA DORADO",
  tags: [{ cls:"tag-red", text:"🔴 EXPLOSIVO" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  flag: "co",
  title: "🏆 Colombia D-1: ¿Pueden los grupos armados decidir las elecciones en el país más armado de Latinoamérica?",
  potCls: "pot-explosive", potText: "🔴 EXPLOSIVO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 VIRAL MASIVO · Google Trends CO pico máx." },
    { cls:"chip-vhigh", text:"📱 TikTok millones esta semana" },
    { cls:"chip-gpart", text:"✅ Gap: ángulo resultado ≠ grupos armados" },
    { cls:"chip-vpok",  text:"🟢 VP: no publicado este ángulo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=1200",
  bannerAlt: "Colombia — divisiones administrativas",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=800",
  tesis: "La segunda derivada: Colombia no está eligiendo solo un presidente — está decidiendo si el modelo populista de derecha sin partido puede prosperar en el país del mundo donde los grupos criminales gestionan el 40% del territorio electoral. De la Espriella es el 'Milei colombiano', pero Milei operó en un país sin guerrilla.",
  fields: [
    { label: "📰 La noticia", value: "Elecciones el 31 mayo. 41.4M votantes. Cepeda (38-44%) vs De la Espriella (28-35%) vs Valencia (14-18%). 120.000 policías + 94 aeronaves. 32 municipios en alerta por ELN, EMC, Clan del Golfo. Segunda vuelta probable el 21 junio." },
    { label: "🔍 Segunda derivada", value: "De la Espriella es abogado sin carnet de partido, antisistema, que ha crecido precisamente en las zonas más violentas. Si gana, Colombia sería el 5.º domino latinoamericano de la ola derechista (tras Milei, Bukele, Boric perdido, Bolsonaro derrotado). Si gana Cepeda, es Petro 2.0 en un país que ha rechazado la 'paz total'. En ambos casos hay patrón continental para el vídeo." },
    { label: "❓ Gran pregunta", value: "¿Puede el populismo de derecha ganar en el único país del mundo donde los grupos armados tienen más poder electoral real que los partidos políticos?" },
    { label: "⚔️ El conflicto", value: "Petro (legado izquierda gobernante, fracasada) vs De la Espriella (outsider derecho sin estructura) vs ELN/EMC (poder de facto territorial). Tres fuerzas: política, antipolítica y terror." },
    { label: "⚡ Por qué ahora", value: "Elecciones en 48h. Trending masivo en toda Latinoamérica. TikTok: millones de reproducciones. La hija de Petro publicó videos virales. Segunda vuelta: 21 junio si nadie supera el 50%." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó sobre grupos armados y elecciones hace ~3-4 semanas. ÁNGULO DIFERENTE: ese vídeo era el mapa del poder armado. Este es el análisis post-electoral: ¿qué dice el resultado para el continente?</span>" },
    { label: "📺 Competencia", value: "La competencia cubre en modo '¿quién gana?' sin segunda derivada. Habrá avalancha de contenido el 31 mayo y 1 junio. VP debe publicar análisis más profundo del patrón latinoamericano." },
    { label: "⏱️ Ventana", value: "<strong style='color:var(--gold)'>Publicar en las primeras 24-48h post-resultado (1-2 junio). Si hay segunda vuelta (21 junio), el tema vive 3 semanas más.</strong>" }
  ],
  sources: [
    { headline: "¿Quién es Abelardo de la Espriella, el candidato antisistema colombiano?", medium: "CNN Español", date: "28 MAY 2026", url: "https://cnnespanol.cnn.com/2026/05/28/colombia/quien-es-abelardo-espriella-candidato-orix", desc: "Para el perfil político y propuestas del outsider derechista: quién es, de dónde viene, por qué crece" },
    { headline: "Colombia 120.000 policías y 94 aeronaves blindarán las elecciones del 31 de mayo", medium: "El País Colombia", date: "29 MAY 2026", url: "https://www.elpais.com.co/elecciones/colombia-120000-policias-y-94-aeronaves-blindaran-las-elecciones-presidenciales-de-este-domingo-31-de-mayo-2846.html", desc: "Datos del operativo de seguridad y municipios en riesgo con presencia de grupos armados" },
    { headline: "Ponderador de encuestas presidenciales 2026", medium: "La Silla Vacía", date: "MAY 2026", url: "https://www.lasillavacia.com/silla-nacional/ponderador-de-encuestas-presidenciales-2026/", desc: "Agregador de encuestas más fiable de Colombia: datos por candidato, tendencia semanal y proyección segunda vuelta" },
    { headline: "Poll Tracker: Colombia's 2026 Presidential Election", medium: "AS/COA", date: "MAY 2026", url: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election", desc: "Para comparar con patrones de elecciones anteriores y proyectar probabilidad de segunda vuelta" }
  ]
},

/* ── P2: XI SOLO CMC ── */
{
  id: "p2",
  golden: false,
  number: "PROPUESTA #2 · GAP ENORME EN ESPAÑOL",
  tags: [{ cls:"tag-orange", text:"🟠 MUY ALTO" }, { cls:"tag-blue", text:"🌏 CHINA" }],
  flag: "cn",
  title: "Xi Jinping ha vaciado el ejército chino: el CMC sin generales reales, el PLA sin mando operativo",
  potCls: "pot-veryhigh", potText: "🟠 MUY ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 VIRAL EN INGLÉS · CSIS+FP 50K+ shares" },
    { cls:"chip-gfull", text:"🟢 GAP TOTAL EN ESPAÑOL" },
    { cls:"chip-vpok",  text:"🟢 VP: nunca cubierto este ángulo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_President_Xi_Jinping_is_greeted_y_Chief_of_Protocol_Monica_Crowley_for_a_bilateral_meeting_with_President_Donald_Trump_at_the_Gimhae_International_Airport_terminal_%2854889569017%29.jpg?width=1200",
  bannerAlt: "Xi Jinping recibido por protocolo americano para cumbre bilateral con Trump — 2025",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_2023_%28cropped%29.jpg?width=640",
  tesis: "El CMC de China — el organismo que ordena las guerras — tiene solo 2 miembros reales: Xi y un general de disciplina. Todos los comandantes de las 5 fuerzas armadas son interinos. Xi ha purgado tanto que el ejército más grande del mundo ya no tiene cadena de mando efectiva para dar la orden de invadir Taiwán. La paradoja: las purgas que debían preparar el ejército lo han incapacitado.",
  fields: [
    { label: "📰 La noticia", value: "Más de 100 oficiales purgados desde 2022. Enero 2026: cae el Jefe del Estado Mayor Zhang Youxia + jefe del Mando Conjunto Liu Zhenli. Solo 2 miembros reales del CMC. Los 5 comandantes de fuerzas armadas: todos en funciones interinas. <a href='https://foreignpolicy.com/2026/05/01/xi-jinping-china-military-factions-purges-centenary/'>FP</a> · <a href='https://www.csis.org/analysis/assessing-xis-unprecedented-purges-chinas-military-key-developments-and-potential'>CSIS</a>" },
    { label: "🔍 Segunda derivada", value: "Hegseth dijo HOY que China podría invadir Taiwán en 2027. Pero Xi no puede librar esa guerra: ha purgado a todos los generales que la ejecutarían. La paradoja absoluta. ¿O es deliberado? ¿Necesita 2027 para instalar el nuevo mando leal antes de poder moverse?" },
    { label: "❓ Gran pregunta", value: "¿Está el ejército más poderoso de Asia paralizado por su propio líder?" },
    { label: "⚔️ El conflicto", value: "Xi (control total) vs la eficacia operativa del PLA (requiere mando descentralizado). El hombre que más poder militar tiene en China es también el que más ha debilitado la maquinaria militar." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — Ángulo completamente nuevo. VP cubrió China-Taiwán, China-Irán, Pax Silica. Nunca 'Xi vaciando el mando militar'. Cero competencia directa en español.</span>" },
    { label: "📈 Señal de viralidad", value: "<strong style='color:var(--orange)'>ALTA EN INGLÉS</strong> — CSIS, Foreign Policy, Breaking Defense: 50K+ compartidos en anglófono. En español: prácticamente nada. Ventana limpia. Conexión directa con Shangri-La (hoy) y warning de China 2027 de Hegseth." }
  ],
  sources: [
    { headline: "The Pattern Behind Xi Jinping's Military Purges", medium: "Foreign Policy", date: "1 MAY 2026", url: "https://foreignpolicy.com/2026/05/01/xi-jinping-china-military-factions-purges-centenary/", desc: "Análisis del patrón histórico de purgas y su relación con el centenario del PLA en 2027 — pieza central del vídeo" },
    { headline: "Assessing Xi's Unprecedented Purges of China's Military", medium: "CSIS", date: "MAY 2026", url: "https://www.csis.org/analysis/assessing-xis-unprecedented-purges-chinas-military-key-developments-and-potential", desc: "Base de datos más completa de generales purgados y estructura real del CMC actual" },
    { headline: "China's Fallen Generals Are Getting Unexpectedly Harsh Punishments", medium: "Foreign Policy", date: "22 MAY 2026", url: "https://foreignpolicy.com/2026/05/22/china-xi-jinping-purge-generals-punishment-death-sentence/", desc: "Para entender la severidad de las penas (incluyendo penas de muerte): el control es absoluto pero el vacío operativo es real" }
  ]
},

/* ── P3: TAIWAN ABANDONO ── */
{
  id: "p3",
  golden: false,
  number: "PROPUESTA #3",
  tags: [{ cls:"tag-orange", text:"🟠 ALTO" }, { cls:"tag-blue", text:"🌏 TAIWÁN" }],
  flag: "tw",
  title: "EEUU le dice a Taiwán que lo defenderá en 2027 — y al mismo tiempo le quita las armas",
  potCls: "pot-high", potText: "🟡 ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 VIRAL · FP + Axios + W.Post líderes" },
    { cls:"chip-gpart", text:"🟡 Competencia: 1-2 vídeos en inglés" },
    { cls:"chip-vpok",  text:"🟢 VP: no cubierto este ángulo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=1200",
  bannerAlt: "Imagen satelital de Taiwán",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  tesis: "Trump ha convertido la seguridad de Taiwán en mercancía. El mismo día que Hegseth advierte a China en Shangri-La, los $14B en armas siguen pausados. La contradicción no es un error de comunicación — es una táctica de presión deliberada que convierte la vida de 23 millones de taiwaneses en ficha de poker.",
  fields: [
    { label: "📰 La noticia", value: "Paquete de $14.000M en armas (misiles Patriot, munición artillería, def. aérea) puesto 'en suspenso' tras cumbre Trump-Xi. Taiwán no fue informado. Secretario de la Marina lo confirmó públicamente el 27 mayo. <a href='https://foreignpolicy.com/2026/05/26/taiwan-china-us-arms-sales-package-trump-xi/'>FP</a> · <a href='https://www.washingtonpost.com/national-security/2026/05/23/us-pauses-14-billion-taiwan-arms-sale-after-china-summit/'>WP</a>" },
    { label: "🔍 Segunda derivada", value: "El modelo 'seguridad como mercancía' puede extenderse: Corea del Sur, Japón, países bálticos. Todos son 'aliados' de EEUU con acuerdos de defensa. Si Taiwán puede ser usada como ficha, ¿ningún aliado está seguro? Este es el vídeo: el fin del orden de seguridad americano tal como lo conocíamos." },
    { label: "❓ Gran pregunta", value: "¿Qué precio puede poner Trump a la seguridad de un aliado — y qué pasa cuando todos los aliados lo saben?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — VP cubrió Trump y OTAN (6 mayo), pero no este ángulo de Taiwan específicamente. El patrón de 'aliados como fichas' es nuevo.</span>" }
  ],
  sources: [
    { headline: "U.S. Halts Taiwan Arms Package as Trump Courts China", medium: "Foreign Policy", date: "26 MAY 2026", url: "https://foreignpolicy.com/2026/05/26/taiwan-china-us-arms-sales-package-trump-xi/", desc: "Para el análisis estratégico: qué incluye el paquete pausado y qué significa para la defensa real de Taiwán" },
    { headline: "U.S. pauses $14 billion Taiwan arms sale after China summit", medium: "Washington Post", date: "23 MAY 2026", url: "https://www.washingtonpost.com/national-security/2026/05/23/us-pauses-14-billion-taiwan-arms-sale-after-china-summit/", desc: "Exclusiva con los detalles del quid pro quo Trump-Xi y el proceso de la decisión" },
    { headline: "Taiwan frets as U.S. withholds weapons over China deal", medium: "Axios", date: "27 MAY 2026", url: "https://www.axios.com/2026/05/27/taiwan-weapons-trump-cao-pause", desc: "Para la reacción de Taipéi y el impacto en la relación bilateral — la perspectiva del 'abandonado'" }
  ]
},

/* ── P4: IRAN DEAL QUÉ CEDE EEUU ── */
{
  id: "p4",
  golden: false,
  number: "PROPUESTA #4",
  tags: [{ cls:"tag-orange", text:"🟠 ALTO" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  flag: "ir",
  title: "El acuerdo con Irán que nadie explica: qué cede realmente EEUU para reabrir Hormuz",
  potCls: "pot-high", potText: "🟡 ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 VIRAL GLOBAL · Bloomberg top 1" },
    { cls:"chip-gpart", text:"🟡 Gap: nadie explica los términos reales" },
    { cls:"chip-vpwarn", text:"⚠️ Cercanía: VP publicó Eritrea/Mar Rojo el 26 mayo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=1200",
  bannerAlt: "Mapa del Golfo Pérsico",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  tesis: "El MOU de Hormuz no es un acuerdo de paz — es un reconocimiento implícito de que EEUU no puede sostener una guerra de desgaste con Irán mientras gestiona China, Taiwán, Ucrania y ahora Colombia. La segunda derivada: ¿cuándo el 'America First' significa 'America Alone'?",
  fields: [
    { label: "📰 La noticia", value: "Acuerdo provisional de 60 días: EEUU levanta sanciones parciales a cambio de congelación nuclear e inspecciones AIEA. Irán reabre Hormuz. Sin firma formal aún. Axios tiene el contenido exclusivo del MOU. <a href='https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear'>Axios</a>" },
    { label: "🔍 Segunda derivada", value: "EEUU cede más de lo que admite: reconocimiento implícito del enriquecimiento al 60%, fin de la 'máxima presión', posible levantamiento de sanciones a 150B$ de reservas congeladas. Irán consigue que le paguen por parar su propio ataque." },
    { label: "❓ Gran pregunta", value: "¿Cuándo negocias con el país que cerró tu arteria energética, quién ganó realmente la guerra?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó 'Eritrea/Mar Rojo' el 26 mayo (192K v). Ángulo diferente — ese era sobre la vía alternativa a Hormuz. Este es sobre el contenido del deal y qué cede EEUU. Esperar 3-4 días de margen editorial si es posible.</span>" }
  ],
  sources: [
    { headline: "Exclusive: What's inside the Iran deal Trump is close to signing", medium: "Axios", date: "24 MAY 2026", url: "https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear", desc: "Fuente exclusiva con el contenido real del MOU: qué incluye en sanciones, nuclear y Hormuz — base del vídeo" },
    { headline: "U.S. and Iran work toward deal to extend ceasefire and reopen Strait of Hormuz", medium: "Washington Post", date: "24 MAY 2026", url: "https://www.washingtonpost.com/world/2026/05/24/us-iran-near-deal-extend-ceasefire-reopen-hormuz/", desc: "Para el marco negociador y el proceso diplomático detrás del MOU" },
    { headline: "Hormuz flows may return to normal within month of deal", medium: "Bloomberg", date: "27 MAY 2026", url: "https://www.bloomberg.com/news/articles/2026-05-27/hormuz-flows-may-return-to-normal-within-month-of-deal-iran-tv", desc: "Para el impacto económico: cuándo y cuánto bajarían los precios del crudo si el deal se formaliza" }
  ]
},

/* ── P5: SUDÁN HAMBRUNA ── */
{
  id: "p5",
  golden: false,
  number: "PROPUESTA #5",
  tags: [{ cls:"tag-yellow", text:"🟡 ALTO" }, { cls:"tag-blue", text:"🌍 ÁFRICA" }],
  flag: "sd",
  title: "Sudán: la peor hambruna del siglo en el país que controla el Nilo — y el mundo no mira",
  potCls: "pot-high", potText: "🟡 ALTO",
  chips: [
    { cls:"chip-vmed",  text:"🟠 VIRAL BAJO EN MAINSTREAM" },
    { cls:"chip-gfull", text:"🟢 GAP TOTAL: nadie lo cubre en profundidad" },
    { cls:"chip-vpok",  text:"🟢 VP: no cubierto" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Sudanese_Civil_War_Composite_Map_%282025%29.svg?width=1200",
  bannerAlt: "Mapa compuesto de la guerra civil de Sudán — control territorial 2025",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Sudanese_Civil_War_Composite_Map_%282025%29.svg?width=800",
  tesis: "Sudán tiene el país con más hambre del mundo, la mayor crisis de desplazados del planeta, y una guerra civil que lleva 25 meses. Y casi nadie habla de ello porque no hay petróleo occidental en juego ni refugiados llegando a Europa. Esta invisibilidad es la tesis: ¿por qué el mundo elige a qué catástrofes prestar atención?",
  fields: [
    { label: "📰 La noticia", value: "UNICEF declaró hambruna oficial en Al Fasher y Kadugli. 19.5M en crisis de hambre aguda. $2.9B necesarios en 2026, solo 5.5% recibido. 9M desplazados — la mayor crisis del mundo. <a href='https://www.unicef.org/press-releases/famine-conditions-confirmed-sudans-al-fasher-and-kadugli-hunger-and-malnutrition'>UNICEF</a>" },
    { label: "🔍 Segunda derivada", value: "Sudán controla las aguas del Nilo Azul — el 80% del caudal que alimenta a Egipto y 100M de personas. Una Somalia en el nacimiento del Nilo no es solo una tragedia humanitaria: es una amenaza a la seguridad hídrica de todo el norte de África." },
    { label: "❓ Gran pregunta", value: "¿Por qué la peor catástrofe del siglo en el corazón del Nilo no aparece en las portadas mientras el mundo mira a Irán?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — Ningún vídeo sobre la guerra civil de Sudán en el canal. Oportunidad limpia. Potencial comparable a vídeos de VP sobre Yemen o Siria que superaron el millón.</span>" }
  ],
  sources: [
    { headline: "Sudan becomes the world's hungriest country as famine spreads to two new areas of Darfur", medium: "Action Against Hunger", date: "MAY 2026", url: "https://www.actionagainsthunger.org/press-releases/sudan-becomes-the-worlds-hungriest-country-as-famine-spreads-to-two-new-areas-of-darfur/", desc: "Para datos de clasificación de hambruna, comparación histórica y descripción del colapso del sistema alimentario" },
    { headline: "Famine conditions confirmed in Sudan's Al Fasher and Kadugli", medium: "UNICEF", date: "MAY 2026", url: "https://www.unicef.org/press-releases/famine-conditions-confirmed-sudans-al-fasher-and-kadugli-hunger-and-malnutrition", desc: "Declaración oficial de hambruna — fuente primaria para las cifras de malnutrición infantil severa" },
    { headline: "Sudan enters fourth year of war: 'humiliated, broken, powerless'", medium: "NPR", date: "15 ABR 2026", url: "https://www.npr.org/2026/04/15/nx-s1-5781032/sudan-darfur-war-genocide-famine", desc: "Para el contexto narrativo de la guerra civil: las dos facciones, el colapso del sistema sanitario y la falta de atención internacional" }
  ]
},

/* ── P6: VENEZUELA PETRO-PROTECTORADO ── */
{
  id: "p6",
  golden: false,
  number: "PROPUESTA #6",
  tags: [{ cls:"tag-yellow", text:"🟡 MEDIO-ALTO" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  flag: "ve",
  title: "Venezuela, el nuevo petro-protectorado: EEUU controla el crudo, Delcy Rodriguez controla el país",
  potCls: "pot-high", potText: "🟡 MEDIO-ALTO",
  chips: [
    { cls:"chip-vmed",  text:"🟠 VIRAL MEDIO · Al Jazeera + NPR" },
    { cls:"chip-gfull", text:"🟢 GAP: nadie explica el modelo en español" },
    { cls:"chip-vpok",  text:"🟢 VP: cubrió Maduro, no el post-Maduro" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio_PDVSA_5_de_Julio.jpg?width=1200",
  bannerAlt: "Sede de PDVSA — Torre 5 de Julio, Caracas. El crudo venezolano bajo control de Washington.",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio_PDVSA_5_de_Julio.jpg?width=800",
  tesis: "El modelo Venezuela 2026 es inédito en la historia latinoamericana: EEUU controla los ingresos del petróleo, Delcy Rodriguez gestiona la política interior, y el régimen sobrevive porque Washington necesita el crudo. No es una invasión, no es una sanción — es un secuestro económico consentido.",
  fields: [
    { label: "📰 La noticia", value: "EEUU completó la primera venta de $500M de crudo venezolano bajo el acuerdo de supervisión de enero 2026. El deal total es de $2B. Los fondos van a cuentas controladas por el Tesoro americano. <a href='https://www.aljazeera.com/news/2026/1/5/venezuela-after-maduro-oil-power-and-the-limits-of-intervention'>Al Jazeera</a>" },
    { label: "🔍 Segunda derivada", value: "Venezuela produce 800K barriles/día bajo este modelo. Trump necesita ese crudo para mantener los precios por debajo de $100 (su promesa electoral). Delcy Rodriguez acepta las condiciones porque es la única forma de sobrevivir sin Maduro. Nadie ganó: ambos dependen el uno del otro." },
    { label: "❓ Gran pregunta", value: "¿Es Venezuela independiente si Washington decide cuánto dinero recibe por su propio petróleo?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ VP cubrió a Maduro y la crisis, pero no el modelo post-Maduro. Este ángulo es radicalmente nuevo: el 'petro-protectorado' como categoría política inédita.</span>" }
  ],
  sources: [
    { headline: "Venezuela after Maduro: Oil, power and the limits of intervention", medium: "Al Jazeera", date: "5 ENE 2026", url: "https://www.aljazeera.com/news/2026/1/5/venezuela-after-maduro-oil-power-and-the-limits-of-intervention", desc: "Para el trasfondo del modelo de gestión petrolera venezolana bajo supervisión americana post-Maduro" },
    { headline: "OFAC Issues GL 52: Further Loosening Sanctions Against PdVSA", medium: "Cleary Gottlieb", date: "ABR 2026", url: "https://www.clearygottlieb.com/news-and-insights/publication-listing/ofac-issues-gl-52-further-loosening-sanctions-against-pdvsa", desc: "Para el marco legal de las licencias OFAC que permiten las ventas de crudo: qué permite y qué bloquea" },
    { headline: "Venezuela Energy Reform and US Sanctions Relief Are Moving Together", medium: "Corporate Compliance Insights", date: "MAY 2026", url: "https://www.corporatecomplianceinsights.com/venezuela-energy-reform-us-sanctions-relief/", desc: "Análisis del paquete sanción+reforma como estrategia Trump: los incentivos y los límites del modelo" }
  ]
},

/* ── P7: EUROPA DRONES SIN EJÉRCITO ── */
{
  id: "p7",
  golden: false,
  number: "PROPUESTA #7",
  tags: [{ cls:"tag-yellow", text:"🟡 MEDIO" }, { cls:"tag-blue", text:"🇪🇺 EUROPA" }],
  flag: "eu",
  title: "Europa gasta más en drones que nunca — y sigue sin saber fabricarlos sin ayuda de Ucrania",
  potCls: "pot-high", potText: "🟡 MEDIO",
  chips: [
    { cls:"chip-vmed",  text:"🟠 VIRAL MEDIO · Defence News" },
    { cls:"chip-gpart", text:"🟡 Gap parcial en español" },
    { cls:"chip-vpwarn", text:"⚠️ VP cubrió Trump rompe OTAN 6 mayo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/UA_military_FPV_drones_01.jpg?width=1200",
  bannerAlt: "Drones FPV militares ucranianos — Ucrania enseña a Europa a fabricar sus propias armas",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/UA_military_FPV_drones_01.jpg?width=960",
  tesis: "La paradoja del rearme europeo: Europa ha comprometido más dinero en defensa que en cualquier momento desde la Guerra Fría, pero sigue siendo tecnológicamente dependiente de EEUU para munición, cohetes y sistemas de mando. La EU-Ukraine Drone Alliance es el primer intento de solucionar esto — pero llega 30 años tarde.",
  fields: [
    { label: "📰 La noticia", value: "La Comisión Europea lanzó la EU-Ukraine Drone Alliance el 5 de mayo. Busca miembros fundadores entre empresas de defensa europeas. Objetivo: operativa en 2026, 'muro de drones' continental contra ataques aéreos. <a href='https://kyivindependent.com/european-commission-opens-call-for-proposals-to-join-eu-ukraine-drone-alliance/'>Kyiv Independent</a>" },
    { label: "🔍 Segunda derivada", value: "Ucrania tiene la industria de drones más avanzada y barata del mundo gracias a 3 años de guerra real. Europa tiene el dinero pero no el know-how. La alianza invierte el flujo histórico: ahora Europa aprende de Ucrania, no al revés." },
    { label: "❓ Gran pregunta", value: "¿Puede Europa construir una industria de defensa independiente cuando el único país que sabe hacerlo está en guerra en su propio territorio?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó 'Trump rompe la OTAN' el 6 mayo (203K v). Ángulo diferente — ese era sobre la fractura política. Este es sobre la capacidad industrial real. Margen editorial suficiente.</span>" }
  ],
  sources: [
    { headline: "European Commission opens call for proposals to join EU-Ukraine Drone Alliance", medium: "Kyiv Independent", date: "5 MAY 2026", url: "https://kyivindependent.com/european-commission-opens-call-for-proposals-to-join-eu-ukraine-drone-alliance/", desc: "Primera cobertura del lanzamiento oficial con detalles de la convocatoria y objetivos de la alianza" },
    { headline: "Call for Founding Members of the EU-Ukraine Drone Alliance", medium: "EU Commission", date: "5 MAY 2026", url: "https://defence-industry-space.ec.europa.eu/funding-opportunities/calls-proposals/call-founding-members-eu-ukraine-drone-alliance_en", desc: "Fuente oficial con términos de referencia, criterios de selección y estructura de gobierno de la alianza" },
    { headline: "New Drone Alliance connects EU tech sector with Ukraine's war-tested innovation", medium: "United24 Media", date: "MAY 2026", url: "https://united24media.com/war-in-ukraine/new-drone-alliance-connects-eu-tech-sector-with-ukraines-war-tested-innovation-18507", desc: "Para el análisis del knowledge transfer inverso: cómo Ucrania enseña a Europa a fabricar drones baratos y letales" }
  ]
}

], // end proposals

/* ════════════════════════════════════════════════════════════
   RANKING TABLE
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Colombia D-1", subtema:"Elecciones 31 mayo · Patrón Latam", viral:95, depth:92, timing:98, fit:95, verdCls:"verd-y", verdText:"✅ PRIORITARIO" },
  { tema:"Xi solo CMC", subtema:"Ejército sin mando · Gap español", viral:75, depth:95, timing:80, fit:92, verdCls:"verd-y", verdText:"✅ PRIORITARIO" },
  { tema:"Taiwán $14B pausa", subtema:"Abandono suave · Mercanización seguridad", viral:78, depth:90, timing:82, fit:88, verdCls:"verd-y", verdText:"✅ PUBLICAR" },
  { tema:"Irán deal", subtema:"Qué cede EEUU · Términos reales", viral:92, depth:88, timing:70, fit:80, verdCls:"verd-w", verdText:"👁️ VIGILAR (VP 26may)" },
  { tema:"Sudán hambruna", subtema:"Peor catástrofe · Nilo en riesgo", viral:45, depth:95, timing:75, fit:90, verdCls:"verd-y", verdText:"✅ PUBLICAR" },
  { tema:"Venezuela protectorado", subtema:"Post-Maduro · Modelo inédito", viral:62, depth:88, timing:70, fit:85, verdCls:"verd-w", verdText:"👁️ SEMANA QUE VIENE" },
  { tema:"Europa drones", subtema:"Rearme sin capacidad · Paradoja", viral:58, depth:82, timing:65, fit:78, verdCls:"verd-w", verdText:"👁️ SEMANA QUE VIENE" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR — 5 temas emergentes
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "🇸🇦 Arabia Saudí: ¿normalización con Israel post-Irán deal?",
    body: "Si el deal Irán-EEUU se firma, Arabia Saudí puede acelerar la normalización con Israel (Abraham Accords 2.0). MBS ha indicado en privado que esperaba el fin del conflicto iraní para avanzar.",
    trigger: "Firma formal del MOU de 60 días + declaración saudí de apertura a normalización",
    sourceText: "FT: Saudi-Israel normalization tracker",
    sourceUrl: "https://www.ft.com/content/saudi-israel-normalization"
  },
  {
    title: "🇵🇭 Filipinas: choque naval con China en el Mar del Sur",
    body: "El número de incidentes entre la guardia costera filipina y buques chinos aumentó un 40% en mayo. Manila ha activado el MDT con EEUU por primera vez. Shangri-La puede escalar el lenguaje oficial.",
    trigger: "Primer herido o hundimiento de embarcación filipina en zona disputada",
    sourceText: "SCMP: South China Sea incidents tracker",
    sourceUrl: "https://www.scmp.com/news/china/military"
  },
  {
    title: "🇮🇳 India: elecciones parciales + Modi debilitado",
    body: "Tres estados clave en India celebran elecciones parciales en junio. Modi ha perdido impulso tras el escándalo de los contratos de defensa. Un resultado adverso puede cambiar la política exterior india hacia China.",
    trigger: "Resultados electorales desfavorables para el BJP en cualquiera de los tres estados",
    sourceText: "The Hindu: India elections 2026",
    sourceUrl: "https://www.thehindu.com/elections/"
  },
  {
    title: "🇧🇷 Brasil: Lula en el hospital y vacío de poder regional",
    body: "Lula fue hospitalizado el 27 de mayo por problemas cardíacos. Si la hospitalización se extiende, genera vacío de liderazgo en el mayor país de Latinoamérica, afectando a las negociaciones regionales.",
    trigger: "Hospitalización superior a 10 días o delegación formal de poderes",
    sourceText: "Folha de S.Paulo: salud de Lula",
    sourceUrl: "https://www.folha.uol.com.br"
  },
  {
    title: "💶 BCE y tipos de interés: decisión de junio tras subida del petróleo",
    body: "El Brent por encima de $95 presiona la inflación europea. El BCE se reúne el 12 junio. Si mantiene o sube tipos mientras el petróleo está alto, puede frenar el crecimiento europeo en un momento de mayor gasto en defensa.",
    trigger: "Brent supera $100/barril sostenido + BCE no recorta tipos en reunión de junio",
    sourceText: "ECB monetary policy decisions",
    sourceUrl: "https://www.ecb.europa.eu/press/pr/activities/mopo/html/index.en.html"
  }
]

}; // end VP_DATA
