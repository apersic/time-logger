import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { TimeLog } from "./types";

const db = getFirestore(firebase_app);
export default async function addData(
  colllection: string,
  userId: string,
  data: TimeLog
) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, userId), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
