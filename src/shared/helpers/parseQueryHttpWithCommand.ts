export const parseQueryHttpWithCommand = (
    command: Record<string, any>
): string => {
    return (
        "?" +
        Object.entries(command)
            .filter(
                ([key, value]) =>
                    value !== undefined && value !== null && key !== "controller"
            )
            .map(([key, value]) => {
                if (typeof value !== "boolean" && value.toString().startsWith("#")) {
                    return `${key}=${value.toString().slice(1)}`;
                }

                return `${key}=${value}`;
            })
            .join("&")
    );
};