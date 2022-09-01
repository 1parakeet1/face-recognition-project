Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version", ml5.version);

classifer =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BzVZtDYDp/model.json", Model_loaded);

function Model_loaded (){
    console.log("model loaded successfully");
}

function check() {
    image= document.getElementById("photo");
    classifer.classify(image, gotResult);}

    function gotResult(error, result){
        if(error){
            console.error(error);
        }
        else{
            console.log(result);
            document.getElementById("result_face_family_member").innerHTML = result[0].label ;
            percent = result[0].confidence;
            multiply = percent * 100;
            document.getElementById("result_face_accuracy").innerHTML = multiply.toFixed(2) + "%";
        }
    }