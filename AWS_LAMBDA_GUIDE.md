# Guía de Uso en AWS Lambda

## Problema del Timeout de Conexión

El error `MongooseError: Operation buffering timed out after 10000ms` ocurre cuando:
1. La conexión a MongoDB no se establece correctamente
2. El buffer de Mongoose está lleno y no puede procesar más operaciones
3. La conexión se perdió y Mongoose está intentando reconectarse

## Soluciones Implementadas

### 1. Configuración Optimizada para Lambda

Se han agregado opciones de conexión específicas para AWS Lambda:
- `bufferCommands: false` - Deshabilita el buffering
- `maxPoolSize: 1` - Pool pequeño para Lambda
- `serverSelectionTimeoutMS: 5000` - Timeout rápido para selección de servidor
- `connectTimeoutMS: 10000` - Timeout para conexión inicial

### 2. Manejo de Reconexión Automática

La librería ahora:
- Verifica el estado de la conexión antes de usarla
- Limpia conexiones inactivas automáticamente
- Reintenta operaciones fallidas con backoff exponencial

### 3. Funciones Helper

```typescript
import { 
  UserCentralize, 
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
  const model = createUserCentralizeModel(connection);
  return model.findOne({ loginCode: code, status: true });
});

// Cerrar conexiones al finalizar (importante para Lambda)
await closeAllConnections();
```

## Uso Recomendado en tu API

### Opción 1: Usar la función helper (Recomendado)

```typescript
import { executeWithConnection } from '@Centralize-lib/centralize-lib-mongoose';
import { createUserCentralizeModel } from '@Centralize-lib/centralize-lib-mongoose';

async getUserByCode(code: string): Promise<IUserCentralize> {
  console.log(`Obteniendo información de la DB - usuario ${code}`);
  
  return executeWithConnection('Centralize', async (connection) => {
    const UserCentralizeModel = createUserCentralizeModel(connection);
    return UserCentralizeModel.findOne({ loginCode: code, status: true });
  });
}
```

### Opción 2: Usar el modelo directamente (con verificación)

```typescript
import { UserCentralize, isConnectionReady } from '@Centralize-lib/centralize-lib-mongoose';

async getUserByCode(code: string): Promise<IUserCentralize> {
  console.log(`Obteniendo información de la DB - usuario ${code}`);
  
  // Verificar conexión antes de usar
  if (!isConnectionReady('Centralize')) {
    throw new Error('Conexión a la base de datos no está lista');
  }
  
  return UserCentralize.findOne({ loginCode: code, status: true });
}
```

## Configuración de Variables de Entorno

Asegúrate de que estas variables estén configuradas en tu Lambda:

```bash
DB_HOST_CENTRALIZE=mongodb://tu-host:puerto/tu-database
DB_HOST_PARIS=mongodb://tu-host:puerto/tu-database
DB_HOST_FALABELLA=mongodb://tu-host:puerto/tu-database
# ... otras variables según necesites
```

## Manejo de Errores en Lambda

```typescript
export const handler = async (event: any) => {
  try {
    // Tu lógica aquí
    const user = await getUserByCode('12345');
    return { statusCode: 200, body: JSON.stringify(user) };
  } catch (error) {
    console.error('Error en Lambda:', error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: 'Error interno del servidor' }) 
    };
  } finally {
    // Importante: cerrar conexiones al finalizar
    await closeAllConnections();
  }
};
```

## Configuración de Timeout en Lambda

Asegúrate de que tu Lambda tenga suficiente timeout:
- **Timeout recomendado**: 30 segundos
- **Memoria recomendada**: 512 MB o más

## Monitoreo

La librería ahora incluye logs detallados:
- Creación de conexiones
- Estados de conexión
- Errores de conexión
- Reintentos automáticos

Revisa los logs de CloudWatch para diagnosticar problemas de conexión. 