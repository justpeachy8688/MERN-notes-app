import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("you just fetched the notes");
});

router.post("/", (req, res) => {
    res.status(201).json({ message: "note created successfully." });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ message: "note updated successfully." });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "note deleted successfully." });
});

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