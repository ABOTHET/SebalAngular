import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../../env";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  async getAllPhotoFilename(id: number) {
    const url: string = env.url + `/photos/${id}`;
    const filenames: string[] = await firstValueFrom<string[]>(this.http
      .get<string[]>(url, {withCredentials: true}));
    return filenames;
  }

  getPhotoByAccountIdAndFilename(id: number, filename: string) {
    const url: string = env.url + `/photos/${id}/${filename}`;
    return url;
  }

}
