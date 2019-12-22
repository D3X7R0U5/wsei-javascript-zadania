//zadanie 0a
let parents=document.querySelectorAll('parent');
for(i = 0; i<parents.length; i++) {
    parents[i].addEventListener('mouseover', function(){
        this.children[0].style.display='block';
    })

    parents[i].addEventListener('mouseleave', function(){
        this.children[0].style.display='none';
})
}