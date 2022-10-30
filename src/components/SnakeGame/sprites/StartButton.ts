import { Vector } from "../types";

export class StartButton {
  private buttonImage = new Image();

  constructor(
    private position: Vector,
    image: string
  ) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.buttonImage.src = image;
  }

  click(mouseX: number, mouseY:number) {
    const distance = Math.sqrt(
      ( ( mouseX - this.position.x ) * ( mouseX - this.position.x ) )
      +
      ( ( mouseY - this.position.y ) * ( mouseY - this.position.y ) )
    )
    console.log(distance);
  }

  get image(): HTMLImageElement {
    return this.buttonImage;
  }

  get pos(): Vector {
    return this.pos
  }
}