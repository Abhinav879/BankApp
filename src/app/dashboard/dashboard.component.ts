import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user=""

  acnum=""
  pswrd=""
  amnt=""

  depositForm=this.fb.group({
    acnum:["",[Validators.required,Validators.pattern('[0-9]+')]],
   pswrd:["",[Validators.required,Validators.pattern('[0-9]+')]],
   amnt:["",[Validators.required,Validators.pattern('[0-9]+')]],})


  acnum1=""
  pswrd1=""
  amnt1=""

  withdrawForm=this.fb.group({
    acnum1:["",[Validators.required,Validators.pattern('[0-9]+')]],
    pswrd1:["",[Validators.required,Validators.pattern('[0-9]+')]],
    amnt1:["",[Validators.required,Validators.pattern('[0-9]+')]],})




  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUser
   }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert("please login first")
      this.router.navigateByUrl('')
    }

  }
  deposit(){
    var acnum=this.depositForm.value.acnum
    var pswrd=this.depositForm.value.pswrd
    var amnt=this.depositForm.value.amnt

    const result=this.ds.deposit(acnum,pswrd,amnt)
    if(this.depositForm.valid){
      if(result){                                                     //otherthen false statement are true
        alert(`${amnt} is credited,new balance is ${result}`)
      }
    }
    else{
      alert("invalid")
    }
  }

  withdraw(){
    var acnum1=this.withdrawForm.value.acnum1
    var pswrd1=this.withdrawForm.value.pswrd1
    var amnt1=this.withdrawForm.value.amnt1

    const result=this.ds.withdraw(acnum1,pswrd1,amnt1)
    if(this.withdrawForm.valid){
      if(result){                                                   
        alert(`${amnt1} is debited,new balance is ${result}`)
      }
    }
    else{
      alert("invalid")
    }
 }

 logout(){
  localStorage.removeItem('currentUser')
  localStorage.removeItem('currentAcno')
  this.router.navigateByUrl("")
 }

}
