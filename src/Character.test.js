import Character from './Character';

describe('Character', () => {
  test('should create a character with valid parameters', () => {
    const character = new Character('Archer', 'Bowman');
    expect(character.name).toBe('Archer');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Character('Archer', 'InvalidType')).toThrow('Некорректный тип персонажа');
  });
});
