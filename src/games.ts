export interface Game {
  day: number; //The day number this game should be shown
  id: number; //The id of the game
  type: string;
  date: string;
  episodeNumber: number;
  choices: Array<Choice>;
  rogueAnswers: Array<RogueAnswer>;
  question: string;
  correctChoice: number;
}

export interface Choice {
  number: number;
  text: string;
  correct: boolean;
}

export interface RogueAnswer {
  id: string;
  name: string;
  correct: boolean;
  number: 1;
}
export const games: Array<Game> = [
  {
    day: 1,
    id: 1,
    type: "normal",
    date: "May 31, 2014",
    episodeNumber: 464,
    question: "Pick the fiction",
    correctChoice: 1,
    choices: [
      {
        number: 1,
        text: "Neptune's moon, Triton, is the only body known to have cryovolcanoes.",
        correct: true,
      },
      {
        number: 2,
        text: "Up until the 1850s, astronomers recognized 11 planets in our solar system.",
        correct: false,
      },
      {
        number: 3,
        text: "The body in our solar system with an atmosphere most similar to Earth's is Saturn's moon, Titan.",
        correct: false,
      },
    ],
    rogueAnswers: [
      {
        id: "jay",
        name: "Jay",
        correct: true,
        number: 1,
      },
      {
        id: "evan",
        name: "Evan",
        correct: true,
        number: 1,
      },
      {
        id: "bob",
        name: "Bob",
        correct: false,
        number: 1,
      },
      {
        id: "cara",
        name: "Cara",
        correct: false,
        number: 1,
      },
    ],
  },
];
