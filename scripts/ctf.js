function checkFlag() {
    const input = document.getElementById('flagInput').value.trim();

    if (input === "flag{There_is_always_something_worth_finding}") {
        document.getElementById('flagResult').textContent = "Congratulations! You've found the flag!";
        document.getElementById('flagResult').style.color = "green";
    } else {
        document.getElementById('flagResult').textContent = "Incorrect flag. Try again!";
        document.getElementById('flagResult').style.color = "red";
    }
}

function printflag() {
    const flag = "{finding}";
    alert(`Flag 4: ${flag}`);
}

const hidden = "YWx3YXlz"; // Base64
console.log(`Flag 2: {${hidden}}`);