const express = require('express');
const mustache = require('mustache-express');
const app = express();

const PORT = 2808;

app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/src/views");
app.use(express.urlencoded({extended: true}));
app.use("/", require("./src/routes/calculadoraRoutes"));

app.listen(PORT, () => {
    console.log("Aplicativo está rodando na porta", PORT);
    console.log("Caso esteja rodando em localhost: http://127.0.0.1:" + PORT)
});