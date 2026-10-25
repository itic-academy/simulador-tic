const apply = require('./aplicar-lote.cjs');

const records = [
  [1556, [80, 81], ['I-6'], ['firma electrónica avanzada', 'eIDAS', 'control del firmante', 'artículo 26'], [
    {url: 'https://eur-lex.europa.eu/eli/reg/2014/910/oj/spa', referencia: 'Reglamento (UE) n.º 910/2014 (eIDAS), texto consolidado, art. 26: los datos de creación deben poder usarse por el firmante con un alto nivel de confianza bajo su control exclusivo; también fija los requisitos de vinculación, identificación e integridad.'}
  ], {texto: 'Según el artículo 26 del Reglamento eIDAS, ¿cuál de estas afirmaciones NO expresa correctamente un requisito de la firma electrónica avanzada?', opciones: [
    'Está vinculada al firmante de manera única y permite identificarlo.',
    'Se crea con datos de creación que el firmante puede, con un alto nivel de confianza, utilizar bajo su control exclusivo.',
    'Los datos de creación han de estar siempre bajo control exclusivo del firmante, sin que el requisito admita el umbral de confianza previsto por el Reglamento.',
    'Está vinculada con los datos firmados de modo que puede detectarse cualquier modificación ulterior.'
  ], respuesta_correcta: 2}, 'El artículo 26 eIDAS exige que los datos de creación estén bajo control exclusivo del firmante con un alto nivel de confianza; no formula una garantía absoluta separada de ese umbral. Los otros tres enunciados reproducen, en sustancia, los requisitos de vinculación única e identificación, control con alto nivel de confianza e integridad detectable. Se reemplaza la palabra ambigua «siempre» por una afirmación que enfrenta expresamente la opción con el umbral literal del artículo.', 'corregida'],
  [1557, [70], ['III-5'], ['Mahalanobis', 'distancia', 'vectores de características', 'OCR', 'reconocimiento de caracteres'], [
    {url: 'https://ipsj.ixsq.nii.ac.jp/records/38693', referencia: 'Information Processing Society of Japan, artículo técnico de 1994 “A Handwritten Character Recognition System by Using Modified Mahalanobis Distance”: documenta el uso de la distancia de Mahalanobis para reconocimiento de caracteres manuscritos y resultados sobre ETL9B.'},
    {url: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART000960078', referencia: 'Korean Data and Information Science Society, 2005, “Digitalization System of Historical Hanja Documents using Mahalanobis Distance-based Rejection”: aplicación de la distancia de Mahalanobis en un sistema OCR de documentos manuscritos.'}
  ], {texto: 'En clasificación de caracteres a partir de vectores de características, ¿qué medida de distancia tiene en cuenta la covarianza entre las variables?', opciones: ['Sherman.', 'Mahalanobis.', 'Análisis de bigramas.', 'OmniPage.'], respuesta_correcta: 1}, 'La clave Mahalanobis es correcta: esta distancia estadística entre vectores considera la matriz de covarianza, a diferencia de una distancia euclídea simple. La literatura de reconocimiento de escritura documenta su uso como medida de clasificación/rechazo en OCR; los bigramas son secuencias lingüísticas, OmniPage es un producto OCR y «Sherman» no es aquí una métrica de distancia reconocida. El enunciado se precisa para preguntar por la propiedad matemática que identifica inequívocamente la respuesta.', 'corregida'],
  [1558, [63, 64], ['II-5', 'III-4'], ['ACID', 'atomicidad', 'COMMIT', 'ROLLBACK', 'transacciones'], [
    {url: 'https://www.postgresql.org/docs/18/tutorial-transactions.html', referencia: 'PostgreSQL 18, tutorial §3.4: una transacción agrupa pasos como operación «todo o nada»; COMMIT confirma y ROLLBACK cancela los cambios ejecutados.'},
    {url: 'https://www.postgresql.org/docs/18/sql-rollback.html', referencia: 'PostgreSQL 18, ROLLBACK: aborta la transacción y descarta todas sus actualizaciones.'}
  ], null, 'La respuesta «Commit - Rollback - Atomicidad» se mantiene. Una transacción atómica se aplica completa o no se aplica; COMMIT confirma los cambios y ROLLBACK los descarta. Consistencia, aislamiento y durabilidad son las otras propiedades ACID y no describen esta semántica de todo o nada.', 'vigente'],
  [1559, [85], [], ['Hyperledger Burrow', 'Ethereum', 'EVM', 'blockchain permisionada', 'proyecto EOL'], [
    {url: 'https://github.com/hyperledger-archives/burrow', referencia: 'Repositorio oficial archivado de Hyperledger Burrow: lo describe como una blockchain permisionada de smart contracts Ethereum que ejecuta la EVM; el proyecto está marcado End of Life y el repositorio es de solo lectura desde mayo de 2022.'},
    {url: 'https://lf-hyperledger.atlassian.net/wiki/spaces/burrow/overview', referencia: 'Linux Foundation Decentralized Trust, ficha Hyperledger Burrow (EOL): confirma estado End of Life desde el 12-05-2022 y la descripción de ledger permisionado basado en Ethereum/EVM.'},
    {url: 'https://www.microsoft.com/en-us/microsoft-cloud/blog/financial-services/2017/08/11/microsoft-announces-the-coco-framework-to-improve-performance-confidentiality-and-governance-characteristics-of-enterprise-blockchain-networks/', referencia: 'Microsoft, anuncio original de Coco Framework (11-08-2017): framework compatible con cualquier protocolo de ledger; Ethereum figura entre sus implementaciones iniciales, por lo que «basada en Ethereum» sin más precisión podía hacer ambigua la pregunta original.'}
  ], {texto: '¿Qué proyecto de Hyperledger se describía como un nodo de blockchain permisionada que ejecuta contratos inteligentes de Ethereum mediante la EVM, aunque posteriormente quedó en fin de vida (EOL)?', opciones: [
    'Hyperledger Fabric.',
    'Coco Framework.',
    'Ripple.',
    'Hyperledger Burrow.'
  ], respuesta_correcta: 3}, 'La respuesta es Hyperledger Burrow: ejecutaba contratos Ethereum en una EVM dentro de un ledger permisionado. La pregunta original era ambigua porque Coco Framework fue diseñado para ser compatible con distintos protocolos y anunció Ethereum como una de sus implementaciones iniciales; se añade el rasgo específico de Burrow y su condición histórica. Burrow pasó a EOL en 2022 y su repositorio está archivado, por lo que no se presenta como plataforma mantenida actualmente.', 'corregida'],
  [1560, [80], ['I-6'], ['X.509 v3', 'RFC 5280', 'issuerUniqueID', 'certificados', 'PKI'], [
    {url: 'https://www.rfc-editor.org/rfc/rfc5280.html#section-4.1.2.8', referencia: 'RFC 5280, §4.1.2.8: issuerUniqueID es un campo opcional, permitido en certificados versión 2 o 3; §4.1.2.5 define Validity e incluye notBefore/notAfter.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc5280.html#section-4.1.2.4', referencia: 'RFC 5280, §4.1.2.4: issuer identifica al emisor y debe contener un nombre distinguido no vacío.'}
  ], {texto: 'Según la estructura TBSCertificate de X.509 v3 descrita en RFC 5280, ¿qué campo puede omitirse?', opciones: [
    'El número de serie (serialNumber).',
    'El límite inicial de validez (notBefore).',
    'El identificador único del emisor (issuerUniqueID).',
    'El emisor (issuer).'
  ], respuesta_correcta: 2}, 'La clave issuerUniqueID es correcta: RFC 5280 §4.1.2.8 lo declara opcional y solo lo permite para certificados de versión 2 o 3. En cambio, serialNumber, issuer y validity forman parte de los campos obligatorios de TBSCertificate; validity incluye tanto notBefore como notAfter. Se concreta la referencia normativa y el nombre del campo para evitar confundirlo con issuer, que sí es obligatorio.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '248', fecha: '2026-10-25', records, edits});
