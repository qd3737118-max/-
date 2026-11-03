import './src/app.js';
const http = require("http");

const PORT = process.env.PORT || 4007;

http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Bot is online!");
}).listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on port ${PORT}`);
});
