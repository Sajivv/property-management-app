export class PropertyService {
    private properties: Property[] = [];

    public fetchProperties(): Property[] {
        return this.properties;
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
}