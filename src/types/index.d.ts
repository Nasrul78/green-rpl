import { Leaf, Sun, Droplet, Thermometer, Maximize, Wind, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { COLORS } from "@/constants/Shortcut"

export interface IFeatureCard {
    icon: LucideIcon,
    title: string,
    description: string
}

export interface IFunFacts {
    icon: LucideIcon,
    title: string,
    description: string,
    color: string
}

export interface ICareGuide {
    icon: LucideIcon,
    title: string,
    description: string,
    message: string
}

export interface IPlantStats {
    label: string,
    description: string
}

export interface ITanaman {
    id: number,
    thumbnail: string,
    title: string,
    titleLatin: string,
    description: string,
    funFacts: funFacts[],
    siram: string,
    careGuide: careGuide[],
    plantStats: plantStats[]
}

export interface ITanamanCardProps {
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