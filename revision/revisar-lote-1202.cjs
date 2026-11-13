const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1202',fecha:'2026-11-13',records:[
 [6331,['59'],['II-2'],['interbloqueo','deadlock','exclusión mutua','espera circular','no apropiación'],[
  src('https://uobdv.github.io/Design-Verification/Supplementary/System_Deadlocks-Four_necessary_and_sufficient_conditions_for_deadlock.pdf','Coffman, Elphick y Shoshani, “System Deadlocks”, ACM Computing Surveys 3(2), 1971: cuatro condiciones necesarias, incluidas exclusión mutua, hold-and-wait, no preemption y circular wait.'),
  src('https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk','ITIC Academy, bloque 27 Sistemas operativos, actualización 2026: fundamentos y procesos; cotejo temático.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 59: fundamentos y evolución de sistemas operativos.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.2: fundamentos y administración de sistemas operativos.')
 ],null,'La opción D (espera ocupada/busy waiting) no es una de las cuatro condiciones de Coffman. Las condiciones necesarias son exclusión mutua, retención y espera, ausencia de expulsión (no apropiación) y espera circular. “Espera ocupada” es una técnica de espera activa y no debe confundirse con retención y espera.', 'vigente'],
 [6332,['42'],['II-15'],['decisión multicriterio','ponderación de criterios','método Delphi','entropía de Shannon'],[
  src('https://pmc.ncbi.nlm.nih.gov/articles/PMC7490576/','Revisión académica revisada por pares sobre métodos de ponderación MCDA/MCDM: clasifica Delphi entre métodos subjetivos y entropía de Shannon entre los objetivos para asignar pesos a criterios.'),
  src('https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk','ITIC Academy, bloque 17 Adquisición de sistemas y rentabilidad de inversiones, actualización 2026: alternativas y decisión multicriterio; cotejo curricular.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 42: rentabilidad y evaluación de inversiones TIC.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.15: evaluación de alternativas, viabilidad y costes de proyectos informáticos.')
 ],null,'La opción C combina dos métodos reconocidos para obtener pesos: Delphi elicita juicios de expertos (subjetivo) y entropía calcula pesos a partir de la información/variabilidad de los datos (objetivo). PROMETHEE y el método lexicográfico son métodos de ordenación/agregación de alternativas, no una pareja de métodos de asignación de pesos.', 'vigente'],
 [6333,['65'],['III-12'],['Geolocation API','Navigator.geolocation','JavaScript','contexto seguro'],[
  src('https://www.w3.org/TR/geolocation/','W3C Geolocation Recommendation, IDL: declara Navigator.geolocation; la especificación vigente exige contexto seguro para exponer la API.'),
  src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30 Tecnologías de sistemas de información, actualización 2026: desarrollo web, APIs y JavaScript; cotejo curricular.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura y desarrollo web, scripts de cliente y servicios.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.12: aplicaciones web, desarrollo front-end y tecnologías web.')
 ],{texto:'En la API web de geolocalización, el objeto de Navigator que expone las operaciones para obtener y observar la posición del usuario es:'},'La respuesta es D: navigator.geolocation (accesible como window.navigator.geolocation). Se reemplaza “API de HTML5” por “API web de geolocalización”, ya que es una especificación W3C separada de HTML; la interfaz Navigator declara el atributo geolocation. La API solo se expone en contextos seguros como HTTPS.', 'corregida'],
 [6334,['115'],['IV-8'],['IPv4','CIDR','subred /26','dirección de red','broadcast','TEST-NET-2'],[
  src('https://www.rfc-editor.org/rfc/rfc4632.html','RFC 4632, Classless Inter-domain Routing (CIDR): interpreta el prefijo /26 como 26 bits de red y 6 bits de host.'),
  src('https://www.rfc-editor.org/rfc/rfc5737.html','RFC 5737: 198.51.100.0/24 es TEST-NET-2, reservado para documentación; no debe anunciarse ni utilizarse como rango público de producción.'),
  src('https://drive.google.com/file/d/1Nbz8x6yaWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43 Protocolos, actualización 2026: IPv4/IPv6, direccionamiento y protocolos; cotejo curricular.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 115: redes IP, arquitectura y encaminamiento.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, técnicas de transmisión y protocolos.')
 ],{texto:'En el cálculo convencional de capacidad de host de una subred IPv4 /26, excluyendo las direcciones de red y de broadcast, ¿cuántas direcciones quedan? (El bloque 198.51.100.0/24 se reserva para documentación.)'},'Un prefijo /26 deja 6 bits de host: 2^6 = 64 direcciones, menos red y broadcast = 62. La respuesta D es la capacidad de host de la subred lógica. Se aclara que 198.51.100.0/24 es TEST-NET-2 reservado para ejemplos y no debe asignarse a redes públicas reales.', 'corregida'],
 [6335,['37','88'],['III-2'],['Scrum','Scrum of Scrums','Daily Scrum','escalado ágil','coordinación entre equipos'],[
  src('https://www.pmi.org/microsites/disciplined-agile/team-lead/practice-scrum-of-scrums','PMI Disciplined Agile, práctica Scrum of Scrums: selecciona una persona representante por equipo; la coordinación puede realizarse a diario o con menor frecuencia.'),
  src('https://agilealliance.org/glossary/scrum-of-scrums/','Agile Alliance, glosario Scrum of Scrums: un miembro designado por cada subequipo participa en la reunión de coordinación entre equipos.'),
  src('https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf','Scrum Guide 2020: Daily Scrum es un evento diario de 15 minutos para los Developers del Scrum Team; no establece un representante por equipo ni define Scrum of Scrums como evento del framework.'),
  src('https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk','ITIC Academy, bloque 15 Metodologías ágiles y ciclos de vida, actualización 2026: Scrum, Kanban y métodos ágiles; cotejo curricular.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 37 y 88: metodologías ágiles, Scrum y Kanban.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.2: gestión, planificación y metodologías de desarrollo.')
 ],{texto:'En una práctica de escalado ágil para coordinar varios equipos Scrum, ¿cómo se denomina la reunión de coordinación entre la que participa normalmente una persona representante de cada equipo y que puede celebrarse a diario?'},'La respuesta es B, Scrum of Scrums. Se corrige el enunciado para distinguirla del Daily Scrum: la Scrum Guide 2020 reserva ese evento diario a los Developers del Scrum Team; Scrum of Scrums es una práctica de coordinación entre equipos, cuyo ritmo puede ser diario o menos frecuente y cuyo representante es una convención de escalado, no una regla del Scrum Guide.', 'corregida']
]});
