// =========================================
//              TEAM DATA
// =========================================

const teamMembers = [

    // =====================
    // Executive Team
    // =====================

    {
        name: "Coming Soon",
        role: "Secretary-General",
        image: "placeholder.png",
        category: "executive"
    },

    {
        name: "Coming Soon",
        role: "Deputy Secretary-General",
        image: "placeholder.png",
        category: "executive"
    },



    // =====================
    // Academic Team
    // =====================

    {
        name: "Coming Soon",
        role: "Academic Coordinator",
        image: "placeholder.png",
        category: "academic"
    },

    {
        name: "Coming Soon",
        role: "Chair",
        image: "placeholder.png",
        category: "academic"
    },

    {
        name: "Coming Soon",
        role: "Chair",
        image: "placeholder.png",
        category: "academic"
    },



    // =====================
    // Organization Team
    // =====================

    {
        name: "Coming Soon",
        role: "USG of IT",
        image: "placeholder.png",
        category: "organization"
    },

    {
        name: "Coming Soon",
        role: "USG of Public Relations",
        image: "placeholder.png",
        category: "organization"
    },

    {
        name: "Coming Soon",
        role: "USG of Finance",
        image: "placeholder.png",
        category: "organization"
    },

    {
        name: "Coming Soon",
        role: "Organization Team",
        image: "placeholder.png",
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