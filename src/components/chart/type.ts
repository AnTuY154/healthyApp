import { IconProps } from "../icon/types";


interface DataSetType {
    data: number[],
    borderColor: string,
    backgroundColor: string,
}

interface ChartFilter {
    label: string,
    onClick: ()=> void,
    isActive?:boolean,
    type: '1' | '2' |'3' |'4'
}


interface LineChartType {
    xAxisLabels: string[];
    datasets: DataSetType[];
    title?: string;
    time?: string;
    filter?: ChartFilter[];
}

export type {LineChartType,ChartFilter };
