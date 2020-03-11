import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3000/users";
  private user: User = {
    date_creation: null,
    photo: '',
    date_fin: null,
    email: '',
    profil: '',
    identifiant:''
  };
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<User[]>(this.baseUrl);
  }
  deleteUser(id: number){
    return this.http.delete<User>(this.baseUrl+`/${id}`);
  }
  createUser(user: User){
    return this.http.post<User>(this.baseUrl, user);
  }
  updateUser(user: User){
    return this.http.put<User>(this.baseUrl + `/${user.id}`, user);
  }
  setter(user: User){
    this.user = user;
  }
  getter(){
    return this.user;
  }
}
