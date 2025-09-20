'use strict';

/** 
 * Функция partition разделяет входной массив на два подмассива на основе заданного предиката
 * 
 * @param {Array} array - исходный массив
 * @param {Function} predicate - функция-предикат, принимающая два аргумента: (элемент, индекс)
 *                            
 * @returns {Array} массив из двух подмассивов: [элементы, удовлетворяющие предикату, элементы, не удовлетворяющие предикату]
 */ 
const partition = (array, predicate) => {
    if (!Array.isArray(array)) { 
        throw new TypeError('Первый аргумент должен быть массивом.'); 
    } 
    if (typeof predicate !== 'function') { 
        throw new TypeError('Второй аргумент должен быть функцией.'); 
    } 
 
    const pass = []; // подмассив для элементов, удовлетворяющих предикату 
    const fail = [];  // подмассив для элементов, не удовлетворяющих предикату 
 
      array.forEach((item, index) => {
        if (predicate(item, index)) {
            pass.push(item);
        } else {
            fail.push(item);
        }
    });
 
    return [pass, fail]; 
}
