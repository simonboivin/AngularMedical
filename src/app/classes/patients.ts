import { Villes } from './villes';

export class Patients {

    public id: number;
    public nom: string;
    public prenom: string;
    public email: string;
    public telephone: string;
    public ville: Villes;

    constructor(id: number, nom: string, prenom: string, email: string, telephone: string, ville: Villes) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.ville = ville;
    }

}
