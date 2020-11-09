import { CardTypeEnum } from './CardTypeEnum';
import { GameTypeEnum } from './GameTypeEnum'

export default class CardGame {

    id: number;
    title:string = '';
    description:string = '';
    playerNumber?:string = '';
    rules?:string = '';
    cardType:CardTypeEnum;
    gameType:GameTypeEnum;

    constructor(id:number, title:string, description:string, cardType:CardTypeEnum, gameType:GameTypeEnum, playerNumber?:string, rules?:string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.cardType = cardType;
        this.gameType = gameType;
        this.playerNumber = playerNumber,
        this.rules = rules;
    }
}