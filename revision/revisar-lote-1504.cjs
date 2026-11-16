const apply = require('./aplicar-lote.cjs');

const spring = 'https://docs.spring.io/spring-boot/reference/';
const angular = 'https://angular.dev/overview';
const ens = 'https://www.boe.es/eli/es/rd/2022/05/03/311/con';
const svid = 'https://bitsavers.trailing-edge.com/pdf/att/unix/SVID/System_V_Interface_Definition_Issue_2_Volume_2_1986.pdf';
const svidOverview = 'https://bitsavers.org/pdf/att/unix/System_V_386_Release_4/0-13-957515-4_Unix_System_V_386_Release_4_Product_Overview_and_Master_Index_1990.pdf';
const atmForum = 'https://www.broadband-forum.org/download/af-tm-0121.000.pdf';
const etsi = 'https://www.etsi.org/deliver/etsi_ts/101600_101699/10167401/01.02.02_60/ts_10167401v010202p.pdf';
const jdbc = 'https://docs.oracle.com/en/java/javase/26/docs/api/java.sql/java/sql/CallableStatement.html';
const statement = 'https://docs.oracle.com/en/java/javase/26/docs/api/java.sql/java/sql/Statement.html';

const records = [
  [7821, [65], ['III-12'], ['desarrollo web', 'frameworks', 'SPA', 'Spring Boot', 'front-end'], [
    { url: spring, referencia: 'Spring, Spring Boot Reference: describe el framework para crear aplicaciones Spring autónomas y listas para producción; no es un framework JavaScript de cliente específico para construir SPA.' },
    { url: angular, referencia: 'Angular, documentación oficial: framework de desarrollo de aplicaciones web cliente, incluida la construcción de aplicaciones de una sola página.' }
  ], { texto: '¿Cuál de los siguientes es un framework para aplicaciones Java del lado servidor y no un framework JavaScript de cliente para construir SPA?', opciones: ['AngularJS.','Spring Boot.','Vue.js.','React.'], respuesta_correcta: 1 }, 'Corregida B. El enunciado original era impreciso: Meteor es un framework full-stack que también permite aplicaciones SPA, por lo que incluirlo junto con AngularJS/Vue.js impedía una comparación limpia. Se reemplaza por React y se explicita la diferencia: Spring Boot es del ecosistema Java/Spring para aplicaciones de servidor, mientras los otros son frameworks/librerías JavaScript de cliente usados en SPA.', 'corregida'],
  [7822, [48], ['I-9'], ['ENS', 'Real Decreto 311/2022', 'artículo 12', 'requisitos mínimos', 'mínimo privilegio'], [
    { url: ens, referencia: 'Real Decreto 311/2022, art. 12.6.h, texto consolidado del BOE: incluye expresamente “mínimo privilegio” entre los requisitos mínimos que desarrolla la política de seguridad. Los principios de seguridad integral, líneas de defensa y diferenciación de responsabilidades se regulan en los artículos 5, 8 y 11, respectivamente.' }
  ], { texto: 'Según el artículo 12.6 del Real Decreto 311/2022, ¿cuál figura expresamente entre los requisitos mínimos que desarrollará la política de seguridad de la información?', opciones: ['Líneas de defensa.','Mínimo privilegio.','Seguridad integral.','Diferenciación de responsabilidades.'], respuesta_correcta: 1 }, 'Vigente B. El artículo 12.6.h enumera el mínimo privilegio como requisito mínimo. Las demás opciones son principios básicos del ENS (arts. 5, 8 y 11), no elementos de esa lista del artículo 12.6. El enunciado se acota al apartado exacto para evitar confundir principios y requisitos.', 'vigente'],
  [7823, [60], ['II-2'], ['UNIX', 'System V', 'SVID', 'AT&T', 'estándares históricos'], [
    { url: svid, referencia: 'AT&T, System V Interface Definition, Issue 2 (1986), publicación histórica que especifica las interfaces comunes de UNIX System V para favorecer portabilidad entre sus implementaciones.' },
    { url: svidOverview, referencia: 'AT&T, UNIX System V/386 Release 4 Product Overview and Master Index (1990): identifica la System V Interface Definition como la definición publicada por AT&T de las interfaces de UNIX System V y explica su función de compatibilidad.' }
  ], { texto: 'Históricamente, ¿qué especificación publicó AT&T para definir interfaces comunes entre las implementaciones de UNIX System V y favorecer la portabilidad de aplicaciones?', opciones: ['System V Interface Definition (SVID).','BSD.','POSIX, publicado por IEEE.','OSF/1.'], respuesta_correcta: 0 }, 'Histórica A. SVID es la especificación de interfaces de AT&T para UNIX System V. No debe confundirse con POSIX, desarrollado como estándar abierto por IEEE, ni con BSD u OSF/1.', 'historica'],
  [7824, [113], ['IV-10'], ['ATM', 'calidad de servicio', 'VBR-RT', 'vídeo comprimido', 'tráfico variable'], [
    { url: atmForum, referencia: 'ATM Forum, Traffic Management Specification v4.1 (AF-TM-0121.000), §2.1.2: rt-VBR está destinado a aplicaciones en tiempo real con tráfico de tasa variable y requisitos sensibles al retardo.' },
    { url: etsi, referencia: 'ETSI TS 101 674-1, anexo A.2.2: como ejemplo de servicios ATM de tasa variable en tiempo real cita la videoconferencia que utiliza códecs de vídeo de tasa variable.' }
  ], { texto: 'En las categorías históricas de servicio ATM, ¿cuál es adecuada para vídeo comprimido en tiempo real con tasa de bits variable y requisitos sensibles al retardo?', opciones: ['UBR (Unspecified Bit Rate).','VBR-NRT (Non-Real-Time Variable Bit Rate).','VBR-RT (Real-Time Variable Bit Rate).','CBR (Constant Bit Rate).'], respuesta_correcta: 2 }, 'Histórica C. VBR-RT atiende tráfico de tasa variable sensible al retardo, como vídeo comprimido en tiempo real. CBR corresponde a tasa constante; VBR-NRT no ofrece el requisito de tiempo real y UBR no proporciona garantías equivalentes. ATM es una tecnología de legado, por lo que se conserva explícitamente el marco histórico.', 'historica'],
  [7825, [67], ['III-10'], ['Java', 'JDBC', 'CallableStatement', 'execute', 'result sets', 'procedimientos almacenados'], [
    { url: jdbc, referencia: 'Java SE 26 API, java.sql.CallableStatement: una llamada puede devolver uno o varios ResultSet; estos resultados se manejan con métodos heredados de Statement.' },
    { url: statement, referencia: 'Java SE 26 API, java.sql.Statement: execute ejecuta una sentencia que puede devolver resultados de varios tipos; getMoreResults permite avanzar por los resultados sucesivos una vez ejecutada.' }
  ], { texto: 'Al iniciar mediante JDBC la ejecución de un CallableStatement cuyo procedimiento almacenado puede devolver varios conjuntos de resultados, ¿qué método se utiliza?', opciones: ['execute().','executeQuery().','executeProcedure().','executeUpdate().'], respuesta_correcta: 0 }, 'Vigente A. execute() inicia una sentencia cuyo resultado puede incluir varios ResultSet o recuentos de actualización. Después se inspecciona el resultado actual y se avanza con getMoreResults(); executeQuery() está pensado para una consulta que devuelve un único ResultSet.', 'vigente']
];

apply({ numero: '1504', fecha: '2026-11-16', records });
