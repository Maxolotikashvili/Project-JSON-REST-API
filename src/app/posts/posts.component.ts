import { Component, OnInit } from '@angular/core';
import { PostsService, postType } from '../Services/posts.service'
import { UsersService, userType } from '../Services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
 
  posts!: postType[];
  users!: userType[];

  constructor(
    private postservice: PostsService,
    private userservice: UsersService,
    ) { }

  ngOnInit(): void {

    // PostsGet

    this.postservice.getPost().subscribe((value: postType[]) => {
      this.posts = value;
    })

    // UsersGet

    this.userservice.getUsers().subscribe((value: userType[]) => {
      this.users = value
    })
  }

  getName(userId: number) {
    const user = this.users.find((user) => user.id === userId)
    return user?.name
  }

}
