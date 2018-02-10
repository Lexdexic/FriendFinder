var path = requier("path");

module.exports= function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "..?public/survey.html"));
    });
    app.get("/:home?", function(rec, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};