'use strict';

{
  const tasks =  ['掃除', '買い物', '散歩'];
  function showTask() {
    console.log('======================');
    console.log('現在持っているタスク一覧');
    console.log('======================');
    tasks.forEach((task, index) => {
      console.log(`${index} : ${task}`);
    } );
  }

  //初回の表示
  showTask();

  let name = prompt('タスクを入力してください');
  alert('新しいタスクを追加しました。');
  tasks.push(name);
  showTask();
  
  let status = prompt('「確認、追加、削除、終了」の４つのいづれかを入力してください。');

}
