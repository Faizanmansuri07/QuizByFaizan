const questions = [
    {
        "id": 1,
        "question": "What is the correct syntax for including a header file in C?",
        "answers": [
            { "text": "#include <header.h>", "correct": true },
            { "text": "#include 'header.h'", "correct": false },
            { "text": "include <header.h>", "correct": false },
            { "text": "#include <header>", "correct": false }
        ]
    },
    {
        "id": 2,
        "question": "Which of the following is a valid variable name in C?",
        "answers": [
            { "text": "1variable", "correct": false },
            { "text": "variable_1", "correct": true },
            { "text": "variable-1", "correct": false },
            { "text": "variable 1", "correct": false }
        ]
    },
    {
        "id": 3,
        "question": "What data type is used to represent a single character in C?",
        "answers": [
            { "text": "char", "correct": true },
            { "text": "string", "correct": false },
            { "text": "int", "correct": false },
            { "text": "float", "correct": false }
        ]
    },
    {
        "id": 4,
        "question": "Which operator is used to assign a value to a variable?",
        "answers": [
            { "text": "==", "correct": false },
            { "text": "=", "correct": true },
            { "text": "+", "correct": false },
            { "text": ":", "correct": false }
        ]
    },
    {
        "id": 5,
        "question": "What is the size of int data type in C?",
        "answers": [
            { "text": "2 bytes", "correct": false },
            { "text": "4 bytes", "correct": true },
            { "text": "8 bytes", "correct": false },
            { "text": "Depends on compiler", "correct": false }
        ]
    },
    {
        "id": 6,
        "question": "Which of the following is not a valid C data type?",
        "answers": [
            { "text": "float", "correct": false },
            { "text": "double", "correct": false },
            { "text": "string", "correct": true },
            { "text": "int", "correct": false }
        ]
    },
    {
        "id": 7,
        "question": "What is the output of the following code: printf(\"%d\", 5 + 10);?",
        "answers": [
            { "text": "15", "correct": true },
            { "text": "510", "correct": false },
            { "text": "5 + 10", "correct": false },
            { "text": "Error", "correct": false }
        ]
    },
    {
        "id": 8,
        "question": "Which of the following is used to create a function in C?",
        "answers": [
            { "text": "function", "correct": false },
            { "text": "def", "correct": false },
            { "text": "void", "correct": true },
            { "text": "method", "correct": false }
        ]
    },
    {
        "id": 9,
        "question": "What keyword is used to return a value from a function?",
        "answers": [
            { "text": "return", "correct": true },
            { "text": "exit", "correct": false },
            { "text": "break", "correct": false },
            { "text": "yield", "correct": false }
        ]
    },
    {
        "id": 10,
        "question": "Which function is used to get the length of a string in C?",
        "answers": [
            { "text": "strlen()", "correct": true },
            { "text": "size()", "correct": false },
            { "text": "length()", "correct": false },
            { "text": "count()", "correct": false }
        ]
    },
    {
        "id": 11,
        "question": "What is the purpose of the main() function in C?",
        "answers": [
            { "text": "It is the starting point of a program", "correct": true },
            { "text": "It defines variables", "correct": false },
            { "text": "It contains loops", "correct": false },
            { "text": "It is not necessary", "correct": false }
        ]
    },
    {
        "id": 12,
        "question": "What will be the output of the following code: printf(\"%c\", 'A' + 1);?",
        "answers": [
            { "text": "A", "correct": false },
            { "text": "B", "correct": true },
            { "text": "C", "correct": false },
            { "text": "Error", "correct": false }
        ]
    },
    {
        "id": 13,
        "question": "Which of the following is a loop construct in C?",
        "answers": [
            { "text": "for", "correct": true },
            { "text": "loop", "correct": false },
            { "text": "each", "correct": false },
            { "text": "while", "correct": true }
        ]
    },
    {
        "id": 14,
        "question": "How do you declare a pointer in C?",
        "answers": [
            { "text": "int ptr;", "correct": false },
            { "text": "int* ptr;", "correct": true },
            { "text": "ptr int;", "correct": false },
            { "text": "pointer int;", "correct": false }
        ]
    },
    {
        "id": 15,
        "question": "What is the value of the expression 5 / 2 in C?",
        "answers": [
            { "text": "2", "correct": true },
            { "text": "2.5", "correct": false },
            { "text": "3", "correct": false },
            { "text": "Error", "correct": false }
        ]
    },
    {
        "id": 16,
        "question": "Which of the following is used to handle memory dynamically in C?",
        "answers": [
            { "text": "malloc()", "correct": true },
            { "text": "calloc()", "correct": true },
            { "text": "free()", "correct": true },
            { "text": "realloc()", "correct": true }
        ]
    },
    {
        "id": 17,
        "question": "What is the default value of an uninitialized variable in C?",
        "answers": [
            { "text": "0", "correct": false },
            { "text": "undefined", "correct": true },
            { "text": "NULL", "correct": false },
            { "text": "random", "correct": false }
        ]
    },
    {
        "id": 18,
        "question": "What is the purpose of the 'break' statement in C?",
        "answers": [
            { "text": "To exit a loop", "correct": true },
            { "text": "To skip to the next iteration", "correct": false },
            { "text": "To stop the program", "correct": false },
            { "text": "To declare a variable", "correct": false }
        ]
    },
    {
        "id": 19,
        "question": "Which operator is used to compare two values in C?",
        "answers": [
            { "text": "=", "correct": false },
            { "text": "==", "correct": true },
            { "text": ">", "correct": false },
            { "text": "<", "correct": false }
        ]
    },
    {
        "id": 20,
        "question": "What is the correct way to comment in C?",
        "answers": [
            { "text": "// comment", "correct": true },
            { "text": "/* comment */", "correct": true },
            { "text": "# comment", "correct": false },
            { "text": "<!-- comment -->", "correct": false }
        ]
    },
    {
        "id": 21,
        "question": "Which library is required for using printf() function?",
        "answers": [
            { "text": "<stdio.h>", "correct": true },
            { "text": "<stdlib.h>", "correct": false },
            { "text": "<conio.h>", "correct": false },
            { "text": "<string.h>", "correct": false }
        ]
    },
    {
        "id": 22,
        "question": "What does the sizeof() operator return?",
        "answers": [
            { "text": "The length of a string", "correct": false },
            { "text": "The size of a variable or data type", "correct": true },
            { "text": "The address of a variable", "correct": false },
            { "text": "The number of bytes in a file", "correct": false }
        ]
    },
    {
        "id": 23,
        "question": "Which of the following is used to terminate a string in C?",
        "answers": [
            { "text": "\\0", "correct": true },
            { "text": "\\n", "correct": false },
            { "text": "\\t", "correct": false },
            { "text": "\\e", "correct": false }
        ]
    },
    {
        "id": 24,
        "question": "How many times will the loop run: for(int i = 0; i < 5; i++)?",
        "answers": [
            { "text": "4", "correct": false },
            { "text": "5", "correct": true },
            { "text": "6", "correct": false },
            { "text": "infinite", "correct": false }
        ]
    },
    {
        "id": 25,
        "question": "What does the keyword 'static' do in C?",
        "answers": [
            { "text": "Makes a variable local to a function", "correct": false },
            { "text": "Keeps the variable value between function calls", "correct": true },
            { "text": "Declares a global variable", "correct": false },
            { "text": "Initializes a variable", "correct": false }
        ]
    },
    {
        "id": 26,
        "question": "Which of the following statements is true about arrays in C?",
        "answers": [
            { "text": "Arrays can change size during runtime", "correct": false },
            { "text": "Arrays are a collection of elements of different data types", "correct": false },
            { "text": "Array indices start from 1", "correct": false },
            { "text": "Arrays are a collection of elements of the same data type", "correct": true }
        ]
    },
    {
        "id": 27,
        "question": "What is the correct way to declare an array of integers in C?",
        "answers": [
            { "text": "int arr[];", "correct": true },
            { "text": "int arr(10);", "correct": false },
            { "text": "array int arr;", "correct": false },
            { "text": "int arr[10];", "correct": true }
        ]
    },
    {
        "id": 28,
        "question": "How do you access the first element of an array in C?",
        "answers": [
            { "text": "array[1]", "correct": false },
            { "text": "array[0]", "correct": true },
            { "text": "array.first", "correct": false },
            { "text": "array{0}", "correct": false }
        ]
    },
    {
        "id": 29,
        "question": "Which of the following is a correct way to declare a two-dimensional array?",
        "answers": [
            { "text": "int arr[][];", "correct": false },
            { "text": "int arr[10][20];", "correct": true },
            { "text": "int arr(10, 20);", "correct": false },
            { "text": "int arr[10,20];", "correct": false }
        ]
    },
    {
        "id": 30,
        "question": "What will be the output of the following code: printf(\"%d\", sizeof(char));?",
        "answers": [
            { "text": "1", "correct": true },
            { "text": "0", "correct": false },
            { "text": "2", "correct": false },
            { "text": "4", "correct": false }
        ]
    },
    {
        "id": 31,
        "question": "What is the result of the expression 10 % 3?",
        "answers": [
            { "text": "1", "correct": true },
            { "text": "3", "correct": false },
            { "text": "10", "correct": false },
            { "text": "2", "correct": false }
        ]
    },
    {
        "id": 32,
        "question": "Which of the following functions is used to concatenate two strings in C?",
        "answers": [
            { "text": "strcat()", "correct": true },
            { "text": "concat()", "correct": false },
            { "text": "append()", "correct": false },
            { "text": "strjoin()", "correct": false }
        ]
    },
    {
        "id": 33,
        "question": "What does the 'continue' statement do in a loop?",
        "answers": [
            { "text": "Ends the loop", "correct": false },
            { "text": "Skips the current iteration", "correct": true },
            { "text": "Starts the loop over", "correct": false },
            { "text": "Repeats the loop", "correct": false }
        ]
    },
    {
        "id": 34,
        "question": "Which of the following is the correct syntax for a for loop?",
        "answers": [
            { "text": "for(i = 0; i < 5; i++)", "correct": true },
            { "text": "for i = 0; i < 5; i++", "correct": false },
            { "text": "for(i < 5; i++)", "correct": false },
            { "text": "for(i = 0; i < 5)", "correct": false }
        ]
    },
    {
        "id": 35,
        "question": "What is a NULL pointer in C?",
        "answers": [
            { "text": "A pointer that points to nothing", "correct": true },
            { "text": "A pointer that is uninitialized", "correct": false },
            { "text": "A pointer that points to a variable", "correct": false },
            { "text": "A pointer that points to 0", "correct": false }
        ]
    },
    {
        "id": 36,
        "question": "Which of the following is used to dynamically allocate memory in C?",
        "answers": [
            { "text": "alloc()", "correct": false },
            { "text": "malloc()", "correct": true },
            { "text": "new()", "correct": false },
            { "text": "create()", "correct": false }
        ]
    },
    {
        "id": 37,
        "question": "How do you release dynamically allocated memory in C?",
        "answers": [
            { "text": "delete", "correct": false },
            { "text": "remove", "correct": false },
            { "text": "free()", "correct": true },
            { "text": "dispose", "correct": false }
        ]
    },
    {
        "id": 38,
        "question": "What is the maximum size of an array in C?",
        "answers": [
            { "text": "Depends on the memory available", "correct": true },
            { "text": "256", "correct": false },
            { "text": "1024", "correct": false },
            { "text": "65536", "correct": false }
        ]
    },
    {
        "id": 39,
        "question": "Which of the following is true about the 'switch' statement in C?",
        "answers": [
            { "text": "It can only use integer values", "correct": false },
            { "text": "It can use any data type", "correct": false },
            { "text": "It requires a break statement", "correct": true },
            { "text": "It does not allow fall-through behavior", "correct": false }
        ]
    },
    {
        "id": 40,
        "question": "Which of the following is a standard library in C?",
        "answers": [
            { "text": "math.h", "correct": true },
            { "text": "string.js", "correct": false },
            { "text": "sys.lib", "correct": false },
            { "text": "data.h", "correct": false }
        ]
    },
    {
        "id": 41,
        "question": "What is the purpose of the 'sizeof' operator?",
        "answers": [
            { "text": "To count the number of elements in an array", "correct": false },
            { "text": "To determine the memory size of a variable", "correct": true },
            { "text": "To find the length of a string", "correct": false },
            { "text": "To allocate memory", "correct": false }
        ]
    },
    {
        "id": 42,
        "question": "Which function is used to read a character from stdin in C?",
        "answers": [
            { "text": "getchar()", "correct": true },
            { "text": "scanf()", "correct": false },
            { "text": "read()", "correct": false },
            { "text": "input()", "correct": false }
        ]
    },
    {
        "id": 43,
        "question": "Which of the following is not a valid C conditional statement?",
        "answers": [
            { "text": "if", "correct": false },
            { "text": "else", "correct": false },
            { "text": "unless", "correct": true },
            { "text": "switch", "correct": false }
        ]
    },
    {
        "id": 44,
        "question": "What is the purpose of the 'return' statement in a function?",
        "answers": [
            { "text": "To exit the function", "correct": false },
            { "text": "To return a value from the function", "correct": true },
            { "text": "To declare the function", "correct": false },
            { "text": "To pass parameters", "correct": false }
        ]
    },
    {
        "id": 45,
        "question": "Which of the following is a correct way to declare a function in C?",
        "answers": [
            { "text": "int function_name;", "correct": false },
            { "text": "void function_name()", "correct": true },
            { "text": "function_name()", "correct": false },
            { "text": "function void()", "correct": false }
        ]
    },
    {
        "id": 46,
        "question": "What does the 'volatile' keyword indicate in C?",
        "answers": [
            { "text": "The variable may change unexpectedly", "correct": true },
            { "text": "The variable is constant", "correct": false },
            { "text": "The variable can be optimized", "correct": false },
            { "text": "The variable is unused", "correct": false }
        ]
    },
    {
        "id": 47,
        "question": "Which of the following is a way to create a constant variable in C?",
        "answers": [
            { "text": "const int x = 10;", "correct": true },
            { "text": "int const x = 10;", "correct": true },
            { "text": "constant int x = 10;", "correct": false },
            { "text": "int x const = 10;", "correct": false }
        ]
    },
    {
        "id": 48,
        "question": "What will the following code print? printf(\"%d\", 10 < 5);",
        "answers": [
            { "text": "0", "correct": true },
            { "text": "1", "correct": false },
            { "text": "10", "correct": false },
            { "text": "5", "correct": false }
        ]
    },
    {
        "id": 49,
        "question": "Which of the following statements is used to include a standard library in C?",
        "answers": [
            { "text": "#include <stdio.h>", "correct": true },
            { "text": "#library <stdio>", "correct": false },
            { "text": "include <stdio>", "correct": false },
            { "text": "#include stdio.h", "correct": false }
        ]
    },
    {
        "id": 50,
        "question": "What is the result of the following expression: 'C' + 1?",
        "answers": [
            { "text": "'D'", "correct": true },
            { "text": "'C'", "correct": false },
            { "text": "67", "correct": false },
            { "text": "68", "correct": false }
        ]
    }
]
