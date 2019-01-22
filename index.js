new Glider(document.querySelector('.glider'),{
    
    //For mobile-first version
    slidesToShow:1,
    slidesToScroll:1,
    draggable:true,
    dots:'.glider-dots',
    arrows:{
        prev:'.glider-prev',
        next:'.glider-next'
    },
         
    responsive:[{
           
        breakpoint:700,
        settings:{
            slidesToShow:'3',
            slidesToScroll:'3',
            
            duration:0.25
            
        }
       
    }]

});































//adding and removing the responsive class for the responsive navigation menu



function myFunction() {
    let navigation = document.getElementById("bin");
    if (navigation.className === "navbar") {
        navigation.className += " responsive";
    } else {
        navigation.className = "navbar";
    }
}