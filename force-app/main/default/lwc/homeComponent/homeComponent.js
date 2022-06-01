import { LightningElement,track } from 'lwc';


export default class HomeComponent extends LightningElement {

    @track currentSection = 'Camera Page';

    @track isHomePage = false;
    isUploadIDPage = false;
    isUploadVideoPage = false;
    isUploadSignaturePage = false;


    connectedCallback(){
        this.isHomePage = true;
        /*
            if(this.currentSection === 'Camera Page') {

            }
            if(this.currentSection === 'Video Page') {
                //this.uploadVideo = true; 
                //this.uploadIDPage = false
            }
            if(this.currentSection === 'Canvas Page') {
                
            }
            if(this.currentSection === 'Complete Page') {
                
            }
        */    
    }
    renderedCallback(){
        if(this.isHomePage == true){
            if(this.currentSection === 'Camera Page') {
                this.template.querySelector('.mainHomeButtonText').innerHTML = "LAUNCH CAMERA";
            
            }
            if(this.currentSection === 'Video Page') {
                this.template.querySelector('.mainHomeButtonText').innerHTML = "NEXT";
    
            }
            if(this.currentSection === 'Canvas Page') {
                this.template.querySelector('.mainHomeButtonText').innerHTML = "READ AND SIGN";
            }
        }
        
    }
    changeOptionEvent(event){
        if(this.currentSection === 'Camera Page') {
            this.isUploadIDPage = true;
            this.isHomePage = false;
        
        }
        if(this.currentSection === 'Video Page') {
            this.isUploadVideoPage = true; 
            this.isHomePage = false;

        }
        if(this.currentSection === 'Canvas Page') {
            this.isUploadSignaturePage = true;
            this.isHomePage = false;
        }
        if(this.currentSection === 'Complete Page') {
            
        }
    }
    sectionHandler(event){
        this.currentSection = event.detail;
        this.isUploadIDPage = false;
        this.isHomePage = true;
        console.log('----'+this.currentSection);
    }
    videoSectionHandler(event){
        this.currentSection = event.detail;
        this.isUploadVideoPage = false;
        this.isHomePage = true;
        console.log('----'+this.currentSection);
    }
}