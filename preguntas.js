// ============================================================
//  BANCO DE PREGUNTAS - Glándulas Exocrinas
// ============================================================

const PREGUNTAS = {
  200: [
  { pregunta: "(200-01) - ¿Cuáles son las tres formas principales de piezas terminales en las glándulas exocrinas?", pista: "Saco pequeño, saco amplio y tubo.", respuesta: "Acinares, alveolares y tubulares." },
  { pregunta: "(200-02) - ¿Qué son las piezas terminales o end-pieces?", pista: "Ahí empieza todo.", respuesta: "Son las unidades funcionales y estructurales básicas donde ocurre la síntesis y secreción inicial del producto glandular." },
  { pregunta: "(200-03) - ¿Cómo es el lumen de una unidad acinar?", pista: "Casi no se nota.", respuesta: "Es estrecho." },
  { pregunta: "(200-04) - ¿Cómo es el lumen de una unidad alveolar?", pista: "Sirve para almacenar.", respuesta: "Es amplio y dilatado." },
  { pregunta: "(200-05) - ¿Cómo es el lumen de una unidad tubular?", pista: "No cambia mucho a lo largo del tubo.", respuesta: "Tiene un diámetro relativamente uniforme en toda su extensión." },
  { pregunta: "(200-06) - ¿Qué tipo de secreción producen las células serosas?", pista: "Enzimas y agua.", respuesta: "Una secreción acuosa rica en proteínas y casi sin mucinas." },
  { pregunta: "(200-07) - ¿Qué tipo de secreción producen las células mucosas?", pista: "Lubrica y protege.", respuesta: "Una secreción espesa y viscosa rica en mucinas." },
  { pregunta: "(200-08) - ¿Qué tipo de secreción producen los meibocitos?", pista: "Párpado.", respuesta: "Secreción lipídica." },
  { pregunta: "(200-09) - ¿Qué mecanismo de secreción libera el producto por exocitosis sin dañar la célula?", pista: "La célula sigue viva.", respuesta: "El merocrino." },
  { pregunta: "(200-10) - ¿Qué mecanismo de secreción implica liberar una porción apical de la célula?", pista: "Sale con un pedazo de célula.", respuesta: "El apocrino." },
  { pregunta: "(200-11) - ¿Qué mecanismo de secreción implica la desintegración completa de la célula?", pista: "La célula se sacrifica.", respuesta: "El holocrino." },
  { pregunta: "(200-12) - ¿Qué hacen las células mioepiteliales?", pista: "Funcionan como una mano que exprime.", respuesta: "Se contraen para ayudar a expulsar la secreción hacia los conductos." },
  { pregunta: "(200-13) - ¿Qué glándula produce meibum?", pista: "Hace parte de la película lagrimal.", respuesta: "La glándula de Meibomio." },
  { pregunta: "(200-14) - ¿Qué glándula produce agua, proteínas e IgA para la superficie ocular?", pista: "Lágrima.", respuesta: "La glándula lagrimal." },
  { pregunta: "(200-15) - ¿Qué hormona estimula la producción de leche?", pista: "Produce, no eyecta.", respuesta: "La prolactina." },
  { pregunta: "(200-16) - ¿Qué hormona favorece la eyección de la leche?", pista: "Contrae mioepitelio.", respuesta: "La oxitocina." },
  { pregunta: "(200-17) - ¿Qué tipo de glándula es la próstata según su organización?", pista: "Líquido seminal.", respuesta: "Exocrina compuesta tubuloalveolar." },
  { pregunta: "(200-18) - ¿Qué tipo de glándula es la glándula mamaria según su organización?", pista: "Leche.", respuesta: "Compuesta tubuloalveolar." },
  { pregunta: "(200-19) - ¿Cuál es la unidad secretora principal de la glándula mamaria?", pista: "Almacena.", respuesta: "La unidad alveolar." },
  { pregunta: "(200-20) - ¿Qué tipo de glándula es la glándula lagrimal?", pista: "Ojo.", respuesta: "Compuesta tubuloacinar de predominio seroso." },
  { pregunta: "(200-21) - ¿Qué tipo de glándula es la glándula de Meibomio?", pista: "Párpado y lípidos.", respuesta: "Una glándula sebácea modificada, compuesta tubuloacinar." },
  { pregunta: "(200-22) - ¿Qué tipo de glándula es el páncreas exocrino en su componente secretor predominante?", pista: "Enzimas digestivas.", respuesta: "Acinar compuesta o funcionalmente tubuloacinar." },
  { pregunta: "(200-23) - ¿Qué rasgo del núcleo caracteriza a las células mucosas?", pista: "La mucina lo empuja.", respuesta: "El núcleo está desplazado hacia la base." },
  { pregunta: "(200-24) - ¿Qué rasgo morfológico caracteriza a las células serosas?", pista: "Proteína lista para salir.", respuesta: "Son piramidales y tienen gránulos en el polo apical." },
  { pregunta: "(200-25) - ¿Qué función cumple el meibum en la película lagrimal?", pista: "Evita que el ojo se seque rápido.", respuesta: "Disminuye la evaporación y ayuda a estabilizarla." },
  { pregunta: "(200-26) - ¿Qué secreta la próstata?", pista: "No produce espermatozoides, produce parte del fluido.", respuesta: "PSA, citrato, poliaminas y otras moléculas del líquido seminal." },
  { pregunta: "(200-27) - ¿Qué ejemplo clásico de glándula tubular menciona la revisión?", pista: "Piel.", respuesta: "Las glándulas sudoríparas." },
  { pregunta: "(200-28) - ¿Qué otro ejemplo de glándula tubular menciona la revisión?", pista: "Útero.", respuesta: "Las glándulas uterinas." },
  { pregunta: "(200-29) - ¿Qué secreción general produce el páncreas exocrino?", pista: "Digestión.", respuesta: "Enzimas digestivas y un componente acuoso rico en bicarbonato." },
  { pregunta: "(200-30) - ¿Cuál es la función general de una glándula exocrina?", pista: "No va directo a sangre.", respuesta: "Producir y liberar secreciones hacia una superficie o cavidad corporal." }
  ],
  500: [
  { pregunta: "(500-01) - ¿Cuál es la diferencia principal entre un ácino y un alvéolo?", pista: "Uno secreta rápido; el otro guarda.", respuesta: "El ácino tiene lumen estrecho y se asocia con secreción rápida; el alvéolo tiene lumen amplio y capacidad de almacenamiento." },
  { pregunta: "(500-02) - ¿Por qué la glándula mamaria se organiza en unidades alveolares?", pista: "La leche no sale apenas se fabrica.", respuesta: "Porque necesita acumular la leche en un lumen amplio antes de liberarla ante un estímulo." },
  { pregunta: "(500-03) - ¿Por qué las unidades acinares son adecuadas para glándulas serosas?", pista: "Homeostasis constante.", respuesta: "Porque favorecen síntesis y secreción rápida y continua de fluidos ricos en proteínas." },
  { pregunta: "(500-04) - ¿Qué relación estructura-función tiene la glándula lagrimal?", pista: "Serosa, rápida y defensiva.", respuesta: "Sus acinos serosos permiten secreción rápida y continua de un fluido acuoso-proteico que hidrata y protege la superficie ocular." },
  { pregunta: "(500-05) - ¿Qué relación estructura-función tiene la glándula de Meibomio?", pista: "Sin esa capa el ojo pierde agua.", respuesta: "Sus acinos permiten acumulación y liberación de lípidos que forman la capa lipídica de la lágrima y reducen su evaporación." },
  { pregunta: "(500-06) - ¿Por qué el páncreas exocrino puede clasificarse como túbulo-acinar?", pista: "Los ductos no son adornos.", respuesta: "Porque combina acinos serosos con un sistema ductal que también participa activamente en la secreción de fluido y bicarbonato." },
  { pregunta: "(500-07) - ¿Qué diferencia histológica básica hay entre células serosas y mucosas?", pista: "Proteína frente a mucina.", respuesta: "Las serosas tienen gránulos apicales y núcleo redondo; las mucosas tienen mucina abundante y núcleo basal aplanado." },
  { pregunta: "(500-08) - ¿Por qué la secreción mucosa suele necesitar más apoyo de células mioepiteliales?", pista: "Lo viscoso sale peor.", respuesta: "Porque es más densa y viscosa, por lo que requiere más ayuda contráctil para ser expulsada." },
  { pregunta: "(500-09) - ¿Qué hacen los conductos de la glándula salival además de transportar secreción?", pista: "También corrigen el producto final.", respuesta: "Modifican activamente la composición iónica de la saliva." },
  { pregunta: "(500-10) - ¿Qué hacen los conductos de la glándula lagrimal?", pista: "El ducto también trabaja.", respuesta: "Modifican la secreción y aportan parte del volumen final con fluidos ricos en potasio y cloro." },
  { pregunta: "(500-11) - ¿Qué hacen los conductos del páncreas exocrino?", pista: "Sin bicarbonato, mala idea para el duodeno.", respuesta: "Aportan gran parte del volumen final y secretan bicarbonato para neutralizar el ácido que llega al intestino delgado." },
  { pregunta: "(500-12) - ¿Qué particularidad tienen los conductos de la glándula mamaria?", pista: "Transportan sin editar mucho.", respuesta: "Son impermeables a los principales constituyentes de la leche y no tienen una función secretora o resortiva importante." },
  { pregunta: "(500-13) - ¿Qué reemplaza a las células mioepiteliales en la próstata para ayudar a expulsar la secreción?", pista: "La próstata juega con otra alineación.", respuesta: "Las células basales y el estroma fibromuscular." },
  { pregunta: "(500-14) - ¿Qué ventaja funcional tiene el lumen amplio alveolar en la próstata?", pista: "Secreción a demanda.", respuesta: "Permite acumular secreción antes de liberarla durante la eyaculación." },
  { pregunta: "(500-15) - ¿Qué función general tienen las unidades tubulares?", pista: "Conducen y ajustan.", respuesta: "Facilitan conducción eficiente de la secreción y, según la glándula, modificación por reabsorción o adición de iones." },
  { pregunta: "(500-16) - ¿Qué diferencia funcional general existe entre unidades acinares y tubulares?", pista: "Fabricar frente a fabricar y ajustar.", respuesta: "Las acinares destacan en síntesis y secreción rápida; las tubulares además resaltan por conducción y modificación del fluido." },
  { pregunta: "(500-17) - ¿Qué diferencia existe entre glándulas con ductos compuestos y glándulas con ductos simples?", pista: "Árbol grande contra camino corto.", respuesta: "Las compuestas presentan una red ductal jerárquica ramificada; las simples tienen trayectos más cortos y menos complejos." },
  { pregunta: "(500-18) - Menciona una glándula con red ductal compuesta.", pista: "Grandes y ramificadas.", respuesta: "Por ejemplo, la salival, la lagrimal, el páncreas exocrino o la mamaria." },
  { pregunta: "(500-19) - Menciona una glándula con red ductal simple.", pista: "Menos jerarquía.", respuesta: "Por ejemplo, la meibomiana, la sebácea, la sudorípara o la uterina." },
  { pregunta: "(500-20) - ¿Qué relación estructura-función tiene la glándula mamaria?", pista: "Produce, guarda y luego expulsa.", respuesta: "La organización alveolar y la regulación hormonal permiten producir, almacenar y liberar leche de manera controlada." },
  { pregunta: "(500-21) - ¿Qué relación estructura-función tiene la próstata?", pista: "Acumula y luego expulsa.", respuesta: "La organización tubuloalveolar y el estroma fibromuscular permiten producir, acumular y expulsar fluido prostático hacia la uretra." },
  { pregunta: "(500-22) - ¿Qué papel tiene la oxitocina en glándulas con mioepitelio funcional?", pista: "Aprieta para sacar.", respuesta: "Estimula la contracción de las células mioepiteliales para facilitar la expulsión de la secreción." },
  { pregunta: "(500-23) - ¿Qué papel tiene la prolactina en la glándula mamaria?", pista: "Produce, no eyecta.", respuesta: "Estimula la producción de leche por las células secretoras alveolares." },
  { pregunta: "(500-24) - ¿Cuál es la función principal de la secreción mucosa?", pista: "Moco con propósito.", respuesta: "Lubricación y protección." },
  { pregunta: "(500-25) - ¿Cuál es la función principal de la secreción serosa?", pista: "Agua con proteínas.", respuesta: "Aportar un fluido acuoso rico en proteínas, enzimas u otras moléculas funcionales." },
  { pregunta: "(500-26) - ¿Cuál es la función principal de la secreción lipídica de Meibomio?", pista: "Sella la superficie.", respuesta: "Disminuir la evaporación de la lágrima y estabilizar la película lagrimal." },
  { pregunta: "(500-27) - ¿Qué ventaja tiene un lumen estrecho en un ácino?", pista: "No está hecho para guardar.", respuesta: "Favorece secreción rápida y continua en lugar de almacenamiento prolongado." },
  { pregunta: "(500-28) - ¿Qué ventaja tiene un lumen amplio en una unidad alveolar?", pista: "Reservorio.", respuesta: "Permite almacenar grandes volúmenes de secreción antes de liberarla." },
  { pregunta: "(500-29) - ¿Qué diferencia funcional existe entre la glándula lagrimal y la de Meibomio dentro de la película lagrimal?", pista: "Una hidrata, la otra sella.", respuesta: "La lagrimal aporta la fase acuosa-proteica e inmunológica, mientras la de Meibomio aporta la fase lipídica." },
  { pregunta: "(500-30) - ¿Por qué el contenido de la secreción influye en la organización de los ductos?", pista: "Agua obliga más trabajo que grasa.", respuesta: "Porque las secreciones acuosas suelen requerir modificación iónica y manejo de agua, mientras las lipídicas requieren menos ajuste durante el trayecto." }
  ],
  1000: [
   { pregunta: "(1000-01) - Explica por qué ácino y alvéolo no deben usarse como sinónimos.", pista: "La clave está en la luz y en el almacenamiento.", respuesta: "Porque el ácino tiene lumen estrecho y se asocia a secreción rápida y continua, mientras el alvéolo tiene lumen amplio, permite acumulación y libera el producto ante un estímulo específico." },
  { pregunta: "(1000-02) - Justifica por qué la glándula mamaria necesita prolactina y oxitocina.", pista: "Fabricar no es lo mismo que expulsar.", respuesta: "La prolactina estimula la producción de leche en las células secretoras alveolares, y la oxitocina estimula la contracción de las células mioepiteliales para su eyección." },
  { pregunta: "(1000-03) - ¿Por qué la próstata no necesita células mioepiteliales para expulsar su secreción?", pista: "Aquí manda más el entorno que el mioepitelio.", respuesta: "Porque carece de ellas y utiliza el estroma fibromuscular y las células basales para apoyar la expulsión del contenido hacia los conductos." },
  { pregunta: "(1000-04) - Relaciona la secreción holocrina con la función de la glándula de Meibomio.", pista: "El sacrificio celular tiene sentido funcional.", respuesta: "La secreción holocrina permite liberar una cantidad importante de lípidos, necesarios para formar una capa que reduzca la evaporación de la lágrima." },
  { pregunta: "(1000-05) - ¿Por qué el páncreas exocrino rompe la idea de que los conductos solo transportan?", pista: "Ducto protagonista.", respuesta: "Porque sus conductos secretan una parte importante del fluido y bicarbonato del jugo pancreático, modificando de forma decisiva el producto final." },
  { pregunta: "(1000-06) - ¿Qué ventaja funcional tiene que los conductos salivales modifiquen iones?", pista: "La saliva final no sale lista desde el acino.", respuesta: "Permite ajustar tonicidad, pH y composición final de la saliva según las necesidades fisiológicas." },
  { pregunta: "(1000-07) - Compara la finalidad funcional de una glándula acinar serosa con una glándula alveolar.", pista: "Continuidad contra reserva.", respuesta: "La acinar serosa se orienta a secreción continua para homeostasis; la alveolar se orienta a acumulación y liberación episódica cuando se requiere." },
  { pregunta: "(1000-08) - ¿Por qué las glándulas tubulares pueden cumplir funciones homeostáticas sin tener lumen amplio?", pista: "Muchas pequeñas hacen el trabajo grande.", respuesta: "Porque existen en gran número y su producción conjunta compensa la menor capacidad de almacenamiento de cada unidad individual." },
  { pregunta: "(1000-09) - Relaciona el contenido proteico o lipídico con el mecanismo apocrino de secreción.", pista: "No todo sale fácil por exocitosis.", respuesta: "Las secreciones con componentes más complejos, como proteínas y lípidos, pueden requerir liberación de parte del citoplasma apical, lo que se ajusta al mecanismo apocrino." },
  { pregunta: "(1000-10) - ¿Por qué las glándulas meibomianas y sebáceas necesitan poca modificación ductal?", pista: "Menos fase acuosa, menos edición.", respuesta: "Porque producen secreciones principalmente lipídicas, con escasa participación de agua e iones, por lo que no requieren grandes ajustes durante el trayecto." },
  { pregunta: "(1000-11) - Explica por qué la estructura ductal también forma parte de la relación estructura-función.", pista: "El trayecto cambia el producto.", respuesta: "Porque los conductos no solo transportan; en varias glándulas modifican volumen, composición iónica y características finales de la secreción." },
  { pregunta: "(1000-12) - ¿Qué relación existe entre necesidad de almacenamiento y selección de unidad alveolar?", pista: "Lactancia y eyaculación son buenas pistas.", respuesta: "Cuando la glándula necesita acumular la secreción antes de liberarla, se favorece una organización alveolar con lumen amplio." },
  { pregunta: "(1000-13) - Explica por qué el páncreas exocrino puede parecer acinar compuesto en histología simple, pero entenderse mejor como túbulo-acinar compuesto en términos funcionales.", pista: "Mirar no basta; hay que interpretar.", respuesta: "Porque aunque predominan acinos serosos en la observación histológica, los conductos participan tan activamente en la secreción que funcionalmente forman parte esencial del proceso secretor." },
  { pregunta: "(1000-14) - ¿Cómo ayuda la relación estructura-función al diagnóstico de alteraciones glandulares?", pista: "Morfología con consecuencias clínicas.", respuesta: "Permite correlacionar cambios histológicos en unidades secretoras o conductos con alteraciones en composición, cantidad o liberación de la secreción." },
  { pregunta: "(1000-15) - ¿Por qué la glándula uterina cambia su actividad con el ciclo hormonal?", pista: "El útero trabaja con agenda hormonal.", respuesta: "Porque su función depende de regulación hormonal, especialmente progesterona, para adaptar la secreción a la preparación endometrial y a la implantación." },
  { pregunta: "(1000-16) - Compara la función homeostática de glándula lagrimal y glándula de Meibomio.", pista: "Una hidrata y protege; la otra sella.", respuesta: "La glándula lagrimal aporta el componente acuoso-proteico e inmunológico de la película lagrimal, mientras la de Meibomio aporta el componente lipídico que evita evaporación." },
  { pregunta: "(1000-17) - Formula una idea integradora sobre la revisión de glándulas exocrinas.", pista: "La estructura no adorna; manda.", respuesta: "La forma de las piezas terminales y la organización de los conductos determinan qué se secreta, cómo se modifica, cómo se libera y, en consecuencia, la función específica de cada glándula." },
  { pregunta: "(1000-18) - Explica por qué las glándulas con secreción homeostática constante tienden a ser acinares y no alveolares.", pista: "Constante contra episódica.", respuesta: "Porque las acinares están adaptadas a secreción continua sin necesidad de gran almacenamiento, mientras que las alveolares favorecen reserva y liberación en momentos específicos." },
  { pregunta: "(1000-19) - ¿Por qué la secreción de la glándula mamaria combina mecanismos merocrino y apocrino?", pista: "No todo el contenido sale igual.", respuesta: "Porque libera componentes acuosos y algunas proteínas por rutas compatibles con secreción merocrina, y componentes lipídicos o más complejos mediante participación apical propia del mecanismo apocrino." },
  { pregunta: "(1000-20) - Compara el papel del ducto en glándula mamaria y en páncreas exocrino.", pista: "Uno guarda; el otro transforma.", respuesta: "En la glándula mamaria el ducto transporta y almacena sin modificar mucho la leche, mientras que en el páncreas participa activamente en la secreción de fluidos y bicarbonato." },
  { pregunta: "(1000-21) - ¿Por qué la presencia o ausencia de mioepitelio depende de la necesidad funcional de la glándula?", pista: "Si hace falta exprimir, aparece.", respuesta: "Porque el mioepitelio aparece cuando la secreción requiere ayuda contráctil para desplazarse, especialmente si es más densa o si debe eyectarse con fuerza." },
  { pregunta: "(1000-22) - Explica por qué las glándulas lipídicas tienen menor participación de agua e iones en comparación con glándulas serosas.", pista: "Menos agua, menos canales en acción.", respuesta: "Porque su producto principal está constituido por lípidos y no por un fluido acuoso, de modo que requieren menos transporte iónico y menor modificación hídrica." },
  { pregunta: "(1000-23) - ¿Cómo se relaciona el lumen amplio alveolar con la función reproductiva o de nutrición en próstata y mama?", pista: "Guardar para usar cuando toque.", respuesta: "Permite acumular secreciones complejas para liberarlas en el momento oportuno, ya sea durante la eyaculación o la lactancia." },
  { pregunta: "(1000-24) - Explica por qué las glándulas tubulares no necesitan almacenar tanto producto como las alveolares.", pista: "Trabajan en equipo.", respuesta: "Porque actúan como múltiples unidades distribuidas que secretan de forma coordinada, y por eso cada una no requiere gran capacidad de reservorio." },
  { pregunta: "(1000-25) - ¿Qué implicación funcional tiene que el páncreas exocrino reciba regulación hormonal y neural?", pista: "Digestión bajo control doble.", respuesta: "Que puede ajustar su secreción de enzimas y bicarbonato a las necesidades digestivas mediante integración de estímulos nerviosos y hormonales." },
  { pregunta: "(1000-26) - Compara la finalidad del componente acuoso lagrimal con la finalidad del componente lipídico lagrimal.", pista: "Uno moja; el otro evita que se pierda.", respuesta: "El componente acuoso hidrata, protege y aporta defensa inmunológica, mientras el componente lipídico reduce evaporación y estabiliza la película lagrimal." },
  { pregunta: "(1000-27) - ¿Por qué en histología glandular no basta con decir que una glándula es compuesta?", pista: "Compuesta sola se queda corta.", respuesta: "Porque además de la ramificación ductal importa la forma de la unidad secretora, el tipo celular, el mecanismo de secreción y la función del ducto." },
  { pregunta: "(1000-28) - Explica cómo la composición del producto secretado puede influir en el mecanismo de secreción.", pista: "El producto manda el método.", respuesta: "Los productos más acuosos suelen liberarse por mecanismos merocrinos, mientras que secreciones con más lípidos o componentes complejos pueden requerir apocrinia u holocrinia." },
  { pregunta: "(1000-29) - ¿Por qué el estudio de conductos y end-pieces es esencial para entender enfermedad glandular?", pista: "El problema puede estar en la fábrica o en la carretera.", respuesta: "Porque las alteraciones pueden originarse tanto en la producción del secreto como en su modificación o transporte, afectando el producto final y la función del órgano." },
  { pregunta: "(1000-30) - Construye una conclusión integradora entre forma, secreción y función en glándulas exocrinas.", pista: "Todo está conectado: forma, salida y función.", respuesta: "La morfología de la unidad secretora, el tipo celular presente, el mecanismo de liberación y la arquitectura ductal se combinan para definir la composición del producto y el papel fisiológico de cada glándula." }
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
