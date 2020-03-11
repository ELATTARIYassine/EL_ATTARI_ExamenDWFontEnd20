import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../models/produit';
import { ProduitService } from '../../../_services/produit.service';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {

 
  private produit:Produit;
  onAddOrUpdate: boolean = true;

  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit() {
    this.produit = this.produitService.getter();
    console.log(this.produit);
    if(this.produit.id == undefined)
    {
      this.onAddOrUpdate = true; 
    }else{
      this.onAddOrUpdate = false;
    }
  }
  processForm(){
    if(this.produit.id == undefined){
      this.onAddOrUpdate = true;
      console.log('r');
      this.produitService.createProduit(this.produit).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('/produits');
      });
    }
    else
    {
      this.onAddOrUpdate = false;
      this.produitService.updateProduit(this.produit).subscribe(res=>{
        this.router.navigateByUrl('/produits');
        console.log(res);
      });
    }
  }
}
