const getQuestionsTest = new XMLHttpRequest();

getQuestionsTest.addEventListener("readystatechange", () => {
  if (
    getQuestionsTest.readyState == getQuestionsTest.DONE &&
    getQuestionsTest.status === 200
  ) {
    const responsetest = JSON.parse(getQuestionsTest.responseText);
    document
      .getElementById("poll__title")
      .insertAdjacentText("afterbegin", `${responsetest.data.title}`);
    const buttonTest = document.getElementById("poll__answers");
    for (let btn of responsetest.data.answers) {
      btnanswer = `<button class="poll__answer">
                        ${btn}
                    </button>`;
      buttonTest.insertAdjacentHTML("beforeend", btnanswer);
    }
    document.body.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.matches(".poll__answer")) {
        alert("Спасибо, ваш голос засчитан!");
        location.reload();
      }
    });
  }
});

getQuestionsTest.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/poll"
);
getQuestionsTest.send();
