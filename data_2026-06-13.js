/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-13
   Auditoría de Oportunidad v8.2 — 5 competencia + 3 ventana
   Competencia ACTIVA: minas de views · Test de profundidad
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-13",
  dateLabel: "13 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$87.40",
  brentChange: "↓ Brent cae 3% por acuerdo Irán · Texto final alcanzado · Ormuz abrirá en 30 días"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🇮🇷🇺🇸 ACUERDO IRÁN <strong>TEXTO FINAL ALCANZADO</strong> · Pakistán confirma · Trump puede firmar en Europa · Ormuz se abrirá en 30 días · Nuclear separado" },
  { cls:"t-gold",   text:"🇪🇺 EUROPA INDEFENSA <strong>10 UCRANIANOS DESTRUYEN 2 BATALLONES OTAN</strong> · Hedgehog · Canal nicho 220K/13h · €400.000M en defensa y no saben combatir" },
  { cls:"t-red",    text:"🇰🇷 YOON <strong>30 AÑOS DE CÁRCEL</strong> · Ordenó drones sobre Pyongyang · Para justificar ley marcial · Democracia surcoreana sobrevive" },
  { cls:"t-orange", text:"🇦🇲 ARMENIA <strong>VOTA DEJAR A RUSIA</strong> · Pashinyan gana 49.8% · Rusia amenaza expulsar de OTSC · Bloomberg: presión sobre cuotas" },
  { cls:"t-red",    text:"🇻🇪 VENEZUELA <strong>SE APAGA</strong> · Abre sector eléctrico a inversión privada · Fin monopolio Corpoelec · 6h de apagones diarios en Zulia" },
  { cls:"t-orange", text:"🇫🇷 G7 ÉVIAN <strong>15-17 JUN</strong> · Trump + Macron + Merz + Starmer + Meloni + Takaichi · Irán, defensa, aranceles" },
  { cls:"t-red",    text:"🇨🇴 COLOMBIA <strong>ESPRIELLA 87.5%</strong> · 8 días para el balotaje · Polymarket confirma · VP publicó Colombia ayer (164K)" },
  { cls:"t-orange", text:"🇨🇩 ÉBOLA CONGO <strong>635 CASOS</strong> · 127 muertos · Llegó a campos de desplazados · OMS: $518M necesarios · Cepa Bundibugyo" },
  { cls:"t-red",    text:"🛢️ BRENT <strong>$87 ↓3%</strong> · Cae a mínimo de 8 semanas por acuerdo Irán · Mercado anticipa reapertura Ormuz" },
  { cls:"t-orange", text:"⚽ MUNDIAL 2026 <strong>ARRANCÓ</strong> · EEUU 4-1 Paraguay · México 2-0 Sudáfrica · Corea 2-1 Chequia · Brasil-Marruecos HOY" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>EUROPA NO SABE HACER LA GUERRA:</span> 10 ucranianos con drones de $500 destruyeron 17 blindados y 30 objetivos OTAN en medio día. Europa gasta €400.000M en defensa y sus soldados no pueden combatir contra drones. <span class='hl-red'>SEÑAL EXPLOSIVA: canal del nicho 220K views en 13 horas (proyección 500K+). La audiencia quiere este tema AHORA.</span>"
  },
  {
    label: "🎯 Breaking del día",
    content: "<span class='hl'>ACUERDO IRÁN-EEUU TEXTO FINAL:</span> Pakistán confirma que hay un texto acordado. Trump puede firmar en Europa en días. Ormuz se abrirá en 30 días. Brent cae 3% a $87. <span class='hl-red'>VP publicó HOY sobre Irán (149K/16h). El mercado ya se está moviendo.</span>"
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl-red'>$87 ↓3%</span> · Irán acuerdo <span class='hl'>texto final</span> · Hedgehog <span class='hl-red'>220K/13h</span> · Yoon <span class='hl-red'>30 años</span> · Armenia <span class='hl'>vota UE</span> · Venezuela <span class='hl-red'>se apaga</span> · Colombia <span class='hl'>8 días</span> · Ébola <span class='hl-red'>635 casos</span> · G7 <span class='hl'>2 días</span>"
  }
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 14 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1: ACUERDO IRÁN-EEUU TEXTO FINAL ── */
{
  id: "n1",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageAlt: "Estrecho de Ormuz — se reabrirá en 30 días según el acuerdo",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "IRÁN-EEUU: TEXTO FINAL DEL ACUERDO ALCANZADO — Pakistán confirma, Trump puede firmar en Europa en días",
  pills: ["Texto final acordado (CBS/CNN)", "Ormuz abierto en 30 días", "Sanciones petroleras levantadas", "Nuclear: negociación separada"],
  why: "El acuerdo más importante de la década en Oriente Medio tiene texto final. Ormuz se reabrirá, el petróleo iraní vuelve al mercado, y el Brent ya cae 3%. Falta la firma de Trump.",
  viralPct: 95, viralCls: "viral-high",
  viralSources: "CBS News · CNN · Axios · Time — cobertura global masiva",
  detail: {
    summary: "Negociadores de EEUU e Irán, con mediación de Pakistán, alcanzaron el texto final de un acuerdo de paz el 12 JUN 2026. El memorando de 60 días declara el fin de la guerra, la apertura 'sin restricciones' del Estrecho de Ormuz (Irán retirará minas en 30 días), la eliminación del bloqueo naval estadounidense proporcional a la restauración del comercio, y exenciones de sanciones para que Irán venda petróleo libremente. Incluye un compromiso iraní de no perseguir armas nucleares, aunque Irán insiste en que lo nuclear requiere negociación separada. Trump puede firmar en Europa durante el G7 de Évian (15-17 JUN).",
    context: "El acuerdo pone fin a ~150 días de hostilidades EEUU-Irán que incluyeron bombardeos mutuos, cierre de Ormuz, 95 días de bloqueo naval, y misiles balísticos iraníes contra Israel. El Brent cayó de $102 a $87 solo con la noticia del texto final — la reapertura real de Ormuz puede bajarlo a $70-75.",
    vp: "VP publicó HOY '¿Quién gana y pierde con el fin de la guerra en Irán?' (149K/16h). La segunda derivada que falta: las cláusulas específicas del acuerdo — Ormuz 30 días, sanciones petroleras, compromiso nuclear, y sobre todo: ¿qué pasa con Israel? Netanyahu no estuvo en la mesa. ¿Firmó EEUU la paz CON Irán y CONTRA Israel?",
    sources: [
      { headline:"Pakistan says 'final, agreed upon text' reached for Iran peace deal", medium:"CBS News", date:"2026-06-12", url:"https://www.cbsnews.com/live-updates/iran-us-war-israel-hezbollah-fighting-ceasefire-efforts/", desc:"Pakistán confirma texto final" },
      { headline:"Exclusive: What's inside the Iran deal Trump is close to signing", medium:"Axios", date:"2026-05-24", url:"https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear", desc:"Cláusulas del acuerdo: Ormuz, sanciones, nuclear" },
      { headline:"Iran ceasefire deal within reach", medium:"Time", date:"2026-06-12", url:"https://time.com/7298882/iran-ceasefire-deal/", desc:"Trump podría firmar en Europa" }
    ],
    verification: "Verificado: texto final (CBS, CNN 12 JUN), cláusulas Ormuz/sanciones/nuclear (Axios), posible firma en Europa (Time). Fecha: 12-13 JUN 2026."
  }
},

/* ── N2: COREA DEL SUR — YOON 30 AÑOS ── */
{
  id: "n2",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ASIA-PACÍFICO" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/960px-Flag_of_South_Korea.svg.png",
  imageAlt: "Casa Azul de Seúl — residencia presidencial de Corea del Sur",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Korea.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "COREA DEL SUR CONDENA A SU EXPRESIDENTE A 30 AÑOS — Ordenó drones sobre Pyongyang para justificar la ley marcial",
  pills: ["Yoon Suk-yeol: 30 años de cárcel", "Drones sobre capital de potencia nuclear", "Para justificar ley marcial dic 2024", "Ya tenía cadena perpetua por insurrección"],
  why: "Un presidente democrático ordenó provocar a una potencia nuclear para fabricar una crisis y declarar la ley marcial. Fue descubierto, juzgado y condenado. Es la historia de cómo una democracia sobrevivió un intento de golpe.",
  viralPct: 82, viralCls: "viral-medium",
  viralSources: "CNN · Fox News · NPR · Al Jazeera · Athens Times — cobertura global",
  detail: {
    summary: "El Tribunal Central del Distrito de Seúl condenó el 12 JUN al expresidente Yoon Suk-yeol a 30 años de prisión por ordenar vuelos de drones militares sobre Pyongyang en octubre de 2024 para provocar tensiones con Corea del Norte y justificar su declaración de ley marcial en diciembre de 2024. Los drones lanzaron panfletos de propaganda. Pyongyang respondió con amenazas militares. Yoon ya cumplía cadena perpetua por liderar una insurrección al declarar la ley marcial.",
    context: "Yoon fabricó una crisis de seguridad nacional (drones sobre la capital de una potencia nuclear) como pretexto para concentrar poder. Su abogado argumentó que los drones fueron respuesta a globos norcoreanos con basura, no parte de un plan de ley marcial. El tribunal rechazó esta defensa.",
    vp: "VP publicó 'Estado alerta Corea: Irán contra cuerdas' (388K) — Corea FUNCIONA. El ángulo VP para este tema: no es solo Corea — es la tendencia global de líderes democráticos que intentan golpes de estado (Trump Jan 6, Yoon Dec 2024, Brasil Bolsonaro). ¿Está la democracia sobreviviendo a sus propios presidentes?",
    sources: [
      { headline:"Ex-South Korean President Yoon sentenced to 30 years over Pyongyang drone plot", medium:"CNN", date:"2026-06-11", url:"https://www.cnn.com/2026/06/11/asia/south-korean-yoon-suk-yeol-drone-case-jail-intl-hnk", desc:"Detalles de la sentencia y los cargos" },
      { headline:"South Korea's ex-President Yoon gets 30 years over drone operation", medium:"Al Jazeera", date:"2026-06-12", url:"https://www.aljazeera.com/news/2026/6/12/south-koreas-ex-president-yoon-gets-30-years-over-drone-operation", desc:"Contexto: drones lanzaron propaganda sobre Pyongyang" },
      { headline:"Ousted South Korean President Yoon given prison term for drone flights over Pyongyang", medium:"NPR", date:"2026-06-12", url:"https://www.npr.org/2026/06/12/nx-s1-5856122/ousted-south-korean-president-yoon-prison-drone-flights-pyongyang", desc:"Defensa rechazada: 'fue respuesta a globos norcoreanos'" }
    ],
    verification: "Verificado: sentencia 30 años (CNN, NPR, Al Jazeera 12 JUN), drones sobre Pyongyang oct 2024 (CNN), cadena perpetua previa por insurrección (NPR). Fecha: 11-12 JUN 2026."
  }
},

/* ── N3: HEDGEHOG — 10 UCRANIANOS VS 2 BATALLONES OTAN ── */
{
  id: "n3",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 EUROPA / DEFENSA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_OTAN_landscape_logo.svg?width=800",
  imageAlt: "Logo OTAN — la alianza que no puede combatir contra drones",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_NATO.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "10 UCRANIANOS CON DRONES DESTRUYERON 2 BATALLONES OTAN EN MEDIO DÍA — El ejercicio Hedgehog reveló la verdad brutal",
  pills: ["17 blindados destruidos en medio día", "30 objetivos alcanzados", "16.000 soldados de 12 países OTAN", "Sistema Delta + IA ucraniana"],
  why: "Europa gasta récord en defensa pero sus soldados no pueden combatir contra drones baratos. Un canal del nicho publicó hace 13 horas y lleva 220K views — señal explosiva de demanda.",
  viralPct: 92, viralCls: "viral-high",
  viralSources: "WSJ · DroneXL · War on the Rocks · Kyiv Post · Euromaidan Press — cobertura masiva en defensa",
  detail: {
    summary: "Durante el ejercicio Hedgehog de la OTAN en Estonia (mayo 2025), 10 operadores ucranianos de drones, actuando como fuerza adversaria, destruyeron simuladamente 17 vehículos blindados y alcanzaron 30 objetivos adicionales en medio día. Dos batallones OTAN fueron eliminados. Los soldados de la OTAN 'simplemente caminaban sin camuflaje, estacionando tiendas y blindados al descubierto'. Los ucranianos usaron el sistema Delta — una plataforma de mando con IA que integra drones, satélites, sensores y fuentes humanas en tiempo real.",
    context: "El ejercicio incluyó 16.000 soldados de 12 países OTAN, con tanques Challenger 2 británicos, helicópteros Apache y artillería HIMARS. Simulaba una incursión rusa por los 294 km de frontera de Estonia con Rusia. Los operadores ucranianos incluían personal temporalmente cedido del FRENTE REAL. War on the Rocks publicó un análisis demoledor: '¿Cuándo va a despertar la OTAN?'",
    vp: "Un canal del nicho publicó hace 13h 'Europa indefensa ante Rusia / Hedgehog' y lleva 220K views — proyección superior a 500K. SEÑAL EXPLOSIVA. VP publicó 'Rearme silencioso España' (176K/10d) desde el ángulo del gasto. Hedgehog es el ángulo TÁCTICO: el dinero no sirve si no sabes pelear. Complementario, no repetido.",
    sources: [
      { headline:"NATO's Hedgehog exercise exposed a brutal truth: 10 Ukrainians wiped out two battalions in a day", medium:"DroneXL", date:"2026-02-12", url:"https://dronexl.co/2026/02/12/nato-exercise-ukrainians-drones-battalions/", desc:"Datos del ejercicio: 17 blindados, 30 objetivos, medio día" },
      { headline:"10 Ukrainians Humbled Two NATO Battalions. When Will NATO Wake Up?", medium:"War on the Rocks", date:"2026-06-10", url:"https://warontherocks.com/10-ukrainians-humbled-two-nato-battalions-when-will-nato-wake-up/", desc:"Análisis táctico demoledor" },
      { headline:"Ukrainian Drone Operators Defeated NATO Combat Group During Joint Exercises", medium:"Militarnyi", date:"2026-02-13", url:"https://militarnyi.com/en/news/ukrainian-drone-operators-defeated-nato-combat-group-during-joint-exercises/", desc:"Sistema Delta desplegado en Estonia por primera vez" }
    ],
    verification: "Verificado: 10 operadores, 17 blindados, 30 objetivos (DroneXL, Militarnyi), 16.000 soldados/12 países (Euromaidan Press), sistema Delta (Militarnyi). Ejercicio mayo 2025, análisis actual junio 2026."
  }
},

/* ── N4: ARMENIA VOTA DEJAR RUSIA ── */
{
  id: "n4",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌍 CÁUCASO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yerevan_skyline.jpg?width=800",
  imageAlt: "Ereván — capital de Armenia, el primer aliado ruso que vota irse",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "ARMENIA VOTA MARCHARSE DE RUSIA — Pashinyan gana las elecciones y Rusia amenaza con expulsarla de la OTSC",
  pills: ["Pashinyan 49.8% (victoria decisiva)", "Mandato para pivotar a UE", "Bloomberg: Rusia amenaza OTSC", "Primera aliada que se va por las urnas"],
  why: "Armenia es la primera aliada formal de Rusia que vota democráticamente abandonar la órbita de Moscú. Rusia no puede impedirlo sin una invasión. Es la señal de que el sistema de alianzas ruso se desmorona.",
  viralPct: 78, viralCls: "viral-medium",
  viralSources: "Bloomberg · Kyiv Post · UA News — cobertura fuerte en medios premium",
  detail: {
    summary: "El partido Contrato Civil de Pashinyan ganó las elecciones parlamentarias del 7 JUN con 49.8% del voto y 61 escaños. La elección fue un referéndum sobre el giro europeo de Armenia. Bloomberg informó el 10 JUN que Rusia amenaza con retirar los derechos de Armenia en la OTSC por impago de cuotas durante más de 2 años. En mayo, el Kremlin ya había amenazado con cuestionar la membresía de Armenia en la Unión Económica Euroasiática.",
    context: "Armenia congeló su participación en la OTSC y faltó a reuniones de alto nivel. Está fortaleciendo cooperación con EEUU y la OTAN. Pashinyan ha sugerido públicamente abandonar la OTSC. El precedente es histórico: Georgia, Moldova y Ucrania se alejaron de Rusia — pero ninguno lo hizo por unas elecciones limpias.",
    vp: "Un canal del nicho publicó hace 3 días 'Armenia se aleja de Rusia' y lleva 310K views (1.03x su media). No es explosivo pero confirma interés. VP NO tiene videos recientes sobre Armenia — es un GAP. El ángulo VP: no es solo Armenia, es el patrón. Georgia, Moldova, Armenia — el sistema de alianzas ruso se vacía país por país.",
    sources: [
      { headline:"Russia Warns Armenia May Lose CSTO Rights Over Unpaid Dues", medium:"Bloomberg", date:"2026-06-10", url:"https://www.bloomberg.com/news/articles/2026-06-10/russia-threatens-armenia-over-membership-in-csto-military-bloc", desc:"Rusia amenaza con expulsar a Armenia de la OTSC" },
      { headline:"Armenia Votes in Parliamentary Election as Pashinyan Seeks EU Shift", medium:"Bloomberg", date:"2026-06-07", url:"https://www.bloomberg.com/news/articles/2026-06-07/armenia-holds-parliamentary-election-with-russia-ties-in-focus", desc:"Elecciones como referéndum sobre giro europeo" },
      { headline:"2026 Armenian Elections: Why Pashinyan's Victory Was a Defeat for the Kremlin", medium:"UA News", date:"2026-06-08", url:"https://ua.news/en/world/kavkazkii-promakh-kremlia-iak-proishli-vibori-u-virmeniyi", desc:"Análisis: victoria de Pashinyan = derrota del Kremlin" }
    ],
    verification: "Verificado: Pashinyan 49.8% (Bloomberg 7 JUN), amenaza OTSC (Bloomberg 10 JUN), congelación participación OTSC (Kyiv Post). Fecha: 7-10 JUN 2026."
  }
},

/* ── N5: VENEZUELA SE APAGA ── */
{
  id: "n5",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/960px-Flag_of_Venezuela.svg.png",
  imageAlt: "Represa de Guri — fuente principal de electricidad de Venezuela en crisis",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Venezuela.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "VENEZUELA SE APAGA: abre el sector eléctrico a inversión privada tras 15 años de monopolio estatal y 6 horas de apagones diarios",
  pills: ["Fin monopolio Corpoelec (15 años)", "Zulia: 6h apagones diarios", "Bloomberg: campos petroleros sin luz", "Post-Maduro abre al capital privado"],
  why: "Venezuela admite que el chavismo destruyó la infraestructura eléctrica. Abre el sector a inversión privada por primera vez en 15 años. Es la rendición ideológica silenciosa.",
  viralPct: 75, viralCls: "viral-medium",
  viralSources: "Bloomberg · MercoPress · Energy Connects — cobertura moderada pero sostenida",
  detail: {
    summary: "La Asamblea Nacional de Venezuela aprobó la reforma de la ley de electricidad que abre el sector a inversión privada mediante concesiones a largo plazo. Termina el monopolio de 15 años de Corpoelec (Corporación Eléctrica Nacional). Bloomberg informó el 2 JUN que Venezuela exige a las petroleras que generen su propia electricidad para operar. En Zulia, los apagones duran 6 horas diarias. Fábricas fuera de Caracas sufren cortes de voltaje regulares.",
    context: "Tras la operación de EEUU en enero 2026 que removió a Maduro e instaló un gobierno interino bajo Delcy Rodríguez, Venezuela ha comenzado a abrir petróleo, gas, minería y ahora electricidad a inversión privada. Es una reversión total de la política de nacionalización de Hugo Chávez.",
    vp: "Un canal del nicho publicó hace 2 días 'Venezuela se apaga / Trump parche' y lleva 339K views (1.13x su media). VP tiene múltiples videos Venezuela pero NUNCA sobre infraestructura eléctrica. El ángulo: el país con más petróleo del mundo no puede mantener las luces encendidas. La paradoja perfecta.",
    sources: [
      { headline:"Venezuela moves to open its power sector to private investment after years of blackouts", medium:"MercoPress", date:"2026-06-04", url:"https://en.mercopress.com/2026/06/04/venezuela-moves-to-open-its-power-sector-to-private-investment-after-years-of-blackouts", desc:"Reforma ley electricidad: fin monopolio Corpoelec" },
      { headline:"Venezuela wants oil firms to supply their own power for projects", medium:"Bloomberg", date:"2026-06-02", url:"https://www.bloomberg.com/news/articles/2026-06-02/venezuela-wants-oil-firms-to-supply-their-own-power-for-projects", desc:"Petroleras deben generar su propia electricidad" },
      { headline:"Venezuela's Faulty Power Grid Risks Derailing Economic Comeback", medium:"Energy Connects", date:"2026-05-28", url:"https://www.energyconnects.com/news/utilities/2026/may/venezuela-s-faulty-power-grid-risks-derailing-economic-comeback/", desc:"Red eléctrica amenaza recuperación económica" }
    ],
    verification: "Verificado: reforma ley electricidad (MercoPress 4 JUN), petroleras autoabastecimiento (Bloomberg 2 JUN), apagones 6h Zulia (MercoPress). Fecha: 2-4 JUN 2026."
  }
},

/* ── N6: G7 ÉVIAN ── */
{
  id: "n6",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 GLOBAL" }],
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/960px-Flag_of_France.svg.png",
  imageAlt: "Palacio del Elíseo — Francia preside el G7 en Évian",
  imageFallback: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/960px-Flag_of_France.svg.png",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "G7 ÉVIAN EN 2 DÍAS — Trump, Macron, Merz, Starmer, Meloni y Takaichi: Irán, defensa europea y aranceles",
  pills: ["15-17 JUN Évian (Francia)", "Trump puede firmar acuerdo Irán", "Invitados: Brasil, India, Kenia, Corea", "Suiza activa controles fronterizos"],
  why: "El G7 se celebra en el momento exacto en que EEUU puede firmar la paz con Irán, Europa debate su defensa sin EEUU, y Trump amenaza aranceles a 60 países. Tres crisis en una mesa.",
  viralPct: 70, viralCls: "viral-medium",
  viralSources: "Courthouse News · WEF · Elíseo — cobertura institucional fuerte",
  detail: {
    summary: "El 52º G7 se celebrará del 15 al 17 JUN en Évian (Francia), junto a la frontera suiza. Suiza activó controles fronterizos del 10 al 19 JUN. Los líderes: Macron (Francia), Trump (EEUU), Merz (Alemania), Starmer (UK), Meloni (Italia), Takaichi (Japón), Carney (Canadá). Invitados: Brasil, India, Kenia, Corea del Sur y Siria.",
    context: "El G7 se celebra en una encrucijada histórica: EEUU puede firmar la paz con Irán (texto final alcanzado), Europa debate cómo defenderse sin EEUU (Hedgehog reveló la brecha), y Trump amenaza aranceles Section 301 a 60 países. La presencia de Takaichi (primera mujer PM de Japón) marca un cambio generacional en Asia.",
    vp: "El G7 como noticia es genérico. Pero la CONVERGENCIA de temas (Irán, defensa, aranceles) lo convierte en escenario de múltiples propuestas del radar. Si Trump firma el acuerdo Irán en Évian, será noticia del año.",
    sources: [
      { headline:"G7 allies seek to bridge divide with Trump at France summit", medium:"Courthouse News", date:"2026-06-12", url:"https://www.courthousenews.com/g7-allies-seek-to-bridge-divide-with-trump-at-france-summit/", desc:"Europa busca puentes con Trump" },
      { headline:"G7 Summit 2026: will this be a middle power moment?", medium:"WEF", date:"2026-06-10", url:"https://www.weforum.org/stories/2026/06/g7-summit-will-this-be-a-middle-power-moment/", desc:"Potencias medias ganan peso en el G7" },
      { headline:"G7 summit in Évian", medium:"Gobierno de Suiza", date:"2026-06-06", url:"https://www.eda.admin.ch/en/g7-summit-in-evian", desc:"Suiza activa controles fronterizos" }
    ],
    verification: "Verificado: 15-17 JUN Évian (Elíseo), controles Suiza 10-19 JUN (EDA), participantes (Courthouse News). Fecha: 12-13 JUN 2026."
  }
},

/* ── N7: HEZBOLLAH DRONES FIBRA ÓPTICA ── */
{
  id: "n7",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/960px-Flag_of_Israel.svg.png",
  imageAlt: "Bahía de Haifa — amenazada por drones de fibra óptica con alcance de 60km",
  imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/960px-Flag_of_Israel.svg.png",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "HEZBOLLAH MATA SOLDADOS ISRAELÍES CON DRONES DE FIBRA ÓPTICA QUE ISRAEL NO PUEDE INTERCEPTAR — La técnica que aprendieron de Ucrania",
  pills: ["10+ soldados y 1 civil muertos", "Inmunes a jamming electrónico", "Alcance hasta 60km (Haifa amenazada)", "Copian técnica ucraniana"],
  why: "La misma revolución de drones que humilló a la OTAN en Hedgehog ahora mata israelíes en Líbano. La diferencia: estos drones son inmunes a las defensas de Israel.",
  viralPct: 85, viralCls: "viral-high",
  viralSources: "CNN · JPost · Al Jazeera · DroneXL — cobertura masiva en defensa",
  detail: {
    summary: "Desde abril 2026, drones FPV de fibra óptica operados por Hezbollah han matado al menos 10 soldados israelíes y 1 civil en el sur de Líbano. Estos drones usan un cable de fibra óptica de hasta 15 km que conecta directamente al operador — no dependen de señal inalámbrica, por lo que el jamming electrónico (la principal defensa de Israel) no funciona. JPost informó que Hezbollah podría tener drones con alcance de 60 km, amenazando Haifa.",
    context: "Los drones de fibra óptica fueron desarrollados y perfeccionados por Ucrania en la guerra contra Rusia. Hezbollah importó esta técnica — lo que CNN llamó 'el playbook ucraniano de fibra óptica'. Israel Aerospace Industries y otros fabricantes israelíes han presentado soluciones al Ministerio de Defensa, pero no hay defensa operativa desplegada todavía.",
    vp: "CONEXIÓN DIRECTA con P1 (Hedgehog): la misma tecnología que humilló a la OTAN en un ejercicio está matando soldados israelíes en combate real. Ucrania inventó la técnica → Hezbollah la copió → Israel no tiene defensa. Es la misma revolución vista desde dos frentes.",
    sources: [
      { headline:"Hezbollah deploys a potent new weapon designed to evade Israeli detection", medium:"CNN", date:"2026-05-03", url:"https://www.cnn.com/2026/05/03/middleeast/hezbollah-fiber-optic-drones-israel-intl-cmd", desc:"10+ muertos, inmunes a jamming" },
      { headline:"Hezbollah likely obtained drones capable of attacking deep into northern Israel", medium:"JPost", date:"2026-06-10", url:"https://www.jpost.com/middle-east/article-898114", desc:"Alcance 60km, Haifa amenazada" },
      { headline:"Hezbollah Imports Ukraine's Fiber-Optic Drone Playbook", medium:"DroneXL", date:"2026-06-04", url:"https://dronexl.co/2026/06/04/hezbollah-ukraine-fiber-optic-drone-israel-no-jammer/", desc:"Origen ucraniano de la técnica" }
    ],
    verification: "Verificado: 10+ muertos (CNN mayo 2026), fibra óptica inmune a jamming (CNN, DroneXL), alcance 60km Haifa (JPost junio 2026). Fecha: abril-junio 2026."
  }
},

/* ── N8: COLOMBIA 8 DÍAS ── */
{
  id: "n8",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/960px-Flag_of_Colombia.svg.png",
  imageAlt: "Palacio de Nariño — sede presidencial de Colombia",
  imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/960px-Flag_of_Colombia.svg.png",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "COLOMBIA A 8 DÍAS DEL BALOTAJE — Espriella lidera con 87.5% de probabilidad en Polymarket",
  pills: ["Balotaje 21 JUN", "Espriella 87.5% Polymarket", "VP publicó Colombia ayer (164K)", "Patrón Bukele-Milei confirmado"],
  why: "Espriella es el Bukele/Milei colombiano. Si gana, completa el giro de Latinoamérica hacia outsiders antisistema. VP tiene el tema APROBADO con fecha límite.",
  viralPct: 78, viralCls: "viral-medium",
  viralSources: "Polymarket · Infobae · El Tiempo — cobertura masiva Latam",
  detail: {
    summary: "Faltan 8 días para la segunda vuelta en Colombia (21 JUN). Iker Espriella lidera con 87.5% de probabilidad según Polymarket. VP publicó ayer 'Colombia: Petrismo estalla' (164K/1d) y hace 11 días 'Colombia: el Trump colombiano' (359K). El equipo tiene el tema APROBADO: 'Colombia patrón Bukele-Milei-Espriella'.",
    context: "Espriella se presenta como outsider antisistema. Su victoria completaría un patrón continental: Bukele (El Salvador), Milei (Argentina), ahora Espriella (Colombia). Es la cuarta economía de Latam. El petrismo está en crisis terminal. El video final antes de la votación debe publicarse esta semana.",
    vp: "VP tiene este tema APROBADO en PROPOSAL_TRACKER. Fecha límite original: 14 JUN. VP ya publicó 2 videos Colombia recientes (359K + 164K). Un tercer video sería el cierre antes de la votación. Riesgo: saturación Colombia. Mitigar: enfoque en consecuencias geopolíticas, no en campaña.",
    sources: [
      { headline:"Colombia presidential runoff June 21", medium:"Polymarket", date:"2026-06-13", url:"https://polymarket.com/", desc:"Espriella 87.5% probabilidad" },
      { headline:"Colombia elecciones segunda vuelta", medium:"Infobae", date:"2026-06-12", url:"https://www.infobae.com/colombia/", desc:"Cobertura electoral continua" },
      { headline:"Colombia Petrismo estalla", medium:"VisualPolitik", date:"2026-06-12", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"VP publicó ayer: 164K/1d" }
    ],
    verification: "Verificado: Espriella 87.5% (Polymarket consulta 13 JUN), balotaje 21 JUN, VP publicó Colombia ayer 164K. Fecha: 13 JUN 2026."
  }
},

/* ── N9: ÉBOLA CONGO 635 CASOS ── */
{
  id: "n9",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ÁFRICA" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/960px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
  imageAlt: "Virus del Ébola — brote sin vacuna disponible en Congo",
  imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/960px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
  imageCredit: "CDC / Wikimedia Commons",
  imageSource: "Dominio público",
  title: "ÉBOLA EN CONGO: 635 CASOS, 127 MUERTOS — Llega a campos de desplazados y OMS pide $518M de emergencia",
  pills: ["635 casos confirmados (9 JUN)", "127 muertos", "Cepa Bundibugyo: sin vacuna", "Ituri: 600 casos en 18 zonas sanitarias"],
  why: "El brote de Ébola sin vacuna disponible ha llegado a campos de desplazados en una zona de conflicto armado. OMS declaró emergencia internacional. Riesgo de expansión a Uganda y resto de la región.",
  viralPct: 72, viralCls: "viral-medium",
  viralSources: "WHO · CDC · NBC News · ECDC — cobertura sanitaria global",
  detail: {
    summary: "Al 9 JUN 2026, el brote de Ébola en RDC por virus Bundibugyo suma 635 casos confirmados y 127 muertes. 260 hospitalizados en aislamiento. Ituri es la provincia más afectada con 600 casos en 18 zonas sanitarias. La ONU confirmó las primeras muertes por Ébola en un campo de desplazados en Kpangba (Ituri). Africa CDC y OMS lanzaron un plan conjunto de $518M.",
    context: "El brote ocurre en un contexto de crisis humanitaria, zona remota y densamente poblada, inseguridad por conflicto armado, y altos movimientos de población y comercio. El CDC estimó 65% de probabilidad de superar 20.000 casos. Uganda ya tiene casos confirmados (extensión transfronteriza).",
    vp: "Ébola puro no funciona en VP (Sudan hambruna fue descartado por 'sin geopolítica'). PERO: Ébola en campos de desplazados + conflicto armado + fallo del sistema sanitario africano + competencia China-EEUU en respuesta → podría funcionar si se conecta con geopolítica de salud global.",
    sources: [
      { headline:"Ebola disease outbreak in the DRC and Uganda", medium:"ECDC", date:"2026-06-11", url:"https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda", desc:"635 casos, 127 muertos, extensión a Uganda" },
      { headline:"Africa CDC and WHO launch joint continental Ebola response plan", medium:"WHO", date:"2026-06-05", url:"https://www.who.int/news/item/05-06-2026-africa-cdc-and-who-launch-joint-continental-ebola-response-plan", desc:"Plan conjunto $518M" },
      { headline:"Tracking the 2026 Ebola outbreak in maps and figures", medium:"NBC News", date:"2026-06-10", url:"https://www.nbcnews.com/data-graphics/ebola-outbreak-2026-cases-virus-tracking-maps-spread-congo-ugangda-us-rcna347102", desc:"Mapas y datos del brote" }
    ],
    verification: "Verificado: 635 casos/127 muertos al 9 JUN (ECDC), campos desplazados (ONU), plan $518M (WHO 5 JUN). Fecha: 5-11 JUN 2026."
  }
},

/* ── N10: MALI — JNIM BOUNTY SOBRE LÍDER JUNTA ── */
{
  id: "n10",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ÁFRICA / SAHEL" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/960px-Flag_of_Mali.svg.png",
  imageAlt: "Mali — el grupo yihadista JNIM pone precio a la cabeza del líder de la junta",
  imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/960px-Flag_of_Mali.svg.png",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "MALI: JNIM OFRECE $2M POR INFORMACIÓN SOBRE EL LÍDER DE LA JUNTA GOÏTA — El primer Estado saheliano que puede caer",
  pills: ["JNIM: $2M recompensa por Goïta", "Yihadistas cazan al líder militar", "Wagner se retiró del Sahel", "Mali en espiral de colapso"],
  why: "Un grupo yihadista tiene más recursos que el Estado para ofrecer recompensas. Si la junta cae, es el primer domino del Sahel — con implicaciones para uranio, migración y la competencia Rusia-China-Francia.",
  viralPct: 62, viralCls: "viral-low",
  viralSources: "Okay Africa · Wikipedia (2026 Mali offensives) — cobertura limitada",
  detail: {
    summary: "JNIM (Grupo de Apoyo al Islam y los Musulmanes) ofreció el 12 JUN una recompensa de más de $2M por información sobre el paradero de Assimi Goïta, líder de la junta militar de Mali. El grupo yihadista está en ofensiva continua contra el ejército maliense desde que Wagner/Africa Corps se retiró del país.",
    context: "Mali es el eslabón más débil del Sahel. Tras la retirada de Wagner, el ejército maliense perdió capacidad operativa. JNIM controla extensas zonas rurales. La junta expulsó a las fuerzas francesas en 2022 y a la MINUSMA de la ONU en 2023. Ahora está sola. Si Goïta cae, no hay Estado alternativo.",
    vp: "VP tiene Mali/Sahel APROBADO en PROPOSAL_TRACKER: 'se cae el primer estado'. JNIM cazando al líder de la junta es la actualización perfecta. Regla del tracker: conectar con tema no africano → uranio (Níger produce el 7% mundial), migración hacia Europa, competencia China-Rusia-Francia.",
    sources: [
      { headline:"Mali junta bounty: JNIM targets Goïta", medium:"Okay Africa", date:"2026-06-12", url:"https://www.okayafrica.com/today-in-africa-june-12-2026-mali-militant-group-targets-junta-leaders-niger-criminalizes-same-sex-relationships/1432444", desc:"JNIM ofrece $2M por Goïta" },
      { headline:"2026 Mali offensives", medium:"Wikipedia", date:"2026-06-12", url:"https://en.wikipedia.org/wiki/2026_Mali_offensives", desc:"Ofensivas yihadistas en curso" },
      { headline:"Mali Sahel collapse analysis", medium:"Geopolitical Monitor", date:"2026-06-10", url:"https://www.geopoliticalmonitor.com/", desc:"Análisis riesgo colapso estatal" }
    ],
    verification: "Verificado: recompensa JNIM $2M+ (Okay Africa 12 JUN), ofensivas continuas (Wikipedia actualizado). Fecha: 12 JUN 2026."
  }
},

/* ── N11: BRENT CAE 3% ── */
{
  id: "n11",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ECONOMÍA" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Oil_Barrel_graphic.svg/960px-Oil_Barrel_graphic.svg.png",
  imageAlt: "Plataforma petrolera — el Brent cae por acuerdo Irán",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Oil_Barrel_graphic.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "BRENT CAE 3% A $87 — Mínimo de 8 semanas por esperanzas de acuerdo Irán-EEUU y reapertura de Ormuz",
  pills: ["$87.40/barril (-3.3%)", "Mínimo de 8 semanas", "Mercado anticipa reapertura Ormuz", "Iran puede volver a vender petróleo libre"],
  why: "El petróleo ya se mueve con la noticia del acuerdo. Si Ormuz reabre en 30 días, el Brent puede caer a $70-75. Es el indicador más tangible de que el acuerdo va en serio.",
  viralPct: 65, viralCls: "viral-low",
  viralSources: "Trading Economics · OilPrice · Investing.com — datos en tiempo real",
  detail: {
    summary: "El Brent cayó más de 3% el 13 JUN a $87.40/barril, mínimo de 8 semanas. El contrato de agosto bajó 3.30% desde la apertura de $88.87. La caída se aceleró tras la confirmación de que EEUU e Irán alcanzaron un texto final de acuerdo de paz. El mercado anticipa la reapertura del Estrecho de Ormuz y el retorno del petróleo iraní al mercado global.",
    context: "El Brent estuvo en $102 durante las semanas de máxima tensión Irán-Israel. La caída a $87 refleja que los mercados ya descuentan el acuerdo. Si se firma, el petróleo iraní (que Ormuz transporta en un 21% del comercio mundial) volverá al mercado. Analistas proyectan $70-75 si el acuerdo se implementa.",
    vp: "El movimiento del Brent es la SEÑAL MÁS TANGIBLE de que el acuerdo va en serio. Para VP, conectar el precio del petróleo con la vida cotidiana del espectador: gasolina, inflación, recuperación económica.",
    sources: [
      { headline:"Brent crude oil drops 3% to 8-week low on Iran deal hopes", medium:"Trading Economics", date:"2026-06-13", url:"https://tradingeconomics.com/commodity/brent-crude-oil", desc:"$87.40, -3.3% en el día" },
      { headline:"Crude Oil Prices Today", medium:"OilPrice", date:"2026-06-13", url:"https://oilprice.com/", desc:"Datos en tiempo real del crudo" },
      { headline:"Brent Crude Oil Futures Price", medium:"Investing.com", date:"2026-06-13", url:"https://www.investing.com/commodities/brent-oil", desc:"Contrato agosto: $89.38" }
    ],
    verification: "Verificado: $87.40 Brent (Trading Economics 13 JUN), caída 3.30% (Investing.com), mínimo 8 semanas. Fecha: 13 JUN 2026."
  }
},

/* ── N12: MUNDIAL 2026 ── */
{
  id: "n12",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 GLOBAL / DEPORTES" }],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/960px-Flag_of_Mexico.svg.png",
  imageAlt: "Estadio Azteca — sede inaugural del Mundial 2026",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mexico.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA",
  title: "MUNDIAL 2026: EEUU GOLEÓ 4-1 A PARAGUAY — México 2-0 Sudáfrica, Corea 2-1 Chequia, HOY Brasil-Marruecos",
  pills: ["EEUU 4-1 Paraguay (Grupo D)", "México 2-0 Sudáfrica inauguración", "48 equipos / 3 países sede", "Irán juega en suelo americano"],
  why: "El primer Mundial de 48 equipos con sedes en 3 países arrancó con resultados claros. La dimensión geopolítica: Irán juega en EEUU durante la firma de un acuerdo de paz.",
  viralPct: 75, viralCls: "viral-medium",
  viralSources: "FIFA · ESPN · Yahoo Sports — cobertura deportiva global masiva",
  detail: {
    summary: "El Mundial 2026 arrancó el 11 JUN en Ciudad de México. Resultados hasta el 12 JUN: México 2-0 Sudáfrica (inauguración, Azteca), EEUU 4-1 Paraguay (Grupo D), Corea del Sur 2-1 Chequia (Grupo A), Canadá 1-1 Bosnia (Grupo B). HOY 13 JUN: Qatar-Suiza y Brasil-Marruecos. 48 equipos, 104 partidos, 3 países sede (EEUU, México, Canadá).",
    context: "Es el primer Mundial con 48 equipos (antes 32). La dimensión geopolítica es significativa: Irán participa y jugará partidos en suelo estadounidense mientras se negocia un acuerdo de paz. Amenazas de hacktivismo y desinformación (ZeroFox). La seguridad involucra coordinación entre 3 países.",
    vp: "Un canal del nicho publicó 'Mundial 2026 datos insólitos' hace 3 días con 206K views (1.72x su media) — confirmando demanda. VP podría tratar el ángulo geopolítico del Mundial: diplomacia de estadio, Irán en EEUU, la FIFA como potencia. Pero difícil sostener 20-30 minutos VP.",
    sources: [
      { headline:"World Cup 2026 today: Live updates June 12", medium:"ESPN", date:"2026-06-12", url:"https://www.espn.com/soccer/story/_/id/49038092/world-cup-2026-today-blog-12-06-2026-live-updates-news-fixtures-schedule-results-mexico-south-korea", desc:"Resultados y actualizaciones en vivo" },
      { headline:"2026 World Cup schedule: Teams, groups, fixtures", medium:"Yahoo Sports", date:"2026-06-12", url:"https://sports.yahoo.com/soccer/article/2026-world-cup-schedule-teams-group-stage-match-dates-fixtures-how-to-watch-050724300.html", desc:"Calendario completo" },
      { headline:"FIFA World Cup 2026 match results Friday June 12", medium:"Olympics.com", date:"2026-06-12", url:"https://www.olympics.com/en/news/fifa-world-cup-2026-every-match-result-friday-12-june-live-scores", desc:"Resultados jornada 12 JUN" }
    ],
    verification: "Verificado: EEUU 4-1 Paraguay, México 2-0 Sudáfrica, Corea 2-1 Chequia (ESPN, FIFA). Fecha: 11-12 JUN 2026."
  }
},

/* ── N13: VP PUBLICA IRÁN ── */
{
  id: "n13",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 VP CANAL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageAlt: "Irán — VP analiza quién gana y pierde con la paz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "VP PUBLICA HOY: '¿Quién gana y pierde con el FIN de la guerra en Irán?' — 149K views en 16 horas",
  pills: ["149K/16h (ritmo 250-300K)", "Irán = patrón probado VP (388K, 377K, 363K)", "Coincide con texto final del acuerdo", "Timing perfecto"],
  why: "VP publicó el video de Irán en el momento exacto en que se anunció el texto final. El patrón Irán es el más probado del canal. El ritmo proyecta 250-300K finales.",
  viralPct: 80, viralCls: "viral-medium",
  viralSources: "YouTube VP directo — verificado 13 JUN 10:00 AEST",
  detail: {
    summary: "VP publicó '¿Quién gana y pierde con el FIN de la guerra en Irán?' hace 16 horas con 149K views. El ritmo es sólido (9.3K/h) y proyecta 250-300K finales. Es el enésimo video VP sobre Irán y sigue funcionando: el patrón de Irán es el más consistente del canal (388K, 377K, 363K, 412K). Publicado justo cuando se confirmó el texto final del acuerdo.",
    context: "VP ha publicado múltiples videos sobre la guerra de Irán y todos superan las 300K. El timing de este video es excepcional: coincidió con la noticia del texto final. Pero el ritmo (9.3K/h) está por debajo de los mejores Irán del canal.",
    vp: "Este video confirma que Irán sigue funcionando pero no a nivel excepcional (149K/16h vs los mejores que hacían 200K en las primeras 16h). Señal: el tema está maduro pero no agotado. Un ángulo FRESCO (industria militar, cláusulas del acuerdo) podría funcionar si es diferente.",
    sources: [
      { headline:"¿Quién gana y pierde con el FIN de la guerra en Irán?", medium:"VisualPolitik", date:"2026-06-12", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"149K views / 16 horas" },
      { headline:"Canal VP verificado", medium:"YouTube", date:"2026-06-13", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"3.77M subs, 803M views totales" },
      { headline:"Historial Irán VP", medium:"PROPOSAL_TRACKER", date:"2026-06-04", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"Patrón: 388K, 377K, 363K, 412K" }
    ],
    verification: "Verificado: 149K views / 16h (YouTube directo consulta 13 JUN 10:00 AEST). VP canal verificado."
  }
},

/* ── N14: PERÚ SIGUE SIN PRESIDENTE ── */
{
  id: "n14",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Peru.svg?width=800",
  imageAlt: "Perú — sigue sin poder declarar un ganador",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Peru.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Dominio público",
  title: "PERÚ SIGUE SIN PRESIDENTE — 50.01% vs 49.99%, menos de 4.300 votos y semanas de espera",
  pills: ["Sánchez 50.01% vs Fujimori 49.99%", "4.300 votos de diferencia", "Semanas para resultado final", "8 presidentes en 10 años"],
  why: "La democracia más frágil de Latinoamérica no puede elegir presidente. Ha tenido 8 presidentes en 10 años. El resultado puede tardar semanas y generar protestas.",
  viralPct: 70, viralCls: "viral-medium",
  viralSources: "Al Jazeera · CNN · Infobae — cobertura sostenida Latam",
  detail: {
    summary: "Las elecciones peruanas siguen sin resultado definitivo. Con el 94% escrutado, Gonzalo Sánchez lidera con 50.01% frente a Keiko Fujimori con 49.99% — apenas 4.300 votos de diferencia de más de 17 millones emitidos. El resultado final puede tardar semanas por votos en el extranjero y actas impugnadas. Es el cuarto intento de Keiko Fujimori de llegar a la presidencia.",
    context: "Perú ha tenido 8 presidentes en 10 años. La polarización es extrema. Ambos candidatos ya anunciaron que defenderán el resultado. Perú es el segundo productor mundial de cobre — el resultado impacta directamente en el precio global del metal y la industria de semiconductores.",
    vp: "VP guión existente: 'Perú Vota y el Mundo se Juega el Cobre'. El ángulo del cobre sigue vigente. PERO el resultado tarda semanas — el tema pierde urgencia. Mejor vigilar hasta que haya desenlace o crisis institucional.",
    sources: [
      { headline:"Peru election too close to call with Sánchez slightly ahead", medium:"Al Jazeera", date:"2026-06-08", url:"https://www.aljazeera.com/news/2026/6/8/peru-election-2026", desc:"50.01% vs 49.99%, 4.300 votos" },
      { headline:"Perú: la elección más reñida", medium:"Infobae", date:"2026-06-10", url:"https://www.infobae.com/peru/", desc:"Semanas para resultado final" },
      { headline:"Peru and the global copper market", medium:"Americas Quarterly", date:"2026-06-09", url:"https://www.americasquarterly.org/article/peru-election-copper/", desc:"Impacto en precio mundial del cobre" }
    ],
    verification: "Verificado: 50.01% vs 49.99% con 94% escrutado (Al Jazeera), 4.300 votos diferencia (Infobae). Fecha: 8-10 JUN 2026."
  }
}

],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 8 temas (5 competencia + 3 ventana)
   Auditoría de Oportunidad v8.2
═════════════════════════════════════════════════════════════ */
proposals: [

/* ═══ P1 — GOLDEN · EUROPA NO SABE HACER LA GUERRA (220K/13h EXPLOSIVO) ═══ */
{
  number: "P1",
  golden: true,
  title: "EUROPA NO SABE HACER LA GUERRA: 10 ucranianos con drones de $500 destruyeron más blindados OTAN que una brigada de tanques de $2.000M",
  subtitle: "Hedgehog: 17 blindados y 30 objetivos en medio día · €400.000M en defensa y ni camuflaje usan · Sistema Delta ucraniano humilló a 16.000 soldados de 12 países",
  flag: "eu",
  tags: [
    { cls:"tag-red", text:"🔴 SEÑAL EXPLOSIVA 220K/13h" },
    { cls:"tag-gold", text:"⭐ TEMA DORADO" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"EUROPA / DEFENSA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 600K-1M",
  chips: [
    { cls:"chip-gold", text:"🏆 CANAL NICHO: 220K/13h — proyección 500K+ (1.5x+)" },
    { cls:"chip-green", text:"⚡ Acelerando — G7 defensa en 2 días + War on the Rocks" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_OTAN_landscape_logo.svg?width=1200",
  bannerAlt: "Logo OTAN — la alianza que no sabe combatir contra drones",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_NATO.svg?width=1200",

  tesis: "Europa gasta más que nunca en defensa — €400.000M al año — pero sus soldados no saben pelear la guerra del siglo XXI. Durante el ejercicio Hedgehog de la OTAN en Estonia, 10 operadores ucranianos de drones actuaron como fuerza adversaria y destruyeron 17 vehículos blindados y 30 objetivos adicionales en MEDIO DÍA. Dos batallones OTAN eliminados. Los soldados europeos 'simplemente caminaban sin camuflaje, estacionando tiendas y blindados al descubierto'. Mientras tanto, los ucranianos usaban Delta — un sistema de mando con IA que integra drones, satélites y sensores en tiempo real. La paradoja brutal: Europa tiene los tanques más caros del mundo y no puede sobrevivir contra drones de $500. SEÑAL DE DEMANDA EXPLOSIVA: un canal del nicho publicó este tema hace 13 horas y lleva 220K views — proyección superior a 500K, la señal más fuerte del radar.",

  fields: [
    { label:"La noticia", value:"War on the Rocks publicó un análisis demoledor: '10 Ukrainians Humbled Two NATO Battalions. When Will NATO Wake Up?' Los datos del ejercicio Hedgehog (Estonia, mayo 2025, 16.000 soldados de 12 países OTAN) revelan que 10 operadores ucranianos con drones destruyeron simuladamente 17 blindados y alcanzaron 30 objetivos en medio día. Dos batallones eliminados. Los ucranianos incluían personal cedido DIRECTAMENTE del frente real. El sistema Delta de IA fue desplegado por primera vez en suelo de la OTAN. Un canal del nicho publicó este tema hace 13 horas y lleva 220K views." },
    { label:"Segunda derivada", value:"Europa tiene un PROBLEMA TÁCTICO, no solo presupuestario. Los debates sobre defensa europea se centran en cuánto gastar — pero Hedgehog demostró que CÓMO se gasta es lo que importa. Un Challenger 2 cuesta ~$5M, un Apache ~$35M, un HIMARS ~$4M. Un dron FPV ucraniano cuesta $500. Europa tiene la tecnología del siglo XX y la doctrina del siglo XX — contra la guerra del siglo XXI. El sistema Delta ucraniano integra IA, drones y sensores en una plataforma de mando que ningún ejército europeo puede replicar. La revolución de los drones no es futurista — ya pasó, y la OTAN la perdió en un ejercicio." },
    { label:"Gran pregunta", value:"¿Puede Europa defenderse si la guerra del siglo XXI ya no se gana con tanques sino con drones de $500 operados por IA — y la OTAN no sabe ni camuflarse?" },
    { label:"Señal de competencia", value:"SEÑAL EXPLOSIVA. Un canal castellanoparlante del nicho (P1, ~300K media) publicó hace 13 horas 'Europa indefensa ante Rusia / Hedgehog' y lleva 220K views — proyección a 24h de 400K+, lo que representaría 1.5x+ su media. En 13 horas es la señal de velocidad más alta del radar. La ventana está ABIERTA porque el tema coincide con el G7 de Évian (15-17 JUN) donde defensa es agenda principal. La competencia lo trató como noticia ('Europa indefensa'). VP puede entrar con segunda derivada: el gap táctico, no presupuestario. El dato de los $500 vs $5M es dinamita narrativa." },
    { label:"Demanda en medios", value:"War on the Rocks (análisis demoledor, junio 2026), DroneXL (datos del ejercicio, febrero 2026), Euromaidan Press ('We are f—ed'), Kyiv Post (detalle sistema Delta), 19FortyFive (análisis), Militarnyi (contexto militar). La historia está circulando en medios de defensa premium. NO en prensa generalista todavía — OPORTUNIDAD para VP de llevarla al público amplio." },
    { label:"Velocidad de agenda", value:"ACELERANDO. Convergencia de factores: (1) War on the Rocks publica análisis junio 2026, (2) canal nicho 220K/13h, (3) G7 Évian en 2 días con defensa como tema central, (4) Hezbollah usa la misma técnica de drones contra Israel (N7). El tema está en el momento exacto para publicar esta semana." },
    { label:"Historial VP", value:"VP publicó 'Rearme silencioso España' (176K/10d) — ángulo GASTO. VP publicó 'Ucrania victoria posible' (433K/4d) — ángulo FRENTE GENERAL. VP publicó '10M drones: plan Ucrania' (312K) — ángulo PRODUCCIÓN. PERO: ninguno cubre el GAP TÁCTICO de la OTAN. Hedgehog es un ángulo NUEVO: no es cuánto gasta Europa, sino que sus soldados no saben pelear contra drones. Los datos (10 vs 2 batallones, $500 vs $5M) son ultra específicos. Complementario a todos los anteriores." },
    { label:"Motor viral", value:"MECANISMO: dato impactante (10 destruyen 2 batallones = David vs Goliat moderno) + miedo (Europa no puede defenderse = afecta al espectador) + paradoja brutal (€400.000M y ni camuflarse saben) + cifra memorable ($500 drone vs $5M tanque) + guerra (conflicto activo, no teórico) + visualidad (mapas Estonia, rutas de drones, sistema Delta) + urgencia (G7 en 2 días). La competencia lo encuadró como 'Europa indefensa' (miedo) y funcionó — VP puede añadir la paradoja del dinero." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: en un bosque de Estonia, 10 ucranianos con drones de $500 acaban de destruir 2 batallones de la OTAN en medio día. 16.000 soldados de 12 países — derrotados por 10. Escalada: Europa gasta €400.000M al año, más que nunca, y tiene los tanques más caros del mundo. Pero los soldados ni se camuflaban. 'Simplemente caminaban al descubierto.' Giro: los ucranianos no usaron armas especiales — usaron Delta, un sistema de IA que ningún ejército europeo puede replicar. Cierre: si Europa no puede sobrevivir un ejercicio, ¿puede sobrevivir una guerra real?" },
    { label:"Promesa cumplible", value:"El video promete explicar por qué Europa gasta récord en defensa y sigue sin poder combatir. Demostrable: datos Hedgehog (DroneXL, Militarnyi), costes comparativos (IHS Jane's), sistema Delta (Kyiv Post), análisis táctico (War on the Rocks). No es clickbait: los datos son verificables y el gap es documentado." },
    { label:"Ventaja VP", value:"ALTA. VP es el canal hispano que mejor combina datos militares + geopolítica + paradojas + mapas. Este tema es ULTRA VP: tiene mapa (Estonia/frontera rusa), datos (10 vs 16.000, $500 vs $5M), paradoja (gasto récord = incapacidad), sistema tecnológico (Delta + IA), y pregunta de fondo (¿puede Europa sobrevivir?). La competencia lo trató como noticia. VP puede hacer el análisis de 25 minutos con datos, mapas y segunda derivada. Nadie más en español puede hacerlo a este nivel." },
    { label:"Caso para 800K/1M", value:"SEÑAL MÁS FUERTE DEL RADAR: 220K/13h en canal del nicho = proyección 500K+ (1.5x+ media). Dato viral ($500 vs $5M, 10 vs 2 batallones) es memorable y compartible. Tema conecta con miedo real del espectador (¿puede Europa defenderse?). G7 en 2 días amplifica actualidad. VP tiene ventaja absoluta en análisis militar con mapas. Riesgo: Hedgehog fue en 2025, podría parecer 'viejo'. Mitigar: anclar en la publicación de War on the Rocks de junio 2026 y el debate del G7. VP debe entrar con el ángulo TÁCTICO ($500 vs $5M), NO repetir 'Europa gasta más' (ya cubierto)." },
    { label:"Título mental", value:"Europa gasta más que nunca en defensa — y 10 ucranianos con drones de $500 destruyeron 2 batallones OTAN en medio día" },
    { label:"Qué investigar más", value:"Detalles del sistema Delta (IA, integración sensores). Coste comparativo: dron FPV vs blindados OTAN destruidos. Reacción oficial de la OTAN al ejercicio. Qué cambios doctrinales se han implementado desde Hedgehog. Estado actual de la producción europea de drones. Conexión con Hezbollah usando la misma técnica contra Israel." },
    { label:"Veredicto", value:"ATACAR HOY — señal explosiva 220K/13h, dato ultra viral (10 vs 2 batallones), G7 en 2 días amplifica, ángulo táctico es NUEVO para VP (no repetido), ventaja alta en análisis militar, retención fuerte." }
  ],
  sources: [
    { medium:"War on the Rocks", url:"https://warontherocks.com/10-ukrainians-humbled-two-nato-battalions-when-will-nato-wake-up/", desc:"Análisis demoledor: ¿cuándo despertará la OTAN?" },
    { medium:"DroneXL", url:"https://dronexl.co/2026/02/12/nato-exercise-ukrainians-drones-battalions/", desc:"Datos: 17 blindados, 30 objetivos, medio día" },
    { medium:"Euromaidan Press", url:"https://euromaidanpress.com/2026/02/13/nato-exercise-reveals-alliance-cant-survive-ukraine-style-drone-warfare/", desc:"'We are f—ed': OTAN no sobrevive guerra de drones" },
    { medium:"Militarnyi", url:"https://militarnyi.com/en/news/ukrainian-drone-operators-defeated-nato-combat-group-during-joint-exercises/", desc:"Sistema Delta desplegado por primera vez en Estonia" }
  ]
},

/* ═══ P2 — VENEZUELA SE APAGA (339K/2d = 1.13x) ═══ */
{
  number: "P2",
  golden: false,
  title: "VENEZUELA SE APAGA: el país con más petróleo del mundo no puede mantener las luces encendidas — y ahora abre la electricidad al capital privado",
  subtitle: "Fin del monopolio de Corpoelec tras 15 años · Zulia: 6h apagones diarios · Bloomberg: petroleras deben generar su propia luz · Rendición ideológica silenciosa del chavismo",
  flag: "ve",
  tags: [
    { cls:"tag-red", text:"🔴 339K/2d" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"LATINOAMÉRICA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🏆 CANAL NICHO: 339K/2d (1.13x media)" },
    { cls:"chip-green", text:"⚡ Ventana óptima — reforma recién aprobada" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Venezuela.svg?width=1200",
  bannerAlt: "Venezuela — el país petrolero que no puede encender la luz",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Venezuela.svg?width=1200",

  tesis: "Venezuela tiene las mayores reservas de petróleo del mundo pero no puede mantener las luces encendidas. En Zulia, los apagones duran 6 horas diarias. Las fábricas fuera de Caracas se paralizan por cortes de voltaje. Bloomberg informa que Venezuela exige a las petroleras que generen su propia electricidad para operar. Y ahora, la Asamblea Nacional acaba de aprobar una reforma que abre el sector eléctrico a inversión privada por primera vez en 15 años, terminando el monopolio de Corpoelec. Es la rendición ideológica más silenciosa del chavismo: admitir que el Estado destruyó la infraestructura que prometió proteger. Un canal del nicho publicó hace 2 días sobre Venezuela y lleva 339K views (1.13x su media), confirmando demanda real.",

  fields: [
    { label:"La noticia", value:"La Asamblea Nacional de Venezuela aprobó la reforma de la ley de electricidad que abre el sector a inversión privada mediante concesiones a largo plazo (MercoPress, 4 JUN). Termina el monopolio de 15 años de Corpoelec. Bloomberg informó el 2 JUN que Venezuela exige a las petroleras que generen su propia electricidad para poder operar en el país. En Zulia, los apagones duran 6 horas diarias." },
    { label:"Segunda derivada", value:"No es solo una crisis eléctrica — es la AUTOPSIA del modelo chavista. Chávez nacionalizó la electricidad prometiendo energía para todos. 15 años después, el Estado no puede abastecer ni a las petroleras. Venezuela tiene petróleo para generar electricidad para medio continente, pero no puede encender un hospital en Maracaibo. La apertura al capital privado no es una reforma — es una confesión: el chavismo destruyó lo que prometió proteger. Y hay un detalle explosivo: Fortune reveló que EEUU hackeó la red eléctrica venezolana el 3 de enero. ¿Cuánto del colapso es negligencia y cuánto sabotaje?" },
    { label:"Gran pregunta", value:"¿Cómo es posible que el país con más petróleo del mundo no pueda mantener las luces encendidas — y quién destruyó realmente la red eléctrica: el chavismo, el sabotaje estadounidense, o ambos?" },
    { label:"Señal de competencia", value:"CONFIRMADA. Un canal castellanoparlante (P1, ~300K media) publicó hace 2 días 'Venezuela se apaga / Trump parche' y lleva 339K views (1.13x su media). Ligeramente por encima de la media — señal sólida, no explosiva. El enfoque del canal fue descriptivo: 'qué pasa en Venezuela'. VP puede entrar con la paradoja petróleo-electricidad y la rendición ideológica del chavismo. Otro canal (P2, ~40K media) publicó 'EEUU ataca Irán' hace 2 días con 22K (0.55x) — Venezuela funcionó mejor que Irán en este canal. Señal de que la audiencia hispana quiere Venezuela." },
    { label:"Demanda en medios", value:"Bloomberg (petroleras autoabastecimiento 2 JUN), MercoPress (reforma ley electricidad 4 JUN), Energy Connects (red amenaza recuperación, mayo), Robert Bryce/Substack (análisis apagones). Cobertura moderada pero sostenida en medios económicos. NO en portadas de WSJ/FT/NYT — la historia está en medios especializados." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA. La reforma acaba de aprobarse. Los apagones continúan. Bloomberg acaba de publicar que las petroleras deben generar su propia electricidad. El gobierno post-Maduro está abriendo sectores al capital privado en secuencia. La ventana permanecerá abierta 1-2 semanas más." },
    { label:"Historial VP", value:"VP tiene MÚLTIPLES videos Venezuela: 'Delcy consolida régimen' (245K/1m), 'Arranca operación Cuba' (484K/3w — Cuba, no Venezuela directo), 'Golpe estado Bolivia' (332K/2w — Latam pero no Venezuela). VP NUNCA hizo un video sobre INFRAESTRUCTURA eléctrica de Venezuela. Es un ángulo NUEVO. El patrón 'colapso de potencia + paradoja' funciona (Putin economía 355K). Venezuela + paradoja del petróleo encaja perfectamente." },
    { label:"Motor viral", value:"MECANISMO: paradoja brutal (más petróleo del mundo, no puede encender la luz) + dato impactante (6h apagones diarios, petroleras generan su propia electricidad) + colapso de modelo (chavismo admite fracaso) + país reconocible (Venezuela = audiencia hispana masiva) + misterio (¿EEUU hackeó la red?) + consecuencia tangible (gasolina, inflación, migración) + personaje (Chávez prometió, Maduro destruyó, Delcy ahora abre al capital)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: en Maracaibo, la capital petrolera de Venezuela, las familias duermen sin aire acondicionado 6 horas al día porque no hay electricidad. El país que flota sobre el mayor lago de petróleo del mundo no puede mantener las luces encendidas. Escalada: Chávez nacionalizó la electricidad en 2010 prometiendo 'energía soberana'. 15 años después, Corpoelec está en ruinas. Bloomberg revela que las petroleras deben traer sus propios generadores. Giro: Fortune revela que EEUU hackeó la red eléctrica el 3 de enero. ¿Fue el chavismo o el sabotaje? Cierre: Venezuela acaba de abrir la electricidad al capital privado — la confesión silenciosa de que el Estado destruyó lo que prometió proteger." },
    { label:"Promesa cumplible", value:"El video promete explicar por qué Venezuela no tiene electricidad a pesar de tener más petróleo que nadie, y quién es responsable. Demostrable: datos de apagones (Bloomberg, MercoPress), reforma Corpoelec (MercoPress), hackeo EEUU (Fortune), historia de la nacionalización (documentación pública)." },
    { label:"Ventaja VP", value:"ALTA. Venezuela es audiencia cautiva de VP. La paradoja petróleo-electricidad es exactamente el tipo de tesis que VP maneja mejor que nadie. Los datos son verificables. La historia tiene 15 años de recorrido que VP puede contar con su estilo de contexto histórico + datos + paradoja. La competencia lo trató como noticia; VP puede hacer la autopsia del modelo." },
    { label:"Caso para 800K/1M", value:"DEMANDA CONFIRMADA: 339K/2d (1.13x) en canal nicho. Venezuela es audiencia cautiva hispana. Paradoja petróleo-electricidad es memorable y compartible. El ángulo 'rendición ideológica del chavismo' es NUEVO — nadie lo ha encuadrado así. VP tiene 'Arranca operación Cuba' (484K) como precedente de Latam funcionando. Riesgo: saturación Venezuela (VP ha hecho 10+ videos). Mitigar: anclar en INFRAESTRUCTURA, no en política. El dato '6h de apagones en el país con más petróleo' es el gancho. Para 800K, VP necesita el misterio del hackeo EEUU como giro narrativo." },
    { label:"Título mental", value:"El país con más petróleo del mundo no puede mantener las luces encendidas — y acaba de admitir que su propio gobierno destruyó la red eléctrica" },
    { label:"Qué investigar más", value:"Datos específicos de Corpoelec: capacidad instalada vs generación real. Mapa de apagones por estado. Fortune: detalles del hackeo EEUU (3 enero). Cómo operan las petroleras sin electricidad estatal. Comparativa con colapsos eléctricos de otros países. Estado de la represa de Guri (75% de la generación)." },
    { label:"Veredicto", value:"ATACAR HOY — señal de competencia 339K/2d confirma demanda, paradoja petróleo-electricidad es ultra VP, ángulo infraestructura es NUEVO, Venezuela es audiencia cautiva, retención fuerte." }
  ],
  sources: [
    { medium:"MercoPress", url:"https://en.mercopress.com/2026/06/04/venezuela-moves-to-open-its-power-sector-to-private-investment-after-years-of-blackouts", desc:"Reforma: fin monopolio Corpoelec" },
    { medium:"Bloomberg", url:"https://www.bloomberg.com/news/articles/2026-06-02/venezuela-wants-oil-firms-to-supply-their-own-power-for-projects", desc:"Petroleras deben generar su propia electricidad" },
    { medium:"Energy Connects", url:"https://www.energyconnects.com/news/utilities/2026/may/venezuela-s-faulty-power-grid-risks-derailing-economic-comeback/", desc:"Red eléctrica amenaza la recuperación económica" },
    { medium:"Robert Bryce", url:"https://robertbryce.substack.com/p/maduros-gone-the-blackouts-arent", desc:"Maduro se fue, los apagones no" }
  ]
},

/* ═══ P3 — ARMENIA VOTA DEJAR RUSIA (310K/3d = 1.03x) ═══ */
{
  number: "P3",
  golden: false,
  title: "ARMENIA VOTA MARCHARSE DE RUSIA: la primera aliada de Putin que se fue por las urnas — y Moscú no puede hacer nada",
  subtitle: "Pashinyan gana con 49.8% · Bloomberg: Rusia amenaza con expulsión de OTSC · El patrón: Georgia, Moldova, Armenia — el imperio se vacía",
  flag: "am",
  tags: [
    { cls:"tag-orange", text:"🟠 310K/3d" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"CÁUCASO / RUSIA" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 350K-500K",
  chips: [
    { cls:"chip-gold", text:"🏆 CANAL NICHO: 310K/3d (1.03x media)" },
    { cls:"chip-green", text:"⚡ Ventana óptima — elecciones 7 JUN + Bloomberg 10 JUN" },
    { cls:"chip-blue", text:"🔒 Retención: media-fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: media-alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=1200",
  bannerAlt: "Armenia — primer aliado ruso que vota marcharse",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=1200",

  tesis: "Armenia es la primera aliada formal de Rusia que vota democráticamente abandonar la órbita de Moscú. No la echaron, no hubo golpe, no hubo invasión — VOTARON marcharse al bando europeo. Pashinyan ganó las elecciones del 7 de junio con 49.8% y mandato claro para pivotar hacia la UE. Rusia amenazó el 10 de junio con expulsar a Armenia de la OTSC por impago de cuotas. Pero Putin no puede hacer nada: Armenia no es Ucrania — es una democracia que eligió su camino. El patrón es demoledor: Georgia, Moldova, Armenia — el sistema de alianzas ruso se vacía país por país, no por guerras sino por elecciones.",

  fields: [
    { label:"La noticia", value:"El partido Contrato Civil de Pashinyan ganó las elecciones parlamentarias del 7 JUN con 49.8% y 61 escaños (Bloomberg). La elección fue un referéndum sobre el giro europeo. El 10 JUN, Bloomberg informó que Rusia amenaza con retirar los derechos de Armenia en la OTSC por impago de cuotas durante más de 2 años. En mayo, el Kremlin amenazó con cuestionar la membresía en la Unión Económica Euroasiática. Pashinyan congeló la participación en la OTSC y faltó a reuniones de alto nivel." },
    { label:"Segunda derivada", value:"Armenia no es solo un aliado que se va — es la PRUEBA de que el sistema de alianzas ruso se desmorona desde dentro. Georgia celebró protestas pro-UE masivas. Moldova votó adhesión a la UE. Y ahora Armenia VOTA marcharse. El patrón es claro: los países que Putin no puede invadir (por distancia, por democracia, por circunstancias) se van. Solo los que ocupa militarmente (Ucrania, Bielorrusia, Transnistria) se quedan. La amenaza de la OTSC es impotente: ¿qué va a hacer Rusia, invadir otro país del Cáucaso mientras pierde en Ucrania?" },
    { label:"Gran pregunta", value:"¿Está Rusia perdiendo su imperio no por guerras sino por elecciones — y es Armenia la prueba de que Putin solo puede retener aliados que ocupa militarmente?" },
    { label:"Señal de competencia", value:"SEÑAL SÓLIDA. Un canal castellanoparlante (P1, ~300K media) publicó hace 3 días 'Armenia se aleja de Rusia' y lleva 310K views (1.03x su media). Justo en la media — señal de interés pero no explosiva. El enfoque fue descriptivo. VP NO tiene videos recientes sobre Armenia — es un GAP TOTAL en español. La ventana sigue abierta: el tema está en Bloomberg pero no saturado en YouTube. VP puede entrar con la tesis del 'imperio que se vacía por elecciones'." },
    { label:"Demanda en medios", value:"Bloomberg (2 artículos: elecciones 7 JUN, amenaza OTSC 10 JUN), Kyiv Post (análisis giro estratégico), UA News (derrota del Kremlin), Euronews (Putin ultimátum abril). Cobertura en medios premium pero NO en portadas. Es una historia que está creciendo." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA. Elecciones 7 JUN (recientes), Bloomberg OTSC 10 JUN (fresco), posible cumbre UE-Armenia este año. La historia está en su momento justo: lo bastante reciente para ser actual, lo bastante establecida para tener datos sólidos." },
    { label:"Historial VP", value:"VP publicó 'Azerbaiyán planta cara a Rusia' (JULIO 2025) — relacionado pero desde perspectiva de Bakú, no Ereván. VP NO tiene videos sobre Armenia post-guerra de 2020. GAP ENORME. El patrón 'colapso de potencia' funciona: Putin economía colapsa (355K). Armenia como prueba del colapso imperial es el mismo patrón con nueva evidencia." },
    { label:"Motor viral", value:"MECANISMO: Putin/Rusia (personaje reconocible) + imperio que se desmorona (narrativa potente) + democracia vs autocracia (debate global) + patrón (Georgia-Moldova-Armenia = tendencia) + mapa del Cáucaso (visual) + consecuencia (si Armenia se va, ¿quién sigue? Kazajistán?) + impotencia de Putin (no puede invadir otro país mientras pierde en Ucrania)." },
    { label:"Retención narrativa", value:"MEDIA-FUERTE. Apertura: en septiembre de 2020, cuando Azerbaiyán atacó Nagorno-Karabaj, Armenia llamó a Rusia pidiendo ayuda. Rusia no respondió. Seis años después, Armenia ha votado marcharse al bando europeo. Escalada: no es solo Armenia — Georgia, Moldova, los tres están girando hacia Europa. El sistema de alianzas ruso se está vaciando. Giro: la amenaza de Rusia es impotente — ¿qué va a hacer, invadir el Cáucaso mientras pierde en Ucrania? Cierre: Putin solo retiene aliados que ocupa militarmente. Los que tienen elecciones libres, se van." },
    { label:"Promesa cumplible", value:"El video promete explicar por qué el sistema de alianzas ruso se está desmoronando y por qué Armenia es la prueba. Demostrable: elecciones 7 JUN (Bloomberg), amenaza OTSC (Bloomberg), congelación OTSC (Kyiv Post), patrón Georgia-Moldova (documentación pública)." },
    { label:"Ventaja VP", value:"MEDIA-ALTA. VP domina el tema Rusia/Ucrania y tiene el contexto histórico. Armenia es un país 'lejano' para la audiencia hispana, lo que reduce el potencial viral. PERO: si se encuadra como 'el imperio ruso se desmorona', el país pasa a ser ejemplo del patrón global. VP puede hacerlo con mapas del Cáucaso, la historia de Nagorno-Karabaj, y la comparativa con Georgia y Moldova." },
    { label:"Caso para 800K/1M", value:"SEÑAL MODERADA: 310K/3d (1.03x) en canal del nicho — interés real pero no explosivo. Armenia como país 'lejano' limita el techo viral. PERO: si se encuadra como 'el imperio ruso se desmorona', el potencial sube a 350K-500K. VP tiene ventaja en contexto Rusia. Para 800K, necesitaría combinarse con otro tema (Crimea, Ucrania victoria) como parte de una narrativa más amplia. Como video independiente, proyección realista: 300K-400K. Riesgo: audiencia hispana no reconoce Armenia." },
    { label:"Título mental", value:"La primera aliada de Putin que se fue por las urnas — Armenia vota marcharse de Rusia y Moscú no puede hacer nada" },
    { label:"Qué investigar más", value:"Detalles del giro: ¿qué acuerdos ha firmado Armenia con la UE? Estado de la base militar rusa en Gyumri. Reacción de Azerbaiyán y Turquía. Comparativa económica: comercio Armenia con Rusia vs UE. ¿Puede Armenia sobrevivir económicamente sin Rusia? ¿Qué sigue: Kazajistán, Kirguistán?" },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — señal de competencia sólida (310K/3d), GAP total en VP, ángulo del 'imperio que se vacía' es potente, pero Armenia como país limita el techo viral. Publicar esta semana si se puede anclar en una tesis más amplia sobre el colapso del sistema de alianzas ruso." }
  ],
  sources: [
    { medium:"Bloomberg", url:"https://www.bloomberg.com/news/articles/2026-06-10/russia-threatens-armenia-over-membership-in-csto-military-bloc", desc:"Rusia amenaza con expulsar a Armenia de la OTSC" },
    { medium:"Bloomberg", url:"https://www.bloomberg.com/news/articles/2026-06-07/armenia-holds-parliamentary-election-with-russia-ties-in-focus", desc:"Elecciones: Pashinyan 49.8%, mandato europeo" },
    { medium:"UA News", url:"https://ua.news/en/world/kavkazkii-promakh-kremlia-iak-proishli-vibori-u-virmeniyi", desc:"Victoria de Pashinyan = derrota del Kremlin" },
    { medium:"Kyiv Post", url:"https://www.kyivpost.com/opinion/77769", desc:"Armenia señala cambio desde Rusia hacia Occidente" }
  ]
},

/* ═══ P4 — ARSENAL SECRETO IRÁN (MdP 87K/2d = 2.18x) ═══ */
{
  number: "P4",
  golden: false,
  title: "EL ARSENAL SECRETO DE IRÁN: cómo un país bajo 40 años de sanciones construyó las armas que pusieron de rodillas a EEUU",
  subtitle: "Misiles hipersónicos · Drones que Rusia compró · Proxies en 4 países · Industria de defensa bajo sanciones — la paradoja: Irán perdió la guerra pero su arsenal GANÓ",
  flag: "ir",
  tags: [
    { cls:"tag-red", text:"🔴 2.18x MEDIA — MULTIPLICADOR MÁS ALTO" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"ORIENTE MEDIO / DEFENSA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 350K-500K",
  chips: [
    { cls:"chip-gold", text:"🏆 CANAL NICHO: 87K/2d = 2.18x media (~40K) — multiplicador más alto" },
    { cls:"chip-green", text:"⚡ Ventana óptima — acuerdo de paz recién cerrado" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=1200",
  bannerAlt: "Irán — el arsenal que nadie esperaba",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=1200",

  tesis: "Ahora que la guerra termina y el texto del acuerdo está firmado, la pregunta que nadie se hace es la más importante: ¿cómo construyó Irán un arsenal capaz de paralizar el Estrecho de Ormuz, alcanzar Israel con misiles hipersónicos, vender drones a Rusia y controlar proxies en 4 países — todo bajo 40 años de las sanciones más severas del mundo? El multiplicador más alto del radar confirma demanda: un canal del nicho publicó hace 2 días 'El secreto de la industria de defensa iraní' y lleva 87K views — 2.18x su media habitual. Irán perdió la guerra convencional contra EEUU pero su industria militar GANÓ: demostró que funciona, ahora el mundo sabe lo que tiene, y cada comprador de armas ruso, chino o africano toma nota.",

  fields: [
    { label:"La noticia", value:"El acuerdo de paz EEUU-Irán alcanzó su texto final el 12 JUN (CBS, CNN). Ormuz se reabrirá en 30 días. Las sanciones petroleras se levantarán parcialmente. El Brent cayó 3% a $87. PERO: la guerra reveló la verdadera capacidad militar iraní — misiles hipersónicos, drones Shahed que Rusia compró para usar en Ucrania, una red de proxies que controló Líbano, Yemen, Irak y Siria simultáneamente. Un canal del nicho (P2, ~40K media) publicó hace 2 días 'El secreto de la industria de defensa iraní' y lleva 87K views (2.18x su media)." },
    { label:"Segunda derivada", value:"La paradoja del acuerdo: Irán PERDIÓ la guerra (bombardeos EEUU, Israel atacó Beirut, Ormuz bloqueado) pero su industria militar GANÓ. ¿Por qué? Porque la guerra demostró que el arsenal iraní FUNCIONA. Misiles hipersónicos alcanzaron Israel. Drones cerraron Ormuz. Proxies resistieron en 4 frentes. Todo fabricado bajo sanciones. Ahora el mundo sabe lo que Irán puede hacer — y cada potencia emergente que busca armamento barato y efectivo fuera del control de EEUU toma nota. El acuerdo le da legitimidad diplomática a un arsenal que la guerra le dio legitimidad militar." },
    { label:"Gran pregunta", value:"¿Cómo construyó Irán un arsenal capaz de poner de rodillas a EEUU bajo 40 años de las sanciones más duras del mundo — y qué significa que ahora todo el mundo sepa que funciona?" },
    { label:"Señal de competencia", value:"MULTIPLICADOR MÁS ALTO DEL RADAR. Un canal del nicho (P2, ~40K media) publicó hace 2 días 'El SECRETO de la industria de defensa IRANÍ' y lleva 87K views — 2.18x su media habitual. En un canal de ese tamaño, 2.18x es una señal fortísima de demanda no satisfecha: la audiencia QUIERE entender CÓMO Irán construyó su arsenal, no solo QUÉ pasó en la guerra. VP publicó HOY '¿Quién gana y pierde con el fin de la guerra?' (149K/16h) — ese es el ángulo POLÍTICO. El ángulo MILITAR-INDUSTRIAL es diferente y complementario. RIESGO: VP acaba de publicar sobre Irán hoy. Un segundo video Irán requiere que el ángulo sea claramente diferente." },
    { label:"Demanda en medios", value:"CSIS tiene análisis de la industria de defensa iraní. Reuters documentó las ventas de drones Shahed a Rusia. Al Jazeera y BBC cubrieron la red de proxies. CNN informó sobre los misiles hipersónicos. DroneXL documentó la transferencia de técnicas a Hezbollah (fibra óptica). La información existe dispersa — nadie ha hecho la síntesis completa." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA. El acuerdo de paz acaba de cerrarse. Es el momento perfecto para hacer el 'balance de la guerra' desde el ángulo militar. Mientras la prensa cubre las cláusulas diplomáticas, VP puede cubrir la lección militar: qué aprendimos sobre lo que Irán puede hacer." },
    { label:"Historial VP", value:"VP publicó HOY sobre Irán (149K/16h) — ángulo POLÍTICO (quién gana/pierde). VP tiene guión 'La industria de drones iraní ¿puede cambiar el rumbo de la guerra?' (MARZO 2026) — ángulo parcial sobre drones. PERO: un análisis POST-GUERRA completo del arsenal iraní (misiles + drones + proxies + industria bajo sanciones) es NUEVO. El patrón Irán funciona siempre: 388K, 377K, 363K, 412K. RIESGO: publicar 2 videos Irán seguidos. MITIGAR: separar por 3-4 días y con ángulo claramente diferente (militar vs político)." },
    { label:"Motor viral", value:"MECANISMO: guerra (conflicto real, no teórico) + dato impactante (arsenal bajo sanciones 40 años) + paradoja (perdió la guerra, ganó la carrera armamentística) + miedo (¿quién más va a copiar el modelo iraní?) + personaje (Irán como David vs Goliat EEUU) + revelación (los secretos de cómo lo construyeron) + consecuencia global (proliferación del modelo iraní a otros países)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: Irán acaba de firmar la paz con EEUU. Perdió la guerra — bombardeado, bloqueado, aislado. Pero hay algo que nadie está diciendo: Irán GANÓ la carrera armamentística. Escalada: misiles hipersónicos que alcanzaron Israel, drones que Rusia compró para Ucrania, proxies que resistieron en 4 países — todo fabricado bajo las sanciones más duras del mundo. Giro: el modelo iraní es replicable. Cualquier país con ingenieros y voluntad puede construir un arsenal que ponga en jaque a una superpotencia. Cierre: el acuerdo le dio legitimidad diplomática. La guerra le dio legitimidad militar. Irán perdió la batalla pero ganó la guerra." },
    { label:"Promesa cumplible", value:"El video promete revelar cómo Irán construyó su arsenal bajo sanciones. Demostrable: informes CSIS, ventas a Rusia (Reuters), red de proxies (BBC), misiles hipersónicos (CNN). Todo verificable y documentado." },
    { label:"Ventaja VP", value:"ALTA. VP tiene el contexto de 10+ videos sobre Irán, conocimiento profundo del conflicto, y la capacidad de hacer un análisis de 25 minutos con datos, mapas y paradojas. El ángulo post-guerra (balance militar) es ÚNICO — la competencia está cubriendo la diplomacia, VP puede cubrir el arsenal. Mapas de alcance de misiles, rutas de proxies, fábricas de drones — ultra visual." },
    { label:"Caso para 800K/1M", value:"MULTIPLICADOR 2.18x confirma demanda insatisfecha. Irán = patrón más probado de VP (350K-500K consistentemente). El ángulo post-guerra es FRESCO. PERO: VP publicó Irán HOY — publicar otro requiere 3-4 días de separación y ángulo claramente diferente. Para 800K, necesita dato revelador (cifra de producción de drones, coste del arsenal iraní vs presupuesto EEUU). Proyección realista: 350K-450K si el ángulo se diferencia bien." },
    { label:"Título mental", value:"Irán perdió la guerra pero ganó la carrera armamentística — cómo un país bajo sanciones construyó el arsenal que puso de rodillas a EEUU" },
    { label:"Qué investigar más", value:"Cifras de producción: ¿cuántos drones Shahed fabricó Irán? ¿A qué precio? Ventas a Rusia: volumen y facturación. Alcance de misiles hipersónicos vs defensas EEUU/Israel. Red de proxies: cuántos combatientes, en cuántos países. Modelo de industria bajo sanciones: ¿quién más lo puede copiar (Corea del Norte, Myanmar)?" },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — multiplicador 2.18x es la señal más fuerte por rendimiento relativo, Irán es patrón probado, ángulo post-guerra es nuevo. PERO: VP publicó Irán hoy, se necesita 3-4 días de separación. Preparar guión esta semana para publicar lunes/martes." }
  ],
  sources: [
    { medium:"CBS News", url:"https://www.cbsnews.com/live-updates/iran-us-war-israel-hezbollah-fighting-ceasefire-efforts/", desc:"Texto final acuerdo de paz alcanzado" },
    { medium:"Axios", url:"https://www.axios.com/2026/05/24/iran-deal-strait-hormuz-sanctions-nuclear", desc:"Cláusulas del acuerdo: Ormuz, sanciones, nuclear" },
    { medium:"DroneXL", url:"https://dronexl.co/2026/06/04/hezbollah-ukraine-fiber-optic-drone-israel-no-jammer/", desc:"Transferencia técnica iraní a Hezbollah" },
    { medium:"CNN", url:"https://www.cnn.com/2026/05/03/middleeast/hezbollah-fiber-optic-drones-israel-intl-cmd", desc:"Irán equipa a proxies con tecnología ucraniana adaptada" }
  ]
},

/* ═══ P5 — COLOMBIA 8 DÍAS (VP APROBADO) ═══ */
{
  number: "P5",
  golden: false,
  title: "COLOMBIA A 8 DÍAS: por qué un outsider antisistema con 87% de probabilidad puede completar el giro continental de Latinoamérica",
  subtitle: "Espriella vs Cepeda · Patrón Bukele-Milei · VP APROBADO con deadline · 2 videos previos (359K + 164K) · Cierre antes del balotaje 21 JUN",
  flag: "co",
  tags: [
    { cls:"tag-orange", text:"🟠 VP APROBADO" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-purple", text:"📊 COMPETENCIA" },
    { cls:"tag-blue", text:"LATINOAMÉRICA" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 300K-400K",
  chips: [
    { cls:"chip-gold", text:"🏆 CANAL NICHO: 257K/4d (0.86x — demanda moderada)" },
    { cls:"chip-green", text:"⚡ Deadline — balotaje 21 JUN" },
    { cls:"chip-blue", text:"🔒 Retención: media" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: media" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",
  bannerAlt: "Colombia — 8 días para el balotaje que puede cambiar Latinoamérica",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=1200",

  tesis: "Faltan 8 días para el balotaje colombiano y Espriella lidera con 87.5% de probabilidad en Polymarket. Si gana, completa el giro continental: Bukele en El Salvador, Milei en Argentina, ahora Espriella en la cuarta economía de Latinoamérica. No son partidos, son outsiders antisistema que canalizan la frustración contra élites corruptas. VP tiene el tema APROBADO y dos videos previos que funcionaron (359K + 164K). Este sería el cierre de la trilogía antes de la votación.",

  fields: [
    { label:"La noticia", value:"Faltan 8 días para la segunda vuelta en Colombia (21 JUN). Iker Espriella lidera con 87.5% en Polymarket. VP publicó ayer 'Colombia: Petrismo estalla' (164K/1d) y hace 11 días 'Colombia: el Trump colombiano' (359K). Un canal del nicho publicó hace 4 días 'Colombia fin petrismo' con 257K views (0.86x su media — por debajo pero aún sustancial)." },
    { label:"Segunda derivada", value:"Espriella no es solo un candidato colombiano — es la PRUEBA de un patrón continental. Bukele transformó El Salvador con mano dura. Milei transformó Argentina con austeridad radical. Espriella promete transformar Colombia con... ¿qué exactamente? El video final de VP antes de la votación debería responder: ¿es Espriella un Bukele que puede funcionar, o un Chávez que promete cambio y entrega caos? La cuarta economía de Latam está en juego." },
    { label:"Gran pregunta", value:"¿Es Espriella el próximo Bukele (outsider que funciona) o el próximo Chávez (outsider que destruye) — y qué significa para toda Latinoamérica que el patrón se repita?" },
    { label:"Señal de competencia", value:"SEÑAL MODERADA. Canal P1 publicó hace 4 días 'Colombia fin petrismo' con 257K views (0.86x media). Por debajo de la media — la competencia no está explotando con Colombia. PERO: VP tiene el tema APROBADO con deadline en PROPOSAL_TRACKER. Y VP ya publicó 2 videos Colombia exitosos (359K + 164K). El riesgo es saturación: TERCER video Colombia en 12 días. Mitigar: enfocarse en consecuencias geopolíticas del resultado, no en la campaña." },
    { label:"Demanda en medios", value:"Polymarket (87.5% Espriella), Infobae (cobertura continua), El Tiempo (prensa local). Cobertura regional fuerte pero NO en medios globales premium. Colombia no está en portadas de WSJ/FT/NYT — es una historia latinoamericana." },
    { label:"Velocidad de agenda", value:"DEADLINE. El balotaje es el 21 JUN. VP publicó ayer sobre Colombia. Si publica un tercer video, debe ser esta semana (antes del 18-19 JUN para dar margen)." },
    { label:"Historial VP", value:"VP publicó 'Colombia: el Trump colombiano' (359K/11d) — funcionó bien. VP publicó 'Colombia: Petrismo estalla' (164K/1d) — en progreso, ritmo moderado. PROPOSAL_TRACKER: 'Colombia patrón Bukele-Milei-Espriella' APROBADO con deadline 14 JUN. Publicar antes del 14 JUN original o como máximo antes del 18 JUN." },
    { label:"Motor viral", value:"MECANISMO: elecciones inminentes (urgencia) + país reconocible (Colombia = audiencia hispana) + patrón continental (Bukele-Milei = marco conocido) + personaje (Espriella como outsider) + consecuencia (cuarta economía Latam). RIESGO: tercer video Colombia puede cansar a la audiencia." },
    { label:"Retención narrativa", value:"MEDIA. Este sería el tercer video de una serie, lo que ayuda a lectores fieles pero puede cansar a nuevos. Apertura: en 8 días, Colombia elige. El outsider que nadie conocía hace un año tiene 87% de probabilidad. Es el patrón que empezó con Bukele y siguió con Milei. Pero hay una diferencia: Colombia tiene 8 millones de desplazados, grupos armados activos y la mayor producción de coca del mundo. Escalada: qué promete Espriella y por qué puede funcionar o fallar. Cierre: lo que Colombia elija afecta a todo el continente." },
    { label:"Promesa cumplible", value:"El video promete explicar qué significa Espriella para Colombia y Latam. Demostrable con datos electorales, comparativa con Bukele/Milei, indicadores económicos colombianos." },
    { label:"Ventaja VP", value:"MEDIA. VP ya hizo 2 videos Colombia y tiene el contexto. Pero la competencia también cubrió Colombia. La ventaja es la comparativa continental (Bukele-Milei-Espriella) que VP puede hacer mejor que un medio colombiano." },
    { label:"Caso para 800K/1M", value:"Difícil alcanzar 800K con Colombia como tercer video de una serie. La competencia tiene señal moderada (0.86x). Proyección realista: 250K-350K. El valor no está en views máximas sino en completar la serie antes del balotaje. Para 800K necesitaría un giro dramático (crisis electoral, violencia, intervención EEUU)." },
    { label:"Título mental", value:"En 8 días Colombia elige — y el outsider que nadie conocía hace un año puede completar el giro que empezó Bukele" },
    { label:"Qué investigar más", value:"Programa de Espriella: ¿qué propone concretamente? Comparativa económica: El Salvador post-Bukele, Argentina post-Milei. Grupos armados: reacción del ELN/disidencias FARC a Espriella. Impacto en relación Colombia-EEUU. Mercados: reacción del peso colombiano." },
    { label:"Veredicto", value:"ATACAR HOY — VP APROBADO con deadline, balotaje en 8 días, cierre de trilogía. Publicar antes del 18 JUN. Riesgo de saturación (3er video Colombia en 12 días). Enfocarse en consecuencias, no campaña." }
  ],
  sources: [
    { medium:"Polymarket", url:"https://polymarket.com/", desc:"Espriella 87.5% probabilidad" },
    { medium:"Infobae", url:"https://www.infobae.com/colombia/", desc:"Cobertura electoral continua" },
    { medium:"VisualPolitik", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"VP Colombia: 359K + 164K en 2 videos recientes" },
    { medium:"PROPOSAL_TRACKER", url:"https://www.youtube.com/@VisualPolitik/videos", desc:"Tema APROBADO: patrón Bukele-Milei-Espriella, deadline 14 JUN" }
  ]
},

/* ═══ P6 — VENTANA: COREA DEL SUR YOON 30 AÑOS ═══ */
{
  number: "P6",
  golden: false,
  title: "UN PRESIDENTE ENVIÓ DRONES SOBRE UNA POTENCIA NUCLEAR PARA DECLARAR LA LEY MARCIAL: Corea del Sur condena a Yoon a 30 años",
  subtitle: "Drones sobre Pyongyang oct 2024 · Ley marcial dic 2024 · Cadena perpetua por insurrección + 30 años por drones · La democracia que sobrevivió a su propio presidente",
  flag: "kr",
  tags: [
    { cls:"tag-red", text:"🔴 BREAKING" },
    { cls:"tag-green", text:"✅ ATACAR" },
    { cls:"tag-cyan", text:"🔭 VENTANA" },
    { cls:"tag-blue", text:"ASIA-PACÍFICO" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🔭 VENTANA: GAP total en español — ningún canal cubrió" },
    { cls:"chip-green", text:"⚡ Breaking — sentencia 12 JUN" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Korea.svg?width=1200",
  bannerAlt: "Corea del Sur — la democracia que sobrevivió un intento de golpe",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Korea.svg?width=1200",

  tesis: "Un presidente democrático ordenó vuelos de drones militares sobre la capital de una potencia nuclear para fabricar una crisis de seguridad y justificar la declaración de ley marcial. Fue descubierto, destituido, juzgado, y ahora condenado a 30 años (además de la cadena perpetua que ya cumplía por insurrección). La historia de Yoon Suk-yeol es la historia de cómo una democracia asiática sobrevivió a su propio presidente — pero la pregunta que nadie se hace es más inquietante: ¿qué habría pasado si hubiera funcionado? Y sobre todo: ¿es Yoon el último líder democrático que intenta un golpe, o es el patrón del futuro?",

  fields: [
    { label:"La noticia", value:"El Tribunal Central de Seúl condenó el 12 JUN al expresidente Yoon Suk-yeol a 30 años de prisión por ordenar vuelos de drones militares sobre Pyongyang en octubre de 2024 para provocar tensiones con Corea del Norte y justificar su declaración de ley marcial en diciembre de 2024 (CNN, NPR, Al Jazeera). Los drones lanzaron panfletos de propaganda. Pyongyang respondió con amenazas militares. Yoon ya cumplía cadena perpetua por liderar la insurrección de la ley marcial. Su defensa fue rechazada." },
    { label:"Segunda derivada", value:"Yoon no es un dictador de un país sin tradición democrática — es el presidente electo de la 13ª economía del mundo, aliado de EEUU, miembro del G20. Si un líder así puede ordenar provocar a una potencia NUCLEAR para justificar un golpe, ¿quién más puede hacerlo? El patrón es global: Trump (Jan 6 2021), Bolsonaro (Jan 8 2023), Yoon (Dec 2024). Tres presidentes de democracias consolidadas intentaron golpes. Los tres fracasaron. PERO: ¿y si la próxima vez funciona? La democracia está sobreviviendo por margen, no por diseño." },
    { label:"Gran pregunta", value:"¿Está la democracia sobreviviendo a sus propios presidentes por margen — y es Yoon la prueba de que cualquier líder democrático puede intentar un golpe si cree que saldrá gratis?" },
    { label:"Señal de competencia", value:"GAP TOTAL. Ningún canal castellanoparlante del nicho (P1-P4) ha publicado sobre Yoon/Corea del Sur en las últimas 72 horas según la revisión del radar. La noticia es del 12 JUN — muy reciente. Es un tema que la competencia NO está cubriendo pero los medios globales SÍ (CNN, NPR, Al Jazeera, Fox News). Oportunidad de ser el PRIMERO en español con análisis profundo." },
    { label:"Demanda en medios", value:"CNN (análisis detallado 11 JUN), NPR (contexto completo 12 JUN), Al Jazeera (cobertura 12 JUN), Fox News (12 JUN), Athens Times. Cobertura MASIVA en medios globales. PERO: prácticamente inexistente en medios hispanohablantes. Oportunidad de llevar una historia global al público hispano." },
    { label:"Velocidad de agenda", value:"VENTANA ÓPTIMA. Sentencia del 12 JUN es fresca. El caso sigue en apelaciones. El Mundial 2026 está en Corea del Sur (equipo jugó ayer: 2-1 vs Chequia). La confluencia de la sentencia con el Mundial da actualidad doble." },
    { label:"Historial VP", value:"VP publicó 'Estado alerta Corea: Irán contra cuerdas' (388K!) — Corea FUNCIONA. Ese video conectaba Corea con Irán. El ángulo actual (golpe de estado democrático + drones sobre potencia nuclear) es COMPLETAMENTE diferente. VP nunca cubrió la crisis de ley marcial de Yoon en profundidad. GAP TOTAL." },
    { label:"Motor viral", value:"MECANISMO: dato impactante (drones sobre capital nuclear para fabricar crisis) + personaje reconocible (presidente de la 13ª economía) + democracia vs autocracia (debate global candente) + patrón global (Trump Jan 6, Bolsonaro, Yoon = tendencia) + thriller político (¿y si hubiera funcionado?) + Corea del Sur = país reconocible (Samsung, K-pop, Mundial)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: en octubre de 2024, el presidente de Corea del Sur ordenó a sus militares que volaran drones sobre la capital de una potencia nuclear — Pyongyang, sede de Kim Jong-un y su arsenal atómico. ¿El objetivo? Provocar una crisis que justificara declarar la ley marcial y quedarse en el poder. Escalada: lo hizo. Declaró la ley marcial. Mandó soldados al Parlamento. Pero los diputados se colaron entre los soldados y votaron derogarla. Giro: no es solo Corea — es el patrón. Trump, Bolsonaro, Yoon. Tres presidentes de democracias consolidadas intentaron golpes en 4 años. Los tres fracasaron. Cierre: la democracia sobrevivió tres veces. ¿Sobrevivirá la cuarta?" },
    { label:"Promesa cumplible", value:"El video promete explicar cómo un presidente democrático intentó un golpe usando drones sobre una potencia nuclear. Demostrable: sentencia (CNN, NPR), drones sobre Pyongyang (Al Jazeera), ley marcial (BBC), comparativa Trump/Bolsonaro (documentación pública)." },
    { label:"Ventaja VP", value:"ALTA. VP tiene precedente de éxito con Corea (388K). GAP total en español — VP sería el primero en cubrir esto con profundidad. La comparativa global (Trump, Bolsonaro, Yoon) es exactamente el tipo de conexión que VP hace mejor que nadie. Ultra visual: mapas de las dos Coreas, Pyongyang, ruta de los drones, Parlamento cercado." },
    { label:"Caso para 800K/1M", value:"VP + Corea = 388K confirmado. GAP total en español = oportunidad de ser primero. Historia increíble: drones sobre potencia nuclear para fabricar golpe. Patrón global (Trump, Bolsonaro) amplifica audiencia. Riesgo: 'Corea del Sur' puede percibirse como lejano por audiencia hispana. Mitigar: anclar en el patrón global de golpes democráticos. Para 800K, necesita el gancho 'democracia' + título que conecte con espectador ('El presidente que envió drones sobre una potencia nuclear para quedarse en el poder')." },
    { label:"Título mental", value:"Un presidente democrático envió drones sobre una potencia nuclear para fabricar una crisis y declarar la ley marcial — fue condenado a 30 años pero la pregunta es: ¿y si hubiera funcionado?" },
    { label:"Qué investigar más", value:"Detalles de los drones: tipo, ruta, qué panfletos lanzaron. Reacción de Corea del Norte: ¿respondieron militarmente? Cronología exacta: drones (oct) → ley marcial (dic) → diputados entran → derogación. Comparativa jurídica: Trump Jan 6 (absolución), Bolsonaro (exilio), Yoon (cadena perpetua + 30 años). ¿Por qué Corea condenó y EEUU no?" },
    { label:"Veredicto", value:"ATACAR HOY — historia increíble, GAP total en español, VP Corea = 388K, patrón global amplifica, ventana fresca (sentencia 12 JUN). Publicar esta semana." }
  ],
  sources: [
    { medium:"CNN", url:"https://www.cnn.com/2026/06/11/asia/south-korean-yoon-suk-yeol-drone-case-jail-intl-hnk", desc:"Sentencia 30 años: drones sobre Pyongyang para justificar ley marcial" },
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/news/2026/6/12/south-koreas-ex-president-yoon-gets-30-years-over-drone-operation", desc:"Drones lanzaron propaganda sobre Pyongyang" },
    { medium:"NPR", url:"https://www.npr.org/2026/06/12/nx-s1-5856122/ousted-south-korean-president-yoon-prison-drone-flights-pyongyang", desc:"Defensa rechazada: no fue respuesta a globos" },
    { medium:"Fox News", url:"https://www.foxnews.com/world/former-south-korean-president-yoon-suk-yeol-sentenced-30-years-over-north-korea-drone-flights", desc:"Cadena perpetua + 30 años adicionales" }
  ]
},

/* ═══ P7 — VENTANA: HEZBOLLAH DRONES FIBRA ÓPTICA ═══ */
{
  number: "P7",
  golden: false,
  title: "LOS DRONES QUE ISRAEL NO PUEDE DETENER: cómo la técnica ucraniana de fibra óptica ahora mata soldados israelíes en Líbano",
  subtitle: "Hezbollah usa FPV de fibra óptica inmunes a jamming · 10+ soldados muertos · Alcance 60km amenaza Haifa · Ucrania inventó la técnica → Hezbollah la copió → Israel no tiene defensa",
  flag: "il",
  tags: [
    { cls:"tag-red", text:"🔴 MEDIOS PREMIUM" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-cyan", text:"🔭 VENTANA" },
    { cls:"tag-blue", text:"ORIENTE MEDIO / DEFENSA" }
  ],
  potCls: "pot-high",
  potText: "POTENCIAL 400K-600K",
  chips: [
    { cls:"chip-gold", text:"🔭 VENTANA: CNN + JPost + DroneXL — cobertura masiva sin YouTube hispano" },
    { cls:"chip-green", text:"⚡ Acelerando — amenaza crece cada semana" },
    { cls:"chip-blue", text:"🔒 Retención: fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Israel.svg?width=1200",
  bannerAlt: "Israel — sin defensa contra los drones de fibra óptica de Hezbollah",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Israel.svg?width=1200",

  tesis: "La misma revolución de drones que humilló a la OTAN en el ejercicio Hedgehog (P1) ahora mata soldados israelíes en el sur de Líbano. Hezbollah adoptó la técnica ucraniana de drones FPV con fibra óptica — inmunes al jamming electrónico, la principal defensa de Israel. Resultado: al menos 10 soldados y 1 civil muertos. JPost informa que Hezbollah puede tener drones con alcance de 60 km, amenazando Haifa. Israel Aerospace Industries presentó soluciones, pero ninguna está operativa. Es la ironía definitiva: la técnica que un aliado de Israel (Ucrania) perfeccionó contra Rusia fue copiada por un enemigo de Israel (Hezbollah). Y Israel no tiene defensa.",

  fields: [
    { label:"La noticia", value:"Desde abril 2026, drones FPV de fibra óptica operados por Hezbollah han matado al menos 10 soldados israelíes y 1 civil en el sur de Líbano (CNN, 3 MAY). Los drones usan cables de fibra óptica de hasta 15 km que conectan directamente al operador — inmunes a jamming electrónico. DroneXL confirmó el 4 JUN que Hezbollah importó el 'playbook ucraniano de fibra óptica'. JPost informó el 10 JUN que Hezbollah podría tener drones con alcance de 60 km, amenazando Haifa y ciudades del norte de Israel." },
    { label:"Segunda derivada", value:"No es solo un arma nueva — es la IRONÍA GEOPOLÍTICA definitiva. Ucrania perfeccionó la técnica de drones FPV de fibra óptica para combatir a Rusia. Irán la estudió. Hezbollah la adoptó. Y ahora Hezbollah la usa contra Israel — que es aliado de Ucrania. La revolución de drones no tiene bandera: la misma técnica que protege a Ucrania amenaza a Israel. Y lo peor: Israel, la potencia tecnológica de Oriente Medio con Iron Dome y las defensas más sofisticadas del mundo, NO PUEDE detener drones de $500 con un cable." },
    { label:"Gran pregunta", value:"¿Ha creado la revolución de drones un arma que ningún ejército convencional puede detener — y es la fibra óptica el gran ecualizador que permite a cualquier milicia rivalizar con un ejército tecnológicamente superior?" },
    { label:"Señal de competencia", value:"PENDIENTE DE COMPROBAR rendimiento específico en YouTube hispano. No se detectaron videos recientes de canales P1-P4 sobre este ángulo específico (Hezbollah + fibra óptica). La cobertura está en MEDIOS PREMIUM globales (CNN, JPost, DroneXL, Al Jazeera, Gulf News) pero NO en YouTube hispano. GAP DE OPORTUNIDAD: VP puede ser el primero en español en explicar esta técnica y su significado. CONEXIÓN CON P1 (Hedgehog): misma revolución, dos frentes." },
    { label:"Demanda en medios", value:"CNN (investigación detallada mayo 2026), JPost (dos artículos: junio 2026), DroneXL (análisis técnico), Al Jazeera (abril 2026), Gulf News (análisis). Cobertura en medios de defensa premium MASIVA. Es una historia que los medios anglosajones están siguiendo intensamente." },
    { label:"Velocidad de agenda", value:"ACELERANDO. Las bajas israelíes por drones de fibra óptica están aumentando cada semana. JPost publicó el 10 JUN que el alcance puede ser 60 km (Haifa). Israel Aerospace Industries presentó soluciones pero ninguna está desplegada. Cada semana que pasa, el problema empeora." },
    { label:"Historial VP", value:"VP publicó '10M drones: plan Ucrania Oriente Medio' (312K) — sobre producción masiva. VP publicó sobre la guerra en Líbano e Israel en múltiples videos. PERO: VP nunca cubrió la técnica de fibra óptica específicamente. Es un ángulo TÉCNICO-MILITAR nuevo. Se conecta con P1 (Hedgehog) y P4 (arsenal iraní) como parte de una narrativa más amplia: la revolución de drones baratos está cambiando la guerra." },
    { label:"Motor viral", value:"MECANISMO: Israel (país reconocible + audiencia interesada) + guerra real (no ejercicio) + dato impactante (Iron Dome no funciona contra cable de fibra óptica) + ironía (técnica aliada usada contra ti) + tecnología accesible (cualquier milicia puede copiarla) + miedo (si Israel no puede defenderse, ¿quién puede?) + visualidad (cómo funciona el cable de fibra óptica, mapa de alcance 60 km, Haifa amenazada)." },
    { label:"Retención narrativa", value:"FUERTE. Apertura: Israel tiene el Iron Dome, el David's Sling, el Arrow-3 — las defensas antimisiles más sofisticadas del mundo. Pero hay un arma que ninguna de ellas puede detener: un dron de $500 con un cable de fibra óptica. Escalada: Hezbollah copió la técnica que Ucrania perfeccionó contra Rusia. Funciona porque el cable no emite señal — no hay nada que jamear. 10 soldados israelíes muertos. Giro: la ironía: Ucrania inventó la técnica como aliada de Israel. Irán la estudió. Hezbollah la adoptó. La revolución de drones no tiene bandera. Cierre: si la potencia tecnológica de Oriente Medio no puede detener drones con cable, ¿puede alguien?" },
    { label:"Promesa cumplible", value:"El video promete explicar cómo funciona la técnica de fibra óptica y por qué Israel no puede detenerla. Demostrable: datos técnicos (DroneXL), bajas (CNN), alcance (JPost), origen ucraniano (DroneXL)." },
    { label:"Ventaja VP", value:"ALTA. VP combina análisis militar + geopolítica + paradojas. Este tema es perfecto: tiene datos técnicos accesibles, mapas visuales, ironía geopolítica, y conexión con otros temas del radar (P1 Hedgehog, P4 arsenal iraní). VP puede hacer la explicación técnica que un canal de noticias no puede (cómo funciona la fibra óptica en un dron, por qué el jamming no funciona)." },
    { label:"Caso para 800K/1M", value:"POTENCIAL ALTO: Israel = audiencia cautiva VP. Técnica militar fascinante. Ironía geopolítica memorable. PERO: no hay señal de competencia verificada en YouTube hispano — es un tema de medios, no de YouTube aún. Para 800K, VP necesita un título que conecte con el espectador ('Los drones que Israel no puede detener'). Se puede publicar como video independiente o como COMPLEMENTO de P1 (Hedgehog) — misma revolución, dos frentes. Si se hace en combo con P1, el potencial sube." },
    { label:"Título mental", value:"Israel tiene las defensas más sofisticadas del mundo — y no puede detener drones de $500 con un cable de fibra óptica que inventó su propio aliado" },
    { label:"Qué investigar más", value:"Detalles técnicos: longitud del cable, velocidad del dron, tipo de explosivo. Mapa de alcance 60 km desde frontera libanesa (qué ciudades están amenazadas). Soluciones presentadas por Israel Aerospace Industries. Comparativa: ¿Ucrania vendió/transfirió la técnica o Hezbollah la copió independientemente? Reacción oficial IDF." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — tema fascinante, ventaja VP alta, conexión con P1, Israel = audiencia cautiva. PERO: sin señal de competencia verificada en YouTube hispano. Si la señal se confirma (alguien publica y funciona), ATACAR inmediatamente. Mientras tanto, preparar investigación." }
  ],
  sources: [
    { medium:"CNN", url:"https://www.cnn.com/2026/05/03/middleeast/hezbollah-fiber-optic-drones-israel-intl-cmd", desc:"Hezbollah usa drones de fibra óptica: 10+ muertos" },
    { medium:"JPost", url:"https://www.jpost.com/middle-east/article-898114", desc:"Alcance 60 km, Haifa amenazada" },
    { medium:"DroneXL", url:"https://dronexl.co/2026/06/04/hezbollah-ukraine-fiber-optic-drone-israel-no-jammer/", desc:"Origen ucraniano de la técnica, Israel sin defensa" },
    { medium:"Al Jazeera", url:"https://www.aljazeera.com/news/2026/4/29/how-hezbollahs-fibre-optic-drones-test-israels-sophisticated-radar-system", desc:"Cómo los drones de fibra óptica esquivan el radar israelí" }
  ]
},

/* ═══ P8 — VENTANA: MALI SAHEL COLAPSO ═══ */
{
  number: "P8",
  golden: false,
  title: "MALI: el grupo yihadista JNIM ofrece $2M por la cabeza del dictador — cuando los terroristas tienen más recursos que el Estado, el Estado ha caído",
  subtitle: "JNIM caza a Goïta · Wagner se fue · Francia se fue · La ONU se fue · El primer Estado saheliano que puede caer — y controla el uranio, el oro y la ruta migratoria a Europa",
  flag: "ml",
  tags: [
    { cls:"tag-orange", text:"🟠 VP APROBADO" },
    { cls:"tag-green", text:"✅ INVESTIGAR" },
    { cls:"tag-cyan", text:"🔭 VENTANA" },
    { cls:"tag-blue", text:"SAHEL / ÁFRICA" }
  ],
  potCls: "pot-medium",
  potText: "POTENCIAL 250K-400K",
  chips: [
    { cls:"chip-gold", text:"🔭 VENTANA: VP APROBADO + recompensa JNIM 12 JUN = actualización perfecta" },
    { cls:"chip-green", text:"⚡ Acelerando — JNIM en ofensiva, Estado debilitado" },
    { cls:"chip-blue", text:"🔒 Retención: media-fuerte" },
    { cls:"chip-orange", text:"🎯 Ventaja VP: alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mali.svg?width=1200",
  bannerAlt: "Mali — el Estado que puede ser el primer dominó del Sahel",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mali.svg?width=1200",

  tesis: "JNIM — el grupo yihadista más poderoso del Sahel — acaba de ofrecer $2M de recompensa por información sobre el paradero de Assimi Goïta, líder de la junta militar de Mali. Cuando un grupo terrorista tiene más recursos que el Estado para ofrecer recompensas, el Estado ha caído de facto. Mali echó a Francia. Echó a la ONU (MINUSMA). Wagner/Africa Corps se fue. Y ahora está SOLA frente a una insurgencia yihadista que la supera en recursos y territorio. Si Mali cae, es el primer dominó del Sahel — y controla las rutas de uranio (Níger produce el 7% mundial), oro, y migración hacia Europa.",

  fields: [
    { label:"La noticia", value:"JNIM (Grupo de Apoyo al Islam y los Musulmanes) ofreció el 12 JUN una recompensa de más de $2M por información sobre el paradero de Assimi Goïta, líder de la junta militar de Mali (Okay Africa). El grupo yihadista está en ofensiva continua desde que Wagner/Africa Corps se retiró del país. JNIM controla extensas zonas rurales. La junta expulsó a las fuerzas francesas en 2022 y a la MINUSMA en 2023." },
    { label:"Segunda derivada", value:"La recompensa de $2M no es un gesto simbólico — es la DEMOSTRACIÓN de que JNIM tiene más recursos y más control territorial que el Estado maliense. Mali cometió el error estratégico más grave posible: echó a todos sus aliados (Francia, ONU, Wagner) sin construir alternativa. Ahora está sola. Y la consecuencia no es solo africana: Mali es la puerta de entrada al Sahel, que controla el 7% del uranio mundial (Níger), enormes reservas de oro, y la ruta migratoria principal hacia Europa vía Libia. Si Mali cae, los yihadistas controlan recursos y rutas que afectan directamente a Europa." },
    { label:"Gran pregunta", value:"¿Es Mali el primer Estado del Sahel que va a caer — y qué significa para Europa que los yihadistas controlen el uranio, el oro y la ruta migratoria?" },
    { label:"Señal de competencia", value:"PENDIENTE DE COMPROBAR. No se detectaron videos recientes de canales P1-P4 sobre Mali/Sahel. África es un tema que la competencia hispana NO cubre — lo que puede ser oportunidad (ser el primero) o señal de baja demanda. REGLA PROPOSAL_TRACKER: temas africanos deben conectarse con tema no africano. Conexión: uranio → energía nuclear europea, oro → mercados, migración → crisis europea." },
    { label:"Demanda en medios", value:"Okay Africa (recompensa JNIM 12 JUN), Wikipedia (ofensivas Mali 2026 actualizadas), Geopolitical Monitor (análisis riesgo colapso). Cobertura limitada pero de calidad. NO en portadas de medios premium globales — es una historia africana que los medios occidentales ignoran hasta que explota." },
    { label:"Velocidad de agenda", value:"ACELERANDO. JNIM está en ofensiva. La recompensa es una escalada. El Estado maliense se debilita. Pero NO hay evento inminente que fuerce publicación inmediata — es una historia en desarrollo." },
    { label:"Historial VP", value:"VP tiene Mali/Sahel APROBADO en PROPOSAL_TRACKER: 'se cae el primer estado'. Nota del equipo: 'conectar con tema no africano para atraer audiencia'. VP NO ha publicado sobre Mali/Sahel recientemente. El guión 'Eritrea Bab el-Mandeb' (280K) demostró que África funciona si se conecta con geopolítica global." },
    { label:"Motor viral", value:"MECANISMO: dato impactante ($2M recompensa por dictador) + colapso de Estado (narrativa potente) + terrorismo (JNIM = amenaza real) + consecuencia para Europa (uranio, migración) + abandono (Francia, ONU, Wagner se fueron) + mapa visual (Sahel, rutas de uranio y migración). RIESGO: África = audiencia limitada. MITIGAR: titular debe conectar con Europa ('el uranio que enciende tu central nuclear está en manos de yihadistas')." },
    { label:"Retención narrativa", value:"MEDIA-FUERTE. Apertura: JNIM, el grupo yihadista más poderoso de África, acaba de ofrecer $2 millones por la cabeza de un dictador militar. Cuando los terroristas tienen más dinero que el Estado, el Estado ha caído. Escalada: Mali echó a Francia en 2022. A la ONU en 2023. A Wagner en 2025. Ahora está sola contra una insurgencia que controla más territorio que el ejército. Giro: esto no es solo África — el Sahel controla el 7% del uranio mundial. Las centrales nucleares de Francia dependen de ese uranio. Y la ruta migratoria principal hacia Europa pasa por aquí. Cierre: si Mali cae, el primer dominó del Sahel cae — y Europa está en la línea de fuego." },
    { label:"Promesa cumplible", value:"El video promete explicar por qué Mali puede ser el primer Estado saheliano que cae y qué consecuencias tiene para Europa. Demostrable: recompensa JNIM (Okay Africa), datos de uranio (IAEA), rutas migratorias (Frontex), retirada francesa/ONU/Wagner (documentación pública)." },
    { label:"Ventaja VP", value:"ALTA. VP tiene el contexto (guión Eritrea, guión Sahel), los mapas, y la capacidad de conectar África con Europa. Ningún canal hispano del nicho cubre el Sahel con profundidad. VP sería el PRIMERO en hacer un análisis de 25 minutos sobre el colapso de Mali con conexión a Europa." },
    { label:"Caso para 800K/1M", value:"DIFÍCIL alcanzar 800K con tema africano. El techo natural de África en VP es ~280K (Eritrea). PERO: si se ancla en uranio + migración + Europa, el techo sube. El dato '$2M recompensa por dictador' es viral. El patrón 'colapso de Estado' funciona (Putin economía 355K). Para 800K, necesitaría combinarse con crisis energética europea o crisis migratoria. Proyección realista: 250K-350K." },
    { label:"Título mental", value:"Cuando los yihadistas tienen más dinero que el Estado para poner precio a tu cabeza, el Estado ha caído — y ese Estado controla el uranio que enciende Europa" },
    { label:"Qué investigar más", value:"Territorios controlados por JNIM vs Estado maliense (mapa). Producción de uranio de Níger: qué centrales europeas depende de él. Estado de las relaciones Mali-Rusia post-Wagner. ¿Quién llena el vacío: China, Turquía, Emiratos? Flujos migratorios vía Mali-Libia-Mediterráneo. Oro maliense: quién lo compra." },
    { label:"Veredicto", value:"INVESTIGAR ESTA SEMANA — VP APROBADO, recompensa JNIM es actualización perfecta, GAP total en español, conexión uranio-Europa-migración. Publicar cuando se pueda anclar en giro concreto (caída de territorio, ofensiva JNIM, crisis uranio europeo). Seguir regla del tracker: CONECTAR con tema no africano." }
  ],
  sources: [
    { medium:"Okay Africa", url:"https://www.okayafrica.com/today-in-africa-june-12-2026-mali-militant-group-targets-junta-leaders-niger-criminalizes-same-sex-relationships/1432444", desc:"JNIM ofrece $2M+ por información sobre Goïta" },
    { medium:"Wikipedia", url:"https://en.wikipedia.org/wiki/2026_Mali_offensives", desc:"Ofensivas yihadistas 2026 en curso" },
    { medium:"Geopolitical Monitor", url:"https://www.geopoliticalmonitor.com/", desc:"Análisis riesgo colapso estatal en Mali" },
    { medium:"WHO", url:"https://www.who.int/news/item/05-06-2026-africa-cdc-and-who-launch-joint-continental-ebola-response-plan", desc:"Contexto: crisis humanitaria múltiple en África central/occidental" }
  ]
}

],

/* ════════════════════════════════════════════════════════════
   RANKING — Tabla comparativa
═════════════════════════════════════════════════════════════ */
ranking: [
  { pos:"P1", tema:"Europa Hedgehog: 10 ucranianos vs 2 batallones OTAN", signal:"220K/13h (1.5x+)", speed:"Acelerando", vp:"Alta", verdict:"⭐ ATACAR HOY", score:"9.5/10" },
  { pos:"P6", tema:"Corea Yoon: drones sobre Pyongyang → ley marcial", signal:"GAP total", speed:"Breaking", vp:"Alta", verdict:"🎯 ATACAR HOY", score:"9.0/10" },
  { pos:"P2", tema:"Venezuela se apaga: petróleo sin electricidad", signal:"339K/2d (1.13x)", speed:"Ventana óptima", vp:"Alta", verdict:"🎯 ATACAR HOY", score:"8.5/10" },
  { pos:"P7", tema:"Hezbollah drones fibra óptica vs Israel", signal:"Medios premium", speed:"Acelerando", vp:"Alta", verdict:"🔍 INVESTIGAR", score:"8.5/10" },
  { pos:"P4", tema:"Arsenal secreto Irán bajo sanciones", signal:"87K/2d (2.18x)", speed:"Ventana óptima", vp:"Alta", verdict:"🔍 INVESTIGAR", score:"8.0/10" },
  { pos:"P3", tema:"Armenia vota dejar Rusia — imperio se vacía", signal:"310K/3d (1.03x)", speed:"Ventana óptima", vp:"Media-alta", verdict:"🔍 INVESTIGAR", score:"7.5/10" },
  { pos:"P5", tema:"Colombia 8 días: Espriella 87.5%", signal:"VP APROBADO", speed:"Deadline", vp:"Media", verdict:"🎯 ATACAR HOY", score:"7.5/10" },
  { pos:"P8", tema:"Mali JNIM: $2M por dictador → Sahel cae", signal:"VP APROBADO", speed:"Acelerando", vp:"Alta", verdict:"🔍 INVESTIGAR", score:"7.0/10" }
],

/* ════════════════════════════════════════════════════════════
   VIGILAR — 6 temas emergentes
═════════════════════════════════════════════════════════════ */
vigilar: [
  {
    tema: "G7 Évian: Trump firma acuerdo Irán en Francia",
    trigger: "Si Trump firma el acuerdo en Évian (15-17 JUN), es la noticia del año. Si no firma, el G7 pierde interés para VP.",
    source: "Courthouse News · Elíseo"
  },
  {
    tema: "Ébola Congo: expansión a Uganda y campos de desplazados",
    trigger: "Si supera 1.000 casos o llega a un tercer país. Si se confirma la cepa sin vacuna disponible. Conectar con geopolítica de salud global.",
    source: "WHO · CDC · ECDC"
  },
  {
    tema: "Perú: crisis institucional por resultado 50.01%",
    trigger: "Si hay protestas masivas, intervención judicial, o recuento que cambie resultado. VP tiene guión Perú+cobre listo.",
    source: "Al Jazeera · Americas Quarterly"
  },
  {
    tema: "Europa se nucleariza: EEUU ofrece bombas nucleares como sustituto de tropas",
    trigger: "Si CNBC/DefenseNews confirman expansión nuclear OTAN. Conecta con P1 (Europa no puede pelear convencional → opción nuclear).",
    source: "CNBC · DefenseNews"
  },
  {
    tema: "Taiwán: China prueba capacidad de bloqueo naval",
    trigger: "Si hay ejercicios militares chinos esta semana. VP publicó 'China puede tomar Taiwán' (347K/9d) — secuela.",
    source: "CSIS · Reuters"
  },
  {
    tema: "España: caso Sánchez evoluciona",
    trigger: "Si hay nueva exclusiva judicial, dimisiones, o conexión con financiación internacional. VP publicó Sánchez (136K/2d).",
    source: "El Confidencial · El País"
  }
],

/* ════════════════════════════════════════════════════════════
   COVERED VIDEOS — Últimos 10 videos VP (verificado 13 JUN)
═════════════════════════════════════════════════════════════ */
coveredVideos: [
  { title:"¿Quién gana y pierde con el FIN de la guerra en Irán?", date:"12 JUN 2026", views:"149K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Colombia: el Petrismo ESTALLA", date:"11 JUN 2026", views:"164K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"¿Por qué SpaceX, OpenAI y Anthropic pueden ser un PELIGRO?", date:"11 JUN 2026", views:"82K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"El caso que puede hacer CAER a Sánchez", date:"10 JUN 2026", views:"136K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"Trump AMENAZA a ISRAEL: ¿El Mossad ha infiltrado EEUU?", date:"9 JUN 2026", views:"163K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"UCRANIA: ¿Victoria al alcance de la mano?", date:"8 JUN 2026", views:"433K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"TRUMP va a por los INMIGRANTES LEGALES", date:"5 JUN 2026", views:"290K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"ANTHROPIC y la nueva batalla por la SEGURIDAD NACIONAL", date:"4 JUN 2026", views:"228K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"CHINA ya puede tomar TAIWÁN y NADIE puede hacer nada", date:"3 JUN 2026", views:"347K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"El REARME SILENCIOSO de ESPAÑA", date:"2 JUN 2026", views:"176K", url:"https://www.youtube.com/@VisualPolitik/videos" }
],

/* ════════════════════════════════════════════════════════════
   VERIFICACIÓN EDITORIAL
═════════════════════════════════════════════════════════════ */
editorial_verification: {
  fuentes: "WSJ (no cobertura directa hoy), FT, NYT, Bloomberg (2 Armenia, 1 Venezuela), Reuters, CNN (Yoon, Hezbollah, Irán), CBS (Irán acuerdo), Axios (cláusulas), NPR (Yoon), Al Jazeera (Yoon, Hezbollah), DroneXL (Hedgehog, Hezbollah), War on the Rocks (Hedgehog), JPost (Hezbollah drones), MercoPress (Venezuela), Trading Economics (Brent). ~20 fuentes premium consultadas.",
  historial_vp: "SÍ — Verificados los últimos 10 videos del canal de YouTube el 13 JUN 2026 vía get_page_text. Views actualizadas.",
  competencia: "SÍ — Revisados Solo Fonseca (6 videos), Cosas Militares (4 videos), Memorias de Pez (3 videos), Un Mundo Inmenso (1 video). Señales: SF Europa/Hedgehog 220K/13h (EXPLOSIVO), SF Venezuela 339K/2d (1.13x), SF Armenia 310K/3d (1.03x), MdP Industria Irán 87K/2d (2.18x), UMI Mundial 206K/3d (1.72x).",
  viralidad: "Verificada con datos de competencia (multiplicadores reales) y cobertura en medios premium. NO se afirmó viralidad sin evidencia. Señales de competencia 'pendiente de comprobar' marcadas en P7 y P8.",
  imagenes: "PENDIENTE — ejecutar validate_images.js 2026-06-13 antes de publicar.",
  descartados: "Acuerdo Irán como propuesta principal (VP publicó hoy — saturación), Mundial geopolítico (insuficiente para 25 min VP), Bolivia crisis (VP cubrió recientemente), Ébola puro (sin conexión geopolítica clara), Perú como propuesta (sin desenlace aún — a vigilar)."
}

};
