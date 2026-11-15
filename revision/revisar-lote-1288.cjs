const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1288',fecha:'2026-11-15',records:[
  [6761,[69],['II-14'],['servidor web','software de código abierto','Apache HTTP Server','Caddy','NGINX','Dell PowerEdge'],[
    src('https://httpd.apache.org/index.html','Apache HTTP Server Project: identifica httpd como servidor web open source.'),
    src('https://github.com/caddyserver/caddy/blob/master/LICENSE','Repositorio oficial de Caddy: licencia Apache 2.0 para Caddy v2.'),
    src('https://nginx.org/en/index.html','NGINX: identifica nginx como servidor HTTP y documenta su distribución bajo licencia BSD de dos cláusulas.'),
    src('https://www.dell.com/en-us/shop/poweredge/sr/servers','Dell: PowerEdge es una familia de servidores físicos/rack y torre, no un producto de software servidor HTTP.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 69: software de código abierto/libre y aplicaciones en entornos ofimáticos y servidores web.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.14: software libre y propietario, tipos de licencias y protección jurídica.')
  ],{texto:'¿Cuál de las siguientes opciones NO es software servidor web de código abierto?',opciones:[
    'Apache HTTP Server (httpd).','Dell PowerEdge.','Caddy 2.','NGINX Open Source.'
  ],respuesta_correcta:1},'Se conserva B. Se acotan los nombres de las ediciones y se distingue software de hardware: Apache httpd, Caddy 2 y NGINX Open Source son servidores HTTP de código abierto; PowerEdge es una familia de servidores físicos Dell.','corregida'],

  [6762,[93],['III-9'],['SOLID','principio de segregación de interfaces','ISP','diseño orientado a objetos'],[
    src('https://learn.microsoft.com/en-us/archive/msdn-magazine/2014/may/csharp-best-practices-dangers-of-violating-solid-principles-in-csharp','Microsoft, C# Best Practices: explica el Interface Segregation Principle: los clientes no deben depender de métodos que no usan ni verse obligados a implementar interfaces ajenas a su propósito.'),
    src('https://citeseerx.ist.psu.edu/document?doi=ebb61099827882460dc8f20a80ddf789617e1289&repid=rep1&type=pdf','Robert C. Martin, Principles and Patterns, sección 5, Interface Segregation Principle: formula ISP como evitar que clientes dependan de interfaces/métodos que no usan.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 93: técnicas de diseño de software, diseño por capas y patrones.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.9: análisis/diseño orientado a objetos y patrones de diseño.')
  ],{texto:'En diseño orientado a objetos, ¿qué principio SOLID evita que los clientes dependan de interfaces o métodos que no utilizan?',opciones:[
    'Principio abierto-cerrado.','Principio de segregación de interfaces (ISP).','Principio de responsabilidad única.','Principio de sustitución de Liskov.'
  ],respuesta_correcta:1},'Se conserva B. Se sustituye la expresión imprecisa «interfaces con finalidad específica» por la regla central del ISP: los clientes no deben depender de métodos que no usan. No debe confundirse con responsabilidad única, que se refiere a los motivos de cambio de un módulo.','corregida'],

  [6763,[],['II-7'],['contenedores','orquestación','Docker Engine','Swarm','AKS','OpenShift','Kubernetes'],[
    src('https://docs.docker.com/engine/swarm/','Docker Docs, Swarm mode: Docker Engine incluye Swarm mode para administrar un clúster y desplegar servicios; por tanto, «Docker» a secas no permite clasificarlo inequívocamente como no orquestador.'),
    src('https://docs.docker.com/engine/swarm/key-concepts/','Docker Docs, conceptos de Swarm: distingue contenedores independientes de servicios y tareas administrados por un swarm.'),
    src('https://learn.microsoft.com/en-us/azure/aks/what-is-aks','Microsoft Learn, Azure Kubernetes Service: AKS es un servicio administrado de Kubernetes para desplegar y gestionar aplicaciones en contenedores.'),
    src('https://www.redhat.com/en/technologies/cloud-computing/openshift','Red Hat, OpenShift: plataforma empresarial Kubernetes para desarrollar, desplegar y gestionar aplicaciones contenedorizadas.'),
    src('https://kubernetes.io/docs/concepts/','Kubernetes, conceptos: plataforma para gestionar cargas y servicios contenedorizados.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.7: contenedores/microservicios y despliegue, monitorización y escalado.')
  ],{texto:'¿Cuál es un motor de contenedores cuando se ejecuta únicamente en modo autónomo, sin activar su función de orquestación de clúster?',opciones:[
    'Kubernetes.','Docker Engine ejecutando contenedores independientes, sin Swarm mode.','Azure Kubernetes Service (AKS).','Red Hat OpenShift.'
  ],respuesta_correcta:1},'Se conserva la intención de B, pero se sustituye «Docker» por una condición técnica explícita. Docker Engine incorpora Swarm mode y sí puede orquestar; la respuesta solo se refiere a su uso autónomo con contenedores independientes. Kubernetes, AKS y OpenShift gestionan orquestación basada en Kubernetes.','corregida'],

  [6764,[96],['III-7'],['pruebas de software','caja negra','pruebas basadas en especificación','ISTQB','caja blanca'],[
    src('https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf','ISTQB Certified Tester Foundation Level syllabus v4.0.1, §4.1: las técnicas de caja negra (basadas en especificación) se derivan del comportamiento especificado sin referencia a la estructura interna.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 96: procesos, planificación, niveles y técnicas de pruebas y garantía de calidad del software.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.7: pruebas, planificación, documentación y pruebas de software.')
  ],{texto:'¿Qué tipo de pruebas deriva los casos del comportamiento o función especificados para el producto sin consultar su estructura interna ni su implementación?',opciones:[
    'Pruebas de caja blanca (basadas en estructura).','Pruebas de caja negra (basadas en especificación).','Pruebas de caja gris.','Pruebas basadas exclusivamente en la experiencia del probador.'
  ],respuesta_correcta:1},'Se corrige la respuesta a B. El enunciado describe pruebas de caja negra o basadas en especificación, no pruebas data-driven: la técnica se define por derivar casos del comportamiento especificado sin conocer la estructura interna.','corregida'],

  [6765,[100,102],['IV-4'],['SemVer','versionado semántico','versiones','gestión de configuración','versionado de software'],[
    src('https://semver.org/spec/v2.0.0.html','Semantic Versioning 2.0.0, especificación normativa: las versiones normales son enteros no negativos; 0.y.z corresponde al desarrollo inicial y no estable; un cambio compatible de errores incrementa PATCH, no lo reinicia.'),
    src(a1,'BOE-A-2025-25938, anexo I, temas 100 y 102: gestión de la configuración y de versiones.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.4: configuración, control de cambios y versiones.')
  ],{texto:'SemVer 2.0.0 usa la forma MAJOR.MINOR.PATCH y admite etiquetas opcionales de prelanzamiento y metadatos de compilación. ¿Qué afirmación es correcta?',opciones:[
    'MAJOR, MINOR y PATCH admiten enteros negativos.','PATCH vuelve a cero cada vez que se corrige cualquier error.','Una versión 0.MINOR.PATCH indica desarrollo inicial; la API aún no se considera estable y puede cambiar.'
  ],respuesta_correcta:2},'Se conserva C. La especificación SemVer 2.0.0 define 0.y.z para desarrollo inicial, en el que la API no debe considerarse estable. Los componentes X, Y y Z de una versión normal son enteros no negativos, y PATCH se incrementa ante correcciones compatibles en vez de reiniciarse por cada error.','corregida']
]});
