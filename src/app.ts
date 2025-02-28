import { PropertyService } from './services/PropertyService';
import { TenantService } from './services/TenantService';
import { PaymentService } from './services/PaymentService';

class App {
    private propertyService: PropertyService;
    private tenantService: TenantService;
    private paymentService: PaymentService;

    constructor() {
        this.propertyService = new PropertyService();
        this.tenantService = new TenantService();
        this.paymentService = new PaymentService();
    }

    public initialize() {
        // Initialize services and set up routes here
        console.log('Application initialized');
    }
}

const app = new App();
app.initialize();