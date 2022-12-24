const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });
        it('получаем значение по ключу', () => {
            const dic = new core.Dictionary();
            dic.setVal("123", "qwe");
            assert.strictEqual(dic.getVal("123"), "qwe");
            assert.strictEqual(dic.getVal("qwe"), false);            
        });
        it('добавление значения', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.setVal("1", "test"), true);
            assert.strictEqual(dic.setVal(1, "test"), false);
            assert.strictEqual(dic.setVal([1, 2, 3], "test"), false);
        });
        it('удаление значения', () => {
            const dic = new core.Dictionary();
            dic.setVal("1", "test");
            assert.strictEqual(dic.deleteVal("2"), false);
            assert.strictEqual(dic.deleteVal("1"), true);
        });
    });
});