document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}


const textArray = ["Style", "Elegance", "Minimalism", "Comfort"];
        let currentIndex = 0;
        const textElement = document.getElementById('changingText');

        function changeText() {
            currentIndex = (currentIndex + 1) % textArray.length;
            textElement.textContent = textArray[currentIndex];
        }

        setInterval(changeText, 3000);

        var swiper = new Swiper(".vehicles-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            keyboard: {
            enabled: true,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });

        var swiper = new Swiper(".usp-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            keyboard: {
            enabled: true,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });