var arrOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var addNumber = function (button) {
    document.getElementById("out").value += button.value;
    shuffle(arrOfNumbers);
    renderOfButtons();
}
var renderOfButtons = function () {
    for (var index = 0; index < 10; index++) {
        let id = "btn" + index;
        document.getElementById(id).value = arrOfNumbers[index];
    }
}
var shuffle = function (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}
var deleteLastNumber = function () {
    let outString = document.getElementById('out').value;
    document.getElementById('out').value = outString.substring(0, outString.length - 1);
}
var showAllertWithPass = function () {
    alert(document.getElementById('out').value);
}
var clearAllNumbers=function(){
    document.getElementById('out').value = '';
}