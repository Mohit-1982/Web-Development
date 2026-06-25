let res = "";
const operators = '+-*/%';
let isCalculated = false;
const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.result-div');

// buttons.forEach((button) => {

    document.querySelector('.button-portion').
    addEventListener('click', (e) => {
        if (!e.target.matches('.button')) return;

        let num = e.target.textContent;

        if (isCalculated) {
            res = "";
            isCalculated = false;
        }
        
        if (num === '=') {
            isCalculated = true;
            try {
                res = String(eval(res));
                result.textContent = res;
            } catch {
                res = '';
                result.textContent = 'ERROR';
            }
        } else if (num === '±') {
            try {
                res = String(eval(res) * -1);
                if (isNaN(res)) {
                    res = '';
                    result.textContent = 'ERROR';
                } else result.textContent = res;
            } catch {
                res = '';
                result.textContent = 'ERROR';
            }
        } else if (num === 'AC') {
            res = "";
            result.textContent = "";
        } 
        else if (num === 'del') {
            if (res !== 'ERROR') res = res.slice(0, -1);
            else res = "";
            result.textContent = res;
        } else {
            if (res !== 'ERROR') {
                if (operators.includes(num) && operators.includes(res.at(-1))) return;
                res += num;
                result.textContent = res;
            }
        }
    });