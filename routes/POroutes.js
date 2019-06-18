const express=require('express');
const router=express.Router();
const PO=require('../models/PO')
const db=require('../models')


router.get('/',(req,res)=>
{
   db.PO.find().then(todos=>res.json(todos))
})
router.post('/',(req,res)=>
{
    console.log("1")
    console.log(req.body)
    let newPO=new PO({
      PO_number:req.body.PO_number,
      POScope:req.body.POScope,
      Amount_Released:req.body.Amount_Released,
      Amount_Consumed:req.body.Amount_Consumed,
      
    })
    console.log("2")
    newPO.save((err,data)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send("Post complete")
        }
    })
    // Todo.create(newTodo).then(()=>console.log("done"))
    //console.log(newTodo)
})
router.get('/:todoId',(req,res)=>
{
    // console.log(req.params)
    // db.Todo.find({name:req.params.name}).then(todo=>res.json(todo))
    // // db.Todo.findById(req.body.todoId).then(foundInfo=>res.json(foundInfo))
    db.Todo.findById(req.params.todoId).then(todo=>res.json(todo))
})

router.put('/:todoId',(req,res)=>{
    db.Todo.findOneAndUpdate({_id:req.params.todoId},req.body).then((todo)=>res.json(todo))
})
router.delete('/:todoId',(req,res)=>
{
    db.Todo.remove({_id:req.params.todoId}).then(()=>res.send("Deleted")).catch(err=>console.log(err))
})

module.exports=router