import { Participant, Game, Bets } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type ParticipantsBody = {
  name: string;
  balance: number; // representado em centavos, ou seja, R$ 10,00 -> 1000
};

export type GamesBody = {
    homeTeamName: string;
    awayTeamName: string;
};

export type BetsBody = {
  homeTeamScore: number;
	awayTeamScore: number; 
	amountBet: number; // representado em centavos, ou seja, R$ 10,00 -> 1000
	gameId: number; 
	participantId: number;
}

export type GamesFinishedBody = {
  homeTeamScore: number;
	awayTeamScore: number;
};

 export type CreateParticipantsParams = Omit<Participant, 'id' | 'createdAt' | 'updatedAt'>;
 export type CreateGamesParams = Omit<Game, 'id' | 'createdAt' | 'updatedAt'| 'isFinished' | 'awayTeamScore' | 'homeTeamScore'>;
 export type CreateBetParams = Omit<Bets, 'id' | 'createdAt' | 'updatedAt'| 'amountWon' | 'status' >;
 export type ScoreBoardInput = Pick<Game, "awayTeamScore" | "homeTeamScore">
 export type NewBet = Pick<Bets, "amountBet" | "gameId" | "participantId" | "awayTeamScore" | "homeTeamScore">
 export type finalScoreboard = Pick<Game,  "awayTeamScore" | "homeTeamScore">




