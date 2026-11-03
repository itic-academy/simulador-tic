const apply = require('./aplicar-lote.cjs');
const ley = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887';
const leyAltosCargos = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444';
const estatuto = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2024-15944';

const records = [
  [3751, [25], ['I-4'], ['Ley 19/2013', 'artículo 31.4', 'competencia sancionadora', 'Consejo de Ministros', 'altos cargos'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 31.4.a-b: el Consejo de Ministros impone la sanción a miembros del Gobierno y Secretarios de Estado; el ministro competente en la denominación literal de la ley lo hace respecto de otros altos cargos de la AGE. El art. 31.2 regula separadamente la incoación.' }
  ], undefined, 'Se precisa que se pregunta por la imposición, no por la incoación. El artículo 31.4.a atribuye al Consejo de Ministros la sanción cuando la persona responsable es miembro del Gobierno o Secretario de Estado; la letra b regula los demás altos cargos de la AGE. La referencia ministerial literal del precepto conserva una denominación histórica.', 'corregida'],
  [3752, [25], ['I-4'], ['Ley 19/2013', 'artículos 2 y 3', 'capítulo III', 'derecho de acceso', 'partidos políticos', 'publicidad activa'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, arts. 2.1 y 3: los sujetos del art. 2 quedan sujetos al título I; partidos políticos, sindicatos y organizaciones empresariales del art. 3 solo a las disposiciones del capítulo II (publicidad activa), no al capítulo III del derecho de acceso.' }
  ], undefined, 'La clave se confirma. Los partidos políticos, organizaciones sindicales y empresariales aparecen en el artículo 3, que extiende a esos sujetos únicamente las obligaciones del capítulo II de publicidad activa. El capítulo III del derecho de acceso se aplica a los sujetos del artículo 2.', 'vigente'],
  [3753, [25], ['I-4'], ['Ley 3/2015', 'artículo 3', 'principios de altos cargos', 'integridad', 'austeridad', 'transparencia y responsabilidad'], [
    { url: leyAltosCargos, referencia: 'Ley 3/2015 consolidada, art. 3.1: enumera interés general, integridad, objetividad, transparencia y responsabilidad, y austeridad; no incluye solidaridad en esa enumeración.' }
  ], undefined, 'La clave se confirma: el artículo 3.1 enumera interés general, integridad, objetividad, transparencia y responsabilidad, y austeridad. Solidaridad no forma parte de esta lista legal de principios del ejercicio del alto cargo.', 'vigente'],
  [3754, [25], ['I-4'], ['Ley 19/2013', 'artículo 36', 'RD 615/2024', 'Comisión de Transparencia y Buen Gobierno', 'representación local', 'FEMP'], [
    { url: estatuto, referencia: 'RD 615/2024, Estatuto vigente del CTBG, art. 16: remite la composición de la Comisión a las vocalías enumeradas por el art. 36.2 de la Ley 19/2013.' },
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 36.2 y 36.4: enumera las vocalías; separadamente permite convocar a una reunión anual a un representante local propuesto por la FEMP, que no adquiere por ello la condición de miembro.' }
  ], undefined, 'Se reformula para distinguir composición e invitación. El artículo 36.2 enumera los miembros de la Comisión; un representante local propuesto por la FEMP puede ser convocado a la reunión anual del apartado 4, pero no es vocal ni miembro por esa circunstancia.', 'corregida'],
  [3755, [25], ['I-4'], ['Ley 19/2013', 'artículos 12, 14 y 17.3', 'derecho de acceso', 'personas solicitantes', 'motivación'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, arts. 12 y 17.3: todas las personas son titulares del derecho y no están obligadas a motivar la solicitud; la ausencia de motivación no es por sí sola causa de rechazo. Art. 14 establece límites materiales al acceso.' }
  ], undefined, 'La clave se confirma: el artículo 12 reconoce el derecho a todas las personas. El artículo 17.3 dispone que no es obligatorio motivar la solicitud y que la falta de motivación no basta para rechazarla. Esto no elimina los límites materiales del artículo 14; la identidad debe poder constar conforme al artículo 17.2.', 'vigente']
];

const edits = {
  3751: {
    texto: 'Conforme al artículo 31.4 de la Ley 19/2013, ¿quién impone la sanción cuando el alto cargo responsable tiene la condición de miembro del Gobierno o Secretario de Estado?',
    opciones: [
      'El ministro competente en materia de función pública, en todos los casos.',
      'El Consejo de Ministros.',
      'El Ministro de Hacienda y Administraciones Públicas, en todos los casos.',
      'La Oficina de Conflictos de Intereses.'
    ],
    respuesta_correcta: 1,
    comentarios: 'El art. 31.4.a atribuye esta imposición al Consejo de Ministros. No debe confundirse con la incoación del procedimiento, regulada en el art. 31.2.'
  },
  3754: {
    texto: 'Según el artículo 36 de la Ley 19/2013 y el artículo 16 del Estatuto vigente del CTBG, ¿qué representante puede ser convocado a una reunión anual de la Comisión, pero no es miembro de ella por ese hecho?',
    opciones: [
      'Un representante de la Administración local propuesto por la FEMP.',
      'Un representante del Tribunal de Cuentas.',
      'Un representante del Defensor del Pueblo.',
      'Un representante de la Agencia Española de Protección de Datos.'
    ],
    respuesta_correcta: 0,
    comentarios: 'El art. 36.2 enumera miembros y vocalías; el apartado 4 permite convocar a un representante local propuesto por la FEMP a la reunión anual, sin convertirlo por ello en miembro.'
  }
};

apply({ numero: '687', fecha: '2026-11-03', records, edits });
