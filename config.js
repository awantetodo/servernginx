import "dotenv/config"

export const firebaseData =  {
    type: "service_account",
    project_id: "",
    private_key_id: `${process.env.FB_PRIVATE_KEY_ID.replace(/\\n/g, '\n')}`,
    private_key: `${process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n')}`,
    client_email: "",
    client_id: "",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-17cdn%40basedeprueba-8e5c0.iam.gserviceaccount.com"
}