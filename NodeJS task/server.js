const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require("./app/models");
//db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
//require("./app/routes/turorial.routes")(app);
require('./app/routes/user.routes')(app);
const PORT = process.env.PORT || 5000;
const user = require('./app/controllers/user.controller.js')
app.listen(PORT,async () => {
    console.log(`Server is running on port ${PORT}.`);
    await db.users.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
    });
    await user.defaultData();
});
