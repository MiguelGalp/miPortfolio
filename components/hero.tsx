import { useMediaQuery } from 'react-responsive'
import CoverImage from './cover_image'
import ResponsiveCover from './responsive_cover'

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 })

  return (
    <div>
      {isDesktopOrLaptop ? <CoverImage /> : <ResponsiveCover />}
    </div>
  )
}
