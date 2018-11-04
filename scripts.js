var items = document.querySelectorAll('.accordeon .item .item-title');
items.forEach(function(item){
    item.addEventListener('click', function(event){
        var isActive = event.target.parentElement.classList.contains('active');
        if(document.querySelector('.accordeon .item.active') && !isActive){
            document.querySelector('.accordeon .item.active').classList.remove('active');
        }
        event.target.parentElement.classList.toggle('active');
    });
});

