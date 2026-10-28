'use strict';
const el = id => document.getElementById(id);
const names = {vigente:'Vigente verificada',corregida:'Corregida',historica:'Histórica verificada',pendiente_fuente:'Pendiente de fuente',pendiente_ambiguedad:'Pendiente: ambigüedad',sin_revisar:'Sin revisar'};
const certified = q => ['vigente','corregida','historica'].includes(q.revision?.estado);
let questions = [], topics = new Map(), originals = new Map(), page = 0;
const pageSize = 20;
const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function node(tag,text,className){const n=document.createElement(tag);n.textContent=text;if(className)n.className=className;return n;}
function matching(){
  const query=normalize(el('query').value.trim()), state=el('status').value, body=el('body').value;
  return questions.filter(q=>{
    const status=q.revision?.estado||'sin_revisar';
    if(state==='trabajadas'&&!q.revision)return false;
    if(state==='pendiente'&&!status.startsWith('pendiente_'))return false;
    if(!['trabajadas','pendiente','todas'].includes(state)&&status!==state)return false;
    if(body!=='todos'&&!q.clasificacion?.[body]?.length)return false;
    const ids=[...(q.clasificacion?.A1||[]),...(q.clasificacion?.A2||[])];
    const text=[q.id,q.texto,...(q.etiquetas||[]),...ids,...ids.map(id=>topics.get(id)?.titulo||'')].join(' ');
    return !query||(/^\d+$/.test(query)?String(q.id)===query:normalize(text).includes(query));
  });
}
function options(q, verified){
  const list=document.createElement('ol');list.type='A';
  q.opciones.forEach((text,i)=>list.appendChild(node('li',text+(i===q.respuesta_correcta?(verified?' ✓':' [respuesta del banco, sin verificar]'):''),i===q.respuesta_correcta&&verified?'correct':'')));
  return list;
}
function render(){
  const found=matching(), pages=Math.max(1,Math.ceil(found.length/pageSize));page=Math.min(page,pages-1);
  el('results-count').textContent=`${found.length.toLocaleString('es-ES')} preguntas con estos filtros`;
  el('page').textContent=`Página ${page+1} de ${pages}`;el('previous').disabled=page===0;el('next').disabled=page===pages-1;
  el('questions').replaceChildren();
  for(const q of found.slice(page*pageSize,(page+1)*pageSize)){
    const card=document.createElement('article');card.appendChild(node('h2',`Pregunta ${q.id}`));
    const status=q.revision?.estado||'sin_revisar';card.appendChild(node('span',names[status]||status,`badge ${certified(q)?'':'pending'}`));
    const ids=[...(q.clasificacion?.A1||[]),...(q.clasificacion?.A2||[])];
    const meta=node('div','', 'topics');
    ids.forEach(id=>meta.appendChild(node('div',`${id} · ${topics.get(id)?.titulo||''}`)));
    if(!ids.length)meta.appendChild(node('div','Clasificación oficial pendiente'));
    if(q.clasificacion)meta.appendChild(node('div',`${q.clasificacion.bloque_academia == null ? 'Bloque de academia pendiente' : 'Academia: bloque '+q.clasificacion.bloque_academia} · ${(q.etiquetas||[]).join(', ')}`));
    card.appendChild(meta);card.appendChild(node('p',q.texto,'question'));card.appendChild(options(q,certified(q)));
    if(q.revision)card.appendChild(node('p',q.comentarios||q.revision.observaciones,'explanation'));
    const sources=node('div','', 'sources');
    for(const source of q.revision?.fuentes||[]){
      const link=node('a',source.referencia||`Artículo ${source.articulo}`);const url=new URL(source.url);
      if(url.protocol!=='https:')continue;
      link.href=url.href;link.target='_blank';link.rel='noopener noreferrer';sources.append(link,document.createElement('br'));
    }
    card.appendChild(sources);
    if(q.revision)card.appendChild(node('small',`Fecha de revisión: ${q.revision.fecha}`,'muted'));
    const original=originals.get(q.id);
    if(original){const detail=document.createElement('details');detail.append(node('summary','Ver pregunta original'),node('p',original.texto),options(original,false));card.appendChild(detail);}
    el('questions').appendChild(card);
  }
  if(!found.length)el('questions').appendChild(node('p','No hay preguntas que coincidan con los filtros.'));
}
// Incrementar esta versión al publicar un lote evita que el navegador reutilice
// una copia antigua del banco o del inventario desde su caché HTTP.
const DATA_VERSION='20261028-325';
async function json(url){const response=await fetch(`${url}?v=${DATA_VERSION}`,{cache:'no-cache'});if(!response.ok)throw Error(`${url}: ${response.status}`);return response.json();}
async function initReview(){
  try{
    const [bank,catalog,inventory]=await Promise.all([json('preguntas_preparatic.json'),json('revision/temario-oficial.json'),json('revision/inventario.json')]);
    questions=bank.preguntas;topics=new Map(catalog.programas.flatMap(p=>p.temas).map(t=>[t.id,t]));
    const logs=await Promise.all(inventory.lotes.map(name=>json('revision/'+name)));
    originals=new Map(logs.flatMap(log=>log.cambios).map(c=>[c.id,c.original]));
    const verified=questions.filter(certified).length, worked=questions.filter(q=>q.clasificacion).length;
    el('total').textContent=questions.length.toLocaleString('es-ES');el('worked').textContent=worked;el('verified').textContent=verified;el('pending').textContent=questions.filter(q=>q.revision?.estado.startsWith('pendiente_')).length;
    el('progress').max=questions.length;el('progress').value=verified;el('progress-label').textContent=`${verified} de ${questions.length.toLocaleString('es-ES')} verificadas. Las preguntas sin revisar y las que tienen dudas no están certificadas.`;
    render();
  }catch(error){el('error').textContent=`No se ha podido cargar la revisión: ${error.message}. Recarga la página y comprueba la conexión. Si estás abriendo una copia descargada, utiliza el servidor local.`;}
}
for(const id of ['query','status','body'])el(id).addEventListener(id==='query'?'input':'change',()=>{page=0;render();});
el('previous').addEventListener('click',()=>{page--;render();});el('next').addEventListener('click',()=>{page++;render();});
initReview();
