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