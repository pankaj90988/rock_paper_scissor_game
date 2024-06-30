// Getting all required element
let playerimage = document.querySelector(".player-generate");
let computerimage = document.querySelector(".computer-generate");
let result = document.querySelector("#play");
let text = document.querySelector("#text");
let computerName = document.querySelector(".computerplayer");
let userName = document.querySelector(".userplayer")

// Providing a Array to computer to Generate a Random Event
let arr = ["rock-1", "paper-2", "scissor-3"];

// Computer Generate a Random Indexing Value
function computerChoosed() {
  let random = Math.floor(Math.random() * 3);
  return arr[random];
}

// Whenever player choose An event then this funtion is called
function changeImg(e) {
  let computerGenerate = computerChoosed();
  let playerGenerate = e.target.name;

  computerimage.classList.add("animateLeft");
  playerimage.classList.add("animateRight");

  computerimage.src = "rock-1.jpeg";
  playerimage.src = "rock-1.jpeg";
  result.innerHTML = "Playing....";
  text.innerHTML = " 😎";
  computerName.innerHTML = "Computer"
  computerName.style.color = "black"
  userName.innerHTML = "Player"
      userName.style.color = "black"

  setTimeout(() => {
    text.innerHTML = "Rock"
    text.style.color = "red"
  }, 400)
  setTimeout(() => {
    text.innerHTML = "Paper"
    text.style.color = "blue"
  }, 900)
  setTimeout(() => {
    text.innerHTML = "Scissor"
    text.style.color = "green"
  }, 1400)

  setTimeout(function () {

    computerimage.classList.remove("animateLeft");
    playerimage.classList.remove("animateRight");

    computerimage.src = computerGenerate + ".jpeg";

    let playerChoosed = e.target.name + ".jpeg";

    playerimage.src = playerChoosed;

    if (computerGenerate == playerGenerate) {
      console.log("Match Draw");
      result.innerHTML = "Match Draw";
      result.style.color = "orangered"
      text.innerHTML = "Try Again"

    } else if (playerGenerate == "rock-1" && computerGenerate == "paper-2") {
      console.log("Computer won the Match");
      result.innerHTML = "Computer won the Match";
      text.innerHTML = "कोशिश करने वालों की कभी हार नही होती!🤪 Try Again";
      computerName.innerHTML = "Computer ✅"
      computerName.style.color = "red"

    } else if (playerGenerate == "paper-2" && computerGenerate == "rock-1") {
      console.log("You won the Match");
      result.innerHTML = "Congrats! You won the Match";
      result.style.color = "orangered"
      text.innerHTML = "🥳🥳🥳🥳";
      userName.innerHTML = "Player ✅"
      userName.style.color = "red"

    } else if (playerGenerate == "scissor-3" && computerGenerate == "paper-2") {
      console.log("You won the Match");
      result.innerHTML = "Congrats! You won the Match";
      result.style.color = "orangered"
      text.innerHTML = "🥳🥳🥳🥳";
      userName.innerHTML = "Player ✅"
      userName.style.color = "red"

    } else if (playerGenerate == "paper-2" && computerGenerate == "scissor-3") {
      console.log("Computer won the Match");
      result.innerHTML = "Computer won the Match";
      text.innerHTML = "हौसला बुलंद रखिए!😉 Try Again";
      computerName.innerHTML = "Computer ✅"
      computerName.style.color = "red"


    } else if (playerGenerate == "scissor-3" && computerGenerate == "rock-1") {
      console.log("Computer wins the Match");
      result.innerHTML = "Computer won the Match";
      text.innerHTML = "कोशिश करने वालों की कभी हार नही होती!🤪 Try Again";
      computerName.innerHTML = "Computer ✅"
      computerName.style.color = "red"

    } else if (playerGenerate == "rock-1" && computerGenerate == "scissor-3") {
      console.log("You won the Match");
      result.innerHTML = "Congrats! You won the Match";
      result.style.color = "orangered"
      text.innerHTML = "🥳🥳🥳🥳";
      userName.innerHTML = "Player ✅"
      userName.style.color = "red"

    }
  }, 1700);


};