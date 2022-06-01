import { LightningElement } from 'lwc';

export default class Upload_your_video extends LightningElement {

    isLaunchCameraPage = false;
    isCaptureVideoPage = false;
    isCheckVideoPage = false;

    connectedCallback(){
        this.isLaunchCameraPage = true;
    }

    pageEventHandler(event){
        if(event.target.dataset.name == "LaunchCameraBtn"){
            this.isLaunchCameraPage = false;
            this.isCaptureVideoPage = true;
            console.log("Launch Camera Button pressed");
        }
        if(event.target.dataset.name == "StartCaptureBtn"){
            this.isCaptureVideoPage = false;
            this.isCheckVideoPage = true;
            console.log("Start Capture Button pressed");
        }
        if(event.target.dataset.name == "TakeBtn"){
            this.isCheckVideoPage = false;
            this.isLaunchCameraPage = true;
            console.log("Take Button pressed");
        }
        if(event.target.dataset.name == "YesBtn"){
            this.isCheckVideoPage = false;
            this.sendVideoDataToParent(event);
            console.log("Yes Button pressed");
        }
    }
    /*isclickCapture = true ; 
    videoSection = false;
    handleCapture(event){
        this.isclickCapture =false;
    }
    handleTakeAgain(event){
        this.isclickCapture =true;
    }*/
    sendVideoDataToParent(event){
        event.preventDefault();
        const name = 'Canvas Page' ;
        const changeSectionEvent = new  CustomEvent('changesection',{
            detail :  name
        });
        this.dispatchEvent(changeSectionEvent);

    }
}