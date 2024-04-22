export const classNames = (mainClass, additionalClasses = [], mods = {}) => {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(" ");
};
