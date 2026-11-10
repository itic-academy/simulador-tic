require('./aplicar-lote.cjs')({
  numero: '811', fecha: '2026-11-10',
  records: [
    [4376, [16], ['I-5'], ['Ley Orgánica 10/2022', 'libertad sexual', 'principios rectores', 'discriminación interseccional'], [
      { url: 'https://www.boe.es/eli/es/lo/2022/09/06/10/con/20240802', referencia: 'BOE, texto consolidado de la Ley Orgánica 10/2022, art. 2.e): incluye literalmente como principio rector la atención a la discriminación interseccional y múltiple.' },
      { url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 1-10-2026: incluye políticas de igualdad, discapacidad, dependencia y violencia de género, correspondientes entre otros a A1 tema 16 y A2 tema I-5.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 16: estructura social, igualdad, discapacidad, dependencia y políticas contra la violencia de género.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema I-5: políticas de igualdad, discapacidad, dependencia y violencia de género.' }
    ], null, 'La opción A reproduce el principio rector del artículo 2.e) de la LO 10/2022. Se conserva la clave y el texto, que delimitan correctamente la pregunta al catálogo legal de principios.', 'vigente'],

    [4377, [27], ['I-7'], ['RGPD', 'derecho de acceso', 'historia clínica', 'plazo de respuesta', 'AEPD'], [
      { url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa', referencia: 'Reglamento (UE) 2016/679, arts. 12.3 y 15: el responsable comunica las actuaciones sobre la solicitud sin dilación indebida y, como máximo, en un mes; una prórroga de hasta dos meses adicionales debe comunicarse dentro del primer mes y justificarse.' },
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188', referencia: 'Ley 41/2002, art. 18.1: el paciente puede acceder a la documentación de su historia clínica y obtener copia, con las reservas legales relativas a terceros y anotaciones subjetivas.' },
      { url: 'https://www.aepd.es/areas-de-actuacion/salud/tus-derechos-en-relacion-con-tus-datos-de-salud', referencia: 'AEPD, Tus derechos en relación con tus datos de salud: el acceso a la historia clínica puede solicitarse al responsable, público o privado; si no hay respuesta en el plazo máximo de un mes o es insatisfactoria, cabe reclamar ante la AEPD, acreditando la solicitud y su recepción.' },
      { url: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 08 «Protección de datos», edición 2026: cotejo del RGPD, derechos de los interesados y autoridades de control.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 27: régimen jurídico de protección de datos y derechos.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema I-7: régimen de protección de datos personales y derechos digitales.' }
    ], { texto: 'Un paciente solicita a una clínica privada copia de su historia clínica. Ha transcurrido un mes desde la recepción acreditada de la solicitud sin respuesta ni comunicación de prórroga. ¿Cuál afirmación es correcta?', opciones: [
      'El paciente puede reclamar ante la AEPD por falta de atención en plazo. El responsable debía facilitar la respuesta en un mes o comunicar dentro de ese plazo una prórroga motivada; la Ley 41/2002 reconoce además el acceso a la historia clínica, con sus límites legales.',
      'La AEPD debe desestimar la reclamación porque el acceso a la historia clínica se rige exclusivamente por la Ley 41/2002 y queda fuera del RGPD.',
      'La clínica puede denegar siempre el acceso porque los datos de salud son una categoría especial.',
      'Solo cabe reclamar si la clínica tenía obligación de nombrar un delegado de protección de datos.'
    ] }, 'La falta de respuesta no queda justificada por tratarse de datos de salud ni por el régimen clínico: el RGPD regula el ejercicio del derecho y la Ley 41/2002 reconoce el acceso del paciente. El plazo ordinario es un mes; puede ampliarse hasta dos meses adicionales por complejidad o número de solicitudes, pero el responsable debe informar de la prórroga y sus motivos durante el primer mes. La AEPD exige acreditar la solicitud y su recepción para tramitar una reclamación por falta de atención. Clave A.', 'corregida'],

    [4378, [11], [], ['Ley 9/2017', 'LCSP', 'contrato de suministro', 'contrato de fabricación'], [
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902', referencia: 'Ley 9/2017, art. 16.3.c): califica como suministros los contratos de fabricación de bienes elaborados con arreglo a características peculiares fijadas previamente por la entidad contratante, incluso si esta aporta materiales.' },
      { url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 05 «Contratación, presupuestos y compra TIC», actualización 2026: cotejo de la LCSP y de los tipos contractuales.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 11: contratos públicos, tipos y características generales.' }
    ], { texto: 'Según el artículo 16.3.c) de la Ley 9/2017, los contratos de fabricación en los que el empresario elabora bienes conforme a características peculiares fijadas previamente por la entidad contratante, aunque esta aporte parte o todos los materiales, tienen la consideración de contratos de:', opciones: ['Obras.', 'Suministro.', 'Servicios.', 'Concesión de servicios.'] }, 'El artículo 16.3.c) de la LCSP incluye expresamente los contratos de fabricación en la categoría de suministro. Que la Administración aporte los materiales no altera esa clasificación. La clave B se mantiene.', 'corregida'],

    [4379, [27], ['I-7'], ['RGPD', 'categorías especiales', 'datos de salud', 'discapacidad', 'artículo 9'], [
      { url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa', referencia: 'Reglamento (UE) 2016/679, arts. 4.15 y 9.1 y considerando 35: la definición de datos relativos a la salud comprende información relativa a una discapacidad; su tratamiento está dentro de las categorías especiales, sujeto a la prohibición general y a las excepciones y garantías del art. 9.2 y 9.3.' },
      { url: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 08 «Protección de datos», edición 2026: cotejo de categorías especiales de datos, bases jurídicas y derechos del RGPD.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 27: Reglamento (UE) 2016/679, categorías de datos y régimen jurídico.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema I-7: protección de datos personales y régimen jurídico.' }
    ], { texto: 'Cuando la información personal identifica a una persona y revela que tiene una discapacidad, ¿cómo se clasifica a efectos del RGPD?', opciones: [
      'Como dato ordinario en todos los casos; la discapacidad nunca puede revelar información relativa a la salud.',
      'Como dato relativo a la salud y, por ello, categoría especial del artículo 9; su tratamiento no queda automáticamente legitimado, sino que debe cumplir una base del artículo 6 y una excepción aplicable del artículo 9.2, además de las garantías pertinentes.',
      'Como dato que siempre exige consentimiento explícito, sin excepción ni siquiera cuando concurra otra habilitación legal del artículo 9.2.',
      'Como dato que no queda sujeto a protección de datos si se trata con fines administrativos.'
    ] }, 'El considerando 35 del RGPD incluye expresamente la discapacidad entre los ejemplos de información sobre salud; los datos relativos a la salud son categoría especial (art. 9.1). La categoría especial no significa que todo tratamiento sea imposible ni que el consentimiento explícito sea la única vía: además de una base del art. 6, debe concurrir una excepción del art. 9.2 y observarse las garantías aplicables. Clave B.', 'corregida'],

    [4380, [5], [], ['Unión Europea', 'ampliación', 'Ucrania', 'país candidato', 'negociaciones de adhesión'], [
      { url: 'https://enlargement.ec.europa.eu/countries/ukraine_en', referencia: 'Comisión Europea, Ukraine – Enlargement and Eastern Neighbourhood, consultado el 10-11-2026: identifica a Ucrania como país candidato; solicitud de adhesión el 28-2-2022, estatus de candidato en junio de 2022, negociaciones formalmente iniciadas en junio de 2024 y primer clúster de negociación abierto el 15-6-2026. Ucrania aún no es Estado miembro.' },
      { url: 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 02 «La Unión Europea», versión 2026.2 de 1-10-2026: cotejo de ampliación, estatus de los países candidatos y proceso de adhesión; corresponde al tema 5 de A1 y el propio documento indica que no aplica al programa A2.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 5: evolución, objetivos y ampliación de la Unión Europea.' }
    ], { texto: 'A fecha de 10 de noviembre de 2026, ¿cuál es la situación de Ucrania respecto de su adhesión a la Unión Europea?', opciones: [
      'Es Estado miembro de la Unión desde 2022.',
      'Es país candidato y mantiene negociaciones de adhesión, pero todavía no es Estado miembro.',
      'Es Estado miembro desde antes de la invasión rusa a gran escala.',
      'No ha solicitado adherirse ni tiene estatus de país candidato.'
    ] }, 'La opción B es correcta en la fecha indicada: Ucrania solicitó la adhesión el 28-2-2022, recibió estatus de país candidato en junio de 2022 y las negociaciones de adhesión se iniciaron formalmente en 2024. La Comisión Europea informa que se abrió el primer clúster negociador en junio de 2026; ninguno de esos hitos equivale a la adhesión, por lo que Ucrania aún no es miembro. Se fecha expresamente la pregunta porque el estado del proceso puede cambiar.', 'corregida']
  ],
  edits: {
    4377: {
      texto: 'Un paciente solicita a una clínica privada copia de su historia clínica. Ha transcurrido un mes desde la recepción acreditada de la solicitud sin respuesta ni comunicación de prórroga. ¿Cuál afirmación es correcta?',
      opciones: [
        'El paciente puede reclamar ante la AEPD por falta de atención en plazo. El responsable debía facilitar la respuesta en un mes o comunicar dentro de ese plazo una prórroga motivada; la Ley 41/2002 reconoce además el acceso a la historia clínica, con sus límites legales.',
        'La AEPD debe desestimar la reclamación porque el acceso a la historia clínica se rige exclusivamente por la Ley 41/2002 y queda fuera del RGPD.',
        'La clínica puede denegar siempre el acceso porque los datos de salud son una categoría especial.',
        'Solo cabe reclamar si la clínica tenía obligación de nombrar un delegado de protección de datos.'
      ]
    },
    4378: {
      texto: 'Según el artículo 16.3.c) de la Ley 9/2017, los contratos de fabricación en los que el empresario elabora bienes conforme a características peculiares fijadas previamente por la entidad contratante, aunque esta aporte parte o todos los materiales, tienen la consideración de contratos de:',
      opciones: ['Obras.', 'Suministro.', 'Servicios.', 'Concesión de servicios.']
    },
    4379: {
      texto: 'Cuando la información personal identifica a una persona y revela que tiene una discapacidad, ¿cómo se clasifica a efectos del RGPD?',
      opciones: [
        'Como dato ordinario en todos los casos; la discapacidad nunca puede revelar información relativa a la salud.',
        'Como dato relativo a la salud y, por ello, categoría especial del artículo 9; su tratamiento no queda automáticamente legitimado, sino que debe cumplir una base del artículo 6 y una excepción aplicable del artículo 9.2, además de las garantías pertinentes.',
        'Como dato que siempre exige consentimiento explícito, sin excepción ni siquiera cuando concurra otra habilitación legal del artículo 9.2.',
        'Como dato que no queda sujeto a protección de datos si se trata con fines administrativos.'
      ]
    },
    4380: {
      texto: 'A fecha de 10 de noviembre de 2026, ¿cuál es la situación de Ucrania respecto de su adhesión a la Unión Europea?',
      opciones: [
        'Es Estado miembro de la Unión desde 2022.',
        'Es país candidato y mantiene negociaciones de adhesión, pero todavía no es Estado miembro.',
        'Es Estado miembro desde antes de la invasión rusa a gran escala.',
        'No ha solicitado adherirse ni tiene estatus de país candidato.'
      ]
    }
  }
});
