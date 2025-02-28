export interface Property {
    id: number;
    address: string;
    rent: number;
    status: 'vacant' | 'occupied';
    propertyType: string;
    squareFootage?: number;
    numberOfBedrooms?: number;
    numberOfBathrooms?: number;
    currentTenantId?: number;
    lastMaintenanceDate?: Date;
}