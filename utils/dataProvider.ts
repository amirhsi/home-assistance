import admin from "firebase-admin";
import serviceAccount from "./../firebase.json";

if (!admin.apps.length) {
  admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://nextjs-products.appspot.com/",
    databaseURL: "https://nextjs-products-default-rtdb.firebaseio.com",
  });
}
export const provide = async (type: "categories") => {
  const db = admin.database();

  const dataSnapshot = await db.ref(type).once("value");
  const incommingData = dataSnapshot.val();
  return incommingData;
};

export const dataProvider = {
  provide,
};
