import mongoose, { Document } from 'mongoose';

export interface IOrderParis extends Document {
  billingAddress: IBillingAddressParis;
  businessInvoice: mongoose.Schema.Types.Mixed;
  createdAt: string;
  customer: ICustomerParis;
  enterpriseId: string;
  id: string;
  origin: string;
  originInvoiceType: string;
  originOrderDate: string;
  originOrderNumber: string;
  subOrderNumber: string;
  subOrders: Array<ISubOrderParis>;
  users: IUsersOrderParis;
}

export interface IBillingAddressParis {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  stateCode: string;
  countryCode: string;
  phone: string;
  communaCode: string;
  additionalInfo: string;
  pickUpStoreId: string;
}

export interface ICustomerParis {
  id: string;
  name: string;
  email: string;
  documentType: string;
  documentNumber: string;
}

export interface ISubOrderParis {
  id: number;
  subOrderNumber: string;
  statusId: number;
  carrier: string | null;
  trackingNumber: string | null;
  labelUrl: string | null;
  labelId: string;
  deliveryExternalId: string | null;
  dispatchDate: string;
  arrivalDate: string;
  arrivalDateEnd: string;
  effectiveArrivalDate: string | null;
  effectiveDispatchDate: string | null;
  effectiveManifestDate: string | null;
  lastNotificationId: string | null;
  fulfillment: string;
  cost: string;
  updatedAt: string;
  summaryId: string | null;
  facilityConfigId: number;
  bocbolOrderId: string | null;
  isSplitted: boolean | null;
  originOrderNumber: string;
  originInvoiceType: string;
  originOrderDate: string;
  origin: string;
  deliveryOption: {
    id: number;
    name: string;
    description: string;
    translate: string;
  };
  status: {
    id: number;
    name: string;
    description: string;
    translate: string;
    cancelable: boolean;
  };
  shippingAddress: {
    id: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    address3: string | null;
    city: string;
    stateCode: string;
    countryCode: string;
    phone: string;
    communaCode: string;
    additionalInfo: string | null;
    pickUpStoreId: string | null;
  };
  items: Array<IItemParis>;
  tracking: Array<ITrackingParis>;
  label: Array<ILabelParis>;
}

export interface IItemParis {
  id: string;
  sku: string;
  name: string;
  sellerId: string;
  jdaSku: string;
  basePrice: string;
  grossPrice: string;
  priceAfterDiscounts: string;
  taxRate: string;
  size: string;
  sellerSku: string;
  tax: number;
  position: number;
  taxBasis: number;
  commission: number;
  subOrderNumber: string;
  reconditioned: boolean;
  cancellationReasonId: string | null;
  statusId: number;
  imagePath: string;
  itemSize: string;
  returnId: mongoose.Schema.Types.Mixed;
  userId: mongoose.Schema.Types.Mixed;
  shippingCost: mongoose.Schema.Types.Mixed;
  externalCategoryId: string;
  status: {
    id: number;
    name: string;
    description: string;
    translate: string;
    cancelable: boolean;
  };
  cancellationReason: {
    id: Number,
    name: String
  };
  return: mongoose.Schema.Types.Mixed;
  orderId: string;
  categoryObj: {
    id: number;
    name: string;
    code: string;
    weight: number;
    externalCategoryId: string;
  };
}

export interface ITrackingParis {
  id: number;
  carrierStatusId: string | null;
  statusId: number;
  name: string;
  code: string;
  comment: string;
  shipmentId: number;
  createdAt: string;
  originCreatedAt: string;
}

export interface ILabelParis {
  format: string;
  url: string;
}

export interface IUsersOrderParis {
  accessToken: string;
  enterpriseId: string;
  clientId: string;
  email: string;
  first_name: string;
  last_name: string;
  seller_id: string;
  seller_name: string;
  token: string;
}
