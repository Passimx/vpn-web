import { Api, IData } from '../index.ts';
import { CreateInvoiceType, CreateTonInvoiceType } from '../../types/api/invoices.ts';

export const createSberInvoice = (body: CreateInvoiceType): Promise<IData<string>> => {
    return Api<string>('/invoices/sber', { method: 'POST', body });
};

export const createWechatInvoice = (body: CreateInvoiceType): Promise<IData<string>> => {
    return Api<string>('/invoices/wechat', { method: 'POST', body });
};

export const createTonInvoice = (body: CreateTonInvoiceType): Promise<IData<string>> => {
    return Api<string>('/invoices/ton', { method: 'POST', body });
};
