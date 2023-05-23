const express = require("express");
//Si el fichero del directorio se llama index no hace falta indicarlo, con el directorio vale.
const v1Router = require("./v1/routes/index.js");
const v1ProposalRouter = require("./v1/routes/proposalRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the ATC Blockchain API!</h1>Developed by David");
});

app.use(express.json());

app.use("/api/v1", v1Router);
app.use("/api/v1/proposals", v1ProposalRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});