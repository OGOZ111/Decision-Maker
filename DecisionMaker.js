// bring in html input fields

const check = () => {
  const Username = document.querySelector("#name").value;
  const question = document.querySelector("#question").value;

  // check if input fields or empty
  if (Username == "") {
    alert("You must tell me your name");
    return false;
  }

  if (question == "") {
    alert("You must tell me what it is you seek");
    return false;
  }

  //console.log(Username + " Asked the question, " + question);

  // run a random number func
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomNum = getRandomInt(1, 11);
  /*console.log(randomNum);*/

  // use said random number into a switch, to show outcome of chosen number

  let decicionStatements = randomNum;

  switch (decicionStatements) {
    case 1:
      decicionStatements = "Yes you should do that!";
      break;
    case 2:
      decicionStatements = "Thats a bad idea!";
      break;
    case 3:
      decicionStatements = "Signs point to unexpected opportunities";
      break;
    case 4:
      decicionStatements =
        "Take a step back and reassess before moving forward";
      break;
    case 5:
      decicionStatements = "Trust your instincts and take the leap";
      break;
    case 6:
      decicionStatements = "Outlook is bright, proceed with confidence";
      break;
    case 7:
      decicionStatements = "Hmm, better try again later.";
      break;
    case 8:
      decicionStatements =
        "Not the right time, patience will bring better results";
      break;
    case 9:
      decicionStatements = "Seek advice from a trusted friend before deciding";
      break;
    case 10:
      decicionStatements = "Don't do that shit";
      break;

    default:
      decicionStatements = "No answer here";
      break;
  }

  // After switch has done it thing, display the text outcome from the switch into the text content on page.

  answer.textContent =
    Username +
    ", you have asked the question, " +
    question +
    ". The gods decided your fate shall be         " +
    decicionStatements;
};
