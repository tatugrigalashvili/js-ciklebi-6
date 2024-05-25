let masivi = [12, 67, 34, 122, 10, -90, -12, -100, -546, 3452, -1, -2];
let dadebiti = [];
let uaryopiti = [];

while (masivi.length > 0) {
    let num = masivi.shift();
    if (num >= 0) {
        dadebiti.push(num);
    } else {
        uaryopiti.push(num);
    }
}

document.write("დადებითი რიცხვები:  ", dadebiti ,"<br>");
document.write("უარყოფითი რიცხვები:  ", uaryopiti);
