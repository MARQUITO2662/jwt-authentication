# JWT Authentication System

## Descripción
Este proyecto implementa un sistema de autenticación utilizando tokens JWT en una aplicación Node.js con Express.js.

## Configuración Inicial
1. Clonar el repositorio.
2. Instalar las dependencias:
    ```sh
    npm install
    ```

## Uso
### Endpoints
- **POST /login**: Autentica a un usuario y devuelve un token JWT.
    - Request:
        ```json
        {
            "username": "user1",
            "password": "password1"
        }
        ```
    - Response:
        ```json
        {
            "token": "jwt-token-aqui"
        }
        ```

- **GET /verify**: Verifica la validez de un token JWT.
    - Headers:
        - Authorization: Bearer `jwt-token-aqui`
    - Response:
        - Si el token es válido:
            ```json
            {
                "message": "Token is valid",
                "user": {
                    "username": "user1",
                    "iat": 1615281281,
                    "exp": 1615283081
                }
            }
            ```
        - Si el token es inválido o ha expirado:
            ```json
            {
                "message": "Invalid or expired token"
            }
            ```

## Consideraciones de Seguridad
- Asegúrese de mantener segura la clave secreta utilizada para firmar los tokens JWT.
- Implemente HTTPS para cifrar las comunicaciones y proteger los tokens en tránsito.
- Considere la posibilidad de añadir una lista negra de tokens para manejar la revocación de tokens.
