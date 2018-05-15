let express = require("express");
const app = express();
app.use(express.static('public'))
app.listen(3090, (err) => {
    console.log("Server is running on port 3090")
    if (err) {
        return console.log("Error", err);
    }
});
