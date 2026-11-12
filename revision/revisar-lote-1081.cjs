const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ituwcdma='https://www.itu.int/ITU-D/tech/FORMER_PAGE_IMT2000/Correspondence_Terminology.html',itu3g='https://www.itu.int/ITU-D/tech/MobileCommunications/IMT_INTRODUCING/IMT_Introducing.html';
const dab='https://www.boe.es/buscar/act.php?id=BOE-A-1999-16218&p=20261105&tn=0',dabchange='https://www.boe.es/buscar/act.php?id=BOE-A-2026-23177&p=20261105&tn=0';
const lgt='https://www.boe.es/buscar/act.php?id=BOE-A-2022-10757&tn=0',radio='https://www.boe.es/buscar/act.php?id=BOE-A-2017-2460&tn=0';
const grooming='https://www.incibe.es/sites/default/files/2024-03/guia-suplantacion-de-identidad-en-el-ambito-del-menor.pdf',cp='https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444&p=20260409&tn=0';
const vuln='https://csrc.nist.gov/glossary/term/vulnerability',threat='https://csrc.nist.gov/glossary/term/threat';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5726,[123],['IV-15'],['W-CDMA','WCDMA','UMTS','3G','IMT-2000','acceso radio'],[
  ref(ituwcdma,'UIT enumera WCDMA/UMTS bajo la interfaz IMT-2000 CDMA Direct Spread, denominación radioeléctrica de la familia IMT-2000.'),
  ref(itu3g,'UIT-D: IMT-2000 designa los sistemas móviles de tercera generación (3G); UMTS utiliza la interfaz radio W-CDMA.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 123: comunicaciones móviles y generaciones de tecnologías de telefonía móvil.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.15: sistemas de comunicaciones móviles y generaciones.'),
 ],null,'Corregida, respuesta D (tercera generación). W-CDMA es el método de acceso/interfaz radio de UTRA-FDD en UMTS, encuadrado en la familia IMT-2000/3G. Se reemplaza “multiplexación” por “acceso múltiple” y “utilizó por primera vez” por una formulación inequívoca de pertenencia de UMTS a 3G; no se hace una afirmación histórica de primer despliegue comercial. A1-123/A2-IV-15.','corregida'],
 [5727,[129],['IV-7'],['DAB','radiodifusión sonora digital terrestre','Red FU-E','red de frecuencia única','Plan técnico nacional','BOE-A-2026-23177'],[
  ref(dab,'Real Decreto 1287/1999, Plan técnico consolidado consultado a 05-11-2026, art. 3.1.a: Red FU-E identifica la red SFN nacional para programas nacionales sin desconexiones. En la fecha de corte del lote (12-11-2026), la nueva regulación de 2026 aún no había llegado a la fecha general de entrada en vigor de la derogación diferida.'),
  ref(dabchange,'Real Decreto 958/2026, de 4 de noviembre: publicado en noviembre de 2026 y establece medidas DAB+; la derogación de RD 1287/1999 produce efectos el 06-02-2027 y prevé que el uso de FU-E sea determinado por orden. La denominación FU-E no se confunde con un uso futuro ya efectivo.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 129: regulación sectorial de telecomunicaciones; encaje temático indirecto, pues el epígrafe no menciona DAB ni radiodifusión sonora.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios no guiados y parámetros; encaje por transmisión radioeléctrica, sin mención literal al Plan DAB.'),
 ],null,'Corregida, respuesta B (Red FU-E). El art. 3.1.a del Plan técnico denomina FU-E a la red nacional de frecuencia única destinada a programas sin desconexiones territoriales. Se fecha expresamente la pregunta al 12-11-2026: el RD 958/2026 ya se había publicado, pero la derogación diferida del plan anterior no surte efecto hasta 06-02-2027, y el uso futuro de FU-E queda sujeto a orden ministerial. A1-129/A2-IV-7 son correspondencias regulatorias/técnicas próximas, no epígrafes literales sobre DAB.','corregida'],
 [5728,[129],['IV-11'],['Ley 11/2022','dominio público radioeléctrico','autorización general','uso especial','notificación','artículo 88.4'],[
  ref(lgt,'Ley 11/2022, texto consolidado vigente, art. 88.4: en los supuestos indicados de uso especial a través de redes públicas, la autorización general se entiende concedida tras la notificación conforme a procedimiento y requisitos establecidos por orden, sin perjuicio de tasas; si faltan requisitos, la SETID puede declarar no realizada la notificación.'),
  ref(radio,'Real Decreto 123/2017, Reglamento de uso del dominio público radioeléctrico: desarrolla los títulos habilitantes y el procedimiento de autorización general para uso especial.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 129: normas reguladoras de las telecomunicaciones.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.11: redes inalámbricas, seguridad y normativa reguladora.'),
 ],null,'Corregida, respuesta C. Se limita el enunciado al régimen de autorización general para el uso especial del espectro previsto en el art. 88.4 de la Ley 11/2022. En esos supuestos se entiende concedida con la notificación, siguiendo el procedimiento y requisitos reglamentarios y abonando las tasas aplicables; no es un título universal para todo uso radioeléctrico. El plazo general de seis semanas para otorgar títulos no es un plazo de resolución de estas notificaciones. A1-129/A2-IV-11.','corregida'],
 [5729,[125,127],['IV-12'],['grooming','captación en línea','menores','explotación sexual','chantaje sexual','ingeniería social'],[
  ref(grooming,'INCIBE, guía de suplantación en el ámbito del menor: describe el grooming como el engaño de una persona que se hace pasar por alguien atractivo, gana la confianza de un menor y puede chantajearlo con fines sexuales. Hacerse pasar por menor es una táctica posible, no elemento necesario de toda conducta de grooming.'),
  ref(cp,'Código Penal, texto consolidado a 09-04-2026, art. 183 ter: tipifica conductas específicas de contacto telemático con menores de 16 años con fines sexuales y bajo elementos legales concretos. “Grooming” en sentido educativo no sustituye ni amplía por sí solo la descripción de un tipo penal.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 125 y 127: seguridad en redes/ciberseguridad; correspondencia temática general, no epígrafe que defina grooming.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad en redes y seguridad en el puesto del usuario.'),
 ],null,'Corregida, respuesta A (grooming). Se sustituye una descripción demasiado restrictiva —que el adulto tenga que fingir ser menor y llegar necesariamente al chantaje— por la captación online de un menor mediante engaño/creación de confianza con finalidad de abuso o explotación sexual. La suplantación y la sextorsión pueden aparecer, pero no son requisitos definitorios universales. Se distingue la expresión educativa de los elementos específicos del art. 183 ter CP. A1-125/A1-127/A2-IV-12.','corregida'],
 [5730,[127],['IV-12'],['vulnerabilidad','amenaza','debilidad','seguridad de la información','phishing'],[
  ref(vuln,'Glosario NIST CSRC, definición basada en fuentes normativas: vulnerabilidad es una debilidad del sistema, procedimientos, controles o implementación susceptible de explotación o activación por una fuente de amenaza.'),
  ref(threat,'Glosario NIST CSRC: amenaza es una circunstancia/evento potencialmente dañino y una fuente de amenaza puede explotar una vulnerabilidad; se distinguen conceptos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 127: ciberseguridad y estrategia nacional.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad en redes, riesgos y medidas de protección.'),
 ],null,'Corregida, respuesta C (vulnerabilidad). Se concreta la definición como debilidad de un sistema, control o implementación que podría ser explotada o activada por una fuente de amenaza, distinguiendo vulnerabilidad de amenaza. Se corrige además la errata “Phising” por “Phishing” en una opción. A1-127/A2-IV-12.','corregida'],
];
const edits={
 5726:{texto:'¿A qué generación de comunicaciones móviles pertenece UMTS, cuyo acceso radio terrestre UTRA-FDD emplea W-CDMA?',respuesta_correcta:3},
 5727:{texto:'Según el art. 3.1.a del Plan técnico nacional vigente a 12 de noviembre de 2026, ¿cómo se denomina la red de frecuencia única estatal prevista para programas nacionales sin desconexiones territoriales?',respuesta_correcta:1},
 5728:{texto:'En los supuestos de uso especial del dominio público radioeléctrico previstos en el art. 88.4 de la Ley 11/2022, la autorización general:',opciones:['Debe resolverse siempre en un máximo de 30 días','Debe resolverse siempre en un máximo de 20 días','Se entiende concedida mediante notificación conforme al procedimiento y requisitos establecidos, sin perjuicio de las tasas','No constituye un título habilitante administrativo'],respuesta_correcta:2},
 5729:{texto:'¿Cómo se denomina el proceso de captación en línea en que una persona adulta crea deliberadamente una relación de confianza con un menor para facilitar su abuso o explotación sexual?',opciones:['Grooming','Sexting','Doxing','Smishing'],respuesta_correcta:0},
 5730:{texto:'En seguridad de la información, ¿cómo se denomina una debilidad de un sistema, sus controles o su implementación que una fuente de amenaza podría explotar?',opciones:['Ingeniería social','Phishing','Vulnerabilidad','Amenaza'],respuesta_correcta:2},
};
aplicar({numero:'1081',fecha:'2026-11-12',records,edits});
