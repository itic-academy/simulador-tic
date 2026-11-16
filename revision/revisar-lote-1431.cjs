const apply = require('./aplicar-lote.cjs');

const records = [
  [7456, [43], ['II-14'], ['programas de ordenador', 'derecho de autor', 'Directiva 2009/24/CE', 'Convenio de Berna'], [
    { url: 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex:32009L0024', referencia: 'EUR-Lex, Directiva 2009/24/CE, texto codificado vigente sobre protección jurídica de programas de ordenador: art. 1.1 dispone su protección por derecho de autor como obras literarias con arreglo al Convenio de Berna; art. 1.3 establece el criterio de originalidad como creación intelectual propia del autor. Su artículo 10 derogó la Directiva 91/250/CEE.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930', referencia: 'Texto refundido de la Ley de Propiedad Intelectual, arts. 10.1.i y 96.2: los programas de ordenador están protegidos como obras y la originalidad es creación intelectual propia del autor.' },
    { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, bloque 18 «Protección jurídica, licencias y control del software», versión 2026.1: incluye el marco de propiedad intelectual y protección de programas de ordenador. La directiva y el criterio jurídico se contrastan con EUR-Lex y el BOE.' }
  ], {
    texto: 'Conforme a la Directiva 2009/24/CE vigente sobre protección jurídica de programas de ordenador, ¿qué afirmación es correcta?',
    opciones: [
      'Excluye los programas desarrollados para Linux, el software libre y el shareware.',
      'Los Estados miembros protegerán los programas por derecho de autor como obras literarias según el Convenio de Berna, si son originales como creación intelectual propia del autor.',
      'Regula los aspectos del comercio electrónico relacionados con la propiedad intelectual.'
    ], respuesta_correcta: 1
  }, 'Corregida B. Se reemplaza la referencia obsoleta a la Directiva 91/250/CEE, derogada y codificada por la Directiva 2009/24/CE. Se conserva la respuesta sustantiva, incorporando el criterio de originalidad del artículo 1.3 y evitando exclusiones inexistentes por sistema operativo o modalidad de licencia.', 'corregida'],

  [7457, [44], ['III-14'], ['WAI', 'W3C', 'accesibilidad web'], [
    { url: 'https://www.w3.org/WAI/about/', referencia: 'W3C Web Accessibility Initiative, About WAI: WAI es la Web Accessibility Initiative del W3C y desarrolla estándares y recursos de apoyo para la accesibilidad web.' },
    { url: 'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Tema 044 «Accesibilidad y usabilidad», epígrafes sobre W3C, accesibilidad web y pautas WCAG. Es un documento de curso de 2021; se usa solo para el encaje curricular, y la denominación WAI se contrasta en la fuente vigente del W3C.' }
  ], {
    texto: 'La iniciativa WAI del W3C se denomina:',
    opciones: ['Web Access Initiative.', 'Web Accessibility Initiative.', 'Web Access Inclusion.', 'Web Accessibility Inclusion.'],
    respuesta_correcta: 1
  }, 'Corregida B. WAI significa Web Accessibility Initiative. Se aclara que es una iniciativa/programa del W3C, no un «comité» con ese nombre, y se corrigen las erratas del original.', 'corregida'],

  [7458, [44, 98], ['III-13', 'III-14'], ['usabilidad', 'ISO 9241-11', 'ISO/IEC 9126', 'calidad del software'], [
    { url: 'https://www.iso.org/standard/63500.html', referencia: 'ISO, ficha oficial de ISO 9241-11:2018, edición vigente confirmada en 2023: norma sobre definiciones y conceptos de usabilidad; define un marco para aplicar el concepto a sistemas interactivos, productos y servicios.' },
    { url: 'https://www.iso.org/standard/22749.html', referencia: 'ISO, ficha oficial de ISO/IEC 9126-1:2001, modelo de calidad de producto software. La frase del enunciado original —producto comprensible, aprendible, utilizable y atractivo en condiciones especificadas— procede de esta norma histórica, no de ISO/IEC 25010:2011 ni de ISO 9241-11.' },
    { url: 'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Tema 044 «Accesibilidad y usabilidad», apartados 2.1 sobre usabilidad en ISO, familia ISO 25000 e ISO 9241. El documento menciona varias ediciones antiguas; la respuesta actual se contrasta con la ficha de ISO 9241-11:2018.' }
  ], {
    texto: 'Según la norma vigente ISO 9241-11:2018, ¿qué norma de la serie ISO 9241 establece el marco actual para definir y aplicar el concepto de usabilidad a sistemas, productos y servicios?',
    opciones: ['RFC 2865.', 'ISO/IEC 25010:2011.', 'ISO 9241-11:2018.', 'RFC 2866.'],
    respuesta_correcta: 2
  }, 'Corregida C. El texto de partida atribuye a ISO/IEC 25010:2011 una definición que en realidad coincide con la antigua ISO/IEC 9126-1:2001. La norma actual ISO/IEC 25010:2023 es el modelo de calidad de producto, mientras que ISO 9241-11:2018, confirmada en 2023, es la norma vigente de definiciones y conceptos de usabilidad. Se formula de nuevo para que no quede como respuesta correcta una atribución histórica errónea.', 'corregida'],

  [7459, [44], ['III-14'], ['WCAG 2.1', 'WCAG 2.0', 'W3C', 'accesibilidad'], [
    { url: 'https://www.w3.org/TR/WCAG21/', referencia: 'W3C Recommendation, WCAG 2.1: indica que el contenido que conforma WCAG 2.1 también conforma WCAG 2.0 y que la publicación de WCAG 2.1 no depreca ni sustituye WCAG 2.0; WCAG 2.1 añadió criterios de éxito y pautas para organizarlos.' },
    { url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', referencia: 'W3C WAI, WCAG Overview: WCAG 2.0, 2.1 y 2.2 son estándares existentes; las versiones posteriores no deprecian ni sustituyen las anteriores y W3C recomienda usar la última versión. WCAG 2.1 añade una pauta y 17 criterios de éxito.' },
    { url: 'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Tema 044 «Accesibilidad y usabilidad», epígrafe sobre WCAG 2.1 y estándares W3C. Su contenido curricular se distingue del estado vigente de versiones, contrastado en W3C WAI.' }
  ], {
    texto: 'Según el W3C, ¿qué afirmación describe correctamente la relación entre WCAG 2.1 y WCAG 2.0?',
    opciones: [
      'WCAG 2.1 rompe la compatibilidad y una página que la cumple no puede cumplir WCAG 2.0.',
      'WCAG 2.1 amplía 2.0 de forma compatible: si el contenido cumple 2.1, también cumple 2.0; la publicación de 2.1 no deprecó ni sustituyó 2.0.',
      'WCAG 2.1 se aplica solo a dispositivos móviles y no a sitios web.',
      'La publicación de WCAG 2.1 convirtió automáticamente WCAG 2.0 en una recomendación obsoleta.'
    ], respuesta_correcta: 1
  }, 'Corregida B. El original hacía discutible la opción sobre una «nueva pauta»: WCAG 2.1 añadió criterios de éxito y pautas para organizar las adiciones. Se pregunta ahora por la relación normativa inequívoca: compatibilidad retrospectiva, no depreciación de WCAG 2.0 y ausencia de sustitución automática.', 'corregida'],

  [7460, [48], ['I-9'], ['Esquema Nacional de Seguridad', 'ENS', 'RD 311/2022', 'reevaluación periódica'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', referencia: 'Real Decreto 311/2022, texto consolidado del BOE, art. 5: enumera los principios básicos del ENS; la letra f) es «reevaluación periódica». Entre los principios también figuran seguridad como proceso integral, gestión basada en riesgos, prevención/detección/respuesta/conservación, líneas de defensa, vigilancia continua y diferenciación de responsabilidades.' },
    { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, bloque 48 «Seguridad de Redes y Aplicación», versión 2026: cubre el ENS y su actualización al RD 311/2022. La lista exacta de principios se contrasta con el artículo 5 del BOE.' }
  ], {
    texto: 'Conforme al artículo 5 del Real Decreto 311/2022, ¿cuál de las siguientes opciones es un principio básico del Esquema Nacional de Seguridad?',
    opciones: [
      'El enfoque de soluciones de seguridad multilaterales.',
      'El carácter multidimensional de la seguridad.',
      'La reevaluación periódica.',
      'La interoperabilidad técnica como principio básico enumerado en el artículo 5.'
    ], respuesta_correcta: 2
  }, 'Corregida C. El art. 5.f del RD 311/2022 incluye expresamente la reevaluación periódica entre los principios básicos del ENS. Se acota al artículo vigente y se reemplaza el «Todos los anteriores» original: el enfoque multilateral y el carácter multidimensional no pertenecen a la lista actual, por lo que el enunciado inicial no admitía correctamente la opción D.', 'corregida']
];

apply({ numero: '1431', fecha: '2026-11-16', records });
