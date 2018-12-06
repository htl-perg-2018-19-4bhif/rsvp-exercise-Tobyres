"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const express = require("express");
let partyName = "Grillparty";
let partyLoc = "In meinem Garten";
let partyDate = new Date(2018, 12, 12);
let server = express();
server.get('/party', (request, response) => {
    response.send({
        title: partyName,
        location: partyLoc,
        date: partyDate
    });
});
server.post('/register', (request, response) => {
    if (!request.body.firstName || !request.body.lastName) {
        response.status(http_status_codes_1.BAD_REQUEST).send('Missing first or last name');
    }
    else {
        response.status(http_status_codes_1.CREATED).send('Added to partylist');
    }
    response.send({ youSent: request.params.word });
});
const port = 8080;
server.listen(port, function () {
    console.log(`API is listening on port ${port}`);
});
