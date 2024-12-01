const tanggalTujuan = new Date('December 3, 2024 24:00:00').getTime();
let countdownFinished = false;

const hitungMundur = setInterval(function() {
    if (countdownFinished) {
        return;
    }

    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;
    
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);
    
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    days.innerHTML = hari;
    hours.innerHTML = jam;
    minutes.innerHTML = menit;
    seconds.innerHTML = detik;

    if (selisih <= 0) {
        clearInterval(hitungMundur);
        countdownFinished = true;
        window.location.href = "https://danishramadhana.github.io/HBD-KANIS/";
    }
}, 100);

function setup() {
    createCanvas(windowWidth, windowHeight);
}
