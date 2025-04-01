import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { ApiResponse } from "../../utils/apiResponse";
import { HttpStatusCode } from "../../utils/httpStatusCodes";

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticación de usuarios
 */
export class AuthController {
    private authService: AuthService;

    constructor() {
        // Instanciamos el servicio de autenticación
        this.authService = new AuthService();

        this.signin = this.signin.bind(this);
        this.signup = this.signup.bind(this);
    }

    /**
     * @swagger
     * /auth/login:
     *   post:
     *     tags:
     *       - Auth
     *     description: Inicia sesión con las credenciales proporcionadas
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *                 example: "user@example.com"
     *               password:
     *                 type: string
     *                 example: "password123"
     *     responses:
     *       200:
     *         description: Login exitoso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: true
     *                 message:
     *                   type: string
     *                   example: "Login exitoso"
     *                 data_row:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: integer
     *                       example: 1
     *                     email:
     *                       type: string
     *                       example: "user@example.com"
     *                     name:
     *                       type: string
     *                       example: "User Name"
     *       400:
     *         $ref: '#/components/responses/ErrorResponse'
     *       500:
     *         $ref: '#/components/responses/ErrorResponse'
     */
    public async signin(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.authService.signin(req.body);
            res.status(HttpStatusCode.OK).json(ApiResponse.success("Login exitoso", result, HttpStatusCode.OK));
        } catch (error) {
            next(error);
        }
    }

    /**
     * @swagger
     * /auth/register:
     *   post:
     *     tags:
     *       - Auth
     *     description: Registra un nuevo usuario con los datos proporcionados
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *                 example: "user@example.com"
     *               password:
     *                 type: string
     *                 example: "password123"
     *               name:
     *                 type: string
     *                 example: "John Doe"
     *     responses:
     *       201:
     *         description: Registro exitoso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: true
     *                 message:
     *                   type: string
     *                   example: "Registro exitoso"
     *                 data_row:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: integer
     *                       example: 1
     *                     email:
     *                       type: string
     *                       example: "user@example.com"
     *                     name:
     *                       type: string
     *                       example: "John Doe"
     *       400:
     *         $ref: '#/components/responses/ErrorResponse'
     *       500:
     *         $ref: '#/components/responses/ErrorResponse'
     */
    public async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.authService.signup(req.body);

            res.status(HttpStatusCode.CREATED)
                .json(
                    ApiResponse
                        .success(
                            "Registro exitoso",
                            result,
                            HttpStatusCode.CREATED
                        )
                );
        } catch (error) {
            next(error);
        }
    }
}
