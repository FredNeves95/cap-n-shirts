export const getRoute = (data, conditionalRoutes) => {
    const routesArray = Object.values(conditionalRoutes)
    if (data || data?.length) return routesArray[0];
    return routesArray[1];
};