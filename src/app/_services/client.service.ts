import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:3000/clients";
  private client: Client = {
    nom: '',
    prenom: '',
    ville: '',
    adresse: '',
    status: '',
    photo: '',
    email: '',
    tel: '',
  };
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Client[]>(this.baseUrl);
  }
  deleteClient(id: number){
    return this.http.delete<Client>(this.baseUrl+`/${id}`);
  }
  createClient(client: Client){
    return this.http.post<Client>(this.baseUrl, client);
  }
  updateClient(client: Client){
    return this.http.put<Client>(this.baseUrl + `/${client.id}`, client);
  }
  setter(client: Client){
    this.client = client;
  }
  getter(){
    return this.client;
  }
}
