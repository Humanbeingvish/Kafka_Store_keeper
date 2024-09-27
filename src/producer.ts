import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:'store-keeper',
    brokers:['localhost:9092']
});

const producer = kafka.producer();

const sendMessage= async()=>{
     await producer.connect();
    await producer.send({
        topic:'stock',
        messages:[{value:'the value the stock is 2 '}]

    })
    console.log('Message Delivered')
    producer.disconnect().then(()=>{
        console.log('The producer is disconncted');
        
    })
};

sendMessage();