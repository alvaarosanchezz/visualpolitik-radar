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
  { cls:"t-red",    text:"🇧🇴 BOLIVIA <strong>SEMANA 6 DE INSURRECCIÓN</strong> · Campos petroleros tomados · 9 muertos · MINA DE VIEWS: 570K (1.9x)" },
  { cls:"t-red",    text:"🇻🇦 PAPA LEO XIV <strong>HOY con SÁNCHEZ</strong> · Primer papa en hablar ante el Parlamento español · Migración y valores" },
  { cls:"t-orange", text:"🇮🇳 INDIA <strong>$9.000M MEGABASE</strong> en Gran Nicobar · Puerto militar + aeropuerto a 150 km del Estrecho de Malaca" },
  { cls:"t-red",    text:"🇨🇺 CUBA <strong>BLOQUEO INVISIBLE</strong> · Trump cortó todo el petróleo · 20h sin luz · MINA DE VIEWS: 498K (1.65x)" },
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

/* ═══ P4 — BOLIVIA SE INCENDIA (MINA DE VIEWS CONFIRMADA) ═══ */
{
  number: "P4",
  golden: false,
  title: "BOLIVIA SE INCENDIA: 6 semanas de insurrección, campos petroleros tomados y un presidente acorralado que pide estado de excepción",
  subtitle: "Cómo la eliminación de subsidios al combustible desató la mayor crisis social de Latinoamérica en 2026 — y nadie habla de ello",
  flag: "bo",
  tags: [
    { cls:"tag-red", text:"🔴 MINA DE VIEWS" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-blue", text:"LATINOAMÉRICA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 500K-800K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: MINA — 570K (1.9x media)" },
    { cls:"chip-green", text:"⚡ Acelerando — semana 6" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/La_Paz_panorama_December_1_2008.jpg?width=1200",
  bannerAlt: "La Paz, Bolivia — epicentro de la insurrección de 2026",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bolivia.svg?width=1200",
  tesis: "Bolivia lleva 6 semanas en llamas y casi nadie en el mundo hispanohablante lo está cubriendo con profundidad. Comunidades indígenas tomaron campos petroleros en Santa Cruz. Al menos 9 muertos. 103 bloqueos de carreteras activos en 7 departamentos. Dos ministros renunciaron. El presidente Rodrigo Paz envió al Parlamento un proyecto de estado de excepción. Pérdidas económicas: $1.600 millones. Y lo más revelador: EEUU respalda al gobierno de Paz mientras los sindicatos, maestros e indígenas aliados a Evo Morales piden su renuncia. La SEÑAL DE DEMANDA ES BRUTAL: un canal del nicho castellanoparlante publicó hace días un video sobre la crisis boliviana y lleva 570K views — 1.9 veces su media habitual. Hay audiencia hambrienta de este tema y VP puede hacer la versión definitiva.",

  fields: [
    { label:"La noticia", value:"Bolivia entra en su sexta semana de insurrección generalizada (8 JUN). Comunidades rurales tomaron un campo petrolero en Santa Cruz, cerrando válvulas. 103 bloqueos de carreteras en 7 departamentos. Al menos 9 muertos y $1.600M en pérdidas. Dos ministros renunciaron el 3 JUN. El presidente Paz envió al Parlamento un proyecto para regular estados de excepción. EEUU (Hegseth) respalda al gobierno." },
    { label:"Segunda derivada", value:"Bolivia no es solo una protesta — es un laboratorio de lo que pasa cuando un gobierno elimina subsidios al combustible en un país donde el modelo económico dependía de gas natural que ya se agotó. Paz heredó una economía quebrada de Morales (sin reservas de dólares, sin gas) e intentó reformas neoliberales que provocaron una explosión social. La toma de campos petroleros es una escalada sin precedentes: las comunidades indígenas atacan directamente la fuente de ingresos del Estado. Y EEUU respalda al gobierno mientras la insurrección crece — la misma dinámica que destruyó a Sánchez de Lozada en 2003." },
    { label:"Gran pregunta", value:"¿Se está convirtiendo Bolivia en la nueva Venezuela — un país rico en recursos que colapsa por mala gestión y acaba en crisis humanitaria — o es una revolución social legítima contra un gobierno que traicionó al pueblo?" },
    { label:"Señal de competencia", value:"MINA DE VIEWS CONFIRMADA. Un canal castellanoparlante del nicho P1 publicó un video sobre la crisis boliviana que lleva 570K views — 1.9 veces su media habitual (~300K). Es la señal más fuerte de demanda detectada esta semana. Ningún otro canal del nicho ha hecho un análisis profundo con la perspectiva VP (segunda derivada, comparativa Venezuela, conexión con EEUU). El tema está cubierto como noticia superficial pero NO como análisis estructural. HAY HUECO ENORME para VP." },
    { label:"Demanda en medios", value:"Democracy Now (reportaje extenso 4 JUN), NPR (reportaje 20 MAY), Al Jazeera (análisis 22 MAY), UPI (3 JUN), WSWS (análisis 6 JUN), Fox News (Hegseth respaldo EEUU). Wikipedia tiene artículo dedicado '2026 Bolivian protests'. Cobertura creciente pero NO en medios premium de primera línea (WSJ/FT pendientes). Eso significa: hay historia pero no ha explotado aún en mainstream." },
    { label:"Velocidad de agenda", value:"ACELERANDO — semana 6, la crisis se profundiza cada día. La toma de campos petroleros es una ESCALADA nueva. El proyecto de estado de excepción puede provocar una nueva ola de cobertura. No ha tocado techo." },
    { label:"Historial VP", value:"VP NUNCA ha cubierto Bolivia. Es un país completamente nuevo en el catálogo del canal. No hay riesgo de repetición. El patrón 'colapso de país latinoamericano' ha funcionado en VP con otros países. La comparativa con Venezuela es un ángulo narrativo probado." },
    { label:"Motor viral", value:"MECANISMO: crisis/colapso de país (atrae morbo + preocupación) + Latinoamérica (audiencia directa de VP) + comparativa Venezuela (nombre reconocible que genera clicks) + indígenas tomando pozos petroleros (imagen poderosa) + EEUU respaldando gobierno impopular (paradoja) + miedo ('¿puede pasar en mi país?'). DEMANDA CONFIRMADA por señal de competencia 1.9x." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: comunidades indígenas cierran las válvulas de un campo petrolero en Bolivia — el gobierno envía policía antidisturbios. Escalada: cómo Bolivia pasó de ser 'el milagro económico de Morales' a una economía sin dólares, sin gas y sin futuro. Giro: EEUU respalda al presidente que el pueblo quiere derrocar — la misma película que en 2003 cuando Bolivia expulsó a un presidente pro-Washington. Cierre: ¿es Bolivia la próxima Venezuela, o puede evitar el colapso?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué Bolivia lleva 6 semanas en llamas, cómo llegó a este punto, y si puede convertirse en la nueva Venezuela. Demostrable: datos de producción de gas (declive), reservas internacionales (colapsaron), bloqueos y muertos (documentados), comparativa con crisis venezolana (datos macro), respaldo EEUU (declaración Hegseth)." },
    { label:"Ventaja VP", value:"ALTA. VP tiene experiencia en análisis de colapso de países latinoamericanos (Venezuela, Argentina). La comparativa Bolivia-Venezuela es exactamente el tipo de conexión que VP hace mejor que nadie. Mapas, datos macro, cronología política — terreno VP. Y ningún canal del nicho ha hecho el análisis profundo." },
    { label:"Caso para 800K/1M", value:"SEÑAL DE DEMANDA BRUTALMENTE CLARA: 570K en un canal del nicho (1.9x su media). La audiencia hispanohablante QUIERE este tema. Bolivia es Latinoamérica — audiencia directa de VP. La comparativa con Venezuela es un imán de clicks probado. VP nunca ha cubierto Bolivia — es nuevo para la audiencia. Riesgo: que el público perciba Bolivia como 'poco importante'. Mitigar: titular que conecte con Venezuela y con la vida del espectador ('la nueva Venezuela'). Para ganar: publicar esta semana mientras la crisis escala." },
    { label:"Título mental", value:"Bolivia lleva 6 semanas en llamas, tomaron los pozos de petróleo, y nadie te lo está contando — ¿es la nueva Venezuela?" },
    { label:"Qué investigar más", value:"Datos macro de Bolivia: reservas internacionales, producción gas natural (declive), deuda. Comparativa con Venezuela pre-colapso. Historia del Gas War de 2003 (Sánchez de Lozada). Rol de Evo Morales en la oposición actual. Qué empresas operan los campos tomados. Posición de países vecinos (Argentina, Brasil, Chile)." },
    { label:"Veredicto", value:"ATACAR HOY — señal de demanda 1.9x confirmada, crisis escalando, VP nunca cubrió Bolivia, audiencia directa latina, comparativa Venezuela irresistible." }
  ],
  sources: [
    { medium:"Democracy Now", url:"https://www.democracynow.org/2026/6/4/headlines/rural_communities_in_bolivia_seize_oil_field_calling_on_president_paz_to_resign", desc:"Comunidades toman campo petrolero" },
    { medium:"NPR", url:"https://www.npr.org/2026/05/20/nx-s1-5828203/bolivia-capital-protests-crisis", desc:"La Paz bajo asedio por protestas" },
    { medium:"UPI", url:"https://www.upi.com/Top_News/World-News/2026/06/03/latam-bolivia-regulate-states-of-emergency-bill/6701780513248/", desc:"Estado de excepción y renuncia de ministros" },
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/economy/2026/5/22/bolivia-in-crisis-social-unrest-demands-for-president-to-resign-escalate", desc:"Análisis de la crisis social" }
  ]
},

/* ═══ P5 — CUBA BLOQUEO SECRETO (MINA DE VIEWS CONFIRMADA) ═══ */
{
  number: "P5",
  golden: false,
  title: "EL BLOQUEO SECRETO DE TRUMP A CUBA: cómo EEUU cortó TODO el petróleo a la isla sin declararle la guerra",
  subtitle: "La mayor presión sobre Cuba desde la Crisis de los Misiles de 1962 — y nadie lo llama bloqueo",
  flag: "cu",
  tags: [
    { cls:"tag-red", text:"🔴 MINA DE VIEWS" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-blue", text:"LATINOAMÉRICA / EEUU" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 500K-800K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: MINA — 498K (1.65x media)" },
    { cls:"chip-green", text:"⚡ Acelerando — crisis humanitaria" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Havana_city_street_towards_Capital,_Cuba_-_panoramio.jpg?width=1200",
  bannerAlt: "La Habana — una ciudad paralizada por apagones de 20+ horas diarias",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Cuba.svg?width=1200",
  tesis: "Desde febrero de 2026, Trump ha impuesto a Cuba el bloqueo energético más severo desde la Crisis de los Misiles de 1962 — pero sin llamarlo bloqueo. EEUU intercepta petroleros, bloquea sistemas de pago (Visa/Mastercard), y presiona a terceros países para que no vendan combustible a la isla. El resultado: apagones de más de 20 horas diarias, el 84% de los sistemas de bombeo de agua sin funcionar, hospitales colapsados, y Díaz-Canel forzado a negociar con Washington. La ONU advierte de crisis humanitaria. Pero la historia que nadie cuenta es que Trump quiere que Cuba colapse para forzar un cambio de régimen sin invasión — la 'presión máxima' que fracasó con Venezuela e Irán, aplicada ahora con esteroides. La SEÑAL DE DEMANDA es clara: un canal del nicho castellanoparlante publicó un video sobre Cuba/Trump que lleva 498K views — 1.65 veces su media habitual.",

  fields: [
    { label:"La noticia", value:"Cuba enfrenta la peor crisis energética y humanitaria desde el Período Especial (años 90). Apagones de 20+ horas diarias. El 84% de los sistemas de bombeo de agua dependen de electricidad y están colapsados (ONU). Trump bloqueó petroleros, cortó sistemas de pago y presionó a proveedores. El 13 de marzo, Díaz-Canel confirmó públicamente que Cuba negocia con EEUU para aliviar el bloqueo energético. Trump envió un portaaviones al Caribe." },
    { label:"Segunda derivada", value:"Trump no ha declarado un bloqueo naval formal — sería ilegal bajo derecho internacional. Pero ha logrado el mismo efecto por otros medios: sanciones secundarias que impiden que cualquier petrolero toque puerto cubano, bloqueo de Visa/Mastercard para cortar remesas, y presión diplomática sobre México y Venezuela para que no envíen crudo. Es el primer 'bloqueo invisible' de la historia moderna: la isla se queda sin combustible sin que haya un solo barco de guerra bloqueando sus puertos. El objetivo real no es negociar — es provocar un colapso interno que fuerce un cambio de régimen." },
    { label:"Gran pregunta", value:"¿Está Trump aplicando a Cuba el primer bloqueo invisible de la historia — sin barcos de guerra pero con el mismo efecto que el de Kennedy en 1962 — para forzar la caída del régimen sin invasión?" },
    { label:"Señal de competencia", value:"MINA DE VIEWS CONFIRMADA. Un canal castellanoparlante del nicho P1 publicó un video sobre Cuba y la máxima presión de Trump que lleva 498K views — 1.65 veces su media habitual (~300K). La señal de demanda es fuerte y clara. El tema Cuba/EEUU tiene audiencia hispana natural (millones de cubanos en el exilio + interés continental). Otros canales han tratado Cuba como noticia pero NINGUNO ha hecho la comparativa con el bloqueo de 1962 ni el análisis de la estrategia de 'bloqueo invisible'. HAY HUECO para la versión VP." },
    { label:"Demanda en medios", value:"Wikipedia tiene artículo dedicado '2026 Cuban crisis'. Foreign Policy, CFR, The Global Angle tienen análisis profundos. Havana Times con entrevistas en terreno. La cobertura se intensifica a medida que la crisis humanitaria empeora. Medios premium (WSJ/FT) probablemente tienen cobertura — pendiente verificar." },
    { label:"Velocidad de agenda", value:"ACELERANDO — la crisis humanitaria se profundiza semana a semana. El envío del portaaviones es una escalada reciente. Las negociaciones Díaz-Canel/Trump pueden producir noticias en cualquier momento. No ha tocado techo." },
    { label:"Historial VP", value:"VP no tiene video reciente sobre Cuba. El tema Cuba/EEUU es un clásico geopolítico que la audiencia hispana conoce. El patrón 'EEUU presiona a país pequeño con consecuencias brutales' ha funcionado en VP con otros contextos. La comparativa con la Crisis de los Misiles de 1962 es un ángulo narrativo extraordinario." },
    { label:"Motor viral", value:"MECANISMO: Trump (nombre reconocible #1) + Cuba (nombre reconocible para audiencia hispana) + crisis humanitaria (empatía + indignación) + comparativa histórica con 1962 (Kennedy/misiles nucleares) + portaaviones en el Caribe (imagen poderosa) + miedo ('¿puede pasar en otro país?') + dato brutal (20h sin luz, 84% sin agua). DEMANDA CONFIRMADA por señal de competencia 1.65x." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: Cuba, 2026 — 20 horas sin electricidad, hospitales sin generadores, la gente hierve agua de mar. Pero no hay ningún barco bloqueando el puerto. Escalada: cómo Trump logró estrangular a Cuba sin un solo tiro — sanciones petroleras, bloqueo de Visa/Mastercard, presión a México y Venezuela. Giro: es el mismo método que Kennedy usó en 1962, pero sin misiles nucleares de por medio. Cierre: ¿quiere Trump la caída del régimen, o solo el mejor acuerdo de su carrera?" },
    { label:"Promesa cumplible", value:"El video promete revelar cómo EEUU ha impuesto a Cuba un bloqueo energético sin declarar la guerra, por qué es la mayor presión desde 1962, y qué quiere Trump realmente. Demostrable: datos de suministro petrolero (caída), apagones (documentados ONU), sanciones secundarias (Federal Register), comparativa con bloqueo naval 1962 (histórico), negociaciones Díaz-Canel (declaración pública 13 MAR)." },
    { label:"Ventaja VP", value:"ALTA. VP puede combinar la historia de 1962 con la crisis actual de 2026 como nadie en español. Mapas del Caribe, rutas petroleras, cronología de sanciones, comparativa histórica visual — es exactamente el tipo de análisis profundo donde VP brilla." },
    { label:"Caso para 800K/1M", value:"SEÑAL DE DEMANDA CLARA: 498K en un canal del nicho (1.65x su media). Cuba + Trump en el título = imán de clicks doble. Audiencia hispana natural (exilio cubano + interés continental). Comparativa con Crisis de los Misiles de 1962 = gancho histórico poderoso. VP nunca ha hecho este ángulo. Riesgo: que el público perciba Cuba como tema repetido o partidista. Mitigar: enfoque en la MECÁNICA del bloqueo invisible, no en la política. Para ganar: titular que conecte 1962 con 2026." },
    { label:"Título mental", value:"Trump ha cortado TODO el petróleo a Cuba sin declararle la guerra — es el mayor bloqueo desde la Crisis de los Misiles de 1962" },
    { label:"Qué investigar más", value:"Datos exactos de suministro petrolero a Cuba (antes vs después de febrero 2026). Lista de sanciones secundarias aplicadas. Qué petroleros fueron interceptados o desviados. Comparativa legal con bloqueo naval de 1962. Estado de las negociaciones Díaz-Canel/Trump. Posición de México, Venezuela, Rusia y China sobre la crisis. Datos humanitarios ONU." },
    { label:"Veredicto", value:"ATACAR HOY — señal de demanda 1.65x confirmada, crisis humanitaria escalando, ángulo histórico 1962 único, audiencia hispana natural, VP nunca cubrió este enfoque." }
  ],
  sources: [
    { medium:"Wikipedia", url:"https://en.wikipedia.org/wiki/2026_Cuban_crisis", desc:"Cronología completa de la crisis" },
    { medium:"The Global Angle", url:"https://theglobalangle.com/why-does-trump-want-cuba-2026-crisis-analysis/", desc:"Análisis del bloqueo petrolero y estrategia Trump" },
    { medium:"Havana Times", url:"https://havanatimes.org/interviews/cubas-dilemma-resistance-collapse-or-negotiation/", desc:"Dilema de Cuba: resistencia, colapso o negociación" },
    { medium:"Fox News", url:"https://www.foxnews.com/world/pete-hegseth-warns-narco-terrorists-us-backs-bolivias-government-coup-warnings", desc:"Posición de EEUU en crisis latinoamericanas" }
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

/* ═══ P7 — CRISIS PSOE/ESPAÑA (MINA DE VIEWS CONFIRMADA) ═══ */
{
  number: "P7",
  golden: false,
  title: "¿SE ACABÓ SÁNCHEZ? El PSOE pierde Andalucía por primera vez en democracia, Zapatero está imputado y el 74% pide elecciones",
  subtitle: "La tormenta perfecta sobre el PSOE: derrota histórica + caso Zapatero + sin presupuestos + Papa en el Congreso",
  flag: "es",
  tags: [
    { cls:"tag-red", text:"🔴 MINA DE VIEWS" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-blue", text:"ESPAÑA / NACIONAL" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 500K-800K",
  chips: [
    { cls:"chip-gold", text:"🏆 Competencia: MINA — 397K+387K (1.3x media x2)" },
    { cls:"chip-green", text:"⚡ Acelerando — convergencia" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Tercer_Gobierno_de_Pedro_S%C3%A1nchez_(2023-11).jpg?width=1200",
  bannerAlt: "Gobierno de Pedro Sánchez — en su peor crisis desde que llegó al poder",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=1200",
  tesis: "El PSOE enfrenta la convergencia más destructiva de su historia reciente: acaba de perder Andalucía por primera vez en democracia (la comunidad que fundó el socialismo español), Zapatero está imputado por blanqueo y red criminal vinculada a Venezuela, el 74.3% de los españoles quiere elecciones anticipadas, Sánchez no tiene presupuestos, y el papa Leo XIV habla HOY ante el Parlamento justo cuando el partido que gobierna se desmorona. La SEÑAL DE DEMANDA es doble: un canal del nicho castellanoparlante publicó DOS videos consecutivos sobre la crisis del PSOE/Zapatero que acumulan 397K + 387K views (ambos 1.3x su media). No es un video viral — es un CLÚSTER de demanda sostenida. La audiencia española QUIERE este tema.",

  fields: [
    { label:"La noticia", value:"Convergencia de crisis PSOE en junio 2026: (1) Andalucía — el PSOE pierde por primera vez en democracia su 'granero electoral'. (2) Zapatero imputado el 19 MAY por blanqueo y red criminal vinculada a Plus Ultra/Venezuela. Declaró ante el juez Calama el 2 JUN. (3) 74.3% de españoles quieren elecciones anticipadas. (4) Sánchez sin presupuestos ni mayoría estable. (5) Papa Leo XIV HOY en el Parlamento en medio de la tormenta." },
    { label:"Segunda derivada", value:"No es solo una crisis de gobierno — es una crisis de RÉGIMEN dentro del PSOE. Perder Andalucía equivale a que el PP pierda Castilla y León: destruye el mito fundacional. La imputación de Zapatero conecta al PSOE con la Venezuela de Maduro a través de una aerolínea rescatada con dinero público. Washington Examiner pide la extradición a EEUU. Y Sánchez no puede convocar elecciones porque las perdería, pero tampoco puede gobernar sin presupuestos. Está atrapado. La pregunta no es si caerá, sino cómo y cuándo." },
    { label:"Gran pregunta", value:"¿Está el PSOE viviendo el principio del fin de su hegemonía en la izquierda española — una crisis que va más allá de Sánchez y que puede reconfigurar la política española durante una década?" },
    { label:"Señal de competencia", value:"MINA DE VIEWS CONFIRMADA — CLÚSTER DOBLE. Un canal castellanoparlante del nicho P1 publicó DOS videos consecutivos sobre la crisis PSOE/Zapatero: uno lleva 397K views y otro 387K (ambos ~1.3x su media habitual de ~300K). Que DOS videos seguidos sobre el mismo ecosistema temático rindan por encima de la media indica demanda SOSTENIDA, no puntual. Otros canales de actualidad política española (P2) probablemente también estén cubriendo. VP ya tiene el tema Zapatero aprobado por el equipo (deadline 10 JUN). El ángulo VP sería MÁS AMPLIO que solo Zapatero: la convergencia de crisis como señal de fin de ciclo del PSOE." },
    { label:"Demanda en medios", value:"The Olive Press, The Conservative, Washington Examiner (presión EEUU), Plataforma Media — cobertura internacional creciente. Medios españoles: El País, El Confidencial, El Mundo — tema dominante en España. El caso Zapatero/Venezuela tiene dimensión internacional por la conexión con Maduro y la presión de Washington." },
    { label:"Velocidad de agenda", value:"ACELERANDO — convergencia de eventos: Zapatero imputado (19 MAY), declaración ante juez (2 JUN), Papa en Parlamento HOY (8 JUN), resultados electorales Andalucía recientes. Todo ocurre simultáneamente. La ventana es AHORA." },
    { label:"Historial VP", value:"VP tiene el tema Zapatero APROBADO por el equipo con deadline 10 JUN. El Radar del 7 JUN ya incluía Zapatero como tema a vigilar. El ángulo original era solo Zapatero/Venezuela. La propuesta actual es MÁS AMBICIOSA: la convergencia de crisis del PSOE como análisis sistémico. VP ha hecho videos exitosos sobre política española cuando la dimensión es estructural, no coyuntural." },
    { label:"Motor viral", value:"MECANISMO: España (audiencia directa y masiva de VP) + corrupción/escándalo (atrae clicks probado) + Sánchez/Zapatero (nombres reconocibles) + debate/polarización (genera engagement) + dato brutal (74.3% quiere elecciones) + consecuencia directa ('¿caerá el gobierno?') + papa en el Parlamento justo hoy (timing perfecto). DEMANDA CONFIRMADA por clúster doble 1.3x+1.3x." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: el Papa habla ante el Parlamento español — pero el partido que gobierna se cae a pedazos detrás de la fachada. Escalada: Andalucía perdida, Zapatero imputado por blanqueo de Venezuela, 74% quiere elecciones. Giro: no es una crisis de Sánchez — es una crisis del PSOE como proyecto. El socialismo español pierde su base electoral (Andalucía), su herencia moral (Zapatero imputado) y su legitimidad (sin presupuestos). Cierre: ¿puede el PSOE reinventarse o estamos ante el fin de una era?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué la crisis del PSOE es más profunda de lo que parece y si puede sobrevivir. Demostrable: resultados Andalucía, imputación Zapatero (Audiencia Nacional), encuestas (74.3%), cronología Plus Ultra/Venezuela, datos electorales históricos del PSOE." },
    { label:"Ventaja VP", value:"ALTA. VP tiene equipo en España, conoce el contexto, y puede hacer el análisis que los canales de opinión política no hacen: la dimensión ESTRUCTURAL e histórica, no el ruido diario. La conexión Zapatero-Venezuela-Maduro tiene dimensión geopolítica que solo VP puede desarrollar a fondo." },
    { label:"Caso para 800K/1M", value:"SEÑAL DE DEMANDA DOBLE: 397K+387K en videos consecutivos del mismo canal (1.3x cada uno). España = audiencia masiva directa de VP. Tema polarizante = engagement alto. Convergencia de crisis simultáneas = narrativa irresistible. Zapatero ya aprobado por el equipo. Riesgo: que el público perciba sesgo político. Mitigar: enfoque ANALÍTICO y ESTRUCTURAL, no partidista. Para ganar: publicar antes del 10 JUN (deadline equipo) con el ángulo ampliado de 'fin de era del PSOE'." },
    { label:"Título mental", value:"El PSOE acaba de perder Andalucía por primera vez, su expresidente está imputado por blanqueo de Venezuela, y el 74% de España quiere elecciones — ¿es el principio del fin?" },
    { label:"Qué investigar más", value:"Resultados exactos de Andalucía (comparativa histórica desde 1982). Detalles del caso Plus Ultra: quién cobró, cuánto, conexión exacta con Venezuela. Estado del proceso judicial de Zapatero. Encuestas de intención de voto actualizadas. Precedentes históricos de crisis similares en partidos dominantes europeos (PSF en Francia, SPD en Alemania). Posibilidad real de elecciones anticipadas." },
    { label:"Veredicto", value:"ATACAR HOY — clúster de demanda doble confirmado, tema aprobado por equipo (deadline 10 JUN), convergencia de crisis histórica, audiencia española masiva, ángulo estructural único de VP." }
  ],
  sources: [
    { medium:"The Olive Press", url:"https://www.theolivepress.es/spain-news/2026/05/20/spains-zapatero-plus-ultra-corruption-scandal-exposes-venezuela-links/", desc:"Escándalo Zapatero/Plus Ultra" },
    { medium:"The Conservative", url:"https://www.theconservative.online/zapateros-reckoning-how-spains-socialist-elder-statesman-became-maduros-man-in-madrid", desc:"Zapatero como 'hombre de Maduro'" },
    { medium:"Washington Examiner", url:"https://www.washingtonexaminer.com/op-eds/4579365/spain-zapatero-exposed-maduro-fixer-trump-must-extradite/", desc:"Presión de EEUU para extradición" },
    { medium:"Plataforma Media", url:"https://www.plataformamedia.com/2026/06/04/zapatero-scandal-hits-spain-government/", desc:"Impacto en el gobierno de Sánchez" }
  ]
}

],

/* ════════════════════════════════════════════════════════════
   RANKING
═════════════════════════════════════════════════════════════ */
ranking: [
  { tema:"Xi en Pyongyang", subtema:"China vs Rusia por Corea del Norte", viral:95, depth:95, timing:98, fit:95, verdCls:"verd-gold", verdText:"⭐ TEMA DORADO — Atacar hoy" },
  { tema:"Rusia sin gasolina", subtema:"Paradoja refinación + guerra desgaste", viral:92, depth:90, timing:95, fit:92, verdCls:"verd-green", verdText:"✅ Atacar hoy" },
  { tema:"Bolivia en llamas", subtema:"MINA 570K (1.9x) · Insurrección semana 6", viral:90, depth:88, timing:92, fit:90, verdCls:"verd-green", verdText:"✅ Atacar hoy — MINA DE VIEWS" },
  { tema:"Cuba bloqueo Trump", subtema:"MINA 498K (1.65x) · Bloqueo invisible", viral:88, depth:90, timing:90, fit:88, verdCls:"verd-green", verdText:"✅ Atacar hoy — MINA DE VIEWS" },
  { tema:"Armenia elige Europa", subtema:"Pashinyan gana vs Putin", viral:82, depth:88, timing:95, fit:88, verdCls:"verd-green", verdText:"✅ Atacar hoy" },
  { tema:"Crisis PSOE/España", subtema:"MINA 397K+387K (1.3x x2) · Fin de era", viral:85, depth:85, timing:90, fit:88, verdCls:"verd-green", verdText:"✅ Atacar hoy — MINA DE VIEWS" },
  { tema:"India Gran Nicobar", subtema:"Megabase vs China en Malaca", viral:78, depth:90, timing:72, fit:85, verdCls:"verd-yellow", verdText:"🔍 Investigar esta semana" }
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
  },
  {
    title: "Revolución Flamingo Albania — Kushner/SPAK · día 9+",
    body: "Protestas contra resort Kushner/Ivanka en Albania siguen creciendo. SPAK investiga corrupción. Conexión mafia italiana documentada. GAP TOTAL en español. Si escala a nivel institucional (caída gobierno Rama), se convierte en propuesta.",
    trigger: "Si Rama dimite, si SPAK emite acusación formal, o si EEUU reacciona oficialmente al escándalo Kushner.",
    sourceUrl: "https://www.cnn.com/2026/06/06/europe/ivanka-trump-kushner-luxury-resort-albania-intl",
    sourceText: "CNN — Proyecto Kushner Albania"
  },
  {
    title: "OPEP farsa — cuotas ficticias vs producción real",
    body: "OPEP+ vota subir producción pero produce 22% menos que en febrero. Ormuz paralizado. Las cuotas son papel mojado. Si el Brent supera $110 o si hay escasez real de diésel en Europa, se convierte en propuesta urgente.",
    trigger: "Si el Brent supera $110, si Europa reporta escasez de diésel, o si Ormuz se reabre (entonces el ángulo cambia completamente).",
    sourceUrl: "https://www.cnbc.com/amp/2026/06/07/opec-set-for-fourth-oil-quota-hike-since-strait-of-hormuz-closure.html",
    sourceText: "CNBC — paradoja OPEP"
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
  competencia: "SI — verificado Solo Fonseca (últimos 10 videos con views). MINAS DE VIEWS DETECTADAS: Bolivia 570K (1.9x media), Cuba/Trump 498K (1.65x), PSOE 397K + Zapatero 387K (clúster 1.3x x2). Las 3 minas se convirtieron en propuestas P4/P5/P7. En espera: Hipótesis de Poder, Cosas Militares, Memorias de Pez (no se pudo verificar rendimiento reciente específico). MÉTODO: rendimiento relativo vs media del canal, no suscriptores absolutos",
  viralidad: "SI — ninguna afirmación de viralidad sin evidencia. Motor viral = mecanismo concreto en cada propuesta. Se indica 'pendiente de comprobar' donde corresponde. Se indica 'hipótesis de viralidad' donde aplica",
  imagenes: "PENDIENTE — ejecutar validate_images.js después de publicar data file",
  descartados: "Irán genérico (saturado), Ucrania frente militar genérico (saturado), defensa europea genérico (ya tratado), Papa como tema principal (insuficiente para 20-30 min VP), Hormuz genérico (descartado por tracker). MOVIDOS A VIGILAR: Revolución Flamingo Albania (bueno pero sin señal de competencia verificada), OPEP farsa (paradoja fuerte pero sin señal de demanda confirmada), Submarino China (técnico, meseta, sin urgencia)"
}

};
