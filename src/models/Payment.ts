export interface Payment {
    id: number;
    amount: number;
    date: Date;
    tenantId: number;
    propertyId: number;
    paymentType: 'rent' | 'deposit' | 'maintenance';
    status: 'pending' | 'completed' | 'failed';
    description?: string;
    transactionId?: string;
}