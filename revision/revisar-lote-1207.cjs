const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const r806='https://www.boe.es/eli/es/rd/2014/09/19/806/con';
const rd1112='https://www.boe.es/eli/es/rd/2018/09/07/1112';
const paeOaw='https://administracionelectronica.gob.es/estrategias/accesibilidad';
const cttOaw='https://administracionelectronica.gob.es/ctt/oaw';
const wcag='https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html';
const magerit='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Afb373672-f804-4d05-8567-2d44b3020387/2012_Magerit_v3_libro1_metodo_es_NIPO_630-12-171-8.pdf';
const cttMagerit='https://administracionelectronica.gob.es/ctt/magerit';
const b3='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const b48='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
apply({numero:'1207',fecha:'2026-11-13',records:[
 [6356,['30'],[],['Comisión de Estrategia TIC','CETIC','gobernanza TIC','órganos AGE'],[
  src(r806,'Real Decreto 806/2014, artículos 4 y 18: art. 4 asigna a CETIC prioridades de inversión, cooperación y observatorio; el artículo 18 atribuye a la Dirección TIC los criterios para agregar y planificar demanda y actuar como cliente único.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 30: modelos de gobernanza TIC y transformación digital de la AGE.'),
  src(b3,'ITIC Academy, bloque 03 Administración Digital, actualización 2026: el cuadro de gobernanza diferencia CETIC y órganos directivos; resume sus funciones estratégicas y de cooperación.')
 ],null,'D es la opción que no corresponde a la Comisión: la función de elaborar y trasladar criterios para agregación/planificación de demanda y cliente único corresponde a la Dirección de Tecnologías de la Información y las Comunicaciones (art. 18 del RD 806/2014), mientras A–C recogen funciones del art. 4 de la Comisión. Se mantiene la respuesta D y se explicita el órgano al que pertenece.','corregida'],
 [6357,['44'],['III-14'],['accesibilidad web','Observatorio de Accesibilidad Web','sector público'],[
  src(paeOaw,'Portal de Administración Electrónica, Accesibilidad: presenta el Observatorio de Accesibilidad como iniciativa ministerial destinada a ayudar a mejorar el cumplimiento de accesibilidad de portales administrativos.'),
  src(cttOaw,'PAe, Rastreador del Observatorio de Accesibilidad Web: herramienta de monitorización y diagnóstico periódico de portales públicos; identifica a los organismos responsables y su función.'),
  src(rd1112,'Real Decreto 1112/2018: marco vigente de accesibilidad de sitios web y aplicaciones del sector público.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 44: accesibilidad, usabilidad y diseño universal.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.14: accesibilidad, diseño universal y usabilidad.')
 ],null,'Se conserva C como respuesta esperada, pero se ajusta el enunciado: el Observatorio de Accesibilidad Web es una iniciativa e instrumento de seguimiento/diagnóstico, no un órgano administrativo autónomo. Las responsabilidades jurídicas de seguimiento y cumplimiento se distribuyen según el RD 1112/2018 y la organización administrativa.','corregida'],
 [6358,['44'],['III-14'],['WCAG 2.1','criterio 2.3.1','destellos','nivel A'],[
  src(wcag,'W3C WAI, Understanding Success Criterion 2.3.1: “Three Flashes or Below Threshold”, nivel A; permite no más de tres destellos por segundo o estar por debajo de los umbrales general y rojo.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 44: accesibilidad, usabilidad, W3C y diseño universal.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.14: accesibilidad, diseño universal y usabilidad.'),
  src(b3,'ITIC Academy, bloque 03 Administración Digital, actualización 2026: accesibilidad de servicios web, UNE-EN 301 549 y WCAG 2.1; correspondencia curricular directa.')
 ],null,'El criterio WCAG 2.1 2.3.1 pertenece al nivel A, no al AAA. La formulación original simplificaba en exceso el umbral al omitir las excepciones por tamaño y umbral fotométrico; se sustituye por la regla normativa resumida y se cambia la clave de C a A.','corregida'],
 [6359,['47'],['II-10'],['MAGERIT v3','enlace operacional','roles del proyecto de análisis de riesgos'],[
  src(magerit,'MAGERIT v3, Libro I Método, apartado de participantes del proyecto PAR: define “Enlace operacional” como la persona de la organización que conoce personas/unidades implicadas y conecta al equipo de proyecto con el grupo de usuarios.'),
  src(cttMagerit,'PAe, ficha oficial MAGERIT v3: identifica la metodología y su mantenimiento por la Secretaría General de Administración Digital.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 47: seguridad de sistemas, análisis y gestión de riesgos.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.10: análisis y gestión de riesgos de los sistemas de información y herramientas.'),
  src(b48,'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: cubre análisis y gestión de riesgos y MAGERIT v3, aunque no desarrolla este rol concreto.')
 ],null,'La descripción del enunciado coincide literalmente con el rol “Enlace operacional” del Libro I de MAGERIT v3; se conserva la opción B.','vigente'],
 [6360,['47'],['II-10'],['MAGERIT','tratamiento del riesgo','transferencia','aseguramiento'],[
  src(b48,'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: enumera tratamientos como mitigar/reducir, compartir/transferir, aceptar/asumir y eliminar/evitar; señala el seguro como ejemplo de transferencia.'),
  src(cttMagerit,'PAe, ficha oficial MAGERIT v3: contexto de la metodología pública española de análisis y gestión de riesgos.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 47: seguridad de sistemas, análisis y gestión de riesgos.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.10: análisis y gestión de riesgos de los sistemas de información y herramientas.')
 ],null,'No se valida la clave original: A enumera cuatro tratamientos que el material académico reconoce; D añade “asegurar”, que puede describir un mecanismo de transferencia, de modo que también es defendible según cómo se interprete “el riesgo se puede”. Las opciones se solapan y el enunciado no pide escoger una taxonomía ni distingue categoría de mecanismo. Se conserva texto, opciones y clave histórica 3 como dato de origen, pero no se presenta como respuesta verificada.','pendiente_ambiguedad']
],edits:{
 6356:{opcion:[3,'Elaborar y trasladar a los órganos competentes en materia de contratación los criterios y directrices para agregar y planificar la demanda TIC de la AGE y sus organismos públicos y configurarla como cliente único frente a proveedores externos (función atribuida a la Dirección TIC, no a la Comisión).']},
 6357:{texto:'¿Qué iniciativa del ámbito de la Administración General del Estado realiza el seguimiento y ofrece herramientas de diagnóstico para ayudar a mejorar la accesibilidad de sus portales web?'},
 6358:{texto:'En relación con el criterio 2.3.1 de WCAG 2.1 («Tres destellos o por debajo del umbral»), indique la respuesta correcta:',opcion:[0,'Para cumplir el nivel A, las páginas no contienen nada que destelle más de tres veces en cualquier período de un segundo, o el destello queda por debajo de los umbrales general y rojo.'],respuesta_correcta:0}
}});
