



window.onload = function() {


    const excuseChunks = [
    
        ['The dog', 'My daughter', 'My grandma', 'The mailman', 'My bird'], 
        ['ate', 'peed', 'doodled', 'crushed', 'broke'],
        ['my homework', 'my face', 'my phone', 'the car'], 
        ['before the class', 'when I was sleeping', 'when I was taking a shower', 'while I was exercising', 'during my lunch', 'while I was praying']
        
    ];
            
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    };
    
    function getRandomExcuse(chunks) {
        return chunks.map(getRandomItem).join(' ');
    };
    
    const excusa = getRandomExcuse(excuseChunks)

    let excusaElement = document.getElementById("excusa")
    excusaElement.innerHTML = (excusa)
};


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
