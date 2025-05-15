import * as model from './models';

export const modelCreatorsMap = {
  OrderMarketplace: model.createOrderMarketplaceModel,
  Message: model.createMessageModel,
  Products: model.createProductsModel,
};
