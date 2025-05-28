import { Document } from 'mongoose';

export interface IProductParis extends Document {
  id: string;
  name: string;
  family: IFamilyParis;
  category: ICategoryParis;
  channels: Array<IChannelParis>;
  sellerId: string;
  sellerSku: string;
  refProduct: string;
  attributes: Array<IAttributeParis>;
  status: string;
  variants: Array<IVariantParis>;
}

interface IFamilyParis {
  id: string;
  name: string;
}

interface ICategoryParis {
  id: string;
  src: string;
  name: string;
}

interface IChannelParis {
  id: string;
  url: string;
  name: string;
}

interface IAttributeParis {
  id: string;
  name: string;
  value: string;
  optionName: string;
  optionId: string;
}

interface IVariantParis {
  id: string;
  sku: string;
  skuSeller: string;
  medias: Array<IMediaParis>;
  prices: Array<IPriceParis>;
  attributes: Array<IAttributeParis>;
}

interface IMediaParis {
  position: number;
  src: string;
}

interface IPriceParis {
  id: string;
  value: number;
  type: ITypeParis;
}

interface ITypeParis {
  id: string;
  name: string;
}
