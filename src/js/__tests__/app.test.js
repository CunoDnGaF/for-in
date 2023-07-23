import orderByProps from '../app';

const swordsman = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40
};

test('should correctly sort the object by properties', () => {
    const result = orderByProps(swordsman, ["name", "level"]);

    const sortedArr = [
        {key: "name", value: "мечник"}, // порядок взят из массива с ключами
        {key: "level", value: 2}, // порядок взят из массива с ключами
        {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
        {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
        {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
      ];

    expect(result).toEqual(sortedArr);
});

test('should throw the error "Не передан порядок сортировки свойств"', () => {

    expect(() => orderByProps(swordsman)).toThrow('Не передан порядок сортировки свойств');
});

test('should throw the error "Порядок сортировки свойств не является массивом"', () => {

    expect(() => orderByProps(swordsman,'string')).toThrow('Порядок сортировки свойств не является массивом');
});