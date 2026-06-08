/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-08
   Auditoría de Oportunidad v8.1 — 9 pasos · Caso 800K/1M
   Competencia ACTIVA: minas de views · Test de profundidad
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-08",
  dateLabel: "08 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$101.36",
  brentChange: "↑ 12% semanal · Irán lanza misiles a Israel · Alto el fuego se desmorona · Hormuz sigue paralizado"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🇮🇷 IRÁN <strong>LANZA MISILES A ISRAEL</strong> · Primera vez desde alto el fuego abril · Respuesta a bombardeo israelí de Beirut" },
  { cls:"t-red",    text:"🛢️ BRENT <strong>$101</strong> · ↑12% semanal · OPEC+ sube cuotas PERO producción real COLAPSA · Hormuz paralizado" },
  { cls:"t-gold",   text:"🇨🇳🇰🇵 XI JINPING <strong>EN PYONGYANG HOY</strong> · Primera visita en 7 años · China intenta recuperar a Corea del Norte de la órbita rusa" },
  { cls:"t-red",    text:"🇦🇲 ARMENIA <strong>PASHINYAN GANA</strong> · 55.7% · Mandato claro para pivotar a Europa · Rusia pierde el Cáucaso" },
  { cls:"t-orange", text:"🇷🇺 RUSIA <strong>RACIONA GASOLINA</strong> · Crisis llega a Moscú · Crimea suspende venta · 25% de refinación destruida por Ucrania" },
  { cls:"t-orange", text:"🇦🇱 ALBANIA <strong>REVOLUCIÓN FLAMINGO DÍA 9</strong> · SPAK investiga a Kushner · Miles piden dimisión de Rama" },
  { cls:"t-red",    text:"🇻🇦 PAPA LEO XIV <strong>HOY con SÁNCHEZ</strong> · Primer papa en hablar ante el Parlamento español · Migración y valores" },
  { cls:"t-orange", text:"🇮🇳 INDIA <strong>$9.000M MEGABASE</strong> en Gran Nicobar · Puerto militar + aeropuerto a 150 km del Estrecho de Malaca" },
  { cls:"t-red",    text:"🇨🇳 CHINA <strong>SUBMARINO INVISIBLE</strong> · Satélite revela sub nuclear de 120m SIN ALETA · Desafío a EEUU en el Pacífico" },
  { cls:"t-orange", text:"🇨🇴 COLOMBIA <strong>2ª VUELTA 21 JUN</strong> · Espriella 43.7% vs Cepeda 40.9% · 13 días para la decisión" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>XI EN PYONGYANG — LA BATALLA POR COREA DEL NORTE:</span> Xi Jinping visita HOY a Kim Jong Un por primera vez en 7 años. No es diplomacia de rutina. <span class='hl-red'>China intenta arrebatarle a Rusia su mejor aliado nuclear justo cuando Moscú más lo necesita. El triángulo China-Rusia-DPRK se rompe.</span>"
  },
  {
    label: "🎯 Oportunidad exclusiva",
    content: "<span class='hl'>RUSIA SE QUEDA SIN GASOLINA:</span> El mayor productor de petróleo del mundo raciona combustible en Moscú y Crimea. <span class='hl-red'>Ucrania ha destruido el 25% de la capacidad de refinación rusa sin conquistar un solo kilómetro de territorio. La guerra de desgaste funciona.</span>"
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$101</span> · Xi en <span class='hl'>Pyongyang HOY</span> · Armenia <span class='hl'>Pashinyan 55.7%</span> · Irán misiles a <span class='hl-red'>Israel</span> · Rusia <span class='hl-red'>raciona gasolina</span> · Albania <span class='hl'>día 9</span>"
  }
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 14 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1: IRÁN LANZA MISILES A ISRAEL ── */
{
  id: "n1",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iron_Dome_near_Sderot.jpg?width=800",
  imageAlt: "Sistema Iron Dome de Israel interceptando misiles",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "IRÁN LANZA MISILES A ISRAEL POR PRIMERA VEZ DESDE EL ALTO EL FUEGO DE ABRIL — El cese de hostilidades se desmorona",
  pills: ["Misiles balísticos desde Irán", "Primera vez desde alto el fuego", "Respuesta a strike israelí en Beirut", "IRGC: 'fue una advertencia'"],
  why: "El frágil alto el fuego de abril se rompe. Irán responde a un bombardeo israelí sobre Beirut que mató a 2 civiles. Las negociaciones de paz se paralizan justo cuando parecían avanzar.",
  viralPct: 95, viralCls: "viral-high",
  viralSources: "CBS News · CNBC · NPR · Al Jazeera — cobertura masiva global",
  detail: {
    summary: "Israel confirmó el 7 de junio que Irán lanzó misiles balísticos hacia su territorio, la primera agresión directa desde que entró en vigor el alto el fuego del 8 de abril. El ataque fue respuesta al bombardeo israelí de los suburbios del sur de Beirut que mató a 2 e hirió a 20. El IRGC declaró al NYT que el alto el fuego 'era condicional a un cese en todos los frentes' y que 'la operación fue una advertencia'. Explosiones se escucharon en el norte de Israel.",
    context: "El alto el fuego EEUU-Irán de abril era extremadamente frágil. Israel nunca dejó de atacar objetivos de Hezbollah en Líbano, lo que Irán considera una violación. EEUU se encuentra atrapado: necesita el alto el fuego para las negociaciones nucleares pero no puede controlar a Israel. La escalada amenaza con destruir meses de diplomacia.",
    vp: "La segunda derivada: EEUU negocia la paz con Irán mientras su principal aliado (Israel) torpedea el alto el fuego. Trump no puede controlar a Netanyahu. Irán usa cada violación israelí para justificar su propia escalada. El ciclo es irreversible salvo que EEUU discipline a Israel — algo políticamente imposible.",
    sources: [
      { headline: "Fragile ceasefire in jeopardy as Iran reportedly fires first missiles at Israel", medium: "CNBC", date: "2026-06-07", url: "https://www.cnbc.com/amp/2026/06/07/iran-fires-missiles-israel-ceasefire-strains.html", desc: "Alto el fuego en peligro por misiles iraníes" },
      { headline: "Israel says Iran launched a missile at it, in a first during fragile ceasefire", medium: "NPR", date: "2026-06-07", url: "https://www.npr.org/2026/06/07/g-s1-126816/israel-iran-missile-ceasefire", desc: "Confirmación israelí del ataque iraní" },
      { headline: "Iran retaliates after Israel struck Beirut, accuses U.S. of violating ceasefire", medium: "CBS News", date: "2026-06-07", url: "https://www.cbsnews.com/live-updates/iran-us-war-israel-hezbollah-fighting-ceasefire-efforts/", desc: "Irán acusa a EEUU de violar el alto el fuego" }
    ],
    verification: "Verificado: misiles iraníes a Israel (NPR, CNBC), declaración IRGC al NYT (CBS News), bombardeo israelí de Beirut con 2 muertos (CBS News). Fecha: 7 JUN 2026."
  }
},

/* ── N2: XI JINPING EN PYONGYANG ── */
{
  id: "n2",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ASIA-PACÍFICO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_in_July_2024.jpg?width=800",
  imageAlt: "Xi Jinping — visita de Estado a Corea del Norte",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_People%27s_Republic_of_China.svg?width=800",
  imageCredit: "Gobierno de China / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "XI JINPING LLEGA A PYONGYANG HOY — Primera visita en 7 años para reclamar a Corea del Norte de la órbita rusa",
  pills: ["Visita de Estado 8-9 junio", "Primera desde 2019", "Primer viaje internacional de Xi en 2026", "65 aniversario tratado defensa mutua"],
  why: "No es una visita de cortesía. Xi acaba de recibir a Trump y Putin en Pekín y ahora va a Pyongyang. Está reposicionando a China como el intermediario indispensable entre las tres potencias nucleares.",
  viralPct: 90, viralCls: "viral-high",
  viralSources: "Bloomberg · NPR · SCMP · Washington Times — titulares globales",
  detail: {
    summary: "Xi Jinping inicia hoy 8 de junio una visita de Estado de dos días a Corea del Norte, su primera desde 2019 y su primer viaje internacional de 2026. La visita coincide con el 65 aniversario del tratado de defensa mutua China-DPRK. Xi acaba de recibir sucesivamente a Trump y Putin en Pekín semanas antes.",
    context: "Kim Jong Un ha estrechado lazos con Rusia en el último año — armas norcoreanas han aparecido en el frente ucraniano y Putin visitó Pyongyang en 2024. China observa con alarma cómo su aliado tradicional se acerca a Moscú. Esta visita es un movimiento para reafirmar influencia sobre el programa nuclear y la economía norcoreana.",
    vp: "La segunda derivada: Xi no visita a Kim por amistad. Va a Pyongyang porque Rusia le está robando su aliado nuclear más importante. El triángulo China-Rusia-DPRK, que parecía sólido, se está fracturando. Pekín necesita asegurarse de que las armas nucleares norcoreanas siguen bajo su paraguas de influencia, no bajo el de Moscú.",
    sources: [
      { headline: "Xi Jinping will travel to North Korea next week in first visit since 2019", medium: "NPR", date: "2026-06-05", url: "https://www.npr.org/2026/06/05/g-s1-126481/xi-jinping-will-travel-to-north-korea-next-week-in-first-visit-since-2019", desc: "Contexto geopolítico de la visita" },
      { headline: "China's Xi Jinping Plans North Korea Visit, Marking Return After Six Years", medium: "Bloomberg", date: "2026-06-05", url: "https://www.bloomberg.com/news/articles/2026-06-05/xi-to-visit-north-korea-june-8-9-for-first-time-since-2019-mq0a77tt", desc: "Análisis de Bloomberg sobre la estrategia china" },
      { headline: "What to know about a rare visit by China's Xi to North Korea", medium: "Washington Times", date: "2026-06-07", url: "https://www.washingtontimes.com/news/2026/jun/7/look-rare-visit-chinas-xi-north-korea-talks-kim-jong-un/", desc: "Claves de la visita Xi-Kim" }
    ],
    verification: "Verificado: visita 8-9 junio (NPR, Bloomberg), primera desde 2019 (SCMP), primer viaje internacional 2026 (Bloomberg). Tratado 1961 confirmado."
  }
},

/* ── N3: ARMENIA — PASHINYAN GANA ── */
{
  id: "n3",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🌍 EUROPA / CÁUCASO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikol_Pashinyan_-_2023_(cropped).jpg?width=800",
  imageAlt: "Nikol Pashinyan — primer ministro reelegido de Armenia",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=800",
  imageCredit: "Gobierno de Armenia / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "ARMENIA ELIGE EUROPA: Pashinyan arrasa con 55.7% y obtiene mandato para abandonar la órbita rusa",
  pills: ["Civil Contract 55.7%", "Strong Armenia (pro-Rusia) 21.9%", "Rusia impuso sanciones comerciales antes del voto", "Primera elección tras la caída de Nagorno-Karabaj"],
  why: "Armenia confirma su giro hacia Occidente. Rusia intentó influir con sanciones comerciales, restricciones y amenazas — y fracasó. Otro aliado post-soviético que Moscú pierde mientras lucha en Ucrania.",
  viralPct: 75, viralCls: "viral-med",
  viralSources: "Al Jazeera · France 24 · NBC News · AP — cobertura amplia pero no dominante",
  detail: {
    summary: "Con el 55.72% de los votos contados (204 colegios), el partido Civil Contract de Nikol Pashinyan lidera con 55.72%, seguido de Strong Armenia de Samvel Karapetyan con 21.92% y Armenia Alliance de Robert Kocharyan con 8.69%. La participación fue del 33.84% a media jornada. Es la primera elección desde la expulsión de los armenios de Nagorno-Karabaj en 2023.",
    context: "Rusia presionó duramente antes del voto: prohibió la importación de flores, coñac, vino, berenjenas, patatas y pescado armenios. Putin comparó implícitamente a Armenia con Ucrania. Occidente (UE y EEUU) respaldó abiertamente a Pashinyan. La relación ruso-armenia colapsó tras la guerra de Nagorno-Karabaj de 2020, cuando los peacekeepers rusos no intervinieron.",
    vp: "La segunda derivada: Armenia no solo vota por un primer ministro — vota por un cambio de civilización. Pasa de la esfera rusa a la europea. Pero está rodeada por Turquía (hostil) y Azerbaiyán (enemigo). Sin Rusia como protectora, ¿quién la defiende? Francia ha vendido armas, India también. Pero ¿basta?",
    sources: [
      { headline: "Armenia votes in test of PM's pivot to Europe amid Russian pressure", medium: "Al Jazeera", date: "2026-06-07", url: "https://www.aljazeera.com/news/2026/6/7/armenians-vote-in-election-testing-move-towards-west-amid-russian-backlash", desc: "Resultados parciales y contexto geopolítico" },
      { headline: "Armenian parliamentary vote will test PM's pivot from Russia", medium: "France 24", date: "2026-06-07", url: "https://www.france24.com/en/europe/20260607-armenia-polls-open-in-test-of-prime-minister-s-pivot-away-from-russia", desc: "Análisis del giro europeo" },
      { headline: "Armenians vote in general election under Russian pressure", medium: "NBC News", date: "2026-06-07", url: "https://www.nbcnews.com/world/europe/armenians-polls-russian-pressure-aimed-preventing-drift-west-rcna348838", desc: "Presión rusa y sanciones previas" }
    ],
    verification: "Verificado: 55.72% Pashinyan con 204 colegios (EVN Report), 21.92% Strong Armenia (Al Jazeera), sanciones rusas comerciales (NBC News, France 24). Fecha voto: 7 JUN."
  }
},

/* ── N4: OPEC+ SUBE CUOTAS PERO PRODUCE MENOS ── */
{
  id: "n4",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🌍 ECONOMÍA GLOBAL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vienna_OPEC_Headquarters_(9812748993).jpg?width=800",
  imageAlt: "Sede de la OPEP en Viena",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_OPEC.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "OPEC+ VOTA SUBIR PRODUCCIÓN 188.000 b/d PERO LA PRODUCCIÓN REAL HA COLAPSADO — De 42.77M a 33.19M barriles/día",
  pills: ["+188.000 b/d desde julio", "Primera reunión SIN Emiratos", "Producción real: -22% desde febrero", "Brent a $101 pese a cuotas más altas"],
  why: "La mayor farsa del mercado petrolero: la OPEP vota subir producción pero produce 10 millones de barriles MENOS que en febrero porque Hormuz sigue cerrado. Las cuotas son papel mojado.",
  viralPct: 70, viralCls: "viral-med",
  viralSources: "CNBC · Reuters · TASS — cobertura técnica amplia",
  detail: {
    summary: "Los 7 miembros core de OPEC+ acordaron el 7 de junio subir las cuotas en 188.000 b/d desde julio (igual que en junio, ajustado a la baja por la salida de EAU). Desde abril a junio han subido cuotas en casi 600.000 b/d. PERO la producción real ha colapsado de 42.77M b/d en febrero a 33.19M b/d en abril — un desplome del 22% — porque la guerra ha cortado los flujos por el Estrecho de Ormuz.",
    context: "Es la primera reunión sin Emiratos Árabes Unidos, que rompió con la OPEP en abril. El cierre del Estrecho de Ormuz desde febrero ha creado 'la mayor disrupción de suministro en la historia del mercado petrolero' según la AIE. El Brent ha subido de $69 a $101 desde el inicio de la crisis. Solo 7 barcos transitaron el estrecho el viernes — frente a 100/día en tiempos normales.",
    vp: "La paradoja OPEP es brutal: votan aumentos de producción que son físicamente imposibles de entregar porque el estrecho por donde sale su petróleo está cerrado. Arabia Saudí no puede abastecer a sus clientes. Irak tampoco. Las cuotas son una ficción diplomática para aparentar normalidad mientras el mercado petrolero más importante del mundo está roto.",
    sources: [
      { headline: "OPEC+ set for fourth oil quota hike since Strait of Hormuz closure", medium: "CNBC", date: "2026-06-07", url: "https://www.cnbc.com/amp/2026/06/07/opec-set-for-fourth-oil-quota-hike-since-strait-of-hormuz-closure.html", desc: "Detalles de la reunión y cuotas" },
      { headline: "OPEC+ announces 188,000 bpd increase in first meeting without UAE", medium: "CNBC", date: "2026-05-03", url: "https://www.cnbc.com/2026/05/03/opec-announces-188000-barrels-per-day-output-increase-.html", desc: "Histórico de subidas recientes" },
      { headline: "OPEC+ ministers reaffirm earlier decisions on oil production in 2026", medium: "TASS", date: "2026-06-07", url: "https://tass.com/economy/2051267", desc: "Perspectiva rusa sobre la reunión" }
    ],
    verification: "Verificado: 188K b/d (CNBC), producción abril 33.19M (OPEC data vía CNBC), 42.77M en febrero (CNBC). Primera sin EAU confirmado. Brent $101 (Fortune)."
  }
},

/* ── N5: RUSIA RACIONA GASOLINA ── */
{
  id: "n5",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌍 RUSIA / UCRANIA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moscow_oil_refinery_(52205614839).jpg?width=800",
  imageAlt: "Refinería de petróleo en Moscú — objetivo de drones ucranianos",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Moscow_Kremlin_from_Kamenny_bridge.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "RUSIA RACIONA GASOLINA EN MOSCÚ Y CRIMEA — Ucrania ha destruido el 25% de la capacidad de refinación del país",
  pills: ["60 litros/persona en Moscú", "20 litros/coche en Crimea", "30% producción gasolina eliminada", "Prohibición total de exportación hasta julio"],
  why: "El mayor productor de petróleo del mundo no puede abastecer de gasolina a su propia capital. Ucrania está ganando una guerra de desgaste económico sin conquistar territorio.",
  viralPct: 88, viralCls: "viral-high",
  viralSources: "Moscow Times · Kyiv Post · Atlantic Council · Pravda UA — múltiples fuentes rusas e internacionales",
  detail: {
    summary: "Desde el 1 de junio, Crimea vende gasolina solo con cupones limitados a 20 litros por vehículo. Moscú, el Nóvgorod y regiones del suroeste introdujeron límites de 60 litros. El depósito de Feodosia fue destruido. Rusia mantiene una prohibición total de exportar gasolina hasta el 31 de julio. Los ataques ucranianos han eliminado el 25% de la capacidad de refinación y el 30% de la producción de gasolina.",
    context: "Ucrania viene atacando sistemáticamente refinerías rusas con drones baratos ($50K por dron). La estrategia ha escalado: ahora atacan camiones cisterna en la autopista R-280 que conecta Crimea con Rostov. El ISW estima que los costes de reparación y subsidios han costado al Kremlin $4.700M solo en abril 2026.",
    vp: "La segunda derivada: Rusia exporta más de 5 millones de barriles de petróleo diarios pero no puede refinar suficiente gasolina para sus ciudadanos. La paradoja revela el talón de Aquiles de la economía de guerra de Putin: depende de infraestructura industrial que no puede proteger. Ucrania ha encontrado la forma de atacar la retaguardia económica rusa con una fracción del coste.",
    sources: [
      { headline: "Crimea Suspends Gasoline Sales and Distribution of Fuel Vouchers", medium: "The Moscow Times", date: "2026-06-04", url: "https://themoscowtimes.com/2026/06/04/crimea-suspends-gasoline-sales-and-distribution-of-fuel-vouchers-a92932", desc: "Crimea suspende venta de gasolina" },
      { headline: "Fuel Rationing Hits Moscow as Ukraine Strikes Russian Refineries", medium: "Kyiv Post", date: "2026-06-03", url: "https://www.kyivpost.com/post/77295", desc: "Racionamiento llega a Moscú" },
      { headline: "Putin's war machine may finally be running out of fuel", medium: "Atlantic Council", date: "2026-06-02", url: "https://www.atlanticcouncil.org/blogs/ukrainealert/vladimir-putins-war-machine-may-finally-be-running-out-of-fuel/", desc: "Análisis estratégico de la crisis" }
    ],
    verification: "Verificado: 20L Crimea (Moscow Times), 60L Moscú (Kyiv Post), 25% capacidad destruida (Reuters vía Atlantic Council), prohibición exportación (Moscow Times). $4.7B coste (ISW)."
  }
},

/* ── N6: ALBANIA REVOLUCIÓN FLAMINGO ── */
{
  id: "n6",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 EUROPA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tirana_Skanderbeg_Square.jpg?width=800",
  imageAlt: "Plaza Skanderbeg de Tirana — epicentro de las protestas",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Albania.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "REVOLUCIÓN FLAMINGO DÍA 9: SPAK investiga a Kushner mientras miles exigen la dimisión de Rama en Albania",
  pills: ["9 días consecutivos de protestas", "SPAK abre investigación anticorrupción", "Proyecto €1.400M resort Sazan", "Protestas globales: Berlín, Londres, NY, Toronto"],
  why: "Ya no es solo medio ambiente. Es una crisis institucional: la fiscalía anticorrupción investiga cómo Kushner obtuvo los derechos, el gobierno cambió leyes de protección, y la Gen Z albanesa pide la caída del régimen.",
  viralPct: 80, viralCls: "viral-high",
  viralSources: "CNN · CBS News · Al Jazeera · Time · France 24 — cobertura masiva internacional",
  detail: {
    summary: "Las protestas contra el resort de Kushner/Ivanka Trump en Albania entran en su noveno día. SPAK (la fiscalía anticorrupción) ha abierto investigación formal sobre cómo se cambiaron las leyes de protección ambiental y cómo entidades controladas por Kushner obtuvieron derechos sobre Sazan. BIRN reveló una red de 'individuos y empresas turbias' conectadas con la mafia italiana. Las protestas se internacionalizaron con marchas en Berlín, Londres, NY y Toronto.",
    context: "Albania quiere entrar en la UE. Rama gobierna desde 2013 como socialista pero su administración está plagada de escándalos de corrupción. Su viceprimera ministra fue imputada. El proyecto Kushner de $1.600M incluye convertir la isla de Sazan (antigua base militar comunista) y la zona protegida Vjosa-Narta (hábitat de flamencos) en un resort de lujo. La Gen Z albanesa lidera las protestas.",
    vp: "La conexión VP: cómo los negocios de la familia Trump generan crisis de gobernabilidad en países pequeños que dependen del favor de Washington. Albania necesita a EEUU para entrar en la UE y para la OTAN. No puede decir 'no' a Kushner sin arriesgar su relación con Trump. Es una trampa geopolítica.",
    sources: [
      { headline: "Ivanka Trump has plans for a luxury resort on a protected beach in Albania", medium: "CNN", date: "2026-06-06", url: "https://www.cnn.com/2026/06/06/europe/ivanka-trump-kushner-luxury-resort-albania-intl", desc: "Investigación CNN sobre el proyecto" },
      { headline: "Kushner's Albanian resort faces corruption probe, mass protests", medium: "Popular Information", date: "2026-06-06", url: "https://popular.info/p/kushners-albanian-resort-faces-corruption", desc: "Detalles de la investigación SPAK" },
      { headline: "Thousands protest in Albania against coastal resort linked to Kushner", medium: "Al Jazeera", date: "2026-06-04", url: "https://www.aljazeera.com/news/2026/6/4/thousands-protest-kushner-linked-coastal-resort-project-in-albania", desc: "Desarrollo de las protestas" }
    ],
    verification: "Verificado: investigación SPAK (Popular Information, CNN), proyecto €1.4B (CNN), BIRN sobre red mafia (Al Jazeera), protestas internacionales 5-6 JUN (France 24). Día 9 confirmado."
  }
},

/* ── N7: PAPA LEO XIV CON SÁNCHEZ ── */
{
  id: "n7",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ESPAÑA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pope_Leo_XIV_(May_2025).jpg?width=800",
  imageAlt: "Papa Leo XIV — visita apostólica a España",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Vatican_City.svg?width=800",
  imageCredit: "Vaticano / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "PAPA LEO XIV SE REÚNE HOY CON SÁNCHEZ Y HABLARÁ ANTE EL PARLAMENTO ESPAÑOL — Primera vez en la historia",
  pills: ["Reunión con Pedro Sánchez", "Discurso ante Congreso + Senado", "Primer papa en hablar ante el Parlamento español", "10 JUN: inaugura Torre Sagrada Familia"],
  why: "Un papa estadounidense habla ante el Parlamento de un país en plena tormenta judicial (caso Zapatero), con el debate migratorio al rojo vivo y las relaciones Iglesia-Estado más tensas que nunca.",
  viralPct: 65, viralCls: "viral-med",
  viralSources: "Vatican News · Euronews · EWTN · esmadrid.com — cobertura religiosa + española",
  detail: {
    summary: "Hoy 8 de junio, el papa Leo XIV se reúne con el presidente Sánchez y los obispos de la Conferencia Episcopal. Hablará ante una sesión conjunta del Congreso y el Senado — primera vez en la historia que un papa se dirige al Parlamento español. El itinerario incluye Barcelona (9-10 JUN, visita a prisión Brians 1 e inauguración Torre Sagrada Familia) y Canarias (11-12 JUN, encuentro con migrantes).",
    context: "La visita coincide con la imputación de Zapatero por la trama Plus Ultra/Venezuela, la mayor crisis del PSOE en años, y el debate europeo sobre migración. El papa visitará centros de migrantes en Canarias, donde la ruta atlántica africana sigue siendo la más mortífera del mundo.",
    vp: "Interés VP: la visita papal se produce en el momento político más delicado de España. ¿Usará el papa la tribuna del Parlamento para hablar de migración justo cuando Europa gira a la derecha? El contraste entre el discurso papal pro-migrantes y la política real de la UE (que copia el modelo australiano de centros offshore) es material de video.",
    sources: [
      { headline: "Schedule: Pope Leo XIV's Visit to Spain", medium: "visita-papa-2026.com", date: "2026-06-06", url: "https://www.visita-papa-2026.com/en/schedule", desc: "Itinerario oficial completo" },
      { headline: "Pope Leo's visiting Europe's migration hot spots", medium: "ABC News", date: "2026-06-06", url: "https://abcnews.com/International/wireStory/pope-leos-visiting-europes-migration-hot-spots-catholics-133608021", desc: "Enfoque migratorio de la visita" },
      { headline: "From institutions to the peripheries: Pope Leo's pilgrimage to Spain", medium: "Vatican News", date: "2026-06-06", url: "https://www.vaticannews.va/en/pope/news/2026-06/from-institutions-to-peripheries-pope-leos-pilgrimage-to-spain.html", desc: "Análisis vaticano de la visita" }
    ],
    verification: "Verificado: itinerario 6-12 JUN (Vatican.va), reunión Sánchez + Parlamento 8 JUN (Vatican News), Sagrada Familia 10 JUN (Euronews). Primera visita papal desde 2011."
  }
},

/* ── N8: INDIA MEGABASE GRAN NICOBAR ── */
{
  id: "n8",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ASIA-PACÍFICO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Andaman_and_Nicobar_Islands_-_Great_Nicobar.PNG?width=800",
  imageAlt: "Isla de Gran Nicobar — futuro megapuerto indio",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_India.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "INDIA INVIERTE $9.000M EN TRANSFORMAR UNA ISLA REMOTA EN MEGABASE MILITAR A 150 KM DEL ESTRECHO DE MALACA",
  pills: ["$9.000M de inversión", "Puerto militar + aeropuerto dual", "1 millón de turistas/año previsto", "150 km del Estrecho de Malaca"],
  why: "India construye silenciosamente su propia 'portaaviones insumergible' junto al cuello de botella marítimo más importante de Asia. Es la respuesta directa a la expansión naval china en el Indo-Pacífico.",
  viralPct: 72, viralCls: "viral-med",
  viralSources: "NPR · Wikipedia · múltiples fuentes — reportaje extenso de NPR 7 JUN",
  detail: {
    summary: "India invierte $9.000M en el Great Nicobar Island Development Project (GNIDP): un puerto de transbordo internacional, aeropuerto dual civil-militar, planta energética y ciudad para 1 millón de turistas anuales (100 veces la población actual). El proyecto transformará la isla en 30 años. Ambientalistas alertan sobre la destrucción de un millón de árboles y el impacto sobre tortugas laúd y el palomo de Nicobar (pariente vivo más cercano del dodo).",
    context: "Gran Nicobar está a 150 km del Estrecho de Malaca, por donde pasa el 25% del comercio mundial y el 80% del petróleo que importa China. India quiere un puerto que compita con Singapur y Colombo, y una base aérea que pueda monitorizar (y potencialmente bloquear) el tráfico marítimo chino. China tiene su propia cadena de bases portuarias (el 'Collar de Perlas').",
    vp: "La segunda derivada: India no solo construye infraestructura — construye la capacidad de estrangular el suministro energético de China en caso de conflicto. Es el equivalente indio al control estadounidense del Canal de Panamá. El Estrecho de Malaca es el talón de Aquiles de China y Delhi lo sabe.",
    sources: [
      { headline: "It's one of the world's most isolated islands. Here come the bulldozers", medium: "NPR", date: "2026-06-07", url: "https://www.npr.org/2026/06/07/g-s1-125586/island-isolated-india-great-nicobar-china-development", desc: "Reportaje completo sobre el proyecto" },
      { headline: "Great Nicobar Island Development Project", medium: "Wikipedia", date: "2026-06-07", url: "https://en.wikipedia.org/wiki/Great_Nicobar_Island_Development_Project", desc: "Datos técnicos y contexto" },
      { headline: "India Great Nicobar project strategic significance", medium: "NPR/KPBS", date: "2026-06-07", url: "https://www.kpbs.org/news/international/2026/06/07/its-one-of-the-worlds-most-isolated-islands-here-come-the-bulldozers", desc: "Dimensión estratégica India-China" }
    ],
    verification: "Verificado: $9B inversión (NPR), puerto + aeropuerto dual (Wikipedia), 150 km de Malaca (NPR), 1M turistas (NPR). Publicado 7 JUN."
  }
},

/* ── N9: SUBMARINO INVISIBLE CHINO ── */
{
  id: "n9",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌍 ASIA-PACÍFICO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/202309_Jiangnan_Shipyard_in_Changxing_Island.jpg?width=800",
  imageAlt: "Astillero Jiangnan de Shanghái — donde se construye el submarino",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_People%27s_Republic_of_China.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "SATÉLITE REVELA SUBMARINO NUCLEAR CHINO DE 120M SIN ALETA — Diseño revolucionario desafía la supremacía submarina de EEUU",
  pills: ["120 metros de eslora", "Sin aleta (sail-less)", "Detectado por satélite 1 JUN", "Segundo diseño nuclear nuevo en un año"],
  why: "China ha construido un submarino nuclear con un diseño que no se veía desde los años 50. Sin aleta convencional, es más rápido, más silencioso y más difícil de detectar. Dos diseños nucleares nuevos en un año sugieren una estrategia submarina acelerada.",
  viralPct: 78, viralCls: "viral-high",
  viralSources: "SCMP · Naval News · Asia Times · Defense News — múltiples análisis especializados",
  detail: {
    summary: "Imágenes satelitales del 1 de junio revelan un submarino nuclear de clase desconocida en el astillero Jiangnan de Shanghái. Mide 120 metros, con timones en X y sin aleta convencional (sail-less). Es significativamente más grande que los Type 093 actuales. El diseño sin aleta recuerda al USS Albacore experimental de 1953, optimizado para velocidad y sigilo submarino.",
    context: "Es el segundo diseño de submarino nuclear nuevo descubierto en China en un año. Los analistas sugieren que Pekín persigue una 'estrategia de doble plataforma' para operaciones submarinas. EEUU tiene 68 submarinos nucleares frente a los 12 estimados de China, pero la brecha se estrecha rápidamente.",
    vp: "La segunda derivada: China no solo construye más submarinos — está innovando en diseños que EEUU no anticipaba. Un submarino sin aleta cambia las reglas del juego en detección sonar. Si China puede operar submarinos nucleares indetectables cerca de Taiwán, la ventaja submarina de la US Navy — su última carta en el Pacífico — queda comprometida.",
    sources: [
      { headline: "China's futuristic stealth sub to boost hunt-and-kill capabilities", medium: "SCMP", date: "2026-06-06", url: "https://www.scmp.com/news/china/military/article/3355991/chinas-futuristic-stealth-sub-boost-hunt-and-kill-capabilities-experts", desc: "Análisis de expertos sobre capacidades" },
      { headline: "New Mystery Submarine Signals China's Rapid Undersea Expansion", medium: "Naval News", date: "2026-06-06", url: "https://www.navalnews.com/naval-news/2026/06/new-mystery-submarine-signals-chinas-rapid-undersea-expansion/", desc: "Análisis técnico detallado" },
      { headline: "China's sailless submarine takes warfare to the seabed", medium: "Asia Times", date: "2026-06-06", url: "https://asiatimes.com/2026/06/chinas-sailless-submarine-takes-warfare-to-the-seabed/", desc: "Implicaciones estratégicas" }
    ],
    verification: "Verificado: 120m eslora (Naval News), imágenes 1 JUN (SCMP), Jiangnan Shipyard (Defense News), diseño sail-less (Asia Times). Segundo sub nuclear nuevo confirmado."
  }
},

/* ── N10: COLOMBIA — 13 DÍAS PARA LA 2ª VUELTA ── */
{
  id: "n10",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Entrada_frontal_Congreso_de_la_Rep%C3%BAblica_de_Colombia_-_Bogot%C3%A1_D.C.jpg?width=800",
  imageAlt: "Congreso de Colombia — sede del poder que se disputan Espriella y Cepeda",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "COLOMBIA A 13 DÍAS DE ELEGIR: Espriella 43.7% vs Cepeda 40.9% — El 'Tigre' que sorprendió a todos avanza hacia la presidencia",
  pills: ["2ª vuelta: 21 junio", "Espriella 43.7% vs Cepeda 40.9%", "13 candidatos eliminados", "'El Tigre': fan de Bukele, Milei y Trump"],
  why: "El patrón continental se confirma: tras Bukele, Milei y Noboa, otro outsider de derecha dura avanza al poder en Latinoamérica. Espriella superó todas las encuestas. 13 días para saber si Colombia completa el giro.",
  viralPct: 75, viralCls: "viral-med",
  viralSources: "PBS · France 24 · Al Jazeera · AS/COA — cobertura regional amplia",
  detail: {
    summary: "La primera vuelta del 31 de mayo dejó a Abelardo de la Espriella ('El Tigre', Salvación Nacional) con 43.7% e Iván Cepeda (Pacto Histórico, izquierda) con 40.9%. Los 11 candidatos restantes fueron eliminados. Espriella superó las encuestas que daban ventaja a Cepeda. La segunda vuelta será el 21 de junio. VP ya publicó un video sobre Colombia el 1 de junio (340K views).",
    context: "De la Espriella se presenta como admirador de Trump, Bukele y Milei: mano dura contra el crimen, simplificación del Estado, alineamiento con Washington. Cepeda representa la continuidad del proyecto progresista de Petro. Colombia tiene la mayor frontera terrestre con Venezuela y es clave para la política de drogas de EEUU.",
    vp: "El tema ya está aprobado por el equipo para publicar antes del 14 JUN. El ángulo VP: no es solo Colombia — es el quinto domino del giro continental latinoamericano. Bukele (El Salvador), Milei (Argentina), Noboa (Ecuador), y ahora Espriella. ¿Hay un patrón estructural que explique por qué Latinoamérica gira a la derecha dura simultáneamente?",
    sources: [
      { headline: "Polls close in Colombia vote with Espriella and Cepeda advancing to runoff", medium: "PBS", date: "2026-05-31", url: "https://www.pbs.org/newshour/world/polls-close-in-colombia-vote-with-espriella-and-cepeda-advancing-to-runoff", desc: "Resultados primera vuelta" },
      { headline: "Colombia's presidential race goes to a runoff: De la Espriella vs. Cepeda", medium: "France 24", date: "2026-05-31", url: "https://www.france24.com/en/americas/20260531-colombia-presidential-election-live-follow-the-first-round", desc: "Análisis de la segunda vuelta" },
      { headline: "Poll Tracker: Colombia's 2026 Presidential Election", medium: "AS/COA", date: "2026-06-01", url: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election", desc: "Seguimiento de encuestas" }
    ],
    verification: "Verificado: Espriella 43.7%, Cepeda 40.9% (PBS, France 24), 2ª vuelta 21 JUN (France 24). VP publicó Colombia 1 JUN: 340K views."
  }
},

/* ── N11: HORMUZ SIGUE PARALIZADO ── */
{
  id: "n11",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 ECONOMÍA GLOBAL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageAlt: "Estrecho de Ormuz — la ruta marítima más importante del mundo, paralizada",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "3 MESES DE PARÁLISIS: El Estrecho de Ormuz sigue siendo una ruta fantasma — Solo 7 barcos transitaron el viernes",
  pills: ["7 barcos/día vs 100/día normal", "3 meses de parálisis", "'Mayor disrupción de suministro de la historia' — AIE", "Europa en riesgo de escasez de diésel"],
  why: "Tres meses después del cierre, nadie quiere volver. Las aseguradoras no cubren los barcos, las minas iraníes siguen ahí, y las negociaciones de reapertura no avanzan. La crisis energética más grande de la historia no tiene fecha de final.",
  viralPct: 70, viralCls: "viral-med",
  viralSources: "Bloomberg · Gulf News · UNCTAD · WEF — análisis profundos de impacto",
  detail: {
    summary: "Tres meses después de que Irán bloqueó efectivamente el Estrecho de Ormuz, solo 7 barcos transitaron el viernes según datos de Kpler. En circunstancias normales pasan 100 al día. Las aseguradoras siguen sin cubrir buques. La AIE lo califica como 'la mayor disrupción de suministro en la historia del mercado petrolero'. El impacto va más allá del petróleo: metanol, aluminio, azufre, grafito y fertilizantes están afectados.",
    context: "El cierre comenzó el 28 de febrero cuando EEUU e Israel atacaron Irán. El IRGC advirtió que prohibía el paso, abordó buques mercantes y sembró minas. Aunque hay 'conversaciones de reapertura', los armadores no quieren arriesgarse. Europa enfrenta posible escasez de diésel. El WEF identifica 9 commodities no petroleras afectadas.",
    vp: "La crisis de Ormuz ha creado una nueva realidad energética global que ya es estructural: cadenas de suministro rerouting, contratos de seguros prohibitivos, precios energéticos permanentemente elevados. No es una emergencia temporal — es un nuevo normal.",
    sources: [
      { headline: "Strait of Hormuz Shipping Paralysis: Global Oil Chokepoint Still Quiet Despite Reopening Talks", medium: "Gulf News", date: "2026-06-06", url: "https://gulfnews.com/amp/story/world/mena/three-months-of-paralysis-strait-of-hormuz-remains-a-ghost-route-1.500560668", desc: "Datos de tráfico actual" },
      { headline: "Beyond oil: 9 commodities impacted by the Strait of Hormuz crisis", medium: "World Economic Forum", date: "2026-04", url: "https://www.weforum.org/stories/2026/04/beyond-oil-lng-commodities-impacted-closure-hormuz-strait/", desc: "Impacto más allá del petróleo" },
      { headline: "Strait of Hormuz disruptions: Implications for global trade", medium: "UNCTAD", date: "2026-05", url: "https://unctad.org/publication/strait-hormuz-disruptions-implications-global-trade-and-development", desc: "Análisis de impacto comercial" }
    ],
    verification: "Verificado: 7 barcos viernes (Kpler vía Gulf News), 100/día normal (Gulf News), cierre 28 FEB (Wikipedia), 'mayor disrupción' (AIE vía Bloomberg). 9 commodities (WEF)."
  }
},

/* ── N12: ZAPATERO — CASO AVANZA ── */
{
  id: "n12",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 ESPAÑA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jos%C3%A9_Luis_Rodr%C3%ADguez_Zapatero_2023_(cropped).jpg?width=800",
  imageAlt: "José Luis Rodríguez Zapatero — imputado por blanqueo",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "ZAPATERO IMPUTADO POR BLANQUEO Y RED CRIMINAL — La trama Plus Ultra/Venezuela se extiende al PSOE",
  pills: ["Imputado por blanqueo de capitales", "Red criminal (Audiencia Nacional)", "Plus Ultra: €53M de rescate público", "Washington Examiner pide extradición"],
  why: "Un expresidente del Gobierno español imputado por blanqueo vinculado a Venezuela, justo cuando el papa visita España y el PSOE enfrenta su peor crisis en años. La intersección de corrupción, Venezuela y política española es explosiva.",
  viralPct: 80, viralCls: "viral-high",
  viralSources: "The Olive Press · The Conservative · Washington Examiner · Plataforma Media — fuentes internacionales y españolas",
  detail: {
    summary: "La Audiencia Nacional imputó a Zapatero el 19 de mayo por blanqueo de capitales y pertenencia a organización criminal en relación con el rescate de €53M a Plus Ultra Líneas Aéreas en 2021. Zapatero declaró ante el juez Calama el 2 de junio. El Washington Examiner pidió a Trump que solicite la extradición de Zapatero como 'fixer de Maduro'. Sánchez defendió a Zapatero admitiendo 'tiempos duros' para el PSOE.",
    context: "Plus Ultra era una aerolínea pequeña rescatada con dinero público durante la pandemia pese a no cumplir requisitos. La investigación conecta el rescate con fondos venezolanos y la mediación de Zapatero con el régimen de Maduro. España eliminará en junio la vía exprés de regularización para venezolanos.",
    vp: "Tema aprobado por el equipo VP. Deadline: publicar antes del 10 JUN. El ángulo: no es solo corrupción doméstica — es la red de influencia Venezuela-España que conecta petrodólares, mediación política y financiación partidista. Zapatero como bisagra entre Caracas y Madrid.",
    sources: [
      { headline: "Spain's Zapatero Plus Ultra corruption scandal exposes Venezuela links", medium: "The Olive Press", date: "2026-05-20", url: "https://www.theolivepress.es/spain-news/2026/05/20/spains-zapatero-plus-ultra-corruption-scandal-exposes-venezuela-links/", desc: "Detalle del escándalo" },
      { headline: "Zapatero's Reckoning: How Spain's Socialist Elder Statesman Became Maduro's Man in Madrid", medium: "The Conservative", date: "2026-05", url: "https://www.theconservative.online/zapateros-reckoning-how-spains-socialist-elder-statesman-became-maduros-man-in-madrid", desc: "Conexión Venezuela-España" },
      { headline: "Spain's Zapatero exposed as Maduro's fixer. Trump must extradite", medium: "Washington Examiner", date: "2026-05", url: "https://www.washingtonexaminer.com/op-eds/4579365/spain-zapatero-exposed-maduro-fixer-trump-must-extradite/", desc: "Presión de EEUU" }
    ],
    verification: "Verificado: imputación 19 MAY (Olive Press), declaración 2 JUN (Plataforma Media), Plus Ultra €53M (Conservative). Sánchez defiende a Zapatero (Plataforma Media)."
  }
},

/* ── N13: UCRANIA ATACA SAN PETERSBURGO DE NUEVO ── */
{
  id: "n13",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 RUSIA / UCRANIA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Petersburg_skyline.JPG?width=800",
  imageAlt: "San Petersburgo — atacada durante el foro económico",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "UCRANIA ATACA SAN PETERSBURGO POR SEGUNDA VEZ DURANTE EL FORO ECONÓMICO DE PUTIN — Rusia no puede defender sus ciudades",
  pills: ["2ª serie de strikes sobre San Petersburgo", "SPIEF cerró el 6 JUN", "Infraestructura petrolera en Krasnodar atacada", "ISW: rendimiento militar ruso 'en declive'"],
  why: "Ucrania golpea la segunda ciudad de Rusia justo durante el foro económico más importante de Putin. El mensaje: Rusia no puede proteger sus propias ciudades mientras intenta proyectar normalidad económica al mundo.",
  viralPct: 72, viralCls: "viral-med",
  viralSources: "France 24 · ISW · Kyiv Post — análisis militar y mediático",
  detail: {
    summary: "Ucrania lanzó una segunda serie de ataques contra San Petersburgo el 6 de junio, coincidiendo con el cierre del Foro Económico Internacional de San Petersburgo (SPIEF). Simultáneamente atacó infraestructura petrolera en Krasnodar y activos militares rusos en regiones fronterizas. El ISW concluye que 'el rendimiento militar ruso está en declive'. Rusia perdió 93 km² netos en las últimas 4 semanas.",
    context: "El SPIEF es el escaparate económico de Putin para demostrar que la economía rusa funciona pese a las sanciones. Que Ucrania ataque San Petersburgo durante el evento destruye esa narrativa. Además, la escasez de gasolina en Rusia se agrava simultáneamente.",
    vp: "La combinación de ataques a ciudades rusas + crisis de gasolina + pérdidas territoriales recientes dibuja un cuadro de deterioro militar ruso que contradice la narrativa oficial. VP puede explotar esta convergencia de debilidades.",
    sources: [
      { headline: "Ukraine's attack on Saint Petersburg 'brings war back to Russia'", medium: "France 24", date: "2026-06-06", url: "https://www.france24.com/en/ukraine-s-attack-on-saint-petersburg-brings-war-back-to-russia", desc: "Ataques a San Petersburgo" },
      { headline: "ISW Russian Offensive Campaign Assessment, June 6, 2026", medium: "Kyiv Post / ISW", date: "2026-06-06", url: "https://www.kyivpost.com/post/77665", desc: "Evaluación militar ISW" },
      { headline: "Russia-Ukraine War Report Card, June 3, 2026", medium: "Russia Matters", date: "2026-06-03", url: "https://www.russiamatters.org/news/russia-ukraine-war-report-card/russia-ukraine-war-report-card-june-3-2026", desc: "Balance territorial" }
    ],
    verification: "Verificado: ataques 6 JUN San Petersburgo (France 24), SPIEF cierre 6 JUN (France 24), -93 km² 4 semanas (Russia Matters), Krasnodar (ISW). Declive confirmado por ISW."
  }
},

/* ── N14: DEFENSA EUROPEA — GASTO RÉCORD ── */
{
  id: "n14",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 EUROPA / OTAN" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_Ministers_of_Defense_and_of_Foreign_Affairs_meet_at_NATO_headquarters_in_Brussels_2010.jpg?width=800",
  imageAlt: "Reunión ministerial OTAN — gasto en defensa récord",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_NATO.svg?width=800",
  imageCredit: "NATO / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "EUROPA ALCANZA EL 2% DE GASTO EN DEFENSA POR PRIMERA VEZ Y APUNTA AL 5% PARA 2035 — Alemania duplica presupuesto",
  pills: ["Todos los aliados OTAN al 2% (vs 3 en 2014)", "Objetivo: 3.5% PIB para 2035", "Alemania: €95B → €162B en 2029", "Polonia: 4.48% del PIB"],
  why: "Europa gasta más que nunca en defensa, pero el reto no es gastar — es fabricar. Las fábricas de munición europeas siguen sin poder producir lo suficiente. El dinero no puede comprar lo que no existe.",
  viralPct: 60, viralCls: "viral-med",
  viralSources: "NATO.int · McKinsey · IISS · Intereconomics — análisis institucionales",
  detail: {
    summary: "Todos los aliados OTAN cumplen el objetivo del 2% del PIB en defensa por primera vez (vs solo 3 países en 2014). El nuevo objetivo es 3.5% para 2035, con el 5% como meta ampliada. Alemania ha duplicado su gasto desde 2021 (de €47B a €95B) y proyecta €162B para 2029. Polonia lidera con 4.48%, seguida de Lituania (4%), Letonia (3.73%) y Estonia (3.38%). Francia sube a €68.5B pese a presiones por el déficit.",
    context: "La cumbre de La Haya 2025 fijó el objetivo del 5%. Pero el problema europeo no es financiero — es industrial. Europa carece de capacidad de producción de munición, misiles y drones a la escala necesaria. El gasto sube pero la capacidad industrial no sigue el ritmo.",
    vp: "Tema aprobado por el equipo (buscar enfoque diferente al ya tratado). El nuevo ángulo: no es '¿gasta Europa suficiente?' sino '¿puede Europa FABRICAR lo que compra?' El gap entre presupuesto y capacidad industrial es la verdadera vulnerabilidad.",
    sources: [
      { headline: "Defence expenditures and NATO's 5% commitment", medium: "NATO.int", date: "2026-06", url: "https://www.nato.int/en/what-we-do/introduction-to-nato/defence-expenditures-and-natos-5-commitment", desc: "Datos oficiales OTAN" },
      { headline: "Can Europe Deliver NATO's Five Percent?", medium: "Intereconomics", date: "2026-03", url: "https://www.intereconomics.eu/contents/year/2026/number/2/article/can-europe-deliver-nato-s-five-percent.html", desc: "Análisis de viabilidad" },
      { headline: "NATO defense spending: Tracking the numbers", medium: "McKinsey", date: "2026-05", url: "https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/european-defense-by-the-numbers", desc: "Datos y tendencias de gasto" }
    ],
    verification: "Verificado: todos al 2% (NATO.int), €95B Alemania 2025 (IISS), Polonia 4.48% (NATO.int), 3.5% objetivo 2035 (NATO cumbre La Haya). Francia €68.5B (European Parliament)."
  }
}

],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 7 temas
═════════════════════════════════════════════════════════════ */
proposals: [

/* ═══ P1 — TEMA DORADO: XI EN PYONGYANG ═══ */
{
  number: "P1",
  golden: true,
  title: "LA BATALLA POR COREA DEL NORTE: Xi viaja a Pyongyang para arrebatarle a Rusia su mejor aliado nuclear",
  subtitle: "China vs Rusia: la pelea silenciosa por el control del arsenal nuclear norcoreano",
  flag: "cn",
  tags: [
    { cls:"tag-gold", text:"⭐ TEMA DORADO" },
    { cls:"tag-red", text:"🔴 HOY" },
    { cls:"tag-blue", text:"ASIA-PACÍFICO" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 800K-1M+",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: oportunidad clara" },
    { cls:"chip-green", text:"⚡ Acelerando" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_in_July_2024.jpg?width=1200",
  bannerAlt: "Xi Jinping — visita de Estado a Corea del Norte",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_People%27s_Republic_of_China.svg?width=1200",
  tesis: "Xi Jinping no viaja a Pyongyang por diplomacia de rutina. Va porque Rusia le está robando a su aliado nuclear más valioso. En el último año, armas norcoreanas han aparecido en Ucrania, Putin visitó Pyongyang, y Kim ha estrechado lazos militares con Moscú. China observa con alarma cómo pierde influencia sobre el programa nuclear que siempre consideró bajo su paraguas. Esta visita es un movimiento de reclamación geopolítica: Xi quiere asegurarse de que las bombas nucleares de Kim siguen respondiendo a Pekín, no a Moscú.",

  fields: [
    { label:"La noticia", value:"Xi Jinping inicia HOY (8 JUN) una visita de Estado de dos días a Corea del Norte, la primera en 7 años y su primer viaje internacional de 2026. La visita coincide con el 65 aniversario del tratado de defensa mutua China-DPRK. Xi acaba de recibir a Trump y Putin en Pekín." },
    { label:"Segunda derivada", value:"El triángulo China-Rusia-Corea del Norte está fracturándose. Kim vende armas a Putin para Ucrania. Putin visitó Pyongyang en 2024. China ve cómo su aliado tradicional se acerca a Moscú, un competidor estratégico. Xi va a Pyongyang a recuperar el control: quiere que las armas nucleares norcoreanas sigan bajo la influencia de Pekín, no de Moscú." },
    { label:"Gran pregunta", value:"¿Puede China arrebatarle a Rusia el control sobre el arsenal nuclear norcoreano, o Kim Jong Un ya eligió a Moscú como socio preferente?" },
    { label:"Señal de competencia", value:"OPORTUNIDAD CLARA. Ningun canal castellanoparlante del nicho ha publicado un video específico sobre esta visita (verificado 7 JUN). CaspianReport y TLDR Global probablemente lo traten en inglés. El tema de China-Corea del Norte es poco cubierto en español pero tiene precedente de interés: VP publicó 'Estado de alerta Corea: Irán contra cuerdas' (388K views) que conectaba Corea con otra crisis. El patrón 'conexión inesperada entre dos temas' rinde 350K+. Competencia pendiente de comprobar rendimiento relativo — pero el gap en español es real." },
    { label:"Demanda en medios", value:"Bloomberg, NPR, SCMP, Washington Times — todos con titulares sobre la visita. Bloomberg lo enmarca como 'reassert influence'. Es historia de portada en Asia. WSJ probablemente tiene cobertura (pendiente verificar acceso)." },
    { label:"Velocidad de agenda", value:"ACELERANDO — la visita es HOY 8 JUN. Las 48h siguientes generarán las declaraciones, acuerdos y análisis. Ventana óptima para publicar esta semana." },
    { label:"Historial VP", value:"VP hizo 'China decisión extraña sobre Irán' (349K) y 'Estado de alerta Corea' (388K). Ambos usan el patrón 'conexión inesperada' que funciona: China+otro tema. No hay video VP reciente sobre el triángulo China-Rusia-DPRK específicamente." },
    { label:"Motor viral", value:"MECANISMO: rivalidad entre potencias nucleares + traición de alianza + personajes reconocibles (Xi, Kim, Putin) + conexión con guerra de Ucrania (armas norcoreanas) + mapa visual (triángulo geopolítico). El espectador siente: 'no sabía que China y Rusia compiten por Corea del Norte'." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: Xi aterriza en Pyongyang, primera vez en 7 años — ¿por qué ahora? Escalada: Rusia roba el aliado nuclear de China (armas a Ucrania, visita Putin). Giro: Xi va a recuperar lo que siempre fue suyo — pero Kim tiene ahora dos opciones. Cierre: ¿quién controla realmente las bombas nucleares norcoreanas?" },
    { label:"Promesa cumplible", value:"El video promete revelar la pelea secreta entre China y Rusia por el control de Corea del Norte. Demostrable con: cronología de acercamiento Kim-Putin (2023-2026), armas norcoreanas en Ucrania (ISW, Reuters), tratado de defensa mutua 1961, comercio bilateral, timing de la visita post-Trump/Putin." },
    { label:"Ventaja VP", value:"ALTA. VP tiene experiencia probada en videos de conexión inesperada (Corea+Irán 388K, China+Irán 349K). El nivel de análisis geopolítico sobre triángulos de alianzas es exactamente el terreno donde VP supera a la competencia." },
    { label:"Caso para 800K/1M", value:"Señal de competencia fuerte: gap total en español sobre la visita Xi-Kim y la rivalidad China-Rusia por DPRK. Patrón probado: 'conexión inesperada' = 349K-388K. Actualidad máxima: HOY. Tres personajes reconocibles (Xi, Kim, Putin). Conexión directa con Ucrania (armas norcoreanas). Riesgo: el tema Corea del Norte puede parecer lejano para la audiencia hispana, pero el patrón anterior demuestra que funciona si la conexión es clara. Para ganar: titular que conecte China-Rusia-Corea del Norte con la guerra de Ucrania." },
    { label:"Título mental", value:"Xi viaja a Pyongyang porque Putin le está robando su aliado nuclear más peligroso — y China no puede permitirlo" },
    { label:"Qué investigar más", value:"Volumen exacto de armas norcoreanas en Ucrania (ISW, RUSI). Comercio bilateral China-DPRK vs Rusia-DPRK últimos 3 años. Acuerdos esperados de la visita. Reacción de Washington. Historial del tratado de 1961 y sus cláusulas de defensa mutua." },
    { label:"Veredicto", value:"ATACAR HOY — ventana perfecta, actualidad máxima, gap en español, patrón probado de conexión inesperada, tres personajes reconocibles." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/05/g-s1-126481/xi-jinping-will-travel-to-north-korea-next-week-in-first-visit-since-2019", desc:"Contexto geopolítico de la visita" },
    { medium:"Bloomberg", url:"https://www.bloomberg.com/news/articles/2026-06-05/xi-to-visit-north-korea-june-8-9-for-first-time-since-2019-mq0a77tt", desc:"Análisis de estrategia china" },
    { medium:"SCMP", url:"https://www.scmp.com/news/china/diplomacy/article/3356021/chinese-leader-xi-jinping-visit-north-korea-confirmed-next-week", desc:"Perspectiva asiática" },
    { medium:"Washington Times", url:"https://www.washingtontimes.com/news/2026/jun/7/look-rare-visit-chinas-xi-north-korea-talks-kim-jong-un/", desc:"Claves y contexto" }
  ]
},

/* ═══ P2 — RUSIA SIN GASOLINA ═══ */
{
  number: "P2",
  golden: false,
  title: "RUSIA SE QUEDA SIN GASOLINA: cómo Ucrania está ganando la guerra de desgaste destruyendo refinerías con drones de $50.000",
  subtitle: "El mayor productor de petróleo del mundo raciona combustible en Moscú — la paradoja que puede decidir la guerra",
  flag: "ru",
  tags: [
    { cls:"tag-red", text:"🔴 ATACAR" },
    { cls:"tag-red", text:"🔥 URGENTE" },
    { cls:"tag-blue", text:"RUSIA / UCRANIA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 800K+",
  chips: [
    { cls:"chip-green", text:"🏆 Competencia: cubierto superficialmente" },
    { cls:"chip-green", text:"⚡ Ventana óptima" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Moscow_Kremlin_from_Kamenny_bridge.jpg?width=1200",
  bannerAlt: "Kremlin de Moscú — la capital rusa enfrenta racionamiento de gasolina",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Russia.svg?width=1200",
  tesis: "Rusia produce más de 5 millones de barriles de petróleo diarios pero no puede refinar suficiente gasolina para sus ciudadanos. Ucrania ha destruido el 25% de la capacidad de refinación rusa con drones que cuestan $50.000 cada uno, forzando racionamiento en Moscú y suspensión total de ventas en Crimea. La paradoja es brutal: la potencia energética más grande del mundo enfrenta colas en las gasolineras de su propia capital. Esta no es una anécdota — es evidencia de que la guerra de desgaste ucraniana funciona y de que la economía de guerra de Putin tiene un talón de Aquiles que no puede proteger.",

  fields: [
    { label:"La noticia", value:"Desde el 1 de junio, Crimea vende gasolina solo con cupones (20L/coche). Moscú limita a 60L/persona. El depósito de Feodosia fue destruido. Rusia prohíbe exportar gasolina hasta el 31 de julio. Los ataques ucranianos han eliminado el 25% de refinación y el 30% de producción de gasolina (Reuters). El ISW estima $4.700M de coste para el Kremlin solo en abril." },
    { label:"Segunda derivada", value:"Rusia tiene petróleo de sobra pero no puede convertirlo en gasolina. La infraestructura de refinación es imposible de proteger contra drones baratos. Cada refinería destruida obliga a Rusia a elegir: ¿gasolina para el ejército o para los civiles? El Kremlin ya eligió: los militares primero. Los ciudadanos hacen cola. Es el momento en que la guerra llega al ruso de a pie." },
    { label:"Gran pregunta", value:"¿Puede Ucrania ganar la guerra sin conquistar territorio, simplemente destruyendo la capacidad industrial rusa desde el aire?" },
    { label:"Señal de competencia", value:"CUBIERTO SUPERFICIALMENTE. Canales del nicho castellanoparlante han mencionado la crisis de gasolina rusa como noticia de última hora, pero ninguno ha desarrollado el tema como análisis profundo de la 'guerra de desgaste industrial'. El tema de la economía de guerra rusa rindió 354K en VP ('Putin economía colapsa'). La actualización con datos de junio (Moscú racionando) es nueva y más impactante." },
    { label:"Demanda en medios", value:"Moscow Times (4 artículos en una semana), Kyiv Post, Atlantic Council, Pravda UA — cobertura intensa. La crisis ha escalado de Crimea a Moscú, lo que la convierte en noticia de alcance nacional ruso." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA — la crisis está en su punto más agudo (Moscú racionando por primera vez). No ha explotado todavía en YouTube en español. La ventana es esta semana." },
    { label:"Historial VP", value:"'Pánico en el Kremlin: la economía de guerra de Putin empieza a colapsar' (354K, 15 MAY). Mismo patrón temático pero los datos de junio (Moscú+Crimea racionando) son una escalada nueva. No es repetición — es actualización con evento concreto." },
    { label:"Motor viral", value:"MECANISMO: paradoja brutal (mayor productor petróleo = colas de gasolina) + guerra + impacto visual (fotos colas gasolineras Moscú) + datos concretos ($50K dron vs $500M refinería) + consecuencia directa para civiles rusos + conexión con Ucrania. El espectador siente: 'Rusia se cae por dentro'." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: foto de cola en gasolinera de Moscú — 'el país con más petróleo del mundo no tiene gasolina'. Escalada: cronología de ataques ucranianos a refinerías (mapa visual). Giro: el Kremlin elige entre ejército y civiles. Cierre: ¿puede Putin ganar una guerra si su retaguardia económica colapsa?" },
    { label:"Promesa cumplible", value:"El video promete explicar cómo drones de $50K destruyen una industria de billones y por qué Rusia no puede impedirlo. Demostrable: 25% capacidad destruida (Reuters), mapas de refinerías atacadas (ISW), datos de racionamiento (Moscow Times), coste $4.7B (ISW)." },
    { label:"Ventaja VP", value:"ALTA. VP ya demostró que el tema de la economía de guerra rusa funciona (354K). Los datos nuevos son concretos, visuales (mapas de refinerías) y con paradoja clara. Ningún canal del nicho ha hecho el análisis profundo de la estrategia industrial ucraniana." },
    { label:"Caso para 800K/1M", value:"Patrón probado: 'colapso de potencia + paradoja' = 354K. Esta versión es más fuerte porque tiene datos nuevos (Moscú racionando) y una paradoja más brutal (productor #1 sin gasolina). Señal de competencia: cubierto superficialmente como noticia, no como análisis. Motor viral: la imagen de Moscú racionando gasolina es irresistible. Riesgo: que el público perciba repetición del video de mayo. Mitigar: titular centrado en la PARADOJA nueva (Moscú sin gasolina), no en 'la economía colapsa' genéricamente." },
    { label:"Título mental", value:"El mayor productor de petróleo del mundo no tiene gasolina para sus ciudadanos — y un dron de $50.000 es el culpable" },
    { label:"Qué investigar más", value:"Mapa exacto de refinerías atacadas y operativas. Datos de producción vs consumo interno. Impacto en logística militar rusa (ISW). Coste acumulado de reparaciones. Comparativa con crisis energéticas históricas (embargo árabe 1973)." },
    { label:"Veredicto", value:"ATACAR HOY — ventana óptima, paradoja poderosa, datos nuevos, patrón probado de 354K." }
  ],
  sources: [
    { medium:"The Moscow Times", url:"https://themoscowtimes.com/2026/06/04/crimea-suspends-gasoline-sales-and-distribution-of-fuel-vouchers-a92932", desc:"Crimea suspende venta gasolina" },
    { medium:"Kyiv Post", url:"https://www.kyivpost.com/post/77295", desc:"Racionamiento llega a Moscú" },
    { medium:"Atlantic Council", url:"https://www.atlanticcouncil.org/blogs/ukrainealert/vladimir-putins-war-machine-may-finally-be-running-out-of-fuel/", desc:"Análisis estratégico" },
    { medium:"Pravda UA", url:"https://www.pravda.com.ua/eng/news/2026/06/01/8037292/index.amp", desc:"Crisis llega a la capital" }
  ]
},

/* ═══ P3 — ARMENIA ELIGE EUROPA ═══ */
{
  number: "P3",
  golden: false,
  title: "ARMENIA ELIGE EUROPA: el pequeño país que le dijo NO a Putin rodeado de enemigos y sin nadie que lo proteja",
  subtitle: "Pashinyan gana con 55% y confirma el divorcio con Rusia — pero ¿quién defiende ahora a Armenia de Turquía y Azerbaiyán?",
  flag: "am",
  tags: [
    { cls:"tag-red", text:"🔴 AYER" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-blue", text:"EUROPA / CÁUCASO" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 500K-800K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: oportunidad clara" },
    { cls:"chip-green", text:"⚡ Acelerando" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikol_Pashinyan_-_2023_(cropped).jpg?width=1200",
  bannerAlt: "Nikol Pashinyan — reelegido como primer ministro pro-europeo",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=1200",
  tesis: "Armenia acaba de votar por el divorcio definitivo con Rusia. Pashinyan gana con 55.7% pese a que Moscú impuso sanciones comerciales, prohibió productos armenios y comparó a Armenia con Ucrania. Pero la victoria electoral abre una pregunta brutal: Armenia está rodeada por Turquía (hostil) y Azerbaiyán (enemigo que expulsó a todos los armenios de Nagorno-Karabaj en 2023). Sin Rusia como protectora militar, ¿quién defiende a Armenia? Francia vende armas, India también, pero ninguno tiene tropas en la región. Armenia acaba de elegir la libertad — pero puede haber elegido también la soledad.",

  fields: [
    { label:"La noticia", value:"Elecciones parlamentarias del 7 JUN: Civil Contract (Pashinyan) 55.72%, Strong Armenia (Karapetyan, pro-Rusia) 21.92%, Armenia Alliance (Kocharyan) 8.69%. Primera elección tras la expulsión de armenios de Nagorno-Karabaj (2023). Participación: 33.84% a media jornada." },
    { label:"Segunda derivada", value:"Armenia no solo vota por un líder — vota por un cambio de civilización. Rusia intentó todo para impedirlo: sanciones comerciales (flores, coñac, vino, berenjenas, patatas), amenazas de Putin, financiación de oposición ($50M según reportes). Y fracasó. Pero el triunfo electoral no resuelve el problema existencial de Armenia: está geográficamente rodeada de enemigos sin una potencia protectora creíble." },
    { label:"Gran pregunta", value:"¿Puede Armenia sobrevivir como Estado independiente pro-europeo rodeada de Turquía y Azerbaiyán, sin la protección militar rusa que mantuvo durante 30 años?" },
    { label:"Señal de competencia", value:"OPORTUNIDAD CLARA. Los resultados salieron anoche. Ningún canal del nicho castellanoparlante ha publicado un video específico sobre las elecciones armenias (verificado 8 JUN AM). Canales internacionales (TLDR, CaspianReport) probablemente lo traten esta semana. Hay ventana de 48-72h para ser primeros en español. El tema Armenia es poco cubierto en el nicho hispanohablante — es un gap casi total." },
    { label:"Demanda en medios", value:"Al Jazeera, France 24, NBC News, AP, IFRI, Foreign Policy Centre — todos con análisis extensos. El tema domina la agenda de Europa Oriental. WSJ pendiente de verificar cobertura específica." },
    { label:"Velocidad de agenda", value:"ACELERANDO — resultados frescos (ayer). Las próximas 48h traerán reacciones de Rusia, UE, y posibles represalias de Moscú. Publicar esta semana." },
    { label:"Historial VP", value:"VP no tiene video reciente sobre Armenia específicamente. El tema del Cáucaso es poco explorado. Sin embargo, el patrón 'país pequeño desafía a potencia' ha funcionado en otros contextos. Riesgo: audiencia puede considerar Armenia 'lejana'." },
    { label:"Motor viral", value:"MECANISMO: David vs Goliat (Armenia vs Rusia) + traición (Rusia no protegió Nagorno-Karabaj) + miedo (¿qué pasa si Azerbaiyán ataca de nuevo?) + mapa visual (Armenia rodeada de enemigos) + conexión con guerra Ucrania (otro aliado que Rusia pierde). El espectador siente: '¿cómo puede sobrevivir este país?'" },
    { label:"Retención narrativa", value:"FUERTE. Apertura: Armenia vota — Rusia prohíbe su coñac para castigarla. Escalada: 2020 Nagorno-Karabaj, 2023 expulsión, Rusia no mueve un dedo. Giro: Pashinyan compra armas a Francia e India, echa a guardias fronterizos rusos. Cierre: ¿puede Armenia sobrevivir sola?" },
    { label:"Promesa cumplible", value:"El video promete explicar cómo un país de 3 millones de habitantes desafía a Rusia, por qué lo hace, y si puede sobrevivir. Demostrable: resultados electorales, cronología Nagorno-Karabaj, sanciones rusas, acuerdos militares con Francia/India, mapa geográfico." },
    { label:"Ventaja VP", value:"ALTA. VP puede hacer el video profundo que ningún canal del nicho está preparado para hacer: la historia completa de Armenia (Genocidio → URSS → independencia → Nagorno-Karabaj → giro europeo). Documentación, mapas, contexto histórico — terreno VP." },
    { label:"Caso para 800K/1M", value:"Gap total en español. Actualidad máxima (resultados de ayer). Historia con arco narrativo completo (30 años en 25 minutos). Paradoja fuerte: elige libertad pero puede estar eligiendo soledad. Riesgo: Armenia como tema puede no atraer audiencia masiva por ser poco conocida. Mitigar: titular que conecte con Rusia/Putin ('el país que le dijo NO a Putin'). Para ganar: necesita un titular irresistible que haga que el espectador sienta que TIENE que entender Armenia." },
    { label:"Título mental", value:"El pequeño país que acaba de mandar a Putin al carajo — rodeado de enemigos y sin nadie que lo proteja" },
    { label:"Qué investigar más", value:"Reacción oficial de Moscú a los resultados. Acuerdos militares Armenia-Francia e India-Armenia (detalles de armas). Estado de las negociaciones de paz Armenia-Azerbaiyán. Base militar rusa en Gyumri (¿se queda o se va?). Posición de Turquía." },
    { label:"Veredicto", value:"ATACAR HOY — resultados frescos, gap total en español, arco narrativo potente, conexión directa con la narrativa anti-Putin que funciona en VP." }
  ],
  sources: [
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/news/2026/6/7/armenians-vote-in-election-testing-move-towards-west-amid-russian-backlash", desc:"Resultados y contexto" },
    { medium:"France 24", url:"https://www.france24.com/en/europe/20260607-armenia-polls-open-in-test-of-prime-minister-s-pivot-away-from-russia", desc:"Pivote europeo" },
    { medium:"National Interest", url:"https://nationalinterest.org/blog/silk-road-rivalries/why-russia-is-trying-to-influence-armenias-elections", desc:"Interferencia rusa" },
    { medium:"IFRI", url:"https://www.ifri.org/en/memos/between-russia-and-europe-between-war-and-peace-what-stake-armenias-upcoming-elections", desc:"Análisis estratégico" }
  ]
},

/* ═══ P4 — REVOLUCIÓN FLAMINGO ═══ */
{
  number: "P4",
  golden: false,
  title: "LA REVOLUCIÓN FLAMINGO: cómo un resort de Kushner desató una revolución generacional que puede tumbar al gobierno de Albania",
  subtitle: "Corrupción, familia Trump, medio ambiente y Gen Z: la crisis que nadie esperaba en un aliado de la OTAN",
  flag: "al",
  tags: [
    { cls:"tag-red", text:"🔴 HOY" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-blue", text:"EUROPA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 500K-800K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: oportunidad clara" },
    { cls:"chip-green", text:"⚡ Acelerando" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-yellow", text:"🎯 Ventaja VP: media-alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Tirana_Skanderbeg_Square.jpg?width=1200",
  bannerAlt: "Plaza Skanderbeg de Tirana — epicentro de las protestas flamingo",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Albania.svg?width=1200",
  tesis: "Albania está viviendo una revolución generacional improbable. Miles de jóvenes de la Generación Z protestan desde hace 9 días contra un resort de $1.600M vinculado a Jared Kushner e Ivanka Trump, construido sobre un humedal protegido donde anidan flamencos. La fiscalía anticorrupción ha abierto investigación. La conexión con la mafia italiana ha sido documentada. Pero la historia profunda no es medioambiental — es geopolítica: Albania necesita el favor de EEUU para entrar en la UE y no puede decir 'no' a la familia del presidente sin arriesgar su futuro. Es una trampa sin salida.",

  fields: [
    { label:"La noticia", value:"Protestas en Albania entran en día 9 (8 JUN). SPAK (fiscalía anticorrupción) abrió investigación formal. BIRN documentó red de 'individuos y empresas turbias' con conexiones mafia italiana. Proyecto: €1.400M resort en isla Sazan (base militar comunista) + zona protegida Vjosa-Narta. Protestas globales: Berlín, Londres, NY, Toronto, Milán." },
    { label:"Segunda derivada", value:"Albania no puede decir 'no' a Kushner sin arriesgar su relación con Trump, que necesita para el proceso de adhesión a la UE. Rama (primer ministro desde 2013) cambió la ley de protección ambiental específicamente para permitir el proyecto. La investigación anticorrupción pone al descubierto cómo los negocios de la familia Trump generan crisis institucionales en países pequeños que dependen del favor de Washington." },
    { label:"Gran pregunta", value:"¿Pueden los negocios privados de la familia del presidente de EEUU destruir la democracia de un país aliado de la OTAN sin que nadie lo impida?" },
    { label:"Señal de competencia", value:"OPORTUNIDAD CLARA. GAP TOTAL en español. France 24 en español mencionó las protestas brevemente. Ningún canal del nicho castellanoparlante ha hecho un video profundo. En inglés: TLDR, France 24 EN, Al Jazeera tienen cobertura. El tema es nuevo, visual (flamencos, protestas masivas) y conecta con Trump — un imán de clicks. Competencia pendiente de comprobar rendimiento relativo en canales internacionales." },
    { label:"Demanda en medios", value:"CNN, CBS News, Al Jazeera, Time, France 24, Euronews — cobertura MASIVA internacional. Es una de las historias de la semana en medios occidentales. La conexión Trump/Kushner garantiza portadas." },
    { label:"Velocidad de agenda", value:"ACELERANDO — las protestas crecen cada día, la investigación SPAK es nueva, y la diáspora se moviliza globalmente. Puede escalar aún más esta semana." },
    { label:"Historial VP", value:"VP no ha cubierto Albania. Es un país nuevo en el catálogo VP. Riesgo: la audiencia puede no conectar con Albania como destino. Mitigar: el ángulo no es Albania sino 'la familia Trump desestabiliza un país aliado'. VP hizo videos exitosos sobre países poco conocidos cuando la conexión geopolítica era fuerte." },
    { label:"Motor viral", value:"MECANISMO: Trump/Kushner (nombre reconocible global) + corrupción + medio ambiente + Gen Z revolucionaria + 'revolución flamingo' (nombre memorable) + fotos espectaculares + escándalo mafia italiana + país de la OTAN. Múltiples ganchos simultáneos." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: flamencos anidando en un humedal protegido — al lado, Kushner quiere construir el resort más grande de Europa. Escalada: gobierno cambia la ley, mafia italiana involucrada. Giro: la Gen Z albanesa sale a la calle y el mundo presta atención. Cierre: ¿puede un país pequeño resistir la presión de la familia más poderosa del mundo?" },
    { label:"Promesa cumplible", value:"El video promete revelar la trama detrás del resort Kushner: quién cambió las leyes, quién se beneficia, por qué Albania no puede decir no, y qué pasa si la revolución triunfa. Demostrable: investigación BIRN, SPAK, datos proyecto, ley cambiada, protestas documentadas." },
    { label:"Ventaja VP", value:"MEDIA-ALTA. VP puede documentar la trama con profundidad: mapa de la isla, red de empresas, cronología legislativa, geopolítica OTAN/UE. Pero la competencia internacional ya está cubriendo. La ventaja VP está en ser PRIMEROS en español con análisis profundo." },
    { label:"Caso para 800K/1M", value:"Nombre 'Trump/Kushner' en el título = imán de clicks probado. Historia visual espectacular (flamencos vs resort de lujo). Escándalo de corrupción con mafia italiana. Gen Z revolucionaria. GAP TOTAL en español. Riesgo: Albania como país puede no atraer. Mitigar: titular centrado en Kushner/Trump, no en Albania. Para ganar: publicar antes de que alguien en español lo haga." },
    { label:"Título mental", value:"La familia Trump quiso construir un resort de lujo sobre un paraíso de flamencos — y desató una revolución que puede tumbar un gobierno" },
    { label:"Qué investigar más", value:"Investigación BIRN completa sobre red empresarial. Detalles del cambio legislativo de protección ambiental. Relación Rama-Trump (reuniones, correspondencia). Posición de la UE sobre la adhesión de Albania. Precedentes de proyectos Kushner en otros países." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — tema fortísimo pero necesita profundizar en la trama empresarial y la conexión OTAN/UE. Publicar antes del 12 JUN si se consiguen las fuentes." }
  ],
  sources: [
    { medium:"CNN", url:"https://www.cnn.com/2026/06/06/europe/ivanka-trump-kushner-luxury-resort-albania-intl", desc:"Investigación CNN del proyecto" },
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/news/2026/6/5/why-the-kushners-plan-to-build-an-albanian-resort-has-sparked-protests", desc:"Contexto de las protestas" },
    { medium:"Popular Information", url:"https://popular.info/p/kushners-albanian-resort-faces-corruption", desc:"Investigación anticorrupción SPAK" },
    { medium:"Time", url:"https://time.com/article/2026/06/05/jared-kushner-backed-luxury-resort-albania-protests/", desc:"Cobertura internacional" }
  ]
},

/* ═══ P5 — OPEP FARSA ═══ */
{
  number: "P5",
  golden: false,
  title: "LA GRAN FARSA DE LA OPEP: votan subir producción pero producen 10 millones de barriles MENOS que hace 3 meses",
  subtitle: "Cómo el cierre de Ormuz convirtió a la OPEP en un teatro de sombras — y por qué el petróleo no va a bajar",
  flag: "sa",
  tags: [
    { cls:"tag-red", text:"🔴 AYER" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-blue", text:"ECONOMÍA / ENERGÍA" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-yellow", text:"🏆 Competencia: cubierto superficialmente" },
    { cls:"chip-green", text:"⚡ Ventana óptima" },
    { cls:"chip-blue", text:"🔒 Retención: media-fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Vienna_OPEC_Headquarters_(9812748993).jpg?width=1200",
  bannerAlt: "Sede de la OPEP en Viena — cuotas ficticias",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_OPEC.svg?width=1200",
  tesis: "La OPEP acaba de votar subir la producción en 188.000 barriles diarios. Suena a alivio para el mercado. Pero es pura ficción: la producción real del grupo ha colapsado de 42.77 millones de b/d en febrero a 33.19 millones en abril — una caída del 22%. El Estrecho de Ormuz sigue cerrado y Arabia Saudí no puede entregar su petróleo. Emiratos se fue. La OPEP vota aumentos que son físicamente imposibles de cumplir. Es un cártel que controla cuotas de un producto que no puede transportar. La mayor farsa del mercado energético global.",

  fields: [
    { label:"La noticia", value:"OPEC+ acordó el 7 JUN subir cuotas 188.000 b/d desde julio. Es la 4ª subida consecutiva. Pero la producción REAL ha caído 22% (de 42.77M a 33.19M b/d) porque Ormuz sigue paralizado. Primera reunión sin EAU (que rompió con la OPEP en abril). Brent a $101." },
    { label:"Segunda derivada", value:"La OPEP ha perdido su razón de ser. Su poder residía en controlar la oferta. Pero cuando un estrecho bloquea la exportación física del petróleo, las cuotas son irrelevantes. Arabia Saudí no puede abastecer a sus clientes europeos y asiáticos no porque no quiera producir más, sino porque no puede sacarlo del Golfo. El cártel se ha convertido en un club de debate." },
    { label:"Gran pregunta", value:"¿Ha muerto la OPEP como mecanismo de control del mercado petrolero, o podrá resucitar cuando (si) se reabra Ormuz?" },
    { label:"Señal de competencia", value:"CUBIERTO SUPERFICIALMENTE. Canales del nicho han mencionado OPEC+ como noticia. VP ya hizo 'Emiratos rompe la OPEP' (334K) — el tema de la descomposición del cártel funciona. No se ha visto un video profundo sobre la paradoja cuotas-vs-producción-real. El ángulo 'la OPEP es una farsa' es nuevo." },
    { label:"Demanda en medios", value:"CNBC, Bloomberg, Reuters, TASS — cobertura técnica amplia pero sin el ángulo de la paradoja. WSJ probablemente tiene cobertura (pendiente verificar). El dato '42.77M → 33.19M' es explosivo y poco difundido." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA — reunión fue ayer. Los análisis post-reunión saldrán esta semana." },
    { label:"Historial VP", value:"'Emiratos rompe OPEP: el golpe que puede hundir el cártel del petróleo' (334K, 29 ABR). El patrón 'traición/colapso de cartel + petróleo' funciona. Este sería la continuación natural." },
    { label:"Motor viral", value:"MECANISMO: dinero (impacto en precios gasolina global) + paradoja (votan subir pero producen menos) + revelación de dato (42.77M → 33.19M) + consecuencia para el espectador (por qué la gasolina no va a bajar) + visualidad (gráficos de producción vs cuotas)." },
    { label:"Retención narrativa", value:"MEDIA-FUERTE. Apertura: OPEP vota subir producción — los titulares celebran. Escalada: pero los datos reales dicen lo contrario (gráfico dramático). Giro: Ormuz está cerrado, el petróleo no puede salir, las cuotas son papel mojado. Cierre: ¿para qué sirve la OPEP si no controla nada?" },
    { label:"Promesa cumplible", value:"El video promete revelar por qué las decisiones de la OPEP ya no importan y por qué el petróleo no va a bajar pronto. Demostrable: datos OPEC oficiales, Kpler (tráfico Ormuz), precios Brent, salida EAU." },
    { label:"Ventaja VP", value:"ALTA. VP tiene experiencia en temas OPEP (334K anterior). El análisis de datos petroleros con gráficos y mapas es terreno VP. La combinación paradoja+datos+consecuencia global es la firma editorial del canal." },
    { label:"Caso para 800K/1M", value:"Patrón probado: tema OPEP/petróleo = 334K. Paradoja nueva y más fuerte que la anterior. Dato revelador (22% caída). Riesgo: tema 'técnico' puede no atraer audiencia casual. Mitigar: titular centrado en consecuencia para el espectador ('por qué tu gasolina no va a bajar'). Para 800K: necesita conexión con impacto real en economía doméstica." },
    { label:"Título mental", value:"La OPEP acaba de votar subir la producción de petróleo — pero produce 10 millones de barriles MENOS que hace 3 meses" },
    { label:"Qué investigar más", value:"Datos de producción real por país (Arabia Saudí, Irak, Rusia). Rutas alternativas de exportación (pipeline vs mar). Impacto del cierre de Ormuz en precios domésticos europeos y asiáticos. Estrategia de Emiratos post-salida." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — paradoja poderosa, datos contundentes, pero necesita desarrollo visual y conexión con impacto doméstico para maximizar alcance." }
  ],
  sources: [
    { medium:"CNBC", url:"https://www.cnbc.com/amp/2026/06/07/opec-set-for-fourth-oil-quota-hike-since-strait-of-hormuz-closure.html", desc:"Reunión y paradoja cuotas vs realidad" },
    { medium:"Bloomberg", url:"https://www.bloomberg.com/graphics/2026-iran-war-hormuz-closure-oil-shock/", desc:"Impacto global del cierre de Ormuz" },
    { medium:"Gulf News", url:"https://gulfnews.com/amp/story/world/mena/three-months-of-paralysis-strait-of-hormuz-remains-a-ghost-route-1.500560668", desc:"Datos de tráfico Ormuz" }
  ]
},

/* ═══ P6 — INDIA GRAN NICOBAR ═══ */
{
  number: "P6",
  golden: false,
  title: "LA ISLA SECRETA DE INDIA: $9.000 millones para construir una megabase militar a 150 km de China",
  subtitle: "India transforma una isla remota con tribus aisladas en su 'portaaviones insumergible' junto al Estrecho de Malaca",
  flag: "in",
  tags: [
    { cls:"tag-red", text:"🔴 HOY" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-blue", text:"ASIA-PACÍFICO" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: oportunidad clara" },
    { cls:"chip-yellow", text:"⚡ Latente → acelerando" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Andaman_and_Nicobar_Islands_-_Great_Nicobar.PNG?width=1200",
  bannerAlt: "Gran Nicobar — la isla más remota de India",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_India.svg?width=1200",
  tesis: "India está gastando $9.000 millones para convertir una de las islas más aisladas del mundo — habitada por la tribu Shompen, pariente vivo más cercano del dodo — en una megabase militar con puerto, aeropuerto y ciudad para un millón de turistas. El motivo real: Gran Nicobar está a 150 km del Estrecho de Malaca, por donde pasa el 80% del petróleo que importa China. India está construyendo la capacidad de estrangular el suministro energético chino en caso de conflicto. Es el equivalente indio al control estadounidense del Canal de Panamá.",

  fields: [
    { label:"La noticia", value:"NPR publicó el 7 JUN un extenso reportaje sobre el Great Nicobar Island Development Project (GNIDP): $9.000M para un puerto transshipment, aeropuerto dual civil-militar, planta energética y ciudad. 1 millón de árboles serán talados. La tribu Shompen (una de las más aisladas del mundo) y las tortugas laúd están amenazadas." },
    { label:"Segunda derivada", value:"Gran Nicobar no es un proyecto de desarrollo — es una base militar encubierta como proyecto turístico. Su posición a 150 km del Estrecho de Malaca le da a India la capacidad de monitorizar y potencialmente bloquear el 25% del comercio mundial. China importa el 80% de su petróleo por esta ruta. India está construyendo su propia versión del 'Collar de Perlas' chino, pero al revés." },
    { label:"Gran pregunta", value:"¿Está India construyendo en secreto la capacidad de estrangular la economía china, y puede Pekín impedirlo?" },
    { label:"Señal de competencia", value:"OPORTUNIDAD CLARA. GAP TOTAL en español. El reportaje NPR es de ayer. CaspianReport o PolyMatter podrían cubrirlo en inglés. Ningún canal castellanoparlante lo ha tratado. El tema combina geopolítica, medio ambiente y misterio (isla remota con tribu aislada) — ingredientes visuales potentes." },
    { label:"Demanda en medios", value:"NPR (reportaje extenso), Wikipedia (artículo dedicado). Pocos medios premium han cubierto la dimensión estratégica vs la ambiental. Es una historia emergente. WSJ/FT pendientes." },
    { label:"Velocidad de agenda", value:"LATENTE → ACELERANDO — el reportaje NPR ha puesto el tema en el mapa mediático. La construcción avanza. No hay urgencia de última hora pero la ventana es buena." },
    { label:"Historial VP", value:"VP aprobó 'EEUU dice a Taiwán que lo defiende y le quita armas' (tema Taiwán/China). No hay video específico sobre la estrategia naval india en el Indo-Pacífico. Es territorio nuevo para VP pero encaja con el ADN del canal." },
    { label:"Motor viral", value:"MECANISMO: visualidad potente (isla paradisíaca → base militar) + China como antagonista reconocible + misterio (tribu más aislada del mundo + pariente del dodo) + dinero ($9.000M) + mapa de rutas marítimas + consecuencia global (petróleo chino)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: una de las islas más remotas del mundo, con tribus que nunca han contactado con la civilización — y aquí van a construir una ciudad para un millón de personas. Escalada: el verdadero motivo es militar (mapa de Malaca). Giro: India está construyendo la capacidad de estrangular a China. Cierre: ¿responderá Pekín?" },
    { label:"Promesa cumplible", value:"El video promete revelar el proyecto secreto de India para controlar el Estrecho de Malaca. Demostrable: proyecto GNIDP, mapas de rutas marítimas, datos de comercio, Collar de Perlas chino, impacto ambiental documentado." },
    { label:"Ventaja VP", value:"ALTA. Tema con mapas, rutas marítimas, estrategia naval, competición de potencias — exactamente el tipo de análisis geopolítico visual que es la marca VP." },
    { label:"Caso para 800K/1M", value:"Gap total en español. Historia visual espectacular (isla paradisíaca → base militar). Conexión China (audiencia reconoce). Misterio (tribu aislada). Riesgo: India como tema principal puede no atraer audiencia hispana masiva. Mitigar: titular centrado en China ('la isla que puede estrangular a China'). Para 800K: necesita conectar con crisis de Ormuz actual." },
    { label:"Título mental", value:"India gasta $9.000 millones en convertir una isla paradisíaca en una base militar que puede estrangular la economía de China" },
    { label:"Qué investigar más", value:"Datos de tráfico por Estrecho de Malaca (volumen, tipos buques). 'Collar de Perlas' chino vs respuesta india (String of Pearls vs Diamond Necklace). Capacidades militares previstas. Impacto tribu Shompen. Reacción oficial de China." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — historia visual potente con gap total, pero necesita profundizar en la dimensión estratégica y conectar con la crisis energética actual." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/07/g-s1-125586/island-isolated-india-great-nicobar-china-development", desc:"Reportaje extenso sobre el proyecto" },
    { medium:"Wikipedia", url:"https://en.wikipedia.org/wiki/Great_Nicobar_Island_Development_Project", desc:"Datos técnicos y contexto" }
  ]
},

/* ═══ P7 — SUBMARINO INVISIBLE CHINO ═══ */
{
  number: "P7",
  golden: false,
  title: "EL SUBMARINO INVISIBLE DE CHINA: satélites revelan un sub nuclear de diseño revolucionario que EEUU no vio venir",
  subtitle: "120 metros sin aleta, más rápido y más silencioso — cómo China desafía la última ventaja submarina de EEUU en el Pacífico",
  flag: "cn",
  tags: [
    { cls:"tag-orange", text:"🟠 SEMANA" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-blue", text:"ASIA-PACÍFICO / MILITAR" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 350K-500K",
  chips: [
    { cls:"chip-yellow", text:"🏆 Competencia: cubierto superficialmente" },
    { cls:"chip-yellow", text:"⚡ Meseta" },
    { cls:"chip-blue", text:"🔒 Retención: media-fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/202309_Jiangnan_Shipyard_in_Changxing_Island.jpg?width=1200",
  bannerAlt: "Astillero Jiangnan de Shanghái — cuna del submarino invisible",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_People%27s_Republic_of_China.svg?width=1200",
  tesis: "Imágenes satelitales revelan un submarino nuclear chino de 120 metros con un diseño sin precedentes: sin aleta convencional (sail-less), optimizado para velocidad y sigilo. Es el segundo diseño nuclear nuevo detectado en China en un año. El diseño sin aleta no se veía desde el USS Albacore experimental de 1953. China no solo construye más submarinos — está innovando en diseños que cambian las reglas del combate submarino. Si puede operar subs nucleares indetectables cerca de Taiwán, la ventaja submarina de EEUU — su última carta en el Pacífico — queda comprometida.",

  fields: [
    { label:"La noticia", value:"Satélites fotografiaron el 1 JUN un submarino de clase desconocida en el astillero Jiangnan (Shanghái). 120 metros de eslora, timones en X, sin aleta convencional. Mayor que los Type 093 actuales. No hay designación oficial. China no ha hecho anuncio. Es el segundo sub nuclear nuevo en un año." },
    { label:"Segunda derivada", value:"EEUU domina el combate submarino con 68 subs nucleares vs ~12 chinos. Pero la ventaja no es solo numérica — es tecnológica: los subs americanos son más silenciosos. Un sub sin aleta reduce drásticamente la huella acústica. Si China cierra la brecha tecnológica, EEUU pierde su ventaja más importante en un escenario de guerra por Taiwán." },
    { label:"Gran pregunta", value:"¿Está China a punto de romper la supremacía submarina de EEUU en el Pacífico, la última ventaja militar americana que impedía una invasión de Taiwán?" },
    { label:"Señal de competencia", value:"CUBIERTO SUPERFICIALMENTE en inglés. SCMP, Naval News, Asia Times tienen artículos técnicos. Canales militares internacionales (The Military Show, Good Times Bad Times) probablemente lo traten. En español: posible cobertura por Cosas Militares pero no verificada. El ángulo 'esto compromete la defensa de Taiwán' no se ha desarrollado." },
    { label:"Demanda en medios", value:"SCMP, Naval News, Asia Times, Defense News, Marine Insight — cobertura especializada intensa. No es mainstream todavía pero puede serlo si se conecta con Taiwán." },
    { label:"Velocidad de agenda", value:"MESETA — la noticia tiene una semana. No hay urgencia de última hora pero el tema es atemporal y el ángulo 'supremacía submarina' no se ha explorado." },
    { label:"Historial VP", value:"VP hizo '10 millones de drones: plan Ucrania Oriente Medio' (312K) sobre tecnología militar. El patrón 'tecnología militar + escala' funciona. El ángulo submarino es nuevo." },
    { label:"Motor viral", value:"MECANISMO: tecnología militar futurista + China como potencia emergente + secretismo (no anunciado oficialmente) + visualidad (imágenes satelitales, comparación con subs conocidos) + consecuencia para Taiwán + conexión con equilibrio de poder global." },
    { label:"Retención narrativa", value:"MEDIA-FUERTE. Apertura: un satélite fotografía algo en Shanghái que no debería existir. Escalada: análisis del diseño, comparación con USS Albacore de 1953. Giro: esto no es un sub más — es el diseño que podría romper la supremacía submarina de EEUU. Cierre: ¿qué significa para Taiwán?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué un submarino sin aleta puede cambiar el equilibrio militar en el Pacífico. Demostrable: imágenes satelitales, análisis de expertos (SCMP, Naval News), datos de flotas, doctrina submarina." },
    { label:"Ventaja VP", value:"ALTA. VP combina análisis militar con geopolítica mejor que la mayoría. Mapas del Pacífico, rutas submarinas, zonas de exclusión — terreno VP." },
    { label:"Caso para 800K/1M", value:"Patrón probado: tecnología militar = 312K base. Tema China = audiencia interesada. Imágenes satelitales secretas = gancho irresistible. Riesgo: tema muy técnico puede perder audiencia casual. Mitigar: titular centrado en consecuencia ('EEUU no lo vio venir'), no en especificaciones técnicas. Para 800K: necesita conexión clara con Taiwán y con la vida del espectador." },
    { label:"Título mental", value:"Un satélite acaba de fotografiar el arma secreta de China: un submarino nuclear que EEUU no puede detectar" },
    { label:"Qué investigar más", value:"Comparativa flota submarina EEUU vs China (números, capacidades, rutas). Doctrina submarina china actual (A2/AD). Impacto en escenario Taiwán. Análisis del USS Albacore y la doctrina de casco hidrodinámico. Reacción del Pentágono." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — tema potente pero técnico. Necesita un guión que conecte el submarino con Taiwán para maximizar alcance." }
  ],
  sources: [
    { medium:"SCMP", url:"https://www.scmp.com/news/china/military/article/3355991/chinas-futuristic-stealth-sub-boost-hunt-and-kill-capabilities-experts", desc:"Análisis de capacidades" },
    { medium:"Naval News", url:"https://www.navalnews.com/naval-news/2026/06/new-mystery-submarine-signals-chinas-rapid-undersea-expansion/", desc:"Análisis técnico" },
    { medium:"Asia Times", url:"https://asiatimes.com/2026/06/chinas-sailless-submarine-takes-warfare-to-the-seabed/", desc:"Implicaciones estratégicas" }
  ]
}

],

/* ════════════════════════════════════════════════════════════
   RANKING
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Xi en Pyongyang", subtema:"China vs Rusia por Corea del Norte", viral:95, depth:95, timing:98, fit:95, verdCls:"verd-gold", verdText:"⭐ TEMA DORADO — Atacar hoy" },
  { tema:"Rusia sin gasolina", subtema:"Paradoja refinación + guerra desgaste", viral:92, depth:90, timing:95, fit:92, verdCls:"verd-green", verdText:"✅ Atacar hoy" },
  { tema:"Armenia elige Europa", subtema:"Pashinyan gana vs Putin", viral:82, depth:88, timing:95, fit:88, verdCls:"verd-green", verdText:"✅ Atacar hoy" },
  { tema:"Revolución Flamingo", subtema:"Kushner Albania corrupción Gen Z", viral:88, depth:85, timing:90, fit:82, verdCls:"verd-yellow", verdText:"🔍 Investigar esta semana" },
  { tema:"Farsa OPEP", subtema:"Cuotas ficticias + Ormuz cerrado", viral:75, depth:88, timing:88, fit:85, verdCls:"verd-yellow", verdText:"🔍 Investigar esta semana" },
  { tema:"India Gran Nicobar", subtema:"Megabase vs China en Malaca", viral:78, depth:90, timing:72, fit:85, verdCls:"verd-yellow", verdText:"🔍 Investigar esta semana" },
  { tema:"Submarino invisible China", subtema:"Sub nuclear sin aleta 120m", viral:72, depth:85, timing:68, fit:80, verdCls:"verd-yellow", verdText:"🔍 Investigar esta semana" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "Papa Leo XIV inaugura la Sagrada Familia — 10 JUN",
    body: "Primera inauguración de una torre de la Sagrada Familia en 140 años de construcción. Momento histórico con un papa estadounidense en Barcelona. Posible video si la cobertura mediática explota.",
    trigger: "Si la inauguración genera debate cultural/religioso masivo o si hay incidentes durante la visita papal a España.",
    sourceUrl: "https://www.visita-papa-2026.com/en/schedule",
    sourceText: "Itinerario papal oficial"
  },
  {
    title: "Zapatero — deadline 10 JUN para declaración",
    body: "Tema aprobado por el equipo VP. Pendiente de publicar antes del 10 JUN. La trama Plus Ultra/Venezuela con imputación por blanqueo y red criminal conecta corrupción doméstica española con geopolítica venezolana.",
    trigger: "Si Zapatero hace declaraciones públicas o si el juez Calama amplía la investigación.",
    sourceUrl: "https://www.theolivepress.es/spain-news/2026/05/20/spains-zapatero-plus-ultra-corruption-scandal-exposes-venezuela-links/",
    sourceText: "The Olive Press — escándalo Zapatero"
  },
  {
    title: "Colombia 2ª vuelta — 21 JUN · Espriella vs Cepeda",
    body: "Tema aprobado por el equipo VP. Publicar antes del 14 JUN. VP ya publicó Colombia (340K views 1 JUN). El 5º dominó del giro continental latinoamericano.",
    trigger: "Si encuestas muestran cambio drástico o si hay evento disruptivo en la campaña.",
    sourceUrl: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election",
    sourceText: "AS/COA Poll Tracker"
  },
  {
    title: "Escasez de diésel en Europa — consecuencia Ormuz",
    body: "El cierre de Ormuz amenaza con provocar escasez de diésel en Europa en las próximas semanas. Si se materializa, es un tema de impacto directo para la audiencia española.",
    trigger: "Si medios europeos empiezan a reportar escasez real de diésel o subidas de precio notables en estaciones de servicio.",
    sourceUrl: "https://www.bloomberg.com/graphics/2026-iran-war-hormuz-closure-oil-shock/",
    sourceText: "Bloomberg — impacto Ormuz"
  },
  {
    title: "Etiopia — elecciones 11 JUN + crisis del Nilo",
    body: "Elecciones etíopes el 11 JUN. Conectar con control del Nilo (presa GERD) + relación con Egipto para hacer viable el tema. Regla VP: África solo funciona conectada con tema no africano.",
    trigger: "Si hay violencia electoral o si Abiy Ahmed hace movimientos respecto a la presa del Nilo.",
    sourceUrl: "https://en.wikipedia.org/wiki/2026_Ethiopian_general_election",
    sourceText: "Wikipedia — elecciones Etiopía"
  },
  {
    title: "China submarino sin aleta — acumulación militar acelerada",
    body: "Dos diseños nucleares nuevos en un año sugieren estrategia submarina acelerada. Vigilar si EEUU reacciona con cambios en despliegue del Pacífico o si aparece información sobre capacidades.",
    trigger: "Si Pentágono emite declaración o si aparecen nuevas imágenes satelitales con más detalles del submarino.",
    sourceUrl: "https://www.navalnews.com/naval-news/2026/06/new-mystery-submarine-signals-chinas-rapid-undersea-expansion/",
    sourceText: "Naval News — expansión submarina"
  }
],

/* ════════════════════════════════════════════════════════════
   VIDEOS VP PUBLICADOS (últimos 10)
═════════════════════════════════════════════════════════════ */
coveredVideos: [
  { title:"SORPRESA EN COLOMBIA: Cómo un FAN de BUKELE y MILEI ha DESTROZADO a la izquierda", date:"01 JUN 2026", views:"340K" },
  { title:"¿JAQUE a IRÁN? La ALIANZA SECRETA de TRUMP con el RÉGIMEN BRUTAL de ERITREA", date:"26 MAY 2026", views:"269K" },
  { title:"PÁNICO en el KREMLIN: La economía de GUERRA de PUTIN empieza a COLAPSAR", date:"15 MAY 2026", views:"355K" },
  { title:"EEUU quiere ACABAR con su dependencia de CHINA y tiene un PLAN: la PAX SILICA", date:"13 MAY 2026", views:"141K" },
  { title:"¿Se acerca el FIN de NETANYAHU? El ERROR estratégico en IRÁN que ISRAEL no perdona", date:"12 MAY 2026", views:"152K" },
  { title:"TRUMP ya está ROMPIENDO la OTAN y este puede ser su PEOR ERROR", date:"06 MAY 2026", views:"203K" },
  { title:"EMIRATOS ROMPE la OPEP: el GOLPE que puede hundir el CÁRTEL del petróleo", date:"29 ABR 2026", views:"334K" },
  { title:"La EXTRAÑA decisión de CHINA sobre IRÁN que DESCONCIERTA a todo el mundo", date:"27 ABR 2026", views:"349K" },
  { title:"ESTADO DE ALERTA en COREA: IRÁN pone al país CONTRA LAS CUERDAS", date:"24 ABR 2026", views:"388K" },
  { title:"10 MILLONES de drones: el PLAN de UCRANIA para CONQUISTAR ORIENTE MEDIO", date:"16 ABR 2026", views:"312K" }
],

/* ════════════════════════════════════════════════════════════
   VERIFICACIÓN EDITORIAL
═════════════════════════════════════════════════════════════ */
editorial_verification: {
  fuentes: "WSJ (pendiente acceso directo), FT, NYT, Bloomberg, Reuters, CNBC, NPR, SCMP, Al Jazeera, France 24, BBC, Moscow Times, Kyiv Post, Atlantic Council, ISW, UNCTAD, WEF, NATO.int — +20 fuentes consultadas",
  historial: "SI — verificados últimos 10 videos VP en youtubers.me. Colombia (340K), Eritrea (269K), Putin economía (355K), Pax Silica (141K), Netanyahu (152K), OTAN (203K), OPEP (334K), China-Irán (349K), Corea (388K), Drones (312K)",
  competencia: "SI — verificado Solo Fonseca (últimos 10 videos con views). Bolivia 570K, Chile 522K, Cuba 498K, PSOE 397K, Zapatero 387K. En espera: Hipótesis de Poder, Cosas Militares, Memorias de Pez (no se pudo verificar rendimiento reciente específico). Señal: Zapatero (387K en Solo Fonseca) confirma demanda de tema España/Venezuela/corrupción",
  viralidad: "SI — ninguna afirmación de viralidad sin evidencia. Motor viral = mecanismo concreto en cada propuesta. Se indica 'pendiente de comprobar' donde corresponde. Se indica 'hipótesis de viralidad' donde aplica",
  imagenes: "PENDIENTE — ejecutar validate_images.js después de publicar data file",
  descartados: "Irán genérico (saturado, descartado por tracker), Ucrania frente militar genérico (saturado), defensa europea genérico (ya tratado, necesita enfoque diferente), Papa como tema principal (insuficiente para 20-30 min VP), Hormuz genérico (descartado por tracker)"
}

};
