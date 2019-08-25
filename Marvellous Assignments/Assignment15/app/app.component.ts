import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform : FormGroup;
  constructor(private obj : FormBuilder)
  {
    this.myform = this.obj.group(
      {
        'fname' : ['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
        'lname' : ['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
        'email' : ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")]],
        'contact' : ['',[Validators.required,Validators.pattern("[0-9]{10}")]],
        'address' : ['',Validators.required]
      }
    )
  }
  get f() { return this.myform.controls; }
  onSubmit(formdata){
    this.myform.reset();
  }
}
