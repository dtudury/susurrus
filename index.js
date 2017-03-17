"use strict";

let all_connections = new Set();

class Client {
    constructor(name) {
        this.name = name;
        this.max_connections = 3;
        this.connections = new Set();
    }

    add_connection_candidate(connection) {
        this.connections.add(connection);
    }
}

let clients = new Array(10).fill().map((e, i) => new Client(i));


console.log(clients);

let {a, b} = {a:1, b:2};
console.log(a, b);
