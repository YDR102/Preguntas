// const Btns = document.querySelectorAll(".question-btn");

// Btns.forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         const plusIcon = btn.querySelector(".plus-icon");
//         const minusIcon = btn.querySelector(".minus-icon");
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");

//         if (plusIcon.style.display === "none") {
//             plusIcon.style.display = "inline";
//             minusIcon.style.display = "none";
//             btn.style.transform = "rotate(0deg)";
//         } else {
//             plusIcon.style.display = "none";
//             minusIcon.style.display = "inline";
//             btn.style.transform = "rotate(90deg)";
//         }
//     });
// });

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {

    const btn = question.querySelector(".question-btn");
    const plusIcon = btn.querySelector(".plus-icon");
    const minusIcon = btn.querySelector(".minus-icon");
    btn.addEventListener('click', function(){

        question.classList.toggle("show-text");

        if (plusIcon.style.display === "none") {
            plusIcon.style.display = "inline";
            minusIcon.style.display = "none";
            btn.style.transform = "rotate(0deg)";
        } else {
            plusIcon.style.display = "none";
            minusIcon.style.display = "inline";
            btn.style.transform = "rotate(90deg)";
        };
    })



});
