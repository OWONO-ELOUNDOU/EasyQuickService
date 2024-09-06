export interface User {
    uid: string;
    firstName: string;
    lastName: string;
    displayName?: string;
    profilePic?: File;
    email: string;
    password: string;
    phoneNumber: string;
    activities: string;
    streetAddress: string;
    twon: string;
    region: string;
    terms?: boolean;
    role: string;
}
