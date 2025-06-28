const express   = require("express");
const cors      = require("cors");
const dotenv    = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());           // <-- body-parser for JSON!

app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (_, res) => res.send("API running ✅"));

const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    console.log('Server on http://localhost:${PORT}')
});