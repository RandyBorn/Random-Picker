const classmates = [
  "Hans Müller",
  "Peter Schmidt",
  "Klaus Meier",
  "Karl-Heinz",
  "Hans-Peter",
  "Peter-Klaus",
  "Klaus-Hans",
  "Karl-Peter",
  "Hans-Klaus",
  "Peter-Hans",
];
const getRandomClassmate = () => {
  const randomIndex = Math.floor(Math.random() * classmates.length);
  return classmates[randomIndex];
};
console.log(getRandomClassmate());
