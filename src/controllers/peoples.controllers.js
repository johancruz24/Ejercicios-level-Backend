const peopleCtrl = {}

const People = require('../models/peoples')

peopleCtrl.getPeoples = async (req, res) => {
    const peoples = await People.find()
    res.json(peoples)
}
peopleCtrl.createPeople = async (req, res) => {
  
   const newPeople = new People(req.body)

   await newPeople.save(function(err){
       if(err){
    console.log(String(err));
    res.send({message: 'The person was not entered into the database'})
   }else{
    res.send({message: 'The person was entered into the database'})
   }
   });
   
}

peopleCtrl.deletePeople = async(req, res) =>{
    const people = await People.findByIdAndDelete(req.params.id)
    res.json({status: 'People as Deleted'})
};


module.exports =  peopleCtrl;