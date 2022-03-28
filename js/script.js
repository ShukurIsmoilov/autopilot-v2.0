//Handling structures through variables

const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");
const div8 = document.querySelector(".div8");
const div9 = document.querySelector(".div9");
const div10 = document.querySelector(".div10");
const div11 = document.querySelector(".div11");
const div12 = document.querySelector(".div12");
const div13 = document.querySelector(".div13");
const div14 = document.querySelector(".div14");
const div15 = document.querySelector(".div15");
const div16 = document.querySelector(".div16");

const boxArray = [
    div1, div2, div3, div4,
    div5, div6, div7, div8,
    div9, div10, div11, div12,
    div13, div14, div15, div16
]


const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const l4 = document.querySelector(".l4");
const l5 = document.querySelector(".l5");
const l6 = document.querySelector(".l6");
const l7 = document.querySelector(".l7");
const l8 = document.querySelector(".l8");

const codeLines = [
    l1, l2, l3, l4,
    l5, l6, l7, l8
]


let loc = 0;
let num = 0;

const btnRun = document.querySelector(".btn-run");

//======================= function =====================

function getCommand() {

    let command = codeLines[num].value;

    //==================when car goes forward==================
    if (command === "car.forward();") {

        if (loc > 11 || loc === 4 || loc === 5 || loc === 7) {

            alert("Car can not move forward! It is on the edge or there is an obstacle on the front! Please, try other directions ;)");
            codeLines[num].classList.add("bad-command");

        } else {

            console.log("Car moved forward!");

            codeLines[num].classList.remove("bad-command");
            codeLines[num].classList.add("correct-command");

            boxArray[loc].classList.remove("car");

            loc += 4;

            boxArray[loc].classList.add("car");

            codeLines[num].disabled = true;

            num++;

            if (num === 8) {

                alert("Ooooopps, you ran out of lines, give it another try ;)");
                location.reload();

            }

            codeLines[num].removeAttribute("disabled");

        }
        //===========================================================================
        //======================== when car goes backwards ==========================
    } else if (command === "car.backwards();") {

        if (loc < 4 || loc === 13 || loc === 15) {

            alert("Car can not move backwards! It is on the edge or there is an obstacle on the back! Please, try other directions ;)");
            codeLines[num].classList.add("bad-command");

        } else {
            console.log("Car moved backwards!");

            codeLines[num].classList.remove("bad-command");
            codeLines[num].classList.add("correct-command");

            boxArray[loc].classList.remove("car");

            loc -= 4;

            boxArray[loc].classList.add("car");



            codeLines[num].disabled = true;

            num++;

            if (num === 8) {

                alert("Ooooopps, you ran out of lines, give it another try ;)");
                location.reload();

            }

            codeLines[num].removeAttribute("disabled");

        }
        //===========================================================================
        //========================== when car goes right ============================
    } else if (command === "car.right();") {

        if ((loc + 1) % 4 === 0 || loc === 10) {

            alert("Car can not move right! It is on the edge or there is an obstacle on the  right! Please, try other directions ;)");
            codeLines[num].classList.add("bad-command");

        } else {
            console.log("Car moved right!");

            codeLines[num].classList.remove("bad-command");
            codeLines[num].classList.add("correct-command");

            boxArray[loc].classList.remove("car");

            loc++;

            boxArray[loc].classList.add("car");



            codeLines[num].disabled = true;

            num++;

            if (num === 8) {

                alert("Ooooopps, you ran out of lines, give it another try ;)");
                location.reload();

            }

            codeLines[num].removeAttribute("disabled");

        }
        //===========================================================================
        //========================== when car goes left =============================
    } else if (command === "car.left();") {

        if (loc % 4 === 0) {

            alert("Car can not move left! It is on the edge or there is an obstacle on the left! Please, try other directions ;)");
            codeLines[num].classList.add("bad-command");

        } else {

            console.log("Car moved left!");

            codeLines[num].classList.remove("bad-command");
            codeLines[num].classList.add("correct-command");

            boxArray[loc].classList.remove("car");

            loc--;

            boxArray[loc].classList.add("car");

            if (loc === 12) {
                console.log("Congrats, car reached destination!");
                btnRun.disabled = true;
                alert("Congrats, Hoooorrrraaay, you made it. Keep calm and continue coding ;)");
            }

            codeLines[num].disabled = true;

            num++;

            if (num === 8) {

                alert("Ooooopps, you ran out of lines, give it another try ;)");
                location.reload();

            }

            codeLines[num].removeAttribute("disabled");

        }
        //===========================================================================
        //========================= when command is wrong ===========================
    } else {

        codeLines[num].classList.add("bad-command");
        console.log("Syntax error!");
    }

}

//========= attaching function 'getCommand' on click event of 'run-btn'==============
btnRun.addEventListener('click', getCommand);
