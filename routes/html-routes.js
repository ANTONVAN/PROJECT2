module.exports = function(app){

        app.get("/",(req,res)=>{
            res.render("","");
        });

        app.get("/appointments",(req,res)=>{
            
            res.render("appointments","");
        });

        app.get("/calendar",(req,res)=>{
            
            res.render("calendar","");
        });
    
        app.get("/profile",(req,res)=>{
            
            res.render("user","");
        });

        app.get("/treatments",(req,res)=>{
           
            res.render("treatments","");
        });

        

};