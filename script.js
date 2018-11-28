let button = document.querySelector('a.expand');
button.addEventListener('click', function() {
    Expand();
});

function Expand() {
    let container = document.querySelector('div.buttons-container');
    let containerClass = container.getAttribute('class');
    if (containerClass.includes('shrunken')) {
        container.setAttribute('class', containerClass.replace('shrunken',''));
        console.log(containerClass);
    } else {
        container.setAttribute('class', containerClass.trim() + " shrunken");
    }

}