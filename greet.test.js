const greet = require('./greet');

// Requirement 1
test('Write a method greet(name)', () =>{
    expect(greet('Bob'));
});

test('When name is "Bob", the method should return a string "Hello, Bob."', () =>{
    expect(greet('Bob')).toBe("Hello, Bob.");
});

test('When name is "Tang", the method should return a string "Hello, Tang."', () =>{
    expect(greet('Tang')).toBe("Hello, Tang.");
});

// Requirement 2
test('when name is null, then the method should return the string "Hello, my friend."', () =>{
    expect(greet()).toBe("Hello, my friend.");
});

// Requirement 3
test('When name is all uppercase, then the method should shout back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"', () =>{
    expect(greet('JERRY')).toBe("HELLO JERRY!");
});

// Requirement 4
test('When name is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed. For example, when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () =>{
    expect(greet(["Jill","Jane"])).toBe("Hello, Jill and Jane.");
});

// Requirement 5
test('When name represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () =>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});