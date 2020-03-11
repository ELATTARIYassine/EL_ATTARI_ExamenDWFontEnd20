import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { Client } from '../../../models/client';
import { ClientService } from '../../../_services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  private client:Client;
  onAddOrUpdate: boolean = true;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.client = this.clientService.getter();
    console.log(this.client);
    if(this.client.id == undefined)
    {
      this.onAddOrUpdate = true; 
    }else{
      this.onAddOrUpdate = false;
    }
  }
  processForm(){
    if(this.client.id == undefined){
      this.onAddOrUpdate = true;
      this.clientService.createClient(this.client).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('/clients');
      });
    }
    else
    {
      this.onAddOrUpdate = false;
      this.clientService.updateClient(this.client).subscribe(res=>{
        this.router.navigateByUrl('/clients');
        console.log(res);
      });
    }
  }
}
