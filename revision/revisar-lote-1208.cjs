const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const iso='https://www.iso.org/standard/75652.html';
const ccnCont='https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/400-Guias_Generales/401-glosario_abreviaturas/topics/699.html';
const ccnDrp='https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/400-Guias_Generales/401-glosario_abreviaturas/topics/703.html';
const ccnCcp='https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/400-Guias_Generales/401-glosario_abreviaturas/topics/276.html';
const eur='https://eur-lex.europa.eu/eli/reg/2018/302/oj/eng';
const inode='https://man7.org/linux/man-pages/man7/inode.7.html';
const block48='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const hw='https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk';
apply({numero:'1208',fecha:'2026-11-13',records:[
 [6361,['48'],['II-13'],['ISO/IEC 27002:2022','controles de seguridad','buenas prácticas'],[
  src(iso,'ISO, ficha oficial ISO/IEC 27002:2022: estándar internacional de controles de seguridad de la información y guía de implementación; la edición 2013 está retirada.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 48: seguridad de sistemas y ENS; correspondencia temática.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.13: seguridad física y lógica, herramientas en ciberseguridad e incidentes.'),
  src(block48,'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: gestión y controles de seguridad; contexto curricular, no fuente de la definición ISO.')
 ],null,'Se conserva A, pero se actualiza la referencia genérica a ISO 27002 por la edición vigente identificada ISO/IEC 27002:2022. Es un estándar de controles y guía de implementación; no se formula como certificación de una organización (la certificación de SGSI corresponde a ISO/IEC 27001).','corregida'],
 [6362,['48'],['II-13','IV-6'],['continuidad de negocio','plan de contingencia','DRP','recuperación ante desastres'],[
  src(ccnCont,'CCN-STIC 401 Glosario, entrada Plan de contingencia: define medidas técnicas, humanas y organizativas para continuidad y operaciones, y lo presenta como término sinónimo de plan de recuperación de desastres/continuidad de negocio.'),
  src(ccnDrp,'CCN-STIC 401 Glosario, entrada Plan de recuperación de desastres: lo centra en datos y equipamiento críticos para reanudar operaciones tras un desastre.'),
  src(ccnCcp,'CCN-STIC 401 Glosario, entrada Continuidad: indica que los términos de recuperación tras desastre y contingencia también se usan en este ámbito.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 48: seguridad de sistemas; relación contextual.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.6: vulnerabilidades, riesgo, alta disponibilidad y recuperación ante desastres.'),
  src(block48,'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: cubre continuidad/recuperación en el contexto de seguridad y resiliencia.')
 ],null,'No se valida la clave C: la definición de CCN para plan de contingencia lo trata como sinónimo de DRP, mientras otra entrada describe el DRP más estrechamente como recuperación de datos/equipamiento. El enunciado no fija un marco ni distingue uso amplio y específico; la división “modo manual” frente a recuperación informática no es universal. Se conserva el original y la clave solo como dato histórico.','pendiente_ambiguedad'],
 [6363,['22','78'],['I-6'],['bloqueo geográfico injustificado','Reglamento (UE) 2018/302','mercado único digital'],[
  src(eur,'Reglamento (UE) 2018/302, texto oficial EUR-Lex: aborda el bloqueo geográfico injustificado y otras discriminaciones por nacionalidad, residencia o establecimiento; no prohíbe toda restricción geográfica en cualquier supuesto.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 22 (sociedad de la información) y 78 (comercio electrónico).'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.6: sociedad de la información y Agenda Digital; relación curricular general.')
 ],{texto:'¿Qué Reglamento de la Unión Europea aborda el bloqueo geográfico injustificado y ciertas discriminaciones en el mercado interior?'},'La respuesta A es correcta: Reglamento (UE) 2018/302. La norma aborda el bloqueo geográfico injustificado en el ámbito que define; no debe interpretarse como prohibición universal de toda limitación geográfica.','corregida'],
 [6364,['52'],[],['ALU','arquitectura de computadores','operaciones seriales y paralelas'],[
  src(hw,'ITIC Academy, paquete Hardware 2026 v2, temas 52/53/54/56/57: incluye microprocesador, ALU y la clasificación serie/paralelo; el temario oficial A1 no menciona literalmente la clasificación de esta pregunta.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 52: sistemas de altas prestaciones; correspondencia de hardware cercana, no epígrafe específico de ALU.')
 ],{texto:'Atendiendo a si los dígitos binarios de los operandos se procesan simultáneamente o uno tras otro, las operaciones en una ALU pueden realizarse:'},'Se conserva C y se delimita el criterio: en paralelo se procesan simultáneamente los dígitos correspondientes; en serie se procesan sucesivamente. La redacción anterior permitía también responder B porque mezclaba dos ejes distintos de clasificación (tipo de operación y modo de procesamiento).','corregida'],
 [6365,['60'],['II-2'],['inodos','metadatos de archivos','Linux/Unix'],[
  src(inode,'Linux man-pages, inode(7): un inode almacena metadatos del archivo (identificador, propietario, permisos, marcas de tiempo, referencias a bloques, entre otros), no el contenido del archivo.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 60: sistemas operativos UNIX-LINUX.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.2: fundamentos y administración de Windows, Linux, Unix y otros sistemas operativos.')
 ],{opcion:[2,'Metadatos del objeto del sistema de archivos (por ejemplo, propietario, permisos, fechas y referencias a sus bloques de datos); no almacenan el contenido del archivo.']},'La respuesta C es correcta. Se concreta que el inode contiene metadatos y referencias a los bloques, mientras que el contenido se guarda en los bloques de datos; los nombres de directorio se asocian a números de inode, no se almacenan como nombre dentro del inode.','corregida']
 ]});
