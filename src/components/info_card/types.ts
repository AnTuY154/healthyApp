
const mealType = ['Morning', 'Lunch', 'Dinner', 'Snack'] as const

export type MealType = typeof mealType[number] // 'red'|'orange'|'yellow'|'green'|'blue'|'indigo'|'violet'

interface InfoCardType {
  id: string
  imageName: string
  time: string
  type?: MealType
  tags?: string[]
  title?: string
  onClick?: () => void
}

export type { InfoCardType }
