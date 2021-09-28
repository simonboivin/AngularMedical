import { Injectable } from "@angular/core";

@Injectable( {
    providedIn: 'root'
} )

export class PatientsSorters {

    sorterByIdAsc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.id < a.id ) return 1;
            if ( b.id > a.id ) return -1;
            return 0;
        };

    sorterByNameAsc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.nom < a.nom ) return 1;
            if ( b.nom > a.nom ) return -1;
            return 0;
        };


    sorterByPrenomAsc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.prenom < a.prenom ) return 1;
            if ( b.prenom > a.prenom ) return -1;
            return 0;
        };

    sorterByEmailAsc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.email < a.email ) return 1;
            if ( b.email > a.email ) return -1;
            return 0;
        };

    sorterByTelephoneAsc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.telephone < a.telephone ) return 1;
            if ( b.telephone > a.telephone ) return -1;
            return 0;
        };


    sorterByVilleAsc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.ville.nom < a.ville.nom ) return 1;
            if ( b.ville.nom > a.ville.nom ) return -1;
            return 0;
        };

    sorterByIdDesc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.id < a.id ) return -1;
            if ( b.id > a.id ) return 1;
            return 0;
        };

    sorterByNameDesc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.nom < a.nom ) return -1;
            if ( b.nom > a.nom ) return 1;
            return 0;
        };


    sorterByPrenomDesc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.prenom < a.prenom ) return -1;
            if ( b.prenom > a.prenom ) return 1;
            return 0;
        };

    sorterByEmailDesc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.email < a.email ) return -1;
            if ( b.email > a.email ) return 1;
            return 0;
        };

    sorterByTelephoneDesc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.telephone < a.telephone ) return -1;
            if ( b.telephone > a.telephone ) return 1;
            return 0;
        };


    sorterByVilleDesc: ( a: any, b: any ) => number =
        function ( a: any, b: any ) {
            if ( b.ville.nom < a.ville.nom ) return -1;
            if ( b.ville.nom > a.ville.nom ) return 1;
            return 0;
        };

}