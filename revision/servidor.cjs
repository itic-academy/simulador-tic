// Vista local de lectura; solo expone los recursos públicos del simulador y revisión.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.jpeg':'image/jpeg'};
http.createServer((req,res)=>{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}
  let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
  if(url==='/')url='/revision.html';
  if(!/^\/(index\.html|revision\.html|app\.js|styles\.css|logo\.jpeg|preguntas_preparatic\.json|revision\/(vista\.js|temario-oficial\.json|inventario\.json|cambios-lote-\d+\.json))$/.test(url)){res.writeHead(404).end();return;}
  fs.readFile(path.join(root,url.slice(1)),(err,data)=>{
    if(err){res.writeHead(404).end();return;}
    res.writeHead(200,{'Content-Type':types[path.extname(url)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:data);
  });
}).listen(8765,'127.0.0.1',()=>console.log('Vista local: http://127.0.0.1:8765/revision.html'));
