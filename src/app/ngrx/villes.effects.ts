import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { VillesService } from "../services/villes.service";
import { GetAllVillesActionError, GetAllVillesActionSuccess, VillesActionsTypes } from "./villes.actions";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class VillesEffects {

    constructor( private effectActions: Actions, private villesService: VillesService ) { }

    getAllVillesEffects: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType( VillesActionsTypes.GET_ALL_VILLES ),
            mergeMap( ( action ) => {
                return this.villesService.loadCities().pipe(
                    map( ( villes ) => new GetAllVillesActionSuccess( villes ) ),
                    catchError( ( err ) => of( new GetAllVillesActionError( err.message ) ) )
                );
            } )
        )
    );

}
