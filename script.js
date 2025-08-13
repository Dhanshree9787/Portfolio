let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
document.getElementById("resumeBtn").addEventListener("click", function () {
  window.open("images/resume.jpg", "_blank");
});

document.getElementById("offer").addEventListener("click", function () {
  window.open("images/internship.jpg", "_blank");
});



// backend js code
  document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      subject: this.subject.value,
      message: this.message.value,
    };

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
      this.reset();
    } catch (error) {
      alert("Failed to send message.");
      console.error(error);
    }
  });

