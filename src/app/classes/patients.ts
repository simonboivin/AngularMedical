import { Villes } from './villes';

export class Patients {

    public id: number | undefined;
    public nom: string | undefined;
    public prenom: string | undefined;
    public email: string | undefined;
    public telephone: string | undefined;
    public ville: Villes | undefined;

    constructor(id?: number | undefined, nom?: string | undefined, prenom?: string | undefined, email?: string | undefined, telephone?: string | undefined, ville?: Villes | undefined) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.ville = ville;
    }

}
