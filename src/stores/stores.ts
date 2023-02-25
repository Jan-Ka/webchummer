import { writable } from "svelte/store";

function SidebarVisibe() {
    const { subscribe, update } = writable(false);
    const set = (x: boolean) => update(() => x);
    return { subscribe, set }
}

function SidebarOpen() {
    const { subscribe, update } = writable(false);
    const toggle = () => update(s => !s);
    return { subscribe, toggle };
}

export const hasSidebar = SidebarVisibe();
export const sidebarOpen = SidebarOpen();