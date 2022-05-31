import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-post-multipart',
  templateUrl: './post-multipart.component.html',
  styleUrls: ['./post-multipart.component.css']
})
export class PostMultipartComponent implements OnInit {
 //form group name
  mediaFiles : FormGroup;
  //store selected multiple images
  images=[];
  //store single file and push into image array
  file;

  //declaire supported files image , video and audio
  supportFile = ["png", "jpg", "jpeg"];
  supportFileVideo = ["mp4",]
  supportFileAudio = ["mp3", 'mpeg'];

  fileVideo = "";
  fileNameVideo = "";
  fileErrorVideo = "";

  fileAudio = "";
  fileErrorAudio = "";
  fileNameAudio = "";

  constructor(
    private _myService : MyServiceService,
    private fb : FormBuilder
  ) {
    //reactive form builder declaration
      this.mediaFiles = this.fb.group({
        myfile: '',
        videofile: '',
        audiofile: ''
      })
   }

  ngOnInit(): void {
  }

  //image validation max 5 images and file types
  uploadFile(event) {
   for (let i = 0; i < (event.target.files.length); i++) {
     if (this.images.length < 5) {
       if (this.validateFile(event.target.files[i])) {
         this.file = (event.target as HTMLInputElement).files[i];
         this.images.push(event.target.files[i]);
       }
       else {
         alert("File must be image (.jpg,.jpeg,.png) and should not exceed by 1Mb ")
         this.mediaFiles.patchValue({
          myfile: null
        });
        this.images.length = 0;
       }
     }
     else {
       alert("max 5 images allowed")
       this.mediaFiles.patchValue({
        myfile: null
      });
      this.images.length = 0;
     }
   }
 }

 //image size validate method
 validateFile(file) {
   //size check
   if (file.size / (1024 * 1024) > 1) //size should be less than 1mb 
   {
     return false;
   } else if (!this.supportFile.includes(file.type.split("/")[1].toLowerCase())) //file must be image
   {
     return false
   }
   else {
     return true
   }
 }

 // video file validation
 uploadVideo(e) {
  if (this.validateFileVideo(e.target.files[0])) {
    //set to upload variable
    this.fileVideo = e.target.files[0];
    this.fileNameVideo = e.target.files[0].name;
    this.fileErrorVideo = "";

  } else {
    //show upload error
    this.fileVideo = "";
    this.fileNameVideo = "";
    this.fileErrorVideo = " File must be video(mp4) and should not exceed by 10Mb"
  }

}
//video validate method
validateFileVideo(file) {
  //size check
  if (Math.round(file.size / (1024 * 1024)) > 10) //size should be less than 10mb 
  {
    return false;
  } else if (!this.supportFileVideo.includes(file.type.split("/")[1].toLowerCase())) //file must be video
  {
    return false
  }
  else {
    return true
  }
}

//audio file validation
uploadAudio(e) {
  if (this.validateFileAudio(e.target.files[0])) {
    this.fileAudio = e.target.files[0];
    this.fileNameAudio = e.target.files[0].name;
    this.fileErrorAudio = "";

  } else {
    this.fileAudio = "";
    this.fileNameAudio = "";
    this.fileErrorAudio = " File must be audio(mp3) and should not exceed by 10Mb"

  }
}
//audio validate method
validateFileAudio(file) {
  //size check
  if (Math.round(file.size / (1024 * 1024)) > 10) //size should be less than 10mb 
  {
    return false;
  } else if (!this.supportFileAudio.includes(file.type.split("/")[1].toLowerCase())) //file must be audio
  {

    return false
  }
  else {
    return true
  }
}

//submit media file function
submitPSFiles() {
  let formData = new FormData();

  for (let i = 0; i < this.images.length; i++)
    formData.append("problemStatementImages", this.images[i]);

  formData.append("problemStatementAudio", this.fileAudio);
  formData.append("problemStatementVideo", this.fileVideo);

  //call service function
  this._myService.postMediaFiles(formData).subscribe(
    res => {
      alert(res.text)
    }
  )
}

}
