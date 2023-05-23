const fs = require("fs");

const saveToJSON = (json) => {
    fs.writeFileSync("./src/blockchain/proposal.json", JSON.stringify(json, null, 2), {
        encoding:"utf8",
    });
};

module.exports = {saveToJSON};
