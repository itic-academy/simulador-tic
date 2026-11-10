const fs=require('node:fs');
const path=require('node:path');
const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy48='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academy30='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qmN/view?usp=drivesdk';
const academy38='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy39='https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const src={
4676:[
 {url:'https://eur-lex.europa.eu/eli/reg/2014/910/2024-05-20/eng',referencia:'Reglamento eIDAS consolidado, art. 25.1–2: ninguna firma electrónica se rechaza solo por ser electrónica/no cualificada; solo la firma electrónica cualificada tiene efecto legal equivalente al manuscrito.'},
 {url:academy48,referencia:'ITIC Academy 2026, bloque 48: criptografía y firma digital; cotejo curricular general, sin tomar el material como fuente de la equivalencia jurídica.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 80: marco europeo y nacional de identificación y firma electrónica.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.6: identidad y firma electrónica y Reglamento eIDAS.'}
],
4677:[
 {url:'https://eur-lex.europa.eu/eli/reg/2014/910/2024-05-20/eng',referencia:'Reglamento eIDAS consolidado, art. 20.1: los prestadores cualificados de servicios de confianza se auditan por un organismo de evaluación de la conformidad al menos cada 24 meses; entregan el informe al órgano supervisor en tres días laborables desde su recepción.'},
 {url:academy48,referencia:'ITIC Academy 2026, bloque 48: firma digital y servicios de confianza como contexto curricular; el plazo se comprueba en el Reglamento eIDAS.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 80: marco europeo y nacional de identificación y firma electrónica.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.6: Reglamento eIDAS y régimen jurídico de la firma electrónica.'}
],
4678:[
 {url:'https://www.w3.org/TR/pronunciation-lexicon/',referencia:'W3C Recommendation, Pronunciation Lexicon Specification 1.0, resumen y secciones 1.1–1.3: define léxicos de pronunciación para reconocimiento automático del habla y síntesis de voz; describe su uso en VoiceXML.'},
 {url:'https://www.w3.org/TR/voicexml21/',referencia:'W3C Recommendation VoiceXML 2.1: lenguaje para aplicaciones de interacción vocal; se coteja conjuntamente con PLS, que especifica las pronunciaciones del léxico.'},
 {url:academy30,referencia:'ITIC Academy 2026, bloque 30: lenguajes y herramientas web/markup; cobertura general, no se atribuye un epígrafe específico de PLS.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 77: lenguajes y herramientas para redes globales, incluidos HTML, CSS y XML.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web y componentes de tecnologías de programación.'}
],
4679:[
 {url:'https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html',referencia:'Java Language Specification, Java SE 26, sección 8.1.1.1: una clase abstracta no puede instanciarse directamente; una subclase concreta sí puede instanciarse y ejecutar el constructor de la abstracta.'},
 {url:academy30,referencia:'ITIC Academy 2026, bloque 30: entorno Java; cotejo curricular de lenguaje.'},
 {url:academy38,referencia:'ITIC Academy 2026, bloque 38, apartado de análisis/diseño orientado a objetos (A2 D.9): conceptos de clases y objetos.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.3: características técnicas de los lenguajes y paradigmas actuales de programación.'}
],
4680:[
 {url:'https://committee.iso.org/standard/35747.html',referencia:'ISO/IEC 25023:2016, ficha oficial ISO: estándar vigente de medidas cuantitativas de calidad de producto, usado con ISO/IEC 25010; reemplaza ISO/IEC TR 9126-3, retirado.'},
 {url:'https://www.iso.org/standard/80623.html',referencia:'ISO/IEC 5055:2021: medidas automatizadas de calidad obtenidas al detectar y contar violaciones en código fuente; sustenta acotar la pregunta a una medida estática de código.'},
 {url:'https://arxiv.org/abs/1909.12521',referencia:'Schnoor y Hasselbring (2019), Comparing Static and Dynamic Weighted Software Coupling Metrics: las métricas estáticas de acoplamiento se obtienen del código fuente/compilado; las dinámicas usan datos de ejecución.'},
 {url:academy38,referencia:'ITIC Academy 2026, bloque 38, §5.4: cohesión y acoplamiento; indica como objetivo de diseño bajo acoplamiento y alta cohesión.'},
 {url:academy39,referencia:'ITIC Academy 2026, bloque 39: calidad y métricas del software; incluye A1 tema 98 y A2 tema D.13.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 98: métricas y evaluación de la calidad del software.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.13: calidad del software, su medida, modelos, métricas, normas y estándares.'}
]};
const records=[
 [4676,['80'],['I-6'],['eIDAS','firma electrónica cualificada','equivalencia manuscrita'],src[4676],null,'Respuesta D. El original simplificaba “valor ante la ley” y podía sugerir que las firmas electrónica no cualificadas carecen de efecto jurídico. El art. 25 eIDAS distingue: ninguna firma electrónica puede rechazarse únicamente por su forma o por no ser cualificada; la equivalencia legal con la manuscrita se atribuye específicamente a la cualificada.','corregida'],
 [4677,['80'],['I-6'],['eIDAS','prestador cualificado','auditoría','servicios de confianza'],src[4677],null,'Respuesta D: al menos cada 24 meses. El art. 20.1 eIDAS exige auditoría a cargo de un organismo de evaluación de la conformidad. No se confunde este control periódico con la vigilancia del órgano supervisor ni con la auditoría de otros servicios.','vigente'],
 [4678,['77'],['III-12'],['PLS','VoiceXML','léxico de pronunciación','reconocimiento del habla','síntesis de voz'],src[4678],null,'Respuesta B. PLS (Pronunciation Lexicon Specification) especifica léxicos que asocian palabras o expresiones con sus pronunciaciones y se usan con motores de reconocimiento del habla y de síntesis de voz. VoiceXML controla el diálogo de voz y SRGS define gramáticas de reconocimiento: no son la función de PLS.','vigente'],
 [4679,['67'],['II-3'],['Java','clase abstracta','instanciación','orientación a objetos'],src[4679],null,'Respuesta D, concretada en Java: una clase abstracta no puede instanciarse directamente; puede servir de superclase y sus subclases concretas sí pueden instanciarse. Una clase concreta que simplemente aún no se ha instanciado no se convierte por ello en abstracta.','corregida'],
 [4680,['98'],['III-13'],['acoplamiento','métricas de software','calidad interna','ISO 9126','código fuente'],src[4680],null,'Respuesta A, al precisar la métrica. El original no especificaba cómo se mide y confundía una propiedad general de diseño con la categoría de una métrica: el acoplamiento puede medirse estáticamente en el código (medida interna) o dinámicamente observando ejecuciones. Se formula como medida estática. La dicotomía interna/externa es terminología histórica de ISO/IEC 9126; esa parte de la serie está retirada y el marco vigente de medidas de producto es ISO/IEC 25023. No se presenta como clasificación normativa vigente de todo acoplamiento.','corregida']
];
const edits={
4676:{texto:'Según el Reglamento eIDAS, ¿qué tipo de firma electrónica tiene un efecto legal equivalente al de una firma manuscrita?',opciones:['Cualquiera, incluso si el documento no está firmado.','Solo la firma electrónica básica; la avanzada y la cualificada no tienen ese efecto.','Toda firma electrónica avanzada, por el mero hecho de ser avanzada.','La firma electrónica cualificada.'],respuesta_correcta:3,comentarios:'Respuesta D. El artículo 25.2 del Reglamento eIDAS atribuye a la firma electrónica cualificada un efecto legal equivalente al de una firma manuscrita. El apartado 1 establece, por separado, que no se puede negar efecto jurídico o admisibilidad probatoria a una firma por ser electrónica o no cualificada.'},
4676:{texto:'Según el Reglamento eIDAS, ¿qué tipo de firma electrónica tiene un efecto legal equivalente al de una firma manuscrita?',opciones:['Cualquiera, incluso si el documento no está firmado.','Solo la firma electrónica básica; la avanzada y la cualificada no tienen ese efecto.','Toda firma electrónica avanzada, por el mero hecho de ser avanzada.','La firma electrónica cualificada.'],respuesta_correcta:3,comentarios:'Respuesta D. El artículo 25.2 del Reglamento eIDAS atribuye a la firma electrónica cualificada un efecto legal equivalente al de una firma manuscrita. El apartado 1 establece, por separado, que no se puede negar efecto jurídico o admisibilidad probatoria a una firma por ser electrónica o no cualificada.'},
4679:{texto:'En Java, ¿qué tipo de clase no puede instanciarse directamente y se utiliza como base para que una subclase concrete su implementación?',opciones:['Una clase local.','Una clase anónima.','Una clase final.','Una clase abstracta.'],respuesta_correcta:3,comentarios:'Respuesta D. La JLS establece que una clase abstracta no puede instanciarse directamente, aunque puede extenderse. Una subclase no abstracta que implemente lo necesario sí puede instanciarse; por eso la expresión “clase que no tiene instancias” del original era demasiado imprecisa.'},
4680:{texto:'En la terminología histórica de métricas internas/externas del software, ¿cómo se clasifica una medida estática del acoplamiento calculada sobre dependencias entre módulos en el código fuente?',opciones:['Interna.','Externa.','Intermedia.','No es una medida de software.'],respuesta_correcta:0,comentarios:'Respuesta A, con el alcance explicitado. Una métrica estática calculada a partir del código es interna; la observación del acoplamiento durante ejecuciones corresponde a una medida dinámica. El rótulo interno/externo procede de la familia ISO/IEC 9126, retirada; ISO/IEC 25023 es el estándar vigente de medidas de calidad de producto y no debe inferirse de esta pregunta una dicotomía normativa universal.'}
};
apply({numero:'871',fecha:'2026-11-11',records,edits});
const base=path.join(__dirname,'..');
const bankFile=path.join(base,'preguntas_preparatic.json');
const logFile=path.join(__dirname,'cambios-lote-871.json');
const bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
4676:{block:'48',label:'seguridad en redes y en el nivel de aplicación; cotejo de criptografía/firma digital, no de la consecuencia jurídica específica.'},
4677:{block:'48',label:'servicios de confianza y firma digital como cobertura general; el plazo se verifica en el art. 20 eIDAS.'},
4678:{block:'30',label:'lenguajes y herramientas web/markup como contexto; no se encontró desarrollo específico de PLS en el bloque.'},
4679:{block:'38',label:'§6 análisis y diseño orientado a objetos; la pregunta concreta se contrasta además con Java Language Specification.'},
4680:{block:'39',label:'calidad y métricas del software; el bloque 38 §5.4 trata cohesión/acoplamiento como conceptos de diseño.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];
 q.clasificacion.bloque_academia=`ITIC Academy 2026, bloque ${m.block}: ${m.label}`;
 q.clasificacion.nota=`${q.revision.estado}. ${m.label} El material Academy se usa para cotejo curricular, no como autoridad jurídica o técnica.`;
 const note=`Cotejo curricular: ITIC Academy 2026, bloque ${m.block}: ${m.label} El temario oficial se contrasta con las convocatorias BOE; Academy no se usa como autoridad jurídica o técnica.`;
 q.revision.observaciones=`${q.revision.observaciones} ${note}`;
 q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:m.block==='48'?academy48:m.block==='30'?academy30:m.block==='38'?academy38:academy39,referencia:`ITIC Academy 2026, bloque ${m.block}: ${m.label}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy incorporado en las 5 preguntas y el registro del lote 871.');
