export enum MemberAuthorityEnum {
	role_admin = "role_admin",
	role_user = "role_user",
	role_reviewer = "role_reviewer",
	role_super_admin = "role_super_admin",
	role_device_admin = "role_device_admin"
}

export enum UserTypes {
	LABELING, RDM
}
export class memberSearchResponse {
	private id: BigInteger;

	private login: string;

	private firstName: string;

	private lastName: string;

	private email: string;

	private activated: boolean;

	private createdDate: bigint;

	private modifiedDate: bigint;

	private createdBy: bigint;

	private modifiedBy: bigint;

	private lastLoggedIn: bigint;

	private userRoles: MemberAuthorityEnum;

	private deleted: boolean;

	private userTypes: Array<UserTypes>

}