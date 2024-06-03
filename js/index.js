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
const displayTodoList = () => {
  //   1. HTMLのどの場所に表示するかを取得する
  // tbody要素を取得
  const todoListElement = document.getElementById("todoList");

  // 表示時に一度displayの中身を消す（その後追加削除されたもの含め表示）
  while (todoListElement.firstChild) {
    todoListElement.removeChild(todoListElement.firstChild);
  }
  // // 2. 表示したいHTMLの形式に合わせてDOM要素を生成する
  // // 2-1. todoListの0,1,2番目のデータを取得
  todoList.forEach((todo) => {
    // 他の書き方
    // todoList.map((todo) => {
    // for (const todo of todoList) {
    // for (let i = 0; i < todoList.length; i++) {
    //   const todo = todoList[i];

    //   // 2-2. <tr>要素を生成
    const trElement = document.createElement("tr");

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
  });
};

displayTodoList();

// 1.追加ボタン押したらconsole吐き出す
// 2.追加ボタン押したら配列にデータ追加（こんそーるでわかればおｋ
// 3.追加ボタン押したら配列にデータ追加してHTMLに表示
// 4.追加ボタン押したら入力フォームに入力された文字列がこんそーるに表示
// 5.タスク名でHTMLに表示される
const addBtn = document.getElementById("btn-add");
addBtn.addEventListener("click", () => {
  const taskNameElement = document.getElementById("taskName");
  const taskDateElement = document.getElementById("taskDate");

  todoList.push({
    id: todoList.length + 1,
    taskName: taskNameElement.value,
    limit: taskDateElement.value,
    status: "作業中",
  });

  displayTodoList();
});
