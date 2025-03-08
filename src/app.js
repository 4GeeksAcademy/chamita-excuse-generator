import "./style.css";


window.onload = function() {
  //write your code here
  

  let who = ['The dog', 'My daugther', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed','doodled', 'crushed', 'broke'];
  let what = ['my homework','my face', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping','when I was taking a shower', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let chunks = [who, action, what, when]

  let result = ''

  for (let item  of chunks) {
    let newString = item [(Math.floor(Math.random() * item.length))]
    result = result + ' ' + newString
  }

  let excusaElement = document.getElementById("excusa")
  excusaElement.innerHTML = (result)
  
}

  //Second solution.


//   let randomwho = (Math.floor(Math.random() * who.length))
//   let randomaction = (Math.floor(Math.random() * action.length))
//   let randomwhat = (Math.floor(Math.random() * what.length))
//   let randomwhen = (Math.floor(Math.random() * when.length))


//   let excuse = `${who[randomwho]} ${action[randomaction]} ${what[randomwhat]} ${when[randomwhen]}`
//   let excusaElement = document.getElementById("excusa")
//   excusaElement.innerHTML = (excuse)



//background color

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(30);
  const l = getRandomNumber(70);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  document.getElementById("background").style.backgroundColor = randomColor;
}

setBackgroundColor()



 