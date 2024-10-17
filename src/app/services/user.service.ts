import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}
  getUser(page: number, per_page: number) {
    const x = `${this.api}?page=${page}&per_page=${per_page}`;
    return this.http.get(x);
  }
}
