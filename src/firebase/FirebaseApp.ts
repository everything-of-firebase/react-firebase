import {FirebaseApp, initializeApp} from "firebase/app"
// NOTE: Current Web App's Firebase configuration
import firebaseConfig from '../resources/config/firebaseConfig.json'

// NOTE: Initialize Firebase
// const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

const initFirebaseApp: () => FirebaseApp = () => {
    console.info('initFirebaseApp')
    return initializeApp(firebaseConfig)
}

export default initFirebaseApp