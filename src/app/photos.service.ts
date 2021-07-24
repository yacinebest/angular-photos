import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const PHOTO_FETCH_API_URL = "https://api.unsplash.com/photos/random";

export interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  getPhoto() {
    return this.httpClient.get<UnsplashResponse>(PHOTO_FETCH_API_URL, {
      headers: {
        Authorization:
          'Client-ID avvdLBbVszD_S3O_9YkAiTD80P4qJid3FYpnxQnLhng'
      }
    });
  }
}
