type RouteListKeyType = 'services' | 'brand' | 'commissions' | 'testimonials' | 'faq';

interface RouteListValue {
    id: string;
    hash: string;
    name: string;
}

export const routeList: Record<RouteListKeyType, RouteListValue> = {
    'services': {
        id: 'services',
        hash: '#services',
        name: 'Services'
    },
    'brand': {
        id: 'brand',
        hash: '#brand',
        name: 'Brand'
    },
    'commissions': {
        id: 'commissions',
        hash: '#commissions',
        name: 'Commissions'
    },
    'testimonials': {
        id: 'testimonials',
        hash: '#testimonials',
        name: 'Testimonials'
    },
    'faq': {
        id: 'faq',
        hash: '#faq',
        name: 'FAQs'
    }
};
