const names = ["Guadalupe", "Ollie", "Aki"];
const gift = "surprise";

function writeCards(names, gift) {

let tmpnames = new Array();

  for (let i = 0; i < names.length; i++) {
    tmpnames[i] = `Thank you, ${names[i]}, for the wonderful ${gift} gift!`;
  }
    return tmpnames;
}



function countDown() {
let countdown = 10;

for (let countdown = 10; countdown >= 0 ; countdown--) {
  console.log(countdown);
}

}