const express = require('express')
const dotenv = require('dotenv')
const errorHandeler = require("./middlewares/errorHandler")
const PORT = 3000



dotenv.config()



const app = express()
app.use(express.json())



app.use(errorHandeler)

sequelize.sync({ force: false }) // Use `force: true` only in development
    .then(() => {
        console.log('Database synced successfully!');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(err => console.error('Database sync failed:', err));

