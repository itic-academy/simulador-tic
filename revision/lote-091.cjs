const records = [
  [771,[8],['I-8'],['Ley 39/2015','artículo 26','documentos públicos administrativos'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015, texto consolidado del BOE, artículo 26.1: son documentos públicos administrativos los válidamente emitidos por los órganos de las Administraciones Públicas. Los documentos remitidos por personas interesadas se regulan separadamente en el artículo 28.'}
  ],null,'Se conserva A. El artículo 26.1 define el documento público administrativo por su emisión válida por un órgano administrativo. Los documentos aportados por los interesados no pasan por ello a ser documentos públicos administrativos; la ley regula su aportación en el artículo 28.','vigente'],
  [772,[8],['I-8'],['Ley 39/2015','artículo 27','copias auténticas','metadatos'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015, texto consolidado del BOE, artículo 27.3.a: las copias electrónicas de un documento electrónico original o de una copia electrónica auténtica, con o sin cambio de formato, incluirán metadatos que acrediten su condición de copia y que se visualicen al consultar el documento.'}
  ],null,'Se conserva B. El artículo 27.3.a contiene literalmente este requisito. La opción A contradice el artículo 27.1; la C restringe indebidamente la validez y eficacia equivalente, y la D sustituye la actuación administrativa automatizada por un representante, figura que no aparece en esa regla.','vigente'],
  [773,[9],['I-8'],['Ley 39/2015','artículo 126.3','recurso extraordinario de revisión','silencio administrativo'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015, texto consolidado del BOE, artículo 126.3: si transcurren tres meses desde la interposición del recurso extraordinario de revisión sin dictarse y notificarse resolución, se entiende desestimado y queda expedita la vía contencioso-administrativa.'}
  ],null,'Se conserva A. La regla específica está en el artículo 126.3 de la Ley 39/2015 y exige que no se haya dictado y notificado resolución dentro de tres meses.','vigente'],
  [774,[11],[],['Ley 9/2017','contrato menor','artículo 118.3','aprobación del gasto','factura'],[
    {url:'https://www.boe.es/eli/es/l/2017/11/08/9/con',referencia:'Ley 9/2017, texto consolidado del BOE, artículo 118.3: exige la aprobación del gasto y la incorporación de la factura correspondiente, además del informe motivado previsto en el apartado 2. El artículo 118.4 añade documentación para obras menores.'},
    {url:'https://www.boe.es/buscar/doc.php?id=BOE-A-2019-3281',referencia:'OIReScon, Instrucción 1/2019 sobre contratos menores, publicada en el BOE: el artículo 63.4 establece publicación al menos trimestral (con la excepción legal de determinados pagos menores inferiores a 5.000 euros), no mensual.'}
  ],null,'Se acota el enunciado al artículo 118.3 porque el original preguntaba por un requisito sin indicar apartado y ofrecía más de una afirmación defendible: A reproduce el apartado 3, mientras que la publicidad de contratos menores está regulada en el artículo 63.4 y su periodicidad legal es al menos trimestral, no mensual. Se conserva A como clave única; las opciones B y C no describen el régimen vigente de umbrales y acumulación.','corregida'],
  [775,[11],[],['Ley 9/2017','artículo 20','contratos sujetos a regulación armonizada','umbral 2026-2027'],[
    {url:'https://www.boe.es/eli/es/l/2017/11/08/9/con',referencia:'Ley 9/2017, texto consolidado del BOE, artículo 20.1, actualizado con efectos desde el 1 de enero de 2026: contratos de obras y concesiones sujetos a regulación armonizada desde un valor estimado igual o superior a 5.404.000 euros.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605',referencia:'Orden HAC/1517/2025, publicada en el BOE el 26-12-2025: publica para aplicación desde 01-01-2026 los umbrales actualizados conforme a los Reglamentos Delegados (UE) 2025/2151, 2025/2152 y 2025/2150.'},
    {url:'https://eur-lex.europa.eu/eli/reg_del/2025/2151/oj',referencia:'Reglamento Delegado (UE) 2025/2151 de la Comisión, de 22-10-2025, aplicable desde 01-01-2026: sustituye en el artículo 8.1 de la Directiva 2014/23/UE el umbral de 5.538.000 por 5.404.000 euros para concesiones en 2026–2027.'}
  ],null,'Se actualiza la opción correcta de 5.538.000 a 5.404.000 euros, vigente desde el 1 de enero de 2026 para obras y concesiones. El importe anterior correspondía al periodo 2024–2025. La referencia al artículo 20 se conserva y se identifica el periodo vigente para que el dato periódico no se presente como inmutable.','corregida']
];
const edits = {
  774:{texto:'Según el artículo 118.3 de la Ley 9/2017, además del informe justificativo previsto en el apartado 2, ¿qué requisito exige la tramitación del expediente de un contrato menor?',opciones:[
    'La aprobación del gasto y la incorporación de la factura correspondiente, con los requisitos establecidos por las normas de desarrollo.',
    'Acreditar que el contratista no ha suscrito otros contratos menores que, individual o conjuntamente, superen los umbrales del artículo 118.1.',
    'Que el valor estimado sea inferior a 15.000 euros en obras y a 40.000 euros en suministros o servicios.',
    'Publicar la información de los contratos menores al menos mensualmente.'
  ]},
  775:{opcion:[0,'Sea igual o superior a 5.404.000 euros.']}
};
require('./aplicar-lote.cjs')({numero:'091',fecha:'2026-10-22',records,edits});
