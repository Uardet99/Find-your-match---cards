const state = {
  players: [
    {
      name: "Jugador 1",
      points: 0,
      turno: true,
    },
    {
      name: "Jugador 2",
      points: 0,
      turno: false,
    },
  ],

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
