/* ═══════════════════════════════════════════════════════════════
   RADAR EDITORIAL VP · 8 JULIO 2026 · v8.3
   Dashboard de inteligencia editorial — VisualPolitik
   SIN NOTICIAS — Solo propuestas profundas estilo temas aceptados
   8 propuestas (5 competencia + 3 ventana de oportunidad)
═══════════════════════════════════════════════════════════════ */
window.RADAR_DATA = {

/* ── META ─────────────────────────────────────────────────── */
meta: {
  date: "2026-07-08",
  dateLabel: "8 JULIO 2026",
  brisbane: "BAJO DEMANDA",
  brent: "$76.04",
  brentChange: "↕ HOY cumbre OTAN Ankara + reunión Trump-Zelensky · Ormuz: buque LNG catarí atacado (7 JUL) · EEUU revoca licencia petróleo Irán · Sucesor de Jameneí sigue sin aparecer"
},

/* ═══ TICKER ═══ */
ticker: [
  { cls:"t-red",    text:"🇹🇷 OTAN ANKARA HOY: <strong>Trump y Zelensky se reúnen 14:30h (8 JUL)</strong> · Trump: 'EEUU gasta más que nadie sin recibir nada' · EEUU prepara repliegue de Europa · Zelensky pide más Patriots" },
  { cls:"t-red",    text:"🛢️ ORMUZ: <strong>Buque LNG catarí Al-Rekayyat atacado por Irán (7 JUL)</strong> · Mayor día de ataques desde el alto el fuego · EEUU responde con ataques a decenas de objetivos iraníes · Brent +5.6% a $76" },
  { cls:"t-red",    text:"🇮🇷 IRÁN: <strong>Sucesor Mojtaba Jameneí NO aparece</strong> en el funeral de su padre (4-9 JUL) · 'Herido y desfigurado' en el ataque de febrero · Tres hijos de Jameneí sí aparecen · Vacío de poder" },
  { cls:"t-orange", text:"🇺🇦 UCRANIA: <strong>Rusia lanza uno de los ataques más letales sobre Kyiv</strong> (6 JUL) · 22+ muertos · Justo antes de la cumbre OTAN · Fallos en defensa aérea expuestos" },
  { cls:"t-red",    text:"🇺🇸 EEUU-IRÁN: <strong>Washington revoca licencia de venta de petróleo iraní</strong> · Alto el fuego interino en riesgo · Negociación de paz permanente tambaleante" },
  { cls:"t-orange", text:"🇮🇳 INDIA-PAKISTÁN: India amenaza con cortar '<strong>cada gota</strong>' de agua del Indo · Tribunal internacional lo declara ilegal · India ignora el fallo · 90% cosechas de Pakistán en riesgo" },
  { cls:"t-gold",   text:"⚖️ SCOTUS vs TRUMP: <strong>Tribunal Supremo tumba aranceles IEEPA (6-3)</strong> · $170.000M recaudados podrían devolverse · Batalla constitucional por el poder comercial" },
  { cls:"t-orange", text:"🇪🇹 ETIOPÍA-ERITREA: Tropas concentradas en la frontera · Etiopía: '<strong>no seremos un país sin litoral</strong>' · 600.000 muertos en la última guerra · Crisis Group alerta" },
  { cls:"t-red",    text:"🇰🇷 COREA SUR: Protestas continúan tras escasez de papeletas · Presidente de la Comisión Electoral dimitió · <strong>3 presidentes en un año</strong> · Aliado clave de EEUU inestable" }
],

/* ═══ HERO ═══ */
hero: [
  {
    label: "⚡ Tema dorado del día",
    content: "<span class='hl'>EL LÍDER FANTASMA: ¿QUIÉN GOBIERNA IRÁN CUANDO NADIE HA VISTO AL LÍDER SUPREMO?</span> — El funeral de Alí Jameneí termina esta semana (4-9 JUL) y su sucesor designado, Mojtaba, no ha aparecido en público ni una sola vez. Hegseth dijo que fue 'herido y desfigurado' en el ataque de febrero. <span class='hl-red'>Un régimen teocrático con un líder invisible: quién manda realmente en Irán — la Guardia Revolucionaria toma el control.</span> Time, CNN, CNBC, WaPo."
  },
  {
    label: "🎯 Máxima actualidad HOY",
    content: "<span class='hl'>CUMBRE OTAN ANKARA + ORMUZ EN LLAMAS:</span> Hoy 8 JUL Trump y Zelensky se reúnen mientras EEUU prepara a Europa para defenderse sola. Ayer Irán atacó un buque LNG catarí en Ormuz — el mayor día de ataques desde el alto el fuego — y EEUU respondió golpeando decenas de objetivos iraníes. <span class='hl-red'>El alto el fuego se tambalea y el Brent sube un 5.6%.</span> ¿Vuelve la guerra?"
  },
  {
    label: "📊 Señales de competencia esta semana",
    content: "OTAN/Trump <span class='hl-red'>trending masivo en el nicho hispano</span> ('Todo es Geopolítica' y otros con picos) · Irán post-Jameneí <span class='hl-red'>agenda premium dominante</span> · Ormuz escalada <span class='hl-red'>petróleo reactiva prima de riesgo</span> · India-Pakistán agua <span class='hl-red'>hueco en español</span> · Corea del Sur <span class='hl-red'>gap total</span>"
  }
],

/* ════════════════════════════════════════════════════════════
   NOTICIAS — ELIMINADAS POR DECISIÓN EDITORIAL
   La actualidad se integra DENTRO de cada propuesta
════════════════════════════════════════════════════════════ */
news: [],

/* ════════════════════════════════════════════════════════════
   PROPUESTAS — 8 TEMAS (5 COMPETENCIA + 3 VENTANA)
════════════════════════════════════════════════════════════ */
proposals: [

/* ═══ P1 — TEMA DORADO ⭐ COMPETENCIA — IRÁN LÍDER FANTASMA ═══ */
{
  number: "P1",
  golden: true,
  title: "El líder fantasma: quién gobierna Irán cuando el nuevo Líder Supremo lleva 4 meses sin aparecer",
  tags: [
    { cls:"tag-gold", text:"⭐ TEMA DORADO" },
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-gold",
  potText: "⭐⭐⭐ POTENCIAL MÁXIMO",
  flag: "IR",
  chips: [
    { cls:"chip-green", text:"COMP: Agenda dominante" },
    { cls:"chip-green", text:"VEL: Ventana óptima" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Khamenei_2024_(3x4_cropped).jpg?width=1200",
  bannerAlt: "Imagen del régimen iraní — el vacío de poder tras la muerte de Alí Jameneí",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Tehran_Skyline.jpg?width=1200",
  tesis: "Alí Jameneí murió el 28 de febrero de 2026 en un ataque conjunto EEUU-Israel. La Asamblea de Expertos designó a su hijo Mojtaba como sucesor el 8 de marzo. Pero hay un problema: Mojtaba fue 'herido y desfigurado' en el mismo ataque que mató a su padre, según el propio secretario de Defensa de EEUU. Y desde su designación, el nuevo Líder Supremo de Irán NO ha aparecido en público ni una sola vez. Durante el funeral de esta semana (4-9 julio), aparecieron tres hijos de Jameneí — pero no el sucesor. Un régimen teocrático se construye alrededor de la figura del Líder Supremo, la autoridad última sobre el ejército, la judicatura y la política exterior. ¿Qué pasa cuando esa figura es invisible? La respuesta es la pregunta más importante de Oriente Medio: si no manda el Líder Supremo, ¿quién manda? Y la respuesta apunta a la Guardia Revolucionaria.",
  fields: [
    { label:"La noticia", val:"El funeral de Alí Jameneí se celebra del 4 al 9 de julio (Teherán, Qom, Náyaf, Karbala, entierro en Mashhad). Su sucesor designado, Mojtaba Jameneí, NO ha aparecido en el funeral (CNBC, 5 JUL). Aparecieron tres hijos del líder fallecido, pero no el sucesor. Time (5 JUL): 'El funeral busca proyectar fuerza, pero el nuevo líder aún no ha aparecido'. Hegseth (marzo): Mojtaba fue 'herido y probablemente desfigurado' en el ataque. Reuters (abril): se recupera de heridas faciales y en la pierna." },
    { label:"Segunda derivada", val:"Irán no tiene un problema de sucesión — tiene un problema de vacío de poder. El sistema iraní (velayat-e faqih) concentra la autoridad última en el Líder Supremo: controla las Fuerzas Armadas, la Guardia Revolucionaria, la judicatura, los medios estatales y la política exterior. Si el Líder Supremo es invisible — herido, desfigurado, incapaz de gobernar — el poder no desaparece: se desplaza. ¿Hacia dónde? Hacia el Cuerpo de la Guardia Revolucionaria Islámica (IRGC), que ya controla el programa de misiles, la economía paralela y las milicias regionales. La guerra de febrero pudo haber logrado sin querer lo que décadas de sanciones no consiguieron: descabezar la teocracia y entregar el país de facto a los militares. Irán puede estar convirtiéndose en una dictadura militar con fachada clerical — y nadie lo está contando." },
    { label:"Gran pregunta", val:"Si el nuevo Líder Supremo de Irán está desfigurado y no puede gobernar, ¿quién controla realmente el segundo mayor arsenal de misiles de Oriente Medio — y qué significa que la Guardia Revolucionaria herede el poder?" },
    { label:"Señal de competencia", val:"AGENDA DOMINANTE. Irán post-Jameneí domina la cobertura premium esta semana por el funeral. Los canales del nicho hispano cubren la muerte y la escalada de Ormuz, pero la mayoría lo trata como 'noticia de guerra' (ataques, petróleo). NADIE está contando la ESTRUCTURA DE PODER: el líder invisible, el vacío, el ascenso del IRGC. Este es exactamente el patrón de tema aceptado por los editores (estructura de poder de un régimen, estilo del análisis de poder en Rusia). Hueco claro para el ángulo profundo." },
    { label:"Demanda en medios", val:"MÁXIMA. Time: 'Khamenei's Funeral Is Meant to Project Strength. But Iran's New Leader Has Yet to Appear' (5 JUL). CNN: cobertura en vivo del funeral (4-5 JUL). CNBC: 'Successor to Iran's slain leader does not appear at funeral' (5 JUL). Washington Post: 'After Khamenei's death, Iran faces uncertain path to new supreme leader'. CGTN: 'funeral tests Iran's standing'. Wikipedia documenta el funeral de Estado y la designación de Mojtaba." },
    { label:"Velocidad de agenda", val:"VENTANA ÓPTIMA. El funeral termina el 9 de julio. La pregunta '¿dónde está el nuevo líder?' está en su punto máximo AHORA. Publicar esta semana es óptimo: el tema tiene el gancho de actualidad (funeral) y la profundidad estructural (vacío de poder) simultáneamente." },
    { label:"Historial VP", val:"VP cubrió 'Irán escoge venganza: nuevo líder supremo' (174K — FALLÓ por ser análisis de liderazgo sin evento concreto) y 'EEUU PIERDE MÁS de lo que parece en IRÁN' (15 JUN, 190K). ADVERTENCIA: el tema del líder supremo abstracto ya falló una vez. La DIFERENCIA ahora: hay un EVENTO CONCRETO (el funeral, la ausencia física del sucesor) y una TESIS FUERTE (el IRGC hereda el poder). No es 'quién será el líder' sino 'el líder no existe y los militares mandan'. Ese giro concreto es lo que faltó en el video de 174K." },
    { label:"Motor viral", val:"MISTERIO (un líder que nadie ha visto) + PODER (quién manda realmente en una potencia nuclear-umbral) + GUERRA (conexión con Ormuz y la escalada actual) + PERSONAJE (la dinastía Jameneí, la Guardia Revolucionaria) + PARADOJA (la guerra descabezó la teocracia y la entregó a los militares) + CONSECUENCIA GLOBAL (quién controla los misiles iraníes)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Irán tiene un nuevo Líder Supremo. El problema: nadie lo ha visto. Está herido, desfigurado, y no apareció ni en el funeral de su propio padre.' Contexto: qué es el velayat-e faqih, por qué el Líder Supremo lo es todo. Escalada: la designación de Mojtaba, las heridas, la ausencia. Giro: si el líder no gobierna, el poder se va al IRGC. Revelación: la guerra pudo convertir a Irán en una dictadura militar con fachada clerical. Cierre: ¿quién tiene el dedo sobre los misiles iraníes?" },
    { label:"Promesa cumplible", val:"'Quién gobierna Irán cuando el Líder Supremo es invisible' — demostrable con la cronología del funeral, las declaraciones de Hegseth y Reuters sobre las heridas, y el análisis del ascenso del IRGC. No es especulación: es la pregunta que se hacen los propios analistas premium." },
    { label:"Ventaja VP", val:"ALTA. VP domina el análisis de estructuras de poder (quién manda de verdad). Puede combinar la historia del régimen iraní, el organigrama del poder (Líder Supremo, IRGC, Asamblea de Expertos), y la actualidad del funeral. La competencia hace 'noticia de guerra' — VP puede hacer 'anatomía de un vacío de poder'. Patrón de tema aceptado por los editores." },
    { label:"Caso para 800K/1M", val:"Señal de audiencia MÁXIMA: Irán domina la agenda premium por el funeral y la escalada de Ormuz. Señal de competencia: el nicho lo trata como noticia de guerra, hueco total para el ángulo de estructura de poder. Lo que lo hace diferente: no es 'otro video de la guerra de Irán' sino 'el régimen tiene un líder fantasma y los militares mandan'. Promesa narrativa: el misterio del líder invisible + la anatomía del poder real. Riesgo: Irán está saturado para la audiencia VP — hay que vender ESTRUCTURA DE PODER y MISTERIO, no 'guerra'. VP necesita: abrir con el misterio (nadie ha visto al líder), no con los misiles." },
    { label:"Título mental", val:"Irán tiene un nuevo Líder Supremo al que nadie ha visto — está desfigurado, no apareció ni en el funeral de su padre, y mientras tanto los generales se reparten el país" },
    { label:"Qué investigar más", val:"1) Time y CNBC sobre la ausencia de Mojtaba en el funeral. 2) Declaraciones de Hegseth (marzo) y Reuters (abril) sobre las heridas. 3) Estructura del velayat-e faqih: qué controla exactamente el Líder Supremo. 4) Ascenso del IRGC: qué controla ya y qué heredaría. 5) Papel de la Asamblea de Expertos en la designación. 6) Precedentes: qué pasó tras la muerte de Jomeini en 1989." },
    { label:"Veredicto", val:"ATACAR HOY — Ventana óptima esta semana (funeral hasta el 9 JUL). El ángulo de estructura de poder es exactamente lo que aceptan los editores, hay evento concreto (el líder ausente) y tesis fuerte (el IRGC hereda). La clave: venderlo como MISTERIO DE PODER, no como otro video de la guerra de Irán." }
  ],
  sources: [
    { headline:"Khamenei's Funeral Is Meant to Project Strength. But Iran's New Leader Has Yet to Appear", medium:"Time", date:"5 JUL 2026", url:"https://time.com/article/2026/07/05/khamenei-s-funeral-is-meant-to-project-strength-but-iran-s-new-leader-has-yet-to-appear/", desc:"Análisis del vacío de liderazgo durante el funeral" },
    { headline:"Three sons of Iran's slain leader Khamenei appear at funeral, not his successor", medium:"CNBC", date:"5 JUL 2026", url:"https://www.cnbc.com/amp/2026/07/05/successor-to-irans-slain-leader-khamenei-does-not-appear-at-funeral.html", desc:"El sucesor Mojtaba no aparece en el funeral" },
    { headline:"After Khamenei's death, Iran faces uncertain path to new supreme leader", medium:"Washington Post", date:"2026", url:"https://www.washingtonpost.com/world/2026/03/01/iran-succession-supreme-leader-khamenei/", desc:"Análisis de la incierta sucesión iraní" },
    { headline:"State funeral of Ali Khamenei", medium:"Wikipedia", date:"2026", url:"https://en.wikipedia.org/wiki/State_funeral_of_Ali_Khamenei", desc:"Documentación del funeral y la designación de Mojtaba" },
    { headline:"Live updates: Whereabouts of Iran's new supreme leader unknown", medium:"CNN", date:"4 JUL 2026", url:"https://www.cnn.com/2026/07/04/world/live-news/iran-khamenei-funeral-war-trump", desc:"El paradero del nuevo líder supremo sigue desconocido" }
  ]
},

/* ═══ P2 — COMPETENCIA — OTAN ANKARA: EUROPA SOLA ═══ */
{
  number: "P2",
  golden: false,
  title: "Trump obliga a Europa a defenderse sola: la cumbre OTAN de Ankara y el fin de la garantía americana",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-red", text:"ATACAR HOY" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "TR",
  chips: [
    { cls:"chip-green", text:"COMP: Trending masivo" },
    { cls:"chip-green", text:"VEL: Ventana óptima HOY" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_Summit_2025_(54611755854).jpg?width=1200",
  bannerAlt: "Reunión OTAN — la cumbre de Ankara define el futuro de la garantía de seguridad americana",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Group_photo_during_2009_NATO_Strasbourg%E2%80%93Kehl_summit.jpg?width=1200",
  tesis: "Hoy 8 de julio, en la cumbre de la OTAN en Ankara, Trump se reúne con Zelensky mientras deja un mensaje demoledor: 'Estados Unidos gasta más dinero en la OTAN que ningún otro país, con diferencia, para protegerlos, sin recibir ningún beneficio a cambio'. Washington está preparando abiertamente a los aliados europeos para un cambio gradual de su postura militar en el continente: menos tropas americanas, más responsabilidad europea. La cumbre no busca grandes declaraciones — busca convertir los compromisos de gasto (el 5% del PIB acordado en La Haya) en capacidad militar real. Y detrás está la pregunta que Europa lleva 80 años evitando: ¿qué pasa cuando la garantía de seguridad americana deja de ser incondicional? Justo cuando Rusia lanza uno de sus ataques más letales sobre Kyiv (22+ muertos, 6 JUL), Europa descubre que puede quedarse sola.",
  fields: [
    { label:"La noticia", val:"Cumbre OTAN Ankara 7-8 julio. Trump y Zelensky se reúnen hoy 8 JUL a las 14:30h local (Ukrainska Pravda, RFE/RL). Trump antes de llegar: 'EEUU gasta más que ningún país sin recibir beneficio' (NPR, 7 JUL). Washington prepara a Europa para un repliegue gradual de tropas. Rusia lanzó uno de sus ataques más letales sobre Kyiv (6 JUL, 22+ muertos) exponiendo fallos en defensa aérea. Zelensky pide más sistemas Patriot. Rutte: 'demostraremos que cumplimos el compromiso de La Haya'." },
    { label:"Segunda derivada", val:"La cumbre de Ankara marca el momento en que la OTAN deja de ser una garantía americana y empieza a ser una responsabilidad europea. Durante 80 años, la seguridad de Europa se basó en una premisa: si Rusia ataca, EEUU responde. Trump está rompiendo esa premisa, no con una retirada dramática sino con un mensaje persistente: pagad vosotros, defendeos vosotros. El problema es que Europa no está lista. El ataque ruso sobre Kyiv del 6 de julio expuso que ni siquiera Ucrania tiene defensa aérea suficiente — y Ucrania recibe ayuda occidental masiva. Si EEUU se repliega, ¿puede Europa defender su propio territorio? El 5% del PIB en gasto suena impresionante, pero el dinero no compra fábricas de munición, ni sistemas Patriot, ni disuasión nuclear de la noche a la mañana. Europa está descubriendo que la autonomía estratégica no se decreta: se construye durante décadas que no ha tenido." },
    { label:"Gran pregunta", val:"¿Está Europa preparada para defenderse sola si EEUU retira su paraguas — o la cumbre de Ankara es el momento en que Europa descubre que lleva 80 años dependiendo de una garantía que ya no existe?" },
    { label:"Señal de competencia", val:"TRENDING MASIVO. La cumbre OTAN es el evento geopolítico de la semana y domina el nicho hispano. Videos como 'Todo es Geopolítica: alerta máxima en la OTAN tras aviso de EEUU' están funcionando por encima de la media. El enfoque de la competencia es informativo ('qué pasa en la cumbre', 'ultimátum de Trump'). VP puede entrar con el ángulo estructural: el FIN de la garantía americana y la incapacidad real de Europa para sustituirla. Hueco para el análisis profundo." },
    { label:"Demanda en medios", val:"MÁXIMA. NPR: 'Trump's NATO pressure campaign continues as summit begins' (7 JUL). RFE/RL: 'Trump-Zelenskyy Meeting Set For NATO Summit' y 'Trump Heads To Ankara As NATO Faces Defining Tests'. Ukrainska Pravda: detalle de la reunión (7 JUL). Congressional Research Service R49018. Brussels Institute for Geopolitics: 'In Ankara, NATO must show unity'. Conference Board policy backgrounder. Cobertura total." },
    { label:"Velocidad de agenda", val:"VENTANA ÓPTIMA HOY. La cumbre es HOY 8 julio. La reunión Trump-Zelensky es a las 14:30h. Publicar hoy o mañana captura el pico máximo de atención. Después del 9 de julio el tema se enfría." },
    { label:"Historial VP", val:"VP publicó 'TRUMP ya está ROMPIENDO la OTAN y este puede ser su PEOR ERROR' (6 MAY, 203K). Ese video era hipotético ('puede romper'). Ahora hay HECHOS: la cumbre, el mensaje de Trump, el repliegue anunciado, el ataque a Kyiv. El ángulo '¿puede Europa defenderse sola?' con evidencia concreta de la cumbre es una actualización fuerte, no una repetición. VP también tiene el guion de rearme europeo como base." },
    { label:"Motor viral", val:"MIEDO (Europa indefensa) + PODER (Trump imponiendo condiciones) + GUERRA (Ucrania, ataque a Kyiv) + DINERO (5% del PIB, quién paga) + CONSECUENCIA DIRECTA PARA ESPAÑA/EUROPA (tu seguridad depende de esto) + ACTUALIDAD MÁXIMA (la cumbre es hoy) + PARADOJA (80 años de dependencia que se acaban de golpe)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Hoy, en Ankara, Trump le ha dicho a Europa lo que llevaba 80 años temiendo escuchar: defendeos vosotros.' Contexto: cómo nació la garantía americana en 1949, por qué Europa nunca construyó su propia defensa. Escalada: el mensaje de Trump, el repliegue anunciado, el ataque ruso a Kyiv. Giro: el 5% del PIB no compra disuasión inmediata. Revelación: Europa no tiene ni munición, ni Patriots, ni mando unificado. Cierre: ¿es este el fin de la Alianza tal como la conocíamos?" },
    { label:"Promesa cumplible", val:"'Por qué Europa no está lista para defenderse sola' — demostrable con datos de gasto, capacidad industrial militar, el ataque a Kyiv como prueba, y los anuncios de la cumbre. Fuentes: CRS, NPR, RFE/RL." },
    { label:"Ventaja VP", val:"ALTA. VP combina defensa + economía + geopolítica + historia. Mapas de despliegue, comparativas de gasto, capacidad industrial. El guion de rearme europeo existe como base. Puede conectar la actualidad (cumbre hoy) con el análisis estructural (80 años de dependencia)." },
    { label:"Caso para 800K/1M", val:"Señal de audiencia MÁXIMA: la cumbre es el evento de la semana, cobertura total. Señal de competencia: trending masivo, pero enfoque informativo. Lo que lo hace diferente: no es 'resumen de la cumbre' sino 'el fin de la garantía americana y por qué Europa no está lista'. Promesa: la dependencia de 80 años que se acaba. Riesgo: saturación de cobertura genérica de la cumbre. VP necesita: NO hacer resumen, centrarse en la INCAPACIDAD REAL de Europa con datos duros (munición, Patriots, industria)." },
    { label:"Título mental", val:"Trump acaba de decirle a Europa en su cara que se defienda sola — y justo cuando Rusia arrasa Kyiv, Europa descubre que no tiene ni munición para hacerlo" },
    { label:"Qué investigar más", val:"1) NPR y RFE/RL sobre el mensaje de Trump y el repliegue. 2) CRS R49018 sobre la cumbre. 3) Detalle de la reunión Trump-Zelensky (14:30h). 4) Capacidad industrial militar europea vs necesidad real. 5) El ataque a Kyiv del 6 JUL como prueba de la brecha de defensa aérea. 6) Qué se acordó exactamente sobre el 5% del PIB." },
    { label:"Veredicto", val:"ATACAR HOY — Ventana de horas: la cumbre es hoy. Tema trending, actualidad máxima, ángulo estructural diferenciador (fin de la garantía americana). La clave: profundidad sobre la incapacidad real de Europa, no resumen de la cumbre." }
  ],
  sources: [
    { headline:"Zelenskyy and Trump to meet at NATO summit on 8 July", medium:"Ukrainska Pravda", date:"7 JUL 2026", url:"https://www.pravda.com.ua/eng/news/2026/07/07/8042815/", desc:"Detalle de la reunión Trump-Zelensky en Ankara" },
    { headline:"Trump's NATO pressure campaign continues as summit begins", medium:"NPR", date:"7 JUL 2026", url:"https://www.npr.org/2026/07/07/nx-s1-5884055/trumps-nato-pressure-campaign-continues-as-summit-begins", desc:"La campaña de presión de Trump sobre la OTAN" },
    { headline:"Trump Heads To Ankara As NATO Faces Defining Tests From Ukraine To Middle East", medium:"RFE/RL", date:"7 JUL 2026", url:"https://www.rferl.org/a/trump-nato-ankara-russia-ukraine-iran-europe/33798072.html", desc:"Los tests definitorios de la Alianza" },
    { headline:"NATO: Issues for the July 2026 Ankara Summit", medium:"Congressional Research Service", date:"2026", url:"https://www.congress.gov/crs-product/R49018", desc:"Informe oficial del CRS sobre la cumbre" },
    { headline:"In Ankara, NATO must show unity or risk a chaotic spectacle", medium:"Brussels Institute for Geopolitics", date:"6 JUL 2026", url:"https://big-europe.eu/publications/2026-07-06-in-ankara-nato-must-show-unity-or-risk-a-chaotic-spectacle", desc:"El riesgo de desunión en la Alianza" }
  ]
},

/* ═══ P3 — COMPETENCIA — ORMUZ: EL ALTO EL FUEGO SE ROMPE ═══ */
{
  number: "P3",
  golden: false,
  title: "El alto el fuego que se rompe: cómo un ataque a un buque catarí puede reiniciar la guerra de Irán",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-high",
  potText: "⭐⭐ POTENCIAL ALTO",
  flag: "IR",
  chips: [
    { cls:"chip-green", text:"COMP: Escalada trending" },
    { cls:"chip-green", text:"VEL: Acelerando" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-yellow", text:"VP: Media-Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=1200",
  bannerAlt: "Estrecho de Ormuz — un ataque a un buque LNG catarí reaviva la guerra",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz.jpg?width=1200",
  tesis: "El 7 de julio, Irán atacó el buque metanero catarí Al-Rekayyat mientras cruzaba el Estrecho de Ormuz — el mayor día de ataques desde el alto el fuego EEUU-Irán. Otro buque fue golpeado por un proyectil no identificado. EEUU respondió golpeando decenas de objetivos iraníes y revocando la licencia de venta de petróleo de Irán. El Brent saltó un 5.6% hasta los $76. La paradoja brutal: el objetivo atacado fue un buque de Catar — el país que MEDIA entre EEUU e Irán. ¿Por qué atacaría Irán al mediador que necesita? La respuesta revela la fractura interna del régimen: mientras el liderazgo civil negocia la paz, hay actores dentro de Irán (la Guardia Revolucionaria) que sabotean el acuerdo. El alto el fuego no lo rompe un país — lo rompe una facción. Y eso es mucho más peligroso.",
  fields: [
    { label:"La noticia", val:"Irán atacó el buque LNG catarí Al-Rekayyat en Ormuz (7 JUL) — mayor día de ataques desde el alto el fuego (Bloomberg). Otro buque golpeado por proyectil no identificado con daño estructural. EEUU respondió con ataques a decenas de objetivos iraníes (CBS News). Washington revocó la licencia de venta de petróleo de Irán (CNBC). Brent +5.6% a $76.04, WTI +5.4% a $72.25. El estrecho maneja ~20% del tráfico mundial de petróleo." },
    { label:"Segunda derivada", val:"Que Irán ataque un buque de Catar — el mediador de las negociaciones de paz — no tiene sentido a nivel de Estado. Sí lo tiene si el ataque no lo ordenó el Estado sino una facción. Con el Líder Supremo invisible (ver tema dorado), el poder en Irán está fragmentado: el liderazgo civil quiere el alto el fuego para reconstruir el país, pero la Guardia Revolucionaria tiene incentivos para sabotearlo (justifica su presupuesto, su poder, su control). Un alto el fuego roto por una facción interna es más peligroso que una guerra entre Estados porque nadie controla la escalada. EEUU responde al 'Estado iraní', pero el Estado iraní quizá no ordenó el ataque. Esta es la trampa de los regímenes descabezados: sin una autoridad central clara, cada facción actúa por su cuenta y el mundo no sabe con quién negociar." },
    { label:"Gran pregunta", val:"¿Y si el alto el fuego de Irán no lo está rompiendo el gobierno iraní, sino una facción militar que nadie controla — y qué pasa cuando atacas a un país que ya no tiene un solo centro de mando?" },
    { label:"Señal de competencia", val:"ESCALADA TRENDING. La escalada de Ormuz y el petróleo están reactivando el interés del nicho. Los canales cubren 'ataque en Ormuz' y 'sube el petróleo' de forma descriptiva. El ángulo VP — la fractura interna del régimen que explica POR QUÉ se ataca al mediador — no lo está contando nadie. Conecta directamente con el tema dorado (líder fantasma) y da una explicación estructural, no solo la noticia." },
    { label:"Demanda en medios", val:"ALTA. Bloomberg: 'Hormuz Sees Biggest Day of Attacks Since US-Iran Peace Deal' (7 JUL). CNBC: 'Oil prices rise after attacks, U.S. revokes Iran sale authorization' (7 JUL). CBS News: 'U.S. hits dozens of Iranian targets in retaliatory strikes'. OilPrice: 'Geopolitical Risk Returns as Drone Strikes Hit Hormuz Shipping'. Business Recorder, Forex.com sobre el crudo. CRS R45281 sobre impacto en materias primas." },
    { label:"Velocidad de agenda", val:"ACELERANDO. Los ataques fueron ayer (7 JUL). EEUU ya respondió. El petróleo se disparó. La situación puede escalar en cualquier momento o desescalar si las negociaciones se retoman. Ventana caliente pero volátil — el tema puede evolucionar en horas." },
    { label:"Historial VP", val:"VP ha cubierto Irán/Ormuz extensamente (múltiples videos 350K-500K, algunos ya saturados). ADVERTENCIA: 'Ormuz estrecho fantasma' fue DESCARTADO por genérico. La DIFERENCIA de este ángulo: no es 'el estrecho está cerrado' sino 'quién está rompiendo el alto el fuego y por qué ataca al mediador'. El ángulo de la fractura interna (facción vs Estado) es nuevo y evita el 'genérico' que hundió la propuesta anterior. Aun así, riesgo de saturación de Irán — por eso va como investigar, no dorado." },
    { label:"Motor viral", val:"GUERRA (¿vuelve el conflicto?) + DINERO (petróleo +5.6%, impacto en tu bolsillo) + MISTERIO (¿por qué atacar al mediador?) + TRAICIÓN (facción que sabotea a su propio gobierno) + CONSECUENCIA GLOBAL (20% del petróleo mundial) + URGENCIA (pasó ayer)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Irán acaba de atacar un buque de Catar. El problema: Catar es el país que está negociando la paz de Irán. ¿Por qué atacas a tu propio mediador?' Escalada: la respuesta de EEUU, la revocación de la licencia, el petróleo disparado. Giro: el ataque no lo ordenó el Estado — lo ordenó una facción. Revelación: con el Líder Supremo invisible, la Guardia Revolucionaria actúa por su cuenta. Cierre: ¿cómo negocias la paz con un país que ya no tiene un solo jefe?" },
    { label:"Promesa cumplible", val:"'Por qué el alto el fuego de Irán se está rompiendo desde dentro' — demostrable con la cronología del ataque, la respuesta de EEUU, y el análisis de la fractura de poder. Conecta con el tema del líder fantasma." },
    { label:"Ventaja VP", val:"MEDIA-ALTA. VP puede explicar la mecánica de la fractura de poder mejor que nadie, con mapas de Ormuz y el organigrama del régimen. El riesgo es la saturación de Irán — la ventaja depende de vender el ángulo NUEVO (facción vs Estado), no la enésima noticia de Ormuz." },
    { label:"Título mental", val:"Irán acaba de atacar al país que negocia su paz — y la única explicación es que el gobierno iraní ya no controla a su propio ejército" },
    { label:"Qué investigar más", val:"1) Bloomberg y CNBC sobre el ataque al Al-Rekayyat. 2) Respuesta de EEUU: qué objetivos golpeó. 3) Papel de Catar como mediador. 4) Evidencia de fractura entre liderazgo civil e IRGC. 5) Impacto del petróleo en mercados y en España/Latam. 6) Estado real de las negociaciones de paz permanente." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Actualidad máxima y ángulo diferenciador (fractura interna), pero riesgo de saturación de Irán. Funciona mejor como complemento del tema dorado (líder fantasma). Si se vende la fractura de poder, evita el 'genérico' que hundió propuestas anteriores de Ormuz." }
  ],
  sources: [
    { headline:"Hormuz Sees Biggest Day of Attacks Since US-Iran Peace Deal", medium:"Bloomberg", date:"7 JUL 2026", url:"https://www.bloomberg.com/news/articles/2026-07-07/iranian-missile-hits-qatari-lng-ship-in-strait-testing-us-talks", desc:"Misil iraní golpea buque LNG catarí" },
    { headline:"Oil prices rise after attacks on tankers in Strait of Hormuz, U.S. revokes Iran sale authorization", medium:"CNBC", date:"7 JUL 2026", url:"https://www.cnbc.com/2026/07/07/oil-prices-iran-strait-hormuz.html", desc:"Subida del petróleo y revocación de la licencia" },
    { headline:"U.S. hits dozens of Iranian targets in retaliatory strikes after ship attacks", medium:"CBS News", date:"7 JUL 2026", url:"https://www.cbsnews.com/live-updates/iran-us-war-strait-of-hormuz-trump-nato/", desc:"Respuesta militar de EEUU" },
    { headline:"Geopolitical Risk Returns as Drone Strikes Hit Hormuz Shipping", medium:"OilPrice", date:"7 JUL 2026", url:"https://oilprice.com/Energy/Energy-General/Geopolitical-Risk-Returns-as-Drone-Strikes-Hit-Hormuz-Shipping.html", desc:"El regreso de la prima de riesgo geopolítico" }
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
  tesis: "India suspendió el Tratado de Aguas del Indo tras el atentado de Pahalgam. Lo que empezó como medida temporal es ya política de Estado: el ministro de Recursos Hídricos declaró que India trabaja para que 'ni una sola gota de agua llegue a Pakistán'. El tribunal arbitral internacional dictaminó que la suspensión es ilegal — India rechazó el fallo llamando al tribunal 'ilegal'. 9 de cada 10 pakistaníes viven en la cuenca del Indo, el 90% de las cosechas dependen de él. Dos potencias nucleares peleando no por territorio ni ideología, sino por agua. Y el tratado que mantuvo la paz durante 65 años — sobrevivió a 3 guerras — acaba de romperse. Precedente global para Turquía-Éufrates, Etiopía-Nilo, China-Mekong.",
  fields: [
    { label:"La noticia", val:"India suspendió el Tratado del Indo tras el atentado de Pahalgam (26 turistas muertos). En junio 2026 cortó el flujo del río Chenab desde la presa de Baglihar (CNBC, 22 JUN). El tribunal arbitral falló que la suspensión unilateral es ilegal (mayo 2026); India lo rechazó. Ministro C.R. Patil: 'Pakistán no recibirá ni una sola gota de agua'. Foreign Affairs: 'Why the Next India-Pakistan War Will Escalate' (JUL 2026)." },
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

/* ═══ P5 — COMPETENCIA — ETIOPÍA vs ERITREA ═══ */
{
  number: "P5",
  golden: false,
  title: "Etiopía contra Eritrea: la guerra que puede matar a 600.000 personas por el acceso al Mar Rojo",
  tags: [
    { cls:"tag-red", text:"COMPETENCIA" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-medium",
  potText: "⭐ POTENCIAL MEDIO-ALTO",
  flag: "ET",
  chips: [
    { cls:"chip-yellow", text:"COMP: Cubierto parcialmente" },
    { cls:"chip-yellow", text:"VEL: Latente" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian_soldiers_(01).JPEG?width=1200",
  bannerAlt: "Soldados etíopes — Etiopía y Eritrea acumulan tropas en la frontera",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Horn_of_Africa_map.png?width=1200",
  tesis: "Etiopía y Eritrea acumulan tropas en su frontera. En febrero, soldados etíopes marcharon bajo una pancarta: 'Les guste o no, no seremos un país sin litoral'. Abiy Ahmed declaró que 'el Mar Rojo y Etiopía no pueden permanecer separados para siempre'. La última guerra entre ambos (dentro de la Guerra de Tigray) mató a 600.000 personas. Ahora Addis Abeba acusa a Asmara de coordinar con facciones del TPLF. Y hay un ingrediente nuevo: EEUU acaba de aliarse con Eritrea para controlar Bab el-Mandeb. Si Etiopía ataca, ¿EEUU elige entre su nuevo aliado eritreo y el país más grande del Cuerno de África?",
  fields: [
    { label:"La noticia", val:"Atlantic Council: 'Ethiopia and Eritrea are on the brink of war again'. Crisis Group: 'A Powder Keg in the Horn'. Ambos acumulan tropas. Abiy Ahmed: 'El Mar Rojo y Etiopía no pueden permanecer separados' (feb 2026). Al Jazeera: 'Ethiopia is not being dragged into war' (25 JUN). Stratfor/RANE: 'Assessing the Risk of an Ethiopia-Eritrea War in 2026'." },
    { label:"Segunda derivada", val:"La tensión Etiopía-Eritrea puede desencadenar una conflagración regional. Etiopía (120M habitantes, 2ª población de África) quiere el acceso al mar que perdió en 1993. Eritrea (dictadura de Afwerki) coordina con facciones del TPLF y Fano para desestabilizar Addis Abeba. El añadido explosivo: EEUU se alió con Eritrea para Bab el-Mandeb. Si Etiopía ataca, la alianza se activa. ¿EEUU elige entre Asmara y el país más importante del Cuerno de África?" },
    { label:"Gran pregunta", val:"¿Puede el deseo de Etiopía de volver al mar provocar una guerra que mate a cientos de miles — y obligar a EEUU a elegir entre su nuevo aliado eritreo y el gigante del Cuerno de África?" },
    { label:"Señal de competencia", val:"CUBIERTO PARCIALMENTE. Canales internacionales cubren la tensión; Atlantic Council y Crisis Group publican análisis profundos. En español: VP cubrió Eritrea desde el ángulo Trump-alianza (26 MAY, 268K), pero NO la tensión Etiopía-Eritrea como potencial guerra. Ángulo diferente: no es EEUU-Eritrea sino Etiopía-Eritrea con EEUU atrapado." },
    { label:"Demanda en medios", val:"ALTA EN THINK TANKS. Atlantic Council (riesgo de guerra). Crisis Group (briefing B210). Stratfor/RANE (evaluación de riesgo). Al Jazeera (opinión y reportajes). The Conversation (académico). CSMonitor (explicación del conflicto)." },
    { label:"Velocidad de agenda", val:"LATENTE PERO ESCALANDO. La retórica militar etíope se endurece. Eritrea coordina con opositores. Los think tanks alertan. Riesgo de choque fronterizo real pero no inminente. Puede explotar sin previo aviso." },
    { label:"Historial VP", val:"VP cubrió '¿JAQUE a IRÁN? La ALIANZA SECRETA de TRUMP con ERITREA' (26 MAY, 268K). El ángulo Etiopía-vs-Eritrea es DIFERENTE y complementa aquel video. El tema Mali/Sahel fue APROBADO por los editores — este tiene la misma calidad con actualidad más urgente." },
    { label:"Motor viral", val:"CIFRA IMPACTANTE (600.000 muertos) + POTENCIA DESCONOCIDA (Etiopía: 120M, 2ª de África) + PARADOJA (país sin litoral que quiere el mar a cualquier precio) + CONSECUENCIA PARA EEUU (atrapado entre dos aliados) + CONEXIÓN CON VIDEO ANTERIOR + VISUALIDAD (Mar Rojo, Bab el-Mandeb)." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'La última guerra entre Etiopía y Eritrea mató a 600.000 personas. Ahora acumulan tropas en la frontera — y esta vez hay un ingrediente nuevo: EEUU.' Escalada: desfiles, declaraciones de Abiy, coordinación eritrea. Giro: la alianza Trump-Eritrea complica todo. Cierre: ¿será el Mar Rojo el motivo de la próxima gran guerra africana?" },
    { label:"Promesa cumplible", val:"'La guerra que puede matar a 600.000 personas por el acceso al Mar Rojo' — demostrable con Crisis Group, Atlantic Council, cifras de Tigray y la posición de EEUU." },
    { label:"Ventaja VP", val:"ALTA. VP combina mapas, historia, geopolítica y conexiones. El Cuerno de África, Bab el-Mandeb — ultra-visual. La conexión con el video anterior de Eritrea da profundidad. Temas africanos bien conectados funcionan (Mali/Sahel aprobado)." },
    { label:"Caso para 800K/1M", val:"Señal: Atlantic Council, Crisis Group alertando. Competencia: parcial, gap en español. Lo diferente: no 'conflicto africano genérico' sino 'un país de 120M quiere salir al mar y puede provocar 600.000 muertos'. Promesa: la cifra y la paradoja (EEUU atrapado). Riesgo: África genera menos clicks — conectar con Bab el-Mandeb y comercio mundial. VP necesita: abrir con la cifra de muertos." },
    { label:"Título mental", val:"Etiopía quiere volver al mar. Eritrea dice que no. La última vez que discutieron, murieron 600.000 personas — y esta vez EEUU está atrapado en medio" },
    { label:"Qué investigar más", val:"1) Atlantic Council. 2) Crisis Group B210. 3) Stratfor/RANE. 4) Cifras de la guerra de Tigray. 5) Posición de EEUU (alianza Eritrea vs relación Etiopía). 6) Mapa de presencia militar en la frontera." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Cifras impactantes, paradoja geopolítica fuerte, conexión con video anterior. Clave: conectar con Bab el-Mandeb y comercio mundial para atraer audiencia más allá del nicho africanista." }
  ],
  sources: [
    { headline:"Ethiopia and Eritrea are on the brink of war again", medium:"Atlantic Council", date:"2026", url:"https://www.atlanticcouncil.org/blogs/africasource/ethiopia-and-eritrea-are-on-the-brink-of-war-again/", desc:"Análisis del riesgo de guerra" },
    { headline:"Ethiopia, Eritrea and Tigray: A Powder Keg in the Horn of Africa", medium:"International Crisis Group", date:"2026", url:"https://www.crisisgroup.org/brf/africa/ethiopia-eritrea/b210-ethiopia-eritrea-and-tigray-powder-keg-horn-africa", desc:"Briefing B210" },
    { headline:"Assessing the Risk of an Ethiopia-Eritrea War in 2026", medium:"RANE/Stratfor", date:"2026", url:"https://worldview.stratfor.com/article/assessing-risk-ethiopia-eritrea-war-2026", desc:"Evaluación de riesgo" },
    { headline:"Ethiopia is not being 'dragged into war'", medium:"Al Jazeera", date:"25 JUN 2026", url:"https://www.aljazeera.com/opinions/2026/6/25/ethiopia-is-not-being-dragged-into-war", desc:"Opinión sobre las intenciones de Etiopía" }
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
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Horn_of_Africa_map.png?width=1200",
  tesis: "Corea del Sur ha tenido tres presidentes en un año: uno intentó una ley marcial (autogolpe), otro fue interino, y el actual — Lee Jae-myung — fue apuñalado, condenado y absuelto en apelación, y ahora gobierna con un 51.5% de aprobación mientras miles protestan porque las papeletas se agotaron en las elecciones locales de junio. El presidente de la Comisión Electoral dimitió. Todo esto en el país que alberga 28.500 soldados americanos, fabrica el 80% de los chips de memoria del mundo (Samsung, SK Hynix) y es la primera línea contra Corea del Norte y China. La paradoja del aliado: EEUU necesita una Corea estable para su estrategia indo-pacífica, pero la democracia surcoreana está en su momento más frágil desde 1987.",
  fields: [
    { label:"La noticia", val:"Protestas continúan en Seúl tras la escasez de papeletas en las elecciones locales del 3 JUN (US News). El presidente de la Comisión Electoral Nacional, Roh Tae-ak, dimitió el 8 JUN. Las papeletas se agotaron en 50 de 14.300 centros (Korea Herald). Rally de 6.000 personas en Jamsil (12 JUN). Lee Jae-myung cae al 51.5% de aprobación. Wikipedia documenta las '2026 South Korean local election rerun protests'." },
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

/* ═══ P7 — VENTANA — TRUMP vs SCOTUS ═══ */
{
  number: "P7",
  golden: false,
  title: "Trump contra el Tribunal Supremo: la batalla constitucional que decidirá quién controla el comercio de Estados Unidos",
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
    { label:"Segunda derivada", val:"Esto es la mayor redefinición del poder presidencial sobre comercio desde los años 30. Desde la Gran Depresión, el Congreso fue delegando poder comercial al presidente (IEEPA, Sección 122, Sección 301). Trump lo usó al máximo: subió el arancel efectivo del 2.5% al 27% en meses, el nivel más alto en un siglo. Los tribunales dicen: eso es poder del Congreso. Si esta jurisprudencia se consolida, CUALQUIER futuro presidente tendrá las manos atadas para usar aranceles como arma geopolítica. La guerra comercial con China, la presión a la UE — todo depende de esta batalla constitucional." },
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
},

/* ═══ P8 — VENTANA — RUSIA AFRICA CORPS ═══ */
{
  number: "P8",
  golden: false,
  title: "De Wagner al Africa Corps: cómo Rusia convirtió a sus mercenarios en un ejército de Estado y por qué está fracasando",
  tags: [
    { cls:"tag-blue", text:"VENTANA OPORTUNIDAD" },
    { cls:"tag-orange", text:"INVESTIGAR SEMANA" }
  ],
  potCls: "pot-medium",
  potText: "⭐ POTENCIAL MEDIO",
  flag: "RU",
  chips: [
    { cls:"chip-green", text:"COMP: Gap en español" },
    { cls:"chip-yellow", text:"VEL: Latente" },
    { cls:"chip-green", text:"RET: Fuerte" },
    { cls:"chip-green", text:"VP: Alta" }
  ],
  banner: "https://commons.wikimedia.org/wiki/Special:FilePath/Mali_(orthographic_projection).svg?width=1200",
  bannerAlt: "Mapa de Mali — la mayor operación del Africa Corps ruso enfrenta un bloqueo yihadista",
  bannerFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Africa_satellite_orthographic.jpg?width=1200",
  tesis: "Tras la muerte de Prigozhin en 2023, Rusia no cerró Wagner — la ESTATIZÓ. El SVR y el GRU tomaron el control y la rebautizaron Africa Corps. Mali es el mayor despliegue (2.500 efectivos) y el primer test real. Pero el experimento fracasa: desde septiembre 2025, los yihadistas de JNIM imponen un bloqueo selectivo a Bamako, quemando camiones de combustible. El Africa Corps enfrenta déficit de reclutamiento, pérdida de capacidad operativa, y un modelo de financiación basado en saquear oro y uranio que depende de controlar territorio que no controla. ¿Puede Rusia gestionar un ejército colonial en el siglo XXI — o el Africa Corps es otro síntoma de la sobreextensión imperial rusa mientras pierde en Ucrania?",
  fields: [
    { label:"La noticia", val:"Africanews (FEB 2026): el SVR ruso toma el control de las operaciones de Wagner en África. Carnegie (FEB 2026): 'Russia in Africa — influence and its limits'. Georgetown GJIA: 'Private Military Proxies in the Sahel'. JNIM impone un bloqueo selectivo a Bamako desde septiembre 2025. Al Jazeera: 'Wagner vs Africa Corps'. CRS informe sobre operaciones de seguridad rusas en África." },
    { label:"Segunda derivada", val:"La transición de Wagner al Africa Corps es un cambio de MODELO. Wagner era privado: reclutaba presos, funcionaba como empresa, leal a Prigozhin. El Africa Corps es estatal, bajo GRU y SVR. Parece más profesional pero tiene un problema: Wagner funcionaba porque era ágil, barato y sin rendición de cuentas. El Africa Corps rinde cuentas al Ministerio de Defensa, al SVR y al Kremlin — triple cadena de mando donde la agilidad es supervivencia. Resultado: problemas de reclutamiento, pérdida de capacidad, yihadistas ganando terreno. La paradoja: Rusia estataliza sus mercenarios para tener más control y termina con menos eficacia." },
    { label:"Gran pregunta", val:"¿Puede Rusia gestionar un ejército colonial en el siglo XXI — o el fracaso del Africa Corps en Mali demuestra que el modelo Wagner funcionaba PORQUE era privado?" },
    { label:"Señal de competencia", val:"GAP EN ESPAÑOL. Wagner/África se cubrió en 2023-2024 tras la muerte de Prigozhin. Pero la TRANSICIÓN a Africa Corps y sus FRACASOS en 2025-2026 no están cubiertos en el nicho hispano. Georgetown, Carnegie y Africanews tienen análisis en inglés. VP cubrió Mali/Sahel (tema aprobado por los editores) — esta es la actualización con nuevo ángulo." },
    { label:"Demanda en medios", val:"MEDIA-ALTA EN THINK TANKS. Carnegie (análisis completo). Georgetown GJIA (paper académico). Africanews (investigación sobre el SVR). Al Jazeera (Wagner vs Africa Corps). CRS. Responsible Statecraft. Timbuktu Institute (estrategia de 4 pilares)." },
    { label:"Velocidad de agenda", val:"LATENTE. Sin evento puntual pero la situación en Mali se deteriora cada mes. JNIM ganando terreno, Bamako bajo bloqueo, reclutamiento estancado. Puede explotar con un ataque grande o la pérdida de una posición clave." },
    { label:"Historial VP", val:"El tema 'Mali/Sahel: se cae el primer estado' fue APROBADO por los editores (4 JUN 2026) con la nota de 'conectar con tema no africano'. La conexión con Rusia (Africa Corps como extensión de la sobreextensión imperial mientras pierde en Ucrania) es exactamente esa conexión. VP no ha hecho un video sobre la transición Wagner → Africa Corps." },
    { label:"Motor viral", val:"MERCENARIOS (tema atractivo) + FRACASO IMPERIAL (Rusia pierde en África mientras pierde en Ucrania) + PARADOJA (estatalizan a los mercenarios y son menos eficaces) + SAQUEO DE RECURSOS (oro, uranio) + TERRORISMO (JNIM bloqueando Bamako) + CONEXIÓN CON UCRANIA." },
    { label:"Retención narrativa", val:"FUERTE. Apertura: 'Prigozhin murió hace 3 años. Rusia no cerró Wagner — la convirtió en un ejército de Estado. Se llama Africa Corps. Y está perdiendo.' Escalada: la transición, los problemas de reclutamiento. Giro: la estatalización que debía profesionalizar acaba debilitando. Revelación: la estrategia de 4 pilares. Cierre: ¿es el Africa Corps otro Vietnam en el Sahel?" },
    { label:"Promesa cumplible", val:"'Cómo Rusia convirtió a sus mercenarios en un ejército y por qué está fracasando' — demostrable con Carnegie, Georgetown, CRS y datos de despliegue en Mali." },
    { label:"Ventaja VP", val:"ALTA. VP combina geopolítica + mapas + economía de recursos + historia. El tema Wagner/África ya fue aprobado. La conexión con Ucrania da el 'tema no africano' que pidieron los editores." },
    { label:"Caso para 800K/1M", val:"Señal: Carnegie, Georgetown, CRS publicando. Gap en español para el ángulo actualizado. Lo diferente: no 'Wagner en África' (2023) sino 'el Africa Corps está perdiendo en 2026'. Promesa: mercenarios estatalizados que pierden eficacia. Riesgo: África genera menos clicks — abrir con la paradoja y conectar con Ucrania rápido." },
    { label:"Título mental", val:"Prigozhin murió hace 3 años. Rusia convirtió a Wagner en un ejército de Estado. Se llama Africa Corps — y los yihadistas están ganando" },
    { label:"Qué investigar más", val:"1) Carnegie 'Russia in Africa'. 2) Georgetown GJIA. 3) Africanews sobre el SVR. 4) CRS. 5) Timbuktu Institute (4 pilares). 6) Datos de despliegue y resultados. 7) Bloqueo JNIM de Bamako." },
    { label:"Veredicto", val:"INVESTIGAR ESTA SEMANA — Tema aprobado previamente (Mali/Sahel). La actualización Wagner → Africa Corps + fracasos es fresca. Clave: conectar con Rusia/Ucrania para dar escala." }
  ],
  sources: [
    { headline:"Russia in Africa: Examining Moscow's Influence and Its Limits", medium:"Carnegie Endowment", date:"FEB 2026", url:"https://carnegieendowment.org/russia-eurasia/research/2026/02/russia-role-west-southern-africa-junta-wagner-africa-corps", desc:"Análisis completo de la presencia rusa" },
    { headline:"Russia in Africa: Private Military Proxies in the Sahel", medium:"Georgetown GJIA", date:"2026", url:"https://gjia.georgetown.edu/global-governance/russia-in-africa-private-military-proxies-in-the-sahel/", desc:"Paper académico sobre proxies militares" },
    { headline:"Investigation: Russian spy agency takes over Wagner operations in Africa", medium:"Africanews", date:"21 FEB 2026", url:"https://www.africanews.com/2026/02/21/investigation-russian-spy-agency-takes-over-wagner-operations-in-africa/", desc:"Investigación sobre la toma de control del SVR" },
    { headline:"Russia's Security Operations in Africa", medium:"Congressional Research Service", date:"2026", url:"https://www.congress.gov/crs-product/IF12389", desc:"Informe oficial para el Congreso" }
  ]
}

],

/* ═══ RANKING ═══ */
ranking: [
  { pos:1, title:"Irán: el líder fantasma (vacío de poder)", score:"9.5/10", tags:[{cls:"tag-gold",text:"⭐ DORADO"},{cls:"tag-red",text:"ATACAR HOY"}] },
  { pos:2, title:"OTAN Ankara: Europa se defiende sola", score:"9.2/10", tags:[{cls:"tag-red",text:"ATACAR HOY"}] },
  { pos:3, title:"India vs Pakistán: guerra del agua", score:"9.0/10", tags:[{cls:"tag-red",text:"ATACAR HOY"}] },
  { pos:4, title:"Ormuz: el alto el fuego se rompe", score:"8.5/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:5, title:"Etiopía vs Eritrea: 600.000 muertos", score:"8.0/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:6, title:"Corea del Sur: democracia más frágil", score:"7.9/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:7, title:"Trump vs Supremo: quién controla el comercio", score:"7.7/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] },
  { pos:8, title:"Rusia Africa Corps: mercenarios estatalizados", score:"7.3/10", tags:[{cls:"tag-orange",text:"INVESTIGAR"}] }
],

/* ═══ VIGILAR ═══ */
vigilar: [
  { title:"Resultados de la cumbre OTAN Ankara: declaración final, 5% PIB, Ucrania", trigger:"Declaraciones post-cumbre 8-9 julio y reacción de Rusia", source:"NATO.int, NPR, RFE/RL (8 JUL 2026)" },
  { title:"Ataque ruso masivo sobre Kyiv (6 JUL): brecha de defensa aérea expuesta", trigger:"Si hay nueva oleada o decisión sobre Patriots en la cumbre", source:"NPR, Ukrainska Pravda (6-7 JUL)" },
  { title:"Irán: aparición (o no) del sucesor Mojtaba tras el funeral (9 JUL)", trigger:"Si aparece públicamente o se confirma su incapacidad", source:"Time, CNN, CNBC (5 JUL)" },
  { title:"Venezuela: miles de desaparecidos tras el doble terremoto", trigger:"Si hay giro político o intervención de EEUU durante la crisis", source:"NPR, Wikipedia (JUL 2026)" },
  { title:"Supertifón Bavi y bases de EEUU en Guam: vulnerabilidad de la disuasión en el Pacífico", trigger:"Si Andersen AFB sufre daños o se abre debate sobre dispersión", source:"CNN, Stars and Stripes (5-6 JUL)" },
  { title:"Crisis alimentaria global por Ormuz: fertilizantes +60%, FAO alerta 45M personas", trigger:"Si la disrupción se prolonga y afecta la siembra del hemisferio sur", source:"FAO, WEF, World Bank (JUL 2026)" },
  { title:"Francia: 4 gobiernos en 2 años, incapacidad de liderar la defensa europea", trigger:"Si hay nueva moción de censura o crisis presupuestaria", source:"Carnegie, PBS, Time (JUN 2026)" }
],

/* ═══ COVERED VIDEOS ═══ */
coveredVideos: [
  { title:"EL CASTRISMO SE RINDE: Cómo será la nueva Cuba", date:"1 JUL 2026", views:"246K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"VENEZUELA acaba de recibir el GOLPE más DEVASTADOR", date:"25 JUN 2026", views:"585K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"EL HUNDIMIENTO BRITÁNICO: ¿Por qué este país ha dejado de funcionar?", date:"23 JUN 2026", views:"168K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"EMIRATOS CONTRA IRÁN: el golpe que puede cambiar todo el Golfo", date:"20 JUN 2026", views:"165K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"¿LLEGÓ la MANO DURA? EUROPA le declara la GUERRA a la INMIGRACIÓN ILEGAL", date:"17 JUN 2026", views:"569K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"La PEOR noticia para el CASTRISMO: EEUU declara la GUERRA al temido G2 CUBANO", date:"16 JUN 2026", views:"374K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"EEUU PIERDE MÁS de lo que parece en IRÁN", date:"15 JUN 2026", views:"190K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"UCRANIA da la SORPRESA: ¿Es realmente posible una VICTORIA sobre RUSIA?", date:"8 JUN 2026", views:"471K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"SORPRESA EN COLOMBIA: Cómo un FAN de BUKELE y MILEI ha DESTROZADO a la izquierda", date:"1 JUN 2026", views:"346K", url:"https://www.youtube.com/@VisualPolitik/videos" },
  { title:"¿JAQUE a IRÁN? La ALIANZA SECRETA de TRUMP con el RÉGIMEN BRUTAL de ERITREA", date:"26 MAY 2026", views:"268K", url:"https://www.youtube.com/@VisualPolitik/videos" }
]

};
