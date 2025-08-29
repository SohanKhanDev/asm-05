// heart btn
let heartValueDefult = document.getElementById("heartValue");
let heartValue = parseInt(heartValueDefult.innerText);
let heartIcons = document.querySelectorAll(".heartIcon");

for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    heartValue++;
    heartValueDefult.innerText = heartValue;
  });
}

//clear btn
let callLog = document.getElementById("callLog");

document.getElementById("clearBtn").addEventListener("click", function () {
  callLog.innerHTML = "";
});

// call function
function getSystemTime() {
  let now = new Date();
  return now.toLocaleTimeString();
}

let callBtns = document.getElementsByClassName("callBtn");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    let coinBalanceDefult = document.getElementById("coinBalance");
    let coinBalance = Number(coinBalanceDefult.innerText);
    console.log(coinBalance);
    if (coinBalance >= 20) {
      // cut the coinBalance
      coinBalanceDefult.innerText = coinBalance - 20;

      let titleValue =
        callBtn.parentNode.parentNode.parentNode.childNodes[7].childNodes[1]
          .innerText;
      let numberValue =
        callBtn.parentNode.parentNode.parentNode.childNodes[7].childNodes[5]
          .innerText;
      let timeValue = getSystemTime();

      // select call log position
      let callLog = document.getElementById("callLog");
      console.log(callLog);

      // create a new call log
      let newCallLog = document.createElement("div");
      newCallLog.innerHTML = `
                          <div class="flex justify-between items-center p-[16px] bg-[#fafafa] rounded-lg">
                          <div class="">
                              <h1 class="font-inter font-semibold text-[18px]">${titleValue}</h1>
                              <p class="text-[18px] text-[#5C5C5C]">${numberValue}</p>
                          </div>
                          <div>
                              <p class="text-[18px]">${timeValue}</p>
                          </div>
                      </div>
      `;

      // set newCallLog in call log
      callLog.appendChild(newCallLog);

      // show alert
      alert("Calling" + " " + titleValue + " " + numberValue);
    } else {
      alert("Insufficient balance to make a call");
    }
  });
}

// copy btn
let countDefult = document.getElementById("copyCount");
let countValue = parseInt(countDefult.innerText);

console.log(countValue);
let copyBtns = document.getElementsByClassName("copyBtn");

for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    let numberValue =
      copyBtn.parentNode.parentNode.parentNode.childNodes[7].childNodes[5]
        .innerText;

    // copy to clipboard
    navigator.clipboard.writeText(numberValue).then(() => {
      copyBtn.innerHTML = `<i class="fa-regular fa-clipboard"></i> Copied!`;
      setTimeout(
        () => (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`),
        3000
      );
    });

    // alert
    alert("Copied!");

    // increase copy count
    countValue++;
    countDefult.innerText = countValue;
  });
}
