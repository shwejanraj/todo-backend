const todoModel = require("../models/ToDoModel")

module.exports.getToDo = async (req, res)=>{
    const toDo = await todoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res)=>{
    const {text} = req.body
    // console.log("came here savetodo");
    todoModel.create({text}).then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async(req, res)=>{
    const {_id, text} = req.body;
    todoModel.findByIdAndUpdate(_id,{text}).then(()=>{
        res.send("updated successfully..")
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports.deleteToDo = async(req, res)=>{
    const {_id} = req.body;
    todoModel.findByIdAndDelete(_id).then(()=>{
        res.send("deleted successfully..")
    }).catch((err)=>{
        console.log(err);
    })
}
