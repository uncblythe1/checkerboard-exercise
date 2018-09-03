document.addEventListener('DOMContentLoaded', function () {

    let body = document.getElementsByTagName('body')[0];
    body.style.background = "linear-gradient(160deg, lavender, lightblue)";
    for (let i= 0; i < 72; i ++){
     const tile = document.createElement('div') 
        tile.className = 'square'    
        tile.style.width = '11.1%';
        tile.style.float = 'left';
        tile.style.paddingBottom = '11.1%';
        tile.style.height = '11.1%';
    
        if (i % 2 === 0) {
            tile.style.backgroundColor = "rgba(17, 33, 99, " + (.02 * i) + ")";
          } else {
            tile.style.backgroundColor = "rgba(130, 133, 199, " + (.02 * i) + ")";
          }

    body.appendChild(tile);

    
    // function randomColor() {
    //     let a = Math.ceil(Math.random() * 255);
    //     let b = Math.ceil(Math.random() * 255);
    //     let c = Math.ceil(Math.random() * 255);
    //     tile.style.backgroundColor = 'rgb('+a+','+b+','+c+')';
    // }
    // window.setInterval(randomColor, 2000);

}




})

