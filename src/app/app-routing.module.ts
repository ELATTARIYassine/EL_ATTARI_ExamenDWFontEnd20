import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { ListProduitComponent } from './components/produit/list-produit/list-produit.component';
import { ProduitFormComponent } from './components/produit/produit-form/produit-form.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { FournisseurFormComponent } from './components/fournisseur/fournisseur-form/fournisseur-form.component';
import { ListFournisseurComponent } from './components/fournisseur/list-fournisseur/list-fournisseur.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';

const routes: Routes =[
    { path: '', redirectTo: '/produits', pathMatch: 'full'},
    { path: 'produits', component: ListProduitComponent },
    { path: 'produit-form', component: ProduitFormComponent },
    { path: 'users', component: ListUsersComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'fournisseur-form', component: FournisseurFormComponent },
    { path: 'fournisseurs', component: ListFournisseurComponent },
    { path: 'clients', component: ListClientComponent },
    { path: 'client-form', component: ClientFormComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}