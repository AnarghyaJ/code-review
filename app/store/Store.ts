import { create } from 'zustand'
import { StoreType } from '../types/ModuleTypes';


export const useStore = create<StoreType>((set) => ({
    buildEnvironMent: [],
    settings: false,
    languages: [],
    theme: 'dark',
    persistence: [],
    security: [],
    token: '',
}));
