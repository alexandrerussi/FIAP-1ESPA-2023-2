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

const openai = new OpenAI({
    organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
    apiKey: "sk-proj-HluZNz1Np1fAjTwDfZzkT3BlbkFJdWC2NBCK2Y1ifT4Sgr9q",
});

// CRIAR O PROJETO BACK-END A PARTIR DAQUI...

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// CRIANDO ENDPOINT PARA ENVIAR MENSAGENS A API DO CHATGPT
app.post("/sendMessage", async (req, res) => {
    const { messages } = req.body; // é oq veio do meu front

    // vc pode trocar pela API do Gemini - Google
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "Você responderá todas as perguntas como se fosse o presidente da Rússia, Vladimir Putin"},
            ...messages
        ]
    });
    
    console.log(chatCompletion.choices[0].message);

    // é a resposta que vou retornar para o meu front-end
    // isso só é possível pq to fazendo via metodo POST!!!
    res.json({
        chat_completion: chatCompletion.choices[0]
    });
});

app.listen(port, () => {
    console.log(`Servidor aberto executando em http://localhost:${port}/`);
});

