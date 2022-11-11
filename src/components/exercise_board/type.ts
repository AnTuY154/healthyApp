
interface ExecriseItemType {
  description: string
  type: string
  time: string
  energy: string
}

interface ExecriseBoardType {
  title: string
  time: string
  execriseData: ExecriseItemType[]
  loadingData: (page: number) => void
}

export type { ExecriseBoardType, ExecriseItemType }
