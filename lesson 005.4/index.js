console.log('Lesson 001');

(() => {
    // place your code here for paragraph 5.11
    // 20 лютого 2012, 3:12 ранку

    //alert(new Date(2012, 1, 20, 3, 12))

    /*
    let getWeekDay = (date) => {
      let days = {
        1: "ПН",
        2: "ВТ",
        3: "СР",
        4: "ЧТ",
        5: "ПТ",
        6: "СБ",
        7: "НД"
      };
      return days[date.getUTCDay()];
    }

    let date = new Date(2012, 0, 4);
    alert( getWeekDay(date) );
    */


    /*
    let getDateAgo = (date, daysago) => {
      let result = new Date(date)
      result.setDate(date.getDate() - daysago)
      return result;
    };

    let date = new Date(2015, 0, 2);

    alert( getDateAgo(date, 1) ); // 1, (1 січня 2015)
    alert( getDateAgo(date, 2) ); // 31, (31 грудня 2014)
    alert( getDateAgo(date, 365) ); // 2, (2 січня 2014)
    */

    /*
    let getLastDayOfMonth = (year, month) => {
      let date = new Date(year, month + 1, 0);
      return date.getDate();
    };

    alert(getLastDayOfMonth(2012, 1))
    */
})();


(() => {
  // place your code here for codewars task
  
  /*
  function toCamelCase(str){
  if (str == "") {
    return "";
  } else {
    let all_words = str.split(/[-_]/);
    let changed_words = []
    for (let i = 1; i < all_words.length; i++) {
      new_word = all_words[i][0].toUpperCase() + all_words[i].slice(1);
      changed_words.push(new_word);
    };
    let finished_strr = all_words.splice(0, 1).concat(changed_words);
    return finished_strr.join("");
  }
}
  */

})();