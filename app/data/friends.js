var friendsArray=[
    {
        name: "Mario", 
        photo: "https://vignette.wikia.nocookie.net/mario/images/e/e4/MarioMPIT.png/revision/latest?cb=20130913125735",
        scores:[5,3,4,1,3,2,4,5,5,1]
    },
    {
        name:"Link",
        photo:"https://en.wikipedia.org/wiki/Link_(The_Legend_of_Zelda)#/media/File:Wakerlink.jpg",
        scores:[1,4,4,6,5,2,5,1,5,3]
    },
    {
        name:Laura,
        photo:"https://vignette.wikia.nocookie.net/laracroft/images/8/8a/LaraBigSmile.png/revision/latest?cb=20150823000150",
        scores:[4,3,5,5,5,1,5,3,1,1]
    },  
    {
        name:"Master Chief",
        photo:"https://en.wikipedia.org/wiki/Master_Chief_(Halo)#/media/File:Master_Chief_in_Halo_5.png",
        scores:[1,5,4,5,1,5,3,5,1,5]
    },    {
        name:"Sonic",
        photo:"https://www.ssbwiki.com/images/thumb/f/f3/Sonic_SSB4.png/250px-Sonic_SSB4.png",
        scores:[4,1,5,3,2,3,1,5,5,1]
    },    
    {
        name:"Samus Aran",
        photo:"https://cdn.wikimg.net/metroidwiki/images/thumb/e/e2/Samus_m1_Artwork_1.png/250px-Samus_m1_Artwork_1.png",
        scores:[1,5,1,3,3,1,5,2,6,4]
    },
    {
        name:"Donkey Kong",
        photo:"https://upload.wikimedia.org/wikipedia/en/e/e1/Donkey_kong.png",
        scores:[4,1,5,1,1,5,1,3,5,1]
    }
]

function reducer(accuumulator, currentValue){
    return accuumulator + currentValue
}

let Promise = new Promise(function(resolove, reject){
    for (let i= 0; i < firendsData.length; i++) {
        var matchScore = [];
        for (let y= 0; y < newFriend.scores.length; y++ ){
            matchScores.push(Math.abs(newFriend.scores[y] - firendsData[i].scores[y]))
        };
        totalMatches.push(matchScore)
    }
    console.log(totalMatches, "compatability");
    var chosenFriendArray = [];
    for(let z= 0;z < totalMatches.length; z ++){
        chosenFriendArray.push(totalMatches[z].reduce(reducer));
    }
    var matchedFriendIndex = math.min.apply(null, chosenFriendArray);
    console.log(matchedFriendIndex);
    var firendsDataIndex= chosenFriendArray;
    console.log(matchedFriendIndex);
    var firendsDataIndex= chosenFriendArray.indexOf(matchedFriendIndex);
    console.log(firendsDataIndex);
    let foundFriend = true;
    if (firendsDataIndex != -1){
        resolve(firendsData[firendsDataIndex]);
    }
    else{
        reject(false);
    }
});
friendPromis.then(function(fromResolved){
    firendsData.push(newFriend);
    console.log(fromResolved);
    if(fromResolved == false){
        res.send("No new Friend");
    }else{
        res.json(fromResolved);
    }
})