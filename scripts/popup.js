document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.classList.add('no-scroll');
    }, 5000);
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.classList.remove('no-scroll');
    });
    document.getElementById('popup-button').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.classList.remove('no-scroll');
    });
});