var topic = [
    "環球影城",
    "迪士尼",
    "艾菲爾鐵塔",
    "自由女神",
    "萬里長城"];

let startDate = new Date(); //抓時間

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}


setMonthAndDay(6,18);