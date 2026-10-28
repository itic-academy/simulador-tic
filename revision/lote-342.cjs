const apply=require('./aplicar-lote.cjs');
const records=[
 [2026,[62],["II-2"],['Android','kernel Linux','sistema operativo móvil','AOSP'],[
  {url:'https://developer.android.com/guide/platform',referencia:'Android Developers, Platform architecture: Android es una pila de software basada en Linux y el kernel Linux es la base de la plataforma.'},
  {url:'https://source.android.com/docs/core/architecture',referencia:'Android Open Source Project, arquitectura: describe la pila de Android y la capa del kernel Linux.'}
 ],null,'La opción 0 es correcta: Android se basa en el kernel Linux. No es una distribución Ubuntu Touch ni una distribución GNU/Linux tradicional; Android es una pila/plataforma propia que integra el kernel Linux con su runtime, framework y componentes. A1-62/A2-II-2.','vigente'],
 [2027,[65],["III-12"],['JSF','RichFaces','JBoss','fin de vida','framework histórico'],[
  {url:'https://developer.jboss.org/docs/DOC-55384',referencia:'JBoss Community, RichFaces End-Of-Life Q&A (12-02-2016): anuncia el fin de vida del proyecto en junio de 2016 y el fin de parches después del soporte.'},
  {url:'https://richfaces.jboss.org/',referencia:'Sitio oficial comunitario de RichFaces: confirma que el proyecto alcanzó su fin de vida en junio de 2016.'},
  {url:'https://developer.jboss.org/people/michpetrov/blog',referencia:'Anuncio de RichFaces 4.5.17.Final (22-06-2016): identifica la última versión y declara alcanzado el fin de vida.'}
 ],null,'Se conserva como referencia histórica: JBoss declaró fin de vida de RichFaces en junio de 2016 y no se publicarían parches posteriores al fin de soporte. PrimeFaces, ICEfaces y Apache MyFaces son proyectos distintos y no se identifican en esas fuentes como el proyecto JSF citado. Respuesta 1. A1-65/A2-III-12.','historica'],
 [2028,[64],["II-5"],['modelo relacional','relación','cardinalidad','tupla','atributo'],[
  {url:'https://www.ncert.nic.in/textbook/pdf/lecs108.pdf',referencia:'NCERT, Informatics Practices: define cardinalidad de una relación como el número de tuplas que contiene.'},
  {url:'https://tim.jyu.fi/view/kurssit/tie/itka2004/course/sections/3/01_ch31_relaatiomalli_teoria/en-US',referencia:'Universidad de Jyväskylä, material académico sobre el modelo relacional: cardinalidad de la relación es el número de tuplas/filas almacenadas.'}
 ],null,'En el modelo relacional, la cardinalidad de una relación es el número de tuplas (filas) que contiene; el número de atributos es su grado. La opción 3 es correcta. Se distingue del uso de cardinalidad para las multiplicidades de asociaciones en el modelo entidad-relación. A1-64/A2-II-5.','vigente'],
 [2029,[115],["II-8"],['IPv6','multicast','ff00::/8','RFC 4291'],[
  {url:'https://www.rfc-editor.org/rfc/rfc4291.html',referencia:'RFC 4291, §2.4 y §2.7: identifica FF00::/8 como prefijo multicast IPv6; sus direcciones identifican grupos de interfaces.'},
  {url:'https://www.iana.org/assignments/ipv6-address-space/ipv6-address-space.xhtml',referencia:'IANA IPv6 Address Space: registro oficial de asignaciones y prefijos IPv6.'}
 ],null,'El prefijo ff00::/8 identifica direcciones multicast IPv6: el octeto inicial FF marca una dirección de grupo. No es unicast ni loopback (que es ::1/128). Respuesta 2. A1-115/A2-II-8.','vigente'],
 [2030,[101],["III-8"],['mantenimiento preventivo','mantenimiento predictivo','deterioro','fallos'],[
  {url:'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3Atr%3A12489%3Aed-1%3Av1%3Aen',referencia:'ISO Online Browsing Platform, vocabulario de mantenimiento: preventive maintenance se realiza a intervalos/criterios predeterminados para reducir probabilidad de fallo o degradación.'},
  {url:'https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_8831_002F_&page_name=Chapter7',referencia:'NASA NPR 8831.2F, §7.7.4: mantenimiento preventivo programado para reducir fallos; revisa el desgaste relacionado con edad/uso.'}
 ],null,'La definición corresponde al mantenimiento preventivo: se programa antes del fallo para reducir la probabilidad de fallo o degradación. El predictivo estima el estado a partir de condición/indicadores; adaptativo modifica software para cambios del entorno y el correctivo actúa después de detectar un fallo. Respuesta 1. A1-101/A2-III-8.','vigente']
];
const edits={
 2026:{texto:'Android es una plataforma/sistema operativo móvil cuya base tecnológica incluye el kernel Linux. Señale la afirmación correcta:',opciones:['Está basado en el kernel de Linux.','Está basado en la distribución Ubuntu Touch.','Es una distribución GNU/Linux tradicional.','Es el resultado de combinar Linux y Firefox OS.'],respuesta_correcta:0},
 2027:{texto:'¿Cuál de los siguientes frameworks de JavaServer Faces (JSF) fue declarado fin de vida (EOL) por JBoss en junio de 2016?',opciones:['PrimeFaces','RichFaces','ICEfaces','Apache MyFaces'],respuesta_correcta:1}
};
apply({numero:'342',fecha:'2026-10-28',records,edits});
