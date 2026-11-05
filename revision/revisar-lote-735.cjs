const apply = require('./aplicar-lote.cjs');
const iso14764 = 'https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf';
const iso25010 = 'https://www.iso.org/standard/78176.html';
const iso25010Preview = 'https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf';
const metricav3 = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf';
const maintenanceStudy = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3610582/';
apply({
  numero: '735', fecha: '2026-11-05',
  records: [
    [3996, ['101'], ['III-8'], ['mantenimiento', 'mantenimiento adaptativo', 'ISO/IEC/IEEE 14764:2022'], [{ url: iso14764, referencia: 'ISO/IEC/IEEE 14764:2022, 3.1.1; definición de mantenimiento adaptativo.' }], '', 'Se usa la definición de ISO/IEC/IEEE 14764:2022: adaptación tras la entrega para mantener el producto utilizable en un entorno cambiado o cambiante. La pregunta original mezclaba autores, taxonomías y alternativas válidas sin indicar el criterio.', 'corregida'],
    [3997, ['101'], ['III-8'], ['mantenimiento perfectivo', 'MÉTRICA v3', 'referencia histórica'], [{ url: metricav3, referencia: 'MÉTRICA v3, interfaz de Mantenimiento de Sistemas de Información, tipología de mantenimiento; la fuente primaria del método.' }, { url: iso14764, referencia: 'ISO/IEC/IEEE 14764:2022, 3.1.9; definición actual de mantenimiento perfectivo, coincidente en lo esencial.' }], '', 'Se acota expresamente a MÉTRICA v3. En ese marco, perfectivo comprende mejoras de calidad interna, reestructuración, claridad y rendimiento/eficiencia; no debe presentarse como taxonomía universal ni confundirse con el mantenimiento adaptativo. El método se conserva como referencia histórica de examen.', 'historica'],
    [3998, ['99', '101'], ['III-8'], ['costes de mantenimiento', 'estimación de esfuerzo', 'evidencia empírica'], [{ url: maintenanceStudy, referencia: 'Hejazi Dehaghani y Hajrahimi, “Which Factors Affect Software Projects Maintenance Cost More?”, tablas 1–2: experiencia en lenguaje, calidad de documentación e independencia estructural aparecen como factores considerados en el estudio.' }], '', 'La generalización original no indicaba marco ni evidencia. Se transforma en una pregunta sobre los factores enumerados por un estudio empírico concreto: experiencia en lenguaje, calidad de documentación e independencia estructural (en vez de afirmar que la interdependencia tiene un efecto universal y de magnitud fija). La respuesta conjunta es la opción d.', 'corregida'],
    [3999, ['98'], ['III-13'], ['calidad del software', 'mantenibilidad', 'ISO/IEC 25010:2023'], [{ url: iso25010, referencia: 'ISO/IEC 25010:2023, página oficial ISO: modelo vigente de calidad del producto, edición 2 publicada en noviembre de 2023.' }, { url: iso25010Preview, referencia: 'ISO/IEC 25010:2023, vista de la norma; sustituye y revisa la edición 2011.' }], '', 'Se sustituye la imprecisa pregunta sobre “métricas usadas” (que no especificaba catálogo ni método) por una pregunta sobre subcaracterísticas del modelo vigente ISO/IEC 25010:2023. Modularidad, reusabilidad y testabilidad se incluyen en mantenibilidad; “aprobaciones” no es una subcaracterística. No se confunde una característica de calidad con una métrica concreta.', 'corregida'],
    [4000, ['101'], ['III-8'], ['mantenimiento', 'mantenimiento adaptativo', 'ISO/IEC/IEEE 14764:2022'], [{ url: iso14764, referencia: 'ISO/IEC/IEEE 14764:2022, 3.1.1; cambio de entorno de operación y mantenimiento adaptativo.' }], '', 'La clave adaptativo es válida: ISO/IEC/IEEE 14764:2022 define esta modificación postentrega para mantener utilizable el software en un entorno cambiado o cambiante. La pregunta se conserva, con explicación actualizada.', 'vigente']
  ],
  edits: {
    3996: {
      texto: 'Según ISO/IEC/IEEE 14764:2022, ¿qué tipo de mantenimiento modifica el producto después de su entrega para mantenerlo utilizable en un entorno cambiado o cambiante?',
      opciones: ['Correctivo', 'Adaptativo', 'Perfectivo', 'Preventivo'],
      respuesta_correcta: 1
    },
    3997: { texto: 'Según la clasificación de MÉTRICA v3, ¿qué describe el mantenimiento perfectivo?', respuesta_correcta: 1 },
    3998: {
      texto: 'En el estudio empírico de Hejazi Dehaghani y Hajrahimi sobre factores del coste de mantenimiento, ¿cuáles de los siguientes aparecen en la lista de factores considerada?',
      opciones: ['Experiencia con el lenguaje de programación.', 'Calidad de la documentación.', 'Independencia estructural del software.', 'Todos los anteriores.'],
      respuesta_correcta: 3
    },
    3999: {
      texto: 'Según el modelo de calidad del producto ISO/IEC 25010:2023, ¿cuál de las siguientes no es una subcaracterística de mantenibilidad?',
      opciones: ['Modularidad.', 'Reusabilidad.', 'Testabilidad.', 'Aprobaciones.'],
      respuesta_correcta: 3
    }
  }
});
