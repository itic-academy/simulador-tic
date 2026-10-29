const apply = require('./aplicar-lote.cjs');

const sources = {
  classful: [
    {url:'https://www.rfc-editor.org/rfc/rfc791.html', referencia:'IETF, RFC 791, Internet Protocol, §3.2: definición histórica de las clases IPv4 y de sus campos de red y host (A /8, B /16, C /24).'},
    {url:'https://www.rfc-editor.org/rfc/rfc4632.html', referencia:'IETF, RFC 4632, CIDR: documenta el paso de números de red classful a prefijos classless; hoy no se deduce la máscara por clase.'}
  ],
  rohs: [
    {url:'https://eur-lex.europa.eu/eli/dir/2011/65/oj?locale=es', referencia:'Directiva 2011/65/UE (RoHS), arts. 1 y 4: restricciones al uso de sustancias peligrosas en aparatos eléctricos y electrónicos para proteger salud humana y medio ambiente.'},
    {url:'https://eur-lex.europa.eu/eli/dir/2012/19/oj?locale=es', referencia:'Directiva 2012/19/UE (RAEE/WEEE): régimen de recogida, tratamiento, reutilización, reciclaje y valorización de residuos de aparatos eléctricos y electrónicos, distinto de RoHS.'},
    {url:'https://www.energystar.gov/about', referencia:'U.S. EPA, About ENERGY STAR: programa voluntario de eficiencia energética; no es una iniciativa sobre restricción de sustancias tóxicas.'},
    {url:'https://www.iso.org/insights/iso-9001-explained', referencia:'ISO, ISO 9001 explained: ISO 9001 se ocupa de sistemas de gestión de calidad; ISO 14001 de sistemas de gestión ambiental.'},
    {url:'https://www.iso.org/standard/14001', referencia:'ISO 14001:2026, norma publicada vigente sobre sistemas de gestión ambiental; confirma que la descripción ambiental del distractor no corresponde a ISO 9001.'}
  ],
  magerit: [
    {url:'https://pilar.ccn-cert.cni.es/docman/documentos/1-magerit-v3-libro-i-metodo/file', referencia:'Ministerio de Hacienda y Administraciones Públicas/CCN, MAGERIT v3, Libro I, Método, §3.1.4: el impacto de una amenaza se determina sobre activos a partir de su valor y la degradación; se distingue del riesgo, que incorpora probabilidad.'},
    {url:'https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/400-Guias_Generales/401-glosario_abreviaturas/topics/525.html', referencia:'CCN-STIC 401, Glosario de abreviaturas, entrada «Impacto»: consecuencia que sobre un activo tiene la materialización de una amenaza (MAGERIT).'}
  ],
  rs232: [
    {url:'https://www.govinfo.gov/content/pkg/GOVPUB-C13-78a707a7feaa8fcc11d1eaaaa9583c72/pdf/GOVPUB-C13-78a707a7feaa8fcc11d1eaaaa9583c72.pdf', referencia:'U.S. Department of Commerce, A technical guide to computer-communications interface standards, §2.1: RS-232-C define características eléctricas, mecánicas y funcionales de la interfaz serie DTE-DCE.'},
    {url:'https://www.itu.int/ITU-T/recommendations/rec.aspx?id=2820', referencia:'ITU-T X.200 (in force), modelo OSI de siete capas; §7.7 define la capa física. La asociación didáctica de RS-232 a la capa 1 es un mapeo conceptual, no significa que RS-232 sea una norma del modelo OSI.'}
  ],
  usb: [
    {url:'https://www.usb.org/usb-32-0', referencia:'USB Implementers Forum, USB 3.2: la especificación consolida las generaciones USB 3.x e identifica tasas SuperSpeed de 5, 10 y 20 Gbit/s.'},
    {url:'https://www.usb.org/node/214', referencia:'USB Implementers Forum, FAQ de tasas: USB Hi-Speed (USB 2.0) tiene tasa nominal de 480 Mbit/s.'}
  ]
};

apply({numero:'511',fecha:'2026-10-29',records:[
 [2871,[115],['II-8'],['IPv4','direccionamiento classful','clases A B C','CIDR','contenido histórico'],sources.classful,'','Se limita el reactivo al direccionamiento classful histórico: las máscaras predeterminadas A, B y C dejan respectivamente 24, 16 y 8 bits de host, por lo que el número de direcciones de host por red disminuye de A a C. Se explicita que CIDR sustituyó el uso de clases para asignación y encaminamiento actuales. La clave 0 es válida únicamente bajo el supuesto histórico ahora declarado; se clasifica como histórica, no como práctica vigente.','historica'],
 [2872,[14,41],['IV-3'],['RoHS','RAEE','residuos electrónicos','sustancias peligrosas','ENERGY STAR','ISO 9001','ISO 14001'],sources.rohs,'','Se distingue la restricción de sustancias peligrosas de RoHS (Directiva 2011/65/UE) de la gestión de residuos RAEE (Directiva 2012/19/UE). ENERGY STAR es un programa de eficiencia energética. ISO 9001 trata gestión de calidad; la gestión ambiental corresponde a ISO 14001. La opción correcta sigue siendo la 1 y se actualiza el distractor ISO para que la distinción sea precisa.','corregida'],
 [2873,[47],['II-10'],['MAGERIT v3','análisis de riesgos','activo','amenaza','impacto','riesgo'],sources.magerit,'','Se ajusta el enunciado a la terminología de MAGERIT v3: el impacto es la consecuencia que sobre un activo tiene la materialización de una amenaza. Se separa del riesgo, que considera además la probabilidad/frecuencia. Se mantiene la clave 0.','corregida'],
 [2874,[110],['II-8','IV-7'],['OSI','capa física','capa 1','RS-232-C','interfaz serie','DTE','DCE'],sources.rs232,'','Se precisa que EIA/TIA-232-C define propiedades eléctricas y mecánicas de una interfaz serie DTE-DCE y que su asociación convencional es la capa física (capa 1). No es una especificación emitida por el modelo OSI; se evita confundir sus funciones con las de enlace de datos. Se mantiene la clave 0.','corregida'],
 [2875,[54],['IV-7'],['USB 3.0','SuperSpeed','USB 2.0','Hi-Speed','tasa de señalización','Gbit/s','Mbit/s'],sources.usb,'','Se concreta la comparación: USB 3.0/SuperSpeed original anuncia 5 Gbit/s y USB 2.0 Hi-Speed 480 Mbit/s; 5.000/480 ≈ 10,4, por lo que «10 veces» es una aproximación, no una igualdad exacta. Se refiere a tasas nominales de señalización, no a rendimiento útil de transferencia. USB-IF integró posteriormente las generaciones 3.x bajo la especificación USB 3.2. Se conserva la clave 2.','corregida']
],edits:{
 2871:{texto:'En el direccionamiento IPv4 classful histórico, ¿qué afirmación compara correctamente el número de direcciones de host por red usando las máscaras predeterminadas de las clases A, B y C?',opciones:['El número de direcciones de host por red disminuye de la clase A a la clase C.','El número de redes disponibles aumenta de A a C.','La clase C admite más hosts por red que la clase B.','La dirección numéricamente mayor pertenece siempre a una red de clase A.']},
 2872:{texto:'¿Qué afirmación distingue correctamente la Directiva RoHS de otras iniciativas y normas ambientales?',opciones:['RoHS regula principalmente la recogida y el reciclaje de los residuos de aparatos eléctricos y electrónicos (RAEE).','RoHS restringe el uso de determinadas sustancias peligrosas en aparatos eléctricos y electrónicos para proteger la salud humana y el medio ambiente.','ENERGY STAR es un programa de la Green IT Alliance para prohibir sustancias peligrosas en los equipos eléctricos.','ISO 9001 es la norma internacional que especifica los sistemas de gestión ambiental de las organizaciones.'],respuesta_correcta:1},
 2873:{texto:'Según MAGERIT v3, ¿cómo se denomina la consecuencia que sobre un activo tiene la materialización de una amenaza?',opciones:['Impacto.','Riesgo.','Magnitud.','Contramedida.'],respuesta_correcta:0},
 2874:{texto:'El estándar serie EIA/TIA-232-C (RS-232-C), que define características eléctricas y mecánicas de la interfaz entre equipos DTE y DCE, se asocia convencionalmente en el modelo OSI con la capa:',opciones:['Física (capa 1).','Enlace de datos (capa 2).','Red (capa 3).','Transporte (capa 4).'],respuesta_correcta:0},
 2875:{texto:'Comparando las tasas nominales de señalización del USB 3.0/SuperSpeed original (5 Gbit/s) y del USB 2.0 Hi-Speed (480 Mbit/s), ¿qué relación aproximada existe entre ambas?',opciones:['Aproximadamente 15 veces.','Son prácticamente iguales.','Aproximadamente 10 veces.','USB 3.0 funciona a 480 Mbit/s.'],respuesta_correcta:2}
}});
