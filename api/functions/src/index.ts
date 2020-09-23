import * as functions from 'firebase-functions';
const express = require('express');
const app = express();

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//
// export const data = functions.https.onRequest((request, response) => {
//    functions.logger.info("Return data", {structuredData: true});
//    response.json({values:"John"})
// });

app.get('/data', (request:any, response:any) => {
    response.json({ value: "Hello World"});
});

app.get('/pokemons', (request:any, response:any) => {
    response.json({ value: ["Hello World", "salameche"]});
});

// install express npm i --save express
// express@4.17.1
// On déclare api comme nom de sortie et ensuite on aura nos endpoints
exports.api = functions.https.onRequest(app);
