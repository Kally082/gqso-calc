const { TestWatcher } = require("@jest/core");
const calc = require("./new-calc");
const soma = calc.soma;
const sub = calc.sub;
const mult = calc.mult;
const div = calc.div;


test('Adicionar 1 + 2 é igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('Soma de -1 + -1 é igual a 2', () => {
    expect(soma(-1, -1)).toBe(-2);
})

test('Soma de -1 + 1 é igual a 0', () => {
    expect(soma(-1, 1)).toBe(0);
});

test('Soma de \'a\' + 0 é igual a \'a0\' ', () => {
    expect(soma('a', 0)).toBe('a0');
})



test('Subtração de 5 - 2 é igual a 3', () => {
    expect(sub(5, 2)).toBe(3);
})

test('Subtração de (-1) - (-1) é igual a 0', () => {
    expect(sub(-1, -1)).toBe(0);
})

test('Subtração de (-8) - 2 é igual a -10', () => {
    expect(sub((-8), 2)).toBe(-10);
})

test('Subtração de 16 - 0 é igual a 16', () => {
    expect(sub(16, 0)).toBe(16);
})


test('Multiplicação de 5 x 4 é igual a 20', () => {
    expect(mult(5, 4)).toBe(20);
})

test('Multiplicação de (-2) x (-8) é igual a 16', () => {
    expect(mult(-2, -8)).toBe(16);
})

test('Multiplicação de (-12) x 12 é igual a -144', () => {
    expect(mult(-12, 12)).toBe(-144);
})

test('Multiplicação de 562 x 0 é igual a 0', () => {
    expect(mult(562, 0)).toBe(0);
})

test('Divisão de 81 ÷ 9 é igual a 9', () => {
    expect(div(81, 9)).toBe(9);
})

test('Divisão de (-26) ÷ (-2) é igual a 13', () => {
    expect(div(-26, -2)).toBe(13);
})

test('Divisão de (-54) ÷ 9 é igual a -6', () => {
    expect(div(-54, 9)).toBe(-6);
})

test('Divisão de 72 ÷ 0 é igual a ()', () => {
    expect(div(72, 0)).toBe(Infinity);
})
