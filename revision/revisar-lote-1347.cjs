const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src={
 arm:'https://learn.arm.com/learning-paths/laptops-and-desktops/disassemble-arm64-binaries/verify-sme2/',
 specCpu:'https://www.spec.org/cpu2026/',specGpu:'https://www.spec.org/benchmarks/',
 ddr:'https://www.micron.com/content/micron/us/en/products/memory/dram-components/ddr5-sdram.html',
 mobile:'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf',
 itu:'https://www.itu.int/rec/T-REC-V.34-199802-I/en'
};
const records=[
[7056,[54],['II-1'],['lenguaje máquina','código máquina','ISA','arquitectura de computadores'],[
 {url:src.arm,referencia:'Arm Learning Path, Disassemble binaries and verify SME2: el ensamblador codifica mnemónicos y operandos definidos por la ISA Arm en palabras binarias; muestra la traducción y desensamblado de bytes concretos. El código máquina depende de la ISA destino y no es generalmente portable a arquitecturas incompatibles.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales PC y componentes.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: tecnologías, arquitecturas, componentes y capacidades de ordenadores.'}
],{texto:'¿Qué afirmación describe correctamente el código máquina de un ordenador?',opciones:[
 'Sus instrucciones y codificaciones binarias están definidas por la arquitectura/ISA destino; no suele ser portable entre arquitecturas incompatibles.','Todos los operandos deben especificarse mediante direcciones de memoria.','El formato de las instrucciones carece de campos o estructura definidos.','La mayoría de los procesadores ejecuta directamente código fuente C, sin traducción.'
],respuesta_correcta:0},'Corregida A. Se sustituyó la afirmación general de que los datos se proporcionan mediante direcciones de memoria: las instrucciones pueden usar operandos inmediatos, registros o memoria, según la ISA y el modo de direccionamiento. La ISA define la codificación de instrucciones, por lo que el código máquina no es, en general, portable entre arquitecturas incompatibles; los procesadores ejecutan instrucciones máquina, no código fuente C.', 'corregida'],
[7057,[54],['II-1'],['benchmark','prueba de rendimiento','CPU','GPU'],[
 {url:src.specCpu,referencia:'SPEC CPU 2026: sus suites normalizadas miden y comparan rendimiento intensivo de CPU y subsistema de memoria usando cargas definidas.'},
 {url:src.specGpu,referencia:'SPEC benchmarks, SPECviewperf: prueba de referencia para medir rendimiento gráfico 3D de sistemas con OpenGL, DirectX y Vulkan.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: componentes y prestaciones de equipos personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes, funcionalidades y capacidades de ordenadores.'}
],undefined,'Vigente B. Una prueba de rendimiento o benchmark ejecuta una carga definida y mide resultados comparables; existen suites específicas de CPU y también de gráficos/GPU. Un único resultado no representa todas las cargas reales, pero el término distingue la prueba de una KPI o de métricas de marketing.', 'vigente'],
[7058,[54],['II-1'],['DDR-SDRAM','SDR SDRAM','doble tasa de transferencia','memoria'],[
 {url:src.ddr,referencia:'Micron, DDR5 DRAM FAQ: DDR transfiere datos en los flancos ascendente y descendente de la señal de reloj. Para el mismo reloj y anchura de bus, esto duplica las transferencias por ciclo frente a SDR SDRAM de tasa simple.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales y componentes.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes y funcionalidades de ordenadores.'}
],{texto:'Con la misma frecuencia de reloj y anchura de bus que una SDR SDRAM, ¿qué tasa de transferencia teórica ofrece una DDR-SDRAM por ciclo de reloj?',opciones:[
 'La misma: transfiere datos sólo en el flanco ascendente.','La mitad, porque DDR necesita dos ciclos por transferencia.','El doble: transfiere datos en los flancos ascendente y descendente.','Cuatro veces más, mediante cuatro transferencias por cada ciclo.'
],respuesta_correcta:2},'Corregida C. Se sustituyó la comparación genérica con PC66/PC100/PC133, que mezclaba clases de ancho de banda de SDRAM con generaciones de memoria y no fijaba frecuencia ni anchura del bus. DDR transfiere en ambos flancos y, comparada en iguales condiciones de reloj y bus con SDR de una transferencia por ciclo, duplica la tasa teórica.', 'corregida'],
[7059,[54],['II-1','IV-15'],['CYOD','BYOD','COPE','gestión de dispositivos móviles'],[
 {url:src.mobile,referencia:'NIST SP 800-124 Rev. 2, §5.1.3.3: CYOD es un dispositivo personal adquirido por el empleado pero elegido de una lista que proporciona la empresa para acceder a sus redes y software. El mismo documento diferencia BYOD (propiedad personal) y COPE (propiedad/arrendamiento de la organización con algún uso personal permitido).'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: gestión y seguridad de equipos personales y dispositivos móviles.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1 (dispositivos y tecnologías actuales) y IV-15 (gestión MDM/EMM/UEM).'}
],undefined,'Vigente B. CYOD significa que la persona elige un dispositivo de una lista aprobada por la organización; en el modelo descrito por NIST lo adquiere para uso personal, aunque se autoriza para acceder a recursos corporativos. BYOD implica dispositivo propiedad del empleado. COPE es propiedad corporativa y puede permitir uso personal, por lo que no es necesariamente «sólo corporativo».', 'vigente'],
[7060,[50,110],['IV-7'],['ITU-T V.34','módem','33,6 kbit/s','telecomunicaciones'],[
 {url:src.itu,referencia:'ITU-T Recommendation V.34 (02/98), estado In force: especifica módems con velocidades de señalización de datos de hasta 33 600 bit/s. La tasa efectiva negociada puede ser inferior según la conexión y el equipo.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 50 (normalización) y tema 110 (sistemas de cableado/equipos de interconexión). La materia de acceso por línea telefónica se relaciona curricularmente con transmisión.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-7: medios de transmisión guiados y parámetros significativos.'}
],{texto:'¿Cuál es la velocidad máxima de señalización de datos que especifica la Recomendación UIT-T V.34 para un módem?',opciones:[
 '33,2 kbit/s.','33,4 kbit/s.','33,6 kbit/s (33 600 bit/s).','33,8 kbit/s.'
],respuesta_correcta:2},'Corregida C. El enunciado original no precisaba si preguntaba por la tasa máxima admitida o por la tasa de una conexión concreta. La recomendación V.34 especifica hasta 33 600 bit/s; un módem puede negociar una tasa inferior según condiciones y capacidades. La UIT mantiene la recomendación en vigor.', 'corregida']
];
aplicar({numero:'1347',fecha:'2026-11-15',records});
