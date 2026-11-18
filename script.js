
// PAGE NAVIGATION

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// OPENING ENVELOPE

function openLetter() {
  showPage("letter");
}


// MEMORIES PAGE

function showMemories() {
  showPage("memories");
}


// SURPRISE PAGE

function showSurprise() {
  showPage("surprise");
}


// RANDOM LOVE MESSAGES

const messages = [
  "You're my favourite human. Unfortunately. 😭💗",
  "Ek pappi hojati toh kya hi jaata tumhara?",
  "Haydu the don, officially my favourite headache.",
  "I love you more than I love sleeping. That's BIG.",
  "Come here, you owe me approximately 100 kisses. 💋",
  "Distance ho ya family ka chaos, you're still my person.",
  "MWAHHHHH! Ab khush? 🎀",
  "Chupchap pyaar se baat karo mujhse. 😤💗"
];

let messageIndex = 0;

function newMessage() {
  const message = document.querySelector(".surprise-message");

  messageIndex = (messageIndex + 1) % messages.length;

  message.textContent = messages[messageIndex];
}


// FINAL QUESTION

function showQuestion() {
  showPage("question");
}


// YES BUTTON

function sayYes() {
  document.getElementById("answer").textContent =
    "YAYYYYY! COME HERE, YOUUU! MWAHHHHH 💗💐";

  makeHearts();
}


// NO BUTTON

function sayNo() {
  document.getElementById("answer").textContent =
    "Sahi! OK! NICE! 😤 ...but ek pappi toh lelo please?";
}


// FLOATING HEARTS

function makeHearts() {
  const container = document.querySelector(".hearts");

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";

    heart.textContent = ["💗", "💖", "💕", "💐", "✨"][
      Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }
}


// CONTINUOUS FLOATING HEARTS

setInterval(() => {
  const container = document.querySelector(".hearts");

  const heart = document.createElement("span");

  heart.className = "heart";

  heart.textContent = ["♡", "💗", "✨", "💕"][
    Math.floor(Math.random() * 4)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = "20px";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);

}, 900);
