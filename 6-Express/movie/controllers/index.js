const data = [
  { id: 1, title: "Iron Man", year: "2008" },
  { id: 2, title: "Thor", year: "2011" },
  { id: 3, title: "Captain America", year: "2012" }
];

export function listAction(_request, response) {
  response.send(data);
}