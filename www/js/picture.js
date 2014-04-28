function loadPicture() {
    $("div#picture").html('<img src="'+ localStorage.getItem('imageURI') +'" class="img-rounded" height="350">');
          document.getElementById("card").style.display = "block";
    
    
    
}