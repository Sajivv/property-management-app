export class PaymentService {
    private payments: Payment[] = [];

    public fetchPayments(): Payment[] {
        return this.payments;
    }

    public createPayment(payment: Payment): void {
        this.payments.push(payment);
    }

    public validatePayment(payment: Payment): boolean {
        // Add validation logic here
        return payment.amount > 0 && payment.date instanceof Date;
    }
}