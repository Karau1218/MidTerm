

// Import the express module and path
import express from 'express';
import path from 'path'; 

// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3005;

// Helper to get the current directory path (required for import syntax)
const __dirname = path.resolve();

// --- Express Middleware Setup ---

// Middleware to parse request bodies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Add this to serve CSS, JS, and images from the 'public' folder
app.use(express.static(path.join(__dirname, 'public'))); 

// Set your view (templating) engine to "EJS"
app.set('view engine', 'ejs');
// Set views directory using path.join
app.set('views', path.join(__dirname, 'views'));


// --- Routes ---

app.get('/', (req, res) => {
    console.log("Hello, world - server!");
    res.render('index');
});

// Define a "confirm" route, using the POST method
app.post('/confirm', (req, res) => {
    // Get the data from the form that was submitted
    let details = req.body; 

    res.render('confirmation', { details: details }); 
})

// --- Server Startup ---

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});