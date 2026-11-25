const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const question = document.querySelector(".question-container");
const result = document.querySelector(".result-container");

yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  result.style.display = "block";
});

// ប៊ូតុង No រត់គេចពេលដាក់កណ្តុរជិត
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});