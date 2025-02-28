export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}