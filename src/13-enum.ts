enum Colores {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

function obtenerColor(color: Colores): string {
  return `El color seleccionado es: ${color}`;
}

console.log(obtenerColor(Colores.Rojo));
