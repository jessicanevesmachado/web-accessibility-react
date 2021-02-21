var streamStarted = false;
export default function RequestPermissionCamera(calback){ 

   debugger
   navigator.mediaDevices.getUserMedia({ audio: true, video: true })
   .then(function success(stream) {
         streamStarted =  true;
         calback(stream);
      
    }, function(erro) {
       debugger
      var erro = erro.name; 
      setTimeout(function(){ RequestPermissionCamera(calback) }, 3000);
    });
   
   /*navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
   if (navigator.getUserMedia && !streamStarted) {

       navigator.getUserMedia({ audio: true, video: true }, (stream)=>{
           streamStarted =  true;
           calback(stream);

       }, (e)=> { 
           var erro = e.name; 
           setTimeout(function(){ RequestPermissionCamera(calback) }, 3000);
        });
   } */
}
export  function ResetVideo(){ 
   streamStarted= false;
}

