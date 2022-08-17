import { usePlantCollectionsQuery } from '../generated/graphql'
import { PlantList } from '../components/plants/PlantList'

export default function PlantsPage() {
  const { loading, error, data } = usePlantCollectionsQuery()

  if (loading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>Error</p>
  }

  const plants = data?.plantCollection?.items ?? []
  return (
    <div>
      <h1>Listing {plants.length} plants</h1>
      <PlantList plants={plants} />
    </div>
  )
}
