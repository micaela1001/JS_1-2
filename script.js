var question = prompt("日本の首都は？");
while (question !== "東京") {
  alert("不正解です！");
  prompt("日本の首都は？");
  if (question !== "東京") break;
}
alert("正解です！");
