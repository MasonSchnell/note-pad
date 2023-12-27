const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/note_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const noteSchema = new mongoose.Schema({
  name: String,
  notes: [{ type: String }],
});

const Note = mongoose.model("Note", noteSchema);

app.post("/api/notes", async (req, res) => {
  try {
    const { name } = req.body;

    const newNote = new Note({
      name,
    });

    const savedNote = await newNote.save();

    res.json(savedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
