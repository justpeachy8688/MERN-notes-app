import express from "express";
import { getAllNotes } from "../controllers/notesControllers.js";
import { createNote } from "../controllers/notesControllers.js";
import { updateNote } from "../controllers/notesControllers.js";
import { deleteNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

/*
app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 10 notes");
}); 

app.post("/api/notes", (req, res) => {
    res.status(201).json({ message: "note created successfully." });
}) ;

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({ message: "note updated successfully." });
}) ;

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({ message: "note deleted successfully." });
}) ;
 */