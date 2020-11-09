import CardGame from '../../class/CardGame';
import { GameTypeEnum } from '../../class/GameTypeEnum';
import { CardTypeEnum } from '../../class/CardTypeEnum';

let games:CardGame[] = [];

var bellote:CardGame = new CardGame(1,'Belotte', 
'La belote est un jeu de cartes qui se pratique à quatre, à trois ou deux avec un jeu de 32 cartes',
CardTypeEnum.NORMAL_32, GameTypeEnum.TEAM, '2 à 4 joueurs');
games.push(bellote);

var tamalou:CardGame = new CardGame(2,'Tamalou', 
'Le tamalou est un jeu de mémoire et de stratégie. Affrontez vos amis!',
CardTypeEnum.NORMAL_52, GameTypeEnum.SOLO, '3 à 6 joueurs');
games.push(tamalou);

var rami:CardGame = new CardGame(3,'Rami', 
'Le rami est un jeu de cartes d\'origine indienne de combinaisons',
CardTypeEnum.DOUBLE_52, GameTypeEnum.SOLO, '2 à 5 joueurs');
games.push(rami);

var manille:CardGame = new CardGame(4,'Manille', 
'La manille est un jeu de cartes d\'origine espagnole.',
CardTypeEnum.NORMAL_32, GameTypeEnum.TEAM, '4 joueurs');
games.push(manille);

var bataille = new CardGame(5,'Bataille', 
'La bataille est un jeu de cartes qui se repose sur le hasard et la mémoire',
CardTypeEnum.NORMAL_52, GameTypeEnum.SOLO, '2 et plus');
games.push(bataille);

export default games;