

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const db = require("./models")
db.sequelize.sync();

let corsOptions = {
    origin: "http://localhost8081"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

require("./routes/task.route")(app);
require("./routes/subtask.route")(app);
require("./routes/project.route")(app);
require("./routes/projectSection.route")(app);
require("./routes/priority.route")(app);
require("./routes/label.route")(app);
require("./routes/color.route")(app);
require("./routes/comment.route")(app);
require("./routes/user.route")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

// respond with "hello world" when a GET request is made to the homepage
// app.get('/subtasks', (req, res) => {
//     client.query('select * from subtasks', (err, result) => {
//         if (!err) {
//             res.send(result)
//         }
//     });
// })