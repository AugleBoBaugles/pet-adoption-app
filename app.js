// Get the express package 
const express = require('express');

// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');

// Define a "default" route
app.get('/', (req, res) => {
	// Log message to the server's console
	console.log("Hello, world - server!");
    res.render('home');
});

app.post('/success', (req, res) => {
    res.render('adoptions',{data: req.body});
})

app.get('/adoptions', (req, res) => {
    res.render('adoptions');
})
// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
