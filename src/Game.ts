import { Board, DeadZone } from "./Board";

export class Game {
    readonly board = new Board()
    readonly upperDeadzone = new DeadZone('upper');
    readonly lowerDeadzone = new DeadZone('lower');
    constructor(){
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);
    }
}

