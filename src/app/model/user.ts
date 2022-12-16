export class User {
  id: number;
  username: string;
  email: string;
  mobile: number;
  country: string;
  type: string;
  status: boolean;
  createDate: number;

  constructor(
    $id: number,
    $username: string,
    $email: string,
    $mobile: number,
    $country: string,
    $type: string,
    $status: boolean,
    $creationDate: number
  ) {
    this.id = $id;
    this.username = $username;
    this.email = $email;
    this.mobile = $mobile;
    this.country = $country;
    this.type = $type;
    this.status = $status;
    this.createDate = $creationDate;
  }
}
