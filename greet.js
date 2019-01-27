function greet(name) {
    var arr = name
    if (name == null) {
        return "Hello, my friend."
    } 
    else if (!Array.isArray(name)) {
        if (name == name.toUpperCase()) {
            return `HELLO ${name}!`
        }
    } 
    else if (Array.isArray(name)) {
        if (name.length === 2) {
            return `Hello, ${name.join(" and ")}.`
        } else if (name.length === 3) {
            returnText = name.slice(0, 2).join(', ') + ', and ' + name.slice(-1);
            return `Hello, ${returnText}.`
        }
    } 
    return `Hello, ${name}.`
}

module.exports = greet;