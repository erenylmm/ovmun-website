// =========================================
//          APPLICATION DATA
// =========================================

const applications = [

    {

        title:"Delegate",

        link:"#"

    },

    {

        title:"Delegation",

        link:"#"

    },

    {

        title:"Press",

        link:"#"

    },

    {

        title:"Admin",

        link:"#"

    }

];

// =========================================
//      CREATE APPLICATION CARDS
// =========================================

const applicationContainer =
document.getElementById("applicationContainer");

applications.forEach(application=>{

    applicationContainer.innerHTML += `

        <div
            class="application-card"
            data-link="${application.link}"
        >

            <h2>

                ${application.title}

            </h2>

            <div class="apply-button">

                Apply Now →

            </div>

        </div>

    `;

});
// =========================================
//              MODAL
// =========================================

const applicationModal =
document.getElementById("applicationModal");

const closeApplicationModal =
document.getElementById("closeApplicationModal");

const applicationModalContent =
document.getElementById("applicationModalContent");

const cards = document.querySelectorAll(".application-card");
// =========================================
//          CARD CLICK
// =========================================

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        let link = card.dataset.link;

        if(!link || link === "#"){

            applicationModal.classList.add("active");

            applicationModalContent.innerHTML = `

                <div class="application-message">

                    <h2>

                        Applications Opening Soon

                    </h2>

                    <p>

                        Applications are currently closed.
                        Please follow our Instagram account
                        for announcements regarding the
                        opening date.

                    </p>

                </div>

            `;

            return;

        }

        if(
            !link.startsWith("http://") &&
            !link.startsWith("https://")
        ){

            link = "https://" + link;

        }

        window.open(link,"_blank");

    });

});
// =========================================
//          CLOSE MODAL
// =========================================

closeApplicationModal.addEventListener("click",()=>{

    applicationModal.classList.remove("active");

});

applicationModal.addEventListener("click",(e)=>{

    if(e.target===applicationModal){

        applicationModal.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        applicationModal.classList.remove("active");

    }

});