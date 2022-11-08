import { IconProps } from "../icon/types";


interface DataSetType {
    data: number[],
    borderColor: string,
    backgroundColor: string,
}

interface LineChartType {
    xAxisLabels: string[];
    datasets: DataSetType[]
}

export type {LineChartType };
