const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
};

exports.createTodo = async (req, res) => {
    const { title } = req.body;
    const todo = new Todo({ title, userId: req.userId });
    await todo.save();
    res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body, { returnDocument: "after" });
        if (!todo) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json({ message: "Tâche mise à jour avec succès", todo });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

exports.deleteTodo = async (req, res) => {
    await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ message: "Tâche supprimée" });
};

exports.getOneTask = async (req, res) => {
    await Todo.findOne({ _id: req.params.id, userId: req.userId })
        .then((todo) => {
            if (!todo) return res.status(404).json({ message: "Tâche non trouvée" });
            res.json(todo);
        })
        .catch(() => res.status(500).json({ message: "Erreur serveur" }));
}