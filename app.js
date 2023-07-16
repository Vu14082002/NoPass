var myArray0 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var myArray1 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
var myArray2 = ["z", "x", "c", "v", "b", "n", "m"];
const heightRoot = document.documentElement.clientHeight;
console.log("root", heightRoot);

function convertToChars(input, checkId) {
  var checkInt = parseInt(checkId);
  var result = "";

  for (var i = 0; i < input.length; i++) {
    var char = input[i].toLowerCase();
    var index;

    if (myArray0.includes(char)) {
      index = myArray0.indexOf(char);
      result +=
        myArray0[index + checkInt] ||
        myArray0[index + checkInt - myArray0.length];
    } else if (myArray1.includes(char)) {
      index = myArray1.indexOf(char);
      result +=
        myArray1[index + checkInt] ||
        myArray1[index + checkInt - myArray1.length];
    } else if (myArray2.includes(char)) {
      index = myArray2.indexOf(char);
      result +=
        myArray2[index + checkInt] ||
        myArray2[index + checkInt - myArray2.length];
    } else {
      result += char;
    }
  }

  return result.charAt(0).toUpperCase() + result.slice(1);
}

const encode = function () {
  var input = document.getElementById("exampleInputEmail1").value;
  var checkId = document.getElementById("check_Id").value;
  if (!input || !checkId) {
    return false;
  }
  var convertedInput = convertToChars(input, checkId);
  document.getElementById("result").value = convertedInput;
  return true;
};
const copy = function () {
  var resultInput = document.getElementById("result");
  if (!resultInput.value) {
    return false;
  }
  resultInput.select();
  resultInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Đã sao chép thành công!");
};

document.getElementById("submitId").onclick = encode;

document.getElementById("copyButton").onclick = copy;
document.addEventListener("keydown", function (event) {
  if (event.key === "F12" || event.keyCode === 123) {
    event.preventDefault();
  }
});
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
