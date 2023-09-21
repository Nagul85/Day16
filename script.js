function countdown(number, callback) {
    if (number === 0) {
        callback();
    } else {
        document.getElementById('countdown').innerHTML = number;
        setTimeout(function () {
            countdown(number - 1, callback);
        }, 1000);
    }
}

countdown(10, function () {
    document.getElementById('countdown').innerHTML = "Happy Independence Day";
});