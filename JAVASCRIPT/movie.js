var movies = 
[
{title: "Sholay", Rating: 5, hasWatched: false},
{title: "Drishyam", Rating: 4, hasWatched: true},
{title: "P.k", Rating: 3, hasWatched: true}
]

movies.forEach(function(movie){
    console.log(buildString(movie));
})

function buildString(movie){
    if(movie.hasWatched){
        return "You have seen \"" + movie.title + "\" - " + movie.Rating + " stars";
    }else{
        return "You have not seen \"" + movie.title + "\" - " + movie.Rating + " stars";   
    }
    
}