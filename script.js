const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mousemove", (event) => {

        const rect = project.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        project.style.setProperty("--mouse-x", `${x}px`);
        project.style.setProperty("--mouse-y", `${y}px`);

    });

});
