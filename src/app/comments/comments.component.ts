import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService, commentsType } from '../Services/comments.service';
import { Location } from '@angular/common';
import { faXmark, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { PostsService, postType } from '../Services/posts.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  userId!: any;
  comments!: commentsType[];
  posts!: postType[];
  postName!: any;
  newComment!: any;
  comentsForm!: any;
  formName!: any;
  formBody!: any;
  updatedComment!: any;
  nameModel!: any;
  bodyModel!: any;

  editMode: boolean = false;

  faXmark = faXmark;
  leftArrow = faAngleLeft;

  // 
  addpost: object = {
    name: this.formName,
    body: this.formBody
  };

  // 
  update: object = {
    title: this.nameModel,
    body: this.bodyModel
  }

  //
  constructor(
    private route: ActivatedRoute,
    private commentsservice: CommentsService,
    private postservice: PostsService,
    private location: Location,
    private fb: FormBuilder,
    private http: HttpClient
  ) {

    // 
    this.comentsForm = this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    //
    this.userId = this.route.snapshot.paramMap.get('id');

    //
    this.postservice.getPost().subscribe((value: postType[]) => {
      this.posts = value

      //
      this.postName = this.posts?.find((post: any) => post.id === +this.userId);

      this.nameModel = this.postName?.title;
      this.bodyModel = this.postName?.body;
    });

    // 
    this.http.put<any>(`https://jsonplaceholder.typicode.com/posts/${this.userId}`, this.update)
      .subscribe((data) => { this.updatedComment = data })

    // 
    this.commentsservice.sendComment(this.addpost).subscribe((data) => {
      this.newComment = data
    });

    //
    this.commentsservice.getComments().subscribe((value: commentsType[]) => {
      this.comments = value?.filter((item) => item.postId === +this.userId);
    });

  }

  // 
  onEdit() {
    this.editMode = !this.editMode;
    this.updatedComment = { title: this.nameModel, body: this.bodyModel }
    this.postName = this.updatedComment;
  }

  // 
  goBack(): void {
    this.location.back();
  }

  // 
  addComment() {
    this.formName = this.comentsForm.get('name')?.value;
    this.formBody = this.comentsForm.get('body')?.value;
    this.newComment = { name: this.formName, body: this.formBody }
    this.comments.push(this.newComment)
  }

}