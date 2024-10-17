import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  pageLimit: number = 3
  otherPicturesLimit: number = 9
  readonly returnedLessFields: string[] = ['id', 'title', 'artist_title', 'image_id', 'is_public_domain']
  readonly returnedMoreFields: string[] = [
    'id',
    'title',
    'thumbnail',
    'date_display',
    'artist_title',
    'image_id',
    'artist_display',
    'dimensions',
    'credit_line',
    'place_of_origin',
    'is_public_domain',
    'department_title'
  ] 
  readonly linkApi: string = 'https://api.artic.edu/api/v1'
  readonly artworks: string = '/artworks'
  readonly artists: string = '/artist'

  constructor(
    private http: HttpClient
  ) { }

  getPage(pageNumber: number): Observable<any>  {
    return this.http.get(`${this.linkApi}${this.artworks}/?page=${pageNumber}&limit=${this.pageLimit}&fields=${this.returnedLessFields}`)
  }

  getOtherPictures(): Observable<any> {
    return this.http.get(`${this.linkApi}${this.artworks}/?limit=${this.otherPicturesLimit}&fields=${this.returnedLessFields}`)
  }

  getPictureInfo(pictureId: number): Observable<any> {
    return this.http.get<any>(`${this.linkApi}${this.artworks}/${pictureId}?fields=${this.returnedMoreFields}`)
  }

  searchByPictureName(value: string): Observable<any> {
    return this.http.get(`${this.linkApi}${this.artworks}/search?q=${value}&fields=id,title,artist_title,image_id,date,timestamp&limit=5`)
  }

}
