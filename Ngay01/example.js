const object = [
  {
    id: "SV001",
    name: "nguyen",
  },
  {
    id: "SV002",
    name: "nguyen1",
  },
  {
    id: "SV003",
    name: "nguyen2",
  },
  {
    id: "SV004",
    name: "nguyen3",
  },
  {
    id: "SV005",
    name: "nguyen4",
  },
];

const arr = object.map((x) => {
  return x.id + "VN";
});

console.log(arr);
