let display_expression = [];
let cal_expression = [];
let result = 0;
document.getElementById("CE").onclick = function() {
    display_expression = [];
    cal_expression = [];
    document.getElementById("display").innerHTML = "";
}

document.getElementById("root").onclick = function() {
    display_expression.push("√(");
    cal_expression.push("Math.sqrt(");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("percent").onclick = function() {
    display_expression.push("%");
    cal_expression.push("%");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("div").onclick = function() {
    display_expression.push("/");
    cal_expression.push("/");
    document.getElementById("display").innerHTML = display_expression.join("");
}
document.getElementById(")").onclick = function() {
    display_expression.push(")");
    cal_expression.push(")");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("(").onclick = function() {
    display_expression.push("(");
    cal_expression.push("(");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("7").onclick = function() {
    display_expression.push("7");
    cal_expression.push("7");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("8").onclick = function() {
    display_expression.push("8");
    cal_expression.push("8");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("9").onclick = function() {
    display_expression.push("9");
    cal_expression.push("9");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("into").onclick = function() {
    display_expression.push("x");
    cal_expression.push("*");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("4").onclick = function() {
    display_expression.push("4");
    cal_expression.push("4");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("5").onclick = function() {
    display_expression.push("5");
    cal_expression.push("5");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("6").onclick = function() {
    display_expression.push("6");
    cal_expression.push("6");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("minus").onclick = function() {
    display_expression.push("-");
    cal_expression.push("-");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("1").onclick = function() {
    display_expression.push("1");
    cal_expression.push("1");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("2").onclick = function() {
    display_expression.push("2");
    cal_expression.push("2");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("3").onclick = function() {
    display_expression.push("3");
    cal_expression.push("3");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("del").onclick = function() {
    display_expression.pop();
    cal_expression.pop();
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("equalto").onclick = function() {
    try {
        if(cal_expression.length>0){
            result = eval(cal_expression.join("")).toString();
            document.getElementById("display").innerHTML = result;
        }
        else{
            document.getElementById("display").innerHTML = result;
        }
        
    } catch (e) {
        document.getElementById("display").innerHTML = "Invalid Syantax";

    }
    display_expression = [];
    cal_expression = [];
}

document.getElementById("0").onclick = function() {
    display_expression.push("0");
    cal_expression.push("0");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("zeros").onclick = function() {
    display_expression.push("00");
    cal_expression.push("00");
    document.getElementById("display").innerHTML = display_expression.join("");
}
document.getElementById("dot").onclick = function() {
    display_expression.push(".");
    cal_expression.push(".");
    document.getElementById("display").innerHTML = display_expression.join("");
}

document.getElementById("plus").onclick = function() {
    display_expression.push("+");
    cal_expression.push("+");
    document.getElementById("display").innerHTML = display_expression.join("");
}