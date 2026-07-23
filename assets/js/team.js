// =========================================
//              TEAM DATA
// =========================================

const teamMembers = [

    {
    name: "Ata Tuna Gündüz",
    role: "Secretary-General",
    image: "sg.jpg",
    category: "executive"
},

{
    name: "Zehra Taşal",
    role: "Director-General",
    image: "dg.jpg",
    category: "executive"
},

{
    name: "İnci Bilgi",
    role: "Deputy Secretary-General",
    image: "dsg.jpg",
    category: "executive"
},

{
    name: "Eren Dündar",
    role: "Deputy Director-General",
    image: "ddg.jpg",
    category: "executive"
},


    {
        name: "Eren Yılmam",
        role: "Head of Press",
        image: "hofpress.jpg",
        category: "organization"
    },

    {
        name: "Duru Meriç Yağcı",
        role: "Co-Head of Press",
        image: "cohofpress.jpg",
        category: "organization"
    },

    {
        name: "Duru Cantürk",
        role: "Head of Entertainment",
        image: "hofent.jpg",
        category: "organization"
    },


    {
        name: "Zehra Yılmaz",
        role: "Co-Head of Entertainment",
        image: "cohofent.jpg",
        category: "organization"
    },

    {
        name: "Duru Elvin Yılmaz",
        role: "Head of Administration",
        image: "hofadmin.jpg",
        category: "organization"
    },

    {
        name: "Melek Tanrıöver",
        role: "Co-Head of Administration",
        image: "cohofadmin.jpg",
        category: "organization"
    },

    {
        name: "Ali Eren Aktaş",
        role: "Head of Security",
        image: "hofsec.jpg",
        category: "organization"
    },

    {
        name: "Yücel Sarp Şimşek",
        role: "Co-Head of Security",
        image: "cohofsec.jpg",
        category: "organization"
    },

    {
        name: "Burak Öztekin",
        role: "Head of Logistics",
        image: "hoflog.jpg",
        category: "organization"
    },

    {
        name: "Eren Öksüz",
        role: "Co-Head of Logistics",
        image: "cohoflog.jpg",
        category: "organization"
    }

];



// =========================================
//          CREATE TEAM CARDS
// =========================================

function renderCategory(category, containerId){

    const container = document.getElementById(containerId);

    const members = teamMembers.filter(

        member => member.category === category

    );

    members.forEach((member,index)=>{

        const card = document.createElement("div");

        card.className = "team-card";

        card.style.animationDelay = `${0.3 + index * 0.15}s`;

        card.innerHTML = `

            <div class="member-photo">

                <img
                    src="assets/images/team/${member.image}"
                    alt="${member.name}"
                >

            </div>

            <h3>${member.name}</h3>

            <p>${member.role}</p>

            <div class="card-footer">

                #PraiseTheConference

            </div>

        `;

        container.appendChild(card);

    });

}

renderCategory("executive","executiveTeam");

renderCategory("academic","academicTeam");

renderCategory("organization","organizationTeam");