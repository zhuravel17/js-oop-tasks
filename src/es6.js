"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    var [surname, name] = fio.split(' ');
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array))
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.lenght === 0) {
        return false;
    }
    const max = array.reduce((accumulator, value) => accumulator < value ? value : accumulator, 0);
    const min = array.reduce((accumulator, value) => accumulator > value ? value : accumulator, max);
    return max / min;
}
   

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.dict = new Map();
    }
    getVal(key){
        if(key != null && typeof(key) !== "undefined" && typeof(key) === "string"){
            if(this.dict.has(key))
                return this.dict.get(key);
            else return false;
        }
        else return false;
    }
    setVal(key, value){
        if (key != null && typeof(key) !== "undefined" && typeof(key) === "string" &&
        value !== null && typeof(value) !== "undefined" && typeof(value) === "string"){
            this.dict.set(key, value);
            return true;
        }
        return false;
    }
    deleteVal(key){
        if (key != null && typeof(key) !== "undefined" && typeof(key) === "string"){
            if (this.dict.has(key)){
                this.dict.delete(key);
                return true;
            }
            return false;
        }
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};