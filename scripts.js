// Initial array of task objects with id, title, description, and status
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo", // Status options: todo, doing, done
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
    description: "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Function to validate task status input from the user
function getValidStatus() {
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  return status;
}

// Function to add up to 3 new tasks from user input
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
      title,
      description,
      status,
    };

    initialTasks.push(newTask);
  }
}

// Log all tasks in array format (for expandable objects view)
function logAllTasks() {
  console.log("All tasks:", initialTasks);
}

// Log only completed tasks in array format
function logCompletedTasks() {
  const completed = initialTasks.filter(task => task.status === "done");
  console.log("Completed tasks:", completed);
}

// Run the functions
addNewTasks();
logAllTasks();
logCompletedTasks();
