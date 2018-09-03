document.addEventListener('DOMContentLoaded', function () {

    for (let i= 0; i < 72; i ++){
     const tile = document.createElement('div') 
        tile.className = 'square'    
        tile.style.width = '11.1%';
        tile.style.float = 'left';
        tile.style.paddingBottom = '11.1%';
        tile.style.height = '11.1%';
        
        document.body.appendChild(tile);
    

    // if (i % 2 === 0) {
    //     tile.style.backgroundColor = 'black';
    // } else {
    //     tile.style.backgroundColor = 'red';
    // }

    function randomColor() {
        let a = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);
        let c = Math.ceil(Math.random() * 255);
        tile.style.backgroundColor = 'rgb('+a+','+b+','+c+')';
    }
    window.setInterval(randomColor, 2000);

}




})

