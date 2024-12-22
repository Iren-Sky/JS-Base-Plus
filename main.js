let tasksList = [
  { name: "Купить продукты" ,
    completed: false} ,
 
  { name:"Сделать домашнее задание" ,
    completed: false},
 
  {
    name: "Полить цветы",
    completed: false
  }
  ]
 
console.log ('Список задач:' , tasksList)
 
function addNewTask (taskName , completed = false) {
  if (taskName === '') {
    console.error ('Название задачи не может быть пустым')
    return
  }
 
  tasksList.push ({
    name: taskName ,
    completed
  })
  console.log (`Задача "${taskName}" добавлена`)
}
 
addNewTask ("" , completed = false)
addNewTask ("Выучить JavaScript" , completed = false)
console.log ('Список задач:' , tasksList)
 
function markTaskCompleted (name) {
  const taskCompleted = tasksList.find (taskCompleted => taskCompleted.name === name)
  if (taskCompleted) {
    taskCompleted.completed = true;
    console.log (`Задача "${name}" выполнена`);
  } else {
    console.error (`Задача "${name}" не найдена`)
  }
}
 
//markTaskCompleted ("Покормить кошку")
//markTaskCompleted ("Купить продукты")
//console.log ('Список задач:' , tasksList)
 
function deleteTask (name) {
  const deletedTask = tasksList.findIndex (deletedTask => deletedTask.name === name);
  if (deletedTask !== -1) {
    
    tasksList.splice (deletedTask, 1);
    console.log(`Задача "${name}" была удалена.`);
  } else {
    console.error (`Задача "${name}" не найдена`) 
    return
  }   
}
 
//deleteTask ("Сделать уборку")
//deleteTask ("Сделать домашнее задание")
//console.log ('Список задач:' , tasksList)

  function showAllTasks() {
    tasksList.forEach((task) => {
        console.log(`Задача "${task.name}": ${task.completed ? 'выполнена' : 'не выполнена'}`);
    });
}
showAllTasks()
