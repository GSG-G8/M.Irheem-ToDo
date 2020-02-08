const todoFunctions = require('./js/logic');


let todoArr = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];

let newTask = {
  description: 'newTask',
  done: false,
}
describe("Testing the add todo function", () => {
    test("Should return the new array", () => {
      var actual = todoFunctions.addTodo(todoArr, newTask)
      var expected = [
        {
          id: 0,
          description: 'smash avocados',
          done: true,
        },
        {
          id: 1,
          description: 'make coffee',
          done: false,
        },
        {
          id: todoFunctions.generateId,
          description: 'newTask',
          done: false,
        }
      ];
      expect(actual).toEqual(expected);
    });

    test("Should return type of element", () => {
      var actual = todoFunctions.addTodo(todoArr, newTask)
      var expected = "object";
        expect(typeof actual).toBe(expected);
    });

    test("Should return length of the new array", () => {
      var actual = todoFunctions.addTodo(todoArr, newTask)
      var expected = 3;
        expect(actual.length).toBe(expected);
    });
  })