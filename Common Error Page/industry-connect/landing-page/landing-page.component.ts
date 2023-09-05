import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IndustryRegFormComponent } from 'src/app/industry-connect/industry-reg-form/industry-reg-form.component';
import { IndustryConnectService } from 'src/app/services/industry-connect.service';
import { AuthenticationService } from 'src/app/_services/authontication.service';
import { DownloadJustificationPopupComponent } from '../../components/download-justification-popup/download-justification-popup.component';
import { ProfileComponent } from '../../components/user-verify/popups/profile/profile.component';
import { ConnectedIndustryDetailsComponent } from '../connected-industry-details/connected-industry-details.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  columnDisplay = ['id', 'status', 'title', 'name', 'email', 'contact', 'action'];

  @ViewChild(MatPaginator, { static: true } as any) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true } as any) sort: MatSort;
  dataSource;

  roleList = [];
  roleId = -1;
  searchingRoleId=-1;
  tableData = [];
  page='0';
  pageNo='5';
  totalElements=0;

  constructor(
    private dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private _industryconnectservice: IndustryConnectService,
    private _spinnerservice: NgxSpinnerService
  ) { }
  private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.getRoleList();
    this.getIndustryList(this.page,this.pageNo);
  }

  ngOnDestroy() {

    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getRoleList() {
    this.authenticationService.getRoleList().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      this.roleList = data;
    });
  }

  //table searching function
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //14-04-2022 Mayuri Powar
  //open industry registration form for adding pass null and for updating pass details
  openIndustryRegForm(industryDetails) {
    const dialogRef = this.dialog.open(IndustryRegFormComponent, {
      maxHeight: '90%',
      width: '70%',
      data: { role: 'admin', details: industryDetails }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getIndustryList(this.page,this.pageNo);
    })
  }

  //13-04-2022 Mayuri Powar
  //display industry details and industry registerd owner details
  openIndustryDetails(details) {
    const dialogRef = this.dialog.open(ConnectedIndustryDetailsComponent, {
      maxHeight: '90%',
      width: '70%',
      data: { 'industryDetails': details }
    });
  }

  //14-04-2022 Mayuri Powar
  //getting role wise industry list after click on search button
  searchIndustryData() {
    this.searchingRoleId  = this.roleId;
    this.getIndustryList(this.page,this.pageNo);
  }

  //21-01-2023 Mayuri Powar
  //for dynamic pagination set pagrOffset and pageSize
  nextPage(event: PageEvent) {
    this.page = event.pageIndex.toString();
    this.pageNo = event.pageSize.toString();
     this.getIndustryList(this.page, this.pageNo);
   }

  //13-04-2022 Mayuri Powar
  //get rolewise industry list with admin role id=0;
  getIndustryList(pageOffset,pageSize) {
    this._spinnerservice.show();
   
    let roleid = this.searchingRoleId;

    this._industryconnectservice.getRoleWiseIndustryList(roleid,pageOffset,pageSize).subscribe(
      res => {
        this.tableData = [];
        this.totalElements = 0;
        for(let i=0; i< res.data.length;i++){
        let obj ={
          'verifiedStatus' : res.data[i].verifiedStatus,
          'industryName' : res.data[i].industryName,
          'name': res.data[i].user.firstName +" "+ res.data[i].user.middleName +" "+ res.data[i].user.lastName,
          'email' : res.data[i].user.email,
          'contact' : res.data[i].user.code +"-"+ res.data[i].user.mobile,
          'profileStatus' : res.data[i].profileStatus,
          'userRoleId' : res.data[i].user.userRoleId,
          'entity':res.data[i].entity,
          'obj' : res.data[i]
        }
        this.tableData.push(obj);
      }
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.sort = this.sort;
        if(this.tableData.length>0){
          this.totalElements = res.data[0].totalItems;
        }
        this._spinnerservice.hide();
      }
    )
  }

  //14-04-2022 Mayuri Powar
  //getting profile details using userid and industry role id with 4
  getProfile(userRoleId) {
    const dialogRef = this.dialog.open(ProfileComponent, {
      data: { roleId: 4, userRoleId: userRoleId },
      width: '80%',
      maxHeight: '90%',
    });
  }

  //27-04-2022 Mayuri Powar
  //open justification popup with passing file type(pdf/excel) and list 
  openJustificationPopup(fileType) {
    const dialogRef = this.dialog.open(DownloadJustificationPopupComponent, {
      data: { fileType: fileType, list: this.tableData, listName: "industryConnect" ,roleId:this.roleId},
      width: '50%',
      maxHeight: '90%',
    });
  }


}