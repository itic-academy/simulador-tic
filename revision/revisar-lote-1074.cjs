const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const van='https://commission.europa.eu/system/files/2023-09/BR%20toolbox%20-%20Jul%202023%20-%20FINAL.pdf';
const wcag='https://www.w3.org/TR/WCAG22/';
const eni='https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331';
const nti='https://www.boe.es/buscar/act.php?id=BOE-A-2011-13170';
const ens='https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191';
const academia17='https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const academia30='https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk';
const academia20='https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk';
const academia22='https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5691,[42],['II-15'],['VAN','valor actual neto','método dinámico','flujos de caja','descuento','rentabilidad de inversiones TIC'],[
  ref(van,'Comisión Europea, Better Regulation Toolbox 2023, capítulo 8, mecánica del descuento y valores actuales netos: el VAN resulta de actualizar costes y beneficios futuros y calcular su valor presente neto.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 42: rentabilidad de las inversiones en proyectos de tecnologías de la información.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.15: evaluación de alternativas, viabilidad y control de costes de proyectos informáticos.'),
  ref(academia17,'ITIC Academy, bloque 17 Adquisición de sistemas, alternativas y rentabilidad de las inversiones, versión 2026.2, §§ 7.1–7.3: distingue métodos estáticos y dinámicos; explica que el VAN descuenta los flujos de caja y contrasta VAN, TIR y pay-back. Cobertura expresa A1-40–42/A2-II.15.')
 ],null,'Vigente, respuesta A. El VAN es un método dinámico porque calcula el valor presente de los flujos de caja de distintos periodos, aplicando una tasa de descuento, y lo compara con la inversión inicial. El plazo de recuperación es el pay-back; dividir flujos acumulados entre el desembolso inicial no define el VAN. A1-42/A2-II-15.','vigente'],
 [5692,[44],['III-14'],['WCAG','W3C','POUR','perceptible','operable','comprensible','robusto','accesibilidad web'],[
  ref(wcag,'W3C Recommendation, Web Content Accessibility Guidelines (WCAG) 2.2, sección 1, principios: perceivable, operable, understandable y robust.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 44: accesibilidad y usabilidad, W3C, diseño universal y diseño web adaptativo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.14: accesibilidad, diseño universal, usabilidad y experiencia de usuario.'),
  ref(academia30,'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: incluye desarrollo web, estándares y experiencia de usuario; el material se coteja curricularmente con A1-44/A2-III.14. La denominación y los cuatro principios se verifican directamente en WCAG 2.2 del W3C.')
 ],null,'Corregida, respuesta B. Se delimita la pregunta a los cuatro principios POUR de WCAG 2.2: perceptible, operable, comprensible y robusto. Son principios de accesibilidad del contenido web del W3C, no los siete principios del diseño universal. A1-44/A2-III-14.','corregida'],
 [5693,[45],['I-9'],['ENI','interoperabilidad semántica','interoperabilidad técnica','interoperabilidad organizativa','interoperabilidad temporal'],[
  ref(eni,'Real Decreto 4/2010, texto consolidado, anexo, definición de interoperabilidad semántica: la información intercambiada debe ser interpretable automáticamente y reutilizable por aplicaciones que no intervinieron en su creación.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 45: Esquema Nacional de Interoperabilidad y dimensiones de interoperabilidad.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: ENI y Normas Técnicas de Interoperabilidad.'),
  ref(academia20,'ITIC Academy, bloque 20 Interoperabilidad de sistemas, versión 2026.2, § 1: distingue las dimensiones jurídica, organizativa, semántica, técnica y temporal; la definición se contrasta con el anexo del RD 4/2010.')
 ],null,'Vigente, respuesta B. La interoperabilidad semántica trata de que la información intercambiada pueda interpretarse automáticamente y reutilizarse en aplicaciones que no participaron en su creación. Las opciones A, C y D describen, respectivamente, interoperabilidad temporal, técnica y organizativa. A1-45/A2-I-9.','vigente'],
 [5694,[46],['I-9'],['NTI','expediente electrónico','índice electrónico','firma del índice','metadatos mínimos obligatorios','esquemas XML'],[
  ref(nti,'Resolución de 19 de julio de 2011, NTI de Expediente Electrónico, apartados III y IV: componentes del expediente y estructura de intercambio; documentos, índice, firma del índice y metadatos mínimos son componentes; los esquemas XML se incluyen para especificar el intercambio.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 46: NTI, documentos y expedientes electrónicos e intercambio de datos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: ENI y Normas Técnicas de Interoperabilidad.'),
  ref(academia20,'ITIC Academy, bloque 20 Interoperabilidad de sistemas, versión 2026.2: cubre documentos y expedientes electrónicos, metadatos y NTI; la clasificación de componentes frente a los esquemas de intercambio se comprueba en la resolución BOE de la NTI.')
 ],null,'Corregida, respuesta D. La NTI identifica como componentes los documentos electrónicos, el índice, la firma del índice y los metadatos mínimos obligatorios. Los esquemas XML especifican estructuras de intercambio en los anexos: no son un componente del expediente. Se aclara la distinción que el enunciado original dejaba implícita. A1-46/A2-I-9.','corregida'],
 [5695,[48],['I-9'],['ENS','RD 311/2022','información clasificada','Ley 9/1968','medidas complementarias','sistemas de información'],[
  ref(ens,'Real Decreto 311/2022, texto consolidado vigente, artículo 2.2: el ENS se aplica a sistemas que tratan información clasificada, sin perjuicio de la Ley 9/1968 y otra normativa especial; pueden ser necesarias medidas de seguridad complementarias.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 48: ENS, adecuación y CCN-STIC.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: ENS, ENI y guías CCN-STIC serie 800.'),
  ref(academia22,'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2, § 2.2: actualización del marco al RD 311/2022 y estudio del ámbito ENS; cobertura A1-48/A2-I.9. La aplicación específica a información clasificada se contrasta con el artículo 2.2 del BOE.')
 ],null,'Corregida, respuesta C. El artículo 2.2 del RD 311/2022 incluye los sistemas que tratan información clasificada, sin perjuicio de la Ley 9/1968 y demás normativa especial; permite que resulten necesarias medidas de seguridad complementarias. No están excluidos del ENS y no se limita a una marca de clasificación concreta. Se actualiza la referencia al ENS vigente. A1-48/A2-I-9.','corregida']
];
const edits={
 5692:{texto:'Según las WCAG 2.2 del W3C, ¿cuáles son los cuatro principios que organizan los criterios de accesibilidad del contenido web?',opciones:['Equitativo, intuitivo, universal y confiable','Perceptible, operable, comprensible y robusto','Adaptable, predecible, descriptivo y compatible','Portable, distinguible, configurable y proporcional'],respuesta_correcta:1},
 5694:{texto:'Según la Norma Técnica de Interoperabilidad de Expediente Electrónico, ¿cuál de estos elementos no es un componente del expediente, aunque pueda aparecer en sus especificaciones de intercambio?',opciones:['Metadatos mínimos obligatorios del expediente','Firma del índice electrónico','Índice electrónico','Esquemas XML'],respuesta_correcta:3},
 5695:{texto:'Según el artículo 2.2 del Real Decreto 311/2022, ¿se aplica el ENS a los sistemas que tratan información clasificada conforme a la Ley 9/1968?',opciones:['Sí, sin perjuicio de la Ley 9/1968 y otra normativa especial; pueden ser necesarias medidas complementarias específicas.','No, estos sistemas están excluidos del ámbito del ENS.','Sí, pero el ENS impide adoptar medidas adicionales específicas.','Sí, únicamente si la información está clasificada como difusión limitada.'],respuesta_correcta:0}
};
aplicar({numero:'1074',fecha:'2026-11-12',records,edits});
