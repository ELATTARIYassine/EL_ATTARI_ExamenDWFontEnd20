import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  
  private baseUrl = "http://localhost:3000/fournisseurs";
  private fournisseur: Fournisseur = {
    nom: '',
    nom_court: '',
    ville: '',
    adresse: '',
    fax: '',
    mail: '',
    telFix: '',
    telMobile: '',
  };
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Fournisseur[]>(this.baseUrl);
  }
  deleteFournisseur(id: number){
    return this.http.delete<Fournisseur>(this.baseUrl+`/${id}`);
  }
  createFournisseur(fournisseur: Fournisseur){
    return this.http.post<Fournisseur>(this.baseUrl, fournisseur);
  }
  updateFournisseur(fournisseur: Fournisseur){
    return this.http.put<Fournisseur>(this.baseUrl + `/${fournisseur.id}`, fournisseur);
  }
  setter(fournisseur: Fournisseur){
    this.fournisseur = fournisseur;
  }
  getter(){
    return this.fournisseur;
  }
}
