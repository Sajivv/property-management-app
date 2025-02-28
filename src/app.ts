import express, { Express } from 'express';
import { PropertyService } from './services/PropertyService';
import { TenantService } from './services/TenantService';
import { PaymentService } from './services/PaymentService';
import { Property } from './models/Property';
import { Tenant } from './models/Tenant';
import { Payment } from './models/Payment';

class App {
    private app: Express;
    private propertyService: PropertyService;
    private tenantService: TenantService;
    private paymentService: PaymentService;
    private port: number = 3000;

    constructor() {
        this.app = express();
        this.propertyService = new PropertyService();
        this.tenantService = new TenantService();
        this.paymentService = new PaymentService();
        this.setupMiddleware();
        this.setupRoutes();
        this.loadTestData();
    }

    private setupMiddleware(): void {
        this.app.use(express.json());
    }

    private setupRoutes(): void {
        this.app.get('/api/properties', (req, res) => {
            res.json(this.propertyService.fetchProperties());
        });

        this.app.get('/api/tenants', (req, res) => {
            res.json(this.tenantService.fetchTenants());
        });

        this.app.get('/api/payments', (req, res) => {
            res.json(this.paymentService.fetchPayments());
        });
    }

    private loadTestData(): void {
        // Add sample properties
        const property1: Property = {
            id: 1,
            address: "123 Main St",
            rent: 1500,
            status: 'occupied',
            propertyType: 'apartment',
            numberOfBedrooms: 2,
            numberOfBathrooms: 1,
            squareFootage: 1000
        };

        const property2: Property = {
            id: 2,
            address: "456 Oak Ave",
            rent: 2000,
            status: 'vacant',
            propertyType: 'house',
            numberOfBedrooms: 3,
            numberOfBathrooms: 2,
            squareFootage: 1500
        };

        // Add sample tenants
        const tenant1: Tenant = {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            phoneNumber: "555-0123",
            contactInfo: "Primary contact",
            leaseStartDate: new Date('2024-01-01'),
            leaseEndDate: new Date('2024-12-31'),
            propertyId: 1,
            rentAmount: 1500
        };

        // Add sample payments
        const payment1: Payment = {
            id: 1,
            amount: 1500,
            date: new Date('2024-02-01'),
            tenantId: 1,
            propertyId: 1,
            paymentType: 'rent',
            status: 'completed',
            description: 'February 2024 Rent'
        };

        // Initialize data
        this.propertyService.createProperty(property1);
        this.propertyService.createProperty(property2);
        this.tenantService.createTenant(tenant1);
        this.paymentService.createPayment(payment1);

        console.log('Test data loaded successfully');
    }

    public initialize(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`);
        });
    }
}

const app = new App();
app.initialize();