import { Document } from 'mongoose';
export interface IOrderMELI extends Document {
    id: number;
    date_created: Date | null;
    last_updated: Date | null;
    date_closed: Date | null;
    pack_id: number | null;
    buying_mode: string | null;
    total_amount: number | null;
    paid_amount: number | null;
    order_items: IOrderItemMeli[] | null;
    currency_id: string | null;
    payments: IPaymentOrderMELI[] | null;
    shipping: IShippingOrder | null;
    status: string | null;
    tags: string[] | null;
    internal_tags: string[] | null;
    static_tags: string[] | null;
    feedback: IFeedback | null;
    seller: ISellerShippingMELI | null;
    buyer: IBuyer | null;
    cancel_detail: ICancelDetail | null;
    order_request: IOrderRequest | null;
    order_last_updated: Date;
    shipping_last_updated: Date;
}
interface IOrderItemMeli {
    item: IItemMeli;
    quantity: number;
    unit_price: number;
    full_unit_price: number;
    full_unit_price_currency_id: string;
    currency_id: string;
    listing_type_id: string;
}
interface IItemMeli {
    id: string;
    title: string;
    category_id: string;
    variation_id: number;
    seller_custom_field: null;
    variation_attributes: IVariationAttributeMeli[];
    warranty: string;
    condition: string;
    seller_sku: string;
    user_product_id: string;
}
interface IVariationAttributeMeli {
    name: string;
    id: string;
    value_id: number;
    value_name: string;
}
interface IBuyer {
    id: number;
    nickname: string;
    first_name: string;
    last_name: string;
    billing_info: IBillingInfo;
}
interface IBillingInfo {
    id: string;
}
interface IFeedback {
    seller: any;
    buyer: any;
}
interface IOrderRequest {
    change: any;
    return: any;
}
interface IPaymentOrderMELI {
    id: number;
    order_id: number;
    payer_id: number;
    collector: ISellerShippingMELI;
    reason: string;
    site_id: string;
    payment_method_id: string;
    currency_id: string;
    installments: number;
    issuer_id: string;
    coupon_id: any;
    activation_uri: any;
    operation_type: string;
    payment_type: string;
    available_actions: string[];
    status: string;
    status_code: any;
    status_detail: string;
    transaction_amount: number;
    transaction_amount_refunded: number;
    taxes_amount: number;
    shipping_cost: number;
    coupon_amount: number;
    overpaid_amount: number;
    total_paid_amount: number;
    installment_amount: any;
    deferred_period: any;
    date_approved: Date;
    transaction_order_id: any;
    date_created: Date;
    date_last_modified: Date;
    marketplace_fee: number;
    reference_id: any;
    authorization_code: any;
}
interface ISellerShippingMELI {
    id: number;
}
interface ICancelDetail {
    group: string;
    code: string;
    description: string;
    requested_by: string;
    date: Date;
    application_id: number;
}
export interface IShippingOrder {
    substatus_history: ISubstatusHistory[];
    snapshot_packing: ISnapshotPacking;
    receiver_id: number;
    base_cost: number;
    status_history: IStatusHistory;
    type: string;
    return_details: any;
    sender_id: number;
    mode: string;
    order_cost: number;
    service_id: number;
    shipping_items: IShippingItem[];
    tracking_number: string;
    id: number;
    tracking_method: string;
    last_updated: Date;
    items_types: string[];
    comments: any;
    substatus: string;
    date_created: Date;
    date_first_printed: Date;
    created_by: string;
    tags: string[];
    return_tracking_number: number | null;
    carrier_info: any;
    market_place: string;
    receiver_address: IErAddress;
    customer_id: any;
    order_id: number;
    quotation: any;
    status: string;
    logistic_type: string;
}
interface IErAddress {
    country: ICity;
    city: ICity;
    geolocation_type: string;
    latitude: number;
    municipality: ICity;
    location_id: number;
    street_name: string;
    zip_code: any;
    intersection: any;
    receiver_name: string | null;
    id: number;
    state: ICity;
    longitude: number;
    address_line: string;
    types: string[];
    scoring: number;
    agency: any;
    version: any;
    geolocation_source: string;
    delivery_preference: string | null;
    node: any;
    street_number: string;
    comment: any | string;
    neighborhood: ICity;
    geolocation_last_updated: Date;
    receiver_phone: string | null;
}
interface ICity {
    id: any | string;
    name: any | string;
}
interface IShippingItem {
    quantity: number;
    dimensions_source: IDimensionsSource;
    description: string;
    id: string;
    bundle: any;
    user_product_id: string;
    sender_id: number;
    dimensions: string;
}
interface IDimensionsSource {
    origin: string;
    id: string;
}
interface ISnapshotPacking {
    snapshot_id: string;
    pack_hash: string;
}
interface IStatusHistory {
    date_shipped: Date | null;
    date_returned: Date | null;
    date_delivered: Date | null;
    date_first_visit: Date | null;
    date_not_delivered: Date | null;
    date_cancelled: Date | null;
    date_handling: Date;
    date_ready_to_ship: Date;
}
interface ISubstatusHistory {
    date: Date;
    substatus: string;
    status: string;
}
export {};
