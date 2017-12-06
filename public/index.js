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
                callback(allPosts,imgs);
            }
        };
        img.src = allPosts[i].getAttribute("data-photo-link");
        console.log(img.src)
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
        var pixelData = canvas.getContext('2d').getImageData(40, 50, 1, 1).data;
        var string = "";
        for(i=0;i<canvas.height;i++){
            for(j=0;j<canvas.width;j++){
              pixelData = canvas.getContext('2d').getImageData(j, i, 1, 1).data;
              string = string +  ascii[Math.round((((pixelData[0]+pixelData[1]+pixelData[2])/3)/28.333))];
            }
            string = string + "<BR/>";
          }
          console.log(image.src);
          console.log(k)
          allPosts[k].childNodes[1].innerHTML = string;


  };
};
  //};

// function hidePosts(){
//   var artPosts = document.getElementsByClassName('result-image-container');
//   artPosts.classList.add('hidden');
//   console.log("test");
// };
function insertAsciiPost(description, photoURL, price, city, condition) {

};
