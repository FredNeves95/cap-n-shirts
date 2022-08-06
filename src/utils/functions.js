export const getRoute = (data, conditionalRoutes) => {
    const routesArray = Object.values(conditionalRoutes)
    console.log(data);
    if (data?.length) return routesArray[0];
    return routesArray[1];
};