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
  // Prompt user to enter a valid status and convert it to lowercase
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  // Keep prompting until a valid status is entered
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  // Return the validated status
  return status;
}

// Function to add up to 3 new tasks from user input
function addNewTasks(maxTasks = 3) {
  // Loop up to 3 times (or a custom max)
  for (let i = 0; i < maxTasks; i++) {
    // Stop if task limit of 6 is reached
    if (initialTasks.length >= 6) {
      alert("Task limit reached. Please check your board in the console.");
      break;
    }

    // Prompt user for title and description of the new task
    const title = prompt(`Enter title for task ${initialTasks.length + 1}:`);
    const description = prompt(`Enter description for task ${initialTasks.length + 1}:`);
    
    // Get a valid status using helper function
    const status = getValidStatus();

    // Create new task object with incremented ID
    const newTask = {
      id: initialTasks.length + 1,
      title: title,
      description: description,
      status: status,
    };

    // Push new task into the array
    initialTasks.push(newTask);
  }
}

// Function to log all tasks in the console
function logAllTasks() {
  console.log("All Tasks:");
  // Loop through each task and log its details
  initialTasks.forEach(task => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`);
  });
}

// Function to log only completed tasks (with status "done")
function logCompletedTasks() {
  // Filter tasks with status "done"
  const completed = initialTasks.filter(task => task.status === "done");

  // If there are any completed tasks, log them
  if (completed.length > 0) {
    console.log("Completed Tasks:");
    completed.forEach(task => {
      console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`);
    });
  } else {
    // If none are completed
    console.log("No completed tasks yet.");
  }
}

// Run the functions in order:
// 1. Prompt the user to add up to 3 tasks
addNewTasks();

// 2. Display all tasks in the console
logAllTasks();

// 3. Display only tasks marked as "done"
logCompletedTasks();
