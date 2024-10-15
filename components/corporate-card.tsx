'use client'

import { useState, useCallback } from 'react'

export function CorporateCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [carNumber, setCarNumber] = useState('ABC 123')

  const generateCarNumber = useCallback(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const newLetters = Array(3).fill(0).map(() => letters[Math.floor(Math.random() * letters.length)]).join('')
    const newNumbers = Array(3).fill(0).map(() => numbers[Math.floor(Math.random() * numbers.length)]).join('')
    return `${newLetters} ${newNumbers}`
  }, [])

  const handleTap = () => {
    setIsFlipped(!isFlipped)
    setCarNumber(generateCarNumber())
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`w-[450px] h-[270px] relative perspective-1000 cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        } transition-transform duration-500`}
        onClick={handleTap}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-gray-600 rounded-xl p-6 shadow-xl w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-start px-2">
              <span className="text-gray-300 text-2xl font-light">corporate</span>
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-10 bg-gray-400 rounded"></div>
              <div className="text-gray-200 text-3xl tracking-wider">
                2221 0012 3412 3456
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span>
                  <span className="text-sm mr-1">VALID THRU</span>
                  12/23
                </span>
                <span>Mayank Kinger</span>
              </div>
              <div className="text-gray-300 text-base">
                Card Number: {carNumber}
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-16 h-10 relative">
                <div className="absolute right-0 w-10 h-10 rounded-full bg-red-500 opacity-75"></div>
                <div className="absolute left-0 w-10 h-10 rounded-full bg-yellow-500 opacity-75"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gray-600 rounded-xl p-6 shadow-xl w-full h-full flex flex-col justify-between">
            <div className="w-full h-10 bg-black mt-4"></div>
            <div className="text-right text-gray-300 text-base">
              <p className="mt-2">Card Number: {carNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}