import OpenAI from "openai";

const openai = new OpenAI({
    organization: "",
    apiKey: "",
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Quem é você?"}]
})

console.log(chatCompletion.choices[0].message);