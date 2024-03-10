# Understanding 'global' object and 'window' object
test.js content:
```
const greet = (name) =>{
    console.log(`hello , ${name}`);

}

greet('mario');
greet('yoshi');
```

In JS, we can call reference to a variable and display it using `template strings`. Template strings are contained within **double curly opening quote** (``). Running the above code will display the following in terminal:
```
hello , mario
hello , yoshi
```

The global object in `Node` and the global object of `window` are different. As shown in `part2/global.js`, the codes defined inside are the methods and properties available to Node's global object. It is not possible for us to access DOM objects (`document.querySelector`). This is because `document` isn't inside the namespace of the `global` object, but rather in the `window` object.

But NodeJS works in the server-side anyways so there's no need to access the DOM objects.