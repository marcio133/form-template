import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myForm: FormGroup;  
  modalRef: BsModalRef;
  @ViewChild('content') private modal : ElementRef; 


  constructor(private modalService: NgbModal, private modalServiceNgx: BsModalService) {}

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
      opcaoRadio: new FormControl("2",  Validators.required),
    });
  }

  onSubmit(){
    this.modalRef = this.modalServiceNgx.show(SuccessModalComponent);
  }
}
