import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'; 
import { initializeApp } from 'firebase/app'; 
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'

const config = {
    apiKey: "AIzaSyD3Hg4lfYsAAlgLw0PnMR3dO74-Qfdjzc8",
    authDomain: "cryptquiz-172dd.firebaseapp.com",
    projectId: "cryptquiz-172dd",
    storageBucket: "cryptquiz-172dd.firebasestorage.app",
    messagingSenderId: "213710074207",
    appId: "1:213710074207:web:5264df2acf9105d149c6ea",
    measurementId: "G-4NBE6D6531"
}

const app = initializeApp(config)

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6Lcw3ekqAAAAAL7RyY_rkRqpb3_BVWCH5beOkcQy"), 
    isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app); 
auth.useDeviceLanguage()

signInAnonymously(auth)

onAuthStateChanged(auth, (user) => {
    if(user === null){
        console.log("user, not found")
    }else{
        console.log("user logged in")
    }
})