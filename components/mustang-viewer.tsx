"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export function MustangViewer() {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1964 + 1 }, (_, i) => 1964 + i)
  const [selectedYear, setSelectedYear] = useState(currentYear)

  const imageUrl = `https://via.placeholder.com/800x450.png?text=Ford+Mustang+${selectedYear}`

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Ford Mustang Viewer</h2>
      <Select onValueChange={(value) => setSelectedYear(Number(value))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="relative w-full aspect-video">
        <Image
          src={imageUrl}
          alt={`Ford Mustang ${selectedYear}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <p className="text-center text-gray-600">
        Displaying Ford Mustang model for the year {selectedYear}
      </p>
    </div>
  )
}