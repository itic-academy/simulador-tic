const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ccn='https://www.ccn-cert.cni.es/es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/544-ccn-stic-827-gestion-y-uso-de-dispositivos-moviles/file.html';
const ens='https://www.boe.es/eli/es/rd/2022/05/03/311/con';
const nti='https://boe.es/buscar/act.php?id=BOE-A-2011-13168&p=20110730&tn=1';
const posa='https://www.wiley.com/en-us/pattern-oriented-software-architecture-volume-1-a-system-of-patterns-p-9781118725269';
const uml='https://www.omg.org/spec/UML/2.5.1/PDF';
const magerit='https://www.hacienda.gob.es/SGT/CATALOGO_SEFP/046_Magerit_v3_libro1_metodo.pdf';
const academy={security:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',mobile:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',interop:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',design:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk'};
const records=[
 [7016,[48],['I-9','IV-15'],['ENS','CCN-STIC 827','dispositivos móviles','seguridad alta','aplicaciones aprobadas','histórica'],[
  {url:ccn,referencia:'CCN-STIC 827, apartado 6 y tabla de medidas por nivel (pp. 35–36): en su tabla, el bloqueo automático, borrado tras intentos fallidos y borrado seguro al reutilizar son compatibles con ALTO; la descarga/uso de cualquier aplicación sin restricciones aparece sólo en BAJO, mientras que las aplicaciones admitidas por el organismo corresponden también a niveles superiores.'},
  {url:ens,referencia:'Real Decreto 311/2022, ENS vigente: reemplazó el marco reglamentario anterior. La pregunta se sitúa expresamente en la tabla histórica CCN-STIC 827 y no generaliza esa matriz como requisito legal actual.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 48: ENS y guías CCN-STIC.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema I-9: ENS y guías CCN-STIC; IV-15: MDM/EMM/UEM.'},
  {url:academy.security,referencia:'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2: cotejo de ENS y CCN-STIC; cubre el marco vigente y diferencia el RD 311/2022 de guías históricas.'},
  {url:academy.mobile,referencia:'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026.1: medidas específicas de seguridad en comunicaciones móviles y gestión de incidentes; cotejo curricular contextual.'}
 ],undefined,'Histórica D. La matriz reproducida por CCN-STIC 827 sitúa bloqueo automático, borrado por intentos fallidos y borrado seguro por reutilización entre las medidas compatibles con nivel ALTO. La opción que no corresponde es permitir instalar cualquier aplicación sin restricción, que la tabla ubica en nivel BAJO. Para evitar la contradicción de la versión del banco, se sustituyó el distractor D por esa formulación inequívoca: el texto previo (solo aplicaciones aprobadas) sí era compatible con ALTO. La guía 827 pertenece al marco anterior al RD 311/2022; no se presenta la tabla como obligación vigente general.','historica'],
 [7017,[46],['I-9'],['NTI','digitalización de documentos','metadatos','firma electrónica'],[
  {url:nti,referencia:'NTI de Digitalización de Documentos, apartado V: el proceso informático integra digitalización fotoeléctrica, optimización si procede, metadatos y firma si procede; exige integridad de los pasos y mantenimiento/comprobaciones.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 46: Normas Técnicas de Interoperabilidad y documentos/expedientes electrónicos.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema I-9: ENI, NTI y gestión electrónica.'},
  {url:academy.interop,referencia:'ITIC Academy, bloque 20 Interoperabilidad de sistemas, versión 2026.2: NTI, documentos y expedientes electrónicos; cotejo curricular directo.'}
 ],undefined,'Corregida A. El texto de la NTI describe el proceso informático con las tareas enumeradas y su orden. Se quitó la especificidad no sustentada sobre historias clínicas: la NTI citada regula la digitalización administrativa de documentos en el ámbito del ENI y la respuesta se ancla ahora directamente en su apartado V.','corregida'],
 [7018,[93],['III-9'],['patrones de software','patrones arquitectónicos','GoF','patrones estructurales','taxonomía'],[
  {url:posa,referencia:'Buschmann et al., Pattern-Oriented Software Architecture, vol. 1 (Wiley): distingue patrones arquitectónicos, patrones de diseño e idioms según nivel de abstracción; structural es una categoría real dentro del catálogo GoF de patrones de diseño.'},
  {url:'https://www.oreilly.com/library/view/design-patterns-elements/0201633612/',referencia:'Gamma et al., Design Patterns: Elements of Reusable Object-Oriented Software (Addison-Wesley/O’Reilly): organiza patrones GoF en las categorías creacionales, estructurales y de comportamiento.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 93: técnicas de diseño de software y patrones de diseño.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III-9: análisis y diseño OO, UML y patrones de diseño.'},
  {url:academy.design,referencia:'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1: A1 tema 93 y A2 tema III-9 incluyen patrones de diseño.'}
 ],undefined,'Corregida C. «Estructurales» sí es una categoría reconocida de patrones (GoF); dialectos no lo es en esta taxonomía. La versión del banco que marcaba D confundía el subtipo GoF con una categoría inexistente. Se acota el enunciado a categorías habituales para que la respuesta única sea verificable.','corregida'],
 [7019,[92,93],['III-9'],['UML','diagrama de componentes','diagramas estructurales','OMG'],[
  {url:uml,referencia:'OMG UML 2.5.1, especificación normativa, capítulos 14–15 y catálogo de diagramas: component diagram es un diagrama de estructura; use-case, activity y state-machine representan comportamiento.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, temas 92–93: diseño arquitectónico, análisis/diseño y técnicas de diseño de software.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III-9: análisis y diseño orientado a objetos y UML.'},
  {url:academy.design,referencia:'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1: UML y diseño OO dentro de A1 92/93 y A2 III-9.'}
 ],undefined,'Vigente C. La especificación UML 2.5.1 de OMG clasifica el diagrama de componentes entre los estructurales; casos de uso, actividades y máquinas de estados son diagramas de comportamiento.','vigente'],
 [7020,[47],['II-10','II-13'],['MAGERIT','incidente de seguridad','gestión de riesgos'],[
  {url:magerit,referencia:'MAGERIT v3, Libro I, glosario, entrada «Incidente de seguridad»: reproduce la definición de MAGERIT 2006 como evento con consecuencias en detrimento de la seguridad del sistema de información.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 47: análisis y gestión de riesgos de los sistemas de información.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, temas II-10 (análisis y gestión de riesgos) y II-13 (seguridad e incidentes).'},
  {url:academy.security,referencia:'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2: sección 1.5 MAGERIT/gestión de riesgos y marco de seguridad; cotejo curricular directo.'}
 ],undefined,'Vigente A. En el glosario de MAGERIT v3, «incidente de seguridad» incluye la definición citada de MAGERIT 2006: evento con consecuencias en detrimento de la seguridad del sistema de información. Se amplía el stem para identificar con precisión la entrada del glosario.','vigente']
];
const edits={
 7016:{texto:'Según la matriz histórica de medidas móviles de CCN-STIC 827, edición asociada al ENS anterior al Real Decreto 311/2022, ¿qué medida NO corresponde al nivel ALTO?',opciones:['Auto-bloqueo del dispositivo tras cierto tiempo de inactividad.','Auto-borrado en caso de varios intentos fallidos de autenticación del usuario.','Borrado seguro en caso de reutilización del dispositivo.','Permitir la descarga o el uso de cualquier aplicación sin ninguna restricción.'],respuesta_correcta:3},
 7017:{texto:'Según el apartado V de la Norma Técnica de Interoperabilidad de Digitalización de Documentos, el proceso de digitalización:',opciones:['Se realizará mediante un proceso informático que, garantizando la integridad de cada paso, digitaliza, optimiza la imagen si procede, asigna metadatos y firma la imagen si procede.','Se realizará mediante un proceso informático, pero las tareas de digitalización se ejecutarán previamente y fuera de él.','No se realizará mediante un proceso informático: digitalización, metadatos y firma se ejecutarán de forma independiente.','No contempla el mantenimiento preventivo ni las comprobaciones rutinarias de la aplicación y dispositivos asociados.'],respuesta_correcta:0},
 7018:{texto:'En una pregunta sobre categorías habituales de patrones de software, ¿cuál de estos términos NO es una categoría de patrones?',opciones:['Patrones arquitectónicos.','Patrones de diseño.','Dialectos.','Patrones estructurales.'],respuesta_correcta:2},
 7019:{texto:'En UML 2.5.1, entre los siguientes, ¿cuál es un diagrama estructural?',opciones:['Diagrama de casos de uso.','Diagrama de actividades.','Diagrama de componentes.','Diagrama de máquinas de estados.'],respuesta_correcta:2},
 7020:{texto:'Según la entrada «Incidente de seguridad» del glosario de MAGERIT v3, un evento con consecuencias en detrimento de la seguridad del sistema de información se denomina:',opciones:['Incidente de seguridad.','Incidencia.','Contingencia.','Impacto.'],respuesta_correcta:0}
};
aplicar({numero:'1339',fecha:'2026-11-15',records,edits});
