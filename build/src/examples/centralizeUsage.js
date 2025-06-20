"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleUsage = exampleUsage;
exports.createTestData = createTestData;
const centralizeService_1 = require("../services/centralizeService");
// Ejemplo de uso del servicio CentralizeService
function exampleUsage(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const centralizeService = new centralizeService_1.CentralizeService(connection);
        try {
            // Ejemplo 1: Buscar un usuario por loginCode
            const user = yield centralizeService.findUserByLoginCode('USER123');
            if (user) {
                console.log('Usuario encontrado:', {
                    name: user.name,
                    rol: user.rol,
                    enterpriseId: user.enterpriseId,
                    status: user.status
                });
            }
            // Ejemplo 2: Buscar una empresa por loginCode
            const enterprise = yield centralizeService.findEnterpriseByLoginCode('ENT456');
            if (enterprise) {
                console.log('Empresa encontrada:', {
                    companyName: enterprise.companyName,
                    email: enterprise.email,
                    marketplace: enterprise.marketplace,
                    status: enterprise.status
                });
            }
            // Ejemplo 3: Buscar usuario y empresa por el mismo loginCode
            const result = yield centralizeService.findUserAndEnterpriseByLoginCode('LOGIN789');
            console.log('Resultado de búsqueda:', {
                userExists: !!result.user,
                enterpriseExists: !!result.enterprise,
                user: result.user ? {
                    name: result.user.name,
                    rol: result.user.rol
                } : null,
                enterprise: result.enterprise ? {
                    companyName: result.enterprise.companyName,
                    email: result.enterprise.email
                } : null
            });
            // Ejemplo 4: Verificar si un loginCode existe
            const exists = yield centralizeService.loginCodeExists('CHECK123');
            console.log('LoginCode existe:', exists);
            // Ejemplo 5: Obtener todos los usuarios activos
            const activeUsers = yield centralizeService.getAllActiveUsers();
            console.log('Usuarios activos:', activeUsers.length);
            // Ejemplo 6: Obtener todas las empresas activas
            const activeEnterprises = yield centralizeService.getAllActiveEnterprises();
            console.log('Empresas activas:', activeEnterprises.length);
        }
        catch (error) {
            console.error('Error en el ejemplo:', error);
        }
    });
}
// Función para crear datos de prueba
function createTestData(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const centralizeService = new centralizeService_1.CentralizeService(connection);
        try {
            // Crear un usuario de prueba
            const userModel = centralizeService['userModel'];
            yield userModel.create({
                enterpriseId: 'ENT001',
                rol: 'admin',
                status: true,
                rut: '12345678-9',
                name: 'Juan Pérez',
                loginCode: 'USER123'
            });
            // Crear una empresa de prueba
            const enterpriseModel = centralizeService['enterpriseModel'];
            yield enterpriseModel.create({
                name: 'María',
                lastName: 'González',
                email: 'maria@empresa.com',
                phone: '+56912345678',
                rut: '98765432-1',
                companyName: 'Empresa Ejemplo SPA',
                marketplace: 'Falabella',
                status: true,
                loginCode: 'ENT456'
            });
            console.log('Datos de prueba creados exitosamente');
        }
        catch (error) {
            console.error('Error creando datos de prueba:', error);
        }
    });
}
