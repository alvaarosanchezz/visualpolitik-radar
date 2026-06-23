/* ═══════════════════════════════════════════════════════════════
   RADAR EDITORIAL VP · 23 JUNIO 2026 · v8.2
   Dashboard de inteligencia editorial — VisualPolitik
   Noticias simplificadas + 8 propuestas profundas (5 comp + 3 oportunidad)
═══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-23",
  dateLabel: "23 JUNIO 2026",
  brisbane: "BAJO DEMANDA",
  brent: "$77.50",
  brentChange: "↕ Ormuz disputado (12 buques vs 35) · Roadmap 60 días Suiza · Crimea sin gasolina · Starmer dimite"
},

/* ═══ TICKER ═══ */
ticker: [
  { cls:"t-red",    text:"🔴 STARMER DIMITE — UK tendrá su <strong>7º PM en 10 años</strong> · Andy Burnham favorito · Reform UK presiona · BREAKING HOY" },
  { cls:"t-gold",   text:"🇮🇷 IRÁN-EEUU: <strong>'roadmap' de 60 días</strong> acordado en Suiza · Vance + Ghalibaf · Célula desconflicción Ormuz · HOY MADRUGADA" },
  { cls:"t-red",    text:"🇨🇳 CHINA <strong>sanciona 10 empresas militares EEUU</strong> · MP Materials + USA Rare Earth bloqueadas · Lockheed/Raytheon/General Dynamics afectadas · HOY" },
  { cls:"t-orange", text:"🇨🇴 COLOMBIA: De la Espriella <strong>(El Tigre) GANA con 49.7%</strong> · 5º dominó Trump · VP publicó hoy 106K/8h · Candidato más votado historia Colombia" },
  { cls:"t-red",    text:"⛽ CRIMEA <strong>SIN GASOLINA</strong> — Aksyonov suspende ventas civiles · Ataques a depósitos Krasnodar · Zelenskyy: 'sanciones de largo alcance'" },
  { cls:"t-orange", text:"💀 ALAN GREENSPAN <strong>muere a los 100</strong> · 19 años como chairman Fed · 4 presidentes · Arquitecto economía burbujas · Parkinson" },
  { cls:"t-red",    text:"🌡️ EUROPA <strong>45°C en junio</strong> — Francia alerta roja · UK rompe récord junio (38°C) · Blackouts Turín · 14-18°C por encima normal" },
  { cls:"t-orange", text:"📊 BRENT <strong>~$77.5/barril</strong> — Ormuz disputado: 12 buques domingo vs 35 día anterior · Ni abierto ni cerrado" },
  { cls:"t-gold",   text:"🏆 VP: Europa Inmigración <strong>551K/5d ⭐ HIT</strong> · G2 Cubano <strong>388K/6d ⭐ HIT</strong> · Colombia 106K/8h" }
],

/* ═══ HERO ═══ */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>CRIMEA SIN GASOLINA — LA GUERRA QUE SE GANA SIN AVANZAR:</span> Aksyonov suspende ventas de combustible a civiles (21 JUN). Ucrania destruye depósitos con drones de $50K. <span class='hl-red'>CONVERGENCIA TRIPLE: canal nicho 698K/3d (3.5x) + canal internacional 1.5M/9d + VP propio 459K.</span> Ángulo NUEVO: guerra logística, no frente."
  },
  {
    label: "🎯 Oportunidad exclusiva",
    content: "<span class='hl'>CHINA SANCIONA TIERRAS RARAS DEFENSA EEUU (HOY):</span> MP Materials y USA Rare Earth bloqueadas — las únicas que extraen tierras raras en suelo americano. <span class='hl-red'>Sin tierras raras no hay F-35, no hay misiles guiados, no hay defensa antimisiles.</span> NADIE en español lo ha conectado. Gap total."
  },
  {
    label: "📊 Señales de competencia (15+ canales)",
    content: "Moscú pánico <span class='hl-red'>698K/3d (3.5x)</span> · Trump deal <span class='hl-red'>464K/3d (4.64x)</span> · US-Israel divorce <span class='hl-red'>290K/4d (2.9x)</span> · UK Marc Vidal <span class='hl-red'>260K/3d (2.6x)</span> · Derecha Latam <span class='hl-red'>106K/5h</span> · VP Europa Inmigración <span class='hl'>551K ⭐ HIT</span>"
  }
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — FORMATO SIMPLIFICADO
   Solo titular + breve descripción + 1 link premium
   80-85% de HOY · Fuentes: WSJ, NYT, FT, Bloomberg, Reuters
════════════════════════════════════════════════════════════ */
news: [

/* ── N1: STARMER DIMITE ── */
{
  id: "n1",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-red", text:"🔴 BREAKING" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Official_portrait_of_Keir_Starmer.jpg?width=800",
  imageAlt: "Keir Starmer — dimite como primer ministro británico",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg?width=800",
  imageCredit: "UK Parliament", imageSource: "Wikimedia Commons",
  title: "STARMER DIMITE — Reino Unido tendrá su 7º primer ministro en 10 años",
  pills: ["23 JUN dimisión", "Andy Burnham favorito", "Reform UK presiona"],
  why: "Crisis de gobernabilidad británica: 7 PMs en una década. Conecta con propuesta P4.",
  viralPct: 85, viralCls: "viral-high",
  viralSources: "NPR · CNN · BBC",
  detail: {
    summary: "Keir Starmer anuncia su dimisión tras rebelión interna del Partido Laborista. Andy Burnham, ex-alcalde de Manchester, es el favorito para sucederle. Sería el 7º PM en 10 años.",
    context: "Reform UK (extrema derecha) creció hasta amenazar electoralmente al laborismo. Starmer no pudo contener las divisiones internas.",
    vp: "Conecta directamente con propuesta P4: ¿por qué UK ya no puede mantener un líder?",
    sources: [
      { headline:"Keir Starmer has resigned, paving way for a 7th UK PM in 10 years", medium:"NPR", date:"2026-06-23", url:"https://www.npr.org/2026/06/22/nx-s1-5866231/keir-starmer-resigns", desc:"Cobertura completa dimisión" }
    ],
    verification: "Verificado: NPR, CNN, NBC, Al Jazeera (23 JUN 2026)."
  }
},

/* ── N2: IRÁN-EEUU ROADMAP ── */
{
  id: "n2",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-orange", text:"⚡ ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=800",
  imageAlt: "Estrecho de Ormuz — mapa estratégico",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=800",
  imageCredit: "NASA", imageSource: "Wikimedia Commons",
  title: "IRÁN-EEUU acuerdan 'roadmap' de 60 días en Suiza — Vance negocia directamente",
  pills: ["23 JUN madrugada", "Roadmap 60 días", "Canal desconflicción Ormuz", "Vance + Ghalibaf"],
  why: "Primera negociación directa de alto nivel. Línea de comunicación para evitar incidentes en Ormuz. Conecta con propuestas P2 y P3.",
  viralPct: 80, viralCls: "viral-high",
  viralSources: "NPR · PBS · Al Jazeera",
  detail: {
    summary: "Las negociaciones EEUU-Irán en Lucerna (Suiza) concluyeron la madrugada del lunes con un 'roadmap' de 60 días para un acuerdo final. Se establece línea de comunicación para evitar incidentes en Ormuz y una 'célula de desconflicción' con Líbano.",
    context: "Vance, Kushner y Witkoff por EEUU. Ghalibaf por Irán. Pakistán y Qatar como mediadores.",
    vp: "Actualización CLAVE para guiones en marcha sobre Irán. El roadmap es el siguiente capítulo.",
    sources: [
      { headline:"The U.S. and Iran agree to a 'road map' for a final deal", medium:"NPR", date:"2026-06-23", url:"https://www.npr.org/2026/06/21/g-s1-129222/us-iran-deal-lebanon-israel-strait-hormuz-jd-vance", desc:"Detalles roadmap Suiza" }
    ],
    verification: "Verificado: NPR, PBS, CNN, Al Jazeera (23 JUN 2026)."
  }
},

/* ── N3: CHINA SANCIONA DEFENSA EEUU ── */
{
  id: "n3",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-blue", text:"🇨🇳 ASIA-PACÍFICO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Pentagon_January_2008.jpg?width=800",
  imageAlt: "El Pentágono — sede del Departamento de Defensa de EEUU",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Pentagon_satellite_image.jpg?width=800",
  imageCredit: "DoD", imageSource: "Wikimedia Commons",
  title: "CHINA sanciona 10 empresas militares EEUU y bloquea compras de 46 subsidiarias de Lockheed, Raytheon y General Dynamics",
  pills: ["23 JUN", "MP Materials sancionada", "Tierras raras bloqueadas", "Dual-use exports banned"],
  why: "China responde al bloqueo tech americano atacando la cadena de suministro militar. Conecta con propuesta P6.",
  viralPct: 72, viralCls: "viral-medium",
  viralSources: "Washington Post · ABC News · Newsweek",
  detail: {
    summary: "China bloquea exportaciones dual-use a 10 empresas militares EEUU (incluidas MP Materials y USA Rare Earth — las que extraen tierras raras en suelo americano) y prohíbe compras gubernamentales de 46 subsidiarias de Lockheed Martin, Raytheon y General Dynamics.",
    context: "Respuesta directa al bloqueo de EEUU a empresas tech chinas en contratos de defensa.",
    vp: "Conecta directamente con propuesta P6: China ataca donde más duele — las tierras raras.",
    sources: [
      { headline:"China Hits Back at US Sanctions on Tech Giants", medium:"Washington Post", date:"2026-06-22", url:"https://www.washingtonpost.com/business/2026/06/22/china-us-sanctions-military-defense-tech-dualuse/78e3aa90-6dee-11f1-8730-e7fd0e2a6404_story.html", desc:"Detalle sanciones chinas" }
    ],
    verification: "Verificado: WaPo, ABC, US News, Newsweek (22-23 JUN 2026)."
  }
},

/* ── N4: COLOMBIA EL TIGRE GANA ── */
{
  id: "n4",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-green", text:"🌎 LATAM" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_de_Nari%C3%B1o.jpg?width=800",
  imageAlt: "Casa de Nariño — sede presidencial de Colombia",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_de_Nari%C3%B1o.jpg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "Dominio público",
  title: "COLOMBIA: De la Espriella ('El Tigre') gana con 49.7% — candidato más votado de la historia colombiana",
  pills: ["21 JUN segunda vuelta", "49.7% vs 48.7%", "Respaldado por Trump", "5º giro a la derecha en Latam"],
  why: "VP ACABA de publicar video sobre De la Espriella (106K/8h). Nuevo dato para seguimiento. Conecta con propuesta P5.",
  viralPct: 70, viralCls: "viral-medium",
  viralSources: "NPR · CNN · Al Jazeera",
  detail: {
    summary: "Abelardo de la Espriella lidera con 49.7% frente a Iván Cepeda (48.7%). 12.9M votos = récord histórico. Margen estrecho, conteo manual pendiente. Toma de posesión: 7 agosto.",
    context: "Respaldado por Trump. Promete mano dura en seguridad. 5º país latinoamericano en girar a la derecha.",
    vp: "VP publicó video HOY sobre De la Espriella (106K/8h). Este resultado confirma la tesis. Seguimiento directo.",
    sources: [
      { headline:"Colombia Election: Right-wing De la Espriella wins", medium:"NPR", date:"2026-06-23", url:"https://www.npr.org/2026/06/21/nx-s1-5865676/delaespriella-colombia-election", desc:"Resultados electorales Colombia" }
    ],
    verification: "Verificado: NPR, CNN, Al Jazeera, CNBC (21-23 JUN 2026)."
  }
},

/* ── N5: CRIMEA SIN GASOLINA ── */
{
  id: "n5",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-blue", text:"🇺🇦 UCRANIA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crimea_republic_map.png?width=800",
  imageAlt: "Puente de Crimea — infraestructura clave amenazada",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Crimea_republic_map.png?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "Dominio público",
  title: "CRIMEA suspende venta de gasolina a civiles — peor crisis energética desde la anexión de 2014",
  pills: ["21 JUN suspensión", "4 muertos, 28 heridos", "Ataques a depósitos Krasnodar", "Zelenskyy: sanciones de largo alcance"],
  why: "Señal de convergencia MÁXIMA: competencia 698K/3d. Conecta directamente con propuesta P1 (GOLDEN).",
  viralPct: 88, viralCls: "viral-high",
  viralSources: "NPR · Washington Post · Euronews",
  detail: {
    summary: "Aksyonov (jefe Crimea) suspendió venta de gasolina tras ataques ucranianos a depósitos. Zelenskyy confirma objetivos: depósito petróleo Crimea + instalación transporte crudo Krasnodar. Ya estaba restringido a 20 litros/semana con cupones.",
    context: "La peor crisis energética en Crimea desde 2014. Ucrania ataca sistemáticamente la logística rusa.",
    vp: "TEMA DORADO del radar. Conecta con P1: la guerra que se gana sin avanzar.",
    sources: [
      { headline:"Ukrainian attacks prompt Russian-held Crimea to halt civilian gasoline sales", medium:"NPR", date:"2026-06-21", url:"https://www.npr.org/2026/06/21/g-s1-129200/ukrainian-attacks-russia-crimea-halt-gas-sales", desc:"Crisis combustible Crimea" }
    ],
    verification: "Verificado: NPR, WaPo, Euronews, Rigzone (21-22 JUN 2026)."
  }
},

/* ── N6: GREENSPAN MUERE ── */
{
  id: "n6",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-purple", text:"💰 ECONOMÍA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alan_Greenspan_color_photo_portrait.jpg?width=800",
  imageAlt: "Alan Greenspan — expresidente de la Reserva Federal",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg?width=800",
  imageCredit: "Federal Reserve", imageSource: "Wikimedia Commons",
  title: "ALAN GREENSPAN muere a los 100 — el hombre que dirigió la Fed bajo 4 presidentes y diseñó la economía moderna",
  pills: ["22 JUN fallecimiento", "1987-2006 como chairman", "Burbuja dot-com", "Raíces crisis 2008"],
  why: "Su legado monetario sigue definiendo la economía mundial. Conecta con propuesta P7.",
  viralPct: 60, viralCls: "viral-medium",
  viralSources: "CNBC · NPR · CNN",
  detail: {
    summary: "Greenspan falleció a los 100 años por complicaciones de Parkinson. Presidió la Fed durante 19 años (1987-2006), bajo Reagan, Bush padre, Clinton y Bush hijo. Su política de tipos bajos alimentó la burbuja inmobiliaria que explotó en 2008.",
    context: "Su muerte coincide con un momento de debate global sobre política monetaria y tipos de interés.",
    vp: "Conecta con P7: el legado de Greenspan como arquitecto de la economía de las burbujas.",
    sources: [
      { headline:"Alan Greenspan, former chairman of the Fed, dies at age 100", medium:"CNBC", date:"2026-06-22", url:"https://www.cnbc.com/2026/06/22/alan-greenspan-former-chairman-of-the-fed-dies-at-age-100.html", desc:"Obituario completo" }
    ],
    verification: "Verificado: CNBC, NPR, CNN, Al Jazeera, CBS (22 JUN 2026)."
  }
},

/* ── N7: EUROPA OLA DE CALOR ── */
{
  id: "n7",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-blue", text:"🇪🇺 EUROPA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Thermometer_%28PSF%29.png?width=800",
  imageAlt: "Termómetro — ola de calor récord en Europa",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Europe_satellite_globe.jpg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "Dominio público",
  title: "EUROPA: 45°C en Francia, UK rompe récord de junio (38°C), blackouts en Turín — 49 departamentos en alerta roja",
  pills: ["20-23 JUN", "14-18°C por encima normal", "Incendios Iberia", "Cientos de escuelas cerradas"],
  why: "La infraestructura europea no fue diseñada para estas temperaturas. Conecta con propuesta P8.",
  viralPct: 55, viralCls: "viral-medium",
  viralSources: "Bloomberg · Washington Post · Severe Weather EU",
  detail: {
    summary: "Domo de calor estancado sobre Europa occidental. España/Portugal: 42.7°C. Francia: 49/96 departamentos en alerta roja máxima. UK: 38°C = récord junio absoluto (superando 35.6°C de 1976). Blackouts en Turín.",
    context: "La ola de calor más temprana e intensa de la historia reciente europea. Aire sahariano + domo de alta presión.",
    vp: "Conecta con P8: la infraestructura que no aguanta y la crisis energética que el calor revela.",
    sources: [
      { headline:"Europe Heat Wave Sends Power Prices Soaring as Alerts Spread", medium:"Bloomberg", date:"2026-06-22", url:"https://www.bloomberg.com/news/articles/2026-06-22/europe-s-heat-wave-intensifies-with-france-on-red-alert", desc:"Precios energía + alertas" }
    ],
    verification: "Verificado: Bloomberg, WaPo, Severe Weather EU (22-23 JUN 2026)."
  }
},

/* ── N8: ISRAEL-LÍBANO TENSIÓN ── */
{
  id: "n8",
  tags: [{ cls:"tag-red", text:"🔴 AYER" }, { cls:"tag-orange", text:"⚡ ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beirut_skyline.jpg?width=800",
  imageAlt: "Beirut — bombardeos israelíes durante alto el fuego",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Beirut_skyline.jpg?width=800",
  imageCredit: "Wikimedia Commons", imageSource: "Dominio público",
  title: "ISRAEL bombardea Líbano durante alto el fuego — Irán cita violaciones para cerrar Ormuz",
  pills: ["20-22 JUN", "12+ muertos Líbano", "Irán cierra Ormuz como represalia", "EEUU no defiende a Israel"],
  why: "Secuencia de ruptura EEUU-Israel. Conecta con propuesta P3.",
  viralPct: 75, viralCls: "viral-high",
  viralSources: "NBC · CNN · Al Jazeera",
  detail: {
    summary: "Israel bombardeó Líbano 72 horas después del alto el fuego firmado en Évian. Irán citó estas violaciones para cerrar Ormuz de nuevo. CENTCOM dice que 55 barcos transitaron, contradeciendo el cierre iraní.",
    context: "La secuencia revela fisura EEUU-Israel: Trump no defendió a Netanyahu tras los bombardeos.",
    vp: "Actualización para guiones Irán en marcha. Conecta con P3 (divorcio EEUU-Israel).",
    sources: [
      { headline:"Israel continues Lebanon strikes after fresh ceasefire", medium:"NBC News", date:"2026-06-22", url:"https://www.nbcnews.com/world/iran/israel-continues-lebanon-strikes-fresh-ceasefire-rcna350952", desc:"Bombardeos post-alto el fuego" }
    ],
    verification: "Verificado: NBC, CNN, Al Jazeera (20-22 JUN 2026)."
  }
},

/* ── N9: ORMUZ DISPUTADO ── */
{
  id: "n9",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-purple", text:"💰 ENERGÍA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=800",
  imageAlt: "Estrecho de Ormuz — tráfico marítimo disputado",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=800",
  imageCredit: "US Navy", imageSource: "Wikimedia Commons",
  title: "ORMUZ DISPUTADO: 12 buques el domingo vs 35 el día anterior — ni abierto ni cerrado",
  pills: ["22-23 JUN datos", "Brent ~$77.5/barril", "20% petróleo mundial", "Célula desconflicción creada"],
  why: "El estrecho está en un limbo operativo. La incertidumbre afecta precios y rutas globales.",
  viralPct: 65, viralCls: "viral-medium",
  viralSources: "Reuters · Bloomberg · PBS",
  detail: {
    summary: "El tráfico por Ormuz cayó de 35 buques/día a 12 el domingo. Ni Irán confirma cierre total ni EEUU lo niega completamente. Se ha creado una 'célula de desconflicción' en las negociaciones de Suiza.",
    context: "Ormuz = 20% del petróleo mundial. La ambigüedad es un arma de negociación para ambos bandos.",
    vp: "Dato clave para contextualizar cualquier guion sobre Irán/EEUU.",
    sources: [
      { headline:"U.S. and Iran to talk in Switzerland as Tehran says it closed Hormuz", medium:"PBS", date:"2026-06-22", url:"https://www.pbs.org/newshour/world/u-s-and-iran-to-talk-sunday-in-switzerland-as-tehran-says-it-closed-strait-of-hormuz-again", desc:"Estado Ormuz + negociaciones" }
    ],
    verification: "Verificado: PBS, CNN, Al Jazeera (22-23 JUN 2026)."
  }
},

/* ── N10: VP ÚLTIMA HORA — COLOMBIA VIDEO ── */
{
  id: "n10",
  tags: [{ cls:"tag-gold", text:"⭐ HOY" }, { cls:"tag-green", text:"📺 VP CANAL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/YouTube_full-color_icon_(2017).svg?width=800",
  imageAlt: "VisualPolitik — último video publicado",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/YouTube_full-color_icon_(2017).svg?width=800",
  imageCredit: "YouTube", imageSource: "Google",
  title: "VP PUBLICÓ HOY: Colombia / De la Espriella — 106K views en 8 horas. Rendimiento fuerte.",
  pills: ["23 JUN publicación", "106K/8h", "Por encima de media", "Tema conecta con resultados electorales"],
  why: "Seguimiento directo del canal. El video se publicó JUSTO cuando se conocieron los resultados. Timing perfecto.",
  viralPct: 70, viralCls: "viral-medium",
  viralSources: "YouTube/VisualPolitik",
  detail: {
    summary: "VP publicó hoy su video sobre De la Espriella y las elecciones colombianas. 106K views en 8 horas = por encima de la media reciente. El timing coincide con los resultados electorales del domingo.",
    context: "Este es el seguimiento del canal. El radar debe informar del rendimiento de los videos propios.",
    vp: "Rendimiento inicial fuerte. Si mantiene ritmo, puede alcanzar 300K+.",
    sources: [
      { headline:"VisualPolitik — Colombia / De la Espriella", medium:"YouTube", date:"2026-06-23", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"Video publicado hoy" }
    ],
    verification: "Verificado: YouTube (23 JUN 2026). Views en tiempo real."
  }
}

],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 8 temas: 5 COMPETENCIA + 3 VENTANA OPORTUNIDAD
   Auditoría de Oportunidad v8.2 — 9 pasos en orden
════════════════════════════════════════════════════════════ */
proposals: [

/* ═══════════════════════════════════════════════════════════
   P1 GOLDEN — CRIMEA SIN GASOLINA: LA GUERRA LOGÍSTICA
   Competencia: Solo Fonseca 698K/3d = 3.5x · CONVERGENCIA MÁXIMA
═══════════════════════════════════════════════════════════ */
{
  number: "P1",
  golden: true,
  title: "CRIMEA SIN GASOLINA: cómo Ucrania descubrió que puede ganar la guerra sin avanzar un solo metro — la estrategia que está asfixiando a Putin",
  subtitle: "Canal nicho 698K/3d (3.5x!!!) + Canal internacional 1.5M/9d · Crimea suspende gasolina civil 21 JUN · CONVERGENCIA TRIPLE",
  flag: "ua",
  tags: [
    { cls:"tag-red", text:"🔴 698K/3d (3.5x)" },
    { cls:"tag-green", text:"✅ ATACAR HOY" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"RUSIA / UCRANIA" }
  ],
  potCls: "pot-top",
  potText: "POTENCIAL 600K-1M",
  chips: [
    { cls:"chip-gold", text:"🏆 CONVERGENCIA: 698K/3d (3.5x) + 1.5M/9d" },
    { cls:"chip-green", text:"⚡ Evento 21 JUN: Crimea sin gasolina" },
    { cls:"chip-blue", text:"🔒 Retención: FUERTE" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: ALTA" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Crimea_republic_map.png?width=1200",
  bannerAlt: "Mapa de Crimea — la península atrapada sin combustible",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Crimea_republic_map.png?width=1200",

  tesis: "Crimea, la joya que Putin anexionó en 2014 para demostrar que Rusia era una gran potencia, acaba de suspender la venta de gasolina a civiles. No es un embargo — es que Ucrania ha destruido sistemáticamente los depósitos de combustible que alimentan la península. El dato que nadie está conectando: Crimea es una trampa geográfica. Todo llega por el puente de Kerch o por mar. Ucrania está cortando ambas rutas con drones de $50.000 que destruyen infraestructura de cientos de millones. Los avances rusos en Donetsk se han frenado casi por completo porque cada litro que no llega a Crimea es un tanque que no avanza. CONVERGENCIA TRIPLE: un canal castellanoparlante del nicho (1.32M subs, ~200K media) publicó hace 3 días un video sobre la crisis rusa y lleva 698K views = 3.5x su media habitual. Un canal internacional (7.93M) lleva 1.5M/9d con 'Why Russia is Suddenly Losing'. VP propio 'Ucrania victoria posible' alcanzó 459K. La audiencia QUIERE este ángulo. Pero NADIE ha contado la historia de la LOGÍSTICA — cómo se gana una guerra destruyendo gasolineras, no tomando trincheras. Es la diferencia entre contar 'Rusia pierde' (que ya hicieron) y explicar POR QUÉ pierde y qué significa para el futuro de la guerra. Ese es el video de VP.",

  fields: [
    { label:"La noticia", value:"21 de junio: Sergey Aksyonov, jefe de Crimea designado por el Kremlin, suspende la venta de gasolina a civiles en toda la península tras ataques ucranianos nocturnos que mataron 4 personas y hirieron 28. No es una restricción parcial — es una suspensión total de ventas (efectivo, tarjeta y cupones). Zelenskyy confirmó que los objetivos incluyen depósitos de petróleo en Crimea y una instalación de transporte de crudo en la región de Krasnodar. Ya a finales de mayo, Crimea había restringido las ventas a 20 litros por vehículo por semana mediante cupones prepagados, que se agotaban instantáneamente. Esto es un colapso logístico progresivo. (NPR, Washington Post, Euronews, 21-22 JUN)" },
    { label:"Segunda derivada", value:"Ucrania descubrió la versión moderna de la estrategia aliada de WWII contra Alemania: no necesitas conquistar territorio si puedes destruir la capacidad del enemigo para mover combustible. Crimea es una península — geográficamente es una trampa perfecta para Rusia. Todo lo que necesita (combustible, munición, alimentos, repuestos) llega por exactamente dos rutas: el puente de Kerch y las rutas marítimas del Mar Negro. Ucrania está atacando ambas. El puente de Kerch ya fue dañado dos veces. Los depósitos costeros son objetivos fáciles para drones de largo alcance. Y cada litro de combustible que Crimea no recibe es un tanque ruso que no avanza en Donetsk, un convoy que no se mueve, un generador que se apaga. Putin no puede defender Crimea sin exponer sus defensas antiaéreas, y no puede reabastecer Crimea sin exponer sus rutas de suministro. Es el dilema perfecto — y Ucrania lo sabe. Zelenskyy lo llama 'sanciones de largo alcance': Ucrania está haciendo con drones lo que Occidente no pudo hacer con sanciones económicas." },
    { label:"Gran pregunta", value:"¿Puede una guerra moderna ganarse sin conquistar territorio — simplemente destruyendo la logística del enemigo hasta que su esfuerzo bélico colapse desde dentro?" },
    { label:"Señal de competencia", value:"CONVERGENCIA TRIPLE — la señal más fuerte del radar completo. (1) Canal castellanoparlante del nicho (1.32M subs, ~200K media): publicó hace 3 días un video sobre la crisis rusa que lleva 698K views = 3.5x su media habitual. Es su MEJOR video del mes por diferencia. (2) Canal internacional (7.93M subs, ~1M media): 'Why Russia is Suddenly Losing in Ukraine' — 1.5M/9d. (3) VP propio: 'Ucrania victoria posible' — 459K/6d (publicado hace 2 semanas). TRES fuentes independientes confirman demanda masiva. El enfoque de la competencia es descriptivo ('Rusia está perdiendo'). VP puede entrar con la segunda derivada específica: cómo se gana una guerra destruyendo gasolineras, no tomando trincheras. El evento de Crimea sin gasolina (21 JUN) es NUEVO — nadie lo ha convertido aún en el centro narrativo de un video. La ventana está completamente abierta." },
    { label:"Demanda en medios", value:"Cobertura ALTA y creciendo. NPR (21 JUN), Washington Post (21 JUN), Euronews (21 JUN), US News, CBC Canada, Rigzone (energía). El evento de Crimea sin gasolina acaba de entrar en el ciclo de medios — aún no ha llegado a WSJ/FT pero los medios de segunda línea lo cubren masivamente. CLAVE: Rigzone (medio especializado en energía) lo cubrió como crisis de suministro, lo que indica que el ángulo energético/logístico tiene tracción profesional." },
    { label:"Velocidad de agenda", value:"ACELERANDO. La suspensión de gasolina es del 21 JUN (hace 2 días). Los ataques a infraestructura energética rusa son DIARIOS. El tema 'Rusia perdiendo' lleva 2 semanas creciendo en todos los canales. Los medios premium están empezando a cubrirlo como 'crisis logística', no solo como 'avances frenados'. Este es el MOMENTO ÓPTIMO: el evento es lo suficientemente reciente para ser noticia, pero lo suficientemente profundo para ser análisis." },
    { label:"Historial VP", value:"VP Ucrania tiene historial FUERTE: 'Ucrania victoria posible' = 459K/6d (mayo 2026). 'Drones Ucrania' = temas que funcionan. Patrón confirmado: Ucrania + datos nuevos + ángulo fresco = 400K+ consistentemente. DIFERENCIA CRÍTICA: ningún video VP anterior se centró en la LOGÍSTICA y la CADENA DE SUMINISTRO como mecanismo de victoria. El ángulo es completamente nuevo. No es 'Ucrania avanza' (cubierto) ni 'Rusia pierde' (cubierto), sino 'cómo se gana una guerra SIN AVANZAR'." },
    { label:"Motor viral", value:"MECANISMO MÚLTIPLE: (1) GUERRA — el motor viral más potente que existe para VP. (2) PARADOJA — Rusia, el mayor productor de petróleo de Europa, no puede abastecer de gasolina a su propia joya territorial. (3) DAVID vs GOLIAT — drones de $50K destruyen infraestructura de cientos de millones. (4) MAPA — Crimea como península aislada = perfecto para visualización VP con mapas, rutas, puntos de ataque. (5) DATO IMPACTANTE — 1.035.000 bajas rusas, 3% de hombres en edad de combate. (6) CONSECUENCIA GLOBAL — si la estrategia logística funciona, cambia la doctrina militar del siglo XXI. (7) PARALELO HISTÓRICO — bombardeo aliado de refinerías alemanas en WWII. NO es hipótesis: la convergencia triple (698K + 1.5M + 459K) CONFIRMA demanda real." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Crimea, la península que Putin anexionó en 2014 para demostrar que Rusia era una gran potencia, acaba de quedarse sin gasolina.' Escalada: la trampa geográfica — todo llega por Kerch o por mar, Ucrania ataca ambas rutas. Los cupones de 20 litros, las colas, la suspensión total. Capa 2: los avances rusos se frenan porque la logística no puede seguirles el ritmo. 1.035.000 bajas. Giro: Zelenskyy lo llama 'sanciones de largo alcance' — Ucrania está haciendo con drones lo que Occidente no pudo con sanciones económicas. Cierre: ¿Puede una guerra ganarse sin avanzar? La respuesta está en Crimea: si destruyes la logística, el ejército se come a sí mismo." },
    { label:"Promesa cumplible", value:"El video promete explicar cómo Ucrania está ganando la guerra atacando la logística, no el frente. 100% DEMOSTRABLE: NPR (suspensión gasolina 21 JUN), Washington Post (ataques depósitos), datos de bajas (múltiples fuentes), geografía de Crimea (mapas verificables), historia del puente de Kerch. No es clickbait: Crimea REALMENTE se quedó sin gasolina. La tesis (guerra logística vs guerra territorial) tiene sustento en doctrina militar real." },
    { label:"Ventaja VP", value:"ALTA. VP es el canal que mejor convierte guerras en narrativas visuales con datos, mapas y segunda derivada. El ángulo logístico es ULTRA-VP: mapas de rutas de suministro, puente de Kerch con datos de tráfico, depósitos destruidos localizados, cadena de combustible visualizada. NADIE en el nicho español ha cubierto la 'guerra de la gasolina' específicamente. La competencia hizo 'Rusia pierde' (descriptivo). VP puede hacer 'CÓMO pierde y POR QUÉ importa' (analítico). El paralelo con WWII añade profundidad histórica que solo VP haría." },
    { label:"Caso para 800K/1M", value:"Convergencia TRIPLE confirmada: 698K/3d (3.5x) + 1.5M/9d + VP propio 459K. Evento nuevo (Crimea sin gasolina, 21 JUN). Ángulo fresco (logística, no frente — nadie lo ha hecho así). Paradoja viral (Rusia sin gasolina = irresistible). VP tiene audiencia probada para Ucrania (459K reciente). RIESGO: VP publicó video Ucrania hace 2 semanas — pero el evento de Crimea es NUEVO y el ángulo (guerra logística) es completamente diferente al anterior. RIESGO 2: si se publica demasiado tarde (>48h), pierde actualidad. MITIGACIÓN: publicar esta semana con título centrado en Crimea, no en 'Rusia pierde'. Si VP lo ejecuta como 'la guerra que se gana destruyendo gasolineras', es candidato real a 600K-1M." },
    { label:"Título mental", value:"Crimea se quedó sin gasolina: la estrategia de $50.000 con la que Ucrania está ganando la guerra sin avanzar un metro" },
    { label:"Qué investigar más", value:"(1) Estado actual del puente de Kerch: capacidad, daños, reparaciones. (2) Mapa de depósitos de combustible destruidos en Crimea y Krasnodar. (3) Tipos de drones usados y coste unitario. (4) Datos de avance/retroceso territorial últimas 4 semanas — correlación con ataques logísticos. (5) Sistema de cupones y racionamiento en Crimea — cómo funciona, quién tiene prioridad. (6) Rutas alternativas de suministro: hay alguna que no pase por Kerch o mar? (7) Paralelo con bombardeo aliado de refinerías Ploiești/Leuna en WWII. (8) Impacto en operaciones militares rusas en el frente sur." },
    { label:"Veredicto", value:"ATACAR HOY — convergencia triple máxima (la señal más fuerte que hemos visto en semanas), evento nuevo (21 JUN), ángulo fresco (guerra logística), paradoja viral irresistible (Rusia sin gasolina), audiencia probada (459K), ventaja VP alta. Publicar ESTA SEMANA." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/21/g-s1-129200/ukrainian-attacks-russia-crimea-halt-gas-sales", desc:"Crimea suspende venta gasolina tras ataques ucranianos (21 JUN)" },
    { medium:"Washington Post", url:"https://www.washingtonpost.com/business/2026/06/21/russia-ukraine-was-crimea-gas-fuel/d07af5fe-6d55-11f1-8730-e7fd0e2a6404_story.html", desc:"Crisis combustible Crimea — detalle ataques" },
    { medium:"Euronews", url:"https://www.euronews.com/my-europe/2026/06/21/russian-occupied-crimea-suspends-petrol-sales-amid-fuel-crisis", desc:"Suspensión ventas y racionamiento previo" },
    { medium:"Rigzone", url:"https://www.rigzone.com/news/wire/crimea_halts_fuel_sales_after_attacks_on_russian_refineries-22-jun-2026-183962-article/", desc:"Ataques a refinerías rusas — contexto energético" }
  ]
},

/* ═══════════════════════════════════════════════════════════
   P2 — LOS 14 PUNTOS DEL ACUERDO IRÁN
   Competencia: TLDR 464K/3d = 4.64x · MÁXIMO multiplicador
═══════════════════════════════════════════════════════════ */
{
  number: "P2",
  golden: false,
  title: "LOS 14 PUNTOS QUE NADIE HA LEÍDO: qué dice realmente el acuerdo Trump-Irán y por qué le dio la victoria a Teherán",
  subtitle: "TLDR 464K/3d (4.64x!!!) — MÁXIMO multiplicador · MoU 17 JUN · Ormuz cerrado 72h después · Roadmap 60 días acordado HOY",
  flag: "ir",
  tags: [
    { cls:"tag-red", text:"🔴 464K/3d (4.64x!!!)" },
    { cls:"tag-green", text:"✅ ATACAR HOY" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"IRÁN / EEUU" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🏆 TLDR: 464K/3d = 4.64x — MÁXIMO multiplicador" },
    { cls:"chip-green", text:"⚡ HOY: roadmap 60 días acordado en Suiza" },
    { cls:"chip-blue", text:"🔒 Retención: FUERTE" },
    { cls:"chip-orange", text:"⚠️ RIESGO: VP hizo Irán 3 veces esta semana" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/White_House_north_and_south_sides.jpg?width=1200",
  bannerAlt: "Donald Trump — el acuerdo con Irán que murió en 72 horas",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/White_House_north_and_south_sides.jpg?width=1200",

  tesis: "Trump firmó un MoU de 14 puntos con Irán el 17 de junio en Évian, vendiéndolo como 'el mejor acuerdo de la historia'. 72 horas después, Irán cerró el Estrecho de Ormuz citando bombardeos israelíes en Líbano. ESTA MADRUGADA (23 JUN), en Lucerna, Vance y Ghalibaf acordaron un 'roadmap' de 60 días — el acuerdo no está muerto, está zombi. TLDR Global cubrió esto como 'Trump's Deal is Worse Than Anyone Imagined' y lleva 464K/3d = 4.64x = el MAYOR multiplicador de todo el radar. NADIE en español ha analizado QUÉ dicen exactamente los 14 puntos, qué cedió EEUU y qué consiguió Irán a cambio de algo que ya tenía que hacer (reabrir Ormuz). La clave: como Israel NO era parte del acuerdo, cualquier acción israelí servía de excusa para romperlo — y eso era predecible. Trump necesitaba un 'deal' para su base. Irán necesitaba alivio de sanciones. Ninguno pensó en cumplirlo.",

  fields: [
    { label:"La noticia", value:"Secuencia completa: 17 JUN — Trump e Irán firman MoU de 14 puntos en G7 de Évian (fin hostilidades, reapertura Ormuz 60 días sin peajes, fin bloqueo naval, negociación nuclear, alivio sanciones). 18-19 JUN — Israel bombardea Líbano, matando 12+ personas. 20 JUN — Irán cierra Ormuz citando violaciones israelíes. 21 JUN — Vance viaja a Suiza. 23 JUN (ESTA MADRUGADA) — EEUU e Irán acuerdan 'roadmap' de 60 días + línea de comunicación para Ormuz + célula de desconflicción con Líbano. Pakistan y Qatar median. (NPR, PBS, CNN, Al Jazeera)" },
    { label:"Segunda derivada", value:"El acuerdo no fue una negociación diplomática — fue un teatro donde ambos bandos reclamaron victoria sabiendo que el otro la necesitaba más que la paz. Trump: necesitaba un 'deal' para presentar a su base antes de las midterms. Irán: necesitaba el fin de sanciones que llevan desde 2018 ahogando su economía. ¿Qué cedió cada uno? Irán cedió reabrir Ormuz — algo que YA tenía que hacer porque cerrar el estrecho le costaba más a Irán (que necesita exportar petróleo) que a EEUU. EEUU cedió alivio de sanciones, fin del bloqueo naval, y reconocimiento diplomático a un nivel que ni Obama consiguió con el JCPOA. La trampa: Israel no estaba en el acuerdo. Cualquier acción israelí servía como excusa para que Irán 'legítimamente' rompiera su parte. Y como Netanyahu NECESITABA que el acuerdo fracasara para justificar la guerra contra Hezbolá, la ruptura estaba garantizada antes de firmarse." },
    { label:"Gran pregunta", value:"¿Fue el acuerdo Trump-Irán una negociación real o un teatro diplomático donde ambos firmaron sabiendo que moriría en días — y quién ganó realmente el juego?" },
    { label:"Señal de competencia", value:"SEÑAL MÁXIMA (mayor multiplicador del radar). TLDR Global (1.13M subs, ~100K media): 'Trump's Deal is Worse Than Anyone Imagined' — 464K/3d = 4.64x su media habitual. Memorias de Pez (2.93M, ~40K media): publicó sobre el tema y lleva 2.35x. Solo Fonseca: 'Trump se retira de Irán' — 327K/5d. TRES canales con rendimiento anormal en el mismo tema. PERO: en español NADIE ha analizado los 14 puntos del MoU. Todos cubrieron 'qué pasó'. VP puede ser el primero en cubrir 'qué dice el acuerdo' — punto por punto." },
    { label:"Demanda en medios", value:"Cobertura MASIVA: NPR, PBS, NBC, CNN, Al Jazeera, CBS, CFR. El tema domina portadas hace una semana. HOY se añade nueva capa: el roadmap de 60 días acordado en Suiza. CFR: 'The G7's Alignment on Iran and Ukraine Is Deeply Fragile'. WSJ no tiene acceso verificable pero el tema es absolutamente premium." },
    { label:"Velocidad de agenda", value:"ACELERANDO CON NUEVA CAPA. El MoU se firmó el 17 JUN. Ormuz se cerró el 20 JUN. El roadmap se acordó ESTA MADRUGADA (23 JUN). La situación evoluciona cada 24 horas. Cada día hay un nuevo giro. Es el momento exacto para un análisis profundo que conecte todos los puntos." },
    { label:"Historial VP", value:"VP ha publicado 3 videos Irán ESTA SEMANA: Emiratos vs Irán (174K/2d), Petróleo barato (59K/3d — BAJO), Irán marca camino (171K/4d). HISTORIAL GENERAL: 'Acuerdo Irán claves' = 412K, 'Irán terror' = 363K, 'Plan Trump Irán' = 377K. PATRÓN: Irán + Trump + acuerdo/conflicto = 350K-400K consistentemente. RIESGO SERIO: Petróleo barato (59K) sugiere FATIGA de audiencia con Irán. Para que funcione, el ángulo DEBE ser radicalmente distinto (revelar los 14 puntos como escándalo, no como análisis más de Irán)." },
    { label:"Motor viral", value:"MECANISMO: (1) TRUMP — el personaje más polarizante y clicable de la geopolítica. (2) FRACASO/HUMILLACIÓN — schadenfreude político ('el peor acuerdo'). (3) REVELACIÓN — 'los 14 puntos que nadie te ha leído' = promesa de información exclusiva. (4) PARADOJA — firmó el acuerdo y 72h después ya estaba muerto. (5) DINERO — Ormuz = 20% petróleo mundial = impacto directo en tu bolsillo. (6) DEBATE — la audiencia se dividirá entre pro-Trump y anti-Trump. EVIDENCIA: TLDR 4.64x es la demanda real confirmada más fuerte." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Trump dijo que era el mejor acuerdo de la historia. 72 horas después, Irán cerró el Estrecho de Ormuz.' Escalada: los 14 puntos, uno por uno — qué cedió EEUU, qué consiguió Irán. La trampa de Israel. Giro: el acuerdo no está muerto — está zombi. Esta madrugada en Suiza, Vance y Ghalibaf acordaron un roadmap de 60 días. Cierre: ¿puede sobrevivir un acuerdo de paz que nadie diseñó para que funcionara?" },
    { label:"Promesa cumplible", value:"El video promete revelar qué dicen los 14 puntos del MoU y demostrar que el acuerdo benefició a Irán. DEMOSTRABLE: texto MoU disponible (NPR/PBS/Wikipedia), secuencia cronológica verificada (17→20→23 JUN), análisis CFR, datos Ormuz. El ángulo 'leer los 14 puntos' es una promesa concreta que se puede cumplir." },
    { label:"Ventaja VP", value:"MEDIA-ALTA. VP domina Irán narrativamente y tiene historial probado (350K-400K). El ángulo 'leer el acuerdo punto por punto' requiere análisis profundo = ventaja VP. PERO hay RIESGO de saturación (3 videos Irán esta semana) y el petróleo barato (59K) indica fatiga. La ventaja real es que NADIE en español ha abierto el MoU y lo ha analizado. Si el título se centra en TRUMP (no en Irán), puede capturar audiencia diferente." },
    { label:"Caso para 800K/1M", value:"TLDR 4.64x = la señal individual más fuerte de todo el radar. Tres canales confirman demanda. PERO VP lleva 3 videos Irán esta semana y el petróleo barato (59K) confirma fatiga parcial. Para llegar a 800K necesitaría: (1) título centrado en TRUMP/ACUERDO, no en 'Irán' (evitar fatiga), (2) ángulo de 'revelación' (los 14 puntos como escándalo), (3) timing inmediato mientras el roadmap de Suiza es noticia. Riesgo real: la audiencia VP pase de largo si percibe 'otro video de Irán'. Mitigación: cambiar el frame completamente." },
    { label:"Título mental", value:"Trump firmó 'el mejor acuerdo de la historia' — 72 horas después Irán cerró Ormuz y los 14 puntos revelan que Teherán ganó todo lo que quería" },
    { label:"Qué investigar más", value:"(1) Texto completo MoU 14 puntos — cada punto analizado. (2) Comparación con JCPOA de Obama 2015. (3) Qué obtiene Irán vs qué cede. (4) Rol de Vance en Suiza — qué se acordó exactamente. (5) Reacción de Israel al roadmap. (6) Precio petróleo pre/post acuerdo. (7) Posición Hezbolá post-alto el fuego. (8) ¿Puede el acuerdo sobrevivir sin Israel?" },
    { label:"Veredicto", value:"ATACAR HOY — señal 4.64x (máxima individual), demanda confirmada en 3 canales, ángulo 'revelar los 14 puntos' es exclusivo. ADVERTENCIA SERIA: VP lleva 3 videos Irán esta semana. El título DEBE ser radicalmente distinto para evitar fatiga. Recomendación: centrar en TRUMP/ACUERDO, no en IRÁN." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/21/g-s1-129222/us-iran-deal-lebanon-israel-strait-hormuz-jd-vance", desc:"Roadmap EEUU-Irán acordado en Suiza (23 JUN)" },
    { medium:"NPR", url:"https://www.npr.org/2026/06/15/nx-s1-5858590/us-iran-deal-updates", desc:"MoU EEUU-Irán: los 14 puntos originales" },
    { medium:"PBS", url:"https://www.pbs.org/newshour/world/u-s-and-iran-to-talk-sunday-in-switzerland-as-tehran-says-it-closed-strait-of-hormuz-again", desc:"Irán cierra Ormuz / negociaciones Suiza" },
    { medium:"CFR", url:"https://www.cfr.org/articles/the-g7s-alignment-on-iran-and-ukraine-is-deeply-fragile", desc:"G7 alignment is deeply fragile — análisis" }
  ]
},

/* ═══════════════════════════════════════════════════════════
   P3 — DIVORCIO EEUU-ISRAEL
   Competencia: TLDR 290K/4d = 2.9x · GAP TOTAL en español
═══════════════════════════════════════════════════════════ */
{
  number: "P3",
  golden: false,
  title: "TRUMP ELIGIÓ IRÁN: la semana que rompió la alianza más estable del mundo — y dejó a Netanyahu completamente solo",
  subtitle: "TLDR 290K/4d (2.9x) + CaspianReport 169K/7d · Netanyahu bombardea Líbano durante tregua · EEUU NO le defiende · GAP TOTAL en español",
  flag: "il",
  tags: [
    { cls:"tag-red", text:"🔴 290K/4d (2.9x)" },
    { cls:"tag-green", text:"✅ ATACAR HOY" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"EEUU / ISRAEL" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🏆 TLDR: 290K/4d (2.9x) + CaspianReport 169K" },
    { cls:"chip-green", text:"⚡ Secuencia 17-23 JUN: ruptura en tiempo real" },
    { cls:"chip-blue", text:"🔒 Retención: FUERTE" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: ALTA" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Knesset_Building_%28South_Side%29.JPG?width=1200",
  bannerAlt: "Benjamin Netanyahu — aislado tras el acuerdo Trump-Irán",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Knesset_Building_%28South_Side%29.JPG?width=1200",

  tesis: "En una semana, la alianza EEUU-Israel pasó de 'inquebrantable' a 'rota en público'. Secuencia: Trump firma acuerdo con Irán SIN consultar a Israel (17 JUN). Netanyahu responde bombardeando Líbano durante el alto el fuego (18-19 JUN). Irán cierra Ormuz culpando a Israel (20 JUN). Y lo más revelador: Trump NO defendió a Netanyahu. CENTCOM simplemente dijo que '55 barcos transitaron normalmente'. El momento histórico: el presidente que se autodefinía como 'el más pro-Israel de la historia' eligió a Irán cuando tuvo que elegir. TLDR cubrió esto como 'US-Israel Divorce' y lleva 290K/4d = 2.9x. CaspianReport: 169K/7d. NADIE en español lo ha cubierto como 'divorcio'. VP cubrió la amenaza (Trump amenaza Mossad, 172K) pero no el RESULTADO. Este video no es sobre Irán — es sobre Israel, sobre Netanyahu, y sobre la alianza que se rompió cuando ambos líderes descubrieron que necesitaban cosas opuestas.",

  fields: [
    { label:"La noticia", value:"Secuencia cronológica de la ruptura: 17 JUN — Trump firma MoU con Irán en Évian. Israel NO fue consultado. 18-19 JUN — Netanyahu ordena bombardeos en Líbano horas después del alto el fuego, matando 12+ personas. 20 JUN — Irán cierra Ormuz citando violaciones israelíes del acuerdo. 20 JUN — EEUU NO defiende a Israel: CENTCOM dice que 55 barcos transitan normalmente (contradiciendo la urgencia de Israel). 23 JUN — Vance negocia con Irán en Suiza SIN representación israelí. (NPR, NBC, CNN, Al Jazeera)" },
    { label:"Segunda derivada", value:"No es un desacuerdo temporal — es un conflicto de intereses ESTRUCTURAL que no tiene solución matemática. Trump necesita el acuerdo con Irán como legado político antes de las midterms. Netanyahu necesita que el acuerdo FRACASE para justificar la continuación de operaciones contra Hezbolá y Gaza. Son objetivos matemáticamente incompatibles. Trump eligió Irán. Ningún presidente americano había elegido nunca a Irán por encima de Israel. La alianza más estable de la geopolítica moderna (desde 1948) tiene una fisura que no se puede reparar mientras ambos estén en el poder. Y lo que lo hace irreversible: no es que Trump no quiera apoyar a Israel — es que HACERLO destruiría su acuerdo con Irán. Netanyahu lo sabe. Por eso bombardeó Líbano: para FORZAR a Trump a elegir. Trump eligió. Y no eligió a Israel." },
    { label:"Gran pregunta", value:"¿Puede la alianza EEUU-Israel sobrevivir a un presidente americano que eligió Irán — y a un primer ministro israelí que saboteó deliberadamente el acuerdo americano bombardeando Líbano?" },
    { label:"Señal de competencia", value:"CUBIERTO INTERNACIONALMENTE, GAP TOTAL EN ESPAÑOL. TLDR (1.13M, ~100K media): 'Why a US-Israel Divorce Looks Increasingly Inevitable' — 290K/4d = 2.9x. CaspianReport (1.84M, ~250K): 'Why Israel is unhappy with Trump's Iran deal' — 169K/7d = 0.68x (confirma temática, rendimiento bajo). NADIE en el nicho español ha cubierto esto como 'divorcio EEUU-Israel'. El canal castellanoparlante de 1.32M cubrió 'Trump se retira de Irán' (327K) pero desde el lado IRANÍ, no israelí. VP cubrió 'Trump amenaza Israel Mossad' (172K) pero era la AMENAZA, no el RESULTADO. El ángulo 'Trump eligió Irán y dejó solo a Netanyahu' es un gap completo." },
    { label:"Demanda en medios", value:"CFR: 'G7 alignment deeply fragile'. NBC: bombardeos Líbano durante tregua. CNN: live updates de la crisis. El tema 'divorcio EEUU-Israel' no está en portadas como tal, pero las PIEZAS están en todos lados (acuerdo, bombardeo, cierre, negociaciones sin Israel). VP puede ser quien conecte las piezas y les dé nombre: 'divorcio'." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA. Los eventos son de esta semana (17-23 JUN). La situación evoluciona cada 24h. HOY hay nueva pieza: el roadmap de Suiza fue negociado SIN Israel. Si Israel y EEUU reconcilian posiciones en las próximas 48h, el ángulo 'divorcio' pierde fuerza. Pero la secuencia de esta semana ya es histórica independientemente de lo que pase." },
    { label:"Historial VP", value:"VP 'Trump amenaza Israel Mossad' = 172K/5d (reciente). VP 'Quién gana/pierde fin guerra Irán' = 201K. VP 'Emiratos vs Irán' = 174K/2d (HOY en canal). El tema Israel/EEUU/Irán funciona. El ángulo 'divorcio' es NUEVO y más potente que 'amenaza'. DIFERENCIA: este video es sobre ISRAEL (protagonista: Netanyahu), no sobre Irán." },
    { label:"Motor viral", value:"MECANISMO: (1) TRAICIÓN GEOPOLÍTICA — Trump elige a su enemigo histórico sobre su aliado histórico. (2) CONSECUENCIA GLOBAL — si EEUU-Israel se rompe, todo Oriente Medio se reconfigura. (3) PERSONAJES MAX-CLICK — Trump + Netanyahu = los dos líderes más reconocibles. (4) PARADOJA — el presidente más pro-Israel de la historia elige a Irán. (5) DEBATE/POLARIZACIÓN — la audiencia se dividirá, generando engagement. (6) SECUENCIA NARRATIVA — 7 días, 5 eventos, una conclusión." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'En 72 horas, la alianza más estable de la geopolítica moderna se rompió en público — y fue el presidente más pro-Israel de la historia quien la rompió.' Escalada: secuencia cronológica 17→18→19→20→23 JUN. Cada día un evento. Giro: Netanyahu bombardeó Líbano para FORZAR a Trump a elegir. Trump eligió. No eligió a Israel. Cierre: ¿puede sobrevivir una alianza cuando ambos líderes necesitan cosas mutuamente excluyentes?" },
    { label:"Promesa cumplible", value:"El video promete explicar CÓMO y POR QUÉ la alianza EEUU-Israel se rompió en una semana. DEMOSTRABLE: secuencia cronológica con 5 eventos verificados. No es clickbait: los eventos realmente ocurrieron y la secuencia realmente apunta a una ruptura sin precedentes." },
    { label:"Ventaja VP", value:"ALTA. VP domina narrativas de alianzas rotas (Emiratos rompe OPEP = 334K). El ángulo 'divorcio' requiere conectar 5 eventos de 7 días en una narrativa coherente — EXACTAMENTE lo que VP hace mejor que nadie. La competencia cubrió piezas individuales; VP conecta todo en una historia." },
    { label:"Caso para 800K/1M", value:"TLDR 2.9x confirma demanda internacional. GAP total en español para el ángulo 'divorcio'. Personajes max-viral (Trump+Netanyahu). Secuencia narrativa perfecta (7 días, 5 eventos). VP tiene audiencia probada para la temática. RIESGO: VP lleva 3 videos Irán esta semana = fatiga. MITIGACIÓN: este video NO es sobre Irán — es sobre ISRAEL. El protagonista es Netanyahu, no Jamenei. Cambio de frame total. Para 800K, el título debe ser sobre ISRAEL/NETANYAHU/EEUU, no mencionar Irán." },
    { label:"Título mental", value:"Trump eligió Irán sobre Israel — en 72 horas, la alianza más sólida del mundo se rompió y Netanyahu se quedó completamente solo" },
    { label:"Qué investigar más", value:"(1) Reacción interna israelí: qué dice el Knesset, la opinión pública. (2) AIPAC y el lobby pro-Israel en EEUU: cómo reaccionan. (3) Precedentes históricos de tensión EEUU-Israel (Suez 1956, Bush I préstamos 1991). (4) Impacto en Hezbolá y Líbano post-alto el fuego. (5) Siguiente movimiento de Netanyahu. (6) Lectura de Irán sobre la ruptura: ¿la provocan intencionalmente?" },
    { label:"Veredicto", value:"ATACAR HOY — señal 2.9x, GAP total en español, personajes max-viral, secuencia narrativa perfecta, ventaja VP alta. CLAVE: vender como video de ISRAEL, no de Irán, para evitar fatiga de audiencia." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/21/g-s1-129222/us-iran-deal-lebanon-israel-strait-hormuz-jd-vance", desc:"Roadmap sin participación israelí" },
    { medium:"NBC News", url:"https://www.nbcnews.com/world/iran/israel-continues-lebanon-strikes-fresh-ceasefire-rcna350952", desc:"Israel bombardea Líbano durante tregua" },
    { medium:"CNN", url:"https://www.cnn.com/2026/06/20/world/live-news/iran-war-trump-israel-lebanon", desc:"Irán y EEUU hacen claims opuestos sobre Ormuz" },
    { medium:"CFR", url:"https://www.cfr.org/articles/the-g7s-alignment-on-iran-and-ukraine-is-deeply-fragile", desc:"Fragilidad alignment G7 Irán/Ucrania" }
  ]
},

/* ═══════════════════════════════════════════════════════════
   P4 — UK: 7 PMs EN 10 AÑOS
   Competencia: Marc Vidal 260K/3d = 2.6x + BREAKING Starmer
═══════════════════════════════════════════════════════════ */
{
  number: "P4",
  golden: false,
  title: "7 PRIMEROS MINISTROS EN 10 AÑOS: por qué Reino Unido ya no puede gobernar — y qué revela sobre la crisis del modelo Westminster",
  subtitle: "Canal P2 260K/3d (2.6x) · Starmer dimite HOY · Andy Burnham favorito · Reform UK presiona · Cameron→May→Johnson→Truss→Sunak→Starmer→?",
  flag: "gb",
  tags: [
    { cls:"tag-red", text:"🔴 BREAKING HOY" },
    { cls:"tag-green", text:"✅ ATACAR HOY" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"REINO UNIDO" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 350K-500K",
  chips: [
    { cls:"chip-gold", text:"🏆 Marc Vidal 260K/3d (2.6x) + BREAKING HOY" },
    { cls:"chip-green", text:"⚡ Starmer dimite ESTA MAÑANA" },
    { cls:"chip-blue", text:"🔒 Retención: FUERTE" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: ALTA" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg?width=1200",
  bannerAlt: "Palacio de Westminster — sede del Parlamento británico, símbolo de la crisis de gobernabilidad",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/10_Downing_Street._MOD_45155532.jpg?width=1200",

  tesis: "Keir Starmer acaba de dimitir como primer ministro. Será el 7º líder de Reino Unido en solo 10 años. La secuencia es devastadora: Cameron (Brexit), May (parálisis), Johnson (escándalo), Truss (49 días), Sunak (derrota), Starmer (rebelión interna). Ninguna democracia occidental ha tenido esta rotación de líderes fuera de Italia. Y la razón de fondo NO es que los líderes sean malos — es que el sistema Westminster ha dejado de funcionar. El bipartidismo británico está colapsando: Reform UK (extrema derecha) creció tanto que el laborismo ya no puede ganar elecciones sin alianzas imposibles. Un canal P2 de economía/política (100K media) publicó sobre la prohibición UK de redes a menores y lleva 260K/3d = 2.6x — confirmando que UK genera demanda por encima de la media. Con la dimisión de Starmer HOY, el timing es perfecto. VP NO ha hecho un video sobre la crisis de gobernabilidad británica como fenómeno. Es un tema profundo que puede sostener 25 minutos fácilmente: por qué el sistema que inventó la democracia parlamentaria ya no puede producir líderes estables.",

  fields: [
    { label:"La noticia", value:"23 de junio (HOY): Keir Starmer anuncia su dimisión como primer ministro tras rebelión interna del Partido Laborista. Andy Burnham, ex-alcalde de Manchester, es el favorito para sucederle. La razón: el auge de Reform UK (extrema derecha) en las elecciones locales de mayo devastó al laborismo, y los propios diputados laboristas exigieron un cambio de liderazgo. Starmer permanecerá como caretaker hasta que se elija nuevo líder (nominaciones julio, nuevo líder antes de septiembre). (NPR, CNN, NBC, Al Jazeera, CNBC)" },
    { label:"Segunda derivada", value:"El problema de Reino Unido NO es que Starmer sea un mal líder. El problema es que el sistema Westminster — el modelo de democracia parlamentaria que UK exportó al mundo — ha dejado de funcionar en su propio país de origen. ¿Por qué? Porque el bipartidismo (Conservadores vs Laboristas) que sostenía Westminster está colapsando. Reform UK ha partido el voto conservador por la mitad. Los Verdes y los LibDems erosionan al laborismo por la izquierda. Y el sistema de first-past-the-post, que antes producía mayorías claras, ahora produce gobiernos minoritarios ingobernables. La paradoja: el país que inventó la democracia parlamentaria ya no puede producir un gobierno que dure más de 2 años. Y cada cambio de PM profundiza la crisis: los mercados desconfían (Truss lo demostró), los aliados no saben con quién negociar, y la política exterior británica post-Brexit es un caos porque nadie tiene mandato para definirla." },
    { label:"Gran pregunta", value:"¿Por qué el país que inventó la democracia parlamentaria ya no puede mantener un primer ministro más de 2 años — y qué nos dice sobre el futuro de las democracias occidentales?" },
    { label:"Señal de competencia", value:"SEÑAL COMPUESTA. Un canal P2 de economía/política (100K media habitual) publicó hace 3 días un video sobre UK y lleva 260K views = 2.6x su media. El tema UK genera demanda por encima de lo normal. Con la dimisión de Starmer HOY, el tema acaba de EXPLOTAR. En español, NADIE ha cubierto la crisis de gobernabilidad británica como fenómeno (7 PMs en 10 años). Los canales que cubrirán Starmer lo harán como noticia ('Starmer dimite'). VP puede hacerlo como ANÁLISIS PROFUNDO ('por qué UK ya no puede gobernar'). La ventana está completamente abierta." },
    { label:"Demanda en medios", value:"Cobertura MÁXIMA HOY: NPR, CNN, NBC, Al Jazeera, CNBC, BBC — Starmer es portada en todos los medios. Pero la cobertura es 100% noticia ('Starmer dimite, Burnham favorito'). NADIE está haciendo la pregunta de fondo: ¿por qué 7 en 10 años? El ángulo VP es completamente fresco." },
    { label:"Velocidad de agenda", value:"VENTANA PERFECTA. La dimisión es de HOY (23 JUN). No hay momento mejor. En 48-72h, la noticia habrá pasado a 'quién será el nuevo líder' y perderá fuerza. VP debe publicar ESTA SEMANA." },
    { label:"Historial VP", value:"VP NO tiene videos recientes sobre crisis de gobernabilidad británica. Videos UK anteriores: Brexit, Escocia independencia. El ángulo '7 PMs en 10 años' es completamente NUEVO para VP. Sin riesgo de saturación." },
    { label:"Motor viral", value:"MECANISMO: (1) DATO IMPACTANTE — 7 PMs en 10 años suena absurdo. (2) LISTA/SECUENCIA — Cameron→May→Johnson→Truss→Sunak→Starmer→? = estructura viral. (3) PARALELO — ¿es UK la nueva Italia? (4) CONSECUENCIA — post-Brexit, UK sin líder estable = potencia a la deriva. (5) BREAKING — Starmer dimite HOY = timing perfecto. (6) DEBATE — audiencia hispana tiene curiosidad sobre UK." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: '7 primeros ministros en 10 años. Ninguna democracia occidental, excepto Italia, ha tenido esta rotación de líderes. ¿Qué le pasa a Reino Unido?' Escalada: la secuencia — cada PM con su crisis (Cameron=Brexit, May=parálisis, Johnson=fiestas, Truss=49 días, Sunak=derrota, Starmer=rebelión). Giro: el problema no son los líderes — es que Westminster ha dejado de funcionar. El bipartidismo murió con Reform UK. Cierre: ¿puede el país que inventó la democracia parlamentaria reinventarla antes de convertirse en una potencia ingovernable?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué UK no puede mantener un PM. DEMOSTRABLE: secuencia de 7 PMs verificable, datos electorales, crecimiento Reform UK, sistema Westminster documentado. No es opinión — es análisis estructural." },
    { label:"Ventaja VP", value:"ALTA. VP es el canal que convierte noticias en análisis de sistemas. 'Starmer dimite' es noticia. '7 PMs en 10 años = colapso del sistema Westminster' es VP puro. La competencia hará la noticia. VP puede hacer la investigación. Además: mapas electorales, datos de fragmentación partidaria, comparación internacional — todo ultra-visual." },
    { label:"Caso para 800K/1M", value:"BREAKING HOY + señal 2.6x en competencia + CERO cobertura en español como fenómeno. UK es un país reconocible para la audiencia. La secuencia de 7 PMs es un dato viral. El timing es perfecto. RIESGO: UK no genera tanto click como EEUU/Rusia/Irán para audiencia hispana. Para 800K necesitaría un título que conecte con algo más universal ('¿puede morir una democracia sin que nadie lo note?'). Realista: 350K-500K." },
    { label:"Título mental", value:"7 primeros ministros en 10 años: el país que inventó la democracia ya no puede elegir un líder que dure — ¿qué le pasa a Reino Unido?" },
    { label:"Qué investigar más", value:"(1) Datos electorales de fragmentación: Reform UK, LibDems, Verdes, SNP. (2) Sistema first-past-the-post vs representación proporcional — debate actual en UK. (3) Comparación con Italia (rotación similar). (4) Impacto de inestabilidad en economía: libra, inversión, rating crediticio. (5) Andy Burnham: quién es, qué propone, puede durar? (6) Post-Brexit sin liderazgo: alianzas con EEUU, UE, Commonwealth." },
    { label:"Veredicto", value:"ATACAR HOY — BREAKING + timing perfecto + señal 2.6x + gap total en español + ángulo VP profundo (no noticia). Publicar ESTA SEMANA mientras la noticia está fresca." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/22/nx-s1-5866231/keir-starmer-resigns", desc:"Starmer dimite — cobertura completa" },
    { medium:"CNN", url:"https://www.cnn.com/2026/06/22/world/live-news/keir-starmer-uk-pm", desc:"Live updates dimisión + Burnham favorito" },
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/news/2026/6/22/why-has-keir-starmer-resigned-as-uk-prime-minister-and-who-will-take-over", desc:"Contexto político y Reform UK" },
    { medium:"CNBC", url:"https://www.cnbc.com/amp/2026/06/22/keir-starmer-resigns-uk-prime-minister.html", desc:"Impacto económico de la dimisión" }
  ]
},

/* ═══════════════════════════════════════════════════════════
   P5 — EL 5º DOMINÓ DE TRUMP EN LATAM
   Competencia: Solo Fonseca 106K/5h + VP video HOY 106K/8h
═══════════════════════════════════════════════════════════ */
{
  number: "P5",
  golden: false,
  title: "EL 5º DOMINÓ DE TRUMP: cómo la derecha continental está redibujando Latinoamérica — de Milei a El Tigre, el mapa político que nadie esperaba",
  subtitle: "Solo Fonseca 106K/5h + VP Colombia 106K/8h · De la Espriella gana Colombia · 5º giro a la derecha · Argentina→Ecuador→Panamá→Chile→Colombia",
  flag: "co",
  tags: [
    { cls:"tag-red", text:"🔴 106K/5h" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-green", text:"🌎 LATAM" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🏆 Solo Fonseca 106K/5h · VP Colombia 106K/8h" },
    { cls:"chip-green", text:"⚡ De la Espriella GANA (21 JUN)" },
    { cls:"chip-blue", text:"🔒 Retención: FUERTE" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: ALTA" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_de_Nari%C3%B1o.jpg?width=1200",
  bannerAlt: "Congreso de Colombia — escenario del giro político continental",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_de_Nari%C3%B1o.jpg?width=1200",

  tesis: "Colombia acaba de elegir al candidato respaldado por Trump. De la Espriella ('El Tigre') es el quinto dominó en una ola continental que empezó con Milei en Argentina (2023) y siguió con Ecuador, Panamá y Chile. PERO el video que VP DEBE hacer no es 'Colombia eligió a la derecha' — eso ya lo hicieron todos, incluido VP (106K/8h HOY). El video es la SEGUNDA DERIVADA: ¿cómo funciona la maquinaria de influencia de Trump en Latinoamérica? ¿Qué obtiene EEUU a cambio? ¿Qué prometen estos candidatos que los de izquierda no pudieron dar? Un canal del nicho publicó hace 5 horas un video sobre la 'derecha latinoamericana' y ya lleva 106K — señal de demanda caliente para el macro-tema. VP tiene la ventaja de poder hacer la CONEXIÓN CONTINENTAL: no es que Colombia giró — es que Latinoamérica entera está girando, y hay un patrón que nadie está explicando.",

  fields: [
    { label:"La noticia", value:"21 de junio: Abelardo de la Espriella ('El Tigre'), millonario abogado penalista respaldado por Trump, gana la segunda vuelta presidencial colombiana con 49.7% vs Iván Cepeda (48.7%). 12.9 millones de votos = el candidato más votado de la historia de Colombia. Margen estrecho, conteo manual pendiente. Toma de posesión: 7 agosto. Es el 5º país latinoamericano en girar a la derecha desde 2023: Argentina (Milei), Ecuador (Noboa), Panamá (Mulino), Chile (viraje legislativo), Colombia (De la Espriella). (NPR, CNN, Al Jazeera, CNBC)" },
    { label:"Segunda derivada", value:"El fenómeno NO es que 'la derecha gana elecciones'. El fenómeno es que hay un PATRÓN CONTINENTAL coordinado desde Washington. Trump no solo respaldó a De la Espriella — respaldó a todos: Milei, Noboa, Mulino. ¿Qué obtiene EEUU? Control de recursos estratégicos (litio en Argentina, cobre en Chile, canal en Panamá, petróleo en Colombia, narcotráfico en Ecuador). ¿Qué prometen estos candidatos? Tres cosas que la izquierda no pudo dar: seguridad (mano dura), estabilidad económica (pro-mercado), y alineación con EEUU (anti-China). La pregunta profunda: ¿es un movimiento orgánico de las sociedades latinoamericanas o una estrategia deliberada de EEUU para contener la influencia china en el hemisferio?" },
    { label:"Gran pregunta", value:"¿La ola de derecha en Latinoamérica es un movimiento orgánico de sociedades hartas de la inseguridad — o una estrategia de EEUU para recuperar su patio trasero antes de que China lo ocupe?" },
    { label:"Señal de competencia", value:"SEÑAL CRECIENTE. Un canal del nicho publicó hace 5 horas un video sobre la 'derecha latinoamericana' y ya lleva 106K views — velocidad alta para un tema así. VP publicó HOY su video sobre Colombia (106K/8h) — rendimiento por encima de media. CONVERGENCIA TEMPORAL: dos canales tocando la temática Latam/derecha el mismo día con buen rendimiento. El macro-tema 'ola continental' es un gap en español: todos cubren los países individualmente (Colombia HOY, Argentina antes) pero NADIE ha conectado los 5 dominós." },
    { label:"Demanda en medios", value:"NPR, CNN, Al Jazeera, CNBC cubren Colombia como noticia. Congress.gov (Library of Congress) publicó análisis electoral. AS/COA tiene poll tracker. Medios premium cubren cada elección individualmente pero NADIE ha hecho la conexión continental. Oportunidad para VP de ser el primero." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA. Colombia acaba de votar (21 JUN). VP acaba de publicar el video individual (HOY). El siguiente paso natural es el MACRO-VIDEO: la ola continental completa. Si se publica en los próximos 5-7 días, capitaliza la atención de Colombia." },
    { label:"Historial VP", value:"VP Colombia De la Espriella = 106K/8h (HOY, fuerte). VP 'Operación Cuba' = 486K. VP 'Bolivia nueva Venezuela' = 334K. VP Latam funciona consistentemente. El ángulo continental (5 países) es NUEVO." },
    { label:"Motor viral", value:"MECANISMO: (1) MAPA CONTINENTAL — 5 países en rojo = visual potentísimo. (2) TRUMP — su influencia en Latam es un tema que polariza y genera clicks. (3) AUDIENCIA DIRECTA — latinoamericanos son una parte enorme de la audiencia VP. (4) LISTA/DOMINÓ — Argentina→Ecuador→Panamá→Chile→Colombia = estructura narrativa viral. (5) CHINA vs EEUU — la disputa de fondo por Latinoamérica." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Milei en Argentina. Noboa en Ecuador. Mulino en Panamá. Ahora De la Espriella en Colombia. En 3 años, 5 países latinoamericanos han girado a la derecha. Todos respaldados por Trump. ¿Coincidencia o estrategia?' Escalada: qué obtiene EEUU de cada uno (litio, canal, petróleo, cobre). El rol de China como catalizador. Giro: la ola no es solo política — es económica. EEUU está usando a la derecha latinoamericana para expulsar a China del hemisferio. Cierre: ¿cuál es el próximo dominó? ¿Brasil? ¿México?" },
    { label:"Promesa cumplible", value:"El video promete explicar el patrón detrás de la ola de derecha latinoamericana y qué obtiene EEUU de cada país. DEMOSTRABLE: 5 elecciones verificables, respaldo de Trump documentado, datos de comercio China-Latam, recursos estratégicos de cada país." },
    { label:"Ventaja VP", value:"ALTA. VP es el canal que mejor conecta puntos entre países. Un mapa continental con 5 dominós cayendo = visual VP perfecto. La profundidad económica (litio, cobre, canal, petróleo) es territorio VP. Nadie más puede hacer este video con la misma calidad de datos y visualización." },
    { label:"Caso para 800K/1M", value:"Latam es audiencia directa de VP. 5 países = alcance continental. Trump genera clicks. Mapa visual potentísimo. RIESGO: el tema 'derecha gana' puede sonar repetitivo si no se enmarca como 'estrategia continental'. Para 800K, el título DEBE ser sobre el PATRÓN, no sobre Colombia individual. 'El mapa que EEUU está dibujando en Latinoamérica' > 'La derecha gana en Colombia'." },
    { label:"Título mental", value:"5 países en 3 años: cómo Trump está redibujando el mapa político de Latinoamérica — y qué obtiene EEUU a cambio de cada dominó" },
    { label:"Qué investigar más", value:"(1) Rol documentado de EEUU en cada elección. (2) Comercio China-Latam: cuánto ha crecido, en qué sectores. (3) Recursos estratégicos: litio (Argentina), cobre (Chile), canal (Panamá), petróleo (Colombia). (4) Próximos dominós: Brasil 2026, México post-Sheinbaum. (5) Comparación con 'ola rosa' de 2000s (Chávez, Lula, Evo, Kirchner). (6) NED/USAID: presencia en cada país." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — señal de competencia creciente, VP ya publicó Colombia individual, el macro-tema continental es un gap total. Publicar en 5-7 días capitalizando atención Colombia." }
  ],
  sources: [
    { medium:"NPR", url:"https://www.npr.org/2026/06/21/nx-s1-5865676/delaespriella-colombia-election", desc:"De la Espriella gana Colombia con 49.7%" },
    { medium:"CNN", url:"https://www.cnn.com/2026/06/21/americas/colombia-trump-abelardo-de-la-espriella-intl-latam", desc:"Trump-backed De la Espriella wins" },
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/news/2026/6/22/colombian-right-wing-candidate-de-la-espriella-wins-tight-presidential-race", desc:"Far-right lawyer wins Colombia" },
    { medium:"Congress.gov", url:"https://www.congress.gov/crs-product/IN12689", desc:"Congressional Research Service: Colombia election analysis" }
  ]
},

/* ════════════════════════════════════════════════════════════
   P6 — CHINA SANCIONA TIERRAS RARAS (VENTANA OPORTUNIDAD 1)
════════════════════════════════════════════════════════════ */
{
  number: "P6",
  golden: false,
  title: "CHINA ACABA DE PULSAR EL BOTÓN NUCLEAR DE LA ECONOMÍA: las sanciones a tierras raras que pueden paralizar el Pentágono",
  subtitle: "HOY: China bloquea dual-use a 10 empresas EEUU + prohibe compras de 46 subsidiarias Lockheed/Raytheon/General Dynamics · MP Materials y USA Rare Earth sancionadas",
  flag: "cn",
  tags: [
    { cls:"tag-gold", text:"⭐ HOY" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-orange", text:"🔍 VENTANA" },
    { cls:"tag-blue", text:"CHINA / EEUU" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-700K",
  chips: [
    { cls:"chip-gold", text:"⚡ NOTICIA DE HOY — 23 JUN" },
    { cls:"chip-green", text:"🎯 GAP: nadie conecta tierras raras + defensa" },
    { cls:"chip-blue", text:"🔒 Retención: FUERTE" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: MUY ALTA" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Pentagon_January_2008.jpg?width=1200",
  bannerAlt: "El Pentágono — las sanciones chinas apuntan directamente al complejo militar-industrial de EEUU",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/F-35A_flight_%28cropped%29.jpg?width=1200",

  tesis: "HOY, China anunció sanciones contra 10 empresas militares americanas y prohibió compras gubernamentales de 46 subsidiarias de Lockheed Martin, Raytheon y General Dynamics. La noticia que nadie está conectando: entre las 10 empresas sancionadas están MP Materials y USA Rare Earth — las DOS únicas empresas que extraen tierras raras EN SUELO AMERICANO. Sin tierras raras no hay F-35, no hay misiles guiados, no hay sistemas de defensa antimisiles, no hay chips militares. EEUU depende de China para el 60-70% de sus tierras raras procesadas. China acaba de decir: 'si nos bloqueas la tecnología, nosotros te bloqueamos las materias primas que necesitas para fabricar tus armas'. No es una sanción más — es un ataque quirúrgico al punto más débil de la cadena de suministro militar americana. Y NADIE en español está haciendo esta conexión.",

  fields: [
    { label:"La noticia", value:"23 de junio (HOY): el Ministerio de Comercio de China anuncia: (1) Bloqueo de exportaciones 'dual-use' a 10 empresas militares EEUU (AVEOX, Red Cat Holdings, Teal Drones, IMSAR, Jaia Robotics, Ball Aerospace, Oshkosh Defense, L3Harris Maritime, MP Materials, USA Rare Earth). (2) Prohibición de compras gubernamentales chinas de productos de 46 subsidiarias de Lockheed Martin, Raytheon y General Dynamics. (3) Terceros países tienen prohibido transferir productos chinos dual-use a las 10 empresas. Motivo declarado: respuesta al bloqueo de EEUU a empresas tech chinas en contratos de defensa. (Washington Post, ABC News, Newsweek, US News)" },
    { label:"Segunda derivada", value:"La noticia parece una represalia simétrica más en la guerra comercial. NO lo es. El detalle que cambia todo: MP Materials (Nevada) y USA Rare Earth están en la lista. Son las DOS únicas empresas que extraen y procesan tierras raras en suelo americano. Son el PLAN B de EEUU para reducir su dependencia de China en materiales críticos. Al sancionarlas, China no está respondiendo proporcionalmente — está atacando quirúrgicamente el intento americano de volverse independiente en tierras raras. Es como si EEUU bloqueara las fábricas chinas de chips Y ADEMÁS las empresas chinas que están intentando fabricar chips propios. China está diciendo: 'no solo controlamos las tierras raras — vamos a IMPEDIR que dejes de depender de nosotros'. Sin tierras raras procesadas: no hay imanes permanentes para motores de F-35, no hay sistemas de guiado de misiles, no hay radares avanzados, no hay baterías militares. El Pentágono tiene un problema que no puede resolver comprando en Amazon." },
    { label:"Gran pregunta", value:"¿Puede EEUU fabricar las armas que necesita para su defensa si China controla las materias primas que las hacen posibles — y acaba de sancionar a las únicas empresas americanas que intentan cambiar eso?" },
    { label:"Señal de competencia", value:"Competencia pendiente de comprobar para rendimiento en YouTube del nicho geopolítico. La noticia es de HOY — demasiado reciente para que haya videos publicados. PERO: la cobertura en medios es inmediata y amplia (WaPo, ABC, Newsweek, US News, Outlook Business). SEÑAL DE MEDIOS: Washington Post lo cubre en portada de business. Newsweek titula 'Trade War 2.0'. La narrativa 'China contraataca' genera clicks. HIPÓTESIS de demanda fuerte basada en cobertura de medios premium. GAP TOTAL en español." },
    { label:"Demanda en medios", value:"Cobertura ALTA e INMEDIATA: Washington Post (portada business), ABC News, Newsweek ('Trade War 2.0'), US News, Outlook Business. El Departamento del Tesoro (OFAC) tiene página específica sobre sanciones a empresas militares chinas — indica que el tema es de máxima prioridad para el gobierno EEUU. El ángulo tierras raras + defensa NO está en portadas pero los datos están ahí para quien los busque." },
    { label:"Velocidad de agenda", value:"ACELERANDO. La sanción es de HOY. La escalada guerra comercial China-EEUU es la historia del año. Cada ronda de sanciones genera más cobertura. Si VP publica en 3-5 días, entra en ventana óptima." },
    { label:"Historial VP", value:"VP China vs EEUU: múltiples videos con buen rendimiento. VP 'China puede tomar Taiwán' = 357K/11d. VP ha cubierto guerra comercial anteriormente. El ángulo TIERRAS RARAS como arma estratégica es NUEVO para VP. Patrón: China + consecuencia inesperada = 350K+." },
    { label:"Motor viral", value:"MECANISMO: (1) AMENAZA DIRECTA — si China controla las tierras raras, EEUU no puede fabricar armas. (2) DATO IMPACTANTE — 60-70% dependencia de China. (3) REVELACIÓN — las 2 únicas empresas americanas están en la lista de sancionados. (4) CONSECUENCIA TANGIBLE — sin tierras raras no hay F-35, no hay misiles, no hay defensa antimisiles. (5) CHINA — siempre genera clicks para VP. (6) TECNOLOGÍA MILITAR — fascinación garantizada. (7) VISUALIDAD — cadena de suministro global, mapas de minas, ruta de materiales." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'Hoy, China sancionó a 10 empresas militares americanas. Parece una represalia más. Pero en la lista hay dos nombres que cambian todo: MP Materials y USA Rare Earth — las únicas empresas que extraen tierras raras en suelo americano.' Escalada: qué son las tierras raras, para qué sirven, por qué EEUU depende de China, qué pasa si se corta el suministro. Giro: China no solo controla las tierras raras — está impidiendo que EEUU deje de depender de ella. Cierre: ¿puede la mayor potencia militar del mundo fabricar sus armas sin los materiales que su rival controla?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué las sanciones chinas de hoy son más peligrosas de lo que parecen. DEMOSTRABLE: lista de empresas sancionadas (WaPo), dependencia de EEUU en tierras raras (USGS, DoD reports), usos militares de tierras raras (documentación pública), MP Materials como único proveedor doméstico (SEC filings)." },
    { label:"Ventaja VP", value:"MUY ALTA. VP es el canal que convierte datos económicos en narrativas geopolíticas con visualización. La cadena de suministro de tierras raras es ULTRA-VP: mapas de minas (China, Congo, Australia, Nevada), ruta de procesamiento, aplicaciones militares, dependencia porcentual. NADIE en el nicho español puede hacer este video con este nivel de datos y visualización." },
    { label:"Caso para 800K/1M", value:"Noticia de HOY + gap total en español + ángulo 'arma nuclear económica' + China (siempre genera clicks) + tecnología militar (fascinación) + VP ventaja alta. RIESGO: 'tierras raras' puede sonar técnico/aburrido si el título no es potente. Para 800K, el título debe ser sobre la CONSECUENCIA (EEUU no puede fabricar armas) no sobre el material (tierras raras). 'China puede paralizar al Pentágono' > 'Las sanciones de tierras raras'. Potencial realista: 400K-700K." },
    { label:"Título mental", value:"China acaba de sancionar a las únicas empresas que extraen tierras raras en EEUU — sin ellas, el Pentágono no puede fabricar un solo F-35" },
    { label:"Qué investigar más", value:"(1) USGS data: producción global de tierras raras por país. (2) DoD reports: dependencia militar de tierras raras. (3) MP Materials: única mina activa en EEUU (Mountain Pass, Nevada). (4) Cadena de procesamiento: China procesa 90% del refinado global. (5) Alternativas: Australia (Lynas), reciclaje, sustitución. (6) F-35 supply chain: cuántas tierras raras necesita cada avión. (7) Paralelo con petróleo: ¿son las tierras raras el 'nuevo petróleo'?" },
    { label:"Veredicto", value:"ATACAR HOY — noticia de HOY, gap total, ángulo de revelación fuerte, ventaja VP muy alta, China siempre funciona. Publicar en 3-5 días con título centrado en CONSECUENCIA militar, no en materiales." }
  ],
  sources: [
    { medium:"Washington Post", url:"https://www.washingtonpost.com/business/2026/06/22/china-us-sanctions-military-defense-tech-dualuse/78e3aa90-6dee-11f1-8730-e7fd0e2a6404_story.html", desc:"China bloquea dual-use exports a empresas defensa EEUU" },
    { medium:"ABC News", url:"https://abcnews.com/Business/wireStory/china-hits-back-us-sanctions-tech-giants-restricting-134085742", desc:"Detalle 10 empresas sancionadas" },
    { medium:"Newsweek", url:"https://www.newsweek.com/china-retaliates-against-us-defense-company-sanctions-12101846", desc:"'Trade War 2.0' — análisis escalada" },
    { medium:"OFAC/Treasury", url:"https://ofac.treasury.gov/sanctions-programs-and-country-information/chinese-military-companies-sanctions", desc:"Programa sanciones empresas militares chinas (contexto)" }
  ]
},

/* ════════════════════════════════════════════════════════════
   P7 — GREENSPAN: EL ARQUITECTO DE LAS BURBUJAS (VENTANA 2)
════════════════════════════════════════════════════════════ */
{
  number: "P7",
  golden: false,
  title: "HA MUERTO EL HOMBRE QUE INVENTÓ LA ECONOMÍA MODERNA: cómo un saxofonista de jazz construyó el sistema financiero que heredamos — y por qué explotó",
  subtitle: "Alan Greenspan muere a los 100 · 19 años como chairman Fed · 4 presidentes · Burbuja dot-com · Raíces crisis 2008 · La Fed más poderosa de la historia",
  flag: "us",
  tags: [
    { cls:"tag-gold", text:"⭐ HOY" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-orange", text:"🔍 VENTANA" },
    { cls:"tag-purple", text:"💰 ECONOMÍA" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 300K-500K",
  chips: [
    { cls:"chip-gold", text:"⚡ FALLECIMIENTO HOY — ventana temporal" },
    { cls:"chip-green", text:"🎯 Biografía + sistema financiero global" },
    { cls:"chip-blue", text:"🔒 Retención: FUERTE" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: ALTA" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg?width=1200",
  bannerAlt: "Edificio de la Reserva Federal — sede del poder que Greenspan dirigió durante 19 años",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Alan_Greenspan_color_photo_portrait.jpg?width=1200",

  tesis: "Alan Greenspan ha muerto a los 100 años. Dirigió la Reserva Federal durante 19 años bajo 4 presidentes (Reagan, Bush padre, Clinton, Bush hijo). Su legado es la economía que heredamos: tipos de interés bajos como solución a todos los problemas, rescates bancarios como política habitual, y la creencia de que los mercados se autorregulan. También es el legado de las burbujas: la dot-com (2000), la inmobiliaria (2008), y la cultura del 'dinero barato' que sigue definiendo la política monetaria mundial. VP puede hacer lo que nadie más hará: NO un obituario, sino un ANÁLISIS de cómo un hombre construyó el sistema financiero del siglo XXI — y por qué explotó. El dato humano: antes de la Fed, Greenspan era saxofonista de jazz y seguidor de Ayn Rand. La paradoja: el libertario que creó la institución económica más intervencionista de la historia.",

  fields: [
    { label:"La noticia", value:"22 de junio: Alan Greenspan fallece a los 100 años por complicaciones de Parkinson. Nacido en 1926 en Washington Heights (Nueva York). Presidente de la Fed de 1987 a 2006 — la presidencia más larga de la historia moderna. Sirvió bajo Reagan, Bush padre, Clinton y Bush hijo. Su esposa, Andrea Mitchell (NBC News), confirmó la muerte. (CNBC, NPR, CNN, CBS, Al Jazeera — cobertura global masiva)" },
    { label:"Segunda derivada", value:"Greenspan no fue solo un banquero central — fue el ARQUITECTO del sistema financiero que heredamos. Sus decisiones definieron 3 principios que siguen vigentes: (1) Los tipos de interés bajos son la solución a cualquier crisis (el 'Greenspan put'). (2) Los mercados se autorregulan — no hace falta supervisar a los bancos. (3) Si algo sale mal, la Fed rescata. Estos principios crearon la mayor expansión económica de la historia (1990s) pero también sembraron las semillas de las dos mayores crisis: la burbuja dot-com (2000) y la crisis financiera (2008). La paradoja que define su legado: Greenspan era un seguidor de Ayn Rand, la filósofa del libertarismo puro. Creía que el gobierno NO debía intervenir. Pero como chairman de la Fed, creó la institución económica más intervencionista de la historia. Cada vez que el mercado temblaba, Greenspan bajaba tipos. El mercado se volvió adicto. Y cuando Greenspan se fue en 2006, dejó una bomba de relojería (los subprime) que explotó 18 meses después." },
    { label:"Gran pregunta", value:"¿Cómo un saxofonista de jazz seguidor de Ayn Rand construyó el sistema financiero más intervencionista de la historia — y por qué la economía que nos dejó sigue estallando cada 10 años?" },
    { label:"Señal de competencia", value:"Competencia pendiente de comprobar — la muerte se anunció ayer/hoy, demasiado reciente para videos de competencia geopolítica. Los canales de economía sí cubrirán pero como obituario. HIPÓTESIS: el tema Greenspan puede no ser un 'hot topic' para la audiencia geopolítica joven. PERO el ángulo 'el sistema que heredamos' conecta con debates actuales (inflación, tipos de interés, Fed vs BCE). GAP en español para un análisis VP-style." },
    { label:"Demanda en medios", value:"Cobertura MASIVA: CNBC, NPR, CNN, CBS, Al Jazeera, NYT, Axios, Fox — Greenspan es portada global. Pero toda la cobertura es OBITUARIO. Nadie está haciendo la pregunta VP: ¿cómo construyó el sistema que heredamos y por qué sigue explotando?" },
    { label:"Velocidad de agenda", value:"VENTANA TEMPORAL. Los obituarios generan interés 48-72h. Después, el tema desaparece. VP debe decidir RÁPIDO si entra. El video NO puede ser un obituario — debe ser un análisis del SISTEMA." },
    { label:"Historial VP", value:"VP ha cubierto Fed, crisis 2008, política monetaria. VP 'Bitcoin' = 220K/8d (tema económico). VP 'Petróleo barato' = 59K (bajo). VP economía funciona CUANDO tiene consecuencia tangible y personaje fuerte. Greenspan es un personaje FUERTE (19 años, 4 presidentes, jazz, Ayn Rand) pero el riesgo es que 'la Fed' suene técnico." },
    { label:"Motor viral", value:"MECANISMO: (1) MUERTE — ventana temporal de atención. (2) PERSONAJE — saxofonista de jazz que dirigió la economía mundial 19 años. (3) PARADOJA — libertario que creó la mayor institución intervencionista. (4) CONSECUENCIA TANGIBLE — la economía que heredamos (inflación, burbujas, rescates) = la que vives. (5) REVELACIÓN — cómo UN hombre decidió que los tipos bajos eran la solución a todo. RIESGO: 'la Fed' puede sonar aburrido para audiencia joven. Mitigar con título biográfico/personal." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: 'En 1987, un saxofonista de jazz de 61 años fue nombrado la persona más poderosa del mundo. No era un presidente ni un general. Era el nuevo chairman de la Reserva Federal.' Escalada: cómo Greenspan respondió al crash del 87 (bajó tipos y todo subió), la euforia de los 90s, la burbuja dot-com. Giro: Greenspan dejó la Fed en 2006 creyendo que los mercados se autorregulaban. 18 meses después, el sistema que construyó explotó y arrastró al mundo a la peor crisis desde 1929. Cierre: ¿seguimos viviendo en la economía de Greenspan — adictos al dinero barato y esperando la próxima burbuja?" },
    { label:"Promesa cumplible", value:"El video promete explicar cómo un hombre construyó el sistema financiero moderno y por qué sigue explotando. DEMOSTRABLE: biografía verificable, decisiones de tipos documentadas, burbujas datadas, crisis 2008 documentada. No es opinión — es historia económica con datos." },
    { label:"Ventaja VP", value:"ALTA. VP es el canal que convierte economía en historia con datos y narrativa. El formato biográfico (un hombre, un sistema, una explosión) es PERFECTO para VP. Los canales de economía harán obituarios. Los canales de noticias harán notas cortas. VP puede hacer el análisis de 25 minutos que nadie más hará: cómo Greenspan construyó la economía moderna." },
    { label:"Caso para 800K/1M", value:"Cobertura mediática masiva. Personaje fuerte (jazz, Ayn Rand, 4 presidentes). Paradoja viral. PERO: 'la Fed' puede sonar técnico. Para 800K, el título debe ser BIOGRÁFICO/PERSONAL ('el hombre que inventó la economía moderna') no técnico ('la política monetaria de Greenspan'). Riesgo: audiencia joven puede no conocer a Greenspan. Mitigación: el video debe empezar con la PERSONA (saxofonista, seguidor de Rand) no con la institución. Potencial realista: 300K-500K." },
    { label:"Título mental", value:"Ha muerto el hombre que inventó la economía moderna — cómo un saxofonista de jazz adicto a Ayn Rand construyó el sistema que nos dejó adictos al dinero barato" },
    { label:"Qué investigar más", value:"(1) Biografía personal: jazz, Ayn Rand, matrimonio con Andrea Mitchell. (2) Crash 87: primera decisión, primer rescate. (3) Los 90s: la 'Gran Moderación'. (4) Burbuja dot-com: qué sabía Greenspan. (5) Subprime: qué supervisión falló. (6) 'Greenspan put': cómo los mercados se volvieron adictos a los rescates. (7) Legado actual: ¿sigue la Fed operando con la doctrina Greenspan? (8) Comparación con Bernanke, Yellen, Powell." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — ventana temporal por fallecimiento, personaje fuerte, paradoja viral, ventaja VP alta. PERO riesgo de que 'la Fed' no conecte con audiencia joven. Decidir en 24h si se ataca." }
  ],
  sources: [
    { medium:"CNBC", url:"https://www.cnbc.com/2026/06/22/alan-greenspan-former-chairman-of-the-fed-dies-at-age-100.html", desc:"Obituario completo — 19 años como chairman" },
    { medium:"NPR", url:"https://www.npr.org/2026/06/22/656930918/alan-greenspan-the-legendary-former-federal-reserve-chair-dies", desc:"Greenspan legendary Fed chair dies" },
    { medium:"CNN", url:"https://www.cnn.com/2026/06/22/economy/alan-greenspan-obituary", desc:"Greenspan obituary — legado económico" },
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/economy/2026/6/22/former-us-federal-reserve-chairman-alan-greenspan-dies-at-age-100", desc:"Impacto global de su política monetaria" }
  ]
},

/* ════════════════════════════════════════════════════════════
   P8 — EUROPA SE DERRITE (VENTANA OPORTUNIDAD 3)
════════════════════════════════════════════════════════════ */
{
  number: "P8",
  golden: false,
  title: "45°C EN JUNIO: la ola de calor que revela que la infraestructura europea fue diseñada para un clima que ya no existe — y lo que costará reconstruirla",
  subtitle: "Francia alerta roja · UK récord junio absoluto (38°C vs 35.6°C de 1976) · Blackouts Turín · 14-18°C por encima de lo normal · Incendios Iberia",
  flag: "fr",
  tags: [
    { cls:"tag-gold", text:"⭐ HOY" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-orange", text:"🔍 VENTANA" },
    { cls:"tag-blue", text:"🇪🇺 EUROPA" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 250K-400K",
  chips: [
    { cls:"chip-gold", text:"⚡ HOY: ola de calor en curso 20-23 JUN" },
    { cls:"chip-green", text:"🎯 Ángulo infraestructura/coste = VP" },
    { cls:"chip-blue", text:"🔒 Retención: MEDIA-FUERTE" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: MEDIA" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Paris_-_Eiffelturm_und_Marsfeld2.jpg?width=1200",
  bannerAlt: "París bajo el calor — 49 departamentos en alerta roja máxima",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Europe_satellite_globe.jpg?width=1200",

  tesis: "Europa acaba de registrar la ola de calor más temprana e intensa de su historia: 45°C en Francia, 38°C en UK (récord de junio, superando el de 1976), blackouts en Turín, cientos de escuelas cerradas, incendios en Iberia. Temperaturas 14-18°C por encima de lo normal para junio. El video que VP debe hacer NO es sobre el calor — es sobre la INFRAESTRUCTURA. Las vías de tren europeas se deforman a 40°C. Los cables eléctricos pierden capacidad con el calor. Los edificios no tienen aire acondicionado porque 'nunca hacía falta'. Los hospitales no están diseñados para oleadas de golpes de calor. La SEGUNDA DERIVADA: reconstruir la infraestructura europea para un clima 2-3°C más caliente que el que existía cuando se construyó costará BILLONES — y nadie sabe quién va a pagarlo. Europa está entrando en una era donde cada verano será más caro que el anterior, y la infraestructura se devaluará más rápido de lo que puede reemplazarse.",

  fields: [
    { label:"La noticia", value:"20-23 de junio: domo de calor estancado sobre Europa occidental con aire sahariano. España/Portugal: 42.7°C (Pinhão, Andújar). Francia: 40-44°C, 49 de 96 departamentos en alerta roja máxima, cientos de escuelas cerradas o con horario reducido. UK: 38°C = récord absoluto de junio (superando los 35.6°C de Southampton en 1976). Italia: blackouts en Turín por sobrecarga de red. Incendios forestales en Iberia. Temperaturas 14-18°C por encima de lo normal para finales de junio. (Bloomberg, Washington Post, Severe Weather EU, Wikipedia '2026 European heatwaves')" },
    { label:"Segunda derivada", value:"El problema NO es el calor — es que toda la infraestructura europea fue construida para un clima que ya no existe. Las vías de tren se diseñaron para temperaturas máximas de 30-35°C; a 40°C se deforman y hay que reducir velocidad o suspender servicio. Los cables eléctricos pierden 10-15% de capacidad de transmisión con cada grado por encima de 35°C; por eso Turín tuvo blackouts. Los edificios europeos (especialmente en norte de Francia, UK, Alemania) NO tienen aire acondicionado porque se construyeron cuando 'nunca hacía falta'. Los hospitales no están dimensionados para oleadas de golpes de calor. Y el coste de ADAPTACIÓN es astronómico: la Comisión Europea estima que adaptar la infraestructura europea costará entre 100.000 y 500.000 millones de euros. Cada verano que pase sin esa inversión, la infraestructura se degrada más — y el coste sube. Europa está atrapada en una carrera que no puede ganar: el clima cambia más rápido de lo que puede reconstruir." },
    { label:"Gran pregunta", value:"¿Cuánto costará reconstruir la infraestructura de un continente entero que fue diseñada para un clima que ya no existe — y quién va a pagarlo?" },
    { label:"Señal de competencia", value:"Competencia pendiente de comprobar para rendimiento específico de videos sobre calor en canales del nicho. La ola de calor es noticia HOY en todos los medios pero no es un tema que los canales geopolíticos hispanos cubran habitualmente. GAP claro en el ángulo INFRAESTRUCTURA/COSTE — todos cubren el calor como noticia climática, nadie como crisis de infraestructura. RIESGO: 'ola de calor' puede percibirse como tema menor para audiencia geopolítica." },
    { label:"Demanda en medios", value:"Bloomberg (portada: 'Europe Heat Wave Sends Power Prices Soaring'). Washington Post. Severe Weather EU (análisis técnico detallado). Wikipedia ya tiene artículo '2026 European heatwaves'. El ángulo ECONÓMICO/INFRAESTRUCTURA tiene tracción en Bloomberg y FT." },
    { label:"Velocidad de agenda", value:"VENTANA ACTIVA. La ola de calor está EN CURSO (20-23 JUN). La cobertura seguirá 3-5 días más. PERO: las olas de calor se olvidan rápido. VP debe publicar durante o inmediatamente después de la ola." },
    { label:"Historial VP", value:"VP NO tiene videos recientes sobre cambio climático o infraestructura europea. VP 'Europa Inmigración' = 551K/5d (HIT) — demuestra que temas europeos FUNCIONAN. El ángulo infraestructura/coste es nuevo." },
    { label:"Motor viral", value:"MECANISMO: (1) EXPERIENCIA DIRECTA — la audiencia europea/española SIENTE el calor ahora mismo. (2) DATO IMPACTANTE — 45°C en junio, récord UK desde 1976. (3) CONSECUENCIA ECONÓMICA — blackouts, trenes parados, escuelas cerradas = impacto tangible. (4) MIEDO — cada verano será peor y más caro. (5) EUROPA — audiencia directa de VP. RIESGO: 'ola de calor' puede percibirse como tema climático/aburrido si no se enmarca como crisis económica/infraestructura." },
    { label:"Retención narrativa", value:"MEDIA-FUERTE. Apertura: '45 grados en junio. Vías de tren deformadas. Blackouts en Turín. Escuelas cerradas en Francia. El problema no es el calor — es que toda la infraestructura europea fue construida para un clima que ya no existe.' Escalada: sector por sector (transporte, electricidad, hospitales, edificios). Giro: el coste de adaptación es de 100.000-500.000 millones. Y cada año que pasa sin invertir, sube. Cierre: Europa está en una carrera contra el tiempo donde el clima se mueve más rápido que su capacidad de reconstruir." },
    { label:"Promesa cumplible", value:"El video promete explicar por qué la infraestructura europea no aguanta el calor y cuánto costará arreglarlo. DEMOSTRABLE: datos temperatura (Severe Weather EU), capacidad eléctrica (Bloomberg), blackouts (medios italianos), estimaciones coste adaptación (Comisión Europea)." },
    { label:"Ventaja VP", value:"MEDIA. VP puede hacer el análisis económico/infraestructura mejor que canales climáticos. Pero no es su territorio natural. La ventaja está en conectar calor→infraestructura→economía→geopolítica (quién paga, cómo afecta a competitividad europea). Si se queda solo en 'hace calor', pierde." },
    { label:"Caso para 800K/1M", value:"La audiencia siente el calor AHORA = conexión directa. Europa = audiencia VP. Datos impactantes (45°C en junio). PERO: 'ola de calor' no es tema natural de VP. Para llegar a 400K+, el título debe ser ECONÓMICO ('lo que costará reconstruir Europa') no climático ('ola de calor'). Para 800K: improbable a menos que se conecte con algo más (crisis energética, debate nuclear). Potencial realista: 250K-400K." },
    { label:"Título mental", value:"45°C en junio: toda la infraestructura europea fue construida para un clima que ya no existe — y reconstruirla costará billones" },
    { label:"Qué investigar más", value:"(1) Comisión Europea: estimaciones coste adaptación. (2) Datos técnicos: a qué temperatura fallan las vías de tren, los cables, los transformadores. (3) Muertes por calor: datos Europa últimos 5 años. (4) Comparación: cómo lo hacen países calientes (Emiratos, Singapur, Australia). (5) Debate nuclear: el calor aumenta demanda eléctrica, ¿es argumento pro-nuclear? (6) Seguro: ¿están las aseguradoras cubriendo daños por calor? (7) Inmigración climática intra-europea: ¿se mueve la gente del sur al norte?" },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — timing perfecto (ola en curso), audiencia directa, gap en ángulo infraestructura/coste. PERO no es territorio natural VP. Vigilar si la ola genera consecuencias mayores (muertes masivas, crisis eléctrica prolongada) que justifiquen el video." }
  ],
  sources: [
    { medium:"Bloomberg", url:"https://www.bloomberg.com/news/articles/2026-06-22/europe-s-heat-wave-intensifies-with-france-on-red-alert", desc:"Precios energía disparados + alertas extendidas" },
    { medium:"Washington Post", url:"https://www.washingtonpost.com/weather/2026/06/21/another-major-heat-dome-will-bake-swaths-europe/", desc:"Domo de calor sobre Europa — análisis meteorológico" },
    { medium:"Severe Weather EU", url:"https://www.severe-weather.eu/global-weather/heat-dome-europe-excessive-historic-heatwave-june-july-summer-2026-mk/", desc:"Datos técnicos: 14-18°C sobre lo normal, récords" },
    { medium:"Wikipedia", url:"https://en.wikipedia.org/wiki/2026_European_heatwaves", desc:"2026 European heatwaves — cronología completa" }
  ]
}

],

/* ═══ RANKING ═══ */
ranking: [
  { pos:1, title:"Crimea sin gasolina — guerra logística", score:"9.5/10", verdict:"ATACAR HOY", signal:"698K/3d (3.5x) · CONVERGENCIA TRIPLE", risk:"VP hizo Ucrania hace 2 semanas — pero ángulo logístico es NUEVO" },
  { pos:2, title:"Los 14 puntos del acuerdo Irán", score:"9.0/10", verdict:"ATACAR HOY", signal:"464K/3d (4.64x) · MÁXIMO multiplicador", risk:"VP lleva 3 videos Irán esta semana — fatiga real (59K en uno)" },
  { pos:3, title:"Divorcio EEUU-Israel", score:"8.5/10", verdict:"ATACAR HOY", signal:"290K/4d (2.9x) · GAP en español", risk:"Vinculado a Irán — riesgo de fatiga. Solución: vender como video de ISRAEL" },
  { pos:4, title:"UK: 7 PMs en 10 años", score:"8.5/10", verdict:"ATACAR HOY", signal:"260K/3d (2.6x) + BREAKING HOY", risk:"UK puede no generar tanto click como EEUU/Irán para audiencia hispana" },
  { pos:5, title:"China sanciona tierras raras defensa EEUU", score:"8.0/10", verdict:"ATACAR 3-5 DÍAS", signal:"Noticia HOY · GAP total", risk:"'Tierras raras' puede sonar técnico — título debe ser sobre F-35/Pentágono" },
  { pos:6, title:"5º dominó Trump en Latam", score:"7.5/10", verdict:"INVESTIGAR", signal:"106K/5h comp + 106K/8h VP", risk:"VP ya publicó Colombia individual HOY — el macro-tema es el siguiente paso" },
  { pos:7, title:"Greenspan: arquitecto de las burbujas", score:"7.0/10", verdict:"INVESTIGAR", signal:"Cobertura global masiva · ventana temporal", risk:"'La Fed' puede sonar técnico para audiencia joven" },
  { pos:8, title:"Europa 45°C — infraestructura obsoleta", score:"6.5/10", verdict:"INVESTIGAR", signal:"Bloomberg portada · audiencia directa", risk:"No es territorio natural VP — solo funciona con ángulo económico fuerte" }
],

/* ═══ VIGILAR ═══ */
vigilar: [
  { title:"Filipinas: tiroteo escolar en Tacloban", trigger:"Si escala a debate sobre armas en Asia-Pacífico o control de armas EEUU-exportado", source:"ABC News, 22 JUN 2026" },
  { title:"Hormuz: zona gris operativa (12 vs 35 buques)", trigger:"Si el tráfico cae a <10 buques/día o si hay incidente militar directo", source:"PBS, CNN, 22-23 JUN 2026" },
  { title:"Reform UK: ascenso extrema derecha británica", trigger:"Si Burnham gana y Reform UK sube en encuestas — posible video sobre populismo europeo 2.0", source:"NPR, Al Jazeera, 23 JUN 2026" },
  { title:"Venezuela: extradiciones narco-chavistas", trigger:"Si Maduro entrega más figuras o si EEUU responde con alivio de sanciones", source:"Reuters, Solo Fonseca 343K, 19-22 JUN 2026" },
  { title:"Precio petróleo: Brent $77.5 con Ormuz disputado", trigger:"Si Brent sube >$85 o cae <$70 — señal de cambio estructural", source:"Bloomberg, 23 JUN 2026" },
  { title:"Negociaciones Suiza: roadmap 60 días", trigger:"Si se filtran detalles concretos del roadmap o si alguna parte lo abandona en <2 semanas", source:"NPR, 23 JUN 2026" },
  { title:"Incendios Europa del sur (Iberia)", trigger:"Si los incendios causan muertes masivas o crisis política en España/Portugal", source:"Severe Weather EU, 20-23 JUN 2026" }
],

/* ═══ ÚLTIMOS VIDEOS VP ═══ */
coveredVideos: [
  { title:"Colombia: De la Espriella / El Tigre", date:"23 JUN 2026", views:"106K (8h)", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Emiratos vs Irán: la traición en el Golfo", date:"21 JUN 2026", views:"174K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Petróleo barato: el arma de doble filo", date:"20 JUN 2026", views:"59K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Irán marca el camino", date:"19 JUN 2026", views:"171K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Europa tiene un problema con la inmigración", date:"18 JUN 2026", views:"551K ⭐ HIT", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"El G2 cubano", date:"17 JUN 2026", views:"388K ⭐ HIT", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"EEUU pierde a Irán", date:"16 JUN 2026", views:"208K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Bitcoin", date:"15 JUN 2026", views:"220K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Retirada EEUU de Irán", date:"13 JUN 2026", views:"219K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Ucrania: la victoria es posible", date:"12 JUN 2026", views:"459K", url:"https://www.youtube.com/@VisualPolitik/videos" }
]

};
