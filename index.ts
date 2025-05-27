import { getConnection } from './src/dbConnection';
import { modelCreatorsMap } from './src/modelsMap';

export * from './src/types';

let marketplace = '1234';

export function setMarketplace(mId: string) {
  marketplace = mId;
}

function createModelProxy(modelName: keyof typeof modelCreatorsMap) {
  function ModelProxy() {}

  return new Proxy(ModelProxy, {
    get(target: any, propKey: any, receiver: any) {
      const conn = getConnection(marketplace);
      const model = modelCreatorsMap[modelName](conn);
      return Reflect.get(model, propKey, receiver);
    },
    
    construct(target: any, args: any) {
      const conn = getConnection(marketplace);
      const model = modelCreatorsMap[modelName](conn);
      return new (model as any)(...args);
    },
  });
}

export const OrderMarketplace = createModelProxy('OrderMarketplace');
export const Message = createModelProxy('Message');
export const Products = createModelProxy('Products');
export const Enterprise = createModelProxy('Enterprise');
export const Buyer = createModelProxy('Buyer');
export const Order = createModelProxy('Order');
export const Users = createModelProxy('Users');
