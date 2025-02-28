export class Tenant {
    id: number;
    name: string;
    contactInfo: string;

    constructor(id: number, name: string, contactInfo: string) {
        this.id = id;
        this.name = name;
        this.contactInfo = contactInfo;
    }

    updateDetails(name: string, contactInfo: string) {
        this.name = name;
        this.contactInfo = contactInfo;
    }
}