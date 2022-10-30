import { StartButton } from "./sprites/StartButton";
import START_BUTTON from './assets/start-button.png'
import TITLE from './assets/snake-title.png'

export class CanvasView {
  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null
  private startButton: StartButton

  constructor(id: string) {
    this.canvas = document.querySelector(id) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d')
    this.startButton = new StartButton({x: this.canvas.width / 2, y: this.canvas.height / 2}, START_BUTTON);
  }

  initTitleScreen(): void {
    this.initTitle()
    this.initStartButton(this.startButton)
  }

  private initStartButton(button: StartButton): void {
    const originalWidth = button.image.width
    button.image.width = Math.round((10 * document.body.clientWidth) / 100);
    button.image.height = Math.round((button.image.width * button.image.height) / originalWidth);
    this.context?.drawImage(
      button.image,
      (this.canvas.width / 2) - (button.image.width / 2),
      ((this.canvas.height / 2) - (button.image.height / 2)) + 100,
      button.image.width,
      button.image.height
    )
  }

  private initTitle(): void {
    const title = new Image()
    title.src = TITLE
    const originalWidth = title.width
    title.width = Math.round((30 * document.body.clientWidth) / 100);
    title.height = Math.round((title.width * title.height) / originalWidth);

    this.context?.drawImage(
      title, 
      (this.canvas.width / 2) - (title.width / 2),
      ((this.canvas.height / 2) - (title.height / 2)) - 100,
      title.width,
      title.height
    );
  }

  initCanvasInteraction(): void {
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.startButton.click(x, y)
    })
  }

  drawSprite(sprite: StartButton): void {
    if (!sprite) return;

    this.context?.drawImage(
      sprite.image,
      sprite.pos.x,
      sprite.pos.y
    )
  }

}