const items= document.querySelectorAll('.dropdown-item');

items.forEach(item => {
    item.addEventListener('click' , () => {
        items.classlist.add('selected');
        items.forEach(other => other.classList.remove('selected'));
    });
});