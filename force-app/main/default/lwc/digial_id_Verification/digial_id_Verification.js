import { LightningElement } from 'lwc';
import myResource from '@salesforce/resourceUrl/Image_p';
export default class Digial_id_Verification extends LightningElement {
    imageUrl =   myResource + '/img/logowhite.png';
    maindiv = false;

    
    
        clickcamera(){
        //var video = this.template.querySelector('video');
        var video = this.template.querySelector('.video');
      
        const con = {
            audio: false,
            video: {width: { min: 320, ideal: 640 , max:3200},
                    height: { min: 240, ideal: 480, max:720},}
        };
        
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(con)
            .then(function (stream) {
               
                video.srcObject = stream;
                video.play();
            }).catch(function (error) {
                console.log("Something went wrong!");
            });
          }

        }
         stopCamera(){
        
            try {
                const canvas = this.template.querySelector('.canvas');
                
                /*Increase Image Quality*/
                
                var video = this.template.querySelector('.video');
                var aspect = video.videoHeight / video.videoWidth;
                var wantedWidth = 400;   // or use height 1280
                var height = Math.round(wantedWidth * aspect);
                
                canvas.width = wantedWidth;
                canvas.height = height;
                
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                
                /*Increase Image Quality*/
                
                let image_data_url = canvas.toDataURL('image/jpeg');
                console.log('image BSAE 64  '+image_data_url);
                
                //document.querySelector('#Image').src = image_data_url;
                
                // Send Image data to Apex class
            
            } catch(error){
                console.error('Error to Capture.', error);
            }
            this.stopcam();
        }
        stopcam(){
            var stream = video.srcObject;
            var tracks = stream.getTracks();
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                track.stop();
            }
            video.srcObject = null;
        }


        
}