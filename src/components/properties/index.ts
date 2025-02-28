class PropertyComponent {
    properties: any[];

    constructor() {
        this.properties = [];
    }

    addProperty(property: any) {
        this.properties.push(property);
    }

    editProperty(propertyId: number, updatedProperty: any) {
        const index = this.properties.findIndex(prop => prop.id === propertyId);
        if (index !== -1) {
            this.properties[index] = { ...this.properties[index], ...updatedProperty };
        }
    }

    deleteProperty(propertyId: number) {
        this.properties = this.properties.filter(prop => prop.id !== propertyId);
    }
}

export default PropertyComponent;