import { COLORS } from "@/constants/Shortcut"

export interface IFeatureCard {
    icon: LucideIcon,
    title: string,
    description: string
}

export interface ITanaman {
    id: number,
    thumbnail: string,
    title: string,
    description: string,
    siram: string
}

export type Variant = keyof typeof COLORS;

export interface IShortcut {
    icon: LucideIcon,
    title: string,
    description: string,
    link: string,
    color: Variant
}