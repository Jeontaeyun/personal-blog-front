export interface IUser {
    id: string;
    nickname: string;
    userId: string;
    password: string;
    grant: USER_GRANT_ENUM;
    createdAt?: number;
    updatedAy?: number;
}

export enum USER_GRANT_ENUM {
    ADMIN = "ADMIN",
    GUEST = "GUEST"
}
