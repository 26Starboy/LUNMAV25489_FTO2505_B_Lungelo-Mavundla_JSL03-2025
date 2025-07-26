const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
]

// Function to validate task status input
function getValidStatus() {
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }
  return status;
}

// Function to add up to 3 new tasks
function addNewTasks(maxTasks = 3) {
  for (let i = 0; i < maxTasks; i++) {
    if (initialTasks.length >= 6) {
      alert("Task limit reached. Please check your board in the console.");
      break;
    }

    const title = prompt(`Enter title for task ${initialTasks.length + 1}:`);
    const description = prompt(`Enter description for task ${initialTasks.length + 1}:`);
    const status = getValidStatus();

    const newTask = {
      id: initialTasks.length + 1,
      title: title,
      description: description,
      status: status,
    };

    initialTasks.push(newTask);
  }
}