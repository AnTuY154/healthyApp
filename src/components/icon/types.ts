import React from "react"

interface IconProps {
  name: string,
  notification?: number
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}


export type { IconProps }