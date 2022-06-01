import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-display-blob-image',
  templateUrl: './display-blob-image.component.html',
  styleUrls: ['./display-blob-image.component.css']
})
export class DisplayBlobImageComponent implements OnInit {
  imgsrc;
  constructor(
    private _myService:MyServiceService,
    public sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(){
    this._myService.getBlobImage().subscribe(res => {
        let objectURL = 'data:image/jpeg;base64,' + res.data.imgBlob;
        this.imgsrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
  }

}
