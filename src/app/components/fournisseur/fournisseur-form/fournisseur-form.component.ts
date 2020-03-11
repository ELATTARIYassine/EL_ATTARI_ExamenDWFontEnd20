import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../models/fournisseur';
import { FournisseurService } from '../../../_services/fournisseur.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.component.html',
  styleUrls: ['./fournisseur-form.component.css']
})
export class FournisseurFormComponent implements OnInit {

  private fournisseur:Fournisseur;
  onAddOrUpdate: boolean = true;

  constructor(private fournisseurService: FournisseurService, private router: Router) { }

  ngOnInit() {
    this.fournisseur = this.fournisseurService.getter();
    console.log(this.fournisseur);
    if(this.fournisseur.id == undefined)
    {
      this.onAddOrUpdate = true; 
    }else{
      this.onAddOrUpdate = false;
    }
  }
  processForm(){
    if(this.fournisseur.id == undefined){
      this.onAddOrUpdate = true;
      console.log('r');
      this.fournisseurService.createFournisseur(this.fournisseur).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('/fournisseurs');
      });
    }
    else
    {
      this.onAddOrUpdate = false;
      this.fournisseurService.updateFournisseur(this.fournisseur).subscribe(res=>{
        this.router.navigateByUrl('/fournisseurs');
        console.log(res);
      });
    }
  }

}
