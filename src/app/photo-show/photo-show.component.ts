import { Component, OnInit } from '@angular/core';
import { PhotosService, UnsplashResponse } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string = "";

  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }
  ngOnInit() { }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response: UnsplashResponse) => {
      this.photoUrl = response.urls.regular;
    });
  }


}
