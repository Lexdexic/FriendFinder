var frindData= requier("../data/friend.js");

module.exports= function(app){
    app.get("/api/friends", function(req, res){
        var tempFriend=req.body
        console.log(tempFriend);
        var newFriend= {
            name: req.body.name,
            photo:req.body.photo,
            scores:req.body["scores[]"]
        }
        newFriend.scores = newFriend.scores.map(function(score){
            return parseInt(score)
        })
        console.log("A wild " + newFriend + " has appeared!");

        var totalMatches= [];
    })
}