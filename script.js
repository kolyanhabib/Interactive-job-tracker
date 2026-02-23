const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const emptyStatus = document.getElementById("emptyStatus");

const availableJobs = document.getElementById("availableJobs");

let currentTab = "ALL";

const cards = document.querySelectorAll(".job-card");

function updateCounts() {
  const allCards = document.querySelectorAll(".job-card");

  let total = 0;
  let interview = 0;
  let rejected = 0;

  allCards.forEach(function (card) {
    total++;

    const text = card.querySelector(".status").innerText;

    if (text === "INTERVIEW") interview++;
    if (text === "REJECTED") rejected++;
  });

  totalCount.innerText = total;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}

cards.forEach(function (card) {
  const interviewBtn = card.querySelector(".interview-btn");
  const rejectBtn = card.querySelector(".reject-btn");
  const deleteBtn = card.querySelector(".delete-btn");
  const status = card.querySelector(".status");

  interviewBtn.addEventListener("click", function () {
    status.innerText = "INTERVIEW";

    status.classList.remove(
      "bg-red-100",
      "text-red-600",
      "bg-blue-50",
      "text-blue-950",
    );

    status.classList.add("bg-green-100", "text-green-600");

    updateCounts();
    filterCards(currentTab);
  });

  rejectBtn.addEventListener("click", function () {
    status.innerText = "REJECTED";

    status.classList.remove(
      "bg-green-100",
      "text-green-600",
      "bg-blue-50",
      "text-blue-950",
    );

    status.classList.add("bg-red-100", "text-red-600");

    updateCounts();
    filterCards(currentTab);
  });

  deleteBtn.addEventListener("click", function () {
    card.remove();
    updateCounts();
    filterCards(currentTab);
  });
});
