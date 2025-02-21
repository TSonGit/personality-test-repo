const express = require('express');
const { name } = require('ejs');
const app = express();

//Sets up the view for port 3000.
app.set('view engine', 'ejs');

//Test if file can communicate with server: localhost:3000
app.get('/', (req, res) => {
    console.log('Ran for a test.');
    res.send('Ran from run_test.js');
})

//path to run the main view for the test.
app.get('/personality_quiz', (req, res) => {
    console.log('Ran from run_test.js!');
    res.render('Myers_Briggs_test');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });