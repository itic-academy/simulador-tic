require('./aplicar-lote.cjs')({
  numero: '806', fecha: '2026-11-10',
  records: [
    [4351, [69], ['II-14'], ['copyleft', 'GNU GPL', 'software libre', 'obras derivadas', 'copyright'], [
      { url: 'https://www.gnu.org/licenses/copyleft.html', referencia: 'GNU Project / Free Software Foundation, What is Copyleft?: mecanismo para mantener las libertades de la obra en versiones modificadas que se distribuyen; copyleft usa copyright/licencias, no abandona el copyright.' },
      { url: 'https://www.gnu.org/licenses/gpl-3.0.html#section5', referencia: 'GNU General Public License v3, sección 5: al transmitir determinadas obras modificadas, deben conservarse avisos y ofrecerse bajo la GPL, con las condiciones definidas por la licencia.' },
      { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', referencia: 'ITIC Academy, tema 43 «Protección jurídica del software», versión 2026.1: derechos de autor y licencias de programas; cotejo curricular complementario.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 69: software de código abierto, software libre y conceptos base.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema II-14: software libre/propietario, licencias y protección jurídica de programas.' }
    ], null, 'Se reemplaza la definición absoluta por el alcance de una licencia de copyleft fuerte como GPL: cuando se distribuye una obra derivada cubierta, aplican condiciones que preservan libertades y continuidad de licencia. Copyleft no elimina el copyright y las obligaciones exactas dependen de la licencia y de si se redistribuye. Clave D.', 'corregida'],
    [4352, [73], [], ['e-learning', 'SCORM', 'ADL', 'SCO', 'Content Aggregation Model', 'LMS'], [
      { url: 'https://adlnet.gov/assets/uploads/SCORM_Users_Guide_for_Programmers.pdf', referencia: 'Advanced Distributed Learning (ADL), SCORM Users Guide for Programmers / SCORM 2004 4th Edition: el libro Content Aggregation Model describe los componentes para empaquetar/agregar contenido SCORM; SCORM define interoperabilidad con LMS.' },
      { url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», edición 2026.1: tema A1-73, e-learning, implantación y normalización; el propio bloque indica que no aplica un epígrafe A2 equivalente.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 73: e-learning, herramientas, sistemas de implantación y normalización.' }
    ], null, 'La pregunta se concreta en el empaquetado/agregación e interoperabilidad de contenidos de aprendizaje con LMS. SCORM 2004 incluye el Content Aggregation Model (CAM); no es un estándar genérico de sindicación de cualquier contenido web. No se fuerza clasificación A2 porque el programa oficial A2 no contiene epígrafe específico de e-learning. Clave B.', 'corregida'],
    [4353, [79, 80], ['I-6', 'IV-12'], ['criptografía asimétrica', 'RSA', 'AES', 'Rijndael', '3DES', 'Blowfish'], [
      { url: 'https://csrc.nist.gov/pubs/sp/800/56/b/r2/final', referencia: 'NIST SP 800-56B Rev. 2, reafirmada como vigente el 06-01-2026: esquemas de establecimiento de claves basados en factorización de enteros, en particular RSA.' },
      { url: 'https://csrc.nist.gov/glossary/term/RSA', referencia: 'NIST CSRC Glossary, RSA: algoritmo de clave pública aprobado por NIST para firma digital y establecimiento de claves.' },
      { url: 'https://csrc.nist.gov/pubs/fips/197/final', referencia: 'NIST FIPS 197, Advanced Encryption Standard (AES): especifica Rijndael como cifrado por bloques simétrico AES; diferencia RSA de las opciones simétricas.' },
      { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», edición 2026.1: algoritmos simétricos/asimétricos, claves y certificados; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, temas 79–80: cifrado, algoritmos simétricos/asimétricos, certificados y claves públicas/privadas.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, temas I-6 y IV-12: identidad/firma electrónica, certificados, criptografía y protocolos seguros.' }
    ], null, 'Se corrige la errata «Rigndael» por Rijndael y se formula el contraste criptográfico sin insinuar que RSA sea el único algoritmo asimétrico o el recomendado para todo uso actual. NIST lo especifica para determinados usos de clave pública; AES/Rijndael, 3DES y Blowfish son cifrados simétricos. Clave B.', 'corregida'],
    [4354, [80, 81], ['I-6'], ['X.509', 'PKI', 'certificatePolicies', 'política de certificación', 'OID', 'validación de ruta'], [
      { url: 'https://www.rfc-editor.org/rfc/rfc5280.html', referencia: 'IETF RFC 5280, secciones 4.2.1.4 y 6.1: certificatePolicies contiene OID/policy information; durante validación de ruta se comparan con las políticas aceptables del relying party. La extensión no autentica por sí sola al titular.' },
      { url: 'https://www.rfc-editor.org/rfc/rfc3647.html', referencia: 'IETF RFC 3647: marco para Certificate Policy y Certification Practice Statement; explica el contexto de políticas de certificación en PKI.' },
      { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», edición 2026.1: certificados, PKI y servicios de confianza; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, temas 80–81: certificados digitales, PKI, identificación y firma electrónica.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema I-6: identificación y firma electrónica, régimen jurídico y DNIe.' }
    ], null, 'Se pregunta por la extensión X.509 certificatePolicies (OID 2.5.29.32), cuyos identificadores permiten evaluar la política de emisión durante la validación. Ni el Distinguished Name ni esa extensión por sí solos prueban identidad/autenticidad: se requiere procesar cadena, firma, periodo, uso y confianza de la autoridad según la política local. Clave D.', 'corregida'],
    [4355, [80, 81], ['I-6'], ['OCSP', 'RFC 6960', 'PKI', 'estado de revocación', 'good', 'revoked', 'unknown'], [
      { url: 'https://www.rfc-editor.org/rfc/rfc6960.html', referencia: 'IETF RFC 6960, secciones 2 y 2.2: OCSP permite consultar estado de revocación y responde good, revoked o unknown; good no garantiza por sí solo que el certificado se haya emitido ni que se haya comprobado toda su validez.' },
      { url: 'https://www.rfc-editor.org/rfc/rfc5280.html', referencia: 'IETF RFC 5280, secciones 4.1.2.5 y 6.1: periodo de validez y validación de ruta se comprueban aparte del estado de revocación.' },
      { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», edición 2026.1: certificados X.509 y servicios de estado/revocación en PKI; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, temas 80–81: certificados, PKI y servicios de identificación/firma.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema I-6: certificados, identidad y firma electrónica.' }
    ], null, 'Se limita el alcance a la consulta de revocación. RFC 6960 define estados good/revoked/unknown; OCSP no comprueba por sí solo caducidad, identidad del titular, correspondencia de claves ni la validez integral de la ruta. Se mantienen opciones y clave D con explicación precisa.', 'corregida']
  ],
  edits: {
    4351: { texto: 'En licencias de software, ¿qué describe mejor el copyleft de una licencia de copyleft fuerte como GNU GPL?', opciones: [
      'Permite distribuir modificaciones cubiertas como software propietario con solo conservar el aviso de copyright.',
      'Transfiere al dominio público el copyright de la obra original.',
      'Obliga a cobrar un precio por cada copia o modificación.',
      'Si se distribuye una obra derivada cubierta, exige conservar las libertades y cumplir las condiciones de copyleft de la licencia aplicable.'
    ], respuesta_correcta: 3 },
    4352: { texto: '¿Qué modelo de referencia de e-learning incluye el Content Aggregation Model para estructurar y empaquetar objetos de aprendizaje interoperables con sistemas de gestión del aprendizaje (LMS)?', opciones: [
      'SCORM (Shareable Content Object Reference Model).',
      'RSS (Really Simple Syndication).',
      'WAI-ARIA (Accessible Rich Internet Applications).',
      'SMTP (Simple Mail Transfer Protocol).'
    ], respuesta_correcta: 0 },
    4353: { texto: '¿Cuál de estos algoritmos es de clave pública/asimétrica, a diferencia de los cifrados simétricos por bloques de las demás opciones?', opciones: [
      'Rijndael/AES.',
      'RSA.',
      '3DES (TDEA).',
      'Blowfish.'
    ], respuesta_correcta: 1 },
    4354: { texto: 'En un certificado X.509, ¿qué extensión identifica mediante OID la política de certificación bajo la que se emitió, para que pueda evaluarse durante la validación de la ruta?', opciones: [
      'Subject Distinguished Name (DN).',
      'Authority Key Identifier.',
      'Key Usage.',
      'Certificate Policies.'
    ], respuesta_correcta: 3 },
    4355: { texto: 'Según RFC 6960, OCSP permite consultar en línea principalmente el estado de revocación de un certificado. ¿Qué estados de certificado puede devolver la respuesta OCSP?', opciones: [
      'vigente, caducado o pendiente de renovación.',
      'identidad confirmada, identidad no confirmada o identidad desconocida.',
      'clave pública, clave privada o par de claves no encontrado.',
      'good (sin indicación de revocación), revoked o unknown.'
    ], respuesta_correcta: 3 }
  }
});
