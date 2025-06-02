const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const StudentRoutes = require('./routes/StudentRoutes');


const app = express();


app.use(cors());
app.use(bodyParser.json());




app.use('/api/student', StudentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
