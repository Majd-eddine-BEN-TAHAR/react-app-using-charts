export function generateColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export function generateNumber() {
  return Math.floor(Math.random() * 101);
}

function generateName() {
  const syllables = ["lo", "re", "mi", "fa", "so", "la", "ti"];
  const nameLength = Math.floor(Math.random() * 3) + 2; // Random name length between 2 and 4 syllables
  let name = "";

  for (let i = 0; i < nameLength; i++) {
    const randomSyllableIndex = Math.floor(Math.random() * syllables.length);
    name += syllables[randomSyllableIndex];
  }

  return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter
}

export function getRandomColors(num) {
  return [
    ...Array(num)
      .fill(null)
      .map(() => generateColor()),
  ];
}

export function getRandomNumbers(n) {
  return [
    ...Array(n)
      .fill(null)
      .map(() => generateNumber()),
  ];
}

export function getRandomNames(n) {
  return [
    ...Array(n)
      .fill(null)
      .map(() => generateName()),
  ];
}
