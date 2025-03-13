import * as functions from 'firebase-functions'
import OpenAI from 'openai/index.mjs'
import { createHash, randomBytes } from 'crypto'

const ai = new OpenAI({
    apiKey: ""
})
const lists = ["HMAC hashes", "E2EE encryption", "RSA encryption", "AES encryption", "hybrid cryptosystems"]
const items = async () => {
    const response = await ai.chat.completions.create({
        model: "gpt-4o", 
        messages: [{
            role: "user", 
            content: [
                {type: "text", text: "write a 20 word description about " + lists[Math.floor(Math.random() * lists.length + 0)]}
            ]
        }]
    })
    return response.choices[0].message["content"].split(" ")
}
const types = ["SHA1", "SHA256", "SHA224", "MD5"]

export const hashes = functions.https.onRequest({cors: true}, (req, res) => {
    const key = randomBytes(16)
    items().then((value) => {
        let target = types[Math.floor(Math.random() * types.length + 0)]
        let word = value[Math.floor(Math.random() * value.length + 0)]
        word.split("")
        
        const encrypt = createHash(target, key).update(word).digest("hex");
        const myDict = {"plaintext": word, "hashed": encrypt, "type": target, "wordlist": value}

        res.status(200).json(myDict)
        return res.end()
    })
})