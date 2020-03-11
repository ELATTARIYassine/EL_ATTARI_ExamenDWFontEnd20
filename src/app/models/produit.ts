export interface Produit {
    id?: number,
    nom?: string,
    nom_court?: string,
    prixBase?: number,
    prixVente?: number,
    seuilMax?: number,
    uniteProd?: number,
    image?: string,
    qteInit?: number,
    qteActuel?:number
}
