import { IconProps } from "../icon/types"
import { MealType } from "../info_card/types"

interface HexComponentProps {
  icon: IconProps
  onClick?: () => void
  text: MealType
}


export type { HexComponentProps }