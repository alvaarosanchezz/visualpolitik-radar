/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-01
   Edita este archivo para actualizar el contenido del dashboard.
══════════════════════════════════════════════════════════════ */
const VP_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-01",
  dateLabel: "01 JUNIO 2026",
  brisbane: "07:00 BRISBANE AEST",
  brent: "~$119",
  brentChange: "↑70% vs pre-guerra"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🛢️ BRENT <strong>~$119/bbl</strong> ↑70% vs pre-guerra Irán · Ormuz al 5% tráfico" },
  { cls:"t-red",    text:"🇮🇱 ISRAEL <strong>TOMA CASTILLO BEAUFORT</strong> · Líbano · Mayor avance terrestre en 26 años" },
  { cls:"t-gold",   text:"🇨🇴 COLOMBIA <strong>DE LA ESPRIELLA 43.7%</strong> · 2ª vuelta 21 JUN vs Cepeda 40.9%" },
  { cls:"t-red",    text:"🇪🇹 ETIOPÍA <strong>VOTA HOY</strong> · Abiy Ahmed espera victoria aplastante · 547 escaños" },
  { cls:"t-orange", text:"🇺🇸 EEUU <strong>RETIRA TROPAS DE EUROPA</strong> · Plan acelerado en cumbre OTAN 18 JUN" },
  { cls:"t-red",    text:"⚓ HORMUZ <strong>cerrado</strong> · 11 barcos/día vs 125 pre-guerra · Baker Hughes: no antes de H2" },
  { cls:"t-gold",   text:"🇷🇺 GNL RUSO <strong>RÉCORD A EUROPA</strong> · €3.880M pagados a Rusia en 4 meses · +17% vs 2025" },
  { cls:"t-red",    text:"🇺🇸 OP. SOUTHERN SPEAR <strong>200+ MUERTOS</strong> · 61+ ataques a barcos 'narco' sin pruebas" },
  { cls:"t-orange", text:"🇺🇸 NEWARK <strong>TOQUE DE QUEDA</strong> · 9 días de protestas anti-ICE · Policía estatal desplegada" },
  { cls:"t-orange", text:"🇹🇼 TAIWÁN · Bloqueo chino + Trump duda sobre armas · 'Quizás sí, quizás no'" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Decisión del día",
    content: "<span class='hl'>Colombia:</span> De la Espriella (derecha trumpista) ganó 1ª vuelta con 43.7%. Cepeda 40.9%. <span class='hl-red'>Segunda vuelta 21 junio — tema dorado para VP. Publicar análisis en 24-48h.</span>"
  },
  {
    label: "🎯 Oportunidad exclusiva",
    content: "Operación Southern Spear: <span class='hl'>200+ muertos en barcos 'narco' sin pruebas públicas de drogas.</span> Prácticamente NADIE lo cubre en español. Gap editorial enorme para VP."
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl'>~$119 ↑70%</span> · Ormuz: <span class='hl-red'>5% tráfico</span> · GNL ruso: <span class='hl-red'>récord</span><br>Israel: <span class='hl-red'>ocupación Líbano</span> · Etiopía: <span class='hl'>vota hoy</span>"
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
   NOTICIAS — 11 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1: ISRAEL BEAUFORT ── */
{
  id: "n1",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort_Castle%2C_Lebanon.jpg?width=1200",
  imageAlt: "Castillo de Beaufort — sur de Líbano",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort_Castle%2C_Lebanon.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "ISRAEL TOMA EL CASTILLO DE BEAUFORT EN LÍBANO — mayor avance terrestre en 26 años, tropas 'permanecerán'",
  pills: ["Castillo del siglo XII", "14.5 km de frontera", "26 años sin esto", "Alto el fuego violado"],
  why: "Israel construye una zona de seguridad permanente de facto en el sur de Líbano. Viola el alto el fuego que Washington negoció. Puede redefinir la frontera norte de Israel.",
  viralPct: 95, viralCls: "viral-high",
  viralSources: "NPR · CNN · Al Jazeera · Euronews top story",
  detail: {
    summary: "Tropas del IDF capturaron el castillo de Beaufort el 31 de mayo, izando banderas israelíes y de la brigada Golani. El ministro de Defensa Katz confirmó que las tropas 'permanecerán como parte de la zona de seguridad en Líbano'. Es el avance terrestre más profundo de Israel en Líbano en 26 años, pese a un alto el fuego oficialmente vigente. Francia condenó duramente la acción.",
    context: "Israel ocupó exactamente esta zona entre 1982 y 2000 — una ocupación de 18 años que fue la que creó a Hezbollah. El castillo de Beaufort tiene 800 años de historia de invasiones: cruzados, otomanos, Israel. La toma actual sugiere la reconstrucción de la 'zona de seguridad' que Israel mantuvo hasta su retirada en el 2000.",
    vp: "Tema explosivo para VP. La paradoja histórica es perfecta: la ocupación que creó a Hezbollah se repite en el mismo lugar, con el mismo castillo, 26 años después. La pregunta: ¿creará esto al próximo Hezbollah?",
    sources: [
      { headline: "Israel seizes medieval castle as it expands major offensive in southern Lebanon", medium: "NPR", date: "31 MAY 2026", url: "https://www.npr.org/2026/05/31/g-s1-125056/israel-seizes-medieval-beaufort-castle-southern-lebanon", desc: "Cobertura completa del avance militar y declaraciones de Katz sobre permanencia" },
      { headline: "Israel seizes Crusader-era castle as Netanyahu orders forces deeper into Lebanon", medium: "CNN", date: "31 MAY 2026", url: "https://www.cnn.com/2026/05/31/middleeast/israel-captures-beaufort-castle-lebanon-intl-hnk", desc: "Contexto de las órdenes de Netanyahu y la expansión de la ofensiva" },
      { headline: "Israel issues more displacement orders in Lebanon, seizes strategic castle", medium: "Al Jazeera", date: "31 MAY 2026", url: "https://www.aljazeera.com/news/2026/5/31/israel-issues-more-displacement-orders-in-lebanon-seizes-strategic-castle", desc: "Para el impacto humanitario y la reacción internacional incluyendo Francia" }
    ],
    verification: "Tres fuentes independientes confirman la toma del castillo y las declaraciones de Katz."
  }
},

/* ── N2: COLOMBIA PRIMERA VUELTA ── */
{
  id: "n2",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_in_South_America.svg?width=800",
  imageAlt: "Colombia en Sudamérica",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_in_South_America.svg?width=800",
  imageCredit: "Wikimedia Commons / TUBS",
  imageSource: "CC BY-SA 3.0",
  title: "COLOMBIA: De la Espriella GANA la primera vuelta con 43.7% — segunda vuelta el 21 de junio vs Cepeda",
  pills: ["De la Espriella 43.73%", "Cepeda 40.91%", "Valencia 6.9%", "23M votantes", "2ª vuelta 21 JUN"],
  why: "Sorpresa total. El candidato pro-Trump de ultraderecha superó todas las encuestas. Colombia va a la segunda vuelta más polarizada de su historia. Impacto continental.",
  viralPct: 98, viralCls: "viral-high",
  viralSources: "CNN · France 24 · Al Jazeera · trending LATAM total",
  detail: {
    summary: "Abelardo de la Espriella, candidato de ultraderecha con discurso pro-Trump y anti-cartel, ganó la primera vuelta con 43.73% — superando todas las encuestas. Iván Cepeda (izquierda, Pacto Histórico) quedó segundo con 40.91%. Paloma Valencia (centro-derecha uribista) se desplomó al 6.9%. Más de 23 millones votaron (56% participación). Segunda vuelta el 21 de junio.",
    context: "De la Espriella es abogado penalista, outsider sin estructura partidista, que canalizó el discurso Trump: mano dura, guerra contra carteles, restaurar el orden. Su victoria destruye la narrativa de que Colombia es un país 'naturalmente de centro'. Es la trumpización de la derecha latinoamericana: de Bukele a Milei a De la Espriella.",
    vp: "Tema dorado. El análisis post-electoral es obligatorio: '¿Colombia elige al Trump latinoamericano o al sucesor de Petro?' Publicar en 24-48h para capturar pico de búsquedas.",
    sources: [
      { headline: "Pro-Trump candidate to face Petro ally in Colombia presidential runoff", medium: "CNN", date: "31 MAY 2026", url: "https://www.cnn.com/2026/05/31/americas/colombia-runoff-espriella-cepeda-latam-intl", desc: "Análisis del resultado y perfil de ambos candidatos para la segunda vuelta" },
      { headline: "No Winner in Colombia: De la Espriella and Cepeda Head to June 21 Runoff", medium: "France 24", date: "31 MAY 2026", url: "https://www.france24.com/en/americas/20260531-colombia-presidential-election-live-follow-the-first-round", desc: "Cobertura en vivo con datos por departamento y análisis de la sorpresa" },
      { headline: "Colombians head to the polls to choose President Gustavo Petro's successor", medium: "Al Jazeera", date: "31 MAY 2026", url: "https://www.aljazeera.com/news/2026/5/31/colombians-head-to-the-polls-to-choose-president-gustavo-petros-successor", desc: "Contexto del fin de la era Petro y las implicaciones para Venezuela post-Maduro" }
    ],
    verification: "Resultados oficiales de la Registraduría Nacional. Tres fuentes internacionales confirman."
  }
},

/* ── N3: ETIOPÍA ELECCIONES ── */
{
  id: "n3",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ÁFRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopia_in_Africa_%28-mini_map_-rivers%29.svg?width=800",
  imageAlt: "Etiopía en África",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopia_in_Africa_%28-mini_map_-rivers%29.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "ETIOPÍA VOTA HOY: Abiy Ahmed busca consolidar un régimen autocrático — 64 distritos sin oposición",
  pills: ["126M habitantes", "547 escaños", "64 sin oposición", "Nobel Paz 2019", "Resultados 11 JUN"],
  why: "El segundo país más poblado de África celebra las elecciones menos competitivas de su historia. Un Nobel de la Paz convertido en autócrata. Implicaciones para el Nilo, Egipto y el Cuerno de África.",
  viralPct: 65, viralCls: "viral-high",
  viralSources: "CNN · Al Jazeera · Africanews · Journal of Democracy",
  detail: {
    summary: "Etiopía celebra hoy elecciones generales. El Partido de la Prosperidad de Abiy Ahmed se presenta sin oposición en 64 de 547 distritos. En 2021 ganó el 96% de los escaños. Regiones enteras (Tigray, Amhara, Oromia) no pueden votar por violencia activa. Abiy planea reformar la constitución para instaurar un sistema presidencial.",
    context: "Abiy ganó el Nobel de la Paz en 2019 por el acuerdo con Eritrea. Después lanzó una guerra civil en Tigray (2020-2022) que mató a cientos de miles. Ahora consolida poder autocrático mientras Addis Abeba presume rascacielos y nueva bolsa de valores. Un país de dos mitades.",
    vp: "Narrativa personal potente: de Nobel a autócrata. 'País sleeper' con potencial de sorpresa. Etiopía controla las nacientes del Nilo Azul (presa GERD) — implicaciones para Egipto y 100M de personas.",
    sources: [
      { headline: "Ethiopia's PM won a Nobel Peace Prize, stoked a civil war — and is set for re-election", medium: "CNN", date: "31 MAY 2026", url: "https://www.cnn.com/2026/05/31/africa/ethiopia-election-abiy-division-intl", desc: "Perfil de Abiy y la contradicción Nobel/guerra civil" },
      { headline: "Ethiopia to vote on June 1 as Abiy's ruling party eyes landslide victory", medium: "Al Jazeera", date: "29 MAY 2026", url: "https://www.aljazeera.com/news/2026/5/29/ethiopia-to-vote-on-june-1-as-abiys-ruling-party-eyes-landslide", desc: "Datos electorales y contexto de la falta de competencia real" },
      { headline: "Ethiopia Is About to Hold Another Sham Election", medium: "Journal of Democracy", date: "MAY 2026", url: "https://www.journalofdemocracy.org/online-exclusive/ethiopia-is-about-to-hold-another-sham-election/", desc: "Análisis académico de la erosión democrática bajo Abiy" }
    ],
    verification: "Datos electorales confirmados por la Comisión Nacional Electoral de Etiopía."
  }
},

/* ── N4: EEUU RETIRADA EUROPA ── */
{
  id: "n4",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌐 OTAN" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_expansion.png?width=800",
  imageAlt: "Expansión de la OTAN",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_expansion.png?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "EEUU ACELERA RETIRADA DE TROPAS DE EUROPA — plan detallado en la cumbre OTAN del 18 de junio",
  pills: ["5.000 tropas de Alemania", "Trump: 'mucho más'", "Cazas + buques recortados", "OTAN 18 JUN Bruselas"],
  why: "El fin de la primacía militar automática de EEUU en Europa. La NDS 2026 pone a China como prioridad nº1 y a Europa como 'secundaria'. Alemania sube al 3% PIB en defensa.",
  viralPct: 82, viralCls: "viral-high",
  viralSources: "NPR · Time · Defense News · Welt am Sonntag",
  detail: {
    summary: "Según Welt am Sonntag, Washington presentará un plan acelerado de retirada militar de Europa en la cumbre OTAN del 18 de junio. Ya se anunció la salida de 5.000 tropas de Alemania, pero Trump dijo que cortará 'mucho más'. España e Italia podrían ser siguientes. La NDS 2026 sitúa a China como prioridad nº1 y a Europa como secundaria.",
    context: "Europa gasta más que Rusia en defensa pero no puede defenderse sola: no fabrica munición suficiente, no tiene drones de reconocimiento propios, no tiene cadena de mando unificada. La OTAN sin EEUU es un esqueleto sin músculo.",
    vp: "VP cubrió 'Trump rompe la OTAN' el 6 mayo. La aceleración de la retirada y los recortes específicos de activos son información nueva. Ángulo: 'Europa gasta más pero no puede defenderse' — problema industrial, no presupuestario.",
    sources: [
      { headline: "Germany says U.S. troop withdrawal 'anticipated'; Spain and Italy could be next", medium: "NPR", date: "2 MAY 2026", url: "https://www.npr.org/2026/05/02/nx-s1-5808891/europe-allies-germany-troop-withdrawal-us", desc: "Reacción europea y los posibles próximos países afectados" },
      { headline: "The U.S. Military Drawdown in Europe Has Only Just Begun", medium: "Time", date: "3 MAY 2026", url: "https://time.com/article/2026/05/03/us-withdrawal-germany-nato-spain/", desc: "Análisis en profundidad del alcance real de la retirada" },
      { headline: "Report: US to cut strategic bombers and warships available to NATO", medium: "Defense News", date: "26 MAY 2026", url: "https://www.defensenews.com/global/europe/2026/05/26/report-us-to-cut-strategic-bombers-and-warships-available-to-nato-in-a-crisis/", desc: "Detalles de los recortes específicos en capacidades militares" }
    ],
    verification: "Filtraciones de Welt am Sonntag confirmadas por múltiples fuentes. Datos del Pentágono verificados."
  }
},

/* ── N5: ORMUZ CERRADO ── */
{
  id: "n5",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌐 ENERGÍA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageAlt: "Estrecho de Ormuz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Public Domain",
  title: "ORMUZ SIGUE BLOQUEADO: 11 barcos cruzan donde pasaban 125 al día — Brent ~$119/bbl",
  pills: ["5% tráfico normal", "Brent ~$119", "Gas Europa +70%", "Factura UE: €13.000M extra"],
  why: "La mayor crisis energética desde 1973 continúa. 3 meses con el 20% del petróleo y GNL global cortados. Baker Hughes no espera normalización hasta H2 2026.",
  viralPct: 88, viralCls: "viral-high",
  viralSources: "CNBC · Al Jazeera · Euronews · IEA Oil Market Report",
  detail: {
    summary: "El estrecho de Ormuz sigue efectivamente cerrado al tráfico comercial. Solo 11 barcos cruzaron en un día reciente, vs 125-140 pre-guerra. El Brent ronda los $119/bbl (+70% vs pre-guerra). La UE paga €13.000M extra en combustibles fósiles. UK ha desplegado drones, cazas y un buque para misión de seguridad marítima.",
    context: "Irán cerró el estrecho como represalia a los ataques de EEUU/Israel desde febrero. Pese al alto el fuego condicional, el tráfico no se ha recuperado. El 20% del petróleo mundial y 25% del GNL transitan por estos 30 km.",
    vp: "El contexto energético es transversal a múltiples propuestas de vídeo. La paradoja: el cierre de Ormuz benefició a Rusia (GNL Yamal récord) más que a nadie.",
    sources: [
      { headline: "Strait of Hormuz may not fully reopen until second half of 2026", medium: "CNBC", date: "24 ABR 2026", url: "https://www.cnbc.com/2026/04/24/strait-hormuz-baker-hughes-iran-war-oil-lng.html", desc: "Proyección de Baker Hughes sobre timeline de reapertura" },
      { headline: "When will Strait of Hormuz be 'safe' for commercial shipping again?", medium: "Al Jazeera", date: "28 ABR 2026", url: "https://www.aljazeera.com/features/2026/4/28/when-will-strait-of-hormuz-be-safe-for-commercial-shipping-again", desc: "Análisis de las condiciones necesarias para la reapertura" },
      { headline: "Oil Market Report — May 2026", medium: "IEA", date: "MAY 2026", url: "https://www.iea.org/reports/oil-market-report-may-2026", desc: "Datos oficiales del impacto en producción global: -3.9 mb/d en promedio 2026" }
    ],
    verification: "Datos de tráfico verificados por Lloyd's List. Precios del crudo por Bloomberg."
  }
},

/* ── N6: GNL RUSO RÉCORD A EUROPA ── */
{
  id: "n6",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌐 ENERGÍA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/LNG_Carrier.jpg?width=800",
  imageAlt: "Buque metanero de GNL",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/LNG_Carrier.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "EUROPA BATE RÉCORD comprando GNL ruso de Yamal — €3.880M a Rusia en 4 meses — mientras prepara prohibirlo",
  pills: ["91 cargamentos ene-abr", "+17.2% vs 2025", "€3.880M a Rusia", "100% Yamal → UE en febrero", "Prohibición: ene 2027"],
  why: "La paradoja energética europea: récord de compras de gas ruso mientras vota prohibirlo. La crisis de Ormuz convirtió a Rusia en el proveedor de emergencia de facto.",
  viralPct: 85, viralCls: "viral-high",
  viralSources: "European Gas Hub · Urgewald · OilPrice · bne IntelliNews",
  detail: {
    summary: "La UE importó más GNL ruso del Ártico (Yamal) en los primeros 4 meses de 2026 que nunca. En febrero, el 100% de las exportaciones de Yamal fueron a Europa. Total: 91 cargamentos, €3.880M pagados a Rusia, +17.2% vs 2025. La UE prepara prohibición total para enero 2027.",
    context: "El cierre de Ormuz destruyó la estrategia de 'diversificación energética' europea. Sin gas del Golfo, Europa corrió a comprar ruso del Ártico. Los contratos a largo plazo están excluidos de sanciones. Rusia gana por doble vía: precio sube por Ormuz + Europa compra más volumen.",
    vp: "Tema con paradoja perfecta para VP. La conexión Ormuz → Yamal → financiación de guerra rusa es la segunda derivada que nadie ha contado en un solo vídeo.",
    sources: [
      { headline: "European energy policy paradox: Russian LNG exports hit record highs amid Hormuz supply shock", medium: "European Gas Hub", date: "MAY 2026", url: "https://europeangashub.com/european-energy-policy-paradox-russian-lng-exports-hit-record-highs-amid-hormuz-supply-shock.html", desc: "Análisis de la paradoja energética europea con datos completos" },
      { headline: "Europe's Russian Arctic LNG imports from Yamal hit record high in first 4 months of 2026", medium: "Urgewald", date: "MAY 2026", url: "https://www.urgewald.org/en/media/europes-russian-arctic-lng-imports-yamal-hit-record-high-first-4-months-2026", desc: "Datos de cargamentos, volúmenes y pagos a Rusia" },
      { headline: "EU Imports of Yamal Gas Hit Record Ahead of Ban on Russian LNG", medium: "OilPrice", date: "MAY 2026", url: "https://oilprice.com/Latest-Energy-News/World-News/EU-Imports-of-Yamal-Gas-Hit-Record-Ahead-of-Ban-on-Russian-LNG.html", desc: "Contexto de la carrera por comprar antes de la prohibición" }
    ],
    verification: "Datos de Urgewald verificados con Eurostat y tracking de buques."
  }
},

/* ── N7: OPERACIÓN SOUTHERN SPEAR ── */
{
  id: "n7",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🇺🇸 EEUU" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pacific_Ocean_laea_location_map.svg?width=800",
  imageAlt: "Mapa del Pacífico — zona de operaciones",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Pacific_Ocean_laea_location_map.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "OPERACIÓN SOUTHERN SPEAR: 200+ muertos en ataques a barcos 'narco' — sin pruebas públicas de drogas",
  pills: ["200+ muertos", "61+ ataques", "62 barcos destruidos", "0 evidencia pública", "4 ataques esta semana"],
  why: "EEUU ejecuta una campaña militar letal en aguas internacionales sin proceso judicial. Trump declara 'conflicto armado' contra carteles. Más de 200 muertos sin un gramo de droga mostrado.",
  viralPct: 80, viralCls: "viral-high",
  viralSources: "NBC News · Al Jazeera · Just Security · Wikipedia",
  detail: {
    summary: "El Comando Sur de EEUU atacó otro barco sospechoso en el Pacífico oriental el 31 de mayo, matando a 3 — el cuarto ataque de la semana. Desde septiembre 2025, la Operación Southern Spear ha destruido 62+ embarcaciones y matado a 200+ personas. Trump justifica los ataques como 'conflicto armado'. La administración no ha presentado pruebas públicas de drogas.",
    context: "Trump creó una categoría legal nueva: 'conflicto armado contra carteles'. Esto permite usar fuerza militar letal sin declaración de guerra ni proceso judicial. Los demócratas cuestionan la legalidad. El Pentágono publica vídeos de explosiones como propaganda.",
    vp: "Tema prácticamente virgen en español. GAP editorial enorme. La pregunta: '¿Puede EEUU hundir barcos y matar tripulantes sin pruebas?'",
    sources: [
      { headline: "US military strike on alleged drug boat kills 3 in eastern Pacific", medium: "NBC News", date: "31 MAY 2026", url: "https://www.nbcnews.com/politics/trump-administration/us-military-strike-alleged-drug-boat-kills-3-eastern-pacific-rcna343790", desc: "Último ataque y cifras actualizadas de la operación" },
      { headline: "US strike on alleged drug boat in Pacific kills one", medium: "Al Jazeera", date: "27 MAY 2026", url: "https://www.aljazeera.com/news/2026/5/27/us-strike-on-alleged-drug-boat-in-pacific-kills-one", desc: "Cobertura internacional con análisis de legalidad" },
      { headline: "Timeline of Boat Strikes and Related Actions", medium: "Just Security", date: "MAY 2026", url: "https://www.justsecurity.org/124002/timeline-vessel-strikes-related-actions/", desc: "Cronología completa de todos los ataques con fechas, víctimas y ubicaciones" }
    ],
    verification: "Datos del Pentágono y SOUTHCOM. Timeline verificado por Just Security (NYU Law)."
  }
},

/* ── N8: NEWARK ICE ── */
{
  id: "n8",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🇺🇸 EEUU" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States_%28DoS_ECA_color_standard%29.svg?width=800",
  imageAlt: "Bandera de EEUU",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States_%28DoS_ECA_color_standard%29.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Public Domain",
  title: "NEWARK: 9 días de protestas anti-ICE — toque de queda, policía estatal, DHS amenaza con cerrar aeropuerto",
  pills: ["9 días", "Huelga de hambre", "Toque de queda", "Policía estatal", "Amenaza aeropuerto"],
  why: "La crisis migratoria interna de EEUU se convierte en enfrentamiento cívico abierto. La amenaza de cerrar operaciones aeroportuarias marca una escalada sin precedentes.",
  viralPct: 72, viralCls: "viral-high",
  viralSources: "ABC7 · NBC News · Fox News · CBS News",
  detail: {
    summary: "Las protestas frente al centro de detención de ICE Delaney Hall en Newark llevan 9 días. Huelga de hambre de detenidos. Agentes de ICE golpearon a manifestantes con bastones y usaron gas pimienta. Gobernador envió policía estatal. Alcalde impuso toque de queda. Secretario de DHS amenazó con retirar agentes del aeropuerto de Newark.",
    context: "La escalada del conflicto ICE/ciudades refleja una fractura interna que va más allá de la inmigración. Cuando el gobierno federal amenaza con cerrar un aeropuerto internacional por protestas, el estado de derecho entra en crisis.",
    vp: "Tema de vigilancia para VP. Si se extiende a otras ciudades, es vídeo: 'EEUU en guerra consigo mismo: cuando la inmigración rompe las ciudades desde dentro'.",
    sources: [
      { headline: "Protesters clash with ICE agents outside migrant detention facility in Newark", medium: "ABC7", date: "1 JUN 2026", url: "https://abc7ny.com/post/delaney-hall-protests-protesters-clash-ice-agents-outside-migrant-detention-facility-newark-nj/19192526/", desc: "Cobertura completa de los enfrentamientos con vídeos" },
      { headline: "N.J. establishes protected zone around ICE facility after arrests during clashes", medium: "NBC News", date: "31 MAY 2026", url: "https://www.nbcnews.com/news/us-news/nj-establishes-protected-zone-ice-facility-several-protesters-are-arre-rcna347569", desc: "Despliegue de policía estatal y establecimiento de zona protegida" },
      { headline: "DHS Secretary Mullin threatens to pull agents from Newark airport", medium: "ABC News", date: "31 MAY 2026", url: "https://abcnews.com/Politics/dhs-secretary-mullin-threatens-pull-agents-newark-airport/story?id=133387510", desc: "Amenaza sin precedentes de cerrar operaciones aeroportuarias" }
    ],
    verification: "Confirmado por múltiples fuentes locales y nacionales."
  }
},

/* ── N9: TAIWÁN BLOQUEO CHINO ── */
{
  id: "n9",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌏 ASIA-PAC" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  imageAlt: "Imagen satelital de Taiwán",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  imageCredit: "NASA",
  imageSource: "Public Domain",
  title: "TAIWÁN refuerza guardia costera ante ensayos de bloqueo chino — Trump: 'quizás vendo armas, quizás no'",
  pills: ["China practica bloqueo", "Cooperación con EEUU/Japón/Filipinas", "Trump ambiguo", "Semiconductores en riesgo"],
  why: "Si Ormuz está cerrado y Taiwán se bloquea, el mundo pierde el 20% del petróleo Y el 90% de los semiconductores avanzados al mismo tiempo.",
  viralPct: 75, viralCls: "viral-high",
  viralSources: "Japan Times · CNBC · Asia Times",
  detail: {
    summary: "China multiplica ejercicios de guardacostas simulando bloqueo de Taiwán. Taiwán intensifica entrenamiento con EEUU, Japón y Filipinas. Trump mantiene ambigüedad sobre $14B en armas pendientes, diciendo 'quizás sí, quizás no'. Alianza de semiconductores Taiwán-EEUU lanzada.",
    context: "Con Ormuz cerrado, un bloqueo de Taiwán sería catastrófico: 90% de chips avanzados del mundo + crisis energética simultánea. La ambigüedad de Trump debilita la disuasión.",
    vp: "Conexión con la retirada de EEUU de Europa: el patrón de 'EEUU se desentiende de sus aliados' es transversal.",
    sources: [
      { headline: "As China rehearses a blockade, Taiwan's coast guard prepares to push back", medium: "Japan Times", date: "16 MAR 2026", url: "https://www.japantimes.co.jp/news/2026/03/16/asia-pacific/politics/taiwan-coast-guard-china-blockade/", desc: "Preparativos taiwaneses ante ensayos de bloqueo chino" },
      { headline: "Why Taiwan became the defining issue in the Trump-Xi talks", medium: "CNBC", date: "16 MAY 2026", url: "https://www.cnbc.com/2026/05/16/trumps-meeting-with-chinas-xi-steers-the-us-away-from-taiwan-again.html", desc: "Taiwán como ficha de negociación en las conversaciones Trump-Xi" },
      { headline: "A China move now on Taiwan would be an enormous gamble", medium: "Asia Times", date: "MAY 2026", url: "https://asiatimes.com/2026/05/a-china-move-now-on-taiwan-would-be-an-enormous-gamble/", desc: "Análisis de los riesgos de una acción china sobre Taiwán" }
    ],
    verification: "Ejercicios chinos confirmados por ministerio de Defensa taiwanés."
  }
},

/* ── N10: TRUMP-CHINA ARANCELES ── */
{
  id: "n10",
  tags: [{ cls:"tag-yellow", text:"🟡 SEMANA" }, { cls:"tag-blue", text:"🌐 COMERCIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States_%28DoS_ECA_color_standard%29.svg?width=800",
  imageAlt: "EEUU-China comercio",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States_%28DoS_ECA_color_standard%29.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Public Domain",
  title: "TRUMP-CHINA: acuerdo de aranceles al 30% con pausa de 60 días — post-sentencia del Supremo contra IEEPA",
  pills: ["30% total", "20% fentanilo + 10% recíproco", "Pausa 60 días", "Supremo anuló IEEPA"],
  why: "El Supremo limitó los poderes arancelarios presidenciales. Trump busca nuevos mecanismos legales. La guerra comercial continúa por otros medios.",
  viralPct: 65, viralCls: "viral-med",
  viralSources: "Tax Foundation · PIIE · Grant Thornton",
  detail: {
    summary: "Tras la sentencia del Tribunal Supremo de febrero que anuló el uso de IEEPA para imponer aranceles, Trump negoció un acuerdo con China que mantiene el 30% (20% fentanilo + 10% recíproco) pero pausa la escalada por 60 días.",
    context: "La base legal de la política arancelaria de Trump cambió fundamentalmente en febrero. El Supremo dictaminó que el presidente no puede usar IEEPA para imponer aranceles, invalidando gran parte de su régimen agresivo de 2025.",
    vp: "Tema de vigilancia. La segunda derivada legal es interesante pero puede ser demasiado técnica sin un gancho más potente.",
    sources: [
      { headline: "Tariff Tracker: 2026 Trump Tariffs & Trade War by the Numbers", medium: "Tax Foundation", date: "JUN 2026", url: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/", desc: "Tracker actualizado con todas las tasas vigentes" },
      { headline: "The Trump-China trade wars: Five takeaways from US imports in 2025", medium: "PIIE", date: "2026", url: "https://www.piie.com/blogs/realtime-economics/2026/trump-china-trade-wars-five-takeaways-us-imports-2025", desc: "Análisis de los efectos reales de los aranceles en importaciones" }
    ],
    verification: "Tasas arancelarias verificadas por Tax Foundation."
  }
},

/* ── N11: SAHEL CRISIS ── */
{
  id: "n11",
  tags: [{ cls:"tag-orange", text:"🟠 HOY" }, { cls:"tag-blue", text:"🌍 SAHEL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mali_-_Location_Map_%282013%29_-_MLI_-_UNOCHA.svg?width=800",
  imageAlt: "Mapa del Sahel",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Mali_-_Location_Map_%282013%29_-_MLI_-_UNOCHA.svg?width=800",
  imageCredit: "UN OCHA",
  imageSource: "CC BY 3.0",
  title: "SAHEL: 52.8M personas en crisis alimentaria — temporada de hambruna empieza HOY — yihadistas se pelean entre ellos",
  pills: ["52.8M afectados", "Jun-ago temporada escasez", "JNIM vs ISIS Sahel: 1er choque", "Mayor ataque en 14 años en Mali"],
  why: "El Sahel concentra +50% de muertes por terrorismo mundial. Las juntas que echaron a Francia no resolvieron nada. Ahora los yihadistas se pelean entre ellos por el control.",
  viralPct: 55, viralCls: "viral-med",
  viralSources: "FAO · ACLED · Africanews · allAfrica",
  detail: {
    summary: "La FAO alerta de 52.8 millones de personas en inseguridad alimentaria aguda en el Sahel jun-ago 2026. En abril, el ataque coordinado más masivo en 14 años golpeó Mali. Por primera vez, JNIM (Al Qaeda) y Estado Islámico del Sahel chocaron entre sí en Níger.",
    context: "Mali, Burkina Faso y Níger echaron a Francia y la ONU, apostaron por Wagner/Rusia, y el terrorismo no ha disminuido sustancialmente. El choque JNIM vs ISIS Sahel abre un nuevo frente que puede expandir la violencia.",
    vp: "VP cubrió Mali en nov 2025. Ángulo nuevo: 'los yihadistas se pelean entre ellos' + temporada de hambruna + las juntas fracasan.",
    sources: [
      { headline: "West Africa and the Sahel: Nearly 52.8 Million People Could Face Acute Food Insecurity", medium: "FAO", date: "2026", url: "https://www.fao.org/africa/news-stories/news-detail/west-africa-and-the-sahel--nearly-52.8-million-people-could-face-acute-food-insecurity-during-the-2026-lean-season-(june-august)/en", desc: "Datos de la FAO sobre la crisis alimentaria" },
      { headline: "Sahel sees drop in terror attacks, but remains global epicenter of extremism", medium: "Africanews", date: "3 ABR 2026", url: "https://www.africanews.com/2026/04/03/sahel-sees-drop-in-terror-attacks-but-remains-global-epicenter-of-extremism/", desc: "Paradoja: bajan ataques pero el Sahel concentra +50% de muertes por terrorismo" },
      { headline: "The Sahel, Heart of the Pan-African Revolution", medium: "allAfrica", date: "30 ABR 2026", url: "https://allafrica.com/stories/202604300532.html", desc: "Primer choque JNIM vs Estado Islámico en Níger" }
    ],
    verification: "Datos de FAO y ACLED verificados."
  }
}

], // end news

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 7 propuestas editoriales
═════════════════════════════════════════════════════════════ */
proposals: [

/* ── P1: ISRAEL BEAUFORT ── */
{
  id: "p1",
  golden: true,
  number: "PROPUESTA #1 · TEMA DORADO",
  tags: [{ cls:"tag-red", text:"🔴 EXPLOSIVO" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  flag: "il",
  title: "🏆 Israel reconstruye la zona de seguridad en Líbano: ¿creará la ocupación al próximo Hezbollah?",
  potCls: "pot-explosive", potText: "🔴 EXPLOSIVO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 VIRAL · NPR + CNN + Al Jazeera top story" },
    { cls:"chip-gfull", text:"🟢 GAP: nadie conecta Beaufort 1982 con Beaufort 2026" },
    { cls:"chip-vpok",  text:"🟢 VP: ángulo completamente nuevo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort_Castle%2C_Lebanon.jpg?width=1200",
  bannerAlt: "Castillo de Beaufort — Líbano",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort_Castle%2C_Lebanon.jpg?width=800",
  tesis: "Israel no está haciendo una operación temporal. Está reconstruyendo la zona de seguridad de 1982-2000, exactamente en el mismo lugar — el castillo de Beaufort. La paradoja histórica es brutal: esa ocupación fue la que creó a Hezbollah. 26 años después, en el mismo castillo, la historia se repite. La pregunta: ¿creará esto al próximo Hezbollah?",
  fields: [
    { label: "📰 La noticia", value: "IDF tomó el castillo de Beaufort el 31 mayo. Banderas israelíes y Golani izadas. Katz: tropas 'permanecerán como parte de la zona de seguridad'. Mayor avance en 26 años. Alto el fuego de EEUU violado. Francia condena. <a href='https://www.npr.org/2026/05/31/g-s1-125056/israel-seizes-medieval-beaufort-castle-southern-lebanon'>NPR</a> · <a href='https://www.cnn.com/2026/05/31/middleeast/israel-captures-beaufort-castle-lebanon-intl-hnk'>CNN</a>" },
    { label: "🔍 Segunda derivada", value: "No es una operación contra Hezbollah. Es la construcción de una nueva frontera de facto. Israel redibuja el mapa del sur de Líbano creando una zona de ocupación permanente que viola la Resolución 1701. EEUU calla. Francia protesta. La historia de 1982-2000 se repite — y esa ocupación fue la que creó a Hezbollah." },
    { label: "❓ Gran pregunta", value: "¿Está Israel construyendo una nueva ocupación permanente en Líbano — y si es así, creará al próximo Hezbollah?" },
    { label: "⚔️ El conflicto", value: "Israel vs Hezbollah/Líbano. Netanyahu vs alto el fuego de EEUU. Francia vs Israel por soberanía libanesa." },
    { label: "⚡ Por qué ahora", value: "Toma de Beaufort ayer 31 mayo + declaración de permanencia = punto de no retorno simbólico." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ VP cubrió Israel-Hezbollah e Irán, pero NUNCA el ángulo de 'reconstrucción de la zona de seguridad' ni la paradoja histórica del castillo. Tema radicalmente nuevo.</span>" }
  ],
  sources: [
    { headline: "Israel seizes medieval castle as it expands major offensive in southern Lebanon", medium: "NPR", date: "31 MAY 2026", url: "https://www.npr.org/2026/05/31/g-s1-125056/israel-seizes-medieval-beaufort-castle-southern-lebanon", desc: "Cobertura completa del avance militar y declaraciones de Katz" },
    { headline: "Israel seizes Crusader-era castle as Netanyahu orders forces deeper into Lebanon", medium: "CNN", date: "31 MAY 2026", url: "https://www.cnn.com/2026/05/31/middleeast/israel-captures-beaufort-castle-lebanon-intl-hnk", desc: "Contexto de las órdenes de Netanyahu" },
    { headline: "Israel retakes Beaufort castle in Lebanon, Paris issues strong condemnation", medium: "Euronews", date: "31 MAY 2026", url: "https://www.euronews.com/2026/05/31/israel-retakes-beaufort-castle-in-lebanon-paris-issues-harsh-condemnation", desc: "Reacción francesa y contexto de la Resolución 1701" }
  ]
},

/* ── P2: GNL RUSO PARADOJA ── */
{
  id: "p2",
  golden: false,
  number: "PROPUESTA #2 · PARADOJA PERFECTA",
  tags: [{ cls:"tag-red", text:"🔴 MUY ALTO" }, { cls:"tag-blue", text:"🌐 ENERGÍA" }],
  flag: "eu",
  title: "Europa paga récord a Rusia por gas mientras vota prohibirlo: la guerra de Irán hizo a Putin más rico",
  potCls: "pot-veryhigh", potText: "🟠 MUY ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 DATOS ESCANDALOSOS · €3.880M a Rusia en 4 meses" },
    { cls:"chip-gfull", text:"🟢 GAP TOTAL: nadie conectó Ormuz + Yamal + prohibición" },
    { cls:"chip-vpok",  text:"🟢 VP: ángulo completamente nuevo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/LNG_Carrier.jpg?width=800",
  bannerAlt: "Buque de GNL",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/LNG_Carrier.jpg?width=800",
  tesis: "La guerra de Irán no debilitó a Rusia. La fortaleció. El cierre de Ormuz convirtió a Moscú en el proveedor energético de emergencia de Europa — el continente que lleva 4 años 'desacoplándose'. Europa financia a Putin con cifras récord mientras vota prohibir su gas. La 'diversificación energética' fue una ilusión: en la primera crisis real, Europa vuelve al gas ruso.",
  fields: [
    { label: "📰 La noticia", value: "UE importó más GNL ruso de Yamal que nunca en ene-abr 2026. 91 cargamentos, +17.2% vs 2025. En febrero, 100% de Yamal a Europa. €3.880M pagados. Prohibición total: enero 2027. <a href='https://www.urgewald.org/en/media/europes-russian-arctic-lng-imports-yamal-hit-record-high-first-4-months-2026'>Urgewald</a>" },
    { label: "🔍 Segunda derivada", value: "El cierre de Ormuz destruyó la estrategia energética europea. Sin gas del Golfo, Europa corrió a comprar ruso. Rusia gana por doble vía: precio sube + Europa compra más. Putin es el gran beneficiario silencioso de la guerra de Irán." },
    { label: "❓ Gran pregunta", value: "¿Cómo es posible que Europa pague cifras récord a Rusia mientras dice que va a prohibirlo en 6 meses?" },
    { label: "⚔️ El conflicto", value: "UE vs Rusia (dependencia energética). Promesas políticas europeas vs realidad del mercado. Guerra de Irán como catalizador del poder ruso." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — VP cubrió dependencia energética e Irán pero NUNCA conectó Ormuz → Yamal → financiación rusa. Ángulo completamente nuevo y exclusivo.</span>" }
  ],
  sources: [
    { headline: "European energy policy paradox: Russian LNG exports hit record highs", medium: "European Gas Hub", date: "MAY 2026", url: "https://europeangashub.com/european-energy-policy-paradox-russian-lng-exports-hit-record-highs-amid-hormuz-supply-shock.html", desc: "Análisis completo de la paradoja" },
    { headline: "Europe's Russian Arctic LNG imports from Yamal hit record high", medium: "Urgewald", date: "MAY 2026", url: "https://www.urgewald.org/en/media/europes-russian-arctic-lng-imports-yamal-hit-record-high-first-4-months-2026", desc: "Datos de cargamentos y pagos" },
    { headline: "EU paid an estimated €2.88 billion for Yamal Arctic LNG in Q1", medium: "Urgewald", date: "MAY 2026", url: "https://www.urgewald.org/en/media/eu-paid-estimated-russia-eu288-billion-yamal-arctic-lng-q1-2026", desc: "Cifras financieras detalladas Q1 2026" }
  ]
},

/* ── P3: COLOMBIA ── */
{
  id: "p3",
  golden: false,
  number: "PROPUESTA #3 · POST-ELECTORAL",
  tags: [{ cls:"tag-red", text:"🔴 MUY ALTO" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  flag: "co",
  title: "Colombia: el 'Trump colombiano' gana la primera vuelta — ¿nace el 5.º dominó de la ola derechista latina?",
  potCls: "pot-veryhigh", potText: "🟠 MUY ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 VIRAL MASIVO · trending LATAM completo" },
    { cls:"chip-gpart", text:"🟡 Gap: el ángulo es 'patrón continental', no resultado" },
    { cls:"chip-vpwarn", text:"⚠️ VP cubrió grupos armados 3 mayo — ángulo diferente" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_in_South_America.svg?width=800",
  bannerAlt: "Colombia en Sudamérica",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_in_South_America.svg?width=800",
  tesis: "De la Espriella es abogado mediático, outsider, pro-Trump, sin partido. Ganó sorprendiendo a todas las encuestas con 43.7%. Colombia no elige presidente — elige bando en una guerra ideológica continental. De Bukele a Milei a De la Espriella: el modelo líder autoritario-mediático se replica. La trumpización de Latinoamérica es un patrón, no una coincidencia.",
  fields: [
    { label: "📰 La noticia", value: "De la Espriella ganó 1ª vuelta con 43.73%. Cepeda (izquierda) 40.91%. Valencia (centro-derecha) 6.9%. 23M votantes, 56% participación. 2ª vuelta 21 junio. <a href='https://www.cnn.com/2026/05/31/americas/colombia-runoff-espriella-cepeda-latam-intl'>CNN</a> · <a href='https://www.france24.com/en/americas/20260531-colombia-presidential-election-live-follow-the-first-round'>France24</a>" },
    { label: "🔍 Segunda derivada", value: "De la Espriella no es un político tradicional — es un fenómeno mediático que canalizó Trump. Su victoria destruye la narrativa de Colombia como país 'de centro'. Conexión con Venezuela post-Maduro: la caída de Maduro cambió la política colombiana, empujando el electorado a la derecha." },
    { label: "❓ Gran pregunta", value: "¿Está naciendo un 'Trump colombiano' — y qué significa para el país más estratégico de Sudamérica en la era post-Maduro?" },
    { label: "⚔️ El conflicto", value: "De la Espriella (derecha trumpista) vs Cepeda (izquierda petrista). Colombia post-Petro vs Colombia post-Maduro." },
    { label: "⚡ Por qué ahora", value: "1ª vuelta fue AYER. 2ª vuelta en 20 días (21 junio). Ventana perfecta para vídeo explicativo." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó sobre grupos armados y elecciones ~3 mayo. ÁNGULO DIFERENTE: este es post-electoral, el fenómeno De la Espriella y el patrón continental Bukele-Milei-De la Espriella.</span>" }
  ],
  sources: [
    { headline: "Pro-Trump candidate to face Petro ally in Colombia presidential runoff", medium: "CNN", date: "31 MAY 2026", url: "https://www.cnn.com/2026/05/31/americas/colombia-runoff-espriella-cepeda-latam-intl", desc: "Perfil de ambos candidatos y análisis del resultado" },
    { headline: "Anti-cartel hardliner channels Trump in bid to end Colombia's leftist era", medium: "Fox News", date: "31 MAY 2026", url: "https://www.foxnews.com/world/anti-cartel-hardliner-channels-trump-bid-end-colombias-leftist-era-pivotal-election", desc: "Para el perfil de De la Espriella como fenómeno Trump-like" },
    { headline: "Poll Tracker: Colombia's 2026 Presidential Election", medium: "AS/COA", date: "MAY 2026", url: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election", desc: "Evolución de encuestas y cómo todas fallaron" }
  ]
},

/* ── P4: SOUTHERN SPEAR ── */
{
  id: "p4",
  golden: false,
  number: "PROPUESTA #4 · EXCLUSIVA",
  tags: [{ cls:"tag-red", text:"🔴 MUY ALTO" }, { cls:"tag-blue", text:"🇺🇸 EEUU/LATAM" }],
  flag: "us",
  title: "Operación Southern Spear: EEUU hunde barcos y mata 200+ personas sin pruebas — la guerra sin nombre",
  potCls: "pot-veryhigh", potText: "🟠 MUY ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 DATOS IMPACTANTES · 200+ muertos, 0 pruebas" },
    { cls:"chip-gfull", text:"🟢 GAP TOTAL EN ESPAÑOL · nadie lo cubre" },
    { cls:"chip-vpok",  text:"🟢 VP: nunca cubierto" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Pacific_Ocean_laea_location_map.svg?width=800",
  bannerAlt: "Mapa del Pacífico oriental",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Pacific_Ocean_laea_location_map.svg?width=800",
  tesis: "EEUU lleva a cabo una campaña de asesinatos extrajudiciales en aguas internacionales. 200+ muertos, 62 barcos destruidos, sin un gramo de droga mostrado como evidencia. Trump inventó la categoría de 'conflicto armado contra carteles' para saltarse la legalidad. Es la política antidrogas más letal y menos transparente de la historia moderna de EEUU.",
  fields: [
    { label: "📰 La noticia", value: "Otro ataque el 31 mayo, 3 muertos. 4º de la semana. Desde sept 2025: 61+ ataques, 62 barcos, 200+ muertos. Trump: 'conflicto armado'. 0 pruebas públicas de drogas. <a href='https://www.nbcnews.com/politics/trump-administration/us-military-strike-alleged-drug-boat-kills-3-eastern-pacific-rcna343790'>NBC</a> · <a href='https://www.justsecurity.org/124002/timeline-vessel-strikes-related-actions/'>Just Security</a>" },
    { label: "🔍 Segunda derivada", value: "No es 'guerra contra las drogas'. Es la primera campaña militar de ejecución sumaria de EEUU en el hemisferio occidental desde las 'banana wars'. Trump creó una categoría legal nueva que permite fuerza militar letal sin declaración de guerra ni proceso judicial." },
    { label: "❓ Gran pregunta", value: "¿Puede EEUU hundir barcos y matar tripulantes en aguas internacionales sin pruebas — y llamarlo 'guerra contra el narco'?" },
    { label: "⚔️ El conflicto", value: "EEUU vs carteles (supuestamente). Poder ejecutivo vs legalidad internacional. Trump vs Congreso sobre límites de fuerza militar." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — VP nunca ha cubierto la Operación Southern Spear. Tema completamente virgen. Oportunidad editorial enorme en español.</span>" }
  ],
  sources: [
    { headline: "US military strike on alleged drug boat kills 3 in eastern Pacific", medium: "NBC News", date: "31 MAY 2026", url: "https://www.nbcnews.com/politics/trump-administration/us-military-strike-alleged-drug-boat-kills-3-eastern-pacific-rcna343790", desc: "Último ataque con cifras actualizadas" },
    { headline: "Timeline of Boat Strikes and Related Actions", medium: "Just Security", date: "MAY 2026", url: "https://www.justsecurity.org/124002/timeline-vessel-strikes-related-actions/", desc: "Cronología legal completa — base de datos definitiva" },
    { headline: "Operation Southern Spear strikes on alleged drug traffickers", medium: "Wikipedia", date: "MAY 2026", url: "https://en.wikipedia.org/wiki/United_States_strikes_on_alleged_drug_traffickers_during_Operation_Southern_Spear", desc: "Resumen enciclopédico con todas las fuentes cruzadas" }
  ]
},

/* ── P5: EEUU ABANDONA EUROPA ── */
{
  id: "p5",
  golden: false,
  number: "PROPUESTA #5",
  tags: [{ cls:"tag-orange", text:"🟠 ALTO" }, { cls:"tag-blue", text:"🌐 OTAN" }],
  flag: "eu",
  title: "EEUU abandona Europa: la retirada acelerada de tropas y el vacío que nadie puede llenar",
  potCls: "pot-high", potText: "🟡 ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 TIMING · Cumbre OTAN 18 junio" },
    { cls:"chip-gpart", text:"🟡 Gap: el ángulo industrial es nuevo" },
    { cls:"chip-vpwarn", text:"⚠️ VP: 'Trump rompe OTAN' 6 mayo · ángulo diferente" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_expansion.png?width=800",
  bannerAlt: "Expansión OTAN",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_expansion.png?width=800",
  tesis: "EEUU no se va por castigo. Se va porque decidió que China es el enemigo real. Pero Europa no puede reemplazarlo: no fabrica munición suficiente, no tiene drones propios, no tiene proyección autónoma. El problema no es presupuestario (Alemania sube al 3%), es industrial. Europa gasta más pero produce menos.",
  fields: [
    { label: "📰 La noticia", value: "Plan acelerado de retirada en cumbre OTAN 18 junio (Welt am Sonntag). 5.000 tropas de Alemania. Trump: 'cortaremos mucho más'. España e Italia posibles siguientes. Recortes en cazas, buques, drones. <a href='https://www.defensenews.com/global/europe/2026/05/26/report-us-to-cut-strategic-bombers-and-warships-available-to-nato-in-a-crisis/'>Defense News</a>" },
    { label: "🔍 Segunda derivada", value: "Europa no está lista para defenderse sola. No es cuestión de dinero — es de capacidad industrial. Europa no tiene fábricas de munición a escala, depende de drones americanos, y no tiene cadena de mando unificada." },
    { label: "❓ Gran pregunta", value: "¿Puede Europa defenderse sola — o el fin de la primacía americana la deja desnuda ante Rusia?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó 'Trump rompe la OTAN' el 6 mayo (203K v). Ángulo diferente: ese era político, este es industrial/capacidad real. Los recortes específicos de activos son nuevos.</span>" }
  ],
  sources: [
    { headline: "Germany says U.S. troop withdrawal 'anticipated'", medium: "NPR", date: "2 MAY 2026", url: "https://www.npr.org/2026/05/02/nx-s1-5808891/europe-allies-germany-troop-withdrawal-us", desc: "Reacción de Alemania y posibles siguientes países" },
    { headline: "US to cut strategic bombers and warships available to NATO", medium: "Defense News", date: "26 MAY 2026", url: "https://www.defensenews.com/global/europe/2026/05/26/report-us-to-cut-strategic-bombers-and-warships-available-to-nato-in-a-crisis/", desc: "Recortes específicos de capacidades" },
    { headline: "The U.S. Military Drawdown in Europe Has Only Just Begun", medium: "Time", date: "3 MAY 2026", url: "https://time.com/article/2026/05/03/us-withdrawal-germany-nato-spain/", desc: "Contexto estratégico de la retirada" }
  ]
},

/* ── P6: ETIOPÍA ── */
{
  id: "p6",
  golden: false,
  number: "PROPUESTA #6",
  tags: [{ cls:"tag-yellow", text:"🟡 ALTO" }, { cls:"tag-blue", text:"🌍 ÁFRICA" }],
  flag: "et",
  title: "Etiopía: cómo un Nobel de la Paz construyó un régimen autocrático — y el mundo miró para otro lado",
  potCls: "pot-high", potText: "🟡 ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 TIMING PERFECTO · vota HOY" },
    { cls:"chip-gfull", text:"🟢 GAP TOTAL EN ESPAÑOL" },
    { cls:"chip-vpok",  text:"🟢 VP: cubrió Etiopía tangencialmente, nunca en profundidad" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ethiopia.svg?width=800",
  bannerAlt: "Bandera de Etiopía",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ethiopia.svg?width=800",
  tesis: "Abiy Ahmed ganó el Nobel de la Paz en 2019 por acabar con la guerra con Eritrea. Después lanzó una guerra civil que mató a cientos de miles. Hoy celebra elecciones sin oposición real y planea reformar la constitución para perpetuarse. Es la historia de cómo un Nobel construyó una autocracia — en el segundo país más poblado de África, que controla las nacientes del Nilo.",
  fields: [
    { label: "📰 La noticia", value: "Elecciones HOY 1 junio. PP sin oposición en 64/547 distritos. En 2021 ganó 96%. Regiones enteras no votan por violencia. Planes de reforma constitucional para sistema presidencial. <a href='https://www.cnn.com/2026/05/31/africa/ethiopia-election-abiy-division-intl'>CNN</a> · <a href='https://www.aljazeera.com/news/2026/5/29/ethiopia-to-vote-on-june-1-as-abiys-ruling-party-eyes-landslide'>Al Jazeera</a>" },
    { label: "🔍 Segunda derivada", value: "Un Abiy con poderes presidenciales plenos cambia el Cuerno de África: Eritrea, Somalia, Sudán, Djibouti orbitan Addis Abeba. Y Etiopía controla el Nilo Azul (GERD) — confrontación directa con Egipto y 100M de personas." },
    { label: "❓ Gran pregunta", value: "¿Cómo un Nobel de la Paz se convirtió en el nuevo autócrata de África — y por qué nadie dice nada?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ VP cubrió Etiopía tangencialmente (Eritrea, Cuerno de África). Un vídeo centrado en 'Nobel → autócrata' sería nuevo. País 'sleeper' con potencial de sorpresa.</span>" }
  ],
  sources: [
    { headline: "Ethiopia's PM won a Nobel Peace Prize, stoked a civil war — and is set for re-election", medium: "CNN", date: "31 MAY 2026", url: "https://www.cnn.com/2026/05/31/africa/ethiopia-election-abiy-division-intl", desc: "La contradicción Nobel/guerra civil" },
    { headline: "Ethiopia to vote on June 1 as Abiy's ruling party eyes landslide", medium: "Al Jazeera", date: "29 MAY 2026", url: "https://www.aljazeera.com/news/2026/5/29/ethiopia-to-vote-on-june-1-as-abiys-ruling-party-eyes-landslide", desc: "Datos electorales y falta de competencia" },
    { headline: "Ethiopia Is About to Hold Another Sham Election", medium: "Journal of Democracy", date: "MAY 2026", url: "https://www.journalofdemocracy.org/online-exclusive/ethiopia-is-about-to-hold-another-sham-election/", desc: "Análisis académico de la erosión democrática" }
  ]
},

/* ── P7: VENEZUELA 6 MESES ── */
{
  id: "p7",
  golden: false,
  number: "PROPUESTA #7",
  tags: [{ cls:"tag-yellow", text:"🟡 ALTO" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  flag: "ve",
  title: "Venezuela 6 meses sin Maduro: la reconstrucción petrolera más difícil del hemisferio",
  potCls: "pot-high", potText: "🟡 ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 AUDIENCIA VP · Venezuela = eje del canal" },
    { cls:"chip-gpart", text:"🟡 Gap: nadie hace el balance a 6 meses" },
    { cls:"chip-vpwarn", text:"⚠️ VP: 12+ vídeos sobre Venezuela — necesita ángulo fresco" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Venezuela_in_South_America.svg?width=800",
  bannerAlt: "Venezuela en Sudamérica",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Venezuela_in_South_America.svg?width=800",
  tesis: "Hace 6 meses EEUU sacó a Maduro. Trump prometió reconstruir la industria petrolera. La realidad: Venezuela produce menos de un tercio de lo que producía hace 25 años. La reconstrucción llevará una década. Paradoja: con Ormuz cerrado, el mundo necesita desesperadamente el petróleo venezolano, pero Venezuela no puede producirlo.",
  fields: [
    { label: "📰 La noticia", value: "A 6 meses de la extracción de Maduro (3 ene 2026): producción 934K bbl/día vs 3M+ en los 90. Extra a corto plazo: solo 250-300K bbl/día. Reconstrucción: 'trabajo de una década'. <a href='https://www.americasquarterly.org/article/venezuela-the-post-maduro-oil-gas-and-mining-outlook/'>AQ</a> · <a href='https://www.atlanticcouncil.org/dispatches/what-it-takes-to-revive-venezuelas-oil-and-gas-industry/'>Atlantic Council</a>" },
    { label: "🔍 Segunda derivada", value: "Maduro destruyó algo que tardará una generación en reconstruir. No es solo perforar: necesitas puertos, refinerías, electricidad, químicos, logística — y la élite técnica vive en Miami, Madrid y Bogotá." },
    { label: "❓ Gran pregunta", value: "¿Puede EEUU reconstruir la industria petrolera de Venezuela — o la destrucción de 20 años de chavismo es irreparable a corto plazo?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó 12+ vídeos sobre Venezuela/Maduro. El balance a 6 meses con ángulo 'reconstrucción imposible' sería nuevo pero con riesgo de saturación.</span>" }
  ],
  sources: [
    { headline: "Venezuela: The Post-Maduro Oil, Gas and Mining Outlook", medium: "Americas Quarterly", date: "2026", url: "https://www.americasquarterly.org/article/venezuela-the-post-maduro-oil-gas-and-mining-outlook/", desc: "Panorama industrial completo post-Maduro" },
    { headline: "What it takes to revive Venezuela's oil and gas industry", medium: "Atlantic Council", date: "2026", url: "https://www.atlanticcouncil.org/dispatches/what-it-takes-to-revive-venezuelas-oil-and-gas-industry/", desc: "Requisitos técnicos y financieros de la reconstrucción" },
    { headline: "Assessing Venezuela's Future After Maduro's Capture", medium: "CFR", date: "2026", url: "https://www.cfr.org/expert-brief/assessing-venezuelas-future-after-nicolas-maduros-bold-capture", desc: "Análisis estratégico del CFR sobre Venezuela post-Maduro" }
  ]
}

], // end proposals

/* ════════════════════════════════════════════════════════════
   RANKING TABLE
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Israel / Beaufort", subtema:"Zona de seguridad · Paradoja 1982", viral:95, depth:95, timing:99, fit:95, verdCls:"verd-y", verdText:"✅ PRIORITARIO" },
  { tema:"Europa / GNL ruso Yamal", subtema:"Paradoja energética · Ormuz→Rusia", viral:85, depth:95, timing:92, fit:95, verdCls:"verd-y", verdText:"✅ PRIORITARIO" },
  { tema:"Colombia", subtema:"De la Espriella 43.7% · Trump latam", viral:98, depth:82, timing:99, fit:95, verdCls:"verd-y", verdText:"✅ HACER" },
  { tema:"Op. Southern Spear", subtema:"200+ muertos sin pruebas · Exclusiva", viral:80, depth:92, timing:85, fit:92, verdCls:"verd-y", verdText:"✅ HACER" },
  { tema:"EEUU abandona Europa", subtema:"OTAN 18 jun · Vacío industrial", viral:82, depth:90, timing:88, fit:78, verdCls:"verd-w", verdText:"👁️ EVALUAR" },
  { tema:"Etiopía / Abiy Nobel", subtema:"Elecciones hoy · Autocracia", viral:65, depth:90, timing:99, fit:78, verdCls:"verd-w", verdText:"👁️ EVALUAR" },
  { tema:"Venezuela 6 meses", subtema:"Reconstrucción imposible", viral:70, depth:88, timing:75, fit:85, verdCls:"verd-w", verdText:"👁️ EVALUAR" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR — temas emergentes
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "🇹🇼 TAIWÁN — China practica bloqueo + Trump duda sobre armas",
    body: "China multiplica ejercicios de bloqueo naval. Trump dice 'quizás sí, quizás no' sobre $14B en armas. Si EEUU deja de vender armas a Taiwán, sería el mayor cambio de política en el estrecho desde 1979. Si Ormuz está cerrado y Taiwán se bloquea: 20% petróleo + 90% chips = colapso global.",
    trigger: "Decisión formal de Trump sobre armas. O ejercicio chino que cruce línea roja.",
    sourceText: "CNBC: Trump steers away from Taiwan",
    sourceUrl: "https://www.cnbc.com/2026/05/16/trumps-meeting-with-chinas-xi-steers-the-us-away-from-taiwan-again.html"
  },
  {
    title: "🌍 SAHEL — Yihadistas se pelean entre ellos + temporada de hambruna",
    body: "JNIM y Estado Islámico del Sahel chocaron por primera vez en Níger. 52.8M en crisis alimentaria jun-ago. Mayor ataque coordinado en 14 años en Mali. Las juntas que echaron a Francia fracasan.",
    trigger: "Escalada inter-yihadista o caída de otra ciudad en Mali.",
    sourceText: "FAO: Sahel food crisis June-August 2026",
    sourceUrl: "https://www.fao.org/africa/news-stories/news-detail/west-africa-and-the-sahel--nearly-52.8-million-people-could-face-acute-food-insecurity-during-the-2026-lean-season-(june-august)/en"
  },
  {
    title: "🇺🇸 NEWARK/ICE — La guerra interna por la inmigración",
    body: "9 días de protestas, violencia policial, toque de queda, policía estatal. DHS amenazó con cerrar aeropuerto de Newark. Si se extiende a otras ciudades, es vídeo sobre la fractura cívica americana.",
    trigger: "Extensión a otras ciudades. DHS cumple amenaza sobre aeropuerto.",
    sourceText: "NBC News: Newark ICE facility",
    sourceUrl: "https://www.nbcnews.com/news/us-news/nj-establishes-protected-zone-ice-facility-several-protesters-are-arre-rcna347569"
  },
  {
    title: "⚖️ SUPREMO EEUU vs ARANCELES — Nueva base legal de la guerra comercial",
    body: "El Supremo anuló IEEPA para aranceles en febrero. Trump busca mecanismos alternativos. El acuerdo China 30% con pausa 60 días es temporal. La base jurídica de la guerra comercial cambió.",
    trigger: "Nuevo mecanismo legal o desafío judicial a aranceles existentes.",
    sourceText: "Tax Foundation: Tariff Tracker 2026",
    sourceUrl: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/"
  },
  {
    title: "⚓ ORMUZ — Misión naval internacional liderada por UK",
    body: "UK lidera coalición de 50 países para reabrir Ormuz. Despliegue de drones, cazas y buque. Baker Hughes: no antes de H2 2026. Si empiezan convoyes escoltados o Irán responde, hay vídeo.",
    trigger: "Inicio de convoyes escoltados. O respuesta militar iraní.",
    sourceText: "Al Jazeera: When will Hormuz reopen?",
    sourceUrl: "https://www.aljazeera.com/features/2026/4/28/when-will-strait-of-hormuz-be-safe-for-commercial-shipping-again"
  },
  {
    title: "🇻🇪 VENEZUELA — ¿Quién manda realmente 6 meses después?",
    body: "Transición política opaca. Empresas llegan pero producción apenas sube. Diáspora no vuelve. Instituciones rotas. La lucha de poder invisible entre facciones post-chavistas no se cuenta.",
    trigger: "Crisis política interna o primeros datos oficiales de producción post-transición.",
    sourceText: "CFR: Assessing Venezuela's Future",
    sourceUrl: "https://www.cfr.org/expert-brief/assessing-venezuelas-future-after-nicolas-maduros-bold-capture"
  },
  {
    title: "🇳🇬 NIGERIA — Bombardeo militar mata 100+ civiles en mercado",
    body: "Fuerza aérea nigeriana atacó un mercado el 12 mayo, matando 100+ civiles (Amnistía). Nigeria lleva años bombardeando a sus propios ciudadanos 'por error'.",
    trigger: "Informe completo de Amnistía. Reacción oficial del gobierno.",
    sourceText: "Amnesty International",
    sourceUrl: "https://www.amnesty.org"
  }
]

}; // end VP_DATA
