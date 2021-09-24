import { Villes } from './villes';

export class Patients {

    private id: number;
    private nom: string;
    private prenom: string;
    private email: string;
    private telephone: string;
    private ville: Villes;

    constructor(id: number, nom: string, prenom: string, email: string, telephone: string, ville: Villes) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.ville = ville;
    }


    /**
     * Getter $id
     * @return {number}
     */
    public get $id(): number {
        return this.id;
    }

    /**
     * Setter $id
     * @param {number} value
     */
    public set $id(value: number) {
        this.id = value;
    }


    /**
     * Getter $nom
     * @return {string}
     */
    public get $nom(): string {
        return this.nom;
    }

    /**
     * Setter $nom
     * @param {string} value
     */
    public set $nom(value: string) {
        this.nom = value;
    }

    /**
     * Getter $prenom
     * @return {string}
     */
    public get $prenom(): string {
        return this.prenom;
    }

    /**
     * Setter $prenom
     * @param {string} value
     */
    public set $prenom(value: string) {
        this.prenom = value;
    }

    /**
     * Getter $email
     * @return {string}
     */
    public get $email(): string {
        return this.email;
    }

    /**
     * Setter $email
     * @param {string} value
     */
    public set $email(value: string) {
        this.email = value;
    }

    /**
     * Getter $telephone
     * @return {string}
     */
    public get $telephone(): string {
        return this.telephone;
    }

    /**
     * Setter $telephone
     * @param {string} value
     */
    public set $telephone(value: string) {
        this.telephone = value;
    }


    /**
     * Getter $ville
     * @return {Villes}
     */
    public get $ville(): Villes {
        return this.ville;
    }

    /**
     * Setter $ville
     * @param {Villes} value
     */
    public set $ville(value: Villes) {
        this.ville = value;
    }


}
