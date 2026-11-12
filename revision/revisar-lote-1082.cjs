const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const tls='https://www.rfc-editor.org/rfc/rfc9846.html',eaptls='https://www.rfc-editor.org/rfc/rfc9190.html';
const nist2='https://csrc.nist.gov/pubs/sp/800/61/r2/final',nist3='https://csrc.nist.gov/pubs/sp/800/61/r3/final',nist2pdf='https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r2.pdf';
const h264='https://www.itu.int/rec/T-REC-H.264-202606-I/en',h264pdf='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-H.264-202606-I%21%21PDF-E&lang=e&type=items';
const ae='https://developers.google.com/android/work/terminology',intune='https://learn.microsoft.com/en-ie/intune/device-enrollment/android/guide';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5731,[125],['IV-12'],['TLS','TLS 1.3','Record Protocol','protocolo de registro','transporte fiable'],[
  ref(tls,'RFC 9846 (julio de 2026), vigente para TLS 1.3 y obsoletando RFC 8446: §1 identifica dos componentes principales, Handshake y Record Protocol; el §5 define que el protocolo de registro fragmenta/protege y transmite los mensajes sobre el transporte fiable en flujo ordenado.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: seguridad en redes, criptografía y protocolos seguros; asociación temática.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: protocolos seguros y seguridad en redes.'),
 ],null,'Corregida, respuesta B (Record Protocol). Se sustituye la arquitectura imprecisa SSL/TLS y la errata “SSL Asert” por una pregunta sobre el protocolo de registro de TLS: encapsula y protege datos de handshake y aplicación sobre un transporte fiable. El estándar vigente de TLS 1.3 es RFC 9846 (julio de 2026), que reemplazó RFC 8446; no se conserva una referencia a RFC ya obsoleta como norma actual. A1-125/A2-IV-12.','corregida'],
 [5732,[125],['IV-12'],['EAP-TLS','EAP','802.1X','autenticación mutua','certificados digitales','RADIUS'],[
  ref(eaptls,'RFC 9190, §1: EAP-TLS es un método EAP con autenticación mutua basada en certificados. §2.1.1 aclara que el servidor DEBE autenticarse con certificado y que se RECOMIENDA que exija certificado al peer; por ello la pregunta se acota a despliegues que configuran certificado de cliente.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: seguridad de redes, control de accesos y medidas en comunicaciones móviles.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: control de accesos y protocolos seguros.'),
 ],null,'Corregida, respuesta C (EAP-TLS). Se conserva la distinción del método de autenticación por certificados, pero se evita afirmar que todo despliegue EAP-TLS exija obligatoriamente certificado de cliente: RFC 9190 exige certificado al servidor y recomienda que se exija al peer. La formulación especifica que el despliegue requiere certificados en ambos extremos. A1-125/A2-IV-12.','corregida'],
 [5733,[127],['IV-12'],['respuesta a incidentes','NIST SP 800-61 Rev. 2','NIST SP 800-61 Rev. 3','CSF 2.0','ciclo clásico','histórica'],[
  ref(nist2pdf,'NIST SP 800-61 Rev. 2, §3 y figura 3-1: el ciclo anterior enumeraba Preparation; Detection and Analysis; Containment, Eradication and Recovery; Post-Incident Activity.'),
  ref(nist2,'Página oficial NIST: SP 800-61 Rev. 2 fue retirada el 3 de abril de 2025 y sustituida por Rev. 3.'),
  ref(nist3,'NIST SP 800-61 Rev. 3 (abril de 2025) integra la respuesta en gestión del riesgo según CSF 2.0; ya no presenta la respuesta como el mismo ciclo autónomo de cuatro fases de Rev. 2.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 127: ciberseguridad; relación temática.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad en redes y protocolos; relación temática.'),
 ],null,'Histórica, respuesta D (Verificación de la política de seguridad). Se limita expresamente al ciclo de respuesta a incidentes de NIST SP 800-61 Rev. 2: sus cuatro fases eran preparación; detección y análisis; contención, erradicación y recuperación; y actividad posterior al incidente. La opción sobre verificar la política no era una de ellas. NIST retiró Rev. 2 en abril de 2025 y la sustituyó por Rev. 3, que integra la respuesta en el CSF 2.0; no se presenta el modelo antiguo como vigente. A1-127/A2-IV-12.','historica'],
 [5734,[130],['IV-16'],['compresión de vídeo','códigos de longitud variable','VLC','codificación entrópica','redundancia estadística','H.264'],[
  ref(h264,'ITU-T H.264, edición junio de 2026, estándar vigente de codificación avanzada de vídeo.'),
  ref(h264pdf,'ITU-T H.264, definición 3.159: VLC es un procedimiento reversible de codificación entrópica que asigna códigos más cortos a símbolos esperados con mayor frecuencia y más largos a los menos frecuentes; explota la redundancia estadística.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 130: sistemas de videoconferencia y streaming de vídeo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.16: sistemas de videoconferencia y protocolos.'),
 ],null,'Vigente, respuesta C (redundancia estadística). Los códigos de longitud variable son una forma de codificación entrópica que asigna longitudes distintas según la frecuencia de los símbolos; reducen redundancia estadística. La predicción entre imágenes elimina redundancia temporal y las transformadas/cuantificación tratan la espacial; no se codifica el audio asociado. La recomendación H.264 continúa publicada, con edición más reciente de junio de 2026. A1-130/A2-IV-16.','vigente'],
 [5735,[123],['IV-15'],['MDM','Android Enterprise','COBO','BYOD','COPE','fully managed','work-only'],[
  ref(ae,'Terminología actual de Android Enterprise: los dispositivos corporativos pueden configurarse para uso exclusivo de trabajo (fully managed) o para uso mixto con perfil de trabajo; COPE está deprecated y se sustituye por la denominación de dispositivo corporativo con perfil.'),
  ref(intune,'Guía de inscripción de Microsoft Intune para Android Enterprise: denomina al modo Android fully managed “Previously referred to as COBO”; confirma el uso histórico/común de COBO para dispositivo corporativo solo trabajo.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 123: comunicaciones móviles y generaciones; relación temática general con administración de terminales.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.15: comunicaciones móviles y soluciones MDM, EMM y UEM.'),
 ],null,'Corregida, respuesta C (COBO). COBO se expande como corporate-owned, business-only y describe el modelo clásico de terminal propiedad de la organización para uso laboral exclusivo. Android Enterprise actual denomina su modo equivalente fully managed; COBO es una etiqueta histórica/común, no el nombre preferido en la terminología actual de Google. COPE permite uso personal; BYOD parte de la propiedad personal; Knox es una plataforma de fabricante, no un modelo de propiedad. A1-123/A2-IV-15.','corregida'],
];
const edits={
 5731:{texto:'¿Qué protocolo de TLS encapsula y protege los mensajes de handshake y los datos de aplicación para transportarlos sobre un flujo fiable?',opciones:['Handshake Protocol','Record Protocol','Alert Protocol','Change Cipher Spec'],respuesta_correcta:1},
 5732:{texto:'En un despliegue 802.1X que requiere autenticación mutua basada en certificados tanto del servidor como del cliente, ¿qué método EAP se emplea?',opciones:['PEAP','EAP-TTLS','EAP-TLS','EAP-FAST'],respuesta_correcta:2},
 5733:{texto:'En el modelo clásico de ciclo de respuesta a incidentes de NIST SP 800-61 Rev. 2 —retirado y sustituido por Rev. 3—, ¿cuál de las siguientes NO era una fase?',opciones:['Preparación','Contención, erradicación y recuperación','Detección y análisis','Verificación de la política de seguridad'],respuesta_correcta:3},
 5734:{texto:'En la codificación de vídeo, ¿qué tipo de redundancia explota principalmente la codificación entrópica mediante códigos de longitud variable (VLC)?',respuesta_correcta:2},
 5735:{texto:'En la terminología clásica de MDM, ¿qué sigla designa un dispositivo Android propiedad de la empresa y destinado exclusivamente al trabajo (modo actualmente denominado fully managed en Android Enterprise)?',respuesta_correcta:2},
};
aplicar({numero:'1082',fecha:'2026-11-12',records,edits});
