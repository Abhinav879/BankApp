import { Component, OnInit } from '@angular/core';
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

  userDetails:any={
    1000:{acno:1000,username:"Abhinav",password:1234,balance:1000000},
    1001:{acno:1001,username:"Anju",password:1234,balance:200000},
    1002:{acno:1002,username:"Akhila",password:1234,balance:300000},
    1003:{acno:1003,username:"Arjun",password:1234,balance:400000},
  }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  
  Login(){
    var acnum=this.acno
    var pswd=this.pswd

    const result=this.ds.Login(acnum,pswd)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
  }
}

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

