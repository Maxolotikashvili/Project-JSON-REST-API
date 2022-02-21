import { Component, OnInit } from '@angular/core';
import { AlbumsService, albumType } from '../Services/albums.service';
import { UsersService, userType } from '../Services/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  // 
  albums!: albumType[];
  users!: userType[];

  constructor(
    private albumservice: AlbumsService,
    private userservice: UsersService,
    ) { }

  ngOnInit(): void {
    // 
    this.albumservice.getAlbums().subscribe((value: albumType[]) => {
      this.albums = value;
    });

    // 
    this.userservice.getUsers().subscribe((value: userType[]) => {
      this.users = value;
    });

  }

  // 
  getNames(userId: number) {
    const names = this.users?.find((names) => names.id === userId)
    return names?.name
  }

}