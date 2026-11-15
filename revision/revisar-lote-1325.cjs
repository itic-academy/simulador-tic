const aplicar=require('./aplicar-lote.cjs');
const rec='https://rednerea.juntadeandalucia.es/drupal/printpdf/150';
const regage='https://administracionelectronica.gob.es/documentacion/legislacion-nacional/leyes-normativas-basicas';
const une='https://www.une.org/normalizacion_documentos/Informe%20Transformaci%C3%B3n%20Digital_20201127.pdf';
const aenor='https://www.aenor.com/conocenos/historia';
const byox='https://ec.europa.eu/digital-building-blocks/sites/default/files/2020-09/Business%20trends%20report_BYOI_v1.0.pdf';
const byod='https://csrc.nist.gov/pubs/sp/1800/22/final';
const cloud='https://csrc.nist.gov/pubs/sp/800/145/final';
const oracle='https://docs.oracle.com/cd/E13203_01/tuxedo/tux90/int/intbas.htm';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyInter='https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk';
const academyNorm='https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk';
const academyHardware='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academyCloud='https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk';
const academyArch='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const edits={
  6946:{texto:'En la descripción histórica de la solución Registro Electrónico Común (REC) implantada bajo la Ley 11/2007, ¿qué dos aplicaciones se identificaban como sus componentes? No se pregunta por la plataforma actual REG-AGE.',opciones:['La Aplicación Frontal de Registro Electrónico (ARE) y la Aplicación Web de Gestión de Registro Electrónico (AGRE).','La Aplicación Frontal de Registro Electrónico (ARE), la Aplicación Web de Gestión de Registro Electrónico (AGRE) y la Oficina de Registro Virtual (ORVE).','La Aplicación Web de Gestión de Registro Electrónico (AGRE), la Oficina de Registro Virtual (ORVE) y GEISER.','La Aplicación Frontal de Registro Electrónico (ARE), la Oficina de Registro Virtual (ORVE) y GEISER.'],respuesta_correcta:0},
  6947:{texto:'Tras la separación de actividades de 2017, ¿en cuál de estas organizaciones NO representa actualmente a España la Asociación Española de Normalización (UNE), organismo nacional de normalización?',opciones:['ISO (International Organization for Standardization).','IEC (International Electrotechnical Commission).','ITU (International Telecommunication Union).','CEN (Comité Europeo de Normalización).'],respuesta_correcta:2},
  6948:{texto:'En el vocabulario BYOx aplicado a la movilidad, si se habla de BYOA en el sentido de «Bring Your Own Apps», ¿a qué práctica se refiere?',opciones:['El usuario aporta o elige las aplicaciones que utiliza para realizar tareas de trabajo.','El empleado utiliza su propio dispositivo personal para acceder a los recursos corporativos (BYOD).','El empleado conecta a los recursos corporativos mediante su propia red o punto de acceso (BYON).','La organización entrega y administra un dispositivo corporativo para uso profesional.'],respuesta_correcta:0},
  6950:{texto:'En cuanto a la arquitectura cliente-servidor, indique la afirmación INCORRECTA:',opciones:['Puede haber servidores especializados de bases de datos, archivos, web o correo.','En una arquitectura de dos capas es obligatorio separar físicamente la presentación, la lógica de negocio y los datos en tres nodos o capas distintas.','Es una arquitectura distribuida en la que el cliente solicita servicios y un servidor los proporciona.','En el modelo clásico de dos capas con cliente pesado, presentación y lógica de negocio suelen residir en el cliente y los datos en el servidor; mantener clientes con lógica duplicada puede encarecer las actualizaciones.'],respuesta_correcta:1}
};
const records=[
 [6946,[49],['I-9'],['Registro Electrónico Común','REC','ARE','AGRE','GEISER','SIR','registro administrativo electrónico'],[
  {url:rec,referencia:'Red NEREA, descripción histórica del REC: identifica dos aplicaciones, ARE para presentación ciudadana y AGRE para recepción/gestión por las oficinas; explica su relación histórica con SIR.'},
  {url:regage,referencia:'PAe, marco vigente de registros: identifica el Registro Electrónico General de la AGE (REG-AGE), SIR, ORVE y GEISER como soluciones actuales; se usa para distinguir la pregunta histórica del servicio vigente.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 49: infraestructuras y servicios comunes, Cl@ve, SIR y otros servicios.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema I.9: gestión electrónica de procedimientos, ENI y NTI.'}
 ],undefined,'Histórica A (respuesta conservada). ARE y AGRE describen la arquitectura de la solución REC de la época; no son una enumeración válida del servicio actual. El enunciado ahora explicita el contexto histórico: el marco vigente de AGE denomina al registro REG-AGE y relaciona su gestión con el servicio GEISER y el intercambio SIR.','historica'],
 [6947,[50],[],['normalización','UNE','AENOR','ISO','IEC','CEN','ITU'],[
  {url:une,referencia:'UNE, informe institucional sobre transformación digital: identifica a UNE como representante español ante ISO, IEC, CEN y CENELEC, y como organismo nacional miembro de ETSI.'},
  {url:aenor,referencia:'AENOR, historia institucional: en 2017 se separaron las actividades entre la Asociación Española de Normalización, UNE, y AENOR como entidad mercantil.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 50: organizaciones nacionales e internacionales de normalización y conformidad.'}
 ],undefined,'Corregida C. La redacción original nombraba AENOR como representante actual, una atribución que quedó desfasada tras la separación de 2017. Se actualiza a UNE y se mantiene como respuesta ITU: la fuente oficial UNE enumera ISO, IEC, CEN/CENELEC y ETSI entre sus foros, no la Unión Internacional de Telecomunicaciones.','corregida'],
 [6948,[54],['IV-15'],['BYOx','BYOA','Bring Your Own Apps','BYOD','BYON','movilidad','MAM'],[
  {url:byox,referencia:'Comisión Europea, informe de tendencias BYOx: enumera Bring Your Own Apps y Bring Your Own Network como prácticas diferenciadas; el informe también advierte que BYOA puede tener expansiones distintas en otros contextos.'},
  {url:byod,referencia:'NIST SP 1800-22: define BYOD como uso de dispositivos de propiedad personal para actividades de trabajo; se usa para distinguir BYOD de BYOA.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 54: dispositivos personales y móviles, medidas de seguridad y gestión.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema IV.15: comunicaciones móviles y soluciones MDM, EMM y UEM.'}
 ],undefined,'Corregida A. Se explicita el sentido concreto de BYOA («Bring Your Own Apps») porque los acrónimos BYOx no son una taxonomía normativa única y BYOA también se ha usado para otras expansiones. BYOA trata de las aplicaciones elegidas/aportadas por el usuario; BYOD se refiere al dispositivo personal y BYON a la red propia.','corregida'],
 [6949,[55],['II-1'],['computación en la nube','modelos de servicio','SaaS','PaaS','IaaS','NIST SP 800-145'],[
  {url:cloud,referencia:'NIST SP 800-145: define tres modelos de servicio de cloud computing —Software as a Service, Platform as a Service e Infrastructure as a Service—, además de cuatro modelos de despliegue.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 55: cloud computing, IaaS, PaaS, SaaS y nubes públicas, privadas e híbridas.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema II.1: computación en la nube, base tecnológica, componentes y capacidades.'}
 ],undefined,'Vigente A. La tríada tradicional de modelos de servicio definida por NIST es SaaS, PaaS e IaaS. XaaS es un rótulo paraguas, mientras híbrida/pública/privada describen modelos de despliegue, no sustituyen esa clasificación.','vigente'],
 [6950,[58],['II-6'],['cliente-servidor','dos capas','cliente pesado','lógica de presentación','lógica de negocio','arquitectura distribuida'],[
  {url:oracle,referencia:'Oracle Tuxedo, fundamentos de arquitectura cliente-servidor: en dos capas la lógica de negocio puede residir en el cliente o en el servidor de base de datos; la arquitectura no exige por definición tres capas/nodos separados.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 58: procesamiento cooperativo y arquitectura cliente-servidor.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema II.6: tipologías, componentes y ventajas/inconvenientes de arquitecturas cliente-servidor y multicapa.'}
 ],undefined,'Corregida B. El original podía sugerir que una distribución lógica de responsabilidades equivale siempre a capas físicas distintas. Se formula el distractor como una separación obligatoria en tres capas/nodos, que caracteriza otra distribución; en dos capas los clientes y el servidor son los dos niveles y la lógica puede distribuirse de varias formas. Se delimita la afirmación sobre mantenimiento al modelo clásico de cliente pesado.','corregida']
];
aplicar({numero:'1325',fecha:'2026-11-15',records,edits});
