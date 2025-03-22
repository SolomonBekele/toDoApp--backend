const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).send({ error: "Text field is required" });
    }

    try {
        const data = await ToDoModel.create({ text });
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};


module.exports.updateToDo = async (req,res) =>{
    const {_id} =req.params
    const {text} = req.body
    console.log("iddd",_id)

    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated Successfully ...."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    try {
        const { _id } = req.params; // Correctly extracting `id` from params

        const deletedToDo = await ToDoModel.findByIdAndDelete(_id);

        if (!deletedToDo) {
            return res.status(404).send({ error: "ToDo not found" });
        }

        res.send({ message: "Deleted successfully", data: deletedToDo });
    } catch (err) {
        console.error("Error deleting todo:", err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};


module.exports.getByIdToDo = async (req, res) => {
    try {
        const { id } = req.params; // Get id from URL params

        const data = await ToDoModel.findById(id);

        if (!data) {
            return res.status(404).send({ error: "ToDo not found" });
        }

        res.send({ message: "Fetched successfully", data });
    } catch (err) {
        console.error("Error fetching todo:", err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};
