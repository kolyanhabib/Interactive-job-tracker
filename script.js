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

function filterCards(type) {
  currentTab = type;

  const allCards = document.querySelectorAll(".job-card");

  let visible = 0;
  let total = allCards.length;

  allCards.forEach(function (card) {
    const text = card.querySelector(".status").innerText;

    card.style.display = "none";

    if (type === "ALL") {
      card.style.display = "block";
      visible++;
    }

    if (type === "INTERVIEW" && text === "INTERVIEW") {
      card.style.display = "block";
      visible++;
    }

    if (type === "REJECTED" && text === "REJECTED") {
      card.style.display = "block";
      visible++;
    }
  });

  if (type === "ALL") {
    availableJobs.innerText = total + " Jobs";
  } else {
    if (visible === 0) {
      availableJobs.innerText = "0 Jobs";
    } else {
      availableJobs.innerText = visible + " of " + total + " Jobs";
    }
  }

  checkEmpty();
}

function checkEmpty() {
  let visible = 0;

  const allCards = document.querySelectorAll(".job-card");

  allCards.forEach(function (card) {
    if (card.style.display !== "none") visible++;
  });

  if (visible === 0) {
    emptyStatus.classList.remove("hidden");
  } else {
    emptyStatus.classList.add("hidden");
  }
}

function setActiveTab(activeBtn) {
  allTab.classList.remove("bg-blue-600", "text-white");
  interviewTab.classList.remove("bg-blue-600", "text-white");
  rejectedTab.classList.remove("bg-blue-600", "text-white");

  allTab.classList.add("bg-white", "text-slate-500");
  interviewTab.classList.add("bg-white", "text-slate-500");
  rejectedTab.classList.add("bg-white", "text-slate-500");

  activeBtn.classList.remove("bg-white", "text-slate-500");
  activeBtn.classList.add("bg-blue-600", "text-white");
}

allTab.addEventListener("click", function () {
  filterCards("ALL");
  setActiveTab(allTab);
});

interviewTab.addEventListener("click", function () {
  filterCards("INTERVIEW");
  setActiveTab(interviewTab);
});

rejectedTab.addEventListener("click", function () {
  filterCards("REJECTED");
  setActiveTab(rejectedTab);
});

updateCounts();
filterCards("ALL");
setActiveTab(allTab);
