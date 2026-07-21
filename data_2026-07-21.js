/* ═══════════════════════════════════════════════════════════════
   RADAR EDITORIAL VP · 21 JULIO 2026 · v8.3
   Dashboard de inteligencia editorial — VisualPolitik
   SIN NOTICIAS — Solo propuestas profundas estilo temas aceptados
   8 propuestas (5 competencia + 3 ventana de oportunidad)
═══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-07-21",
  dateLabel: "21 JULIO 2026",
  brisbane: "BAJO DEMANDA",
  brent: "$118.40",
  brentChange: "↕ Nuevos ataques de EEUU a Irán (20 JUL), muere otro soldado · Brent tocó $126 en el pico · Trump amenaza con sacar TODAS las tropas de Europa por Groenlandia · Filipinas a oscuras"
},

/* ═══ TICKER ═══ */
ticker: [
  { cls:"t-red",    text:"🇬🇱 GROENLANDIA: <strong>Trump redobla la presión y amenaza con retirar TODAS las tropas de Europa</strong> · 'La necesitamos para proteger al mundo' · Dinamarca: 'defenderemos cada centímetro' · Grupo de trabajo busca solución antes de fin de año" },
  { cls:"t-red",    text:"🇮🇷 IRÁN: <strong>Nuevos ataques aéreos de EEUU (20 JUL)</strong> · Muere otro soldado estadounidense · La guerra se estrecha en torno a Ormuz · Brent tocó $126 en el pico · Mercados en tensión" },
  { cls:"t-orange", text:"🌎 LATINOAMÉRICA: <strong>Ola conservadora histórica</strong> · Milei, Kast (Chile), Espriella (Colombia), Fujimori (Perú), Fernández (Costa Rica) · Bolivia gira a la derecha · ¿Fin de la marea rosa?" },
  { cls:"t-red",    text:"🇵🇭 FILIPINAS: <strong>Apagones masivos, 2 millones sin luz</strong> · Importa el 98% de su petróleo de Oriente Medio · GNL x3, electricidad +58% · La guerra de Ormuz apaga un país a 8.000 km" },
  { cls:"t-gold",   text:"🇺🇦 OTAN ANKARA: cumbre cerrada con <strong>€70.000M para Ucrania</strong> · Trump licenciará interceptores Patriot · 'Muy molesto con la OTAN' por Irán · Zelensky, el gran ganador" },
  { cls:"t-orange", text:"🇮🇳 INDIA-PAKISTÁN: India amenaza con cortar '<strong>cada gota</strong>' de agua del Indo · Tribunal internacional lo declara ilegal · India lo ignora · 90% de las cosechas de Pakistán en riesgo" },
  { cls:"t-red",    text:"🇪🇹 ETIOPÍA-ERITREA: tropas concentradas en la frontera · Etiopía: '<strong>no seremos un país sin litoral</strong>' · 600.000 muertos en la última guerra · Crisis Group alerta de escalada" },
  { cls:"t-orange", text:"🇻🇪 VENEZUELA: <strong>Estado zombi</strong> · EEUU se ha embolsado $8.000M en petróleo desde la caída de Maduro · Terremoto (3.811 muertos) hunde aún más la economía · Delcy Rodríguez liberaliza" },
  { cls:"t-gold",   text:"⚽ ESPAÑA CAMPEONA: gana el Mundial 2026 a Argentina (1-0, prórroga, 19 JUL) · El torneo geopolítico en la América de Trump · Vetos de viaje, ICE y soft power" }
],

/* ═══ HERO ═══ */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>LA GUERRA POR EL ÁRTICO: POR QUÉ TRUMP HARÍA SALTAR LA OTAN POR UNA ISLA DE HIELO</span> — Trump redobla su presión sobre Groenlandia y amenaza con sacar TODAS las tropas de Europa. No es un capricho: bajo el hielo hay 1,5 millones de toneladas de tierras raras (Kvanefjeld, uno de los mayores depósitos del mundo) y China acecha con su 'Ruta de la Seda Polar'. <span class='hl-red'>No es comprar una isla — es la guerra por los minerales que controlan el siglo XXI.</span> CSIS, Foreign Affairs, Forbes."
  },
  {
    label: "🎯 Conexión inesperada",
    content: "<span class='hl'>FILIPINAS A OSCURAS: CÓMO UNA GUERRA A 8.000 KM APAGA UN PAÍS ENTERO:</span> Filipinas importa el 98% de su petróleo de Oriente Medio. Con Ormuz bloqueado, el GNL se ha triplicado, la electricidad subió un 58% y 2 millones de personas se quedan sin luz por turnos. <span class='hl-red'>La segunda derivada perfecta: tu dependencia energética es tu mayor vulnerabilidad geopolítica — y Filipinas es solo el primer dominó.</span> Rappler, bne, Philstar."
  },
  {
    label: "📊 Señales de competencia esta semana",
    content: "Groenlandia/Trump <span class='hl-red'>trending tras la cumbre OTAN</span> · Irán $126 barril <span class='hl-red'>agenda dominante 20 JUL</span> · Ola conservadora Latam <span class='hl-red'>domina conversación hispana</span> · India-Pakistán agua <span class='hl-red'>hueco en español</span> · Corea del Sur y Papúa <span class='hl-red'>gap total en el nicho</span>"
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

/* ═══ P1 — TEMA DORADO ⭐ COMPETENCIA — GROENLANDIA ═══ */
{
  number: "P1",
  golden: true,
  title: "La guerra por el Ártico: por qué Trump haría saltar la OTAN por una isla de hielo (y no es por la isla)",
  tags: [
    { cls:"tag-gold", text:"⭐ TEMA DORADO" },
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-gold",
  potText: "⭐⭐⭐ POTENCIAL MÁXIMO",
  flag: "GL",
  chips: [
    { cls:"chip-green", text:"COMP: Trending" },
    { cls:"chip-green", text:"VEL: Acelerando" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Nuuk,_Greenland_skyline_aerial_view.jpg?width=1200",
  bannerAlt: "Groenlandia — la isla ártica en el centro de la disputa por las tierras raras",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenland_(orthographic_projection).svg?width=1200",
  tesis: "Trump ha vuelto a exigir el control de Groenlandia y ha amenazado con retirar TODAS las tropas estadounidenses de Europa si el continente sigue plantándole cara. Dinamarca respondió: 'defenderemos cada centímetro de la OTAN, incluido nuestro propio territorio'. Parece una excentricidad — un presidente que quiere comprar una isla. No lo es. Groenlandia ocupa el octavo puesto mundial en reservas de tierras raras (1,5 millones de toneladas) y alberga Kvanefjeld, uno de los mayores depósitos del planeta, con 370.000 toneladas de tierras raras pesadas — la categoría más valiosa y la más escasa fuera de China. Y ahí está la clave: China domina el 90% de la cadena mundial de tierras raras, se ha autoproclamado 'Estado casi ártico' y empuja su 'Ruta de la Seda Polar'. Groenlandia no es una isla. Es el campo de batalla por los minerales que fabrican los cazas F-35, los misiles y los coches eléctricos. La pregunta que nadie hace: ¿está Trump dispuesto a romper la OTAN para ganarle al Ártico a China?",
  fields: [
    { label:"La noticia", val:"Trump redobla su exigencia sobre Groenlandia en la cumbre OTAN de Ankara (7-8 JUL) y amenaza con retirar todas las tropas de Europa (CNBC, 7-8 JUL). 'La necesitamos para proteger al mundo'; 'es muy importante para EEUU, pero no para Dinamarca'. La primera ministra Frederiksen: 'Groenlandia no está en venta' y 'defenderemos cada centímetro de la OTAN'. Un grupo de trabajo EEUU-Dinamarca-Groenlandia busca una solución antes de fin de año. Foreign Affairs publica 'How Greenland Falls: Imagining a Bloodless Trump Takeover'." },
    { label:"Segunda derivada", val:"La obsesión de Trump con Groenlandia no va de territorio: va de la guerra de las tierras raras con China. China controla ~90% del refino mundial de tierras raras y ya usó ese poder como arma (bloqueó exportaciones a EEUU en la guerra comercial). Groenlandia es la mayor reserva accesible de tierras raras pesadas fuera de China — exactamente las que hacen falta para imanes de misiles, cazas F-35 y turbinas. Pekín lo sabe: se declaró 'Estado casi ártico', financió el proyecto de Kvanefjeld y empuja la 'Ruta de la Seda Polar'. Que Trump amenace con romper la OTAN por Groenlandia revela la verdadera jerarquía de prioridades de Washington: la seguridad europea es negociable; el acceso a los minerales críticos, no. El Ártico se está convirtiendo en el nuevo Golfo Pérsico — y el hielo que se derrite está abriendo rutas y yacimientos que redibujarán el poder mundial." },
    { label:"Gran pregunta", val:"¿Está Trump dispuesto a romper la alianza que ganó la Guerra Fría para arrebatarle a China el control de los minerales que fabrican las armas del siglo XXI?" },
    { label:"Señal de competencia", val:"TRENDING. Groenlandia volvió a la agenda con fuerza tras la cumbre OTAN (Trump amenazando con el repliegue de Europa). Los canales del nicho hispano cubren 'Trump quiere Groenlandia' de forma anecdótica o como excentricidad. NADIE está contando la SEGUNDA DERIVADA: la guerra de las tierras raras, la Ruta de la Seda Polar china, Kvanefjeld, la jerarquía de prioridades de EEUU. Hueco claro para el ángulo profundo de recursos y poder ártico." },
    { label:"Demanda en medios", val:"MÁXIMA. CNBC: 'Trump doubles down on push for control over Greenland' (8 JUL) y 'Trump renews Greenland threats at NATO summit, says U.S. could remove troops from Europe' (7 JUL). Foreign Affairs: 'How Greenland Falls'. CSIS: 'Greenland, Rare Earths, and Arctic Security'. Forbes: 'Trump's Greenland Minerals Ambitions: What's Beneath The Ice'. Chatham House sobre minerales críticos. The Arctic Institute sobre el dominio mineral chino. Euronews (Frederiksen)." },
    { label:"Velocidad de agenda", val:"ACELERANDO. Trump reactivó la exigencia esta misma semana con la amenaza del repliegue. El grupo de trabajo busca solución antes de fin de año. El tema tiene combustible para meses pero el pico de atención es AHORA, tras la cumbre." },
    { label:"Historial VP", val:"VP NO ha cubierto Groenlandia como tema central. Ha tocado tierras raras tangencialmente ('Pax Silica', 141K — que falló por titular abstracto y falta de gancho). La LECCIÓN: aquí el gancho es potentísimo (Trump rompe la OTAN por una isla) y concreto (amenaza esta semana), justo lo que le faltó a Pax Silica. El ángulo Ártico + China + recursos es nuevo para VP." },
    { label:"Motor viral", val:"PODER (Trump vs la OTAN, EEUU vs China) + RECURSOS (el tesoro bajo el hielo) + PARADOJA (romper la alianza más fuerte del mundo por una isla de 56.000 habitantes) + MIEDO (China controla los minerales de las armas) + VISUALIDAD (mapas del Ártico, rutas polares, minas) + PERSONAJE (Trump) + CONSECUENCIA GLOBAL (quién domina las tierras raras domina la industria militar)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Trump está dispuesto a sacar a todo el ejército de EEUU de Europa. ¿El motivo? Una isla helada de 56.000 habitantes. Suena absurdo. No lo es.' Contexto: qué son las tierras raras, por qué China las controla, qué hay bajo el hielo de Groenlandia. Escalada: Kvanefjeld, la Ruta de la Seda Polar, el deshielo que abre el Ártico. Giro: la seguridad europea es negociable para Washington; los minerales no. Revelación: el Ártico es el nuevo Golfo Pérsico. Cierre: ¿quién controlará el tablero cuando el hielo desaparezca?" },
    { label:"Promesa cumplible", val:"'Por qué Groenlandia vale más que la OTAN para Trump' — demostrable con datos de reservas (CSIS, Forbes), el dominio chino del 90% (Arctic Institute), la Ruta de la Seda Polar y las amenazas concretas de esta semana (CNBC)." },
    { label:"Ventaja VP", val:"ALTA. VP combina geopolítica + economía de recursos + mapas + historia como nadie. El Ártico, las rutas polares, los yacimientos — todo es ultra-visual. Papers de CSIS y Foreign Affairs sostienen 25+ minutos. La competencia trata el tema como anécdota; VP puede hacer la anatomía de la guerra ártica." },
    { label:"Caso para 800K/1M", val:"Señal de audiencia MÁXIMA: Groenlandia trending tras la cumbre, cobertura premium total. Señal de competencia: se trata como excentricidad, hueco total para el ángulo de recursos/poder. Lo que lo hace diferente: no es 'Trump quiere una isla' sino 'la guerra por los minerales que fabrican las armas del siglo XXI'. Promesa: el tesoro bajo el hielo y la jerarquía secreta de Washington. Riesgo de saturación: BAJO para el ángulo profundo. VP necesita: centrarse en tierras raras + China + Ártico, no en la anécdota de la compra." },
    { label:"Título mental", val:"Trump está dispuesto a sacar a todo el ejército de EEUU de Europa por una isla helada — porque bajo ese hielo está el tesoro que decide quién gana la guerra con China" },
    { label:"Qué investigar más", val:"1) CSIS: 'Greenland, Rare Earths, and Arctic Security'. 2) Foreign Affairs: 'How Greenland Falls'. 3) Datos de Kvanefjeld y Tanbreez (Forbes, InvestorNews). 4) La 'Ruta de la Seda Polar' china y el estatus de 'Estado casi ártico'. 5) Dominio chino del 90% del refino (Arctic Institute). 6) Postura de Dinamarca y del gobierno autónomo groenlandés. 7) El deshielo y las nuevas rutas árticas." },
    { label:"Veredicto", val:"ATACAR HOY — Ventana óptima tras la cumbre. Gancho brutal (Trump rompe la OTAN por una isla), segunda derivada potentísima (guerra de tierras raras con China) y fuentes premium. Es el tema dorado por excelencia: solo VP puede hacerlo a este nivel." }
  ],
  sources: [
    { headline:"Trump doubles down on push for control over Greenland as Denmark vows to defend it", medium:"CNBC", date:"8 JUL 2026", url:"https://www.cnbc.com/2026/07/08/greenland-trump-nato-denmark.html", desc:"Trump redobla la presión; Dinamarca promete defenderla" },
    { headline:"Trump renews Greenland threats at NATO summit, says U.S. could remove troops from Europe", medium:"CNBC", date:"7 JUL 2026", url:"https://www.cnbc.com/2026/07/07/trump-nato-summit-greenland-us-troops-europe.html", desc:"La amenaza de retirar tropas de Europa por Groenlandia" },
    { headline:"Greenland, Rare Earths, and Arctic Security", medium:"CSIS", date:"2026", url:"https://www.csis.org/analysis/greenland-rare-earths-and-arctic-security", desc:"Análisis de las tierras raras y la seguridad ártica" },
    { headline:"How Greenland Falls: Imagining a Bloodless Trump Takeover", medium:"Foreign Affairs", date:"2026", url:"https://www.foreignaffairs.com/united-states/how-greenland-falls", desc:"Escenario de una toma de control estadounidense" },
    { headline:"Trump's Greenland Minerals Ambitions: What's Beneath The Ice", medium:"Forbes", date:"FEB 2026", url:"https://www.forbes.com/sites/arielcohen/2026/02/20/trumps-greenland-minerals-ambitions-whats-beneath-the-ice/", desc:"El tesoro mineral bajo el hielo groenlandés" },
    { headline:"Dig, Baby, Dig? China's Mineral Dominance and Ripple Effects into the Arctic", medium:"The Arctic Institute", date:"2026", url:"https://www.thearcticinstitute.org/dig-baby-dig-chinas-mineral-dominance-ripple-effects-arctic/", desc:"El dominio mineral chino y su efecto en el Ártico" }
  ]
},

/* ═══ P2 — COMPETENCIA — OLA CONSERVADORA LATAM ═══ */
{
  number: "P2",
  golden: false,
  title: "El entierro de la marea rosa: cómo la ola conservadora más grande en 20 años está redibujando Latinoamérica",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "419",
  chips: [
    { cls:"chip-green", text:"COMP: Domina agenda hispana" },
    { cls:"chip-green", text:"VEL: Ventana óptima" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Latin_America_(orthographic_projection).svg?width=1200",
  bannerAlt: "Latinoamérica gira a la derecha — la mayor ola conservadora en dos décadas",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Latin_America_(orthographic_projection).svg?width=1200",
  tesis: "Algo tectónico está pasando en Latinoamérica. Milei en Argentina, Kast en Chile, Espriella en Colombia, Fujimori de vuelta en Perú, Laura Fernández en Costa Rica, Bolivia girando a la derecha tras dos décadas de MAS. Los politólogos hablan de un 'giro conservador de proporciones históricas', comparable a las grandes olas que marcaron generaciones: las dictaduras de los 70, la democratización de los 80, las reformas de mercado de los 90 y la 'marea rosa' de izquierda de los 2000. Pero aquí está la segunda derivada que casi nadie cuenta: esto no es un giro ideológico. Los votantes no se han vuelto de derechas — están castigando la inseguridad, el fracaso económico y a los gobiernos de turno. Es una ola ANTI-establishment que la derecha ha sabido montar. Y eso tiene una consecuencia inquietante: si el problema es el fracaso del Estado, y los nuevos gobiernos también fracasan, ¿qué viene después de esta ola?",
  fields: [
    { label:"La noticia", val:"Wikipedia registra una 'ola conservadora' en Latam con victorias de derecha en Colombia (Espriella), Costa Rica (Laura Fernández, 48,6% en primera vuelta, 1 FEB) y Perú (Fujimori). Milei en Argentina, Kast en Chile, Bolivia gira a la derecha tras el MAS. Konrad-Adenauer-Stiftung: 'Latin America's Party Landscape Shifts to the Right'. GIS Reports: 'Latin America continues its rightward shift'. The Media Line: 'Chile, Colombia, and Peru Go Conservative'. Atlantic Council: preguntas clave para la región en 2026." },
    { label:"Segunda derivada", val:"La lectura fácil es 'Latinoamérica se hace de derechas'. La lectura correcta es más profunda y más inquietante: los votantes castigan la inseguridad y los gobiernos fracasados, no abrazan una ideología. Es una ola ANTI-INCUMBENTE que la derecha ha capitalizado, igual que antes la capitalizó la izquierda con la marea rosa. El motor es el miedo (crimen organizado, extorsión, migración) y la frustración económica. Esto explica por qué figuras muy distintas — el libertario Milei, el ultraconservador Kast, el 'mano dura' Espriella, la dinastía Fujimori — triunfan a la vez: no comparten programa, comparten enemigo (el statu quo). La consecuencia estructural: si estos gobiernos no resuelven la inseguridad y la economía en 4 años, la misma ola anti-establishment que los aupó los barrerá. Latinoamérica ha entrado en un ciclo de péndulos cada vez más rápidos y radicales — y eso es una amenaza para la estabilidad democrática de toda la región." },
    { label:"Gran pregunta", val:"¿Se está volviendo Latinoamérica de derechas — o es una ola anti-establishment que barrerá también a estos gobiernos si fracasan, atrapando a la región en un péndulo cada vez más radical?" },
    { label:"Señal de competencia", val:"DOMINA LA AGENDA HISPANA. La ola conservadora es tema recurrente en el nicho hispanohablante y en medios latinoamericanos. Los canales cubren cada elección por separado (Milei, Kast, Espriella) pero pocos han construido la TESIS REGIONAL estructural: la ola como fenómeno anti-incumbente y su consecuencia futura. VP ya hizo Colombia (Espriella, 1 JUN, 347K) — pero el ángulo REGIONAL y estructural es nuevo y mucho más ambicioso." },
    { label:"Demanda en medios", val:"ALTA. Konrad-Adenauer-Stiftung (análisis de partidos). GIS Reports (giro a la derecha). The Media Line y Jerusalem Post ('Chile, Colombia, Peru go conservative'). Atlantic Council (diez preguntas para la región). Washington Examiner (ola pro-Trump). Wikipedia ('Conservative wave'). Yahoo/AFP sobre Bolivia. Cobertura sostenida en think tanks y prensa." },
    { label:"Velocidad de agenda", val:"VENTANA ÓPTIMA. La ola está en pleno desarrollo con elecciones recientes y próximas (Brasil 2026 en el horizonte). El fenómeno regional está maduro para un análisis de conjunto AHORA, antes de que se sature con cada elección individual." },
    { label:"Historial VP", val:"VP hizo 'SORPRESA EN COLOMBIA: un FAN de BUKELE y MILEI ha DESTROZADO a la izquierda' (1 JUN, 347K) — pero centrado SOLO en Colombia. También cubrió Bukele (6,59M, su mayor éxito). El ángulo REGIONAL (la ola como fenómeno estructural continental) es NUEVO y aprovecha el filón Bukele/Milei que a VP le funciona espectacularmente. Sin riesgo de repetición: es el paraguas que da sentido a todos esos videos." },
    { label:"Motor viral", val:"IMPACTO PARA LATAM (audiencia principal de VP) + PERSONAJES FUERTES (Milei, Kast, Bukele, Fujimori) + CONFLICTO IDEOLÓGICO (izquierda vs derecha, polarización) + PATRÓN HISTÓRICO (comparación con dictaduras, marea rosa) + PARADOJA (no es ideología, es rabia) + DEBATE (tema que divide y genera comentarios)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'En 20 años, Latinoamérica giró a la izquierda con la marea rosa. Acaba de girar a la derecha con la misma fuerza. Pero el motivo no es el que crees.' Contexto: las grandes olas históricas (70, 80, 90, marea rosa). Escalada: el mapa que se pinta de azul (Argentina, Chile, Colombia, Perú, Costa Rica, Bolivia). Giro: no es ideología, es castigo al fracaso. Revelación: la misma ola puede barrer a los que ha aupado. Cierre: ¿está Latinoamérica atrapada en un péndulo cada vez más radical?" },
    { label:"Promesa cumplible", val:"'Por qué toda Latinoamérica gira a la derecha a la vez' — demostrable con los resultados electorales, el análisis de KAS/GIS/Atlantic Council y el patrón anti-incumbente. Mapa regional visual." },
    { label:"Ventaja VP", val:"ALTA. VP domina Latinoamérica y las historias de poder regional. Puede combinar mapas electorales, historia (las olas previas), economía (por qué fracasan los gobiernos) y personajes. El filón Bukele/Milei le funciona como ningún otro. Gap para el ángulo estructural regional." },
    { label:"Caso para 800K/1M", val:"Señal de audiencia: Latam es el corazón de VP y Bukele fue su mayor éxito (6,59M). Señal de competencia: se cubre elección a elección, hueco para la tesis regional. Lo que lo hace diferente: no es 'ganó la derecha en X país' sino 'la mayor ola política en 20 años y por qué no es ideológica'. Promesa: el mapa que cambia de color y el péndulo que viene. Riesgo: que parezca un refrito de videos previos — evitarlo con el ángulo ANTI-INCUMBENTE y la consecuencia futura. VP necesita: tesis estructural, no crónica electoral." },
    { label:"Título mental", val:"Toda Latinoamérica está girando a la derecha a la vez — pero no porque se haya vuelto de derechas, sino porque está tan harta que la próxima ola podría barrerlo todo otra vez" },
    { label:"Qué investigar más", val:"1) Konrad-Adenauer-Stiftung: análisis del giro. 2) GIS Reports y The Media Line. 3) Atlantic Council: diez preguntas para Latam 2026. 4) Datos de cada elección (Colombia, Costa Rica, Perú, Bolivia). 5) Comparación con la marea rosa de los 2000. 6) Papel de la inseguridad y el crimen organizado como motor. 7) El factor Bukele/Milei como modelo replicado." },
    { label:"Veredicto", val:"ATACAR HOY — Tema que domina la agenda hispana, con el filón Bukele/Milei que a VP le funciona espectacularmente, pero con un ángulo estructural nuevo (ola anti-incumbente, no ideológica). Enorme potencial para la audiencia latinoamericana." }
  ],
  sources: [
    { headline:"Latin America's Party Landscape Shifts to the Right", medium:"Konrad-Adenauer-Stiftung", date:"2026", url:"https://www.kas.de/en/web/auslandsinformationen/artikel/detail/-/content/latin-america-s-party-landscape-shifts-to-the-right", desc:"Análisis del giro del panorama de partidos" },
    { headline:"Latin America continues its rightward shift", medium:"GIS Reports", date:"2026", url:"https://www.gisreportsonline.com/r/latin-america-right/", desc:"El giro a la derecha de la región" },
    { headline:"Chile, Colombia, and Peru Go Conservative: What's Next for Latin America?", medium:"The Media Line", date:"2026", url:"https://themedialine.org/by-region/chile-colombia-and-peru-go-conservative-whats-next-for-latin-america/", desc:"Qué viene tras el giro conservador" },
    { headline:"Latin America and the Caribbean in 2026: Ten defining questions", medium:"Atlantic Council", date:"2026", url:"https://www.atlanticcouncil.org/commentary/spotlight/latin-america-and-the-caribbean-in-2026-ten-defining-questions-for-the-year-ahead/", desc:"Preguntas clave para la región en 2026" }
  ]
},

/* ═══ P3 — COMPETENCIA — SHOCK DEL PETRÓLEO / IRÁN ═══ */
{
  number: "P3",
  golden: false,
  title: "El petróleo a 126 dólares: cómo la guerra de Irán ha desatado la mayor crisis energética desde los años 70",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "IR",
  chips: [
    { cls:"chip-green", text:"COMP: Agenda dominante" },
    { cls:"chip-green", text:"VEL: Acelerando 20 JUL" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-yellow", text:"VP: Media-Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=1200",
  bannerAlt: "Estrecho de Ormuz — el cuello de botella que ha disparado el petróleo a $126",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=1200",
  tesis: "El 20 de julio, EEUU volvió a bombardear Irán y murió otro soldado estadounidense. La guerra que 'terminó' con un alto el fuego nunca terminó de verdad: se ha estrechado hasta convertirse en una lucha por el Estrecho de Ormuz. Y ahí está el problema para el resto del planeta. El Brent, que rondaba los $70, tocó los $126 en el pico — la subida más rápida en la historia de cualquier conflicto reciente. Por Ormuz pasa el 20% del petróleo mundial. La consecuencia no es solo el precio de la gasolina: es una crisis energética global comparable a la de los años 70, con países enteros racionando electricidad, la inflación repuntando y el fantasma de la recesión mundial. La guerra de Irán ya no es una guerra de Oriente Medio — es un impuesto energético que está pagando el mundo entero, desde Manila hasta Madrid.",
  fields: [
    { label:"La noticia", val:"Nuevos ataques aéreos de EEUU contra Irán (20 JUL) y muerte de otro soldado estadounidense (TheStreet, 20 JUL). La guerra se estrecha en torno a Ormuz (Stratfor, 20 JUL). El Brent superó los $100 y tocó $126 en el pico, la subida más rápida en la historia de un conflicto reciente (Wikipedia: '2026 Strait of Hormuz crisis'). Mercados en tensión: Nasdaq y S&P 500 en rojo por el riesgo geopolítico. Por Ormuz pasa ~20% del petróleo mundial." },
    { label:"Segunda derivada", val:"El mundo trató la guerra de Irán como un conflicto regional que acabaría con un alto el fuego. La realidad: el alto el fuego solo desplazó el conflicto a Ormuz, y Ormuz es el grifo energético del planeta. La subida del petróleo a $126 no es una noticia de mercados — es un shock sistémico. En los años 70, dos crisis del petróleo (1973 y 1979) provocaron una década de estanflación, cambiaron la política mundial y remodelaron la economía global. Estamos ante un episodio de la misma magnitud, con un agravante: hoy la economía mundial está más endeudada y más interconectada. El shock golpea de forma asimétrica: los países que importan casi todo su petróleo de Oriente Medio (Filipinas, gran parte de Asia y África) sufren apagones y racionamiento, mientras los productores ganan. La guerra de Irán se ha convertido en el mayor redistribuidor de riqueza y poder del planeta — y casi nadie lo está contando así." },
    { label:"Gran pregunta", val:"¿Estamos ante la tercera gran crisis del petróleo de la historia — y por qué una guerra que 'terminó' está a punto de provocar una recesión global?" },
    { label:"Señal de competencia", val:"AGENDA DOMINANTE. Los nuevos ataques del 20 JUL y el petróleo disparado son EL tema del día; la competencia hispana lo cubre con intensidad. PERO lo trata como noticia de guerra ('EEUU ataca Irán', 'sube el petróleo'). El ángulo VP — la crisis energética global comparada con los años 70, el impacto asimétrico, el 'impuesto energético' mundial — está poco desarrollado. ADVERTENCIA: Irán está saturado para la audiencia VP; hay que vender ENERGÍA/ECONOMÍA GLOBAL, no 'otra guerra de Irán'." },
    { label:"Demanda en medios", val:"MÁXIMA. TheStreet: mercados y ataques (20 JUL). Stratfor: la guerra se estrecha en Ormuz (20 JUL). Wikipedia: '2026 Strait of Hormuz crisis' (Brent $126). Countercurrents y The Rift: 'julio 2026, uno de los meses más peligrosos'. CRS R45281 sobre impacto en materias primas. Cobertura financiera global." },
    { label:"Velocidad de agenda", val:"ACELERANDO. Los ataques fueron ayer (20 JUL). El petróleo está en máximos. Cada nuevo incidente en Ormuz mueve los mercados. Ventana caliente pero volátil." },
    { label:"Historial VP", val:"VP ha cubierto Irán/Ormuz muchas veces (350K-500K, algunos ya saturados; 'Ormuz estrecho fantasma' fue DESCARTADO por genérico). La DIFERENCIA: este ángulo NO es militar sino ENERGÉTICO-ECONÓMICO GLOBAL (crisis tipo años 70, impacto asimétrico, recesión). Es el paraguas económico, no la crónica de guerra. Conecta con la propuesta de Filipinas (P5) como caso concreto." },
    { label:"Motor viral", val:"DINERO (petróleo, gasolina, inflación — impacto directo en tu bolsillo) + MIEDO (recesión global) + GUERRA (EEUU vs Irán) + PATRÓN HISTÓRICO (los años 70) + CONSECUENCIA GLOBAL (medio mundo afectado) + URGENCIA (pasó ayer)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'La guerra de Irán terminó hace meses. Entonces, ¿por qué el petróleo acaba de tocar los 126 dólares y hay países quedándose sin luz?' Contexto: qué es Ormuz, por qué el alto el fuego no acabó nada. Escalada: la subida más rápida de la historia, comparación con 1973 y 1979. Giro: el impacto asimétrico — unos racionan luz, otros se forran. Revelación: es un impuesto energético mundial. Cierre: ¿la tercera gran crisis del petróleo cambiará el mundo como lo hicieron las dos primeras?" },
    { label:"Promesa cumplible", val:"'Cómo la guerra de Irán está provocando una crisis energética global' — demostrable con datos del Brent, comparación histórica con los 70, impacto por países y análisis de Stratfor/CRS." },
    { label:"Ventaja VP", val:"MEDIA-ALTA. VP domina la combinación economía + geopolítica + historia. La comparación con los años 70 y los mapas de flujos energéticos son muy VP. El riesgo es la fatiga de Irán: la ventaja depende de vender el ángulo económico global, no la enésima noticia bélica." },
    { label:"Título mental", val:"La guerra de Irán 'terminó' hace meses — pero el petróleo acaba de tocar los 126 dólares y el mundo se dirige a su tercera gran crisis energética" },
    { label:"Qué investigar más", val:"1) TheStreet y Stratfor (20 JUL). 2) Wikipedia: '2026 Strait of Hormuz crisis' (datos de precios). 3) CRS R45281. 4) Comparación con las crisis del petróleo de 1973 y 1979. 5) Impacto por países importadores (Filipinas, India, África). 6) Efecto en inflación y riesgo de recesión global." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Actualidad máxima (ataques del 20 JUL) y ángulo económico diferenciador (crisis energética tipo años 70), pero con riesgo de fatiga de Irán. Funciona si se vende como ECONOMÍA GLOBAL y se conecta con el caso Filipinas." }
  ],
  sources: [
    { headline:"Stock Market Today (July 20, 2026): Iran worries derail Nasdaq, S&P 500", medium:"TheStreet", date:"20 JUL 2026", url:"https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-july-20-2026", desc:"Nuevos ataques a Irán y su impacto en los mercados" },
    { headline:"2026 Strait of Hormuz crisis", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc:"Datos de la crisis: Brent $126, 20% del petróleo mundial" },
    { headline:"12 Reasons why July 2026 has become one of the most dangerous months ever", medium:"Countercurrents", date:"JUL 2026", url:"https://countercurrents.org/2026/07/12-reasons-why-july-2026-has-become-one-of-the-most-dangerous-months-ever/", desc:"Panorama de las crisis convergentes de julio 2026" },
    { headline:"Iran Conflict and the Strait of Hormuz: Impacts on Oil, Gas, and Commodities", medium:"Congressional Research Service", date:"2026", url:"https://www.congress.gov/crs-product/R45281", desc:"Impacto en petróleo, gas y materias primas" }
  ]
},

/* ═══ P4 — COMPETENCIA — INDIA GUERRA DEL AGUA ═══ */
{
  number: "P4",
  golden: false,
  title: "India declara la guerra del agua a Pakistán: el Tratado del Indo como arma entre dos potencias nucleares",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "IN",
  chips: [
    { cls:"chip-green", text:"COMP: Cubierto superficialmente" },
    { cls:"chip-green", text:"VEL: Acelerando" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Indus_river_from_karakouram_highway.jpg?width=1200",
  bannerAlt: "Río Indo — el agua como arma geopolítica entre India y Pakistán",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Indus_River_basin_map.svg?width=1200",
  tesis: "India suspendió el Tratado de Aguas del Indo tras el atentado de Pahalgam. Lo que empezó como medida temporal es ya política de Estado: el ministro de Recursos Hídricos declaró que India trabaja para que 'ni una sola gota de agua llegue a Pakistán'. El tribunal arbitral internacional dictaminó que la suspensión es ilegal — India rechazó el fallo llamando al tribunal 'ilegal'. 9 de cada 10 pakistaníes viven en la cuenca del Indo, el 90% de las cosechas dependen de él. Dos potencias nucleares peleando no por territorio ni ideología, sino por agua. El tratado que mantuvo la paz durante 65 años — sobrevivió a 3 guerras — acaba de romperse. Y sienta un precedente global para Turquía-Éufrates, Etiopía-Nilo y China-Mekong.",
  fields: [
    { label:"La noticia", val:"India suspendió el Tratado del Indo tras el atentado de Pahalgam (26 turistas muertos). En junio cortó el flujo del río Chenab desde la presa de Baglihar (CNBC, 22 JUN). El tribunal arbitral falló que la suspensión unilateral es ilegal (mayo); India lo rechazó. Ministro C.R. Patil: 'Pakistán no recibirá ni una sola gota de agua'. Foreign Affairs: 'Why the Next India-Pakistan War Will Escalate' (JUL 2026)." },
    { label:"Segunda derivada", val:"El Tratado del Indo (1960) fue uno de los acuerdos más resilientes de la historia: sobrevivió a las guerras de 1965, 1971 y 1999. Que India lo rompa unilateralmente es un precedente global para el uso del agua como arma. Si India corta el agua sin consecuencias, ¿qué impide que Turquía lo haga con el Éufrates, Etiopía con el Nilo (GERD) o China con el Mekong? El CSIS estima que 9 de cada 10 pakistaníes viven en la cuenca del Indo. El colapso agrícola de Pakistán tendría consecuencias en seguridad alimentaria global, migración masiva y estabilidad nuclear." },
    { label:"Gran pregunta", val:"¿Puede el agua ser el arma más devastadora entre dos potencias nucleares — y qué precedente establece para todos los conflictos hídricos del mundo?" },
    { label:"Señal de competencia", val:"CUBIERTO SUPERFICIALMENTE. Los canales internacionales cubren la tensión India-Pakistán centrados en lo militar (Cachemira, operación Sindoor). El ángulo del AGUA como arma — cuenca del Indo, impacto agrícola, precedente global — está poco cubierto en el nicho hispano. Hueco claro para el ángulo del arma de destrucción masiva sin bombas." },
    { label:"Demanda en medios", val:"ALTA. Foreign Affairs: 'Why the Next India-Pakistan War Will Escalate' (JUL 2026). CNBC investigación completa (22 JUN). Chatham House sobre la restauración del tratado (ABR 2026). Al Jazeera: 'Mountain of war' (12 JUN). CSIS sobre el impacto. Britannica actualizada." },
    { label:"Velocidad de agenda", val:"ACELERANDO. La retórica india se endurece (de 'temporal' a 'ni una gota'). El tribunal falló y fue ignorado. Foreign Affairs acaba de publicar análisis de escalada. Puede explotar si India construye nuevas presas." },
    { label:"Historial VP", val:"VP NO ha cubierto la guerra del agua India-Pakistán. Ha tratado ambos países por separado pero nunca el Tratado del Indo como arma. Ángulo completamente nuevo. Sin riesgo de repetición." },
    { label:"Motor viral", val:"POTENCIAS NUCLEARES (máxima tensión) + DATO IMPACTANTE (90% cosechas, 9/10 ciudadanos) + ARMA INVISIBLE (agua, no misiles) + PRECEDENTE GLOBAL (Nilo, Éufrates, Mekong) + TRIBUNAL IGNORADO (India desafía la ley internacional) + PARADOJA (el tratado sobrevivió 3 guerras pero no un atentado)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'El tratado más resiliente del mundo sobrevivió a 3 guerras. Acaba de romperse — y la consecuencia puede ser peor que cualquier bomba.' Escalada: suspensión, corte del Chenab, retórica 'ni una gota'. Giro: el tribunal falla contra India — India lo ignora. Revelación: el precedente amenaza a medio mundo. Cierre: ¿es el agua el nuevo petróleo de las guerras del siglo XXI?" },
    { label:"Promesa cumplible", val:"'Cómo India convirtió el agua en un arma contra una potencia nuclear' — demostrable con el tratado, el fallo del tribunal, cifras CSIS, mapa de ríos y precedentes globales." },
    { label:"Ventaja VP", val:"ALTA. VP combina mapas de ríos, datos agrícolas, geopolítica nuclear y precedente global como nadie en español. Tema visual (cuenca, presas, flujos). La conexión con otros conflictos hídricos da alcance global." },
    { label:"Caso para 800K/1M", val:"Señal: Foreign Affairs, CNBC, Chatham House — cobertura premium sostenida. Competencia: ángulo del agua poco cubierto en español. Lo diferente: no 'guerra India-Pakistán' sino 'el agua como arma de destrucción masiva'. Promesa: dos potencias nucleares, un río, un tratado de 65 años roto. Riesgo: puede parecer lejano — conectar con conflictos hídricos en Latam. VP necesita: centrarse en el MECANISMO y el PRECEDENTE GLOBAL." },
    { label:"Título mental", val:"India acaba de romper el tratado que sobrevivió a 3 guerras con Pakistán — y amenaza con cortar cada gota de agua a 220 millones de personas" },
    { label:"Qué investigar más", val:"1) Foreign Affairs: 'Why the Next India-Pakistan War Will Escalate'. 2) CNBC sobre el Tratado del Indo. 3) Chatham House. 4) Datos CSIS de dependencia pakistaní. 5) Mapa de presas indias. 6) Precedentes: Turquía-Éufrates, Etiopía-Nilo, China-Mekong." },
    { label:"Veredicto", val:"ATACAR HOY — Ángulo completamente nuevo para VP, retórica que se endurece, Foreign Affairs publicando escalada. Conexión inesperada: agua como arma entre potencias nucleares + precedente para conflictos hídricos globales." }
  ],
  sources: [
    { headline:"Why the Next India-Pakistan War Will Escalate", medium:"Foreign Affairs", date:"JUL 2026", url:"https://www.foreignaffairs.com/india/why-next-india-pakistan-war-will-escalate", desc:"Por qué la próxima guerra escalará más" },
    { headline:"Indus water treaty becomes latest India-Pakistan flashpoint", medium:"CNBC", date:"22 JUN 2026", url:"https://www.cnbc.com/2026/06/22/india-pakistan-indus-waters-treaty-water-dispute-war-risk.html", desc:"Investigación sobre la crisis del agua" },
    { headline:"India and Pakistan still cannot agree to restore the Indus Waters Treaty", medium:"Chatham House", date:"ABR 2026", url:"https://www.chathamhouse.org/2026/04/india-and-pakistan-still-cannot-agree-restore-indus-waters-treaty-re-engagement-could-help", desc:"Análisis de las posiciones de ambas partes" },
    { headline:"Indus Waters Treaty", medium:"Britannica", date:"2026", url:"https://www.britannica.com/event/Indus-Waters-Treaty", desc:"Referencia completa del tratado" }
  ]
},

/* ═══ P5 — COMPETENCIA — FILIPINAS A OSCURAS ═══ */
{
  number: "P5",
  golden: false,
  title: "Filipinas a oscuras: cómo una guerra a 8.000 km de distancia apaga un país entero",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "PH",
  chips: [
    { cls:"chip-green", text:"COMP: Ángulo no cubierto" },
    { cls:"chip-green", text:"VEL: Acelerando" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/MANILA_SKYLINE_01.JPG?width=1200",
  bannerAlt: "Manila — Filipinas sufre apagones masivos por la crisis energética global",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Philippines_(orthographic_projection).svg?width=1200",
  tesis: "Filipinas se está quedando sin luz. Dos millones de personas sufren cortes rotativos, la electricidad ha subido un 58% en un mes y el gas natural licuado se ha triplicado de precio. ¿El motivo? Una guerra a 8.000 kilómetros de distancia. Filipinas importa el 98% de su petróleo de Oriente Medio, y con el Estrecho de Ormuz bloqueado por la guerra de Irán, sus reservas cayeron de 57 a 45 días en apenas un mes. Este es el ejemplo perfecto de la segunda derivada geopolítica: un país que no tiene nada que ver con la guerra de Irán se apaga por completo por culpa de ella. Y la lección va mucho más allá de Manila: en un mundo donde la energía viaja por unos pocos cuellos de botella, la dependencia energética es la mayor vulnerabilidad estratégica de una nación. Filipinas es solo el primer dominó de una fila que llega hasta Europa.",
  fields: [
    { label:"La noticia", val:"Filipinas sufre apagones masivos: 2 millones de personas sin luz por turnos, cortes de 2-3 horas (bne IntelliNews, Philstar). La NGCP puso la red de Luzón en alerta alta el 13 de mayo por caídas forzosas de plantas. Electricidad +58% en el mercado spot en marzo; GNL x3; carbón +30%. Filipinas importa el 98% de su petróleo de Oriente Medio; reservas cayeron de 57 a 45 días de suministro en un mes (Rappler, DOE). Causa raíz: cierre de Ormuz por la guerra de Irán." },
    { label:"Segunda derivada", val:"Filipinas no tiene tropas en Oriente Medio, ni un papel en la guerra de Irán, ni una gota de petróleo propio. Y sin embargo se está apagando por culpa de esa guerra. Ese es el poder de la segunda derivada geopolítica: en un mundo hiperconectado, un cuello de botella (Ormuz) transmite el shock a miles de kilómetros. Filipinas es un caso de estudio perfecto de una verdad incómoda: la dependencia energética es la mayor vulnerabilidad estratégica de un país, más que su ejército o su economía. Un país puede tener democracia, crecimiento y estabilidad, y aun así quedar a oscuras por una decisión tomada en Teherán. Y no es solo Filipinas: es un aviso para toda nación que importe su energía de un puñado de rutas frágiles — desde Japón hasta Alemania. La era de la energía barata y garantizada ha terminado, y la geopolítica de los cuellos de botella decidirá qué países prosperan y cuáles se apagan." },
    { label:"Gran pregunta", val:"¿Cómo puede una guerra en la que no participas dejarte completamente a oscuras — y qué dice eso sobre la vulnerabilidad de todos los países que dependen de importar su energía?" },
    { label:"Señal de competencia", val:"ÁNGULO NO CUBIERTO. La competencia hispana cubre la guerra de Irán y el petróleo, pero NADIE está contando el efecto dominó sobre terceros países como Filipinas. Es un ángulo virgen que además ilustra un principio universal (dependencia energética = vulnerabilidad) aplicable a cualquier país de la audiencia. Conecta con la propuesta del shock del petróleo (P3) como caso humano concreto." },
    { label:"Demanda en medios", val:"ALTA EN FUENTES ESPECIALIZADAS. Rappler: 'IN NUMBERS: Philippine electricity affected by Middle East crisis'. bne IntelliNews: 'Blackouts in the Philippines as power bills soar'. Philstar: 'Power cuts hit millions'. Manila Bulletin: 'Blame game on blackouts'. Wikipedia: '2026 Philippine energy crisis'. PIA/DOE sobre la investigación a la NGCP." },
    { label:"Velocidad de agenda", val:"ACELERANDO. Con los nuevos ataques a Irán del 20 JUL y el petróleo en máximos, la presión sobre países importadores como Filipinas se intensifica. El tema conecta la crisis energética global con un caso concreto y visual." },
    { label:"Historial VP", val:"VP NO ha cubierto la crisis energética de Filipinas ni el efecto dominó de Ormuz sobre terceros países. Es un ángulo completamente nuevo y del estilo 'conexión inesperada' que aceptan los editores (una guerra en un sitio, consecuencias devastadoras en otro). Sin riesgo de repetición." },
    { label:"Motor viral", val:"CONEXIÓN INESPERADA (guerra lejana → tu país a oscuras) + IMPACTO TANGIBLE (apagones, factura de la luz) + DATO IMPACTANTE (98% del petróleo, 2 millones sin luz, +58%) + MIEDO (¿me puede pasar a mí?) + PRINCIPIO UNIVERSAL (la dependencia energética como vulnerabilidad) + VISUALIDAD (rutas, cuellos de botella, apagones)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Filipinas se está quedando sin luz. La culpa la tiene una guerra a 8.000 kilómetros de distancia, en la que Filipinas no participa.' Contexto: el 98% del petróleo desde Oriente Medio, la dependencia de Ormuz. Escalada: reservas cayendo, apagones, la factura de la luz disparada. Giro: no es un problema filipino — es un aviso para todo el mundo. Revelación: la dependencia energética es la mayor vulnerabilidad estratégica. Cierre: ¿qué país será el próximo dominó?" },
    { label:"Promesa cumplible", val:"'Cómo una guerra lejana apaga un país entero' — demostrable con datos de la DOE filipina, Rappler, bne y el mecanismo de dependencia energética. Aplicable a cualquier país importador." },
    { label:"Ventaja VP", val:"ALTA. VP domina las 'conexiones inesperadas' y la explicación paso a paso. El mecanismo (Ormuz → Filipinas → apagones) es ultra-visual y didáctico. El principio universal (dependencia = vulnerabilidad) da alcance mucho más allá de Filipinas. Fuentes sólidas para 20+ minutos." },
    { label:"Caso para 800K/1M", val:"Señal: fuentes especializadas documentando la crisis. Competencia: ÁNGULO VIRGEN — nadie conecta Ormuz con apagones en terceros países. Lo diferente: no es 'guerra de Irán' sino 'cómo una guerra lejana te deja sin luz'. Promesa: la conexión invisible entre un estrecho y tu bombilla. Riesgo: Filipinas puede parecer lejana — vender el PRINCIPIO UNIVERSAL (le puede pasar a cualquiera). VP necesita: usar Filipinas como caso, pero hablar de la vulnerabilidad de todos." },
    { label:"Título mental", val:"Filipinas se está quedando sin luz por una guerra a 8.000 km en la que no participa — y es solo el primer dominó de una fila que llega hasta Europa" },
    { label:"Qué investigar más", val:"1) Rappler: números de la electricidad filipina afectada. 2) bne IntelliNews y Philstar sobre los apagones. 3) Wikipedia: '2026 Philippine energy crisis'. 4) Datos de la DOE (reservas 57→45 días). 5) Otros países vulnerables (Japón, Corea, África). 6) El concepto de cuellos de botella energéticos (Ormuz, Malaca, Suez)." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Conexión inesperada perfecta, del estilo que aceptan los editores. Ángulo virgen, principio universal, muy visual. Funciona solo o como complemento del shock del petróleo (P3). La clave: vender la vulnerabilidad como algo que afecta a todos." }
  ],
  sources: [
    { headline:"IN NUMBERS: Philippine sources of electricity affected by Middle East crisis", medium:"Rappler", date:"2026", url:"https://www.rappler.com/newsbreak/data-documents/philippines-electricity-numbers-middle-east-crisis-march-2026/", desc:"Datos de la dependencia energética filipina" },
    { headline:"Blackouts in the Philippines as power bills soar", medium:"bne IntelliNews", date:"2026", url:"https://www.intellinews.com/blackouts-in-the-philippines-as-power-bills-soar-439494/", desc:"Apagones y subida de la factura eléctrica" },
    { headline:"Power cuts hit millions in Philippines", medium:"Philstar", date:"15 MAY 2026", url:"https://www.philstar.com/business/2026/05/15/2528168/power-cuts-hit-millions-philippines", desc:"Millones de afectados por los cortes de luz" },
    { headline:"2026 Philippine energy crisis", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/2026_Philippine_energy_crisis", desc:"Documentación completa de la crisis energética" }
  ]
},

/* ═══ P6 — VENTANA — COREA DEL SUR ═══ */
{
  number: "P6",
  golden: false,
  title: "Corea del Sur: cómo el aliado más importante de EEUU en Asia se convirtió en la democracia más inestable del mundo",
  tags: [
    { cls:"tag-blue", text:"VENTANA OPORTUNIDAD" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-medium",
  potText: "⭐ POTENCIAL MEDIO-ALTO",
  flag: "KR",
  chips: [
    { cls:"chip-green", text:"COMP: Gap en español" },
    { cls:"chip-yellow", text:"VEL: Meseta" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_at_night.jpg?width=1200",
  bannerAlt: "Seúl de noche — Corea del Sur enfrenta su mayor crisis democrática en décadas",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_at_night.jpg?width=1200",
  tesis: "Corea del Sur ha tenido tres presidentes en un año: uno intentó una ley marcial (autogolpe), otro fue interino, y el actual — Lee Jae-myung — fue apuñalado, condenado y absuelto en apelación, y ahora gobierna con un 51,5% de aprobación mientras miles protestan porque las papeletas se agotaron en las elecciones locales de junio. El presidente de la Comisión Electoral dimitió. Todo esto en el país que alberga 28.500 soldados americanos, fabrica el 80% de los chips de memoria del mundo (Samsung, SK Hynix) y es la primera línea contra Corea del Norte y China. La paradoja del aliado: EEUU necesita una Corea estable para su estrategia indo-pacífica, pero la democracia surcoreana está en su momento más frágil desde 1987.",
  fields: [
    { label:"La noticia", val:"Protestas continúan en Seúl tras la escasez de papeletas en las elecciones locales del 3 JUN (US News). El presidente de la Comisión Electoral Nacional, Roh Tae-ak, dimitió el 8 JUN. Las papeletas se agotaron en 50 de 14.300 centros (Korea Herald). Rally de 6.000 personas en Jamsil (12 JUN). Lee Jae-myung cae al 51,5% de aprobación. Wikipedia documenta las '2026 South Korean local election rerun protests'." },
    { label:"Segunda derivada", val:"La crisis de Corea del Sur es el resultado de una polarización que se aceleró con el intento de ley marcial de Yoon en diciembre 2024. Desde entonces: impeachment, presidente interino, elecciones anticipadas, un candidato apuñalado que ganó las presidenciales. Ahora, elecciones locales con escasez de papeletas que recuerdan a las irregularidades que desestabilizan democracias jóvenes. La pregunta estratégica: ¿qué pasa con la disuasión contra Corea del Norte si Seúl no puede organizar unas elecciones? El BISI lo llama 'The Ally's Paradox'." },
    { label:"Gran pregunta", val:"¿Qué pasa con la estrategia de EEUU en Asia si su aliado más importante no puede organizar unas elecciones — y quién se beneficia del caos democrático en Seúl?" },
    { label:"Señal de competencia", val:"GAP EN ESPAÑOL. El nicho hispano cubre Asia desde China-Taiwán o Corea del Norte. NADIE cubre la crisis democrática de Corea del Sur como tema geopolítico. En inglés: CSIS (proyecto dedicado), BISI, Harvard Kennedy School, The Diplomat. En español: vacío total. VP puede ser el primero." },
    { label:"Demanda en medios", val:"ALTA EN THINK TANKS. CSIS: proyecto 'South Korea's Political Crisis'. BISI: 'The Ally's Paradox'. Harvard Kennedy School: análisis de causas. The Diplomat (FEB 2026). Korea Herald y Korea Times cubren las protestas. US News sobre las elecciones." },
    { label:"Velocidad de agenda", val:"MESETA. Las protestas continúan sin escalar. Puede reactivarse con nuevas irregularidades, decisiones polarizantes de Lee, o tensión con Corea del Norte. Ventana amplia, momentum no urgente." },
    { label:"Historial VP", val:"VP NO ha cubierto la crisis política de Corea del Sur en 2026. Ha hecho videos sobre Corea del Sur (Samsung, economía, K-pop) pero nunca sobre la crisis democrática ni la paradoja del aliado. Tema completamente nuevo." },
    { label:"Motor viral", val:"PAÍS RECONOCIBLE (Samsung, K-pop) + DATO IMPACTANTE (3 presidentes en 1 año, candidato apuñalado que ahora es presidente) + PARADOJA (democracia modelo que no puede organizar elecciones) + CONSECUENCIA ESTRATÉGICA (28.500 soldados EEUU, chips, disuasión nuclear) + DRAMA PERSONAL cinematográfico." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Corea del Sur ha tenido tres presidentes en un año. Uno intentó un autogolpe. Otro fue interino. El actual fue apuñalado y condenado por un tribunal.' Escalada: Yoon y la ley marcial, impeachment, elecciones caóticas, papeletas agotadas. Giro: todo esto en el país que fabrica el 80% de los chips de memoria y es la primera línea contra Corea del Norte. Cierre: ¿es Corea del Sur la próxima democracia que se rompe desde dentro?" },
    { label:"Promesa cumplible", val:"'Cómo el aliado clave de EEUU en Asia se convirtió en la democracia más inestable' — demostrable con la cronología, los datos de las elecciones y el análisis estratégico (CSIS, BISI)." },
    { label:"Ventaja VP", val:"ALTA. VP puede combinar el drama personal de Lee Jae-myung con la dimensión estratégica (Indo-Pacífico, chips, EEUU). Gap total en español. Papers de CSIS y BISI sostienen 25+ minutos." },
    { label:"Caso para 800K/1M", val:"Señal: CSIS, BISI, Harvard analizando. Gap TOTAL en español. Lo diferente: no 'política coreana' sino 'qué pasa con la estrategia de EEUU si su aliado se rompe'. Promesa: 3 presidentes, apuñalamiento, papeletas agotadas. Riesgo: Corea del Sur puede generar menos click que Irán/Rusia — abrir con el drama personal y conectar rápido con chips/EEUU/China." },
    { label:"Título mental", val:"Un presidente intentó un autogolpe. El siguiente fue apuñalado y condenado. Ahora las papeletas se agotan en Corea del Sur — y 28.500 soldados americanos observan" },
    { label:"Qué investigar más", val:"1) CSIS 'South Korea's Political Crisis'. 2) BISI 'The Ally's Paradox'. 3) Harvard Kennedy School. 4) Cronología: Yoon → ley marcial → impeachment → Lee → protestas. 5) Impacto en semiconductores y relaciones EEUU-Corea. 6) Posición de Corea del Norte." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Narrativa extraordinaria y gap total en español. Ventana amplia pero ángulo 'paradoja del aliado' muy VP. Conectar con semiconductores y estrategia EEUU para maximizar alcance." }
  ],
  sources: [
    { headline:"South Korea's Political Crisis", medium:"CSIS", date:"2026", url:"https://www.csis.org/programs/korea-chair/projects/south-koreas-political-crisis", desc:"Proyecto dedicado del CSIS" },
    { headline:"The Ally's Paradox: What South Korea's 2026 Crisis Reveals About Dependency in the Indo-Pacific", medium:"BISI (Bloomsbury)", date:"2026", url:"https://bisi.org.uk/reports/the-allys-paradox-what-south-koreas-2026-crisis-reveals-about-dependency-in-the-indo-pacific", desc:"Paper sobre la paradoja del aliado" },
    { headline:"Lee grapples with headwinds following local elections", medium:"Korea Times", date:"16 JUN 2026", url:"https://www.koreatimes.co.kr/southkorea/politics/20260616/lee-grapples-with-post-local-election-headwinds-as-party-rift-ballot-shortage-issues-deepen", desc:"Problemas post-electorales" },
    { headline:"2026 South Korean local election rerun protests", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/2026_South_Korean_local_election_rerun_protests", desc:"Documentación de las protestas" }
  ]
},

/* ═══ P7 — VENTANA — PAPÚA OCCIDENTAL ═══ */
{
  number: "P7",
  golden: false,
  title: "La guerra olvidada de Papúa: la mina de oro más grande del mundo, una insurgencia de 60 años y el silencio de Occidente",
  tags: [
    { cls:"tag-blue", text:"VENTANA OPORTUNIDAD" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-medium",
  potText: "⭐ POTENCIAL MEDIO",
  flag: "ID",
  chips: [
    { cls:"chip-green", text:"COMP: Gap total en español" },
    { cls:"chip-yellow", text:"VEL: Latente" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Grasberg_mine.jpg?width=1200",
  bannerAlt: "Mina de Grasberg en Papúa Occidental — una de las mayores minas de oro y cobre del mundo",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Indonesia_(orthographic_projection).svg?width=1200",
  tesis: "En el rincón más remoto de Indonesia hay una mina que produce más oro que casi ningún otro lugar del planeta: Grasberg, en Papúa Occidental. Y a su alrededor arde una guerra que dura 60 años y de la que casi nadie habla. Papúa Occidental fue anexionada por Indonesia en los años 60 mediante un referéndum de la ONU que fue una farsa (poco más de mil ancianos elegidos votaron a mano alzada). Desde entonces, una insurgencia independentista se enfrenta al ejército indonesio. En enero de 2026, separatistas armados sitiaron a 18 trabajadores de Freeport durante tres días. La paradoja brutal: Papúa contiene algunos de los minerales más valiosos del mundo y es, a la vez, una de las regiones más pobres de Indonesia. La riqueza sale, la miseria y la represión se quedan. Es la historia de un colonialismo de recursos del siglo XXI que ocurre a plena luz del día — y que a Occidente le conviene ignorar porque la mina es medio estadounidense.",
  fields: [
    { label:"La noticia", val:"En enero de 2026, separatistas armados sitiaron durante tres días a 18 trabajadores de Freeport Indonesia en el distrito de Tembagapura; fuerzas indonesias los rescataron. La mina de Grasberg reinicia su explotación subterránea (Block Cave) en el segundo trimestre de 2026 (Freeport-McMoRan). Choques con rebeldes cerca de la mina (VOA). Paper académico: 'Predatory Mining, Conflict and Political Spaces: The Case of Grasberg Mine in West Papua' (Taylor & Francis, 2025). Lowy Institute: 'Freeport's Papua mine deal buys time'." },
    { label:"Segunda derivada", val:"Grasberg no es solo una mina — es un caso de estudio del colonialismo de recursos del siglo XXI. Indonesia (a través de MIND ID, 51,2%) y Freeport-McMoRan (48,8%) extraen una de las mayores riquezas minerales del mundo de un territorio ocupado, mientras Papúa Occidental sigue siendo de las regiones más pobres del país. Ese desajuste — riqueza extractiva brutal, desarrollo local nulo — es exactamente lo que alimenta 60 años de insurgencia. Y aquí está la clave geopolítica: Occidente guarda silencio sobre la represión en Papúa porque (a) Indonesia es un socio clave en la contención de China en el Indo-Pacífico, y (b) la mina es medio estadounidense. Es la demostración de que el discurso de derechos humanos es selectivo: se denuncia la ocupación cuando conviene y se ignora cuando el ocupante es un aliado con un tesoro mineral. Papúa es el conflicto que revela la hipocresía del orden internacional." },
    { label:"Gran pregunta", val:"¿Por qué el mundo ignora una ocupación de 60 años y la represión de un pueblo entero — y qué papel juega en ese silencio la mina de oro más grande del planeta?" },
    { label:"Señal de competencia", val:"GAP TOTAL EN ESPAÑOL. Papúa Occidental es uno de los conflictos más ignorados del mundo; prácticamente no existe cobertura en el nicho geopolítico hispano. En inglés hay material académico (Taylor & Francis), think tanks (Lowy) y prensa (VOA), pero en español es un vacío absoluto. Es exactamente el tipo de tema ultra-específico y original que aceptan los editores de VP." },
    { label:"Demanda en medios", val:"MEDIA (nicho especializado). Lowy Institute: 'Freeport's Papua mine deal buys time'. Taylor & Francis: paper sobre minería depredadora en Grasberg. VOA: rebeldes muertos cerca de la mina. Freeport-McMoRan: comunicados sobre el reinicio. Wikipedia: 'Grasberg mine'. Michael West: investigación sobre el 'mismatch' minero. Cobertura consistente pero de nicho." },
    { label:"Velocidad de agenda", val:"LATENTE. No hay un pico mediático, pero el reinicio de Grasberg (Q2 2026) y los incidentes recurrentes (asedio de enero) mantienen el tema vivo. Es un tema 'evergreen' de investigación que VP puede publicar cuando quiera, siendo el primero en español." },
    { label:"Historial VP", val:"VP NO ha cubierto Papúa Occidental. Ha hecho videos sobre Indonesia y sobre conflictos olvidados. El ángulo Grasberg + insurgencia + colonialismo de recursos + hipocresía occidental es completamente nuevo y del estilo 'conflicto ultra-específico con dimensión geopolítica' que funciona." },
    { label:"Motor viral", val:"CONFLICTO OCULTO (una guerra de 60 años que nadie conoce) + ORO (la mina más grande del mundo) + INJUSTICIA (riqueza que sale, miseria que queda) + HIPOCRESÍA (Occidente calla por conveniencia) + DAVID CONTRA GOLIAT (insurgentes vs ejército + multinacional) + VISUALIDAD (la mina gigante, la selva, Nueva Guinea)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Aquí está una de las minas de oro más grandes del mundo. A su alrededor arde una guerra de 60 años. Y tú no habías oído hablar de ninguna de las dos.' Contexto: la anexión de Papúa, el referéndum-farsa de la ONU, Grasberg. Escalada: la insurgencia, el asedio de enero, la represión. Giro: la paradoja de la riqueza y la pobreza. Revelación: Occidente calla porque Indonesia contiene a China y la mina es medio estadounidense. Cierre: ¿cuántos conflictos como este ignoramos porque nos conviene?" },
    { label:"Promesa cumplible", val:"'La guerra olvidada por la mina de oro más grande del mundo' — demostrable con el paper de Taylor & Francis, los datos de propiedad de Grasberg (51/49), la historia de la anexión y los incidentes de 2026." },
    { label:"Ventaja VP", val:"ALTA. VP domina los conflictos olvidados con dimensión de recursos y poder. Mapas de Nueva Guinea, la historia de la anexión, la economía de la mina — todo muy visual y didáctico. Gap total en español = ser el primero. Fuentes académicas y think tanks para 20+ minutos." },
    { label:"Título mental", val:"Aquí está la mina de oro más grande del mundo — y a su alrededor arde una guerra de 60 años que a Occidente le conviene que no conozcas" },
    { label:"Qué investigar más", val:"1) Taylor & Francis: paper sobre minería depredadora en Grasberg. 2) Lowy Institute sobre el acuerdo de Freeport. 3) Historia del 'Acto de Libre Elección' de 1969 (el referéndum-farsa). 4) Datos de Grasberg (producción, propiedad 51/49). 5) El asedio de enero 2026 y la insurgencia (OPM/TPNPB). 6) La relación Indonesia-EEUU y la contención de China." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Tema ultra-específico, original y con gap total en español, exactamente del estilo que aceptan los editores. Sin urgencia mediática, pero enorme potencial de diferenciación. Ser el primero en contarlo en español es la ventaja." }
  ],
  sources: [
    { headline:"Predatory Mining, Conflict and Political Spaces: The Case of Grasberg Mine in West Papua", medium:"Taylor & Francis (Society & Natural Resources)", date:"2025", url:"https://www.tandfonline.com/doi/full/10.1080/08941920.2025.2553355", desc:"Paper académico sobre la minería depredadora en Grasberg" },
    { headline:"Freeport's Papua mine deal buys time", medium:"Lowy Institute", date:"2026", url:"https://www.lowyinstitute.org/the-interpreter/freeport-s-papua-mine-deal-buys-time", desc:"Análisis del acuerdo minero y sus tensiones" },
    { headline:"2 Papuan rebels killed in shootout near US-Indonesian gold mine", medium:"VOA", date:"2026", url:"https://www.voanews.com/a/papuan-rebels-killed-in-shootout-near-us-indonesian-gold-mine-/7560279.html", desc:"Choque armado cerca de la mina de Grasberg" },
    { headline:"Grasberg mine", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/Grasberg_mine", desc:"Datos de la mina y su estructura de propiedad" }
  ]
},

/* ═══ P8 — VENTANA — TRUMP vs SCOTUS ═══ */
{
  number: "P8",
  golden: false,
  title: "Trump contra el Tribunal Supremo: la batalla constitucional que decidirá quién controla el comercio de EEUU",
  tags: [
    { cls:"tag-blue", text:"VENTANA OPORTUNIDAD" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-medium",
  potText: "⭐ POTENCIAL MEDIO-ALTO",
  flag: "US",
  chips: [
    { cls:"chip-green", text:"COMP: Gap en español" },
    { cls:"chip-yellow", text:"VEL: Meseta" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Oblique_facade_3,_US_Supreme_Court.jpg?width=1200",
  bannerAlt: "Tribunal Supremo de EEUU — la institución que tumbó los aranceles de Trump",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Supreme_Court_Building.jpg?width=1200",
  tesis: "El 20 de febrero de 2026, el Tribunal Supremo dictó una sentencia histórica (6-3): la IEEPA no autoriza al presidente a imponer aranceles. Con un fallo, tumbó la base legal de la guerra comercial de Trump. Trump intentó la Sección 122 del Trade Act — el Tribunal de Comercio también lo tumbó (7 mayo). $170.000 millones recaudados podrían devolverse. Trump busca ahora una tercera vía (Sección 301). Lo que está en juego no son los aranceles: es QUIÉN tiene el poder constitucional de controlar el comercio exterior de la primera economía del mundo. ¿El presidente o el Congreso? La mayor batalla sobre poder comercial desde Smoot-Hawley en 1930.",
  fields: [
    { label:"La noticia", val:"SCOTUS fallo 6-3 'Learning Resources v. Trump' (20 FEB 2026): la IEEPA no autoriza aranceles. El Tribunal de Comercio Internacional tumba la Sección 122 (7 MAY 2026). Trump lanza investigaciones Sección 301 contra más de una docena de economías (JUL 2026). El acuerdo UE-EEUU entró en vigor el 1 JUL. $170.000M en aranceles IEEPA recaudados — posible devolución." },
    { label:"Segunda derivada", val:"Esto es la mayor redefinición del poder presidencial sobre comercio desde los años 30. Desde la Gran Depresión, el Congreso fue delegando poder comercial al presidente (IEEPA, Sección 122, Sección 301). Trump lo usó al máximo: subió el arancel efectivo del 2,5% al 27% en meses, el nivel más alto en un siglo. Los tribunales dicen: eso es poder del Congreso. Si esta jurisprudencia se consolida, CUALQUIER futuro presidente tendrá las manos atadas para usar aranceles como arma geopolítica. La guerra comercial con China, la presión a la UE — todo depende de esta batalla constitucional." },
    { label:"Gran pregunta", val:"¿Quién controla realmente el comercio de la primera economía del mundo — el presidente o el Congreso — y qué significa para cada guerra comercial futura?" },
    { label:"Señal de competencia", val:"GAP EN ESPAÑOL. El nicho cubre aranceles como 'Trump pone/quita aranceles'. NADIE cubre la dimensión CONSTITUCIONAL: qué poder tiene el presidente, por qué los tribunales lo limitan, qué significa para el futuro. En inglés: Tax Foundation, Holland & Knight, PwC, BDO, Atlantic Council. En español: vacío total." },
    { label:"Demanda en medios", val:"ALTA EN MEDIOS ESPECIALIZADOS. Tax Foundation (datos completos). Holland & Knight, PwC, BDO (análisis legales). Atlantic Council (tracker). Bloomberg. CRS LSB11398 y R48549." },
    { label:"Velocidad de agenda", val:"MESETA. Los fallos ya ocurrieron pero Trump busca vías alternativas (Sección 301, julio). El acuerdo UE-EEUU entró en vigor el 1 JUL. Puede reactivarse con nueva sentencia o nueva vía." },
    { label:"Historial VP", val:"VP NO ha cubierto la batalla constitucional sobre aranceles. Ha mencionado aranceles en otros contextos pero nunca como tema central constitucional. Ángulo completamente nuevo." },
    { label:"Motor viral", val:"LUCHA DE PODER (presidente vs Tribunal Supremo) + DINERO ($170B, la mayor devolución posible) + CONSECUENCIA DIRECTA (si caen los aranceles, bajan precios) + DATO IMPACTANTE ($1.500 de subida impositiva por hogar) + PARADOJA (aranceles conservadores tumbados por un Supremo conservador) + IMPLICACIÓN GLOBAL (China, UE, Latam)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Trump subió los aranceles al nivel más alto en un siglo. El Tribunal Supremo acaba de decirle que no tenía derecho.' Escalada: IEEPA tumbada, Sección 122 tumbada, $170B en juego. Giro: esto limita a CUALQUIER futuro presidente. Revelación: la mayor devolución fiscal de la historia. Cierre: ¿ha ganado el libre comercio o solo se ha movido el campo de batalla al Congreso?" },
    { label:"Promesa cumplible", val:"'La batalla que decide quién controla el comercio de EEUU' — demostrable con las sentencias, Tax Foundation, Holland & Knight y la cronología de aranceles." },
    { label:"Ventaja VP", val:"ALTA. VP combina derecho + economía + geopolítica. La historia constitucional del poder comercial es visual. El impacto global da alcance. Tema que la competencia NO hace por requerir investigación profunda." },
    { label:"Título mental", val:"Trump subió los aranceles al nivel más alto en 100 años. El Tribunal Supremo le dijo que no tenía derecho — y ahora $170.000 millones podrían devolverse" },
    { label:"Qué investigar más", val:"1) Sentencia SCOTUS 24-1287. 2) Tax Foundation tracker. 3) Holland & Knight. 4) CRS LSB11398 y R48549. 5) Historia constitucional (Smoot-Hawley, GATT, WTO). 6) Mecanismo de devolución de $170B." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Profundidad enorme, gap total en español, conexión directa con la economía de la audiencia. Clave: NO presentarlo como 'otro video de Trump' sino como la batalla constitucional que decide quién controla el comercio mundial." }
  ],
  sources: [
    { headline:"Supreme Court Rules Against Tariffs Imposed Under IEEPA", medium:"Congressional Research Service", date:"FEB 2026", url:"https://www.congress.gov/crs-product/LSB11398", desc:"Análisis oficial del fallo" },
    { headline:"Learning Resources, Inc. v. Trump — Opinion", medium:"US Supreme Court", date:"20 FEB 2026", url:"https://www.supremecourt.gov/opinions/25pdf/24-1287_4gcj.pdf", desc:"Sentencia completa del Supremo" },
    { headline:"Tariff Tracker: 2026 Trump Tariffs & Trade War by the Numbers", medium:"Tax Foundation", date:"2026", url:"https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/", desc:"Datos completos de aranceles" },
    { headline:"US Supreme Court blocks Trump tariffs — but the trade war isn't over", medium:"ODI", date:"2026", url:"https://odi.org/en/insights/us-supreme-court-blocks-trump-tariffs-but-the-trade-war-isnt-over/", desc:"Perspectiva global del fallo" }
  ]
}

],

/* ═══ RANKING ═══ */
ranking: [
  { pos:1, title:"Groenlandia: la guerra por el Ártico", score:"9.6/10", tags:[{cls:"tag-gold",text:"⭐ DORADO"},{cls:"tag-red",text:"ATACAR HOY"}] },
  { pos:2, title:"Latam: la ola conservadora", score:"9.2/10", tags:[{cls:"tag-red",text:"ATACAR HOY"}] },
  { pos:3, title:"India vs Pakistán: guerra del agua", score:"9.0/10", tags:[{cls:"tag-red",text:"ATACAR HOY"}] },
  { pos:4, title:"Petróleo a $126: crisis energética global", score:"8.6/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:5, title:"Filipinas a oscuras: el efecto dominó", score:"8.5/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:6, title:"Corea del Sur: democracia más frágil", score:"7.9/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:7, title:"Papúa: la guerra olvidada del oro", score:"7.7/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:8, title:"Trump vs Supremo: quién controla el comercio", score:"7.6/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] }
],

/* ═══ VIGILAR ═══ */
vigilar: [
  { title:"Venezuela, estado zombi: EEUU se embolsa $8.000M en petróleo mientras el terremoto hunde la economía", trigger:"Si hay giro político, nueva intervención o colapso de Delcy Rodríguez", source:"Time, Atlantic Council, CNN (20-25 JUL)" },
  { title:"OTAN Ankara: €70.000M para Ucrania y Trump licenciando interceptores Patriot", trigger:"Si Rusia responde a la nueva ayuda o hay avances en el 'proceso de paz'", source:"Al Jazeera, Atlantic Council, France 24 (8 JUL)" },
  { title:"España campeona del Mundial 2026: la geopolítica del torneo en la América de Trump", trigger:"Si hay incidentes migratorios/ICE o tensión diplomática ligada al Mundial", source:"Wikipedia, cobertura deportiva (19 JUL)" },
  { title:"Ébola y Marburgo en Uganda y RD Congo: la OMS declara emergencia sanitaria internacional", trigger:"Si se propaga fuera de la región o hay pugna EEUU-China por la respuesta", source:"OMS, Africa CDC (JUL 2026)" },
  { title:"Papúa Occidental (Indonesia): milicia mata a un piloto estadounidense e incendia un avión", trigger:"Si hay escalada militar indonesia o reacción de EEUU por la seguridad de Freeport", source:"Wikipedia Current Events (JUL 2026)" },
  { title:"Filipinas: la crisis energética puede desatar inestabilidad política contra Marcos", trigger:"Si los apagones provocan protestas masivas o crisis de gobierno", source:"bne IntelliNews, Philstar (MAY-JUL 2026)" },
  { title:"Ártico: militarización y proyecto de submarinos de Canadá tras la escalada por Groenlandia", trigger:"Si se anuncian nuevos despliegues o acuerdos de defensa árticos", source:"Stratfor (20 JUL 2026)" }
],

/* ═══ COVERED VIDEOS ═══ */
coveredVideos: [
  { title:"EL CASTRISMO SE RINDE: Cómo será la nueva Cuba", date:"1 JUL 2026", views:"274K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"VENEZUELA acaba de recibir el GOLPE más DEVASTADOR", date:"25 JUN 2026", views:"585K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"EL HUNDIMIENTO BRITÁNICO: ¿Por qué este país ha dejado de funcionar?", date:"23 JUN 2026", views:"169K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"EMIRATOS CONTRA IRÁN: el golpe que puede cambiar todo el Golfo", date:"20 JUN 2026", views:"165K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"¿LLEGÓ la MANO DURA? EUROPA le declara la GUERRA a la INMIGRACIÓN ILEGAL", date:"17 JUN 2026", views:"569K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"La PEOR noticia para el CASTRISMO: EEUU declara la GUERRA al temido G2 CUBANO", date:"16 JUN 2026", views:"374K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"EEUU PIERDE MÁS de lo que parece en IRÁN", date:"15 JUN 2026", views:"190K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"UCRANIA da la SORPRESA: ¿Es realmente posible una VICTORIA sobre RUSIA?", date:"8 JUN 2026", views:"471K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"SORPRESA EN COLOMBIA: Cómo un FAN de BUKELE y MILEI ha DESTROZADO a la izquierda", date:"1 JUN 2026", views:"347K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"¿JAQUE a IRÁN? La ALIANZA SECRETA de TRUMP con el RÉGIMEN BRUTAL de ERITREA", date:"26 MAY 2026", views:"269K", url:"https://www.youtube.com/@VisualPolitik/videos" }
]

};
