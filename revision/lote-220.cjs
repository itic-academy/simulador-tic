const apply = require('./aplicar-lote.cjs');

const records = [
  [1416, [124], ['II-1'], ['aplicaciones móviles', 'framework multiplataforma', 'Swift', 'Flutter', 'React Native', 'Xamarin'],
    [{ url: 'https://developer.apple.com/swift/get-started/', referencia: 'Apple Developer, Swift overview: Swift es un lenguaje de programación; Apple distingue el lenguaje Swift de frameworks como SwiftUI.' }, { url: 'https://docs.flutter.dev/platform-integration', referencia: 'Flutter documentation: Flutter permite desarrollar aplicaciones compiladas para distintas plataformas desde una misma base de código.' }, { url: 'https://learn.microsoft.com/en-us/dotnet/maui/migration/', referencia: 'Microsoft Learn, Upgrade from Xamarin to .NET: Xamarin.Forms y Xamarin fueron tecnologías multiplataforma; el soporte concluyó el 1-05-2024 y se recomienda migrar a .NET MAUI.' }], null,
    'Se conserva Swift como única respuesta: es un lenguaje, no un framework de desarrollo multiplataforma. React Native, Flutter y Xamarin son frameworks/plataformas históricamente usados para crear aplicaciones móviles multiplataforma. Se añade una nota temporal relevante: Microsoft terminó el soporte de Xamarin el 1-05-2024; esto no altera la clasificación histórica que evalúa el ítem. Cotejo: ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1 (30-09-2026), tecnologías web, nativas, híbridas y multiplataforma. Correspondencia: A1-124/A2-II-1.', 'vigente'],
  [1417, [125, 127], ['II-13'], ['honeypot', 'señuelo', 'detección', 'ciberseguridad', 'análisis de ataques'],
    [{ url: 'https://csrc.nist.gov/glossary/term/honeypot', referencia: 'NIST CSRC Glossary, honeypot: sistema o recurso diseñado para resultar atractivo a posibles intrusos.' }, { url: 'https://www.ncsc.gov.uk/information/ncsc-glossary', referencia: 'NCSC UK, Cyber security glossary: honeypot/honeynet como sistema o red señuelo para atraer atacantes, detectar/limitar su acceso a sistemas reales y aprender del ataque.' }], null,
    'Se reemplaza la afirmación de que un honeypot permite exponer equipos «sin ningún riesgo», garantía que no puede afirmarse. Es un sistema o recurso señuelo, dispuesto de forma controlada para atraer posibles intrusos y observar/detectar sus acciones; su despliegue debe aislarse y gestionarse con medidas de seguridad. Cotejo: ITIC Academy, bloque 22 ENS, Ciberseguridad y Estrategia Nacional, versión 2026.2 (26-08-2026), y bloque 48 Seguridad en redes y aplicaciones, actualización 2026. Correspondencia: A1-125/127 y A2-II-13.', 'corregida'],
  [1418, [125, 127], ['II-13', 'IV-12'], ['spoofing', 'suplantación', 'falsificación de identidad', 'seguridad de redes'],
    [{ url: 'https://csrc.nist.gov/glossary/term/spoofing', referencia: 'NIST CSRC Glossary, spoofing: intento de acceso a un sistema haciéndose pasar por usuario autorizado; incluye impersonación, masquerading, piggybacking y mimicking.' }, { url: 'https://nvlpubs.nist.gov/nistpubs/ir/2013/NIST.IR.7298r2.pdf', referencia: 'NIST IR 7298 Rev. 2, Glossary of Key Information Security Terms: define IP spoofing como enviar un paquete que aparenta proceder de una fuente distinta de la real.' }], null,
    'Se mantiene la respuesta de suplantación técnica, pero se concreta como falsificación o presentación engañosa de identificadores/datos para que una comunicación parezca proceder de otra identidad o sistema. El término spoofing abarca distintos contextos (por ejemplo, IP, correo o identidad), y no debe confundirse con captura pasiva de tráfico (sniffing) ni con el ataque de intermediario, que puede además interceptar/modificar comunicaciones. Cotejo: ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026, y bloque 22 Ciberseguridad. Correspondencia: A1-125/127 y A2-II-13/IV-12.', 'corregida'],
  [1419, [126], ['II-13'], ['OWASP', 'seguridad de software', 'aplicaciones web', 'proyecto abierto'],
    [{ url: 'https://owasp.org/about', referencia: 'OWASP Foundation, About OWASP: define OWASP como fundación sin ánimo de lucro que trabaja para mejorar la seguridad del software mediante colaboración abierta, educación e innovación; reúne proyectos de código abierto.' }, { url: 'https://owasp.org/about/mission', referencia: 'OWASP Foundation, Our Mission: misión de ayudar a desarrolladores, defensores y organizaciones a decidir sobre seguridad de software.' }], null,
    'Se actualiza la denominación y naturaleza institucional: OWASP es actualmente la Open Worldwide Application Security Project Foundation, organización sin ánimo de lucro/comunidad abierta dedicada a mejorar la seguridad del software. Sus proyectos incluyen herramientas, estándares, documentación y formación de código abierto; no es un producto de gestión de dependencias ni un framework BDD. Cotejo: ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026. Correspondencia: A1-126 y A2-II-13.', 'corregida'],
  [1420, [127], ['II-13'], ['Estrategia Nacional de Ciberseguridad 2019', 'principios rectores', 'eficacia', 'eficiencia', 'resiliencia'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-6347', referencia: 'Orden PCI/487/2019, publicación de la Estrategia Nacional de Ciberseguridad 2019, capítulo 3: los principios rectores son unidad de acción, anticipación, eficiencia y resiliencia.' }], null,
    'Se verifica que «eficacia» no figura como principio rector en la lista del capítulo 3 de la Estrategia: el texto dice eficiencia. Unidad de acción, anticipación, eficiencia y resiliencia son los cuatro principios; se mantiene la clave A. Cotejo: ITIC Academy, bloque 22 ENS, Ciberseguridad y Estrategia Nacional, versión 2026.2 (26-08-2026). Correspondencia: A1-127 y A2-II-13.', 'vigente']
];

apply({ numero: '220', fecha: '2026-10-24', records, edits: {
  1416: { texto: '¿Cuál de estas opciones no es un framework de desarrollo de aplicaciones móviles multiplataforma, sino un lenguaje de programación?', opciones: [
    'React Native.',
    'Flutter.',
    'Swift.',
    'Xamarin (tecnología histórica cuyo soporte de Microsoft finalizó en 2024).'
  ], respuesta_correcta: 2 },
  1417: { texto: '¿Qué es un honeypot en ciberseguridad?', opciones: [
    'Un malware que explota necesariamente vulnerabilidades de día cero.',
    'Un tipo de ransomware diseñado exclusivamente para entidades bancarias.',
    'Un sistema o recurso señuelo preparado para atraer posibles intrusos y observar o detectar su actividad; debe desplegarse de forma controlada, pues no está exento de riesgo.',
    'Una modalidad de phishing que suplanta exclusivamente a una entidad bancaria.'
  ], respuesta_correcta: 2 },
  1418: { texto: 'En seguridad de sistemas y redes, ¿qué describe el spoofing?', opciones: [
    'Capturar y analizar pasivamente el tráfico de una red, sin alterar ni falsificar su origen.',
    'Falsificar o presentar engañosamente identificadores o datos para que un mensaje, paquete o agente parezca proceder de otra identidad o sistema.',
    'Saturar un servicio con solicitudes hasta impedir que atienda peticiones legítimas (denegación de servicio).',
    'Interceptar una comunicación entre dos sistemas y, necesariamente, modificar e inyectar tráfico; esa descripción corresponde a un ataque de intermediario.'
  ], respuesta_correcta: 1 },
  1419: { texto: '¿Qué es OWASP?', opciones: [
    'Una herramienta de gestión de proyectos y dependencias que también compila y documenta aplicaciones.',
    'Una fundación sin ánimo de lucro y comunidad abierta que trabaja para mejorar la seguridad del software mediante proyectos, herramientas, documentación y educación.',
    'Un framework de desarrollo cuyo objetivo principal es aplicar BDD (Behavior-Driven Development).',
    'Un servicio de correo web exclusivo de Microsoft Exchange Online.'
  ], respuesta_correcta: 1 },
  1420: { texto: 'Según el capítulo 3 de la Estrategia Nacional de Ciberseguridad 2019, ¿cuál de los siguientes términos no forma parte de sus principios rectores?', opciones: [
    'Eficacia.',
    'Resiliencia.',
    'Unidad de acción.',
    'Anticipación.'
  ], respuesta_correcta: 0 }
}});
