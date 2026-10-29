const fs=require('node:fs'),path=require('node:path');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const replacements=[
 ['[Balsamiq Academy, fase de diseño](https://balsamiq.com/learn/learning-tracks/intro-to-ux-design/design/) y [Adobe XD Reference](https://helpx.adobe.com/content/dam/help/en/pdf/xd_reference.pdf)','[Figma, wireframe vs. mockup](https://www.figma.com/resource-library/wireframe-vs-mockup/)'],
 ['https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view','https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view'],
 ['cobertura de pruebas de software. Se cotejaron los apartados pertinentes.','§5.9 para automatización de pruebas y gestión de pruebas; [Bloque 48 Seguridad de Redes y Aplicación](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view), §13.2 para S-SDLC y DevSecOps. Se cotejaron los apartados pertinentes.'],
 ['A2-II-13/III-6; Academy 38 §§1 y 12.','A2-II-13/III-6; Academy 48 §13.2.']
];
for(const [a,b] of replacements){if(!s.includes(a))throw Error('No se encontró texto a corregir: '+a);s=s.replace(a,b);}
fs.writeFileSync(file,s);console.log('Fuentes y cotejo Drive del lote 570 ajustados.');
