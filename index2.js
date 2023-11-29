const inputText  = document.getElementById('inputText');
const courseTopicsNames = document.querySelectorAll('.courseTopicName');

inputText.addEventListener('input', e => {

    let input = e.target.value.trim();

    if(input !==""){
        dropDown.disabled = true;
    }else{
        dropDown.disabled = false;
    }
    
    mainCourseDiv.style.display = 'grid';
    mainCourseDiv.innerHTML = "";

    courseTopicsNames.forEach( course => {
        let splitedArray = course.textContent.trim().toLowerCase().split(' ');
        let datavalue = course.dataset.number;
        const wordsStartingWith = splitedArray.filter(word =>
            word.toLowerCase().startsWith(input.toLowerCase())
          );

          console.log(wordsStartingWith);
          if(wordsStartingWith.length!=0){
            allCourses.forEach(mainCourse => {
                if(datavalue===mainCourse.dataset.number){
                    mainCourseDiv.append(mainCourse);
                }
            })
            console.log(datavalue);
          }     
    })

    if(mainCourseDiv.innerHTML === ""){
        mainCourseDiv.style.display = 'block';
        mainCourseDiv.innerHTML=`<h1 id="errorMessage" class="text-3xl font-medium tracking-tight text-white sm:text-4xl">No Result Found for <span class="bg-gradient-to-r from-[#53a2fe] to-[#a57af8] inline-block text-transparent bg-clip-text">"${input}" </span> Word</h1>`
  }

})

