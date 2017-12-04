





var allPosts = document.getElementsByClassName("art");
var k;
for (k = 0; k < allPosts.length; k++) {
    photoURL = allPosts[k].getAttribute("data-photo-link");
    console.log(photoURL)
    var ascii = ["@","%","#","*","+","=","-",":",".","&nbsp"]
    var image = new Image;
    image.crossOrigin = "anonymous";
    image.src = photoURL;
    image.k = k;
    image.onload = function(k) {
      console.log(this.k);
      var size = 50;
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
        console.log(this.src);
        allPosts[this.k].childNodes[1].childNodes[1].childNodes[1].innerHTML = string
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
