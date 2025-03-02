import * as functions from 'firebase-functions'
import openai from 'openai'

export const targets = functions.https.onRequest({cors: true}, async (req, res) => {
    const ai = new openai({
        apiKey: "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", 
    })
    const text = req.query.text; 
    const response = await ai.chat.completions.create({
        model: "gpt-4o", 
        messages: [{
            role: "user", 
            content: [
                {type: "text", text: "write a 20 word description about " + text.toString("utf-8")}, 
            ]
        }]
    })
    res.status(200).send(response.choices[0].message["content"])
    return res.end(); 
})
