document.getElementById("year").textContent = new Date().getFullYear();
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatForm = document.getElementById("chatForm");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatMessage");

chatToggle.addEventListener("click", () => {
    const isOpen = chatWindow.classList.toggle("open");
    chatToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
        chatInput.focus();
    }
});

const botReplies = [
    "Thanks for the question! Our core services include full-stack product development, cloud modernization, and AI integration. Would you like a project scoping session?",
    "We can connect you directly with our engineers. Email: support@dhatechsolutions.com · Phone: +63 912 345 6789 · Slack Connect: dhatechsolutions.slack.com/guest.",
    "Need samples? We can provide architecture diagrams, delivery playbooks, and sprint reports. Just drop your preferred channel and we will follow up within 1 business day."
];

chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = chatInput.value.trim();
    if (!value) return;

    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = value;
    chatMessages.appendChild(userMessage);

    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
        botMessage.innerHTML = `<strong>AI Assistant</strong>${reply}`;
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
});

