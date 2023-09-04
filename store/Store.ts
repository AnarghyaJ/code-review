import { create } from 'zustand'
import { StoreType } from '../types/ModuleTypes';


export const useStore = create<StoreType>((set) => ({
    buildEnvironMent: [],
    settings: false,
    languages: [],
    selectedPage: 'home',
    theme: 'dark',
    persistence: [],
    security: [],
    token: '',
    loading:false,
    error:null,
    infoMessage:null
}));
