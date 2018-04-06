
export interface Roles {
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
}

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    roles: Roles;
}

export interface Profile {
    uid: string
    user_uid: string
    mailing: boolean
}