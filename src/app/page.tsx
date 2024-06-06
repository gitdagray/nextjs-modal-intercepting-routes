import PhotoDisplay from "./photo/[photoId]/PhotoDisplay"
import type { PhotoData } from "./photo/[photoId]/page"

export default async function Home() {

  const response = await fetch('http://localhost:3500/images', { cache: 'no-store' })

  const images: PhotoData[] = await response.json()

  if (!images?.length) {
    return <h1>No Images to Display</h1>
  }

  return (
    <main className="flex flex-col items-center gap-8 pb-8">
      {images.map(photoData => (
        <PhotoDisplay key={photoData.id} photoData={photoData} />
      ))}
    </main>
  )

}
