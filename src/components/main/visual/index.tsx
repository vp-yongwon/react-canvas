import React, { memo, useRef, useEffect, useCallback, useState } from 'react'
import Ball from 'components/main/visual/_base/ball'

const MainVisual = memo(() => {
  const el = useRef<HTMLDivElement>(null)
  const canvasEl = useRef<HTMLCanvasElement>(null)
  const ballSketch = useRef<Ball | null>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  useEffect(() => {
    if (canvasEl.current === null) {
      return
    }
    setCtx(canvasEl.current.getContext('2d'))
  }, [])
  useEffect(() => {
    if (canvasEl.current === null || ctx === null) {
      return
    }
    window.requestAnimationFrame(handleAnimated)
    window.addEventListener('resize', handleResizeWindow, false)
    window.dispatchEvent(new Event('resize'))
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('resize', handleResizeWindow, false)
  }, [ctx])
  const handleResizeWindow = useCallback(() => {
    if (canvasEl.current === null || ctx === null) {
      return
    }
    const {
      body: { clientWidth: width, clientHeight: height }
    } = document
    canvasEl.current.width = width * 2
    canvasEl.current.height = height * 2
    ctx.scale(2, 2)
    ballSketch.current = new Ball(width, height, 20, 4)
  }, [ctx])
  const handleAnimated = useCallback(() => {
    if (canvasEl.current === null || ctx === null) {
      return
    }
    const {
      body: { clientWidth: width, clientHeight: height }
    } = document
    ctx.clearRect(0, 0, width, height)
    if (ballSketch.current !== null) {
      ballSketch.current.draw(ctx, width, height)
    }
    window.requestAnimationFrame(handleAnimated)
  }, [ctx])
  return (
    <div ref={el} className='main-visual'>
      <canvas ref={canvasEl} className='main-visual-canvas' />
    </div>
  )
})

export default MainVisual
