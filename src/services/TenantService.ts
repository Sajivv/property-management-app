import { Tenant } from '../models/Tenant';

export class TenantService {
    private tenants: Tenant[] = [];

    public fetchTenants(): Tenant[] {
        return this.tenants;
    }

    public getTenantById(id: number): Tenant | undefined {
        return this.tenants.find(tenant => tenant.id === id);
    }

    public createTenant(tenant: Tenant): void {
        this.tenants.push(tenant);
    }

    public updateTenant(updatedTenant: Tenant): void {
        const index = this.tenants.findIndex(tenant => tenant.id === updatedTenant.id);
        if (index !== -1) {
            this.tenants[index] = updatedTenant;
        }
    }

    public deleteTenant(id: number): void {
        this.tenants = this.tenants.filter(tenant => tenant.id !== id);
    }

    public getTenantsWithActiveLeases(): Tenant[] {
        const currentDate = new Date();
        return this.tenants.filter(tenant => 
            tenant.leaseEndDate && tenant.leaseEndDate > currentDate
        );
    }
}