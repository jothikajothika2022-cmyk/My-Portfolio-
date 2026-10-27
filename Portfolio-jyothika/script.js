const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile menu open and close
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");

        document.querySelectorAll(".nav-links a").forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Show current year in footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Task Manager
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const taskText = document.createElement("span");

    checkbox.type = "checkbox";
    taskText.textContent = taskName;

    checkbox.addEventListener("change", function () {
        taskText.style.textDecoration =
            checkbox.checked ? "line-through" : "none";
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    taskList.appendChild(li);

    taskInput.value = "";
});

// Shopping cart demo
let cartItems = 0;

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");

cartBtn.addEventListener("click", function () {
    cartItems++;

    cartCount.textContent = "Cart items: " + cartItems;
});