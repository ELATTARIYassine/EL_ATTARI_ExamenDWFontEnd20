import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = "http://localhost:3000/produits";
  private produit: Produit = {
    nom: '',
    nom_court: '',
    prixBase: null,
    prixVente: null,
    image: '',
    qteActuel: null,
    qteInit: null,
    seuilMax: null,
    uniteProd: null
  };
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Produit[]>(this.baseUrl);
  }
  deleteProduit(id: number){
    return this.http.delete<Produit>(this.baseUrl+`/${id}`);
  }
  createProduit(produit: Produit){
    return this.http.post<Produit>(this.baseUrl, produit);
  }
  updateProduit(produit: Produit){
    return this.http.put<Produit>(this.baseUrl + `/${produit.id}`, produit);
  }
  setter(produit: Produit){
    this.produit = produit;
  }
  getter(){
    return this.produit;
  }
}
