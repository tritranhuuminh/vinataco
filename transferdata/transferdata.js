const mqtt = require('mqtt')

const host = 'mqtt://abd7ba6159b54c1295f34d0d15b0698b.s1.eu.hivemq.cloud:8883'

const options = {
    clean: true,
    protocol: 'mqtts',
    username: 'tritranhuuminh',
    password: 'Trikaka1994'
}

const client = mqtt.connect(host, options)

const transferData = () => {
    client.on('connect', function () {
        console.log('Connected Server MQTT')
    })
    client.subscribe('tritranhuuminh/unexpected')
    client.subscribe('tritranhuuminh/connected')
    client.subscribe('tritranhuuminh/status')
    client.subscribe('tritranhuuminh')
    client.on('message', function (topic, message, packet) {
        const number = JSON.parse(message)
        socketIo.emit("sendDataServer", number);
        // console.log(topic + ':' + JSON.stringify(number))
    });
    client.on('error', function (error) {
        console.log(error)
    })
}



// Socket IO
const express = require('express')
const app = express()
const http = require("http");
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});

socketIo.on("connection", (socket) => { ///Handle khi có connect từ client tới
    console.log("New client connected" + socket.id);


    socket.on("sendDataClient", function (data) { // Handle khi có sự kiện tên là sendDataClient từ phía client
        socketIo.emit("sendDataServer", { data });// phát sự kiện  có tên sendDataServer cùng với dữ liệu tin nhắn từ phía server
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected"); // Khi client disconnect thì log ra terminal.
    });
});

exports.transferData = transferData
exports.server = server
exports.app = app