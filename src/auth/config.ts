import { getEnv } from '../utils';


export default {
    apiKey: getEnv("FIREBASE_API_KEY"),
    authDomain: getEnv("FIREBASE_API_DOMAIN"),
    projectId: getEnv("FIREBASE_PROJECT_ID"),
}