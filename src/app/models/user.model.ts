import { Role } from './role.model';

export type User = {
  uuid: String,
  avatar: string,
  avatar_url: string,
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  address: string,
  address2: string,
  suburb: string,
  city: string,
  state: string,
  post_code: string,
  country: string,
  password: string,
  balance: Number,
  password_confirmation: string,
  role: Role;
}
