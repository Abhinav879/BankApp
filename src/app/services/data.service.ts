import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//overload header
const options={
headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // currentUser:any
  // currentAcno:any
  
  // userDetails:any={
  //   1000:{acno:1000,username:"Abhinav",password:1234,balance:1000000,transaction:[]},
  //   1001:{acno:1001,username:"Anju",password:1234,balance:200000,transaction:[]},
  //   1002:{acno:1002,username:"Akhila",password:1234,balance:300000,transaction:[]},
  //   1003:{acno:1003,username:"Arjun",password:1234,balance:400000,transaction:[]},
  // }


  constructor(private http:HttpClient) { 
    // this.getDetails()
  } 

  // saveDetails(){
  //   if(this.userDetails){
  //     localStorage.setItem("database",JSON.stringify(this.userDetails))
  //   }
  //   if(this.currentUser){
  //     localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  //   }
  //   if(this.currentAcno){
  //     localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  //   }
  // }
  // getDetails(){
  //   if(localStorage.getItem("database")){
  //     this.userDetails=JSON.parse(localStorage.getItem('database') || '')
  //   }
  //   if(localStorage.getItem("currentUser")){
  //     this.currentUser=JSON.parse(localStorage.getItem('currentUser') || '')
  //   }
  //   if(localStorage.getItem("currentAcno")){
  //     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || '')
  //   }
  // }
  
  
  //logic function for register
  register(acno:any,username:any,password:any){

    const data={acno,username,password}

   return this.http.post('http://localhost:3000/register',data)

    // let userDetails=this.userDetails
    // if(acno in userDetails){
    //   return false                   //return(true/false)  
    // }
    // else{
    //   userDetails[acno]={acno,username,password,balance:0,transaction:[]}
    //   console.log(userDetails);

    //   this.saveDetails()

    //   return true
    // }
  }

  Login(acnum:any,pswd:any){

    const data={acnum,pswd}

    return this.http.post('http://localhost:3000/login',data)
  }
    
  //   // let router=this.router
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(pswd==userDetails[acnum]["password"]){
  //       this.currentUser=userDetails[acnum]['username']
  //       this.currentAcno=acnum

  //       this.saveDetails()

  //       return true
  //       // alert("login successfully")
  //       //redirection
  //       // router.navigateByUrl('dashboard')
  //     }
  //     else{
  //       alert("incorrect password")
  //       return false
  //     }
  //   }
  //   else{
  //     alert('user not exist or incorrect ac number')
  //     return false
  //   }
  // }

getToken(){
  //fetch the token from local storage
  const token=JSON.parse(localStorage.getItem('token') || '')
  //1.append token inside headers

  //  1.2create header
  let headers=new HttpHeaders()
  //  1.3append token to headers
  if(token){
    options.headers=headers.append('token1',token)
  }
  return options
}

  deposit(acnum:any,pswrd:any,amnt:any){
    const data={acnum,pswrd,amnt}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())
  }
    // let userDetails=this.userDetails
    // var amount=parseInt(amnt)            // string amount converted to integer use parseInt()
    // if(acnum in userDetails){
    //   if(pswrd==userDetails[acnum]['password']){
    //     userDetails[acnum]['balance']+=amount
    //     userDetails[acnum]['transaction'].push({type:'credit',amount})

    //     this.saveDetails()

    //     return userDetails[acnum]['balance']
    //   }
    //   else{
    //     alert('incurrect password')
    //   }
    // }
    // else{
    //   alert('user not exist')
    //   return false
    // }
  
  withdraw(acnum1:any,pswrd1:any,amnt1:any){
    const data={acnum1,pswrd1,amnt1}
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
  }


    // let userDetails=this.userDetails
    // var amount=parseInt(amnt1)            // string amount converted to integer use parseInt()
    // if(acnum1 in userDetails){
    //   if(pswrd1==userDetails[acnum1]['password']){
    //     if(userDetails[acnum1]['balance']>=amnt1){
    //     userDetails[acnum1]['balance']-=amount
    //     userDetails[acnum1]['transaction'].push({type:'debit',amount})

    //     this.saveDetails()

    //     return userDetails[acnum1]['balance']
    //   }
    //   else{
    //     alert('insufficient balance')
    //     return false
    //   }
    // }
    //   else{
    //     alert('incurrect password')
    //   }
    // }
    // else{
    //   alert('user not exist')
    //   return false
    // }
  

  getTransaction(acno:any){
    const data={acno}
    return this.http.post('http://localhost:3000/transaction',data,this.getToken())
  }


  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/deleteacc/'+acno)
  }

}

