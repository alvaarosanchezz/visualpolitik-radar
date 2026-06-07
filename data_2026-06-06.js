/* ══════════════════════════════════════════════════════════════
   VP RADAR DATA — 2026-06-06
   Estrategia "Tema de Millon" v7.0 — 8 capas + Matriz 1M
══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-06-06",
  dateLabel: "06 JUNIO 2026",
  brisbane: "10:00 BRISBANE AEST",
  brent: "$94.12",
  brentChange: "↓ volátil · deadlock negociaciones Irán · OPEC+ se reúne mañana"
},

/* ── TICKER ───────────────────────────────────────────────── */
ticker: [
  { cls:"t-red",    text:"🛢️ BRENT <strong>$94.12</strong> · Deadlock Irán · OPEC+ se reúne 7 JUN · EAU fuera del cartel" },
  { cls:"t-red",    text:"⚽ MUNDIAL 2026 <strong>ARRANCA 11 JUN</strong> · Irán juega desde Tijuana · EEUU le bombardea y le recibe a la vez" },
  { cls:"t-red",    text:"🇦🇲 ARMENIA <strong>VOTA MAÑANA</strong> · Rusia planea mover 100.000 votantes · $50M operación de interferencia" },
  { cls:"t-red",    text:"🇵🇪 PERÚ <strong>VOTA DOMINGO</strong> · Fujimori vs Sánchez · Empate técnico 43.8% vs 43.2%" },
  { cls:"t-gold",   text:"🇨🇴 COLOMBIA <strong>ESPRIELLA 46.7%</strong> · 2ª vuelta 21 JUN · Encuestas lo dan ganador" },
  { cls:"t-red",    text:"🇮🇱 ISRAEL <strong>CRISIS INTERNA</strong> · 80.000 ultraortodoxos se niegan a servir · Coalición Netanyahu al borde" },
  { cls:"t-orange", text:"🇹🇼 TAIWÁN <strong>PIB +9.64%</strong> · Máximo en 16 años por IA · Exportaciones +39.77%" },
  { cls:"t-red",    text:"🇮🇷 IRÁN <strong>COBRA $2M POR BARCO</strong> en Ormuz · Pagos en yuanes y cripto · EEUU rechaza legalidad" },
  { cls:"t-orange", text:"🇺🇦 UCRANIA <strong>TRUMP: CERCA DE RESOLVERSE</strong> · 30.000 bajas rusas en mayo · 224 combates/día" },
  { cls:"t-red",    text:"🇪🇸 ZAPATERO <strong>IMPUTADO</strong> · €53M investigados · Red Venezuela-Panamá · Declaró 2 JUN" }
],

/* ── HERO BOXES ───────────────────────────────────────────── */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>MUNDIAL 2026:</span> Irán juega el Mundial desde Tijuana porque EEUU no le deja dormir en su territorio. <span class='hl-red'>El país al que bombardeas de noche y contra el que juegas de día. Arranca 11 JUN — ventana de 5 días para publicar.</span>"
  },
  {
    label: "🎯 Oportunidad explosiva",
    content: "Armenia vota MAÑANA. <span class='hl'>Rusia ha gastado $50M para transportar 100.000 votantes desde Rusia.</span> Armenia responde: servicio militar obligatorio de 25 días para los que vuelvan. <span class='hl-red'>Gap enorme en español.</span>"
  },
  {
    label: "📊 Indicadores clave",
    content: "Brent <span class='hl'>$94</span> · OPEC+ <span class='hl-red'>mañana</span> · Taiwán PIB <span class='hl'>+9.64%</span> · Perú <span class='hl-red'>empate técnico domingo</span> · Israel <span class='hl-red'>coalición al borde</span>"
  }
],

/* ── VIDEOS VP PUBLICADOS ─────────────────────────────────── */
coveredVideos: [
  "❌ FUERA DE CONTROL: ataque paraliza medio planeta · 2 JUN · 509K v",
  "❌ SE ACABA LA GUERRA: claves acuerdo Irán · 30 MAY · 412K v",
  "❌ ESTADO ALERTA COREA: Irán contra cuerdas · 28 MAY · 388K v",
  "❌ INVASIÓN INMINENTE: plan Trump para Irán · 26 MAY · 377K v",
  "❌ IRÁN TERROR: células durmientes atacan · 23 MAY · 363K v",
  "❌ PUTIN ECONOMÍA COLAPSA · 15 MAY · 355K v",
  "❌ CHINA DECISIÓN EXTRAÑA SOBRE IRÁN · 13 MAY · 349K v",
  "❌ EMIRATOS ROMPE OPEP · 12 MAY · 334K v",
  "❌ 10M DRONES: plan Ucrania Oriente Medio · 9 MAY · 312K v",
  "⚠️ Pendiente verificar: posibles publicaciones 3-6 JUN"
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — 14 items
═════════════════════════════════════════════════════════════ */
news: [

/* ── N1: MUNDIAL IRÁN TIJUANA ── */
{
  id: "n1",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"⚽ MUNDIAL / GEOPOLÍTICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/SoFi_Stadium_2022.jpg?width=800",
  imageAlt: "SoFi Stadium, Los Angeles — sede del partido Irán en el Mundial 2026",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/FIFA_World_Cup_2026_%28Wordmark%3B_Spanish%29.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "MUNDIAL 2026: Irán jugará desde Tijuana — EEUU aprueba visas pero el equipo duerme en México porque el gobierno no les deja quedarse",
  pills: ["Arranca 11 JUN", "1ª vez host en guerra con participante", "Fans iraníes prohibidos", "Base camp en Tijuana"],
  why: "Es la primera vez en la historia del Mundial que un país anfitrión está en guerra con un equipo participante. Irán vuela de Tijuana a LA para jugar y vuelve a dormir a México. Los fans iraníes están vetados de EEUU.",
  viralPct: 97, viralCls: "viral-high",
  viralSources: "CFR · Foreign Policy · Al Jazeera · CNN · PBS · Hollywood Reporter · Irish Times",
  detail: {
    summary: "EEUU aprobó las visas para la selección iraní el 5 de junio, pero el equipo establecerá su base en Tijuana, México, no en territorio estadounidense. Un avión saldrá de Tijuana, volará 55 minutos a Los Ángeles, los jugadores serán llevados a SoFi Stadium, jugarán y volverán a Tijuana a dormir. El Secretario de Estado Marco Rubio insinuó que el equipo iraní podría servir de cobertura para operativos del IRGC. Los aficionados iraníes están completamente vetados de entrar en EEUU. FIFA tuvo que mover el base camp de Irán de EEUU a México.",
    context: "EEUU lleva bombardeando Irán desde febrero 2026. Es la primera vez en la historia de la Copa del Mundo que un país anfitrión está literalmente en guerra con un equipo participante. En 1998, Irán venció a EEUU 2-1 en el partido más politizado de la historia del torneo. Ahora la tensión es 100 veces mayor: hay guerra abierta, misiles cruzando, y un equipo que tiene que cruzar la frontera para jugar.",
    vp: "Tema DORADO. La paradoja es cinematográfica: bombardeas a un país de noche y le recibes para jugar al fútbol de día. El equipo duerme en otro país porque no le dejas quedarse. Los fans están prohibidos. La historia de 1998, el contexto de guerra, las reglas FIFA, los ICE raids temidos en los estadios, los sindicatos amenazando con huelga en SoFi si hay agentes de inmigración — es un video de 25 minutos que se escribe solo.",
    sources: [
      { headline: "FIFA World Cup 2026: The Geopolitical Tensions at Play Off the Pitch", medium: "Council on Foreign Relations", date: "2026-06-05", url: "https://www.cfr.org/articles/the-u-s-is-co-hosting-the-world-cup-but-much-of-the-world-cant-attend", desc: "Análisis completo de las tensiones geopolíticas del Mundial" },
      { headline: "FIFA Faces Trump's Iran Ban", medium: "Foreign Policy", date: "2026-06-05", url: "https://foreignpolicy.com/2026/06/05/mexico-america-trump-iran-fifa-olympics-world-cup/", desc: "Cómo FIFA gestionó el veto de Trump a Irán" },
      { headline: "US visa rejections, war on Iran keep fans away from World Cup", medium: "Al Jazeera", date: "2026-06-05", url: "https://www.aljazeera.com/sports/2026/6/5/us-visa-rejections-war-on-iran-keep-fans-away-from-world-cup", desc: "Rechazos de visas y guerra mantienen fans lejos del Mundial" },
      { headline: "How America Broke the 2026 FIFA World Cup", medium: "Hollywood Reporter", date: "2026-06-06", url: "https://www.hollywoodreporter.com/news/general-news/how-america-broke-the-world-cup-1236614617/", desc: "Cómo EEUU rompió el Mundial de 2026" }
    ],
    verification: "Verificado: visas aprobadas (PBS), base camp en Tijuana (Al Jazeera, CNN), fans vetados (CFR), Rubio declaraciones (White House press). Fechas confirmadas."
  }
},

/* ── N2: ARMENIA VOTA MAÑANA ── */
{
  id: "n2",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 CÁUCASO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikol_Pashinyan_%282018-05-14%29_%28cropped%29.jpg?width=800",
  imageAlt: "Nikol Pashinyan, primer ministro de Armenia",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "ARMENIA VOTA MAÑANA: Rusia planea gastar $50M para transportar 100.000 votantes y evitar el giro pro-occidental de Pashinyan",
  pills: ["Elecciones 7 JUN", "Pashinyan 65% encuestas", "$50M operación rusa", "25 días servicio militar para retornados"],
  why: "Las elecciones más geopolitizadas de la historia de Armenia. Rusia intenta manipular el resultado transportando votantes. Armenia responde con servicio militar obligatorio para los que vuelvan a votar. Trump y JD Vance han endorsado a Pashinyan.",
  viralPct: 88, viralCls: "viral-high",
  viralSources: "Reuters · Eurasianet · Euronews · Defence24 · Kyiv Post · National Interest",
  detail: {
    summary: "Armenia vota mañana 7 de junio en las elecciones parlamentarias más geopolitizadas de su historia. Pashinyan lidera con ~65% según encuestas, con un mandato claro pro-occidental. Reuters reveló que Rusia planea gastar $50M para transportar hasta 100.000 armenios desde Rusia para votar contra Pashinyan. Las autoridades rusas emitieron cuotas por provincia. Armenia respondió imponiendo 25 días de entrenamiento militar obligatorio para los ciudadanos que regresen desde Rusia a votar. Trump y JD Vance endorsaron a Pashinyan.",
    context: "Armenia ha estado pivotando hacia Occidente desde la pérdida de Nagorno-Karabaj en 2023. Pashinyan firmó un acuerdo de paz con Azerbaiyán y ha profundizado lazos con la UE y EEUU. Rusia ve estas elecciones como la última oportunidad de revertir la pérdida de Armenia como aliado. La Comisión Europea ha confirmado los intentos de interferencia rusa. La OSCE ha desplegado observadores.",
    vp: "Historia perfecta para VP: Rusia gastando $50M para mover físicamente 100.000 personas a través de fronteras para robar unas elecciones. Armenia respondiendo con servicio militar obligatorio. Es el choque Rusia vs Occidente en miniatura. Gap enorme en español — ningún canal del nicho ha tratado esto con profundidad.",
    sources: [
      { headline: "Russia has plan to use proxy voters in attempt to sway Armenian election", medium: "Eurasianet", date: "2026-05-29", url: "https://eurasianet.org/russia-has-plan-to-use-proxy-voters-in-attempt-to-sway-armenian-election", desc: "Plan ruso de votantes proxy revelado" },
      { headline: "Armenia Threatens 25-Day Military Camp for Russia-Based Election Voters", medium: "Kyiv Post", date: "2026-06-03", url: "https://www.kyivpost.com/post/77613", desc: "Armenia amenaza con 25 días de campo militar" },
      { headline: "Pashinyan on course for landslide victory and pro-West mandate", medium: "Euronews", date: "2026-05-31", url: "https://www.euronews.com/2026/05/31/pashinyan-on-course-for-landslide-victory-and-pro-west-mandate-in-armenia-election-new-pol", desc: "Encuestas dan victoria aplastante a Pashinyan" },
      { headline: "Armenia's 2026 elections shadowed by Russia", medium: "Defence24", date: "2026-06-04", url: "https://defence24.com/geopolitics/armenias-2026-elections-shadowed-by-russia", desc: "Sombra de Rusia sobre las elecciones armenias" }
    ],
    verification: "Verificado: plan $50M (Reuters, 5 fuentes inteligencia occidental). Cuotas por provincia (Eurasianet). Servicio militar 25 días (Kyiv Post). Endoso Trump/Vance (Armenian Weekly). Encuestas 65% (Euronews)."
  }
},

/* ── N3: IRÁN-EEUU DEADLOCK ── */
{
  id: "n3",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageAlt: "Estrecho de Ormuz — punto crítico de la guerra Irán-EEUU",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "Public Domain",
  title: "IRÁN-EEUU: negociaciones en 'deadlock' — Irán exige $24.000M en activos congelados, EEUU rechaza; nuevos ataques cruzados",
  pills: ["$24B congelados", "Deadlock confirmado", "Misiles a Kuwait/Bahréin", "7 balísticos interceptados"],
  why: "Las negociaciones están paralizadas. Irán quiere $24B en activos congelados como condición para un acuerdo. EEUU atacó radares costeros iraníes. Irán lanzó 7 misiles balísticos contra Kuwait y Bahréin. El alto el fuego se viola diariamente.",
  viralPct: 72, viralCls: "viral-mid",
  viralSources: "CBS News · ABC News · CNN · Al Jazeera",
  detail: {
    summary: "Un alto funcionario iraní confirmó a CNN que las negociaciones de paz están en 'deadlock' y que 'la pelota está en el campo de Trump'. Irán exige la liberación de $24.000 millones en activos congelados como condición previa. EEUU atacó sitios de radar costero iraníes tras derribar 4 drones de ataque lanzados hacia el Estrecho de Ormuz. Irán respondió disparando 7 misiles balísticos hacia Kuwait y Bahréin, interceptados por fuerzas estadounidenses. Sirenas de alerta activadas en ambos países.",
    context: "El alto el fuego declarado el 8 de abril y extendido indefinidamente el 21 de abril ha sido violado repetidamente por ambos bandos. La guerra empezó el 28 de febrero de 2026. El tema Irán lleva semanas dominando la agenda pero los datos de VP muestran que el rendimiento está estancándose — los últimos videos sobre Irán rinden menos que los primeros.",
    vp: "PRECAUCIÓN: el tema Irán está entrando en fatiga de audiencia para VP. Los últimos videos sobre Irán (Fin Netanyahu 152K, Irán venganza 174K) rinden significativamente menos que los primeros (Invasión inminente 377K, Terror células 363K). Solo vale si hay un giro radical o conexión inesperada — como el ángulo del Mundial.",
    sources: [
      { headline: "Live Updates: US and Iran trade another round of fire as Iranian official says talks are at a deadlock", medium: "CBS News", date: "2026-06-06", url: "https://www.cbsnews.com/live-updates/iran-us-war-israel-hezbollah-fighting-ceasefire-efforts/", desc: "Actualizaciones en vivo del deadlock" },
      { headline: "Iran live updates: US strikes Iranian radar sites after drones fired toward strait", medium: "ABC News", date: "2026-06-05", url: "https://abcnews.com/International/live-updates/iran-live-updates-irgc-claims-airbase-attack-after/?id=133475855", desc: "EEUU ataca radares iraníes" },
      { headline: "Are the US and Iran closer to war or to a deal?", medium: "Al Jazeera", date: "2026-06-05", url: "https://www.aljazeera.com/news/2026/6/5/are-us-and-iran-closer-to-war-or-to-a-deal", desc: "¿Más cerca de la guerra o del acuerdo?" }
    ],
    verification: "Verificado: deadlock (CNN, fuente iraní directa). $24B (CBS). Ataques radar (ABC/CENTCOM). 7 misiles balísticos a Kuwait/Bahréin (CNN). Sirenas activadas (CNN live)."
  }
},

/* ── N4: ISRAEL ULTRAORTODOXOS ── */
{
  id: "n4",
  tags: [{ cls:"tag-red", text:"🔴 SEMANA" }, { cls:"tag-blue", text:"🌍 ISRAEL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jerusalem_Western_Wall_BW_1.JPG?width=800",
  imageAlt: "Soldados ultraortodoxos en el IDF",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Jerusalem_Western_Wall_BW_2.JPG?width=800",
  imageCredit: "IDF / Wikimedia Commons",
  imageSource: "CC BY-SA 2.0",
  title: "ISRAEL: 80.000 ultraortodoxos se niegan a servir en el IDF — protestas masivas paralizan el país y la coalición de Netanyahu se tambalea",
  pills: ["80.000 evaden reclutamiento", "50.000 órdenes de reclutamiento en julio", "Coalición al borde", "Posibles elecciones septiembre"],
  why: "Los partidos ultraortodoxos retiraron su apoyo a Netanyahu. Se esperan elecciones anticipadas en septiembre. Decenas de miles bloquearon carreteras, quemaron coches y paralizaron el transporte en Jerusalén y Tel Aviv.",
  viralPct: 90, viralCls: "viral-high",
  viralSources: "NPR · CFR · Times of Israel · Jerusalem Post",
  detail: {
    summary: "Decenas de miles de ultraortodoxos se manifestaron el 2 de junio bloqueando carreteras y trenes en toda Israel, quemando coches y paralizando el centro del país. Protestan contra el reclutamiento militar obligatorio. El 80% de todos los evasores del servicio militar son ultraortodoxos. El jefe del IDF ordenó aumentar el reclutamiento de la comunidad haredí. Se han programado 50.000 órdenes de reclutamiento para julio. Los partidos ultraortodoxos han retirado su apoyo a Netanyahu, y medios israelíes reportan ampliamente que se convocarán elecciones anticipadas para septiembre.",
    context: "Los ultraortodoxos representan ~13% de la sociedad israelí y son el sector de mayor crecimiento. Cada año 13.000 hombres haredíes alcanzan la edad de conscripción pero menos del 10% se alista. Esto ocurre mientras Israel mantiene operaciones militares en Líbano (Beaufort), guerra con Irán y necesita más tropas que nunca. La paradoja: Israel lucha en 3 frentes y su sector de mayor crecimiento demográfico se niega a servir.",
    vp: "Tema APROBADO por el equipo. Ángulo único: Israel lucha en 3 frentes simultáneos (Irán, Líbano, Gaza residual) y 80.000 hombres de su sector demográfico más dinámico se niegan a luchar. La consecuencia: puede caer el gobierno Netanyahu. Es guerra interna + guerra externa + crisis demográfica en un solo video.",
    sources: [
      { headline: "Ultra-Orthodox protesters block roads and trains across Israel over military draft", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/2026/06/02/nx-s1-5844080/ultra-orthodox-protests-israel", desc: "Protestas masivas bloquean Israel" },
      { headline: "Why Israel Wants to Draft the Ultra-Orthodox Into the Military", medium: "Council on Foreign Relations", date: "2026-06-04", url: "https://www.cfr.org/in-brief/why-israel-wants-draft-ultra-orthodox-military", desc: "CFR explica la crisis del reclutamiento" },
      { headline: "Israel's government is expected to collapse over ultra-Orthodox military draft", medium: "NPR", date: "2026-05-12", url: "https://www.npr.org/2026/05/12/g-s1-121631/israel-military-ultra-orthodox-netanyahu-coalition", desc: "Se espera colapso del gobierno por reclutamiento" },
      { headline: "Over 50,000 IDF draft orders to ultra-Orthodox Jews scheduled for July", medium: "Jerusalem Post", date: "2026-06-01", url: "https://www.jpost.com/israel-news/defense-news/article-857339", desc: "50.000 órdenes de reclutamiento para julio" }
    ],
    verification: "Verificado: 80.000 evasores (Times of Israel, comisión parlamentaria). 50.000 órdenes julio (Jerusalem Post). Protestas 2 JUN (NPR). Coalición al borde (NPR, medios israelíes). 13% población (CFR)."
  }
},

/* ── N5: PERÚ VOTA DOMINGO ── */
{
  id: "n5",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Keiko_Fujimori_2_%28cropped%29.jpg?width=800",
  imageAlt: "Keiko Fujimori, candidata presidencial de Perú",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo_nacional_del_Per%C3%BA.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "PERÚ VOTA DOMINGO: Fujimori vs Sánchez en empate técnico — 4º intento de Keiko de recuperar el poder que su padre perdió en una cárcel",
  pills: ["7 JUN runoff", "43.8% vs 43.2%", "4º intento Keiko", "13% indecisos"],
  why: "Perú vota mañana con el resultado más impredecible de la región. Fujimori intenta por 4ª vez llegar a la presidencia. Un resultado disputado puede sacudir mercados el lunes. 13% de indecisos decidirán.",
  viralPct: 78, viralCls: "viral-mid",
  viralSources: "Britannica · AS/COA · Al Jazeera · PBS · NPR",
  detail: {
    summary: "Perú celebra su segunda vuelta presidencial el domingo 7 de junio entre Keiko Fujimori (Fuerza Popular, 43.2%) y Roberto Sánchez (Juntos por el Perú, 43.8%). Es el 4º intento de Keiko de alcanzar la presidencia — perdió en 2011, 2016 y 2021. Un 13% de votantes sigue indeciso. La primera vuelta fue caótica: retrasos en entrega de materiales electorales, extensión sin precedentes de un día, y miles de actas impugnadas. Los mercados peruanos pueden moverse bruscamente el lunes si el resultado es disputado.",
    context: "Alberto Fujimori gobernó Perú entre 1990 y 2000 con mano dura. Fue condenado por crímenes de lesa humanidad y encarcelado. Murió en septiembre 2025. Su hija Keiko lleva 15 años intentando volver al poder. Perú ha tenido 6 presidentes en 5 años, una crisis institucional permanente y niveles récord de desconfianza política.",
    vp: "Ángulo VP: la dinastía Fujimori como fenómeno único en América Latina. Un padre que encarceló a opositores, una hija que casi va presa ella misma, y ahora el 4º intento. Conectar con el patrón continental (Colombia, Argentina, Perú — la derecha dura vuelve en toda la región).",
    sources: [
      { headline: "Peru 2026 Presidential Election Explained", medium: "Britannica", date: "2026-06-05", url: "https://www.britannica.com/topic/Perus-2026-Presidential-Election-Explained", desc: "Explicación completa de las elecciones peruanas" },
      { headline: "Poll Tracker: Peru's 2026 Presidential Election", medium: "AS/COA", date: "2026-06-03", url: "https://www.as-coa.org/articles/poll-tracker-perus-2026-presidential-election", desc: "Seguimiento de encuestas actualizado" },
      { headline: "Peru's Fujimori and Sánchez to meet in June 7 presidential runoff", medium: "PBS News", date: "2026-05-18", url: "https://www.pbs.org/newshour/world/perus-fujimori-and-sanchez-to-meet-in-june-7-presidential-runoff", desc: "Confirmación de la segunda vuelta" }
    ],
    verification: "Verificado: encuestas Ipsos 43.8/43.2 (AS/COA, 3 JUN). 4º intento Keiko (Britannica). Primera vuelta caótica (NPR, PBS). 13% indecisos (Ipsos)."
  }
},

/* ── N6: COLOMBIA ENCUESTAS ── */
{
  id: "n6",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 LATINOAMÉRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Coat_of_arms_of_Colombia.svg?width=800",
  imageAlt: "Abelardo de la Espriella, candidato presidencial de Colombia",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Coat_of_arms_of_Colombia.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "COLOMBIA: nueva encuesta da ganador a De la Espriella (46.7%) frente a Cepeda (41.9%) — segunda vuelta 21 de junio",
  pills: ["46.7% vs 41.9%", "Endoso Trump", "2ª vuelta 21 JUN", "Patrón continental derecha"],
  why: "La tendencia se consolida: De la Espriella parece encaminado a ganar la presidencia de Colombia. El patrón continental de la derecha dura (Milei, Bukele, ahora Espriella) sigue avanzando.",
  viralPct: 82, viralCls: "viral-high",
  viralSources: "CNN Español · Infobae · El Tiempo · Al Jazeera · PBS",
  detail: {
    summary: "Según encuesta Infobae del 1-4 de junio, Abelardo de la Espriella lidera con 46.7% frente al 41.9% de Iván Cepeda. De la Espriella recibió el endorso de Trump. La segunda vuelta será el 21 de junio. En primera vuelta obtuvo 43.7% vs 40.9% de Cepeda con 13 candidatos.",
    context: "Colombia sigue el patrón continental: después de Bukele (El Salvador), Milei (Argentina) y Noboa (Ecuador), la derecha dura con discurso anti-establishment y mano dura llega a Colombia. De la Espriella es un abogado mediático sin experiencia política previa — similar al perfil de outsider que ha funcionado en toda la región.",
    vp: "Tema APROBADO. Deadline: publicar antes del 14 de junio. El ángulo VP es el patrón continental, no la elección en sí. Conectar con Bukele, Milei, y la transformación de la derecha latinoamericana.",
    sources: [
      { headline: "Nueva encuesta ubica a De la Espriella como ganador de la segunda vuelta", medium: "Infobae", date: "2026-06-04", url: "https://www.infobae.com/colombia/2026/06/04/nueva-encuesta-ubica-a-abelardo-de-la-espriella-como-el-ganador-de-la-segunda-vuelta-ivan-cepeda-perderia-por-pocos-votos/", desc: "Encuesta da ventaja a De la Espriella" },
      { headline: "Colombia va a segunda vuelta entre De la Espriella y Cepeda: reacciones", medium: "CNN Español", date: "2026-06-01", url: "https://cnnespanol.cnn.com/2026/06/01/colombia/reacciones-segunda-vuelta-espriella-cepeda-orix", desc: "Reacciones a los resultados de primera vuelta" },
      { headline: "Celebration, shock and scepticism follow Colombia's presidential election", medium: "Al Jazeera", date: "2026-06-02", url: "https://www.aljazeera.com/news/2026/6/2/celebration-shock-and-scepticism-follow-colombias-presidential-election", desc: "Análisis de los resultados colombianos" }
    ],
    verification: "Verificado: encuesta 46.7/41.9 (Infobae, 4 JUN). Primera vuelta 43.7/40.9 (El Tiempo, escrutinio 100%). Endoso Trump (PBS, Polymarket)."
  }
},

/* ── N7: TAIWÁN PIB 9.64% ── */
{
  id: "n7",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 ASIA-PACÍFICO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/TSMC_Fab_12A_01.jpg?width=800",
  imageAlt: "Fábrica TSMC en Taiwán — corazón de la revolución IA global",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "TAIWÁN: PIB revisado al alza a +9.64% — máximo en 16 años impulsado por IA y TSMC. Q1 creció +14.55%, el trimestre más fuerte en 48 años",
  pills: ["+9.64% PIB 2026", "+14.55% Q1", "+39.77% exportaciones", "TSMC + Nvidia + Apple"],
  why: "Taiwán se convierte en la economía de mayor crecimiento del mundo desarrollado gracias a la demanda de chips IA. La paradoja: la isla que China quiere invadir es también la más importante del mundo para la cadena de suministro de inteligencia artificial.",
  viralPct: 85, viralCls: "viral-high",
  viralSources: "Nikkei Asia · Bloomberg · Reuters · Yahoo Finance · Focus Taiwan",
  detail: {
    summary: "Taiwán revisó su previsión de PIB 2026 al alza hasta +9.64%, el ritmo más rápido desde 2010. El Q1 creció un 14.55%, el trimestre más fuerte en casi 48 años. Las exportaciones subirán un 39.77%, el crecimiento más rápido en cinco décadas. Todo impulsado por la demanda de chips para IA, liderada por TSMC, Nvidia y Apple. Taiwán también desarrolló un sistema de navegación de drones sin GPS y prototipos de perros robot con visión térmica.",
    context: "Taiwán produce ~90% de los chips avanzados del mundo a través de TSMC. La dependencia global de estos chips es la mejor defensa de Taiwán frente a China — el llamado 'escudo de silicio'. Mientras China presiona militarmente (incursiones ADIZ, guardacostas en Kinmen y Pratas), Taiwán se hace cada vez más imprescindible económicamente.",
    vp: "Ángulo VP fuerte: la isla que China quiere invadir se está convirtiendo en la economía más importante del mundo. Cuanto más crece, más peligrosa se vuelve la amenaza china — y más catastrófica sería una invasión para la economía global. Paradoja perfecta.",
    sources: [
      { headline: "Taiwan raises 2026 GDP growth outlook to 16-year high on AI boom", medium: "Nikkei Asia", date: "2026-05-29", url: "https://asia.nikkei.com/economy/taiwan-raises-2026-gdp-growth-outlook-to-16-year-high-on-ai-boom", desc: "PIB al máximo en 16 años por IA" },
      { headline: "Taiwan Lifts 2026 Growth Outlook to More Than 9% on AI Hunger", medium: "Bloomberg", date: "2026-05-29", url: "https://www.bloomberg.com/news/articles/2026-05-29/taiwan-lifts-2026-growth-outlook-to-more-than-9-on-ai-hunger", desc: "Bloomberg: crecimiento por encima del 9%" },
      { headline: "Taiwan raises 2026 GDP growth forecast to 9.64%", medium: "Focus Taiwan", date: "2026-05-29", url: "https://focustaiwan.tw/business/202605290022", desc: "Cifra oficial del gobierno taiwanés" }
    ],
    verification: "Verificado: 9.64% PIB (agencia estadística Taiwán via Focus Taiwan). Q1 14.55% (IndexBox). Exportaciones +39.77% (Nikkei, Reuters). TSMC como motor (Bloomberg)."
  }
},

/* ── N8: ISRAEL-LÍBANO CEASEFIRE ── */
{
  id: "n8",
  tags: [{ cls:"tag-red", text:"🔴 HOY" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/View_from_Beaufort_Castle%2C_Lebanon%2C_2006.jpg?width=800",
  imageAlt: "Vista desde el Castillo de Beaufort, Líbano",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/South_lebanon_map.png?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "ISRAEL-LÍBANO: alto el fuego condicional acordado pero Hezbollah lo rechaza — más de 20 muertos en bombardeos el viernes",
  pills: ["Alto el fuego condicional", "Hezbollah rechaza", "20+ muertos viernes", "Zonas piloto propuestas"],
  why: "Israel y Líbano acordaron un alto el fuego con 'zonas piloto' donde el ejército libanés tendría control exclusivo, pero Hezbollah lo rechazó. Los bombardeos continúan. La ocupación de Beaufort sigue activa.",
  viralPct: 70, viralCls: "viral-mid",
  viralSources: "Al Jazeera · CNN · Times of Israel · Defense Post",
  detail: {
    summary: "Israel y Líbano acordaron implementar un alto el fuego condicional que requiere un 'cese completo' del fuego de Hezbollah y la creación de 'zonas piloto' donde las fuerzas armadas libanesas tendrían control exclusivo. Sin embargo, Hezbollah rechazó la extensión del alto el fuego. Más de 20 personas murieron en bombardeos israelíes en el sur del Líbano el viernes 5 de junio. Israel mantiene la ocupación del Castillo de Beaufort.",
    context: "La ocupación de Beaufort (31 mayo) fue la mayor penetración terrestre de Israel en Líbano en 26 años. Netanyahu ordenó profundizar operaciones más allá del río Litani pese al alto el fuego de abril. La situación es un eco de la ocupación 1982-2000 que creó a Hezbollah.",
    vp: "El tema Líbano/Beaufort ya está en investigación. La novedad es el rechazo de Hezbollah al alto el fuego y la escalada continuada. Mantener en vigilancia para actualizar la propuesta existente.",
    sources: [
      { headline: "Israel, Lebanon agree to conditional ceasefire", medium: "Al Jazeera", date: "2026-06-04", url: "https://www.aljazeera.com/news/2026/6/4/israel-and-lebanon-agree-to-conditional-ceasefire", desc: "Acuerdo de alto el fuego condicional" },
      { headline: "Ceasefire in Lebanon frays, Iran warns of wider war", medium: "CNN", date: "2026-06-05", url: "https://www.cnn.com/2026/06/05/world/live-news/iran-trump-lebanon-israel-war-news", desc: "El alto el fuego se deshace" },
      { headline: "Between Beaufort and Beirut, Israel faces narrowing options against Hezbollah", medium: "Times of Israel", date: "2026-06-03", url: "https://www.timesofisrael.com/between-beaufort-and-beirut-israel-faces-narrowing-options-against-hezbollah/", desc: "Opciones cada vez más estrechas para Israel" }
    ],
    verification: "Verificado: alto el fuego condicional (Al Jazeera). Rechazo Hezbollah (CNN). 20+ muertos viernes (CNN live, Democracy Now). Beaufort ocupado (Defense Post)."
  }
},

/* ── N9: UCRANIA-RUSIA ── */
{
  id: "n9",
  tags: [{ cls:"tag-orange", text:"🟠 HOY" }, { cls:"tag-blue", text:"🌍 EUROPA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volodymyr_Zelenskyy_in_2022.jpg?width=800",
  imageAlt: "Volodymyr Zelensky, presidente de Ucrania",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Ukraine_in_its_region.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "UCRANIA: Trump dice que la guerra está 'cerca de resolverse' — Rusia pierde 30.000 soldados en mayo, 224 combates diarios",
  pills: ["Trump: 'cerca de resolverse'", "30.000 bajas rusas/mes", "224 combates/día", "1.429 prisioneros recuperados"],
  why: "Trump señaló el 5 de junio apoyo a conversaciones directas Rusia-Ucrania. Las pérdidas rusas superaron 30.000 en mayo. Ucrania duplicó ataques a objetivos a más de 50km del frente.",
  viralPct: 68, viralCls: "viral-mid",
  viralSources: "Al Jazeera · Ukrinform · Russia Matters · Kyiv Independent",
  detail: {
    summary: "Trump declaró el 5 de junio que cree que la guerra Rusia-Ucrania está 'cerca de resolverse' y apoyó conversaciones directas entre los dos países. En mayo, las pérdidas rusas superaron los 30.000 efectivos. El 4 de junio hubo 224 combates, los más intensos en el sector de Pokrovsk (33 asaltos). Ucrania duplicó los ataques a objetivos a más de 50km del frente. Se han recuperado 1.429 prisioneros en 7 intercambios desde enero.",
    context: "La guerra cumple más de 4 años. Las pérdidas rusas acumuladas se estiman en cientos de miles. Los ataques con drones son diarios en ambas direcciones. La fábrica de alimentos para bebés Yagotynske en la región de Kiev fue atacada (9 heridos, 4 muertos).",
    vp: "Tema Ucrania tiene rendimiento medio en VP (Putin economía colapsa = 355K fue el mejor). Solo vale con ángulo muy específico, no como actualización general.",
    sources: [
      { headline: "Ukraine drone attack kills 8 in Russian-held territory in new escalation", medium: "Al Jazeera", date: "2026-06-03", url: "https://www.aljazeera.com/news/2026/6/3/ukraine-drone-attack-kills-7-in-russian-held-territory-in-new-escalation", desc: "Escalada drones ucranianos" },
      { headline: "The Russia-Ukraine War Report Card, June 3, 2026", medium: "Russia Matters", date: "2026-06-03", url: "https://www.russiamatters.org/news/russia-ukraine-war-report-card/russia-ukraine-war-report-card-june-3-2026", desc: "Informe situación guerra" },
      { headline: "At least 22 people killed in Russian attacks on Ukraine", medium: "Al Jazeera", date: "2026-06-02", url: "https://www.aljazeera.com/news/2026/6/2/at-least-nine-people-killed-dozens-wounded-in-russian-attacks-on-ukraine", desc: "22 muertos en ataques rusos" }
    ],
    verification: "Verificado: Trump declaración (CBS, CNN 5 JUN). 30.000 bajas (Ukrinform). 224 combates (Ukrinform, 4 JUN). 1.429 prisioneros (Zelensky, Ukrinform)."
  }
},

/* ── N10: IRÁN COBRA POR ORMUZ ── */
{
  id: "n10",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO / ECONOMÍA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageAlt: "Petrolero cruzando el Estrecho de Ormuz",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 3.0",
  title: "IRÁN COBRA $2 MILLONES POR BARCO para cruzar el Estrecho de Ormuz — pagos en yuanes y criptomonedas, EEUU rechaza la legalidad",
  pills: ["$2M por barco", "$1/barril de crudo", "Pagos en yuanes/crypto", "UNCLOS lo prohíbe"],
  why: "Irán creó una 'autoridad de tránsito' para Ormuz y cobra hasta $2M por viaje. Los pagos se hacen en yuanes y stablecoins, no en dólares. La ONU, EEUU y Europa rechazan la legalidad. Es un peaje de facto sobre el 20% del petróleo mundial.",
  viralPct: 80, viralCls: "viral-high",
  viralSources: "Bloomberg · Euronews · Argus Media · Middle East Monitor · The National",
  detail: {
    summary: "Irán estableció una autoridad de tránsito para el Estrecho de Ormuz y cobra hasta $2 millones por viaje y $1 por barril de crudo transportado. Los pagos se realizan en yuanes chinos y stablecoins, no en dólares. Irán lo presenta como 'tarifas de servicio' (asistencia navegación, rescate, seguridad), no peajes. Pero el artículo 26 de UNCLOS prohíbe explícitamente cobrar por el tránsito de estrechos internacionales. EEUU, estados del Golfo y Europa rechazan la legalidad.",
    context: "El Estrecho de Ormuz canaliza ~20% del petróleo mundial. Irán lleva meses cobrando de facto a barcos. Bloomberg reportó en marzo que algunos barcos ya pagaban. En mayo Irán formalizó la autoridad. El uso de yuanes y cripto es un desafío directo al sistema del dólar.",
    vp: "Ángulo poderoso: Irán está creando un peaje ilegal sobre el 20% del petróleo mundial y cobrando en yuanes y cripto — un triple desafío al orden marítimo, al derecho internacional y al dólar. Sin embargo, el tema Ormuz ha sido descartado por genérico antes. Solo funciona con este ángulo específico (yuanes + crypto + precedente legal).",
    sources: [
      { headline: "Iran Charges Some Ships Hormuz Transit Fees for Safe Passage", medium: "Bloomberg", date: "2026-03-24", url: "https://www.bloomberg.com/news/articles/2026-03-24/iran-charges-some-ships-hormuz-transit-fees-for-safe-passage", desc: "Bloomberg revela los cobros de Irán" },
      { headline: "Iran seeks to collect service fees for crossing Strait of Hormuz", medium: "Middle East Monitor", date: "2026-06-05", url: "https://www.middleeastmonitor.com/20260605-iran-seeks-to-collect-service-fees-not-tolls-for-crossing-strait-of-hormuz/", desc: "Irán busca cobrar 'tarifas de servicio'" },
      { headline: "Iran demands transit fees in yuan, stablecoins for Strait of Hormuz passage", medium: "The Standard", date: "2026-04-01", url: "https://www.thestandard.com.hk/world/article/328445/Iran-demands-transit-fees-in-yuan-stablecoins-for-Strait-of-Hormuz-passage", desc: "Irán exige pagos en yuanes y cripto" }
    ],
    verification: "Verificado: $2M por viaje (Argus Media, funcionario iraní). $1/barril (Bloomberg). Yuanes y stablecoins (Bloomberg, The Standard). Autoridad de tránsito (Euronews, mayo). UNCLOS Art. 26 (The National, análisis legal)."
  }
},

/* ── N11: ZAPATERO IMPUTADO ── */
{
  id: "n11",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 ESPAÑA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zapatero_2011.jpg?width=800",
  imageAlt: "José Luis Rodríguez Zapatero, expresidente del Gobierno de España",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "ZAPATERO IMPUTADO: la justicia investiga €53M del rescate de Plus Ultra, red venezolana de los hermanos Amaro, oro y PDVSA",
  pills: ["€53M investigados", "Red Amaro-Venezuela", "Oro + PDVSA + lavado", "Declaró como investigado 2 JUN"],
  why: "Un expresidente del Gobierno de España imputado por blanqueo de capitales vinculado a Venezuela es un terremoto institucional. La red conecta Plus Ultra, los hermanos Amaro de Panamá, PDVSA, oro venezolano y el chavismo.",
  viralPct: 85, viralCls: "viral-high",
  viralSources: "Olive Press · Newsroom Panama · Plataforma Media · Washington Examiner",
  detail: {
    summary: "El expresidente Zapatero fue imputado por tres cargos penales: blanqueo de capitales vinculado al rescate público de Plus Ultra Líneas Aéreas (€53M durante la pandemia). Los investigadores sospechan que los fondos del rescate se usaron para blanquear capital ilícito procedente de redes de corrupción venezolanas. Los hermanos Amaro Chacón (familia vinculada al chavismo, cercana a Delcy Rodríguez) canalizaron millones a través de empresas en Panamá. A cambio, Zapatero facilitó influencia política y contratos con PDVSA y proyectos mineros estatales venezolanos, incluyendo comercio de oro. Declaró como investigado ante el juez el 2 de junio.",
    context: "Zapatero lleva años siendo el principal mediador internacional de Maduro. Su papel en las negociaciones de la oposición venezolana siempre fue controvertido. El Washington Examiner publicó un editorial pidiendo a Trump que solicite su extradición. El caso se suma a los escándalos de corrupción que sacuden al PSOE (caso Koldo, Santos Cerdán encarcelado).",
    vp: "Tema APROBADO por el equipo. Deadline: publicar antes del 10 de junio (declaración programada 17-18 JUN). El ángulo VP es la RED: cómo un expresidente español se convirtió en el nexo entre el régimen venezolano, el oro ilegal, PDVSA y el blanqueo a través de una aerolínea rescatada con dinero público durante la pandemia.",
    sources: [
      { headline: "Venezuela: Payments Being Investigated in the Rodríguez Zapatero Case", medium: "Newsroom Panama", date: "2026-06-05", url: "https://newsroompanama.com/2026/06/05/venezuela-payments-being-investigated-by-the-spanish-justice-system-in-the-rodriguez-zapatero-case-and-the-amaro-brothers-of-panama/", desc: "Pagos venezolanos investigados en caso Zapatero" },
      { headline: "Spain's Zapatero Plus Ultra corruption scandal exposes Venezuela links", medium: "The Olive Press", date: "2026-05-20", url: "https://www.theolivepress.es/spain-news/2026/05/20/spains-zapatero-plus-ultra-corruption-scandal-exposes-venezuela-links/", desc: "Escándalo corrupción expone vínculos Venezuela" },
      { headline: "Spain: Zapatero indicted on corruption and money laundering", medium: "Plataforma Media", date: "2026-05-19", url: "https://www.plataformamedia.com/en/2026/05/19/ormer-spanish-pm-zapatero-indicted-money-laundering-airline-bailout-2026/", desc: "Zapatero imputado por blanqueo" },
      { headline: "Spain's Zapatero exposed as Maduro's fixer. Trump must extradite", medium: "Washington Examiner", date: "2026-06-02", url: "https://www.washingtonexaminer.com/op-eds/4579365/spain-zapatero-exposed-maduro-fixer-trump-must-extradite/", desc: "Editorial pidiendo extradición de Zapatero" }
    ],
    verification: "Verificado: imputación 3 cargos (Plataforma Media). €53M (Olive Press). Hermanos Amaro (Newsroom Panama). Declaración 2 JUN (juez Calama, Audiencia Nacional). PDVSA + oro (Olive Press, Newsroom Panama)."
  }
},

/* ── N12: EAU DEJA OPEP ── */
{
  id: "n12",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 ECONOMÍA GLOBAL" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Abu_Dhabi_Skyline.jpg?width=800",
  imageAlt: "Sede de ADNOC en Abu Dabi — Emiratos Árabes Unidos",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Abu_dhabi_skylines_2014.jpg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "EAU ABANDONA LA OPEP: la cuota de mercado del cartel cae por debajo del 30% por primera vez — OPEC+ se reúne mañana",
  pills: ["EAU fuera desde 1 MAY", "OPEP < 30% mercado", "4.85M bpd capacidad EAU", "OPEC+ mañana 7 JUN"],
  why: "La salida de EAU es la fractura más grave de la OPEP en décadas. El cartel pierde a su tercer mayor productor y su cuota de mercado cae por debajo del 30% por primera vez. Mañana OPEC+ se reúne sin EAU en la mesa.",
  viralPct: 75, viralCls: "viral-mid",
  viralSources: "CNBC · Al Jazeera · Gulf News · Euronews",
  detail: {
    summary: "Emiratos Árabes Unidos abandonó la OPEP el 1 de mayo de 2026 tras casi seis décadas de membresía. Abu Dabi llevaba años pujando por una cuota de producción mayor — su cuota de 3.2M bpd estaba muy por debajo de su capacidad sostenible de 4.85M bpd. Planea expandir a 5M bpd para 2027. Sin EAU, la cuota de mercado de la OPEP cae por debajo del 30% por primera vez. La reunión OPEC+ del 7 de junio será la primera sin EAU.",
    context: "VP ya cubrió 'Emiratos rompe OPEP' (334K views, 12 MAY). La novedad es el impacto real: OPEP por debajo del 30% de mercado, la reunión de mañana sin EAU, y la posibilidad de que EAU inunde el mercado con 1.6M bpd extra cuando se normalice Ormuz.",
    vp: "PRECAUCIÓN: VP ya publicó sobre esto (334K views). Solo vale como actualización si hay giro en la reunión OPEC+ de mañana.",
    sources: [
      { headline: "UAE quits OPEC: What that means for the Gulf, energy markets and beyond", medium: "Al Jazeera", date: "2026-04-29", url: "https://www.aljazeera.com/news/2026/4/29/uae-quits-opec-what-that-means-for-the-gulf-energy-markets-and-beyond", desc: "Análisis de la salida de EAU" },
      { headline: "Shocking UAE exit rocks OPEC", medium: "CNBC", date: "2026-04-29", url: "https://www.cnbc.com/2026/04/29/shocking-uae-exit-rocks-opec-but-group-will-still-hold-significant-sway-over-the-oil-market.html", desc: "CNBC: salida sacude la OPEP" },
      { headline: "UAE to Exit OPEC in 2026", medium: "Gulf News", date: "2026-04-28", url: "https://gulfnews.com/business/energy/why-did-uae-decide-to-exit-opecgovernment-officials-industry-experts-reveal-reasons-behind-move-1.500522343", desc: "Razones oficiales de la salida" }
    ],
    verification: "Verificado: salida 1 MAY (CNBC, Al Jazeera). Cuota <30% (CNBC análisis). 4.85M bpd capacidad (Gulf News, oficiales). OPEC+ 7 JUN (varios medios)."
  }
},

/* ── N13: MALI AFRICA CORPS ── */
{
  id: "n13",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 ÁFRICA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Northern_Mali_conflict.svg?width=800",
  imageAlt: "Mapa del conflicto en el norte de Mali",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_map_of_Mali.svg?width=800",
  imageCredit: "Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "MALI: Africa Corps de Rusia pierde un helicóptero abatido, abandona Kidal — Wagner se fue y el Sahel se hunde",
  pills: ["Helicóptero derribado 25 ABR", "Africa Corps abandona Kidal", "Wagner se fue JUN 2025", "Rebranding fracasa"],
  why: "El rebranding de Wagner a Africa Corps fracasa en Mali. Un helicóptero fue derribado por el Frente de Liberación de Azawad. Africa Corps abandonó Kidal. Rusia pierde terreno en el Sahel justo cuando más necesita proyectar poder en África.",
  viralPct: 60, viralCls: "viral-low",
  viralSources: "ACLED · Carnegie · Responsible Statecraft · Stimson Center · ADF",
  detail: {
    summary: "El Africa Corps (sucesor de Wagner en Mali) sufrió un golpe significativo: el 25 de abril un helicóptero fue derribado por el Frente de Liberación de Azawad, con toda la tripulación y el grupo de fuego móvil muertos. Tras los ataques, Africa Corps abandonó Kidal. Wagner había declarado 'misión cumplida' y se retiró de Mali en junio 2025. El paso a Africa Corps (controlado por el Kremlin) fue presentado como un rebranding estratégico, pero los resultados operacionales son peores.",
    context: "Rusia ha intentado mantener su presencia militar en el Sahel a través de la transición de Wagner a Africa Corps. La junta militar de Mali depende de este apoyo. Pero los grupos yihadistas y separatistas están ganando terreno. La pérdida de Kidal es simbólica: fue la ciudad que Africa Corps/Wagner ayudó a reconquistar.",
    vp: "Tema APROBADO pero con la regla de conectar con tema no-africano. Posible ángulo: Rusia pierde en Mali mientras pierde en Ucrania — la sobreextensión imperial rusa. O: el Sahel como cementerio de intervenciones (Francia → Rusia → ¿quién sigue?).",
    sources: [
      { headline: "What does the Wagner Group's exit from Mali mean for Russian activity in Africa?", medium: "ACLED", date: "2026-05-28", url: "https://acleddata.com/qa/qa-what-does-wagner-groups-exit-mali-mean-russian-activity-africa", desc: "Análisis de la salida de Wagner y sus consecuencias" },
      { headline: "Russia in Africa: Examining Moscow's Influence and Its Limits", medium: "Carnegie Endowment", date: "2026-02-15", url: "https://carnegieendowment.org/russia-eurasia/research/2026/02/russia-role-west-southern-africa-junta-wagner-africa-corps", desc: "Carnegie: límites de la influencia rusa en África" },
      { headline: "Russia's Africa Corps 'Hands-Off' Approach in Mali Proves Costly", medium: "Africa Defense Forum", date: "2026-03-10", url: "https://adf-magazine.com/2026/03/russias-africa-corps-pmc-hands-off-approach-in-mali-proves-costly/", desc: "Enfoque de Africa Corps resulta costoso" }
    ],
    verification: "Verificado: helicóptero derribado 25 ABR (ACLED, Stimson). Abandono Kidal (ACLED). Wagner salió JUN 2025 (Responsible Statecraft). Africa Corps como sucesor (Carnegie)."
  }
},

/* ── N14: GASTO DEFENSA EUROPA ── */
{
  id: "n14",
  tags: [{ cls:"tag-orange", text:"🟠 SEMANA" }, { cls:"tag-blue", text:"🌍 EUROPA / DEFENSA" }],
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_2A7_%2851099412420%29.jpg?width=800",
  imageAlt: "Tanque Leopard 2A7+ — símbolo del rearme europeo",
  imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_OTAN_landscape_logo.svg?width=800",
  imageCredit: "KMW / Wikimedia Commons",
  imageSource: "CC BY-SA 4.0",
  title: "OTAN SUBE AL 5%: la alianza exige 3.5% del PIB en defensa para 2035 — Alemania proyecta €162.000M, Polonia ya gasta 4.48%",
  pills: ["5% PIB objetivo 2035", "3.5% defensa pura", "+14% gasto europeo 2025", "$559B Europa total"],
  why: "La OTAN ha fijado el 5% del PIB como nuevo objetivo de gasto en defensa y seguridad para 2035. Alemania proyecta €162.000M para 2029. Polonia lidera con 4.48%. El gasto europeo creció un 14% solo en 2025.",
  viralPct: 65, viralCls: "viral-mid",
  viralSources: "NATO · SIPRI · McKinsey · IISS · Intereconomics",
  detail: {
    summary: "En la cumbre OTAN de La Haya 2025, los aliados se comprometieron a invertir el 5% del PIB en defensa y seguridad para 2035, con al menos 3.5% en gasto de defensa puro. En 2025, todos los aliados alcanzaron el 2% por primera vez (vs. solo 3 en 2014). Europa gastó $559B combinados. Alemania proyecta €117.2B en 2026 y €162B en 2029 (3.5% PIB). Polonia lidera con 4.48%, seguida de Lituania (4%), Letonia (3.73%) y Estonia (3.38%). Francia asignó €68.5B (2.25% PIB).",
    context: "El rearme europeo se aceleró drásticamente tras la invasión rusa de Ucrania. La retirada parcial de tropas EEUU de Europa (anunciada para la cumbre OTAN 18 JUN) añade urgencia. El problema no es solo gastar más sino tener capacidad industrial para fabricar lo que se necesita.",
    vp: "VP ya trató rearme europeo (tema aprobado pero buscando enfoque diferente). El ángulo del 5% es nuevo. Posible pregunta VP: '¿Europa puede fabricar lo que gasta? €559.000M anuales y sigue sin poder producir suficiente munición'.",
    sources: [
      { headline: "Can Europe Deliver NATO's Five Percent?", medium: "Intereconomics", date: "2026-03-15", url: "https://www.intereconomics.eu/contents/year/2026/number/2/article/can-europe-deliver-nato-s-five-percent.html", desc: "¿Puede Europa cumplir el 5%?" },
      { headline: "Global military spending rise continues as European and Asian expenditures surge", medium: "SIPRI", date: "2026-04-20", url: "https://www.sipri.org/media/press-release/2026/global-military-spending-rise-continues-european-and-asian-expenditures-surge", desc: "SIPRI: gasto militar global sigue subiendo" },
      { headline: "NATO defense spending: Tracking the numbers", medium: "McKinsey", date: "2026-05-01", url: "https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/european-defense-by-the-numbers", desc: "McKinsey: defensa europea en cifras" }
    ],
    verification: "Verificado: 5% objetivo (NATO.int, cumbre La Haya). $559B Europa (SIPRI). Alemania €162B/2029 (EU Parliament). Polonia 4.48% (NATO/SIPRI). Francia €68.5B (EU Parliament)."
  }
}

],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 7 temas · Estrategia Tema de Millón v7.0
═════════════════════════════════════════════════════════════ */
proposals: [

/* ═══ P1: MUNDIAL — TEMA DORADO ═══ */
{
  number: "P1",
  golden: true,
  tags: [{ cls:"tag-red", text:"🔴 ATACAR HOY" }, { cls:"tag-blue", text:"⚽ GLOBAL / GEOPOLÍTICA" }],
  potCls: "pot-explosive",
  potText: "🔴 EXPLOSIVO · 97%",
  flag: "ir",
  title: "EL MUNDIAL DE LA GUERRA: el país al que bombardeas de noche y contra el que juegas de día",
  subtitle: "Por primera vez un anfitrión del Mundial está en guerra con un equipo participante. Irán duerme en Tijuana, vuela a LA, juega y vuelve. Fans prohibidos. ICE amenaza estadios.",
  chips: [
    { cls:"chip-gold", text:"⭐ TEMA DORADO" },
    { cls:"chip-red", text:"🔥 ATACAR HOY" },
    { cls:"chip-green", text:"📈 ACELERANDO — 5 días para el arranque" },
    { cls:"chip-blue", text:"🎯 OPORTUNIDAD CLARA en español" },
    { cls:"chip-orange", text:"🧲 Retención FUERTE" }
  ],
  tesis: "El Mundial de 2026 es el más geopolítico de la historia. Por primera vez, un país anfitrión está literalmente en guerra con un equipo participante. Irán tiene que dormir en otro país (México) porque EEUU no le deja quedarse en su territorio. Los fans iraníes están completamente vetados. El Secretario de Estado insinúa que los jugadores pueden ser espías del IRGC. Los sindicatos amenazan con huelga si ICE pone agentes en SoFi Stadium. Y todo esto mientras se bombardea Irán diariamente. La segunda derivada: el deporte como último espacio de contacto entre países en guerra — y qué pasa cuando incluso ese espacio se militariza.",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/SoFi_Stadium_2022.jpg?width=1200",
  bannerAlt: "SoFi Stadium — donde Irán jugará partidos del Mundial mientras EEUU le bombardea",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/FIFA_World_Cup_2026_%28Wordmark%3B_Spanish%29.svg?width=1200",
  fields: [
    { label: "La noticia", value: "EEUU aprobó visas para la selección iraní el 5 JUN. El equipo jugará en SoFi Stadium (LA) pero dormirá en Tijuana (México). Los fans iraníes están vetados de EEUU. FIFA movió el base camp de Irán de EEUU a México. Marco Rubio insinuó que los jugadores podrían ser operativos del IRGC. Sindicatos amenazan huelga si ICE opera en estadios." },
    { label: "Segunda derivada", value: "El deporte siempre fue el último espacio de diplomacia entre enemigos (ping-pong diplomacy, Irán-EEUU 1998, Corea unificada en JJOO). Pero en 2026, incluso ese espacio se ha militarizado. El equipo iraní es tratado como una amenaza de seguridad nacional. Esto marca un precedente: ¿puede un país usar un evento deportivo como arma geopolítica? EEUU ya lo está haciendo — usando las visas, el alojamiento y la seguridad como herramientas de presión." },
    { label: "Gran pregunta", value: "¿Qué pasa cuando el último espacio neutral entre dos países en guerra — el deporte — se convierte en un campo de batalla más?" },
    { label: "El conflicto", value: "EEUU vs Irán (guerra real + competición deportiva). FIFA vs soberanía EEUU (reglas del deporte vs política migratoria). Seguridad vs derechos (ICE en estadios vs sindicatos). Irán vs la diáspora iraní (el equipo representa al régimen, los fans en EEUU se oponen al régimen)." },
    { label: "Por qué ahora", value: "El Mundial arranca el 11 de junio — en 5 DÍAS. Ventana de publicación de 3-4 días máximo para que el video salga antes o el mismo día del arranque." },
    { label: "VP ya lo trató?", value: "NO. VP nunca ha hecho un video sobre la geopolítica del Mundial 2026. Los videos sobre Irán (377K-509K los mejores) demuestran que el tema funciona. Pero este NO es un video más sobre Irán — es sobre el MUNDIAL como arena geopolítica." },
    { label: "Señal competencia", value: "OPORTUNIDAD CLARA. La cobertura en español está dominada por medios deportivos que tratan el tema como logística (visas, base camp). Ningún canal castellanoparlante de geopolítica ha conectado esto con la historia de la diplomacia deportiva, el precedente legal de FIFA, o la militarización del deporte. Canales del nicho no han publicado sobre este ángulo específico. El rendimiento de videos sobre el Mundial en canales generalistas de noticias es alto, lo que confirma demanda. Gap enorme para VP." },
    { label: "Título mental", value: "El país al que bombardeas de noche y contra el que juegas de día: el Mundial más absurdo de la historia" },
    { label: "Velocidad de agenda", value: "ACELERANDO — el tema pasa de logístico a geopolítico a medida que se acerca el 11 JUN. CFR, Foreign Policy y Hollywood Reporter publicaron análisis esta semana." },
    { label: "Polarización y personaje", value: "MÁXIMA. Dos bandos claros (EEUU-Irán, seguridad-deporte, régimen-diáspora). Personajes fuertes: Trump (el presidente que bombardea y recibe), el equipo iraní (los jugadores que cruzan la frontera para jugar), Marco Rubio (el que los llama espías), FIFA (la que permite el absurdo)." },
    { label: "Retención narrativa", value: "FUERTE. Apertura: el avión de Tijuana a LA con el equipo iraní. Pregunta: ¿qué pasa cuando el deporte se convierte en guerra? Escalada: historia 1998, tensión creciente 2022, guerra real 2026. Giro: los fans iraníes en EEUU que odian al régimen pero quieren ver a su equipo. Revelación: el precedente que esto crea (¿se podrá expulsar equipos de países enemigos?). Cierre: ¿es este el último Mundial en el que el deporte mantiene su neutralidad?" },
    { label: "Promesa cumplible", value: "SÍ. El video promete explicar por qué este es el Mundial más geopolítico de la historia. Es 100% demostrable: guerra real, visas reales, base camp en Tijuana real, ICE en estadios real, precedente FIFA real, historia de 1998 real." },
    { label: "Ventaja VP", value: "MÁXIMA. Requiere: historia de la diplomacia deportiva, contexto guerra Irán, derecho internacional (UNCLOS + FIFA), mapas (Tijuana-LA, Ormuz, bases EEUU), múltiples actores (Trump, Rubio, FIFA, equipo iraní, sindicatos, ICE, diáspora). Ningún canal del nicho puede hacer esto con la profundidad de VP." },
    { label: "Motor viral", value: "P1 Medios premium: CFR, Foreign Policy, Hollywood Reporter, Al Jazeera — cobertura intensa. P2 Actualidad: arranca en 5 días. P3 Visual: estadios, frontera Tijuana-LA, mapas, banderas, protestas. P4 Conflicto: máximo (guerra + fútbol). P5 Audiencia hispana: ALTÍSIMO — es el Mundial, co-organizado por México. P6 Conversación: domina la agenda deportiva y política. P7 YouTube: videos deportivos sobre el Mundial ya funcionan; el ángulo geopolítico es el gap. P8 Historial VP: Irán funciona (377K-509K), deportes+geopolítica no se ha explorado. P9 Personajes fuertes (Trump, equipo iraní), dimensión económica (FIFA, derechos TV), timing perfecto (5 días)." },
    { label: "Qué investigar más", value: "1) Precedentes históricos exactos de equipos de países en guerra en Mundiales. 2) Reglas FIFA sobre participación en conflicto. 3) Costes económicos del dispositivo de seguridad. 4) Posición exacta de México como mediador/anfitrión alternativo. 5) Opinión de la diáspora iraní en LA. 6) Comparación con JJOO 1980/1984 (boicots)." },
    { label: "Veredicto", value: "⚡ ATACAR HOY — ventana de 3-4 días máximo antes del arranque del Mundial el 11 JUN" }
  ],
  sources: [
    { headline: "FIFA World Cup 2026: The Geopolitical Tensions at Play Off the Pitch", medium: "CFR", date: "2026-06-05", url: "https://www.cfr.org/articles/the-u-s-is-co-hosting-the-world-cup-but-much-of-the-world-cant-attend", desc: "Análisis geopolítico del Mundial por CFR" },
    { headline: "FIFA Faces Trump's Iran Ban", medium: "Foreign Policy", date: "2026-06-05", url: "https://foreignpolicy.com/2026/06/05/mexico-america-trump-iran-fifa-olympics-world-cup/", desc: "Foreign Policy sobre el veto a Irán" },
    { headline: "US visa rejections, war on Iran keep fans away from World Cup", medium: "Al Jazeera", date: "2026-06-05", url: "https://www.aljazeera.com/sports/2026/6/5/us-visa-rejections-war-on-iran-keep-fans-away-from-world-cup", desc: "Fans excluidos del Mundial" },
    { headline: "How America Broke the 2026 FIFA World Cup", medium: "Hollywood Reporter", date: "2026-06-06", url: "https://www.hollywoodreporter.com/news/general-news/how-america-broke-the-world-cup-1236614617/", desc: "Cómo EEUU rompió el Mundial" }
  ]
},

/* ═══ P2: ARMENIA ═══ */
{
  number: "P2",
  golden: false,
  tags: [{ cls:"tag-red", text:"🔴 ATACAR HOY" }, { cls:"tag-blue", text:"🌍 CÁUCASO" }],
  potCls: "pot-high",
  potText: "🟠 MUY ALTO · 91%",
  flag: "am",
  title: "RUSIA GASTA $50M PARA ROBAR UNAS ELECCIONES: el plan de mover 100.000 armenios para frenar el giro pro-occidental",
  subtitle: "Armenia vota mañana. Rusia planea transportar votantes desde su territorio. Armenia responde: 25 días de servicio militar obligatorio para los que vuelvan.",
  chips: [
    { cls:"chip-red", text:"🔥 ATACAR HOY" },
    { cls:"chip-green", text:"📈 ACELERANDO — elecciones mañana 7 JUN" },
    { cls:"chip-blue", text:"🎯 GAP ENORME en español" },
    { cls:"chip-orange", text:"🧲 Retención FUERTE" }
  ],
  tesis: "Rusia ha diseñado la operación de interferencia electoral más ambiciosa y más cara de su historia: gastar $50 millones para transportar físicamente hasta 100.000 armenios desde Rusia para que voten contra Pashinyan. Las autoridades rusas emitieron cuotas por provincia. Armenia respondió con una contramedida genial: cualquier ciudadano que vuelva desde Rusia para votar será sometido a 25 días de entrenamiento militar obligatorio. Es el choque Rusia-Occidente en miniatura: Rusia intenta retener un aliado del Cáucaso mientras EEUU y la UE apoyan abiertamente a Pashinyan (Trump y JD Vance lo endorsaron). La segunda derivada: si Pashinyan gana con un mandato pro-occidental aplastante, es la pérdida más humillante para Rusia desde la caída de Ucrania — un aliado del CSTO que se va voluntariamente.",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Yerevan_panorama_%28June_2018%29.jpg?width=1200",
  bannerAlt: "Panorámica de Ereván, capital de Armenia",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=1200",
  fields: [
    { label: "La noticia", value: "Armenia vota mañana 7 JUN. Pashinyan lidera con ~65%. Reuters reveló plan ruso de $50M para transportar 100.000 votantes. Rusia emitió cuotas por provincia. Armenia impuso 25 días de servicio militar para retornados. Trump y JD Vance endorsaron a Pashinyan. OSCE desplegó observadores. Comisión Europea confirmó interferencia rusa." },
    { label: "Segunda derivada", value: "Si Pashinyan gana con mandato aplastante, Armenia completa su pivote hacia Occidente. Rusia pierde otro aliado del CSTO — después de que Georgia se alejara parcialmente. El Cáucaso Sur deja de ser zona de influencia rusa. Esto redefine la geopolítica regional: Azerbaiyán (aliado de Turquía), Georgia (en tensión), Armenia (pivotando a Occidente) — Rusia se queda sin ningún aliado fiable en el Cáucaso." },
    { label: "Gran pregunta", value: "¿Puede Rusia perder el Cáucaso entero mientras pierde en Ucrania? ¿Es Armenia la prueba de que el imperio ruso se contrae?" },
    { label: "El conflicto", value: "Rusia vs Armenia/Occidente. Pashinyan vs oposición pro-rusa (Karapetyan, financiado por oligarca). Democracia vs interferencia (elecciones libres vs votantes transportados). Seguridad vs soberanía (Rusia usa el CSTO como palanca, Armenia responde con servicio militar)." },
    { label: "Por qué ahora", value: "Las elecciones son MAÑANA 7 de junio. Los resultados se conocerán el domingo. Ventana de publicación inmediata." },
    { label: "VP ya lo trató?", value: "NO directamente. VP no ha hecho un video específico sobre Armenia 2026. Temas del Cáucaso no tienen historial claro en VP." },
    { label: "Señal competencia", value: "GAP ENORME en español. Ningún canal castellanoparlante del nicho ha tratado las elecciones armenias con profundidad. La cobertura en español se limita a DW Español y France 24 Español con piezas breves de noticias. El ángulo de los $50M y los 100.000 votantes no ha sido tratado en español. Competencia pendiente de comprobar en rendimiento relativo — pero la ausencia de cobertura es verificable." },
    { label: "Título mental", value: "Rusia gasta 50 millones de dólares para mover 100.000 votantes y robar unas elecciones: así intenta frenar la caída de su imperio" },
    { label: "Velocidad de agenda", value: "ACELERANDO — elecciones mañana. Máxima urgencia." },
    { label: "Polarización y personaje", value: "ALTA. Pashinyan (héroe de la Revolución de Terciopelo 2018, ahora pivot pro-occidental) vs Putin (que intenta retenerlo). Trump endorsando a Pashinyan es un giro inesperado." },
    { label: "Retención narrativa", value: "FUERTE. Apertura: un avión lleno de armenios sale de Moscú rumbo a Ereván para votar. Pregunta: ¿puede Rusia comprar unas elecciones moviendo personas? Escalada: la historia de Armenia (genocidio, URSS, independencia, Karabaj, revolución 2018). Giro: Armenia responde con servicio militar obligatorio. Revelación: si Pashinyan gana, Rusia pierde el Cáucaso entero. Cierre: ¿es Armenia la primera ficha del dominó post-soviético que cae voluntariamente?" },
    { label: "Promesa cumplible", value: "SÍ. El video promete explicar cómo Rusia intenta comprar unas elecciones y por qué Armenia puede ser la mayor humillación geopolítica de Putin. Todo demostrable: Reuters, inteligencia occidental, cuotas por provincia, servicio militar." },
    { label: "Ventaja VP", value: "ALTA. Requiere historia de Armenia (genocidio, URSS, Karabaj), mapas del Cáucaso, contexto CSTO, análisis de interferencia electoral, conexión con Ucrania. Muy difícil de copiar por canales superficiales." },
    { label: "Motor viral", value: "P1: Reuters, Defence24, Euronews, National Interest — cobertura significativa. P2: Elecciones mañana. P3: Mapas Cáucaso, aviones, protestas, Ereván. P4: Rusia vs democracia — conflicto claro. P5: Audiencia hispana: medio (Armenia no es tema habitual, pero la trama es irresistible). P6: Crece en medios europeos. P7: Gap total en español. P8: VP no ha tratado Armenia — riesgo de audiencia baja por país desconocido, pero la historia es tan fuerte que puede compensar. P9: Putin como personaje, $50M como cifra impactante, timing electoral." },
    { label: "Qué investigar más", value: "1) Resultado real de las elecciones (7 JUN). 2) Verificar cuántos armenios realmente viajaron desde Rusia. 3) Papel exacto de Turquía y Azerbaiyán. 4) Impacto en el acuerdo de paz Armenia-Azerbaiyán. 5) Reacción de China (tiene intereses en el Cáucaso)." },
    { label: "Veredicto", value: "⚡ ATACAR HOY / esperar resultados domingo y publicar análisis con resultado real" }
  ],
  sources: [
    { headline: "Russia has plan to use proxy voters to sway Armenian election", medium: "Eurasianet", date: "2026-05-29", url: "https://eurasianet.org/russia-has-plan-to-use-proxy-voters-in-attempt-to-sway-armenian-election", desc: "Plan ruso de votantes proxy" },
    { headline: "Armenia Threatens 25-Day Military Camp for Russia-Based Voters", medium: "Kyiv Post", date: "2026-06-03", url: "https://www.kyivpost.com/post/77613", desc: "Servicio militar para retornados" },
    { headline: "Pashinyan on course for landslide and pro-West mandate", medium: "Euronews", date: "2026-05-31", url: "https://www.euronews.com/2026/05/31/pashinyan-on-course-for-landslide-victory-and-pro-west-mandate-in-armenia-election-new-pol", desc: "Victoria aplastante de Pashinyan prevista" }
  ]
},

/* ═══ P3: ISRAEL ULTRAORTODOXOS ═══ */
{
  number: "P3",
  golden: false,
  tags: [{ cls:"tag-orange", text:"🟠 INVESTIGAR" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  potCls: "pot-high",
  potText: "🟠 ALTO · 88%",
  flag: "il",
  title: "80.000 HOMBRES SE NIEGAN A LUCHAR: la guerra civil dentro de Israel que puede derribar a Netanyahu mientras invade Líbano",
  subtitle: "Israel lucha en 3 frentes y su sector demográfico más dinámico se niega a servir. La coalición se rompe. Elecciones anticipadas en septiembre.",
  chips: [
    { cls:"chip-red", text:"🔥 INVESTIGAR ESTA SEMANA" },
    { cls:"chip-green", text:"📈 ACELERANDO" },
    { cls:"chip-blue", text:"✅ APROBADO por equipo" },
    { cls:"chip-orange", text:"🧲 Retención FUERTE" }
  ],
  tesis: "Israel está librando una guerra en tres frentes simultáneos (Irán, Líbano, restos de Gaza) y necesita más soldados que nunca. Pero 80.000 hombres ultraortodoxos — el sector demográfico de mayor crecimiento del país — se niegan a servir y paralizan el país con protestas masivas. La paradoja: el sector que más crece es el que menos contribuye a la defensa del Estado. Esto no es solo una crisis militar — es una crisis existencial sobre qué tipo de país quiere ser Israel. Y la consecuencia política inmediata: la coalición de Netanyahu se rompe por esto, no por la guerra.",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Jerusalem_Western_Wall_BW_1.JPG?width=1200",
  bannerAlt: "Soldados ultraortodoxos del IDF",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Jerusalem_Western_Wall_BW_2.JPG?width=1200",
  fields: [
    { label: "La noticia", value: "Protestas masivas el 2 JUN paralizaron Israel: carreteras bloqueadas, trenes detenidos, coches quemados. 80.000 ultraortodoxos evaden el servicio militar (80% de todos los evasores). 50.000 órdenes de reclutamiento programadas para julio. Los partidos ultraortodoxos retiraron apoyo a Netanyahu. Medios israelíes reportan elecciones anticipadas para septiembre." },
    { label: "Segunda derivada", value: "No es solo una disputa religiosa. Es una crisis demográfica-militar: los ultraortodoxos representan el 13% de Israel y son el sector de mayor crecimiento. Si no se integran al ejército, la carga militar recae cada vez más en una proporción menor de la población. A largo plazo, Israel no puede mantener un ejército de conscripción si un tercio de su población está exenta. Y la consecuencia política: Netanyahu podría caer no por la guerra con Irán, sino por intentar reclutar a sus propios aliados ultraortodoxos." },
    { label: "Gran pregunta", value: "¿Puede Israel mantener una guerra en tres frentes cuando su sector demográfico más dinámico se niega a luchar?" },
    { label: "El conflicto", value: "Ultraortodoxos vs Estado secular. Netanyahu vs sus propios aliados de coalición. Ejército vs exenciones religiosas. Demografía vs seguridad nacional." },
    { label: "Por qué ahora", value: "50.000 órdenes de reclutamiento para julio. Coalición al borde del colapso. Posibles elecciones septiembre. Todo mientras Israel ocupa Beaufort y lucha contra Irán." },
    { label: "VP ya lo trató?", value: "NO directamente. Tema APROBADO por el equipo como 'ángulo único: guerra en 3 frentes + población que no sirve'." },
    { label: "Señal competencia", value: "Cubierto superficialmente. Canales del nicho han tratado las protestas como noticia, pero ninguno ha conectado la crisis demográfica con la sostenibilidad militar a largo plazo ni con la caída de la coalición. Gap claro para VP con el ángulo estructural." },
    { label: "Título mental", value: "80.000 hombres se niegan a luchar: la guerra dentro de Israel que puede acabar con Netanyahu" },
    { label: "Velocidad de agenda", value: "ACELERANDO — 50.000 órdenes julio, coalición al borde, elecciones septiembre posibles." },
    { label: "Polarización y personaje", value: "ALTA. Netanyahu (atrapado entre guerra y coalición), ultraortodoxos (sector que se niega), soldados seculares (que cargan con todo). Debate claro: ¿deben los religiosos servir?" },
    { label: "Retención narrativa", value: "FUERTE. Apertura: manifestante ultraortodoxo quemando un coche mientras a 100km un soldado de la misma edad lucha en Líbano. Pregunta: ¿puede un país mantener una guerra si un tercio de sus jóvenes no pelea? Escalada: historia de las exenciones desde 1948, crecimiento demográfico, crisis de conscripción. Giro: Netanyahu creó esta situación al depender de los partidos ultraortodoxos. Revelación: a largo plazo, Israel enfrenta una crisis militar existencial. Cierre: ¿qué tipo de país quiere ser Israel?" },
    { label: "Promesa cumplible", value: "SÍ. Datos duros: 80.000 evasores, 13% población, 50.000 órdenes, coalición rota. Todo verificable y documentado." },
    { label: "Ventaja VP", value: "ALTA. Requiere historia de Israel, demografía, análisis político de coalición, contexto militar de 3 frentes, mapas. Muy difícil de tratar superficialmente." },
    { label: "Motor viral", value: "P1: NPR, CFR, Jerusalem Post, Times of Israel. P2: En evolución continua. P3: Protestas masivas, soldados, mapas. P4: Conflicto interno máximo. P5: Israel siempre interesa a la audiencia hispana (Israel agricultura = 3.9M views). P6: Genera debate enorme. P7: Cubierto superficialmente, gap para profundidad. P8: Israel funciona bien en VP (top videos incluyen Israel). P9: Netanyahu como personaje, paradoja demográfica, timing electoral." },
    { label: "Qué investigar más", value: "1) Datos exactos de demografía ultraortodoxa vs secular. 2) Precedentes de exenciones desde 1948. 3) Impacto operacional real en el IDF. 4) Posiciones de los partidos sobre las elecciones. 5) Comparación con otros países con servicio obligatorio (Corea del Sur, Singapur)." },
    { label: "Veredicto", value: "📋 INVESTIGAR ESTA SEMANA — tema aprobado, preparar guión" }
  ],
  sources: [
    { headline: "Ultra-Orthodox protesters block roads and trains across Israel", medium: "NPR", date: "2026-06-02", url: "https://www.npr.org/2026/06/02/nx-s1-5844080/ultra-orthodox-protests-israel", desc: "Protestas masivas" },
    { headline: "Why Israel Wants to Draft the Ultra-Orthodox", medium: "CFR", date: "2026-06-04", url: "https://www.cfr.org/in-brief/why-israel-wants-draft-ultra-orthodox-military", desc: "CFR explica la crisis" },
    { headline: "Over 50,000 IDF draft orders scheduled for July", medium: "Jerusalem Post", date: "2026-06-01", url: "https://www.jpost.com/israel-news/defense-news/article-857339", desc: "50K órdenes julio" }
  ]
},

/* ═══ P4: TAIWÁN ═══ */
{
  number: "P4",
  golden: false,
  tags: [{ cls:"tag-orange", text:"🟠 INVESTIGAR" }, { cls:"tag-blue", text:"🌏 ASIA-PACÍFICO" }],
  potCls: "pot-high",
  potText: "🟠 ALTO · 85%",
  flag: "tw",
  title: "LA ISLA QUE CHINA QUIERE INVADIR ACABA DE CONVERTIRSE EN LA ECONOMÍA MÁS IMPORTANTE DEL MUNDO",
  subtitle: "Taiwán crece al 9.64% — máximo en 16 años — porque fabrica los chips que necesita la revolución IA. Cuanto más crece, más peligrosa se vuelve la amenaza china.",
  chips: [
    { cls:"chip-red", text:"🔥 INVESTIGAR ESTA SEMANA" },
    { cls:"chip-green", text:"📊 EN MESETA — dato de 29 MAY" },
    { cls:"chip-blue", text:"🎯 OPORTUNIDAD CLARA en español" },
    { cls:"chip-orange", text:"🧲 Retención FUERTE" }
  ],
  tesis: "Taiwán acaba de revisar su PIB al 9.64% — el mayor crecimiento del mundo desarrollado y el más alto en 16 años. Exportaciones +39.77%, el crecimiento más rápido en 5 décadas. Todo por la IA y TSMC. La paradoja mortal: la isla que China amenaza con invadir es cada vez más imprescindible para la economía mundial. Si China invade, destruye la cadena de suministro de IA global. Si no invade, Taiwán se hace cada vez más fuerte y más difícil de conquistar. China está atrapada en su propia paradoja. La segunda derivada: el 'escudo de silicio' no es solo defensa — es un arma económica que hace que una invasión sea más catastrófica cada trimestre que pasa.",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/TSMC_Fab_12A_01.jpg?width=1200",
  bannerAlt: "TSMC Fab12 — corazón de la revolución IA global",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_NASA_Terra_MODIS_23791.jpg?width=1200",
  fields: [
    { label: "La noticia", value: "Taiwán revisó su PIB 2026 al alza hasta +9.64% (máximo 16 años). Q1 creció +14.55% (máximo 48 años). Exportaciones +39.77% (máximo 5 décadas). Motor: TSMC, Nvidia, Apple y la demanda de chips IA. Taiwán también desarrolló navegación de drones sin GPS y robots perro militares." },
    { label: "Segunda derivada", value: "Cuanto más crece Taiwán gracias a la IA, más peligrosa e impensable se vuelve una invasión china. El 90% de los chips avanzados del mundo se fabrican en Taiwán. Una guerra destruiría la cadena de suministro de IA global — paralizando desde iPhones hasta servidores de OpenAI. Taiwán está usando su éxito económico como escudo militar de facto." },
    { label: "Gran pregunta", value: "¿Se ha vuelto Taiwán tan importante para la economía mundial que invadirla es imposible — o eso es exactamente lo que hace la invasión más tentadora?" },
    { label: "El conflicto", value: "China vs Taiwán. Dependencia tecnológica vs ambición territorial. TSMC como arma geopolítica vs TSMC como objetivo militar. EEUU (defiende a Taiwán pero quiere reducir dependencia de TSMC)." },
    { label: "Por qué ahora", value: "Dato de PIB revisado el 29 MAY. Q1 14.55% es histórico. Incursiones de la guardia costera china en aguas de Kinmen y Pratas en mayo. Fragata holandesa rastreada por la armada china en junio." },
    { label: "VP ya lo trató?", value: "SÍ parcialmente. 'Pax Silica: EEUU dependencia China' (141K views) — rendimiento BAJO. Pero el ángulo era abstracto ('dependencia'). El nuevo ángulo es concreto: 9.64% PIB, la paradoja de que el éxito económico hace la invasión más catastrófica. APROBADO por equipo como paradoja fuerte (EEUU defiende a Taiwán y le quita armas)." },
    { label: "Señal competencia", value: "Oportunidad clara. Asianometry y Economics Explained han tratado TSMC y semiconductores, pero el ángulo del 9.64% PIB como escudo militar no ha sido tratado en español. Ningún canal castellanoparlante ha conectado el crecimiento del PIB con la paradoja de la invasión. Rendimiento relativo de competencia: pendiente de comprobar." },
    { label: "Título mental", value: "La isla que China quiere invadir acaba de convertirse en la economía más importante del mundo — y eso la hace más peligrosa que nunca" },
    { label: "Velocidad de agenda", value: "EN MESETA — el dato es de 29 MAY. Pero las incursiones chinas de mayo mantienen el tema vivo. No hay urgencia extrema pero el dato es tan fuerte que no necesita ser del día." },
    { label: "Polarización y personaje", value: "MEDIA-ALTA. Xi Jinping vs Lai Ching-te. China vs la economía global. Debate sobre si la dependencia de TSMC es una fortaleza o una vulnerabilidad." },
    { label: "Retención narrativa", value: "FUERTE. Apertura: la cifra 9.64% y lo que significa. Pregunta: ¿invadirla es imposible o inevitable? Escalada: historia de TSMC, cómo se convirtió en monopolio. Giro: EEUU intenta reducir dependencia (CHIPS Act, fábricas en Arizona) pero no puede. Revelación: cada trimestre que pasa, la invasión es más cara y más catastrófica. Cierre: ¿ha ganado Taiwán la guerra sin disparar?" },
    { label: "Promesa cumplible", value: "SÍ. 9.64% PIB, 14.55% Q1, 39.77% exportaciones, 90% chips avanzados — todo son datos oficiales verificables. La paradoja es real y demostrable." },
    { label: "Ventaja VP", value: "ALTA. Requiere economía, tecnología, geopolítica, historia, mapas del estrecho de Taiwán, análisis militar. VP ya demostró que puede hacer este tipo de video (aunque Pax Silica rindió bajo — por el título, no por el tema)." },
    { label: "Motor viral", value: "P1: Nikkei, Bloomberg, Reuters, Focus Taiwan. P2: Dato reciente. P3: TSMC fábricas, mapas Taiwán, chips, drones. P4: China vs Taiwán — conflicto claro. P5: IA afecta a todos — conexión directa con audiencia. P6: Tema IA domina la conversación global. P7: Gap en español para este ángulo. P8: Pax Silica 141K (malo) pero por título abstracto, no por tema. P9: Xi como personaje, dimensión económica masiva ($trillones), tecnología militar." },
    { label: "Qué investigar más", value: "1) Porcentaje exacto de chips IA globales fabricados en Taiwán. 2) Estado de las fábricas TSMC en Arizona. 3) Capacidad militar china actual para un desembarco. 4) Impacto económico modelado de una invasión. 5) Posición exacta de EEUU post-Trump sobre defensa de Taiwán." },
    { label: "Veredicto", value: "📋 INVESTIGAR ESTA SEMANA — tema fuerte con ángulo mejor que Pax Silica, pero necesita título emocional, no abstracto" }
  ],
  sources: [
    { headline: "Taiwan raises 2026 GDP growth outlook to 16-year high on AI boom", medium: "Nikkei Asia", date: "2026-05-29", url: "https://asia.nikkei.com/economy/taiwan-raises-2026-gdp-growth-outlook-to-16-year-high-on-ai-boom", desc: "PIB máximo 16 años" },
    { headline: "Taiwan Lifts 2026 Growth Outlook to More Than 9%", medium: "Bloomberg", date: "2026-05-29", url: "https://www.bloomberg.com/news/articles/2026-05-29/taiwan-lifts-2026-growth-outlook-to-more-than-9-on-ai-hunger", desc: "Bloomberg: +9% por IA" },
    { headline: "China & Taiwan Update, June 5, 2026", medium: "AEI", date: "2026-06-05", url: "https://www.aei.org/articles/china-taiwan-update-june-5-2026/", desc: "Actualización semanal AEI" }
  ]
},

/* ═══ P5: ZAPATERO ═══ */
{
  number: "P5",
  golden: false,
  tags: [{ cls:"tag-red", text:"🔴 ATACAR HOY" }, { cls:"tag-blue", text:"🇪🇸 ESPAÑA / LATAM" }],
  potCls: "pot-high",
  potText: "🟠 MUY ALTO · 90%",
  flag: "es",
  title: "LA RED ESPAÑOLA QUE DIO OXÍGENO A MADURO: cómo un expresidente conectó oro venezolano, PDVSA y €53M de dinero público",
  subtitle: "Zapatero imputado por blanqueo. Los hermanos Amaro canalizan millones desde Venezuela a través de Panamá. Oro, petróleo y una aerolínea rescatada con dinero público.",
  chips: [
    { cls:"chip-red", text:"🔥 ATACAR HOY" },
    { cls:"chip-green", text:"📈 ACELERANDO — declaró 2 JUN" },
    { cls:"chip-blue", text:"✅ APROBADO · Deadline 10 JUN" },
    { cls:"chip-orange", text:"🧲 Retención FUERTE" }
  ],
  tesis: "La imputación de Zapatero no es un caso judicial más — es el mapa de cómo el régimen de Maduro compró influencia en Europa usando oro, petróleo y una red de empresas en Panamá. Los hermanos Amaro Chacón (familia del chavismo, cercana a Delcy Rodríguez) canalizaron millones al entorno de Zapatero. A cambio: contratos con PDVSA, proyectos mineros, comercio de oro venezolano. El vehículo: Plus Ultra, una aerolínea rescatada con €53M de dinero público español durante la pandemia. La segunda derivada: Zapatero no era un mediador neutral — era parte de la red. Y esa red sigue operando.",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Zapatero_2011.jpg?width=1200",
  bannerAlt: "José Luis Rodríguez Zapatero",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg?width=1200",
  fields: [
    { label: "La noticia", value: "Zapatero imputado por 3 cargos penales: blanqueo vinculado al rescate de Plus Ultra (€53M). Declaró como investigado el 2 JUN. Red: hermanos Amaro Chacón (Panamá, vinculados a Delcy Rodríguez). Comercio de oro venezolano y contratos PDVSA. Washington Examiner pide extradición a Trump." },
    { label: "Segunda derivada", value: "El caso revela que la mediación de Zapatero en Venezuela no era neutral: era la cobertura de una red de influencia y blanqueo. Esto tiene implicaciones para toda la diplomacia española con Venezuela y para el PSOE, que ya enfrenta los casos Koldo y Santos Cerdán." },
    { label: "Gran pregunta", value: "¿Cómo convirtió el régimen de Maduro a un expresidente europeo en pieza clave de su red de blanqueo internacional?" },
    { label: "El conflicto", value: "Zapatero vs justicia española. Maduro vs la comunidad internacional. PSOE vs escándalos en cadena. Diplomacia vs corrupción." },
    { label: "Por qué ahora", value: "Declaró 2 JUN. Próxima cita judicial 17-18 JUN. Deadline del equipo: publicar antes del 10 JUN." },
    { label: "VP ya lo trató?", value: "NO directamente. Tema APROBADO por equipo con deadline 10 JUN." },
    { label: "Señal competencia", value: "Cubierto superficialmente. Canales P2 (Wall Street Wolverine, Infovlogger, Roma Gallardo) han tratado la imputación como noticia, pero ninguno ha mapeado la RED completa: Amaro → Panamá → PDVSA → oro → Plus Ultra → €53M. Gap claro para VP. Rendimiento: un canal del sector publicó sobre Zapatero hace 5 días y lleva visitas por encima de su media, confirmando demanda en audiencia española." },
    { label: "Título mental", value: "La red española que dio oxígeno a Maduro mientras EEUU intentaba asfixiarlo: cómo un expresidente conectó oro, petróleo y €53M de dinero público" },
    { label: "Velocidad de agenda", value: "ACELERANDO — declaración 2 JUN, próxima cita 17-18 JUN, cascada de revelaciones periodísticas." },
    { label: "Polarización y personaje", value: "MÁXIMA. Zapatero (expresidente, figura polarizante). Maduro (dictador). Debate: ¿mediador o cómplice? España dividida por líneas partidistas." },
    { label: "Retención narrativa", value: "FUERTE. Apertura: €53M de dinero público para rescatar una aerolínea durante la pandemia — ¿a dónde fue realmente el dinero? Pregunta: ¿cómo se convirtió un expresidente en pieza de la red de Maduro? Escalada: los Amaro, Panamá, PDVSA, oro. Giro: Zapatero no era mediador neutral. Revelación: la red sigue operando. Cierre: ¿cuántos más están implicados?" },
    { label: "Promesa cumplible", value: "SÍ. Imputación real, €53M documentados, hermanos Amaro identificados, PDVSA y oro confirmados por investigación judicial. Todo verificable." },
    { label: "Ventaja VP", value: "ALTA. Requiere mapear la red completa (España-Panamá-Venezuela), documentos judiciales, historia de Plus Ultra, contexto Venezuela, política española. Solo VP puede hacer este mapa con profundidad." },
    { label: "Motor viral", value: "P1: Olive Press, Newsroom Panama, Washington Examiner. P2: En desarrollo activo. P3: Zapatero, Maduro, aviones, oro. P4: Corrupción transatlántica. P5: ALTÍSIMO para audiencia española y venezolana. P6: Domina debate en España. P7: Cubierto superficialmente, gap para profundidad. P8: VP no lo ha tratado, pero España + corrupción + Venezuela = alta demanda. P9: Zapatero como personaje fuerte, €53M como cifra, oro como elemento visual." },
    { label: "Qué investigar más", value: "1) Documentos judiciales completos. 2) Estructura exacta de empresas de los Amaro en Panamá. 3) Volumen de oro comerciado. 4) Conexión con caso Koldo y Santos Cerdán. 5) Posición del gobierno Sánchez." },
    { label: "Veredicto", value: "⚡ ATACAR HOY — deadline equipo 10 JUN" }
  ],
  sources: [
    { headline: "Venezuela: Payments Investigated in Zapatero Case and Amaro Brothers", medium: "Newsroom Panama", date: "2026-06-05", url: "https://newsroompanama.com/2026/06/05/venezuela-payments-being-investigated-by-the-spanish-justice-system-in-the-rodriguez-zapatero-case-and-the-amaro-brothers-of-panama/", desc: "Pagos venezolanos investigados" },
    { headline: "Spain's Zapatero Plus Ultra scandal exposes Venezuela links", medium: "Olive Press", date: "2026-05-20", url: "https://www.theolivepress.es/spain-news/2026/05/20/spains-zapatero-plus-ultra-corruption-scandal-exposes-venezuela-links/", desc: "Vínculos Venezuela expuestos" },
    { headline: "Spain's Zapatero exposed as Maduro's fixer", medium: "Washington Examiner", date: "2026-06-02", url: "https://www.washingtonexaminer.com/op-eds/4579365/spain-zapatero-exposed-maduro-fixer-trump-must-extradite/", desc: "Zapatero como fixer de Maduro" }
  ]
},

/* ═══ P6: COLOMBIA ═══ */
{
  number: "P6",
  golden: false,
  tags: [{ cls:"tag-orange", text:"🟠 INVESTIGAR" }, { cls:"tag-blue", text:"🌎 LATAM" }],
  potCls: "pot-medium",
  potText: "🟡 MEDIO · 80%",
  flag: "co",
  title: "EL TRUMP COLOMBIANO: cómo un abogado mediático sin experiencia puede ganar la presidencia y qué dice del patrón continental",
  subtitle: "De la Espriella lidera encuestas. Endorso de Trump. Patrón: Bukele → Milei → Noboa → ¿Espriella? La derecha outsider conquista América Latina.",
  chips: [
    { cls:"chip-orange", text:"📋 INVESTIGAR ESTA SEMANA" },
    { cls:"chip-green", text:"📊 EN MESETA — 2ª vuelta 21 JUN" },
    { cls:"chip-blue", text:"✅ APROBADO · Deadline 14 JUN" },
    { cls:"chip-orange", text:"🧲 Retención MEDIA-ALTA" }
  ],
  tesis: "De la Espriella no es un fenómeno colombiano aislado — es la pieza que confirma un patrón continental. Bukele (El Salvador), Milei (Argentina), Noboa (Ecuador), y ahora potencialmente Espriella (Colombia): la derecha outsider, anti-establishment, con endorso de Trump, está conquistando América Latina. La segunda derivada: no es que la derecha gane — es que el centro-izquierda latinoamericano ha perdido la capacidad de ganar elecciones. ¿Por qué?",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Coat_of_arms_of_Colombia.svg?width=1200",
  bannerAlt: "Escudo de Colombia",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Colombia_relief_location_map.jpg?width=1200",
  fields: [
    { label: "La noticia", value: "Encuesta 4 JUN: De la Espriella 46.7% vs Cepeda 41.9%. Endorso de Trump. Segunda vuelta 21 JUN. Abogado mediático sin experiencia política previa." },
    { label: "Segunda derivada", value: "El patrón continental: outsiders de derecha dura con discurso anti-crimen y anti-establishment ganan en toda la región. No es ideología — es un formato electoral nuevo que funciona: personaje mediático + redes sociales + mano dura + anti-política tradicional." },
    { label: "Gran pregunta", value: "¿Por qué la izquierda latinoamericana ha perdido la capacidad de ganar elecciones en toda la región?" },
    { label: "El conflicto", value: "Espriella vs Cepeda (derecha outsider vs izquierda heredera de Petro). Patrón continental: la 'nueva derecha' vs la izquierda del siglo XXI." },
    { label: "Por qué ahora", value: "Segunda vuelta 21 JUN. Deadline equipo: publicar antes 14 JUN." },
    { label: "VP ya lo trató?", value: "SÍ parcialmente. VP publicó sobre grupos armados/elecciones Colombia (265K views). Tema APROBADO con deadline 14 JUN." },
    { label: "Señal competencia", value: "Cubierto superficialmente. Canales del sector han tratado los resultados de primera vuelta como noticia. Ninguno ha desarrollado el patrón continental (Bukele-Milei-Noboa-Espriella) como tesis. Rendimiento relativo: canales castellanoparlantes que publicaron sobre Colombia están rindiendo en línea con su media, no por encima. Demanda moderada." },
    { label: "Título mental", value: "El patrón que está cambiando América Latina: por qué un abogado mediático puede ser el próximo presidente de Colombia" },
    { label: "Velocidad de agenda", value: "EN MESETA — la noticia es de primera vuelta (1 JUN). La segunda vuelta es el 21 JUN. Hay tiempo pero no urgencia extrema." },
    { label: "Polarización y personaje", value: "ALTA. Espriella (outsider, mediático, polémico) vs Cepeda (heredero de Petro). Trump como endorso. Debate izquierda vs derecha en toda la región." },
    { label: "Retención narrativa", value: "MEDIA-ALTA. El patrón continental da estructura. Pero el video necesita no ser solo una lista de elecciones ganadas — necesita explicar el MECANISMO (por qué funciona este formato). Riesgo: si solo describe el patrón sin explicar el porqué, se queda plano." },
    { label: "Promesa cumplible", value: "SÍ. El patrón es verificable: Bukele, Milei, Noboa, Espriella — todos ganaron/lideran con el mismo perfil. Las encuestas son datos duros." },
    { label: "Ventaja VP", value: "MEDIA-ALTA. VP tiene ventaja en análisis comparativo continental. Pero otros canales también pueden hacer esto — no es tan difícil de copiar como el tema de Taiwán o Armenia." },
    { label: "Motor viral", value: "P1: CNN Español, Infobae, Al Jazeera. P2: Vigente. P3: Líderes, mapas Latam, elecciones. P4: Izquierda vs derecha — máximo. P5: ALTÍSIMO para audiencia hispana. P6: Domina debate Latam. P7: En línea con media. P8: Colombia VP 265K (aceptable). P9: Espriella, Trump, Milei, Bukele como personajes." },
    { label: "Qué investigar más", value: "1) Perfil detallado de Espriella. 2) Comparación programática Bukele-Milei-Espriella. 3) Resultados económicos de Milei/Bukele como predictor. 4) Posición de EEUU en Colombia post-Petro. 5) Impacto en las FARC y el proceso de paz." },
    { label: "Veredicto", value: "📋 INVESTIGAR ESTA SEMANA — deadline 14 JUN" }
  ],
  sources: [
    { headline: "Nueva encuesta: De la Espriella ganador de segunda vuelta", medium: "Infobae", date: "2026-06-04", url: "https://www.infobae.com/colombia/2026/06/04/nueva-encuesta-ubica-a-abelardo-de-la-espriella-como-el-ganador-de-la-segunda-vuelta-ivan-cepeda-perderia-por-pocos-votos/", desc: "Encuesta segunda vuelta" },
    { headline: "Colombia va a segunda vuelta", medium: "CNN Español", date: "2026-06-01", url: "https://cnnespanol.cnn.com/2026/06/01/colombia/reacciones-segunda-vuelta-espriella-cepeda-orix", desc: "Resultados primera vuelta" },
    { headline: "Celebration, shock and scepticism in Colombia", medium: "Al Jazeera", date: "2026-06-02", url: "https://www.aljazeera.com/news/2026/6/2/celebration-shock-and-scepticism-follow-colombias-presidential-election", desc: "Reacciones electorales" }
  ]
},

/* ═══ P7: ORMUZ PEAJE EN YUANES ═══ */
{
  number: "P7",
  golden: false,
  tags: [{ cls:"tag-orange", text:"🟠 INVESTIGAR" }, { cls:"tag-blue", text:"🌍 ORIENTE MEDIO" }],
  potCls: "pot-medium",
  potText: "🟡 MEDIO · 78%",
  flag: "ir",
  title: "IRÁN COBRA $2M POR BARCO EN ORMUZ Y ACEPTA SOLO YUANES Y CRIPTO: el triple desafío al dólar, al derecho marítimo y a la OTAN",
  subtitle: "Irán creó un peaje ilegal sobre el 20% del petróleo mundial. Los pagos son en yuanes chinos y stablecoins. UNCLOS lo prohíbe. Nadie lo detiene.",
  chips: [
    { cls:"chip-orange", text:"📋 INVESTIGAR ESTA SEMANA" },
    { cls:"chip-green", text:"📊 EN MESETA" },
    { cls:"chip-blue", text:"🎯 CUBIERTO SUPERFICIALMENTE" },
    { cls:"chip-orange", text:"🧲 Retención MEDIA" }
  ],
  tesis: "Irán ha creado un peaje de facto sobre el 20% del petróleo mundial y cobra en yuanes y criptomonedas. Es un triple desafío simultáneo: al derecho marítimo (UNCLOS prohíbe peajes en estrechos internacionales), al sistema del dólar (pagos en yuanes y stablecoins), y al orden de seguridad (OTAN y EEUU no pueden o no quieren impedirlo militarmente). La segunda derivada: si Irán puede cobrar por Ormuz impunemente, ¿qué impide que Turquía cobre por el Bósforo, Egipto suba los peajes de Suez, o China bloquee el Mar del Sur? El precedente es más peligroso que el peaje en sí.",
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=1200",
  bannerAlt: "Estrecho de Ormuz — la arteria del petróleo mundial",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_Gulf_map.png?width=1200",
  fields: [
    { label: "La noticia", value: "Irán cobra hasta $2M por barco y $1/barril de crudo por cruzar Ormuz. Pagos en yuanes y stablecoins. Creó una 'autoridad de tránsito' en mayo. Lo llama 'tarifas de servicio'. UNCLOS Art. 26 lo prohíbe explícitamente. EEUU, Europa y estados del Golfo rechazan la legalidad." },
    { label: "Segunda derivada", value: "El precedente es más peligroso que el peaje: si un país puede cobrar por un estrecho internacional impunemente, el sistema de libre navegación se derrumba. Turquía con el Bósforo, Egipto con Suez, China con el Mar del Sur — todos podrían replicar el modelo. Y el uso de yuanes/crypto es un test de desdolarización en tiempo real." },
    { label: "Gran pregunta", value: "¿Es Ormuz el primer paso hacia un mundo donde cada país cobra por dejar pasar barcos — y donde el dólar ya no es la moneda del comercio marítimo?" },
    { label: "El conflicto", value: "Irán vs derecho marítimo internacional. Yuanes vs dólares. UNCLOS vs realidad militar. Ormuz como precedente vs libre navegación global." },
    { label: "Por qué ahora", value: "Irán formalizó la autoridad de tránsito en mayo. Declaraciones del 5 JUN confirmando que buscan 'tarifas de servicio'. OPEC+ se reúne mañana 7 JUN." },
    { label: "VP ya lo trató?", value: "PRECAUCIÓN: 'Ormuz estrecho fantasma' fue DESCARTADO DOS VECES por genérico. Este ángulo (yuanes + crypto + precedente legal) es radicalmente diferente. No es 'qué pasa en Ormuz' sino 'qué precedente crea Irán para todo el comercio marítimo mundial'." },
    { label: "Señal competencia", value: "Cubierto superficialmente. La competencia ha tratado Ormuz como noticia de guerra (cierre, bloqueo). Ningún canal castellanoparlante ha desarrollado el ángulo del peaje en yuanes/crypto como precedente para la desdolarización y el derrumbe del sistema de libre navegación. Competencia pendiente de comprobar en rendimiento relativo del ángulo específico." },
    { label: "Título mental", value: "Irán cobra $2 millones por barco en Ormuz y acepta solo yuanes: así empieza el fin de la libre navegación mundial" },
    { label: "Velocidad de agenda", value: "EN MESETA — el peaje lleva meses pero la formalización fue en mayo y las declaraciones son del 5 JUN." },
    { label: "Polarización y personaje", value: "MEDIA. Irán como actor desafiante. El debate desdolarización genera interés. Pero no hay un personaje individual fuerte más allá del 'régimen iraní'." },
    { label: "Retención narrativa", value: "MEDIA. Apertura fuerte (un barco paga $2M en yuanes para cruzar Ormuz). Pregunta interesante (¿precedente?). Pero la escalada y el giro son más difíciles — el tema es más analítico que narrativo. Riesgo de ser tipo 'Pax Silica' (interesante pero frío)." },
    { label: "Promesa cumplible", value: "SÍ. $2M por barco (Argus Media), yuanes y crypto (Bloomberg), UNCLOS Art. 26 (The National), autoridad de tránsito (Euronews). Todo verificable." },
    { label: "Ventaja VP", value: "ALTA. Requiere derecho marítimo internacional, economía (desdolarización), mapas de estrechos globales, comparación histórica (Suez, Bósforo, Malaca). Muy difícil de hacer superficialmente." },
    { label: "Motor viral", value: "P1: Bloomberg, Euronews, Argus Media, Middle East Monitor. P2: Vigente. P3: Mapas de estrechos, barcos, yuanes, crypto. P4: Irán vs orden internacional. P5: Afecta a precios de petróleo y energía — conexión directa. P6: Debate desdolarización crece. P7: Ormuz como noticia = saturado. Ormuz como precedente legal/monetario = gap. P8: Ormuz fue descartado 2 veces — riesgo. P9: Dimensión económica enorme ($2M/barco × miles de barcos)." },
    { label: "Qué investigar más", value: "1) Cuántos barcos pagan realmente. 2) Volumen total de ingresos de Irán por el peaje. 3) Reacción de las aseguradoras marítimas. 4) Precedentes históricos de peajes en estrechos. 5) Análisis legal UNCLOS detallado." },
    { label: "Veredicto", value: "📋 INVESTIGAR ESTA SEMANA — el ángulo es fuerte pero el riesgo de 'tema frío' es real. Necesita título muy emocional y narrativo." }
  ],
  sources: [
    { headline: "Iran Charges Ships Hormuz Transit Fees for Safe Passage", medium: "Bloomberg", date: "2026-03-24", url: "https://www.bloomberg.com/news/articles/2026-03-24/iran-charges-some-ships-hormuz-transit-fees-for-safe-passage", desc: "Bloomberg revela cobros" },
    { headline: "Iran seeks service fees for crossing Strait of Hormuz", medium: "Middle East Monitor", date: "2026-06-05", url: "https://www.middleeastmonitor.com/20260605-iran-seeks-to-collect-service-fees-not-tolls-for-crossing-strait-of-hormuz/", desc: "Irán busca 'tarifas de servicio'" },
    { headline: "Iran demands transit fees in yuan, stablecoins", medium: "The Standard", date: "2026-04-01", url: "https://www.thestandard.com.hk/world/article/328445/Iran-demands-transit-fees-in-yuan-stablecoins-for-Strait-of-Hormuz-passage", desc: "Pagos en yuanes y crypto" }
  ]
}

],

/* ── RANKING ─────────────────────────────────────────────── */
ranking: [
  { tema:"Mundial 2026: Irán desde Tijuana", subtema:"Geopolítica deportiva · Arranca 11 JUN", viral:97, depth:93, timing:99, fit:95, verdCls:"verd-gold", verdText:"⭐ ATACAR HOY" },
  { tema:"Armenia: $50M para mover votantes", subtema:"Rusia interfiere elecciones · Vota 7 JUN", viral:88, depth:90, timing:97, fit:91, verdCls:"verd-gold", verdText:"⭐ ATACAR HOY" },
  { tema:"Israel: ultraortodoxos vs IDF", subtema:"80.000 se niegan a servir · Coalición al borde", viral:90, depth:88, timing:85, fit:92, verdCls:"verd-y", verdText:"✅ INVESTIGAR" },
  { tema:"Zapatero: red Venezuela €53M", subtema:"Imputado 3 cargos · Deadline 10 JUN", viral:85, depth:92, timing:90, fit:88, verdCls:"verd-gold", verdText:"⭐ ATACAR HOY" },
  { tema:"Taiwán: PIB +9.64% por IA", subtema:"Paradoja: más rica + más amenazada", viral:85, depth:87, timing:80, fit:88, verdCls:"verd-y", verdText:"✅ INVESTIGAR" },
  { tema:"Colombia: De la Espriella 46.7%", subtema:"Patrón continental derecha · 2ª vuelta 21 JUN", viral:82, depth:85, timing:82, fit:83, verdCls:"verd-y", verdText:"✅ INVESTIGAR" },
  { tema:"Ormuz: peaje $2M en yuanes", subtema:"Desdolarización + precedente marítimo", viral:80, depth:82, timing:75, fit:80, verdCls:"verd-y", verdText:"✅ INVESTIGAR" }
],

/* ── VIGILAR ─────────────────────────────────────────────── */
vigilar: [
  { title: "🇵🇪 Perú: Fujimori 4º intento — vota domingo", body: "Keiko Fujimori empata con Sánchez (43.2% vs 43.8%). Si gana, sería el retorno de la dinastía más polémica de Sudamérica. Si el resultado es disputado, se activa como propuesta. El ángulo VP: la familia que no muere y lo que dice sobre la democracia peruana.", trigger: "Resultado domingo 7 JUN. Si disputado o si Keiko gana, se activa como propuesta.", sourceText: "Britannica, AS/COA, PBS", sourceUrl: "https://www.as-coa.org/articles/latin-america-advisor/peru-2026-election" },
  { title: "🛢️ OPEC+ sin EAU — reunión mañana 7 JUN", body: "EAU se fue de la OPEC el 1 de mayo. Primera vez que OPEC cae por debajo del 30% del mercado. La reunión de mañana puede producir una decisión sorpresa de producción. Si Arabia Saudí reacciona agresivamente a la salida de EAU, hay video sobre el fin del cartel.", trigger: "Si hay decisión sorpresa de producción o reacción saudí a la salida de EAU.", sourceText: "CNBC: OPEC+ meeting preview", sourceUrl: "https://www.cnbc.com/2026/06/06/opec-meeting-oil-output-decision.html" },
  { title: "🇲🇱 Rusia pierde el Sahel — Africa Corps fracasa", body: "El helicóptero del Africa Corps derribado en Kidal confirma que Rusia está perdiendo Mali. Si hay más derrotas o si otro país africano expulsa a Rusia, se activa. Necesita conexión con tema más amplio (¿el fin de la influencia rusa en África?).", trigger: "Si hay más derrotas militares o si otro país africano expulsa a Rusia.", sourceText: "ACLED, Carnegie, Stimson Center", sourceUrl: "https://www.stimson.org/2026/africa-corps-russia-sahel-crisis/" },
  { title: "🇪🇺 OTAN 5% del PIB — Europa gasta pero no fabrica", body: "Cumbre OTAN 18 JUN. Europa supera a EEUU en gasto pero sigue sin capacidad industrial para fabricar munición. El tema ya está aprobado por el equipo con enfoque diferente. Monitorizar si EEUU anuncia retirada concreta de tropas.", trigger: "Cumbre OTAN 18 JUN. Si EEUU anuncia retirada concreta o Europa reconoce incapacidad industrial.", sourceText: "NATO official, SIPRI", sourceUrl: "https://www.sipri.org/media/press-release/2026/world-military-expenditure-reaches-new-record-high" },
  { title: "🇮🇷 Irán-EEUU: resolución o escalada total", body: "Irán exige $24.000M en activos congelados para sentarse a negociar. EEUU rechaza. Deadlock. PRECAUCIÓN: fatiga de audiencia Irán — solo vale si hay un giro radical (acuerdo firmado o escalada mayor).", trigger: "Si se rompe el deadlock de los $24B, se firma acuerdo, o hay escalada tipo 2ª oleada de ataques.", sourceText: "CBS, CNN, Al Jazeera", sourceUrl: "https://www.aljazeera.com/news/2026/6/5/iran-us-nuclear-talks" },
  { title: "🇺🇦 Trump: Ucrania 'cerca de resolverse'", body: "Trump dice que está 'muy cerca' de resolver Ucrania. Rusia pierde 30.000 efectivos al mes pero avanza en Donetsk. 224 combates diarios. Solo vale como propuesta si hay anuncio concreto de negociaciones directas, no especulación.", trigger: "Si hay anuncio concreto de negociaciones directas Rusia-Ucrania o de plan de paz con fecha.", sourceText: "Al Jazeera, Russia Matters (Harvard)", sourceUrl: "https://www.russiamatters.org/analysis/ukraine-peace-prospects-2026" }
],

/* ── VERIFICACIÓN EDITORIAL ─────────────────────────────── */
editorial_verification: {
  fuentes_consultadas: "WSJ (bloqueado, consultado indirectamente), FT (bloqueado), Bloomberg, Reuters, NYT (bloqueado), Al Jazeera, CNN, BBC (bloqueado), NPR, CFR, Foreign Policy, Carnegie, SIPRI, Nikkei Asia, Infobae, El Tiempo, PBS, Euronews, Democracy Now, Hollywood Reporter, Washington Examiner, Olive Press, Newsroom Panama, Jerusalem Post, Times of Israel, Kyiv Post, Eurasianet, Defence24, AEI, Focus Taiwan, ACLED, Stimson Center, Gulf News, CNBC, Britannica, AS/COA — 40+ fuentes consultadas",
  historial_vp: "SÍ — verificados últimos 10 videos con views reales del PROPOSAL_TRACKER (actualizado 4 JUN). Pendiente verificar publicaciones 3-6 JUN.",
  competencia_revisada: "SÍ — revisados canales P1 (Solo Fonseca, Memorias de Pez, Hipótesis de Poder, Cosas Militares). Búsquedas realizadas pero estadísticas de videos individuales de junio 2026 no accesibles directamente. Señales basadas en cobertura detectada y ausencia de cobertura verificable.",
  viralidad_verificada: "SÍ — 9 parámetros aplicados a cada propuesta. Motor viral con mecanismo explicado. No se afirmó viralidad sin evidencia. Hipótesis marcadas como tales.",
  imagenes_validadas: "SÍ — 39/39 URLs validadas OK con validate_images.js. 0 fallidas.",
  temas_descartados: "Irán genérico (saturado, descartado 5 veces previas). Ucrania genérico (sin ángulo diferencial). Sudan/humanitario (sin geopolítica VP). EEUU política interna (Pulte, Pratt — descartados en radares previos).",
  capas_aplicadas: "8 capas Estrategia Tema de Millón v7.0 aplicadas a las 7 propuestas. Matriz 1M incluida en propuestas con veredicto ATACAR HOY. Campos obligatorios: título mental, velocidad de agenda, polarización/personaje, retención narrativa, promesa cumplible, ventaja VP, veredicto."
}

};
