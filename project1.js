document.querySelectorAll('.nav-link-modal-skills').forEach(button => {
    button.addEventListener('click', toggleModal);
});

// const closeIcon = document.querySelector('.fa-window-close.nav-link-modal');
// closeIcon.addEventListener('click', window.close);

document.querySelectorAll('.nav-link-modal-exp').forEach(button => {
    button.addEventListener('click', toggleModal);
});

function toggleModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.toggle('open');
}

document.querySelectorAll('.project1-button').forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.dataset.id)
    })
})

fetch('projects.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.map((project) => {
            let projectCont = document.createElement("div")
            projectCont.className = "project2";
            projectCont.innerHTML = `
                <div>
                    <h1>${project.Title}</h1>
                    <p>${project.Description}</p>
                    <img src="${project.image}">
                    <a href="${project.url}">Project Link</a>
                    <button class="project1-button" data-id="${project.id}">Select Project</button>
                </div>
            `
            // Assuming project.id is the id of the container where you want to append the project
            let containerId = project.id < 0 ? project.id : "project"
            document.getElementById(containerId).appendChild(projectCont)
        })
    })
    

            














// fetch('projects.json')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         data.forEach((project) => {
//             document.querySelector('#project1').innerHTML += `
//                 <div>
//                     <h1>${project.Title}</h1>
//                     <p>${project.Description}</p>
//                     <img src="${project.image}">
//                     <a href="${project.url}"></a>
//                     <button class="project1-button" data-id="${project.id}">Select Project</button>
//                 </div>
//             `
//         })
//     })
   


    //         document.querySelector('#project2').innerHTML += `
    //         <div>
    //             <h1>${project.Title}</h1>
    //             <p>${project.Description}</p>
    //             <p>${project.image}</p>
    //             <p>${project.url}</p>
    //             <button class="project1-button" data-id="${project.id}">Select Project</button>
    //         </div>
    //     `
    //     document.querySelector('#project3').innerHTML += `
    //     <div>
    //         <h1>${project.Title}</h1>
    //         <p>${project.Description}</p>
    //         <p>${project.image}</p>
    //         <p>${project.url}</p>
    //         <button class="project1-button" data-id="${project.id}">Select Project</button>
    //     </div>
    // `
    //     })
    // })

//     fetch('projects.json')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         const project = data.data[0]
//         document.querySelector('#project1').innerHTML += `
//         <div>
//         <h1>${project.Title}</h1>
//         <p>${project.Description}</p>
//         <p>${project.image}</p>
//         <p>${project.url}</p>
//         <button class="project1-button" data-id="${project.id}">Select Project</button>
//     </div>
// `
// })

// fetch('projects.json')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     const project = data.data[1]
//     document.querySelector('#project2').innerHTML += `
//     <div>
//     <h1>${project.Title}</h1>
//     <p>${project.Description}</p>
//     <p>${project.image}</p>
//     <p>${project.url}</p>
//     <button class="project1-button" data-id="${project.id}">Select Project</button>
// </div>
// `
// })

// fetch('projects.json')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     const project = data.data[2]
//     document.querySelector('#project3').innerHTML += `
//     <div>
//     <h1>${project.Title}</h1>
//     <p>${project.Description}</p>
//     <p>${project.image}</p>
//     <p>${project.url}</p>
//     <button class="project1-button" data-id="${project.id}">Select Project</button>
// </div>
// `
// })
