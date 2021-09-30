import { Patients } from "./patients";

export class Rdv {

    public id: number | undefined;
    public patient: Patients | undefined;
    public dateheure: Date | undefined;
    public type: String | undefined;
    public duree: number | undefined;
    public note: String | undefined;

    constructor( id?: number | undefined, patient?: Patients | undefined, dateheure?: Date | undefined, type?: String | undefined, duree?: number | undefined, note?: String | undefined ) {
        this.id = id;
        this.patient = patient;
        this.dateheure = dateheure;
        this.type = type;
        this.duree = duree;
        this.note = note;
    }
}
