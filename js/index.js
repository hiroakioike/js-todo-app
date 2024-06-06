/**
 * del idは6桁のランダムな文字列を生成する
 * Math.random()で0以上1未満のランダムな数値を生成
 * toString(32)で32進数に変換
 * substring(2, 8)で3文字目から8文字目までの文字列を取得 => 6桁のランダムな文字列
 * @returns {string} ランダムな文字列
 * 一般的にはuuid使う
 */
const randomString = () => Math.random().toString(32).substring(2, 8);

const todoList = [
  {
    id: randomString(), // IDを数字ではなく6桁のランダムな文字列にする
    taskName: "JavaScriptの基礎",
    limit: "2024-01-01",
    status: "作業中",
  },
  {
    id: randomString(),
    taskName: "非同期処理",
    limit: "2024-12-31",
    status: "作業中",
  },
  {
    id: randomString(),
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
  todoList.forEach((todo, index) => {
    // 他の書き方
    // todoList.map((todo) => {
    // for (const todo of todoList) {
    // for (let i = 0; i < todoList.length; i++) {
    //   const todo = todoList[i];""

    // 2-2. <tr>要素を生成
    const trElement = document.createElement("tr");

    // 2-3. <tr>要素の中に配置する<td>要素を生成
    const idElement = document.createElement("td");
    const taskNameElement = document.createElement("td");
    const limitElement = document.createElement("td");
    const statusElement = document.createElement("td");
    const statusButton = document.createElement("button");

    // 2-4. <td>要素の中にtodoListのｎ番目のデータを表示する
    idElement.textContent = index + 1;
    taskNameElement.textContent = todo.taskName;
    limitElement.textContent = todo.limit;
    statusButton.textContent = todo.status;

    // 2-5. <tr>要素の中に<td>要素を追加
    trElement.appendChild(idElement);
    trElement.appendChild(taskNameElement);
    trElement.appendChild(limitElement);
    trElement.appendChild(statusElement);
    statusElement.appendChild(statusButton);
    // comp-1.作業中のボタンを作成する
    // comp-2.作業中ボタンを押すと完了のデータが出せるようにする
    // comp-3.ボタンの表示を完了に切り替えられる
    // comp-4.完了ボタンから作業中ボタンにも表示とデータを切り替えられるようにする
    statusButton.addEventListener("click", () => {
      // if文での書き方
      // if (todo.status === "作業中") {
      //   todo.status = "完了";
      // } else {
      //   todo.status = "作業中";
      // }

      // 三項演算子
      // 条件式 ? true : false
      todo.status = todo.status === "作業中" ? "完了" : "作業中";

      displayTodoList();
      console.log(todoList);
    });

    // del-1.削除ボタンを表示する
    const deleteElement = document.createElement("td");
    const deleteBtnElement = document.createElement("button");
    deleteBtnElement.textContent = "✕";
    trElement.appendChild(deleteElement);
    deleteElement.appendChild(deleteBtnElement);

    // del-2.ボタンを押したIDのコンソールログが表示される
    deleteBtnElement.addEventListener("click", () => {
      // del-3.IDと一致するタスクをデータ上で削除できる
      const target = todoList.findIndex((item) => {
        return item.id === todo.id;
      });
      todoList.splice(target, 1);
      displayTodoList();
    });

    // 3. 1で取得した場所に2で生成したDOM要素を追加する
    todoListElement.appendChild(trElement);
  });
};

displayTodoList();

// 1.追加ボタン押したらconsole吐き出す
// 2.追加ボタン押したら配列にデータ追加（コンソールでわかればOK）
// 3.追加ボタン押したら配列にデータ追加してHTMLに表示
// 4.追加ボタン押したら入力フォームに入力された文字列がコンソールに表示
// 5.タスク名でHTMLに表示される
const addBtn = document.getElementById("btn-add");
addBtn.addEventListener("click", () => {
  const taskNameElement = document.getElementById("taskName");
  const taskDateElement = document.getElementById("taskDate");

  todoList.push({
    id: randomString(),
    taskName: taskNameElement.value,
    limit: taskDateElement.value,
    status: "作業中",
  });

  displayTodoList();
});
