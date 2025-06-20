import * as model from './models';

export const modelCreatorsMap = {
  OrderMarketplace: model.createOrderMarketplaceModel,
  Message: model.createMessageModel,
  Products: model.createProductsModel,
  Enterprise: model.createEnterpriseModel,
  Buyer: model.createBuyerModel,
  Order: model.orderModel,
  Users: model.usersModel,

  // Paris
  OrderParis: model.createOrderParisModel,
  ProductParis: model.createProductParisModel,
  UserParis: model.createUserParisModel,

  // Falabella
  UserFalabella: model.createUserFalabellaModel,
  ProductFalabella: model.createProductFalabellaModel,

  // Centralize
  EnterpriseCentralize: model.createEnterpriseCentralizeModel,
  UserCentralize: model.createUserCentralizeModel,
};
