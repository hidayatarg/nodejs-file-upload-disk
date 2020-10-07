const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const profile = require('./routes/profile');
const port = 3000;


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})

// standard style of defining routes
app.use('/profile', profile);


app.use((req, res) => {
    res.status(404).json({
        errors: {
            global: "Still working on it. Please try again later when we implement it."
        }
    });
});


// port listening
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})