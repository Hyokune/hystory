import React from 'react'
import CircularArc from '../CircularArc'

export interface Props {
  width: number,
  height: number
}

const GlowingSpinner = ({ width, height }: Props) => {
  const halfWidth = width / 2
  const halfHeight = height / 2

  return (
    <svg className="glowing-spinner" width={width} height={height}>
      <filter id="arc-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation=".8" />
      </filter>
      <filter id="glow-arc-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
      </filter>
      <g className="glow" filter="url(#glow-arc-blur)">
        <CircularArc x={halfWidth} y={halfHeight} radius={.24} startAngle={170} endAngle={340} strokeWidth={20} spinDuration={12} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.1} startAngle={195} endAngle={300} strokeWidth={16} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.2} startAngle={170} endAngle={340} strokeWidth={20} spinDuration={16} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.16} startAngle={90} endAngle={180} strokeWidth={19} spinDuration={8} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.13} startAngle={90} endAngle={170} strokeWidth={19} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.22} startAngle={65} endAngle={120} strokeWidth={20} spinDuration={9} />
      </g>
      <g filter="url(#arc-blur)">
        <CircularArc x={halfWidth} y={halfHeight} radius={.24} startAngle={170} endAngle={340} spinDuration={12}/>
        <CircularArc x={halfWidth} y={halfHeight} radius={.1} startAngle={195} endAngle={300} strokeWidth={6} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.2} startAngle={170} endAngle={340} spinDuration={16}/>
        <CircularArc x={halfWidth} y={halfHeight} radius={.16} startAngle={90} endAngle={180} strokeWidth={9} spinDuration={8} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.13} startAngle={90} endAngle={170} strokeWidth={9} />
        <CircularArc x={halfWidth} y={halfHeight} radius={.22} startAngle={65} endAngle={120} strokeWidth={10} spinDuration={9}/>
      </g>
    </svg>
  )
}

export default GlowingSpinner
