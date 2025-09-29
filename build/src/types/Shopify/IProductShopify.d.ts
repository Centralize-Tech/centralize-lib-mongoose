import { Document } from 'mongoose';
export interface IProductType extends Document {
    id: number;
    description: string;
    created_at: Date;
    handle: string;
    product_type: string;
    published_at: Date;
    title: string;
    updated_at: Date;
    vendor: string;
    status: string;
    published_scope: string;
    tags: string;
    variants: IVariantProduct[];
    options: IOptionsProduct[];
    images: IImageProduct[];
    image: IImageProduct;
    category: ICategoryProduct;
}
interface IVariantProduct {
    id: number;
    barcode: string;
    compare_at_price: string | null;
    created_at: Date;
    inventory_policy: string;
    position: number;
    price: string;
    product_id: number;
    sku: string;
    taxable: boolean;
    title: string;
    updated_at: Date;
    option1: string;
    option2: string;
    option3: string;
    image_id: number | null;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
}
interface IOptionsProduct {
    id: number;
    name: string;
    product_id: number;
    position: number;
    values: string[];
}
interface IImageProduct {
    id: number;
    product_id: number;
    position: number;
    created_at: Date;
    updated_at: Date;
    alt: string | null;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
}
interface ICategoryProduct {
    name: string;
    full_name: string;
}
export {};
