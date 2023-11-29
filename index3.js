const suffleButton = document.getElementById('suffleButton');
let courseArray = [];

suffleButton.addEventListener('click', () => {
    
    

    allCourses.forEach(oneCourse => {
        courseArray.push(oneCourse);
    })

    const shuffledArray = shuffleArray(courseArray);
    mainCourseDiv.innerHTML = "";

   for(const key of shuffledArray){
     mainCourseDiv.append(key); 
   }

   courseArray = [];   
})

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
  
 
  