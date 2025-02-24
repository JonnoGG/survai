require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


//FOR DEV
if (process.env.NODE_ENV !== "production") {
    const devConfig = require('./config/devConfig');
    devConfig(app);
}
//END DEV

const userRoutes = require("./routes/users");
const feedbackRoutes = require('./routes/surveys');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.use("/users", userRoutes);
app.use("/feedback", feedbackRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

