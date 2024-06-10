const ALL = "すべて";
const PROGRESS = "作業中";
const DONE = "完了";
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
    status: PROGRESS,
  },
  {
    id: randomString(),
    taskName: "非同期処理",
    limit: "2024-12-31",
    status: PROGRESS,
  },
  {
    id: randomString(),
    taskName: "スプラトゥーンやる",
    limit: "2025-01-01",
    status: PROGRESS,
  },
];

// JSファイルが読み込まれたときにtodoListをHTMLに表示する
const displayTodoList = () => {
  // ディスプレイの中でラジオボタンの状態に合わせてそれぞれ表示する
  // 更新した時のラジオボタンの状態に合わせて表示する
  const getSelectedValue = () => {
    const radioBtns = document.getElementsByName("radio");
    for (const radioBtn of radioBtns) {
      if (radioBtn.checked) {
        return radioBtn.value;
      }
    }
  };
  const selectedValue = getSelectedValue();

  // どんな状態でも作業中だけを表示したい
  // filterは指定した配列から指定した関数に合格する要素を抽出
  const filterdTodoList = todoList.filter(
    (todo) => todo.status === selectedValue
  );
  // 三項演算子にて2-1でforEachするものをすべてか否か判定
  const outputTodoList = selectedValue === ALL ? todoList : filterdTodoList;

  // 1. HTMLのどの場所に表示するかを取得する
  // tbody要素を取得
  const todoListElement = document.getElementById("todoList");

  // 表示時に一度displayの中身を消す（その後追加削除されたもの含め表示）
  while (todoListElement.firstChild) {
    todoListElement.removeChild(todoListElement.firstChild);
  }
  // 2. 表示したいHTMLの形式に合わせてDOM要素を生成する
  // 2-1. todoListの0,1,2番目のデータを取得
  // forEachは配列の各要素に一度ずつ実行
  outputTodoList.forEach((todo, index) => {
    // 他の書き方
    // todoList.map((todo) => {
    // for (const todo of todoList) {
    // for (let i = 0; i < todoList.length; i++) {
    //   const todo = todoList[i];

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
    statusButton.addEventListener("click", () => {
      // if文での書き方
      // if (todo.status === PROGRESS) {
      //   todo.status = DONE;
      // } else {
      //   todo.status = PROGRESS;
      // }

      // 三項演算子
      // 条件式 ? true : false
      todo.status = todo.status === PROGRESS ? DONE : PROGRESS;

      displayTodoList();
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

// 追加ボタン
const addTodo = () => {
  const taskNameElement = document.getElementById("taskName");
  const taskDateElement = document.getElementById("taskDate");

  // 入力が空の場合、アラートを表示して処理を中断する
  // !は論理否定演算子、真値を取ると偽地になる
  // trimは元の文字列からスペース取り除き、変更せずに新しい文字列を返す
  if (!taskNameElement.value.trim() || !taskDateElement.value.trim()) {
    alert("タスク名と期限を入力してください");
    return;
  }

  // ラジオボタンに合わせて追加したタスクも状態が変わる
  const getSelectedValue = () => {
    const radioBtns = document.getElementsByName("radio");
    for (const radioBtn of radioBtns) {
      if (radioBtn.checked) {
        return radioBtn.value;
      }
    }
  };
  const selectedValue = getSelectedValue();

  todoList.push({
    id: randomString(),
    taskName: taskNameElement.value,
    limit: taskDateElement.value,
    status: selectedValue,
  });

  taskNameElement.value = "";
  taskDateElement.value = "";

  displayTodoList();
};

const addBtn = document.getElementById("btn-add");
addBtn.addEventListener("click", addTodo);

// キーボードショートカットを設定
// metaKeyは⌘、ctrlはwindows、||はまたは
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
    addTodo();
  }
});

// ラジオボタンを切り替えた時に再度表示
// 引数１はイベント名、引数２は実行する関数
const radioBtns = document.getElementsByName("radio");
radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", displayTodoList);
});
