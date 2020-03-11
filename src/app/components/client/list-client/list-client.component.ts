import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientService } from '../../../_services/client.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];
  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients(){
    this.clientService.findAll().subscribe(res => {
      console.log(res);
      this.clients = res;
    });
  }

  deleteClient(client: Client){
    this.clientService.deleteClient(client.id).subscribe(res=>{
      console.log(res);
      this.clients.splice(this.clients.indexOf(client), 1);
    });
  }

  updateClient(client: Client){
    this.clientService.setter(client);
    this.router.navigateByUrl('/client-form');
  }
  newClient(){
    let client :Client= {
      nom: '',
      prenom: '',
      ville: '',
      adresse: '',
      status: '',
      photo: '',
      email: '',
      tel: '',
    };
    this.clientService.setter(client);
    this.router.navigateByUrl('/client-form');
  }
}
