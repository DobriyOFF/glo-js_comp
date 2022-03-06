const weekRu = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const weekendStyle = "font-style: italic";
const nowStyle = "font-weight: bold";
const nowDay = new Date().getDay();

for (weekDay in weekRu) {
    console.log(`%c ${weekRu[weekDay]}`)
    if (nowDay === weekRu) {
        nowStyle: weekDay == 0
    };
}