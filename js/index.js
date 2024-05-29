const todoList = [
  {
    id: 1,
    taskName: "JavaScriptの基礎",
    limit: "2021-06-30",
    status: "作業中",
  },
  {
    id: 2,
    taskName: "非同期処理",
    limit: "2021-06-30",
    status: "作業中",
  },
  {
    id: 3,
    taskName: "スプラトゥーンやる",
    limit: "2021-06-30",
    status: "作業中",
  },
];

// JSファイルが読み込まれたときにtodoListをHTMLに表示する
// HTMLに表示するまでの流れ
// 1. HTMLのどの場所に表示するかを取得する
// 2. 表示したいHTMLの形式に合わせてDOM要素を生成する
// 3. 1で取得した場所に2で生成したDOM要素を追加する

const displayTodoList = () => {
  //   1. HTMLのどの場所に表示するかを取得する
  // tbody要素を取得
  const todoListElement = document.getElementById("todoList");

  // 2. 表示したいHTMLの形式に合わせてDOM要素を生成する
  // 2-1. todoListの0番目のデータを取得
  const todo = todoList[0];
  console.log(todoList[0]);

  // 2-2. <tr>要素を生成
  const trElement = document.createElement("tr");
  console.log("trElement:", trElement);

  // 2-3. <tr>要素の中に配置する<td>要素を生成
  const taskNameElement = document.createElement("td");
  const limitElement = document.createElement("td");

  // 2-4. <td>要素の中にtodoListの0番目のデータを表示する
  taskNameElement.textContent = todo.taskName;
  limitElement.textContent = todo.limit;

  // 2-5. <tr>要素の中に<td>要素を追加
  trElement.appendChild(taskNameElement);
  trElement.appendChild(limitElement);

  // 3. 1で取得した場所に2で生成したDOM要素を追加する
  todoListElement.appendChild(trElement);

  //   // 1. HTMLのどの場所に表示するかを取得する
  // tbody要素を取得
  const todoLimitElement = document.getElementById("todoList");

  // 2. 表示したいHTMLの形式に合わせてDOM要素を生成する
  // 2-1. todoListの0番目のデータを取得
  const todoLimit = todoList[1];
  console.log(todoList[1]);

  // 2-2. <tr>要素を生成
  const trElement2 = document.createElement("tr");
  console.log("trElement:", trElement2);

  // 2-3. <tr>要素の中に配置する<td>要素を生成
  const taskLimitElement = document.createElement("td");

  // 2-4. <td>要素の中にtodoListの0番目のデータを表示する
  taskLimitElement.textContent = todoLimit.taskName;

  // 2-5. <tr>要素の中に<td>要素を追加
  trElement2.appendChild(taskLimitElement);

  // 3. 1で取得した場所に2で生成したDOM要素を追加する
  todoLimitElement.appendChild(trElement2);
};

displayTodoList();

// document.addEventListener("DOMContentLoaded", function () {
//   const taskInput = document.getElementById("taskName");
//   const dateInput = document.getElementById("taskDate");
//   const taskTableBody = document.querySelector(".table-taskcheck tbody");
//   const addButton = document.querySelector(".btn-add");

//   function loadTasks() {
//     const tasks = getAllTasks();
//     taskTableBody.innerHTML = "";
//     tasks.forEach((task) => {
//       if (task.status !== "削除") {
//         addTaskToTable(task);
//       }
//     });
//   }

//   function addTaskToTable(task) {
//     const newRow = document.createElement("tr");

//     // ID
//     const idCell = document.createElement("th");
//     idCell.scope = "row";
//     idCell.textContent = task.id;

//     // タスク名
//     const taskNameCell = document.createElement("td");
//     taskNameCell.textContent = task.name;

//     // 期限
//     const taskDateCell = document.createElement("td");
//     taskDateCell.textContent = task.date;

//     // 状態
//     const statusCell = document.createElement("td");
//     const statusButton = document.createElement("button");
//     statusButton.className = "btn-taskcheck";
//     statusButton.textContent = task.status;
//     statusButton.addEventListener("click", function () {
//       if (statusButton.textContent === "作業中") {
//         statusButton.textContent = "完了";
//       } else {
//         statusButton.textContent = "作業中";
//       }
//       task.status = statusButton.textContent;
//       updateTaskStatus(task.id, task.status);
//     });
//     statusCell.appendChild(statusButton);

//     // 削除
//     const deleteCell = document.createElement("td");
//     const deleteButton = document.createElement("button");
//     deleteButton.className = "btn-delete";
//     deleteButton.textContent = "✕";
//     deleteButton.addEventListener("click", function () {
//       newRow.remove();
//       markTaskAsDeleted(task.id);
//     });
//     deleteCell.appendChild(deleteButton);

//     newRow.appendChild(idCell);
//     newRow.appendChild(taskNameCell);
//     newRow.appendChild(taskDateCell);
//     newRow.appendChild(statusCell);
//     newRow.appendChild(deleteCell);

//     taskTableBody.appendChild(newRow);
//   }

//   addButton.addEventListener("click", function () {
//     const taskName = taskInput.value.trim();
//     const taskDate = dateInput.value;

//     if (taskName === "" || taskDate === "") {
//       alert("タスク名と期限を入力してください。");
//       return;
//     }

//     const tasks = getAllTasks();
//     const newTask = {
//       id: tasks.length + 1,
//       name: taskName,
//       date: taskDate,
//       status: "作業中",
//     };

//     tasks.push(newTask);
//     saveTasks(tasks);
//     addTaskToTable(newTask);

//     taskInput.value = "";
//     dateInput.value = "";
//   });

//   function updateTaskStatus(id, status) {
//     const tasks = getAllTasks();
//     const task = tasks.find((task) => task.id === id);
//     if (task) {
//       task.status = status;
//       saveTasks(tasks);
//     }
//   }

//   function markTaskAsDeleted(id) {
//     const tasks = getAllTasks();
//     const task = tasks.find((task) => task.id === id);
//     if (task) {
//       task.status = "削除";
//       saveTasks(tasks);
//     }
//   }

//   function getAllTasks() {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
//   }

//   function saveTasks(tasks) {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }

//   loadTasks();
// });

// 関数の宣言
/**
 * function 関数名(引数1, 引数2, ...:入力) {
 *  処理
 * return 戻り値: 出力
 * }
//  */
// // 有名関数
// function hello(piyo) {
//   // console.log(piyo);
//   return "Hello World!" + piyo;
// }

// // console.log("hello", hello("fuga"));

// // 無名関数
// const hello2 = function () {
//   return "Hello World!";
// };

// // アロー関数
// // ES6から追加された関数の書き方
// // functionを省略して() => {}で書く
// const sum = (number, number2, number3 = 5) => {
//   // console.log("number:", number);
//   // console.log("number2:", number2);
//   // console.log("number3:", number3);
//   return number + number2 + number3;
// };
// // console.log("合計", sum(5, 10));
