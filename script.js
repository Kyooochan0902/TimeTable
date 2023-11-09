
const checkbox_lunch = document.getElementById("check-lunch");
let check_lunch_flag = true;
const checkbox_clean = document.getElementById("check-clean");
let check_clean_flag = true;
const checkbox_teacher = document.getElementById("check-teacher");
let check_teacher_flag = true;
const checkbox_location = document.getElementById("check-location");
let check_location_flag = true;



const lunch_time = document.getElementById("lunch-time");
const clean_time = document.getElementById("clean-time");

const weekDay = ["monday", "tuesday", "wednesday", "thursday", "friday"];



function toggleLunch() {
  let loopflag = false;
  let breakCell1 = null;
  let breakCell2 = null;
  let upConnectButton = null;
  let botConnectButoon = null;
  if (!checkbox_lunch.checked) {
    check_lunch_flag = false;
    lunch_time.classList.add("display-none");
    for(let aweek = 0; aweek < 5; aweek++){ //完成時aweek<1をaweek<5に変更
      loopflag = false;//loopflagの位置
      for(let i = 1; i <= 4; i++){
        breakCell1 = document.querySelector(`td.${weekDay[aweek]}-${i}-4`);
        if(breakCell1){
          for(let j = 5; j <= 8; j++){
            breakCell2 = document.querySelector(`td.${weekDay[aweek]}-5-${j}`);
            if(breakCell2){
              upConnectButton = document.querySelector(`#${weekDay[aweek]}-${i}-botConnect`);
              botConnectButoon = document.querySelector(`#${weekDay[aweek]}-5-upConnect`);
              if(upConnectButton){
                upConnectButton.classList.remove("display-none");
              }
              if(botConnectButoon){
                botConnectButoon.classList.remove("display-none");
              }
              loopflag = true;
              break;
            }
          }
        }
        if(loopflag){
          break;
        }
      }
    }
  } else {
    check_lunch_flag = true;
    lunch_time.classList.remove("display-none");
    for(let aweek = 0; aweek < 5; aweek++){//完成時aweek<1をaweek<5に変更
      loopflag = false;//loopflagの位置
      for(let i = 1; i <= 4; i++){
        for(let j = 5; j <= 8; j++){
          breakCell1 = document.querySelector(`td.${weekDay[aweek]}-${i}-${j}`);
          if(breakCell1){
            breakCell1.classList.remove(`${weekDay[aweek]}-${i}-${j}`);
            breakCell1.rowSpan = (5 - i);
            breakCell1.classList.add(`${weekDay[aweek]}-${i}-4`);
            breakCell2 = document.querySelector(`td.${weekDay[aweek]}-5`);
            breakCell2.classList.add(`${weekDay[aweek]}-5-${j}`);
            breakCell2.rowSpan = (j - 4);
            breakCell2.classList.remove("display-none");
            upConnectButton = document.querySelector(`#${weekDay[aweek]}-${i}-botConnect`);
            botConnectButoon = document.querySelector(`#${weekDay[aweek]}-5-upConnect`);
            upConnectButton.classList.add("display-none");
            botConnectButoon.classList.add("display-none");
            loopflag = true;
            break;
          }
        }
        if(loopflag){
          break;
        }
      }
      if(!loopflag){
        for(let k = 1; k <= 4; k++){
          breakCell1 = document.querySelector(`td.${weekDay[aweek]}-${k}-4`);
          if(breakCell1){
            upConnectButton = document.querySelector(`#${weekDay[aweek]}-${k}-botConnect`);
            botConnectButoon = document.querySelector(`#${weekDay[aweek]}-5-upConnect`);
            upConnectButton.classList.add("display-none");
            botConnectButoon.classList.add("display-none");
            loopflag = true;
            break;
          }
        }
      }
    }
  }
}

checkbox_lunch.addEventListener("change", toggleLunch);

function toggleClean() {
  let loopflag = false;
  let breakCell1 = null;
  let breakCell2 = null;
  let upConnectButton = null;
  let botConnectButoon = null;
  if (!checkbox_clean.checked) {
    check_clean_flag = false;
    clean_time.classList.add("display-none");
    for(let aweek = 0; aweek < 5; aweek++){ //完成時aweek<1をaweek<5に変更
      loopflag = false;//loopflagの位置
      for(let i = 1; i <= 6; i++){
        breakCell1 = document.querySelector(`td.${weekDay[aweek]}-${i}-6`);
        if(breakCell1){
          for(let j = 7; j <= 8; j++){
            breakCell2 = document.querySelector(`td.${weekDay[aweek]}-7-${j}`);
            if(breakCell2){
              upConnectButton = document.querySelector(`#${weekDay[aweek]}-${i}-botConnect`);
              botConnectButoon = document.querySelector(`#${weekDay[aweek]}-7-upConnect`);
              upConnectButton.classList.remove("display-none");
              botConnectButoon.classList.remove("display-none");
              loopflag = true;
              break;
            }
          }
        }
        if(loopflag){
          break;
        }
      }
    }
  } else {
    check_clean_flag = true;
    clean_time.classList.remove("display-none");
    for(let aweek = 0; aweek < 5; aweek++){ //完成時aweek<1をaweek<5に変更
      loopflag = false;//loopflagの位置
      for(let i = 1; i <= 6; i++){
        for(let j = 7; j <= 8; j++){
          breakCell1 = document.querySelector(`td.${weekDay[aweek]}-${i}-${j}`);
          if(breakCell1){
            breakCell1.classList.remove(`${weekDay[aweek]}-${i}-${j}`);
            breakCell1.rowSpan = (7 - i);
            breakCell1.classList.add(`${weekDay[aweek]}-${i}-6`);
            breakCell2 = document.querySelector(`td.${weekDay[aweek]}-7`);
            breakCell2.classList.add(`${weekDay[aweek]}-7-${j}`);
            breakCell2.rowSpan = (j - 6);
            breakCell2.classList.remove("display-none");
            upConnectButton = document.querySelector(`#${weekDay[aweek]}-${i}-botConnect`);
            botConnectButoon = document.querySelector(`#${weekDay[aweek]}-7-upConnect`);
            upConnectButton.classList.add("display-none");
            botConnectButoon.classList.add("display-none");
            loopflag = true;
            break;
          }
        }
        if(loopflag){
          break;
        }
      }
      if(!loopflag){
        for(let k = 1; k <= 6; k++){
          breakCell1 = document.querySelector(`td.${weekDay[aweek]}-${k}-6`);
          if(breakCell1){
            upConnectButton = document.querySelector(`#${weekDay[aweek]}-${k}-botConnect`);
            botConnectButoon = document.querySelector(`#${weekDay[aweek]}-7-upConnect`);
            upConnectButton.classList.add("display-none");
            botConnectButoon.classList.add("display-none");
            loopflag = true;
            break;
          }
        }
      }
    }
  }
}

checkbox_clean.addEventListener("change", toggleClean);

function toggleTeacher() {
  let teachers = document.querySelectorAll("input.teacher-name");
  if (checkbox_teacher.checked) {
    check_teacher_flag = false;
    for ( let i = 0; i < teachers.length; i++){
      teachers[i].classList.remove("display-none");
    }
  } else {
    check_teacher_flag = false;
    for ( let i = 0; i < teachers.length; i++){
      teachers[i].classList.add("display-none");
    }
  }
}

checkbox_teacher.addEventListener("change", toggleTeacher);

function toggleLocation () {
  let locations = document.querySelectorAll("input.location-name");
  if (checkbox_location.checked) {
    check_location_flag = false;
    for ( let i = 0; i < locations.length; i++){
      locations[i].classList.remove("display-none");
    }
  } else {
    check_location_flag = true;
    for ( let i = 0; i < locations.length; i++){
      locations[i].classList.add("display-none");
    }
  }
}

checkbox_location.addEventListener("change", toggleLocation);

/*上と結合ボタン*/
function upConnectButton(cellNumber, day) {
  let connectCell1 = null;
  let connectCell2 = null;
  let botConnect = null;
  let upConnect = null;
  let cellBreakButton = null;
  for(let i = (cellNumber - 1); i >= 1; i--){
    let loopflag = false;
    connectCell1 = document.querySelector(`td.${day}-${i}-${cellNumber - 1}`);
    if(connectCell1){
      cellBreakButton = document.querySelector(`#${day}-${i}-break`);
      for(let j = cellNumber; j <= 8; j++){
        connectCell2 = document.querySelector(`td.${day}-${cellNumber}-${j}`);
        if(connectCell2){
          connectCell1.rowSpan += connectCell2.rowSpan;
          connectCell1.classList.remove(`${day}-${i}-${cellNumber - 1}`);
          connectCell2.classList.remove(`${day}-${cellNumber}-${j}`);
          connectCell1.classList.add(`${day}-${i}-${j}`);
          botConnect = document.querySelector(`#${day}-${i}-botConnect`);
          upConnect = document.querySelector(`#${day}-${i}-upConnect`);
          if(botConnect){
            if((j == 4 && check_lunch_flag)||(j == 6 && check_clean_flag)||j == 8){
              botConnect.classList.add("display-none");
            }else{
              botConnect.classList.remove("display-none");
            }
          }
          if(upConnect){
            if((i == 5 && check_lunch_flag)||(i == 7 && check_clean_flag)){
              upConnect.classList.add("display-none");
            }else{
              upConnect.classList.remove("display-none");
            }
          }
          for(let k = cellNumber; k <= j; k++){
            pointCell = document.querySelector(`td.${day}-${k}`);
            if(pointCell){
              pointCell.rowSpan = 1;
              pointCell.classList.add("display-none");
            }
          }
          cellBreakButton.classList.remove("display-none");
          loopflag = true;
          break;
        }
      }
    }
    if(loopflag){
      break;
    }
  }
}


/*下と結合ボタン*/
function bottomConnectButton(cellNumber, day) {
  let connectCell1 = null;
  let connectCell2 = null;
  let botConnect = null;
  let upConnect = null;
  let cellBreakButton = null;
  for(let i = cellNumber; i <= 8; i++){
    let loopflag = false;
    connectCell1 = document.querySelector(`td.${day}-${cellNumber}-${i}`);
    if(connectCell1){
      cellBreakButton = document.querySelector(`#${day}-${cellNumber}-break`);
      for(let j = (i + 1); j <= 8; j++){
        connectCell2 = document.querySelector("td." + day + "-" + (i + 1) + "-" + j);
        if(connectCell2){
          connectCell1.rowSpan += connectCell2.rowSpan;
          connectCell1.classList.remove(day + "-" + cellNumber + "-" + i);
          connectCell1.classList.add(day + "-" + cellNumber + "-" + j);
          connectCell2.classList.remove(day + "-" + (i + 1) + "-" + j);
          botConnect = document.querySelector("#" + day + "-" + cellNumber + "-botConnect");
          upConnect = document.querySelector("#" + day + "-" + cellNumber + "-upConnect");
          if(botConnect){
            if((j == 4 && check_lunch_flag)||(j == 6 && check_clean_flag)||j == 8){
              botConnect.classList.add("display-none");
            }else{
              botConnect.classList.remove("display-none");
            }
          }
          if(upConnect){
            if((cellNumber == 5 && check_lunch_flag)||(cellNumber == 7 && check_clean_flag)){
              upConnect.classList.add("display-none");
            }else{
              upConnect.classList.remove("display-none");
            }
          }
          for(let k = (i + 1); k <= j; k++){
            pointCell = document.querySelector("td." + day + "-" + k);
            
            if(pointCell){
              pointCell.rowSpan = 1;
              pointCell.classList.add("display-none");
            }
          }
          cellBreakButton.classList.remove("display-none");
          loopflag = true;
          break;
        }
      }
    }
    if(loopflag){
      break;
    }
  }
}




/*セル分割ボタン*/
function cellBreak(cellNumber, day) {
  let breakCell = null;
  let displayCell = null;
  let botConnect1 = null;
  let botConnect2 = null;
  let upConnect1 = null;
  let upConnect2 = null;
  for (let i = cellNumber; i <= 8; i++){
    breakCell = document.querySelector("td." + day + "-" + cellNumber + "-" + i);
    if(breakCell){
      let breakSpan = breakCell.rowSpan;
      let upSpan = parseInt(breakSpan / 2);
      let botSpan = breakSpan - upSpan;
      displayCell = document.querySelector("td." + day + "-" + (upSpan + cellNumber));//3がkeynumber
      breakCell.rowSpan = upSpan;
      displayCell.rowSpan = botSpan;
      breakCell.classList.remove(day + "-" + cellNumber + "-" + i);
      breakCell.classList.add(day + "-" + cellNumber + "-" + (upSpan + cellNumber - 1));//3がkeynumber
      displayCell.classList.add(day + "-" + (upSpan + cellNumber) + "-" + i); //3がkeynumber
      displayCell.classList.remove("display-none");
      breakUpButton = document.querySelector("#" + day + "-" + cellNumber +"-break");
      breakBotButton = document.querySelector("#" + day +"-" + (upSpan + cellNumber) + "-break");
      upConnect1 = document.querySelector("#" + day + "-" + cellNumber + "-upConnect");//分解された上の"上と結合"
      upConnect2 = document.querySelector("#" + day + "-" + (upSpan + cellNumber) + "-upConnect");//分解された下の"上と結合"
      botConnect1 = document.querySelector("#" + day + "-" + (upSpan + cellNumber) + "-botConnect");//分解された下の"下と結合"
      botConnect2 = document.querySelector("#" + day + "-" + cellNumber + "-botConnect");//分解された上の"下と結合"
      if(upSpan == 1 && breakUpButton){
        breakUpButton.classList.add("display-none");
      }
      if(upSpan != 1 && breakUpButton){
        breakUpButton.classList.remove("display-none");
      }
      if(botSpan == 1 && breakBotButton){
        breakBotButton.classList.add("display-none");
      }
      if(botSpan != 1 && breakBotButton){
        breakBotButton.classList.remove("display-none");
      }
      if((cellNumber == 1 || (cellNumber == 5 && check_lunch_flag) || (cellNumber == 7 && check_clean_flag)) && upConnect1){
        upConnect1.classList.add("display-none");
      }else if(upConnect1){
        upConnect1.classList.remove("display-none");
      }
      if(((i == 4 && check_lunch_flag) || (i == 6 && check_clean_flag)|| i == 8) && botConnect1){
        botConnect1.classList.add("display-none");
      } else if(botConnect1){
        botConnect1.classList.remove("display-none");
      }
      upConnect2.classList.remove("display-none");
      botConnect2.classList.remove("display-none");
      break;
    }
  }
}

/*pngファイルとしてエクスポートする関数*/
// document.getElementById("exportButton").addEventListener("click", function() {
//   html2canvas(document.querySelector("table")).then(canvas => {
//     const dataURL = canvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.href = dataURL;
//     link.download = "table.png";
//     link.click();
//   });
// });

document.getElementById("exportButton").addEventListener("click", function() {
  // すべての button 要素を非表示にする前のスタイルを保存
  const originalButtonStyles = Array.from(document.querySelectorAll('button')).map(button => button.style.display);

  // すべての button 要素を非表示にする
  document.querySelectorAll('button').forEach(button => {
    button.style.display = 'none';
  });
  document.querySelector('div.checkbox-zone').style.display = 'none';
  

  // HTML 要素をキャプチャ
  html2canvas(document.querySelector("div.main-contents")).then(canvas => {
    // キャプチャ後にすべての button 要素を元に戻す
    document.querySelectorAll('button').forEach((button, index) => {
      button.style.display = originalButtonStyles[index];
    });
    document.querySelector('div.checkbox-zone').style.display = '';

    // キャプチャした画像を処理
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "table.png";
    link.click();
  });
});


/*上と結合ボタンの呼び出し*/
/*上と結合：月曜日*/
document.getElementById("monday-2-upConnect").addEventListener("click", function(){
  upConnectButton(2, "monday")
});
document.getElementById("monday-3-upConnect").addEventListener("click", function(){
  upConnectButton(3, "monday")
});
document.getElementById("monday-4-upConnect").addEventListener("click", function(){
  upConnectButton(4, "monday")
});
document.getElementById("monday-5-upConnect").addEventListener("click", function(){
  upConnectButton(5, "monday")
});
document.getElementById("monday-6-upConnect").addEventListener("click", function(){
  upConnectButton(6, "monday")
});
document.getElementById("monday-7-upConnect").addEventListener("click", function(){
  upConnectButton(7, "monday")
});
document.getElementById("monday-8-upConnect").addEventListener("click", function(){
  upConnectButton(8, "monday")
});

/*上と結合：火曜日*/
document.getElementById("tuesday-2-upConnect").addEventListener("click", function(){
  upConnectButton(2, "tuesday")
});
document.getElementById("tuesday-3-upConnect").addEventListener("click", function(){
  upConnectButton(3, "tuesday")
});
document.getElementById("tuesday-4-upConnect").addEventListener("click", function(){
  upConnectButton(4, "tuesday")
});
document.getElementById("tuesday-5-upConnect").addEventListener("click", function(){
  upConnectButton(5, "tuesday")
});
document.getElementById("tuesday-6-upConnect").addEventListener("click", function(){
  upConnectButton(6, "tuesday")
});
document.getElementById("tuesday-7-upConnect").addEventListener("click", function(){
  upConnectButton(7, "tuesday")
});
document.getElementById("tuesday-8-upConnect").addEventListener("click", function(){
  upConnectButton(8, "tuesday")
});

/*上と結合：水曜日*/
document.getElementById("wednesday-2-upConnect").addEventListener("click", function(){
  upConnectButton(2, "wednesday")
});
document.getElementById("wednesday-3-upConnect").addEventListener("click", function(){
  upConnectButton(3, "wednesday")
});
document.getElementById("wednesday-4-upConnect").addEventListener("click", function(){
  upConnectButton(4, "wednesday")
});
document.getElementById("wednesday-5-upConnect").addEventListener("click", function(){
  upConnectButton(5, "wednesday")
});
document.getElementById("wednesday-6-upConnect").addEventListener("click", function(){
  upConnectButton(6, "wednesday")
});
document.getElementById("wednesday-7-upConnect").addEventListener("click", function(){
  upConnectButton(7, "wednesday")
});
document.getElementById("wednesday-8-upConnect").addEventListener("click", function(){
  upConnectButton(8, "wednesday")
});

/*上と結合：木曜日*/
document.getElementById("thursday-2-upConnect").addEventListener("click", function(){
  upConnectButton(2, "thursday")
});
document.getElementById("thursday-3-upConnect").addEventListener("click", function(){
  upConnectButton(3, "thursday")
});
document.getElementById("thursday-4-upConnect").addEventListener("click", function(){
  upConnectButton(4, "thursday")
});
document.getElementById("thursday-5-upConnect").addEventListener("click", function(){
  upConnectButton(5, "thursday")
});
document.getElementById("thursday-6-upConnect").addEventListener("click", function(){
  upConnectButton(6, "thursday")
});
document.getElementById("thursday-7-upConnect").addEventListener("click", function(){
  upConnectButton(7, "thursday")
});
document.getElementById("thursday-8-upConnect").addEventListener("click", function(){
  upConnectButton(8, "thursday")
});

/*上と結合：金曜日*/
document.getElementById("friday-2-upConnect").addEventListener("click", function(){
  upConnectButton(2, "friday")
});
document.getElementById("friday-3-upConnect").addEventListener("click", function(){
  upConnectButton(3, "friday")
});
document.getElementById("friday-4-upConnect").addEventListener("click", function(){
  upConnectButton(4, "friday")
});
document.getElementById("friday-5-upConnect").addEventListener("click", function(){
  upConnectButton(5, "friday")
});
document.getElementById("friday-6-upConnect").addEventListener("click", function(){
  upConnectButton(6, "friday")
});
document.getElementById("friday-7-upConnect").addEventListener("click", function(){
  upConnectButton(7, "friday")
});
document.getElementById("friday-8-upConnect").addEventListener("click", function(){
  upConnectButton(8, "friday")
});


/*下と結合ボタンの呼び出し*/
/*下と結合：月曜日*/
document.getElementById("monday-1-botConnect").addEventListener("click", function(){
  bottomConnectButton(1, "monday")
});
document.getElementById("monday-2-botConnect").addEventListener("click", function(){
  bottomConnectButton(2, "monday")
});
document.getElementById("monday-3-botConnect").addEventListener("click", function(){
  bottomConnectButton(3, "monday")
});
document.getElementById("monday-4-botConnect").addEventListener("click", function(){
  bottomConnectButton(4, "monday")
});
document.getElementById("monday-5-botConnect").addEventListener("click", function(){
  bottomConnectButton(5, "monday")
});
document.getElementById("monday-6-botConnect").addEventListener("click", function(){
  bottomConnectButton(6, "monday")
});
document.getElementById("monday-7-botConnect").addEventListener("click", function(){
  bottomConnectButton(7, "monday")
});

/*下と結合：火曜日*/
document.getElementById("tuesday-1-botConnect").addEventListener("click", function(){
  bottomConnectButton(1, "tuesday")
});
document.getElementById("tuesday-2-botConnect").addEventListener("click", function(){
  bottomConnectButton(2, "tuesday")
});
document.getElementById("tuesday-3-botConnect").addEventListener("click", function(){
  bottomConnectButton(3, "tuesday")
});
document.getElementById("tuesday-4-botConnect").addEventListener("click", function(){
  bottomConnectButton(4, "tuesday")
});
document.getElementById("tuesday-5-botConnect").addEventListener("click", function(){
  bottomConnectButton(5, "tuesday")
});
document.getElementById("tuesday-6-botConnect").addEventListener("click", function(){
  bottomConnectButton(6, "tuesday")
});
document.getElementById("tuesday-7-botConnect").addEventListener("click", function(){
  bottomConnectButton(7, "tuesday")
});

/*下と結合：水曜日*/
document.getElementById("wednesday-1-botConnect").addEventListener("click", function(){
  bottomConnectButton(1, "wednesday")
});
document.getElementById("wednesday-2-botConnect").addEventListener("click", function(){
  bottomConnectButton(2, "wednesday")
});
document.getElementById("wednesday-3-botConnect").addEventListener("click", function(){
  bottomConnectButton(3, "wednesday")
});
document.getElementById("wednesday-4-botConnect").addEventListener("click", function(){
  bottomConnectButton(4, "wednesday")
});
document.getElementById("wednesday-5-botConnect").addEventListener("click", function(){
  bottomConnectButton(5, "wednesday")
});
document.getElementById("wednesday-6-botConnect").addEventListener("click", function(){
  bottomConnectButton(6, "wednesday")
});
document.getElementById("wednesday-7-botConnect").addEventListener("click", function(){
  bottomConnectButton(7, "wednesday")
});

/*下と結合：木曜日*/
document.getElementById("thursday-1-botConnect").addEventListener("click", function(){
  bottomConnectButton(1, "thursday")
});
document.getElementById("thursday-2-botConnect").addEventListener("click", function(){
  bottomConnectButton(2, "thursday")
});
document.getElementById("thursday-3-botConnect").addEventListener("click", function(){
  bottomConnectButton(3, "thursday")
});
document.getElementById("thursday-4-botConnect").addEventListener("click", function(){
  bottomConnectButton(4, "thursday")
});
document.getElementById("thursday-5-botConnect").addEventListener("click", function(){
  bottomConnectButton(5, "thursday")
});
document.getElementById("thursday-6-botConnect").addEventListener("click", function(){
  bottomConnectButton(6, "thursday")
});
document.getElementById("thursday-7-botConnect").addEventListener("click", function(){
  bottomConnectButton(7, "thursday")
});

/*下と結合：金曜日*/
document.getElementById("friday-1-botConnect").addEventListener("click", function(){
  bottomConnectButton(1, "friday")
});
document.getElementById("friday-2-botConnect").addEventListener("click", function(){
  bottomConnectButton(2, "friday")
});
document.getElementById("friday-3-botConnect").addEventListener("click", function(){
  bottomConnectButton(3, "friday")
});
document.getElementById("friday-4-botConnect").addEventListener("click", function(){
  bottomConnectButton(4, "friday")
});
document.getElementById("friday-5-botConnect").addEventListener("click", function(){
  bottomConnectButton(5, "friday")
});
document.getElementById("friday-6-botConnect").addEventListener("click", function(){
  bottomConnectButton(6, "friday")
});
document.getElementById("friday-7-botConnect").addEventListener("click", function(){
  bottomConnectButton(7, "friday")
});


/*セル分割ボタンの呼び出し*/
/*セル分割：月曜日*/
document.getElementById("monday-1-break").addEventListener("click", function() {
  cellBreak(1, "monday")
});
document.getElementById("monday-2-break").addEventListener("click", function() {
  cellBreak(2, "monday")
});
document.getElementById("monday-3-break").addEventListener("click", function() {
  cellBreak(3, "monday")
});
document.getElementById("monday-4-break").addEventListener("click", function() {
  cellBreak(4, "monday")
});
document.getElementById("monday-5-break").addEventListener("click", function() {
  cellBreak(5, "monday")
});
document.getElementById("monday-6-break").addEventListener("click", function() {
  cellBreak(6, "monday")
});
document.getElementById("monday-7-break").addEventListener("click", function() {
  cellBreak(7, "monday")
});

/*セル分割：火曜日*/
document.getElementById("tuesday-1-break").addEventListener("click", function() {
  cellBreak(1, "tuesday")
});
document.getElementById("tuesday-2-break").addEventListener("click", function() {
  cellBreak(2, "tuesday")
});
document.getElementById("tuesday-3-break").addEventListener("click", function() {
  cellBreak(3, "tuesday")
});
document.getElementById("tuesday-4-break").addEventListener("click", function() {
  cellBreak(4, "tuesday")
});
document.getElementById("tuesday-5-break").addEventListener("click", function() {
  cellBreak(5, "tuesday")
});
document.getElementById("tuesday-6-break").addEventListener("click", function() {
  cellBreak(6, "tuesday")
});
document.getElementById("tuesday-7-break").addEventListener("click", function() {
  cellBreak(7, "tuesday")
});

/*セル分割：水曜日*/
document.getElementById("wednesday-1-break").addEventListener("click", function() {
  cellBreak(1, "wednesday")
});
document.getElementById("wednesday-2-break").addEventListener("click", function() {
  cellBreak(2, "wednesday")
});
document.getElementById("wednesday-3-break").addEventListener("click", function() {
  cellBreak(3, "wednesday")
});
document.getElementById("wednesday-4-break").addEventListener("click", function() {
  cellBreak(4, "wednesday")
});
document.getElementById("wednesday-5-break").addEventListener("click", function() {
  cellBreak(5, "wednesday")
});
document.getElementById("wednesday-6-break").addEventListener("click", function() {
  cellBreak(6, "wednesday")
});
document.getElementById("wednesday-7-break").addEventListener("click", function() {
  cellBreak(7, "wednesday")
});

/*セル分割：木曜日*/
document.getElementById("thursday-1-break").addEventListener("click", function() {
  cellBreak(1, "thursday")
});
document.getElementById("thursday-2-break").addEventListener("click", function() {
  cellBreak(2, "thursday")
});
document.getElementById("thursday-3-break").addEventListener("click", function() {
  cellBreak(3, "thursday")
});
document.getElementById("thursday-4-break").addEventListener("click", function() {
  cellBreak(4, "thursday")
});
document.getElementById("thursday-5-break").addEventListener("click", function() {
  cellBreak(5, "thursday")
});
document.getElementById("thursday-6-break").addEventListener("click", function() {
  cellBreak(6, "thursday")
});
document.getElementById("thursday-7-break").addEventListener("click", function() {
  cellBreak(7, "thursday")
});

/*セル分割：金曜日*/
document.getElementById("friday-1-break").addEventListener("click", function() {
  cellBreak(1, "friday")
});
document.getElementById("friday-2-break").addEventListener("click", function() {
  cellBreak(2, "friday")
});
document.getElementById("friday-3-break").addEventListener("click", function() {
  cellBreak(3, "friday")
});
document.getElementById("friday-4-break").addEventListener("click", function() {
  cellBreak(4, "friday")
});
document.getElementById("friday-5-break").addEventListener("click", function() {
  cellBreak(5, "friday")
});
document.getElementById("friday-6-break").addEventListener("click", function() {
  cellBreak(6, "friday")
});
document.getElementById("friday-7-break").addEventListener("click", function() {
  cellBreak(7, "friday")
});