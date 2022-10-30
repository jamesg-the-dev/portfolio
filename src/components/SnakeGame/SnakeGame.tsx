import React, { useEffect, useRef } from 'react'
import { CanvasView } from './CanvasView';
import './SnakeGame.scss'
import { StartButton } from './sprites/StartButton';
function SnakeGame() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  let gameOver = false;
  let score = 0;


  const setGameOver = (view: CanvasView) => {
    gameOver = false;
  }

  const gameLoop = (
    view: CanvasView,
    startButton: StartButton
  ) => {}

  const startGame = (view: CanvasView) => {}

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas == null) return
    
    const context = canvas.getContext('2d')
    if (context == null) return
    //Our first draw
    const darkGray = window.getComputedStyle(document.documentElement).getPropertyValue('--dark-gray')
    context.fillStyle = darkGray
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    const view = new CanvasView(`#${canvas.id}`)
    view.initTitleScreen()
    view.initCanvasInteraction()
  },[])
  const height = () => {
    return window.innerHeight - (16 * 3)
  }
  return (
    <canvas ref={canvasRef} id="snake-game" width={window.innerWidth - (16 * 3)} height={height()}></canvas>
  )
}

export default SnakeGame