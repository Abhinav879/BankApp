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

  // acnum=""
  // pswrd=""
  // amnt=""

  depositForm=this.fb.group({
    acnum:["",[Validators.required,Validators.pattern('[0-9]+')]],
   pswrd:["",[Validators.required,Validators.pattern('[0-9]+')]],
   amnt:["",[Validators.required,Validators.pattern('[0-9]+')]],})


  // acnum1=""
  // pswrd1=""
  // amnt1=""

  withdrawForm=this.fb.group({
    acnum1:["",[Validators.required,Validators.pattern('[0-9]+')]],
    pswrd1:["",[Validators.required,Validators.pattern('[0-9]+')]],
    amnt1:["",[Validators.required,Validators.pattern('[0-9]+')]],})


    acno:any 

    sDetails:any


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser') || '') 
    }

    this.sDetails=new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert("please login first")
      this.router.navigateByUrl('')
    }

  }
  deposit(){
    var acnum=this.depositForm.value.acnum
    var pswrd=this.depositForm.value.pswrd
    var amnt=this.depositForm.value.amnt

    if(this.depositForm.valid){
   this.ds.deposit(acnum,pswrd,amnt).subscribe((result:any)=>{
      alert(result.Message)
    },
    result=>{
      alert(result.error.Message)
    })
    }
    else{
      alert("invalid form")
    }
  }

  withdraw(){
    var acnum1=this.withdrawForm.value.acnum1
    var pswrd1=this.withdrawForm.value.pswrd1
    var amnt1=this.withdrawForm.value.amnt1

    if(this.withdrawForm.valid){
   this.ds.withdraw(acnum1,pswrd1,amnt1).subscribe((result:any)=>{
      alert(result.Message)
    },
    result=>{
      alert(result.error.Message)
    })
    }
    // if(this.withdrawForm.valid){
    //   if(result){                                                   
    //     alert(`${amnt1} is debited,new balance is ${result}`)
    //   }
    // }
    else{
      alert("invalid form")
    }
 }

 logout(){
  localStorage.removeItem('currentUser')
  localStorage.removeItem('currentAcno')
  localStorage.removeItem('token')

  this.router.navigateByUrl("")
 }

 deleteconfirm(){
  this.acno=JSON.parse(localStorage.getItem('currentAcno') || '')
 }

 oncancel(){
  this.acno=""
 }

 onDelete(event:any){
  // alert(event)
  this.ds.deleteAcc(event).subscribe((result:any)=>{
    alert(result.Message)
    // this.router.navigateByUrl('')
    this.logout()
  },
  result=>{
    alert(result.error.Message)
  })
  }
}
