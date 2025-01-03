function Roll_Dice(){
   
    var elementy = document.querySelectorAll(".dice img");
        var random_number = Math.floor(Math.random()*6) + 1;
        var random_number_2 = Math.floor(Math.random()*6) + 1;
        var heading = document.querySelector("h1");
        if(random_number > random_number_2){
            heading.textContent = "🚩 Player 1 wins";
        }
        else if(random_number < random_number_2){
            heading.textContent = "Player 2 wins 🚩";

        }
        else{
            heading.textContent = "Draw";

        }

        elementy[0].setAttribute("src",`./images/dice${random_number}.png`);
        elementy[1].setAttribute("src",`./images/dice${random_number_2}.png`);

    
}