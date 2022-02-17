import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService, commentsType } from '../Services/comments.service';
import { UsersService, userType } from '../Services/users.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  userId!: any;
  comments!: commentsType[];
  users!: userType[];

  editMode: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private commentsservice: CommentsService,
    private userservice: UsersService
    ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.commentsservice.getComments().subscribe((value)=> {
      this.comments = value;
    })

    this.userservice.getUsers().subscribe((value)=> {
      this.users = value;
    })
  }

  onEdit() {
    this.editMode = !this.editMode
  }

  matchUsers(userId: number) {
    const user = this.comments.find((user)=> user.id === userId);
    return user?.name
  }

  matchBody(id: number) {
    const body = this.comments.find((body)=> body.id === id);
    return body?.body
  }

}
