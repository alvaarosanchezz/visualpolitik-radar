/* ═══════════════════════════════════════════════════════════════
   RADAR EDITORIAL VP · 21 JULIO 2026 · v8.3
   Dashboard de inteligencia editorial — VisualPolitik
   SIN NOTICIAS — Solo propuestas profundas estilo temas aceptados
   8 propuestas (5 competencia + 3 ventana de oportunidad)
   ESTRUCTURA CORREGIDA: fields.value · ranking bars · vigilar · coveredVideos strings
═══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-07-21",
  dateLabel: "21 JULIO 2026",
  brisbane: "BAJO DEMANDA",
  brent: "$121.30",
  brentChange: "↕ Trump REINICIA los ataques a Irán (20 JUL), muere otro soldado de EEUU · Brent tocó $126 en el pico · Trump desclasifica archivos CIA sobre el 'fraude' de Maduro (16 JUL) · Groenlandia enciende a la OTAN"
},

/* ═══ TICKER ═══ */
ticker: [
  { cls:"t-red",    text:"🇮🇷 IRÁN: <strong>Trump REINICIA la guerra — nuevos ataques de EEUU (20 JUL)</strong> · Muere otro soldado estadounidense · La lucha se estrecha en Ormuz · Brent tocó $126 · El alto el fuego, roto" },
  { cls:"t-red",    text:"🇻🇪 VENEZUELA: <strong>Trump desclasifica archivos de la CIA sobre el 'fraude' de Maduro (16 JUL)</strong> · Justifica la captura · Rusia entrena a las tropas · EEUU ya se ha embolsado $8.000M en petróleo" },
  { cls:"t-red",    text:"🇬🇱 GROENLANDIA: <strong>Trump amenaza con retirar TODAS las tropas de Europa</strong> · Tierras raras (Kvanefjeld) vs 'Ruta de la Seda Polar' china · Dinamarca: 'defenderemos cada centímetro'" },
  { cls:"t-orange", text:"🌎 LATINOAMÉRICA: <strong>ola conservadora histórica</strong> · Milei, Kast (Chile), Espriella (Colombia), Fujimori (Perú), Fernández (Costa Rica) · Bolivia gira a la derecha · ¿Fin de la marea rosa?" },
  { cls:"t-red",    text:"🛢️ ENERGÍA: <strong>petróleo a $126, la subida más rápida de la historia reciente</strong> · Filipinas a oscuras (2M sin luz) · ASEAN se reúne en Manila bajo el shock de la guerra de Irán" },
  { cls:"t-orange", text:"🇮🇳 INDIA-PAKISTÁN: India amenaza con cortar '<strong>cada gota</strong>' de agua del Indo · Tribunal internacional lo declara ilegal · India lo ignora · 90% de las cosechas de Pakistán en riesgo" },
  { cls:"t-orange", text:"🇰🇷 COREA SUR: <strong>3 presidentes en un año</strong> · Protestas por la escasez de papeletas · El aliado clave de EEUU en Asia, en su momento más frágil desde 1987" },
  { cls:"t-gold",   text:"🇷🇺 EJE: <strong>Xi visita Rusia</strong> · China-Rusia refuerzan su alianza mientras Occidente mira a Irán · El nuevo (des)orden mundial toma forma" },
  { cls:"t-gold",   text:"⚽ ESPAÑA CAMPEONA del Mundial 2026 (1-0 a Argentina, 19 JUL) · El torneo geopolítico en la América de Trump: vetos de viaje, ICE y soft power" }
],

/* ═══ HERO ═══ */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>TRUMP REINICIA LA GUERRA QUE NO PUEDE GANAR: LA TRAMPA DE ORMUZ</span> — El 20 de julio EEUU volvió a bombardear Irán y murió otro soldado estadounidense. La guerra que 'terminó' con un alto el fuego nunca acabó: se ha estrechado hasta convertirse en una lucha por el Estrecho de Ormuz, con el Brent tocando los $126. <span class='hl-red'>Es EL tema que domina el nicho hispano ahora mismo — pero todos lo cuentan como noticia de guerra. VP puede explicar por qué esta guerra es imposible de ganar y de terminar.</span> Stratfor, TheStreet, Bloomberg."
  },
  {
    label: "🎯 Señal de competencia FUERTE",
    content: "<span class='hl'>LA COMPETENCIA ESTÁ VOLCADA EN IRÁN Y VENEZUELA:</span> varios canales castellanoparlantes han publicado en los últimos días con alta cadencia sobre 'Trump reinicia la guerra con Irán' y sobre la captura de Maduro (rendimiento relativo pendiente de comprobar, pero la convergencia y la frecuencia confirman demanda). <span class='hl-red'>El hueco VP: nadie está aportando la segunda derivada — por qué la guerra no puede terminar (Ormuz) ni por qué Trump desclasificó ahora los archivos de la CIA sobre Maduro.</span>"
  },
  {
    label: "📊 Criterios de viralidad aplicados hoy",
    content: "Motores dominantes: <span class='hl-red'>GUERRA + DINERO</span> (Irán, petróleo $126) · <span class='hl-red'>PODER + TRAICIÓN</span> (Groenlandia rompe la OTAN, archivos CIA Maduro) · <span class='hl-red'>IMPACTO LATAM</span> (ola conservadora, Venezuela) · Todo anclado a hechos de las últimas 24-72h y contrastado con lo que la competencia está tratando AHORA."
  }
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — ELIMINADAS POR DECISIÓN EDITORIAL
════════════════════════════════════════════════════════════ */
news: [],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 8 TEMAS (5 COMPETENCIA + 3 VENTANA)
════════════════════════════════════════════════════════════ */
proposals: [

/* ═══ P1 — DORADO ⭐ COMPETENCIA — IRÁN: LA TRAMPA DE ORMUZ ═══ */
{
  number: "P1",
  golden: true,
  title: "Trump reinicia la guerra que no puede ganar: por qué Irán y Ormuz son una trampa sin salida",
  tags: [
    { cls:"tag-gold", text:"⭐ TEMA DORADO" },
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-gold",
  potText: "⭐⭐⭐ POTENCIAL MÁXIMO",
  flag: "ir",
  chips: [
    { cls:"chip-green", text:"COMP: El tema del nicho AHORA" },
    { cls:"chip-green", text:"VEL: Acelerando 20 JUL" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-yellow", text:"VP: Media-Alta (fatiga Irán)" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=1200",
  bannerAlt: "Estrecho de Ormuz — la trampa geográfica que hace imposible ganar la guerra de Irán",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=1200",
  tesis: "El 20 de julio, EEUU volvió a bombardear Irán y murió otro soldado estadounidense. La guerra que 'terminó' con un alto el fuego nunca acabó de verdad: se ha estrechado hasta convertirse en una lucha por el Estrecho de Ormuz, y el Brent tocó los $126. La tesis VP: esta es una guerra imposible de ganar Y de terminar. Imposible de ganar porque Irán no necesita ejército para hacer daño — le basta con hostigar Ormuz, por donde pasa el 20% del petróleo mundial, para castigar a la economía global. E imposible de terminar porque cada alto el fuego solo desplaza el conflicto al estrecho, donde una sola lancha o un solo dron reactivan el precio del crudo y arrastran a EEUU de vuelta. Trump no ha reiniciado una guerra: ha caído en una trampa geográfica de la que ninguna potencia, por fuerte que sea, puede salir por la vía militar.",
  fields: [
    { label:"La noticia", value:"Nuevos ataques aéreos de EEUU contra Irán y muerte de otro soldado estadounidense (TheStreet, 20 JUL). La guerra se estrecha en torno a Ormuz (Stratfor, situation report 20 JUL). El Brent superó los $100 y tocó $126 en el pico, la subida más rápida en la historia de un conflicto reciente. Un misil iraní llegó a impactar un buque LNG catarí en el estrecho a comienzos de mes (Bloomberg). Por Ormuz pasa ~20% del petróleo mundial." },
    { label:"Segunda derivada", value:"El error de análisis de casi todos es tratar esto como una guerra convencional que se gana con superioridad militar. No lo es. Ormuz convierte a Irán en un actor con 'poder de veto' sobre la economía mundial: no necesita vencer a EEUU, solo necesita mantener la amenaza sobre el estrecho para que el petróleo suba y el mundo presione por un alto el fuego. Cada tregua es, por tanto, temporal por diseño: en cuanto EEUU baja la guardia, un incidente en Ormuz reactiva el ciclo. Es la misma trampa asimétrica que ya vimos en Yemen o en el Estrecho de Bab el-Mandeb, pero con el grifo energético del planeta de por medio. La conclusión incómoda: la superpotencia militar más grande de la historia no puede imponer su voluntad a un país arruinado, porque la geografía —no la fuerza— es la que manda en Ormuz." },
    { label:"Gran pregunta", value:"¿Por qué la mayor potencia militar de la historia no puede ganar ni terminar una guerra contra un país arruinado — y qué dice eso sobre los límites del poder en el siglo XXI?" },
    { label:"Señal de competencia", value:"EL TEMA DEL NICHO AHORA MISMO. Varios canales castellanoparlantes están publicando con altísima cadencia sobre 'Trump reinicia la guerra con Irán' en los últimos días (uno del nicho tiene una serie casi diaria de análisis sobre la ofensiva; otro publicó 'Trump reinicia la guerra contra Irán' hace ~2 semanas; un tercero cubrió el ángulo del alto el fuego). CONVERGENCIA fuerte = demanda confirmada. Rendimiento relativo exacto pendiente de comprobar, pero la frecuencia y el número de canales lo confirman como el tema caliente. El enfoque de todos es DESCRIPTIVO ('qué ataca Trump', 'última hora'). Hueco VP claro: la tesis estructural (por qué es una trampa sin salida). ADVERTENCIA: fatiga de Irán en la audiencia VP — hay que diferenciarse con la tesis, no competir en 'última hora'." },
    { label:"Demanda en medios", value:"MÁXIMA. TheStreet: mercados y nuevos ataques (20 JUL). Stratfor: 'la guerra de Irán se estrecha en Ormuz' (20 JUL). Bloomberg: misil iraní impacta buque LNG catarí. Wikipedia: '2026 Strait of Hormuz crisis' (Brent $126, 20% del petróleo). CRS R45281 sobre impacto en materias primas. Es portada financiera global recurrente." },
    { label:"Velocidad de agenda", value:"ACELERANDO. Los ataques fueron ayer (20 JUL). Cada incidente en Ormuz mueve los mercados. El tema está en su pico de atención pero es volátil: puede escalar a guerra abierta o enfriarse con una tregua en cuestión de días. Ventana caliente." },
    { label:"Historial VP", value:"VP ha cubierto Irán/Ormuz muchas veces; 'EEUU PIERDE MÁS de lo que parece en IRÁN' (15 JUN) se quedó en 190K (bajo su media) = señal de FATIGA. 'Ormuz estrecho fantasma' fue DESCARTADO por genérico. La DIFERENCIA de esta propuesta: no es 'otra noticia de la guerra' sino la TESIS de por qué es una trampa imposible de ganar/terminar — un marco conceptual, no una crónica. Ese es el único ángulo que justifica volver a Irán pese a la fatiga." },
    { label:"Motor viral", value:"GUERRA (conflicto armado en vivo) + DINERO (petróleo a $126, tu gasolina, inflación) + PODER (los límites de la superpotencia) + MIEDO (¿recesión global?) + PARADOJA BRUTAL (el más fuerte no puede ganar al más débil) + CONSECUENCIA GLOBAL (20% del petróleo mundial) + URGENCIA (pasó ayer). Comprobado que a VP le funcionan Irán+escalada+Trump (350K-500K), pero con riesgo de saturación." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Trump acaba de reiniciar la guerra con Irán. Y aunque tiene el ejército más poderoso de la historia, no puede ganarla. Te explico por qué.' Contexto: qué es Ormuz, por qué el alto el fuego no acabó nada. Escalada: el petróleo a $126, el buque catarí, el soldado muerto. Giro: Irán no necesita ganar, solo necesita Ormuz. Revelación: es una trampa geográfica sin salida militar. Cierre: ¿qué pasa cuando la geografía derrota a la superpotencia?" },
    { label:"Promesa cumplible", value:"'Por qué Trump no puede ganar ni terminar la guerra de Irán' — demostrable con la geografía de Ormuz, los datos de precios del crudo, el patrón de treguas rotas y el análisis de Stratfor. No es clickbait: es la lógica estructural del conflicto." },
    { label:"Ventaja VP", value:"ALTA en el ángulo estructural. VP domina la combinación mapa + economía + geopolítica. La competencia hace 'última hora'; VP puede hacer 'la anatomía de una trampa'. El mapa de Ormuz y la explicación del poder de veto energético son puro terreno VP." },
    { label:"Caso para 800K/1M", value:"Señal de audiencia: MÁXIMA (Irán domina la agenda y el nicho). Señal de competencia: FUERTE (varios canales, alta cadencia, convergencia). Lo que lo hace diferente: la tesis de 'guerra imposible de ganar y de terminar', no la crónica. Promesa: entender por qué la superpotencia está atrapada. Riesgo de saturación: ALTO — es el mayor riesgo del tema; la audiencia VP ya mostró fatiga (190K en junio). Qué necesita VP para ganarlo: vender MARCO CONCEPTUAL + ECONOMÍA GLOBAL, NO 'última hora'; abrir con la paradoja, no con los misiles; y ser honesto en que el riesgo es la fatiga." },
    { label:"Título mental", value:"Trump tiene el ejército más poderoso de la historia y acaba de reiniciar la guerra con Irán — pero hay una razón por la que no puede ganarla ni terminarla: se llama Ormuz" },
    { label:"Qué investigar más", value:"1) Stratfor (20 JUL) sobre el estrechamiento en Ormuz. 2) TheStreet y mercados (20 JUL). 3) Wikipedia: '2026 Strait of Hormuz crisis' (datos de precios). 4) CRS R45281. 5) Precedentes de guerra asimétrica en cuellos de botella (Bab el-Mandeb, Yemen). 6) Datos del poder de veto energético iraní." },
    { label:"Veredicto", value:"ATACAR HOY — Es EL tema de la competencia y la actualidad, con un ángulo VP diferenciador (la trampa de Ormuz). El único riesgo real es la fatiga de Irán: por eso NO debe ser una crónica más, sino la tesis estructural. Con ese marco, es tema de portada." }
  ],
  sources: [
    { headline:"Stock Market Today (July 20, 2026): Iran worries derail Nasdaq, S&P 500", medium:"TheStreet", date:"20 JUL 2026", url:"https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-july-20-2026", desc:"Nuevos ataques a Irán y su impacto en los mercados" },
    { headline:"2026 Strait of Hormuz crisis", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc:"Datos de la crisis: Brent $126, 20% del petróleo mundial" },
    { headline:"Hormuz Sees Biggest Day of Attacks Since US-Iran Peace Deal", medium:"Bloomberg", date:"JUL 2026", url:"https://www.bloomberg.com/news/articles/2026-07-07/iranian-missile-hits-qatari-lng-ship-in-strait-testing-us-talks", desc:"Misil iraní impacta un buque LNG catarí en el estrecho" },
    { headline:"Iran Conflict and the Strait of Hormuz: Impacts on Oil, Gas, and Commodities", medium:"Congressional Research Service", date:"2026", url:"https://www.congress.gov/crs-product/R45281", desc:"Impacto en petróleo, gas y materias primas" }
  ]
},

/* ═══ P2 — COMPETENCIA — GROENLANDIA / ÁRTICO ═══ */
{
  number: "P2",
  golden: false,
  title: "La guerra por el Ártico: por qué Trump haría saltar la OTAN por una isla de hielo (y no es por la isla)",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "gl",
  chips: [
    { cls:"chip-green", text:"COMP: Trending tras la cumbre" },
    { cls:"chip-green", text:"VEL: Acelerando" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Nuuk,_Greenland_skyline_aerial_view.jpg?width=1200",
  bannerAlt: "Groenlandia — la isla ártica en el centro de la disputa por las tierras raras",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenland_(orthographic_projection).svg?width=1200",
  tesis: "Trump ha vuelto a exigir el control de Groenlandia y ha amenazado con retirar TODAS las tropas de Europa. Parece una excentricidad. No lo es. Groenlandia alberga Kvanefjeld, uno de los mayores depósitos de tierras raras del planeta, con 370.000 toneladas de tierras raras pesadas — la categoría más valiosa y la más escasa fuera de China. Y China domina el 90% del refino mundial, se ha autoproclamado 'Estado casi ártico' y empuja su 'Ruta de la Seda Polar'. Groenlandia no es una isla: es el campo de batalla por los minerales que fabrican los cazas F-35, los misiles y los coches eléctricos. La segunda derivada revela la verdadera jerarquía de Washington: la seguridad europea es negociable; el acceso a los minerales críticos, no.",
  fields: [
    { label:"La noticia", value:"Trump redobla su exigencia sobre Groenlandia en la cumbre OTAN de Ankara y amenaza con retirar todas las tropas de Europa (CNBC, 7-8 JUL). 'La necesitamos para proteger al mundo'; 'es muy importante para EEUU, pero no para Dinamarca'. Frederiksen: 'Groenlandia no está en venta' y 'defenderemos cada centímetro de la OTAN'. Un grupo de trabajo busca una solución antes de fin de año. Foreign Affairs publica 'How Greenland Falls'." },
    { label:"Segunda derivada", value:"La obsesión de Trump no va de territorio: va de la guerra de las tierras raras con China, que ya usó su dominio (~90% del refino) como arma bloqueando exportaciones a EEUU. Groenlandia es la mayor reserva accesible de tierras raras pesadas fuera de China — las que hacen falta para imanes de misiles, F-35 y turbinas. Pekín lo sabe: se declaró 'Estado casi ártico', financió Kvanefjeld y empuja la 'Ruta de la Seda Polar'. Que Trump amenace con romper la OTAN por Groenlandia revela que, para Washington, la seguridad europea es negociable pero los minerales críticos no. El Ártico se está convirtiendo en el nuevo Golfo Pérsico, y el deshielo abre rutas y yacimientos que redibujarán el poder mundial." },
    { label:"Gran pregunta", value:"¿Está Trump dispuesto a romper la alianza que ganó la Guerra Fría para arrebatarle a China el control de los minerales que fabrican las armas del siglo XXI?" },
    { label:"Señal de competencia", value:"TRENDING tras la cumbre OTAN. Groenlandia volvió con fuerza a la agenda por la amenaza del repliegue de Europa; los canales del nicho la cubren como anécdota o excentricidad ('Trump quiere comprar una isla'). Rendimiento relativo pendiente de comprobar. Hueco claro: NADIE está contando la SEGUNDA DERIVADA (guerra de tierras raras, Ruta de la Seda Polar, Kvanefjeld). VP puede ser quien lo convierta en el tema de recursos y poder ártico que se merece." },
    { label:"Demanda en medios", value:"MÁXIMA. CNBC: 'Trump doubles down on push for control over Greenland' (8 JUL) y 'Trump renews Greenland threats... could remove troops from Europe' (7 JUL). Foreign Affairs: 'How Greenland Falls'. CSIS: 'Greenland, Rare Earths, and Arctic Security'. Forbes: 'Trump's Greenland Minerals Ambitions'. The Arctic Institute sobre el dominio mineral chino. Euronews (Frederiksen)." },
    { label:"Velocidad de agenda", value:"ACELERANDO. Trump reactivó la exigencia esta semana con la amenaza del repliegue; el grupo de trabajo busca solución antes de fin de año. Combustible para meses, pero el pico de atención es ahora, tras la cumbre." },
    { label:"Historial VP", value:"VP NO ha cubierto Groenlandia como tema central. Tocó tierras raras tangencialmente en 'Pax Silica' (141K, que falló por titular abstracto y falta de gancho). La lección: aquí el gancho es concreto y potente (Trump rompe la OTAN por una isla, amenaza de esta semana), justo lo que le faltó a Pax Silica." },
    { label:"Motor viral", value:"PODER (Trump vs la OTAN, EEUU vs China) + RECURSOS (el tesoro bajo el hielo) + PARADOJA (romper la alianza más fuerte del mundo por una isla de 56.000 habitantes) + MIEDO (China controla los minerales de las armas) + VISUALIDAD (mapas del Ártico, rutas polares, minas) + PERSONAJE (Trump) + CONSECUENCIA GLOBAL." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Trump está dispuesto a sacar a todo el ejército de EEUU de Europa por una isla helada de 56.000 habitantes. Suena absurdo. No lo es.' Contexto: qué son las tierras raras, por qué China las controla, qué hay bajo el hielo. Escalada: Kvanefjeld, la Ruta de la Seda Polar, el deshielo. Giro: la seguridad europea es negociable; los minerales no. Revelación: el Ártico es el nuevo Golfo Pérsico. Cierre: ¿quién controlará el tablero cuando el hielo desaparezca?" },
    { label:"Promesa cumplible", value:"'Por qué Groenlandia vale más que la OTAN para Trump' — demostrable con datos de reservas (CSIS, Forbes), el dominio chino del 90% (Arctic Institute), la Ruta de la Seda Polar y las amenazas concretas de esta semana (CNBC)." },
    { label:"Ventaja VP", value:"ALTA. VP combina geopolítica + economía de recursos + mapas + historia. El Ártico, las rutas polares y los yacimientos son ultra-visuales. Papers de CSIS y Foreign Affairs sostienen 25+ minutos. La competencia trata el tema como anécdota; VP puede hacer la anatomía de la guerra ártica." },
    { label:"Caso para 800K/1M", value:"Señal de audiencia: MÁXIMA (trending tras la cumbre). Señal de competencia: se trata como excentricidad, hueco total para el ángulo de recursos/poder. Lo diferente: no 'Trump quiere una isla' sino 'la guerra por los minerales que fabrican las armas del siglo XXI'. Promesa: el tesoro bajo el hielo y la jerarquía secreta de Washington. Riesgo de saturación: BAJO para el ángulo profundo. VP necesita: centrarse en tierras raras + China + Ártico, no en la anécdota de la compra." },
    { label:"Título mental", value:"Trump está dispuesto a sacar a todo el ejército de EEUU de Europa por una isla helada — porque bajo ese hielo está el tesoro que decide quién gana la guerra con China" },
    { label:"Qué investigar más", value:"1) CSIS: 'Greenland, Rare Earths, and Arctic Security'. 2) Foreign Affairs: 'How Greenland Falls'. 3) Datos de Kvanefjeld y Tanbreez (Forbes). 4) La 'Ruta de la Seda Polar' china. 5) Dominio chino del 90% del refino (Arctic Institute). 6) El deshielo y las nuevas rutas árticas." },
    { label:"Veredicto", value:"ATACAR HOY — Gancho brutal (Trump rompe la OTAN por una isla), segunda derivada potentísima (guerra de tierras raras con China) y fuentes premium. Solo VP puede hacerlo a este nivel." }
  ],
  sources: [
    { headline:"Trump doubles down on push for control over Greenland as Denmark vows to defend it", medium:"CNBC", date:"8 JUL 2026", url:"https://www.cnbc.com/2026/07/08/greenland-trump-nato-denmark.html", desc:"Trump redobla la presión; Dinamarca promete defenderla" },
    { headline:"Trump renews Greenland threats at NATO summit, says U.S. could remove troops from Europe", medium:"CNBC", date:"7 JUL 2026", url:"https://www.cnbc.com/2026/07/07/trump-nato-summit-greenland-us-troops-europe.html", desc:"La amenaza de retirar tropas de Europa por Groenlandia" },
    { headline:"Greenland, Rare Earths, and Arctic Security", medium:"CSIS", date:"2026", url:"https://www.csis.org/analysis/greenland-rare-earths-and-arctic-security", desc:"Análisis de las tierras raras y la seguridad ártica" },
    { headline:"Trump's Greenland Minerals Ambitions: What's Beneath The Ice", medium:"Forbes", date:"FEB 2026", url:"https://www.forbes.com/sites/arielcohen/2026/02/20/trumps-greenland-minerals-ambitions-whats-beneath-the-ice/", desc:"El tesoro mineral bajo el hielo groenlandés" }
  ]
},

/* ═══ P3 — COMPETENCIA — VENEZUELA: ARCHIVOS CIA ═══ */
{
  number: "P3",
  golden: false,
  title: "Los archivos secretos de Maduro: por qué Trump desclasificó ahora la 'prueba' del fraude que justifica el mayor golpe en Latinoamérica",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "ve",
  chips: [
    { cls:"chip-green", text:"COMP: Venezuela satura el nicho" },
    { cls:"chip-green", text:"VEL: Acelerando 16 JUL" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Caracas_de_noche.jpg?width=1200",
  bannerAlt: "Caracas — Venezuela tras la captura de Maduro y la desclasificación de archivos de la CIA",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Latin_America_(orthographic_projection).svg?width=1200",
  tesis: "El 16 de julio, Trump desclasificó archivos de la CIA que, según Washington, prueban que Maduro orquestó un fraude electoral manipulando el voto electrónico durante casi dos décadas. No es un detalle: es la pieza que da cobertura moral y legal a la mayor intervención estadounidense en Latinoamérica en una generación —la captura de Maduro en enero y el control de facto del petróleo venezolano. La segunda derivada: la desclasificación no va de Venezuela, va de precedente. Si EEUU puede derrocar a un gobierno y luego desclasificar la 'prueba' que lo justifica, ¿qué impide repetirlo en Cuba, Nicaragua o cualquier país cuya política no le guste? Y la pregunta que nadie hace: si los archivos existían desde hace años, ¿por qué desclasificarlos AHORA, seis meses después del golpe?",
  fields: [
    { label:"La noticia", value:"Trump desclasificó archivos de la CIA que, según la Casa Blanca, documentan cómo la agencia recopiló entre 2004 y 2020 información sobre la capacidad del régimen venezolano para manipular el voto electrónico (PanAmPost, 16 JUL). La desclasificación llega meses después de la captura de Maduro y su esposa Cilia Flores tras los ataques de EEUU en Caracas (enero 2026). Rusia mantiene personal militar entrenando a las tropas afines a Maduro (CNN). EEUU ya se ha embolsado ~$8.000M en petróleo venezolano." },
    { label:"Segunda derivada", value:"La clave no es si Maduro cometió fraude (casi nadie lo duda), sino el TIMING y el PRECEDENTE. Desclasificar la 'prueba' seis meses DESPUÉS del derrocamiento invierte el orden natural: primero se actúa, luego se justifica. Eso convierte a la inteligencia en herramienta de legitimación retroactiva, no de decisión. Y sienta un precedente peligrosísimo para toda Latinoamérica: si el estándar es 'derrocamos y luego enseñamos los papeles', cualquier gobierno de la región queda a merced de que Washington decida que su elección fue fraudulenta. Es la doctrina Monroe del siglo XXI, pero con archivos desclasificados como escudo moral. La desclasificación también sirve a la política interna de Trump (justificar el coste del golpe ante las midterms) y a la geopolítica del petróleo (blindar el control de los $8.000M en crudo). Venezuela es el laboratorio; el mensaje es para todo el continente." },
    { label:"Gran pregunta", value:"Si EEUU puede derrocar a un gobierno y luego desclasificar la 'prueba' que lo justifica, ¿qué país de Latinoamérica está a salvo — y por qué Trump enseña los archivos justo ahora?" },
    { label:"Señal de competencia", value:"VENEZUELA SATURA EL NICHO. Hay una avalancha de canales castellanoparlantes con directos y análisis sobre 'Trump captura a Maduro' y la situación venezolana (varios 'DIRECTO' con títulos de última hora). Convergencia altísima = demanda máxima confirmada; rendimiento relativo pendiente de comprobar. PERO el enfoque dominante es el evento (la captura, los ataques) o el directo emocional. El ángulo de los ARCHIVOS DESCLASIFICADOS (el timing, el precedente para Latam) está poco explotado y es reciente (16 JUL). Hueco VP claro dentro de un tema con demanda saturada." },
    { label:"Demanda en medios", value:"ALTA. PanAmPost: dos piezas sobre los documentos desclasificados (16 JUL). CNN en Español: cobertura en vivo de la intervención y captura. Agenda Pública: 'Trump captura a Maduro: el 2026 en Venezuela y América Latina'. Infobae: sumario diario (20-21 JUL). Wikipedia: '2026 United States intervention in Venezuela' e 'International reactions'. Time: el 'estado zombi'." },
    { label:"Velocidad de agenda", value:"ACELERANDO. La desclasificación es del 16 JUL y sigue generando reacciones. El caso Venezuela lleva meses en la agenda pero la desclasificación aporta un giro NUEVO y reciente que reactiva el interés. Ventana abierta." },
    { label:"Historial VP", value:"VP hizo 'VENEZUELA acaba de recibir el GOLPE más DEVASTADOR' (25 JUN, 585K — GRAN ÉXITO) sobre el terremoto/situación, y 'La PEOR noticia para el CASTRISMO: EEUU declara la GUERRA al G2 CUBANO' (16 JUN, 374K). El ángulo de los ARCHIVOS CIA + el precedente para Latam es NUEVO y distinto del terremoto. Aprovecha el filón Venezuela (que a VP le funciona: 585K) sin repetir el enfoque. Riesgo: la audiencia acaba de ver Venezuela hace 4 semanas — hay que vender el ángulo 'archivos + precedente', no 'otra de Venezuela'." },
    { label:"Motor viral", value:"CORRUPCIÓN/ESCÁNDALO (fraude electoral, archivos secretos) + PODER (EEUU derroca gobiernos) + TRAICIÓN/INTRIGA (la CIA, el timing sospechoso) + IMPACTO LATAM (audiencia principal de VP, precedente para toda la región) + PERSONAJE (Maduro, Trump) + DEBATE (¿legítimo o imperialismo?) + PETRÓLEO ($8.000M)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Trump acaba de enseñar los archivos secretos que prueban que Maduro robó las elecciones. El problema: los enseña seis meses DESPUÉS de derrocarlo.' Contexto: la captura de enero, el control del petróleo. Escalada: qué dicen los archivos, la manipulación del voto electrónico. Giro: si primero derrocas y luego justificas, el precedente vale para toda Latam. Revelación: la doctrina Monroe del siglo XXI. Cierre: ¿qué país es el siguiente?" },
    { label:"Promesa cumplible", value:"'Por qué Trump desclasificó ahora la prueba del fraude de Maduro' — demostrable con las piezas de PanAmPost, la cronología de la intervención, el control del petróleo y el análisis del precedente regional." },
    { label:"Ventaja VP", value:"ALTA. VP domina Latinoamérica, las estructuras de poder y las intrigas geopolíticas. Puede combinar la cronología, el mecanismo del voto electrónico, el petróleo y el precedente regional. El filón Venezuela ya le dio 585K. Gap para el ángulo 'archivos + precedente'." },
    { label:"Caso para 800K/1M", value:"Señal de audiencia: MÁXIMA (Venezuela satura el nicho; VP hizo 585K hace un mes). Señal de competencia: saturado en el evento, hueco en el ángulo de los archivos. Lo diferente: no 'cayó Maduro' sino 'por qué Trump enseña ahora la prueba y qué precedente sienta'. Promesa: la intriga del timing + la amenaza para toda Latam. Riesgo: fatiga reciente de Venezuela (video de hace 4 semanas). VP necesita: vender ARCHIVOS + PRECEDENTE, no repetir la crónica del golpe; conectar con Cuba y Nicaragua." },
    { label:"Título mental", value:"Trump acaba de enseñar la 'prueba' de que Maduro robó las elecciones — seis meses después de derrocarlo. Y eso convierte a toda Latinoamérica en su próximo objetivo" },
    { label:"Qué investigar más", value:"1) PanAmPost: qué dicen exactamente los documentos desclasificados. 2) Cronología de la intervención (Wikipedia: '2026 US intervention in Venezuela'). 3) El control estadounidense del petróleo venezolano ($8.000M). 4) Reacciones internacionales (Rusia, China). 5) Precedentes de desclasificación como legitimación. 6) Implicaciones para Cuba y Nicaragua." },
    { label:"Veredicto", value:"ATACAR HOY — Giro nuevo (16 JUL) sobre un tema que satura el nicho y que a VP le funcionó (585K). El ángulo de los archivos + el precedente para Latam lo diferencia del evento y le da profundidad estructural." }
  ],
  sources: [
    { headline:"Trump desclasificó archivos de la CIA que apuntan a un fraude electoral orquestado por Maduro", medium:"PanAmPost", date:"16 JUL 2026", url:"https://panampost.com/milagros-boyer/2026/07/16/trump-desclasifico-archivos-de-la-cia-que-apuntan-un-fraude-electoral-orquestado-por-maduro/", desc:"Los archivos desclasificados sobre el fraude de Maduro" },
    { headline:"Trump captura a Maduro: el 2026 en Venezuela y América Latina", medium:"Agenda Pública", date:"2026", url:"https://agendapublica.es/noticia/20522/trump-captura-maduro-2026-venezuela-am-rica-latina", desc:"Análisis del golpe y su impacto en la región" },
    { headline:"2026 United States intervention in Venezuela", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/2026_United_States_intervention_in_Venezuela", desc:"Cronología completa de la intervención" },
    { headline:"Trump, Rubio and a Zombie State In Venezuela", medium:"Time", date:"20 JUL 2026", url:"https://time.com/article/2026/07/20/trump-rubio-rodriguez-earthquake-venezuela/", desc:"El 'estado zombi' y el control del petróleo" }
  ]
},

/* ═══ P4 — COMPETENCIA — OLA CONSERVADORA LATAM ═══ */
{
  number: "P4",
  golden: false,
  title: "El entierro de la marea rosa: cómo la ola conservadora más grande en 20 años está redibujando Latinoamérica",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "mx",
  chips: [
    { cls:"chip-green", text:"COMP: Domina la conversación hispana" },
    { cls:"chip-green", text:"VEL: Ventana óptima" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta (filón Bukele/Milei)" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Latin_America_(orthographic_projection).svg?width=1200",
  bannerAlt: "Latinoamérica gira a la derecha — la mayor ola conservadora en dos décadas",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_Rosada_Buenos_Aires.jpg?width=1200",
  tesis: "Algo tectónico está pasando en Latinoamérica: Milei en Argentina, Kast en Chile, Espriella en Colombia, Fujimori de vuelta en Perú, Laura Fernández en Costa Rica, Bolivia girando a la derecha tras dos décadas de MAS. Los politólogos hablan de un 'giro conservador de proporciones históricas', comparable a la marea rosa de los 2000 pero en sentido contrario. La segunda derivada que casi nadie cuenta: esto no es un giro ideológico, es una ola ANTI-establishment. Los votantes no se han vuelto de derechas — castigan la inseguridad y los gobiernos fracasados. Y eso tiene una consecuencia inquietante: si el problema es el fracaso del Estado y los nuevos gobiernos también fracasan, la misma ola que los aupó los barrerá. Latinoamérica ha entrado en un péndulo cada vez más rápido y radical.",
  fields: [
    { label:"La noticia", value:"Wikipedia registra una 'ola conservadora' en Latam con victorias de derecha en Colombia (Espriella), Costa Rica (Laura Fernández, 48,6% en 1ª vuelta, 1 FEB) y Perú (Fujimori). Milei en Argentina, Kast en Chile, Bolivia gira a la derecha tras el MAS. Konrad-Adenauer-Stiftung: 'Latin America's Party Landscape Shifts to the Right'. GIS Reports y The Media Line documentan el giro. Atlantic Council: preguntas clave para la región en 2026." },
    { label:"Segunda derivada", value:"La lectura fácil es 'Latinoamérica se hace de derechas'. La correcta es más profunda: los votantes castigan la inseguridad y los gobiernos fracasados, no abrazan una ideología. Es una ola ANTI-INCUMBENTE que la derecha ha capitalizado, igual que antes lo hizo la izquierda con la marea rosa. El motor es el miedo (crimen organizado, extorsión, migración) y la frustración económica. Por eso triunfan a la vez figuras tan distintas —el libertario Milei, el ultraconservador Kast, el 'mano dura' Espriella, la dinastía Fujimori—: no comparten programa, comparten enemigo (el statu quo). La consecuencia estructural: si estos gobiernos no resuelven inseguridad y economía en 4 años, la misma ola los barrerá. La región entra en un ciclo de péndulos cada vez más radicales, una amenaza para la estabilidad democrática de todo el continente." },
    { label:"Gran pregunta", value:"¿Se está volviendo Latinoamérica de derechas — o es una ola anti-establishment que barrerá también a estos gobiernos si fracasan, atrapando a la región en un péndulo cada vez más radical?" },
    { label:"Señal de competencia", value:"DOMINA LA CONVERSACIÓN HISPANA. La ola conservadora es tema recurrente en el nicho y en medios latinoamericanos; el filón Bukele/Milei es de los que más rinden. Los canales cubren cada elección por separado (Milei, Kast, Espriella) pero pocos han construido la TESIS REGIONAL estructural. VP ya hizo Colombia (Espriella, 1 JUN, 347K) y Bukele (6,59M, su mayor éxito); el ángulo REGIONAL es nuevo y mucho más ambicioso. Rendimiento relativo de la competencia pendiente de comprobar, pero el filón está confirmado por los propios datos de VP." },
    { label:"Demanda en medios", value:"ALTA. Konrad-Adenauer-Stiftung (análisis de partidos). GIS Reports (giro a la derecha). The Media Line y Jerusalem Post ('Chile, Colombia, Peru go conservative'). Atlantic Council (diez preguntas para la región). Washington Examiner (ola pro-Trump). Wikipedia ('Conservative wave')." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA. La ola está en pleno desarrollo con elecciones recientes y Brasil 2026 en el horizonte. El fenómeno regional está maduro para un análisis de conjunto AHORA, antes de que se sature elección a elección." },
    { label:"Historial VP", value:"VP hizo 'SORPRESA EN COLOMBIA: un FAN de BUKELE y MILEI ha DESTROZADO a la izquierda' (1 JUN, 347K) —solo Colombia— y Bukele (6,59M). El ángulo REGIONAL (la ola como fenómeno estructural continental) es NUEVO y aprovecha el filón Bukele/Milei que a VP le funciona espectacularmente. Es el paraguas que da sentido a todos esos videos." },
    { label:"Motor viral", value:"IMPACTO LATAM (audiencia principal de VP) + PERSONAJES FUERTES (Milei, Kast, Bukele, Fujimori) + CONFLICTO IDEOLÓGICO (polarización, izquierda vs derecha) + PATRÓN HISTÓRICO (comparación con la marea rosa) + PARADOJA (no es ideología, es rabia) + DEBATE (tema que divide y genera comentarios)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'En 20 años, Latinoamérica giró a la izquierda con la marea rosa. Acaba de girar a la derecha con la misma fuerza. Pero el motivo no es el que crees.' Contexto: las olas históricas. Escalada: el mapa que se pinta de azul (Argentina, Chile, Colombia, Perú, Costa Rica, Bolivia). Giro: no es ideología, es castigo al fracaso. Revelación: la misma ola puede barrer a los que ha aupado. Cierre: ¿un péndulo cada vez más radical?" },
    { label:"Promesa cumplible", value:"'Por qué toda Latinoamérica gira a la derecha a la vez' — demostrable con los resultados electorales, el análisis de KAS/GIS/Atlantic Council y el patrón anti-incumbente. Mapa regional visual." },
    { label:"Ventaja VP", value:"ALTA. VP domina Latinoamérica y las historias de poder regional. Mapas electorales, historia (las olas previas), economía (por qué fracasan los gobiernos) y personajes. El filón Bukele/Milei le funciona como ningún otro. Gap para el ángulo estructural regional." },
    { label:"Caso para 800K/1M", value:"Señal de audiencia: Latam es el corazón de VP y Bukele fue su mayor éxito (6,59M). Señal de competencia: se cubre elección a elección, hueco para la tesis regional. Lo diferente: no 'ganó la derecha en X' sino 'la mayor ola política en 20 años y por qué no es ideológica'. Promesa: el mapa que cambia de color y el péndulo que viene. Riesgo: parecer un refrito — evitarlo con el ángulo ANTI-INCUMBENTE y la consecuencia futura." },
    { label:"Título mental", value:"Toda Latinoamérica gira a la derecha a la vez — pero no porque se haya vuelto de derechas, sino porque está tan harta que la próxima ola podría barrerlo todo otra vez" },
    { label:"Qué investigar más", value:"1) Konrad-Adenauer-Stiftung sobre el giro. 2) GIS Reports y The Media Line. 3) Atlantic Council: diez preguntas para Latam 2026. 4) Datos de cada elección (Colombia, Costa Rica, Perú, Bolivia). 5) Comparación con la marea rosa de los 2000. 6) La inseguridad y el crimen organizado como motor. 7) El factor Bukele/Milei como modelo replicado." },
    { label:"Veredicto", value:"ATACAR HOY — Domina la conversación hispana, con el filón Bukele/Milei que a VP le funciona espectacularmente, pero con un ángulo estructural nuevo (ola anti-incumbente). Enorme potencial para la audiencia latinoamericana." }
  ],
  sources: [
    { headline:"Latin America's Party Landscape Shifts to the Right", medium:"Konrad-Adenauer-Stiftung", date:"2026", url:"https://www.kas.de/en/web/auslandsinformationen/artikel/detail/-/content/latin-america-s-party-landscape-shifts-to-the-right", desc:"Análisis del giro del panorama de partidos" },
    { headline:"Latin America continues its rightward shift", medium:"GIS Reports", date:"2026", url:"https://www.gisreportsonline.com/r/latin-america-right/", desc:"El giro a la derecha de la región" },
    { headline:"Chile, Colombia, and Peru Go Conservative: What's Next for Latin America?", medium:"The Media Line", date:"2026", url:"https://themedialine.org/by-region/chile-colombia-and-peru-go-conservative-whats-next-for-latin-america/", desc:"Qué viene tras el giro conservador" },
    { headline:"Latin America and the Caribbean in 2026: Ten defining questions", medium:"Atlantic Council", date:"2026", url:"https://www.atlanticcouncil.org/commentary/spotlight/latin-america-and-the-caribbean-in-2026-ten-defining-questions-for-the-year-ahead/", desc:"Preguntas clave para la región en 2026" }
  ]
},

/* ═══ P5 — COMPETENCIA — INDIA GUERRA DEL AGUA ═══ */
{
  number: "P5",
  golden: false,
  title: "India declara la guerra del agua a Pakistán: el Tratado del Indo como arma entre dos potencias nucleares",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "in",
  chips: [
    { cls:"chip-green", text:"COMP: Cubierto superficialmente" },
    { cls:"chip-green", text:"VEL: Acelerando" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Indus_river_from_karakouram_highway.jpg?width=1200",
  bannerAlt: "Río Indo — el agua como arma geopolítica entre India y Pakistán",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Indus_River_basin_map.svg?width=1200",
  tesis: "India suspendió el Tratado de Aguas del Indo tras el atentado de Pahalgam. Lo que empezó como medida temporal es ya política de Estado: el ministro de Recursos Hídricos declaró que India trabaja para que 'ni una sola gota de agua llegue a Pakistán'. El tribunal arbitral internacional dictaminó que la suspensión es ilegal — India rechazó el fallo llamando al tribunal 'ilegal'. 9 de cada 10 pakistaníes viven en la cuenca del Indo, el 90% de las cosechas dependen de él. Dos potencias nucleares peleando no por territorio ni ideología, sino por agua. El tratado que mantuvo la paz durante 65 años —sobrevivió a 3 guerras— acaba de romperse, y sienta un precedente global para Turquía-Éufrates, Etiopía-Nilo y China-Mekong.",
  fields: [
    { label:"La noticia", value:"India suspendió el Tratado del Indo tras el atentado de Pahalgam (26 turistas muertos). En junio cortó el flujo del río Chenab desde la presa de Baglihar (CNBC, 22 JUN). El tribunal arbitral falló que la suspensión unilateral es ilegal (mayo); India lo rechazó. Ministro C.R. Patil: 'Pakistán no recibirá ni una sola gota de agua'. Foreign Affairs: 'Why the Next India-Pakistan War Will Escalate' (JUL 2026)." },
    { label:"Segunda derivada", value:"El Tratado del Indo (1960) fue uno de los acuerdos más resilientes de la historia: sobrevivió a las guerras de 1965, 1971 y 1999. Que India lo rompa unilateralmente es un precedente global para el uso del agua como arma. Si India corta el agua sin consecuencias, ¿qué impide que Turquía lo haga con el Éufrates, Etiopía con el Nilo (GERD) o China con el Mekong? El CSIS estima que 9 de cada 10 pakistaníes viven en la cuenca del Indo. El colapso agrícola de Pakistán tendría consecuencias en seguridad alimentaria global, migración masiva y estabilidad nuclear." },
    { label:"Gran pregunta", value:"¿Puede el agua ser el arma más devastadora entre dos potencias nucleares — y qué precedente establece para todos los conflictos hídricos del mundo?" },
    { label:"Señal de competencia", value:"CUBIERTO SUPERFICIALMENTE. Los canales internacionales cubren la tensión India-Pakistán centrados en lo militar (Cachemira, operación Sindoor). El ángulo del AGUA como arma —cuenca del Indo, impacto agrícola, precedente global— está poco cubierto en el nicho hispano. Rendimiento relativo pendiente de comprobar. Hueco claro para el arma de destrucción masiva sin bombas." },
    { label:"Demanda en medios", value:"ALTA. Foreign Affairs: 'Why the Next India-Pakistan War Will Escalate' (JUL 2026). CNBC investigación completa (22 JUN). Chatham House sobre la restauración del tratado (ABR 2026). Al Jazeera: 'Mountain of war' (12 JUN). CSIS sobre el impacto. Britannica actualizada." },
    { label:"Velocidad de agenda", value:"ACELERANDO. La retórica india se endurece (de 'temporal' a 'ni una gota'). El tribunal falló y fue ignorado. Foreign Affairs acaba de publicar análisis de escalada. Puede explotar si India construye nuevas presas." },
    { label:"Historial VP", value:"VP NO ha cubierto la guerra del agua India-Pakistán. Ha tratado ambos países por separado pero nunca el Tratado del Indo como arma. Ángulo completamente nuevo. Sin riesgo de repetición." },
    { label:"Motor viral", value:"POTENCIAS NUCLEARES (máxima tensión) + DATO IMPACTANTE (90% cosechas, 9/10 ciudadanos) + ARMA INVISIBLE (agua, no misiles) + PRECEDENTE GLOBAL (Nilo, Éufrates, Mekong) + TRIBUNAL IGNORADO + PARADOJA (el tratado sobrevivió 3 guerras pero no un atentado)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'El tratado más resiliente del mundo sobrevivió a 3 guerras. Acaba de romperse — y la consecuencia puede ser peor que cualquier bomba.' Escalada: suspensión, corte del Chenab, retórica 'ni una gota'. Giro: el tribunal falla contra India — India lo ignora. Revelación: el precedente amenaza a medio mundo. Cierre: ¿es el agua el nuevo petróleo de las guerras del siglo XXI?" },
    { label:"Promesa cumplible", value:"'Cómo India convirtió el agua en un arma contra una potencia nuclear' — demostrable con el tratado, el fallo del tribunal, cifras CSIS, mapa de ríos y precedentes globales." },
    { label:"Ventaja VP", value:"ALTA. VP combina mapas de ríos, datos agrícolas, geopolítica nuclear y precedente global como nadie en español. Tema visual (cuenca, presas, flujos). La conexión con otros conflictos hídricos da alcance global." },
    { label:"Caso para 800K/1M", value:"Señal: Foreign Affairs, CNBC, Chatham House — cobertura premium sostenida. Competencia: ángulo del agua poco cubierto en español. Lo diferente: no 'guerra India-Pakistán' sino 'el agua como arma de destrucción masiva'. Promesa: dos potencias nucleares, un río, un tratado de 65 años roto. Riesgo: puede parecer lejano — conectar con conflictos hídricos en Latam. VP necesita: centrarse en el MECANISMO y el PRECEDENTE GLOBAL." },
    { label:"Título mental", value:"India acaba de romper el tratado que sobrevivió a 3 guerras con Pakistán — y amenaza con cortar cada gota de agua a 220 millones de personas" },
    { label:"Qué investigar más", value:"1) Foreign Affairs: 'Why the Next India-Pakistan War Will Escalate'. 2) CNBC sobre el Tratado del Indo. 3) Chatham House. 4) Datos CSIS de dependencia pakistaní. 5) Mapa de presas indias. 6) Precedentes: Turquía-Éufrates, Etiopía-Nilo, China-Mekong." },
    { label:"Veredicto", value:"ATACAR HOY — Ángulo completamente nuevo para VP, retórica que se endurece, Foreign Affairs publicando escalada. Conexión inesperada: agua como arma entre potencias nucleares + precedente para conflictos hídricos globales." }
  ],
  sources: [
    { headline:"Why the Next India-Pakistan War Will Escalate", medium:"Foreign Affairs", date:"JUL 2026", url:"https://www.foreignaffairs.com/india/why-next-india-pakistan-war-will-escalate", desc:"Por qué la próxima guerra escalará más" },
    { headline:"Indus water treaty becomes latest India-Pakistan flashpoint", medium:"CNBC", date:"22 JUN 2026", url:"https://www.cnbc.com/2026/06/22/india-pakistan-indus-waters-treaty-water-dispute-war-risk.html", desc:"Investigación sobre la crisis del agua" },
    { headline:"India and Pakistan still cannot agree to restore the Indus Waters Treaty", medium:"Chatham House", date:"ABR 2026", url:"https://www.chathamhouse.org/2026/04/india-and-pakistan-still-cannot-agree-restore-indus-waters-treaty-re-engagement-could-help", desc:"Análisis de las posiciones de ambas partes" },
    { headline:"Indus Waters Treaty", medium:"Britannica", date:"2026", url:"https://www.britannica.com/event/Indus-Waters-Treaty", desc:"Referencia completa del tratado" }
  ]
},

/* ═══ P6 — VENTANA — FILIPINAS A OSCURAS ═══ */
{
  number: "P6",
  golden: false,
  title: "Filipinas a oscuras: cómo una guerra a 8.000 km de distancia apaga un país entero",
  tags: [
    { cls:"tag-blue", text:"VENTANA OPORTUNIDAD" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "ph",
  chips: [
    { cls:"chip-green", text:"COMP: Ángulo no cubierto" },
    { cls:"chip-green", text:"VEL: Acelerando" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/MANILA_SKYLINE_01.JPG?width=1200",
  bannerAlt: "Manila — Filipinas sufre apagones masivos por la crisis energética global",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Philippines_(orthographic_projection).svg?width=1200",
  tesis: "Filipinas se está quedando sin luz. Dos millones de personas sufren cortes rotativos, la electricidad ha subido un 58% en un mes y el gas natural licuado se ha triplicado. ¿El motivo? Una guerra a 8.000 kilómetros. Filipinas importa el 98% de su petróleo de Oriente Medio, y con Ormuz bloqueado por la guerra de Irán, sus reservas cayeron de 57 a 45 días en un mes. Es el ejemplo perfecto de la segunda derivada geopolítica: un país que no tiene nada que ver con la guerra se apaga por completo por su culpa. Y la lección va más allá de Manila: en un mundo donde la energía viaja por unos pocos cuellos de botella, la dependencia energética es la mayor vulnerabilidad estratégica de una nación. Filipinas es solo el primer dominó — y esta semana los ministros de ASEAN se reúnen en Manila bajo el shock de esa misma guerra.",
  fields: [
    { label:"La noticia", value:"Filipinas sufre apagones masivos: 2 millones de personas sin luz por turnos, cortes de 2-3 horas (bne IntelliNews, Philstar). Electricidad +58% en el mercado spot; GNL x3; carbón +30%. Importa el 98% de su petróleo de Oriente Medio; reservas cayeron de 57 a 45 días de suministro en un mes (Rappler, DOE). Causa raíz: cierre de Ormuz por la guerra de Irán. Esta semana, los ministros de Exteriores de ASEAN se reúnen en Manila bajo los efectos económicos de la guerra (21 JUL)." },
    { label:"Segunda derivada", value:"Filipinas no tiene tropas en Oriente Medio ni un papel en la guerra de Irán, y sin embargo se apaga por su culpa. Ese es el poder de la segunda derivada geopolítica: en un mundo hiperconectado, un cuello de botella (Ormuz) transmite el shock a miles de kilómetros. Filipinas es un caso de estudio de una verdad incómoda: la dependencia energética es la mayor vulnerabilidad estratégica de un país, más que su ejército o su economía. Un país puede tener democracia, crecimiento y estabilidad y aun así quedar a oscuras por una decisión tomada en Teherán. Y no es solo Filipinas: es un aviso para toda nación que importe su energía de un puñado de rutas frágiles, de Japón a Alemania. La era de la energía barata y garantizada ha terminado." },
    { label:"Gran pregunta", value:"¿Cómo puede una guerra en la que no participas dejarte completamente a oscuras — y qué dice eso sobre la vulnerabilidad de todos los países que dependen de importar su energía?" },
    { label:"Señal de competencia", value:"ÁNGULO NO CUBIERTO. La competencia hispana cubre la guerra de Irán y el petróleo, pero NADIE cuenta el efecto dominó sobre terceros países como Filipinas. Ángulo virgen que ilustra un principio universal (dependencia energética = vulnerabilidad) aplicable a cualquier país de la audiencia. Conecta con el tema dorado (Ormuz) como caso humano concreto." },
    { label:"Demanda en medios", value:"ALTA EN FUENTES ESPECIALIZADAS. Rappler: 'IN NUMBERS: Philippine electricity affected by Middle East crisis'. bne IntelliNews: 'Blackouts in the Philippines as power bills soar'. Philstar: 'Power cuts hit millions'. Manila Bulletin: 'Blame game on blackouts'. Wikipedia: '2026 Philippine energy crisis'. La reunión de ASEAN en Manila (21 JUL) da gancho de actualidad." },
    { label:"Velocidad de agenda", value:"ACELERANDO. Con los nuevos ataques a Irán (20 JUL) y el petróleo en máximos, la presión sobre importadores como Filipinas se intensifica. La cumbre de ASEAN en Manila esta semana pone el foco regional sobre el tema." },
    { label:"Historial VP", value:"VP NO ha cubierto la crisis energética de Filipinas ni el efecto dominó de Ormuz sobre terceros países. Ángulo completamente nuevo y del estilo 'conexión inesperada' que aceptan los editores (una guerra en un sitio, consecuencias devastadoras en otro). Sin riesgo de repetición." },
    { label:"Motor viral", value:"CONEXIÓN INESPERADA (guerra lejana → tu país a oscuras) + IMPACTO TANGIBLE (apagones, factura de la luz) + DATO IMPACTANTE (98% del petróleo, 2M sin luz, +58%) + MIEDO (¿me puede pasar a mí?) + PRINCIPIO UNIVERSAL (dependencia = vulnerabilidad) + VISUALIDAD (rutas, cuellos de botella, apagones)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Filipinas se está quedando sin luz por una guerra a 8.000 km en la que no participa.' Contexto: el 98% del petróleo desde Oriente Medio, la dependencia de Ormuz. Escalada: reservas cayendo, apagones, la factura disparada. Giro: no es un problema filipino, es un aviso para todos. Revelación: la dependencia energética es la mayor vulnerabilidad estratégica. Cierre: ¿qué país será el próximo dominó?" },
    { label:"Promesa cumplible", value:"'Cómo una guerra lejana apaga un país entero' — demostrable con datos de la DOE filipina, Rappler, bne y el mecanismo de dependencia energética. Aplicable a cualquier país importador." },
    { label:"Ventaja VP", value:"ALTA. VP domina las 'conexiones inesperadas' y la explicación paso a paso. El mecanismo (Ormuz → Filipinas → apagones) es ultra-visual y didáctico. El principio universal da alcance mucho más allá de Filipinas." },
    { label:"Caso para 800K/1M", value:"Señal: fuentes especializadas documentando la crisis + cumbre ASEAN en Manila. Competencia: ÁNGULO VIRGEN — nadie conecta Ormuz con apagones en terceros países. Lo diferente: no 'guerra de Irán' sino 'cómo una guerra lejana te deja sin luz'. Promesa: la conexión invisible entre un estrecho y tu bombilla. Riesgo: Filipinas puede parecer lejana — vender el PRINCIPIO UNIVERSAL. VP necesita: usar Filipinas como caso pero hablar de la vulnerabilidad de todos." },
    { label:"Título mental", value:"Filipinas se está quedando sin luz por una guerra a 8.000 km en la que no participa — y es solo el primer dominó de una fila que llega hasta Europa" },
    { label:"Qué investigar más", value:"1) Rappler: números de la electricidad filipina. 2) bne IntelliNews y Philstar sobre los apagones. 3) Wikipedia: '2026 Philippine energy crisis'. 4) Datos de la DOE (reservas 57→45 días). 5) La cumbre de ASEAN en Manila (21 JUL). 6) Otros países vulnerables (Japón, Corea, África) y los cuellos de botella (Ormuz, Malaca, Suez)." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — Conexión inesperada perfecta, del estilo que aceptan los editores. Ángulo virgen, principio universal, muy visual, con gancho de actualidad (ASEAN en Manila). Funciona solo o como complemento del tema dorado." }
  ],
  sources: [
    { headline:"IN NUMBERS: Philippine sources of electricity affected by Middle East crisis", medium:"Rappler", date:"2026", url:"https://www.rappler.com/newsbreak/data-documents/philippines-electricity-numbers-middle-east-crisis-march-2026/", desc:"Datos de la dependencia energética filipina" },
    { headline:"Blackouts in the Philippines as power bills soar", medium:"bne IntelliNews", date:"2026", url:"https://www.intellinews.com/blackouts-in-the-philippines-as-power-bills-soar-439494/", desc:"Apagones y subida de la factura eléctrica" },
    { headline:"Power cuts hit millions in Philippines", medium:"Philstar", date:"15 MAY 2026", url:"https://www.philstar.com/business/2026/05/15/2528168/power-cuts-hit-millions-philippines", desc:"Millones de afectados por los cortes de luz" },
    { headline:"2026 Philippine energy crisis", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/2026_Philippine_energy_crisis", desc:"Documentación completa de la crisis energética" }
  ]
},

/* ═══ P7 — VENTANA — COREA DEL SUR ═══ */
{
  number: "P7",
  golden: false,
  title: "Corea del Sur: cómo el aliado más importante de EEUU en Asia se convirtió en la democracia más inestable del mundo",
  tags: [
    { cls:"tag-blue", text:"VENTANA OPORTUNIDAD" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-medium",
  potText: "⭐ POTENCIAL MEDIO-ALTO",
  flag: "kr",
  chips: [
    { cls:"chip-green", text:"COMP: Gap total en español" },
    { cls:"chip-yellow", text:"VEL: Meseta" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_at_night.jpg?width=1200",
  bannerAlt: "Seúl de noche — Corea del Sur enfrenta su mayor crisis democrática en décadas",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=1200",
  tesis: "Corea del Sur ha tenido tres presidentes en un año: uno intentó una ley marcial (autogolpe), otro fue interino, y el actual —Lee Jae-myung— fue apuñalado, condenado y absuelto en apelación, y ahora gobierna con un 51,5% de aprobación mientras miles protestan porque las papeletas se agotaron en las elecciones locales de junio. Todo esto en el país que alberga 28.500 soldados americanos, fabrica el 80% de los chips de memoria del mundo (Samsung, SK Hynix) y es la primera línea contra Corea del Norte y China. La paradoja del aliado: EEUU necesita una Corea estable para su estrategia indo-pacífica, pero la democracia surcoreana está en su momento más frágil desde 1987.",
  fields: [
    { label:"La noticia", value:"Protestas continúan en Seúl tras la escasez de papeletas en las elecciones locales del 3 JUN (US News). El presidente de la Comisión Electoral Nacional, Roh Tae-ak, dimitió el 8 JUN. Las papeletas se agotaron en 50 de 14.300 centros (Korea Herald). Rally de 6.000 personas en Jamsil (12 JUN). Lee Jae-myung cae al 51,5% de aprobación. Wikipedia documenta las '2026 South Korean local election rerun protests'." },
    { label:"Segunda derivada", value:"La crisis de Corea del Sur es el resultado de una polarización que se aceleró con el intento de ley marcial de Yoon en diciembre 2024: impeachment, presidente interino, elecciones anticipadas, un candidato apuñalado que ganó las presidenciales. Ahora, elecciones locales con escasez de papeletas que recuerdan a las irregularidades que desestabilizan democracias jóvenes. La pregunta estratégica: ¿qué pasa con la disuasión contra Corea del Norte si Seúl no puede organizar unas elecciones? El BISI lo llama 'The Ally's Paradox'." },
    { label:"Gran pregunta", value:"¿Qué pasa con la estrategia de EEUU en Asia si su aliado más importante no puede organizar unas elecciones — y quién se beneficia del caos democrático en Seúl?" },
    { label:"Señal de competencia", value:"GAP TOTAL EN ESPAÑOL. El nicho hispano cubre Asia desde China-Taiwán o Corea del Norte. NADIE cubre la crisis democrática de Corea del Sur como tema geopolítico. En inglés: CSIS (proyecto dedicado), BISI, Harvard Kennedy School, The Diplomat. En español: vacío total. VP puede ser el primero." },
    { label:"Demanda en medios", value:"ALTA EN THINK TANKS. CSIS: proyecto 'South Korea's Political Crisis'. BISI: 'The Ally's Paradox'. Harvard Kennedy School: análisis de causas. The Diplomat (FEB 2026). Korea Herald y Korea Times cubren las protestas. US News sobre las elecciones." },
    { label:"Velocidad de agenda", value:"MESETA. Las protestas continúan sin escalar. Puede reactivarse con nuevas irregularidades, decisiones polarizantes de Lee o tensión con Corea del Norte. Ventana amplia, momentum no urgente." },
    { label:"Historial VP", value:"VP NO ha cubierto la crisis política de Corea del Sur en 2026. Ha hecho videos sobre Corea del Sur (Samsung, economía, K-pop) pero nunca sobre la crisis democrática ni la paradoja del aliado. Tema completamente nuevo." },
    { label:"Motor viral", value:"PAÍS RECONOCIBLE (Samsung, K-pop) + DATO IMPACTANTE (3 presidentes en 1 año, candidato apuñalado que ahora es presidente) + PARADOJA (democracia modelo que no puede organizar elecciones) + CONSECUENCIA ESTRATÉGICA (28.500 soldados EEUU, chips, disuasión nuclear) + DRAMA PERSONAL cinematográfico." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Corea del Sur ha tenido tres presidentes en un año. Uno intentó un autogolpe. Otro fue interino. El actual fue apuñalado y condenado por un tribunal.' Escalada: Yoon y la ley marcial, impeachment, elecciones caóticas, papeletas agotadas. Giro: todo esto en el país que fabrica el 80% de los chips de memoria y es la primera línea contra Corea del Norte. Cierre: ¿es Corea del Sur la próxima democracia que se rompe desde dentro?" },
    { label:"Promesa cumplible", value:"'Cómo el aliado clave de EEUU en Asia se convirtió en la democracia más inestable' — demostrable con la cronología, los datos de las elecciones y el análisis estratégico (CSIS, BISI)." },
    { label:"Ventaja VP", value:"ALTA. VP puede combinar el drama personal de Lee Jae-myung con la dimensión estratégica (Indo-Pacífico, chips, EEUU). Gap total en español. Papers de CSIS y BISI sostienen 25+ minutos." },
    { label:"Caso para 800K/1M", value:"Señal: CSIS, BISI, Harvard analizando. Gap TOTAL en español. Lo diferente: no 'política coreana' sino 'qué pasa con la estrategia de EEUU si su aliado se rompe'. Promesa: 3 presidentes, apuñalamiento, papeletas agotadas. Riesgo: Corea del Sur puede generar menos click que Irán/Rusia — abrir con el drama personal y conectar rápido con chips/EEUU/China." },
    { label:"Título mental", value:"Un presidente intentó un autogolpe. El siguiente fue apuñalado y condenado. Ahora las papeletas se agotan en Corea del Sur — y 28.500 soldados americanos observan" },
    { label:"Qué investigar más", value:"1) CSIS 'South Korea's Political Crisis'. 2) BISI 'The Ally's Paradox'. 3) Harvard Kennedy School. 4) Cronología: Yoon → ley marcial → impeachment → Lee → protestas. 5) Impacto en semiconductores y relaciones EEUU-Corea. 6) Posición de Corea del Norte." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — Narrativa extraordinaria y gap total en español. Ventana amplia pero ángulo 'paradoja del aliado' muy VP. Conectar con semiconductores y estrategia EEUU para maximizar alcance." }
  ],
  sources: [
    { headline:"South Korea's Political Crisis", medium:"CSIS", date:"2026", url:"https://www.csis.org/programs/korea-chair/projects/south-koreas-political-crisis", desc:"Proyecto dedicado del CSIS" },
    { headline:"The Ally's Paradox: What South Korea's 2026 Crisis Reveals About Dependency in the Indo-Pacific", medium:"BISI (Bloomsbury)", date:"2026", url:"https://bisi.org.uk/reports/the-allys-paradox-what-south-koreas-2026-crisis-reveals-about-dependency-in-the-indo-pacific", desc:"Paper sobre la paradoja del aliado" },
    { headline:"Lee grapples with headwinds following local elections", medium:"Korea Times", date:"16 JUN 2026", url:"https://www.koreatimes.co.kr/southkorea/politics/20260616/lee-grapples-with-post-local-election-headwinds-as-party-rift-ballot-shortage-issues-deepen", desc:"Problemas post-electorales" },
    { headline:"2026 South Korean local election rerun protests", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/2026_South_Korean_local_election_rerun_protests", desc:"Documentación de las protestas" }
  ]
},

/* ═══ P8 — VENTANA — PAPÚA / GRASBERG ═══ */
{
  number: "P8",
  golden: false,
  title: "La guerra olvidada de Papúa: la mina de oro más grande del mundo, una insurgencia de 60 años y el silencio de Occidente",
  tags: [
    { cls:"tag-blue", text:"VENTANA OPORTUNIDAD" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-medium",
  potText: "⭐ POTENCIAL MEDIO",
  flag: "id",
  chips: [
    { cls:"chip-green", text:"COMP: Gap total en español" },
    { cls:"chip-yellow", text:"VEL: Latente" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Grasberg_mine.jpg?width=1200",
  bannerAlt: "Mina de Grasberg en Papúa Occidental — una de las mayores minas de oro y cobre del mundo",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Indonesia_(orthographic_projection).svg?width=1200",
  tesis: "En el rincón más remoto de Indonesia hay una mina que produce más oro que casi ningún otro lugar: Grasberg, en Papúa Occidental. Y a su alrededor arde una guerra de 60 años de la que casi nadie habla. Papúa fue anexionada por Indonesia en los años 60 mediante un referéndum de la ONU que fue una farsa (poco más de mil ancianos votando a mano alzada). Desde entonces, una insurgencia independentista se enfrenta al ejército indonesio; en enero de 2026, separatistas sitiaron a 18 trabajadores de Freeport durante tres días. La paradoja brutal: Papúa contiene algunos de los minerales más valiosos del mundo y es a la vez de las regiones más pobres de Indonesia. La riqueza sale, la miseria y la represión se quedan. Es un colonialismo de recursos del siglo XXI que ocurre a plena luz — y que a Occidente le conviene ignorar porque la mina es medio estadounidense.",
  fields: [
    { label:"La noticia", value:"En enero de 2026, separatistas armados sitiaron durante tres días a 18 trabajadores de Freeport Indonesia en Tembagapura; fuerzas indonesias los rescataron. La mina de Grasberg reinicia su explotación subterránea (Block Cave) en el segundo trimestre de 2026 (Freeport-McMoRan). Choques con rebeldes cerca de la mina (VOA). Paper académico: 'Predatory Mining, Conflict and Political Spaces: The Case of Grasberg Mine in West Papua' (Taylor & Francis, 2025). Lowy Institute: 'Freeport's Papua mine deal buys time'." },
    { label:"Segunda derivada", value:"Grasberg no es solo una mina: es un caso de estudio del colonialismo de recursos del siglo XXI. Indonesia (MIND ID, 51,2%) y Freeport-McMoRan (48,8%) extraen una de las mayores riquezas minerales del mundo de un territorio ocupado, mientras Papúa sigue siendo de las regiones más pobres del país. Ese desajuste —riqueza extractiva brutal, desarrollo local nulo— alimenta 60 años de insurgencia. Y aquí está la clave geopolítica: Occidente calla sobre la represión en Papúa porque (a) Indonesia es socio clave en la contención de China en el Indo-Pacífico y (b) la mina es medio estadounidense. Es la prueba de que el discurso de derechos humanos es selectivo: se denuncia la ocupación cuando conviene y se ignora cuando el ocupante es un aliado con un tesoro mineral." },
    { label:"Gran pregunta", value:"¿Por qué el mundo ignora una ocupación de 60 años y la represión de un pueblo entero — y qué papel juega en ese silencio la mina de oro más grande del planeta?" },
    { label:"Señal de competencia", value:"GAP TOTAL EN ESPAÑOL. Papúa Occidental es uno de los conflictos más ignorados del mundo; prácticamente no existe cobertura en el nicho geopolítico hispano. En inglés hay material académico (Taylor & Francis), think tanks (Lowy) y prensa (VOA), pero en español es un vacío absoluto. Exactamente el tipo de tema ultra-específico y original que aceptan los editores de VP." },
    { label:"Demanda en medios", value:"MEDIA (nicho especializado). Lowy Institute: 'Freeport's Papua mine deal buys time'. Taylor & Francis: paper sobre minería depredadora en Grasberg. VOA: rebeldes muertos cerca de la mina. Freeport-McMoRan: comunicados sobre el reinicio. Wikipedia: 'Grasberg mine'. Cobertura consistente pero de nicho." },
    { label:"Velocidad de agenda", value:"LATENTE. No hay un pico mediático, pero el reinicio de Grasberg (Q2 2026) y los incidentes recurrentes mantienen el tema vivo. Es un tema 'evergreen' de investigación que VP puede publicar cuando quiera, siendo el primero en español." },
    { label:"Historial VP", value:"VP NO ha cubierto Papúa Occidental. Ha hecho videos sobre Indonesia y sobre conflictos olvidados. El ángulo Grasberg + insurgencia + colonialismo de recursos + hipocresía occidental es completamente nuevo y del estilo 'conflicto ultra-específico con dimensión geopolítica' que funciona." },
    { label:"Motor viral", value:"CONFLICTO OCULTO (una guerra de 60 años que nadie conoce) + ORO (la mina más grande del mundo) + INJUSTICIA (riqueza que sale, miseria que queda) + HIPOCRESÍA (Occidente calla por conveniencia) + DAVID CONTRA GOLIAT (insurgentes vs ejército + multinacional) + VISUALIDAD (la mina gigante, la selva, Nueva Guinea)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Aquí está una de las minas de oro más grandes del mundo. A su alrededor arde una guerra de 60 años. Y tú no habías oído hablar de ninguna de las dos.' Contexto: la anexión de Papúa, el referéndum-farsa de la ONU, Grasberg. Escalada: la insurgencia, el asedio de enero, la represión. Giro: la paradoja de la riqueza y la pobreza. Revelación: Occidente calla porque Indonesia contiene a China y la mina es medio estadounidense. Cierre: ¿cuántos conflictos como este ignoramos porque nos conviene?" },
    { label:"Promesa cumplible", value:"'La guerra olvidada por la mina de oro más grande del mundo' — demostrable con el paper de Taylor & Francis, los datos de propiedad de Grasberg (51/49), la historia de la anexión y los incidentes de 2026." },
    { label:"Ventaja VP", value:"ALTA. VP domina los conflictos olvidados con dimensión de recursos y poder. Mapas de Nueva Guinea, la historia de la anexión, la economía de la mina — todo muy visual. Gap total en español = ser el primero. Fuentes académicas para 20+ minutos." },
    { label:"Caso para 800K/1M", value:"Señal: material académico y think tanks documentándolo. Competencia: gap total en español. Lo diferente: no es un conflicto conocido, es uno oculto con oro de por medio. Promesa: descubrir una guerra que llevas ignorando toda la vida. Riesgo: puede parecer lejano/desconocido — ese es también su gancho (novedad total). VP necesita: abrir con la mina y el oro para enganchar, luego la guerra y la hipocresía." },
    { label:"Título mental", value:"Aquí está la mina de oro más grande del mundo — y a su alrededor arde una guerra de 60 años que a Occidente le conviene que no conozcas" },
    { label:"Qué investigar más", value:"1) Taylor & Francis: paper sobre minería depredadora en Grasberg. 2) Lowy Institute sobre el acuerdo de Freeport. 3) Historia del 'Acto de Libre Elección' de 1969. 4) Datos de Grasberg (producción, propiedad 51/49). 5) El asedio de enero 2026 y la insurgencia (OPM/TPNPB). 6) La relación Indonesia-EEUU y la contención de China." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — Tema ultra-específico, original y con gap total en español, exactamente del estilo que aceptan los editores. Sin urgencia mediática, pero enorme potencial de diferenciación. Ser el primero en contarlo en español es la ventaja." }
  ],
  sources: [
    { headline:"Predatory Mining, Conflict and Political Spaces: The Case of Grasberg Mine in West Papua", medium:"Taylor & Francis (Society & Natural Resources)", date:"2025", url:"https://www.tandfonline.com/doi/full/10.1080/08941920.2025.2553355", desc:"Paper académico sobre la minería depredadora en Grasberg" },
    { headline:"Freeport's Papua mine deal buys time", medium:"Lowy Institute", date:"2026", url:"https://www.lowyinstitute.org/the-interpreter/freeport-s-papua-mine-deal-buys-time", desc:"Análisis del acuerdo minero y sus tensiones" },
    { headline:"2 Papuan rebels killed in shootout near US-Indonesian gold mine", medium:"VOA", date:"2026", url:"https://www.voanews.com/a/papuan-rebels-killed-in-shootout-near-us-indonesian-gold-mine-/7560279.html", desc:"Choque armado cerca de la mina de Grasberg" },
    { headline:"Grasberg mine", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/Grasberg_mine", desc:"Datos de la mina y su estructura de propiedad" }
  ]
}

],

/* ═══ RANKING (estructura correcta: tema/subtema/viral/depth/timing/fit/verdCls/verdText) ═══ */
ranking: [
  { tema:"Irán: la trampa de Ormuz", subtema:"Trump reinicia la guerra · Brent $126 · EL tema del nicho", viral:96, depth:88, timing:98, fit:82, verdCls:"verd-y", verdText:"⭐ DORADO · ATACAR" },
  { tema:"Groenlandia: guerra del Ártico", subtema:"Tierras raras vs China · Trump rompe la OTAN", viral:88, depth:94, timing:90, fit:93, verdCls:"verd-y", verdText:"✅ ATACAR HOY" },
  { tema:"Venezuela: archivos CIA", subtema:"Trump desclasifica el 'fraude' de Maduro · Precedente Latam", viral:90, depth:86, timing:92, fit:92, verdCls:"verd-y", verdText:"✅ ATACAR HOY" },
  { tema:"Latam: ola conservadora", subtema:"Milei/Kast/Espriella/Fujimori · Filón Bukele", viral:87, depth:85, timing:80, fit:95, verdCls:"verd-y", verdText:"✅ ATACAR HOY" },
  { tema:"India: guerra del agua", subtema:"Tratado del Indo como arma nuclear", viral:80, depth:92, timing:78, fit:88, verdCls:"verd-y", verdText:"✅ ATACAR HOY" },
  { tema:"Filipinas a oscuras", subtema:"Efecto dominó de Ormuz · Conexión inesperada", viral:78, depth:88, timing:82, fit:90, verdCls:"verd-w", verdText:"👁️ INVESTIGAR" },
  { tema:"Corea del Sur: democracia frágil", subtema:"3 presidentes en 1 año · Gap total español", viral:70, depth:90, timing:60, fit:88, verdCls:"verd-w", verdText:"👁️ INVESTIGAR" },
  { tema:"Papúa: la guerra olvidada del oro", subtema:"Grasberg · Colonialismo de recursos", viral:62, depth:92, timing:55, fit:85, verdCls:"verd-w", verdText:"👁️ INVESTIGAR" }
],

/* ═══ VIGILAR (estructura correcta: title/body/trigger/sourceUrl/sourceText) ═══ */
vigilar: [
  { title:"Xi visita Rusia: el eje China-Rusia se refuerza mientras Occidente mira a Irán", body:"Mientras EEUU se enreda en Ormuz y Venezuela, Pekín y Moscú estrechan lazos. El nuevo (des)orden mundial multipolar toma forma: OCS, BRICS+, alianzas paralelas al orden americano.", trigger:"Si hay anuncios concretos de cooperación militar o energética Xi-Putin", sourceUrl:"https://www.nbcnews.com/video/chinese-president-xi-jinping-is-to-visit-russia-165478469971", sourceText:"NBC News (JUL 2026)" },
  { title:"España campeona del Mundial 2026: la geopolítica del torneo en la América de Trump", body:"España ganó a Argentina (1-0, 19 JUL) el Mundial celebrado en EEUU, México y Canadá bajo Trump: vetos de viaje, ICE en estadios y soft power. El deporte como escenario geopolítico.", trigger:"Si hay incidentes migratorios/diplomáticos ligados al torneo", sourceUrl:"https://en.wikipedia.org/wiki/2026_FIFA_World_Cup", sourceText:"Wikipedia (19 JUL 2026)" },
  { title:"Etiopía-Eritrea: tropas en la frontera y el fantasma de otra guerra de 600.000 muertos", body:"Etiopía ('no seremos un país sin litoral') y Eritrea acumulan tropas. La última guerra mató a 600.000 personas. EEUU, aliado reciente de Eritrea, quedaría atrapado.", trigger:"Si hay choque fronterizo o movilización general", sourceUrl:"https://www.atlanticcouncil.org/blogs/africasource/ethiopia-and-eritrea-are-on-the-brink-of-war-again/", sourceText:"Atlantic Council (2026)" },
  { title:"Hong Kong: la legislatura suspende sesiones mientras continúan las protestas", body:"Nuevo foco de inestabilidad en Hong Kong. Si escala, reactiva el debate sobre el control de Pekín y la autonomía, un tema con fuerte carga simbólica.", trigger:"Si las protestas se generalizan o Pekín interviene", sourceUrl:"https://www.nbcnews.com/video/hong-kong-legislature-suspends-meetings-as-protests-continue-61825605654", sourceText:"NBC News (JUL 2026)" },
  { title:"Reino Unido: Andy Burnham forma nuevo gobierno tras el hundimiento británico", body:"Cambio de gabinete en UK. VP ya hizo 'El hundimiento británico' (23 JUN, 169K); un giro político fuerte podría justificar una segunda parte sobre si el nuevo gobierno cambia algo.", trigger:"Si el nuevo gobierno adopta un giro drástico (economía, defensa, UE)", sourceUrl:"https://en.wikipedia.org/wiki/Portal:Current_events/July_2026", sourceText:"Wikipedia Current Events (JUL 2026)" },
  { title:"Trump vs Tribunal Supremo: la batalla constitucional por los aranceles ($170.000M)", body:"El Supremo tumbó los aranceles IEEPA (6-3) y podrían devolverse $170.000M. Trump busca vías alternativas (Sección 301). Quién controla el comercio de EEUU: presidente o Congreso.", trigger:"Si hay nueva sentencia o Trump encuentra una vía legal alternativa", sourceUrl:"https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/", sourceText:"Tax Foundation (2026)" },
  { title:"Ébola y Marburgo en Uganda y RD Congo: la OMS declara emergencia sanitaria internacional", body:"Doble brote declarado emergencia internacional (PHEIC). Con la ayuda occidental recortada, China podría llenar el vacío: la seguridad sanitaria como nuevo terreno de soft power.", trigger:"Si se propaga fuera de la región o hay pugna EEUU-China por la respuesta", sourceUrl:"https://en.wikipedia.org/wiki/Portal:Current_events/July_2026", sourceText:"Wikipedia / OMS (JUL 2026)" }
],

/* ═══ COVERED VIDEOS (strings — NO REPETIR estos temas) ═══ */
coveredVideos: [
  "EL CASTRISMO SE RINDE: Cómo será la nueva Cuba (1 JUL · 274K)",
  "VENEZUELA acaba de recibir el GOLPE más DEVASTADOR (25 JUN · 585K)",
  "EL HUNDIMIENTO BRITÁNICO: ¿Por qué este país ha dejado de funcionar? (23 JUN · 169K)",
  "EMIRATOS CONTRA IRÁN: el golpe que puede cambiar todo el Golfo (20 JUN · 165K)",
  "¿LLEGÓ la MANO DURA? EUROPA le declara la GUERRA a la INMIGRACIÓN ILEGAL (17 JUN · 569K)",
  "La PEOR noticia para el CASTRISMO: EEUU declara la GUERRA al G2 CUBANO (16 JUN · 374K)",
  "EEUU PIERDE MÁS de lo que parece en IRÁN (15 JUN · 190K)",
  "UCRANIA da la SORPRESA: ¿Es posible una VICTORIA sobre RUSIA? (8 JUN · 471K)",
  "SORPRESA EN COLOMBIA: un FAN de BUKELE y MILEI DESTROZA a la izquierda (1 JUN · 347K)",
  "¿JAQUE a IRÁN? La ALIANZA SECRETA de TRUMP con ERITREA (26 MAY · 269K)"
]

};
