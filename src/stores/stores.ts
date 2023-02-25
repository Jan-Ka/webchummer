import { writable } from "svelte/store";

function SidebarState() {
    const { subscribe, update } = writable(false);
    const toggle = () => update(s => !s);
    return { subscribe, toggle };
}

export const sidebarOpen = SidebarState();