var darkMode = document.getElementById('dark-change');
    darkMode.addEventListener('click', function(){
        document.body.classList.toggle('night');
        darkMode.classList.toggle('active');
        document.querySelector('.nav1', '.nav2', '.container-5', '.column-white', '.oprema-text', '.ct-6-text', '.ct-5-text').classList.toggle('night');
})