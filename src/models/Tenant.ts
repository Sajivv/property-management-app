export interface Tenant {
    id: number;
    name: string;
    contactInfo: string;
    email: string;
    phoneNumber: string;
    leaseStartDate?: Date;
    leaseEndDate?: Date;
    propertyId?: number;
    rentAmount?: number;
    paymentHistory?: Array<{
        date: Date;
        amount: number;
        status: 'paid' | 'pending' | 'overdue';
    }>;
}