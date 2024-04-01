let boxs = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPattarn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableboxs = () => {
    for (box of boxs) {
        box.disabled = true;
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxs();
};
function checkWinner() {
    for (let pattern of winPattarn) {
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner.");
                showWinner(pos1val);
                break;
            }
        }
    }
}

const resetGame = ()=>
{
    turnO = true;
    enableboxs();
    msgContainer.classList.add('hide');
};
const enableboxs = () => {
    for (box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);
