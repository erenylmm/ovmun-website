// =========================================
//          COMMITTEE MODALS
// =========================================
// =========================================
//      COMMITTEE DATA
// =========================================

const committeeData = {

    unwomen:{

        title:"UNWOMEN",

        agenda:"Addressing the inequality of women’s rights and representation of women in political participation and workforce.",

        difficulty:"Intermediate",


    },

    nato:{

        title:"NATO",

        agenda:"Israeli-Palestine Conflict",

        difficulty:"Advanced",


    },

    who:{

        title:"WHO",

        agenda:"Addressing the issue of water pollution and developing strategies to ensure equitable access to clean and safe water.",

        difficulty:"Beginner",


    }

};
const cards = document.querySelectorAll(".committee-card");

const modal = document.getElementById("modalOverlay");

const closeBtn = document.getElementById("closeModal");

const modalContent = document.getElementById("modalContent");

// ----------------------------
// Open
// ----------------------------

cards.forEach(card => {

    card.addEventListener("click", () => {

        const committee = card.dataset.modal;

        modal.classList.add("active");

        const info = committeeData[committee];

modalContent.innerHTML = `

<div class="modal-header">

    <h1>${info.title}</h1>

    <div class="modal-line"></div>

</div>

<div class="modal-section">

    <span>Agenda</span>

    <h3>${info.agenda}</h3>

</div>

<div class="modal-section">

    <span>Difficulty</span>

    <div class="difficulty ${info.difficulty.toLowerCase()}">

        ${info.difficulty}

    </div>

</div>


<a href="application.html" class="apply-btn">

    Apply

</a>

`;

    });

});

// ----------------------------
// Close Button
// ----------------------------

closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});

// ----------------------------
// Click Outside
// ----------------------------

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});

// ----------------------------
// ESC
// ----------------------------

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("active");

    }

});
// =========================================
//      Mouse Spotlight Effect
// =========================================

const images = document.querySelectorAll(".committee-image");

images.forEach(image => {

    image.addEventListener("mousemove", e => {

        const rect = image.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        image.style.setProperty("--mouse-x", `${x}px`);
        image.style.setProperty("--mouse-y", `${y}px`);

    });

});
// =========================================
//      3D Tilt Effect
// =========================================

const cardsTilt = document.querySelectorAll(".committee-card");

cardsTilt.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 6;
        const rotateX = ((centerY - y) / centerY) * 6;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-12px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});