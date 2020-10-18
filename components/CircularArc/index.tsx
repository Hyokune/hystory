import React from 'react'

interface Props {
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  strokeWidth?: number,
  spinDuration?: number
}

const CircularArc = ({ x, y, radius, startAngle, endAngle, strokeWidth = 8, spinDuration = 14 }: Props) => {
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    }
  }
  
  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
      const start = polarToCartesian(x, y, radius, endAngle)
      const end = polarToCartesian(x, y, radius, startAngle)
  
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
  
      const d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ")
  
      return d
  }

  return (
    <path d={describeArc(x, y, x * 2 * radius, startAngle, endAngle)} strokeWidth={strokeWidth}>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur={`${spinDuration}s`}
        from={`0 ${x} ${y}`}
        to={`-360 ${x} ${y}`}
        repeatCount="indefinite" 
      />
      <animate
        attributeName="opacity"
        values="0.25; 1; 0.25"
        dur={`${spinDuration}s`}
        repeatCount="indefinite"
      />
    </path>
  )
}

export default CircularArc
