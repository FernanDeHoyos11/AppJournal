import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEmtyNewNotes, deleteNoteById, savingNote, setActionNotes, setNotes, setSaving, updateNotes } from "./journalSlice";
import { startLoad } from "../../helpers/LoadNotes";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;

        dispatch(savingNote())


        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journalApp/notes`));
        await setDoc(newDoc, newNote)
        newNote.id = newDoc.id;
        dispatch(addEmtyNewNotes(newNote))
        dispatch(setActionNotes(newNote)) 
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const {uid} = getState().auth;
        const {active:note} = getState().journal;
        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        const docRef = doc(FirebaseDB, `${uid}/journalApp/notes/${note.id}`)
        await setDoc(docRef, noteToFirestore, {merge:true})
        dispatch(updateNotes(note))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        console.log(uid)
        if(!uid) throw new Error('El UID no existe')
        const notes = await startLoad(uid)
    console.log(notes)
    dispatch(setNotes(notes))
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        const {active:note} = getState().journal
        const docRef = doc(FirebaseDB, `${uid}/journalApp/notes/${note.id}`)
        await deleteDoc(docRef)
        dispatch(deleteNoteById(note.id))
    }
}

/* 

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const {uid} = getState().auth;
        const {active:note} = getState().journal;
        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFirestore, {merge:true})
        dispatch(updateNotes(note))
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving())
      
        const fileUploadPromises = [];
        for (const file of files){
            fileUploadPromises.push(fileUpload(file))
        }
        const URLPhotos = await Promise.all(fileUploadPromises)
        dispatch(setPhotosActiveNote(URLPhotos))
    }
}

 */