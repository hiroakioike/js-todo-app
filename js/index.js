const todoList = [
  {
    id: 1,
    taskName: "JavaScriptの基礎",
    limit: "2024-01-01",
    status: "作業中",
  },
  {
    id: 2,
    taskName: "非同期処理",
    limit: "2024-12-31",
    status: "作業中",
  },
  {
    id: 3,
    taskName: "スプラトゥーンやる",
    limit: "2025-01-01",
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
  const idElement = document.createElement("td");
  const taskNameElement = document.createElement("td");
  const limitElement = document.createElement("td");
  const statusElement = document.createElement("td");

  // 2-4. <td>要素の中にtodoListの0番目のデータを表示する
  idElement.textContent = todo.id;
  taskNameElement.textContent = todo.taskName;
  limitElement.textContent = todo.limit;
  statusElement.textContent = todo.status;

  // 2-5. <tr>要素の中に<td>要素を追加
  trElement.appendChild(idElement);
  trElement.appendChild(taskNameElement);
  trElement.appendChild(limitElement);
  trElement.appendChild(statusElement);

  // 3. 1で取得した場所に2で生成したDOM要素を追加する
  todoListElement.appendChild(trElement);

  // 以下、1番目のデータ
  // 2. 表示したいHTMLの形式に合わせてDOM要素を生成する
  // 2-1. todoListの1番目のデータを取得
  const todo1 = todoList[1];
  console.log(todoList[1]);

  // 2-2. <tr>要素を生成
  const trElement1 = document.createElement("tr");
  console.log("trElement:", trElement1);

  // 2-3. <tr>要素の中に配置する<td>要素を生成
  const idElement1 = document.createElement("td");
  const taskNameElement1 = document.createElement("td");
  const limitElement1 = document.createElement("td");
  const statusElement1 = document.createElement("td");

  // 2-4. <td>要素の中にtodoListの1番目のデータを表示する
  idElement1.textContent = todo1.id;
  taskNameElement1.textContent = todo1.taskName;
  limitElement1.textContent = todo1.limit;
  statusElement1.textContent = todo1.status;

  // 2-5. <tr>要素の中に<td>要素を追加
  trElement1.appendChild(idElement1);
  trElement1.appendChild(taskNameElement1);
  trElement1.appendChild(limitElement1);
  trElement1.appendChild(statusElement1);

  // 3. 1で取得した場所に2で生成したDOM要素を追加する
  todoListElement.appendChild(trElement1);

  // 以下、2番目のデータ
  // 2. 表示したいHTMLの形式に合わせてDOM要素を生成する
  // 2-1. todoListの0番目のデータを取得
  const todo2 = todoList[2];
  console.log(todoList[2]);

  // 2-2. <tr>要素を生成
  const trElement2 = document.createElement("tr");
  console.log("trElement:", trElement2);

  // 2-3. <tr>要素の中に配置する<td>要素を生成
  const idElement2 = document.createElement("td");
  const taskNameElement2 = document.createElement("td");
  const limitElement2 = document.createElement("td");
  const statusElement2 = document.createElement("td");

  // 2-4. <td>要素の中にtodoListの0番目のデータを表示する
  idElement2.textContent = todo2.id;
  taskNameElement2.textContent = todo2.taskName;
  limitElement2.textContent = todo2.limit;
  statusElement2.textContent = todo2.status;

  // 2-5. <tr>要素の中に<td>要素を追加
  trElement2.appendChild(idElement2);
  trElement2.appendChild(taskNameElement2);
  trElement2.appendChild(limitElement2);
  trElement2.appendChild(statusElement2);

  // 3. 1で取得した場所に2で生成したDOM要素を追加する
  todoListElement.appendChild(trElement2);
};

displayTodoList();
