const background = document.querySelector(".background");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{

    mouseX=(e.clientX/window.innerWidth-.5)*20;
    mouseY=(e.clientY/window.innerHeight-.5)*20;

});

function animate(){

    currentX+=(mouseX-currentX)*0.05;
    currentY+=(mouseY-currentY)*0.05;

    background.style.transform=
        `translate(${currentX}px,${currentY}px) scale(1.05)`;

    requestAnimationFrame(animate);

}

animate();

/*============================
        PARTICLES
============================*/

const particleContainer=document.getElementById("particles");

for(let i=0;i<45;i++){

    const particle=document.createElement("span");

    particle.classList.add("particle");

    particle.style.left=Math.random()*100+"%";
    particle.style.top=Math.random()*100+"%";

    particle.style.animationDuration=
        (10+Math.random()*15)+"s";

    particle.style.animationDelay=
        (-Math.random()*20)+"s";

    particle.style.opacity=
        .05+Math.random()*.18;

    particle.style.transform=
        `scale(${0.5+Math.random()*1.5})`;

    particleContainer.appendChild(particle);

}