import { getConnection } from './src/dbConnection';
import { modelCreatorsMap } from './src/modelsMap';

export * from './src/types';

let currentEnterpriseId = '1234';

export function setEnterpriseId(eId: string) {
  currentEnterpriseId = eId;
}

function createModelProxy(modelName: keyof typeof modelCreatorsMap) {
  function ModelProxy() {}

  return new Proxy(ModelProxy, {
    get(target: any, propKey: any, receiver: any) {
      const conn = getConnection(currentEnterpriseId);
      const model = modelCreatorsMap[modelName](conn);
      return Reflect.get(model, propKey, receiver);
    },
    construct(target: any, args: any) {
      const conn = getConnection(currentEnterpriseId);
      const model = modelCreatorsMap[modelName](conn);
      return new (model as any)(...args);
    },
  });
}

export const OrderFalabella = createModelProxy('OrderFalabella');
