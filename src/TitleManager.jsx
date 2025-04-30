import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
    '/': 'HOME | Jclauneurolab',
    '/people': 'PEOPLE | Jclauneurolab',
    '/papers': 'PAPERS | Jclauneurolab',
    '/news': 'NEWS | Jclauneurolab',
    '/software': 'SOFTWARE | Jclauneurolab',
    '/contact': 'CONTACT | Jclauneurolab',
};

const TitleManager = () => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname.replace(/^\/+/, ''); // remove leading slashes
        const title = routeTitles[`/${pathname}`] || 'Jclauneurolab';
        document.title = title;
    }, [location]);

    return null;
};

export default TitleManager;
