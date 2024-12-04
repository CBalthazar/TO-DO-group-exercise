const MOCKED_DATA = [
  { id: 1, name: "ménage", completed: false },
  { id: 2, name: "devoirs", completed: false },
  { id: 3, name: "courses", completed: false },
  { id: 4, name: "douche", completed: false },
];

async function mock_fetch(ms, path = false) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  storeData(MOCKED_DATA);
  return MOCKED_DATA;
}

function storeData(data) {
  let stored = JSON.parse(localStorage.getItem("todos")) || [];
  localStorage.setItem("todos", JSON.stringify(stored.push(...data)));
}

// Main
mock_fetch(Math.random() * 2000 + 2000);
