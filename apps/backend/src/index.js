// Basic Express Server Setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('HRM API Running'));

// Define Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/leaves", require("./routes/leaveRoutes"));
app.use("/api/recruitment", require("./routes/recruitmentRoutes"));
app.use("/api/contracts", require("./routes/contractRoutes"));
app.use("/api/payroll", require("./routes/payrollRoutes"));
app.use("/api/settings", require("./routes/settingsRoutes"));

const PORT = process.env.PORT || 5001; // Changed default port to avoid conflict with frontend

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

