# Miguel Module documentation

This is a simple library with some methods to know more about me :D. It is intended to be used in my own portfolio but you can use it however you want.

> You can automate payments with the support method ;).

## Installing:

- npm: `npm install miguel --save` :DD

- deno: `import miguel from 'https://cdn.skypack.dev/miguel';`

## Usage:

To see all raw data you just can import directly from metadata.js:

```javascript
import meta from 'miguel/metadata.js'
console.log(meta)
```

To import methods you can do:

```javascript
import { profile, contact, at, support, projects } from 'miguel'
```

This module have five methods, they are for getting specific data inside the meta info object.

- `profile`: Get the main profile data.
  - Returns: Onject with profile data.

- `contact`: Get contact info
  - Params: 
    - `way`?: String
  - Returns: If the platform (way) is provided it returns the string with the contact info. If not, returns all the contact info.
```javascript
console.log(contact())
console.log(contact('telegram'))
```
- `support`
  - Params: 
    - `way`?: String
  - Returns: If the platform (way) is provided it returns the string with the suport info. If not, returns all the support info.
```javascript
console.log(support())
console.log(support('bitcoin'))
```
- at 
  - Params: 
    - `platform`?: String
  - Returns: If the platform (way) is provided it returns the string with the profile info. If not, returns all the social media profiles info.
  
```javascript
console.log(at())
console.log(at('github'))
```
- projects 
  - Params: 
    - `name`?: String
  - Returns: If the project name (name) is provided it returns an object with the project info. If not, returns all the projects inside an array.
  
```javascript
console.log(projects())
console.log(projects('astrodon'))
```

## Deno Support:

This package is also compatible with Deno, just do:

```typescript
import { profile, contact, at, support, projects } from 'https://cdn.skypack.dev/miguel/index.js'
```