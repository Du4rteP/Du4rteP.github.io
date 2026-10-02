const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mousemove", (event) => {

        const rect = project.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        project.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        project.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

    project.addEventListener("mouseleave", () => {

        project.style.setProperty(
            "--mouse-x",
            `50%`
        );

        project.style.setProperty(
            "--mouse-y",
            `50%`
        );

    });

});

const revealElements = document.querySelectorAll(
    ".about, .project, footer"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});
let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    else {
        currentSlide = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}


function changeSlide(direction) {

    showSlide(currentSlide + direction);

}


function goToSlide(index) {

    showSlide(index);

}