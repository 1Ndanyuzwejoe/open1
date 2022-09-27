let numberOfSeasons = 2;
let numberOfEpisodes = 3;


let episodeTime=45;
let commercialTime=5;

let totalShowTime=(episodeTime+commercialTime)*numberOfEpisodes*numberOfSeasons;

let total= numberOfEpisodes+numberOfSeasons; 

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} season, ${numberOfEpisodes} episodes par season 

Total viewing time: ${totalShowTime} minutes`

// ==============================================================

const hoursPerDay=24;
const minutesPerHour=60;
const secondsPerMinute=60;

const dayInput = document.querySelector("#day-input");
const calculateButton = document.querySelector("#calculate-button");

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerText = `${calcHours} Hours`;
  minutes.innerText = `${calcMinutes} Minutes`;
  seconds.innerText = `${calcSeconds} Seconds`;
});


// ==========================================================
                          // TYPES DES DONNES
                          
// const episodeTitle="Joe";
// const episodeDuration= 45;
// const hasBeenWatched=false;


// document.querySelector(".episode-info").innerText= `
// Titre : ${episodeTitle}
// Duration : ${episodeDuration} min
// ${hasBeenWatched ? 'Already Watched ': 'Pas encore'}`;


// ==============================================================
                // LES OBJETS   
              
const myBook = {
  title : "One Love",
  author : "Joe",
  numberOfPage : 200,
  isAvailable : true
}
// // ===============
const episodeInfo = {
  title : "Sniper",
  duration : 200,
  hasBeenWatched : false
}

document. querySelector(".episode-info").innerHTML = `
Title : ${episodeInfo.title}
Duration : ${episodeInfo.duration} min
${episodeInfo.hasBeenWatched ? 'already watched' : 'not yet'}`;

// =======================
let bookTitle =myBook['title'];

let ans =myBook['author'];

// ======================


// class episode {
//   constructor(title, duration, hasBeenWatched){
//     this.title = title;
//     this.duration = duration;
//     this.hasBeenWatched = hasBeenWatched;
//   }
// }
// const firstEpisode = new episode('the dynamite king', 45, true);
// const secondEpisode = new episode('the almighty king', 50, false);
// const thirdEpisode = new episode('the omega city', 44, false);

// document.querySelector('.first').innerText =`
// Title : ${firstEpisode.title}
// Duration : ${firstEpisode.duration} min
// ${firstEpisode.hasBeenWatched ? 'already watch' : 'not yet watch'}`;

// document.querySelector(".second").innerText =`
// Title : ${secondEpisode.title}
// Duration : ${secondEpisode.duration} min
// ${secondEpisode.hasBeenWatched ? 'already watch' : 'not yet watch'}`;

// document.querySelector(".third").innerText =`
// Title : ${thirdEpisode.title}
// Duration : ${thirdEpisode.duration} min
// ${thirdEpisode.hasBeenWatched ? 'already watch' : 'not yet watch'}`;
// ===================================================================

                  // LES ARRAYS

// let guests = ["Ndirakobuca alpha", "Isirabahenda George", "Simon Pierre", "Ndanyuzwe Joe", "Byishimo James"];
// let firstGuest = guests[0];
// let secondGuest = guests[3];
// guests.push("Ndanyuzwe alpha");
// // console.log(firstGuest);
// let a = guests.length;



// =============



// class Episode {
//   constructor(title, duration, hasBeenWatched){
//     this.title= title;
//     this.duration= duration;
//     this.hasBeenWatched= hasBeenWatched;
//   }
// }
// let firstEpisode=new Episode('The hunter', 45, true);
// let secondEpisode= new Episode('Black Liste', 50, false);
// let thirdEpisode = new Episode('Jumong', 70, true);
// let fourthEpisode = new Episode("The Rain", 45, false);
// let fifthEpisode = new Episode("Black panter", 40, true);






// let episodes = [firstEpisode, secondEpisode, thirdEpisode];
// episodes.push(fourthEpisode);
// episodes.unshift(fifthEpisode);
// // episodes.shift();
// // episodes.pop();
// let taille = episodes.length;
// alert(taille);



// const body = document.querySelector("body");
// for(let i=0; i<12; i++){
//   let newDiv = document.createElement('div');
//   newDiv.classList.add('series-frame');
//   let newTitle = document.createElement('h2');
//   newTitle.innerText= 'The story of Joe';
  
//   let newParagraph = document.createElement('p');
//   newParagraph.innerText = `
//   ${episodes[i].title}
//   ${episodes[i].duration}
//   ${episodes[i].hasBeenWatched ? 'already watched' : 'not yet watched'}`;

//   newDiv.append(newTitle);
//   newDiv.append(newParagraph);
//   body.append(newDiv);
// }

// =================================FIN DU CHAPITRE UN=======================

// -------------------------- CHAPITRE DEUX------------------------
// =================== les conditions if and else ==================

// let myboolean = true;

// if(myboolean){
//   console.log("l'utilisateur est connecte");
// }
// else{
//   alert(`alert il n'est pas le proprietaire du compte`);
// }

// let numberOfSeats = 30;
// let numberOfGuests =30;

// if(numberOfSeats > numberOfGuests){
//   console.log("bien organiser");
  
// }else if(numberOfSeats == numberOfGuests){
//   console.log("un peut d'organisation");
// }else{
//   console.log('mal organiser');
// }
// =====EXERCICE SUR IF AND ELSE NUMERO 1===



// let ageInput =document.getElementById("number");
// let buton = document.getElementById("buton");
// let espaceMessage = document.getElementById("message");
// let parentalInput =document.getElementById("one");

// let ageMajorite = 18;
// let age;

// let isControlParentalActive;


// function valider(){
//   espaceMessage.innerHTML = "vous etes autoriser a entre";
// }
// function refuser(){
//   alert("cette espace n'est pas autoriser au personne mineur");
// }

// function onComfirm(){
//   age = parseInt(ageInput.value);

//   isControlParentalActive = parentalInput.checked;

//   if(isNaN(age)){
//     alert("ceci n'est pas un nombre");
//     return;    
//   }

//   if(age < ageMajorite && isControlParentalActive){
//     refuser();
//   }
//   else{
//     valider();
//   }
//   ageInput.value = "";
// }
// buton.addEventListener('click', onComfirm);