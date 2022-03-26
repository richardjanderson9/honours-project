

function hello_world(){
    var withCanvasDrawing = new Fingerprint({canvas: true});
        var fingerprint = (withCanvasDrawing.get());
    
        //document.getElementById('withCanvasDrawing').innerHTML = fingerprint;
        console.log(fingerprint);
}