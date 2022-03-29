import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup
  constructor() {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      status : new FormControl(0)
    })
  }


  ngOnInit(): void {
  }

}
