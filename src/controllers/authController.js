const User = require('../models/user');

module.exports = {
    creat: async (req, res) => {
        try {
            const user = await User.create(req.body);
    
            return res.send(user);
        } catch (err){
            console.log(err)
            return res.status(400).send({error: 'Registration failed'})
        }
    }, 
    find: async (req, res) => {
        try {
            const findUser = await User.find();
            
            return res.send (findUser);
        } catch (err) {
            console.log(err);
            return res.status(404).send({error: 'Users not found'})
        }
    },
    findOne: async (req, res) => {
        const _id = req.params.id;
        try {
            if(!await User.findById(_id)){
                return res.status(404).send({error: "ID not found"})
            }
            const oneUser = await User.findById(_id);
            return res.send(oneUser)
        } catch (error) {
            console.log(err);
            return res.status(404).send({error: "ID not found."})            
        }
    },
    edit: async (req, res) => {
        const _id = req.params.id;
        //const {price} = req.body // se quisese pegar somente um parametro 
        try {
            const editUser = await User.findByIdAndUpdate(_id, req.body, {new:true} );
            return res.send(editUser)
        } catch (err) {
            console.log(err);
            return res.status(404).send({error: "ID not found, can't edit"})
        }
    },
    delete: async (req, res) => {
        const _id = req.params.id;
        //const {price} = req.body // se quisese pegar somente um parametro 
        try {
            if(!await User.findById(_id)){
                return res.status(404).send({error: "ID not found"})
            }
            await User.findByIdAndDelete(_id);
            return res.send({ok:"Success deleted"})
        } catch (err) {
            console.log(err);
            return res.status(404).send({error: "ID not found, can't delte"})
        }
    }

}

//get , 

