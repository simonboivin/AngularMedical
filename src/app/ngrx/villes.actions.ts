import { Action } from "@ngrx/store";
import { Villes } from "../classes/villes";

export enum VillesActionsTypes {
    GET_ALL_VILLES = "[Villes] Get All Villes",
    GET_ALL_VILLES_SUCESS = "[Villes] Get All Villes Success",
    GET_ALL_VILLES_ERROR = "[Villes] Get All Villes Error"
}

export class GetAllVillesAction implements Action {
    type: VillesActionsTypes = VillesActionsTypes.GET_ALL_VILLES;
    constructor( public payload: any ) {

    }
}

export class GetAllVillesActionSuccess implements Action {
    type: VillesActionsTypes = VillesActionsTypes.GET_ALL_VILLES_SUCESS;

    constructor( public payload: Villes[] ) {

    }
}


export class GetAllVillesActionError implements Action {
    type: VillesActionsTypes = VillesActionsTypes.GET_ALL_VILLES_ERROR;

    constructor( public payload: string ) {

    }
}

export type VillesActions = GetAllVillesAction | GetAllVillesActionSuccess | GetAllVillesActionError;
