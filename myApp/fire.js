import { initializeApp } from 'firebase/app'; 
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'; 
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'

const config = {
    apiKey: "AIzaSyBVoNU3rcxrf2KU5iqNm5XPnzXEIAW-CEQ",
    authDomain: "puzzels-28637.firebaseapp.com",
    projectId: "puzzels-28637",
    storageBucket: "puzzels-28637.firebasestorage.app",
    messagingSenderId: "409437699895",
    appId: "1:409437699895:web:83aa8c8bfebce2c4e2a4b2",
    measurementId: "G-JWQ7QH4EN4"
}
const app = initializeApp(config)

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LcVOOYqAAAAAKmI7c7lrEByRJvqZFmTI82EQksq"), 
    isTokenAutoRefreshEnabled: true, 
})

const auth = getAuth(app)
auth.useDeviceLanguage()

signInAnonymously(auth)
onAuthStateChanged(auth, (user) => {
    if(user === null){
        console.log("user, not found")
    }else{
        console.log("user, logged in")
    }
})