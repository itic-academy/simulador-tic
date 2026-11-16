const apply = require('./aplicar-lote.cjs');

const firewall = 'https://csrc.nist.gov/pubs/sp/800/41/r1/final';
const logs = 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final';
const jmeter = 'https://jmeter.apache.org/';
const ec = 'https://www.eclemma.org/';
const coax = 'https://www.belden.com/products/cable/video-cable/catv-cable/ctf100';
const metrica = 'https://administracionelectronica.gob.es/PAe/metrica';
const metricaproject = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf';

const records = [
  [7826, [125], ['IV-12'], ['cortafuegos', 'firewall', 'filtrado de tráfico', 'reglas de acceso', 'seguridad perimetral'], [
    { url: firewall, referencia: 'NIST SP 800-41 Rev. 1, Guidelines on Firewalls and Firewall Policy: la función de cortafuegos aplica reglas de política para controlar el tráfico entre redes o zonas; el filtrado de paquetes es una función básica.' }
  ], { texto: '¿Qué función caracteriza principalmente a un cortafuegos de red?', opciones: ['Filtrar o permitir tráfico entre interfaces o zonas de seguridad aplicando una política y un conjunto de reglas.','Publicar y servir páginas web mediante HTTP.','Resolver nombres de dominio de forma autoritativa.','Gestionar exclusivamente la autenticación interactiva de usuarios en un directorio.'], respuesta_correcta: 0 }, 'Corregida A. La pregunta original atribuía la función de cortafuegos a un tipo genérico de “servidor de red”, clasificación dependiente de una taxonomía docente y no de una función normalizada. Se reformula sobre la función técnica: control del tráfico según política/reglas, que puede implementarse en dispositivos, equipos o software.', 'corregida'],
  [7827, [48], ['II-13'], ['registros de seguridad', 'logs', 'análisis de auditoría', 'control de detección', 'ENS'], [
    { url: logs, referencia: 'NIST SP 800-53 Rev. 5, control AU-6 (Audit Record Review, Analysis, and Reporting): exige revisar, analizar e informar sobre los registros de auditoría relacionados con seguridad y privacidad; su función es detectar actividad inusual o no autorizada.' }
  ], { texto: 'Dentro de la clasificación funcional de controles preventivos, detectivos, disuasorios y correctivos, ¿cómo se clasifica revisar y analizar periódicamente los registros de seguridad para identificar actividad inusual?', opciones: ['Preventivo.','Detectivo.','Disuasorio.','Correctivo.'], respuesta_correcta: 1 }, 'Vigente B. El análisis de logs busca identificar señales de actividad anómala o incidentes ya ocurridos o en curso, por lo que actúa como control detectivo; no debe confundirse con medidas que evitan, disuaden o corrigen el incidente.', 'vigente'],
  [7828, [96], ['III-7'], ['pruebas de software', 'caja blanca', 'cobertura de código', 'EclEmma', 'JMeter'], [
    { url: ec, referencia: 'EclEmma, documentación oficial: analiza cobertura de código Java e identifica qué partes del código se ejecutan durante una prueba.' },
    { url: jmeter, referencia: 'Apache JMeter, documentación oficial del proyecto: herramienta de prueba de carga y medición del rendimiento de servicios; no es una herramienta de cobertura de código fuente.' }
  ], { texto: '¿Cuál de estas herramientas no está destinada a medir cobertura de código en pruebas de caja blanca de una aplicación Java?', opciones: ['EclEmma.','eCobertura.','Apache JMeter.','JaCoCo.'], respuesta_correcta: 2 }, 'Corregida C. EclEmma, eCobertura y JaCoCo son herramientas de cobertura Java; JMeter se diseña para pruebas de carga y rendimiento de sistemas/servicios. Se explicita Java y el propósito de la herramienta para evitar que nombres o versiones heredados vuelvan ambiguo el ítem.', 'corregida'],
  [7829, [110, 121], ['IV-7'], ['CATV', 'cable coaxial', 'impedancia característica', '75 ohmios'], [
    { url: coax, referencia: 'Belden, ficha técnica de cable coaxial CATV CTF100: identifica la impedancia nominal de la línea como 75 ohmios y declara conformidad con EN 50117.' }
  ], { texto: '¿Qué impedancia característica nominal es habitual en el cable coaxial de distribución empleado en redes CATV?', opciones: ['75 Ω.','50 Ω.','0 Ω.','Tanto 75 Ω como 50 Ω son valores intercambiables para el mismo cable CATV.'], respuesta_correcta: 0 }, 'Vigente A. El coaxial de distribución CATV se especifica habitualmente como línea de 75 Ω. No se afirma que todos los cables coaxiales tengan esa impedancia: 50 Ω se emplea en otros sistemas y aplicaciones de radiofrecuencia.', 'vigente'],
  [7830, [95], ['III-2'], ['MÉTRICA v3', 'participantes', 'perfil consultor', 'especialista en comunicaciones', 'técnico de sistemas'], [
    { url: metrica, referencia: 'Portal de Administración Electrónica, metodología MÉTRICA v3: referencia oficial para la metodología y sus materiales.' },
    { url: metricaproject, referencia: 'MÉTRICA v3, Gestión de Proyectos, documento oficial del Ministerio de Administraciones Públicas. La clasificación de participantes de MÉTRICA sitúa al Especialista en Comunicaciones dentro del perfil Consultor; este perfil aporta asesoramiento especializado.' }
  ], { texto: 'Según la clasificación de participantes de MÉTRICA v3, ¿a qué perfil pertenece el Especialista en Comunicaciones?', opciones: ['Jefe de Proyecto.','Directivo.','Consultor.','Analista.'], respuesta_correcta: 2 }, 'Vigente C. MÉTRICA agrupa al Especialista en Comunicaciones dentro del perfil Consultor, cuya función es asesorar en ámbitos de conocimiento especializado. No es el perfil de coordinación y dirección del Jefe de Proyecto ni el de elaboración de requisitos del Analista.', 'vigente']
];

apply({ numero: '1505', fecha: '2026-11-16', records });
