window.onload = function(){
    var catInfo = [{
        'catName':"cat-1",
        'imgUrl':'./cat-1.jpg'
    },
    {
        'catName':"cat-2",
        'imgUrl':'./cat-2.jpg'
    }]

    var catImage = document.getElementById("img-cat");
    console.log(document);
    var clickCount=0;
    var counter = null;
    
    catImage.addEventListener('click',function(){
        clickCount++;
        console.log(clickCount);
        if(!counter){
            counter= document.getElementById("click-count");
            counter.classList.remove('display-none');
        }
        counter.innerHTML = clickCount;
    });

    for (let i=0; i<catInfo.length; i++){

        var catLable = document.createElement()
    }




}