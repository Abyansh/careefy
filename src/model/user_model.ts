import {User} from "@prisma/client";
export type UserResponse = {
    username: string;
    email : string;
    no_telp? : string;
    token? : string;
}

export type CreateUserRequest = {
    username: string;
    email : string;
    password : string;
}

export type LoginUserRequest = {
    username : string;
    password : string;
}

export function toUserResponse(user: User) : UserResponse {
    return {
        username: user.username,
        email: user.email
    };
}