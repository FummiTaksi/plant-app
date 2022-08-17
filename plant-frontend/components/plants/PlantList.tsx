export type PlantQueryResponse = {
  __typename?: 'Plant'
  title?: string | null
  description?: string | null
  acquired?: any | null
  image?: {
    __typename?: 'Asset'
    title?: string | null
    url?: string | null
  } | null
}
type Props = {
  plants: (PlantQueryResponse | null)[]
}

export const PlantList = ({ plants }: Props) => {
  return (
    <>
      {plants.map((plant) => {
        return <p key={plant?.title}>{plant?.title}</p>
      })}
    </>
  )
}
