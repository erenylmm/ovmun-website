// =========================================
//              CONTACT DATA
// =========================================

const contacts = [

    {

        role:"Secretary-General",

        name:"Ata Tuna Gündüz",

        phone:"+90 552 926 61 88"

    },

    {

        role:"Deputy Secretary-General",

        name:"İnci Bilgi",

        phone:"+90 542 524 40 18"

    }

];

const conferenceEmail =
"ovtalmodelun@gmail.com";

// =========================================
//              ELEMENTS
// =========================================

const contactButton =
document.getElementById("contactButton");

const contactModal =
document.getElementById("contactModal");

const closeContactModal =
document.getElementById("closeContactModal");

const contactContent =
document.getElementById("contactContent");

// =========================================
//              OPEN MODAL
// =========================================

contactButton.addEventListener("click",()=>{

    let peopleHTML = "";

    contacts.forEach(person=>{

        peopleHTML += `

            <div class="contact-person">

                <strong>

                    ${person.role}

                </strong>

                &nbsp;•&nbsp;

                ${person.name}

                &nbsp;•&nbsp;

                ${person.phone}

            </div>

        `;

    });

    contactContent.innerHTML = `

        <div class="contact-list">

            ${peopleHTML}

        </div>

        <div class="contact-email">

            ${conferenceEmail}

        </div>

    `;

    contactModal.classList.add("active");

});

// =========================================
//              CLOSE
// =========================================

closeContactModal.addEventListener("click",()=>{

    contactModal.classList.remove("active");

});

contactModal.addEventListener("click",(e)=>{

    if(e.target===contactModal){

        contactModal.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        contactModal.classList.remove("active");

    }

});