export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expireIn: string;
    localId: string;
    registered?: boolean
}
