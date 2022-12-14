import { MemberAuthorityEnum } from './memberSearchResponse';

export class Member {
    private login: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private userRoles: MemberAuthorityEnum[];
    private regionIds?: number[];

    constructor(formData) {
        this.login = formData.email.split("@")[0]
        this.firstName = formData.firstName;
        this.lastName = formData.lastName;
        this.email = formData.email;
        this.userRoles = formData.userRoles;
        this.regionIds = formData.regions;
    }
}