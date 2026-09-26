const fs = require('fs');
const path = require('path');

function q(questionText, options, correctAnswer) {
  return {
    questionText,
    options,
    correctAnswer,
    marks: 1
  };
}

console.log('Generating complete seed data file for 50 Technical, AI/ML, Web Dev & CS Assessments...');

const assessments = [
  {
    "title": "Python Developer Assessment",
    "description": "Comprehensive evaluation of Python syntax, data types, control flow, functions, data structures, OOP, exception handling, and standard libraries.",
    "category": "Programming",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is the correct file extension for Python source files?",
        "options": [
          ".pt",
          ".py",
          ".python",
          ".pyt"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to define a function in Python?",
        "options": [
          "function",
          "def",
          "fun",
          "define"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which of the following is an immutable data type in Python?",
        "options": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What does bool(\"False\") evaluate to in Python?",
        "options": [
          "False",
          "True",
          "None",
          "Error"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which built-in function returns the length of a string or list in Python?",
        "options": [
          "size()",
          "length()",
          "count()",
          "len()"
        ],
        "correctAnswer": 3,
        "marks": 1
      },
      {
        "questionText": "How do you write comments in Python?",
        "options": [
          "// comment",
          "/* comment */",
          "# comment",
          "<!-- comment -->"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which operator is used for exponentiation (power) in Python?",
        "options": [
          "^",
          "**",
          "^^",
          "pow"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does range(1, 5) produce when converted to a list in Python 3?",
        "options": [
          "[1, 2, 3, 4, 5]",
          "[1, 2, 3, 4]",
          "[0, 1, 2, 3, 4]",
          "[2, 3, 4, 5]"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which keyword terminates a loop prematurely in Python?",
        "options": [
          "stop",
          "exit",
          "break",
          "return"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is the correct syntax to output \"Hello World\" in Python?",
        "options": [
          "echo(\"Hello World\")",
          "print(\"Hello World\")",
          "console.log(\"Hello World\")",
          "System.out.println(\"Hello World\")"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the output of 3 * \"AB\"?",
        "options": [
          "\"ABABAB\"",
          "\"3AB\"",
          "Error",
          "\"AABB\""
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method removes and returns the last element of a Python list?",
        "options": [
          "remove()",
          "pop()",
          "delete()",
          "extract()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity of looking up a key in a Python dictionary on average?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you define a list comprehension that squares numbers from 0 to 4?",
        "options": [
          "[x^2 for x in range(5)]",
          "[x*x for x in range(5)]",
          "{x**2 for x in range(5)}",
          "(x*x for x in range(5))"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which built-in module provides functions for regular expressions in Python?",
        "options": [
          "regex",
          "re",
          "string",
          "pyregex"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What keyword is used for exception handling catch block in Python?",
        "options": [
          "catch",
          "except",
          "error",
          "trap"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `is` and `==` in Python?",
        "options": [
          "`is` checks value, `==` checks identity",
          "`is` checks object identity (memory address), `==` checks value equality",
          "They are completely identical",
          "`==` is for numbers only"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which method is called automatically when an object is instantiated in Python?",
        "options": [
          "__new__",
          "__init__",
          "__start__",
          "__create__"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the result of `type(lambda x: x)`?",
        "options": [
          "<class \"function\">",
          "<class \"lambda\">",
          "<class \"object\">",
          "<class \"def\">"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which parameter in `open()` opens a file for writing in binary mode?",
        "options": [
          "\"w\"",
          "\"wb\"",
          "\"rb\"",
          "\"ab\""
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the output of `min(\"python\")` in Python?",
        "options": [
          "\"p\"",
          "\"h\"",
          "\"n\"",
          "\"y\""
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "How do you convert a string \"123\" to an integer in Python?",
        "options": [
          "int(\"123\")",
          "str.toInt(\"123\")",
          "Integer.valueOf(\"123\")",
          "parse(\"123\")"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `set([1, 2, 2, 3])` return?",
        "options": [
          "{1, 2, 3}",
          "[1, 2, 3]",
          "(1, 2, 3)",
          "{1, 2, 2, 3}"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which statement creates a shallow copy of list `a`?",
        "options": [
          "b = a.copy()",
          "b = deepcopy(a)",
          "b = a",
          "b = copy(a, deep=True)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `pass` statement do in Python?",
        "options": [
          "Executes a null operation / placeholder",
          "Exits current function",
          "Skips next loop iteration",
          "Throws exception"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What keyword is used to raise a user-defined exception in Python?",
        "options": [
          "throw",
          "raise",
          "except",
          "emit"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which function returns an iterator of tuples paired with index counts?",
        "options": [
          "enumerate()",
          "zip()",
          "map()",
          "filter()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the result of `5 // 2` in Python?",
        "options": [
          "2.5",
          "2",
          "3",
          "2.0"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which module is used for working with JSON data in Python?",
        "options": [
          "json",
          "simplejson",
          "pyjson",
          "bson"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a decorator in Python?",
        "options": [
          "A function that takes another function as argument and extends its behavior without modifying it",
          "A GUI layout tool",
          "A class attribute",
          "A type hint"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Java Programming Assessment",
    "description": "Evaluate core Java principles including OOP concepts, exception handling, collections framework, multithreading, and memory management.",
    "category": "Programming",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which keyword is used to inherit a class in Java?",
        "options": [
          "implements",
          "extends",
          "inherits",
          "super"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the size of an int data type in Java?",
        "options": [
          "16 bits",
          "32 bits",
          "64 bits",
          "8 bits"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which of these is NOT a Java access modifier?",
        "options": [
          "public",
          "protected",
          "package-private",
          "internal"
        ],
        "correctAnswer": 3,
        "marks": 1
      },
      {
        "questionText": "What default value is assigned to an uninitialized instance boolean variable in Java?",
        "options": [
          "true",
          "false",
          "null",
          "0"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which Java Collection class maintains insertion order and allows null elements?",
        "options": [
          "HashSet",
          "ArrayList",
          "TreeSet",
          "HashMap"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does JVM stand for?",
        "options": [
          "Java Variable Machine",
          "Java Virtual Machine",
          "Java Versatile Model",
          "Java Verified Method"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which keyword prevents a class from being subclassed or a method from being overridden in Java?",
        "options": [
          "static",
          "abstract",
          "final",
          "const"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which interface must a class implement to allow instances to be executed by a thread?",
        "options": [
          "Executable",
          "Runnable",
          "Threadable",
          "Callable"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What will happen if `main` method signature in Java is missing `static`?",
        "options": [
          "Code compiles but throws NoSuchMethodError at runtime",
          "Code will fail to compile",
          "Program runs normally",
          "Main method executes asynchronously"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which block in Java exception handling ALWAYS executes whether an exception occurs or not?",
        "options": [
          "try",
          "catch",
          "finally",
          "throw"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is Garbage Collection in Java?",
        "options": [
          "Automatic memory management that reclaims heap memory allocated to unreferenced objects",
          "Manual call to delete objects",
          "Disk space cleaning tool",
          "Compiler optimization pass"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator is used to instantiate an object in Java?",
        "options": [
          "alloc",
          "new",
          "create",
          "instance"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the parent class of all classes in Java?",
        "options": [
          "java.lang.Class",
          "java.lang.Object",
          "java.lang.Root",
          "java.lang.System"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which collection class does NOT permit duplicate keys?",
        "options": [
          "List",
          "Map",
          "Vector",
          "Queue"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is Method Overloading in Java?",
        "options": [
          "Multiple methods in the same class with the same name but different parameter lists",
          "Overriding a superclass method in a subclass",
          "Defining multiple constructors with same parameters",
          "Using global methods"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is String pool in Java?",
        "options": [
          "A special storage area in Java Heap memory reserved for String literals",
          "A database connection pool for strings",
          "A list of StringBuilder objects",
          "A thread lock for string operations"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to throw an exception explicitly in Java?",
        "options": [
          "throws",
          "throw",
          "raise",
          "error"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the return type of a constructor in Java?",
        "options": [
          "void",
          "int",
          "Object",
          "No return type, not even void"
        ],
        "correctAnswer": 3,
        "marks": 1
      },
      {
        "questionText": "Which Java 8 feature allows passing functions as arguments?",
        "options": [
          "Generics",
          "Lambda Expressions",
          "Annotations",
          "Reflection"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does the `super` keyword refer to in Java?",
        "options": [
          "The immediate parent class object",
          "The current class object",
          "The static class context",
          "The global package"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which memory area in JVM stores class structures and static variables?",
        "options": [
          "Heap",
          "Method Area / Metaspace",
          "Stack",
          "PC Register"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the default value of an object reference variable in Java?",
        "options": [
          "null",
          "undefined",
          "0",
          "false"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which interface represents a FIFO (First In First Out) queue in Java?",
        "options": [
          "List",
          "Queue",
          "Set",
          "Map"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is checked exception in Java?",
        "options": [
          "An exception verified at compile-time that must be handled or declared",
          "An exception occurring at runtime only",
          "NullPointerException",
          "ArithmeticException"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an abstract class in Java?",
        "options": [
          "A class that cannot be instantiated and may contain abstract methods",
          "A final class",
          "A interface with no methods",
          "A singleton class"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method is used to start a thread execution in Java?",
        "options": [
          "run()",
          "start()",
          "execute()",
          "init()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `StringBuilder` provide over `String` in Java?",
        "options": [
          "Mutable string operations avoiding repeated object allocation",
          "Thread safety",
          "Immutability",
          "Faster disk I/O"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to implement an interface in Java?",
        "options": [
          "extends",
          "implements",
          "uses",
          "inherits"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is Autoboxing in Java?",
        "options": [
          "Automatic conversion of primitive types to their corresponding wrapper objects",
          "Boxing UI elements",
          "Casting objects to interfaces",
          "Serializing objects"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which package is imported automatically in every Java program?",
        "options": [
          "java.util",
          "java.lang",
          "java.io",
          "java.net"
        ],
        "correctAnswer": 1,
        "marks": 1
      }
    ]
  },
  {
    "title": "JavaScript Developer Assessment",
    "description": "Test your understanding of modern JavaScript (ES6+), variable scopes, closures, prototypes, event loop, DOM, promises, and async programming.",
    "category": "Programming",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which keyword declares a block-scoped variable that can be reassigned in JavaScript?",
        "options": [
          "var",
          "let",
          "const",
          "static"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does \"typeof NaN\" return in JavaScript?",
        "options": [
          "\"undefined\"",
          "\"nan\"",
          "\"number\"",
          "\"object\""
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which array method creates a new array populated with the results of calling a provided function on every element?",
        "options": [
          "forEach()",
          "filter()",
          "map()",
          "reduce()"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What initial state is a newly created Promise in JavaScript?",
        "options": [
          "fulfilled",
          "pending",
          "settled",
          "rejected"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which operator is used for strict equality without type coercion in JavaScript?",
        "options": [
          "==",
          "===",
          "=",
          "!="
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What will `console.log(1 + \"2\" + 3)` output in JavaScript?",
        "options": [
          "\"6\"",
          "\"123\"",
          6,
          "NaN"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which method converts a JSON string into a JavaScript object?",
        "options": [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.object()",
          "JSON.toObject()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a closure in JavaScript?",
        "options": [
          "A function bundled together with references to its surrounding state (lexical environment)",
          "A way to close a browser window",
          "A private class syntax",
          "A method to stop event propagation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does the `this` keyword refer to inside a standard arrow function?",
        "options": [
          "The element that fired the event",
          "The global object always",
          "The lexical `this` of the enclosing scope",
          "null"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which array method tests whether at least one element in the array passes the provided test function?",
        "options": [
          "every()",
          "some()",
          "find()",
          "includes()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What will `Boolean([])` return in JavaScript?",
        "options": [
          "false",
          "true",
          "undefined",
          "null"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which mechanism moves function declarations to the top of their scope before code execution?",
        "options": [
          "Hoisting",
          "Bubbling",
          "Closure",
          "Binding"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `Object.freeze()` do?",
        "options": [
          "Prevents new properties from being added and existing properties from being modified or deleted",
          "Makes an object immutable temporarily",
          "Frees memory allocated to an object",
          "Encodes an object to binary"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to handle exceptions in async/await functions?",
        "options": [
          "catch",
          "try...catch",
          "error",
          "reject"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `Array.isArray(\"hello\")` return?",
        "options": [
          "true",
          "false",
          "undefined",
          "TypeError"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `Symbol` primitive type in JavaScript?",
        "options": [
          "To create unique property identifiers",
          "To format currency symbols",
          "To render SVG icons",
          "To encrypt strings"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which statement accurately describes `null == undefined` in JavaScript?",
        "options": [
          "Evaluates to true",
          "Evaluates to false",
          "Throws a TypeError",
          "Evaluates to null"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the main task of the JavaScript Event Loop?",
        "options": [
          "To monitor Call Stack and Task Queue, pushing callback tasks when Call Stack is empty",
          "To compile code into machine byte",
          "To handle CSS layout rendering",
          "To manage garbage collection only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method adds one or more elements to the end of an array and returns the new length?",
        "options": [
          "push()",
          "unshift()",
          "append()",
          "concat()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the rest parameter syntax in function signatures?",
        "options": [
          "...args",
          "..args",
          "*args",
          "args..."
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is event bubbling in DOM event handling?",
        "options": [
          "Event propagates upwards from target element through its ancestors in DOM tree",
          "Event triggers only on window",
          "Event moves down from root to target",
          "Event stops automatically"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method cancels a default browser event action (like form submit reload)?",
        "options": [
          "e.preventDefault()",
          "e.stopPropagation()",
          "e.stop()",
          "e.cancel()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `Promise.all()` do if one of the input Promises rejects?",
        "options": [
          "Immediately rejects with the reason of the first rejected promise",
          "Ignores rejected promise and returns fulfilled ones",
          "Waits for all to settle",
          "Returns null"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is object destructuring syntax in ES6?",
        "options": [
          "const { name, age } = user",
          "const [ name, age ] = user",
          "const name, age from user",
          "extract(user)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method removes the first element from an array in JavaScript?",
        "options": [
          "shift()",
          "pop()",
          "unshift()",
          "slice()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `WeakMap` in JavaScript?",
        "options": [
          "A collection of key/value pairs in which keys MUST be objects and are held weakly for garbage collection",
          "A map with string keys",
          "A slow array",
          "A deprecated object"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator performs optional chaining in JavaScript?",
        "options": [
          "?.",
          "??",
          "||",
          "?:"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does nullish coalescing operator `??` return?",
        "options": [
          "Returns right-hand operand when left-hand operand is null or undefined",
          "Returns right-hand when left is falsy",
          "Returns true",
          "Throws error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method executes a function on every array element, reducing it to a single value?",
        "options": [
          "reduce()",
          "map()",
          "filter()",
          "flatMap()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the return type of `typeof function(){}`?",
        "options": [
          "\"function\"",
          "\"object\"",
          "\"method\"",
          "\"code\""
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "C Programming Fundamentals",
    "description": "Test fundamental C programming concepts including pointers, memory management (malloc/free), structs, arrays, and standard libraries.",
    "category": "Programming",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which operator is used to access the address of a variable in C?",
        "options": [
          "*",
          "&",
          "->",
          "%"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which function allocates requested bytes of memory and returns a void pointer in C?",
        "options": [
          "calloc()",
          "malloc()",
          "realloc()",
          "alloc()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the size of `char` data type in C on standard architecture?",
        "options": [
          "1 byte",
          "2 bytes",
          "4 bytes",
          "8 bytes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which header file is required to use `printf()` and `scanf()` in C?",
        "options": [
          "<stdlib.h>",
          "<stdio.h>",
          "<string.h>",
          "<conio.h>"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What character indicates the end of a string in C?",
        "options": [
          "\\n",
          "\\t",
          "\\0",
          "\\r"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is a NULL pointer in C?",
        "options": [
          "A pointer that points to memory address 0 or nowhere",
          "An uninitialized pointer with garbage value",
          "A pointer to a void function",
          "A dangling pointer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator is used to access structure members through a structure pointer?",
        "options": [
          ".",
          "->",
          "*",
          "&"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What function is used to free dynamically allocated memory in C?",
        "options": [
          "delete()",
          "free()",
          "release()",
          "clear()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the output of `sizeof(int)` on a standard 32/64-bit modern C system?",
        "options": [
          "2 bytes",
          "4 bytes",
          "8 bytes",
          "1 byte"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to create an alias for a data type in C?",
        "options": [
          "typedef",
          "define",
          "alias",
          "struct"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a dangling pointer in C?",
        "options": [
          "A pointer that points to a memory location that has been freed",
          "A NULL pointer",
          "A pointer pointing to a global variable",
          "A constant pointer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which loop in C is guaranteed to execute at least once?",
        "options": [
          "for loop",
          "while loop",
          "do-while loop",
          "nested loop"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `static` variable inside a function in C?",
        "options": [
          "Retains its value across multiple function calls",
          "Makes the variable global",
          "Makes the variable read-only",
          "Stores variable in CPU registers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the result of integer division `7 / 2` in C?",
        "options": [
          "3.5",
          "3",
          "4",
          "3.0"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which function copies one string to another in C?",
        "options": [
          "strcpy()",
          "strcat()",
          "strcmp()",
          "strlen()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `break` statement do inside a `switch` case in C?",
        "options": [
          "Exits the switch statement immediately",
          "Terminates the program",
          "Skips to next case unconditionally",
          "Restarts switch block"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is preprocessor directive in C?",
        "options": [
          "Lines starting with # that are processed before compilation",
          "Functions declared in stdio.h",
          "Inline assembly instructions",
          "Post-compilation optimization step"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which function compares two strings alphabetically in C?",
        "options": [
          "strcmp()",
          "strequal()",
          "strdiff()",
          "strfind()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a union in C?",
        "options": [
          "A data structure where all members share the exact same memory location",
          "A array of structures",
          "A struct with only public members",
          "A joint pointer declaration"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `return 0;` at the end of `main()` signal to the OS in C?",
        "options": [
          "Program executed successfully without errors",
          "Program failed with code 0",
          "Memory dump requested",
          "System reboot required"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which function allocates memory and initializes all bytes to zero in C?",
        "options": [
          "calloc()",
          "malloc()",
          "realloc()",
          "alloc()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a void pointer in C?",
        "options": [
          "A generic pointer type `void*` that can point to any object type",
          "A pointer to nowhere",
          "An uninitialized pointer",
          "A function pointer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to define a custom structure in C?",
        "options": [
          "struct",
          "typedef",
          "class",
          "union"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `const` keyword before variable declaration mean in C?",
        "options": [
          "The variable value cannot be modified after initialization",
          "Variable is stored in ROM",
          "Variable is thread-local",
          "Variable is dynamic"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is header guard in C C++ header files?",
        "options": [
          "#ifndef HEADER_H ... #endif to prevent multiple inclusions of same header",
          "Security firewall",
          "Memory protector",
          "Function declaration syntax"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "HTML & CSS Fundamentals Assessment",
    "description": "Test modern HTML5 semantic elements, forms, CSS Flexbox, Grid, specificity, positioning, and responsive design concepts.",
    "category": "Frontend",
    "difficulty": "Beginner",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which HTML5 element represents self-contained, independent content like a blog post or news article?",
        "options": [
          "<section>",
          "<article>",
          "<div>",
          "<aside>"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which CSS property is used to create a Flexbox layout container?",
        "options": [
          "display: flex",
          "flex-direction: column",
          "grid-template: 1fr",
          "box-sizing: flex"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS selector has the HIGHEST specificity?",
        "options": [
          "Class selector (.card)",
          "ID selector (#header)",
          "Element selector (h1)",
          "Universal selector (*)"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `box-sizing: border-box` do in CSS?",
        "options": [
          "Includes padding and border in the element total width and height",
          "Excludes border from width",
          "Adds a shadow around the element",
          "Forces content box sizing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which attribute in HTML `<img>` tag provides alternative text for screen readers and broken image fallback?",
        "options": [
          "title",
          "alt",
          "src",
          "caption"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which CSS Flexbox property aligns items along the MAIN axis?",
        "options": [
          "align-items",
          "justify-content",
          "align-content",
          "flex-wrap"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which CSS position value positions an element relative to the browser viewport, staying fixed during scroll?",
        "options": [
          "relative",
          "absolute",
          "fixed",
          "sticky"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What HTML5 element is used to play audio files directly on a web page?",
        "options": [
          "<sound>",
          "<audio>",
          "<music>",
          "<media>"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which CSS unit is relative to the root element (`<html>`) font size?",
        "options": [
          "em",
          "rem",
          "px",
          "vh"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the default value of CSS `position` property?",
        "options": [
          "relative",
          "static",
          "absolute",
          "fixed"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which CSS Grid property defines template columns?",
        "options": [
          "grid-template-columns",
          "grid-columns",
          "grid-layout-cols",
          "column-count"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTML attribute specifies that an input field MUST be filled before submitting a form?",
        "options": [
          "validate",
          "required",
          "mandatory",
          "non-empty"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does CSS `@media` rule allow developers to do?",
        "options": [
          "Apply styles conditionally based on device screen size and resolution",
          "Play background videos",
          "Import web fonts",
          "Define keyframe animations"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS property changes the text color of an element?",
        "options": [
          "text-color",
          "color",
          "font-color",
          "foreground"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `display: none` do to an element?",
        "options": [
          "Hides the element and removes it from page document flow",
          "Hides element but keeps its physical layout space",
          "Makes element semi-transparent",
          "Disables button interactions"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTML tag is used for defining an unordered bulleted list?",
        "options": [
          "<ol>",
          "<ul>",
          "<li>",
          "<list>"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which CSS pseudo-class matches when an element is hovered by user cursor?",
        "options": [
          "active",
          "hover",
          "focus",
          "visited"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does the HTML `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` tag do?",
        "options": [
          "Ensures proper scaling and rendering on mobile screens",
          "Enables desktop mode on mobile",
          "Sets website background color",
          "Prevents right clicking"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS property controls the z-axis stacking order of overlapping elements?",
        "options": [
          "depth",
          "z-index",
          "layer",
          "order"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the semantic purpose of the HTML `<nav>` tag?",
        "options": [
          "Contains major navigation link links for website",
          "Shows top news banner",
          "Wraps advertisement links",
          "Encloses user login forms"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS layout module is best suited for TWO-DIMENSIONAL grid-based layouts?",
        "options": [
          "CSS Grid",
          "CSS Flexbox",
          "Float layout",
          "Block layout"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `visibility: hidden` do compared to `display: none`?",
        "options": [
          "Hides element but preserves its physical layout space on page",
          "Removes element from DOM",
          "Deletes element content",
          "Shrinks element size to 0"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTML attribute links `<label>` to `<input id=\"...\">` element for accessibility?",
        "options": [
          "for",
          "target",
          "link",
          "id"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS pseudo-element adds content before an element's content?",
        "options": [
          "::before",
          "::after",
          "::first-child",
          "::prepend"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `flex-grow: 1` do in a Flex item?",
        "options": [
          "Allows the item to expand to fill remaining available space in flex container",
          "Doubles item height",
          "Shrinks item size",
          "Aligns item to right"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "React.js Developer Assessment",
    "description": "Test your expertise in React core concepts, JSX, components, state management, props, hooks (useState, useEffect, useMemo), and component lifecycle.",
    "category": "Frontend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which Hook is used to handle side-effects in functional React components?",
        "options": [
          "useState",
          "useEffect",
          "useReducer",
          "useCallback"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the Virtual DOM in React?",
        "options": [
          "A lightweight in-memory representation of the real DOM used to compute efficient UI updates",
          "A browser plugin for React",
          "A direct replacement for HTML",
          "A CSS rendering engine"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you pass data down from a parent component to a child component in React?",
        "options": [
          "State",
          "Props",
          "Context",
          "Redux"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which hook returns a stateful value and a function to update it in React?",
        "options": [
          "useRef",
          "useContext",
          "useState",
          "useMemo"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What key requirement MUST be met when rendering a list of items using `.map()` in React?",
        "options": [
          "Every item must have a unique `key` prop",
          "List must contain less than 100 items",
          "Items must be wrapped in <table>",
          "Component must be a class component"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What happens if you omit the dependency array in `useEffect`?",
        "options": [
          "Effect runs only once on initial mount",
          "Effect runs after EVERY render of the component",
          "Effect never executes",
          "Effect throws a syntax error"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of React `useRef` hook?",
        "options": [
          "To persist values across renders without causing re-renders and access DOM nodes directly",
          "To manage global state",
          "To replace useEffect",
          "To optimize CSS styles"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does JSX stand for in React?",
        "options": [
          "JavaScript XML",
          "Java Syntax Extension",
          "JS eXtra",
          "JSON Style Extension"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which hook is used to memoize expensive calculation results between renders?",
        "options": [
          "useCallback",
          "useMemo",
          "useRef",
          "useImperativeHandle"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the main difference between `useCallback` and `useMemo`?",
        "options": [
          "`useCallback` memoizes a callback function itself, while `useMemo` memoizes the returned result value",
          "`useMemo` works only on strings",
          "`useCallback` triggers automatic re-renders",
          "They are exact aliases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How can you prevent a child component from re-rendering when parent props haven't changed?",
        "options": [
          "Wrap component in `React.memo()`",
          "Use `useEffect`",
          "Use `useState`",
          "Add `async` keyword"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Context API in React used for?",
        "options": [
          "To share state globally across component tree without prop drilling",
          "To make HTTP API calls",
          "To route URLs",
          "To compile JSX code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Controlled Component in React form handling?",
        "options": [
          "A component where form input values are controlled by React component state",
          "A component with strict permissions",
          "A component wrapped in ErrorBoundary",
          "A server-side rendered form"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does the cleanup function returned inside `useEffect` do?",
        "options": [
          "Executes when component unmounts or before effect runs again to clean up timers/subscriptions",
          "Clears browser localStorage",
          "Resets all component state to initial values",
          "Frees server memory"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which rule MUST be followed when invoking React Hooks?",
        "options": [
          "Hooks must only be called at the top level of React functional components or custom hooks",
          "Hooks can be called inside loops and if statements freely",
          "Hooks must be async functions",
          "Hooks can only be called inside class constructors"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is StrictMode in React?",
        "options": [
          "A development tool that highlights potential problems, double-invoking effects in dev mode",
          "A security wall blocking XSS",
          "A mode that disables state updates",
          "A production performance booster"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you create a custom Hook in React?",
        "options": [
          "By writing a JavaScript function whose name starts with \"use\"",
          "By extending `React.Hook`",
          "By adding `@Hook` decorator",
          "By creating a hook file in public/"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which React Router component is used to define navigation links?",
        "options": [
          "<Link>",
          "<a>",
          "<Route>",
          "<Navigate>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What function is used to handle error boundaries in class components?",
        "options": [
          "componentDidCatch",
          "useEffectError",
          "catchError",
          "handleError"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Fragments (`<React.Fragment>` or `<>...</>`) used for?",
        "options": [
          "To group multiple children elements without adding extra DOM nodes",
          "To fragment code for lazy loading",
          "To create background threads",
          "To render CSS animations"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which hook is used for complex state logic similar to Redux inside a component?",
        "options": [
          "useReducer",
          "useState",
          "useContext",
          "useMemo"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is prop drilling in React?",
        "options": [
          "Passing props down through multiple layers of nested components to reach a deeply nested child",
          "Validating props with PropTypes",
          "Mutating props directly",
          "Deleting props"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `React.lazy()` enable in React applications?",
        "options": [
          "Code splitting and dynamic component import loading",
          "Lazy state initialization",
          "Slower rendering",
          "Background worker threads"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which component handles fallback UI while lazy components are loading in React?",
        "options": [
          "<Suspense>",
          "<Loading>",
          "<Fallback>",
          "<Boundary>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SyntheticEvent in React?",
        "options": [
          "A cross-browser wrapper around browser native events providing identical interface across platforms",
          "A fake event for unit tests",
          "A custom custom event emitter",
          "A DOM mutation observer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you set initial state in `useState` based on computation without re-running computation on every render?",
        "options": [
          "Pass a function initialization callback `useState(() => compute())`",
          "Call function inside JSX",
          "Use useEffect",
          "Use global variable"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What Hook is used to navigate programmatically in React Router v6?",
        "options": [
          "useNavigate",
          "useHistory",
          "useRouter",
          "useRedirect"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the default value returned by `useContext(MyContext)` if no Provider is above it?",
        "options": [
          "The default value passed to `createContext(defaultValue)`",
          "undefined",
          "null",
          "Error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method in React class components is equivalent to `useEffect` with `[]` dependency?",
        "options": [
          "componentDidMount",
          "componentDidUpdate",
          "render",
          "constructor"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Lifting State Up in React design patterns?",
        "options": [
          "Moving shared state to the closest common ancestor of components that need it",
          "Moving state to Redux",
          "Storing state in localStorage",
          "Uploading state to server"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Frontend Developer Assessment",
    "description": "Assess comprehensive frontend engineering skills across HTML, CSS, JavaScript, DOM, browser APIs, responsive layouts, HTTP, and performance.",
    "category": "Frontend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What does DOM stand for in web development?",
        "options": [
          "Document Object Model",
          "Data Object Mode",
          "Digital Optimization Method",
          "Desktop Operating Manager"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is typically used to fetch web resources without modifying server state?",
        "options": [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `localStorage` in browser web storage API?",
        "options": [
          "To store key-value data in browser persistently across browser sessions",
          "To store session data cleared on tab close",
          "To store cookies on server",
          "To cache HTTP responses"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which attribute in `<script>` tag causes script execution to be deferred until HTML document parsing finishes?",
        "options": [
          "defer",
          "async",
          "preload",
          "blocking"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `async` attribute do on `<script>` tag?",
        "options": [
          "Fetches script asynchronously and executes it immediately when downloaded",
          "Defers script execution",
          "Blocks HTML parser",
          "Runs script in Web Worker"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP header specifies client acceptable media response content types?",
        "options": [
          "Accept",
          "Content-Type",
          "User-Agent",
          "Authorization"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Critical Rendering Path in browser performance optimization?",
        "options": [
          "The sequence of steps browser undergoes to convert HTML, CSS, JS into actual pixels on screen",
          "The path to server database",
          "The network DNS resolution step",
          "The CSS animation keyframe path"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is web page Reflow / Layout in browser rendering engine?",
        "options": [
          "The process of computing geometric positions and sizes of visible elements",
          "Repainting background colors",
          "Downloading font files",
          "Compiling JS byte code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS technique optimizes image loading by showing low-res placeholder before lazy loading high-res image?",
        "options": [
          "Lazy Loading / Progressive Enhancement",
          "Pre-rendering",
          "GPU Acceleration",
          "CSS Inlining"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Service Worker in Progressive Web Apps (PWAs)?",
        "options": [
          "A background script running separate from web page handling offline caching and push notifications",
          "A web server backend",
          "A database connection pool",
          "A CSS preprocessor"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CORS error in web browser security context?",
        "options": [
          "Browser security policy blocking cross-origin HTTP request due to missing CORS headers from server",
          "CSS syntax error",
          "Database timeout",
          "SSL certificate expired"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code represents \"304 Not Modified\" (leveraging browser cache)?",
        "options": [
          "304",
          "200",
          "301",
          "403"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `sessionStorage` do compared to `localStorage`?",
        "options": [
          "Stores data scoped to current browser tab session; cleared when tab is closed",
          "Stores data on server",
          "Stores data permanently",
          "Stores encrypted passwords"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which browser event fires when the complete HTML document tree is parsed without waiting for images/stylesheets?",
        "options": [
          "DOMContentLoaded",
          "load",
          "ready",
          "beforeunload"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Content Security Policy (CSP)?",
        "options": [
          "An HTTP response header allowing site administrators to restrict resources browser is allowed to load",
          "A password policy",
          "A CSS framework",
          "A TLS protocol version"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which API allows web applications to send asynchronous HTTP requests natively without jQuery?",
        "options": [
          "Fetch API (fetch())",
          "XMLSerializer",
          "WebSockets",
          "Canvas API"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is WebSockets protocol used for?",
        "options": [
          "Full-duplex persistent real-time bidirectional communication between client and server",
          "Downloading static assets",
          "Rendering 3D graphics",
          "Sending emails"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS property enables hardware GPU acceleration for smooth transitions?",
        "options": [
          "transform: translateZ(0) / transform: translate3d()",
          "color: red",
          "font-size: 16px",
          "display: block"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Debouncing in frontend performance optimization?",
        "options": [
          "Ensuring a function is executed only after a specified delay has elapsed since last invocation",
          "Executing function on every scroll event",
          "Caching API responses",
          "Compressing images"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Throttling in event performance optimization?",
        "options": [
          "Enforcing a maximum execution frequency limit on a function over time during continuous events",
          "Delaying function until click",
          "Preventing default actions",
          "Minifying JS bundle"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which tool measures web page performance metrics like FCP, LCP, CLS (Core Web Vitals)?",
        "options": [
          "Lighthouse / Chrome DevTools",
          "Postman",
          "Docker",
          "Webpack"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is LCP (Largest Contentful Paint) in Web Vitals?",
        "options": [
          "Measures perceived page load speed by timing when largest main content block renders",
          "Measures layout shifts",
          "Measures first button click latency",
          "Measures DNS lookup time"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CLS (Cumulative Layout Shift) measure?",
        "options": [
          "Visual stability of page layout by tracking unexpected layout shifts during load",
          "Network download speed",
          "Server CPU load",
          "JS execution time"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which image format supports vector graphics scaling losslessly at any resolution?",
        "options": [
          "SVG",
          "PNG",
          "JPEG",
          "GIF"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `srcset` attribute on `<img>` tag allow browsers to do?",
        "options": [
          "Select optimal image resolution source based on device screen density and viewport width",
          "Set background image",
          "Preload video frames",
          "Watermark images"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is used to request only HTTP response headers without response body?",
        "options": [
          "HEAD",
          "OPTIONS",
          "GET",
          "TRACE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Webpack in modern frontend build pipelines?",
        "options": [
          "A module bundler that compiles JS modules, CSS, assets into static production bundles",
          "A web browser",
          "A testing framework",
          "A backend server framework"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Tree Shaking in JS build tools like Webpack/Vite?",
        "options": [
          "Dead-code elimination process that removes unused export code from final production bundle",
          "Minifying CSS files",
          "Compressing PNG images",
          "Compiling TypeScript to JS"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `<link rel=\"preload\" ...>` tag do?",
        "options": [
          "Informs browser to fetch critical resource with high priority early in page loading phase",
          "Loads asset after page load",
          "Defers CSS loading",
          "Deletes asset from cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTML5 tag is used for rendering 2D/3D dynamic graphics via JavaScript?",
        "options": [
          "<canvas>",
          "<svg>",
          "<graphic>",
          "<draw>"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Node.js Fundamentals Assessment",
    "description": "Assess core Node.js runtime mechanics, non-blocking asynchronous I/O, event loop, event emitters, streams, and module system.",
    "category": "Backend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What V8 JavaScript engine runtime environment powers Node.js?",
        "options": [
          "Chrome V8 Engine",
          "SpiderMonkey",
          "JavaScriptCore",
          "Chakra"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which module system is natively built into traditional Node.js using `require()` and `module.exports`?",
        "options": [
          "CommonJS",
          "ES Modules",
          "AMD",
          "SystemJS"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is non-blocking asynchronous I/O in Node.js?",
        "options": [
          "I/O operations execute without halting the main execution thread, delivering results via callbacks/Promises",
          "I/O operations block CPU until disk read completes",
          "Node.js creates a thread per incoming connection",
          "Operations execute synchronously in queue"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which built-in Node.js module is used to handle file system read/write operations?",
        "options": [
          "fs",
          "path",
          "os",
          "http"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `npm` stand for in Node.js ecosystem?",
        "options": [
          "Node Package Manager",
          "Node Programming Model",
          "Network Protocol Manager",
          "New Project Module"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which global object in Node.js provides environment variables via `process.env`?",
        "options": [
          "process",
          "global",
          "system",
          "env"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which core module allows creating raw HTTP web servers in Node.js?",
        "options": [
          "http",
          "express",
          "net",
          "url"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `package.json` file in a Node.js project?",
        "options": [
          "Manifest file containing project metadata, dependencies, scripts, and configuration",
          "Binary compiled executable",
          "Database schema definition",
          "Server routing file"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which class in Node.js handles stream processing for large files efficiently?",
        "options": [
          "Stream (Readable, Writable, Transform)",
          "BufferPool",
          "FileLoader",
          "DataQueue"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `process.nextTick()` do in Node.js Event Loop?",
        "options": [
          "Schedules callback to run immediately after current operation completes, before next event loop phase",
          "Runs code in 1 second",
          "Pushes task to thread pool worker",
          "Frees memory allocated"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which core module provides utilities for joining and resolving file system paths across OS platforms?",
        "options": [
          "path",
          "url",
          "fs",
          "os"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `Buffer` object used for in Node.js?",
        "options": [
          "To handle raw binary data directly in memory",
          "To cache database queries",
          "To format JSON strings",
          "To store user session cookies"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method on EventEmitter registers a listener that triggers ONLY ONCE?",
        "options": [
          "once()",
          "on()",
          "addListener()",
          "single()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `node_modules` directory used for?",
        "options": [
          "Stores installed third-party package dependencies",
          "Stores Node.js source C++ code",
          "Contains OS kernel drivers",
          "Temporary cache folder"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which flag in `npm install` saves package as development-only dependency?",
        "options": [
          "--save-dev (or -D)",
          "--global",
          "--production",
          "--save-exact"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you import ES Module (`import ... from ...`) in modern Node.js?",
        "options": [
          "Set `\"type\": \"module\"` in package.json or use `.mjs` file extension",
          "Use `require(\"esm\")` only",
          "Enable in BIOS",
          "Node.js does not support ES modules"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Thread Pool in Node.js provided by Libuv?",
        "options": [
          "A pool of worker threads (default 4) used for asynchronous blocking I/O tasks like cryptography and fs operations",
          "A thread pool for rendering HTML",
          "A cluster of HTTP servers",
          "A GPU worker process"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command runs a script named \"start\" defined in package.json?",
        "options": [
          "npm start",
          "node start",
          "npm run execute",
          "npx start-server"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What event is emitted when an unhandled Promise rejection occurs in Node.js?",
        "options": [
          "unhandledRejection",
          "uncaughtException",
          "promiseError",
          "exit"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `cluster` module enable in Node.js?",
        "options": [
          "Spawning child worker processes sharing server port to utilize multi-core CPUs",
          "Connecting to MongoDB cluster",
          "Cloning git repositories",
          "Compressing zip files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which tool automatically restarts Node.js server application upon file change during development?",
        "options": [
          "nodemon",
          "pm2",
          "npm",
          "forever"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which built-in module is used to work with URL strings and URL objects in Node.js?",
        "options": [
          "url",
          "http",
          "path",
          "querystring"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `fs.readFile()` do compared to `fs.readFileSync()`?",
        "options": [
          "`fs.readFile()` is asynchronous non-blocking; `readFileSync()` blocks main thread until file read finishes",
          "`fs.readFile()` returns buffer only",
          "`readFileSync()` is faster",
          "They are exact aliases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `npx` in Node.js package ecosystem?",
        "options": [
          "NPM package runner that executes CLI tools directly without global installation",
          "Next package manager",
          "Node process expander",
          "New Python index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which core module provides cryptographic functionality like hash generation and HMAC in Node.js?",
        "options": [
          "crypto",
          "security",
          "hash",
          "cipher"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Express.js & REST API Assessment",
    "description": "Test building scalable REST APIs with Express.js middleware, routing, CORS, status codes, JWT authentication, and error handling.",
    "category": "Backend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Middleware in Express.js?",
        "options": [
          "Functions that have access to request (req), response (res), and next middleware function in application request-response cycle",
          "Database ORM layer",
          "A template engine",
          "Frontend router"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Express method parses incoming requests with JSON payloads?",
        "options": [
          "express.json()",
          "express.bodyParser()",
          "express.parseJSON()",
          "express.urlEncoded()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method should be used to UPDATE an existing resource completely in REST APIs?",
        "options": [
          "PUT",
          "GET",
          "POST",
          "DELETE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What HTTP status code represents \"201 Created\"?",
        "options": [
          "201",
          "200",
          "404",
          "500"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which status code indicates \"Unauthorized access\" in REST API standard?",
        "options": [
          "401",
          "403",
          "400",
          "404"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you access route parameters in Express route path `/users/:id`?",
        "options": [
          "req.params.id",
          "req.query.id",
          "req.body.id",
          "req.headers.id"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you access query parameters in Express URL `/search?term=react`?",
        "options": [
          "req.query.term",
          "req.params.term",
          "req.body.term",
          "req.url.term"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What parameter MUST be called inside custom Express middleware to pass control to next middleware?",
        "options": [
          "next()",
          "continue()",
          "proceed()",
          "res.send()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CORS stand for in web API architecture?",
        "options": [
          "Cross-Origin Resource Sharing",
          "Central Office Routing Service",
          "Client Origin Request System",
          "Cross Organization REST Security"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP header is commonly used to pass JWT tokens in REST API requests?",
        "options": [
          "Authorization: Bearer <token>",
          "Content-Type: application/jwt",
          "Token-Key: <token>",
          "X-Access-Token: <token>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What HTTP status code represents \"Forbidden\" when user lacks required role/permissions?",
        "options": [
          "403",
          "401",
          "404",
          "422"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which signature identifies an Express Error-Handling Middleware?",
        "options": [
          "(err, req, res, next)",
          "(req, res, err)",
          "(req, res, next)",
          "(err, req, res)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is idempotent and intended only for retrieving data?",
        "options": [
          "GET",
          "POST",
          "PATCH",
          "CONNECT"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `express.Router()`?",
        "options": [
          "To create modular, mountable route handlers",
          "To route database queries",
          "To handle WebSocket connections",
          "To load static HTML pages"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What HTTP status code is returned for \"404 Not Found\"?",
        "options": [
          "404",
          "400",
          "502",
          "301"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method sends a JSON response from Express controller?",
        "options": [
          "res.json()",
          "res.sendJSON()",
          "res.output()",
          "res.write()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does JWT consist of in terms of parts separated by dots (`.`)?",
        "options": [
          "Header, Payload, Signature",
          "Key, Value, Hash",
          "User, Role, Expiry",
          "Token, Data, Checksum"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is best suited for PARTIAL modifications to a resource?",
        "options": [
          "PATCH",
          "PUT",
          "POST",
          "UPDATE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What middleware is typically used to serve static frontend files in Express?",
        "options": [
          "express.static()",
          "express.files()",
          "express.public()",
          "express.serve()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What status code range represents Server-Side Errors (e.g. 500)?",
        "options": [
          "500 - 599",
          "400 - 499",
          "200 - 299",
          "300 - 399"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which package is commonly used in Node Express to hash user passwords using salt?",
        "options": [
          "bcrypt / bcryptjs",
          "crypto-js",
          "jwt",
          "passport"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `helmet` middleware in Express applications?",
        "options": [
          "Sets various security HTTP response headers to protect against common web vulnerabilities",
          "Parses multipart form data",
          "Compresses responses",
          "Handles session cookies"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which status code represents \"429 Too Many Requests\" (rate limiting)?",
        "options": [
          "429",
          "400",
          "503",
          "409"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What HTTP method should be used to DELETE a resource in REST design?",
        "options": [
          "DELETE",
          "REMOVE",
          "POST",
          "GET"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Statelessness constraint in REST architecture?",
        "options": [
          "Server stores no client session context between requests; each request contains all necessary auth data",
          "Server holds user session in memory",
          "Database operates without transactions",
          "Client stores server state"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method sets HTTP response status code in Express before sending body?",
        "options": [
          "res.status(200)",
          "res.setCode(200)",
          "res.header(200)",
          "res.statusCode = 200"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which package parses incoming request cookies in Express?",
        "options": [
          "cookie-parser",
          "body-parser",
          "express-session",
          "cors"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `morgan` middleware do in Express backend?",
        "options": [
          "Logs HTTP requests and responses to console/log files",
          "Encrypts request body",
          "Manages JWT tokens",
          "Validates request schemas"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the default port for Express web server if not explicitly specified?",
        "options": [
          "No default port; developer specifies via app.listen(port)",
          "Port 80 always",
          "Port 3000 always",
          "Port 8080 always"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What status code represents \"204 No Content\" after successful deletion?",
        "options": [
          "204",
          "200",
          "201",
          "302"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Backend Developer Assessment",
    "description": "Comprehensive test covering Node.js, Express, REST APIs, JWT authentication, bcrypt, database integration, API security, and middleware.",
    "category": "Backend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is the main role of API Gateway in backend microservices architecture?",
        "options": [
          "Serves as a single entry point handling routing, auth, rate limiting, and request distribution",
          "Database server",
          "Client UI renderer",
          "DNS resolver"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which authentication strategy stores user session state in server memory or Redis?",
        "options": [
          "Session-based Authentication",
          "Stateless JWT Token Authentication",
          "Basic HTTP Auth",
          "OAuth 2.0 PKCE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the function of `bcrypt.hash()` in password storage?",
        "options": [
          "Hashes password with a randomly generated salt to prevent rainbow table attacks",
          "Encrypts password reversibly",
          "Encodes password to Base64",
          "Generates JWT token"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does RBAC stand for in backend authorization systems?",
        "options": [
          "Role-Based Access Control",
          "Resource-Based Authentication Code",
          "Route-Based Application Controller",
          "Random Binary Access Check"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Connection Pooling in database drivers?",
        "options": [
          "Reusing a cache of established database connections to avoid connection creation overhead",
          "Backup database mirroring",
          "Data clustering",
          "Load balancing HTTP requests"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which status code should be returned when a POST request creates a resource successfully?",
        "options": [
          "201 Created",
          "200 OK",
          "202 Accepted",
          "204 No Content"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SQL Injection attack vector?",
        "options": [
          "Attacker injects malicious SQL statements via user input to execute unauthorized database queries",
          "Overloading server memory",
          "Stealing cookies via JS",
          "Cracking SSL certificate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How can SQL Injection be prevented effectively?",
        "options": [
          "Using parameterized queries / prepared statements and ORMs",
          "Escaping HTML tags",
          "Using GET instead of POST",
          "Storing passwords in plain text"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Rate Limiting in API design?",
        "options": [
          "Restricting client requests to maximum allowed threshold per timeframe to prevent DoS abuse",
          "Limiting file download sizes",
          "Restricting database row counts",
          "Stopping server timers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does HTTP status code \"409 Conflict\" indicate?",
        "options": [
          "Request could not be completed due to conflict with current target resource state (e.g. duplicate email)",
          "Unauthorized token",
          "Server crash",
          "Page not found"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of Refresh Tokens in JWT authentication architecture?",
        "options": [
          "Long-lived tokens used securely to request new access tokens without requiring re-login",
          "Tokens used to refresh CSS styles",
          "Tokens stored in URL query params",
          "Tokens used for password reset only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Where should sensitive access tokens be stored on client side to prevent XSS theft?",
        "options": [
          "In `httpOnly` secure cookies",
          "In localStorage",
          "In global window variables",
          "In DOM attributes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Idempotency in HTTP API methods?",
        "options": [
          "An operation that produces the exact same server state result regardless of how many times it is executed",
          "An operation that executes asynchronously",
          "A method that requires authentication",
          "A database transaction rollback"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP methods are defined as Idempotent in HTTP spec?",
        "options": [
          "GET, PUT, DELETE, HEAD, OPTIONS",
          "POST and PATCH",
          "POST only",
          "CONNECT only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Graceful Shutdown in backend server applications?",
        "options": [
          "Closing active DB connections and finishing handling pending requests before shutting process down",
          "Killing server process instantly via SIGKILL",
          "Rebooting server OS",
          "Deleting log files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `dotenv` package do in Node.js applications?",
        "options": [
          "Loads environment variables from a `.env` file into `process.env`",
          "Encrypts environment files",
          "Compiles JS code",
          "Starts Express dev server"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Object-Relational Mapping (ORM) or ODM?",
        "options": [
          "Abstraction layer mapping object-oriented application code to relational DB tables or NoSQL documents",
          "A frontend router",
          "A network driver",
          "A compiler plugin"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Database Migration in backend engineering?",
        "options": [
          "Version-controlled schema updates and data transformations applied sequentially to database",
          "Copying database to another cloud region",
          "Exporting CSV files",
          "Converting JSON to XML"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code represents \"503 Service Unavailable\"?",
        "options": [
          "503",
          "500",
          "502",
          "504"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `express-async-errors` or wrapping async controllers in try/catch?",
        "options": [
          "To capture rejected Promises in async route handlers and forward error to Express error middleware",
          "To speed up async code execution",
          "To disable HTTP logging",
          "To compress responses"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is WebHook in API architecture?",
        "options": [
          "Server-to-server automated event notification HTTP POST callback sent when a specific event occurs",
          "A frontend event listener",
          "A browser WebSocket connection",
          "A database trigger"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Content-Type header `application/x-www-form-urlencoded` used for?",
        "options": [
          "Submitting standard HTML form data key-value pairs encoded as URL query string format",
          "Sending JSON data",
          "Uploading binary video files",
          "Sending XML payloads"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which header prevents clickjacking attacks by controlling if page can be embedded in `<iframe>`?",
        "options": [
          "X-Frame-Options / CSP frame-ancestors",
          "X-XSS-Protection",
          "Content-Type",
          "Access-Control-Allow-Origin"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Microservice vs Monolith architecture trade-off?",
        "options": [
          "Microservices offer independent scalability and deployment at cost of increased system complexity",
          "Monoliths are always faster",
          "Microservices do not use databases",
          "Monoliths cannot run on Linux"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which status code represents \"422 Unprocessable Entity\" for validation failures?",
        "options": [
          "422",
          "400",
          "401",
          "403"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Sanitization in API input processing?",
        "options": [
          "Cleaning user input by stripping or escaping unsafe characters before saving or rendering",
          "Encrypting inputs",
          "Converting string to integer",
          "Compressing JSON body"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Open API / Swagger specification used for?",
        "options": [
          "Standardized framework for documenting, designing, and testing RESTful APIs",
          "Database query language",
          "JS bundler",
          "SSL certificate provider"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `gzip` or `brotli` compression middleware do in Express?",
        "options": [
          "Compresses HTTP response bodies to reduce network transfer payload sizes",
          "Minifies JS source files",
          "Compresses database collections",
          "Encrypts user passwords"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Health Check endpoint (`/api/health`) in backend deployment?",
        "options": [
          "An endpoint returning application and dependency status used by load balancers and orchestrators",
          "A user profile checker",
          "A CPU temperature reader",
          "A billing calculator"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is NOT idempotent?",
        "options": [
          "POST",
          "GET",
          "PUT",
          "DELETE"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "SQL & Database Assessment",
    "description": "Evaluate SQL query writing, JOIN types, aggregate functions, normalization, transactions, keys, and relational schema optimization.",
    "category": "Database",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which SQL clause is used to filter rows AFTER an aggregate `GROUP BY` operation?",
        "options": [
          "HAVING",
          "WHERE",
          "FILTER",
          "ORDER BY"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which JOIN type returns all records from left table, and matched records from right table?",
        "options": [
          "LEFT JOIN",
          "INNER JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does the \"I\" stand for in ACID properties of database transactions?",
        "options": [
          "Isolation",
          "Integrity",
          "Index",
          "Iteration"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL command is used to remove a table structure and all its data permanently from database?",
        "options": [
          "DROP TABLE",
          "DELETE TABLE",
          "TRUNCATE TABLE",
          "REMOVE TABLE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Foreign Key in relational databases?",
        "options": [
          "A field in one table that uniquely identifies a row in another table, enforcing referential integrity",
          "A password key to remote server",
          "An encrypted primary key",
          "A key generated by user"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which normal form requires eliminating partial dependencies on composite primary key (2NF)?",
        "options": [
          "Second Normal Form (2NF)",
          "First Normal Form (1NF)",
          "Third Normal Form (3NF)",
          "BCNF"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL function calculates the average value of a numeric column?",
        "options": [
          "AVG()",
          "MEAN()",
          "SUM()",
          "COUNT()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL keyword ensures only unique/non-duplicate values are returned in result set?",
        "options": [
          "DISTINCT",
          "UNIQUE",
          "DIFFERENT",
          "SINGLE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `DELETE` and `TRUNCATE` in SQL?",
        "options": [
          "`DELETE` removes rows one by one logging operations, while `TRUNCATE` deallocates table data pages faster",
          "`DELETE` removes table structure",
          "`TRUNCATE` cannot be used with WHERE clause",
          "They are exact aliases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL statement adds new rows of data into a database table?",
        "options": [
          "INSERT INTO",
          "ADD ROW",
          "UPDATE",
          "CREATE ROW"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an Index in SQL databases?",
        "options": [
          "A data structure (like B-Tree) that speeds up data retrieval operations on a table",
          "A list of column names",
          "A table backup",
          "A security role"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which constraint ensures that all values in a column are distinct and not null by default?",
        "options": [
          "PRIMARY KEY",
          "FOREIGN KEY",
          "CHECK",
          "DEFAULT"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Database Transaction?",
        "options": [
          "A sequence of database operations executed as a single logical unit of work (all-or-nothing)",
          "A payment gateway API call",
          "A backup script",
          "A query execution plan"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command rolls back a transaction restoring data to previous state in SQL?",
        "options": [
          "ROLLBACK",
          "COMMIT",
          "UNDO",
          "RESTORE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `ORDER BY column_name DESC` do?",
        "options": [
          "Sorts query result set in descending order (highest to lowest / Z to A)",
          "Sorts ascending",
          "Hides column",
          "Deletes column"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Subquery in SQL?",
        "options": [
          "A query nested inside another SELECT, INSERT, UPDATE, or DELETE statement",
          "A duplicate query",
          "A queue of queries",
          "A database view"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL operator tests if a pattern matches a string using `%` or `_` wildcards?",
        "options": [
          "LIKE",
          "MATCHES",
          "CONTAINS",
          "REGEXP"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does 1NF (First Normal Form) require?",
        "options": [
          "Each column contains atomic (indivisible) values and no repeating groups",
          "All foreign keys are indexed",
          "No transitive dependencies",
          "Tables must have auto-increment IDs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command modifies existing records in an SQL table?",
        "options": [
          "UPDATE",
          "MODIFY",
          "ALTER",
          "SET"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What type of database relationship is formed when one student can enroll in many courses and one course has many students?",
        "options": [
          "Many-to-Many",
          "One-to-Many",
          "One-to-One",
          "Self-Referential"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL clause groups rows that have the same values into summary rows?",
        "options": [
          "GROUP BY",
          "ORDER BY",
          "PARTITION BY",
          "CLUSTER BY"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is 3NF (Third Normal Form) rule?",
        "options": [
          "Table is in 2NF and contains no transitive functional dependencies",
          "Table contains no NULL values",
          "Table has a composite primary key",
          "Table is partitioned"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which function returns the total count of rows matching a query condition in SQL?",
        "options": [
          "COUNT()",
          "SUM()",
          "TOTAL()",
          "NUM()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a View in SQL relational database?",
        "options": [
          "A virtual table based on the result-set of an SQL statement",
          "A physical table copy",
          "A database index",
          "A graphical user interface"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `INNER JOIN` return?",
        "options": [
          "Only records that have matching values in both tables",
          "All records from left table",
          "All records from right table",
          "Cartesian product of both tables"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL statement alters an existing table structure (e.g. adding a column)?",
        "options": [
          "ALTER TABLE",
          "UPDATE TABLE",
          "MODIFY TABLE",
          "CHANGE TABLE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Trigger in SQL databases?",
        "options": [
          "A procedural code block automatically executed in response to specific events (INSERT/UPDATE/DELETE) on a table",
          "A primary key index",
          "A scheduled backup task",
          "A user login event"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Composite Key in SQL?",
        "options": [
          "A primary key consisting of two or more columns to uniquely identify a row",
          "A foreign key pointing to multiple tables",
          "An encrypted key",
          "A secondary index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator selects values within a given range inclusive?",
        "options": [
          "BETWEEN",
          "IN",
          "LIKE",
          "RANGE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `FULL OUTER JOIN` return?",
        "options": [
          "All records when there is a match in left OR right table records",
          "Only matching rows",
          "Left table rows only",
          "No rows"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "MongoDB Developer Assessment",
    "description": "Test document database principles, CRUD operations, indexing, Mongoose schemas, and MongoDB Aggregation Pipelines.",
    "category": "Database",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What format does MongoDB use internally to store documents on disk?",
        "options": [
          "BSON (Binary JSON)",
          "JSON plain text",
          "XML",
          "CSV"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the default unique primary key field name automatically created in every MongoDB document?",
        "options": [
          "_id",
          "id",
          "uuid",
          "pk"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which MongoDB command returns documents matching a query filter?",
        "options": [
          "db.collection.find()",
          "db.collection.get()",
          "db.collection.select()",
          "db.collection.fetch()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Mongoose in Node.js development?",
        "options": [
          "An Object Data Modeling (ODM) library for MongoDB and Node.js",
          "A SQL relational driver",
          "A MongoDB GUI client",
          "A database migration CLI"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which query operator in MongoDB matches values that are greater than a specified value?",
        "options": [
          "$gt",
          "$gte",
          "$max",
          "$more"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an Index in MongoDB used for?",
        "options": [
          "To dramatically improve query execution performance by avoiding full collection scans",
          "To encrypt document fields",
          "To backup database automatically",
          "To format output JSON"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator in MongoDB is used to join documents from another collection in aggregation pipeline?",
        "options": [
          "$lookup",
          "$join",
          "$merge",
          "$unionWith"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which update operator sets or modifies the value of a field in a MongoDB document?",
        "options": [
          "$set",
          "$update",
          "$put",
          "$change"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `$match` stage do in MongoDB Aggregation Pipeline?",
        "options": [
          "Filters documents to pass only those matching specified condition(s) to next stage",
          "Sorts documents",
          "Groups documents by key",
          "Projects fields"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which update operator adds an item to an array field in MongoDB document?",
        "options": [
          "$push",
          "$add",
          "$addToArray",
          "$append"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Replica Set in MongoDB?",
        "options": [
          "A group of mongod processes that maintain the same data set providing high availability and redundancy",
          "A cluster of sharded routers",
          "A backup zip file",
          "A secondary table"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Sharding in MongoDB?",
        "options": [
          "Distributing data across multiple machine nodes to support horizontal scaling",
          "Creating database indexes",
          "Encrypting documents",
          "Compacting log files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which stage in Aggregation Pipeline groups documents by a specified identifier expression?",
        "options": [
          "$group",
          "$aggregate",
          "$collect",
          "$summarize"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What operator is used to increment a numerical field in MongoDB document?",
        "options": [
          "$inc",
          "$add",
          "$plus",
          "$sum"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `db.collection.deleteMany({})` do?",
        "options": [
          "Deletes ALL documents inside the specified collection",
          "Drops the entire database",
          "Deletes primary key indexes",
          "Truncates collection schema"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator checks if a field exists in MongoDB document?",
        "options": [
          "$exists",
          "$has",
          "$contains",
          "$isDefined"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Mongoose Schema Virtual in MongoDB?",
        "options": [
          "Properties that can be gotten and set but are NOT persisted to MongoDB database",
          "A database view",
          "A fake database table",
          "An temporary index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator matches documents where array field contains ALL specified elements?",
        "options": [
          "$all",
          "$in",
          "$every",
          "$containsAll"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `.populate()` do in Mongoose?",
        "options": [
          "Replaces specified ObjectId references in document with actual populated documents from another collection",
          "Populates database with seed data",
          "Generates random IDs",
          "Indexes foreign keys"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the maximum single BSON document size limit in MongoDB?",
        "options": [
          "16 Megabytes",
          "8 Megabytes",
          "32 Megabytes",
          "64 Megabytes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which MongoDB method inserts a single document into a collection?",
        "options": [
          "insertOne()",
          "insert()",
          "addOne()",
          "saveOne()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Projection in MongoDB find query?",
        "options": [
          "Specifying which fields to return or exclude in query results (e.g. `{ name: 1, _id: 0 }`)",
          "Database indexing",
          "GridFS storage",
          "Geospatial mapping"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which query operator in MongoDB matches values in an array of specified values?",
        "options": [
          "$in",
          "$or",
          "$all",
          "$eq"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `ObjectId` in MongoDB contain?",
        "options": [
          "12-byte binary value incorporating timestamp, machine identifier, process id, and counter",
          "Random string",
          "UUID v4",
          "Auto-increment integer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which stage in MongoDB Aggregation specifies fields to include/exclude/rename?",
        "options": [
          "$project",
          "$filter",
          "$map",
          "$select"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Compound Index in MongoDB?",
        "options": [
          "An index containing references to multiple fields within a collection document",
          "A primary key index",
          "A text search index",
          "A TTL index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator in MongoDB is used for text search across indexed string fields?",
        "options": [
          "$text",
          "$search",
          "$regex",
          "$contains"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is TTL (Time-To-Live) index in MongoDB used for?",
        "options": [
          "Automatically removing documents from a collection after a specified duration",
          "Measuring query speed",
          "Caching queries in memory",
          "Encrypting documents"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is GridFS in MongoDB used for?",
        "options": [
          "Storing and retrieving files that exceed the BSON 16MB document size limit",
          "Sharding router",
          "GUI admin portal",
          "Database backup utility"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which update operator removes a specified field from a MongoDB document?",
        "options": [
          "$unset",
          "$delete",
          "$remove",
          "$drop"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "DBMS Fundamentals Assessment",
    "description": "Evaluate core relational database concepts, ER modeling, normalization, transaction management, indexing, and architecture.",
    "category": "Database",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What does DBMS stand for?",
        "options": [
          "Database Management System",
          "Data Business Model Structure",
          "Digital Base Memory System",
          "Data Buffer Module Storage"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which component of DBMS translates user queries into low-level file system instructions?",
        "options": [
          "Query Processor / Engine",
          "Data Dictionary",
          "Transaction Manager",
          "Buffer Pool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does \"A\" stand for in ACID transaction properties?",
        "options": [
          "Atomicity",
          "Availability",
          "Authentication",
          "Abstraction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Atomicity in DBMS transactions?",
        "options": [
          "All operations in transaction execute successfully or none at all (all-or-nothing)",
          "Data is stored in atomic units",
          "Queries run atomically fast",
          "Concurrency is disabled"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Redundancy in database systems?",
        "options": [
          "Duplication of the same data across multiple files/tables causing inconsistency",
          "Data backup copy",
          "Data compression",
          "Data encryption"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which level of 3-Schema Architecture describes HOW data is physically stored on disk?",
        "options": [
          "Internal / Physical Level",
          "Conceptual Level",
          "External / View Level",
          "Logical Level"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Primary Key in RDBMS?",
        "options": [
          "A column or set of columns that uniquely identifies each row in a table and cannot contain NULL values",
          "A key to unlock database file",
          "First column in table",
          "Foreign key reference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Independence in DBMS?",
        "options": [
          "The ability to modify schema definition at one level without affecting schema at next higher level",
          "Operating database without internet",
          "Deleting unused tables",
          "Using plain text files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which ER model entity attribute type consists of multiple atomic sub-attributes (e.g. Address: Street, City, Zip)?",
        "options": [
          "Composite Attribute",
          "Derived Attribute",
          "Multivalued Attribute",
          "Key Attribute"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Derived Attribute in ER diagrams?",
        "options": [
          "An attribute whose value is computed from another attribute (e.g. Age from DateOfBirth)",
          "A primary key",
          "A foreign key",
          "A composite key"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which relationship cardinality describes a Manager managing one Department and a Department managed by one Manager?",
        "options": [
          "One-to-One (1:1)",
          "One-to-Many (1:N)",
          "Many-to-Many (M:N)",
          "Self-Referential"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Normalization in database design?",
        "options": [
          "Systematic process of organizing tables to eliminate data redundancy and anomalies",
          "Converting SQL to NoSQL",
          "Indexing tables",
          "Creating database backups"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Dirty Read anomaly in concurrent database transactions?",
        "options": [
          "When a transaction reads data modified by an uncommitted concurrent transaction that later rolls back",
          "Reading corrupted data from disk",
          "Reading deleted tables",
          "Reading outdated cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Transaction Isolation Level prevents Dirty Reads but permits Non-Repeatable Reads?",
        "options": [
          "Read Committed",
          "Read Uncommitted",
          "Repeatable Read",
          "Serializable"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the HIGHEST transaction isolation level in ANSI SQL standard?",
        "options": [
          "Serializable",
          "Repeatable Read",
          "Read Committed",
          "Read Uncommitted"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is B-Tree / B+ Tree in database indexing?",
        "options": [
          "Self-balancing tree data structure that maintains sorted data for logarithmic lookup, insertion, and deletion",
          "A binary search tree",
          "A hash table",
          "A graph structure"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Candidate Key in DBMS?",
        "options": [
          "A minimal superkey capable of uniquely identifying a table record; eligible to become Primary Key",
          "A foreign key",
          "A secondary key",
          "A composite key"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Super Key?",
        "options": [
          "Any set of attributes that uniquely identifies a row in a relation",
          "A primary key only",
          "A foreign key only",
          "An encrypted key"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Weak Entity Set in ER modeling?",
        "options": [
          "An entity set that does not possess a primary key of its own and depends on an identifying relationship",
          "A deleted table",
          "A table with no rows",
          "A view"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does \"C\" stand for in ACID properties?",
        "options": [
          "Consistency",
          "Concurrency",
          "Compiler",
          "Cluster"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does \"D\" stand for in ACID properties?",
        "options": [
          "Durability",
          "Dependability",
          "Distribution",
          "Data"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Durability in ACID properties?",
        "options": [
          "Once a transaction commits, its updates persist permanently even in case of power loss or system failure",
          "Database runs continuously",
          "Table size can grow infinitely",
          "Disk space is durable"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command defines schema structure DDL in SQL?",
        "options": [
          "CREATE, ALTER, DROP",
          "SELECT, INSERT",
          "COMMIT, ROLLBACK",
          "GRANT, REVOKE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command subset represents Data Manipulation Language (DML) in SQL?",
        "options": [
          "INSERT, UPDATE, DELETE",
          "CREATE, DROP",
          "GRANT, REVOKE",
          "ALTER, TRUNCATE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Lossless Join Decomposition in normalization?",
        "options": [
          "Decomposing relation R into R1 and R2 such that joining them reconstructs exact original relation R without extra or missing tuples",
          "Deleting rows during join",
          "Joining tables with no keys",
          "Inner join with NULLs"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Artificial Intelligence Fundamentals Assessment",
    "description": "Explore core AI concepts: intelligent agents, search algorithms (BFS, DFS, A*), knowledge representation, expert systems, NLP, and computer vision.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Who is widely considered the \"Father of Artificial Intelligence\"?",
        "options": [
          "John McCarthy",
          "Alan Turing",
          "Geoffrey Hinton",
          "Marvin Minsky"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Turing Test designed to evaluate?",
        "options": [
          "Whether a machine can exhibit intelligent behavior indistinguishable from a human",
          "A machine's processing clock speed",
          "A machine's memory capacity",
          "A machine's ability to play chess"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an Intelligent Agent in AI theory?",
        "options": [
          "An entity that perceives its environment through sensors and takes actions via actuators to achieve goals",
          "A software virus",
          "A chat bot UI",
          "A database index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which search algorithm uses heuristic evaluation function `f(n) = g(n) + h(n)` to find optimal path?",
        "options": [
          "A* Search Algorithm",
          "Breadth-First Search (BFS)",
          "Depth-First Search (DFS)",
          "Dijkstra"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Heuristic function `h(n)` in search algorithms?",
        "options": [
          "An estimate of the cost from node n to the goal state",
          "The exact distance from start to n",
          "The depth of node n",
          "The number of branches"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which agent type selects actions based strictly on current percept, ignoring history?",
        "options": [
          "Simple Reflex Agent",
          "Model-Based Agent",
          "Goal-Based Agent",
          "Utility-Based Agent"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Minimax Algorithm used for in AI?",
        "options": [
          "Decision-making algorithm for adversarial two-player zero-sum games (like Chess or Tic-Tac-Toe)",
          "Clustering unlabeled data",
          "Training neural networks",
          "Sorting arrays"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Alpha-Beta Pruning do to Minimax search tree?",
        "options": [
          "Prunes branches that cannot possibly influence final decision, reducing search nodes",
          "Randomly deletes 50% of tree",
          "Converts tree to linked list",
          "Adds dummy nodes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Knowledge Base in Expert Systems?",
        "options": [
          "A repository of domain-specific facts, rules, and heuristics used for automated reasoning",
          "A SQL database",
          "A web browser cache",
          "A training dataset"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Inference Engine in AI Expert Systems?",
        "options": [
          "The reasoning component that applies logical rules to knowledge base to deduce new facts or answers",
          "The neural network GPU",
          "The user interface",
          "The database connector"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Natural Language Processing (NLP)?",
        "options": [
          "A branch of AI enabling computers to understand, interpret, and generate human language text and speech",
          "Writing HTML code",
          "Translating C to Assembly",
          "Formatting JSON"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Computer Vision in AI field?",
        "options": [
          "Enabling computers to gain high-level understanding from digital images or videos",
          "Designing computer monitors",
          "Rendering 3D games",
          "Optimizing web CSS"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which branch of AI focuses on enabling machines to learn from data without being explicitly programmed?",
        "options": [
          "Machine Learning",
          "Expert Systems",
          "Symbolic Logic",
          "Rule-Based Parsing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Artificial General Intelligence (AGI)?",
        "options": [
          "Hypothetical AI possessing ability to understand, learn, and apply intelligence across any intellectual task a human can do",
          "Current narrow AI models like spam filters",
          "A database engine",
          "A web scraping tool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Constraint Satisfaction Problem (CSP) in AI?",
        "options": [
          "A problem where state is defined by variables subject to constraints (e.g. Sudoku, Map Coloring)",
          "Sorting a list under memory constraint",
          "Network bandwidth throttling",
          "CPU scheduling"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which search strategy expands node with lowest path cost `g(n)` first?",
        "options": [
          "Uniform Cost Search (UCS)",
          "Depth-First Search",
          "Greedy Best-First Search",
          "Hill Climbing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Hill Climbing search algorithm vulnerability?",
        "options": [
          "Getting stuck at local maxima, plateaus, or ridges",
          "Consuming infinite memory",
          "Running only on GPUs",
          "Failing to start"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is First-Order Logic (FOL) in knowledge representation?",
        "options": [
          "Formal logic system representing objects, relations, functions, and quantifiers (∀, ∃)",
          "Boolean logic with AND/OR only",
          "SQL query syntax",
          "Python conditional code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Forward Chaining in rule-based systems?",
        "options": [
          "Data-driven reasoning starting from known facts to infer new facts until goal is reached",
          "Goal-driven reasoning working backward",
          "Backpropagation in neural nets",
          "Iterative deepening"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Backward Chaining?",
        "options": [
          "Goal-driven reasoning starting from hypothesis/goal and searching backward for supporting rules/facts",
          "Data-driven search",
          "Gradient descent",
          "BFS search"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Semantic Web / Knowledge Graph?",
        "options": [
          "Structured representation of real-world entities and relationships to provide contextual understanding to machines",
          "HTML5 web pages",
          "A CSS framework",
          "A database view"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Fuzzy Logic in AI?",
        "options": [
          "Form of logic where truth values range continuously between 0 and 1 (handling partial truth/uncertainty)",
          "Logic with syntax errors",
          "Binary Boolean logic",
          "Neural network activation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Reinforcement Learning agent environment feedback loop?",
        "options": [
          "Agent takes actions in environment, receiving rewards or penalties to learn optimal policy",
          "Supervised training with labeled dataset",
          "Unsupervised clustering",
          "Manual rule programming"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Genetic Algorithm inspired by?",
        "options": [
          "Natural selection and biological evolution (mutation, crossover, selection)",
          "Human brain neurons",
          "CPU clock cycles",
          "Relational algebra"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Speech Recognition in NLP?",
        "options": [
          "Converting spoken acoustic audio signals into written text",
          "Translating languages",
          "Synthesizing voice from text",
          "Grammar checking"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Sentiment Analysis in NLP?",
        "options": [
          "Determining emotional tone or polarity (positive, negative, neutral) expressed in text data",
          "Counting word frequencies",
          "Parsing HTML tags",
          "Encrypting text"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Object Detection in Computer Vision?",
        "options": [
          "Identifying and locating (via bounding boxes) specific objects within an image",
          "Resizing an image",
          "Converting image to grayscale",
          "Compressing PNG file"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Machine Translation?",
        "options": [
          "Automated translation of text or speech from one natural language to another using AI",
          "Compiling C to binary",
          "Converting JSON to XML",
          "Encoding Base64"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Robot Kinematics?",
        "options": [
          "Study of motion of robotic mechanisms without considering forces that cause motion",
          "AI chatbot design",
          "Database query optimization",
          "Image segmentation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Swarm Intelligence inspired by?",
        "options": [
          "Collective behavioral patterns of self-organized social colonies (ants, bees, flocking birds)",
          "Single CPU core",
          "Quantum computing",
          "Neural network backprop"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Generative AI Fundamentals Assessment",
    "description": "Assess foundational concepts in Generative AI: LLMs, Transformer architecture, tokenization, embeddings, prompt engineering, fine-tuning, and AI ethics.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Generative AI?",
        "options": [
          "Branch of AI capable of generating new content (text, images, audio, code) by learning patterns from data",
          "A traditional rule-based calculator",
          "A database search engine",
          "A web scraper"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which neural network architecture introduced in 2017 revolutionized Generative AI and LLMs?",
        "options": [
          "Transformer Architecture (Self-Attention)",
          "Convolutional Neural Networks (CNN)",
          "Recurrent Neural Networks (RNN)",
          "Multi-Layer Perceptron"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Self-Attention Mechanism in Transformers?",
        "options": [
          "Allows model to dynamically weigh the importance of different tokens in a sequence relative to each other",
          "Focuses only on first word of sentence",
          "Reduces GPU memory to zero",
          "Disables training weights"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Token in Large Language Models (LLMs)?",
        "options": [
          "A basic unit of text (sub-word, word, or character) processed by the model",
          "A security JWT token",
          "A database primary key",
          "A GPU memory block"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Tokenization in LLM pipeline?",
        "options": [
          "The process of breaking input text strings into discrete tokens and mapping them to numerical IDs",
          "Encrypting text data",
          "Translating languages",
          "Formatting JSON outputs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Text Embedding in Natural Language Processing?",
        "options": [
          "Numerical vector representation of text in high-dimensional space capturing semantic meaning",
          "A font file embedded in web page",
          "An HTML tag",
          "A Base64 string"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Prompt Engineering?",
        "options": [
          "The practice of crafting, optimizing, and structuring input prompts to guide LLMs to desired outputs",
          "Writing C++ compiler code",
          "Installing GPU drivers",
          "Designing database schemas"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is \"Hallucination\" in LLM context?",
        "options": [
          "When an LLM generates plausible-sounding but factually incorrect or fabricated information",
          "When a GPU overheats",
          "When token limit is exceeded",
          "When model throws syntax error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Temperature parameter in LLM text generation?",
        "options": [
          "Hyperparameter controlling randomness/creativity of token predictions (higher = more creative/random)",
          "CPU temperature monitor",
          "Training learning rate",
          "Batch size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does RAG stand for in Generative AI architecture?",
        "options": [
          "Retrieval-Augmented Generation",
          "Random Automated Generation",
          "Recurrent Agent Graph",
          "Rule-Based AI Gateway"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Retrieval-Augmented Generation (RAG)?",
        "options": [
          "Technique connecting LLM to external knowledge base/vector database to ground responses in accurate data",
          "Training LLM from scratch",
          "Compressing prompt tokens",
          "Translating code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Vector Database (e.g. Pinecone, Chroma, Milvus)?",
        "options": [
          "Database optimized for storing and querying high-dimensional vector embeddings via similarity search",
          "A SQL relational database",
          "A file server",
          "A key-value cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Few-Shot Prompting?",
        "options": [
          "Providing a few context examples inside the prompt to guide the model on output format/task",
          "Training model for few epochs",
          "Prompting with short words",
          "Running model without prompt"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Zero-Shot Prompting?",
        "options": [
          "Asking the model to perform a task without providing any explicit examples in the prompt",
          "Providing zero text input",
          "Training with zero data",
          "Running model with temperature 0"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Chain-of-Thought (CoT) Prompting?",
        "options": [
          "Prompting technique encouraging LLM to break down reasoning step-by-step before answering",
          "Linking multiple LLM calls",
          "Chaining Python functions",
          "Sequential token generation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Fine-Tuning an LLM?",
        "options": [
          "Further training a pre-trained model on a specific domain dataset to adapt its behavior/performance",
          "Adjusting prompt text",
          "Installing newer libraries",
          "Setting temperature to 0"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is PEFT (Parameter-Efficient Fine-Tuning) such as LoRA?",
        "options": [
          "Technique fine-tuning only a small subset of model parameters (or adapter weights), saving memory/compute",
          "Training all model layers from scratch",
          "Prompt engineering method",
          "Token compression tool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does LoRA stand for in LLM fine-tuning?",
        "options": [
          "Low-Rank Adaptation",
          "Logic-Oriented Reasoning Agent",
          "Language Optimization Rule Algorithm",
          "Linear Output Recurrent Architecture"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is RLHF in LLM alignment?",
        "options": [
          "Reinforcement Learning from Human Feedback",
          "Recurrent Logic for High Frequency",
          "Randomized Layer Hosting Framework",
          "Role-Based LLM Filtering"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of RLHF in models like ChatGPT?",
        "options": [
          "Aligns model outputs with human preferences, safety standards, and helpfulness",
          "Increases training speed",
          "Reduces vector embedding size",
          "Formats Markdown text"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Context Window in LLMs?",
        "options": [
          "The maximum number of tokens (input + output) an LLM can process in a single interaction",
          "The browser UI window",
          "The GPU memory buffer",
          "The training epoch limit"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Generative AI model type creates realistic images from text prompts (e.g. Stable Diffusion, Midjourney)?",
        "options": [
          "Diffusion Models",
          "Transformer Text Decoders",
          "Markov Chains",
          "Decision Trees"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is GAN (Generative Adversarial Network)?",
        "options": [
          "Architecture consisting of a Generator and Discriminator competing against each other to produce realistic data",
          "A vector database",
          "A prompt technique",
          "An LLM evaluation metric"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is System Prompt / System Message in LLM chat interfaces?",
        "options": [
          "High-priority instruction setting the identity, tone, rules, and constraints for the AI assistant",
          "A system crash log",
          "An OS notification",
          "A user question"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Multimodal AI?",
        "options": [
          "AI models capable of processing and understanding multiple data modalities simultaneously (text, image, audio, video)",
          "AI running on multiple servers",
          "AI with multiple languages",
          "AI trained on multiple GPUs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is System 1 vs System 2 Thinking in AI reasoning research?",
        "options": [
          "System 1: fast intuitive token prediction; System 2: slow deliberate step-by-step reasoning",
          "System 1 is Linux, System 2 is Windows",
          "System 1 is CPU, System 2 is GPU",
          "System 1 is SQL, System 2 is NoSQL"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is AI Guardrails / Moderation API?",
        "options": [
          "Safety layer that inspects and filters unsafe, harmful, or policy-violating prompts and outputs",
          "A physical server rack border",
          "A rate limiter",
          "A CSS container"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does LLM Quantization (e.g. 4-bit, 8-bit) achieve?",
        "options": [
          "Reduces precision of model weights to shrink memory footprint and speed up inference with minimal accuracy loss",
          "Increases model parameters",
          "Deletes vocabulary tokens",
          "Translates code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Inference in Machine Learning / LLM context?",
        "options": [
          "The process of running data through a trained model to generate predictions or content",
          "Training model on dataset",
          "Cleaning raw text data",
          "Labeling training data"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Over-reliance / Automation Bias in AI ethics?",
        "options": [
          "Uncritical trust in AI outputs without human verification or critical evaluation",
          "Overclocking GPUs",
          "Running too many training epochs",
          "Creating duplicate prompts"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Machine Learning Fundamentals Assessment",
    "description": "Comprehensive test covering supervised & unsupervised learning, regression, classification, clustering, bias-variance tradeoff, cross-validation, and metrics.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Supervised Machine Learning?",
        "options": [
          "Learning model using labeled training data where target ground truth outputs are provided",
          "Learning without any target labels",
          "Agent learning via environment rewards",
          "Manual rule programming"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Unsupervised Machine Learning?",
        "options": [
          "Learning patterns and structures from unlabeled input data (e.g. Clustering, Dimensionality Reduction)",
          "Learning with labeled datasets",
          "Reinforcement learning",
          "Rule-based expert systems"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which task predicts a CONTINUOUS numerical value (e.g. house price estimation)?",
        "options": [
          "Regression",
          "Classification",
          "Clustering",
          "Dimensionality Reduction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which task assigns input data to DISCRETE categories/labels (e.g. Spam vs Not Spam)?",
        "options": [
          "Classification",
          "Regression",
          "Clustering",
          "Forecasting"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Overfitting in Machine Learning?",
        "options": [
          "When model learns training data noise and details too well, performing poorly on unseen test data",
          "When model is too simple to capture underlying data pattern",
          "When training dataset is empty",
          "When learning rate is 0"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Underfitting?",
        "options": [
          "When a model is too simple to capture the underlying structure of the data, performing poorly on both train and test data",
          "When model memorizes data",
          "When accuracy is 100%",
          "When features are scaled"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Bias-Variance Tradeoff in ML model training?",
        "options": [
          "Balancing model simplification error (bias) and sensitivity to training data fluctuations (variance)",
          "Balancing CPU vs GPU usage",
          "Balancing train vs test split ratio",
          "Balancing feature count vs row count"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is K-Fold Cross-Validation?",
        "options": [
          "Resampling technique splitting dataset into K subsets to train and validate model K times for robust performance estimation",
          "Splitting data 50/50 once",
          "Training model K times faster",
          "Selecting K top features"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Precision metric in classification evaluation?",
        "options": [
          "Ratio of True Positives to total predicted positives `TP / (TP + FP)`",
          "Ratio of True Positives to total actual positives `TP / (TP + FN)`",
          "Total correct predictions divided by all predictions",
          "Harmonic mean of precision and recall"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Recall (Sensitivity) metric in classification?",
        "options": [
          "Ratio of True Positives to total actual positives `TP / (TP + FN)`",
          "Ratio of True Positives to total predicted positives `TP / (TP + FP)`",
          "Accuracy percentage",
          "False Positive Rate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is F1-Score?",
        "options": [
          "Harmonic mean of Precision and Recall `2 * (Precision * Recall) / (Precision + Recall)`",
          "Average of Precision and Accuracy",
          "Difference between Train and Test accuracy",
          "Square root of MSE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Confusion Matrix?",
        "options": [
          "Table visualization summarizing performance of a classification model (TP, TN, FP, FN)",
          "A matrix with corrupted data",
          "A feature correlation heatmap",
          "A loss function graph"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Feature Scaling (Normalization / Standardization)?",
        "options": [
          "Transforming numerical feature values to a uniform scale (e.g. 0-1 or mean=0, std=1) for better algorithm convergence",
          "Deleting features",
          "Renaming columns",
          "Converting text to numbers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is One-Hot Encoding?",
        "options": [
          "Converting categorical variables into binary vectors (0s and 1s) for machine learning models",
          "Scaling numerical features",
          "Normalizing target labels",
          "Filtering missing data"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Mean Squared Error (MSE) measure in Regression evaluation?",
        "options": [
          "Average of squared differences between predicted values and actual target values",
          "Count of classification errors",
          "Percentage accuracy",
          "Correlation coefficient"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Preprocessing in ML workflow?",
        "options": [
          "Cleaning, transforming, and organizing raw data into suitable format for model training",
          "Deploying model to server",
          "Hyperparameter tuning",
          "Downloading GPU drivers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Feature Engineering?",
        "options": [
          "Creating new informative features from raw data to improve machine learning model performance",
          "Building computer hardware",
          "Writing CSS code",
          "Database indexing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Hyperparameter Tuning?",
        "options": [
          "Optimizing model parameters set BEFORE training (e.g. learning rate, tree depth, K in KNN)",
          "Updating weights during backpropagation",
          "Cleaning missing data",
          "Selecting train/test split"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Grid Search CV?",
        "options": [
          "Exhaustive search technique that evaluates model performance across all combinations of specified hyperparameter grid",
          "Random parameter search",
          "Gradient descent optimization",
          "Binary search tree"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Random Search for hyperparameter optimization?",
        "options": [
          "Sampling random combinations of hyperparameters from a specified distribution",
          "Exhaustive grid search",
          "Manual tuning",
          "Genetic algorithm only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Leakage in Machine Learning?",
        "options": [
          "When information from outside training dataset (like test set) inadvertently influences model during training",
          "Database data breach",
          "Memory leak in C++",
          "Unused features"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Stratified K-Fold Cross Validation?",
        "options": [
          "K-Fold variation ensuring each fold maintains the same percentage of target class samples as complete dataset",
          "Random split fold",
          "Single split validation",
          "Time-series fold"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is ROC-AUC Curve in binary classification?",
        "options": [
          "Plot of True Positive Rate vs False Positive Rate across classification thresholds; AUC measures overall class separation ability",
          "Regression loss curve",
          "Cluster silhouette plot",
          "Learning rate schedule"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is R-Squared (R²) metric in Linear Regression?",
        "options": [
          "Coefficient of determination measuring the proportion of variance in target variable predictable from features",
          "Mean absolute error",
          "Accuracy score",
          "Confusion matrix ratio"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Curse of Dimensionality?",
        "options": [
          "Phenomenon where data becomes sparse in high-dimensional spaces, degrading model performance",
          "Database storage limit",
          "CPU bottleneck",
          "Overfitting on small rows"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Dimensionality Reduction technique like PCA?",
        "options": [
          "Transforming high-dimensional data into lower-dimensional space while preserving maximum variance",
          "Deleting random columns",
          "One-hot encoding",
          "Scaling features"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does PCA stand for in unsupervised learning?",
        "options": [
          "Principal Component Analysis",
          "Predictive Class Algorithm",
          "Parallel Clustering Architecture",
          "Primary Control Association"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Imbalanced Dataset in classification?",
        "options": [
          "When target classes are represented unequally (e.g. 99% non-fraud vs 1% fraud)",
          "Dataset with missing values",
          "Dataset with string features",
          "Dataset with 0 rows"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What technique handles Imbalanced Data by creating synthetic minority class samples?",
        "options": [
          "SMOTE (Synthetic Minority Over-sampling Technique)",
          "MinMax Scaling",
          "PCA",
          "L1 Regularization"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is L1 Regularization (Lasso)?",
        "options": [
          "Adds sum of absolute weight values to loss function, performing feature selection by driving weights to zero",
          "Adds squared weight values",
          "Scales dataset to 0-1",
          "Removes duplicate rows"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is L2 Regularization (Ridge)?",
        "options": [
          "Adds sum of squared weight values to loss function, shrinking weights smoothly towards zero",
          "Lasso regularization",
          "Feature encoding",
          "Cross-validation fold"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is ElasticNet Regularization?",
        "options": [
          "Combines both L1 (Lasso) and L2 (Ridge) regularization penalties",
          "Decision tree pruning",
          "K-Means clustering",
          "PCA reduction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Early Stopping during model training?",
        "options": [
          "Halting training when validation loss stops improving to prevent overfitting",
          "Stopping server process",
          "Canceling API request",
          "Deleting model checkpoint"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Ensemble Learning in Machine Learning?",
        "options": [
          "Combining predictions from multiple base models to produce a stronger overall prediction (e.g. Random Forest, XGBoost)",
          "Training a single decision tree",
          "Running grid search",
          "Scaling features"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Transfer Learning?",
        "options": [
          "Leveraging knowledge/weights from a pre-trained model on a large dataset and applying it to a new related task",
          "Transferring files via FTP",
          "Copying database rows",
          "Converting Python to C++"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Machine Learning Algorithms Assessment",
    "description": "Assess core ML algorithms: Linear/Logistic Regression, Decision Trees, Random Forest, KNN, Naive Bayes, SVM, K-Means, and Gradient Boosting.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which algorithm models linear relationship between independent input features and a continuous target variable?",
        "options": [
          "Linear Regression",
          "Logistic Regression",
          "K-Means",
          "Decision Tree"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which algorithm uses Sigmoid function to map predictions to probabilities between 0 and 1 for binary classification?",
        "options": [
          "Logistic Regression",
          "Linear Regression",
          "K-Means",
          "PCA"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What function converts log-odds into probabilities in Logistic Regression?",
        "options": [
          "Sigmoid Function `1 / (1 + e^-z)`",
          "ReLU Function",
          "Softmax Function",
          "Linear Function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Decision Tree algorithm in ML?",
        "options": [
          "Non-parametric supervised algorithm that splits data recursively based on feature decision rules",
          "Clustering algorithm",
          "Linear model",
          "Neural network layer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What criterion measures purity/impurity of a node split in Decision Tree classification?",
        "options": [
          "Information Gain / Gini Impurity / Entropy",
          "Mean Squared Error",
          "Euclidean Distance",
          "Cosine Similarity"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Random Forest algorithm?",
        "options": [
          "Ensemble learning method that constructs a multitude of decision trees using bagging (bootstrap aggregation)",
          "A single deep decision tree",
          "A neural network",
          "A clustering technique"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Bagging (Bootstrap Aggregating)?",
        "options": [
          "Ensemble technique that trains base models independently on random bootstrap samples of dataset with replacement",
          "Sequential model boosting",
          "Feature scaling",
          "Dimensionality reduction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Boosting in ensemble algorithms (e.g. AdaBoost, Gradient Boosting, XGBoost)?",
        "options": [
          "Ensemble technique that trains base models sequentially, each correcting errors of previous models",
          "Training models in parallel",
          "Bagging technique",
          "Random feature selection"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What distance metric is most commonly used in K-Nearest Neighbors (KNN)?",
        "options": [
          "Euclidean Distance",
          "Jaccard Distance",
          "Hamming Distance",
          "Cross Entropy"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How does K-Nearest Neighbors (KNN) classify a new query data point?",
        "options": [
          "Assigns majority class label among its K nearest neighbor samples in feature space",
          "Solves linear matrix equation",
          "Builds decision tree rules",
          "Computes cluster centroids"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What assumption does Naive Bayes classifier make about input features?",
        "options": [
          "Assumes all features are conditionally independent given the class label",
          "Assumes features are highly correlated",
          "Assumes target is continuous",
          "Assumes non-linear boundaries"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What theorem forms the foundation of Naive Bayes classifier?",
        "options": [
          "Bayes' Theorem",
          "Central Limit Theorem",
          "Pythagorean Theorem",
          "Fermat's Theorem"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Support Vector Machine (SVM) objective?",
        "options": [
          "Finds hyper-plane in N-dimensional space that maximizes margin between distinct data classes",
          "Minimizes sum of squared errors",
          "Groups data into K clusters",
          "Computes decision tree depth"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are Support Vectors in Support Vector Machine (SVM)?",
        "options": [
          "The data points located closest to the decision hyper-plane boundary",
          "Random feature vectors",
          "Cluster center points",
          "Weight vectors in neural net"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Kernel Trick in Support Vector Machines (SVM)?",
        "options": [
          "Implicitly mapping input data into higher-dimensional space to make non-linearly separable data linearly separable",
          "Scaling features to 0-1",
          "Pruning decision tree branches",
          "Adding random noise"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What type of algorithm is K-Means?",
        "options": [
          "Unsupervised Clustering Algorithm",
          "Supervised Classification Algorithm",
          "Supervised Regression Algorithm",
          "Dimensionality Reduction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How does K-Means Clustering algorithm work?",
        "options": [
          "Iteratively assigns data points to nearest cluster centroid and updates centroids until convergence",
          "Builds decision tree rules",
          "Fits linear regression line",
          "Uses Bayes theorem"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the \"K\" in K-Means clustering?",
        "options": [
          "The pre-defined number of clusters to form in data",
          "Number of features",
          "Number of iteration loops",
          "Learning rate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What method helps determine the optimal number of clusters K in K-Means?",
        "options": [
          "Elbow Method / Silhouette Analysis",
          "Gradient Descent",
          "Confusion Matrix",
          "Cross-Validation fold"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Hierarchical Clustering?",
        "options": [
          "Clustering method building a hierarchy of clusters represented visually as a Dendrogram",
          "K-Means variant",
          "Linear classification",
          "Neural network"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is DBSCAN clustering algorithm advantage over K-Means?",
        "options": [
          "Discovers clusters of arbitrary shape and identifies noise/outliers without pre-specifying K",
          "Requires setting K upfront",
          "Runs only on linear data",
          "Requires labeled target"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is XGBoost (eXtreme Gradient Boosting)?",
        "options": [
          "Optimized distributed gradient boosting library engineered for high efficiency, speed, and accuracy",
          "Deep neural network",
          "Single decision tree",
          "Clustering algorithm"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Gradient Boosting optimize during model training?",
        "options": [
          "Optimizes loss function by adding new base learners sequentially using gradient descent",
          "Maximizes Euclidean distance",
          "Minimizes tree depth",
          "Scales feature columns"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Tree Pruning in Decision Trees?",
        "options": [
          "Removing sub-nodes/branches that provide little power to prevent overfitting",
          "Adding new leaves",
          "Splitting root node",
          "Encoding categorical data"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which algorithm handles non-linear relationships naturally without requiring feature scaling?",
        "options": [
          "Decision Trees / Random Forest",
          "Linear Regression",
          "Logistic Regression",
          "Support Vector Machines"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Softmax function used for in multi-class classification models?",
        "options": [
          "Converts raw logit score vector into a probability distribution over multiple classes summing to 1",
          "Scales numbers between -1 and 1",
          "Calculates Euclidean distance",
          "Calculates Gini index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Ridge Regression (L2)?",
        "options": [
          "Linear regression variant adding L2 penalty (squared magnitude of coefficients) to loss function",
          "L1 Lasso regression",
          "Decision tree algorithm",
          "Unsupervised algorithm"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Lasso Regression (L1)?",
        "options": [
          "Linear regression variant adding L1 penalty (absolute magnitude of coefficients), driving uninformative weights to zero",
          "Ridge regression",
          "K-Means",
          "KNN"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which algorithm is sensitive to feature scale and REQUIRES feature scaling before training?",
        "options": [
          "K-Nearest Neighbors (KNN) & SVM",
          "Decision Tree",
          "Random Forest",
          "Naive Bayes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cosine Similarity metric?",
        "options": [
          "Measures similarity between two non-zero vectors by calculating the cosine of the angle between them",
          "Euclidean distance",
          "Manhattan distance",
          "Accuracy score"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Deep Learning Fundamentals Assessment",
    "description": "Test foundational Deep Learning: artificial neural networks, activation functions, backpropagation, gradient descent, CNNs, RNNs, and loss functions.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is an Artificial Neural Network (ANN) inspired by?",
        "options": [
          "The biological neural networks and synaptic structures of human brain",
          "Relational databases",
          "CPU logic gates",
          "Optical fiber networks"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Perceptron in Deep Learning history?",
        "options": [
          "The simplest form of feedforward neural network / single artificial neuron binary classifier",
          "A deep 100-layer network",
          "A GPU processor",
          "A loss function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Backpropagation in neural network training?",
        "options": [
          "Algorithm that computes gradient of loss function with respect to each weight via chain rule to update weights",
          "Forward pass data execution",
          "Data augmentation step",
          "Model inference step"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Gradient Descent in Deep Learning?",
        "options": [
          "Optimization algorithm used to minimize loss function by iteratively moving weights in direction of steepest descent",
          "A neural network layer",
          "An activation function",
          "A dataset split method"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Learning Rate in Gradient Descent?",
        "options": [
          "Hyperparameter controlling the step size taken towards minimum during weight updates",
          "Number of epochs",
          "Number of hidden layers",
          "Batch size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Vanishing Gradient Problem in deep networks?",
        "options": [
          "Gradients become extremely small during backpropagation, stopping earlier layers from updating weights",
          "Gradients becoming infinite",
          "GPU memory overflowing",
          "Dataset missing values"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Activation Function resolves Vanishing Gradient problem for positive inputs in deep networks?",
        "options": [
          "ReLU (Rectified Linear Unit)",
          "Sigmoid",
          "Tanh",
          "Step Function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the formula of ReLU activation function?",
        "options": [
          "`f(x) = max(0, x)`",
          "`f(x) = 1 / (1 + e^-x)`",
          "`f(x) = tanh(x)`",
          "`f(x) = x^2`"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which activation function outputs values constrained in range `(-1 to 1)`?",
        "options": [
          "Tanh (Hyperbolic Tangent)",
          "Sigmoid",
          "ReLU",
          "Softmax"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Epoch in neural network training?",
        "options": [
          "One complete pass of the ENTIRE training dataset through the neural network (forward + backward)",
          "A single batch execution",
          "A weight update step",
          "A single neuron"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Batch Size?",
        "options": [
          "Number of training samples processed in one forward/backward pass before updating model weights",
          "Total dataset size",
          "Total epochs",
          "Number of layers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Convolutional Neural Network (CNN) specifically designed for?",
        "options": [
          "Grid-structured data processing like digital Images and Computer Vision tasks",
          "Tabular database rows",
          "Audio synthesis only",
          "Text generation only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the primary function of Convolutional Layer in CNN?",
        "options": [
          "Applies learnable filters/kernels to extract local spatial features (edges, textures, shapes)",
          "Reduces image dimension by half",
          "Flattens vector into 1D",
          "Calculates cross entropy"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Pooling Layer (e.g. Max Pooling) do in CNN?",
        "options": [
          "Downsamples spatial dimensions (width and height) of feature maps, reducing parameters and computation",
          "Increases image resolution",
          "Applies activation function",
          "Computes loss function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Recurrent Neural Network (RNN) designed to process?",
        "options": [
          "Sequential or time-series data where current output depends on previous state memory",
          "Static 2D images",
          "Unordered set data",
          "Tabular CSV files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What specialized RNN architectures address exploding/vanishing gradients in long sequences?",
        "options": [
          "LSTM (Long Short-Term Memory) & GRU (Gated Recurrent Unit)",
          "CNN & ResNet",
          "MLP & Perceptron",
          "GAN & VAE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Dropout regularization in Deep Learning?",
        "options": [
          "Randomly zeroing out a proportion of neuron activations during training to prevent co-adaptation and overfitting",
          "Deleting training rows",
          "Stopping training early",
          "Reducing learning rate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cross-Entropy Loss function commonly used for?",
        "options": [
          "Evaluating classification model probabilities output against categorical ground truth",
          "Mean squared error in regression",
          "Clustering evaluation",
          "Image resizing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Softmax function role in output layer of multi-class classification neural net?",
        "options": [
          "Converts raw output logits into probability distribution summing to 1.0",
          "Applies ReLU non-linearity",
          "Scales weights to zero",
          "Computes gradients"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Adam (Adaptive Moment Estimation) in Deep Learning?",
        "options": [
          "Popular adaptive optimization algorithm combining advantages of AdaGrad and RMSProp",
          "A neural network layer",
          "A dataset loader",
          "A GPU hardware acceleration framework"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Batch Normalization in deep neural networks?",
        "options": [
          "Normalizing layer inputs per mini-batch during training to stabilize and speed up convergence",
          "Normalizing CSV dataset",
          "Scaling final probabilities",
          "Batching training samples"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Exploding Gradient Problem?",
        "options": [
          "Gradients accumulate exponentially during backpropagation, causing large weight updates and unstable model",
          "Gradients becoming zero",
          "Loss becoming zero",
          "Accuracy reaching 100%"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What technique prevents Exploding Gradients by capping gradient norms to a maximum threshold?",
        "options": [
          "Gradient Clipping",
          "Dropout",
          "Batch Normalization",
          "Data Augmentation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Augmentation in Computer Vision model training?",
        "options": [
          "Creating modified copies of images (rotation, flipping, cropping) to enlarge training dataset and prevent overfitting",
          "Downloading new images from internet",
          "Deleting noisy images",
          "Resizing images to 4K"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Autoencoder in Deep Learning?",
        "options": [
          "Unsupervised neural net architecture that compresses input into bottleneck code (encoder) and reconstructs input (decoder)",
          "Supervised classifier",
          "CNN for object detection",
          "Text generator"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is ResNet (Residual Network) key innovation?",
        "options": [
          "Skip connections / Residual shortcuts that allow training extremely deep networks (100+ layers) without gradient degradation",
          "Convolutional pooling",
          "Recurrent cell gates",
          "Self-attention heads"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Loss Function in Deep Learning?",
        "options": [
          "Mathematical function measuring discrepancy between network predicted outputs and true target values",
          "A function measuring GPU speed",
          "An activation function",
          "A dataset splitter"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is PyTorch / TensorFlow?",
        "options": [
          "Open-source deep learning framework providing tensor computation with GPU acceleration and automatic differentiation",
          "A database engine",
          "A web browser",
          "A code minifier"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Tensor in Deep Learning frameworks?",
        "options": [
          "Multi-dimensional numerical array data structure (generalization of scalar, vector, matrix)",
          "A CPU thread",
          "A loss value",
          "A neural net layer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CUDA enable in Deep Learning frameworks?",
        "options": [
          "NVIDIA parallel computing platform allowing neural networks to run computations on GPUs",
          "CPU multithreading",
          "Database connection pooling",
          "Browser graphics rendering"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Python for Data Science Assessment",
    "description": "Assess core Python data science stack: NumPy arrays, Pandas DataFrames/Series, indexing, data cleaning, filtering, grouping, and Matplotlib/Seaborn visualization.",
    "category": "Data Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is NumPy primary data structure in Python?",
        "options": [
          "`ndarray` (N-dimensional homogeneous array)",
          "Pandas DataFrame",
          "Python List",
          "Dictionary"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Pandas primary two-dimensional labeled data structure?",
        "options": [
          "DataFrame",
          "Series",
          "NumPy Array",
          "Panel"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Pandas `Series`?",
        "options": [
          "One-dimensional labeled array capable of holding any data type",
          "A 2D table",
          "A 3D tensor",
          "A Python list"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which function loads a CSV file directly into a Pandas DataFrame?",
        "options": [
          "pd.read_csv()",
          "pd.open_csv()",
          "pd.load_csv()",
          "pd.parse_csv()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `df.head(10)` do in Pandas?",
        "options": [
          "Returns the first 10 rows of the DataFrame `df`",
          "Returns top 10 columns",
          "Returns last 10 rows",
          "Returns summary statistics"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method displays concise summary of a DataFrame including index, data types, and non-null counts?",
        "options": [
          "df.info()",
          "df.describe()",
          "df.summary()",
          "df.shape"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method calculates summary statistics (mean, std, min, max, quartiles) for numerical columns in Pandas?",
        "options": [
          "df.describe()",
          "df.info()",
          "df.stats()",
          "df.mean()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you check for missing/null values in a Pandas DataFrame?",
        "options": [
          "df.isnull() / df.isna()",
          "df.missing()",
          "df.nulls()",
          "df.empty()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method drops rows or columns containing missing values in Pandas?",
        "options": [
          "df.dropna()",
          "df.fillna()",
          "df.remove_null()",
          "df.clean()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method fills missing values with a specified value or strategy in Pandas?",
        "options": [
          "df.fillna()",
          "df.replace_null()",
          "df.interpolate()",
          "df.dropna()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `.loc[]` and `.iloc[]` indexing in Pandas?",
        "options": [
          "`.loc[]` is label-based indexing; `.iloc[]` is integer position-based indexing",
          "`.loc[]` is faster",
          "`.iloc[]` works on columns only",
          "They are exact aliases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas method groups data by column values for split-apply-combine aggregation operations?",
        "options": [
          "df.groupby()",
          "df.aggregate()",
          "df.pivot()",
          "df.sort_values()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method sorts a DataFrame by specified column values?",
        "options": [
          "df.sort_values()",
          "df.order_by()",
          "df.sort_index()",
          "df.arrange()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What function creates a vector of evenly spaced numbers over a specified interval in NumPy?",
        "options": [
          "np.linspace()",
          "np.arange()",
          "np.zeros()",
          "np.ones()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `np.zeros((3, 4))` create in NumPy?",
        "options": [
          "3x4 array initialized with all zeros",
          "4x3 array",
          "1D array of length 12",
          "Diagonal matrix"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Vectorization in NumPy?",
        "options": [
          "Executing operations directly on entire arrays in C speed without explicit Python for loops",
          "Converting text to vectors",
          "Reshaping array dimensions",
          "Drawing 3D plots"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Broadcasting in NumPy array operations?",
        "options": [
          "Mechanism allowing arithmetic operations on arrays of different shapes automatically",
          "Streaming data over network",
          "Printing array to console",
          "Flattening 2D array"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas function merges two DataFrames along a key column (similar to SQL JOIN)?",
        "options": [
          "pd.merge()",
          "pd.concat()",
          "pd.append()",
          "pd.join_tables()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which function concatenates DataFrames along an axis (row-wise or column-wise)?",
        "options": [
          "pd.concat()",
          "pd.merge()",
          "pd.combine()",
          "pd.union()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `df.drop_duplicates()` do in Pandas?",
        "options": [
          "Removes duplicate rows from DataFrame",
          "Deletes duplicate columns",
          "Fills missing values",
          "Resets index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which visualization library is built on top of Matplotlib and integrates tightly with Pandas DataFrames?",
        "options": [
          "Seaborn",
          "Plotly",
          "Bokeh",
          "ggplot"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Matplotlib command displays the current figure plot on screen?",
        "options": [
          "plt.show()",
          "plt.render()",
          "plt.draw()",
          "plt.display()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas function creates a pivot table summarizing data across two axes?",
        "options": [
          "pd.pivot_table()",
          "df.crosstab()",
          "df.groupby()",
          "df.melt()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `df.melt()` do in Pandas?",
        "options": [
          "Unpivots a DataFrame from wide format to long format",
          "Pivots table",
          "Compresses memory",
          "Removes nulls"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you reset the index of a DataFrame back to default integer index?",
        "options": [
          "df.reset_index()",
          "df.reindex()",
          "df.set_index()",
          "df.clean_index()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `df.apply()` used for in Pandas?",
        "options": [
          "Applies a custom function along an axis (rows or columns) of DataFrame",
          "Applies CSS styles",
          "Applies SQL query",
          "Applies regex filter"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `np.reshape(a, (2, 5))` do to NumPy array `a`?",
        "options": [
          "Gives a new shape `(2, 5)` to array without changing its data elements",
          "Deletes elements",
          "Sorts array elements",
          "Calculates mean"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which NumPy function calculates matrix dot product or matrix multiplication?",
        "options": [
          "np.dot() / @ operator",
          "np.multiply()",
          "np.cross()",
          "np.sum()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas attribute returns tuple representing DataFrame dimensions `(rows, columns)`?",
        "options": [
          "df.shape",
          "df.size",
          "df.ndim",
          "df.length"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `df.value_counts()` return for a Pandas Series?",
        "options": [
          "Returns Series containing counts of unique values in descending order",
          "Total row count",
          "Data types list",
          "Missing value count"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Data Analysis Fundamentals",
    "description": "Evaluate fundamental data analysis principles: data preprocessing, exploratory data analysis (EDA), summary statistics, correlation, and data visualization.",
    "category": "Data Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Exploratory Data Analysis (EDA)?",
        "options": [
          "Critical process of performing initial investigations on data to discover patterns, spot anomalies, and test hypotheses via summary statistics and visualizations",
          "Writing SQL insert queries",
          "Deploying machine learning models to production",
          "Creating database backups"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Mean of a numerical dataset?",
        "options": [
          "The arithmetic average calculated by summing all values and dividing by the total count",
          "The middle value when data is sorted",
          "The most frequently occurring value",
          "The difference between max and min"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Median of a dataset?",
        "options": [
          "The middle value separating the higher half from lower half when dataset is ordered",
          "Arithmetic average",
          "Most common value",
          "Standard deviation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Mode of a dataset?",
        "options": [
          "The value that appears most frequently in a data set",
          "Middle value",
          "Average value",
          "Maximum value"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Why is Median preferred over Mean when summarizing skewed data with extreme outliers?",
        "options": [
          "Median is robust to extreme outliers and does not get distorted by extreme values",
          "Median is always larger",
          "Mean cannot be calculated on integers",
          "Mean ignores positive numbers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Standard Deviation measure in statistics?",
        "options": [
          "The amount of variation or dispersion of a set of values relative to its mean",
          "The average value",
          "The total sum",
          "The range between max and min"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Variance in statistics?",
        "options": [
          "The expectation of the squared deviation of a random variable from its mean (square of standard deviation)",
          "Square root of standard deviation",
          "Range of dataset",
          "Median value"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an Outlier in dataset analysis?",
        "options": [
          "An extreme data observation that lies an abnormal distance from other values in a random sample",
          "A missing value",
          "A text string column",
          "A duplicated row"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which visualization diagram displays data distribution through quartiles, highlighting outliers visually?",
        "options": [
          "Box Plot (Box-and-Whisker Plot)",
          "Bar Chart",
          "Line Graph",
          "Pie Chart"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Pearson Correlation Coefficient `r` range?",
        "options": [
          "From -1.0 (perfect negative correlation) to +1.0 (perfect positive correlation)",
          "From 0 to 100",
          "From 0 to infinity",
          "From -infinity to +infinity"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does correlation value `r = 0` indicate between two variables?",
        "options": [
          "No linear relationship exists between the two variables",
          "Perfect positive linear correlation",
          "Perfect negative linear correlation",
          "Input data has errors"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does the famous adage \"Correlation does not imply Causation\" mean?",
        "options": [
          "Just because two variables move together does not mean one causes the other to occur",
          "Correlation is useless",
          "Causation causes correlation",
          "Statistics is inaccurate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Histogram chart used for?",
        "options": [
          "Visualizing the frequency distribution of a continuous numerical variable divided into bins",
          "Comparing categorical groups",
          "Showing geographical maps",
          "Displaying pie proportions"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Scatter Plot used to visualize?",
        "options": [
          "The relationship or correlation between two continuous numerical variables",
          "Categorical counts",
          "Time series trend lines",
          "Hierarchical trees"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Interquartile Range (IQR) in statistics?",
        "options": [
          "The range between 75th percentile (Q3) and 25th percentile (Q1) `IQR = Q3 - Q1`",
          "Difference between Max and Min",
          "Standard deviation divided by mean",
          "Median minus mean"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Preprocessing stage goal?",
        "options": [
          "Cleaning, transforming, handling missing values, and formatting raw data for analysis",
          "Publishing reports",
          "Creating user accounts",
          "Writing SQL tables"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Categorical Data vs Numerical Data?",
        "options": [
          "Categorical represents qualitative categories/labels (e.g. Color); Numerical represents quantitative counts/measurements (e.g. Height)",
          "Categorical is numbers only",
          "Numerical is text strings",
          "They are exact equivalents"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Nominal vs Ordinal categorical data?",
        "options": [
          "Nominal has no intrinsic order (e.g. Gender); Ordinal has inherent rank order (e.g. Low, Medium, High)",
          "Nominal has numbers",
          "Ordinal has no order",
          "Nominal is continuous"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which plot displays compositional proportions of a whole dataset as slice angles totaling 360°?",
        "options": [
          "Pie Chart",
          "Scatter Plot",
          "Box Plot",
          "Histogram"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Normalization (Min-Max Scaling)?",
        "options": [
          "Rescaling numerical feature values into a fixed range between 0 and 1",
          "Converting text to lower case",
          "Sorting rows by ID",
          "Calculating standard deviation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Standardization (Z-Score Scaling)?",
        "options": [
          "Rescaling features so they have a mean of 0 and a standard deviation of 1 `z = (x - μ) / σ`",
          "Scaling values between 0 and 1",
          "Filling null values",
          "One-hot encoding"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Heatmap visualization used for in EDA?",
        "options": [
          "Visualizing matrix values (like correlation matrix) using color-coded representation",
          "Drawing geographic maps",
          "Plotting line series",
          "Rendering 3D models"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Time Series Data?",
        "options": [
          "A sequence of data points recorded at successive, specific time intervals",
          "Static spatial data",
          "Unordered survey results",
          "Binary image data"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Skewness in data distribution?",
        "options": [
          "Measure of the asymmetry of the probability distribution of a real-valued random variable",
          "Measure of peakedness",
          "Measure of standard deviation",
          "Measure of dataset row count"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Kurtosis in statistics?",
        "options": [
          "Measure of the \"tailedness\" / extreme outlier frequency of the probability distribution",
          "Measure of asymmetry",
          "Average of data",
          "Correlation value"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Object-Oriented Programming Assessment",
    "description": "Test core OOP principles: Classes, Objects, Encapsulation, Abstraction, Inheritance, Polymorphism, Constructors, Overloading, Overriding, and Interfaces.",
    "category": "Computer Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is a Class in Object-Oriented Programming?",
        "options": [
          "A blueprint or template from which individual objects are instantiated",
          "An active running process",
          "A database row",
          "A primitive data type"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an Object in OOP?",
        "options": [
          "An instance of a class containing state (attributes) and behavior (methods)",
          "A source code file",
          "A database table",
          "A compiler function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which pillar of OOP bundles data and methods together inside a single unit while restricting direct external access?",
        "options": [
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Abstraction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which pillar of OOP allows a new class to inherit properties and methods from an existing class?",
        "options": [
          "Inheritance",
          "Encapsulation",
          "Abstraction",
          "Polymorphism"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which pillar of OOP hides internal implementation details and shows only essential interface features to the user?",
        "options": [
          "Abstraction",
          "Polymorphism",
          "Inheritance",
          "Encapsulation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which pillar of OOP allows objects of different classes to respond to the same method call in different ways?",
        "options": [
          "Polymorphism",
          "Inheritance",
          "Encapsulation",
          "Compilation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Method Overloading?",
        "options": [
          "Defining multiple methods in the same class with the same name but different parameter signatures (Compile-Time Polymorphism)",
          "Redefining a superclass method in a subclass",
          "Hiding private attributes",
          "Deleting parent class methods"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Method Overriding?",
        "options": [
          "Redefining a superclass method in a subclass with exact same signature and return type (Run-Time Polymorphism)",
          "Overloading method parameters",
          "Creating private constructors",
          "Instantiating objects"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Constructor in OOP?",
        "options": [
          "A special class method invoked automatically when an object is created to initialize its state",
          "A method that destroys objects",
          "A static class helper",
          "A memory deallocator"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Destructor / Finalizer?",
        "options": [
          "A method called automatically before an object is garbage collected / destroyed to release resources",
          "A constructor",
          "An abstract method",
          "A copy operator"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an Interface in OOP languages like Java or TypeScript?",
        "options": [
          "An abstract contract defining method signatures that implementing classes MUST fulfill",
          "A GUI window",
          "A concrete class",
          "A database driver"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Abstract Class vs Interface?",
        "options": [
          "Abstract class can have state fields and concrete method implementations; Interface traditionally defines abstract contract signatures",
          "Interface can be instantiated directly",
          "Abstract class cannot have methods",
          "They are exact equivalents"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is \"Is-A\" relationship in OOP design?",
        "options": [
          "Inheritance relationship (e.g. Dog \"Is-A\" Animal)",
          "Composition relationship",
          "Aggregation relationship",
          "Association relationship"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is \"Has-A\" relationship in OOP?",
        "options": [
          "Composition or Aggregation relationship (e.g. Car \"Has-A\" Engine)",
          "Inheritance relationship",
          "Polymorphism",
          "Interface implementation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Composition vs Aggregation in object relationships?",
        "options": [
          "Composition represents strong ownership (part cannot exist without whole); Aggregation represents weak ownership (independent lifecycle)",
          "Composition is inheritance",
          "Aggregation is private access",
          "They are identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `super` or `base` keyword refer to in subclass code?",
        "options": [
          "The parent/superclass reference from which the current class inherits",
          "The child class",
          "The global window",
          "The current instance"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `this` or `self` keyword refer to inside an instance method?",
        "options": [
          "The current instance of the class executing the method",
          "The parent class",
          "The static class object",
          "The global package"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Static Member (variable or method) in a class?",
        "options": [
          "A member belonging to the class itself rather than to individual instances",
          "A private variable",
          "An immutable constant",
          "A thread-local variable"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Multiple Inheritance vulnerability known as the \"Diamond Problem\"?",
        "options": [
          "Ambiguity arising when a subclass inherits from two classes that both inherit from a single superclass",
          "Memory overflow bug",
          "Compilation timeout",
          "Null pointer exception"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which access modifier restricts member visibility strictly to the declaring class itself?",
        "options": [
          "private",
          "protected",
          "public",
          "internal"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which access modifier allows visibility within the declaring class and its subclasses?",
        "options": [
          "protected",
          "private",
          "public",
          "package-private"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Copy Constructor?",
        "options": [
          "A constructor that initializes a new object using the state of an existing object of the same class",
          "A default constructor",
          "A private constructor",
          "A static factory method"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Singleton Pattern in OOP design patterns?",
        "options": [
          "Ensures a class has only ONE instance globally and provides a global access point to it",
          "A class with multiple constructors",
          "An abstract class",
          "A factory method"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Factory Pattern in OOP design?",
        "options": [
          "Creational design pattern providing an interface for creating objects without specifying exact class created",
          "A singleton pattern",
          "An observer pattern",
          "A decorator pattern"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SOLID Principle acronym \"O\" standing for?",
        "options": [
          "Open/Closed Principle (software entities should be open for extension, but closed for modification)",
          "Object Oriented Principle",
          "Overloading Principle",
          "Operation Principle"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Data Structures & Algorithms Fundamentals",
    "description": "Assess core DSA: Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Hash Tables, Sorting, Searching, Recursion, and Big-O Time Complexity.",
    "category": "Computer Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is the Big-O time complexity of accessing an element by index in a contiguous Array?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity of searching an element in an unsorted Array of size N?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n log n)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What data structure operates on a Last-In, First-Out (LIFO) order?",
        "options": [
          "Stack",
          "Queue",
          "Array",
          "Linked List"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What data structure operates on a First-In, First-Out (FIFO) order?",
        "options": [
          "Queue",
          "Stack",
          "Tree",
          "Graph"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which data structure consists of nodes where each node contains data and a pointer to the next node?",
        "options": [
          "Singly Linked List",
          "Array",
          "Stack",
          "Hash Table"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the main advantage of Linked List over Array?",
        "options": [
          "Dynamic memory allocation and efficient O(1) insertion/deletion at known position without shifting elements",
          "Random index access in O(1)",
          "Lower memory overhead per element",
          "Better CPU cache locality"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity of Binary Search on a sorted array of N elements?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n^2)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What requirement MUST be satisfied before applying Binary Search algorithm?",
        "options": [
          "The array elements MUST be sorted in order",
          "Array size must be even",
          "Array must contain only integers",
          "Array must be a linked list"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Hash Table / Hash Map?",
        "options": [
          "Data structure mapping keys to values using a hash function for O(1) average lookup time",
          "A binary tree",
          "A sequential queue",
          "A sorted array"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Hash Collision in Hash Tables?",
        "options": [
          "When two distinct keys produce the exact same hash index from hash function",
          "When table runs out of memory",
          "When binary search fails",
          "When key is null"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which collision resolution technique handles collisions by storing colliding elements in a Linked List at that bucket index?",
        "options": [
          "Separate Chaining",
          "Open Addressing / Linear Probing",
          "Double Hashing",
          "Rehash"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Binary Search Tree (BST) property?",
        "options": [
          "For every node, all left subtree keys are smaller and all right subtree keys are greater",
          "All leaf nodes are at same depth",
          "Tree is complete binary tree",
          "Every node has exactly 2 children"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the average time complexity of Search, Insertion, and Deletion in a balanced BST?",
        "options": [
          "O(log n)",
          "O(1)",
          "O(n)",
          "O(n log n)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is In-Order Traversal of a Binary Search Tree (BST) guaranteed to produce?",
        "options": [
          "Keys visited in sorted ascending order",
          "Keys visited in descending order",
          "Keys visited level by level",
          "Post-order sequence"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which graph/tree traversal algorithm uses a Queue data structure?",
        "options": [
          "Breadth-First Search (BFS)",
          "Depth-First Search (DFS)",
          "Pre-Order Traversal",
          "Dijkstra"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which graph/tree traversal algorithm uses a Stack or Recursion?",
        "options": [
          "Depth-First Search (DFS)",
          "Breadth-First Search (BFS)",
          "Level-Order Traversal",
          "Kruskal"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the worst-case time complexity of Bubble Sort and Insertion Sort algorithms?",
        "options": [
          "O(n^2)",
          "O(n log n)",
          "O(n)",
          "O(log n)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which sorting algorithm uses Divide-and-Conquer strategy with O(n log n) worst-case time complexity?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Bubble Sort",
          "Selection Sort"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the worst-case time complexity of QuickSort when bad pivot selection occurs on already sorted array?",
        "options": [
          "O(n^2)",
          "O(n log n)",
          "O(n)",
          "O(log n)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Recursion in computer programming?",
        "options": [
          "A function calling itself directly or indirectly to solve smaller instances of the same problem",
          "An infinite loop bug",
          "A hardware interrupt",
          "A thread pool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What essential component MUST every recursive function have to prevent infinite call stack overflow?",
        "options": [
          "Base Case / Termination Condition",
          "Loop counter",
          "Try-catch block",
          "Global state"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Call Stack in program execution?",
        "options": [
          "Stack data structure tracking active function calls, local variables, and return addresses",
          "Heap memory area",
          "GPU register file",
          "Disk storage buffer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Stack Overflow Error?",
        "options": [
          "When recursive function calls exceed available Call Stack memory limit",
          "When array index is out of bounds",
          "When heap runs out of memory",
          "When integer exceeds max value"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Space Complexity of an algorithm?",
        "options": [
          "Amount of memory space required by algorithm to run as a function of input size N",
          "Time taken in seconds",
          "Number of CPU cores used",
          "Disk file size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Heap (Max-Heap / Min-Heap) data structure?",
        "options": [
          "Complete binary tree based structure where parent node key satisfies heap property relative to children",
          "A call stack",
          "A hash table",
          "A linked list"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What data structure is used to implement Priority Queue efficiently?",
        "options": [
          "Binary Heap",
          "Unsorted Array",
          "Stack",
          "Singly Linked List"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Dijkstra Algorithm used for?",
        "options": [
          "Finding shortest paths from a single source node to all other nodes in a weighted graph with non-negative weights",
          "Sorting an array",
          "Searching text strings",
          "Detecting cycles"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Dynamic Programming (DP) technique?",
        "options": [
          "Optimization method solving complex problems by breaking them into overlapping subproblems and storing subproblem results (memoization/tabulation)",
          "Writing dynamic HTML",
          "Allocating dynamic RAM",
          "Using dynamic types"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Memoization in Dynamic Programming?",
        "options": [
          "Top-down optimization technique that caches results of expensive function calls for given inputs",
          "Bottom-up table filling",
          "Sorting array",
          "Allocating heap memory"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Big-O time complexity of searching in a Hash Map on average?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Operating Systems Assessment",
    "description": "Evaluate core OS concepts: processes, threads, CPU scheduling, deadlocks, memory management, virtual memory, paging, and synchronization.",
    "category": "Computer Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is a Process in Operating Systems?",
        "options": [
          "A program in execution containing program code, registers, stack, and heap memory",
          "A file saved on disk",
          "A hardware CPU core",
          "A compiler function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Thread compared to a Process?",
        "options": [
          "A lightweight unit of execution within a process that shares memory space with sibling threads",
          "An independent process with separate address space",
          "A disk driver",
          "A hardware cable"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Context Switching in OS CPU scheduling?",
        "options": [
          "Storing state of active process/thread so it can be resumed later, and loading state of another process to CPU",
          "Switching monitors",
          "Changing file permissions",
          "Rebooting system"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What data structure does OS kernel use to store state and control info for each active process?",
        "options": [
          "Process Control Block (PCB)",
          "Inode Table",
          "Page Directory",
          "File Allocation Table"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CPU scheduling algorithm assigns CPU to process with shortest next CPU burst time?",
        "options": [
          "Shortest Job First (SJF)",
          "First-Come First-Served (FCFS)",
          "Round Robin (RR)",
          "Priority Scheduling"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CPU scheduling algorithm uses time quanta / time slices to distribute CPU fairly among processes?",
        "options": [
          "Round Robin (RR)",
          "First-Come First-Served",
          "Shortest Remaining Time First",
          "LIFO"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Deadlock in Operating Systems?",
        "options": [
          "Situation where a set of processes are permanently blocked because each holds a resource needed by another",
          "A blue screen crash",
          "A memory overflow",
          "A network disconnect"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are the FOUR necessary conditions for Deadlock to occur (Coffman Conditions)?",
        "options": [
          "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
          "Read, Write, Execute, Delete",
          "Process, Thread, Lock, Mutex",
          "RAM, CPU, Disk, Bus"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What algorithm is used for Deadlock Avoidance in OS resource allocation?",
        "options": [
          "Banker's Algorithm",
          "Dijkstra Algorithm",
          "Kruskal Algorithm",
          "Round Robin"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Semaphore in process synchronization?",
        "options": [
          "Integer synchronization primitive variable used to control concurrent access to shared resources via wait() and signal()",
          "A CPU register",
          "A file pointer",
          "A interrupt vector"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Mutex (Mutual Exclusion Lock)?",
        "options": [
          "Locking mechanism allowing only ONE thread at a time to enter a critical section of code",
          "A multi-thread queue",
          "A process scheduler",
          "A RAM chip"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Critical Section in concurrent programming?",
        "options": [
          "Code segment accessing shared variables/resources that must not be concurrently accessed by multiple threads",
          "A kernel crash handler",
          "A bootloader segment",
          "A read-only memory area"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Race Condition?",
        "options": [
          "Bug occurring when concurrent threads modify shared data simultaneously without proper synchronization",
          "A CPU clock speed test",
          "A network speed test",
          "A disk read benchmark"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Virtual Memory in OS memory management?",
        "options": [
          "Memory management scheme giving process illusion of large contiguous RAM by swapping pages between RAM and disk",
          "RAM installed on GPU",
          "USB flash drive",
          "L3 Cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Paging in memory management?",
        "options": [
          "Storage scheme where physical memory is divided into fixed-size frames and logical memory into same-size pages",
          "Scrolling a text file",
          "Fragmenting disk files",
          "Sorting process priorities"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Page Fault in virtual memory systems?",
        "options": [
          "Interrupt occurring when a process accesses a memory page not currently loaded in physical RAM",
          "A corrupted RAM chip error",
          "A illegal instruction error",
          "A kernel panic crash"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Thrashing in virtual memory systems?",
        "options": [
          "State where OS spends more time swapping pages in and out of disk than executing actual instructions",
          "Hardware disk failure",
          "CPU overheating",
          "Overclocking CPU"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is TLB (Translation Lookaside Buffer)?",
        "options": [
          "High-speed hardware memory cache used by MMU to speed up virtual-to-physical address translation",
          "A disk buffer",
          "A CPU register file",
          "A network buffer"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Inode in Unix/Linux File Systems?",
        "options": [
          "Data structure storing metadata (file size, permissions, owner, data block pointers) of a file",
          "The file content string",
          "The directory path name",
          "The user password hash"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is System Call in OS architecture?",
        "options": [
          "Programmatic interface allowing user application to request services from OS kernel (e.g. read, write, fork)",
          "A GUI button click",
          "A function call in C",
          "A network ping"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `fork()` system call do in Unix/POSIX systems?",
        "options": [
          "Creates a exact child process duplicate of the calling parent process",
          "Terminates process",
          "Executes new binary",
          "Allocates heap memory"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Zombie Process in Unix systems?",
        "options": [
          "Process that has completed execution but still has an entry in process table waiting for parent to read exit status",
          "An active virus process",
          "A process running infinitely",
          "A process in sleep state"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Orphan Process?",
        "options": [
          "Process whose parent process has finished or terminated while child is still running",
          "A process with no PID",
          "A process with no memory",
          "A crashed process"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Internal Fragmentation vs External Fragmentation?",
        "options": [
          "Internal: wasted space inside allocated fixed block; External: total free memory exists but is fragmented into small non-contiguous blocks",
          "Internal is CPU cache; External is RAM",
          "Internal is disk; External is network",
          "They are exact equivalents"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Spooling (Simultaneous Peripheral Operations On-Line)?",
        "options": [
          "Buffering technique holding job data in temporary disk area for slow peripheral devices (e.g. Print Spooler)",
          "A CPU cache line",
          "A page replacement policy",
          "A deadlock condition"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Computer Networks Assessment",
    "description": "Test networking fundamentals: OSI model 7 layers, TCP/IP protocol suite, IP addressing, TCP/UDP, HTTP/HTTPS, DNS, and client-server communication.",
    "category": "Computer Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "How many layers are defined in the standard OSI (Open Systems Interconnection) reference model?",
        "options": [
          "7 Layers",
          "4 Layers",
          "5 Layers",
          "6 Layers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which OSI layer is responsible for end-to-end process-to-process reliable data delivery and error recovery?",
        "options": [
          "Transport Layer (Layer 4)",
          "Network Layer (Layer 3)",
          "Data Link Layer (Layer 2)",
          "Physical Layer (Layer 1)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which OSI layer is responsible for IP packet routing, logical addressing, and path determination?",
        "options": [
          "Network Layer (Layer 3)",
          "Transport Layer (Layer 4)",
          "Data Link Layer (Layer 2)",
          "Application Layer (Layer 7)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which OSI layer handles physical MAC addressing and framing across a single local link?",
        "options": [
          "Data Link Layer (Layer 2)",
          "Network Layer (Layer 3)",
          "Physical Layer (Layer 1)",
          "Session Layer (Layer 5)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What protocol operates at Transport Layer providing RELIABLE, connection-oriented data stream transfer?",
        "options": [
          "TCP (Transmission Control Protocol)",
          "UDP (User Datagram Protocol)",
          "IP (Internet Protocol)",
          "ICMP"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What protocol operates at Transport Layer providing UNRELIABLE, connectionless, lightweight datagram delivery?",
        "options": [
          "UDP (User Datagram Protocol)",
          "TCP",
          "HTTP",
          "FTP"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the 3-Way Handshake sequence used by TCP to establish a connection?",
        "options": [
          "SYN -> SYN-ACK -> ACK",
          "ACK -> SYN -> FIN",
          "CONNECT -> ACCEPT -> READY",
          "PING -> PONG -> ACK"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is DNS (Domain Name System) primary function?",
        "options": [
          "Translates human-readable domain names (e.g. google.com) into numerical IP addresses",
          "Assigns MAC addresses",
          "Encrypts web traffic",
          "Filters email spam"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an IPv4 Address length in bits?",
        "options": [
          "32 bits (4 bytes)",
          "128 bits (16 bytes)",
          "64 bits",
          "16 bits"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an IPv6 Address length in bits?",
        "options": [
          "128 bits (16 bytes)",
          "32 bits",
          "64 bits",
          "256 bits"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which protocol automatically assigns dynamic IP addresses to devices joining a network?",
        "options": [
          "DHCP (Dynamic Host Configuration Protocol)",
          "DNS",
          "ARP",
          "NAT"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is ARP (Address Resolution Protocol) used for?",
        "options": [
          "Resolves known IP address to physical MAC hardware address on local network segment",
          "Resolves domain to IP",
          "Assigns IP addresses",
          "Routes packets over internet"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is NAT (Network Address Translation)?",
        "options": [
          "Translates private IP addresses within local network to a single public IP address for internet traffic",
          "Encrypts Wi-Fi passwords",
          "Accelerates DNS lookup",
          "Manages MAC addresses"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is standard port number for HTTP protocol?",
        "options": [
          "Port 80",
          "Port 443",
          "Port 22",
          "Port 8080"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is standard port number for HTTPS (HTTP Secure over TLS/SSL)?",
        "options": [
          "Port 443",
          "Port 80",
          "Port 21",
          "Port 25"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What protocol is used for secure remote command-line login access over network (Port 22)?",
        "options": [
          "SSH (Secure Shell)",
          "Telnet",
          "FTP",
          "SMTP"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between TCP and UDP?",
        "options": [
          "TCP is connection-oriented, guaranteed, ordered; UDP is connectionless, fast, un-guaranteed",
          "UDP is slower",
          "TCP is used for live video gaming streams",
          "They use same header size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP request method is Idempotent and retrieves web data without side-effects?",
        "options": [
          "GET",
          "POST",
          "PATCH",
          "CONNECT"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is ICMP protocol used for?",
        "options": [
          "Network diagnostic error reporting and operational messaging (e.g. `ping` tool)",
          "Transferring files",
          "Sending emails",
          "Assigning IP addresses"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Subnet Mask used for in IP networking?",
        "options": [
          "Distinguishes Network ID portion from Host ID portion in an IP address",
          "Encrypts IP headers",
          "Specifies DNS server",
          "Specifies default gateway MAC"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Default Gateway in local network configuration?",
        "options": [
          "Router node that serves as access point forwarding local traffic destined for external networks",
          "DNS server",
          "DHCP server",
          "Local switch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What device operates at OSI Layer 2 forwarding frames based on MAC addresses?",
        "options": [
          "Switch",
          "Router",
          "Hub",
          "Repeater"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What device operates at OSI Layer 3 routing packets across different network subnets based on IP addresses?",
        "options": [
          "Router",
          "Switch",
          "Hub",
          "Bridge"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is TLS/SSL protocol role in HTTPS web communication?",
        "options": [
          "Provides encryption, authentication, and data integrity over TCP connection",
          "Speeds up DNS resolution",
          "Compresses HTML files",
          "Generates IP packets"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Round-Trip Time (RTT) in computer networking?",
        "options": [
          "Total time taken for a data packet to travel from source to destination and return back",
          "Bandwidth capacity",
          "Packet drop rate",
          "Router CPU time"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Git & GitHub Assessment",
    "description": "Assess version control concepts: Git repositories, clone, add, commit, push, pull, branching strategies, merge conflicts, stash, and GitHub Pull Requests.",
    "category": "Software Development",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What type of Version Control System is Git?",
        "options": [
          "Distributed Version Control System (DVCS)",
          "Centralized VCS (CVCS)",
          "Local File VCS",
          "Database VCS"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command initializes a new empty Git repository in current directory?",
        "options": [
          "git init",
          "git create",
          "git start",
          "git new"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command copies an existing remote Git repository to local machine?",
        "options": [
          "git clone <url>",
          "git copy <url>",
          "git download <url>",
          "git checkout <url>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command stages modified or new files to the Git Staging Area (Index)?",
        "options": [
          "git add <filename>",
          "git stage <filename>",
          "git push <filename>",
          "git save <filename>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command records staged changes permanently into local repository history with a message?",
        "options": [
          "git commit -m \"message\"",
          "git save -m \"message\"",
          "git push -m \"message\"",
          "git record -m \"message\""
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command uploads local repository branch commits to remote repository (e.g. GitHub)?",
        "options": [
          "git push origin <branch>",
          "git pull origin <branch>",
          "git upload origin <branch>",
          "git send origin <branch>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command fetches changes from remote repository and immediately merges them into current local branch?",
        "options": [
          "git pull",
          "git fetch",
          "git clone",
          "git sync"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `git fetch` and `git pull`?",
        "options": [
          "`git fetch` downloads remote changes without merging; `git pull` downloads AND merges remote changes",
          "`git fetch` deletes branches",
          "`git pull` uploads code",
          "They are exact aliases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command creates AND switches to a new branch named \"feature-login\"?",
        "options": [
          "git checkout -b feature-login (or git switch -c feature-login)",
          "git branch feature-login",
          "git new-branch feature-login",
          "git create feature-login"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command lists all local branches and highlights current active branch?",
        "options": [
          "git branch",
          "git list",
          "git show-branches",
          "git status"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command merges specified branch into current working branch?",
        "options": [
          "git merge <branch-name>",
          "git combine <branch-name>",
          "git join <branch-name>",
          "git attach <branch-name>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Merge Conflict in Git?",
        "options": [
          "Occurs when Git cannot automatically reconcile competing changes made to same lines of a file across branches",
          "When remote server crashes",
          "When git push fails due to network",
          "When commit message is missing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command displays status of working directory and staging area (modified, staged, untracked files)?",
        "options": [
          "git status",
          "git log",
          "git info",
          "git check"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command displays commit history log of current branch?",
        "options": [
          "git log",
          "git history",
          "git status",
          "git commits"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `git stash` do?",
        "options": [
          "Temporarily shelves (stashes) uncommitted working directory changes so you can work on clean branch",
          "Deletes untracked files",
          "Creates a pull request",
          "Pushes code to GitHub"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command restores stashed changes back to working directory and removes them from stash list?",
        "options": [
          "git stash pop",
          "git stash apply",
          "git stash restore",
          "git stash drop"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `.gitignore` file?",
        "options": [
          "Specifies intentionally untracked files/patterns (e.g. node_modules, .env) that Git should ignore",
          "Ignores git commits",
          "Deletes remote files",
          "Configures user credentials"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Pull Request (PR) on GitHub?",
        "options": [
          "A proposed code change request allowing team members to review, discuss, and merge branch into target branch",
          "A git command to pull code",
          "A bug report issue",
          "A server deployment script"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `git rebase <branch>` do compared to `git merge`?",
        "options": [
          "`git rebase` rewrites commit history by moving local commits on top of tip of target branch",
          "`git rebase` creates a merge commit",
          "`git rebase` deletes local branch",
          "`git rebase` undoes commits"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command applies the changes introduced by a specific existing commit hash to current branch?",
        "options": [
          "git cherry-pick <commit-hash>",
          "git apply <commit-hash>",
          "git copy <commit-hash>",
          "git merge-commit <commit-hash>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command discards all uncommitted local modifications in working file `app.js`?",
        "options": [
          "git checkout -- app.js (or git restore app.js)",
          "git delete app.js",
          "git remove app.js",
          "git revert app.js"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `git revert <commit-hash>` do?",
        "options": [
          "Creates a NEW commit that undoes/inverts changes of the specified past commit safely",
          "Deletes commit from history permanently",
          "Resets repository to zero",
          "Deletes remote branch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is HEAD in Git repository pointer mechanics?",
        "options": [
          "A reference pointer pointing to current active branch or commit in working directory",
          "The first commit in repo",
          "The remote master branch",
          "The git config file"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a \"Detached HEAD\" state in Git?",
        "options": [
          "When HEAD points directly to a specific commit hash rather than a named local branch",
          "When git repository is corrupted",
          "When HEAD is deleted",
          "When remote is disconnected"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which file contains user configuration defaults like `user.name` and `user.email` in Git?",
        "options": [
          "`~/.gitconfig` or `.git/config`",
          "`.gitignore`",
          "`package.json`",
          "`git.env`"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Software Engineering Fundamentals",
    "description": "Evaluate core Software Engineering principles: SDLC methodologies (Agile, Waterfall, Scrum), design principles, testing, debugging, and maintenance.",
    "category": "Software Development",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What does SDLC stand for in software engineering?",
        "options": [
          "Software Development Life Cycle",
          "System Design Logic Code",
          "Standard Deployment Language Compiler",
          "Software Data Lifecycle Control"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which phase of SDLC involves gathering user requirements and defining software scope specification?",
        "options": [
          "Requirements Analysis & Specification",
          "System Design",
          "Testing & QA",
          "Deployment"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the main characteristic of traditional Waterfall SDLC model?",
        "options": [
          "Sequential linear phase progression where each phase must finish before next phase begins",
          "Iterative sprint cycles",
          "Continuous deployment",
          "No documentation required"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Agile Software Development methodology core principle?",
        "options": [
          "Iterative, incremental development emphasizing team collaboration, flexibility, and customer feedback",
          "Strict rigid linear documentation",
          "No testing required",
          "Fixed non-changeable requirements"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Scrum framework in Agile development?",
        "options": [
          "Agile framework structured around short fixed-length iterations called Sprints (typically 2-4 weeks)",
          "A software testing tool",
          "A programming language",
          "A database engine"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Daily Standup (Daily Scrum) meeting purpose?",
        "options": [
          "Short 15-minute daily sync for team to review progress, plan next 24h work, and identify blockers",
          "A 2-hour code review",
          "A client demo session",
          "A sprint planning meeting"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Sprint Backlog in Scrum framework?",
        "options": [
          "Set of Product Backlog items selected for execution during current Sprint iteration",
          "All feature ideas ever proposed",
          "Bug reports logged by users",
          "Completed tasks archive"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Unit Testing in software testing hierarchy?",
        "options": [
          "Testing individual isolated units/functions/classes in source code to verify correctness",
          "Testing entire end-to-end application",
          "User acceptance testing",
          "Performance stress testing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Integration Testing?",
        "options": [
          "Testing combined software modules together to verify inter-component data interaction and interfaces",
          "Testing a single function",
          "Testing UI layout css",
          "Manual user feedback"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is System / End-to-End (E2E) Testing?",
        "options": [
          "Testing complete integrated software application from user UI to database backend to verify requirements",
          "Unit testing functions",
          "Compiler syntax check",
          "Code linting"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Regression Testing?",
        "options": [
          "Re-testing software after modifications/bug fixes to ensure existing functionality has not broken",
          "Testing software on old operating systems",
          "Initial prototype testing",
          "Deleting old tests"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Test-Driven Development (TDD) cycle?",
        "options": [
          "Red-Green-Refactor: Write failing test first -> Write minimal code to pass test -> Refactor code",
          "Write code -> Write documentation -> Test later",
          "Deploy to production -> Test manually",
          "No tests written"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is DRY principle in software design clean code guidelines?",
        "options": [
          "Don't Repeat Yourself (avoid code duplication by abstracting shared logic)",
          "Do Repeat Yourself",
          "Do Refactor Yearly",
          "Deployment Readiness Yield"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is KISS principle in software architecture?",
        "options": [
          "Keep It Simple, Stupid (prefer simple readable solutions over complex over-engineered designs)",
          "Keep Interfaces Strongly Sealed",
          "Key Information System Security",
          "Kernel Interaction System Syntax"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is YAGNI principle in Agile software development?",
        "options": [
          "You Aren't Gonna Need It (do not add functionality until it is actually necessary)",
          "You Always Get New Insights",
          "Yield All Generated Node Inputs",
          "Your Code Needs Inspection"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Code Review process purpose?",
        "options": [
          "Peer examination of source code before merging to catch bugs, improve quality, and share knowledge",
          "Automated build compilation",
          "Client billing check",
          "Database backup"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Continuous Integration (CI) in modern DevOps?",
        "options": [
          "Automated practice where developers merge code changes frequently into central repository, triggering automated builds and tests",
          "Manual server file upload",
          "Deploying code once a year",
          "Writing documentation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Continuous Deployment (CD)?",
        "options": [
          "Automated pipeline where validated code changes are automatically deployed directly to production environment",
          "Manual server restart",
          "Continuous coding without sleep",
          "Backing up databases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Technical Debt in software development?",
        "options": [
          "Implied cost of additional rework caused by choosing easy/expedient solution now instead of better approach",
          "Financial money owed for servers",
          "Database license fees",
          "Hardware maintenance costs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Coupling vs Cohesion in software modular design?",
        "options": [
          "Coupling: degree of interdependence between modules (should be LOW); Cohesion: degree of functional relatedness inside a module (should be HIGH)",
          "Coupling should be high",
          "Cohesion should be low",
          "They measure system cost"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Bug / Defect Lifecycle status sequence?",
        "options": [
          "New -> Assigned -> Open -> Fixed -> Pending Retest -> Verified -> Closed",
          "New -> Closed",
          "Fixed -> New",
          "Assigned -> Deleted"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Refactoring in software engineering?",
        "options": [
          "Restructuring existing computer code without changing its external operational behavior to improve readability/maintainability",
          "Adding new features",
          "Fixing critical security bugs",
          "Deleting source code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is User Story in Agile requirement specification?",
        "options": [
          "Short simple description of a feature told from perspective of end user (As a [role], I want [feature] so that [benefit])",
          "A technical architectural diagram",
          "A database schema ERD",
          "A bug report log"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Acceptance Criteria in User Stories?",
        "options": [
          "Specific conditions/rules that a software feature must meet to be accepted as complete by product owner",
          "Compiler flag list",
          "Server hardware specs",
          "Sprint team budget"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Black Box Testing vs White Box Testing?",
        "options": [
          "Black Box: testing functionality without internal code knowledge; White Box: testing internal logic structure with full code access",
          "Black box is automated; white box is manual",
          "White box is security testing only",
          "They are exact equivalents"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Software Developer Interview Assessment",
    "description": "Comprehensive placement test covering coding logic, OOP, DBMS, SQL, Operating Systems, Computer Networks, Git, REST APIs, and core DSA.",
    "category": "Interview Prep",
    "difficulty": "Intermediate",
    "duration": 25,
    "questionsPerAttempt": 15,
    "questions": [
      {
        "questionText": "What is the average time complexity of searching an item in a balanced Binary Search Tree (BST)?",
        "options": [
          "O(log n)",
          "O(1)",
          "O(n)",
          "O(n log n)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which data structure operates on a Last-In, First-Out (LIFO) basis?",
        "options": [
          "Stack",
          "Queue",
          "Array",
          "Linked List"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which algorithm is used to find the shortest path from a single source node in a weighted graph with non-negative edge weights?",
        "options": [
          "Dijkstra's Algorithm",
          "Kruskal's Algorithm",
          "Prim's Algorithm",
          "Floyd-Warshall"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What OSI layer is responsible for IP routing and logical addressing?",
        "options": [
          "Network Layer (Layer 3)",
          "Transport Layer (Layer 4)",
          "Data Link Layer (Layer 2)",
          "Application Layer (Layer 7)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Deadlock in Operating Systems?",
        "options": [
          "A set of processes blocked because each process holds a resource needed by another",
          "A crashed CPU kernel",
          "A network connection timeout",
          "A memory leak"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which pillar of OOP allows treating objects of different classes through a unified interface?",
        "options": [
          "Polymorphism",
          "Encapsulation",
          "Inheritance",
          "Abstraction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What protocol operates at Transport Layer providing reliable, connection-oriented data transfer?",
        "options": [
          "TCP",
          "UDP",
          "IP",
          "HTTP"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Virtual Memory in Operating Systems?",
        "options": [
          "A memory management technique that creates an illusion of a large main memory by swapping pages to secondary storage",
          "RAM installed on graphics card",
          "Cloud storage drive",
          "CPU L1 cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the worst-case time complexity of QuickSort algorithm?",
        "options": [
          "O(n^2)",
          "O(n log n)",
          "O(n)",
          "O(log n)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which graph traversal algorithm uses a Queue data structure?",
        "options": [
          "Breadth-First Search (BFS)",
          "Depth-First Search (DFS)",
          "Dijkstra",
          "Pre-order Traversal"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the command to create and switch to a new branch in Git?",
        "options": [
          "git checkout -b <branch-name>",
          "git branch -create <name>",
          "git switch --new",
          "git new-branch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does SOLID acronym principle \"S\" stand for in Object-Oriented Design?",
        "options": [
          "Single Responsibility Principle",
          "Simple Object Principle",
          "Sequential Logic",
          "Stateful Interface"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "In Git, what does `git merge` do compared to `git rebase`?",
        "options": [
          "`git merge` creates a merge commit preserving history graph; `git rebase` rewrites commits on top of base branch",
          "`git merge` deletes branch",
          "`git rebase` pushes code to GitHub",
          "They are exact aliases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What architectural pattern decouples applications into small, independently deployable services communicating over HTTP/gRPC?",
        "options": [
          "Microservices Architecture",
          "Monolithic Architecture",
          "Layered Architecture",
          "Mainframe Architecture"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Rate Limiter used for in Web APIs?",
        "options": [
          "To throttle the number of requests a client can send within a given time window to prevent abuse",
          "To speed up CPU clock speed",
          "To format JSON responses",
          "To compress database backups"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method should be used for login authentication where credentials are submitted securely in body?",
        "options": [
          "POST",
          "GET",
          "HEAD",
          "OPTIONS"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Load Balancer in System Design?",
        "options": [
          "A component that distributes incoming network traffic across multiple backend servers to ensure reliability",
          "A battery backup device",
          "A database index optimizer",
          "A code minifier"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CI/CD in modern software development pipelines?",
        "options": [
          "Continuous Integration & Continuous Deployment/Delivery",
          "Code Inspection & Code Debugging",
          "Central Interface & Client Database",
          "Compiler Interface & Core Driver"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `.gitignore` file?",
        "options": [
          "Specifies intentionally untracked files that Git should ignore (e.g. node_modules, .env)",
          "Deletes files from remote repository",
          "Prevents git commits",
          "Lists repo contributors"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Connection Pool in backend engineering?",
        "options": [
          "A cache of database connections maintained so connections can be reused when requests are made",
          "A list of active user socket sessions",
          "A thread pool for rendering images",
          "A load balancer algorithm"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL clause is used to filter rows AFTER an aggregate `GROUP BY` operation?",
        "options": [
          "HAVING",
          "WHERE",
          "FILTER",
          "ORDER BY"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which JOIN type returns all records from left table, and matched records from right table?",
        "options": [
          "LEFT JOIN",
          "INNER JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does the \"I\" stand for in ACID properties of database transactions?",
        "options": [
          "Isolation",
          "Integrity",
          "Index",
          "Iteration"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Foreign Key in relational databases?",
        "options": [
          "A field in one table that uniquely identifies a row in another table, enforcing referential integrity",
          "A password key to remote server",
          "An encrypted primary key",
          "A key generated by user"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which normal form requires eliminating partial dependencies on composite primary key (2NF)?",
        "options": [
          "Second Normal Form (2NF)",
          "First Normal Form (1NF)",
          "Third Normal Form (3NF)",
          "BCNF"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Semaphore in OS concurrency?",
        "options": [
          "A synchronization tool/variable used to control access to shared resources by multiple processes",
          "A CPU instruction counter",
          "A device driver",
          "A network packet header"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is DNS (Domain Name System) primarily responsible for?",
        "options": [
          "Translating human-readable domain names (e.g. google.com) to IP addresses",
          "Encrypting HTTP data",
          "Assigning MAC addresses",
          "Filtering spam emails"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity of pushing an element onto a Stack?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which pillar of OOP restricts direct access to an object's internal components and state?",
        "options": [
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Compilation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What port does standard HTTPS protocol listen on by default?",
        "options": [
          "443",
          "80",
          "21",
          "3000"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Hash Collision?",
        "options": [
          "When two distinct keys produce the exact same hash value from a hash function",
          "When memory buffer overflows",
          "When database locks up",
          "When network cable disconnects"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Paging in OS memory management?",
        "options": [
          "A memory management scheme that stores process memory in fixed-size blocks called pages",
          "Scrolling web pages",
          "Cleaning cache files",
          "Swapping CPU cores"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which sorting algorithm has a guaranteed worst-case time complexity of O(n log n)?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Bubble Sort",
          "Insertion Sort"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What design pattern ensures a class has only ONE instance and provides a global point of access to it?",
        "options": [
          "Singleton Pattern",
          "Factory Pattern",
          "Observer Pattern",
          "Strategy Pattern"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CAP theorem state for distributed data stores?",
        "options": [
          "A distributed system can guarantee at most 2 out of 3: Consistency, Availability, and Partition Tolerance",
          "CPU, RAM, and Disk must be equal",
          "Coding, Testing, and Deployment are parallel",
          "Caching, Authentication, and Persistence are required"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Redis primarily used for in backend systems?",
        "options": [
          "In-memory key-value data store used as high-performance database cache and session store",
          "Relational database for storing files",
          "HTML template engine",
          "CSS preprocessor"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SQL Injection vulnerability?",
        "options": [
          "An attack vector where malicious SQL statements are inserted into entry fields for execution",
          "A database crash bug",
          "A memory leak in C++",
          "An unauthorized file download"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is XSS (Cross-Site Scripting)?",
        "options": [
          "A security vulnerability enabling attackers to inject client-side scripts into web pages viewed by other users",
          "A CSS styling glitch",
          "A database cross join error",
          "A server crash error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `git cherry-pick <commit-hash>` do?",
        "options": [
          "Applies the changes introduced by a specific existing commit to current branch",
          "Deletes specified commit",
          "Merges entire branch",
          "Reverts pull request"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Docker in DevOps & Software Engineering?",
        "options": [
          "A containerization platform that packages applications and dependencies into standardized containers",
          "A code editor plugin",
          "A database engine",
          "An OS virtualization hypervisor"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Full-Stack Developer Interview Assessment",
    "description": "Comprehensive full-stack developer test covering HTML5, CSS3, JS, React, Node.js, Express, REST APIs, MongoDB, JWT auth, and Git.",
    "category": "Interview Prep",
    "difficulty": "Intermediate",
    "duration": 25,
    "questionsPerAttempt": 15,
    "questions": [
      {
        "questionText": "Which keyword declares a block-scoped variable that can be reassigned in JavaScript?",
        "options": [
          "var",
          "let",
          "const",
          "static"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does \"typeof NaN\" return in JavaScript?",
        "options": [
          "\"undefined\"",
          "\"nan\"",
          "\"number\"",
          "\"object\""
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which array method creates a new array populated with the results of calling a provided function on every element?",
        "options": [
          "forEach()",
          "filter()",
          "map()",
          "reduce()"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What initial state is a newly created Promise in JavaScript?",
        "options": [
          "fulfilled",
          "pending",
          "settled",
          "rejected"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which Hook is used to handle side-effects in functional React components?",
        "options": [
          "useState",
          "useEffect",
          "useReducer",
          "useCallback"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the Virtual DOM in React?",
        "options": [
          "A lightweight in-memory representation of the real DOM used to compute efficient UI updates",
          "A browser plugin for React",
          "A direct replacement for HTML",
          "A CSS rendering engine"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you pass data down from a parent component to a child component in React?",
        "options": [
          "State",
          "Props",
          "Context",
          "Redux"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which hook returns a stateful value and a function to update it in React?",
        "options": [
          "useRef",
          "useContext",
          "useState",
          "useMemo"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is Middleware in Express.js?",
        "options": [
          "Functions that have access to request (req), response (res), and next middleware function in application request-response cycle",
          "Database ORM layer",
          "A template engine",
          "Frontend router"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Express method parses incoming requests with JSON payloads?",
        "options": [
          "express.json()",
          "express.bodyParser()",
          "express.parseJSON()",
          "express.urlEncoded()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method should be used to UPDATE an existing resource completely in REST APIs?",
        "options": [
          "PUT",
          "GET",
          "POST",
          "DELETE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What HTTP status code represents \"201 Created\"?",
        "options": [
          "201",
          "200",
          "404",
          "500"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which status code indicates \"Unauthorized access\" in REST API standard?",
        "options": [
          "401",
          "403",
          "400",
          "404"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you access route parameters in Express route path `/users/:id`?",
        "options": [
          "req.params.id",
          "req.query.id",
          "req.body.id",
          "req.headers.id"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What format does MongoDB use internally to store documents on disk?",
        "options": [
          "BSON (Binary JSON)",
          "JSON plain text",
          "XML",
          "CSV"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the default unique primary key field name automatically created in every MongoDB document?",
        "options": [
          "_id",
          "id",
          "uuid",
          "pk"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which MongoDB command returns documents matching a query filter?",
        "options": [
          "db.collection.find()",
          "db.collection.get()",
          "db.collection.select()",
          "db.collection.fetch()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Mongoose in Node.js development?",
        "options": [
          "An Object Data Modeling (ODM) library for MongoDB and Node.js",
          "A SQL relational driver",
          "A MongoDB GUI client",
          "A database migration CLI"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP header is commonly used to pass JWT tokens in REST API requests?",
        "options": [
          "Authorization: Bearer <token>",
          "Content-Type: application/jwt",
          "Token-Key: <token>",
          "X-Access-Token: <token>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `box-sizing: border-box` do in CSS?",
        "options": [
          "Includes padding and border in the element total width and height",
          "Excludes border from width",
          "Adds a shadow around the element",
          "Forces content box sizing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS Flexbox property aligns items along the MAIN axis?",
        "options": [
          "align-items",
          "justify-content",
          "align-content",
          "flex-wrap"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is Context API in React used for?",
        "options": [
          "To share state globally across component tree without prop drilling",
          "To make HTTP API calls",
          "To route URLs",
          "To compile JSX code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a closure in JavaScript?",
        "options": [
          "A function bundled together with references to its surrounding state (lexical environment)",
          "A way to close a browser window",
          "A private class syntax",
          "A method to stop event propagation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is non-blocking asynchronous I/O in Node.js?",
        "options": [
          "I/O operations execute without halting the main execution thread, delivering results via callbacks/Promises",
          "I/O operations block CPU until disk read completes",
          "Node.js creates a thread per incoming connection",
          "Operations execute synchronously in queue"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator in MongoDB is used to join documents from another collection in aggregation pipeline?",
        "options": [
          "$lookup",
          "$join",
          "$merge",
          "$unionWith"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CORS stand for in web API architecture?",
        "options": [
          "Cross-Origin Resource Sharing",
          "Central Office Routing Service",
          "Client Origin Request System",
          "Cross Organization REST Security"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which package is commonly used in Node Express to hash user passwords using salt?",
        "options": [
          "bcrypt / bcryptjs",
          "crypto-js",
          "jwt",
          "passport"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the main task of the JavaScript Event Loop?",
        "options": [
          "To monitor Call Stack and Task Queue, pushing callback tasks when Call Stack is empty",
          "To compile code into machine byte",
          "To handle CSS layout rendering",
          "To manage garbage collection only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method on EventEmitter registers a listener that triggers ONLY ONCE in Node.js?",
        "options": [
          "once()",
          "on()",
          "addListener()",
          "single()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `.populate()` do in Mongoose?",
        "options": [
          "Replaces specified ObjectId references in document with actual populated documents from another collection",
          "Populates database with seed data",
          "Generates random IDs",
          "Indexes foreign keys"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the command to create and switch to a new branch in Git?",
        "options": [
          "git checkout -b <branch-name>",
          "git branch -create <name>",
          "git switch --new",
          "git new-branch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `.gitignore` file?",
        "options": [
          "Specifies intentionally untracked files that Git should ignore (e.g. node_modules, .env)",
          "Deletes files from remote repository",
          "Prevents git commits",
          "Lists repo contributors"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method should be used for login authentication where credentials are submitted securely in body?",
        "options": [
          "POST",
          "GET",
          "HEAD",
          "OPTIONS"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS position value positions an element relative to the browser viewport, staying fixed during scroll?",
        "options": [
          "relative",
          "absolute",
          "fixed",
          "sticky"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is a Controlled Component in React form handling?",
        "options": [
          "A component where form input values are controlled by React component state",
          "A component with strict permissions",
          "A component wrapped in ErrorBoundary",
          "A server-side rendered form"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `npm` stand for in Node.js ecosystem?",
        "options": [
          "Node Package Manager",
          "Node Programming Model",
          "Network Protocol Manager",
          "New Project Module"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `express.Router()`?",
        "options": [
          "To create modular, mountable route handlers",
          "To route database queries",
          "To handle WebSocket connections",
          "To load static HTML pages"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Replica Set in MongoDB?",
        "options": [
          "A group of mongod processes that maintain the same data set providing high availability and redundancy",
          "A cluster of sharded routers",
          "A backup zip file",
          "A secondary table"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method converts a JSON string into a JavaScript object?",
        "options": [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.object()",
          "JSON.toObject()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the rest parameter syntax in function signatures in JavaScript?",
        "options": [
          "...args",
          "..args",
          "*args",
          "args..."
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "AI/ML Interview Assessment",
    "description": "Master placement interview questions across Python, AI principles, ML algorithms, metrics, data preprocessing, neural networks, Deep Learning, and Generative AI.",
    "category": "Interview Prep",
    "difficulty": "Intermediate",
    "duration": 25,
    "questionsPerAttempt": 15,
    "questions": [
      {
        "questionText": "What is Supervised Machine Learning?",
        "options": [
          "Learning model using labeled training data where target ground truth outputs are provided",
          "Learning without any target labels",
          "Agent learning via environment rewards",
          "Manual rule programming"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Unsupervised Machine Learning?",
        "options": [
          "Learning patterns and structures from unlabeled input data (e.g. Clustering, Dimensionality Reduction)",
          "Learning with labeled datasets",
          "Reinforcement learning",
          "Rule-based expert systems"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which task predicts a CONTINUOUS numerical value (e.g. house price estimation)?",
        "options": [
          "Regression",
          "Classification",
          "Clustering",
          "Dimensionality Reduction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which task assigns input data to DISCRETE categories/labels (e.g. Spam vs Not Spam)?",
        "options": [
          "Classification",
          "Regression",
          "Clustering",
          "Forecasting"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Overfitting in Machine Learning?",
        "options": [
          "When model learns training data noise and details too well, performing poorly on unseen test data",
          "When model is too simple to capture underlying data pattern",
          "When training dataset is empty",
          "When learning rate is 0"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Bias-Variance Tradeoff in ML model training?",
        "options": [
          "Balancing model simplification error (bias) and sensitivity to training data fluctuations (variance)",
          "Balancing CPU vs GPU usage",
          "Balancing train vs test split ratio",
          "Balancing feature count vs row count"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Precision metric in classification evaluation?",
        "options": [
          "Ratio of True Positives to total predicted positives `TP / (TP + FP)`",
          "Ratio of True Positives to total actual positives `TP / (TP + FN)`",
          "Total correct predictions divided by all predictions",
          "Harmonic mean of precision and recall"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Recall (Sensitivity) metric in classification?",
        "options": [
          "Ratio of True Positives to total actual positives `TP / (TP + FN)`",
          "Ratio of True Positives to total predicted positives `TP / (TP + FP)`",
          "Accuracy percentage",
          "False Positive Rate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is F1-Score?",
        "options": [
          "Harmonic mean of Precision and Recall `2 * (Precision * Recall) / (Precision + Recall)`",
          "Average of Precision and Accuracy",
          "Difference between Train and Test accuracy",
          "Square root of MSE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Confusion Matrix?",
        "options": [
          "Table visualization summarizing performance of a classification model (TP, TN, FP, FN)",
          "A matrix with corrupted data",
          "A feature correlation heatmap",
          "A loss function graph"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which algorithm maps predictions to probabilities between 0 and 1 for binary classification?",
        "options": [
          "Logistic Regression",
          "Linear Regression",
          "K-Means",
          "PCA"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Random Forest algorithm?",
        "options": [
          "Ensemble learning method that constructs a multitude of decision trees using bagging (bootstrap aggregation)",
          "A single deep decision tree",
          "A neural network",
          "A clustering technique"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What distance metric is most commonly used in K-Nearest Neighbors (KNN)?",
        "options": [
          "Euclidean Distance",
          "Jaccard Distance",
          "Hamming Distance",
          "Cross Entropy"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What assumption does Naive Bayes classifier make about input features?",
        "options": [
          "Assumes all features are conditionally independent given the class label",
          "Assumes features are highly correlated",
          "Assumes target is continuous",
          "Assumes non-linear boundaries"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What type of algorithm is K-Means?",
        "options": [
          "Unsupervised Clustering Algorithm",
          "Supervised Classification Algorithm",
          "Supervised Regression Algorithm",
          "Dimensionality Reduction"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What neural network architecture introduced in 2017 revolutionized Generative AI and LLMs?",
        "options": [
          "Transformer Architecture (Self-Attention)",
          "Convolutional Neural Networks (CNN)",
          "Recurrent Neural Networks (RNN)",
          "Multi-Layer Perceptron"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Self-Attention Mechanism in Transformers?",
        "options": [
          "Allows model to dynamically weigh the importance of different tokens in a sequence relative to each other",
          "Focuses only on first word of sentence",
          "Reduces GPU memory to zero",
          "Disables training weights"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Token in Large Language Models (LLMs)?",
        "options": [
          "A basic unit of text (sub-word, word, or character) processed by the model",
          "A security JWT token",
          "A database primary key",
          "A GPU memory block"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does RAG stand for in Generative AI architecture?",
        "options": [
          "Retrieval-Augmented Generation",
          "Random Automated Generation",
          "Recurrent Agent Graph",
          "Rule-Based AI Gateway"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Retrieval-Augmented Generation (RAG)?",
        "options": [
          "Technique connecting LLM to external knowledge base/vector database to ground responses in accurate data",
          "Training LLM from scratch",
          "Compressing prompt tokens",
          "Translating code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Backpropagation in neural network training?",
        "options": [
          "Algorithm that computes gradient of loss function with respect to each weight via chain rule to update weights",
          "Forward pass data execution",
          "Data augmentation step",
          "Model inference step"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Gradient Descent in Deep Learning?",
        "options": [
          "Optimization algorithm used to minimize loss function by iteratively moving weights in direction of steepest descent",
          "A neural network layer",
          "An activation function",
          "A dataset split method"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Activation Function resolves Vanishing Gradient problem for positive inputs in deep networks?",
        "options": [
          "ReLU (Rectified Linear Unit)",
          "Sigmoid",
          "Tanh",
          "Step Function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Convolutional Neural Network (CNN) specifically designed for?",
        "options": [
          "Grid-structured data processing like digital Images and Computer Vision tasks",
          "Tabular database rows",
          "Audio synthesis only",
          "Text generation only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Recurrent Neural Network (RNN) designed to process?",
        "options": [
          "Sequential or time-series data where current output depends on previous state memory",
          "Static 2D images",
          "Unordered set data",
          "Tabular CSV files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Dropout regularization in Deep Learning?",
        "options": [
          "Randomly zeroing out a proportion of neuron activations during training to prevent co-adaptation and overfitting",
          "Deleting training rows",
          "Stopping training early",
          "Reducing learning rate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Pandas primary two-dimensional labeled data structure in Python?",
        "options": [
          "DataFrame",
          "Series",
          "NumPy Array",
          "Panel"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method loads a CSV file directly into a Pandas DataFrame?",
        "options": [
          "pd.read_csv()",
          "pd.open_csv()",
          "pd.load_csv()",
          "pd.parse_csv()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Exploratory Data Analysis (EDA)?",
        "options": [
          "Critical process of performing initial investigations on data to discover patterns, spot anomalies, and test hypotheses via summary statistics and visualizations",
          "Writing SQL insert queries",
          "Deploying machine learning models to production",
          "Creating database backups"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Standard Deviation measure in statistics?",
        "options": [
          "The amount of variation or dispersion of a set of values relative to its mean",
          "The average value",
          "The total sum",
          "The range between max and min"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which visualization diagram displays data distribution through quartiles, highlighting outliers visually?",
        "options": [
          "Box Plot (Box-and-Whisker Plot)",
          "Bar Chart",
          "Line Graph",
          "Pie Chart"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Pearson Correlation Coefficient `r` range?",
        "options": [
          "From -1.0 (perfect negative correlation) to +1.0 (perfect positive correlation)",
          "From 0 to 100",
          "From 0 to infinity",
          "From -infinity to +infinity"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is \"Hallucination\" in LLM context?",
        "options": [
          "When an LLM generates plausible-sounding but factually incorrect or fabricated information",
          "When a GPU overheats",
          "When token limit is exceeded",
          "When model throws syntax error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Temperature parameter in LLM text generation?",
        "options": [
          "Hyperparameter controlling randomness/creativity of token predictions (higher = more creative/random)",
          "CPU temperature monitor",
          "Training learning rate",
          "Batch size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is One-Hot Encoding?",
        "options": [
          "Converting categorical variables into binary vectors (0s and 1s) for machine learning models",
          "Scaling numerical features",
          "Normalizing target labels",
          "Filtering missing data"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Support Vector Machine (SVM) objective?",
        "options": [
          "Finds hyper-plane in N-dimensional space that maximizes margin between distinct data classes",
          "Minimizes sum of squared errors",
          "Groups data into K clusters",
          "Computes decision tree depth"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Learning Rate in Gradient Descent?",
        "options": [
          "Hyperparameter controlling the step size taken towards minimum during weight updates",
          "Number of epochs",
          "Number of hidden layers",
          "Batch size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Epoch in neural network training?",
        "options": [
          "One complete pass of the ENTIRE training dataset through the neural network (forward + backward)",
          "A single batch execution",
          "A weight update step",
          "A single neuron"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Multimodal AI?",
        "options": [
          "AI models capable of processing and understanding multiple data modalities simultaneously (text, image, audio, video)",
          "AI running on multiple servers",
          "AI with multiple languages",
          "AI trained on multiple GPUs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Transfer Learning?",
        "options": [
          "Leveraging knowledge/weights from a pre-trained model on a large dataset and applying it to a new related task",
          "Transferring files via FTP",
          "Copying database rows",
          "Converting Python to C++"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "C++ Programming Assessment",
    "description": "Evaluate core C++ concepts including object-oriented programming, templates, STL, pointers, references, and memory management.",
    "category": "Programming",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which header file must be included to use `std::cout` and `std::cin` in C++?",
        "options": [
          "<stdio.h>",
          "<iostream>",
          "<conio.h>",
          "<stdlib.h>"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the operator used to dereference a pointer in C++?",
        "options": [
          "&",
          "*",
          "->",
          "::"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to define a class template in C++?",
        "options": [
          "template",
          "generic",
          "class",
          "typename"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between a reference and a pointer in C++?",
        "options": [
          "References can be NULL, pointers cannot",
          "References cannot be reassigned to point to another object after initialization",
          "Pointers do not occupy memory",
          "References require explicit dereferencing operator `*`"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which access specifier makes class members accessible only within the class and derived classes?",
        "options": [
          "private",
          "protected",
          "public",
          "friend"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of a destructor in C++?",
        "options": [
          "To initialize object attributes",
          "To allocate memory dynamically",
          "To release resources and perform cleanup before object destruction",
          "To copy an object"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which container in C++ Standard Template Library (STL) implements a dynamic contiguous array?",
        "options": [
          "std::list",
          "std::deque",
          "std::vector",
          "std::map"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is Virtual Function in C++?",
        "options": [
          "A member function expected to be redefined in derived classes to achieve runtime polymorphism",
          "A static function in base class",
          "A function compiled to virtual memory",
          "A template function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to dynamically allocate memory on the heap in C++?",
        "options": [
          "malloc",
          "alloc",
          "new",
          "create"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What will happen if `delete` is used instead of `delete[]` for an array allocated with `new[]`?",
        "options": [
          "Compiler error",
          "Undefined behavior",
          "Only memory leaks, no crash",
          "Deletes array elements safely"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which C++ feature allows multiple functions in the same scope with the same name but different parameter lists?",
        "options": [
          "Function Overriding",
          "Function Overloading",
          "Function Templates",
          "Operator Overloading"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the default access level for members of a `class` in C++?",
        "options": [
          "public",
          "private",
          "protected",
          "internal"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the default access level for members of a `struct` in C++?",
        "options": [
          "public",
          "private",
          "protected",
          "internal"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which operator is used to access members of a structure/class via a pointer?",
        "options": [
          ".",
          "->",
          "::",
          "*."
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `std::move` do in C++11?",
        "options": [
          "Moves memory blocks physically in RAM",
          "Casts an lvalue reference to an rvalue reference enabling move semantics",
          "Copies an object efficiently",
          "Deletes an object from container"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which keyword prevents a class from being inherited or a virtual function from being overridden in C++11?",
        "options": [
          "const",
          "static",
          "final",
          "sealed"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is RAII (Resource Acquisition Is Initialization) in C++?",
        "options": [
          "A pattern where resource management is tied to object lifetime via constructor and destructor",
          "An initialization loop",
          "A garbage collection feature",
          "A compile-time algorithm"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which STL algorithm sorts elements in a container in non-descending order by default?",
        "options": [
          "std::order()",
          "std::sort()",
          "std::arrange()",
          "std::organize()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `constexpr` keyword indicate in C++?",
        "options": [
          "Variable or function can be evaluated at compile time",
          "Variable is constant at runtime only",
          "Function cannot throw exceptions",
          "Variable is thread-local"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which smart pointer in C++11 owns an object exclusively and cannot be copied?",
        "options": [
          "std::shared_ptr",
          "std::weak_ptr",
          "std::unique_ptr",
          "std::auto_ptr"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is a Pure Virtual Function in C++?",
        "options": [
          "A virtual function assigned `= 0` in base class, making the class abstract",
          "A function with no arguments",
          "A function defined inline",
          "A private virtual function"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the output of `sizeof(char)` according to the C++ standard?",
        "options": [
          "1 byte",
          "2 bytes",
          "4 bytes",
          "Depends on compiler"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which scope resolution operator is used to access global variables or namespace members in C++?",
        "options": [
          ".",
          "::",
          "->",
          ":"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is `std::map` underlying data structure typically implemented as in STL?",
        "options": [
          "Hash table",
          "Red-Black self-balancing binary search tree",
          "Doubly linked list",
          "Dynamic array"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which operator cannot be overloaded in C++?",
        "options": [
          "+",
          "[]",
          "?: (conditional)",
          "()"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is a copy constructor signature for a class `Node` in C++?",
        "options": [
          "Node(Node obj)",
          "Node(const Node& obj)",
          "Node(Node* obj)",
          "Node(const Node obj)"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to declare a member function that does not modify any member variables of its class?",
        "options": [
          "static",
          "const",
          "immutable",
          "final"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `std::unordered_map` use under the hood in C++ STL?",
        "options": [
          "Red-black tree",
          "Hash table with bucket chaining",
          "Balanced AVL tree",
          "Sorted array"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is `std::weak_ptr` used for in C++?",
        "options": [
          "To break cyclic references created by `std::shared_ptr`",
          "To replace raw pointers in speed-critical code",
          "To create unique pointers",
          "To reallocate heap memory"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which keyword is used to handle exceptions in C++?",
        "options": [
          "try, catch, throw",
          "try, except, raise",
          "begin, handle, emit",
          "try, catch, finally"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Problem Solving & Programming Logic",
    "description": "Assess logical thinking, code-output analysis, conditionals, loops, recursion basics, and algorithmic reasoning.",
    "category": "Programming",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What will be the output of `print(15 % 4)` in standard arithmetic?",
        "options": [
          "3",
          "3.75",
          "4",
          "1"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "If `x = 5` and `y = 10`, what is the result of `(x > 3) AND (y < 8)`?",
        "options": [
          "true",
          "false",
          "null",
          "undefined"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which loop guarantee is true for a `do-while` loop compared to a `while` loop?",
        "options": [
          "It executes at least once",
          "It never runs if condition is false",
          "It executes infinite times",
          "It runs faster"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity of searching an element in a sorted array using Binary Search?",
        "options": [
          "O(n)",
          "O(n^2)",
          "O(log n)",
          "O(1)"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is recursion in programming?",
        "options": [
          "A method where a function calls itself to solve a smaller instance of the problem",
          "A loop that never terminates",
          "A memory allocation method",
          "A conditional statement"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is required in any recursive function to prevent an infinite stack overflow call?",
        "options": [
          "Loop statement",
          "Base case",
          "Global variable",
          "Try-catch block"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "If an array has 7 elements indexed 0 to 6, what is the middle index computed as `Math.floor((start + end) / 2)` initially?",
        "options": [
          "3",
          "3.5",
          "4",
          "2"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the binary representation of the decimal number 13?",
        "options": [
          "1100",
          "1101",
          "1011",
          "1110"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the result of bitwise XOR operation `5 ^ 5`?",
        "options": [
          "10",
          "5",
          "0",
          "1"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What does `a, b = b, a` accomplish in Python / modern languages without temporary variable?",
        "options": [
          "Compares a and b",
          "Swaps the values of a and b",
          "Sets both to zero",
          "Creates a tuple reference"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the Fibonacci sequence term F(5) starting with F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3?",
        "options": [
          "4",
          "5",
          "8",
          "6"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "How many times will a loop `for i from 1 to 10 step 2` iterate?",
        "options": [
          "10",
          "5",
          "4",
          "6"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What will be the output of logical expression `NOT (True OR False)`?",
        "options": [
          "True",
          "False",
          "None",
          "Error"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which data structure operates on a Last-In, First-Out (LIFO) order?",
        "options": [
          "Queue",
          "Stack",
          "Array",
          "Tree"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which data structure operates on a First-In, First-Out (FIFO) order?",
        "options": [
          "Stack",
          "Queue",
          "Graph",
          "Tree"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the output of `7 // 2` in integer division?",
        "options": [
          "3.5",
          "3",
          "4",
          "2"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "If a string is \"ALGORITHM\", what is the character at index 3 (0-based indexing)?",
        "options": [
          "A",
          "L",
          "G",
          "O"
        ],
        "correctAnswer": 3,
        "marks": 1
      },
      {
        "questionText": "What is a prime number defined as?",
        "options": [
          "A number divisible by 2",
          "A number greater than 1 with only two positive divisors: 1 and itself",
          "Any odd number",
          "A number ending in 1, 3, 7, 9"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "In a nested loop where outer loop runs N times and inner loop runs N times, what is the total number of inner loop executions?",
        "options": [
          "2N",
          "N^2",
          "N + N",
          "N log N"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does modulus operator `%` return?",
        "options": [
          "The quotient of division",
          "The remainder of integer division",
          "The percentage value",
          "The absolute difference"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "If a function return value is dependent on `n!`, what is `4!` (4 factorial)?",
        "options": [
          "16",
          "24",
          "12",
          "20"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity to find the maximum element in an unsorted array of size N?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is Palindrome string?",
        "options": [
          "A string containing only vowels",
          "A string that reads the same forwards and backwards",
          "A string of even length",
          "An encrypted string"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is an algorithm?",
        "options": [
          "A hardware execution unit",
          "A step-by-step well-defined computational procedure for solving a problem",
          "A programming language",
          "A database table"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is short-circuit evaluation in logical AND (`&&`) operations?",
        "options": [
          "If the first operand is false, the second operand is not evaluated",
          "Both operands are always evaluated",
          "If the first operand is true, execution halts",
          "It throws an error on falsy values"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "In an array of size N, what is the index of the last element in 0-based indexing?",
        "options": [
          "N",
          "N - 1",
          "N + 1",
          "0"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the value of `2 ^ 3` in exponentiation arithmetic (2 to the power 3)?",
        "options": [
          "6",
          "8",
          "9",
          "5"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which approach divides a problem into smaller subproblems, solves them recursively, and combines results?",
        "options": [
          "Greedy method",
          "Divide and Conquer",
          "Brute force",
          "Linear scanning"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the result of shifting integer `1` left by 3 bits (`1 << 3`)?",
        "options": [
          "3",
          "4",
          "8",
          "16"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "If `x = 10`, what is the value of `x` after `x += 5 * 2`?",
        "options": [
          "30",
          "20",
          "25",
          "17"
        ],
        "correctAnswer": 1,
        "marks": 1
      }
    ]
  },
  {
    "title": "JavaScript Frontend Assessment",
    "description": "Test modern JavaScript for frontend engineering: DOM manipulation, event handling, async/await, Fetch API, and web storage.",
    "category": "Frontend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which DOM method is used to select a single element matching a CSS selector?",
        "options": [
          "document.getElementById()",
          "document.querySelectorAll()",
          "document.querySelector()",
          "document.getElementsByClassName()"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What does `document.createElement(\"div\")` do?",
        "options": [
          "Appends a div to body",
          "Creates an in-memory HTML element node of type DIV",
          "Selects existing div",
          "Renders a div on screen"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which method attaches an event listener to a DOM node without overwriting existing listeners?",
        "options": [
          "element.onclick()",
          "element.addEventListener()",
          "element.attachEvent()",
          "element.listen()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is event delegation in frontend JavaScript?",
        "options": [
          "Attaching event listeners to every child node",
          "Attaching a single event listener to a parent node to handle events on descendant nodes via event bubbling",
          "Delegating event processing to a web worker",
          "Dispatching custom events"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "How do you store data in browser LocalStorage that persists after tab reload?",
        "options": [
          "localStorage.setItem(\"key\", \"value\")",
          "sessionStorage.setItem(\"key\", \"value\")",
          "cookie.set(\"key\", \"value\")",
          "document.store(\"key\", \"value\")"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What data format must objects be converted to before storing in LocalStorage?",
        "options": [
          "Binary Array",
          "JSON string using `JSON.stringify()`",
          "XML string",
          "Base64 encoded string"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which Web API method is used to make HTTP requests asynchronously returning a Promise?",
        "options": [
          "XMLHttpRequest.get()",
          "fetch()",
          "http.request()",
          "ajax.send()"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does `response.json()` return when called on a Fetch API response object?",
        "options": [
          "A JS object directly",
          "A Promise that resolves to parsed JSON object",
          "A string",
          "An array buffer"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code indicates a successful HTTP fetch response?",
        "options": [
          "200",
          "404",
          "500",
          "302"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What keyword is used inside an `async` function to wait for a Promise resolution?",
        "options": [
          "await",
          "then",
          "wait",
          "yield"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `element.innerHTML = \"\"` do?",
        "options": [
          "Deletes the element node from DOM",
          "Clears all child content inside the HTML element",
          "Hides element via CSS",
          "Resets element attributes"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which property of an event object stops the event from propagating further up the DOM tree?",
        "options": [
          "e.preventDefault()",
          "e.stopPropagation()",
          "e.stopImmediatePropagation()",
          "e.cancelBubble = false"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `localStorage` and `sessionStorage`?",
        "options": [
          "`localStorage` data persists until explicitly deleted, `sessionStorage` expires when browser tab session ends",
          "`sessionStorage` can store more data",
          "`localStorage` stores data on server",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method returns a static NodeList of all DOM elements matching a CSS selector?",
        "options": [
          "document.querySelectorAll()",
          "document.getElementsByTagName()",
          "document.children()",
          "document.find()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `DOMContentLoaded` event?",
        "options": [
          "Fires when initial HTML document is completely loaded and parsed without waiting for stylesheets/images",
          "Fires when window closes",
          "Fires when all images finish loading",
          "Fires on button click"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method is used to remove an attribute from an HTML element node?",
        "options": [
          "element.removeAttribute(\"name\")",
          "element.deleteAttribute(\"name\")",
          "element.clearAttribute(\"name\")",
          "element.attribute = null"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `element.classList.toggle(\"active\")` do?",
        "options": [
          "Adds \"active\" if missing, removes \"active\" if present",
          "Always adds \"active\"",
          "Always removes \"active\"",
          "Checks if \"active\" exists returning boolean"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you retrieve the value of an input field with id \"username\"?",
        "options": [
          "document.getElementById(\"username\").value",
          "document.getElementById(\"username\").text",
          "document.getElementById(\"username\").innerHTML",
          "document.getElementById(\"username\").getContent()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Debounce function in frontend web development?",
        "options": [
          "A technique to delay function execution until a specified time has elapsed since the last call",
          "A function that runs on every keystroke immediately",
          "A method to compress JS files",
          "An HTTP caching header"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Throttling function in frontend development?",
        "options": [
          "Ensures a function is called at most once in a specified time interval",
          "Stops function execution forever",
          "Retries failed fetch requests",
          "Validates form inputs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which window object method displays a modal dialog with a text message and OK button?",
        "options": [
          "alert()",
          "prompt()",
          "confirm()",
          "console.log()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `window.location.href = \"https://example.com\"` do?",
        "options": [
          "Opens link in background tab",
          "Navigates the browser window to specified URL",
          "Fetches HTML page asynchronously",
          "Sets page title"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which property returns the width of an element including padding and border in pixels?",
        "options": [
          "offsetWidth",
          "clientWidth",
          "scrollWidth",
          "style.width"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How can you prevent a form submit from reloading the web page in JS event handler?",
        "options": [
          "e.preventDefault()",
          "e.stopReload()",
          "return false only",
          "e.halt()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `document.cookie` return in JavaScript?",
        "options": [
          "A semicolon-separated string of key=value cookie pairs",
          "An object containing cookies",
          "An array of cookie names",
          "HTTP header object"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which browser API allows scheduling a function call after a specified delay in milliseconds?",
        "options": [
          "setTimeout()",
          "setInterval()",
          "requestAnimationFrame()",
          "setImmediate()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `IntersectionObserver` API used for in modern frontend apps?",
        "options": [
          "To asynchronously observe changes in intersection of a target element with an ancestor or viewport (lazy loading/infinite scroll)",
          "To intercept network requests",
          "To animate CSS properties",
          "To monitor DOM tree mutations"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which property accesses custom data attributes (`data-*`) on a DOM element?",
        "options": [
          "element.dataset",
          "element.customData",
          "element.attributes.data",
          "element.getData()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What will `fetch(url)` reject on automatically?",
        "options": [
          "Network failure or inability to establish connection",
          "404 Not Found response status",
          "500 Server Error response status",
          "401 Unauthorized status"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `requestAnimationFrame()` do in browser JS?",
        "options": [
          "Tells browser you wish to perform an animation and requests that the browser call a specified function before next repaint",
          "Creates a web worker thread",
          "Loads CSS file asynchronously",
          "Triggers hardware GPU reset"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Responsive Web Design Assessment",
    "description": "Evaluate skills in responsive layouts, CSS Flexbox, CSS Grid, media queries, mobile-first design, and viewport units.",
    "category": "Frontend",
    "difficulty": "Beginner",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What HTML meta tag is essential for responsive web design on mobile devices?",
        "options": [
          "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
          "<meta name=\"responsive\" content=\"true\">",
          "<meta name=\"screen\" content=\"mobile\">",
          "<meta name=\"display\" content=\"flex\">"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS rule is used to apply styles conditionally based on device screen characteristics?",
        "options": [
          "@media",
          "@import",
          "@supports",
          "@container"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Mobile-First web design strategy mean?",
        "options": [
          "Designing for mobile screens first and progressively enhancing for larger desktop screens",
          "Building native mobile apps instead of websites",
          "Disabling desktop viewports",
          "Using only mobile fonts"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS property value sets a flex container layout?",
        "options": [
          "display: block",
          "display: flex",
          "display: inline",
          "display: table"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "In CSS Flexbox, which property aligns items along the main axis?",
        "options": [
          "align-items",
          "justify-content",
          "align-content",
          "flex-direction"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "In CSS Flexbox, which property aligns items along the cross axis?",
        "options": [
          "justify-content",
          "align-items",
          "flex-wrap",
          "order"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which relative CSS unit is based on the font-size of the root `<html>` element?",
        "options": [
          "em",
          "rem",
          "%",
          "vh"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which CSS unit represents 1% of the viewport width?",
        "options": [
          "vw",
          "vh",
          "vmin",
          "rem"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which property enables item wrapping in a Flexbox container when items exceed container width?",
        "options": [
          "flex-wrap: wrap",
          "flex-flow: nowrap",
          "overflow: scroll",
          "display: grid"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS Grid property defines column track sizes in a grid container?",
        "options": [
          "grid-template-columns",
          "grid-template-rows",
          "grid-column-gap",
          "grid-auto-flow"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What CSS unit in Grid layout represents a fraction of available free space in the grid container?",
        "options": [
          "fr",
          "rem",
          "px",
          "%"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you make an image responsive so it never exceeds its container width?",
        "options": [
          "max-width: 100%; height: auto;",
          "width: 1000px;",
          "min-width: 100%;",
          "object-fit: fill;"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which media query targets devices with viewport width of 768px or less?",
        "options": [
          "@media (max-width: 768px)",
          "@media (min-width: 768px)",
          "@media (width: 768px)",
          "@media screen and (size: 768px)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `box-sizing: border-box;` do in CSS layout calculations?",
        "options": [
          "Includes padding and border in the element total width and height",
          "Excludes padding from width",
          "Adds extra margin around border",
          "Forces grid layout"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS Grid function allows defining repeating column tracks concise like `repeat(3, 1fr)`?",
        "options": [
          "repeat()",
          "minmax()",
          "fit-content()",
          "calc()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS property specifies whether flex items should be arranged in rows or columns?",
        "options": [
          "flex-direction",
          "flex-wrap",
          "flex-flow",
          "justify-content"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `gap: 20px;` property do in CSS Flexbox and Grid?",
        "options": [
          "Sets spacing/gutters between flex or grid items without needing margin hacks",
          "Adds internal padding to items",
          "Sets outer container border",
          "Controls text line height"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which value of `object-fit` resizes an image to fit its container while preserving aspect ratio without cropping?",
        "options": [
          "contain",
          "cover",
          "fill",
          "scale-down"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which value of `object-fit` resizes an image to fill its container preserving aspect ratio, cropping if necessary?",
        "options": [
          "cover",
          "contain",
          "fill",
          "none"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Breakpoint in responsive web design?",
        "options": [
          "A specific screen width threshold defined in media queries where layout design adjusts",
          "A broken HTML link",
          "A line break `<br>` element",
          "A browser crash point"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS relative unit is based on the font-size of its immediate parent element?",
        "options": [
          "em",
          "rem",
          "vw",
          "px"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CSS function `clamp(1rem, 2.5vw, 2rem)` accomplish for responsive typography?",
        "options": [
          "Sets a fluid font size that scales with viewport width between a min of 1rem and max of 2rem",
          "Clamps text overflow with ellipsis",
          "Fixes font size to 2.5vw",
          "Disables web fonts on mobile"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTML element allows supplying multiple image sources for different display resolutions or screen widths?",
        "options": [
          "<picture>",
          "<img>",
          "<figure>",
          "<canvas>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CSS Container Queries (`@container`) allow web developers to do?",
        "options": [
          "Apply styles to elements based on the size of a containing element rather than viewport size",
          "Query database containers",
          "Style Docker containers",
          "Filter flex items"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CSS property sets display to a two-dimensional grid layout?",
        "options": [
          "display: grid",
          "display: flex",
          "display: block",
          "display: inline-grid"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "API & HTTP Fundamentals Assessment",
    "description": "Assess understanding of HTTP protocols, RESTful API principles, status codes, headers, methods, and JSON response formats.",
    "category": "Backend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What does HTTP stand for in networking?",
        "options": [
          "HyperText Transfer Protocol",
          "High Transfer Text Protocol",
          "Hyperlink Text Technology Protocol",
          "HyperTerminal Transfer Protocol"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is idempotent and primarily used to retrieve data from a server without side effects?",
        "options": [
          "POST",
          "GET",
          "DELETE",
          "PATCH"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is used to submit data to a server to create a new resource?",
        "options": [
          "GET",
          "POST",
          "PUT",
          "HEAD"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the main difference between HTTP PUT and PATCH methods?",
        "options": [
          "PUT replaces the target resource entirely; PATCH applies partial modifications",
          "PUT is read-only; PATCH writes data",
          "PATCH creates resources; PUT deletes resources",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code range represents Client Errors (e.g., Not Found, Unauthorized)?",
        "options": [
          "2xx",
          "3xx",
          "4xx",
          "5xx"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code indicates \"201 Created\"?",
        "options": [
          "Resource successfully fetched",
          "Resource successfully created on server",
          "Request moved permanently",
          "No content response"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does HTTP status code 404 signify?",
        "options": [
          "Internal Server Error",
          "Unauthorized Access",
          "Not Found - server cannot find requested URL",
          "Forbidden Access"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code signifies \"401 Unauthorized\"?",
        "options": [
          "Client lacks valid authentication credentials for target resource",
          "Server crashes",
          "Resource deleted",
          "Bad Gateway"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does HTTP status code 403 Forbidden indicate?",
        "options": [
          "Server understands request but refuses to authorize access despite client identity",
          "Page not found",
          "Method not allowed",
          "Gateway timeout"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code range indicates Server Errors?",
        "options": [
          "2xx",
          "3xx",
          "4xx",
          "5xx"
        ],
        "correctAnswer": 3,
        "marks": 1
      },
      {
        "questionText": "What does HTTP header `Content-Type: application/json` inform the recipient?",
        "options": [
          "The payload body is formatted as JSON text",
          "The request requires basic auth",
          "The response is HTML",
          "The connection is persistent"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is REST in API design architecture?",
        "options": [
          "Representational State Transfer - an architectural style for designing networked applications using standard HTTP operations",
          "Remote Execution System Technology",
          "Relational State Protocol",
          "Request Execution Server Standard"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP header is commonly used by clients to pass JWT authentication tokens?",
        "options": [
          "Authorization: Bearer <token>",
          "Authentication: Token <token>",
          "Content-Type: token",
          "Host: token"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Statelessness in RESTful web services?",
        "options": [
          "Server stores no client session context between requests; each request contains all info needed",
          "Server stores all client states in memory",
          "Database does not save changes",
          "API accepts no request parameters"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "In a RESTful API URL structure `/api/users/42/orders`, what does `42` represent?",
        "options": [
          "Route parameter identifying a specific user ID",
          "Query parameter",
          "HTTP status code",
          "API version number"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "In a RESTful API URL `/api/products?category=electronics&limit=10`, what are `category` and `limit`?",
        "options": [
          "Query parameters used for filtering and pagination",
          "Route parameters",
          "HTTP headers",
          "Request body payload"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method deletes the specified resource from the server?",
        "options": [
          "REMOVE",
          "DELETE",
          "PURGE",
          "DESTROY"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is CORS (Cross-Origin Resource Sharing)?",
        "options": [
          "A browser security mechanism that uses HTTP headers to allow or restrict resources requested from another domain",
          "A server database plugin",
          "A cookie encryption standard",
          "An API documentation tool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an HTTP Preflight Request triggered by browsers?",
        "options": [
          "An OPTIONS request sent before actual request to check if cross-origin request is safe to send",
          "A GET request to ping server",
          "A DNS lookup",
          "A SSL handshake"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does HTTP status code 301 indicate?",
        "options": [
          "Moved Permanently - target resource assigned new permanent URI",
          "Found - temporary redirect",
          "See Other",
          "Not Modified"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP header controls browser caching behavior?",
        "options": [
          "Cache-Control",
          "Set-Cookie",
          "User-Agent",
          "Content-Encoding"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does JSON stand for?",
        "options": [
          "JavaScript Object Notation",
          "Java Standard Output Network",
          "Joint Server Operation Node",
          "JavaScript Oriented Network"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method requests server headers only without returning response body payload?",
        "options": [
          "GET",
          "HEAD",
          "OPTIONS",
          "TRACE"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What does HTTP status code 500 indicate?",
        "options": [
          "Internal Server Error - server encountered unexpected condition preventing fulfilling request",
          "Bad Gateway",
          "Service Unavailable",
          "Gateway Timeout"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP status code is returned when a client requests a resource that has not been modified since last fetch (conditional GET)?",
        "options": [
          "200 OK",
          "304 Not Modified",
          "204 No Content",
          "412 Precondition Failed"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is GraphQL compared to REST API architecture?",
        "options": [
          "A query language for APIs allowing clients to request exactly the data fields they need in a single request",
          "A SQL database engine",
          "A binary protocol over TCP",
          "An API proxy gateway"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP header identifies the operating system, browser, or client application making the request?",
        "options": [
          "User-Agent",
          "Host",
          "Referer",
          "Accept"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an API Rate Limiting strategy?",
        "options": [
          "Restricting the number of API requests a user/client can make within a specified timeframe",
          "Limiting maximum speed of server CPU",
          "Restricting API to desktop browsers",
          "Limiting JSON payload file size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Webhook mean in modern web APIs?",
        "options": [
          "An automated HTTP POST callback push notification triggered by an event on the server to a client URL",
          "A client-side polling loop",
          "A browser extension API",
          "A database trigger"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is gRPC in API architecture?",
        "options": [
          "A high-performance RPC framework developed by Google using Protocol Buffers over HTTP/2",
          "A RESTful JSON generator",
          "A GraphQL query compiler",
          "A web browser API"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Authentication & Web Security Fundamentals",
    "description": "Evaluate core web security topics including JWT, password hashing, sessions, CORS, HTTPS, XSS, and CSRF protection.",
    "category": "Backend",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is the primary difference between Authentication and Authorization?",
        "options": [
          "Authentication verifies WHO a user is; Authorization determines WHAT actions/resources they can access",
          "Authentication grants permissions; Authorization checks passwords",
          "They are identical concepts",
          "Authentication occurs on server; Authorization on client"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does JWT stand for in web security?",
        "options": [
          "JSON Web Token",
          "Java Web Technology",
          "Joint Web Transfer",
          "JSON Wireless Protocol"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are the three parts of a JSON Web Token (JWT) separated by dots (`.`)?",
        "options": [
          "Header, Payload, Signature",
          "Algorithm, Key, Value",
          "User, Role, Expiry",
          "Title, Data, Hash"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Why should plain-text passwords NEVER be stored in a database?",
        "options": [
          "If database is breached, attacker gains instant access to user accounts across systems",
          "Plaintext takes too much disk space",
          "Database queries run slower",
          "Passwords cannot be indexed"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which key derivation / hashing algorithm includes built-in salt and adjustable work factor (cost) for secure password storage?",
        "options": [
          "MD5",
          "SHA-256",
          "bcrypt",
          "Base64"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is Salt in password hashing security?",
        "options": [
          "Random data added to a password before hashing to defend against precomputed rainbow table attacks",
          "An encryption key",
          "A database secret",
          "A JWT header"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cross-Site Scripting (XSS)?",
        "options": [
          "A vulnerability where an attacker injects malicious scripts into trusted websites viewed by other users",
          "A server database corruption attack",
          "Intercepting WiFi packets",
          "Brute forcing passwords"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How can developers defend against Cross-Site Scripting (XSS) in web applications?",
        "options": [
          "Sanitize and encode all user inputs before rendering in HTML/DOM, and use Content Security Policy (CSP)",
          "Disable HTTPS",
          "Use plaintext passwords",
          "Allow all CORS origins"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cross-Site Request Forgery (CSRF)?",
        "options": [
          "An attack that trick authenticated users into executing unwanted actions on a web app in which they are logged in",
          "Scanning server ports",
          "SQL injection into form fields",
          "Stealing SSL certificates"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which cookie attribute prevents client-side JavaScript (like `document.cookie`) from accessing session cookies, mitigating XSS token theft?",
        "options": [
          "HttpOnly",
          "Secure",
          "SameSite=Strict",
          "Domain"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which cookie attribute ensures the cookie is ONLY sent over encrypted HTTPS connections?",
        "options": [
          "Secure",
          "HttpOnly",
          "SameSite",
          "Path"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `SameSite=Strict` cookie attribute enforce?",
        "options": [
          "Browser sends cookie ONLY in first-party context, refusing to send it with cross-site requests",
          "Cookie is shared with all domains",
          "Cookie lasts for 1 year",
          "Cookie encrypts payload"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SQL Injection (SQLi)?",
        "options": [
          "A attack where malicious SQL statements are inserted into entry fields for execution against backend database",
          "A method to speed up database queries",
          "A front-end JS error",
          "An HTTP protocol mismatch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the primary defense against SQL Injection vulnerabilities?",
        "options": [
          "Use parameterized queries / prepared statements instead of string concatenation",
          "Filter HTML tags only",
          "Store passwords in Base64",
          "Disable SQL database"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does HTTPS protocol provide over standard HTTP?",
        "options": [
          "Encrypted data transmission over TLS/SSL preventing eavesdropping and tampering",
          "Faster video streaming",
          "Automatic database backups",
          "No need for authentication"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Public Key Cryptography (Asymmetric Encryption)?",
        "options": [
          "Encryption using a key pair: Public key for encryption/verifying, Private key for decryption/signing",
          "Encryption using one secret key shared between sender and receiver",
          "Hashing passwords without salt",
          "Compressing files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Symmetric Encryption?",
        "options": [
          "Encryption where the SAME secret key is used for both encrypting and decrypting data",
          "Encryption using two different keys",
          "One-way mathematical hashing",
          "Base64 encoding"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Why is Base64 NOT an encryption algorithm?",
        "options": [
          "Base64 is a reversible encoding scheme, not an encryption method; it provides ZERO secrecy or confidentiality",
          "Base64 requires a secret key",
          "Base64 is a hash algorithm",
          "Base64 works on numbers only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is OAuth 2.0 primarily used for?",
        "options": [
          "An authorization framework allowing third-party services to access user resources without exposing user credentials",
          "A database engine",
          "A password hashing utility",
          "An HTML form validator"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does OpenID Connect (OIDC) add on top of OAuth 2.0?",
        "options": [
          "An Identity layer providing user authentication and ID tokens (ID Token)",
          "Data encryption at rest",
          "Database replication",
          "SQL query routing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Authentication requiring two or more independent verification factors (something you know, have, or are)",
          "Using two passwords",
          "Logging in from two browsers",
          "Hashing passwords twice"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Man-in-the-Middle (MitM) attack?",
        "options": [
          "An attack where attacker secretly intercepts and potentially alters communication between two parties",
          "A brute force password cracker",
          "A database lock bug",
          "A hardware memory leak"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does HTTP security header `Content-Security-Policy` (CSP) control?",
        "options": [
          "Restricts resources (scripts, images, stylesheets) that the browser is allowed to load for a given page",
          "Sets session timeout",
          "Forces CORS credentials",
          "Hashes user inputs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Rate Limiting used for in authentication endpoints (like `/login`)?",
        "options": [
          "To prevent brute-force credential stuffing attacks by limiting login attempts per IP/user",
          "To compress HTTP responses",
          "To encrypt JWT payloads",
          "To clear invalid cookies"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Cryptographic Hash Function property?",
        "options": [
          "It is a one-way function: computationally infeasible to invert (determine input from hash output)",
          "It can be decrypted with a private key",
          "Output size changes based on input length",
          "It produces predictable duplicate outputs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which hashing algorithm is considered cryptographically BROKEN and unsafe for security applications?",
        "options": [
          "MD5",
          "SHA-256",
          "SHA-512",
          "Argon2"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is HMAC (Hash-based Message Authentication Code)?",
        "options": [
          "A specific construction for calculating a message authentication code involving a cryptographic hash function and a secret key",
          "A hardware security chip",
          "An HTTP cookie parser",
          "A password vault"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the role of a Certificate Authority (CA) in HTTPS/TLS?",
        "options": [
          "A trusted entity that issues digital certificates verifying the ownership of a public key domain",
          "A DNS provider",
          "A web hosting server",
          "A router firewall"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Zero Trust Security Model principle?",
        "options": [
          "\"Never trust, always verify\" - assume threat exists inside network; verify every request regardless of origin",
          "Trust all requests from internal IP network",
          "Disable passwords for internal users",
          "Encrypt only external emails"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Where should sensitive API keys and secrets be stored in backend server application?",
        "options": [
          "Environment variables (`process.env`) / secrets manager, never hardcoded in git source code",
          "Frontend React components",
          "Public HTML meta tags",
          "Client local storage"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Advanced SQL Fundamentals",
    "description": "Test knowledge of complex SQL queries, JOINs, subqueries, aggregation, window functions, indexing, and transactions.",
    "category": "Database",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which SQL JOIN returns all rows from the left table and matched rows from the right table, filling NULLs for unmatched right rows?",
        "options": [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of `GROUP BY` clause in SQL?",
        "options": [
          "Groups rows that have the same values into summary rows (e.g. `COUNT`, `SUM`, `AVG`)",
          "Sorts output in ascending order",
          "Filters individual rows before joining",
          "Limits query result count"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `WHERE` and `HAVING` clauses in SQL?",
        "options": [
          "`WHERE` filters rows before grouping; `HAVING` filters grouped rows after aggregate functions",
          "`HAVING` filters before grouping",
          "`WHERE` is for text columns only",
          "They are completely identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL aggregate function computes the average value of a numeric column?",
        "options": [
          "COUNT()",
          "SUM()",
          "AVG()",
          "MEAN()"
        ],
        "correctAnswer": 2,
        "marks": 1
      },
      {
        "questionText": "What is a Correlated Subquery in SQL?",
        "options": [
          "A subquery that evaluates once for each row processed by the outer query and depends on outer query values",
          "A subquery that executes independently once",
          "A subquery inside a JOIN ON clause",
          "A UNION query"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL clause is used to filter out duplicate rows from query results?",
        "options": [
          "DISTINCT",
          "UNIQUE",
          "DIFFERENT",
          "GROUP BY"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a SQL Index used for in database optimization?",
        "options": [
          "A data structure that improves the speed of data retrieval operations on a database table at the cost of write performance",
          "A foreign key constraint",
          "A temporary table storage",
          "A backup archive"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are the ACID properties in database transaction management?",
        "options": [
          "Atomicity, Consistency, Isolation, Durability",
          "Accuracy, Connectivity, Integrity, Data",
          "Association, Concurrency, Indexing, Deletion",
          "Aggregation, Control, Isolation, Distribution"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Atomicity mean in database transactions?",
        "options": [
          "All operations within a transaction complete successfully, or the entire transaction is rolled back completely",
          "Data is stored as atomic elements",
          "Transaction runs in atomic CPU clock cycles",
          "Locks single row only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL command commits all changes made during the current transaction permanently to database?",
        "options": [
          "ROLLBACK",
          "COMMIT",
          "SAVEPOINT",
          "GRANT"
        ],
        "correctAnswer": 1,
        "marks": 1
      },
      {
        "questionText": "Which SQL command cancels changes made in current transaction restoring previous state?",
        "options": [
          "ROLLBACK",
          "COMMIT",
          "UNDO",
          "RESET"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Foreign Key constraint in relational databases?",
        "options": [
          "A column or group of columns that enforces a link between data in two tables (referential integrity)",
          "A primary key from external database",
          "An index for string search",
          "A temporary column"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a SQL Window Function (e.g., `ROW_NUMBER() OVER (PARTITION BY ...)`)?",
        "options": [
          "A function that performs calculations across a set of table rows related to current row without collapsing rows into a single summary",
          "A function that creates a GUI window",
          "A scalar function operating on single value",
          "A view window filter"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `RANK()` window function do when two rows have identical sorting values?",
        "options": [
          "Assigns the same rank to tied rows and skips subsequent rank numbers",
          "Assigns sequential numbers without gaps",
          "Throws error",
          "Assigns random rank"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `DENSE_RANK()` window function do when two rows tie?",
        "options": [
          "Assigns same rank to tied rows WITHOUT skipping subsequent rank numbers",
          "Skips next rank",
          "Averages ranks",
          "Sorts alphabetically"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Database View in SQL?",
        "options": [
          "A virtual table based on the result-set of an SQL statement",
          "A physical table stored on disk",
          "A database UI theme",
          "A query log file"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL operator is used to combine the result sets of two SELECT queries excluding duplicates?",
        "options": [
          "UNION",
          "UNION ALL",
          "INTERSECT",
          "EXCEPT"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `UNION` and `UNION ALL` in SQL?",
        "options": [
          "`UNION` removes duplicate rows from combined results; `UNION ALL` includes all duplicates",
          "`UNION ALL` sorts result set",
          "`UNION` is faster than `UNION ALL`",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL operator returns only distinct rows that are present in BOTH query result sets?",
        "options": [
          "INTERSECT",
          "EXCEPT",
          "UNION",
          "MINUS"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL operator returns rows from the first query that are NOT present in the second query?",
        "options": [
          "EXCEPT (or MINUS)",
          "INTERSECT",
          "UNION",
          "CROSS JOIN"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a CTE (Common Table Expression) defined with `WITH` clause in SQL?",
        "options": [
          "A temporary named result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement",
          "A permanent database view",
          "A table column type",
          "An index type"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Database Normalization?",
        "options": [
          "The process of organizing columns and tables to reduce data redundancy and improve data integrity",
          "Backing up database nightly",
          "Converting tables to JSON",
          "Increasing column lengths"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What condition defines 1NF (First Normal Form)?",
        "options": [
          "Each table cell must contain a single atomic value, and column values must be of same domain with no repeating groups",
          "All foreign keys must be indexed",
          "Table must have 10 columns",
          "No NULL values allowed"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What condition defines 2NF (Second Normal Form)?",
        "options": [
          "It is in 1NF and all non-key attributes are fully functionally dependent on the entire primary key",
          "No JOIN queries",
          "All columns are numeric",
          "Table has a view"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What condition defines 3NF (Third Normal Form)?",
        "options": [
          "It is in 2NF and has no transitive dependencies (non-key columns depend ONLY on the primary key)",
          "No foreign keys",
          "Primary key is integer",
          "Index on all columns"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a CROSS JOIN (Cartesian Product) in SQL?",
        "options": [
          "Combines each row of the first table with every row of the second table, resulting in N * M total rows",
          "Joins on primary key only",
          "Returns matching rows only",
          "Returns empty set"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `EXPLAIN` or `EXPLAIN ANALYZE` command used for in SQL databases?",
        "options": [
          "Shows the execution plan that database query planner generates for a query to help optimize performance",
          "Explains SQL syntax error",
          "Translates SQL to English",
          "Deletes query cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL constraint ensures that all values in a column are distinct and not null?",
        "options": [
          "PRIMARY KEY",
          "FOREIGN KEY",
          "CHECK",
          "DEFAULT"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `COALESCE(val1, val2, val3)` function return in SQL?",
        "options": [
          "Returns the first non-NULL expression among its arguments",
          "Concatenates strings",
          "Sums numbers",
          "Returns count of NULLs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Stored Procedure in SQL?",
        "options": [
          "A prepared SQL code segment that can be saved, reused, and executed on the database server",
          "A client script",
          "A table backup file",
          "A database driver"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Natural Language Processing Fundamentals",
    "description": "Evaluate concepts in text preprocessing, tokenization, TF-IDF, word embeddings, sentiment analysis, and transformer architecture basics.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Tokenization in Natural Language Processing (NLP)?",
        "options": [
          "The process of breaking down text into smaller units such as words, subwords, or characters",
          "Encrypting text into tokens",
          "Translating text between languages",
          "Removing HTML tags"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are Stop Words in text preprocessing?",
        "options": [
          "Commonly used words (e.g. \"the\", \"is\", \"at\") that are often removed from text before processing",
          "Misspelled words",
          "Punctuation marks",
          "Target labels"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Stemming in NLP?",
        "options": [
          "A rule-based process of reducing inflected words to their word stem by chopping off suffixes",
          "Finding dictionary definitions",
          "Generating word synonyms",
          "Calculating word frequency"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the main difference between Stemming and Lemmatization?",
        "options": [
          "Lemmatization uses vocabulary and morphological analysis to return valid dictionary root words (lemma); Stemming uses crude heuristic chopping",
          "Stemming is always more accurate than Lemmatization",
          "Lemmatization operates on numbers only",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does TF-IDF stand for in text feature extraction?",
        "options": [
          "Term Frequency - Inverse Document Frequency",
          "Text Format - Image Document Format",
          "Token Feature - Indexed Data Frequency",
          "Total Frequency - Internal Document Count"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "In TF-IDF, what does a high TF-IDF score for a word in a specific document indicate?",
        "options": [
          "The word is very frequent in that document but rare across the corpus, making it highly informative",
          "The word is a common stop word",
          "The word appears in all documents",
          "The word is misspelled"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Bag of Words (BoW) model in NLP?",
        "options": [
          "A representation of text that counts the occurrences of words within a document, ignoring word order and grammar",
          "A list of synonyms",
          "A neural network architecture",
          "A text translation tool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are N-grams in text processing?",
        "options": [
          "Contiguous sequences of N items (words or characters) from a given text sample",
          "N-dimensional vectors",
          "Grammar correction rules",
          "Neural network layers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Word Embedding (e.g. Word2Vec, GloVe)?",
        "options": [
          "Representing words as dense real-valued vectors in a continuous vector space where semantically similar words are close",
          "Creating sparse one-hot encodings",
          "Hashing text to integers",
          "Compressing text files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Sentiment Analysis in NLP?",
        "options": [
          "The task of computationally identifying and categorizing opinions or emotions expressed in text (positive, negative, neutral)",
          "Predicting next word in text",
          "Parsing syntactic sentence trees",
          "Counting total words"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What architecture introduced Self-Attention mechanism in the paper \"Attention Is All You Need\" (2017)?",
        "options": [
          "Transformer",
          "Recurrent Neural Network (RNN)",
          "Convolutional Neural Network (CNN)",
          "Multilayer Perceptron (MLP)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What advantage do Transformers have over traditional Recurrent Neural Networks (RNNs)?",
        "options": [
          "Transformers process all tokens in parallel using self-attention rather than sequentially, enabling scalable pretraining",
          "Transformers require no GPU acceleration",
          "RNNs handle longer contexts better",
          "Transformers do not use vectors"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is BERT (Bidirectional Encoder Representations from Transformers)?",
        "options": [
          "A transformer-based model pretrained using masked language modeling to capture bidirectional context",
          "A rule-based chatbot",
          "A sentiment lexicon",
          "A text-to-speech engine"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Masked Language Modeling (MLM) task involve during BERT pretraining?",
        "options": [
          "Randomly masking input tokens and training the model to predict the masked words from context",
          "Translating text to French",
          "Classifying sentiment",
          "Generating image captions"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Named Entity Recognition (NER)?",
        "options": [
          "The task of locating and classifying named entities in text into predefined categories (Person, Organization, Location, Date)",
          "Translating names into Latin",
          "Counting nouns in a document",
          "Tokenizing sentences"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is One-Hot Encoding for vocabulary words?",
        "options": [
          "A sparse vector representation where vector size equals vocabulary size with 1 at word index and 0 elsewhere",
          "Dense word embedding vector",
          "TF-IDF matrix",
          "Subword tokenization"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What problem in long sequences do LSTMs (Long Short-Term Memory) address compared to basic Vanilla RNNs?",
        "options": [
          "Vanishing and exploding gradient problem over long time steps",
          "Slow inference speed",
          "High storage cost",
          "Overfitting on small datasets"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cosine Similarity used for with word embeddings?",
        "options": [
          "Measuring semantic similarity between two vector representations based on the cosine of the angle between them",
          "Calculating distance in kilometers",
          "Measuring vector length",
          "Counting word frequency"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does POS (Part-of-Speech) Tagging do in NLP?",
        "options": [
          "Assigns grammatical tags (e.g. Noun, Verb, Adjective) to each word in a text corpus based on context",
          "Detects spam emails",
          "Fixes spelling mistakes",
          "Splits paragraphs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is BPE (Byte Pair Encoding) in modern LLM tokenizers?",
        "options": [
          "A subword tokenization algorithm that iteratively merges the most frequent pair of consecutive bytes/characters",
          "A binary file compression tool",
          "An encryption key scheme",
          "A parsing tree algorithm"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of Attention Mechanism in sequence-to-sequence models?",
        "options": [
          "Allows the model to focus dynamically on different parts of the input sequence when generating each output token",
          "Reduces vector dimensions to 1",
          "Applies rule-based dictionary lookups",
          "Compresses text files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Topic Modeling (e.g. Latent Dirichlet Allocation - LDA)?",
        "options": [
          "An unsupervised learning technique to discover abstract hidden \"topics\" or themes in a collection of documents",
          "Supervised text sentiment labeling",
          "Spelling correction",
          "Text summarization via regex"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Text Summarization via Extractive approach?",
        "options": [
          "Selecting and combining important sentences directly from original text",
          "Rewriting summary using new vocabulary",
          "Translating text",
          "Converting text to bullet points"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Text Summarization via Abstractive approach?",
        "options": [
          "Generating new sentences that paraphrase and condense main ideas using model language generation",
          "Extracting verbatim sentences",
          "Deleting stop words only",
          "Counting word frequency"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does perplexity metric evaluate in Language Modeling?",
        "options": [
          "How well a probability model predicts a sample text (lower perplexity indicates better predictive accuracy)",
          "Model GPU memory usage",
          "Total dataset size",
          "Text reading speed"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Python library is widely used for classical NLP tasks like tokenization, POS tagging, and stopwords (NLTK, spaCy)?",
        "options": [
          "spaCy",
          "NumPy",
          "Flask",
          "Pandas"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Word2Vec Continuous Bag-of-Words (CBOW) architecture?",
        "options": [
          "Predicts a target word given its surrounding context words",
          "Predicts context words given a target word",
          "Counts words in a document",
          "Ranks search results"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Word2Vec Skip-gram architecture?",
        "options": [
          "Predicts surrounding context words given a single target word",
          "Predicts target word from context",
          "Groups words alphabetically",
          "Translates text"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Coreference Resolution in text processing?",
        "options": [
          "The task of finding all expressions in text that refer to the same real-world entity (e.g., \"Mary\" and \"she\")",
          "Counting pronoun frequencies",
          "Tagging nouns",
          "Splitting compound words"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does BLEU (Bilingual Evaluation Understudy) score measure?",
        "options": [
          "Evaluates the quality of machine-translated text against reference human translations based on n-gram precision",
          "Text readability index",
          "Model training time",
          "Spelling accuracy"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Computer Vision Fundamentals",
    "description": "Test foundational knowledge of image processing, convolution operations, CNN architectures, feature extraction, and transfer learning.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What are the dimensions of a standard RGB digital image matrix with height H and width W?",
        "options": [
          "(H, W, 3)",
          "(H, W)",
          "(3, H+W)",
          "(H*W, 1)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Pixel in digital imaging?",
        "options": [
          "The smallest controllable picture element of a digital image holding intensity values",
          "A camera lens specification",
          "A neural network layer",
          "A compression algorithm"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What range of integer values does a standard 8-bit grayscale image channel pixel take?",
        "options": [
          "0 to 255",
          "0 to 100",
          "-128 to 127",
          "0 to 1"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Convolution operation in image processing?",
        "options": [
          "Applying a kernel/filter matrix sliding across an image matrix to compute dot products for feature extraction",
          "Resizing an image",
          "Rotating an image 90 degrees",
          "Compressing JPEG files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the main function of a Convolutional Layer in a Convolutional Neural Network (CNN)?",
        "options": [
          "To automatically extract local spatial features (edges, textures, shapes) from input images",
          "To flatten matrices into 1D vectors",
          "To calculate loss function",
          "To initialize weights"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does a Max Pooling layer do in a CNN?",
        "options": [
          "Downsamples spatial dimensions (width and height) by selecting maximum value in feature map windows",
          "Increases image resolution",
          "Adds more trainable parameters",
          "Applies softmax activation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Stride in a convolutional layer?",
        "options": [
          "The number of pixels by which the kernel matrix shifts across the input image per step",
          "The size of the filter kernel",
          "The depth of channels",
          "The padding size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Why is Padding (e.g. Same Padding) applied to input images before convolution?",
        "options": [
          "To preserve spatial border dimensions and prevent spatial feature size from shrinking rapidly",
          "To brighten image colors",
          "To remove image noise",
          "To crop image center"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What problem in deep neural networks does Residual Network (ResNet) architecture solve using skip connections?",
        "options": [
          "Vanishing gradient problem in extremely deep networks allowing gradients to flow directly",
          "High image resolution",
          "Slow video decoding",
          "Overfitting on small images"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Transfer Learning in computer vision?",
        "options": [
          "Using a pre-trained model on a large dataset (e.g. ImageNet) as a starting point for a new vision task",
          "Transferring images between devices",
          "Converting RGB to Grayscale",
          "Moving models to web browser"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which popular open-source library is widely used for real-time computer vision and image processing in Python/C++?",
        "options": [
          "OpenCV",
          "Pandas",
          "Scikit-Learn",
          "NLTK"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Object Detection task compared to Image Classification?",
        "options": [
          "Object Detection classifies objects AND predicts bounding box coordinates around them; Classification only labels the entire image",
          "Classification draws bounding boxes",
          "Detection converts images to text",
          "They are identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Semantic Segmentation in computer vision?",
        "options": [
          "Classifying every individual pixel in an image into a specific predefined object category",
          "Drawing rectangular bounding boxes",
          "Detecting faces only",
          "Cropping images"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Instance Segmentation?",
        "options": [
          "Detecting and segmenting each individual distinct object instance at pixel level",
          "Labeling image metadata",
          "Resizing images",
          "Reducing color depth"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Intersection over Union (IoU) measure in Object Detection evaluation?",
        "options": [
          "The overlap percentage between predicted bounding box and ground truth bounding box",
          "Number of objects detected",
          "Camera resolution accuracy",
          "Model training speed"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Augmentation in computer vision dataset preparation?",
        "options": [
          "Applying transformations (flips, rotations, scaling, color jitter) to existing training images to expand dataset diversity",
          "Adding synthetic text",
          "Deleting noisy images",
          "Downloading images from web"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which classical edge detection filter calculates image intensity gradients using horizontal and vertical kernels?",
        "options": [
          "Sobel Filter",
          "Max Pooling",
          "Softmax",
          "ReLU"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the role of Activation Functions like ReLU in CNNs?",
        "options": [
          "Introduces non-linearity into the network allowing it to learn complex patterns",
          "Flattens feature maps",
          "Calculates pixel averages",
          "Normalizes batch inputs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Kernel / Filter in a convolutional layer?",
        "options": [
          "A small matrix of trainable weights used to extract specific visual features (e.g. vertical lines, curves)",
          "An image format",
          "A camera hardware sensor",
          "A database index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What architecture introduced Region-based CNNs for object detection?",
        "options": [
          "R-CNN",
          "VGG16",
          "LeNet-5",
          "AlexNet"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is YOLO (You Only Look Once) in object detection?",
        "options": [
          "A real-time single-stage object detector that predicts bounding boxes and class probabilities directly in a single forward pass",
          "A multi-stage pipeline",
          "A image compression tool",
          "An edge detector"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Flatten layer do in a CNN architecture before connecting to Dense fully-connected layers?",
        "options": [
          "Converts multi-dimensional feature maps (channels, height, width) into a 1D vector",
          "Reduces pixel intensity",
          "Removes background colors",
          "Computes loss"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Batch Normalization in deep vision networks?",
        "options": [
          "Normalizes layer inputs across batch minibatches to speed up training stability and convergence",
          "Normalizes image file sizes",
          "Resizes images to 224x224",
          "Standardizes dataset filenames"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Image Histogram?",
        "options": [
          "A graphical representation showing distribution of pixel intensity values in an image",
          "A list of image dimensions",
          "A bounding box table",
          "An image filter"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Gaussian Blur filter accomplish in image preprocessing?",
        "options": [
          "Smoothes image noise and reduces detail using a Gaussian function kernel",
          "Sharpens image edges",
          "Inverts image colors",
          "Detects corners"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which vision network won ImageNet 2012 challenge, sparking deep learning explosion?",
        "options": [
          "AlexNet",
          "LeNet-5",
          "ResNet50",
          "YOLO"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Feature Map in CNNs?",
        "options": [
          "The output matrix generated by applying a filter to an input layer representing detected features",
          "A map of camera locations",
          "A vector of class names",
          "A color palette"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Image Thresholding do in binary image processing?",
        "options": [
          "Converts a grayscale image to a binary (black and white) image based on a intensity cutoff value",
          "Increases contrast automatically",
          "Rotates image",
          "Compresses image"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Optical Flow in video processing?",
        "options": [
          "The pattern of apparent motion of image objects between consecutive video frames caused by movement",
          "Video file compression format",
          "Lens focal length",
          "Color grading style"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Vision Transformer (ViT)?",
        "options": [
          "An architecture that applies transformer self-attention directly to sequences of non-overlapping image patches for vision tasks",
          "A CNN filter",
          "An image generator",
          "A video player"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Prompt Engineering & LLM Fundamentals",
    "description": "Assess practical prompt techniques, zero-shot/few-shot prompting, system instructions, token management, and LLM behavior.",
    "category": "AI & ML",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Prompt Engineering in Large Language Model (LLM) applications?",
        "options": [
          "The practice of structuring, refining, and designing input text instructions to guide LLMs toward desired outputs",
          "Writing C++ compiler code",
          "Setting up GPU hardware drivers",
          "Designing database schemas"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Zero-Shot Prompting?",
        "options": [
          "Providing a task prompt to the LLM without giving any explicit demonstration examples in the input context",
          "Prompting with zero tokens",
          "Providing 100 code examples",
          "Training model from scratch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Few-Shot Prompting?",
        "options": [
          "Providing a few demonstration input-output examples within the prompt context to guide LLM response format",
          "Training model on 3 epochs",
          "Prompting without instructions",
          "Using small models only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is System Instruction / System Prompt in LLM API requests?",
        "options": [
          "A foundational instruction defining the assistant persona, constraints, tone, and global rules governing model output",
          "User chat query",
          "Error stack trace",
          "API billing key"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Context Window in Large Language Models?",
        "options": [
          "The maximum number of tokens (input + output) an LLM can process in a single interaction context",
          "The application window size on monitor",
          "GPU memory size in GB",
          "Number of training files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are Tokens in the context of LLMs?",
        "options": [
          "Subword pieces or character chunks into which text is split before being processed by language models",
          "API access password keys",
          "Database primary keys",
          "Cryptocurrency tokens"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is LLM Hallucination?",
        "options": [
          "When a model generates confident-sounding information that is factually incorrect or ungrounded in source data",
          "A rendering bug",
          "Model GPU crash",
          "Slow token generation speed"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Chain-of-Thought (CoT) Prompting?",
        "options": [
          "Encouraging the LLM to break down complex reasoning step-by-step before producing the final answer",
          "Chaining multiple API calls in Python",
          "Connecting database tables",
          "Recursive function calls"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is RAG (Retrieval-Augmented Generation)?",
        "options": [
          "A technique that retrieves relevant external document snippets from a knowledge base and includes them in context for LLM generation",
          "Fine-tuning model weights",
          "Random text generation",
          "Translating languages"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the purpose of Temperature parameter in LLM generation settings?",
        "options": [
          "Controls randomness of token sampling (lower temp = deterministic/focused, higher temp = creative/diverse)",
          "Controls GPU temperature in Celsius",
          "Sets maximum output token count",
          "Controls API response time"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Top-P (Nucleus Sampling) parameter control in LLM output generation?",
        "options": [
          "Selects tokens from the smallest set whose cumulative probability exceeds probability P",
          "Sets prompt length limit",
          "Filters offensive words",
          "Limits context window"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Prompt Injection Attack?",
        "options": [
          "A vulnerability where untrusted user input tricks the LLM into overriding original system instructions and guardrails",
          "Injecting SQL into database",
          "XSS script tag in HTML",
          "DDoS on API gateway"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is ReAct (Reasoning and Acting) framework in LLM Agent systems?",
        "options": [
          "Combining reasoning step generation with action execution (e.g. search tool call) in an iterative loop",
          "A React.js frontend library",
          "A database query tool",
          "An image processing pipeline"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Function Calling / Tool Use capability in modern LLM APIs?",
        "options": [
          "LLM detects when a tool is needed and outputs structured JSON arguments matching a predefined function schema",
          "Calling JS functions in browser",
          "Running bash commands automatically",
          "Compiling code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Vector Database (e.g. Pinecone, Chroma, Qdrant) used for in LLM architectures?",
        "options": [
          "Storing dense vector embeddings to perform efficient semantic similarity searches for RAG",
          "Storing user relational tables",
          "Caching HTML pages",
          "Compressing JSON files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does In-Context Learning mean in LLMs?",
        "options": [
          "The model learns to perform tasks during inference solely from instructions and examples provided in the prompt context",
          "Updating model weights permanently",
          "Fine-tuning on custom dataset",
          "Pretraining on Wikipedia"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Grounding in LLM applications?",
        "options": [
          "Linking model responses directly to verified source documents or facts to ensure factual accuracy",
          "Grounding electrical equipment",
          "Formatting text into JSON",
          "Restricting API access"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Fine-Tuning a Large Language Model?",
        "options": [
          "Further training a pre-trained model on a specific dataset to update its weights for specialized tasks",
          "Adjusting prompt temperature",
          "Writing better system prompts",
          "Restarting server"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is PEFT (Parameter-Efficient Fine-Tuning) such as LoRA (Low-Rank Adaptation)?",
        "options": [
          "Techniques that fine-tune a small subset of additional parameters while keeping pre-trained base model weights frozen",
          "Prompting with 1 token",
          "Using small datasets",
          "Pretraining base models"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is RLHF (Reinforcement Learning from Human Feedback)?",
        "options": [
          "A method of aligning LLM outputs with human preferences using reward models trained on human ratings",
          "Supervised rule extraction",
          "Prompt design pattern",
          "Random sampling"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Context Overflow error in LLM API integration?",
        "options": [
          "Occurs when total prompt and output tokens exceed the model context window limit",
          "Server disk space full",
          "Network connection timeout",
          "Invalid API key"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Semantic Search compared to traditional Keyword Search?",
        "options": [
          "Searches based on conceptual meaning and intent using vector embeddings rather than exact string matching",
          "Searches HTML tags",
          "Matches exact keywords only",
          "Sorts alphabetically"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Delimiter in prompt engineering (e.g., `\"\"\"` or `<context>`)?",
        "options": [
          "Special characters used to clearly separate instructions from input text or context blocks",
          "A code syntax error",
          "A model weight",
          "An API rate limit"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Self-Consistency prompting strategy?",
        "options": [
          "Generating multiple reasoning paths for a problem and selecting the most consistent final answer via majority vote",
          "Prompting the same prompt twice",
          "Using consistent temperature",
          "Enforcing JSON output"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Structured Output / JSON Mode in LLM APIs?",
        "options": [
          "Forcing the model output to strictly adhere to a valid JSON format matching a specified schema",
          "Formatting text in Markdown",
          "Exporting response to PDF",
          "Compiling code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Tree-of-Thoughts (ToT) prompting framework?",
        "options": [
          "Exploring multiple reasoning branches simultaneously with self-evaluation and backtracking capability",
          "Creating a decision tree algorithm",
          "Writing nested loops",
          "Prompting via XML trees"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Guardrails framework in LLM applications (e.g. NeMo Guardrails)?",
        "options": [
          "Programmable safety rules and validation checks that filter unsafe inputs and outputs",
          "Hardware firewall",
          "SSL certificate",
          "Database constraints"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Token Limit parameter `max_tokens` enforce in an API call?",
        "options": [
          "The maximum number of tokens the model is allowed to generate in its completion response",
          "The prompt token limit",
          "The cost limit in dollars",
          "The context window size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Embedding Model vs Generative LLM Model?",
        "options": [
          "Embedding model converts text into vector numbers; Generative LLM produces output text continuation",
          "Embedding model generates text",
          "Generative model stores vectors",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Responsible AI / Alignment principle for LLMs?",
        "options": [
          "Ensuring AI systems are safe, unbiased, truthful, transparent, and helpful to humans",
          "Optimizing model speed",
          "Minimizing API cost",
          "Maximizing token length"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "NumPy & Pandas Assessment",
    "description": "Evaluate data manipulation skills using NumPy ndarrays, Pandas DataFrames, indexing, vectorization, and data cleaning.",
    "category": "Data Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is the core data structure provided by the NumPy package in Python?",
        "options": [
          "ndarray (N-dimensional array)",
          "DataFrame",
          "Series",
          "List"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Vectorization in NumPy?",
        "options": [
          "Performing element-wise mathematical operations on entire arrays without writing explicit Python `for` loops",
          "Converting arrays to vectors in 3D space",
          "Flattening 2D matrices",
          "Sorting array elements"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `np.zeros((3, 4))` return?",
        "options": [
          "A 3x4 array filled with float 0.0 values",
          "A 1D array of 12 zeros",
          "A 4x3 array of zeros",
          "A scalar 0"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What attribute of a NumPy array returns a tuple representing array dimensions?",
        "options": [
          "arr.shape",
          "arr.size",
          "arr.ndim",
          "arr.length"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Broadcasting in NumPy?",
        "options": [
          "The mechanism that allows NumPy to perform arithmetic operations on arrays of different shapes automatically",
          "Streaming data over network",
          "Printing array to console",
          "Reshaping array to 1D"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas data structure represents a 1D labeled array capable of holding any data type?",
        "options": [
          "Series",
          "DataFrame",
          "Panel",
          "Index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas data structure represents a 2D tabular structure with labeled axes (rows and columns)?",
        "options": [
          "DataFrame",
          "Series",
          "Matrix",
          "Dataset"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you read a CSV file into a Pandas DataFrame?",
        "options": [
          "pd.read_csv(\"filename.csv\")",
          "pd.open_csv(\"filename.csv\")",
          "pd.load_csv(\"filename.csv\")",
          "pd.import_csv(\"filename.csv\")"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `.loc[]` and `.iloc[]` in Pandas DataFrame indexing?",
        "options": [
          "`.loc[]` is label-based indexing; `.iloc[]` is integer position-based indexing",
          "`.iloc[]` uses column names",
          "`.loc[]` operates on rows only",
          "They are completely identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas method drops rows containing missing values (`NaN`) from a DataFrame?",
        "options": [
          "df.dropna()",
          "df.fillna()",
          "df.remove_null()",
          "df.clean()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas method fills missing values (`NaN`) with a specified default value or strategy?",
        "options": [
          "df.fillna(value)",
          "df.replace_null(value)",
          "df.dropna()",
          "df.set_na(value)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you calculate summary statistics (mean, std, min, max, quartiles) for numeric columns in a DataFrame?",
        "options": [
          "df.describe()",
          "df.summary()",
          "df.stats()",
          "df.info()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which method displays column data types, non-null counts, and memory usage of a DataFrame?",
        "options": [
          "df.info()",
          "df.describe()",
          "df.dtypes",
          "df.head()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you select rows in a DataFrame `df` where column `\"age\"` is greater than 30?",
        "options": [
          "df[df[\"age\"] > 30]",
          "df.where(\"age > 30\")",
          "df.filter(age > 30)",
          "df.select(\"age\" > 30)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas method groups data based on column values to perform aggregate operations?",
        "options": [
          "df.groupby(\"col_name\")",
          "df.aggregate(\"col_name\")",
          "df.cluster(\"col_name\")",
          "df.split(\"col_name\")"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `df.merge(df1, df2, on=\"key\")` do in Pandas?",
        "options": [
          "Merges two DataFrames along a common column similar to a database JOIN",
          "Concatenates DataFrames vertically",
          "Appends rows to df1",
          "Compares DataFrames"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `pd.concat([df1, df2], axis=0)` do?",
        "options": [
          "Stack DataFrames vertically along rows (axis 0)",
          "Join DataFrames horizontally along columns",
          "Merge DataFrames on key",
          "Compare DataFrames"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you rename columns `\"old_name\"` to `\"new_name\"` in a Pandas DataFrame?",
        "options": [
          "df.rename(columns={\"old_name\": \"new_name\"})",
          "df.change_column(\"old_name\", \"new_name\")",
          "df.columns[\"old_name\"] = \"new_name\"",
          "df.replace_column(\"old_name\", \"new_name\")"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `df.drop_duplicates()` do?",
        "options": [
          "Removes duplicate rows from DataFrame",
          "Removes duplicate columns",
          "Clears empty cells",
          "Sorts DataFrame"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you get the first 5 rows of a Pandas DataFrame `df`?",
        "options": [
          "df.head()",
          "df.first(5)",
          "df.top()",
          "df.slice(5)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you get the last 5 rows of a Pandas DataFrame `df`?",
        "options": [
          "df.tail()",
          "df.last(5)",
          "df.bottom()",
          "df.end()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which NumPy function calculates matrix dot product or matrix multiplication?",
        "options": [
          "np.dot(a, b) or a @ b",
          "np.mult(a, b)",
          "np.cross(a, b)",
          "np.prod(a, b)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `arr.reshape(2, 6)` do on a 12-element NumPy array?",
        "options": [
          "Changes array dimensions to 2 rows and 6 columns without altering data",
          "Creates duplicate copies of array",
          "Crops array to 2 elements",
          "Sorts array"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `np.linspace(0, 1, 5)` produce?",
        "options": [
          "5 evenly spaced numbers over specified interval [0, 1]",
          "5 random numbers between 0 and 1",
          "Array of 0s and 1s",
          "Integers from 0 to 5"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `np.arange(0, 10, 2)` generate?",
        "options": [
          "Array of numbers from 0 up to 10 with step size 2: [0, 2, 4, 6, 8]",
          "Array of 10 random numbers",
          "Array [0, 10, 2]",
          "Array of size 2"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Pandas method computes correlation matrix for numerical columns in DataFrame?",
        "options": [
          "df.corr()",
          "df.cov()",
          "df.relation()",
          "df.matrix()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `df.apply(lambda x: ...)` used for in Pandas?",
        "options": [
          "Applies a custom function along an axis of DataFrame or Series",
          "Filters null values",
          "Sorts DataFrame by index",
          "Saves DataFrame to CSV"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How do you convert a column `\"date\"` string to datetime data type in Pandas?",
        "options": [
          "pd.to_datetime(df[\"date\"])",
          "df[\"date\"].astype(\"datetime\")",
          "pd.parse_date(df[\"date\"])",
          "df[\"date\"].to_date()"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `df.pivot_table()` accomplish in Pandas?",
        "options": [
          "Reshapes data by creating a spreadsheet-style pivot table with aggregated metrics",
          "Transposes rows and columns",
          "Sorts DataFrame values",
          "Exports DataFrame to Excel"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What attribute of a NumPy array returns total number of elements?",
        "options": [
          "arr.size",
          "arr.shape",
          "arr.len",
          "arr.count"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Statistics for Data Science",
    "description": "Assess foundational statistical concepts including probability, distributions, measures of central tendency, hypothesis testing, and correlation.",
    "category": "Data Science",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What are the three common measures of Central Tendency in descriptive statistics?",
        "options": [
          "Mean, Median, Mode",
          "Variance, Standard Deviation, Range",
          "Min, Max, Quartile",
          "P-value, Z-score, T-score"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How is the Arithmetic Mean calculated for a sample dataset?",
        "options": [
          "Sum of all values divided by total count of values",
          "Middle value when sorted",
          "Most frequently occurring value",
          "Difference between max and min"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Median of a dataset?",
        "options": [
          "The middle value in a sorted dataset separating the higher half from the lower half",
          "Average value",
          "Most frequent value",
          "Standard deviation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Mode of a dataset?",
        "options": [
          "The value that appears most frequently in a dataset",
          "Middle value",
          "Average value",
          "Highest value minus lowest value"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which measure of central tendency is least sensitive to extreme outliers in a skewed distribution?",
        "options": [
          "Median",
          "Mean",
          "Variance",
          "Range"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Variance measure in a dataset?",
        "options": [
          "The average squared deviation of each data point from the mean",
          "The difference between max and min",
          "The middle value",
          "The correlation coefficient"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Standard Deviation?",
        "options": [
          "The square root of variance, measuring dispersion of data points around the mean in original units",
          "Squared variance",
          "Average value",
          "Sample size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Normal Distribution (Gaussian Distribution) characteristic bell curve shape?",
        "options": [
          "Symmetrical bell shape centered at the mean where mean = median = mode",
          "Right-skewed long tail",
          "Uniform flat distribution",
          "U-shaped curve"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "According to the Empirical Rule (68-95-99.7 rule) for normal distributions, what percentage of data falls within 1 standard deviation of the mean?",
        "options": [
          "~68%",
          "~95%",
          "~99.7%",
          "~50%"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does a positive Pearson Correlation Coefficient (r = +0.85) between two variables indicate?",
        "options": [
          "Strong positive linear relationship: as one variable increases, the other increases",
          "No linear relationship",
          "Strong negative relationship",
          "Inverse relationship"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does a correlation coefficient r = 0 indicate?",
        "options": [
          "No linear correlation between the two variables",
          "Perfect positive correlation",
          "Perfect negative correlation",
          "Data collection error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Null Hypothesis (H0) in statistical hypothesis testing?",
        "options": [
          "The default statement that there is no effect, no difference, or no relationship in the population",
          "The statement researcher wants to prove",
          "An alternative outcome",
          "A measurement error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a P-value in hypothesis testing?",
        "options": [
          "The probability of obtaining test results at least as extreme as observed, assuming null hypothesis H0 is true",
          "The probability that null hypothesis is true",
          "The sample error rate",
          "The confidence level percentage"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "If p-value is LESS than significance level alpha (e.g. p < 0.05), what is the statistical decision?",
        "options": [
          "Reject the Null Hypothesis (H0) in favor of Alternative Hypothesis",
          "Fail to reject Null Hypothesis",
          "Accept Null Hypothesis as absolute truth",
          "Discard dataset"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Type I Error (False Positive) in hypothesis testing?",
        "options": [
          "Rejecting the null hypothesis when it is actually true",
          "Failing to reject null hypothesis when it is false",
          "Calculation mistake",
          "Sample selection bias"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Type II Error (False Negative) in hypothesis testing?",
        "options": [
          "Failing to reject the null hypothesis when it is actually false",
          "Rejecting null hypothesis when true",
          "Data entry error",
          "Overfitting model"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Central Limit Theorem (CLT) state?",
        "options": [
          "The sampling distribution of the sample mean approaches a normal distribution as sample size grows large, regardless of population distribution shape",
          "All populations are normally distributed",
          "Sample mean equals sample size",
          "Variance approaches zero"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Z-score (Standard Score)?",
        "options": [
          "The number of standard deviations a data point is above or below the population mean",
          "The raw data value",
          "The sample size",
          "The p-value"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Interquartile Range (IQR)?",
        "options": [
          "The difference between the 75th percentile (Q3) and 25th percentile (Q1), measuring middle 50% spread",
          "Difference between max and min",
          "Difference between mean and median",
          "Standard deviation divided by mean"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Skewness in a data distribution?",
        "options": [
          "A measure of asymmetry of the probability distribution about its mean",
          "Peakness of distribution",
          "Sample size calculation",
          "Correlation strength"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What characterizes a Positively (Right) Skewed distribution?",
        "options": [
          "Long tail extends to the right; Mean is greater than Median",
          "Tail extends to left; Mean < Median",
          "Symmetrical bell curve",
          "Flat uniform distribution"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Kurtosis?",
        "options": [
          "A measure of \"tailedness\" or sharpness of the peak of a probability distribution relative to normal distribution",
          "Spread of values",
          "Sample mean",
          "Probability of error"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Bayes' Theorem used for in probability theory?",
        "options": [
          "Calculating conditional probability P(A|B) based on prior knowledge of conditions P(A), P(B), P(B|A)",
          "Calculating matrix determinant",
          "Testing normal distribution",
          "Generating random numbers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between Population and Sample in statistics?",
        "options": [
          "Population is the entire set of items of interest; Sample is a subset selected from population",
          "Sample is larger than population",
          "Population refers to humans only",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Confidence Interval (e.g., 95% CI)?",
        "options": [
          "A range of values calculated from sample data that is likely to contain the true population parameter with specified probability",
          "A single point estimate",
          "The standard deviation range",
          "A p-value range"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What statistical test is used to compare means between TWO independent sample groups?",
        "options": [
          "Two-sample t-test",
          "ANOVA",
          "Chi-Square test",
          "Linear Regression"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What statistical test is used to compare means across THREE or more sample groups?",
        "options": [
          "ANOVA (Analysis of Variance)",
          "t-test",
          "Z-test",
          "Correlation test"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What statistical test is used to test independence between two categorical variables?",
        "options": [
          "Chi-Square Test of Independence",
          "Paired t-test",
          "Pearson correlation",
          "Regression test"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Covariance measure between two random variables?",
        "options": [
          "The directional relationship (joint variability) between two variables",
          "Strength of non-linear relation on scale -1 to 1",
          "Sample mean difference",
          "P-value threshold"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is an Outlier in dataset analysis?",
        "options": [
          "An extreme data observation that lies an abnormal distance from other values in a random sample",
          "The average value",
          "A missing value",
          "A categorical variable"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Software Testing & QA Fundamentals",
    "description": "Test concepts of software quality assurance, test levels (unit, integration, system), black-box/white-box testing, and test automation.",
    "category": "Software Development",
    "difficulty": "Beginner",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is the primary objective of Software Testing?",
        "options": [
          "To identify defects and ensure software meets specified functional requirements and quality standards",
          "To write source code faster",
          "To design UI mockups",
          "To replace software documentation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Unit Testing?",
        "options": [
          "Testing individual software components or code functions in isolation from the rest of the application",
          "Testing entire application end-to-end",
          "User acceptance testing",
          "Testing hardware servers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Integration Testing?",
        "options": [
          "Testing interfaces and interactions between integrated units/modules to verify combined functionality",
          "Testing single functions",
          "Testing UI colors",
          "Stress testing network"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is System Testing?",
        "options": [
          "Testing the complete integrated software application end-to-end to evaluate compliance with requirements",
          "Testing individual database functions",
          "Code review by developers",
          "Writing unit tests"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Acceptance Testing (UAT)?",
        "options": [
          "Testing conducted by end-users or clients to determine whether the software satisfies business needs for deployment",
          "Automated unit test execution",
          "Compiling code",
          "Security penetration test"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Black-Box Testing technique?",
        "options": [
          "Testing software functionality without internal knowledge of code structure, implementation details, or pathing",
          "Testing with full access to source code",
          "Debugging memory leaks in C",
          "Compiling code without warnings"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is White-Box Testing technique?",
        "options": [
          "Testing method where internal structure, code logic, and implementation details of the application are known to the tester",
          "Testing without documentation",
          "User feedback testing",
          "Beta testing on mobile"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Regression Testing?",
        "options": [
          "Re-running previous tests after code modifications or bug fixes to verify existing functionality is not broken",
          "Testing software on old operating systems",
          "Deleting test cases",
          "Initial alpha testing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Smoke Testing (Sanity Testing)?",
        "options": [
          "Preliminary testing to reveal simple failures severe enough to reject a prospective software release immediately",
          "Performance load testing",
          "Testing fire alert systems",
          "Security audit"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Boundary Value Analysis (BVA) in test case design?",
        "options": [
          "Test design technique selecting input values at the boundary edges of valid and invalid input domains",
          "Testing random inputs",
          "Testing middle values only",
          "Stress testing memory"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Equivalence Partitioning?",
        "options": [
          "Dividing input data into valid and invalid partitions/classes where all elements are expected to be processed similarly",
          "Executing tests in parallel",
          "Partitioning hard drives",
          "Writing duplicate test cases"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Bug / Defect life cycle status when reported by QA?",
        "options": [
          "New -> Assigned -> Open -> Fixed -> Retest -> Verified / Closed",
          "Draft -> Passed -> Deleted",
          "Open -> Closed immediately",
          "Created -> Deleted"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Test Automation?",
        "options": [
          "Using specialized software tools to execute tests automatically and compare actual outcomes with predicted outcomes",
          "Automating code compilation",
          "Writing code without testing",
          "Auto-saving files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Test Driven Development (TDD) workflow cycle?",
        "options": [
          "Red (Write failing test) -> Green (Write minimal code to pass) -> Refactor",
          "Write code -> Test -> Deploy -> Fix bugs",
          "Deploy -> Write tests -> Refactor",
          "Design -> Code -> Document"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Performance Testing?",
        "options": [
          "Testing application speed, responsiveness, stability, and scalability under a specific workload",
          "Testing UI color themes",
          "Writing unit tests",
          "Validating form inputs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Load Testing vs Stress Testing?",
        "options": [
          "Load testing tests behavior under expected normal/peak load; Stress testing pushes system beyond operational limits to break point",
          "Stress testing tests normal loads",
          "Load testing checks code syntax",
          "They are identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Mock Object in unit testing?",
        "options": [
          "A simulated object that mimics the behavior of real dependencies (e.g. database, external API) in controlled ways",
          "A real database instance",
          "A bug report",
          "A frontend component"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Code Coverage metric?",
        "options": [
          "A measurement percentage of source code executed when an automated test suite runs",
          "Number of lines of code in app",
          "Percentage of bugs fixed",
          "Total test execution time"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Alpha Testing vs Beta Testing?",
        "options": [
          "Alpha testing is performed in-house by internal developers/testers; Beta testing is performed by real end-users in external environment",
          "Beta testing is done internally",
          "Alpha testing happens after launch",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Non-Functional Testing focused on?",
        "options": [
          "Evaluating software attributes such as performance, security, usability, reliability, and maintainability",
          "Testing specific feature logic only",
          "Checking HTML tags",
          "Validating SQL syntax"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Exploratory Testing?",
        "options": [
          "An informal test design technique where testers simultaneously learn, design tests, and execute test cases dynamically",
          "Writing automated Selenium scripts",
          "Executing static test scripts",
          "Unit testing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Test Case document component list?",
        "options": [
          "Test Case ID, Description, Preconditions, Test Steps, Expected Results, Actual Results, Pass/Fail Status",
          "Code diff snippet only",
          "User password",
          "Database schema"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Defect Severity vs Defect Priority?",
        "options": [
          "Severity measures technical impact on system; Priority defines business urgency to fix defect",
          "Severity defines urgency; Priority technical impact",
          "They mean the exact same thing",
          "Priority applies to features only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which tool is widely used for frontend web UI test automation?",
        "options": [
          "Selenium / Cypress / Playwright",
          "Postman",
          "Git",
          "Docker"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which tool is widely used for API testing and automation?",
        "options": [
          "Postman / REST Assured",
          "CSS Grid",
          "Jira",
          "Figma"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Linux & Command Line Fundamentals",
    "description": "Evaluate Linux terminal operations, file system navigation, file permissions, shell commands, grep, and process control.",
    "category": "Software Development",
    "difficulty": "Beginner",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "Which Linux command prints the current absolute working directory path?",
        "options": [
          "pwd",
          "cd",
          "dir",
          "ls"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command lists files and directories in the current folder?",
        "options": [
          "ls",
          "list",
          "show",
          "dir"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command flag with `ls` displays detailed file permissions, owner, size, and modification date?",
        "options": [
          "ls -l",
          "ls -a",
          "ls -h",
          "ls -r"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command flag with `ls` displays hidden files starting with a dot (`.`)?",
        "options": [
          "ls -a",
          "ls -h",
          "ls -f",
          "ls -s"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command changes the current working directory?",
        "options": [
          "cd",
          "mv",
          "chpath",
          "goto"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which directory path shortcut refers to the current user home directory in Linux shell?",
        "options": [
          "~ (tilde)",
          ". (dot)",
          ".. (dot dot)",
          "/root"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which directory reference refers to the parent directory of current folder?",
        "options": [
          "..",
          ".",
          "/",
          "~"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command creates a new directory?",
        "options": [
          "mkdir",
          "createdir",
          "touch",
          "newdir"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command creates an empty file or updates timestamp of an existing file?",
        "options": [
          "touch",
          "cat",
          "nano",
          "make"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command is used to remove/delete files in Linux?",
        "options": [
          "rm",
          "del",
          "unlink",
          "remove"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which flag with `rm` forcefully and recursively deletes a non-empty directory and contents?",
        "options": [
          "rm -rf",
          "rm -d",
          "rm -clean",
          "rm -all"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command copies files or directories from source to destination?",
        "options": [
          "cp",
          "mv",
          "copy",
          "clone"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command moves or renames files and directories?",
        "options": [
          "mv",
          "ren",
          "move",
          "cp"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command displays the complete text content of a file on standard output terminal?",
        "options": [
          "cat",
          "echo",
          "read",
          "open"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command searches for matching plain-text patterns within files using regular expressions?",
        "options": [
          "grep",
          "find",
          "search",
          "locate"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `grep -i \"error\" server.log` do?",
        "options": [
          "Searches case-insensitively for the string \"error\" in server.log",
          "Replaces \"error\" with blank",
          "Counts lines containing \"error\"",
          "Deletes matching lines"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command changes file read, write, and execute permissions in Linux?",
        "options": [
          "chmod",
          "chown",
          "chgrp",
          "umask"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "In symbolic chmod `chmod +x script.sh`, what does `+x` grant?",
        "options": [
          "Adds execute permission for the file",
          "Adds read permission",
          "Adds write permission",
          "Deletes file"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "In numeric octal notation `chmod 755 file.txt`, what do digits 7, 5, 5 represent?",
        "options": [
          "Owner: Read/Write/Exec (7), Group: Read/Exec (5), Others: Read/Exec (5)",
          "All users full control",
          "Read only for all",
          "Owner: 7 permissions"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command changes the user owner or group ownership of a file?",
        "options": [
          "chown",
          "chmod",
          "usermod",
          "setuser"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command displays active running system processes and resource usage dynamically?",
        "options": [
          "top (or htop)",
          "ps",
          "kill",
          "systemctl"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Linux command sends a signal to terminate a running process by its Process ID (PID)?",
        "options": [
          "kill -9 <PID>",
          "stop <PID>",
          "end <PID>",
          "halt <PID>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does redirect operator `>` do in Linux terminal commands (e.g. `echo \"hello\" > file.txt`)?",
        "options": [
          "Redirects standard output to a file, overwriting existing file content",
          "Appends output to file",
          "Reads input from file",
          "Pipes output to next command"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does append redirect operator `>>` do?",
        "options": [
          "Appends standard output to the end of a file without overwriting existing content",
          "Overwrites file",
          "Creates directory",
          "Deletes file"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Pipe operator `|` do in Linux shell commands (e.g. `cat log.txt | grep error`)?",
        "options": [
          "Passes standard output of left command as standard input to right command",
          "Runs commands concurrently",
          "Redirects to file",
          "Ors two expressions"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Cloud Computing Fundamentals",
    "description": "Assess vendor-neutral cloud concepts: IaaS, PaaS, SaaS, cloud storage, scalability, elasticity, and cloud security basics.",
    "category": "Cloud & DevOps",
    "difficulty": "Beginner",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Cloud Computing?",
        "options": [
          "The on-demand delivery of IT resources (compute, storage, databases, networking) over the internet with pay-as-you-go pricing",
          "Local desktop file storage",
          "Setting up on-premise physical servers",
          "Using private Wi-Fi routers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Infrastructure as a Service (IaaS)?",
        "options": [
          "Cloud service model providing raw virtualized computing resources (VMs, storage, networks) where user manages OS and apps",
          "Using webmail applications like Gmail",
          "Hosting managed database tables",
          "Software licensing model"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Platform as a Service (PaaS)?",
        "options": [
          "Cloud model offering hardware and software tools (runtimes, databases) for application development without managing underlying infrastructure",
          "Raw virtual machine renting",
          "End-user web application software",
          "Desktop virtualization"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Software as a Service (SaaS)?",
        "options": [
          "Complete cloud-hosted end-user applications accessed via web browser or API (e.g. Google Workspace, Microsoft 365)",
          "Renting virtual servers",
          "Developing OS kernels",
          "Building network switches"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Public Cloud deployment model?",
        "options": [
          "Cloud infrastructure owned and operated by a third-party cloud provider, shared among multiple customer tenants over public internet",
          "Infrastructure built exclusively for one company on-premise",
          "Disconnected offline network",
          "Local USB backup storage"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Private Cloud deployment model?",
        "options": [
          "Cloud infrastructure dedicated exclusively for use by a single organization, hosted on-premise or privately",
          "Publicly accessible cloud storage",
          "Shared multi-tenant cloud",
          "Open source software"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Hybrid Cloud deployment model?",
        "options": [
          "An environment combining public cloud and private cloud/on-premise infrastructure, allowing data/apps to be shared between them",
          "Using two public cloud vendors",
          "Connecting desktop to laptop",
          "Virtual machine clustering"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Scalability in cloud computing?",
        "options": [
          "The ability of a system to increase or decrease compute capacity to meet changing workload demands",
          "Backup frequency",
          "Network ping latency",
          "Disk format type"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between Vertical Scaling (Scale Up) and Horizontal Scaling (Scale Out)?",
        "options": [
          "Vertical scaling adds more CPU/RAM resources to an existing single instance; Horizontal scaling adds more instances to the pool",
          "Horizontal scaling upgrades CPU",
          "Vertical scaling adds more servers",
          "They are identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Elasticity in cloud computing?",
        "options": [
          "The capability to automatically allocate and deallocate cloud resources dynamically based on real-time demand fluctuations",
          "Flexibility of database schemas",
          "Physical cable length",
          "Virtual memory size"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is High Availability (HA) in cloud systems?",
        "options": [
          "Designing systems to operate continuously without single points of failure to minimize unplanned downtime",
          "High CPU execution speed",
          "Storing data in one server",
          "Fast internet connection"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Load Balancing in cloud infrastructure?",
        "options": [
          "Distributing incoming network traffic evenly across multiple backend target instances to ensure reliability and performance",
          "Balancing power grid supply",
          "Compressing database files",
          "Limiting user login attempts"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Object Storage (e.g. AWS S3, Azure Blob Storage)?",
        "options": [
          "A flat storage architecture that stores data as discrete objects containing data, unformatted metadata, and a unique identifier",
          "Block storage attached to VM",
          "Relational database storage",
          "RAM memory cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Block Storage (e.g. EBS volume)?",
        "options": [
          "Raw unformatted storage volume attached to a virtual server operating like a physical hard drive for OS/databases",
          "Object storage bucket",
          "CDN cache edge",
          "SaaS application"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Content Delivery Network (CDN)?",
        "options": [
          "A geographically distributed network of proxy servers that cache web content closer to users to reduce latency",
          "A central cloud database",
          "A virtual machine manager",
          "A local domain controller"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Serverless Computing (FaaS - Function as a Service)?",
        "options": [
          "Execution model where cloud provider dynamically manages server allocation; developers run code snippets without provisioning servers",
          "Running servers without operating system",
          "Offline computing",
          "Hardware server hardware"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Availability Zone (AZ) in major cloud providers?",
        "options": [
          "One or more discrete physical data centers with independent power, cooling, and networking within a region",
          "A country border",
          "A user account role",
          "A DNS record"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Cloud Region?",
        "options": [
          "A specific geographical location containing multiple isolated Availability Zones connected by low-latency network",
          "A global server",
          "A country continent",
          "A subnet IP range"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Shared Responsibility Model in cloud security?",
        "options": [
          "Cloud provider manages security OF the cloud (infrastructure, hardware); Customer manages security IN the cloud (data, OS, access)",
          "Cloud provider is 100% responsible for everything",
          "Customer manages physical data center security",
          "Security is outsourced to third party"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Auto Scaling Group capability?",
        "options": [
          "Automatically launching or terminating server instances based on user-defined metric thresholds (e.g. CPU > 80%)",
          "Auto-saving code",
          "Auto-updating operating system",
          "Auto-renewing subscriptions"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Virtual Private Cloud (VPC)?",
        "options": [
          "A logically isolated virtual network dedicated to a user cloud account with complete control over IP range, subnets, and routing",
          "A public internet router",
          "A VPN software desktop app",
          "A shared web hosting server"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cloud Migration strategy \"Rehosting\" (Lift-and-Shift)?",
        "options": [
          "Moving applications from on-premise to cloud infrastructure without modifying core application code",
          "Rewriting app in cloud-native microservices",
          "Replacing app with SaaS",
          "Retiring application"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Infrastructure as Code (IaC)?",
        "options": [
          "Managing and provisioning cloud infrastructure through machine-readable definition files (e.g. Terraform, CloudFormation)",
          "Writing code inside VM terminal",
          "Hardware server manufacturing",
          "Manual AWS console clicking"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Multi-Cloud strategy?",
        "options": [
          "Distributing cloud assets, software, and applications across two or more distinct public cloud service providers",
          "Using multiple VMs in one cloud",
          "Multi-tenant database",
          "Multi-factor login"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cloud Disaster Recovery (DR) RPO (Recovery Point Objective)?",
        "options": [
          "The maximum acceptable age of data files that must be recovered from backup storage after a disruption",
          "Time taken to restore servers",
          "Total cost of server downtime",
          "Number of backup servers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cloud Disaster Recovery RTO (Recovery Time Objective)?",
        "options": [
          "The maximum acceptable duration of time that application services can be down after a disaster",
          "Data loss measured in hours",
          "Backup file size",
          "Cloud subscription cost"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Identity and Access Management (IAM) in cloud platforms?",
        "options": [
          "Framework of policies and security controls that ensures proper entities have appropriate access to cloud resources",
          "Domain Name System parser",
          "Virtual machine operating system",
          "Billing dashboard tool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cold Storage vs Hot Storage in cloud storage classes?",
        "options": [
          "Hot storage is accessed frequently with low access latency; Cold storage is for infrequently accessed archive data with lower storage cost",
          "Cold storage is faster than hot storage",
          "Hot storage is for offline backups",
          "There is no price difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Edge Computing?",
        "options": [
          "Distributed computing paradigm that brings computation and data storage closer to location where it is needed (IoT/edge devices)",
          "Central cloud data center",
          "Mainframe computing",
          "Browser client storage"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Vendor Lock-in risk in cloud adoption?",
        "options": [
          "Dependency on a single cloud vendor technologies making it difficult/costly to transition to another provider",
          "Locking physical server racks",
          "Password account lockout",
          "Enabling 2FA login"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "DevOps Fundamentals Assessment",
    "description": "Test DevOps methodology, CI/CD automation, infrastructure as code, build pipelines, monitoring, and release strategies.",
    "category": "Cloud & DevOps",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is DevOps methodology core philosophy?",
        "options": [
          "A set of practices combining software development (Dev) and IT operations (Ops) to shorten development lifecycle and deliver continuous quality",
          "Replacing developers with system admins",
          "A specific software tool",
          "Eliminating testing phase"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does CI/CD stand for in modern DevOps pipelines?",
        "options": [
          "Continuous Integration and Continuous Delivery (or Deployment)",
          "Code Inspection and Code Distribution",
          "Central Infrastructure and Cloud Deployment",
          "Command Interface and Control Data"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Continuous Integration (CI)?",
        "options": [
          "The practice of frequently merging developer code changes into a central repository, followed by automated builds and tests",
          "Deploying code to production hourly",
          "Writing manual test scripts",
          "Configuring cloud routers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the key difference between Continuous Delivery and Continuous Deployment?",
        "options": [
          "Continuous Delivery requires manual approval trigger to release to production; Continuous Deployment deploys every passing change automatically",
          "Continuous Deployment requires manual trigger",
          "Continuous Delivery includes no automated tests",
          "They are completely identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Infrastructure as Code (IaC) tool example widely used for multi-cloud provisioning?",
        "options": [
          "Terraform",
          "Jenkins",
          "Docker",
          "Git"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Ansible primarily used for in DevOps automation?",
        "options": [
          "Configuration management, application deployment, and task automation using declarative YAML playbooks",
          "Container runtime engine",
          "Version control repository",
          "Monitoring dashboard"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Jenkins in DevOps toolchain?",
        "options": [
          "An open-source automation server used to build, test, and deploy software via CI/CD pipelines",
          "A database engine",
          "A cloud load balancer",
          "A container registry"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is GitOps paradigm?",
        "options": [
          "Using a Git repository as the single source of truth for declarative infrastructure and application configuration state",
          "Using Git without terminal",
          "Using GitHub web editor only",
          "Managing Git repositories manually"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Blue-Green Deployment strategy?",
        "options": [
          "Running two identical production environments (Blue active, Green idle); switching user traffic instantly to Green after deploying update",
          "Deploying updates in blue color UI",
          "Gradually deploying code to 10% of users",
          "Rolling back code on failure"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Canary Deployment strategy?",
        "options": [
          "Deploying code update to a small subset of users first, monitoring performance, and gradually rolling out to remaining infrastructure",
          "Deploying to staging only",
          "Simultaneous global update",
          "Updating database schema first"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Rolling Deployment strategy?",
        "options": [
          "Progressively replacing instances of previous version with new version across application nodes to eliminate downtime",
          "Instant traffic switch",
          "Offline maintenance deployment",
          "Manual server replacement"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Microservices Architecture compared to Monolithic Architecture?",
        "options": [
          "Decomposing application into small, independent, loosely coupled services communicating via APIs; Monolith is a single unified codebase",
          "Monolith is built of small services",
          "Microservices use single database always",
          "Monolith runs faster always"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Prometheus in DevOps monitoring?",
        "options": [
          "An open-source metrics monitoring and alerting toolkit using a pull-based time-series data model",
          "A container runtime",
          "A CI build server",
          "An IaC provider"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Grafana in DevOps monitoring stack?",
        "options": [
          "An open-source visualization and analytics software used to query and display interactive dashboards from metrics data",
          "A log file collector",
          "A build pipeline",
          "A security scanner"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Log Aggregation (e.g. ELK Stack: Elasticsearch, Logstash, Kibana)?",
        "options": [
          "Centralizing logs from multiple distributed servers and microservices into a searchable unified indexing engine",
          "Deleting old log files",
          "Printing logs to terminal",
          "Compressing log directories"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Site Reliability Engineering (SRE)?",
        "options": [
          "A discipline that applies software engineering principles to operations and infrastructure problems to build scalable/reliable systems",
          "Hardware repair engineering",
          "Manual server monitoring",
          "Frontend UI design"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SLA (Service Level Agreement) vs SLO (Service Level Objective)?",
        "options": [
          "SLA is a formal legal contract specifying performance metrics with client financial penalties; SLO is internal target metric (e.g. 99.9% uptime)",
          "SLO is legal contract; SLA internal target",
          "They mean the exact same thing",
          "SLA applies to software bugs only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Error Budget in SRE methodology?",
        "options": [
          "The acceptable amount of service unreliability/downtime an application can afford (100% - SLO target) for launching new features",
          "The financial cost of bugs",
          "The hardware budget for servers",
          "The developer salary allocation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Shift-Left Testing / Security principle in DevOps?",
        "options": [
          "Moving security scans and testing phase earlier into the initial stages of the software development lifecycle",
          "Moving testing to production",
          "Testing only on left-hand monitors",
          "Disabling testing in CI"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Artifact Repository (e.g. Nexus, JFrog Artifactory)?",
        "options": [
          "A centralized manager for storing, versioning, and distributing compiled build binaries, Docker images, and dependencies",
          "A Git source code host",
          "A cloud VM storage block",
          "A database archive"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Helm in Kubernetes ecosystem?",
        "options": [
          "A package manager for Kubernetes that simplifies defining, installing, and upgrading complex K8s application charts",
          "A container runtime",
          "A ingress controller",
          "A Linux distribution"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Tracing in distributed systems observability (e.g. OpenTelemetry, Jaeger)?",
        "options": [
          "Tracking the lifecycle and path of an individual request as it flows across multiple microservices nodes",
          "Logging CPU usage",
          "Tracking git commits",
          "Monitoring network bandwidth"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Health Check endpoint (e.g. `/health`) used for by orchestrators?",
        "options": [
          "Allows load balancers and orchestrators to check if a service instance is healthy and ready to serve traffic",
          "Returns HTML user profile",
          "Resets application database",
          "Monitors git logs"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Chaos Engineering (e.g. Chaos Monkey)?",
        "options": [
          "The discipline of intentionally introducing random failures in production systems to test resilience and fault tolerance",
          "Accidental server crash",
          "Bad coding practices",
          "Deleting production database"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Secret Management tool (e.g. HashiCorp Vault)?",
        "options": [
          "A secure storage system for managing access to sensitive tokens, API keys, certificates, and passwords",
          "Storing git commits",
          "Caching HTML pages",
          "Managing CSS styles"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Build Pipeline in CI/CD software?",
        "options": [
          "A predefined automated sequence of steps (Checkout -> Lint -> Test -> Compile -> Containerize -> Deploy) executed on code change",
          "A physical oil pipeline",
          "A database migration script",
          "A manual terminal command"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Self-Healing Infrastructure capability in Kubernetes/cloud orchestrators?",
        "options": [
          "Automatically restarting failed containers or replacing unhealthy virtual instances to maintain desired state",
          "Fixing code syntax bugs automatically",
          "Repairing broken hard drives",
          "Writing unit tests automatically"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Continuous Monitoring in DevOps lifecycle?",
        "options": [
          "Real-time tracking of application performance, system metrics, security logs, and user experience post-deployment",
          "Monitoring developer working hours",
          "Running unit tests constantly",
          "Checking git commits daily"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Immutable Infrastructure concept?",
        "options": [
          "Infrastructure components are never updated in-place; changes require deploying new virtual instances and destroying old ones",
          "Infrastructure that can never be modified",
          "Physical hardware servers",
          "Read-only database tables"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Git commit SHA hash represent?",
        "options": [
          "A unique 40-character cryptographic checksum identifying a specific commit state in version control",
          "User account ID",
          "CI build number",
          "Server IP address"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Docker Fundamentals Assessment",
    "description": "Evaluate containerization concepts, Dockerfiles, images, containers, volume mapping, network ports, and container commands.",
    "category": "Cloud & DevOps",
    "difficulty": "Intermediate",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What is Docker in software development?",
        "options": [
          "An open-source platform for containerizing applications, packaging code and dependencies together into lightweight portable units",
          "A virtual machine hypervisor",
          "A cloud hosting vendor",
          "A database management system"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the core difference between a Docker Container and a Virtual Machine (VM)?",
        "options": [
          "Containers share the host OS kernel and are lightweight; VMs run a full guest OS with virtualized hardware hypervisor",
          "VMs start in seconds; Containers take minutes",
          "Containers require hypervisor hardware",
          "Containers can only run Linux"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Docker Image?",
        "options": [
          "A read-only, executable template containing application source code, runtime, libraries, environment variables, and config files",
          "A running instance of a container",
          "A screenshot of desktop",
          "A JPEG photo of server"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Docker Container?",
        "options": [
          "A runnable instance of a Docker image isolated in user space on the host OS",
          "A text file definition",
          "A virtual hard drive",
          "A Git branch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Dockerfile?",
        "options": [
          "A text document containing sequential instructions/commands used to build a Docker image automatically",
          "A binary executable file",
          "A container log file",
          "A shell script to start Docker daemon"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Dockerfile instruction specifies the base parent image to start building from?",
        "options": [
          "FROM",
          "BASE",
          "RUN",
          "START"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Dockerfile instruction sets the default command executed when a container starts?",
        "options": [
          "CMD (or ENTRYPOINT)",
          "RUN",
          "EXEC",
          "LAUNCH"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `RUN` and `CMD` instructions in a Dockerfile?",
        "options": [
          "`RUN` executes commands during image build time; `CMD` specifies default execution command when container runs",
          "`CMD` runs at build time",
          "`RUN` starts container",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which instruction copies new files or directories from host machine into container image filesystem during build?",
        "options": [
          "COPY (or ADD)",
          "MOVE",
          "IMPORT",
          "INCLUDE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command builds a Docker image from a Dockerfile in the current directory tagged as `myapp:1.0`?",
        "options": [
          "docker build -t myapp:1.0 .",
          "docker make myapp:1.0",
          "docker create myapp:1.0",
          "docker image myapp:1.0"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CLI command runs a container interactively from image `ubuntu` with a pseudo-TTY shell?",
        "options": [
          "docker run -it ubuntu bash",
          "docker start ubuntu",
          "docker exec ubuntu",
          "docker launch ubuntu"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which flag with `docker run` runs a container in detached background mode?",
        "options": [
          "-d",
          "-b",
          "-bg",
          "-detach"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which flag with `docker run` maps host port 8080 to container port 80 (`-p host:container`)?",
        "options": [
          "-p 8080:80",
          "-port 8080",
          "-v 8080:80",
          "-net 8080"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command lists all active running Docker containers on host system?",
        "options": [
          "docker ps",
          "docker list",
          "docker status",
          "docker show"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which flag with `docker ps` lists ALL containers including stopped ones?",
        "options": [
          "docker ps -a",
          "docker ps -all",
          "docker ps -s",
          "docker ps -l"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command stops a running container gracefully with ID `c123`?",
        "options": [
          "docker stop c123",
          "docker kill c123",
          "docker remove c123",
          "docker pause c123"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command removes a stopped container from host system?",
        "options": [
          "docker rm <container_id>",
          "docker rmi <container_id>",
          "docker delete <container_id>",
          "docker clean <container_id>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command deletes a Docker IMAGE from local storage?",
        "options": [
          "docker rmi <image_id>",
          "docker rm <image_id>",
          "docker delete image",
          "docker purge"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Docker Volume used for?",
        "options": [
          "Persisting container data outside container writable layer, allowing data to survive container destruction",
          "Creating container backups",
          "Increasing container CPU",
          "Scaling container network"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Docker Compose?",
        "options": [
          "A tool for defining and running multi-container Docker applications using a declarative `docker-compose.yml` file",
          "A single container compiler",
          "A Kubernetes GUI",
          "A Linux package manager"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command starts all multi-container services defined in `docker-compose.yml` in detached mode?",
        "options": [
          "docker-compose up -d",
          "docker-compose start",
          "docker-compose run",
          "docker-compose launch"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Dockerfile instruction sets working directory path inside container for subsequent RUN/CMD commands?",
        "options": [
          "WORKDIR",
          "CD",
          "DIR",
          "PATH"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Dockerfile instruction defines environment variables inside container image?",
        "options": [
          "ENV",
          "SET",
          "VAR",
          "ARG"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Docker Hub?",
        "options": [
          "A cloud-based public and private registry service for sharing and storing Docker images",
          "A local hardware hub",
          "A container monitoring dashboard",
          "A code editor plugin"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which CLI command executes a command inside an ALREADY RUNNING container (e.g. `docker exec -it c123 bash`)?",
        "options": [
          "docker exec",
          "docker run",
          "docker attach",
          "docker start"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command fetches a Docker image from Docker Hub registry to local machine?",
        "options": [
          "docker pull <image_name>",
          "docker fetch <image_name>",
          "docker download <image_name>",
          "docker import <image_name>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which command uploads a locally built tagged Docker image to a registry?",
        "options": [
          "docker push <image_name>",
          "docker upload <image_name>",
          "docker publish <image_name>",
          "docker export <image_name>"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Multi-Stage Build in Dockerfile?",
        "options": [
          "A technique using multiple `FROM` statements to create lean production images by copying build artifacts from intermediate stages",
          "Building for multiple OS architectures",
          "Running multiple containers",
          "Building images in parallel"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `.dockerignore` file used for?",
        "options": [
          "Specifies files and directories to exclude when packing build context sent to Docker daemon during `docker build`",
          "Ignores running containers",
          "Disables docker log output",
          "Hides docker passwords"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Docker Desktop?",
        "options": [
          "An easy-to-install application for Mac/Windows that includes Docker Engine, CLI client, Compose, and Kubernetes local cluster",
          "A cloud hosting service",
          "A code IDE plugin",
          "A remote desktop tool"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Cybersecurity Fundamentals Assessment",
    "description": "Assess defensive security fundamentals: CIA triad, encryption, hashing, network threats, authentication, and secure practices.",
    "category": "Cybersecurity",
    "difficulty": "Beginner",
    "duration": 20,
    "questionsPerAttempt": 10,
    "questions": [
      {
        "questionText": "What are the three core pillars of the CIA Triad in information security?",
        "options": [
          "Confidentiality, Integrity, Availability",
          "Control, Inspection, Authentication",
          "Compliance, Isolation, Audit",
          "Crypto, Identity, Authorization"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Confidentiality pillar ensure in cybersecurity?",
        "options": [
          "Ensures that sensitive data is accessible ONLY to authorized individuals and protected from unauthorized disclosure",
          "Ensures data is never deleted",
          "Ensures systems run without crash",
          "Ensures code is open source"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Integrity pillar guarantee?",
        "options": [
          "Data is accurate, complete, and protected against unauthorized modification or tampering",
          "Data is encrypted on disk",
          "Servers have 100% uptime",
          "User passwords are 8 characters"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does Availability pillar ensure?",
        "options": [
          "Authorized users have timely and reliable access to data and system resources when needed",
          "Data is hidden from public",
          "Passwords expire monthly",
          "All ports are blocked"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Phishing in social engineering attacks?",
        "options": [
          "Deceptive attack where perpetrator sends fraudulent messages (emails/links) mimicking reputable sources to steal sensitive data",
          "Scanning network open ports",
          "Cracking passwords via brute force",
          "Injecting SQL into database"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Malware?",
        "options": [
          "Malicious software designed to infiltrate, damage, or compromise computer systems without consent (viruses, worms, trojans)",
          "Antivirus software",
          "Hardware firmware update",
          "Network router driver"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Ransomware?",
        "options": [
          "A type of malware that encrypts victim files/system and demands ransom payment to restore access",
          "Spyware that records keystrokes",
          "Adware displaying popups",
          "A network firewall rule"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Denial of Service (DoS) attack?",
        "options": [
          "An attack designed to overwhelm a target server/network with flood of traffic to render service unavailable to legitimate users",
          "Stealing database passwords",
          "Modifying website text",
          "Decrypting SSL packets"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Distributed Denial of Service (DDoS) attack?",
        "options": [
          "A DoS attack originating from multiple compromised botnet computer systems distributed globally",
          "DoS attack from a single IP",
          "SQL injection attack",
          "XSS attack"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is a Firewall in network security?",
        "options": [
          "A security device/software that monitors and controls incoming and outgoing network traffic based on predefined security rules",
          "An antivirus scanner",
          "A data backup drive",
          "A password vault"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Virtual Private Network (VPN)?",
        "options": [
          "An encrypted connection over the internet from a device to a network, protecting private data transmission",
          "A private server rack",
          "A Wi-Fi router password",
          "A public IP address"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Principle of Least Privilege (PoLP)?",
        "options": [
          "Granting users and systems ONLY the minimum level of access permissions required to perform their specific job functions",
          "Granting admin rights to all users",
          "Disabling password login",
          "Sharing admin passwords"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Social Engineering in security context?",
        "options": [
          "Manipulating people into performing actions or divulging confidential information through psychological deception",
          "Writing social media code",
          "Building user communities",
          "Reverse engineering binaries"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Brute Force Attack on passwords?",
        "options": [
          "An automated attack method that systematically tries all possible password combinations until correct one is found",
          "Tricking user via phone call",
          "Reading unencrypted database",
          "Interceptors Wi-Fi packets"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Requiring two or more distinct authentication factors (Password + OTP code / Biometric) before granting access",
          "Using two passwords",
          "Updating password twice",
          "Logging in from two devices"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Endpoint Security?",
        "options": [
          "Securing end-user devices (laptops, mobile, workstations) from security threats and unauthorized access",
          "Securing network switches",
          "Encrypting database backups",
          "Filtering HTTP headers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Zero-Day Vulnerability?",
        "options": [
          "A software security flaw unknown to software vendor with zero days available to develop and deploy a patch",
          "A bug fixed in 0 days",
          "A bug that causes 0 damage",
          "A virus expiring in 24 hours"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Penetration Testing (Ethical Hacking)?",
        "options": [
          "Authorized simulated cyberattack on a computer system to evaluate its security vulnerabilities and posture",
          "Unauthorized hacking into bank",
          "Installing antivirus",
          "Writing code unit tests"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Keylogger malware?",
        "options": [
          "Surreptitious software or hardware designed to record every keystroke typed by user to steal credentials",
          "Ransomware variant",
          "Network scanner",
          "Firewall rule editor"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Man-in-the-Middle (MitM) attack?",
        "options": [
          "Attacker secretly intercepts and relays communications between two parties who believe they are communicating directly",
          "Brute forcing login form",
          "Uploading malware file",
          "SQL injection"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Data Encryption at Rest vs Data Encryption in Transit?",
        "options": [
          "At Rest encrypts data stored on disk/database; In Transit encrypts data moving across network (HTTPS/TLS)",
          "In Transit encrypts hard drive",
          "At Rest encrypts email messages",
          "They mean the exact same thing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SQL Injection (SQLi)?",
        "options": [
          "Inserting malicious SQL statements into entry fields to query or manipulate backend database unlawfully",
          "Buffer overflow in C",
          "Clicking bad links",
          "Sniffing Wi-Fi traffic"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cross-Site Scripting (XSS)?",
        "options": [
          "Injecting malicious client-side JavaScript code into trusted web application pages viewed by other users",
          "Server side database exploit",
          "Network Denial of Service",
          "Password dictionary attack"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Intrusion Detection System (IDS)?",
        "options": [
          "A security monitoring tool that analyzes network traffic for suspicious activity and known attack signatures",
          "Automatic system updater",
          "Password generator",
          "Web browser extension"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Security Information and Event Management (SIEM)?",
        "options": [
          "Software that aggregates, analyzes, and correlates security log data from across an enterprise infrastructure in real-time",
          "Firewall hardware",
          "Code compiler",
          "Data backup disk"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Patch Management?",
        "options": [
          "The process of regularly acquiring, testing, and applying software security updates/patches to fix vulnerabilities",
          "Patching network cables",
          "Writing code snippets",
          "Filtering spam emails"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Biometric Authentication?",
        "options": [
          "Authenticating identity using unique biological characteristics (Fingerprint, Facial recognition, Iris scan)",
          "Entering PIN code",
          "Security question answer",
          "SMS OTP code"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Trojan Horse malware?",
        "options": [
          "Malicious software disguised as legitimate or useful software to trick users into executing it",
          "Self-replicating network worm",
          "Browser cookie file",
          "Adware banner"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Botnet?",
        "options": [
          "A network of compromised private computers infected with malware and controlled as a group by a botmaster",
          "A group of web bots indexing pages",
          "A chat application",
          "A robot operating system"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Security Audit?",
        "options": [
          "A systematic evaluation of an organization information system security compliance against established standards and policies",
          "A financial tax audit",
          "A software bug report",
          "A database cleanup"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Placement Technical Assessment",
    "description": "Comprehensive placement interview evaluation across DSA, OOP, DBMS, OS, Computer Networks, and Core Software Engineering.",
    "category": "Interview Prep",
    "difficulty": "Intermediate",
    "duration": 25,
    "questionsPerAttempt": 15,
    "questions": [
      {
        "questionText": "What is the time complexity of searching an element in a balanced Binary Search Tree (BST) of N nodes?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which sorting algorithm has worst-case time complexity of O(N^2) but average-case time complexity of O(N log N)?",
        "options": [
          "Quick Sort",
          "Merge Sort",
          "Heap Sort",
          "Counting Sort"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What data structure is used to implement Breadth-First Search (BFS) algorithm on a Graph?",
        "options": [
          "Queue",
          "Stack",
          "Array",
          "Heap"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What data structure is used to implement Depth-First Search (DFS) algorithm on a Graph?",
        "options": [
          "Stack (or Recursion call stack)",
          "Queue",
          "Hash Table",
          "LinkedList"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the primary difference between Stack and Queue?",
        "options": [
          "Stack is LIFO (Last-In First-Out); Queue is FIFO (First-In First-Out)",
          "Stack is FIFO; Queue is LIFO",
          "Stack uses pointers only",
          "Queue does not allow elements"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Object-Oriented Programming pillar Polymorphism?",
        "options": [
          "Ability of different object classes to respond to the same method invocation in their own specific way",
          "Hiding implementation details",
          "Bundling data and methods",
          "Deriving new classes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Encapsulation in OOP?",
        "options": [
          "Bundling data (attributes) and methods operating on that data inside a class while restricting direct external access",
          "Inheriting features from parent",
          "Overloading functions",
          "Static allocation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Inheritance in OOP?",
        "options": [
          "Mechanism where a child class acquires properties and behaviors of a parent class enabling code reuse",
          "Creating global variables",
          "Hiding private data",
          "Passing arguments by value"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Abstract Class vs Interface?",
        "options": [
          "Abstract class can have method implementations and member fields; Interface contains only method signatures (in standard OOP)",
          "Interface can be instantiated",
          "Abstract class cannot have methods",
          "Interface allows private fields"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Primary Key in Relational Database Management System (RDBMS)?",
        "options": [
          "A column or set of columns that uniquely identifies each row in a database table without NULLs",
          "A key pointing to external table",
          "An index on text column",
          "A foreign constraint"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which SQL clause is used to filter aggregated group results after `GROUP BY`?",
        "options": [
          "HAVING",
          "WHERE",
          "ORDER BY",
          "FILTER"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Foreign Key in RDBMS?",
        "options": [
          "A column that references the Primary Key of another table to maintain referential integrity",
          "A secondary primary key",
          "An index for sorting",
          "A NULL value column"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does ACID stand for in Database Transactions?",
        "options": [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Indexing, Data",
          "Array, Code, Instruction, Execution",
          "Algorithm, Complexity, Isolation, Dependency"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Process in Operating Systems?",
        "options": [
          "A program in execution containing program code, stack, registers, and memory space",
          "A executable file on disk",
          "A hardware CPU core",
          "A thread lock"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between Process and Thread?",
        "options": [
          "Process has its own isolated memory address space; Threads share memory space within the same process",
          "Threads have separate memory address spaces",
          "Processes run faster than threads",
          "Process has no stack"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Deadlock in Operating Systems?",
        "options": [
          "A situation where two or more processes are blocked forever, waiting for resources held by each other",
          "A crashed application",
          "A memory leak",
          "A slow disk drive"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What are the four necessary conditions for Deadlock to occur?",
        "options": [
          "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
          "Paging, Swapping, Locking, Interrupts",
          "Read, Write, Execute, Delete",
          "Input, Output, Processing, Storage"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Virtual Memory in OS?",
        "options": [
          "A memory management capability using disk space to extend physical RAM, allowing execution of larger processes",
          "A secondary SSD drive",
          "RAM memory cache",
          "Virtual GPU memory"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which layer of OSI model is responsible for routing packets across different network networks (IP addresses)?",
        "options": [
          "Network Layer (Layer 3)",
          "Data Link Layer (Layer 2)",
          "Transport Layer (Layer 4)",
          "Application Layer (Layer 7)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which layer of OSI model handles end-to-end reliable transmission and port numbers (TCP/UDP)?",
        "options": [
          "Transport Layer (Layer 4)",
          "Network Layer (Layer 3)",
          "Session Layer (Layer 5)",
          "Physical Layer (Layer 1)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between TCP and UDP protocols?",
        "options": [
          "TCP is connection-oriented and reliable with error checking; UDP is connectionless and lightweight without delivery guarantees",
          "UDP is connection-oriented",
          "TCP is faster for live video streaming",
          "UDP guarantees packet order"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is DNS (Domain Name System)?",
        "options": [
          "The internet directory service that translates human-readable domain names (e.g. google.com) into numerical IP addresses",
          "A web browser engine",
          "A secure web protocol",
          "A database engine"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is HTTP status code 500?",
        "options": [
          "Internal Server Error",
          "Not Found",
          "Unauthorized",
          "Bad Request"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Git version control system?",
        "options": [
          "A distributed version control system for tracking code changes and collaborating on software development",
          "A cloud hosting service",
          "A database server",
          "A compiler tool"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which Git command stages modified files for the next commit?",
        "options": [
          "git add",
          "git commit",
          "git push",
          "git checkout"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity of inserting an element at the beginning of an Array vs LinkedList?",
        "options": [
          "Array: O(N) due to shifting; LinkedList: O(1)",
          "Array: O(1); LinkedList: O(N)",
          "Both are O(1)",
          "Both are O(N)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Hash Table collision and how is Chaining used to resolve it?",
        "options": [
          "Collision happens when two keys hash to same index; Chaining stores colliding elements in a linked list at that bucket",
          "Collision crashes app; Chaining deletes elements",
          "Collision resizes array to 1",
          "Chaining rehashes entire table"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Dynamic Programming algorithm technique?",
        "options": [
          "Solving complex problems by breaking them into overlapping subproblems and storing subproblem results (memoization/tabulation)",
          "Writing code dynamically at runtime",
          "Recursive search without memory",
          "Sorting arrays"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Inorder Traversal sequence for a Binary Search Tree (BST)?",
        "options": [
          "Left subtree -> Root -> Right subtree (produces sorted order of keys)",
          "Root -> Left -> Right",
          "Left -> Right -> Root",
          "Root -> Right -> Left"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the time complexity of Heap Sort algorithm in all cases?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Semaphore in OS IPC and Thread synchronization?",
        "options": [
          "A signaling mechanism / integer variable used to manage concurrent access to shared resources",
          "A virtual memory page",
          "A CPU scheduling algorithm",
          "A compiler flag"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Mutex (Mutual Exclusion Object)?",
        "options": [
          "A locking mechanism that ensures only ONE thread can enter a critical section at a time",
          "A process queue",
          "A memory page table",
          "A network socket"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Paging in OS memory management?",
        "options": [
          "A memory management scheme that stores and retrieves process data from secondary storage in fixed-size blocks called pages",
          "Swapping entire process memory",
          "Cleaning RAM",
          "Formatting hard drive"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does ARP (Address Resolution Protocol) do in networking?",
        "options": [
          "Maps an IP address (Layer 3) to a physical MAC address (Layer 2)",
          "Translates domain names to IP",
          "Assigns IP addresses dynamically",
          "Routes packets across routers"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is DHCP (Dynamic Host Configuration Protocol)?",
        "options": [
          "A network protocol that automatically assigns IP addresses and network parameters to devices",
          "Resolves domain names",
          "Secures web traffic",
          "Configures firewalls"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is REST API constraint Statelessness?",
        "options": [
          "No client session context is stored on the server between requests; every request contains all necessary data",
          "Server holds active user sessions",
          "API returns no data",
          "Database saves no records"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `git merge` do in Git?",
        "options": [
          "Combines changes from one branch into current active branch",
          "Creates a new repository",
          "Deletes a branch",
          "Discards local changes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Agile Scrum Sprint?",
        "options": [
          "A fixed time-boxed period (typically 2-4 weeks) during which a specific set of work is completed and made ready for review",
          "A sprint to fix bugs",
          "A daily 15-minute meeting",
          "A project launch date"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Software Requirement Specification (SRS) document?",
        "options": [
          "A comprehensive description of the behavior and functional/non-functional requirements of software to be developed",
          "Code documentation file",
          "Test script execution log",
          "Database schema SQL"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between Compiler and Interpreter?",
        "options": [
          "Compiler translates entire source code into machine code before execution; Interpreter executes code line-by-line",
          "Interpreter translates code into machine file before execution",
          "Compilers run slower at runtime",
          "Interpreter produces standalone executable file"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Frontend Developer Interview Assessment",
    "description": "Interview-level assessment covering HTML5, CSS3, ES6+, React, DOM performance, rendering lifecycle, and web optimization.",
    "category": "Interview Prep",
    "difficulty": "Intermediate",
    "duration": 25,
    "questionsPerAttempt": 15,
    "questions": [
      {
        "questionText": "What is Semantic HTML and why is it important for Web Development?",
        "options": [
          "Using HTML tags according to their structural meaning (`<header>`, `<nav>`, `<article>`), improving SEO, accessibility, and code clarity",
          "Styling HTML with CSS without tags",
          "Writing JavaScript inside HTML",
          "Disabling browser accessibility features"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the Virtual DOM in React.js?",
        "options": [
          "A lightweight in-memory representation of the real DOM used to calculate minimal diff updates before batch updating the real DOM",
          "A virtual browser engine",
          "A CSS layout grid",
          "A browser memory storage"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is React Reconciliation process (Fiber Architecture)?",
        "options": [
          "The algorithm React uses to diff the virtual DOM tree with the new one to determine minimal DOM updates",
          "Connecting React to database",
          "Compiling JSX into HTML",
          "Fetching data from REST API"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between State and Props in React?",
        "options": [
          "State is internal manageable data owned by component; Props are read-only inputs passed down from parent component",
          "Props can be mutated directly by child",
          "State is read-only",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Why should React State NEVER be mutated directly (`this.state.count = 5` or `state.count = 5`)?",
        "options": [
          "Direct mutation does not trigger a component re-render, leading to state inconsistencies",
          "It throws a syntax error",
          "It crashes the browser window",
          "It deletes the component"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `useEffect` hook do in React Functional Components?",
        "options": [
          "Allows performing side effects (data fetching, subscriptions, DOM manipulation) in functional components",
          "Creates state variables",
          "Memoizes expensive calculations",
          "Handles form validation"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What happens if `useEffect` has an EMPTY dependency array `[]`?",
        "options": [
          "The effect callback runs ONLY ONCE after initial component mount",
          "The effect runs on every re-render",
          "The effect never runs",
          "The component unmounts immediately"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `useMemo` hook used for in React?",
        "options": [
          "Memoizes the result of an expensive calculation to prevent recalculating on every re-render",
          "Stores persistent state",
          "Creates ref objects",
          "Disables re-renders"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `useCallback` hook used for in React?",
        "options": [
          "Returns a memoized version of a callback function to prevent unnecessary child re-renders",
          "Fetches API data",
          "Applies CSS styles",
          "Handles async promises"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is React Context API used for?",
        "options": [
          "Provides a way to share data (like user auth or theme) across the component tree without prop drilling",
          "Replaces Redux for all databases",
          "Improves CSS performance",
          "Creates virtual DOM nodes"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Prop Drilling in React applications?",
        "options": [
          "Passing props through multiple intermediate child components that do not need the data themselves just to reach a deeply nested component",
          "Optimizing props with memo",
          "Validating prop types",
          "Passing functions as props"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is High Order Component (HOC) pattern in React?",
        "options": [
          "A custom component function that takes a component as an argument and returns an enhanced component",
          "A root app component",
          "A state management hook",
          "A CSS framework class"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is controlled vs uncontrolled component in React Form handling?",
        "options": [
          "Controlled components have form data handled by React state; Uncontrolled components maintain state in DOM refs",
          "Controlled components use DOM refs",
          "Uncontrolled components use state",
          "They mean the exact same thing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is JS Closure and why is it useful in Web Development?",
        "options": [
          "A function bundled with references to its lexical environment, allowing access to outer scope variables even after outer function executes",
          "A way to close browser tab",
          "A CSS grid property",
          "A method to clear storage"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Event Loop in JavaScript runtime?",
        "options": [
          "A continuous loop monitoring Call Stack and Microtask/Callback Queue, pushing queued tasks to Call Stack when empty",
          "A loop iterating over arrays",
          "A CSS animation timer",
          "A server database loop"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between Microtask Queue and Macrotask Queue in JS Event Loop?",
        "options": [
          "Microtasks (Promises, process.nextTick) have higher priority and execute completely before Macrotasks (setTimeout, setInterval)",
          "Macrotasks execute before Microtasks",
          "They share identical execution queues",
          "Microtasks are for DOM clicks only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Prototype Chain in JavaScript OOP?",
        "options": [
          "The mechanism by which JS objects inherit properties and methods from other objects via their internal `[[Prototype]]` link",
          "A chain of array elements",
          "A promise chain",
          "A DOM tree hierarchy"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `typeof null` evaluate to in JavaScript due to legacy reasons?",
        "options": [
          "\"object\"",
          "\"null\"",
          "\"undefined\"",
          "\"number\""
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the output of `0.1 + 0.2 === 0.3` in JavaScript?",
        "options": [
          "false (due to IEEE 754 floating point representation precision issues yielding 0.30000000000000004)",
          "true",
          "TypeError",
          "NaN"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CSS Box Model components from inside out?",
        "options": [
          "Content -> Padding -> Border -> Margin",
          "Margin -> Border -> Padding -> Content",
          "Content -> Border -> Padding -> Margin",
          "Padding -> Content -> Margin -> Border"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between `display: none` and `visibility: hidden` in CSS layout rendering?",
        "options": [
          "`display: none` removes element from document flow completely; `visibility: hidden` hides element but preserves its physical layout space",
          "`visibility: hidden` removes space",
          "`display: none` retains space",
          "They are completely identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CSS Specificity hierarchy order (highest to lowest score)?",
        "options": [
          "Inline styles -> IDs -> Classes/Attributes/Pseudo-classes -> Elements/Pseudo-elements",
          "Elements -> Classes -> IDs -> Inline",
          "IDs -> Inline -> Classes -> Elements",
          "Classes -> IDs -> Elements -> Inline"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Critical Rendering Path in browser performance optimization?",
        "options": [
          "The sequence of steps browser takes to convert HTML, CSS, and JS into actual pixels rendered on screen (DOM -> CSSOM -> Render Tree -> Layout -> Paint)",
          "The URL path to server",
          "The path to React index.js",
          "The network DNS resolution"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Reflow (Layout) vs Repaint in browser rendering engine?",
        "options": [
          "Reflow calculates layout geometry of elements (expensive); Repaint redraws pixels on screen when visual appearance changes without layout shift",
          "Repaint calculates layout geometry",
          "Reflow happens only on image load",
          "They mean the exact same thing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Code Splitting in modern frontend bundlers (e.g. Vite, Webpack)?",
        "options": [
          "Splitting bundle code into smaller chunks loaded on demand (lazy loading) to improve initial page load time",
          "Splitting JS into HTML files",
          "Removing comments from code",
          "Dividing CSS into files"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `async` attribute on `<script async src=\"...\"></script>` tag do?",
        "options": [
          "Downloads script asynchronously in background and executes immediately as soon as download completes, potentially blocking DOM parsing",
          "Defers execution until HTML parsing finishes",
          "Stops script execution",
          "Inline executes script"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What does `defer` attribute on `<script defer src=\"...\"></script>` tag do?",
        "options": [
          "Downloads script asynchronously in background and executes ONLY AFTER HTML document parsing is complete in order",
          "Executes immediately blocking HTML",
          "Prevents script execution",
          "Runs script in web worker"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Web Accessibility (a11y) ARIA attributes used for?",
        "options": [
          "Accessible Rich Internet Applications attributes supplement HTML to express accessibility semantics for assistive technologies (screen readers)",
          "Styling UI elements with CSS",
          "Accelerating JS performance",
          "Validating form fields"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Web Worker in browser JavaScript environment?",
        "options": [
          "Allows running script tasks in background thread separate from main execution thread to avoid freezing UI",
          "A server worker process",
          "A web scraper script",
          "A service worker cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Service Worker in Progressive Web Applications (PWA)?",
        "options": [
          "A script running in background intercepting network requests, enabling offline caching, push notifications, and background sync",
          "A background thread for calculations",
          "A React component",
          "A server database worker"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `Promise.allSettled()` vs `Promise.all()` in JavaScript Promises?",
        "options": [
          "`Promise.allSettled()` waits for all input promises to settle (fulfill or reject) returning array of status objects; `Promise.all()` rejects instantly on first rejection",
          "`Promise.all()` never rejects",
          "`Promise.allSettled()` rejects on first error",
          "They are identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Webpack / Vite in frontend tooling?",
        "options": [
          "Module bundlers that process JavaScript modules, assets, and stylesheets into optimized static production bundles",
          "Testing frameworks",
          "CSS frameworks",
          "Backend database engines"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Tree Shaking in JavaScript bundlers?",
        "options": [
          "Dead-code elimination technique that removes unused exports from final JS production bundle",
          "Formatting JS files",
          "Minifying CSS selectors",
          "Sorting array elements"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "How does `display: flex` container `flex-grow: 1` behave?",
        "options": [
          "Allows a flex item to grow and fill available remaining space in flex container",
          "Fixes item width to 1px",
          "Shrinks item to zero",
          "Hides flex item"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CSS Custom Properties (Variables) syntax declaration and usage?",
        "options": [
          "Declare: `--main-color: #333;` | Use: `color: var(--main-color);`",
          "Declare: `$main-color: #333;` | Use: `$main-color`",
          "Declare: `@color = #333;` | Use: `get(@color)`",
          "Declare: `var main-color = #333;` | Use: `val(main-color)`"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cross-Site Scripting (XSS) defense in React components?",
        "options": [
          "React automatically escapes string values rendered in JSX to prevent XSS injection attacks",
          "React permits raw HTML scripts by default",
          "React requires manual escaping always",
          "React disables JavaScript"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `dangerouslySetInnerHTML` in React?",
        "options": [
          "React attribute to insert raw HTML into a component, requiring caution to prevent XSS security risks",
          "A CSS attribute",
          "A hook for state management",
          "A route parser"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)?",
        "options": [
          "SSR renders HTML page on server per request for faster initial load and SEO; CSR renders application in browser DOM via JavaScript bundle",
          "CSR renders HTML on server",
          "SSR runs only on mobile",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Hydration in Next.js / React SSR frameworks?",
        "options": [
          "The process where client-side JavaScript attaches event listeners to server-rendered HTML making it fully interactive",
          "Fetching data from database",
          "Compressing CSS files",
          "Clearing browser cache"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Static Site Generation (SSG)?",
        "options": [
          "Pre-rendering HTML pages at build time rather than on every user request, serving lightning-fast static assets from CDN",
          "Rendering pages on every database query",
          "Generating client JS dynamically",
          "Building native iOS apps"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  },
  {
    "title": "Backend Developer Interview Assessment",
    "description": "Interview-level evaluation covering server architectures, Express/Node, REST APIs, database queries, security, and scalability.",
    "category": "Interview Prep",
    "difficulty": "Intermediate",
    "duration": 25,
    "questionsPerAttempt": 15,
    "questions": [
      {
        "questionText": "What is Node.js event-driven non-blocking I/O model architecture?",
        "options": [
          "Node.js uses a single-threaded Event Loop operating on non-blocking I/O operations via libuv thread pool for high concurrency",
          "Node.js creates a new OS thread for every incoming HTTP request",
          "Node.js is multi-threaded by default for JS execution",
          "Node.js runs synchronous blocking code only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `libuv` library role in Node.js runtime?",
        "options": [
          "A C library that abstracts asynchronous I/O operations, providing the event loop and worker thread pool for filesystem/network tasks",
          "A HTTP parser for Express",
          "A MongoDB database driver",
          "A frontend templating engine"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Event Emitter pattern in Node.js (`events` module)?",
        "options": [
          "An object pattern that emits named events that trigger registered listener callback functions",
          "A database connection pool",
          "A route middleware",
          "A error handling class"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Express.js Middleware function signature and role?",
        "options": [
          "`function(req, res, next)` - functions that execute sequentially during request-response lifecycle to inspect/modify objects or terminate cycle",
          "`function(data, err)`",
          "`function(app, config)`",
          "`function(res, req)`"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Why is calling `next()` crucial inside custom Express middleware?",
        "options": [
          "Passes control to the next matching middleware function in the stack, preventing request from hanging indefinitely",
          "Responds to client with JSON",
          "Closes database connection",
          "Logs error to disk"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between SQL (Relational) and NoSQL (Document) databases?",
        "options": [
          "SQL databases use structured schemas and relational tables (ACID); NoSQL document databases (like MongoDB) store flexible JSON-like documents",
          "NoSQL databases do not support queries",
          "SQL databases cannot scale vertically",
          "SQL databases store data in files without schemas"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Database Indexing trade-off?",
        "options": [
          "Speeds up read query SELECT performance dramatically but slows down write/insert/update operations and consumes additional disk storage",
          "Slows down read queries",
          "Consumes no disk space",
          "Eliminates primary keys"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Connection Pooling in backend database drivers?",
        "options": [
          "Maintaining a reusable pool of active database connections to avoid the overhead of creating and destroying connections per request",
          "Connecting multiple databases together",
          "Replicating data across servers",
          "Pooling HTTP requests"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Object-Relational Mapping (ORM) e.g. Prisma, Sequelize vs ODM e.g. Mongoose?",
        "options": [
          "ORM maps relational database tables to OOP objects; ODM maps NoSQL document collections to OOP models",
          "ODM is for SQL databases",
          "ORM is for MongoDB only",
          "They mean the exact same thing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CORS (Cross-Origin Resource Sharing) header `Access-Control-Allow-Origin`?",
        "options": [
          "HTTP header sent by server specifying which client origin domains are permitted to read response data",
          "Header sent by browser client",
          "Database authorization token",
          "JWT signature header"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is JSON Web Token (JWT) structure and verification principle?",
        "options": [
          "JWT is stateless containing Header, Payload, Signature; Server verifies authenticity by computing signature using secret key without database lookup",
          "JWT is stored in server memory session",
          "JWT encrypts payload so client cannot read it",
          "JWT signature changes on every GET request"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is the difference between Stateful Session (Cookies + Redis) and Stateless Authentication (JWT)?",
        "options": [
          "Stateful session stores session state in server database/memory; Stateless JWT holds session payload in token stored on client",
          "Stateless JWT requires server memory lookup",
          "Stateful session stores token on client only",
          "They are completely identical"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Password Hashing algorithm bcrypt work factor (salt rounds)?",
        "options": [
          "Determines the computational cost (number of hashing iterations) making brute-force attacks computationally expensive",
          "The length of the hashed password string",
          "The database table column size",
          "The JWT expiration period"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SQL Injection defense using Parameterized Queries (Prepared Statements)?",
        "options": [
          "Separates SQL code from user parameters, ensuring user input is treated strictly as data, never executed as SQL code",
          "Filtering quote characters manually",
          "Base64 encoding input",
          "Using NoSQL databases only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Database Sharding in high-scalability backend architecture?",
        "options": [
          "Horizontal partitioning of a database dataset across multiple independent database server instances based on a shard key",
          "Vertical scaling of CPU RAM",
          "Backing up database to AWS S3",
          "Indexing primary key columns"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Database Replication (Leader-Follower / Primary-Secondary)?",
        "options": [
          "Copying data from a primary database node to secondary read-only replica nodes to scale read traffic and provide fault tolerance",
          "Sharding tables horizontally",
          "Deleting old records",
          "Running migrations"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CAP Theorem in distributed database systems?",
        "options": [
          "States that a distributed data store can simultaneously provide at most two of three guarantees: Consistency, Availability, Partition Tolerance",
          "Compute, Access, Performance theorem",
          "Control, Audit, Policy rule",
          "Caching, Allocation, Processing"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Cache Stampede (Thundering Herd) problem in caching (e.g. Redis)?",
        "options": [
          "When a popular cache key expires and massive concurrent requests hit the backend database simultaneously to recompute the value",
          "Redis memory full error",
          "Network connection drop",
          "Database index corruption"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Redis used for in modern backend architectures?",
        "options": [
          "An in-memory data structure store used as a high-speed database, cache, message broker, and session store",
          "Relational data storage on disk",
          "Frontend UI rendering engine",
          "HTML template parser"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is WebSockets protocol (`ws://` or `wss://`) vs HTTP polling?",
        "options": [
          "WebSocket provides persistent full-duplex bi-directional communication over a single TCP connection; HTTP polling requires repeated requests",
          "HTTP polling is bi-directional real-time",
          "WebSockets work on UDP only",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Message Queue (e.g. RabbitMQ, Apache Kafka, AWS SQS) used for?",
        "options": [
          "Asynchronous task processing, decoupling microservices, and buffering workloads between producer and consumer services",
          "Rendering frontend HTML",
          "Executing database migrations",
          "Managing SSL certificates"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Rate Limiting algorithm Leaky Bucket / Token Bucket?",
        "options": [
          "Algorithms used to control network traffic rate by allowing burst requests up to bucket capacity and processing at fixed rate",
          "Database lock mechanisms",
          "Password hashing algorithms",
          "Memory garbage collectors"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Graceful Shutdown in Node.js server applications?",
        "options": [
          "Listening to process signals (SIGTERM, SIGINT) to stop accepting new requests, complete active in-flight requests, and close connections before exiting",
          "Killing process with `kill -9`",
          "Restarting server on error",
          "Crashing node on unhandled exception"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `process.nextTick()` vs `setImmediate()` in Node.js Event Loop?",
        "options": [
          "`process.nextTick()` callback fires immediately after current operation completes before Event Loop continues; `setImmediate()` fires on next Check phase",
          "`setImmediate()` fires before `process.nextTick()`",
          "They execute in identical phase",
          "`process.nextTick()` runs after `setTimeout`"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Streams API in Node.js (Readable, Writable, Transform)?",
        "options": [
          "Objects for reading/writing data sequentially in chunks without loading entire dataset into memory (efficient for large files)",
          "Database query builder",
          "Web browser window stream",
          "CSS animation pipeline"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is `buffer` module in Node.js?",
        "options": [
          "Provides instances of raw binary data allocations in memory outside the V8 JavaScript heap",
          "A cache memory drive",
          "A string array manager",
          "A route validator"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Nginx in backend web server architecture?",
        "options": [
          "A high-performance HTTP web server, reverse proxy, load balancer, and HTTP cache server",
          "A database engine",
          "A Node.js package manager",
          "A frontend compiler"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Reverse Proxy role in application deployment?",
        "options": [
          "Sits in front of backend servers, routing client requests, handling SSL termination, load balancing, and hiding backend IP structure",
          "Sits on client browser",
          "Proxies SQL queries to database",
          "Translates languages"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is SSL/TLS Termination at Load Balancer / Reverse Proxy?",
        "options": [
          "Decrypting HTTPS traffic at the load balancer before forwarding plain HTTP traffic to backend internal servers in secure network",
          "Disabling HTTPS security",
          "Encrypting database columns",
          "Generating SSL certificates"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Idempotency in API design?",
        "options": [
          "An API request operation that produces the exact same server state result regardless of how many times it is executed with same parameters",
          "An operation that fails on second call",
          "An operation returning random data",
          "An API authentication method"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP methods are naturally Idempotent according to RFC specification?",
        "options": [
          "GET, PUT, DELETE, HEAD, OPTIONS",
          "POST, PATCH",
          "POST, PUT, DELETE",
          "GET only"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "Which HTTP method is NOT idempotent?",
        "options": [
          "POST (submitting it multiple times creates multiple distinct resources)",
          "GET",
          "PUT",
          "DELETE"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Database Transaction Isolation Level \"Read Committed\"?",
        "options": [
          "Prevents dirty reads: a transaction can only read data committed by other transactions before the read query began",
          "Allows reading uncommitted data",
          "Locks entire database table",
          "Prevents all concurrent reads"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is \"Dirty Read\" in database concurrency control?",
        "options": [
          "Occurs when a transaction reads data that has been modified by another uncommitted transaction that might roll back later",
          "Reading corrupted disk files",
          "Reading deleted primary key",
          "Reading data without index"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is \"Phantom Read\" in database isolation?",
        "options": [
          "Occurs when a transaction re-executes a query reading a set of rows and finds new matching rows inserted by another committed transaction",
          "Reading deleted rows",
          "Reading null values",
          "Reading index pages"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Distributed Lock in microservices (e.g. Redlock algorithm in Redis)?",
        "options": [
          "A lock mechanism ensuring that across multiple distributed server nodes, only one node can execute a critical section at a time",
          "A database row lock",
          "A file permission lock",
          "A thread lock in Node.js"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Circuit Breaker pattern in microservice architecture?",
        "options": [
          "Prevents a service from constantly attempting an operation likely to fail (e.g. down external API), failing fast and allowing service to recover",
          "A physical electrical switch",
          "A database rollback",
          "An IP firewall rule"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is Event Sourcing architecture pattern?",
        "options": [
          "Storing the state of a business entity as a sequence of state-changing append-only events rather than just current state",
          "Polling database for events",
          "Using Node.js Event Emitter",
          "Logging errors to file"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is CQRS (Command Query Responsibility Segregation) pattern?",
        "options": [
          "Separating read operations (queries) from write operations (commands) into distinct data models and interfaces",
          "Using single database for all tasks",
          "Merging frontend and backend code",
          "Running unit tests in parallel"
        ],
        "correctAnswer": 0,
        "marks": 1
      },
      {
        "questionText": "What is API Gateway pattern in microservices?",
        "options": [
          "A single entry point for all clients that routes requests, handles authentication, rate limiting, SSL termination, and protocol translation",
          "A database proxy",
          "A backend router module",
          "A DNS server"
        ],
        "correctAnswer": 0,
        "marks": 1
      }
    ]
  }
];

const seedScript = `const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const { connectDB } = require('../config/db');
const User = require('../models/User');
const Exam = require('../models/Exam');
const Question = require('../models/Question');
const Result = require('../models/Result');
const Attempt = require('../models/Attempt');

dotenv.config({ path: path.join(__dirname, '../.env') });

const seedData = async (shouldExit = true) => {
  try {
    if (mongoose.connection.readyState === 0) {
      await connectDB();
    }
    console.log('[Seed] Seeding/Updating technical assessments database...');

    // 1. Create or verify Administrator
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@exam.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@12345';
    const adminName = process.env.ADMIN_NAME || 'System Administrator';

    let admin = await User.findOne({ email: adminEmail });
    if (!admin) {
      admin = await User.create({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        role: 'admin',
      });
      console.log(' [Seed] Admin user created: ' + admin.email);
    } else {
      console.log(' [Seed] Existing admin user verified: ' + admin.email);
    }

    // 2. Create or verify Sample Student
    let student = await User.findOne({ email: 'student@exam.com' });
    if (!student) {
      student = await User.create({
        name: 'Alex Johnson',
        email: 'student@exam.com',
        password: 'Student@12345',
        role: 'student',
      });
      console.log(' [Seed] Demo student user created: ' + student.email);
    } else {
      console.log(' [Seed] Existing demo student user verified: ' + student.email);
    }

    const assessmentsData = ${JSON.stringify(assessments, null, 2)};

    // 3. Process each assessment idempotently without deleting user collections
    for (const item of assessmentsData) {
      let exam = await Exam.findOne({ title: item.title });
      if (!exam) {
        exam = await Exam.create({
          title: item.title,
          description: item.description,
          category: item.category,
          difficulty: item.difficulty,
          duration: item.duration,
          questionsPerAttempt: item.questionsPerAttempt,
          totalMarks: item.questionsPerAttempt,
          status: 'published',
          createdBy: admin._id,
        });
        console.log(' [Seed] Created Assessment: "' + exam.title + '" (' + item.category + ')');
      } else {
        exam.category = item.category;
        exam.difficulty = item.difficulty;
        exam.duration = item.duration;
        exam.questionsPerAttempt = item.questionsPerAttempt;
        exam.totalMarks = item.questionsPerAttempt;
        exam.status = 'published';
        await exam.save();
      }

      const totalQCount = item.questions.length;
      let addedQCount = 0;
      for (let i = 0; i < totalQCount; i++) {
        const q = item.questions[i];
        const existingQ = await Question.findOne({ examId: exam._id, questionText: q.questionText });
        if (!existingQ) {
          const qDifficulty = q.difficulty || (i < Math.floor(totalQCount / 3) ? 'Easy' : i < Math.floor((2 * totalQCount) / 3) ? 'Intermediate' : 'Hard');
          await Question.create({
            examId: exam._id,
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
            marks: 1,
            difficulty: qDifficulty,
          });
          addedQCount++;
        }
      }
      if (addedQCount > 0) {
        console.log('   -> Added ' + addedQCount + ' questions to "' + exam.title + '"');
      }
    }

    // 4. Ensure demo student past attempt & result exist
    const pythonAssessment = await Exam.findOne({ title: 'Python Developer Assessment' });
    if (pythonAssessment) {
      const existingResult = await Result.findOne({ studentId: student._id, examId: pythonAssessment._id });
      if (!existingResult) {
        const pythonQuestions = await Question.find({ examId: pythonAssessment._id }).limit(10);
        if (pythonQuestions.length > 0) {
          const questionIds = pythonQuestions.map((q) => q._id);

          const demoAttempt = await Attempt.create({
            studentId: student._id,
            examId: pythonAssessment._id,
            questionIds: questionIds,
            startedAt: new Date(Date.now() - 40 * 60 * 1000),
            status: 'completed',
            submittedAt: new Date(Date.now() - 20 * 60 * 1000),
          });

          const evaluatedAnswers = pythonQuestions.map((q, idx) => {
            const isCorrect = idx < 8; // 8/10 correct = 80%
            return {
              questionId: q._id,
              selectedOption: isCorrect ? q.correctAnswer : (q.correctAnswer + 1) % 4,
              isCorrect,
              marksObtained: isCorrect ? 1 : 0,
            };
          });

          await Result.create({
            studentId: student._id,
            examId: pythonAssessment._id,
            attemptId: demoAttempt._id,
            answers: evaluatedAnswers,
            correctAnswersCount: 8,
            incorrectAnswersCount: 2,
            unansweredCount: 0,
            score: 8,
            totalMarks: 10,
            percentage: 80,
            startedAt: demoAttempt.startedAt,
            submittedAt: demoAttempt.submittedAt,
            submissionType: 'manual',
          });

          console.log('[Seed] Sample historical attempt & result verified for demo student.');
        }
      }
    }

    const finalExamCount = await Exam.countDocuments();
    const finalQuestionCount = await Question.countDocuments();
    console.log('[Seed] Seeding completed successfully! Total Assessments: ' + finalExamCount + ', Total Questions: ' + finalQuestionCount);

    if (shouldExit) {
      process.exit(0);
    }
  } catch (error) {
    console.error('[Seed] Error during seeding:', error);
    if (shouldExit) {
      process.exit(1);
    }
    throw error;
  }
};

if (require.main === module) {
  seedData(true);
}

module.exports = { seedData };
`;

fs.writeFileSync(path.join(__dirname, 'seed.js'), seedScript, 'utf8');
console.log('Successfully wrote updated backend/scripts/seed.js!');
