document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling when clicking links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Reveal sections on scroll
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    window.addEventListener("load", revealSection);

    // Pop-up for dish details
    document.querySelectorAll(".dish").forEach(dish => {
        dish.addEventListener("click", () => {
            alert(`You clicked on ${dish.querySelector("h3").innerText}. More details coming soon!`);
        });
    });

    // Newsletter input validation
    document.querySelector(".newsletter button").addEventListener("click", () => {
        const emailInput = document.querySelector(".newsletter input").value;
        if (!emailInput.includes("@") || !emailInput.includes(".")) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
        }
    });

    function toggleMenu() {
        const sidebar = document.getElementById("sidebar");
        const menuToggle = document.getElementById("menuToggle").querySelector("span");

        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";
            menuToggle.innerHTML = "&#9776;"; 
        } else {
            sidebar.style.left = "0px";
            menuToggle.innerHTML = "&times";
        }
    }
});


    // Reveal sections on scroll
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    window.addEventListener("load", revealSection);

    // Pop-up for dish details
    document.querySelectorAll(".dish").forEach(dish => {
        dish.addEventListener("click", () => {
            alert(`You clicked on ${dish.querySelector("h3").innerText}. More details coming soon!`);
        });
    });

    // Newsletter input validation
    document.querySelector(".newsletter button").addEventListener("click", () => {
        const emailInput = document.querySelector(".newsletter input").value;
        if (!emailInput.includes("@") || !emailInput.includes(".")) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
        }
    });

    function toggleMenu() {
        const sidebar = document.getElementById("sidebar");
        const menuToggle = document.getElementById("menuToggle").querySelector("span");

        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";
            menuToggle.innerHTML = "&#9776;"; 
        } else {
            sidebar.style.left = "0px";
            menuToggle.innerHTML = "&times";
        }
    }
});


// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Pop-up for dish details
document.querySelectorAll(".dish").forEach(dish => {
    dish.addEventListener("click", () => {
        alert(`You clicked on ${dish.querySelector("h3").innerText}. More details coming soon!`);
    });
});

// Newsletter input validation
document.querySelector(".newsletter button").addEventListener("click", () => {
    const emailInput = document.querySelector(".newsletter input").value;
    if (!emailInput.includes("@") || !emailInput.includes(".")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for subscribing!");
    }
});
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menuToggle").querySelector("span");


    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        menuToggle.innerHTML = "&#9776;"; 
    } else {
        sidebar.style.left = "0px";
        menuToggle.innerHTML = "&times";
    }
}
