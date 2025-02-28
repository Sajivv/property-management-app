import { Property } from '../models/Property';

export class PropertyService {
    private properties: Property[] = [];

    public fetchProperties(): Property[] {
        return this.properties;
    }

    public getPropertyById(id: number): Property | undefined {
        return this.properties.find(prop => prop.id === id);
    }

    public createProperty(property: Property): void {
        this.properties.push(property);
    }

    public updateProperty(updatedProperty: Property): void {
        const index = this.properties.findIndex(prop => prop.id === updatedProperty.id);
        if (index !== -1) {
            this.properties[index] = updatedProperty;
        }
    }

    public deleteProperty(id: number): void {
        this.properties = this.properties.filter(prop => prop.id !== id);
    }

    public getVacantProperties(): Property[] {
        return this.properties.filter(prop => prop.status === 'vacant');
    }
}