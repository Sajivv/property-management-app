export class Property {
    id: number;
    address: string;
    rent: number;

    constructor(id: number, address: string, rent: number) {
        this.id = id;
        this.address = address;
        this.rent = rent;
    }

    calculateRent(months: number): number {
        return this.rent * months;
    }
}