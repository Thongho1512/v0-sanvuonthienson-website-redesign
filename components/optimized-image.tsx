"use client"

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  lowQualitySrc?: string
}

export default function OptimizedImage({ 
  src, 
  alt, 
  lowQualitySrc,
  className = '',
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative overflow-hidden">
      {/* Low quality placeholder */}
      {lowQualitySrc && isLoading && (
        <Image
          src={lowQualitySrc}
          alt={alt}
          className={`${className} blur-sm scale-110`}
          {...props}
        />
      )}
      
      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        quality={85}
        {...props}
      />
    </div>
  )
}