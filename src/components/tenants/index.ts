class TenantComponent {
    tenants: Tenant[];

    constructor() {
        this.tenants = [];
    }

    addTenant(tenant: Tenant) {
        this.tenants.push(tenant);
    }

    editTenant(id: number, updatedTenant: Tenant) {
        const index = this.tenants.findIndex(tenant => tenant.id === id);
        if (index !== -1) {
            this.tenants[index] = updatedTenant;
        }
    }

    removeTenant(id: number) {
        this.tenants = this.tenants.filter(tenant => tenant.id !== id);
    }
}

export default TenantComponent;