import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API documentation for the backend template project',
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
        },
    ], components: {
        responses: {
            ErrorResponse: {
                description: "Server error response",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Error message",
                                },
                                status: {
                                    type: "boolean",
                                    example: false,
                                },
                                data: {
                                    type: "array",
                                    items: {
                                        type: "string",
                                    },
                                    example: [],
                                },
                                errors: {
                                    type: "array",
                                    items: {
                                        type: "string",
                                    },
                                    example: ["Error 1", "Error 2"],
                                },
                            },
                        },
                    },
                },
            },

        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['./src/modules/**/*.controller.ts', './src/modules/**/*.controller.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
