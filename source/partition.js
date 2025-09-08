/** 
 * Функция partition разделяет входной массив на два подмассива на основе заданного предиката
 * 
 * @param {Array} array - исходный массив
 * @param {Function} predicate - функция-предикат, принимающая два аргумента: (элемент, индекс)
 *                            
 * @returns {Array} массив из двух подмассивов: [элементы, удовлетворяющие предикату, элементы, не удовлетворяющие предикату]
 */ 
function partition(array, predicate) { 
    if (!Array.isArray(array)) { 
        throw new TypeError('Первый аргумент должен быть массивом.'); 
    } 
    if (typeof predicate !== 'function') { 
        throw new TypeError('Второй аргумент должен быть функцией.'); 
    } 
 
    const pass = []; // подмассив для элементов, удовлетворяющих предикату 
    const fail = [];  // подмассив для элементов, не удовлетворяющих предикату 
 
    for (let i = 0; i < array.length; i++) { 
        if (predicate(array[i], i)) { 
            pass.push(array[i]); 
        } else { 
            fail.push(array[i]); 
        } 
    } 
 
    return [pass, fail]; 
}