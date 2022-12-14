import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver,

} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot
} from 'firebase/firestore';
import { Product } from "../../store/products/product.types";
import { CartItem } from "../../store/cart/cart.types";


const firebaseConfig = {
    apiKey: "AIzaSyBZGRxew_TVCY8RdX0DdDyDdaRJp8q1a78",
    authDomain: "crwn-ecommerce-db-721e4.firebaseapp.com",
    projectId: "crwn-ecommerce-db-721e4",
    storageBucket: "crwn-ecommerce-db-721e4.appspot.com",
    messagingSenderId: "550078725",
    appId: "1:550078725:web:56a6fd28640b928d930f6c",
    measurementId: "G-EJ63P03P54"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
console.log(auth);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export type ObjectsToAdd = {
    title: string
}
export const addCollectionAndDocuments = async<T extends ObjectsToAdd>(
    collectionKey: string,
    objectsToAdd: T[]): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('done');

}
export const getCategoriesAndDocuments = async (): Promise<Product[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Product)

}


export type AdditionalInfo = {
    displayName?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    countyRegion?: string;
    address?: string;
    suburb?: string;
    state?: string;
    postcode?: string;
    cartItems?: CartItem[];
}

export type UserData = {
    displayName?: string;
    creatDate?: Date;
    email?: string;
    photoURL?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    countyRegion?: string;
    address?: string;
    suburb?: string;
    state?: string;
    postcode?: string;
    cartItems?: CartItem[];
}




export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {
            displayName,
            email,
            photoURL,

        } = userAuth;
        const creatDate = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                creatDate,
                photoURL,
                ...additionalInfo
            });
        } catch (error) {
            console.log('error', error);
        }
    }
    // return userDocRef;
    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const updateUserDocumentFromAuth = async (
    userAuth: User,
    additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
        try {
            await updateDoc(userDocRef, {
                ...additionalInfo
            });
        } catch (error) {
            console.log('error', error);
        }
    }
    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const SignInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}
export const SignOutUser = () => signOut(auth);
export const onAuthStateChangedLisener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise(
        (resolve, reject) => {
            const unsubcribe = onAuthStateChanged(
                auth,
                (userAuth) => {
                    unsubcribe();
                    resolve(userAuth);
                },
                reject
            );
        }
    );
}

