# Animal Farm
A simple randomly created application with a filter model

## How to visualize this mini app

1. git clone repo name

2. Go into the folder of animal_farm and `npm install`. Also do the same in the server folder

3. In the server folder, before running `npm start`; inside the package.json file, add `"type": "module"`, like below:

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module", <--
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

4. In the server folder type `node .` wich will start the server

5. Go back to the main folder and type `npm start` and voila!