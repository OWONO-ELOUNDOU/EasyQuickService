export interface User {
    firstName: string,
    lastName: string,
    profilePic?: File,
    email: string,
    password: string,
    phone: string,
    street: string,
    twon: string,
    country: string,
    terms?: boolean
}
