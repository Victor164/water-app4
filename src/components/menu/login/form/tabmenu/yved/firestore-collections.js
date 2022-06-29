import { collection } from "firebase/firestore";
import { db } from "./init-firebase";


export const waterColl = collection(db, 'water')
export const levelColl = collection(db, 'level')
export const level1Coll = collection(db, 'level1')
export const mostyColl = collection(db, 'gabmosty')