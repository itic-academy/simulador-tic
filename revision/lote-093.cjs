const records = [
  [781,[16],[],['Max Weber','estructura social','clase','estatus','partido','poder'],[
    {url:'https://us.sagepub.com/sites/default/files/upm-binaries/30609_4.pdf',referencia:'Max Weber, extracto de “The Distribution of Power Within the Community: Classes, Status Groups, and Parties”, en Economy and Society (1922; traducción inglesa en Weber 1978), reproducido en una antología académica de SAGE. El texto distingue clase, grupos de estatus y partidos como fenómenos relacionados pero diferentes.'},
    {url:'https://open.oregonstate.education/sociologicaltheory/chapter/csp/',referencia:'Oregon State University, edición académica de la fuente “The Distribution of Power: Classes, Status Groups, and Parties” y nota sobre su procedencia de Economy and Society. Se usa como localizador y contexto del texto primario de Weber.'}
  ],null,'Se corrige la opción A para usar la tríada canónica de Weber: clase, estatus y partido. «Riqueza» y «poder» son conceptos relacionados con las dimensiones económica y política, pero no sustituyen respectivamente a clase y partido en el rótulo de la tipología.','corregida'],
  [782,[16],['I-5'],['Ley Orgánica 3/2007','artículo 62','protocolo frente al acoso','confidencialidad','queja o denuncia'],[
    {url:'https://www.boe.es/eli/es/lo/2007/03/22/3/con',referencia:'Ley Orgánica 3/2007, texto consolidado del BOE, artículo 62.c y d: el protocolo garantizará el tratamiento reservado de las denuncias, sin perjuicio del régimen disciplinario, e identificará a las personas responsables de atender a quienes formulen una queja o denuncia.'}
  ],null,'Se conserva A. El artículo 62.d incluye expresamente la identificación de responsables de atender quejas o denuncias. La opción B altera «tratamiento reservado» por «público», por lo que es falsa; no se cumple la opción conjunta C.','vigente'],
  [783,[16],['I-5'],['Ley Orgánica 3/2007','artículo 6.1','discriminación directa por razón de sexo'],[
    {url:'https://www.boe.es/eli/es/lo/2007/03/22/3/con',referencia:'Ley Orgánica 3/2007, texto consolidado del BOE, artículo 6.1: existe discriminación directa por razón de sexo cuando una persona es, ha sido o pudiera ser tratada, por razón de su sexo, de manera menos favorable que otra en situación comparable.'}
  ],null,'Se conserva B. El enunciado reproduce la definición legal de discriminación directa por razón de sexo del artículo 6.1.','vigente'],
  [784,[30],['II-10'],['Agencia Estatal de Administración Digital','Real Decreto 1125/2024','medios y servicios transversales','servicios comunes digitales','sucesión de SGAD'],[
    {url:'https://www.boe.es/eli/es/rd/2024/11/05/1125/con',referencia:'Real Decreto 1125/2024, texto consolidado del BOE, artículo 9.4: corresponde a la Agencia Estatal de Administración Digital el desarrollo, implantación y gestión de los medios y servicios digitales comunes y transversales, con las excepciones expresamente previstas en el propio apartado.'},
    {url:'https://www.boe.es/eli/es/rd/2024/11/05/1118/con',referencia:'Real Decreto 1118/2024, Estatuto de la Agencia Estatal de Administración Digital, texto consolidado del BOE: regula la Agencia y la sucesión de funciones de la SGAD; la constitución efectiva de la Agencia comportó la supresión de la Secretaría General de Administración Digital.'}
  ],null,'Se actualiza la respuesta y se precisa la norma vigente. Desde el Real Decreto 1125/2024 se denominan transversales los medios y servicios antes llamados compartidos; como regla general, su desarrollo, implantación y gestión corresponden a la Agencia Estatal de Administración Digital, no a la suprimida SGAD. La CETIC declara qué servicios son transversales, mientras que la Agencia los desarrolla e implanta, con las salvedades legales.','corregida'],
  [785,[24],['I-8'],['TREBEP','Real Decreto Legislativo 5/2015','artículo 79','concurso','provisión de puestos'],[
    {url:'https://www.boe.es/eli/es/rdlg/2015/10/30/5/con',referencia:'Real Decreto Legislativo 5/2015, texto refundido del Estatuto Básico del Empleado Público, artículo 79.1: el concurso es el procedimiento normal de provisión de puestos de trabajo del personal funcionario de carrera; la libre designación es el otro procedimiento general previsto en el artículo 78.2.'}
  ],null,'Se conserva B. El artículo 79.1 denomina expresamente al concurso el procedimiento normal de provisión; la libre designación es otro procedimiento de provisión, no el normal. La oferta de empleo público organiza necesidades de personal y la comisión de servicios es una forma provisional, no el procedimiento normal.','vigente']
];
const edits = {
  781:{texto:'Según la tipología de Max Weber sobre la distribución del poder en la sociedad, ¿qué tres dimensiones u órdenes distingue?',opcion:[0,'Clase, estatus y partido.']},
  784:{texto:'Con carácter general, ¿a qué entidad corresponde actualmente el desarrollo, la implantación y la gestión de los medios y servicios digitales comunes y declarados transversales de la Administración del Estado, conforme al artículo 9.4 del Real Decreto 1125/2024?',opciones:[
    'A la Comisión de Estrategia TIC (CETIC), que declara transversales los servicios, pero no asume por ello su implantación.',
    'A la Secretaría General de Administración Digital (SGAD), suprimida tras la constitución efectiva de la Agencia Estatal de Administración Digital.',
    'A la Dirección de Tecnologías de la Información y las Comunicaciones (DTIC), sin perjuicio de las competencias de la Agencia.',
    'A la Agencia Estatal de Administración Digital, salvo las excepciones previstas en el artículo 9.4.'
  ],respuesta_correcta:3}
};
require('./aplicar-lote.cjs')({numero:'093',fecha:'2026-10-22',records,edits});
