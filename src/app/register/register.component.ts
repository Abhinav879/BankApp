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
  registerForm=this.fb.group({uname:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  acno:["",[Validators.required,Validators.pattern('[0-9]+')]],
  pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],})

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    // console.log(this.registerForm.get('uname')?.errors);
    

    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd    

    if(this.registerForm.valid){
    this.ds.register(acno,uname,pswd).subscribe((result:any)=>{
    alert(result.Message)
    this.router.navigateByUrl('')
  },
  result=>{
    alert(result.error.Message)
  }
  )
  }
    else{
      alert('form invalid')
    }
  }
}

  //   if(this.registerForm.valid){
  //   if(result){
  //     alert("registered")
  //     this.router.navigateByUrl('')
  //   }
  //   else{
  //     alert('User already exist')
  //   }
  // }
  // else{
  //     alert('form invalid')
  //   }
  // }

  


    // let userDetails=this.ds.userDetails
    // alert("registered")

