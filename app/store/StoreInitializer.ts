"use client";
import { useRef } from "react";
import { StoreType } from "../types/ModuleTypes";
import { useStore } from "./Store";

export default function StoreInitializer(store: StoreType) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useStore.setState(store);
    }
    return null;
}
