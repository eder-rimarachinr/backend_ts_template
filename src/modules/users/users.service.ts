export class UsersService {
    async getAll() {
        return { message: "Todos los usuarios" }
    }

    async create(data: any) {
        return { message: "Usuario creado", data }
    }
}