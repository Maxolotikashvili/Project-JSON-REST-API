import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {
  postform!: FormGroup;

  postIdi!: any

  nameValue = '';
  titleValue = '';
  bodyValue = '';
  
  Author!: any;
  Title!: any;
  Body!: any;

  constructor(private fb: FormBuilder) { 

    this.postform = this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    })

    this.Author = this.postform.get('author')
    this.Title = this.postform.get('title')
    this.Body = this.postform.get('body')
  }

  ngOnInit(): void {
   
  }

}
