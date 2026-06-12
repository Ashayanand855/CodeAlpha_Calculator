let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');

function calculate(expression) {
    return eval(
        expression
            .replaceAll('x', '*')
            .replaceAll('^', '**')
            .replace(/(\d+(\.\d+)?)%/g, '($1/100)')
    );
}

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let buttonText = e.target.innerHTML;

        if(buttonText == 'C'){
            string = "";
            input.value = string;
            return;
        }

        if(buttonText == '='){
            try {
                string = calculate(string).toString();
                input.value = string;
            } catch {
                string = "";
                input.value = "Error";
            }
            return;
        }

        string = string + buttonText;
        input.value = string;
    })
})
