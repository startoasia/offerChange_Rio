function time(show, fut) {
    var now = new Date();
    let showup = show;
    let future = fut;

    var timeLeft = future - now;
    var milli = timeLeft;
    var mills = now.getMilliseconds();
    var seconds = milli / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;

    var spareMills = milli.toString().charAt(milli.toString().length - 3);
    var spareSeconds = seconds % 60;
    var spareMinutes = minutes % 60;
    var spareHours = hours % 24;
    var spareDays = days % 365;

    minutes = parseInt(minutes);
    hours = parseInt(hours);
    days = parseInt(days);
    spareSeconds = parseInt(spareSeconds);
    spareMinutes = parseInt(spareMinutes);
    spareHours = parseInt(spareHours);
    spareDays = parseInt(spareDays);

    days = padNumber(days);
    hours = padNumber(hours);
    minutes = padNumber(minutes);
    spareSeconds = padNumber(spareSeconds);
    spareMinutes = padNumber(spareMinutes);
    spareHours = padNumber(spareHours);
    spareDays = padNumber(spareDays);

    let changeTitle = new Date("7/5/2024 00:00:00");
    if(now<=changeTitle){

        timeLeft = ` 完美底妝組合 買四送二好評延長！<br>倒數：${spareDays}天${spareHours}時${spareMinutes}分${spareSeconds}秒.${spareMills}`;
    }else{
        timeLeft = ` 買四送二大爆賣！最後延長！<br>倒數：${spareDays}天${spareHours}時${spareMinutes}分${spareSeconds}秒.${spareMills}`;
        
    }
    var mySpan = document.getElementById("timer");

    mySpan.innerHTML = timeLeft;
    mySpan.style.display = "none";

    if (milli <= 0) {
        //Time's run out! If all values go to zero
        mySpan.innerHTML = "倒數:00天00時00秒";
    }
    if (now - showup >= 0) {
        mySpan.style.display = "inline-block";
        // if (future - now <= 0) {
        //     mySpan.style.display = 'none';
        // }
    }
}

function padNumber(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

let clockGO = setInterval(function () {
    let now = new Date();

    // 倒數計時出現
    let show = new Date("6/24/2024 00:00:00");

    // 第一次活動截止時間
    let fut = new Date("7/4/2024 23:59:59");

    // 第二次活動截止時間
    let fut2 = new Date("7/7/2024 23:59:59");

    // 在未到【出現時間】 或 超過【第二段倒數】 就會不顯示
    let clockControl = document.querySelector('.clock-container')
    if (now > fut2 || now < show) {
        clearInterval(clockGO)
        clockControl.style.display = "none"
        // console.log('該消失了')
    } else {
          clockControl.style.display = "block"
        // console.log('出現並倒數到第一段')
        time(show, fut);
        if (now - fut >= 0) {
            // console.log("第一段到第二段倒數")
            time(fut, fut2);
        }
    }
}, 1);