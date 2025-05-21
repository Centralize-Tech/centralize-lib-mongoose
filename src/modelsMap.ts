import * as model from './models';

export const modelCreatorsMap = {
  OrderMarketplace: model.createOrderMarketplaceModel,
  Message: model.createMessageModel,
  Products: model.createProductsModel,
  Enterprise: model.createEnterpriseModel,
  Buyer: model.createBuyerModel,
  Order: model.orderModel
};
