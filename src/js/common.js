const dropdownList = document.querySelector('.dropdownList');
const dropdownButton = document.getElementById('dropdownButton');

dropdownButton.addEventListener('click', function () {
    dropdownList.classList.toggle('hidden');
    if (dropdownList.classList.contains('hidden')) {
        this.classList.replace('fa-xmark', 'fa-bars');
    } else {
        this.classList.replace('fa-bars', 'fa-xmark');
    }
});

dropdownList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        if (!dropdownList.classList.contains('hidden')) {
            dropdownList.classList.add('hidden');
            dropdownButton.classList.replace('fa-xmark', 'fa-bars');
        }

        e.target.querySelector('a').click();

    }
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(
        registration => {
            console.log("SW Registered!");
            console.log(registration);
        }
    ).catch(error => {
        console.log("SW Registration Failed!");
        console.log("Error :", error);
    });
}
