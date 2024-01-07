import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  signUp() {
    return 'Sign Up';
  }
    signIn() {
        return 'Sign In';
    }
}