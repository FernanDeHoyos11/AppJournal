import { collection,  getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const startLoad = async (uid = '') => {
    if(!uid) throw new Error('El UID no existe')
    const collectionRef = collection(FirebaseDB, `${uid}/journalApp/notes`);
    const docs = await getDocs(collectionRef)

    const notes = []
    docs.forEach(doc => {
        notes.push({id:doc.id, ...doc.data()})
    });
    return notes;
}