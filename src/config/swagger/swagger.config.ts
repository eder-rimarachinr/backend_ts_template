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
            url: 'http://localhost:3000/api', // Cambia a tu servidor en producción
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/modules/**/*.controller.ts', './src/modules/**/*.controller.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;