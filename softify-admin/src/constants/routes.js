export const Approutes = {
    login: '/login',
    forgotpassword: '/forgotpassword',
    activateaccount: '/activateaccount',
    home: '/',
    dashboard: '/dashboard',
    inventory: {
        categories: {
            home: '/inventory/categories',
            addcategory: '/inventory/categories/addcategory'
        },
        vendors: {
            home: '/inventory/vendors',
            addvendor: '/inventory/vendors/addvendor'
        },
        purchaseorders: {
            home: '/inventory/purchaseorders',
            addpurchaseorder: '/inventory/purchaseorders/addpurchaseorder',
            details: '/inventory/purchaseorders/details'
        },
        products: {
            home: '/inventory/products',
            addnewproduct: '/inventory/products/addnewproduct'
        },
        stock: '/inventory/stock'
    },
    orders: {
        mgmt: '/orders/mgmt',
        packages: '/orders/packages',
        details: '/orders/mgmt/details'
    },
    riders: {
        home: '/riders',
        rider: '/riders/rider'
    },
    customers: '/customers',
    stores: '/stores',
    superadmin: {
        team: {
            home: '/superadmin/team',
            addteammember: '/superadmin/team/addteammember'
        },
        reports: '/superadmin/reports',
        accounts: '/superadmin/accounts',
        promotions: {
            mgmt: '/superadmin/promotions/mgmt',
            addpromotion: '/superadmin/promotions/addpromotion'
        }
    }
}