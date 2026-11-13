const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const x200='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=e&type=items';
const atm='https://www.cisco.com/c/en/us/tech/asynchronous-transfer-mode-atm/atm-signaling/index.html';
const g992='https://www.itu.int/rec/t-rec-g';
const l75='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.75-200805-I%21%21PDF-E&lang=e&type=items';
const bt='https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core_v7.0/out/en/architecture%2C-change-history%2C-and-conventions/architecture--arch-.html';
const wifi='https://standards.ieee.org/ieee/802.11be/7516/';
const wifiMlo='https://source.android.com/docs/core/connect/wifi-7';
const networkAcademy='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
apply({numero:'1214',fecha:'2026-11-13',records:[
 [6391,['111'],['II-8'],['OSI','capa de presentación','formato de datos','encaminamiento','multiplexación de transporte'],[
  src(x200,'ITU-T X.200 / ISO/IEC 7498-1, §§7.2 y 7.5: la capa de presentación representa sintaxis de transferencia/formato; el encaminamiento corresponde a red; la multiplexación de conexiones de transporte se trata en transporte, no en enlace.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 111: modelo OSI.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II-8: OSI/TCP-IP, capas, interfaces y encaminamiento.'),
  src(networkAcademy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo del programa OSI y protocolos; la descripción de capa se confirma con X.200.')
 ],null,'Se conserva A. Se explicitan las funciones para evitar la falsa combinación de enrutamiento en capa 4 y multiplexación de conexiones en capa 2; el formato/sintaxis de datos sí corresponde a presentación (capa 6).','corregida'],
 [6392,['108'],['IV-10'],['ATM','NNI','UNI','interfaz nodo-red','interfaz usuario-red'],[
  src(atm,'Cisco ATM Signaling: UNI se usa entre un sistema terminal ATM y un switch ATM; NNI designa los enlaces/interfaz de red entre nodos de conmutación ATM.'),
  src('https://www.itu.int/rec/T-REC-I.150/en','ITU-T I.150, características funcionales de ATM: arquitectura e interfaces de la red ATM.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes de telecomunicaciones e interconexión.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-10: redes de área extensa y tecnologías/protocolos.'),
  src(networkAcademy,'ITIC Academy, Bloque 42 Redes, edición 2026: ATM y conceptos de redes de transporte, cotejo curricular.')
 ],null,'Se conserva A, acotando NNI a la interfaz entre nodos/switches ATM. La interfaz entre sistema final ATM y switch es UNI, distractor D; por eso no se intercambian ambas designaciones.','vigente'],
 [6393,['108'],['IV-7'],['par telefónico','xDSL','ruido impulsivo','ruido de fondo','diafonía','coste del medio'],[
  src(g992,'ITU-T, familia G.992 ADSL: transmisores sobre par metálico deben afrontar características del par, diafonía y ruido.'),
  src(l75,'ITU-T L.75, métodos de ensayo de pares de cobre: evalúa diafonía, ruido y parámetros eléctricos que afectan a la capacidad del canal.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: medios y transmisión en redes.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-7: medios de transmisión y parámetros significativos.'),
  src(networkAcademy,'ITIC Academy, Bloque 42 Redes, edición 2026: par telefónico y medios guiados; cotejo curricular, contrastado con ITU-T.')
 ],null,'Se conserva D, pero se sustituye el enunciado impreciso “dificultades que tiene que hacer frente el par” por una clasificación inequívoca: se pregunta cuál no es una perturbación/limitación física de la señal. Ruido impulsivo, ruido de fondo y diafonía sí lo son; el coste de instalar el medio es un factor económico.','corregida'],
 [6394,['114'],['IV-11'],['Bluetooth BR/EDR','piconet','periféricos activos','máximo siete'],[
  src(bt,'Bluetooth Core Specification v7.0, arquitectura BR/EDR: una piconet admite hasta ocho dispositivos en total (Central más hasta siete Peripheral); la cantidad de conexiones LE depende de implementación y no tiene ese mismo límite.'),
  src('https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core-62/out/en/br-edr-controller/baseband-specification.html','Bluetooth Core Specification v6.2, Baseband: hasta siete Peripherals activos en la piconet.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 114: redes inalámbricas y Bluetooth.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-11: redes inalámbricas y protocolos.'),
  src(networkAcademy,'ITIC Academy, Bloque 42 Redes, edición 2026: medios y tecnologías de interconexión inalámbrica; cotejo curricular.')
 ],null,'Se corrige la respuesta, porque el enunciado original no acotaba versión Bluetooth, perfil ni tipo de conexión y el número 12 no es un límite general. La pregunta nueva limita a una piconet BR/EDR clásica y pregunta por periféricos activos: hasta siete; con el Central son ocho dispositivos en total. Bluetooth LE tiene límites dependientes de la implementación.','corregida'],
 [6395,['114'],['IV-11'],['IEEE 802.11be-2024','Wi-Fi 7','MLO','EHT','30 Gbit/s'],[
  src(wifi,'IEEE SA, IEEE 802.11be-2024, EHT: estándar activo; define modos que permiten un rendimiento máximo de al menos 30 Gbit/s medido en MAC SAP, además de coexistencia y mejoras de latencia.'),
  src(wifiMlo,'Android Open Source Project, Wi-Fi 7: identifica Multi-Link Operation (MLO) como función principal del estándar 802.11be.'),
  src('https://www.wi-fi.org/news-events/newsroom/wi-fi-alliance-introduces-wi-fi-certified-7','Wi-Fi Alliance, lanzamiento de Wi-Fi CERTIFIED 7: denominación de generación Wi-Fi 7 y MLO.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 114: estándar IEEE 802.11 y redes inalámbricas.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-11: redes inalámbricas, protocolos y características.'),
  src(networkAcademy,'ITIC Academy, Bloque 42 Redes, edición 2026: evolución de Wi-Fi/802.11 y estándares inalámbricos; cotejo curricular.')
 ],null,'Se corrige la afirmación de 48 Gbit/s y se redacta el rendimiento en el mismo marco de medida que expresa IEEE: existe un modo capaz de al menos 30 Gbit/s en MAC SAP. Wi-Fi CERTIFIED 7 es la denominación de la Wi-Fi Alliance para la generación Wi-Fi 7, y MLO es una de las capacidades centrales de 802.11be; tras actualizar C, D vuelve a ser la respuesta correcta. No se presenta 30 Gbit/s como velocidad que obtiene cada equipo en uso real.','corregida']
],edits:{
 6391:{texto:'Según el modelo OSI de ITU-T X.200, ¿qué opción asigna correctamente cada función a su capa?',opciones:['La representación/formato de datos corresponde a presentación (capa 6).','El encaminamiento de paquetes corresponde a transporte (capa 4).','La multiplexación de conexiones de transporte corresponde a enlace de datos (capa 2).','Todas las anteriores.'],respuesta_correcta:0},
 6393:{texto:'En la transmisión xDSL sobre par telefónico, ¿cuál de estos elementos NO es una perturbación o limitación física de la señal en el par?',opciones:['Ruido impulsivo.','Ruido de fondo.','Diafonía entre pares.','Coste económico de instalar el medio.'],respuesta_correcta:3},
 6394:{texto:'En una piconet Bluetooth clásica BR/EDR, ¿cuántos periféricos (Peripherals) pueden estar activos como máximo además del Central?',opciones:['12','16','7','255'],respuesta_correcta:2},
 6395:{texto:'Respecto a IEEE 802.11be-2024 y Wi-Fi 7, ¿qué afirmación es correcta?',opciones:['Wi-Fi Alliance denomina Wi-Fi 7 a la generación certificada basada en 802.11be.','802.11be incorpora Multi-Link Operation (MLO).','IEEE define un modo EHT capaz de un rendimiento máximo de al menos 30 Gbit/s medido en la interfaz MAC SAP.','Todas las anteriores.'],respuesta_correcta:3}
}});
