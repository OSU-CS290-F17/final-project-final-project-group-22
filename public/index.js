var images = [];
var allPosts = document.getElementsByClassName("result-image-container");
var ascii = ["@","%","#","*","+","=","-",":",".","&nbsp"]

function preloadImages(srcs, imgs, callback) {
    var img;


    var remaining = srcs.length;
    for (var i = 0; i < srcs.length; i++) {

        img = new Image();
        img.onload = function() {
            --remaining;
            if (remaining <= 0) {
              console.log("made it this far");
                callback(allPosts,imgs);
            }
        };
        // img.src = allPosts[i].getAttribute("data-photo-link")
        img.crossOrigin = 'anonymous';
        img.src = allPosts[i].getAttribute("data-photo-link")
        // console.log(img.src)
        imgs.push(img);
    }
}

preloadImages(allPosts, images, asciiFunction);

function asciiFunction(allPosts,images){
  var k;
  var ascii = ["@","%","#","*","+","=","-",":",".","&nbsp"]
  for (k = 0; k < allPosts.length; k++) {
      var image = images[k];
        var size = 70;
        var canvas = document.createElement('canvas');
        canvas.id =  'canvasImage';
        canvas.width = size;
        canvas.height = size*(image.height/image.width);
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        // console.log(canvas.height);
        var pixelData = canvas.getContext('2d').getImageData(40, 50, 1, 1).data;
        var string = "";
        for(i=0;i<canvas.height;i++){
            for(j=0;j<canvas.width;j++){
              pixelData = canvas.getContext('2d').getImageData(j, i, 1, 1).data;
              string = string +  ascii[Math.round((((pixelData[0]+pixelData[1]+pixelData[2])/3)/28.333))];
            }
            string = string + "<BR/>";
          }
          // console.log(image.src);
          // console.log(k);
          // console.log(string);
          allPosts[k].childNodes[1].innerHTML = string;
  };
};


function showModal() {

  var modal = document.getElementById('submit-something-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}





function hideModal() {
  var sellSomethingModal = document.getElementById('submit-something-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');
  sellSomethingModal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
}

function saveImageAs (imgOrURL) {
    if (typeof imgOrURL == 'object')
      imgOrURL = imgOrURL.src;
    window.win = open (imgOrURL);
    setTimeout('win.resizeTo(0, 0);',100);
    setTimeout('win.moveTo(0, 0);',200);
    setTimeout('win.document.execCommand("SaveAs")', 500);
    setTimeout('win.close()',1000);
  }



  function asciiPost() {
    console.log("creating");
    var title = document.getElementById('post-title-input').value.trim();
    var description = document.getElementById('post-description-input').value.trim();
    var section = document.getElementById('post-section-input').value.trim();
    var photoURL = document.getElementById('post-photoURL-input').value.trim();
    if (!description || !photoURL || !title || !section) {
      alert("You must fill in all of the fields!");
    } else {
        // var postRequest = new XMLHttpRequest();
        // var postURL = '/ascii';
        //
        //
        var asciiObj = {
            title: title,
            description: description,
            userInput: section,
            photoURL: photoURL
        };
        //
        // var requestBody = JSON.stringify(asciiObj);
        //
        // postRequest.setRequestHeader('Content-Type', 'application/json');
        //
        // postRequest.addEventListener('load', function(event){
        //     if(event.target.status !== 200){
        //         alert("Error uploading blog post to DB: " + event.target.response);
        //     }
        //     else{
        //     }
        // });
        //
        // postRequest.send(requestBody);
        // }
        //
        var postDiv = Handlebars.templates.asciiPost(asciiObj);
        var postsSection = document.getElementById('Heros');
        postsSection.insertAdjacentHTML('beforeend',postDiv);

        var allPosts = document.getElementsByClassName("result-image-container");
        preloadImages(allPosts, images, asciiFunction);

      hideModal();

  }
}


  window.addEventListener('DOMContentLoaded', function () {
    var addPhotoButton = document.getElementById('submit-button');
    addPhotoButton.addEventListener('click', showModal);



    var createButton = document.getElementsByClassName('modal-create-button');
    for (var i = 0; i < createButton.length; i++) {
      createButton[i].addEventListener('click', asciiPost);
    }

    var cancelButton = document.getElementsByClassName('modal-cancel-button');
    for (var i = 0; i < cancelButton.length; i++) {
      cancelButton[i].addEventListener('click', hideModal);
    }
  });
