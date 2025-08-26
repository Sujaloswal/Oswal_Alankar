"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const images = [
  "/Frame 1000001825 (1).png",
  "/Frame 1000001826 (2).png",
  "/Frame 1000001827 (2).png",
  "/Frame 1000001828 (1).png",
]

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      opts={{
        loop: true,
        autoHeight: true,
      }}
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className="custom-next-button" />
    </Carousel>
  )
}
