let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

var slideIndex = 1; 
showSlides(slideIndex); 

function plusSlides(n) { 
    showSlides(slideIndex += n); 
}

function currentSlide(n) {
    showSlides(slideIndex = n); 
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide"); 
    var dots = document.getElementsByClassName("dot"); 

    if (n > slides.length) { 
        slideIndex = 1; 
    } 

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }

    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 
}

//auto slide

var autoSlideTimer = null; 
var autoSlideDelay = 5000; 
var manualDelay = 10000; 

// Fungsi untuk memulai auto-slide
function startAutoSlide() {
    autoSlideTimer = setTimeout(function () {
        plusSlides(1); 
        startAutoSlide(); 
    }, autoSlideDelay);
}

// Fungsi untuk menghentikan auto-slide
function stopAutoSlide() {
    if (autoSlideTimer) {
        clearTimeout(autoSlideTimer); 
        autoSlideTimer = null; 
    }
}

// Fungsi untuk mengontrol manual dengan menghentikan auto-slide dan memulai kembali setelah jeda
function manualControl(n) {
    stopAutoSlide(); 
    showSlides(slideIndex += n); 
    setTimeout(startAutoSlide, manualDelay); 
}

// Fungsi untuk menggeser slide ke posisi tertentu
function currentSlide(n) {
    manualControl(0); 
    showSlides(slideIndex = n); 
}

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { 
        slideIndex = 1; 
    }

    if (n < 1) {
        slideIndex = slides.length; 
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }

    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active";
}

// Memulai auto-slide saat halaman dimuat
window.onload = function() {
    startAutoSlide();
};

var previousScrollPosition;

// Buka modal dengan gambar tertentu dan simpan posisi scroll
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");

    previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    modal.style.display = "block";
    modalImage.src = imageSrc;

    document.body.style.overflow = "hidden"; 
}

// Tutup modal dan kembalikan posisi scroll
function closeModal() {
    var modal = document.getElementById("imageModal");

    modal.style.display = "none";

    document.body.style.overflow = ""; 
    window.scrollTo(0, previousScrollPosition); 
}


