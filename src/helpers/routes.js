export const transformPathName = pathName => {
    if (pathName === '/') {
        return pathName;
    }

    if (pathName.substr(-1) === '/') {
        return pathName.substr(0, pathName.length - 1);
    }

    return pathName;
};

export const isRouteEqual = (pathName, compareWith) => {
    return transformPathName(pathName) === compareWith;
};

export const hasAdminPermission = ({ isAdmin, isOrgAdmin }) => {
    // TODO: Rework role & permission system in future

    return isAdmin || isOrgAdmin;
};
