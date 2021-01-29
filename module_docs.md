# Miguel Module documentation

This is a simple funcion to know more about me :D

## Installing:

- npm: `npm install miguel --save` :DD

- deno: `import miguel from 'https://cdn.skypack.dev/miguel';`

## Usage:

To see all the info just print tha main function:

```javascript
console.log(miguel())
```

The modules has three methods, they are for getting specific data inside the info object.

- `contact`: Get the contact info
  - Params: 
    - `way`?: String
  - Returns: If the platform (way) is provided it returns the string with the contact info. If not, returns all the contact info.
```javascript
console.log(miguel().contact())
console.log(miguel().contact('telegram'))
```
- `support`
  - Params: 
    - `way`?: String
  - Returns: If the platform (way) is provided it returns the string with the suport info. If not, returns all the support info.
```javascript
console.log(miguel().support())
console.log(miguel().support('bitcoin'))
```
- at 
  - Params: 
    - `platform`?: String
  - Returns: If the platform (way) is provided it returns the string with the profile info. If not, returns all the social media profiles info.
  
```javascript
console.log(miguel().at())
console.log(miguel().at('github'))
```
  
