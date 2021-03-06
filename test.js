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

  describe("Testing the remove function", () => {
    test("Test if the function remove elements or not", () => {
      var actual = todoFunctions.deleteTodo(todoArr, "0");
      var expected = [
        {
          id: 1,
          description: 'make coffee',
          done: false,
        },
      ]
      expect(actual).toEqual(expected);
    });

    test("Test the length of the input and the output", () => {
      var actual = todoFunctions.deleteTodo(todoArr, "0");
      var expected = 1
      expect(actual.length).toBe(expected);
    });

    test("Should return type of output", () => {
      var actual = todoFunctions.addTodo(todoArr, "0")
      var expected = "object";
        expect(typeof actual).toBe(expected);
    });

})



describe("Testing the idMark function", () => {
  test("Test if the function mark elements or not", () => {
    var actual = todoFunctions.markTodo(todoArr, "0");
    var expected = [
      {
        id: 0,
        description: 'smash avocados',
        done: false,
      },
      {
        id: 1,
        description: 'make coffee',
        done: false,
      },
    ]
    expect(actual).toEqual(expected);
  });

  test("Test the length of the input and the output", () => {
    var actual = todoFunctions.markTodo(todoArr, "0");
    var expected = 2
    expect(actual.length).toBe(expected);
  });

  test("Should return type of output", () => {
    var actual = todoFunctions.markTodo(todoArr, "0")
    var expected = "object";
      expect(typeof actual).toBe(expected);
  });

})
