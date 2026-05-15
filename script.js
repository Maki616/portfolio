 /* BACKGROUND*/
        VANTA.NET({
            el: "#background",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 0xffffff,
            backgroundColor: 0x0
        });
   
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    function openModal(src) {
     modal.classList.remove("hidden");
     modalImg.src = src;
    }

    modal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });