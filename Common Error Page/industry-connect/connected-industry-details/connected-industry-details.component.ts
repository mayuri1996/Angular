import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-connected-industry-details',
  templateUrl: './connected-industry-details.component.html',
  styleUrls: ['./connected-industry-details.component.css']
})
export class ConnectedIndustryDetailsComponent implements OnInit {
  
  industryDetails;

  constructor(
    public dialogRef: MatDialogRef<ConnectedIndustryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
    this.industryDetails = this.data.industryDetails;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
