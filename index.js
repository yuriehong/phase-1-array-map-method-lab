const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map((tutorial) => {
//   let words = tutorial.slice(' ');
//     for (let word of words){
//       word[0].toUpperCase();
//         }
//     return words;

// });


function titleCased(){
   return tutorials.map((tutorial) => {
    let words = tutorial.split(' ');
      return words.map((word) => {
        word = word.slice(0,1).toUpperCase() + word.slice(1);
        return word;
      }).join(" ");
      
    
          })
  
  }

console.log(titleCased(tutorials));