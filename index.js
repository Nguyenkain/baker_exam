var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();
const price = {'VS5': {3: 6.99, 5: 8.99}, 'MB11': {2: 9.95, 5: 16.95, 8: 24.95}, 'CF': {3: 5.95, 5: 9.95, 9: 16.99}};
let res;
let arrCurrent = [];
let arrResult = [];

/**
 * Main function
 * @param packs
 * @param amount
 * @returns {number}
 */
const packageDevide = (packs, amount) => {
    packs.sort((a, b) => b - a);
    res = Number.MAX_VALUE;
    devideLogics(packs, 0, amount, 0);
    return res == Number.MAX_VALUE ? -1 : res;
};

/**
 * Push current result to array result
 * @param packs
 * @param number
 */
const pushToArray = (packs, number) => {
    let a = arrCurrent.findIndex(x => x.pack == packs);
    if(a >= 0) {
        arrCurrent[a] = {pack: packs, number: number}
    } else {
        arrCurrent.push({pack: packs, number: number});
    }
};

/**
 * Logic to devide packs
 * @param packs
 * @param idx
 * @param amount
 * @param cnt
 */
const devideLogics = (packs, idx, amount, cnt) => {

    if (amount == 0) {
        res = Math.min(res, cnt);
        arrResult = arrCurrent.map(x => x);
        arrResult = [];
        return;
    }
    if (idx == packs.length) {
        return;
    }
    let pack = packs[idx];
    for (let i = parseInt(amount / pack); i >= 0 && cnt + i < res; i--) {
        pushToArray(pack, i);
        devideLogics(packs, idx + 1, amount - i * pack, cnt + i);
    }
};


/**
 * Console prompt
 */
prompt.get(['input'], function (err, result) {
    const inputArr = result.input.split(' ');
    let code = inputArr[1];
    let number = inputArr[0];
    let packs = Object.keys(price[code]);
    let amount = inputArr[0];
    let totalPrice = 0;
    console.log(packageDevide(packs, amount))
    console.log(arrResult);
    arrResult.forEach(function (item) {
        totalPrice += price[code][item.pack] * item.number;
    });
    console.log(`${number} ${code} $${totalPrice.toFixed(2)}`);
    arrResult.forEach(function (item) {
        if(item.number > 0) {
            console.log(`       ${item.number} x ${item.pack} $${price[code][item.pack]}`);
        }
    });
});
