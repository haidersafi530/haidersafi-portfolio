document.querySelectorAll('.reveal').forEach(function(elem){
    let parent = document.createElement('span');
    let child = document.createElement('span');

    parent.classList.add('parent');
    child.classList.add('child');

    child.textContent = elem.textContent;
    parent.appendChild(child);
    console.log(parent);

    elem.innerHTML = "";
    elem.appendChild(parent);

})