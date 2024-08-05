const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID_URL),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID_URL),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID_URL),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID_URL),
}
export default conf