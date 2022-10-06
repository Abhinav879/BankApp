import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""

  //model to registration form
  registerForm=this.fb.group({uname:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],acno:["",[]],pswd:["",[]]})

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd


    const result=this.ds.register(acno,uname,pswd)
    if(result){
      alert("registered")
      this.router.navigateByUrl('')
    }
    else{
      alert('User already exist')
    }


    // let userDetails=this.ds.userDetails


    // alert("registered")
  }
}

