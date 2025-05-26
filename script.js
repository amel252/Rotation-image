// on declare nos constantes
const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
// faire ecouteur d'events
prevEl.addEventListener("click", function () {
    x = x + 45; // 45 degres
    clearTimeout(timer); // permet d'annuler une action planifiée avec setTimeout.
    updateGallery();
});
nextEl.addEventListener("click", function () {
    x = x - 45; // 45 degres
    clearTimeout(timer);
    updateGallery();
});
// faire les functions
function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        // exécute une fonction une seule fois après un délai spécifié.
        x = x - 45;
        updateGallery();
    }, 3000); //aprés 3 sec
}
updateGallery();
// si on veux rotate la photo 45deg / 90deg l'autre photo 380/8 = 45 degrés
