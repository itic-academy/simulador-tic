const apply = require('./aplicar-lote.cjs');

const records = [
  [8346,[64],['II-5'],['transacciones','atomicidad','2PC'],[
    {url:'https://www.postgresql.org/docs/current/two-phase.html',referencia:'PostgreSQL, Two-Phase Transactions: preparación seguida de confirmación o reversión.'},
    {url:'https://www.postgresql.org/docs/current/tutorial-transactions.html',referencia:'PostgreSQL, Transactions: atomicidad y control explícito mediante BEGIN, COMMIT y ROLLBACK.'}
  ],{opciones:['Una transacción es una unidad atómica: todos sus cambios se confirman juntos o ninguno queda confirmado.','Una avería puede dejar una transacción preparada a la espera de conocer la decisión global.','En 2PC primero se prepara y luego se comunica la decisión de confirmar o abortar.','Las transacciones solo pueden ejecutarse sin conexión y nunca en una sesión interactiva.']},'Corregida D. Una sesión interactiva puede abrir y cerrar una transacción. En 2PC una avería puede demorar la resolución, y no implica por sí sola la reversión de una decisión de confirmación ya tomada.','corregida'],
  [8347,[115],['II-8'],['IPv6','direccionamiento','transición'],[
    {url:'https://www.rfc-editor.org/rfc/rfc8200.html#section-1',referencia:'IETF RFC 8200, §1: direcciones de 128 bits frente a los 32 bits de IPv4.'}
  ],{texto:'¿Qué cambio de IPv6 frente a IPv4 amplía el espacio de direcciones?',opciones:['El aumento del ancho de banda del enlace.','La sincronización de todos los nodos en una fecha común.','La optimización del medio inalámbrico.','El aumento de la longitud de las direcciones de 32 a 128 bits.']},'Corregida D. IPv6 amplía el espacio de direccionamiento al usar 128 bits. Cambiar el protocolo IP no determina el ancho de banda físico del enlace.','corregida'],
  [8348,[77],['II-9'],['XML','atributos','sintaxis'],[
    {url:'https://www.w3.org/TR/xml/#NT-AttValue',referencia:'W3C XML 1.0, producción 10: delimitación del valor con comillas simples o dobles.'}
  ],null,'Vigente A. XML exige comillas simples o dobles como delimitadores, también para valores que representan números o fechas.','vigente'],
  [8349,[75],['III-15'],['NoSQL','Redis','clave-valor'],[
    {url:'https://redis.io/docs/latest/develop/data-types/',referencia:'Documentación oficial de Redis: cada valor se almacena asociado a una clave y puede usar distintos tipos de datos.'}
  ],null,'Vigente B. Redis ofrece acceso por clave y admite valores de diferentes tipos, entre ellos cadenas, listas y hashes.','vigente'],
  [8350,[47],['II-13'],['continuidad','RTO','RPO'],[
    {url:'https://csrc.nist.gov/glossary/term/recovery_time_objective',referencia:'NIST CSRC, Recovery Time Objective: tiempo de recuperación admisible antes de perjudicar los procesos de misión o negocio.'}
  ],null,'Vigente D. El RTO expresa el plazo objetivo de recuperación tras una interrupción. El RPO se refiere al punto anterior al incidente al que deben recuperarse los datos.','vigente']
];

apply({numero:'1609',fecha:'2026-11-26',records});
