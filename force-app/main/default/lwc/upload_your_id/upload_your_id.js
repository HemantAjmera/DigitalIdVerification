import { LightningElement } from 'lwc';

export default class UploadYourID extends LightningElement {

    isCaptureScreen = false;
    isCaptureFocusVerifyScreen = false;
    /*isclickCapture = true ; 
    handleCapture(event){
        this.isclickCapture =false;
    }
    handleTakeAgain(event){
        this.isclickCapture =true;
    }*/
    connectedCallback(){
        this.isCaptureScreen = true;
    }
    pageEventHandler(event){
        if(event.target.dataset.name == "CaptureBtn"){
            this.isCaptureScreen = false;
            this.isCaptureFocusVerifyScreen = true;
            console.log("Capture Button pressed");
        }
        if(event.target.dataset.name == "TakeBtn"){
            this.isCaptureFocusVerifyScreen = false;
            this.isCaptureScreen = true;
            console.log("Take Button pressed");
        }
        if(event.target.dataset.name == "YesBtn"){
            this.isCaptureFocusVerifyScreen = false;
            this.sendImageDataToParent(event);
            console.log("Yes Button pressed");
        }
    }
    sendImageDataToParent(event){
        event.preventDefault();
        const name = 'Video Page' ;
        const changeSectionEvent = new  CustomEvent('changesection',{
            detail :  name
        });
        this.dispatchEvent(changeSectionEvent);
    }
}