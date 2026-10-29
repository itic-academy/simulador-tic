const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bank=path.join(__dirname,'..','preguntas_preparatic.json'),log=path.join(__dirname,'cambios-lote-572.json');
const data=JSON.parse(fs.readFileSync(bank,'utf8')),changes=JSON.parse(fs.readFileSync(log,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const map={
 3176:{bloque:'50',nota:'Academy 50, sección 6 sobre gestión documental y contenidos: sitúa paquetes de transferencia y preservación dentro del marco OAIS; se actualiza la edición de la norma con la ficha ISO 14721:2025.'},
 3177:{bloque:'43',nota:'Academy 43, §§1.2–1.5 sobre OSI, TCP y unidades de datos: coteja la segmentación y la capa de transporte; se conserva la precisión de que segmento es la PDU TCP, mientras TPDU es el término OSI formal.'},
 3178:{bloque:'42',nota:'Academy 42, apartado de redes WLAN/IEEE 802.11: correspondencia curricular del estándar inalámbrico; la equivalencia Wi-Fi 6/802.11ax se valida con IEEE.'},
 3179:{bloque:'43',nota:'Academy 43, §§8.3 y 9 sobre representación IPv6 y convivencia IPv4/IPv6; conversión hexadecimal contrastada octeto por octeto con RFC 4291.'},
 3180:{bloque:'42',nota:'Academy 42, secciones de administración de redes LAN y monitorización SNMP; SMI y los puertos se determinan por RFC 2578 y RFC 3417.'}
};
for(const c of changes.cambios){const q=data.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&q.revision?.estado==='corregida',`Falta pregunta corregida ${c.id}`);assert.ok(m);q.clasificacion.bloque_academia=m.bloque;q.clasificacion.nota=`Cotejo curricular con ITIC Academy, bloque ${m.bloque} (edición 2026); no sustituye la comprobación en fuente primaria.`;q.revision.observaciones+=' '+m.nota;q.comentarios=q.revision.observaciones;assert.ok([...q.clasificacion.A1,...q.clasificacion.A2].every(t=>topics.has(t)));c.actualizada=structuredClone(q);}
fs.writeFileSync(bank,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(log,JSON.stringify(changes,null,2)+'\n');console.log('Cotejo Academy completado para 3176–3180; temas oficiales validados.');
