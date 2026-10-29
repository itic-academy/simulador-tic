const apply = require('./aplicar-lote.cjs');

const gdpr = 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679';
const aepd = 'https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/brechas-de-datos-personales-notificacion';
const isaca = 'https://www.isaca.org/resources/glossary';
const iia = 'https://www.theiia.org/globalassets/site/standards/globalinternalauditstandards_2024january9.pdf';
const records = [
 [2931,[27],['I-7'],['protección de datos','RGPD','brecha de datos personales','responsable del tratamiento'],[
  {url:gdpr,referencia:'Reglamento (UE) 2016/679, art. 33.1–2: el responsable notifica a la autoridad de control competente; el encargado informa sin dilación indebida al responsable.'},
  {url:aepd,referencia:'AEPD, «Notificación de brechas de datos personales a la Autoridad de Control», consultada el 29-10-2026: confirma que la obligación del art. 33 recae en el responsable y que el plazo es, cuando sea posible, de 72 horas desde que tiene constancia.'}
 ],'','Se reformula para distinguir la obligación legal de notificar de quién materialmente cumplimenta o presenta el formulario. El artículo 33.1 del RGPD atribuye la notificación a la autoridad de control al responsable del tratamiento, cuando la brecha pueda entrañar riesgo; el encargado debe informar al responsable sin dilación indebida (art. 33.2). La presentación material puede delegarse o efectuarse por representante, y la guía de la AEPD admite que el DPD actúe como punto de contacto, sin trasladar por ello la responsabilidad jurídica.','corregida'],
 [2932,[27],['I-7'],['protección de datos','RGPD','evaluación de impacto','EIPD','alto riesgo'],[
  {url:gdpr,referencia:'Reglamento (UE) 2016/679, art. 35.1–2: si es probable un alto riesgo, el responsable realiza la EIPD antes del tratamiento y recaba el asesoramiento del DPD si está nombrado.'}
 ],'','El artículo 35.1 del RGPD atribuye al responsable del tratamiento la evaluación de impacto previa cuando sea probable que el tratamiento entrañe alto riesgo para los derechos y libertades. El DPD asesora si ha sido nombrado (art. 35.2); no sustituye al responsable ni convierte al encargado en titular de esa obligación.','vigente'],
 [2933,[28,29],[],['sistemas de información','MIS','sistema de información de gestión','información en las organizaciones'],[
  {url:'https://www.fao.org/4/w7506e/w7506e03.htm',referencia:'FAO, material de formación sobre sistemas de información para la gestión: desarrolla MIS como Management Information System y su función de proporcionar información para operaciones, gestión y toma de decisiones.'}
 ],'','MIS significa Management Information System, en singular; en español suele traducirse como sistema de información de gestión. Se trata de una denominación amplia de sistemas que suministran información útil para la gestión y la toma de decisiones. No debe equipararse automáticamente con un almacén de datos, DSS o BI: estos pueden ser conceptos relacionados, pero no son la expansión de las siglas.','vigente'],
 [2934,[38,47],['II-11'],['auditoría informática','controles preventivos','gestión de riesgos','control interno'],[
  {url:isaca,referencia:'ISACA Interactive Glossary, entrada «Preventive control»: control interno usado para evitar sucesos no deseados, errores u otras ocurrencias con efecto negativo material; la entrada «Preventive application control» especifica que busca impedir que ocurra un error.'}
 ],'','La opción original «predecir problemas» no define con precisión la finalidad de un control preventivo: predecir no es necesariamente impedir. Según el glosario de ISACA, estos controles se utilizan para evitar eventos, errores u otras ocurrencias no deseadas que puedan afectar negativamente a un proceso o producto. Se ajusta la opción correcta para expresar prevención efectiva; detectar y corregir corresponden a otras funciones de control.','corregida'],
 [2935,[38],['II-11'],['auditoría informática','independencia','auditoría interna','gobierno y control TIC'],[
  {url:iia,referencia:'The IIA, Global Internal Audit Standards (2024), dominio III y norma 7.1 «Organizational Independence»: exige posicionar la función de auditoría interna de modo que pueda cumplir su mandato sin interferencia y preservar su independencia organizativa.'}
 ],'','Se acota el criterio de respuesta a la independencia funcional y a evitar que el equipo TIC audite su propio trabajo. Entre las opciones, la unidad de Auditoría Interna es la ubicación más adecuada. La norma 7.1 del IIA exige posicionamiento independiente y reporting apropiado, pero no impone una ubicación orgánica universal idéntica para todas las entidades estatales; la respuesta es una recomendación de diseño para el supuesto, no una regla legal general.','corregida']
];

apply({numero:'523',fecha:'2026-10-29',records,edits:{
 2931:{texto:'Conforme al artículo 33 del RGPD, ¿a quién atribuye la norma la obligación de notificar a la autoridad de control una violación de seguridad de datos personales que pueda entrañar riesgo para los derechos y libertades?',respuesta_correcta:2},
 2934:{opciones:['Evitar sucesos no deseados o errores antes de que se produzcan.','Predecir problemas potenciales, aunque no se implante ninguna medida para impedirlos.','Solucionar problemas una vez detectados por controles detectivos.','Reportar errores después de que hayan ocurrido.'],respuesta_correcta:0},
 2935:{texto:'Desde el punto de vista de la independencia funcional y de evitar que el equipo TIC audite su propio trabajo, ¿cuál es la ubicación orgánica más adecuada para la unidad de auditoría informática descrita?',opciones:['Dentro del Departamento TIC, en dependencia directa del Director de Sistemas de Información.','Dentro del Departamento TIC, dependiendo del Administrador Corporativo de Seguridad.','Dentro de la Unidad de Auditoría Interna.','Dentro de la Secretaría General o unidad de servicios generales.'],respuesta_correcta:2}
}});
