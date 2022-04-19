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
  number: number;
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
        correct: true,
        text: "Biologists have successfully grown an artificial pancreas from stem cells and demonstrated function in a rat model. ",
        number: 1,
      },
      {
        correct: false,
        text: "Scientists have found a neural circuit that makes food taste better with increased hunger. ",
        number: 2,
      },
      {
        correct: false,
        text: "Researchers find that strong storms can generate 'stormquakes' similar to earthquakes of magnitude > 3.5. ",
        number: 3,
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
        number: 2,
      },
      {
        id: "cara",
        name: "Cara",
        correct: false,
        number: 3,
      },
    ],
  },
  {
    day: 2,
    id: 2,
    type: "normal",
    date: "May 31, 2014",
    episodeNumber: 465,
    question: "Pick the fiction",
    correctChoice: 1,
    choices: [
      {
        correct: false,
        text: "A patient was treated for Sickle Cell disease with HIV engineered to deliver a corrected copy of the hemoglobin gene to his blood stem cells. ",
        number: 1,
      },
      {
        correct: false,
        text: "Researchers have used a bubble of fat to deliver gene therapy through a nebulizer to patients with cystic fibrosis, improving lung function.  ",
        number: 2,
      },
      {
        correct: true,
        text: "Polio virus was engineered to introduce a new mutation which counteracts the effects of Huntington's disease in one patient who's disease progress has slowed significantly.",
        number: 3,
      },
    ],
    rogueAnswers: [
      {
        id: "jay",
        name: "Jay",
        correct: false,
        number: 2,
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
        correct: true,
        number: 1,
      },
      {
        id: "cara",
        name: "Cara",
        correct: true,
        number: 1,
      },
    ],
  },
];
