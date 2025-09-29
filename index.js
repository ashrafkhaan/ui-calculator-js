function initCalculator() {
    const display = document.getElementById("display");
    let currentValue = "";

    // Number buttons
    for (let i = 0; i <= 9; i++) {
        document.getElementById("num" + i).addEventListener("click", function() {
            currentValue += i;
            display.value = currentValue;
        });
    }

    // Operator buttons
    const operators = ["add", "sub", "mul", "div", "per"];
    operators.forEach(op => {
        document.getElementById(op).addEventListener("click", function() {
            const symbol = op === "add" ? "+" :
                op === "sub" ? "-" :
                op === "mul" ? "*" :
                op === "div" ? "/" : "%";
            currentValue += symbol;
            display.value = currentValue;
        });
    });

    // Clear button
    document.getElementById("clear").addEventListener("click", function() {
        currentValue = "";
        display.value = "";
    });

    // Equal button
    document.getElementById("equal").addEventListener("click", function() {
        try {
            display.value = eval(currentValue);
            currentValue = display.value;
        } catch {
            display.value = "Error";
            currentValue = "";
        }
    });
}

// Ensure JS runs after HTML is loaded
document.addEventListener("DOMContentLoaded", initCalculator);