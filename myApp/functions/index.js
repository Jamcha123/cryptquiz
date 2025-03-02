import * as functions from 'firebase-functions'
import openai from 'openai'

export const targets = functions.https.onRequest({cors: true}, async (req, res) => {
    const ai = new openai({
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
