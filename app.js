window.addEventListener('load', function () {
    console.log('page is loaded');

let button = document.getElementById('recipe-button');
button.addEventListener('click', function() {
   
    let API_URL="http://taco-randomizer.herokuapp.com/random/?full-taco=true"
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.recipe.split('\n'));

        data.recipe = data.recipe.replace(data.name,'');
        let sentences = data.recipe.split('\n');
        console.log(sentences);
        for(var i = 0; i < sentences.length; i++) {
            document.getElementById("recipe-text" + i).innerHTML = sentences[i]
       }

        let nameElement = document.getElementById('recipe-name');
        nameElement.innerHTML = data.name
        
    })
    
})


})

function setup (){
    console.log("Setup");
    createCanvas(100, 100);
    background(0);
}

function draw (){ 


}