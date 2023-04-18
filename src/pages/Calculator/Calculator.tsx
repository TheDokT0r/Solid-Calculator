import { render } from "solid-js/web";
import { createSignal, createEffect } from "solid-js";
import './Calculator.scss';


function Calculator() {
    const [value, setValue] = createSignal('');
    const [result, setResult] = createSignal('');

    const calculate_handeler = (e: any) => {
        e.preventDefault();
        console.log(value());

        const [numbers, operators] = split(value());

        // Calculate the numbers
        try {
            const result = calculate(numbers, operators);
            // setValue(result.toString());
            setResult(result.toString());
        }
        catch (e) {
            console.log(e);
            setValue('Invalid input');
            setResult(NaN.toString());
            return;
        }


    }


    const calculate = (numbers: any[], operators: string[]) => {
        let result = parseFloat(numbers[0]);
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '+') {
                result += parseFloat(numbers[i + 1]);
            } else if (operators[i] === '-') {
                result -= parseFloat(numbers[i + 1]);
            } else if (operators[i] === '*') {
                result *= parseFloat(numbers[i + 1]);
            } else if (operators[i] === '/') {
                result /= parseFloat(numbers[i + 1]);
            }
            else if (operators[i] === '^') {
                result = Math.pow(result, parseFloat(numbers[i + 1]));
            }
            else if (operators[i] === '%') {
                result = result % parseFloat(numbers[i + 1]);
            }
            else {
                result = Math.min();
            }
        }

        return result;
    }


    const split = (str: string) => {
        // Split the string of calculations to the numbers and operators
        let numbers: string[] = [];
        let operators: string[] = [];

        let number = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/' || str[i] === '^' || str[i] === '%') {
                operators.push(str[i]);
                numbers.push(number);
                number = '';
            } else {
                number += str[i];
            }
        }
        numbers.push(number);

        return [numbers, operators];
    }

    return (
        <div class="c_container">
            <h2 class="c_title">Calculator</h2>

            <form class="c_inputs_container">
                <input
                    value={value()}
                    onInput={(e: any) =>
                        setValue(e.currentTarget.value)}
                    class="c_input"
                />

                <button
                    class="c_button"
                    onClick={calculate_handeler}
                >
                    {'>'}
                </button>
            </form>

            <div class="c_result_container">
                <p class="c_result">{result()}</p>
            </div>
        </div>
    );
}

export default Calculator;