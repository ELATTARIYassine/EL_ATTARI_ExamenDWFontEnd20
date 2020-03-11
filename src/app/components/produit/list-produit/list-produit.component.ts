import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../models/produit';
import { ProduitService } from '../../../_services/produit.service';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  
  produits: Produit[] = [];
  constructor(private produitService: ProduitService, private router:Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.produitService.findAll().subscribe(res => {
      console.log(res);
      this.produits = res;
    });
  }

  deleteProduit(produit: Produit){
    this.produitService.deleteProduit(produit.id).subscribe(res=>{
      console.log(res);
      this.produits.splice(this.produits.indexOf(produit), 1);
    });
  }

  updateProduit(produit: Produit){
    this.produitService.setter(produit);
    this.router.navigateByUrl('/produit-form');
  }
  newProduit(){
    let produit :Produit= {
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
    this.produitService.setter(produit);
    this.router.navigateByUrl('/produit-form');
  }
}
