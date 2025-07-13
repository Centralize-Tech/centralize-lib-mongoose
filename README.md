# Centralize Lib Mongoose

Una librería TypeScript para conectar y gestionar múltiples bases de datos MongoDB usando Mongoose, optimizada para entornos serverless como AWS Lambda.

## Características

- ✅ Conexiones múltiples a diferentes marketplaces
- ✅ Configuración optimizada para AWS Lambda
- ✅ Manejo automático de reconexiones
- ✅ Retry automático con backoff exponencial
- ✅ Verificación de estado de conexiones
- ✅ Cierre automático de conexiones inactivas
- ✅ Logs detallados para monitoreo

## Instalación

```bash
npm install @Centralize-lib/centralize-lib-mongoose
```

## Configuración

### Variables de Entorno Requeridas

```bash
DB_HOST_CENTRALIZE=mongodb://host:puerto/database
DB_HOST_PARIS=mongodb://host:puerto/database
DB_HOST_FALABELLA=mongodb://host:puerto/database
DB_HOST_RIPLEY=mongodb://host:puerto/database
DB_HOST_MELI=mongodb://host:puerto/database
```

## Uso Básico

```typescript
import { UserCentralize, setMarketplace } from '@Centralize-lib/centralize-lib-mongoose';

// Configurar marketplace
setMarketplace('Centralize');

// Usar el modelo
const user = await UserCentralize.findOne({ loginCode: '12345', status: true });
```

## Uso Avanzado con Manejo de Errores

```typescript
import { 
  executeWithConnection, 
  closeAllConnections,
  isConnectionReady 
} from '@Centralize-lib/centralize-lib-mongoose';

// Verificar estado de conexión
if (!isConnectionReady('Centralize')) {
  console.log('Conexión no está lista');
}

// Ejecutar operación con manejo de errores
const user = await executeWithConnection('Centralize', async (connection) => {
  const UserCentralizeModel = createUserCentralizeModel(connection);
  return UserCentralizeModel.findOne({ loginCode: code, status: true });
});

// Cerrar conexiones al finalizar
await closeAllConnections();
```

## Modelos Disponibles

### Centralize
- `UserCentralize`
- `EnterpriseCentralize`

### Paris
- `UserParis`
- `ProductParis`
- `OrderParis`

### Falabella
- `UserFalabella`
- `ProductFalabella`

### Generales
- `Users`
- `Products`
- `Order`
- `OrderMarketplace`
- `Enterprise`
- `Buyer`
- `Message`

## AWS Lambda

Para uso en AWS Lambda, consulta la [Guía Completa](AWS_LAMBDA_GUIDE.md).

### Configuración Recomendada para Lambda

- **Timeout**: 30 segundos
- **Memoria**: 512 MB o más
- **Variables de entorno**: Configurar todas las DB_HOST_*

## Solución de Problemas

### Error de Timeout

Si encuentras el error `MongooseError: Operation buffering timed out after 10000ms`:

1. Verifica que las variables de entorno estén configuradas correctamente
2. Usa la función `executeWithConnection` para manejo automático de errores
3. Asegúrate de cerrar conexiones con `closeAllConnections()`
4. Revisa los logs de CloudWatch para más detalles

### Verificación de Conexión

```typescript
import { isConnectionReady } from '@Centralize-lib/centralize-lib-mongoose';

if (!isConnectionReady('Centralize')) {
  throw new Error('Conexión a la base de datos no está lista');
}
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar tests
npm test
```

## Versión

Node.js 20+
