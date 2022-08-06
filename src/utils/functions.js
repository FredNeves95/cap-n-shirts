export const getRoute = (data, conditionalRoutes) => {
    const routesArray = Object.values(conditionalRoutes)
    if (data?.length) return routesArray[0];
    if (data && data.length !== 0) return routesArray[0];
    return routesArray[1];
};