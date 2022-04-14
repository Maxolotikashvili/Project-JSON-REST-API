import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService, photosType } from '../Services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albumId!: any;
  photos!: photosType[];

  constructor(
    private route: ActivatedRoute,
    private photosservice: PhotosService,
  ) { }

  ngOnInit(): void {

    // Catch
    this.albumId = this.route.snapshot.paramMap.get('id')

    this.photosservice.getPhotos().subscribe((value: photosType[]) => {
      this.photos = value.filter((item) => item.albumId === +this.albumId);
    })
  }

}
