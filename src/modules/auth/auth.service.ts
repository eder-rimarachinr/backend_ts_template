export class AuthService {
    async login(data: any) {
        return { message: "Login exitoso", data };
    }

    async register(data: any) {
        return { message: "Registro exitoso", data };
    }
}
