import { collection } from "firebase/firestore";
import { db } from "./init-firebase";


export const waterColl = collection(db, 'water')
export const levelColl = collection(db, 'level')