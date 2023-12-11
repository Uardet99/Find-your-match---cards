// INSERTAR JSON EN SUPABASE
export { saveGame };
async function saveGame(gameState) {
  const response = await fetch(
    "https://pgzzjqwtbgogicylniar.supabase.co/rest/v1/estado_juego",
    {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnenpqcXd0YmdvZ2ljeWxuaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjgxMjQsImV4cCI6MjAxNzgwNDEyNH0.6cQBxjHIewaA59RveaI5SHm20jJqY078af9snfYAiS8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnenpqcXd0YmdvZ2ljeWxuaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjgxMjQsImV4cCI6MjAxNzgwNDEyNH0.6cQBxjHIewaA59RveaI5SHm20jJqY078af9snfYAiS8",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        estado: gameState,
        uid_usuario: localStorage.getItem("uid"),
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((gameState) => {
      console.log("Datos obtenidos", gameState);
    })
    .catch((error) => {
      console.error("Error durante la solicitud", error);
    });
}
