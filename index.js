// function gamestart(){
// var randomnumber1 = Math.floor(Math.random() * 6) +1;
// 
// var imagesrc1 = "Images/" + randomnumber1 + ".jpeg";
// 
// var x = document.querySelectorAll("img")[0];
// 
// x.setAttribute("src", imagesrc1);
// 
// var y = document.querySelectorAll("img")[1]; 
// 
// var randomnumber2 = Math.floor(Math.random() * 6) +1;
// 
// var imagesrc2 = "Images/" + randomnumber2 + ".jpeg";
// 
// y.setAttribute("src",imagesrc2);
// 
// if(randomnumber1 > randomnumber2){
// document.querySelector("h3").innerHTML= "Player 1 Won the match🚩";
// }
// else if(randomnumber2 > randomnumber1){
// document.querySelector("h3").innerHTML= "Player 2 Won the match🚩";
// }
// else {
// document.querySelector("h3").innerHTML= "It's a tie";
// }
// 
// }
function gamestart() {
    //This is for random number
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    // This will give random image.
    const firstDiceImage = 'image/dice' + firstRandomNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
    //This is for random number
    const secondRandomNum = Math.floor(Math.random() * 6) + 1;
    // This will give random image.
    const secondDiceImage = 'image/dice' + secondRandomNum + '.png';

    document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

    //Logic for winner
    if (firstRandomNum > secondRandomNum) {
        document.querySelector('h1').innerHTML = 'Player 1 Won the match';
    }
    else if (firstRandomNum < secondRandomNum) {
        document.querySelector('h1').innerHTML = 'Player 2 Won the match';
    }
    else {
        document.querySelector('h1').innerHTML = 'Match is draw';
    }

}