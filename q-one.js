function customPrint(n, message) {
    m = message.replace(/^"|"$/g, '');
    return `${m}\n`.repeat(n);
}

let result = customPrint(5, "Hello, World!");
console.log(result)