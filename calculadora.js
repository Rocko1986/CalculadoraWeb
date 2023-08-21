// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al elemento de visualización (display) y a todos los botones
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button[type='button']");

    // Variables para mantener el estado de la calculadora
    let input = "";
    let currentOperator = "";
    let previousValue = "";

    // Función para actualizar el contenido del display
    function updateDisplay() {
        display.value = input;
    }

    // Función para realizar las operaciones aritméticas
    function calculate() {
        const currentValue = parseFloat(input);
        const previousNum = parseFloat(previousValue);

        // Realiza la operación según el operador actual
        switch (currentOperator) {
            case "+":
                input = (previousNum + currentValue).toString();
                break;
            case "-":
                input = (previousNum - currentValue).toString();
                break;
            case "x":
                input = (previousNum * currentValue).toString();
                break;
            case "/":
                input = (previousNum / currentValue).toString();
                break;
        }

        // Restablece los valores para la siguiente operación
        currentOperator = "";
        previousValue = "";
        updateDisplay();
    }

    // Agregar eventos a los botones
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;

            if (value === "C") {
                // Limpia todos los valores
                input = "";
                previousValue = "";
                currentOperator = "";
            } else if (value === "+" || value === "-" || value === "x" || value === "/") {
                // Maneja los operadores si no se ha seleccionado ya un operador
                if (input !== "" && currentOperator === "") {
                    currentOperator = value;
                    previousValue = input;
                    input = "";
                
                }
            } else if (value === "=") {
                // Calcula y muestra el resultado
                if (input !== "" && previousValue !== "" && currentOperator !== "") {
                    calculate();
                    previousValue = "";
                }
            } else {
                // Concatena números y muestra en el display
                input += value;
            }

            updateDisplay(); // Actualiza el display en cada iteración
        });
    });
});
