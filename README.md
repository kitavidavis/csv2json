# @daviskitavi98/csv2json
A brilliant javascript package to parse csv to json

How to use the package
```
npm install --save @daviskitavi98/csv2json
const csv2json = require('@daviskitavi98/csv2json')
let response = csv2json('Path-to-your-csv')
```

The returned object has two main important data:
1. The CSV headers
```
let response = csv2json('Path-to-your-csv')
console.log(response.headers)
```

2. The CSV Json data
```
let response = csv2json('Path-to-your-csv')
console.log(response.json)
```

