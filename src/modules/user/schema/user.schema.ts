import { Roles } from '../enum';

export class UserSchema {
    id: string;

    firstName: string;

    lastName: string;

    role: Roles;

    email: string;
}
