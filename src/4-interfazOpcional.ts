interface Person {
  firsName: string;
  lastName?: string | undefined;
}

const myPerson: Person = {
  firsName: "Felix",
};

console.log(myPerson);
