export interface Trend {
    icon: string;
    name: string;
    isSelected: boolean;
}

export enum TrendsEnum {
    HOT = 'HOT',
    NEW = 'NEW',
    TOP = 'TOP'
}