/*
const backgroundImages = [
    'https://i.ibb.co/dmcg343/hinh-nen-bau-troi2b252842529.jpg',
    'https://i.ibb.co/4snWc2k/FB-IMG-1699447148423.jpg',
];


function changeBackground() {
    const randomImageUrl = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
}


document.getElementById('changeBackground').addEventListener('click', changeBackground);

*/

const backgroundImages = [
    'https://i.ibb.co/dmcg343/hinh-nen-bau-troi2b252842529.jpg',
    'https://i.ibb.co/0CK6FvP/H-nh-nh-avatar-en-p-2.jpg',
    'https://i.ibb.co/HgjQ2kC/1.jpg',
];


function changeBackground() {
    const randomImageUrl = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
}

changeBackground();

setInterval(changeBackground, 10000);