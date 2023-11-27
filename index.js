const dropDown = document.getElementById("dropDownList");
const allCourses = document.querySelectorAll(".allCourses");
const mainCourseDiv = document.querySelector(".courseHolder");

dropDown.addEventListener("input", (e) => {
  if (+e.target.value !== 0) {
    mainCourseDiv.innerHTML = "";

    allCourses.forEach((course) => {
      if (e.target.value === course.dataset.example) {
        mainCourseDiv.append(course);
      }
    });
  } else {
    allCourses.forEach((course) => {
      mainCourseDiv.append(course);
    });
  }
});
