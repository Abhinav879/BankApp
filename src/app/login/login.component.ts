import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  aim=("Your Perfect Backing Partner")
  acnt="AC Number"
  this=""
  acno=""
  pswd=""

  loginForm=this.fb.group({
    acno:["",[Validators.required,Validators.pattern('[0-9]+')]],
    pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],})


  // userDetails:any={
  //   1000:{acno:1000,username:"Abhinav",password:1234,balance:1000000},
  //   1001:{acno:1001,username:"Anju",password:1234,balance:200000},
  //   1002:{acno:1002,username:"Akhila",password:1234,balance:300000},
  //   1003:{acno:1003,username:"Arjun",password:1234,balance:400000},
  // }
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  Login(){
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd

    if(this.loginForm.valid){
      this.ds.Login(acno,pswd).subscribe((result:any)=>{

        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))

        console.log(result.message);
        
        alert(result.Message)
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.Message)
      }
      )
    }
    else{
      alert('invalid form')
    }
  }
}
    //   if(result){
    //     alert('login success')
    //     this.router.navigateByUrl('dashboard')
    //   }
    // }
    // else{
    //   alert("invalid login")
    // }
  
    // }


// ### method

//   Login(a:any,b:any){
//     // console.log(a.value);
//     // console.log(b.value);
    

//     var acnum=a.value
//     var pswd=b.value

//     let userDetails=this.userDetails
//     if(acnum in userDetails){
//       if(pswd==userDetails[acnum]["password"]){
//         alert("login successfully")
//       }
//       else{
//         alert("incorrect password")
//       }
//     }
//     else{
//       alert('user not exist or incorrect ac number')
//     }
//   }
// }


// 1.111

//   acnoChange(event:any){
//     this.acno=event.target.value
//     console.log(this.acno);
    
//   }
//   pswdChange(event:any){
//     this.pswd=event.target.value
//     console.log(this.pswd);
    
//   }

// }

