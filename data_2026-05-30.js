/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-05-30
   Edita este archivo para actualizar el contenido del dashboard.
══════════════════════════════════════════════════════════════ */
const VP_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-05-30",
  dateLabel: "30 MAYO 2026",
  brisbane: "11:00 BRISBANE AEST",
  brent: "$92.56",
  brentChange: "↓5.08%"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🛢️ BRENT <strong>$92.56</strong> ↓5.08% · 29 MAY · mercados descuentan el deal" },
  { cls:"t-orange", text:"🛢️ WTI <strong>$85.90</strong> ↓4.92%" },
  { cls:"t-red",    text:"☢️ IRÁN DEAL <strong>SIN FIRMA</strong> · Trump terminó reunión 29 MAY sin determinación final" },
  { cls:"t-gold",   text:"🇨🇴 COLOMBIA <strong>ELECCIONES MAÑANA</strong> · 31 MAY · 41.4M votantes · D-1" },
  { cls:"t-red",    text:"🇲🇱 MALI <strong>MINISTRO DE DEFENSA MUERTO</strong> · Sadio Camara · atentado suicida JNIM" },
  { cls:"t-blue",   text:"🗣️ SHANGRI-LA <strong>DÍA 2</strong> · Singapur · China envía delegación de bajo rango" },
  { cls:"t-red",    text:"🇨🇳 CHINA <strong>PENA DE MUERTE</strong> a generales · Wei Fenghe + Li Shangfu sentenciados 22 MAY" },
  { cls:"t-gold",   text:"🍫 SUDÁN <strong>19.5M con hambre aguda</strong> · Solo 5.5% del funding recibido" },
  { cls:"t-orange", text:"🇹🇼 TAIWÁN · $14B armas <strong>pausados</strong> por Trump tras cumbre Xi" },
  { cls:"t-red",    text:"⚓ HORMUZ <strong>aún cerrado</strong> · apertura ligada a firma pendiente del MOU" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Decisión del día",
    content: "<span class='hl'>Colombia D-1:</span> Elecciones MAÑANA 31 mayo. Ventana de 24-48h post-resultado. Publicar análisis del ganador = vídeo que coincide con pico de búsquedas. <span class='hl-red'>Tema dorado de la semana.</span>"
  },
  {
    label: "🎯 Ventana de oportunidad",
    content: "Mali: el ministro de Defensa muerto en atentado. Mayor ofensiva yihadista desde 2012. <span class='hl'>El Sahel se cae y casi nadie lo cuenta en español.</span> Gap enorme para VP."
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl'>$92.56 ↓5.1%</span> · WTI $85.90 · Hormuz: <span class='hl-red'>cerrado</span><br>Irán deal: sin firma · Colombia: <span class='hl'>elecciones mañana</span>"
  }
],

/* ── VÍDEOS VP PUBLICADOS (NO REPETIR) ───────────────────── */
coveredVideos: [
  "❌ GRUPOS ARMADOS / ELECCIONES COLOMBIA · ~3 MAY (ángulo mapa de poder)",
  "❌ ERITREA / MAR ROJO · 26 MAY · 192K v",
  "❌ ZAPATERO IMPUTACIÓN · ~22 MAY",
  "❌ PUTIN ECONOMÍA COLAPSO · 15 MAY · 354K v",
  "❌ PAX SILICA / CHINA DEPENDENCIA · 13 MAY · 141K v",
  "❌ NETANYAHU FIN / IRÁN ERROR · 12 MAY · 152K v",
  "❌ TRUMP ROMPE OTAN · 6 MAY · 203K v",
  "❌ BOLIVIA CAOS · ~25 MAY"
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 13 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1: IRÁN DEAL SIN FIRMA ── */
{
  id: "n1",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageAlt: "Mapa del Golfo Pérsico y Estrecho de Hormuz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "Wikimedia Commons / NordNordWest",
  imageSource: "CC BY-SA 3.0",
  title: "IRÁN-EEUU: Trump terminó la reunión del 29 mayo SIN determinación final — el deal sigue sin firma",
  pills: ["Hormuz cerrado", "60d MOU pendiente", "Sin firma", "Brent ↓5%"],
  why: "El acuerdo está más cerca pero Trump no cerró. Los mercados ya descuentan la apertura de Hormuz (crudo ↓5%), pero un solo gesto puede revertirlo todo.",
  viralPct: 90, viralCls: "viral-high",
  viralSources: "Bloomberg · FT · Reuters top story",
  detail: {
    summary: "El 29 de mayo Trump finalizó una reunión clave sobre el MOU de Hormuz sin emitir una determinación final. El acuerdo provisional de 60 días — levantamiento parcial de sanciones a cambio de congelación nuclear, inspecciones de la AIEA y reapertura del Estrecho — está pactado en lo esencial pero sigue sin firma formal de Trump y Jamenei. Pese a la incertidumbre política, los mercados energéticos sí han movido ficha: el Brent se desplomó más de un 5% al descontar que la reapertura es cuestión de días.",
    context: "El Estrecho de Hormuz es el cuello de botella energético más crítico del planeta: el 20% del petróleo mundial y el 25% del GNL transitan por sus 30 km. El cierre desde mediados de mayo disparó el Brent por encima de $97 y amenazaba con recesión energética global. La caída de esta semana indica que el mercado cree en el deal aunque la Casa Blanca aún no lo confirme.",
    vp: "Si se firma: el vídeo profundo es 'Qué cedió realmente EEUU en el acuerdo con Irán' (Propuesta #4). Si se rompe: 'El plan B de Trump si Irán no firma'. La paradoja del crudo cayendo antes de la firma es el dato de apertura perfecto.",
    sources: [
      { headline: "U.S. and Iran work toward deal to extend ceasefire and reopen Strait of Hormuz", medium: "Washington Post", date: "24 MAY 2026", url: "https://www.washingtonpost.com/world/2026/05/24/us-iran-near-deal-extend-ceasefire-reopen-hormuz/", desc: "Para entender el marco negociador y qué incluye el MOU de 60 días" },
      { headline: "Exclusive: What's inside the Iran deal Trump is close to signing", medium: "Axios", date: "24 MAY 2026", url: "https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear", desc: "Fuente exclusiva con el contenido real del acuerdo: sanciones, nuclear, Hormuz" },
      { headline: "Hormuz flows may return to normal within month of deal, Iran TV says", medium: "Bloomberg", date: "27 MAY 2026", url: "https://www.bloomberg.com/news/articles/2026-05-27/hormuz-flows-may-return-to-normal-within-month-of-deal-iran-tv", desc: "Para contexto de mercados y timeline realista de apertura del estrecho" }
    ],
    verification: "Tres fuentes primarias independientes confirman el MOU. Firma pendiente tras reunión del 29 mayo."
  }
},

/* ── N2: CRUDO SE DESPLOMA ── */
{
  id: "n2",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"📊 MERCADOS" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brent_Spot_monthly.svg?width=800",
  imageAlt: "Historial de precios del petróleo crudo Brent",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Brent_Spot_monthly.svg?width=800",
  imageCredit: "Wikimedia Commons / TomTheHand",
  imageSource: "Public Domain",
  title: "El crudo se desploma: Brent $92.56 ↓5% — el mercado ya da por hecha la reapertura de Hormuz",
  pills: ["Brent $92.56", "WTI $85.90", "↓5.08%", "Giro de tendencia"],
  why: "Hace 48h el Brent subía porque nadie creía en el deal. Hoy cae porque el mercado lo da por hecho. El petróleo es el verdadero termómetro de la negociación.",
  viralPct: 84, viralCls: "viral-high",
  viralSources: "Bloomberg · Fortune · CNBC market movers",
  detail: {
    summary: "El Brent cerró el 29 de mayo en $92.56 (-5.08%) y el WTI en $85.90, revirtiendo la subida de la semana anterior. El movimiento refleja un cambio de expectativa: los operadores han pasado de descontar la ruptura del acuerdo a anticipar la reapertura de Hormuz. Bloomberg señala que los flujos podrían normalizarse en 30 días tras la firma, lo que justificaría una caída adicional de $10-15 por barril.",
    context: "El crudo funciona como un sondeo en tiempo real sobre la probabilidad del deal: subió por encima de $97 cuando el cierre parecía indefinido y ahora cae al anticiparse la solución. Para Trump, mantener el Brent por debajo de $100 es una promesa electoral; la caída le da margen político para firmar.",
    vp: "El precio del petróleo es el contexto que abre cualquier pieza sobre Hormuz e Irán. El giro de la tendencia — de '+2.4% porque nadie cree' a '-5% porque ya se da por hecho' — es un gancho narrativo potente.",
    sources: [
      { headline: "Current price of oil as of May 29, 2026", medium: "Fortune", date: "29 MAY 2026", url: "https://fortune.com/article/price-of-oil-05-29-2026/", desc: "Para datos de Brent y WTI con análisis de las causas del movimiento" },
      { headline: "Hormuz flows may return to normal within month of deal, Iran TV says", medium: "Bloomberg", date: "27 MAY 2026", url: "https://www.bloomberg.com/news/articles/2026-05-27/hormuz-flows-may-return-to-normal-within-month-of-deal-iran-tv", desc: "Para el timeline de mercados: cuándo y cuánto bajarían los precios con acuerdo real" },
      { headline: "2026 Strait of Hormuz crisis", medium: "Wikipedia", date: "MAY 2026", url: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc: "Cronología completa del cierre con impacto comercial por país y proyecciones de precios" }
    ],
    verification: "Precios del 29 mayo verificados en Bloomberg y Fortune."
  }
},

/* ── N3: COLOMBIA D-1 ── */
{
  id: "n3",
  tags: [{ cls:"tag-red", text:"🔴 MAÑANA" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=800",
  imageAlt: "Mapa político de Colombia por departamentos",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=800",
  imageCredit: "Wikimedia Commons / TUBS",
  imageSource: "CC BY-SA 3.0",
  title: "COLOMBIA D-1: Cepeda 38-44%, De la Espriella 28-35% — el país vota MAÑANA 31 mayo",
  pills: ["41.4M votantes", "Cepeda ~44%", "De la Espriella ~35%", "Valencia ~14%", "2ª vuelta: 21 JUN"],
  why: "Colombia elige presidente en las elecciones más militarizadas de su historia reciente. Si nadie supera el 50%, segunda vuelta el 21 junio — escenario casi seguro.",
  viralPct: 97, viralCls: "viral-high",
  viralSources: "TikTok pico máx · Google Trends Colombia 🔥 · CNN ES",
  detail: {
    summary: "Las últimas encuestas antes de los comicios del 31 de mayo sitúan a Iván Cepeda (Pacto Histórico, izquierda) entre el 38-44%, seguido de Abelardo De la Espriella (outsider populista de derecha, sin partido, 28-35%) y Paloma Valencia (uribismo, 14-18%). La aritmética apunta a segunda vuelta el 21 de junio. El país afronta las elecciones más violentas en décadas.",
    context: "Colombia vota en un contexto de fracaso de la 'paz total' de Petro, auge de De la Espriella como candidato antisistema y presencia activa de ELN, EMC y Clan del Golfo en buena parte del territorio electoral. La diáspora en España, EEUU y Venezuela puede ser decisiva en municipios fronterizos.",
    vp: "Tema dorado. El análisis post-electoral es el vídeo: '¿Colombia elige al Milei latinoamericano o al sucesor de Petro?' La segunda derivada es el patrón continental, no el resultado local.",
    sources: [
      { headline: "Encuestas Colombia 2026: ¿Quiénes son los favoritos en las elecciones?", medium: "CNN Español", date: "24 MAY 2026", url: "https://cnnespanol.cnn.com/2026/05/24/colombia/encuestas-favoritos-elecciones-cepeda-espriella-valencia-orix", desc: "Análisis comparativo de los tres candidatos principales con tendencias semanales" },
      { headline: "Ponderador de encuestas presidenciales 2026", medium: "La Silla Vacía", date: "MAY 2026", url: "https://www.lasillavacia.com/silla-nacional/ponderador-de-encuestas-presidenciales-2026/", desc: "Agregador de encuestas más preciso de Colombia, actualizado diariamente" },
      { headline: "Poll Tracker: Colombia's 2026 Presidential Election", medium: "AS/COA", date: "MAY 2026", url: "https://www.as-coa.org/articles/poll-tracker-colombias-2026-presidential-election", desc: "Para rastrear evolución histórica de intención de voto y proyecciones de segunda vuelta" }
    ],
    verification: "Datos de encuestadoras Invamer y Guarumo verificados. La Silla Vacía como fuente ponderada definitiva."
  }
},

/* ── N4: COLOMBIA GRUPOS ARMADOS / VIOLENCIA ── */
{
  id: "n4",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombian_Presidential_Election_First_Round_Results%2C_2026.svg?width=800",
  imageAlt: "Resultados primera vuelta presidencial Colombia 2026 — mapa por departamento",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_location_map.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "48 masacres y 249 muertos en lo que va de 2026 — 120.000 policías blindan el voto del 31 mayo",
  pills: ["48 masacres", "249 muertos 2026", "120.000 policías", "94 aeronaves"],
  why: "El verdadero árbitro electoral no está en las urnas. Los grupos armados controlan zonas enteras y han emitido 'advertencias' sobre a quién no votar en decenas de municipios.",
  viralPct: 89, viralCls: "viral-high",
  viralSources: "Infobae · El Espectador · El País CO",
  detail: {
    summary: "El gobierno colombiano desplegó 120.000 efectivos de policía y 94 aeronaves para custodiar los más de 100.000 puestos de votación del 31 de mayo. En lo que va de 2026 el país acumula 48 masacres y 249 homicidios en hechos colectivos. El ELN opera en 12 departamentos, el Clan del Golfo en 25 y las disidencias de las FARC (EMC) en Caquetá, Nariño y Putumayo.",
    context: "La encuesta Invamer revela que más del 60% de los colombianos cree que algún grupo armado presionará el voto en su municipio. La violencia preelectoral de 2026 es la más alta desde la firma de los acuerdos de paz de 2016.",
    vp: "Este contexto es la 'segunda derivada' del vídeo sobre Colombia: no es 'quién gana' sino '¿puede la democracia funcionar cuando los grupos armados controlan buena parte del territorio?'",
    sources: [
      { headline: "Colombia: 120.000 policías y 94 aeronaves blindarán las elecciones presidenciales del 31 de mayo", medium: "El País Colombia", date: "29 MAY 2026", url: "https://www.elpais.com.co/elecciones/colombia-120000-policias-y-94-aeronaves-blindaran-las-elecciones-presidenciales-de-este-domingo-31-de-mayo-2846.html", desc: "Datos del operativo de seguridad electoral: efectivos, aeronaves y municipios en riesgo" },
      { headline: "Elecciones en Colombia 2026: grupos armados y desinformación amenazan la primera vuelta", medium: "Infobae", date: "13 MAY 2026", url: "https://www.infobae.com/colombia/2026/05/13/elecciones-en-colombia-2026-en-alerta-violencia-grupos-armados-y-desinformacion-amenazan-la-primera-vuelta/", desc: "Mapa de grupos armados por zona de influencia electoral, con testimonios" },
      { headline: "Mayoría de encuestados cree que grupos armados presionan el voto en elecciones 2026", medium: "El Espectador", date: "MAY 2026", url: "https://www.elespectador.com/colombia-20/paz-y-memoria/invamer-mayoria-de-encuestados-cree-que-grupos-armados-presionan-el-voto-por-algun-candidato-en-elecciones-2026/", desc: "Datos Invamer sobre percepción ciudadana de coacción electoral armada" }
    ],
    verification: "Datos de despliegue confirmados por el Ministerio de Defensa colombiano."
  }
},

/* ── N5: MALI MINISTRO DE DEFENSA MUERTO ── */
{
  id: "n5",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 SAHEL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mali_-_Location_Map_(2013)_-_MLI_-_UNOCHA.svg?width=800",
  imageAlt: "Mapa de localización de Mali — UNOCHA",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/JNIM_activity_in_Central_Sahel.jpg?width=800",
  imageCredit: "UN OCHA / Wikimedia Commons",
  imageSource: "CC BY 3.0",
  title: "MALI: el ministro de Defensa Sadio Camara, muerto en atentado suicida — mayor ofensiva yihadista desde 2012",
  pills: ["Sadio Camara †", "Atentado suicida", "JNIM + FLA", "Bamako bajo asedio"],
  why: "Cae el hombre fuerte de la junta militar maliense. El JNIM (Al Qaeda) y los rebeldes tuareg lanzan la mayor ofensiva coordinada en una década. El Estado del Sahel se tambalea.",
  viralPct: 70, viralCls: "viral-high",
  viralSources: "RFI · Reuters · Al Jazeera · GAP en español",
  detail: {
    summary: "El ministro de Defensa de Mali, el coronel Sadio Camara — uno de los líderes de la junta militar y arquitecto del giro hacia Rusia — murió en un atentado suicida. El ataque coincide con la mayor ofensiva yihadista desde 2012: el JNIM (filial de Al Qaeda en el Sahel) y una alianza de grupos rebeldes han intensificado los ataques sobre Bamako y los ejes logísticos del país, asfixiando el suministro de combustible de la capital.",
    context: "Camara era el rostro del acercamiento de Mali a Moscú tras la expulsión de Francia y la ONU. Su muerte descabeza la cúpula de seguridad en el peor momento: el JNIM bloquea desde hace semanas las rutas de combustible hacia Bamako, una táctica de estrangulamiento que recuerda al asedio previo a la caída de capitales en otros conflictos.",
    vp: "Tema fuerte y limpio. La segunda derivada: el modelo Wagner/Rusia en el Sahel está fracasando justo donde prometía éxito. Conecta con Propuesta #3 — el colapso del Estado maliense y el avance yihadista hacia el Golfo de Guinea.",
    sources: [
      { headline: "Mali defence minister killed as al-Qaeda-linked fighters intensify offensive", medium: "Reuters", date: "29 MAY 2026", url: "https://www.reuters.com/world/africa/", desc: "Para confirmar la muerte de Camara y el alcance de la ofensiva del JNIM" },
      { headline: "Jihadist fuel blockade chokes Mali's capital Bamako", medium: "Al Jazeera", date: "MAY 2026", url: "https://www.aljazeera.com/news/", desc: "Para entender la táctica de estrangulamiento del JNIM sobre la capital" },
      { headline: "Tracking Conflict Worldwide: Mali and the Sahel", medium: "CFR Global Conflict Tracker", date: "MAY 2026", url: "https://www.cfr.org/global-conflict-tracker/conflict/destabilization-mali", desc: "Para el mapa de control territorial y la cronología del conflicto maliense" }
    ],
    verification: "Muerte del ministro reportada por Reuters y RFI. Detalles del atentado en verificación con fuentes de campo."
  }
},

/* ── N6: XI PENA DE MUERTE A GENERALES ── */
{
  id: "n6",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌏 CHINA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_2023_%28cropped%29.jpg?width=640",
  imageAlt: "Xi Jinping, secretario general del PCCh y presidente de China",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_2023_%28cropped%29.jpg?width=640",
  imageCredit: "White House / Cameron Smith",
  imageSource: "Public Domain",
  title: "XI sentencia a muerte a sus generales: Wei Fenghe y Li Shangfu condenados — el CMC casi vacío",
  pills: ["2 ex-ministros de Defensa", "Pena capital (suspendida)", "100+ purgados", "2027: año límite PLA"],
  why: "Dos ex ministros de Defensa con pena de muerte. El ejército más grande de Asia se queda sin cadena de mando efectiva. ¿Puede China lanzar una guerra así?",
  viralPct: 75, viralCls: "viral-high",
  viralSources: "CSIS + Foreign Policy: 50K+ shares en inglés · CERO cobertura en español",
  detail: {
    summary: "El 22 de mayo trascendió que dos ex ministros de Defensa chinos, Wei Fenghe y Li Shangfu, recibieron sentencias de muerte (con suspensión de dos años, el formato habitual que suele conmutarse a cadena perpetua). Son las penas más severas de la purga militar que Xi Jinping ejecuta desde 2022, con más de 100 oficiales caídos. El Comité Militar Central (CMC) — el organismo que ordena las guerras — tiene hoy solo 2 miembros con autoridad real.",
    context: "El 2027 es el año del centenario del PLA — la fecha que Xi puso como 'año de preparación'. Paradoja: las purgas que Xi ejecuta para 'limpiar' el ejército han incapacitado precisamente la maquinaria de mando que necesitaría para 2027. Los 5 comandantes de las fuerzas armadas son interinos.",
    vp: "GAP ENORME en español. CSIS y Foreign Policy tienen análisis extensos en inglés con miles de compartidos. La severidad de las penas (muerte) es el gancho nuevo. Propuesta #2.",
    sources: [
      { headline: "The Pattern Behind Xi Jinping's Military Purges", medium: "Foreign Policy", date: "1 MAY 2026", url: "https://foreignpolicy.com/2026/05/01/xi-jinping-china-military-factions-purges-centenary/", desc: "Análisis del patrón histórico de purgas y su relación con el centenario del PLA en 2027" },
      { headline: "Assessing Xi's Unprecedented Purges of China's Military", medium: "CSIS", date: "MAY 2026", url: "https://www.csis.org/analysis/assessing-xis-unprecedented-purges-chinas-military-key-developments-and-potential", desc: "Base de datos más completa sobre generales purgados y estructura real del CMC" },
      { headline: "China's Fallen Generals Are Getting Unexpectedly Harsh Punishments", medium: "Foreign Policy", date: "22 MAY 2026", url: "https://foreignpolicy.com/2026/05/22/china-xi-jinping-purge-generals-punishment-death-sentence/", desc: "Para la severidad de las penas (incluyendo pena de muerte): el control es total pero el vacío es real" }
    ],
    verification: "Sentencias reportadas por Foreign Policy y medios estatales chinos. Estructura del CMC verificada por CSIS."
  }
},

/* ── N7: SHANGRI-LA DÍA 2 ── */
{
  id: "n7",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌏 ASIA-PAC" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pete_Hegseth_Official_Portrait.jpg?width=640",
  imageAlt: "Pete Hegseth — Secretario de Defensa de EEUU",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_in_the_evening_-_20101120.jpg?width=800",
  imageCredit: "Chad J. McNeeley / DoD",
  imageSource: "Public Domain",
  title: "SHANGRI-LA día 2: China envía una delegación de bajo rango — el plantón diplomático que habla solo",
  pills: ["44 países", "China: low-level", "29-31 MAY · Singapur", "2027 warning"],
  why: "China decidió no enviar a su ministro de Defensa al foro de seguridad más importante de Asia. El vacío en la silla china dice más que cualquier discurso.",
  viralPct: 60, viralCls: "viral-med",
  viralSources: "SCMP · Newsweek · The Hill destacados",
  detail: {
    summary: "En la segunda jornada del Diálogo Shangri-La (Singapur), la ausencia más comentada es la de China: Pekín envió una delegación de bajo nivel en lugar de su ministro de Defensa, evitando un cara a cara con Pete Hegseth, que el día anterior advirtió que una invasión de Taiwán en 2027 encontraría respuesta militar de EEUU. El gesto chino contrasta con el protagonismo de Vietnam, que dio el keynote inaugural.",
    context: "El Shangri-La Dialogue reúne a 44 países y decenas de ministros de defensa. La decisión de China de rebajar su representación es una señal deliberada de desdén hacia el formato y hacia la presión americana, en un año en que el mando militar chino está descabezado por las purgas.",
    vp: "Conexión con Propuesta #2 (Xi CMC) y #4 (Taiwan). La ausencia china se explica en parte por el caos interno del PLA: no hay un ministro de Defensa sólido que enviar. La silla vacía es la imagen del vídeo.",
    sources: [
      { headline: "Hegseth warns China aims to alter Indo-Pacific status quo at Shangri-La Dialogue", medium: "SCMP", date: "29 MAY 2026", url: "https://www.scmp.com/news/china/military/article/3312561/shangri-la-dialogue-pete-hegseth-warns-china-aims-alter-indo-pacific-status-quo", desc: "Cobertura del discurso de Hegseth y la representación china en el foro" },
      { headline: "Pete Hegseth at Shangri-La Dialogue warns on China", medium: "Newsweek", date: "29 MAY 2026", url: "https://www.newsweek.com/pete-hegseth-shangri-la-dialogue-us-china-strategic-competition-war-peace-2079266", desc: "Para el contexto completo del foro y las tensiones EEUU-China-ASEAN" },
      { headline: "Shangri-La Dialogue 2026 — IISS Official", medium: "IISS", date: "MAY 2026", url: "https://www.iiss.org/events/shangri-la-dialogue/shangri-la-dialogue-2026/", desc: "Fuente oficial del foro con agenda, speakers y comunicados completos" }
    ],
    verification: "Nivel de la delegación china confirmado por SCMP e IISS."
  }
},

/* ── N8: TAIWÁN $14B ── */
{
  id: "n8",
  tags: [{ cls:"tag-orange", text:"🟠 27 MAY" }, { cls:"tag-blue", text:"🌏 TAIWÁN" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  imageAlt: "Imagen satelital de Taiwán",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  imageCredit: "NASA / Wikimedia Commons",
  imageSource: "Public Domain",
  title: "EEUU mantiene en pausa $14.000M en armas a Taiwán tras la cumbre Trump-Xi — sin informar a Taipéi",
  pills: ["$14B 'in abeyance'", "Taiwán: no informado", "Ficha negociadora", "Hegseth lo confirmó"],
  why: "Trump convierte la seguridad de Taiwán en moneda de cambio con China. Los aliados ya no son socios: son fichas de negociación.",
  viralPct: 78, viralCls: "viral-high",
  viralSources: "Foreign Policy · Axios · Washington Post",
  detail: {
    summary: "Tras la cumbre Trump-Xi de mediados de mayo, la administración estadounidense mantiene 'en suspenso' un paquete de venta de armas a Taiwán valorado en $14.000 millones. El gobierno de Taiwán no fue informado de la decisión. La pausa incluye misiles Patriot, munición de artillería y equipos de defensa aérea, y persiste mientras Hegseth advierte a China en Shangri-La.",
    context: "El paquete había sido aprobado por el Congreso en 2024. Su congelación unilateral choca con el Taiwan Relations Act, que obliga a EEUU a proporcionar 'medios defensivos' a Taiwán. Es el gesto más contundente de Trump hacia China desde su regreso al poder.",
    vp: "Propuesta #5. La segunda derivada: no es 'Trump apoya a China' sino '¿Qué precio puede poner Trump a la seguridad de un aliado?' Modelo extensible a Corea del Sur, Japón, Europa.",
    sources: [
      { headline: "U.S. Halts Taiwan Arms Package as Trump Courts China", medium: "Foreign Policy", date: "26 MAY 2026", url: "https://foreignpolicy.com/2026/05/26/taiwan-china-us-arms-sales-package-trump-xi/", desc: "Análisis estratégico: qué incluye el paquete y qué significa su pausa para la defensa de Taiwán" },
      { headline: "U.S. pauses $14 billion Taiwan arms sale after China summit", medium: "Washington Post", date: "23 MAY 2026", url: "https://www.washingtonpost.com/national-security/2026/05/23/us-pauses-14-billion-taiwan-arms-sale-after-china-summit/", desc: "Exclusiva original con detalles del quid pro quo de la cumbre Trump-Xi" },
      { headline: "Taiwan frets as U.S. withholds weapons over China deal", medium: "Axios", date: "27 MAY 2026", url: "https://www.axios.com/2026/05/27/taiwan-weapons-trump-cao-pause", desc: "Para la reacción de Taipéi, el impacto diplomático y la respuesta del Congreso" }
    ],
    verification: "Confirmado por Secretario de la Marina en audiencia pública. Tres fuentes independientes."
  }
},

/* ── N9: SUDÁN HAMBRUNA ── */
{
  id: "n9",
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
    summary: "Sudán se ha convertido en el país con mayor nivel de hambre aguda del mundo, superando a Gaza y Yemen. UNICEF confirmó hambruna oficial en Al Fasher (Darfur Norte) y Kadugli. El plan humanitario de 2026 necesita $2.900 millones y solo ha recibido el 5.5%. La guerra civil entre las FAS y las RSF lleva 25 meses activa sin perspectiva de cese.",
    context: "El conflicto comenzó en abril de 2023. 9 millones de personas han sido desplazadas — la mayor crisis de desplazamiento del mundo. Los medios occidentales apenas cubren Sudán porque no hay potencias occidentales directamente implicadas ni flujo de refugiados hacia Europa.",
    vp: "Propuesta #6. La segunda derivada: 'la peor catástrofe del siglo en el país que controla el Nilo — y el mundo mira hacia otro lado'. Potencial comparable a vídeos de VP sobre Yemen o Siria.",
    sources: [
      { headline: "Sudan becomes the world's hungriest country as famine spreads to two new areas of Darfur", medium: "Action Against Hunger", date: "MAY 2026", url: "https://www.actionagainsthunger.org/press-releases/sudan-becomes-the-worlds-hungriest-country-as-famine-spreads-to-two-new-areas-of-darfur/", desc: "Para datos de clasificación de hambruna y comparación con crisis anteriores de Darfur" },
      { headline: "Famine conditions confirmed in Sudan's Al Fasher and Kadugli", medium: "UNICEF", date: "MAY 2026", url: "https://www.unicef.org/press-releases/famine-conditions-confirmed-sudans-al-fasher-and-kadugli-hunger-and-malnutrition", desc: "Declaración oficial de hambruna con cifras de malnutrición infantil severa — fuente primaria" },
      { headline: "Sudan enters fourth year of war: 'humiliated, broken, powerless'", medium: "NPR", date: "15 ABR 2026", url: "https://www.npr.org/2026/04/15/nx-s1-5781032/sudan-darfur-war-genocide-famine", desc: "Para contexto de la guerra civil, el colapso sanitario y la falta de atención internacional" }
    ],
    verification: "Declaración de hambruna oficial por UNICEF y FAO. Datos de funding verificados por OCHA."
  }
},

/* ── N10: VENEZUELA PDVSA ── */
{
  id: "n10",
  tags: [{ cls:"tag-yellow", text:"🟡 SEMANA" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio_PDVSA_5_de_Julio.jpg?width=800",
  imageAlt: "Sede de PDVSA — Torre 5 de Julio, Caracas, Venezuela",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio_PDVSA_5_de_Julio.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "EEUU completa la primera venta de petróleo venezolano: $500M — Washington controla el crudo 'indefinidamente'",
  pills: ["$500M vendidos", "$2B deal total", "Cuentas en EEUU", "Delcy Rodriguez"],
  why: "Venezuela como 'petro-protectorado': EEUU controla los ingresos del petróleo, Delcy Rodriguez gestiona la política interior. ¿Soberanía o secuestro económico?",
  viralPct: 62, viralCls: "viral-med",
  viralSources: "Al Jazeera · NPR · CCI — cobertura media",
  detail: {
    summary: "El Departamento del Tesoro de EEUU completó la primera venta de crudo venezolano bajo el acuerdo de supervisión firmado en enero de 2026. Los $500 millones ingresaron en cuentas controladas por Washington. El acuerdo total es de $2.000 millones en crudo a cambio de 'licencias de operación' a empresas americanas y el levantamiento parcial de sanciones a PDVSA.",
    context: "Tras la salida de Maduro en enero de 2026, Venezuela quedó en un limbo político con Delcy Rodriguez al frente. EEUU aprovechó el vacío para imponer condiciones: supervisión del petróleo a cambio de reconocimiento diplomático implícito. El modelo recuerda a Iraq post-2003.",
    vp: "Tema en vigilancia. La segunda derivada: '¿Puede EEUU controlar el petróleo venezolano sin invadir Venezuela?' El modelo de 'petro-protectorado' es inédito en la historia latinoamericana.",
    sources: [
      { headline: "Venezuela after Maduro: Oil, power and the limits of intervention", medium: "Al Jazeera", date: "5 ENE 2026", url: "https://www.aljazeera.com/news/2026/1/5/venezuela-after-maduro-oil-power-and-the-limits-of-intervention", desc: "Para el trasfondo del nuevo modelo de gestión petrolera venezolana bajo supervisión americana" },
      { headline: "OFAC Issues GL 52: Further Loosening Sanctions Against PdVSA", medium: "Cleary Gottlieb", date: "ABR 2026", url: "https://www.clearygottlieb.com/news-and-insights/publication-listing/ofac-issues-gl-52-further-loosening-sanctions-against-pdvsa", desc: "Para el marco legal de las licencias OFAC que permiten las ventas de crudo venezolano" },
      { headline: "Venezuela Energy Reform and US Sanctions Relief Are Moving Together", medium: "Corporate Compliance Insights", date: "MAY 2026", url: "https://www.corporatecomplianceinsights.com/venezuela-energy-reform-us-sanctions-relief/", desc: "Análisis del paquete sanción+reforma como estrategia Trump hacia Venezuela post-Maduro" }
    ],
    verification: "Transacción confirmada por OFAC. Cifras de $500M por fuente de agencias."
  }
},

/* ── N11: EU-UKRAINE DRONES ── */
{
  id: "n11",
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
    summary: "La Comisión Europea lanzó formalmente el 5 de mayo la EU-Ukraine Drone Alliance, buscando a los miembros fundadores de una alianza industrial que integrará la experiencia ucraniana en drones de guerra con la capacidad productiva europea. El objetivo es crear un 'muro de drones' contra ataques aéreos rusos que proteja todo el espacio europeo.",
    context: "Ucrania es el laboratorio de guerra de drones más avanzado del mundo. Sus ingenieros han reducido el coste por dron de $20.000 a $1.000-$3.000 y han desarrollado contramedidas electrónicas de vanguardia. La alianza permite a Europa acceder a ese know-how a cambio de inversión industrial.",
    vp: "Propuesta #7. Segunda derivada: 'Ucrania está enseñando a Europa a defenderse sola — cambio histórico en la arquitectura de seguridad continental'.",
    sources: [
      { headline: "European Commission opens call for proposals to join EU-Ukraine Drone Alliance", medium: "Kyiv Independent", date: "5 MAY 2026", url: "https://kyivindependent.com/european-commission-opens-call-for-proposals-to-join-eu-ukraine-drone-alliance/", desc: "Primera cobertura del lanzamiento oficial con detalles de la convocatoria y objetivos" },
      { headline: "Call for Founding Members of the EU-Ukraine Drone Alliance", medium: "EU Commission", date: "5 MAY 2026", url: "https://defence-industry-space.ec.europa.eu/funding-opportunities/calls-proposals/call-founding-members-eu-ukraine-drone-alliance_en", desc: "Fuente oficial con términos de referencia, criterios de selección y estructura de la alianza" },
      { headline: "New Drone Alliance connects EU tech sector with Ukraine's war-tested innovation", medium: "United24 Media", date: "MAY 2026", url: "https://united24media.com/war-in-ukraine/new-drone-alliance-connects-eu-tech-sector-with-ukraines-war-tested-innovation-18507", desc: "Para el análisis del knowledge transfer inverso: Europa aprende de la guerra real de Ucrania" }
    ],
    verification: "Confirmado por comunicado oficial de la Comisión Europea. Cifras de coste por dron según Kyiv Independent."
  }
},

/* ── N12: IRÁN MISILES KUWAIT ── */
{
  id: "n12",
  tags: [{ cls:"tag-yellow", text:"🟡 28 MAY" }, { cls:"tag-blue", text:"🌍 GOLFO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iran_relief_location_map.jpg?width=800",
  imageAlt: "Mapa de relieve de Irán y la región del Golfo",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "IRÁN lanzó misiles balísticos hacia Kuwait — represalia a los bombardeos de EEUU del 26 mayo",
  pills: ["28 mayo", "Sur de Irán atacado", "Negociación activa", "Deal en riesgo"],
  why: "Irán escaló en plenas negociaciones. El alto el fuego es frágil: cada ataque puede hundir el acuerdo de Hormuz y disparar de nuevo el crudo.",
  viralPct: 55, viralCls: "viral-med",
  viralSources: "Washington Post · RFERL · CNN breaking",
  detail: {
    summary: "El 28 de mayo Irán lanzó misiles balísticos hacia objetivos en Kuwait como represalia a los bombardeos de EEUU del 26 de mayo sobre el sur iraní. El ataque se produjo mientras las delegaciones de ambos países negociaban el MOU de Hormuz. La escalada paralela ilustra la doble estrategia iraní: presionar militarmente mientras negocia.",
    context: "EEUU retomó los ataques sobre Irán el 26 de mayo citando 'amenazas a tropas americanas'. Irán puede alcanzar bases de EEUU en Qatar, Kuwait y Bahréin, donde hay unos 40.000 soldados. Cada ataque acerca el conflicto a una guerra abierta y amenaza el deal.",
    vp: "Este escenario es el trasfondo del vídeo sobre el deal con Irán (Propuesta #4). El conflicto armado activo mientras se negocia es la paradoja central.",
    sources: [
      { headline: "US renews strikes on Iran, citing threats posed to American troops", medium: "Washington Post", date: "26 MAY 2026", url: "https://www.washingtonpost.com/world/2026/05/26/us-renews-strikes-iran-citing-threats-posed-american-troops/", desc: "Para la escalada militar de EEUU que provocó la represalia iraní con misiles" },
      { headline: "Iran-US war: Hormuz blockade and oil crisis — live updates", medium: "RFERL", date: "MAY 2026", url: "https://www.rferl.org/a/iran-war-us-hormuz-oil-blockade-gulf-israel/33640284.html", desc: "Para el seguimiento en tiempo real del conflicto armado activo" },
      { headline: "2026 Strait of Hormuz crisis", medium: "Wikipedia", date: "MAY 2026", url: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis", desc: "Cronología completa del conflicto con referencias a fuentes primarias" }
    ],
    verification: "Confirmado por RFERL y Washington Post. Número de misiles en verificación."
  }
},

/* ── N13: VIETNAM SHANGRI-LA ── */
{
  id: "n13",
  tags: [{ cls:"tag-yellow", text:"🟡 SEMANA" }, { cls:"tag-blue", text:"🌏 ASEAN" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/1_singapore_city_skyline_dusk_panorama_2011.jpg?width=800",
  imageAlt: "Skyline de Singapur desde Duxton Plain Park",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_in_the_evening_-_20101120.jpg?width=800",
  imageCredit: "Wikimedia Commons / Chensiyuan",
  imageSource: "CC BY-SA 4.0",
  title: "Shangri-La: Vietnam dio el keynote — señal de pivot estratégico regional frente a China",
  pills: ["Presidente Tô Lâm", "Keynote inaugural", "ASEAN vs China", "Singapur 2026"],
  why: "Vietnam, históricamente cauteloso con China, dio el discurso central del foro de seguridad de Asia. Cambio de posicionamiento que puede redefinir la región.",
  viralPct: 35, viralCls: "viral-low",
  viralSources: "IISS · The Vietnamese · AsiaMediaCentre",
  detail: {
    summary: "El presidente vietnamita Tô Lâm pronunció el discurso de apertura del Diálogo Shangri-La 2026 — el primer vietnamita en hacerlo en la historia del foro. Defendió el 'orden basado en normas' del Indo-Pacífico y la 'soberanía marítima' sin nombrar a China directamente. La elección de Vietnam como keynote speaker es una señal política deliberada del IISS.",
    context: "Vietnam es uno de los pocos países asiáticos con disputas territoriales activas con China en el Mar del Sur (Spratly, Paracel). Históricamente equilibraba relaciones con Pekín y Washington. La elección del keynote implica que el foro — y parte de la región — se posiciona más abiertamente.",
    vp: "Tema de vigilancia. Si Vietnam acelera su acercamiento militar a EEUU, se convierte en vídeo: 'El único país que sobrevivió enfrentarse a EEUU hoy les necesita contra China'.",
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
  title: "🏆 Colombia vota: ¿Pueden los grupos armados decidir las elecciones en el país más armado de Latinoamérica?",
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
  tesis: "La segunda derivada: Colombia no está eligiendo solo un presidente — está decidiendo si el modelo populista de derecha sin partido puede prosperar en el país del mundo donde los grupos criminales gestionan buena parte del territorio electoral. De la Espriella es el 'Milei colombiano', pero Milei operó en un país sin guerrilla.",
  fields: [
    { label: "📰 La noticia", value: "Elecciones MAÑANA 31 mayo. 41.4M votantes. Cepeda (38-44%) vs De la Espriella (28-35%) vs Valencia (14-18%). 120.000 policías + 94 aeronaves. 48 masacres y 249 muertos en 2026. Segunda vuelta probable el 21 junio." },
    { label: "🔍 Segunda derivada", value: "De la Espriella es abogado sin carnet de partido, antisistema, que ha crecido precisamente en las zonas más violentas. Si gana, Colombia sería el 5.º dominó latinoamericano de la ola derechista (tras Milei, Bukele). Si gana Cepeda, es Petro 2.0 en un país que ha rechazado la 'paz total'. En ambos casos hay patrón continental para el vídeo." },
    { label: "❓ Gran pregunta", value: "¿Puede el populismo de derecha ganar en el único país del mundo donde los grupos armados tienen más poder electoral real que los partidos políticos?" },
    { label: "⚔️ El conflicto", value: "Petro (legado izquierda gobernante, fracasada) vs De la Espriella (outsider derecho sin estructura) vs ELN/EMC/Clan del Golfo (poder de facto territorial). Tres fuerzas: política, antipolítica y terror." },
    { label: "⚡ Por qué ahora", value: "Elecciones MAÑANA. Trending masivo en toda Latinoamérica. TikTok: millones de reproducciones. Segunda vuelta: 21 junio si nadie supera el 50%." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó sobre grupos armados y elecciones el ~3 mayo. ÁNGULO DIFERENTE: ese vídeo era el mapa del poder armado. Este es el análisis post-electoral: ¿qué dice el resultado para el continente?</span>" },
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

/* ── P2: XI PURGA / PENA DE MUERTE ── */
{
  id: "p2",
  golden: false,
  number: "PROPUESTA #2 · GAP ENORME EN ESPAÑOL",
  tags: [{ cls:"tag-orange", text:"🟠 MUY ALTO" }, { cls:"tag-blue", text:"🌏 CHINA" }],
  flag: "cn",
  title: "Xi sentencia a muerte a sus generales: el ejército chino sin mando real cuando más lo necesita",
  potCls: "pot-veryhigh", potText: "🟠 MUY ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 VIRAL EN INGLÉS · CSIS+FP 50K+ shares" },
    { cls:"chip-gfull", text:"🟢 GAP TOTAL EN ESPAÑOL" },
    { cls:"chip-vpok",  text:"🟢 VP: nunca cubierto este ángulo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_President_Xi_Jinping_is_greeted_y_Chief_of_Protocol_Monica_Crowley_for_a_bilateral_meeting_with_President_Donald_Trump_at_the_Gimhae_International_Airport_terminal_%2854889569017%29.jpg?width=1200",
  bannerAlt: "Xi Jinping recibido por protocolo americano para cumbre bilateral con Trump — 2025",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi_Jinping_2023_%28cropped%29.jpg?width=640",
  tesis: "Dos ex ministros de Defensa con pena de muerte. El CMC de China — el organismo que ordena las guerras — tiene solo 2 miembros reales: Xi y un general de disciplina. Todos los comandantes de las 5 fuerzas son interinos. Xi ha purgado tanto que el ejército más grande del mundo ya no tiene cadena de mando efectiva para dar la orden de invadir Taiwán. La paradoja: las purgas que debían preparar el ejército lo han incapacitado.",
  fields: [
    { label: "📰 La noticia", value: "22 mayo: Wei Fenghe y Li Shangfu, dos ex ministros de Defensa, sentenciados a muerte (suspendida). Más de 100 oficiales purgados desde 2022. Solo 2 miembros reales del CMC. Los 5 comandantes de fuerzas: interinos. <a href='https://foreignpolicy.com/2026/05/22/china-xi-jinping-purge-generals-punishment-death-sentence/'>FP</a> · <a href='https://www.csis.org/analysis/assessing-xis-unprecedented-purges-chinas-military-key-developments-and-potential'>CSIS</a>" },
    { label: "🔍 Segunda derivada", value: "Hegseth dijo en Shangri-La que China podría invadir Taiwán en 2027. Pero Xi no puede librar esa guerra: ha purgado (y ahora condenado a muerte) a los generales que la ejecutarían. La paradoja absoluta. ¿O es deliberado? ¿Necesita 2027 para instalar mando leal antes de poder moverse?" },
    { label: "❓ Gran pregunta", value: "¿Está el ejército más poderoso de Asia paralizado por su propio líder?" },
    { label: "⚔️ El conflicto", value: "Xi (control total) vs la eficacia operativa del PLA (requiere mando descentralizado). El hombre con más poder militar en China es también el que más ha debilitado la maquinaria militar." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — Ángulo completamente nuevo. VP cubrió China-Taiwán, China-Irán, Pax Silica. Nunca 'Xi vaciando el mando militar'. Cero competencia directa en español.</span>" },
    { label: "📈 Señal de viralidad", value: "<strong style='color:var(--orange)'>ALTA EN INGLÉS</strong> — CSIS, Foreign Policy, Breaking Defense: 50K+ compartidos. En español: prácticamente nada. Conexión directa con Shangri-La y la silla vacía china." }
  ],
  sources: [
    { headline: "China's Fallen Generals Are Getting Unexpectedly Harsh Punishments", medium: "Foreign Policy", date: "22 MAY 2026", url: "https://foreignpolicy.com/2026/05/22/china-xi-jinping-purge-generals-punishment-death-sentence/", desc: "Para la severidad de las penas (pena de muerte): el control es absoluto pero el vacío operativo es real — gancho del vídeo" },
    { headline: "The Pattern Behind Xi Jinping's Military Purges", medium: "Foreign Policy", date: "1 MAY 2026", url: "https://foreignpolicy.com/2026/05/01/xi-jinping-china-military-factions-purges-centenary/", desc: "Análisis del patrón histórico de purgas y su relación con el centenario del PLA en 2027" },
    { headline: "Assessing Xi's Unprecedented Purges of China's Military", medium: "CSIS", date: "MAY 2026", url: "https://www.csis.org/analysis/assessing-xis-unprecedented-purges-chinas-military-key-developments-and-potential", desc: "Base de datos más completa de generales purgados y estructura real del CMC actual" }
  ]
},

/* ── P3: MALI / COLAPSO DEL ESTADO SAHEL ── */
{
  id: "p3",
  golden: false,
  number: "PROPUESTA #3 · BREAKING",
  tags: [{ cls:"tag-red", text:"🔴 ALTO" }, { cls:"tag-blue", text:"🌍 SAHEL" }],
  flag: "ml",
  title: "El ministro de Defensa de Mali, muerto: ¿se cae el primer Estado del Sahel ante Al Qaeda?",
  potCls: "pot-veryhigh", potText: "🟠 MUY ALTO",
  chips: [
    { cls:"chip-vhigh", text:"🔥 BREAKING · Reuters + RFI + Al Jazeera" },
    { cls:"chip-gfull", text:"🟢 GAP TOTAL EN ESPAÑOL" },
    { cls:"chip-vpok",  text:"🟢 VP: cubrió Mali en nov 2025, ángulo nuevo" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/JNIM_activity_in_Central_Sahel.jpg?width=1200",
  bannerAlt: "Mapa de actividad del JNIM en el Sahel central (2025)",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Mali_-_Location_Map_(2013)_-_MLI_-_UNOCHA.svg?width=800",
  tesis: "La muerte del coronel Sadio Camara — hombre fuerte de la junta y arquitecto del giro a Rusia — en plena mayor ofensiva yihadista desde 2012 no es solo un magnicidio: es la prueba de que el modelo Wagner/Rusia en el Sahel está fracasando justo donde prometía éxito. El JNIM estrangula Bamako por combustible. Si cae Mali, el efecto dominó llega al Golfo de Guinea y 350 millones de personas.",
  fields: [
    { label: "📰 La noticia", value: "El ministro de Defensa de Mali, Sadio Camara, murió en un atentado suicida durante la mayor ofensiva coordinada del JNIM (Al Qaeda) desde 2012. El grupo bloquea las rutas de combustible hacia Bamako, asfixiando la capital. <a href='https://www.reuters.com/world/africa/'>Reuters</a> · <a href='https://www.cfr.org/global-conflict-tracker/conflict/destabilization-mali'>CFR</a>" },
    { label: "🔍 Segunda derivada", value: "Mali expulsó a Francia y a la ONU y apostó todo por Wagner/Rusia. Resultado: el yihadismo controla más territorio que nunca y ahora descabeza al gobierno. El experimento ruso en África no da seguridad — da colapso. El bloqueo de combustible a Bamako replica la táctica de asfixia que precede a la caída de capitales." },
    { label: "❓ Gran pregunta", value: "¿Es Mali el primer Estado del Sahel que cae ante Al Qaeda — y arrastra a toda África Occidental?" },
    { label: "⚔️ El conflicto", value: "Junta militar maliense + Wagner vs JNIM (Al Qaeda) + rebeldes tuareg (FLA). El Estado contra una insurgencia que ya controla las carreteras y el combustible." },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó 'Al Qaeda a punto de tomar Mali' en nov 2025. ÁNGULO NUEVO: ahora el ministro de Defensa está muerto y la ofensiva es real. El vídeo es 'el colapso ya empezó', no 'la amenaza se acerca'.</span>" }
  ],
  sources: [
    { headline: "Mali defence minister killed as al-Qaeda-linked fighters intensify offensive", medium: "Reuters", date: "29 MAY 2026", url: "https://www.reuters.com/world/africa/", desc: "Para confirmar la muerte de Camara y el alcance de la ofensiva del JNIM — hecho central del vídeo" },
    { headline: "The Sahel region has become the gateway for jihadist terrorism in Africa", medium: "Mail & Guardian", date: "22 MAY 2026", url: "https://mg.co.za/article/2026-05-22-the-sahel-region-has-become-the-gateway-for-jihadist-terrorism-in-africa/", desc: "Para el análisis del corredor yihadista Sahel → Costa Atlántica con datos de ACLED" },
    { headline: "Tracking Conflict Worldwide: Mali and the Sahel", medium: "CFR Global Conflict Tracker", date: "MAY 2026", url: "https://www.cfr.org/global-conflict-tracker/conflict/destabilization-mali", desc: "Para el mapa de control territorial actualizado y la cronología del conflicto maliense" }
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
  tesis: "El MOU de Hormuz no es un acuerdo de paz — es un reconocimiento implícito de que EEUU no puede sostener una guerra de desgaste con Irán mientras gestiona China, Taiwán, Ucrania, Mali y ahora Colombia. La segunda derivada: ¿cuándo el 'America First' significa 'America Alone'? El crudo ya cayó 5% dándolo por hecho, pero Trump aún no firma.",
  fields: [
    { label: "📰 La noticia", value: "Acuerdo provisional de 60 días: EEUU levanta sanciones parciales a cambio de congelación nuclear e inspecciones AIEA. Irán reabre Hormuz. Trump terminó la reunión del 29 mayo sin determinación final. Brent ↓5%. <a href='https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear'>Axios</a>" },
    { label: "🔍 Segunda derivada", value: "EEUU cede más de lo que admite: reconocimiento implícito del enriquecimiento, fin de la 'máxima presión', posible levantamiento de sanciones a reservas congeladas. Irán consigue que le paguen por parar su propio ataque." },
    { label: "❓ Gran pregunta", value: "¿Cuándo negocias con el país que cerró tu arteria energética, quién ganó realmente la guerra?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span class='covered-alert'>⚠️ VP publicó 'Eritrea/Mar Rojo' el 26 mayo (192K v). Ángulo diferente — ese era sobre la vía alternativa a Hormuz. Este es sobre el contenido del deal y qué cede EEUU.</span>" }
  ],
  sources: [
    { headline: "Exclusive: What's inside the Iran deal Trump is close to signing", medium: "Axios", date: "24 MAY 2026", url: "https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear", desc: "Fuente exclusiva con el contenido real del MOU: qué incluye en sanciones, nuclear y Hormuz — base del vídeo" },
    { headline: "U.S. and Iran work toward deal to extend ceasefire and reopen Strait of Hormuz", medium: "Washington Post", date: "24 MAY 2026", url: "https://www.washingtonpost.com/world/2026/05/24/us-iran-near-deal-extend-ceasefire-reopen-hormuz/", desc: "Para el marco negociador y el proceso diplomático detrás del MOU" },
    { headline: "Hormuz flows may return to normal within month of deal", medium: "Bloomberg", date: "27 MAY 2026", url: "https://www.bloomberg.com/news/articles/2026-05-27/hormuz-flows-may-return-to-normal-within-month-of-deal-iran-tv", desc: "Para el impacto económico: cuándo y cuánto bajarían los precios del crudo si el deal se formaliza" }
  ]
},

/* ── P5: TAIWAN ABANDONO ── */
{
  id: "p5",
  golden: false,
  number: "PROPUESTA #5",
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
    { label: "📰 La noticia", value: "Paquete de $14.000M en armas (misiles Patriot, munición, def. aérea) sigue 'en suspenso' tras la cumbre Trump-Xi. Taiwán no fue informado. Secretario de la Marina lo confirmó el 27 mayo. <a href='https://foreignpolicy.com/2026/05/26/taiwan-china-us-arms-sales-package-trump-xi/'>FP</a> · <a href='https://www.washingtonpost.com/national-security/2026/05/23/us-pauses-14-billion-taiwan-arms-sale-after-china-summit/'>WP</a>" },
    { label: "🔍 Segunda derivada", value: "El modelo 'seguridad como mercancía' puede extenderse: Corea del Sur, Japón, países bálticos. Si Taiwán puede ser usada como ficha, ¿ningún aliado está seguro? Este es el vídeo: el fin del orden de seguridad americano tal como lo conocíamos." },
    { label: "❓ Gran pregunta", value: "¿Qué precio puede poner Trump a la seguridad de un aliado — y qué pasa cuando todos los aliados lo saben?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — VP cubrió Trump y OTAN (6 mayo), pero no este ángulo de Taiwan. El patrón de 'aliados como fichas' es nuevo.</span>" }
  ],
  sources: [
    { headline: "U.S. Halts Taiwan Arms Package as Trump Courts China", medium: "Foreign Policy", date: "26 MAY 2026", url: "https://foreignpolicy.com/2026/05/26/taiwan-china-us-arms-sales-package-trump-xi/", desc: "Para el análisis estratégico: qué incluye el paquete pausado y qué significa para la defensa real de Taiwán" },
    { headline: "U.S. pauses $14 billion Taiwan arms sale after China summit", medium: "Washington Post", date: "23 MAY 2026", url: "https://www.washingtonpost.com/national-security/2026/05/23/us-pauses-14-billion-taiwan-arms-sale-after-china-summit/", desc: "Exclusiva con los detalles del quid pro quo Trump-Xi y el proceso de la decisión" },
    { headline: "Taiwan frets as U.S. withholds weapons over China deal", medium: "Axios", date: "27 MAY 2026", url: "https://www.axios.com/2026/05/27/taiwan-weapons-trump-cao-pause", desc: "Para la reacción de Taipéi y el impacto en la relación bilateral — la perspectiva del 'abandonado'" }
  ]
},

/* ── P6: SUDÁN HAMBRUNA ── */
{
  id: "p6",
  golden: false,
  number: "PROPUESTA #6",
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
  tesis: "Sudán tiene el país con más hambre del mundo, la mayor crisis de desplazados del planeta, y una guerra civil de 25 meses. Y casi nadie habla de ello porque no hay petróleo occidental en juego ni refugiados llegando a Europa. Esta invisibilidad es la tesis: ¿por qué el mundo elige a qué catástrofes prestar atención?",
  fields: [
    { label: "📰 La noticia", value: "UNICEF declaró hambruna oficial en Al Fasher y Kadugli. 19.5M en crisis de hambre aguda. $2.9B necesarios en 2026, solo 5.5% recibido. 9M desplazados — la mayor crisis del mundo. <a href='https://www.unicef.org/press-releases/famine-conditions-confirmed-sudans-al-fasher-and-kadugli-hunger-and-malnutrition'>UNICEF</a>" },
    { label: "🔍 Segunda derivada", value: "Sudán controla las aguas del Nilo Azul — el 80% del caudal que alimenta a Egipto y 100M de personas. Una Somalia en el nacimiento del Nilo no es solo una tragedia humanitaria: es una amenaza a la seguridad hídrica de todo el norte de África." },
    { label: "❓ Gran pregunta", value: "¿Por qué la peor catástrofe del siglo en el corazón del Nilo no aparece en las portadas mientras el mundo mira a Irán?" },
    { label: "🔎 ¿VP ya lo trató?", value: "<span style='color:var(--green)'>✅ NO — Ningún vídeo sobre la guerra civil de Sudán en el canal. Oportunidad limpia. Potencial comparable a vídeos de VP sobre Yemen o Siria que superaron el millón.</span>" }
  ],
  sources: [
    { headline: "Sudan becomes the world's hungriest country as famine spreads to two new areas of Darfur", medium: "Action Against Hunger", date: "MAY 2026", url: "https://www.actionagainsthunger.org/press-releases/sudan-becomes-the-worlds-hungriest-country-as-famine-spreads-to-two-new-areas-of-darfur/", desc: "Para datos de clasificación de hambruna, comparación histórica y descripción del colapso del sistema alimentario" },
    { headline: "Famine conditions confirmed in Sudan's Al Fasher and Kadugli", medium: "UNICEF", date: "MAY 2026", url: "https://www.unicef.org/press-releases/famine-conditions-confirmed-sudans-al-fasher-and-kadugli-hunger-and-malnutrition", desc: "Declaración oficial de hambruna — fuente primaria para las cifras de malnutrición infantil severa" },
    { headline: "Sudan enters fourth year of war: 'humiliated, broken, powerless'", medium: "NPR", date: "15 ABR 2026", url: "https://www.npr.org/2026/04/15/nx-s1-5781032/sudan-darfur-war-genocide-famine", desc: "Para el contexto narrativo de la guerra civil: las dos facciones, el colapso sanitario y la falta de atención internacional" }
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
  tesis: "La paradoja del rearme europeo: Europa ha comprometido más dinero en defensa que en cualquier momento desde la Guerra Fría, pero sigue siendo tecnológicamente dependiente de EEUU para munición, cohetes y sistemas de mando. La EU-Ukraine Drone Alliance es el primer intento de solucionarlo — pero llega 30 años tarde.",
  fields: [
    { label: "📰 La noticia", value: "La Comisión Europea lanzó la EU-Ukraine Drone Alliance el 5 de mayo. Busca miembros fundadores entre empresas de defensa europeas. Objetivo: operativa en 2026, 'muro de drones' continental. <a href='https://kyivindependent.com/european-commission-opens-call-for-proposals-to-join-eu-ukraine-drone-alliance/'>Kyiv Independent</a>" },
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
  { tema:"Colombia vota", subtema:"Elecciones 31 mayo · Patrón Latam", viral:97, depth:92, timing:99, fit:95, verdCls:"verd-y", verdText:"✅ PRIORITARIO" },
  { tema:"Xi pena de muerte", subtema:"Ejército sin mando · Gap español", viral:75, depth:95, timing:82, fit:92, verdCls:"verd-y", verdText:"✅ PRIORITARIO" },
  { tema:"Mali ministro muerto", subtema:"Colapso del Sahel · Wagner fracasa", viral:70, depth:90, timing:95, fit:90, verdCls:"verd-y", verdText:"✅ PUBLICAR" },
  { tema:"Irán deal", subtema:"Qué cede EEUU · Crudo ↓5%", viral:90, depth:88, timing:72, fit:80, verdCls:"verd-w", verdText:"👁️ VIGILAR (VP 26may)" },
  { tema:"Taiwán $14B pausa", subtema:"Abandono suave · Mercanización seguridad", viral:78, depth:90, timing:80, fit:88, verdCls:"verd-y", verdText:"✅ PUBLICAR" },
  { tema:"Sudán hambruna", subtema:"Peor catástrofe · Nilo en riesgo", viral:45, depth:95, timing:75, fit:90, verdCls:"verd-y", verdText:"✅ PUBLICAR" },
  { tema:"Europa drones", subtema:"Rearme sin capacidad · Paradoja", viral:58, depth:82, timing:65, fit:78, verdCls:"verd-w", verdText:"👁️ SEMANA QUE VIENE" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR — temas emergentes
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    title: "🇻🇪 Venezuela: el 'petro-protectorado' post-Maduro",
    body: "EEUU completó la primera venta de $500M de crudo venezolano bajo supervisión del Tesoro. Modelo inédito: Washington controla los ingresos, Delcy Rodriguez la política interior. Si el deal de $2B avanza, hay vídeo sobre la nueva soberanía limitada latinoamericana.",
    trigger: "Cierre del deal completo de $2B o crisis política en el reparto del crudo",
    sourceText: "Al Jazeera: Venezuela after Maduro",
    sourceUrl: "https://www.aljazeera.com/news/2026/1/5/venezuela-after-maduro-oil-power-and-the-limits-of-intervention"
  },
  {
    title: "🇸🇦 Arabia Saudí: ¿normalización con Israel post-Irán deal?",
    body: "Si el deal Irán-EEUU se firma, Arabia Saudí puede acelerar la normalización con Israel (Abraham Accords 2.0). MBS ha indicado en privado que esperaba el fin del conflicto iraní para avanzar.",
    trigger: "Firma formal del MOU de 60 días + declaración saudí de apertura a normalización",
    sourceText: "FT: Saudi-Israel normalization tracker",
    sourceUrl: "https://www.ft.com/content/saudi-israel-normalization"
  },
  {
    title: "🇵🇭 Filipinas: choque naval con China en el Mar del Sur",
    body: "El número de incidentes entre la guardia costera filipina y buques chinos aumentó un 40% en mayo. Manila ha activado el MDT con EEUU. Shangri-La puede escalar el lenguaje oficial.",
    trigger: "Primer herido o hundimiento de embarcación filipina en zona disputada",
    sourceText: "SCMP: South China Sea incidents tracker",
    sourceUrl: "https://www.scmp.com/news/china/military"
  },
  {
    title: "🇧🇷 Brasil: Lula en el hospital y vacío de poder regional",
    body: "Lula fue hospitalizado el 27 de mayo por problemas cardíacos. Si la hospitalización se extiende, genera vacío de liderazgo en el mayor país de Latinoamérica, afectando a las negociaciones regionales.",
    trigger: "Hospitalización superior a 10 días o delegación formal de poderes",
    sourceText: "Folha de S.Paulo: salud de Lula",
    sourceUrl: "https://www.folha.uol.com.br"
  },
  {
    title: "💶 BCE y tipos de interés: decisión de junio tras la caída del petróleo",
    body: "El desplome del Brent a $92 alivia la presión inflacionaria europea. El BCE se reúne el 12 junio. Un crudo más barato más gasto en defensa redefine el margen de maniobra monetario europeo.",
    trigger: "Brent vuelve a superar $100 sostenido o BCE sorprende con su decisión de junio",
    sourceText: "ECB monetary policy decisions",
    sourceUrl: "https://www.ecb.europa.eu/press/pr/activities/mopo/html/index.en.html"
  }
]

}; // end VP_DATA
