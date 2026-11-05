const apply=require('./aplicar-lote.cjs');
const records=[
 [3881,[4],['I-3'],['Secretarios de Estado','AGE','Presidencia del Gobierno','Ley 40/2015','artículo 62'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',referencia:'Ley 40/2015, art. 62.1, texto consolidado BOE: los Secretarios de Estado actúan bajo la dirección del titular del Departamento al que pertenezcan; si están adscritos a Presidencia del Gobierno, bajo la del Presidente.'}
 ],undefined,'Se verifica la clave: la dirección ordinaria corresponde al titular del departamento y, si el órgano se adscribe a Presidencia del Gobierno, al Presidente del Gobierno (art. 62.1 Ley 40/2015).','vigente'],
 [3882,[6],['I-3'],['sector público institucional estatal','organismos públicos','organismos autónomos','entidades públicas empresariales','agencias estatales','Ley 40/2015','artículo 84'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',referencia:'Ley 40/2015, art. 84.1.a, texto consolidado BOE: los organismos públicos vinculados o dependientes de la AGE se clasifican en organismos autónomos, entidades públicas empresariales y agencias estatales.'}
 ],undefined,'Se verifica la opción C con la clasificación vigente del art. 84.1.a Ley 40/2015: organismos autónomos, entidades públicas empresariales y agencias estatales. Las autoridades administrativas independientes forman otra categoría del sector público institucional, pero no se incluyen en esa subclasificación de organismos públicos.','vigente'],
 [3883,[8],['I-8'],['procedimiento administrativo','iniciación de oficio','solicitud del interesado','Ley 39/2015','artículo 54'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565',referencia:'Ley 39/2015, art. 54, texto consolidado BOE: los procedimientos podrán iniciarse de oficio o a solicitud del interesado.'}
 ],undefined,'Se verifica la clave B: el art. 54 de la Ley 39/2015 recoge las dos clases generales de iniciación. Los artículos 58 y siguientes desarrollan la iniciación de oficio; la iniciación a solicitud se regula después.','vigente'],
 [3884,[8],['I-8'],['Administraciones Públicas','personalidad jurídica única','Ley 40/2015','artículo 3.4'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',referencia:'Ley 40/2015, art. 3.4, texto consolidado BOE: cada Administración Pública actúa para el cumplimiento de sus fines con personalidad jurídica única.'}
 ],undefined,'Se verifica la clave B: el art. 3.4 de la Ley 40/2015 atribuye personalidad jurídica única a cada Administración Pública para el cumplimiento de sus fines.','vigente'],
 [3885,[8],['I-8'],['cómputo de plazos','días hábiles','sábados','domingos','festivos','Ley 39/2015','artículo 30.2'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565',referencia:'Ley 39/2015, art. 30.2, texto consolidado BOE: salvo que por Ley o Derecho de la Unión Europea se exprese otro cómputo, los plazos por días son hábiles, excluyéndose sábados, domingos y festivos.'}
 ],undefined,'Se actualiza la salvedad para incluir expresamente el Derecho de la Unión Europea, conforme al artículo 30.2 vigente. Como regla general, los plazos por días se computan en días hábiles y se excluyen sábados, domingos y festivos.','corregida']
];
const edits={3885:{texto:'Conforme al artículo 30.2 de la Ley 39/2015, salvo que por Ley o por el Derecho de la Unión Europea se exprese otro cómputo, cuando los plazos se señalen por días se entienden hábiles y se excluyen:',opciones:['Los sábados, los domingos y los días declarados festivos.','Los domingos y festivos, exclusivamente.','Los sábados y domingos, exclusivamente.','Ningún día.'],respuesta_correcta:0,comentarios:'El art. 30.2 LPAC establece días hábiles por defecto y excluye sábados, domingos y festivos. La excepción puede proceder de Ley o del Derecho de la Unión Europea.'}};
apply({numero:'713',fecha:'2026-11-05',records,edits});
