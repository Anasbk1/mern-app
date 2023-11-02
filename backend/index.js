const express = require('express');
const cors = require('cors');



const app = express();
const port = process.env.PORT || 3001; 

// Middleware
app.use(cors());

app.use(express.json())
// Logging for development (you can customize this)
const routes = require('./routes/user.js'); 
const barberRoutes = require('./routes/barber.js');


// Routes
app.use('/users', routes); // Mount your routes at the /api path
app.use('/barbers', barberRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 