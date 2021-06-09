var translatebtn = document.querySelector("#translatebtn");
var tryagainbtn = document.querySelector("#tryagainbtn");
var inputTxt = document.querySelector("#inputTxt");
var outputTxt = document.querySelector("#outputTxt");

var clickHandler = () => {
    var url = "https://api.funtranslations.com/translate/yoda.json" + "?text=" + inputTxt.value;
    axios.get(url)
    .then(res => {
        var translatedTxt = res.data.contents.translated;
        outputTxt.innerText = translatedTxt;
    })
    .catch(() => {
        alert("Something went wrong!!!");
    })
}

translatebtn.addEventListener("click",clickHandler);
tryagainbtn.addEventListener("click",() => {
    inputTxt.value = "";
    outputTxt.innerText = "";
})