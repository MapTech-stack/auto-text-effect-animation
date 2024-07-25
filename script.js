const conatinerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Content Creator", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

// function updateText() {
//   characterIndex++;

//   conatinerEl.innerHTML = ` <h1>I am ${
//     careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
//   } ${careers[careerIndex].slice(0, characterIndex)}</h1> `;

//     if (characterIndex === careers[careerIndex].length) {
//       careerIndex++;
//       characterIndex = 0;
//     }

//     if (careerIndex === careers.length) {
//       careerIndex = 0;
//     }

//     setTimeout(updateText, 400);
// }

function updateText() {
  characterIndex++;
  conatinerEl.innerHTML = `
      <h1>I am a ${careers[careerIndex].slice(0, characterIndex)} </h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}
updateText();

function getUserObject(firstName, lastName, age) {
  const user = {
    name: `${firstName} ${lastName}`,
    age: age,
  };

  return console.log(user);
}

getUserObject("Abiodun", "Mustapha", 34);
