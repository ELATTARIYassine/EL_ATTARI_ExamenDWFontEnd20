import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../models/fournisseur';
import { Router } from '@angular/Router';
import { FournisseurService } from '../../../_services/fournisseur.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  
  fournisseurs: Fournisseur[] = [];
  constructor(private fournisseurService: FournisseurService, private router:Router) { }

  ngOnInit() {
    this.getAllFournisseurs();
  }

  getAllFournisseurs(){
    this.fournisseurService.findAll().subscribe(res => {
      console.log(res);
      this.fournisseurs = res;
    });
  }

  deleteFournisseur(fournisseur: Fournisseur){
    this.fournisseurService.deleteFournisseur(fournisseur.id).subscribe(res=>{
      console.log(res);
      this.fournisseurs.splice(this.fournisseurs.indexOf(fournisseur), 1);
    });
  }

  updateFournisseur(fournisseur: Fournisseur){
    this.fournisseurService.setter(fournisseur);
    this.router.navigateByUrl('/fournisseur-form');
  }
  newFournisseur(){
    let fournisseur :Fournisseur= {
      nom: '',
      nom_court: '',
      ville: '',
      adresse: '',
      fax: '',
      mail: '',
      telFix: '',
      telMobile: '',
    };
    this.fournisseurService.setter(fournisseur);
    this.router.navigateByUrl('/fournisseur-form');
  }
}
