export const state = {
  players: [
    {
      name: "Jugador 1",
      points: 0,
    },
    {
      name: "Jugador 2",
      points: 0,
    },
  ],

  turno: 0,
  board: {
    rows: 4,
    columns: 5,
    cells: [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
  },
};
