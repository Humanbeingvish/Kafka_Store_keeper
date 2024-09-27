import { Kafka } from "kafkajs";

const kafka = new Kafka ({
    clientId:'stock-app',
    brokers:['localhost:9092']
});

const consumer = kafka.consumer({groupId:'stock-app-group'});

const receiveMessage=async ()=>{
    await consumer.subscribe({
        topic:'stock',
        fromBeginning:true
        })
    await consumer.run({
        eachMessage:async ({topic ,partition,message})=>{
            console.log(`Received: ${message.value.toString()}`)
        }
    })
}

receiveMessage();