// ============================================================
//  BANCO DE PREGUNTAS - Glándulas Exocrinas
// ============================================================

const PREGUNTAS = {
  200: [
    { pregunta: "¿Cuál es la principal diferencia entre una glándula exocrina y una glándula endocrina?", pista: "Piensa en dónde van sus productos secretados...", respuesta: "Las glándulas exocrinas secretan sus productos hacia conductos que los llevan a superficies corporales o cavidades, mientras que las endocrinas secretan directamente al torrente sanguíneo." },
    { pregunta: "¿Qué tipo de secreción produce el páncreas exocrino?", pista: "Piensa en la digestión de los tres macronutrientes.", respuesta: "El páncreas exocrino produce jugo pancreático con enzimas digestivas: amilasa, lipasa, tripsina y quimotripsina, además de bicarbonato para neutralizar el quimo ácido." },
    { pregunta: "¿Cómo se llaman las células secretoras de las glándulas salivales?", pista: "Son células que forman los acinos...", respuesta: "Se llaman células acinares o acinocitos. Los acinos pueden ser serosos, mucosos o mixtos." },
    { pregunta: "¿Qué glándula exocrina produce la bilis?", pista: "No es la vesícula, sino el órgano que la sintetiza...", respuesta: "El hígado produce la bilis, almacenada en la vesícula biliar y liberada al duodeno por el colédoco para emulsionar grasas." },
    { pregunta: "¿Qué es un conducto excretor en las glándulas exocrinas?", pista: "Es la 'tubería' de la glándula...", respuesta: "Es el canal que transporta el producto secretado desde la unidad secretora hasta la superficie donde se libera." },
    { pregunta: "¿Cuál es el mecanismo de secreción de la glándula mamaria?", pista: "Piensa en células que se fragmentan durante la secreción...", respuesta: "La glándula mamaria utiliza secreción apocrina (para lípidos) y merócrina (para proteínas como la caseína, por exocitosis)." },
    { pregunta: "¿Qué tipo de secreción utilizan las glándulas sebáceas?", pista: "La célula entera se destruye para liberar el producto...", respuesta: "Las glándulas sebáceas utilizan secreción holocrina: la célula completa se carga de sebo y luego se desintegra, liberando su contenido." },
    { pregunta: "¿Qué son las glándulas de Brunner y dónde se ubican?", pista: "Piensa en la primera parte del intestino delgado...", respuesta: "Son glándulas exocrinas tubuloacinares del duodeno que secretan moco alcalino para proteger la mucosa del quimo ácido." },
  ],
  500: [
    { pregunta: "Explique la clasificación morfológica de las glándulas exocrinas con ejemplos de cada tipo.", pista: "Piensa en la forma del conducto y la porción secretora: tubular, alveolar, tubuloalveolar...", respuesta: "Se clasifican por el conducto (simple vs compuesto) y la unidad secretora (tubular, alveolar/acinar, tubuloalveolar). Ej: intestinales de Lieberkühn (tubular simple), sebáceas (alveolar simple), submandibulares (tubuloalveolar compuesta)." },
    { pregunta: "Describa los tres tipos de secreción según el mecanismo de liberación del producto.", pista: "Son merócrina, apocrina y holocrina...", respuesta: "1. Merócrina: exocitosis sin pérdida de citoplasma (páncreas, salivales). 2. Apocrina: se pierde la porción apical del citoplasma (mamarias para lípidos). 3. Holocrina: la célula entera se destruye y su contenido es el secreto (glándulas sebáceas)." },
    { pregunta: "Describa la estructura histológica del páncreas exocrino y qué produce cada componente.", pista: "Piensa en los acinos serosos y las células centroacinares...", respuesta: "Acinos serosos producen enzimas digestivas (amilasa, lipasa, tripsina). Células centroacinares producen bicarbonato. Los conductos intercalares e intralobulillares transportan la secreción al duodeno." },
    { pregunta: "¿Cómo se regula la secreción de las glándulas salivales y qué componentes tiene la saliva?", pista: "La regulación es nerviosa autónoma...", respuesta: "El parasimpático estimula secreción abundante y acuosa; el simpático produce secreción escasa y viscosa. La saliva contiene agua (99%), amilasa salival, mucina, lisozima, IgA secretora y electrolitos." },
    { pregunta: "Explique el papel de las glándulas sudoríparas ecrinas en la homeostasis.", pista: "Piensa en termorregulación, excreción y pH de la piel...", respuesta: "Son fundamentales para termorregulación por evaporación, excreción de urea e iones, y mantenimiento del pH ácido de la piel (4.5-5.5) como barrera antimicrobiana. Su secreción es merócrina." },
    { pregunta: "¿Qué son los conductos estriados en las glándulas salivales y cuál es su función?", pista: "Las estrías son por pliegues de membrana con mitocondrias...", respuesta: "Son segmentos de los conductos de glándulas salivales mayores con invaginaciones basales y mitocondrias. Modifican la composición iónica de la saliva: reabsorben Na⁺ y secretan K⁺ y HCO₃⁻." },
    { pregunta: "¿Cuál es la diferencia funcional entre glándulas serosas y mucosas?", pista: "Piensa en la consistencia del producto y su utilidad...", respuesta: "Las glándulas serosas producen secreciones acuosas ricas en proteínas y enzimas (ej: amilasa en parótida). Las mucosas producen secreciones viscosas de glucoproteínas (mucinas) con función lubricante y protectora." },
  ],
  1000: [
    { pregunta: "Compare la histología y función de las tres glándulas salivales mayores: parótida, submandibular y sublingual.", pista: "Cada una tiene diferente composición de acinos serosos y mucosos...", respuesta: "PARÓTIDA: 100% serosa, amilasa abundante, conducto de Stenon. SUBMANDIBULAR: mixta (~60% serosa), semilunas de Von Ebner, conducto de Wharton. SUBLINGUAL: predominantemente mucosa, conductillos de Bartolini. Las tres tienen conductos estriados con función iónica." },
    { pregunta: "Analice la fisiopatología de la pancreatitis aguda desde la biología celular de los acinocitos pancreáticos.", pista: "Piensa en activación prematura de zimógenos y papel de los lisosomas...", respuesta: "Factores desencadenantes provocan fusión aberrante de lisosomas con gránulos de zimógeno intracelularmente, activando tripsina prematuramente en cascada. Esto genera autodigestión, necrosis e inflamación sistémica, agravada por el aumento de Ca²⁺ intracelular." },
    { pregunta: "Explique el ciclo secretor completo de una célula acinar pancreática, desde la síntesis hasta la exocitosis.", pista: "Sigue el camino: núcleo → RER → Golgi → vesícula → exocitosis...", respuesta: "1. Transcripción nuclear. 2. Traducción en RER. 3. Procesamiento en RER (glicosilación). 4. Transporte al Golgi. 5. Condensación en gránulos de zimógeno. 6. Almacenamiento apical. 7. CCK y ACh elevan Ca²⁺ → exocitosis merócrina al lumen acinar." },
    { pregunta: "Describa la embriología de las glándulas salivales mayores y las malformaciones posibles.", pista: "Se originan como yemas del epitelio oral ectodérmico...", respuesta: "Entre la 6ª-8ª semana, yemas ectodérmicas invaden el mesénquima de cresta neural bajo influencia de FGF y EGF. Malformaciones: atresia de conductos, quistes de retención, fístulas salivales, aplasia glandular y ranula congénita." },
    { pregunta: "Relacione las características ultraestructurales de las células acinares exocrinas con su función secretora.", pista: "Piensa en qué organelos abundan en células secretoras activas...", respuesta: "RER abundante → síntesis de proteínas/enzimas. Golgi supranuclear desarrollado → empaquetado. Gránulos de zimógeno apicales → almacenamiento. Mitocondrias basales en conductos estriados → bomba Na⁺/K⁺. Técnica de Palade (Nobel 1974) describió este camino." },
    { pregunta: "Explique la histología de la glándula lagrimal y su relación con la protección ocular.", pista: "La glándula lagrimal es de tipo seroso con función lubricante y antimicrobiana...", respuesta: "La glándula lagrimal es tubuloacinar serosa compuesta que produce lágrimas: agua, lisozima, lactoferrina, IgA secretora y lípidos. Su secreción es merócrina regulada por el parasimpático. La lisozima y lactoferrina confieren protección antimicrobiana a la córnea." },
  ]
};

// ============================================================
//  BENEFICIOS
// ============================================================
const BENEFICIOS = [
  {
    titulo: "🌟 Todo o Nada",
    descripcion: "El grupo elige la dificultad (200, 500 o 1000 pts) y responde una pregunta AHORA. Si acierta: DOBLE de puntos. Si falla: 0 puntos.",
    efecto: { tipo: "todo_o_nada" }
  },
  {
    titulo: "⏱️ Tiempo Extra",
    descripcion: "El grupo tiene 20 segundos adicionales para responder la siguiente pregunta de este turno.",
    efecto: { tipo: "tiempo", valor: 20 }
  },
  {
    titulo: "💡 Pista Garantizada",
    descripcion: "La pista estará visible desde el inicio en la siguiente pregunta de este turno.",
    efecto: { tipo: "pista_gratis", valor: true }
  },
  {
    titulo: "📒 Consulta de Apuntes",
    descripcion: "El grupo puede consultar apuntes por 15 segundos antes de responder la siguiente pregunta.",
    efecto: { tipo: "apuntes", valor: true }
  },
{
  titulo: "🛡️ Error Sin Castigo",
  descripcion: "Si la siguiente respuesta es incorrecta o no responde, no pierde puntos; simplemente obtiene 0.",
  efecto: { tipo: "sin_penalizacion", valor: true }
},
  {
    titulo: "🔄 Cambio de Pregunta",
    descripcion: "El grupo puede pedir una pregunta diferente del mismo nivel una sola vez.",
    efecto: { tipo: "cambio_pregunta", valor: true }
  },
];

// ============================================================
//  CASTIGOS
// ============================================================
const CASTIGOS = [
  {
    titulo: "💸 Quitar 200 puntos",
    descripcion: "El grupo pierde 200 puntos. Pero puede intentar una pregunta de 200 pts para evitarlo: si acierta no pierde nada; si falla, pierde 400 pts.",
    efecto: { tipo: "quitar_con_opcion", valor: 200 }
  },
  {
    titulo: "💸 Quitar 500 puntos",
    descripcion: "El grupo pierde 500 puntos. Puede intentar una pregunta de 500 pts para evitarlo: si acierta no pierde nada; si falla, pierde 1000 pts.",
    efecto: { tipo: "quitar_con_opcion", valor: 500 }
  },
  {
    titulo: "💸 Quitar 1000 puntos",
    descripcion: "El grupo pierde 1000 puntos. Puede intentar una pregunta de 1000 pts para evitarlo: si acierta no pierde nada; si falla, pierde 2000 pts.",
    efecto: { tipo: "quitar_con_opcion", valor: 1000 }
  },
  {
    titulo: "🔀 Transferencia al Siguiente Grupo",
    descripcion: "El grupo pierde 300 puntos que son transferidos automáticamente al siguiente grupo en turno. Sin posibilidad de recuperación.",
    efecto: { tipo: "transferencia_siguiente", valor: 300 }
  },
  {
    titulo: "🎯 Transferencia a Elección",
    descripcion: "El grupo pierde 400 puntos. El grupo castigado elige a cuál otro grupo transferir esos puntos.",
    efecto: { tipo: "transferencia_eleccion", valor: 400 }
  },
  {
    titulo: "⏳ Tiempo Reducido",
    descripcion: "El grupo tendrá 15 segundos menos para responder la siguiente pregunta.",
    efecto: { tipo: "tiempo", valor: -15 }
  },
  {
    titulo: "🚫 Sin Pista y perdida",
    descripcion: "El grupo no puede usar la pista en la siguiente pregunta, adicional perdera la mitad de los puntos de la pregunta (si no responde se le restara adicional mitad de puntos del valor final de la pregunta).",
    efecto: { tipo: "sin_pista", valor: true }
  },
  {
    titulo: "🤐 Sin Ayuda del Grupo",
    descripcion: "El lider debe responder solo, sin consultar a sus compañeros.",
    efecto: { tipo: "sin_ayuda", valor: true }
  },
  {
    titulo: "🔇 Solo Habla Uno",
    descripcion: "Solo un integrante puede hablar durante toda la respuesta de la siguiente pregunta.",
    efecto: { tipo: "solo_uno", valor: true }
  },
];
