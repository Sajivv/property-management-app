export class TenantService {
    private tenants: Tenant[] = [];

    fetchTenants(): Tenant[] {
        return this.tenants;
    }

    createTenant(tenant: Tenant): void {
        this.tenants.push(tenant);
    }

    updateTenant(updatedTenant: Tenant): void {
        const index = this.tenants.findIndex(tenant => tenant.id === updatedTenant.id);
        if (index !== -1) {
            this.tenants[index] = updatedTenant;
        }
    }
}