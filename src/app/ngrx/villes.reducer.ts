import { VillesActions, VillesActionsTypes } from "./villes.actions";
import { Action } from "@ngrx/store";
import { Villes } from "../classes/villes";

export enum VillesStatsEnum {
    INITIAL = "Initial",
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Erreur"
}

export interface VilleState {
    villes: Array<Villes>,
    errorMessage: string,
    dataState: VillesStatsEnum;
}

const initState: VilleState = {
    villes: [],
    errorMessage: "",
    dataState: VillesStatsEnum.INITIAL
};

export function VilleReducer ( state = initState, action: Action ): VilleState {
    switch ( action.type ) {
        case VillesActionsTypes.GET_ALL_VILLES:
            return { ...state, dataState: VillesStatsEnum.LOADING };
        case VillesActionsTypes.GET_ALL_VILLES_SUCESS:
            return { ...state, dataState: VillesStatsEnum.LOADED, villes: ( <VillesActions>action ).payload };
        case VillesActionsTypes.GET_ALL_VILLES_ERROR:
            return { ...state, dataState: VillesStatsEnum.ERROR, errorMessage: ( <VillesActions>action ).payload };
    }

    return { ...state };
}