// PARTE 1 QUE SÓ FAZ REQUISIÇÃO NA API DO CHATGPT

// import OpenAI from "openai";

// const openai = new OpenAI({
//     organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
//     apiKey: "sk-proj-LgpcbVzrYIzejPpooWmnT3BlbkFJ0Mc0HUYRvYF7Xjxj6d4H",
// });

// const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{"role": "user", "content": "Quem é você?"}]
// })

// console.log(chatCompletion.choices[0].message);





// PARTE 2 - CRIAR O BACK-END COMPLETO COM API LOCAL


import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// CRIAR O PROJETO BACK-END A PARTIR DAQUI...

const openai = new OpenAI({
    organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
    apiKey: "sk-proj-LgpcbVzrYIzejPpooWmnT3BlbkFJ0Mc0HUYRvYF7Xjxj6d4H",
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Quem é você?"}]
})

console.log(chatCompletion.choices[0].message);