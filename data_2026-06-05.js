/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-05
   Edita este archivo para actualizar el contenido del dashboard.
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-05",
  dateLabel: "05 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$99.80",
  brentChange: "↑1.4% · aeropuerto Kuwait atacado · Hezbollah rechaza ceasefire · Knesset se disuelve"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🇮🇷 IRÁN <strong>ATACA AEROPUERTO CIVIL KUWAIT</strong> · 1 muerto · 63 heridos · drones contra terminal de pasajeros · Kuwait expulsa 2 diplomáticos" },
  { cls:"t-red",    text:"🇱🇧 HEZBOLLAH <strong>RECHAZA CEASEFIRE</strong> · Kassem: 'irse del sur = rendición' · Israel-Líbano acuerdan pero Hezbollah dice NO" },
  { cls:"t-red",    text:"🇮🇱 KNESSET <strong>VOTA DISOLVERSE 106-0</strong> · crisis ultra-ortodoxa derriba coalición Netanyahu · elecciones anticipadas" },
  { cls:"t-gold",   text:"🇷🇺 PUTIN <strong>DISCURSO SPIEF HOY</strong> · pese a drones en San Petersburgo · 'controlamos 100% LPR, 85% DPR, 80% Zaporozhye'" },
  { cls:"t-red",    text:"🛢️ BRENT <strong>$99.80</strong> · 4ª subida consecutiva · cerca de $100 · Ormuz día 95 · deal Iran estancado" },
  { cls:"t-gold",   text:"🇮🇷 IRÁN-EEUU <strong>MOU TENTATIVO</strong> · 60 días ceasefire + Ormuz sin peajes + nuclear · falta firma de Trump" },
  { cls:"t-orange", text:"🇨🇴 COLOMBIA <strong>DE LA ESPRIELLA 80%</strong> probabilidad en mercados de predicción · runoff 21 JUN · 16 días" },
  { cls:"t-orange", text:"🦠 ÉBOLA <strong>344+ CONFIRMADOS</strong> · 60 muertes · cepa sin vacuna · IRC: 'mucho peor de lo reportado'" },
  { cls:"t-orange", text:"🇫🇷 G7 EN FRANCIA <strong>15-17 JUN</strong> · Trump vs aliados por Irán + aranceles · 10 días" },
  { cls:"t-orange", text:"🇪🇸 ZAPATERO <strong>DECLARACIÓN 17-18 JUN</strong> · correos autorizados · 12 días para publicar antes" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Decisión del día",
    content: "Irán ataca un <span class='hl'>aeropuerto civil en Kuwait:</span> 1 muerto, 63 heridos, terminal de pasajeros destruida. Kuwait expulsa 2 diplomáticos iraníes. <span class='hl-red'>La guerra sale del campo de batalla y llega a la infraestructura civil de países neutrales.</span> ¿Siguiente: Dubai? Doha?"
  },
  {
    label: "🎯 Oportunidad exclusiva",
    content: "<span class='hl'>El Knesset vota 106-0 disolverse.</span> La crisis ultra-ortodoxa ha derrumbado la coalición de Netanyahu <span class='hl-red'>mientras Israel lucha en 3 frentes.</span> Tema APROBADO por el equipo. Elecciones anticipadas en un país en guerra."
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$99.80 ↑1.4%</span> · Ormuz: <span class='hl-red'>día 95</span> · Hezbollah: <span class='hl-red'>rechaza ceasefire</span><br>Knesset: <span class='hl-red'>106-0 disolución</span> · Colombia: <span class='hl'>De la Espriella 80%</span> · G7: <span class='hl'>15-17 JUN</span>"
  }
],

/* ── VÍDEOS VP PUBLICADOS ─────────────────────────────────── */
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

{
  title: "Irán ataca aeropuerto civil de Kuwait con drones: 1 muerto, 63 heridos, terminal de pasajeros destruida",
  tags: [{ cls:"tag-break", text:"BREAKING" },{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-me", text:"ORIENTE MEDIO" }],
  pills: ["1 muerto (nacional indio)","63 heridos, algunos graves","Terminal pasajeros destruida","Kuwait expulsa 2 diplomáticos iraníes"],
  why: "Irán ataca infraestructura CIVIL de un país NEUTRAL. Kuwait no estaba en guerra. Si el Golfo ya no es seguro para aeropuertos civiles, el modelo económico de toda la región (hub financiero + aviación + turismo) se tambalea.",
  viralPct: 96, viralCls: "vf-red",
  viralSources: "WaPo, NPR, CNN, Washington Times — cobertura como escalada cualitativa",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Khamenei_crop.jpg?width=800",
  imageAlt: "Liderazgo iraní", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Drones iraníes impactaron una terminal de pasajeros del aeropuerto internacional de Kuwait el 3 de junio, matando a un nacional indio e hiriendo a 63 personas. El aeropuerto había reabierto el lunes tras meses de cierre por la guerra. Kuwait expulsó a 2 diplomáticos iraníes. CENTCOM dijo que fue un 'ataque deliberado, calculado e injustificado'. Irán afirmó que el daño fue causado por un interceptor estadounidense fallido, lo que CENTCOM negó.",
    context: "Es la primera vez en esta guerra que Irán ataca infraestructura civil de un país neutral del Golfo. Kuwait no es beligerante — alberga bases de EEUU pero no participa en operaciones ofensivas. El ataque cruzó una línea: de bases militares a aeropuertos civiles. Bahréin también fue atacado con misiles (sede de la 5ª Flota de EEUU).",
    vp: "El ángulo VP no es el ataque sino la consecuencia: si los aeropuertos del Golfo no son seguros, el modelo económico de Dubai, Doha y Abu Dhabi (hubs de aviación + finanzas + turismo) está en riesgo. Conexión con la pregunta: ¿puede el Golfo seguir siendo el centro financiero del mundo si Irán ataca aeropuertos civiles?",
    sources: [
      { headline: "Kuwait says Iranian drones hit airport and killed 1", medium: "NPR", date: "2026-06-03", url: "https://www.npr.org/2026/06/03/g-s1-125566/iran-war-updates", desc: "Crónica completa del ataque" },
      { headline: "Iranian attack leaves 1 dead, dozens injured in Kuwait", medium: "Washington Post", date: "2026-06-03", url: "https://www.washingtonpost.com/world/2026/06/03/us-iran-trade-strikes-kuwait-airport-hit-amid-stalled-peace-talks/", desc: "Detalles y reacciones diplomáticas" },
      { headline: "Iranian attack on Kuwait airport puts deadly dent into ceasefire", medium: "Washington Times", date: "2026-06-03", url: "https://www.washingtontimes.com/news/2026/jun/3/iranian-attack-kuwait-airport-puts-deadly-dent-ceasefire/", desc: "Impacto en las negociaciones" }
    ],
    verification: "NPR, WaPo, Washington Times, CNN. CENTCOM comunicado oficial. Kuwait FM declaración."
  }
},

{
  title: "Knesset vota 106-0 disolverse: la crisis ultra-ortodoxa derriba a Netanyahu mientras Israel lucha en 3 frentes",
  tags: [{ cls:"tag-break", text:"BREAKING" },{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-me", text:"ORIENTE MEDIO" }],
  pills: ["106-0 primera lectura disolución","Partidos ultra-ortodoxos abandonan coalición","Crisis por exención servicio militar","Elecciones anticipadas en país en guerra"],
  why: "Israel va a elecciones anticipadas porque los ultra-ortodoxos prefieren tumbar el gobierno antes que ir al ejército. Todo esto mientras el país lucha en Líbano, contra Irán y en Gaza. Es la democracia devorándose a sí misma en tiempo de guerra.",
  viralPct: 95, viralCls: "vf-red",
  viralSources: "Times of Israel, WaPo, NPR, Al Jazeera — cobertura como crisis constitucional",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Knesset_Building_(South_Side).JPG?width=800",
  imageAlt: "Edificio del Knesset, Jerusalén", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Israel.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El Knesset israelí aprobó por 106-0 la primera lectura de un proyecto de ley para disolver la cámara y convocar elecciones anticipadas. Los partidos ultra-ortodoxos de la coalición de Netanyahu abandonaron el gobierno tras la negativa a consagrar en ley la exención del servicio militar para los estudiantes de yeshivá. Los partidos haredi 'cortaron el cable' de la coalición sobre la crisis del reclutamiento.",
    context: "Israel tiene servicio militar obligatorio para la mayoría, pero los ultra-ortodoxos han estado exentos desde 1948. 13.000 hombres haredi alcanzan la edad de reclutamiento cada año pero menos del 10% se alista. El ejército los necesita desesperadamente con 3 frentes activos. Los partidos ultra-ortodoxos tienen tanto poder en la coalición que prefieren tumbar el gobierno antes que ceder. Es la primera vez que un gobierno israelí cae por el tema del reclutamiento durante una guerra activa.",
    vp: "TEMA APROBADO por el equipo. El ángulo VP es profundo: la demografía como bomba de tiempo. Los ultra-ortodoxos son el sector de más rápido crecimiento. Si la exención continúa, en 20 años un tercio de los hombres israelíes no servirán. La paradoja: el país más militarizado de la región tiene un ejército que no puede reclutar a una parte crítica y creciente de su población.",
    sources: [
      { headline: "Knesset passes first reading of bill to dissolve parliament", medium: "Times of Israel", date: "2026-06-04", url: "https://www.timesofisrael.com/liveblog-june-04-2026/", desc: "Votación 106-0 y contexto político" },
      { headline: "Israel heads for early elections as ultra-Orthodox crisis topples Netanyahu coalition", medium: "Al Jazeera", date: "2026-06-04", url: "https://www.aljazeera.com/news/2026/6/4/israel-and-lebanon-agree-to-conditional-ceasefire", desc: "Abandono de los partidos haredi" },
      { headline: "Ultra-Orthodox protesters block roads across Israel over military draft", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/2026/06/02/nx-s1-5844080/ultra-orthodox-protests-israel", desc: "Contexto: protestas masivas previas" }
    ],
    verification: "Times of Israel, Al Jazeera, NPR. Actas del Knesset. Votación documentada."
  }
},

{
  title: "Hezbollah rechaza el ceasefire Israel-Líbano: 'Irse del sur mientras nos bombardean significa rendición'",
  tags: [{ cls:"tag-break", text:"BREAKING" },{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-me", text:"ORIENTE MEDIO" }],
  pills: ["Kassem: 'rendición inaceptable'","Israel-Líbano firmaron acuerdo","Hezbollah dice NO","Zonas piloto LAF rechazadas de facto"],
  why: "Israel y el gobierno libanés acuerdan un ceasefire. Hezbollah dice que no. El problema: Hezbollah controla el sur de facto. Un acuerdo sin Hezbollah es papel mojado. Ninguna milicia en la historia se ha desarmado mientras la bombardean.",
  viralPct: 91, viralCls: "vf-red",
  viralSources: "NPR, WaPo, Al Jazeera, AFP — breaking de alto impacto",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort1982.jpg?width=800",
  imageAlt: "Castillo de Beaufort, sur del Líbano", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lebanon.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Hezbollah rechazó formalmente el acuerdo de ceasefire alcanzado entre Israel y el gobierno libanés el 4 de junio. El líder Naim Kassem declaró: 'La demanda de que nuestros combatientes abandonen el sur del Líbano mientras están bajo ataque significaría rendición, derrota y lograr los objetivos del enemigo'. El mismo día, 10 personas murieron en ataques israelíes en el sur del Líbano.",
    context: "El acuerdo incluía 'zonas piloto' donde las Fuerzas Armadas Libanesas (LAF) tomarían control exclusivo del territorio, excluyendo a Hezbollah. Pero Hezbollah controla el sur de facto desde 2000 y no va a ceder territorio mientras le bombardean. Patrón histórico: el IRA solo se desarmó después de que cesaron los ataques (Viernes Santo 1998). Las FARC solo se desarmaron tras un acuerdo de paz completo (2016). Ningún grupo armado se desarma bajo fuego.",
    vp: "TEMA EN INVESTIGACION (aprobado para buscar enfoque). El ángulo profundo: por qué ninguna milicia en la historia se ha desarmado mientras la atacaban. IRA, FARC, Hezbollah 2006 — el patrón es siempre el mismo. No puedes negociar la paz y avanzar militarmente al mismo tiempo. La lección que Israel debería haber aprendido de su propia historia (1982-2000).",
    sources: [
      { headline: "Hezbollah rejects ceasefire deal agreed on by Israel and Lebanon", medium: "NPR", date: "2026-06-04", url: "https://www.npr.org/2026/06/04/g-s1-125942/israel-lebanon-ceasefire", desc: "Rechazo formal de Hezbollah" },
      { headline: "What to know about the ceasefire deal between Israel and Lebanon", medium: "Washington Post", date: "2026-06-04", url: "https://www.washingtonpost.com/world/2026/06/04/israel-lebanon-hezbollah-ceasefire-fighting/1ac6c5ee-6017-11f1-9c46-d6211372eede_story.html", desc: "Contenido del acuerdo y rechazo" },
      { headline: "Ceasefire Violations in Lebanon (June 4)", medium: "Anarchist Federation", date: "2026-06-04", url: "https://www.anarchistfederation.net/ceasefire-violations-in-lebanon-june-4-2026", desc: "Documentación de violaciones" }
    ],
    verification: "NPR, WaPo, Al Jazeera, AFP. Declaraciones de Kassem documentadas."
  }
},

{
  title: "Putin habla hoy en SPIEF pese a los drones en San Petersburgo: 'Controlamos 100% de LPR, 85% de DPR'",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-eu", text:"EUROPA" }],
  pills: ["SPIEF 3-6 JUN: 'Davos de Putin'","100% LPR, 85% DPR, 80% Zaporozhye","2.440 km² tomados recientemente","Drones ucranianos atacaron San Petersburgo el 3 JUN"],
  why: "Putin da cifras territoriales concretas en su evento de prestigio — mientras drones ucranianos de $50K le incendian terminales petroleros. La contradicción entre los datos de conquista y la vulnerabilidad real de Rusia es el ángulo.",
  viralPct: 87, viralCls: "vf-orange",
  viralSources: "France24, Al Jazeera, TASS, UAWire — discurso con datos concretos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Peter_%26_Paul_fortress_in_SPB_03.jpg?width=800",
  imageAlt: "San Petersburgo", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Russia.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Putin participa hoy en la sesión plenaria del SPIEF 2026 en San Petersburgo. En una reunión previa con agencias internacionales, declaró que Rusia controla el 100% de la República Popular de Lugansk, más del 85% de la RPD y el 80% de la región de Zaporozhye, habiendo capturado 2.440 km² recientemente. El discurso se produce 48 horas después del ataque ucraniano con drones a un terminal petrolero de San Petersburgo.",
    context: "El SPIEF es el escaparate económico del Kremlin para atraer inversores. Asisten delegaciones de países no occidentales. Putin presenta datos de avance territorial mientras Ucrania demuestra que puede golpear su segunda ciudad. La paradoja: Rusia avanza en Ucrania pero no puede proteger San Petersburgo.",
    vp: "Tema en investigación (San Petersburgo drones aprobado para profundizar). Los datos territoriales de Putin vs la vulnerabilidad demostrada por los drones ucranianos es una paradoja concreta con cifras.",
    sources: [
      { headline: "Putin's key remarks at SPIEF meeting with international media", medium: "Pravda EU", date: "2026-06-04", url: "https://eu.news-pravda.com/world/2026/06/04/204003.html", desc: "Datos territoriales y declaraciones" },
      { headline: "Putin prepares SPIEF speech despite Ukrainian drone strikes", medium: "UAWire", date: "2026-06-04", url: "https://www.uawire.org/putin-prepares-spief-speech-despite-ukrainian-drone-strikes-on-st-petersburg", desc: "Contexto de seguridad" },
      { headline: "Ukraine's attack on Saint Petersburg 'brings war back to Russia'", medium: "France 24", date: "2026-06-03", url: "https://www.france24.com/en/ukraine-s-attack-on-saint-petersburg-brings-war-back-to-russia", desc: "Impacto del ataque" }
    ],
    verification: "Pravda EU, UAWire, France24, Al Jazeera, TASS. Declaraciones de Putin en conferencia de prensa."
  }
},

{
  title: "Brent roza $100 por 4ª sesión consecutiva — Ormuz día 95, deal Irán sin firmar, Kuwait atacado",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-eco", text:"ECONOMÍA" }],
  pills: ["Brent $99.80 ↑1.4%","4ª subida consecutiva","Ormuz día 95: 10 barcos/día","Aeropuerto Kuwait destruido = prima de riesgo"],
  why: "El petróleo está a centavos de $100. Cada escalada lo empuja más arriba. El ataque al aeropuerto de Kuwait añade una prima nueva: si la infraestructura civil del Golfo no es segura, el riesgo geopolítico se multiplica.",
  viralPct: 82, viralCls: "vf-orange",
  viralSources: "Fortune, TradingEconomics, World Oil — datos de mercado",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oil_platform_P-51_(Brazil).jpg?width=800",
  imageAlt: "Plataforma petrolera", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Crude_oil_prices_since_1861.png?width=800",
  imageCredit: "Petrobras / Wikimedia", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El Brent subió un 1.4% a $99.80, a centavos de romper la barrera psicológica de $100, marcando la 4ª subida consecutiva. El impulso viene del ataque iraní al aeropuerto de Kuwait (infraestructura civil), el rechazo de Hezbollah al ceasefire, y las negociaciones Irán-EEUU estancadas. Ormuz cumple 95 días con solo 10 barcos/día.",
    context: "El Brent no ha superado $100 desde el pico de abril. Si lo rompe, el impacto en gasolina y economías europeas/latinoamericanas será inmediato. La nueva variable: los ataques a infraestructura civil del Golfo añaden una prima de riesgo que no existía.",
    vp: "Dato contextual esencial para todas las propuestas de Oriente Medio.",
    sources: [
      { headline: "Brent crude oil - Price - Chart", medium: "Trading Economics", date: "2026-06-05", url: "https://tradingeconomics.com/commodity/brent-crude-oil", desc: "Datos en tiempo real" },
      { headline: "Strait of Hormuz traffic remains limited", medium: "World Oil", date: "2026-06-02", url: "https://worldoil.com/news/2026/6/2/strait-of-hormuz-traffic-remains-limited-despite-peace-deal-talks/", desc: "Tráfico Ormuz" },
      { headline: "Current price of oil June 2026", medium: "Fortune", date: "2026-06-04", url: "https://fortune.com/article/price-of-oil-06-04-2026/", desc: "Análisis mercado petrolero" }
    ],
    verification: "TradingEconomics, Fortune, World Oil."
  }
},

{
  title: "Irán-EEUU alcanzan MOU tentativo: 60 días de ceasefire + Ormuz sin peajes + marco nuclear — falta firma de Trump",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-me", text:"ORIENTE MEDIO" }],
  pills: ["60 días ceasefire","Ormuz: sin peajes + retirar minas en 30 días","440.9 kg uranio enriquecido 60% en juego","Bloqueo naval se levanta proporcional a tráfico"],
  why: "El contenido del MOU es público por primera vez: Ormuz sin peajes, retirar minas, negociar uranio enriquecido. Pero Trump no ha firmado, dice que las negociaciones son 'aburridas', y mientras tanto Irán ataca aeropuertos. El deal más frágil del mundo tiene contenido concreto pero cero voluntad política.",
  viralPct: 88, viralCls: "vf-orange",
  viralSources: "PBS, Al Jazeera, Axios, CNN — contenido del MOU exclusivo",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_hormuz_full.jpg?width=800",
  imageAlt: "Estrecho de Ormuz", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "NASA / Wikimedia", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "PBS reportó que negociadores de EEUU e Irán alcanzaron un MOU tentativo que incluye: extensión del ceasefire por 60 días, reapertura de Ormuz sin peajes con retirada de minas en 30 días, levantamiento proporcional del bloqueo naval, y marco para negociar el destino de los 440.9 kg de uranio enriquecido al 60% de Irán (un paso técnico del 90% de grado armamentístico). Falta la aprobación final de Trump.",
    context: "El MOU tiene contenido real por primera vez. Pero la contradicción es total: mientras los negociadores acuerdan, Irán ataca Kuwait y Trump dice que las negociaciones son 'aburridas'. El deal existe en papel pero no en la realidad del campo de batalla.",
    vp: "Tema en investigación (aprobado para buscar enfoque no saturado). El contenido del MOU — especialmente los 440.9 kg de uranio y la cláusula de minas — es dato duro para un video profundo sobre QUE CEDE realmente EEUU.",
    sources: [
      { headline: "U.S. and Iranian negotiators reach tentative deal", medium: "PBS", date: "2026-06-04", url: "https://www.pbs.org/newshour/world/u-s-and-iranian-negotiators-reach-tentative-deal-to-extend-ceasefire-and-start-new-nuclear-talks", desc: "Contenido completo del MOU" },
      { headline: "US-Iran 60-day proposal: What we know", medium: "Al Jazeera", date: "2026-05-29", url: "https://www.aljazeera.com/news/2026/5/29/us-iran-60-day-proposal-what-we-know", desc: "Análisis cláusula por cláusula" },
      { headline: "What's in the proposed deal?", medium: "CNN", date: "2026-05-24", url: "https://www.cnn.com/2026/05/24/middleeast/iran-us-proposed-deal-wwk-intl", desc: "Explicación del marco nuclear" }
    ],
    verification: "PBS, Al Jazeera, CNN, Axios. Contenido del MOU documentado por múltiples fuentes."
  }
},

{
  title: "G7 en Francia en 10 días (15-17 JUN): Trump se sienta con los aliados a los que les ha declarado la guerra comercial",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-eu", text:"EUROPA" },{ cls:"tag-eeuu", text:"EEUU" }],
  pills: ["15-17 JUN en Évian-les-Bains, Francia","Agenda: Irán + Ucrania + aranceles","Trump vs aliados: guerra comercial activa","Francia preside"],
  why: "Trump necesita a los aliados del G7 para el deal con Irán y para Ucrania. Pero les está aplicando aranceles del 30% y retirando tropas. La cumbre será el teatro más incómodo del año.",
  viralPct: 78, viralCls: "vf-orange",
  viralSources: "WEF, G7 oficial, Wikipedia — pre-cumbre, cobertura creciente",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg?width=800",
  imageAlt: "Diplomacia internacional", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La 52ª cumbre del G7 se celebra el 15-17 de junio en Évian-les-Bains, Francia. El tema: 'Diplomacia pragmática: el camino hacia un futuro estable'. Trump asistirá en medio de tensiones con los aliados: aranceles del 30%, retiro de tropas de Europa, y la necesidad de apoyo para el deal con Irán y la guerra de Ucrania.",
    context: "La paradoja: Trump necesita al G7 para presionar a Irán pero al mismo tiempo está en guerra comercial con Europa. Francia preside y Macron buscará presionar sobre aranceles. La cumbre será el primer encuentro presencial Trump-aliados europeos desde la retirada de tropas y los aranceles.",
    vp: "Contexto importante para las próximas propuestas. La cumbre del G7 puede generar propuesta específica si produce algo concreto.",
    sources: [
      { headline: "52nd G7 summit", medium: "Wikipedia", date: "2026-06-05", url: "https://en.wikipedia.org/wiki/52nd_G7_summit", desc: "Fecha, sede y agenda" },
      { headline: "Blockade diplomacy and other geopolitical updates", medium: "WEF", date: "2026-05-30", url: "https://www.weforum.org/stories/2026/05/blockade-diplomacy-and-other-geopolitical-stories-to-know-this-month/", desc: "Contexto geopolítico pre-cumbre" },
      { headline: "G7 Summit Agenda 2026", medium: "Academic Jobs", date: "2026-05-28", url: "https://www.academicjobs.com/higher-education-news/g7-summit-agenda-2026-key-priorities-and-global-implications-792", desc: "Prioridades y agenda" }
    ],
    verification: "G7 oficial (g7.canada.ca), Wikipedia, WEF."
  }
},

{
  title: "Colombia: mercados de predicción dan 80% a De la Espriella — Valencia lo apoya pero su vice no",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-latam", text:"LATAM" }],
  pills: ["80% probabilidad en Kalshi","Valencia endosa a De la Espriella","Vice Oviedo NO endosa","1.6M votos Valencia + 1M Fajardo en juego"],
  why: "La segunda vuelta se inclina hacia De la Espriella. El tercer lugar (Valencia, 1.6M votos) se divide: ella endosa, su vice no. Los mercados ven 80% de victoria del outsider. 16 días para el desenlace.",
  viralPct: 82, viralCls: "vf-orange",
  viralSources: "Americas Quarterly, AS/COA poll tracker, NPR, Kalshi — datos post-1ª vuelta",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=800",
  imageAlt: "Política colombiana", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Los mercados de predicción (Kalshi) asignan un 80% de probabilidad a una victoria de De la Espriella en el runoff del 21 de junio. Paloma Valencia (3ª con 1.6M votos) endosó a De la Espriella, pero su compañero de fórmula Juan Daniel Oviedo no lo hizo. Los votos de Sergio Fajardo (1M+) y los 400K votos en blanco están en juego. Americas Quarterly lo califica de 'runoff polarizante'.",
    context: "TEMA APROBADO. 16 días para publicar. El patrón Bukele-Milei-De la Espriella. Timing: publicar antes del 14 JUN para máxima relevancia.",
    vp: "VP publicó Colombia 1 JUN (265K). Bukele fue 6.59M. El patrón continental de outsiders es el ángulo que nadie hace.",
    sources: [
      { headline: "REACTION: Colombia Heads Toward a Polarizing Runoff", medium: "Americas Quarterly", date: "2026-06-02", url: "https://www.americasquarterly.org/article/reaction-colombia-heads-toward-polarizing-runoff/", desc: "Análisis del runoff" },
      { headline: "Poll Tracker: Colombia's 2026 Presidential Election", medium: "AS/COA", date: "2026-06-04", url: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election", desc: "Encuestas actualizadas" },
      { headline: "Right-wing candidate pulls ahead in first round", medium: "NPR", date: "2026-06-01", url: "https://www.npr.org/2026/06/01/nx-s1-5842833/first-round-colombia-presidential-vote", desc: "Contexto primera vuelta" }
    ],
    verification: "Kalshi, Americas Quarterly, AS/COA, NPR. Resultados oficiales Registraduría."
  }
},

{
  title: "CPC confirma purga de 9 generales y 3 líderes de industria militar: el ejército más grande del mundo sin mandos",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-asia", text:"ASIA-PACÍFICO" }],
  pills: ["9 generales purgados oficialmente","Zhang Youxia: general #1 de China arrestado","3 líderes industria militar caídos","Objetivo 2027 de modernización en riesgo"],
  why: "Xi ha purgado a TODA la cúpula militar. El general más importante de China (Zhang Youxia) está arrestado. El ejército más grande del mundo se acerca al centenario de 2027 (cuando debería estar 'listo para combate') sin generales experimentados.",
  viralPct: 85, viralCls: "vf-orange",
  viralSources: "Foreign Policy análisis profundo, Vision Times, NBC News — cobertura creciente",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/People%27s_Liberation_Army_Flag_of_the_People%27s_Republic_of_China.svg?width=800",
  imageAlt: "Instalación militar china", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_People%27s_Republic_of_China.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El CPC confirmó oficialmente la purga de 9 generales de alto rango y 3 líderes de la industria militar-industrial por 'graves violaciones de disciplina y ley'. El más importante: Zhang Youxia, vicepresidente de la Comisión Militar Central — el general más poderoso de China después de Xi. Foreign Policy publicó un análisis profundo sobre cómo las purgas han dejado 'la bancada de generales en activo casi vacía'.",
    context: "TEMA APROBADO. Las purgas comenzaron en 2023 pero la de Zhang Youxia (enero 2026) fue el pico. El objetivo de Xi es 'preparar al ejército para el combate' para el centenario de 2027 del PLA. Pero ha purgado a los generales que deberían dirigir esa preparación. Foreign Policy: 'la red centrada en Zhang y Liu cayó en enero, marcando el punto más alto de un ciclo de purgas que dejó la bancada de generales casi vacía'.",
    vp: "APROBADO. Gap enorme en español. El ángulo VP: Xi quiere un ejército listo para 2027 pero ha eliminado a los generales que deberían prepararlo. Es como despedir a los pilotos antes de un vuelo. ¿Puede China invadir Taiwán con un ejército sin mandos experimentados? La conexión Taiwán es natural y obligatoria.",
    sources: [
      { headline: "Why Is Xi Still Purging His Generals?", medium: "China Leadership Monitor (Hoover)", date: "2026-05-15", url: "https://www.prcleader.org/post/why-is-xi-still-purging-his-generals", desc: "Análisis académico profundo" },
      { headline: "The Deeper Pattern Behind China's Military Purges", medium: "Foreign Policy", date: "2026-05-01", url: "https://foreignpolicy.com/2026/05/01/xi-jinping-china-military-factions-purges-centenary/", desc: "Patrón sistémico de las purgas" },
      { headline: "CCP Confirms Purge of Nine Senior Generals", medium: "Vision Times", date: "2026-04-20", url: "https://www.visiontimes.com/2026/04/20/ccp-confirms-purge-of-nine-senior-generals-and-three-military-industrial-leaders-over-discipline-violations.html", desc: "Confirmación oficial" }
    ],
    verification: "Foreign Policy, China Leadership Monitor (Hoover), Vision Times, NBC. Boletín oficial del CPC."
  }
},

{
  title: "Zapatero: 12 días para la declaración — correos de PdVSA y CLAP podrían revelar la red Venezuela-España",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-es", text:"ESPAÑA" }],
  pills: ["Declaración: 17-18 JUN","3 delitos imputados","Correos oficiales autorizados","Plus Ultra: €53M rescate con fondos venezolanos"],
  why: "TEMA APROBADO. 12 días para la declaración. Ventana editorial: publicar antes del 10 JUN. Si los correos revelan la conexión directa PdVSA-CLAP-Zapatero, pasa de corrupción nacional a red geopolítica de influencia petrolera.",
  viralPct: 84, viralCls: "vf-orange",
  viralSources: "The Objective, Infobae, NPR — dominante en medios hispanos",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_la_Moncloa.jpg?width=800",
  imageAlt: "Palacio de la Moncloa", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La declaración de Zapatero ante la Audiencia Nacional sigue programada para el 17-18 de junio. Imputado por organización criminal, tráfico de influencias y falsedad documental. Los correos oficiales del expresidente y sus hijas fueron autorizados como prueba. El caso investiga si €53M de Plus Ultra provenían de blanqueo de fondos de PdVSA y el programa CLAP.",
    context: "APROBADO. VP cubrió imputación (~22 MAY). El ángulo VP aprobado: la red geopolítica Venezuela-España, no solo corrupción. Timing: publicar antes del 10 JUN.",
    vp: "Ventana editorial de 12 días. La tesis: la primera operación documentada de influencia de un estado petrolero latinoamericano a través de un expresidente europeo.",
    sources: [
      { headline: "Zapatero imputado por Plus Ultra", medium: "The Objective", date: "2026-05-19", url: "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/", desc: "Imputación" },
      { headline: "Zapatero investigation", medium: "NPR", date: "2026-05-20", url: "https://www.npr.org/2026/05/20/nx-s1-5828248/former-spanish-pm-zapatero-investigation", desc: "Cobertura internacional" },
      { headline: "Última hora caso Zapatero", medium: "Infobae", date: "2026-05-26", url: "https://www.infobae.com/espana/2026/05/26/ultima-hora-del-caso-zapatero-novedades-del-sumario-de-plus-ultra-la-caja-fuerte-del-expresidente-y-reacciones-en-directo/", desc: "Sumario" }
    ],
    verification: "The Objective, NPR, Infobae. Audiencia Nacional."
  }
},

{
  title: "UE migración: la ley 'más dura de su historia' empieza a aplicarse — 5 países negocian centros en África",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-eu", text:"EUROPA" }],
  pills: ["Return hubs en África","Detención hasta 2 años","5 países negocian: DE, NL, AT, DK, GR","Amnistía: 'cárceles offshore y perfilamiento racial'"],
  why: "TEMA APROBADO. La UE que creó la Declaración de Derechos Humanos ahora construye centros de detención en África. El modelo que copia — el australiano — fue declarado inhumano y abandonado. Las negociaciones con países africanos ya están en curso.",
  viralPct: 85, viralCls: "vf-orange",
  viralSources: "France24, Euronews, ImpACT, Amnesty — cobertura sostenida",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg?width=800",
  imageAlt: "Parlamento Europeo", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=800",
  imageCredit: "Diliff / Wikimedia", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "La ley migratoria más restrictiva de la UE está en marcha. Return hubs offshore en África, detención ampliada a 2 años, biometría forzada, confiscación. Alemania, Países Bajos, Austria, Dinamarca y Grecia negocian activamente con estados africanos. Amnistía Internacional denuncia 'cárceles offshore y perfilamiento racial sin precedentes'.",
    context: "APROBADO. France24: 'the toughest EU migration law to date'. El modelo copia el sistema australiano de Nauru/Manus — que Australia abandonó parcialmente. La presión electoral de la extrema derecha fuerza a centristas a copiar sus políticas.",
    vp: "El ángulo VP aprobado: la UE copia lo que condenó. Modelo australiano abandonado. Giro ideológico sistémico. Gap en español: nadie conecta con Nauru/Manus.",
    sources: [
      { headline: "Toughest EU migration law to date", medium: "Euronews", date: "2026-06-01", url: "https://www.euronews.com/my-europe/2026/06/01/eu-set-to-back-return-hubs-in-toughest-migration-crackdown-yet", desc: "La ley más dura" },
      { headline: "EU agrees deal for return hubs", medium: "France 24", date: "2026-06-02", url: "https://www.france24.com/en/europe/20260602-eu-agrees-deal-for-deporting-migrants-to-third-country-return-hubs", desc: "Acuerdo" },
      { headline: "EU's Deportation Framework", medium: "ImpACT", date: "2026-06-03", url: "https://impactpolicies.org/news/939/eus-new-deportation-framework-practical-fix-or-humanrights-shortcut", desc: "Análisis crítico" }
    ],
    verification: "France24, Euronews, ImpACT, Amnistía Internacional."
  }
},

{
  title: "EEUU dice a Taiwán que lo defenderá pero le retira armas pendientes: la paradoja de $20.000M en pedidos atrasados",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-asia", text:"ASIA-PACÍFICO" }],
  pills: ["$20.000M en armas pendientes","China +7% presupuesto militar ($278B)","China prepara bloqueo naval","Taiwán entrena con EEUU, Japón y Filipinas"],
  why: "TEMA APROBADO. EEUU promete defender a Taiwán pero no le entrega las armas prometidas ($20.000M pendientes). China sube gasto militar 7% y ensaya bloqueos. La paradoja: prometer protección y no entregar las herramientas.",
  viralPct: 80, viralCls: "vf-orange",
  viralSources: "Japan Times, AEI, ASPI Strategist, NBC — análisis estratégico",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Republic_of_China.svg?width=800",
  imageAlt: "Corbeta de la armada taiwanesa", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Republic_of_China.svg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "Taiwán tiene $20.000M en pedidos de armas estadounidenses pendientes mientras China aumentó su presupuesto militar un 7% a $278.000M en 2026 y ensaya escenarios de bloqueo naval. Taiwán entrena conjuntamente con EEUU, Japón y Filipinas. Pero los analistas de ASPI concluyen que 2026 no será el año de una invasión — China persiste con acciones coercitivas para 'erosionar la voluntad de Taiwán y estrechar sus opciones estratégicas'.",
    context: "APROBADO. Las capacidades anfibias, de ataque de largo alcance y contra-intervención de China mejoraron significativamente en 2025 hacia el objetivo de modernización del centenario de 2027. Pero el PLA ha sido vaciado de generales experimentados (ver purga Xi). La paradoja doble: EEUU promete pero no entrega, China amenaza pero no tiene mandos.",
    vp: "El ángulo VP es la DOBLE paradoja: EEUU defiende sin armas + China amenaza sin generales. Conexión natural con la propuesta de purga de Xi. Juntos son un video de 25-30 min sobre 'el estrecho más peligroso del mundo donde ninguno de los dos bandos está preparado'.",
    sources: [
      { headline: "As China rehearses a blockade, Taiwan's coast guard prepares", medium: "Japan Times", date: "2026-03-16", url: "https://www.japantimes.co.jp/news/2026/03/16/asia-pacific/politics/taiwan-coast-guard-china-blockade/", desc: "Preparación taiwanesa" },
      { headline: "Xi's Taiwan scorecard: why 2026 is not the year", medium: "ASPI Strategist", date: "2026-04-10", url: "https://www.aspistrategist.org.au/xis-taiwan-scorecard-why-2026-is-not-the-year/", desc: "Análisis por qué no habrá invasión en 2026" },
      { headline: "Purge of top Chinese general throws military into turmoil", medium: "NBC News", date: "2026-01-28", url: "https://www.nbcnews.com/world/china/china-xi-jinping-general-zhang-corruption-purge-taiwan-invasion-rcna255911", desc: "Purga y consecuencias para Taiwán" }
    ],
    verification: "Japan Times, ASPI, NBC. Datos de presupuesto del Ministerio de Finanzas chino."
  }
},

{
  title: "Ébola: 344+ confirmados, 60 muertes, IRC advierte que brote es 'mucho peor' — cepa sin vacuna",
  tags: [{ cls:"tag-hoy", text:"HOY" },{ cls:"tag-af", text:"AFRICA" }],
  pills: ["344+ confirmados","60 muertes","Cepa Bundibugyo: sin vacuna","IRC: solo 20% contactos rastreados"],
  why: "El brote sigue creciendo con 23 casos/día. Si llega a 500 o sale de África, pasa de vigilar a propuesta inmediata.",
  viralPct: 75, viralCls: "vf-orange",
  viralSources: "CDC, ECDC, WHO — cobertura institucional",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_em.png?width=800",
  imageAlt: "Virus del Ébola", imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_em.png?width=800",
  imageCredit: "CDC / Wikimedia", imageSource: "commons.wikimedia.org",
  detail: {
    summary: "El brote de Ébola en RDC mantiene 344+ confirmados, 60 muertes y 116 sospechosos. IRC advierte que solo el 20% de contactos están rastreados. EEUU implementó screening en aeropuertos. La cepa Bundibugyo no tiene vacuna ni tratamiento específico.",
    context: "PHEIC declarada. Si la tasa de 23 casos/día se mantiene, superará 500 en 7-10 días.",
    vp: "En vigilar. Si sale de África o supera 500, pasa a propuesta.",
    sources: [
      { headline: "Ebola Outbreak: Current Situation", medium: "CDC", date: "2026-06-04", url: "https://www.cdc.gov/ebola/situation-summary/index.html", desc: "Datos CDC" },
      { headline: "Ebola disease outbreak in DRC and Uganda", medium: "ECDC", date: "2026-06-03", url: "https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda", desc: "Riesgo Europa" },
      { headline: "Confirmed Ebola cases near 300", medium: "NPR", date: "2026-06-01", url: "https://www.npr.org/2026/06/01/g-s1-125143/ebola-updates", desc: "Testimonios" }
    ],
    verification: "CDC, ECDC, WHO. Ministerio de Salud RDC."
  }
}

],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 7 temas (priorizando APROBADOS del tracker)
═════════════════════════════════════════════════════════════ */
proposals: [

{
  golden: true, number: "P1", flag: "il",
  title: "Israel se rompe por dentro: cómo 13.000 jóvenes ultra-ortodoxos al año están destruyendo al ejército más poderoso de Oriente Medio — mientras lucha en 3 guerras",
  tags: [{ cls:"tag-me", text:"ORIENTE MEDIO" },{ cls:"tag-break", text:"BREAKING" }],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Knesset se disuelve HOY + protestas masivas + 3 frentes" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren la guerra EXTERNA, nadie la implosión INTERNA" },
    { cls:"chip-vp",   text:"📺 VP: Netanyahu/Irán (152K) — ángulo 100% nuevo: la fractura demográfica" },
    { cls:"chip-comp", text:"🔍 Competencia: noticias sobre protestas, CERO análisis demográfico estructural" }
  ],
  potText: "EXPLOSIVO", potCls: "pot-fire",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Knesset_Building_(South_Side).JPG?width=1200",
  bannerAlt: "Knesset, Jerusalén", bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Israel.svg?width=1200",
  tesis: "El Knesset votó 106-0 disolverse. No por la guerra, no por Irán, no por Gaza — por el servicio militar de los ultra-ortodoxos. Israel tiene 3 guerras activas y no puede reclutar a un sector que crece más rápido que ningún otro: 13.000 hombres haredi alcanzan los 18 cada año y menos del 10% se alista. En 20 años, si la tendencia continúa, un tercio de los hombres israelíes no servirán en el ejército. El país que vive por su ejército está siendo devorado desde dentro por una bomba demográfica que ningún misil puede resolver. La pregunta no es si Israel puede ganar sus guerras — es si puede sobrevivir a su propia demografía.",
  fields: [
    { label: "🗞️ La noticia", value: "4 JUN: Knesset vota 106-0 primera lectura de disolución. Partidos ultra-ortodoxos abandonan coalición de Netanyahu por negarse a consagrar exención de servicio militar. 2 JUN: protestas masivas, coches ardiendo, soldado agredido. Todo mientras Israel pelea en Líbano (Beaufort), contra Irán (Kuwait) y en Gaza." },
    { label: "🔬 Segunda derivada", value: "La exención ultra-ortodoxa existe desde 1948 — Ben-Gurion la creó para 400 estudiantes de yeshivá. Hoy son cientos de miles. La tasa de natalidad haredi (6.6 hijos/mujer vs 3.0 media israelí) significa que cada década el problema se DUPLICA. Los partidos ultra-ortodoxos controlan la coalición porque tienen los escaños — y usan ese poder para preservar la exención que debilita al ejército que defiende el Estado que les da ese poder. Es un bucle de retroalimentación que se destruye a sí mismo." },
    { label: "❓ Gran pregunta", value: "¿Puede sobrevivir un Estado que depende de su ejército si el sector de población que más crece se niega a servir en él?" },
    { label: "⚔️ El conflicto", value: "Ultra-ortodoxos (poder político + demografía) vs ejército (necesidad existencial). Netanyahu (depende de ambos) vs la aritmética (no puede satisfacer a los dos). Religión vs Estado. 1948 (400 exentos) vs 2026 (cientos de miles). Democracia vs supervivencia militar." },
    { label: "⏰ Por qué ahora", value: "Knesset se disuelve HOY. Protestas del 2 JUN. 3 guerras activas simultáneamente. La contradicción es máxima: más guerra que nunca + más rechazo al servicio que nunca." },
    { label: "📺 VP ya lo trató?", value: "VP trató Netanyahu/Irán (12 MAY, 152K). NUNCA ha cubierto la fractura ultra-ortodoxa. Es un ángulo 100% nuevo que explica una debilidad estructural que nadie analiza en español." },
    { label: "🚀 Motor viral", value: "COBERTURA: Knesset disolución = breaking global. VISUAL: protestas, coches ardiendo, Knesset, mapas de demografía. CONFLICTO: religión vs ejército en el país más militarizado. AUDIENCIA: Israel siempre genera interés. YOUTUBE: la fractura interna NO está cubierta en español. VP: temas Israel funcionan (152K). DATO KILLER: 13.000 hombres/año que no sirven × 20 años = la mitad del ejército." },
    { label: "🔍 Señal competencia", value: "La competencia cubre las protestas como noticia. NADIE cubre el análisis demográfico estructural ni la proyección a 20 años. Gap total en español." },
    { label: "🔎 Qué investigar más", value: "Proyecciones demográficas CBS Israel (oficina estadística). Historia de la exención desde Ben-Gurion (1948). Presupuesto yeshivot vs presupuesto militar per cápita. Sentencias del Tribunal Supremo sobre la exención. ¿Qué pasa en otros países con servicio obligatorio y exenciones? Datos de natalidad por sector." }
  ],
  sources: [
    { headline: "Knesset passes first reading to dissolve parliament", medium: "Times of Israel", date: "2026-06-04", url: "https://www.timesofisrael.com/liveblog-june-04-2026/", desc: "Votación 106-0" },
    { headline: "Ultra-Orthodox protesters block roads across Israel", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/2026/06/02/nx-s1-5844080/ultra-orthodox-protests-israel", desc: "Protestas masivas" },
    { headline: "Israel faces early elections as ultra-Orthodox crisis topples coalition", medium: "Al Jazeera", date: "2026-06-04", url: "https://www.aljazeera.com/news/2026/6/4/israel-and-lebanon-agree-to-conditional-ceasefire", desc: "Caída de la coalición" },
    { headline: "Hezbollah rejects ceasefire deal", medium: "NPR", date: "2026-06-04", url: "https://www.npr.org/2026/06/04/g-s1-125942/israel-lebanon-ceasefire", desc: "Contexto: guerra continúa mientras política colapsa" }
  ]
},

{
  golden: false, number: "P2", flag: "",
  title: "Cuando la guerra llega al aeropuerto: por qué el ataque iraní a Kuwait amenaza el modelo económico de todo el Golfo Pérsico",
  tags: [{ cls:"tag-me", text:"ORIENTE MEDIO" },{ cls:"tag-eco", text:"ECONOMÍA" },{ cls:"tag-break", text:"BREAKING" }],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: WaPo, NPR, CNN — ataque a CIVIL en país NEUTRAL" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren el ataque, nadie la CONSECUENCIA para el modelo económico del Golfo" },
    { cls:"chip-vp",   text:"📺 VP: Eritrea/Mar Rojo (269K) — conexión chokepoints + seguridad regional" },
    { cls:"chip-comp", text:"🔍 Competencia: noticia bélica, CERO análisis económico de la vulnerabilidad del Golfo" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Khamenei_crop.jpg?width=1200",
  bannerAlt: "Oriente Medio", bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=1200",
  tesis: "Irán atacó un aeropuerto civil en Kuwait: 1 muerto, 63 heridos, terminal destruida. Kuwait NO estaba en guerra. Este es el momento en que el conflicto Irán-EEUU deja de ser una guerra entre dos potencias y empieza a amenazar la arquitectura económica del Golfo Pérsico. Dubai, Doha, Abu Dhabi — todo su modelo se basa en ser HUBS seguros: aviación, finanzas, turismo, logística. Si un dron iraní puede destruir una terminal de pasajeros en Kuwait, ¿qué impide que el siguiente llegue a Dubai International, el aeropuerto más transitado del mundo? Las aerolíneas, las aseguradoras y los inversores ya están recalculando. Y ese cálculo puede costarle al Golfo más que cualquier misil.",
  fields: [
    { label: "🗞️ La noticia", value: "3 JUN: drones iraníes destruyen terminal pasajeros aeropuerto Kuwait. 1 muerto (indio), 63 heridos. Aeropuerto había reabierto el lunes tras meses cerrado. Kuwait expulsa 2 diplomáticos. CENTCOM: 'ataque deliberado'. Bahréin también atacado (sede 5ª Flota EEUU)." },
    { label: "🔬 Segunda derivada", value: "El modelo económico del Golfo (Dubai, Doha, Riad Visión 2030) depende de una premisa: seguridad. Aviación (Emirates, Qatar Airways), finanzas (DIFC, QFC), turismo, exposiciones, inmobiliario — todo requiere que el inversor y el viajero crean que están seguros. Si esa premisa cae, el modelo cae. Un dron en un aeropuerto destruye más que una terminal: destruye la confianza que sostiene billones en inversión." },
    { label: "❓ Gran pregunta", value: "¿Puede el Golfo Pérsico seguir siendo el centro financiero y logístico del mundo si Irán puede alcanzar cualquier aeropuerto de la región?" },
    { label: "⚔️ El conflicto", value: "Irán (capacidad de atacar civiles) vs modelo económico del Golfo (depende de seguridad). Kuwait/Bahréin (neutrales arrastrados a la guerra) vs su propia vulnerabilidad. Aseguradoras (recalculan riesgo) vs aerolíneas (necesitan operar). Dubai (brand = seguridad) vs realidad (misiles a 300 km)." },
    { label: "⏰ Por qué ahora", value: "El ataque del 3 JUN es el primero contra infraestructura CIVIL de un país NEUTRAL. Cruzó una línea que no se había cruzado." },
    { label: "📺 VP ya lo trató?", value: "VP trató Eritrea/Mar Rojo (269K) — seguridad marítima regional. NUNCA ha analizado la vulnerabilidad del modelo económico del Golfo ante ataques. Ángulo completamente nuevo." },
    { label: "🚀 Motor viral", value: "BREAKING: aeropuerto civil destruido. VISUAL: terminal en llamas, aeropuerto, Dubai skyline bajo amenaza. CONFLICTO: seguridad vs economía del Golfo. AUDIENCIA: muchos hispanos trabajan/viajan al Golfo. MIEDO: ¿siguiente Dubai? VP: Eritrea 269K en tema de seguridad regional." },
    { label: "🔍 Señal competencia", value: "Cubierto como noticia bélica. NADIE analiza la consecuencia para el modelo económico de Dubai/Doha/Abu Dhabi. Gap claro." },
    { label: "🔎 Qué investigar más", value: "PIB del Golfo dependiente de aviación/turismo/finanzas. Pólizas de seguro para aerolíneas en la región. Inversión extranjera en Dubai/Qatar pre y post-guerra. ¿Qué pasaría con Emirates/Qatar Airways si se reclasifica la zona? Distancia Irán→Dubai en minutos de misil." }
  ],
  sources: [
    { headline: "Kuwait says Iranian drones hit airport and killed 1", medium: "NPR", date: "2026-06-03", url: "https://www.npr.org/2026/06/03/g-s1-125566/iran-war-updates", desc: "Crónica del ataque" },
    { headline: "Iranian attack leaves 1 dead, dozens injured in Kuwait", medium: "WaPo", date: "2026-06-03", url: "https://www.washingtonpost.com/world/2026/06/03/us-iran-trade-strikes-kuwait-airport-hit-amid-stalled-peace-talks/", desc: "Reacción Kuwait" },
    { headline: "Iranian attack on Kuwait airport", medium: "Washington Times", date: "2026-06-03", url: "https://www.washingtontimes.com/news/2026/jun/3/iranian-attack-kuwait-airport-puts-deadly-dent-ceasefire/", desc: "Impacto en negociaciones" }
  ]
},

{
  golden: false, number: "P3", flag: "lb",
  title: "Por qué ninguna milicia en la historia se ha desarmado mientras la bombardeaban — y por qué Israel repite el error de 1982",
  tags: [{ cls:"tag-me", text:"ORIENTE MEDIO" },{ cls:"tag-hoy", text:"HOY" }],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Hezbollah rechaza ceasefire HOY — breaking global" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren el rechazo, nadie el PATRON HISTORICO IRA-FARC-Hezbollah" },
    { cls:"chip-vp",   text:"📺 VP: Eritrea (269K) — el ángulo histórico-comparativo es 100% VP" },
    { cls:"chip-comp", text:"🔍 Competencia: noticias sobre el rechazo, CERO análisis comparativo con IRA/FARC" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaufort1982.jpg?width=1200",
  bannerAlt: "Castillo de Beaufort", bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lebanon.svg?width=1200",
  tesis: "Hezbollah rechazó el ceasefire: 'irse del sur mientras nos bombardean = rendición'. Todos se sorprenden. Nadie debería. Porque ninguna milicia en la historia se ha desarmado mientras la atacaban. El IRA solo dejó las armas DESPUÉS de que los ataques británicos cesaron (Viernes Santo, 1998). Las FARC solo se desarmaron DESPUÉS de un acuerdo completo (2016). El propio Hezbollah en 2006: ceasefire primero, negociación después. El patrón es siempre el mismo: primero paras de disparar, después negocias. Israel intenta lo contrario: negociar la paz mientras avanza militarmente. Es exactamente lo que hicieron en 1982 — y esa ocupación duró 18 años y CREÓ a Hezbollah.",
  fields: [
    { label: "🗞️ La noticia", value: "4 JUN: Hezbollah rechaza ceasefire Israel-Líbano. Kassem: 'irse del sur mientras nos atacan = rendición'. Israel y gobierno libanés acuerdan 'zonas piloto' pero Hezbollah dice NO. 10 personas mueren en ataques israelíes el mismo día del acuerdo." },
    { label: "🔬 Segunda derivada", value: "El error es conceptual, no táctico. Israel pide a Hezbollah que se retire del territorio que controla desde 2000 MIENTRAS le bombardea. En la historia de las negociaciones con grupos armados, esto NUNCA ha funcionado. IRA (1998): ceasefire → desarme gradual → acuerdo. FARC (2016): acuerdo primero → zonas de concentración → entrega de armas. Hezbollah 2006: Resolución 1701 → ceasefire → UNIFIL. El patrón es claro: disparar y negociar simultáneamente no produce paz, produce más guerra." },
    { label: "❓ Gran pregunta", value: "¿Por qué Israel repite en 2026 exactamente lo que ya le falló en 1982 — y espera un resultado diferente?" },
    { label: "⚔️ El conflicto", value: "Israel (quiere zona de seguridad) vs Hezbollah (no cede territorio bajo fuego). Historia (1982-2000: ocupación → creó Hezbollah) vs presente (2026: misma lógica). Diplomacia (acuerdo en papel) vs realidad (Hezbollah controla el terreno). IRA/FARC (modelos exitosos) vs Israel/Líbano (modelo que falla)." },
    { label: "⏰ Por qué ahora", value: "Hezbollah rechazó formalmente el ceasefire el 4 JUN. El patrón histórico explica POR QUÉ rechazó — y por qué era predecible." },
    { label: "📺 VP ya lo trató?", value: "VP trató Beaufort/Líbano indirectamente. NUNCA ha hecho el análisis comparativo IRA-FARC-Hezbollah. Es un video de 25 min con estructura clara: 3 casos, 1 patrón, 1 conclusión." },
    { label: "🚀 Motor viral", value: "CONFLICTO: historia vs error repetido. VISUAL: Beaufort, mapas 1982 vs 2026, IRA/FARC/Hezbollah. ESTRUCTURA: 3 casos comparados = video sólido. AUDIENCIA: Líbano-Israel genera interés. VP: temas Oriente Medio funcionan." },
    { label: "🔍 Señal competencia", value: "Nadie cubre la comparación histórica IRA-FARC-Hezbollah en español. Gap total." },
    { label: "🔎 Qué investigar más", value: "Cronología exacta de los desarmes de IRA y FARC. Resolución 1701 (2006). Historia de la zona de seguridad israelí 1982-2000. Doctrina de Hezbollah sobre repliegue. ¿Existe algún caso en que una milicia se desarmó bajo fuego? ¿Cuál?" }
  ],
  sources: [
    { headline: "Hezbollah rejects ceasefire deal", medium: "NPR", date: "2026-06-04", url: "https://www.npr.org/2026/06/04/g-s1-125942/israel-lebanon-ceasefire", desc: "Rechazo formal" },
    { headline: "What to know about the ceasefire deal", medium: "WaPo", date: "2026-06-04", url: "https://www.washingtonpost.com/world/2026/06/04/israel-lebanon-hezbollah-ceasefire-fighting/1ac6c5ee-6017-11f1-9c46-d6211372eede_story.html", desc: "Contenido del acuerdo" },
    { headline: "Israel seizes Beaufort Castle", medium: "NPR", date: "2026-05-31", url: "https://www.npr.org/2026/05/31/g-s1-125056/israel-seizes-medieval-beaufort-castle-southern-lebanon", desc: "Contexto: la misma fortaleza de 1982" }
  ]
},

{
  golden: false, number: "P4", flag: "co",
  title: "El quinto dominó: por qué Latinoamérica elige outsiders furiosos y De la Espriella (80% probabilidad) confirma que el sistema está roto",
  tags: [{ cls:"tag-latam", text:"LATAM" },{ cls:"tag-hoy", text:"HOY" }],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: 80% Kalshi, Americas Quarterly, AS/COA — datos post-1ª vuelta" },
    { cls:"chip-gap",  text:"📡 Gap: todos cubren Colombia, nadie el PATRON Bukele(6.59M)-Milei-Espriella" },
    { cls:"chip-vp",   text:"📺 VP: Bukele 6.59M (MAYOR ÉXITO) + Colombia 265K — conexión directa" },
    { cls:"chip-comp", text:"🔍 Competencia: cobertura masiva pero superficial del resultado" }
  ],
  potText: "MUY ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustavo_Petro_2022.jpg?width=1200",
  bannerAlt: "Política colombiana", bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",
  tesis: "Los mercados dan 80% a De la Espriella. Bukele (2019), Milei (2023), De la Espriella (2026) — no es coincidencia. Es un sistema que se ha roto. Los partidos tradicionales latinoamericanos están en colapso estructural porque el contrato social que ofrecían (estabilidad a cambio de voto) dejó de cumplirse. La clase media que creció en democracia ya no cree en la democracia representativa tal como funciona — y elige outsiders como acto de destrucción creativa. La pregunta incómoda: ¿y si los outsiders no son el problema sino el síntoma de que el sistema ya no funciona?",
  fields: [
    { label: "🗞️ La noticia", value: "Kalshi: 80% probabilidad De la Espriella. Valencia (1.6M votos) lo endosa pero su vice Oviedo no. Fajardo (1M+) y 400K votos en blanco en juego. Runoff 21 JUN. 16 días." },
    { label: "🔬 Segunda derivada", value: "El colapso no es colombiano — es continental. Los partidos que gobernaron Latam durante décadas (PRI México, AD Venezuela, Liberales/Conservadores Colombia, UCR/PJ Argentina) están en descomposición simultánea. La generación que creció con estas democracias vio corrupción, desigualdad y promesas incumplidas. Votar al outsider no es irracionalidad — es castigo racional a un sistema que no cumplió." },
    { label: "❓ Gran pregunta", value: "¿Está Latinoamérica destruyendo sus democracias al elegir outsiders — o está construyendo algo nuevo sobre los escombros de lo que no funcionó?" },
    { label: "⚔️ El conflicto", value: "Outsiders (promesa de destrucción creativa) vs establishment (promesa de estabilidad que no cumplió). Democracia representativa (partidos) vs democracia plebiscitaria (líderes carismáticos). Bukele (éxito a costa de libertades) vs lo que vendrá (¿De la Espriella = Bukele colombiano?)." },
    { label: "⏰ Por qué ahora", value: "16 días para runoff. 80% probabilidad. Publicar entre el 7-14 JUN para máxima relevancia." },
    { label: "📺 VP ya lo trató?", value: "Bukele = 6.59M (MAYOR ÉXITO DE VP). Colombia = 265K (1 JUN). El patrón continental Bukele-Milei-Espriella conecta con el mayor éxito del canal." },
    { label: "🚀 Motor viral", value: "HISTORIAL VP: Bukele 6.59M. AUDIENCIA: Colombia = 3er país Latam. TIMING: antes del runoff. CONFLICTO: sistema roto. ESTRUCTURA: 5 dominós = video sólido de 25 min." },
    { label: "🔍 Señal competencia", value: "Cobertura masiva del resultado. NADIE hace el análisis del patrón continental con datos. Oportunidad." },
    { label: "🔎 Qué investigar más", value: "Datos de confianza en instituciones por país (Latinobarómetro). Perfil De la Espriella vs Bukele vs Milei. Qué pasó con los partidos tradicionales en cada país. ¿Cuál es el 6º dominó?" }
  ],
  sources: [
    { headline: "Colombia Heads Toward a Polarizing Runoff", medium: "Americas Quarterly", date: "2026-06-02", url: "https://www.americasquarterly.org/article/reaction-colombia-heads-toward-polarizing-runoff/", desc: "Análisis profundo" },
    { headline: "Poll Tracker: Colombia 2026", medium: "AS/COA", date: "2026-06-04", url: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election", desc: "Encuestas actualizadas" },
    { headline: "Colombia presidential race", medium: "NPR", date: "2026-06-01", url: "https://www.npr.org/2026/06/01/nx-s1-5842833/first-round-colombia-presidential-vote", desc: "Contexto primera vuelta" }
  ]
},

{
  golden: false, number: "P5", flag: "cn",
  title: "Xi despidió a los pilotos antes del vuelo: cómo China vació su ejército de generales a un año de la fecha en que debería estar 'listo para combate'",
  tags: [{ cls:"tag-asia", text:"ASIA-PACÍFICO" },{ cls:"tag-hoy", text:"HOY" }],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: Foreign Policy análisis profundo + NBC + Hoover Institution" },
    { cls:"chip-gap",  text:"📡 Gap ENORME: prácticamente CERO cobertura en español" },
    { cls:"chip-vp",   text:"📺 VP: China decisión extraña (349K) — tema China funciona con buen ángulo" },
    { cls:"chip-comp", text:"🔍 Competencia: hipótesis de gap casi total en español" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/People%27s_Liberation_Army_Flag_of_the_People%27s_Republic_of_China.svg?width=1200",
  bannerAlt: "Instalación militar china", bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_People%27s_Republic_of_China.svg?width=1200",
  tesis: "Xi Jinping quiere un ejército 'listo para combate' en 2027 — el centenario del PLA. Para prepararlo, ha purgado a 9 generales de alto rango y 3 líderes de la industria militar, incluyendo a Zhang Youxia, el general más poderoso de China después de Xi. Foreign Policy lo describe así: 'la bancada de generales en activo quedó casi vacía'. Es como despedir a los pilotos un año antes del vuelo más importante. La pregunta que Taiwán, EEUU y toda Asia se hacen: ¿un ejército purgado es más obediente o más débil? ¿Xi ha construido un instrumento de poder personal o ha destrozado la herramienta que necesita para la invasión más compleja de la historia?",
  fields: [
    { label: "🗞️ La noticia", value: "CPC confirmó oficialmente la purga de 9 generales + 3 líderes industria militar. Zhang Youxia (vicepresidente CMC, general #1) arrestado. Liu Zhenli (jefe Estado Mayor Conjunto) arrestado. Foreign Policy: 'bancada de generales casi vacía'. Objetivo modernización 2027 en riesgo." },
    { label: "🔬 Segunda derivada", value: "Las purgas empezaron en 2023 pero la de Zhang (enero 2026) fue el pico. Xi purga por corrupción, pero el efecto secundario es que destruye la cadena de mando. Un ejército de 2 millones de soldados necesita generales experimentados para funcionar. Los reemplazos son leales a Xi pero no tienen experiencia operacional. Si China intentara un bloqueo naval de Taiwán mañana, ¿quién lo dirigiría?" },
    { label: "❓ Gran pregunta", value: "¿Ha construido Xi un ejército más obediente o ha destruido la herramienta que necesita para Taiwán?" },
    { label: "⚔️ El conflicto", value: "Lealtad (lo que Xi quiere) vs competencia (lo que el ejército necesita). Purga (control político) vs preparación (capacidad militar). 2027 (centenario, 'listos para combate') vs realidad (sin generales experimentados). Taiwán (el objetivo) vs la capacidad real de alcanzarlo." },
    { label: "⏰ Por qué ahora", value: "CPC confirmó oficialmente las purgas en abril. Foreign Policy y Hoover publicaron análisis profundos en mayo. El centenario 2027 está a 12 meses." },
    { label: "📺 VP ya lo trató?", value: "NO. Gap total. VP trató China decisión extraña sobre Irán (349K) — los temas China con buen ángulo funcionan muy bien. La purga de generales + conexión Taiwán es un video de 25 min con estructura sólida." },
    { label: "🚀 Motor viral", value: "CONFLICTO: un dictador destruye su propio ejército. AUDIENCIA: China/Taiwán genera interés. VISUAL: generales, PLA, mapa Taiwán, infografías de cadena de mando. VP: China 349K. GAP: cero en español. MIEDO: ¿puede China invadir Taiwán con un ejército purgado?" },
    { label: "🔍 Señal competencia", value: "Competencia pendiente de comprobar. Hipótesis de gap casi total en español. En inglés solo Foreign Policy y Hoover lo analizan con profundidad." },
    { label: "🔎 Qué investigar más", value: "Lista completa de generales purgados y sus roles. Quiénes son los reemplazos y qué experiencia tienen. Capacidad operacional real del PLA sin mandos experimentados. Precedentes históricos (purgas de Stalin, Erdogan). ¿Cuánto tardaría en reconstruir la cadena de mando?" }
  ],
  sources: [
    { headline: "Why Is Xi Still Purging His Generals?", medium: "China Leadership Monitor (Hoover)", date: "2026-05-15", url: "https://www.prcleader.org/post/why-is-xi-still-purging-his-generals", desc: "Análisis académico profundo" },
    { headline: "The Deeper Pattern Behind China's Military Purges", medium: "Foreign Policy", date: "2026-05-01", url: "https://foreignpolicy.com/2026/05/01/xi-jinping-china-military-factions-purges-centenary/", desc: "Patrón sistémico" },
    { headline: "CCP Confirms Purge of Nine Senior Generals", medium: "Vision Times", date: "2026-04-20", url: "https://www.visiontimes.com/2026/04/20/ccp-confirms-purge-of-nine-senior-generals-and-three-military-industrial-leaders-over-discipline-violations.html", desc: "Confirmación oficial" },
    { headline: "Purge of top general throws military into turmoil", medium: "NBC News", date: "2026-01-28", url: "https://www.nbcnews.com/world/china/china-xi-jinping-general-zhang-corruption-purge-taiwan-invasion-rcna255911", desc: "Zhang Youxia y consecuencias para Taiwán" }
  ]
},

{
  golden: false, number: "P6", flag: "es",
  title: "Zapatero y la red Venezuela-España: cómo un expresidente europeo pudo ser intermediario de PdVSA durante 15 años",
  tags: [{ cls:"tag-es", text:"ESPAÑA" },{ cls:"tag-hoy", text:"HOY" }],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: The Objective, Infobae, NPR — dominante hispanos" },
    { cls:"chip-gap",  text:"📡 Gap: caso judicial cubierto, NO la red geopolítica PdVSA-CLAP-Europa" },
    { cls:"chip-vp",   text:"📺 VP: imputación (22 MAY) — ángulo nuevo: la red, no el juicio" },
    { cls:"chip-comp", text:"🔍 Competencia: cubierto en España como caso judicial, sin profundidad geopolítica" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_la_Moncloa.jpg?width=1200",
  bannerAlt: "Palacio de la Moncloa", bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=1200",
  tesis: "APROBADO. 12 días para la declaración del 17-18 JUN. El ángulo VP no es el juicio — es la red. PdVSA, CLAP, oro venezolano, Plus Ultra €53M. Si los correos autorizados revelan la conexión directa, será la primera operación documentada de influencia de un estado petrolero latinoamericano a través de un expresidente europeo. No es Zapatero — es el sistema.",
  fields: [
    { label: "🗞️ La noticia", value: "Declaración 17-18 JUN. 3 delitos: organización criminal, tráfico influencias, falsedad. Correos oficiales autorizados como prueba. Plus Ultra €53M." },
    { label: "🔬 Segunda derivada", value: "La red PdVSA-CLAP-España es un modelo de influencia petrolera: un estado con petróleo (Venezuela) usa los ingresos para comprar influencia en un país europeo a través de un expresidente. No es corrupción individual — es un sistema. ¿Cuántos otros expresidentes europeos tienen redes similares con estados petroleros?" },
    { label: "❓ Gran pregunta", value: "¿Cómo pudo un expresidente europeo ser intermediario de un régimen autoritario durante 15 años sin que nadie lo detectara — y qué dice eso sobre los controles democráticos europeos?" },
    { label: "⚔️ El conflicto", value: "Poder judicial vs poder político. España vs Venezuela. Democracia vs redes de influencia petrolera. Transparencia vs 15 años de opacidad." },
    { label: "⏰ Por qué ahora", value: "12 días. Publicar antes del 10 JUN para máxima relevancia." },
    { label: "📺 VP ya lo trató?", value: "Imputación (~22 MAY). Ángulo nuevo: la red geopolítica, no el juicio." },
    { label: "🚀 Motor viral", value: "AUDIENCIA: España + Latam. PERSONAJE: reconocible. TIMING: antes 17-18 JUN. CONFLICTO: expresidente vs justicia." },
    { label: "🔍 Señal competencia", value: "Cubierto como caso judicial. NO como red geopolítica. Oportunidad clara." },
    { label: "🔎 Qué investigar más", value: "Ruta del dinero. Papel del oro venezolano. CLAP. Otros expresidentes europeos con redes petroleras. Controles democráticos que fallaron." }
  ],
  sources: [
    { headline: "Zapatero imputado", medium: "The Objective", date: "2026-05-19", url: "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/", desc: "Imputación" },
    { headline: "Zapatero investigation", medium: "NPR", date: "2026-05-20", url: "https://www.npr.org/2026/05/20/nx-s1-5828248/former-spanish-pm-zapatero-investigation", desc: "Cobertura internacional" },
    { headline: "Caso Zapatero", medium: "Infobae", date: "2026-05-26", url: "https://www.infobae.com/espana/2026/05/26/ultima-hora-del-caso-zapatero-novedades-del-sumario-de-plus-ultra-la-caja-fuerte-del-expresidente-y-reacciones-en-directo/", desc: "Sumario" }
  ]
},

{
  golden: false, number: "P7", flag: "",
  title: "Europa copia el modelo de cárceles offshore que Australia abandonó por inhumano — y espera que funcione mejor",
  tags: [{ cls:"tag-eu", text:"EUROPA" },{ cls:"tag-hoy", text:"HOY" }],
  chips: [
    { cls:"chip-fire", text:"🔥 Viralidad: France24 'lo más duro de la historia de la UE'" },
    { cls:"chip-gap",  text:"📡 Gap: nadie conecta con Nauru/Manus — el modelo que Europa condenó" },
    { cls:"chip-vp",   text:"📺 VP: NO cubierto — gap total en política migratoria UE" },
    { cls:"chip-comp", text:"🔍 Competencia: pendiente — hipótesis de cobertura superficial" }
  ],
  potText: "ALTO", potCls: "pot-high",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg?width=1200",
  bannerAlt: "Parlamento Europeo", bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Europe.svg?width=1200",
  tesis: "APROBADO. La UE aprobó centros de detención offshore en África, detención de hasta 2 años, biometría forzada y confiscación. El modelo: Australia (Nauru, isla Manus). El problema: la ONU declaró el modelo australiano inhumano. Australia lo abandonó parcialmente. Y ahora Europa lo copia esperando que funcione mejor. La pregunta: ¿puede la democracia que inventó los derechos humanos sobrevivir implementando las políticas que ella misma condenó?",
  fields: [
    { label: "🗞️ La noticia", value: "UE aprobó ley migratoria más restrictiva de su historia. Return hubs offshore en África. Detención 2 años. €420M. 5 países (DE, NL, AT, DK, GR) negocian con estados africanos. Amnistía: 'cárceles offshore'." },
    { label: "🔬 Segunda derivada", value: "Australia usó Nauru y Manus Island como centros offshore desde 2001. La ONU lo condenó. Los suicidios y autolesiones fueron documentados masivamente. Australia lo abandonó parcialmente en 2019-2022. Europa SABE esto — y lo copia igualmente. El giro no es político sino civilizacional: la Europa de los derechos humanos adoptando las políticas de la Europa que condenaba." },
    { label: "❓ Gran pregunta", value: "¿Puede la UE mantener la legitimidad moral que la fundó mientras implementa las políticas que ella misma declaró inhumanas?" },
    { label: "⚔️ El conflicto", value: "Europa fundacional (derechos humanos) vs Europa 2026 (cárceles offshore). Australia (fracasó y abandonó) vs Europa (lo intenta). Extrema derecha (ganó la batalla cultural) vs centristas (copian sus políticas)." },
    { label: "⏰ Por qué ahora", value: "Ley aprobada. Negociaciones en curso con países africanos." },
    { label: "📺 VP ya lo trató?", value: "No. Gap total." },
    { label: "🚀 Motor viral", value: "CONFLICTO: Europa vs sus valores. AUDIENCIA: España miembro UE, Latam emigración. VISUAL: centros detención, mapas. VP: no cubierto — exclusiva." },
    { label: "🔍 Señal competencia", value: "Pendiente. Hipótesis: cobertura superficial sin comparación con Australia." },
    { label: "🔎 Qué investigar más", value: "Historia Nauru/Manus. Informes ONU. Suicidios documentados. Acuerdo Italia-Albania. Costes por deportado. Posición de España." }
  ],
  sources: [
    { headline: "Toughest EU migration law", medium: "Euronews", date: "2026-06-01", url: "https://www.euronews.com/my-europe/2026/06/01/eu-set-to-back-return-hubs-in-toughest-migration-crackdown-yet", desc: "La ley más dura" },
    { headline: "EU return hubs", medium: "France 24", date: "2026-06-02", url: "https://www.france24.com/en/europe/20260602-eu-agrees-deal-for-deporting-migrants-to-third-country-return-hubs", desc: "Acuerdo" },
    { headline: "EU Deportation Framework", medium: "ImpACT", date: "2026-06-03", url: "https://impactpolicies.org/news/939/eus-new-deportation-framework-practical-fix-or-humanrights-shortcut", desc: "Análisis crítico" }
  ]
}

],

/* ── RANKING ──────────────────────────────────────────────── */
ranking: [
  { tema:"Israel se rompe por dentro",    subtema:"Knesset 106-0 · ultra-ortodoxos · 3 guerras",     viral:95, depth:96, timing:99, fit:95, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Kuwait aeropuerto: modelo Golfo", subtema:"Drones iraníes en civil · Dubai amenazado",      viral:96, depth:90, timing:99, fit:88, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Milicia que se desarma bajo fuego", subtema:"IRA-FARC-Hezbollah · patrón histórico",       viral:91, depth:94, timing:98, fit:92, verdText:"🔥 PUBLICAR YA",  verdCls:"verd-go" },
  { tema:"Colombia 5º dominó",            subtema:"80% Espriella · Bukele-Milei · 16 días runoff",   viral:82, depth:88, timing:95, fit:95, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Xi despidió a los pilotos",     subtema:"9 generales purgados · 2027 · Taiwán sin mandos", viral:85, depth:92, timing:88, fit:90, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Zapatero red Venezuela",         subtema:"12 días declaración · PdVSA-CLAP · correos",     viral:84, depth:85, timing:90, fit:88, verdText:"✅ PRIORIDAD",    verdCls:"verd-go" },
  { tema:"Europa cárceles offshore",       subtema:"Copia Australia (abandonado) · 5 países negocian",viral:85, depth:90, timing:88, fit:85, verdText:"✅ INVESTIGAR",   verdCls:"verd-maybe" }
],

/* ── VIGILAR ──────────────────────────────────────────────── */
vigilar: [
  {
    title: "🦠 Ébola: 344+ confirmados, 23 casos/día, cepa sin vacuna",
    body: "Si llega a 500 o sale de África, pasa a propuesta inmediata.",
    trigger: "500+ confirmados. Caso fuera de África. Fallo total de contención.",
    sourceUrl: "https://www.cdc.gov/ebola/situation-summary/index.html",
    sourceText: "CDC — Ebola Outbreak"
  },
  {
    title: "🇫🇷 G7 Francia 15-17 JUN: Trump vs aliados",
    body: "Trump necesita al G7 para Irán pero les aplica aranceles 30% y retira tropas. Si produce algo concreto, pasa a propuesta.",
    trigger: "Acuerdo sobre Irán. Ruptura sobre aranceles. Declaración sobre Ucrania.",
    sourceUrl: "https://en.wikipedia.org/wiki/52nd_G7_summit",
    sourceText: "Wikipedia — 52nd G7 summit"
  },
  {
    title: "🛢️ Brent: ¿rompe $100 esta semana?",
    body: "4ª subida consecutiva. $99.80. Cada escalada (Kuwait, Hezbollah, deal estancado) lo empuja.",
    trigger: "Brent supera $100. Deal fracasa. Nueva escalada militar.",
    sourceUrl: "https://tradingeconomics.com/commodity/brent-crude-oil",
    sourceText: "Trading Economics — Brent"
  },
  {
    title: "🇹🇼 Taiwán: $20.000M en armas pendientes + China ensaya bloqueo",
    body: "APROBADO como propuesta pero requiere más investigación. Doble paradoja: EEUU no entrega armas + China no tiene generales.",
    trigger: "Nuevo ejercicio militar chino. Entrega de armas. Declaración de Xi sobre Taiwán.",
    sourceUrl: "https://www.aspistrategist.org.au/xis-taiwan-scorecard-why-2026-is-not-the-year/",
    sourceText: "ASPI — Taiwan scorecard 2026"
  },
  {
    title: "🇲🇱 Mali/Sahel: se cae el primer estado ante Al Qaeda",
    body: "APROBADO pero conectar con tema no africano. Ministro Defensa muerto. JNIM avanza. Wagner presente.",
    trigger: "Caída de capital regional. Choque JNIM-ISIS. Éxodo masivo.",
    sourceUrl: "https://www.crisisgroup.org/africa/sahel",
    sourceText: "Crisis Group — Sahel"
  },
  {
    title: "🇷🇺 San Petersburgo drones: Rusia avanza en Ucrania pero no protege su segunda ciudad",
    body: "EN INVESTIGACIÓN. El ángulo coste-efectividad (drones $50K vs defensa millonaria) necesita más datos.",
    trigger: "Nuevo ataque ucraniano profundo. Impacto en producción petrolera rusa. Discurso Putin SPIEF hoy.",
    sourceUrl: "https://www.france24.com/en/ukraine-s-attack-on-saint-petersburg-brings-war-back-to-russia",
    sourceText: "France24 — St. Petersburg attack"
  },
  {
    title: "🇮🇷 MOU Irán-EEUU: contenido concreto pero sin firma",
    body: "EN INVESTIGACIÓN. El MOU tiene datos duros (440.9 kg uranio, minas en 30 días). Falta enfoque no saturado.",
    trigger: "Trump firma. Trump abandona. Nueva escalada que mata el deal.",
    sourceUrl: "https://www.pbs.org/newshour/world/u-s-and-iranian-negotiators-reach-tentative-deal-to-extend-ceasefire-and-start-new-nuclear-talks",
    sourceText: "PBS — US-Iran tentative deal"
  }
],

/* ── VERIFICACIÓN EDITORIAL ──────────────────────────────── */
editorial_verification: {
  sources_checked: "NPR, CNN, WaPo, Washington Times, Al Jazeera, Times of Israel, PBS, CNBC, France24, UAWire, TASS, Foreign Policy, Hoover/CLM, Vision Times, NBC, Americas Quarterly, AS/COA, Kalshi, Japan Times, ASPI, AEI, The Objective, Infobae, Euronews, ImpACT, Amnesty, CDC, ECDC, WHO, Fortune, TradingEconomics, World Oil, WEF",
  wsj_ft_nyt_note: "WSJ, FT y NYT no accesibles vía WebSearch. Datos referenciados indirectamente.",
  vp_history_reviewed: "Sí — 10 videos verificados en youtubers.me",
  competition_reviewed: "Revisión parcial. Gap detectado en: análisis demográfico ultra-ortodoxo, modelo económico Golfo, patrón IRA-FARC-Hezbollah, purga Xi/generales.",
  virality_verified: "9 parámetros por propuesta. Señales verificables documentadas.",
  images_validated: "Pendiente — ejecutar validate_images.js",
  news_freshness: "12/14 noticias del 3-5 JUN (86%).",
  discarded_topics: "Spencer Pratt (descartado: EEUU-céntrico). Pulte DNI (descartado: falta profundidad). Ormuz genérico (descartado: saturado). Op Southern Spear (descartado: saturado).",
  known_issues: "WSJ/FT/NYT no accesibles. Competencia verificada parcialmente.",
  tracker_applied: "Sí — PROPOSAL_TRACKER.md leído. 6 de 7 propuestas son temas APROBADOS o EN INVESTIGACIÓN. 0 temas descartados repetidos. Test de profundidad aplicado a cada propuesta."
}

};
