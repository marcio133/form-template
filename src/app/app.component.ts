import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myForm: FormGroup;  
  @ViewChild('content') private modal : ElementRef; 
  
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.open(this.modal);
    this.createForm();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
        console.log("closed");
    }, (reason) => {
        console.log("dismissed");
    });
  }

  createForm(){
    this.myForm = new FormGroup ({
      opcao: new FormControl(null,  Validators.required),
    });
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}
