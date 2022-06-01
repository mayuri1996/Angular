import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  constructor(
    private _myService : MyServiceService
  ) { }

  ngOnInit(): void {
  }

  downloadFile(){
    this._myService.getBlobFile().subscribe(
      data => {
        //for excel
        var file = new Blob([data], { type: 'application/vnd.ms-excel' })
        //for pdf 
       // var file = new Blob([data], { type: 'application/pdf' })
        var fileURL = URL.createObjectURL(file);
        // download
        var a = document.createElement('a');
        a.href = fileURL;
        //for excel
        a.download = 'fileName.xlsx';
        //for pdf
        //a.download = 'fileName.pdf';
        document.body.appendChild(a);
        a.click();
      });
  }

}
