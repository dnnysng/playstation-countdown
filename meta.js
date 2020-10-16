const metaDesc = document.getElementById('meta-description');

const release = '12 Nov 2020';

function countdown() {
    const releaseDate = new Date(release);
    const currentDate = new Date();

    const totalSeconds = (releaseDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    metaDesc.innerHTML = `The future of gaming begins in ${days} days. Are you ready?`;
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();
setInterval(countdown, 1000);

