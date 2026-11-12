const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const isaca='https://www.isaca.org/resources/news-and-trends/industry-news/2019/employing-cobit-2019-for-enterprise-governance-strategy';
const nist='https://csrc.nist.gov/pubs/sp/800/30/r1/final';
const rfc4271='https://www.rfc-editor.org/rfc/rfc4271.html';
const ituCWDM='https://www.itu.int/rec/T-REC-G.694.2';
const ituCWDMtext='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.694.2-200312-I%21%21PDF-E&lang=e&type=items';
const ituSup='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.Sup42-201810-I%21%21PDF-E&lang=f&type=items';
const net='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const itgov='https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const records=[
 [5566,[106],[],['COBIT 2019','dominios de gobierno','dominios de gestión'],[
  {url:isaca,referencia:'ISACA, “Employing COBIT 2019 for Enterprise Governance Strategy”: enumera los cinco dominios EDM, APO, BAI, DSS y MEA, distinguiendo gobierno de gestión.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 106: ITIL y COBIT, objetivos de control y métricas.'},
  {url:itgov,referencia:'ITIC Academy 2026, bloque 41, apartados 8.1–8.3 sobre COBIT 2019 y sus cinco dominios; cotejo curricular, no fuente primaria de la respuesta.'}
 ],null,'Se acota la pregunta a COBIT 2019 y se sustituyen las denominaciones imprecisas por los nombres reconocidos de sus dominios. COBIT 2019 agrupa gobierno en EDM y gestión en APO, BAI, DSS y MEA; «Planificar, Implementar y Verificar» no es un dominio. No se asigna tema A2: el programa A2 no contiene un epígrafe directo de gobierno COBIT.', 'corregida'],
 [5567,[106],['II-10'],['análisis de riesgos','valoración del riesgo','amenazas','vulnerabilidades','activos'],[
  {url:nist,referencia:'NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments: la evaluación de riesgos identifica fuentes/eventos de amenaza, vulnerabilidades, probabilidad e impacto; forma parte del proceso global de gestión de riesgos.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 106: marcos de gestión de servicios y control TIC.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.10: análisis y gestión de riesgos de sistemas de información.'},
  {url:itgov,referencia:'ITIC Academy 2026, bloque 41, secciones de ITIL 4/ITIL Version 5 y gestión de riesgos; cotejo curricular. El PDF no permite identificar qué significaba “ADA” en el original, por lo que se elimina esa referencia ambigua.'}
 ],null,'Se corrige el original: “ADA” no estaba definido y se atribuía sin contexto una técnica a ITIL. Además, valorar activos, amenazas y vulnerabilidades describe el análisis/evaluación del riesgo, que es una parte de la gestión del riesgo, no su sinónimo. Se modifica la opción correcta para que el concepto sea exacto: C, análisis de riesgos.', 'corregida'],
 [5568,[108],['IV-13'],['BGP','BGP-4','sistema autónomo','encaminamiento interdominio'],[
  {url:rfc4271,referencia:'RFC 4271, resumen: BGP es un protocolo de encaminamiento entre sistemas autónomos; intercambia información de alcanzabilidad de red.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: protocolos de encaminamiento e interconexión de redes.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.13: arquitectura y funcionamiento de Internet.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42, sección 6.3 “BGP y la estructura de Internet”; distingue protocolos interiores y encaminamiento entre AS.'}
 ],null,'La clave BGP se conserva; se precisa la formulación para preguntar por encaminamiento inter-AS, como define RFC 4271. BGP no es el protocolo interior típico de un sistema autónomo.', 'corregida'],
 [5569,[108],['IV-8','IV-13'],['BGP-4','eBGP','punto neutro','IXP','peering'],[
  {url:rfc4271,referencia:'RFC 4271, resumen y §1.1: protocolo de encaminamiento inter-AS; la sesión eBGP intercambia información de alcanzabilidad entre sistemas autónomos.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: encaminamiento e interconexión de redes.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.8 (redes y protocolos) y IV.13 (Internet).'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42, secciones 6.3 (BGP, AS, tránsito, peering e IXP); cotejo curricular.'}
 ],null,'Se mantiene D (BGP-4) y se sustituye “proveedores intercambian tráfico” por el caso de establecimiento de sesiones eBGP para intercambio de rutas entre AS. Un IXP facilita el peering, pero no es por sí mismo un protocolo de encaminamiento.', 'corregida'],
 [5570,[108],['IV-7'],['WDM','CWDM','DWDM','UIT-T G.694.1','UIT-T G.694.2','fibra óptica'],[
  {url:ituCWDM,referencia:'UIT-T G.694.2, estado oficial: la recomendación que define la rejilla de longitudes de onda CWDM (edición 12/2003) continúa en vigor.'},
  {url:ituCWDMtext,referencia:'UIT-T G.694.2 (12/2003), tabla 1 y apéndice I: rejilla nominal CWDM de 20 nm, compatible con fuentes no refrigeradas y filtros de banda ancha; admite tolerancias relajadas y tecnologías de filtrado de bajo coste.'},
  {url:ituSup,referencia:'UIT-T G.Suppl.42, apartado 8.4.2: explica que la separación de 20 nm CWDM permite láseres sin refrigerar, tolerancias más relajadas y filtros de bajo coste.'},
  {url:'https://www.itu.int/rec/T-REC-G.694.1-202010-I',referencia:'UIT-T G.694.1, rejillas espectrales DWDM; diferencia la rejilla de frecuencias DWDM de la rejilla CWDM de G.694.2.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: medios de transmisión y redes de telecomunicaciones.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios de transmisión guiados, incluidos los ópticos.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42, apartado 7.4 WDM; cotejo curricular y contraste con UIT-T.'}
 ],null,'Se rehace el enunciado para que las cuatro afirmaciones sean contrastables con las rejillas UIT-T. La falsa es C: CWDM usa una separación amplia (nominalmente 20 nm) y filtros de banda ancha; la afirmación de que necesita filtros muy precisos y estrechos por la proximidad entre canales describe lo contrario. Se evita generalizar sobre el coste de productos o asegurar capacidad sin especificar diseño.', 'corregida']
];
const edits={
 5566:{texto:'En COBIT 2019, ¿cuál de los siguientes NO es uno de los cinco dominios del modelo central?',opciones:['Planificar, Implementar y Verificar.','Alinear, Planificar y Organizar (APO).','Construir, Adquirir e Implementar (BAI).','Entregar, Dar Servicio y Soporte (DSS).'],respuesta_correcta:0},
 5567:{texto:'En una evaluación de riesgos de un sistema de información, valorar los activos e identificar amenazas y vulnerabilidades forma parte principalmente de:',opciones:['La gestión de activos.','La gestión de la capacidad.','El análisis o evaluación de riesgos.','La gestión de incidencias.'],respuesta_correcta:2},
 5568:{texto:'¿Qué protocolo estandarizado se emplea para intercambiar información de encaminamiento entre sistemas autónomos de Internet?',opciones:['OSPF.','RIP.','BGP.','RIP versión 2.'],respuesta_correcta:2},
 5569:{texto:'En un punto neutro de Internet (IXP), ¿qué protocolo se utiliza habitualmente para que sistemas autónomos intercambien rutas mediante sesiones entre sus routers?',opciones:['OSPF.','No se usa encaminamiento dinámico; solo tablas estáticas.','RIP.','BGP-4, mediante sesiones eBGP entre sistemas autónomos.'],respuesta_correcta:3},
 5570:{texto:'Sobre las rejillas espectrales CWDM y DWDM definidas por UIT-T, señale la afirmación INCORRECTA.',opciones:['La rejilla CWDM de UIT-T G.694.2 establece separaciones nominales de 20 nm entre canales.','UIT-T G.694.2 define la rejilla de longitudes de onda CWDM y UIT-T G.694.1 las rejillas de frecuencia DWDM.','CWDM necesita filtros muy precisos y de banda estrecha porque sus canales adyacentes están muy próximos.','La separación amplia de canales CWDM permite fuentes no refrigeradas y filtros de banda ancha.'],respuesta_correcta:2}
};
aplicar({numero:'1049',fecha:'2026-11-12',records,edits});
