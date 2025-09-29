"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Phone } from "lucide-react"

const professionals = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    service: "Plomería",
    rating: 4.9,
    reviews: 127,
    distance: "1.2 km",
    available: true,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: 2,
    name: "María González",
    service: "Electricidad",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 km",
    available: true,
    lat: 40.758,
    lng: -73.9855,
  },
  {
    id: 3,
    name: "Juan Pérez",
    service: "Carpintería",
    rating: 5.0,
    reviews: 156,
    distance: "3.1 km",
    available: false,
    lat: 40.7489,
    lng: -73.968,
  },
  {
    id: 4,
    name: "Ana Martínez",
    service: "Pintura",
    rating: 4.7,
    reviews: 89,
    distance: "1.8 km",
    available: true,
    lat: 40.7614,
    lng: -73.9776,
  },
]

export function ProfessionalsMap() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-sans text-3xl font-bold text-foreground text-balance md:text-4xl">
            Profesionales Cerca de Ti
          </h2>
          <p className="mt-2 text-muted-foreground">Encuentra expertos verificados en tu zona</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mapa simulado */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[400px] w-full bg-muted lg:h-[500px]">
                <img
                  src="/image.png"
                  alt="Mapa de profesionales"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg bg-background/90 p-4 text-center backdrop-blur-sm">
                    <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <p className="font-medium text-foreground">Tu ubicación</p>
                    <p className="text-sm text-muted-foreground">{professionals.length} profesionales cerca</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de profesionales */}
          <div className="space-y-4">
            {professionals.map((professional) => (
              <Card key={professional.id} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-primary/10" />
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-sans text-lg font-semibold text-foreground">{professional.name}</h3>
                          {professional.available && (
                            <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                              Disponible
                            </Badge>
                          )}
                        </div>
                        <p className="mb-2 text-sm text-muted-foreground">{professional.service}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium text-foreground">{professional.rating}</span>
                            <span className="text-muted-foreground">({professional.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{professional.distance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1">Ver Perfil</Button>
                    <Button variant="outline" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
