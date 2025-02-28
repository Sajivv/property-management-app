import { Payment } from '../models/Payment';

export class PaymentService {
    private payments: Payment[] = [];

    public fetchPayments(): Payment[] {
        return this.payments;
    }

    public getPaymentById(id: number): Payment | undefined {
        return this.payments.find(payment => payment.id === id);
    }

    public createPayment(payment: Payment): void {
        if (this.validatePayment(payment)) {
            this.payments.push(payment);
        } else {
            throw new Error('Invalid payment data');
        }
    }

    public validatePayment(payment: Payment): boolean {
        return (
            payment.amount > 0 &&
            payment.date instanceof Date &&
            payment.tenantId > 0 &&
            payment.propertyId > 0
        );
    }

    public getPaymentsByTenant(tenantId: number): Payment[] {
        return this.payments.filter(payment => payment.tenantId === tenantId);
    }

    public getPaymentsByProperty(propertyId: number): Payment[] {
        return this.payments.filter(payment => payment.propertyId === propertyId);
    }
}