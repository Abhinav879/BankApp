import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input()item:string | undefined       //string event usg this method

  @Output() onCancel=new EventEmitter()          //event usg this formate 

  @Output() onDelete=new EventEmitter()
 
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()     //emit() method  from eventEmitter
  }
  delete(){
    this.onDelete.emit(this.item)
  }
}
