const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const BASE_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    // Cabeçalhos CORS padrão
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    let reqUrl = decodeURI(req.url.split('?')[0]);

    // API Endpoint: Salvar Tema de Cores do CMS
    if (req.method === 'POST' && reqUrl === '/api/save-theme') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
            if (body.length > 500000) { // 500KB max
                res.writeHead(413, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: false, error: 'Payload muito grande' }));
                req.destroy();
            }
        });
        req.on('end', () => {
            try {
                const themeData = JSON.parse(body);
                if (!themeData || typeof themeData !== 'object' || !themeData.primaryColor) {
                    throw new Error('Objeto de tema inválido (requer primaryColor)');
                }
                themeData.updatedAt = new Date().toISOString();
                const themeFilePath = path.join(BASE_DIR, 'theme.json');
                fs.writeFileSync(themeFilePath, JSON.stringify(themeData, null, 2), 'utf-8');
                console.log(`[CMS] Tema salvo com sucesso em theme.json:`, themeData.preset || 'custom', themeData.primaryColor);
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: true, theme: themeData }));
            } catch (err) {
                console.error('[CMS] Erro ao salvar tema:', err.message);
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
        return;
    }

    if (reqUrl === '/') {
        reqUrl = '/index.html';
    }

    const safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(BASE_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 - Arquivo não encontrado');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        // Para theme.json, garante que nunca seja cacheado pelo navegador
        const cacheControl = path.basename(filePath) === 'theme.json'
            ? 'no-cache, no-store, must-revalidate'
            : 'no-cache';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        });

        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`  Dash Solutions - Website Corporativo & CMS`);
    console.log(`  Servidor rodando em: http://localhost:${PORT}`);
    console.log(`==================================================\n`);
});
