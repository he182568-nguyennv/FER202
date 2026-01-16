// Array
const vehicles = ["car", "bike", "train"];
const [car, bike, train] = vehicles;
console.log(car + 1);

// Object
const student = {
  code: "SV01",
  name: "Nguyen",
  age: 18,
  course: {
    semester1: "C basic",
    semester2: "Java basic",
    semester3: "Java advanced",
  },
};
const {
  name,
  age,
  course: { semester1, semester2, semester3 },
} = student; // note: phải trùng tên với các thuộc tính của object

console.log(semester1);

const hello = ({ name, age }) => {
  console.log("hello, " + name + ", " + age + " years old");
};

hello(student);
