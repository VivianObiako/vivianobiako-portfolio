export type Nullable<T> = T | null;

export interface CustomIconProps {
    pathFill?: string;
    svgFill?: string;
    width?: string | number;
    height?: string | number;
    className?: string;
}
export interface Highlight {
    language: string;
    title: string;
    description: string;
    tools: string;
    link: string;
}

export interface experience {
    index: number;
    place: string;
    title: string;
    timeframe: string;
    last?: boolean;
}

export interface project {
    name: string;
    tools: string;
    description: string;
    link: string;
}
