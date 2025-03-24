let NeDB = require("nedb");
let db = new NeDB({
    filename: "users.db", 
    autoload:true
});

const { userValidations, validate } = require('../utils/validator.js');

module.exports = (app)=>{
    //rota normal
    let route = app.route("/users")

    route.get((req, res)=> {
        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({
                users: { users
                }
            });
            }
        });

        
    });
    
    route.post(userValidations, validate, (req, res)=> {

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });
    
    //rota 2, dinâmica
    let routeID = app.route("/users/:id");

    routeID.get((req, res)=>{
        db.findOne({_id:req.params.id}).exec((err, user) => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });

    routeID.put((req, res)=>{
        db.update({_id:req.params.id}, req.body, err => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    });

    routeID.delete((req, res)=> {
        db.remove({_id: req.params.id}, {}, err =>{
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }
        });
    });

};