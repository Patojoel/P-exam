import {type URLSearchParamsInit, useSearchParams} from "react-router-dom";


export const useQueryFilterRequest = (props?: { filterKeys: string[] }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleQueryFilter = (key: string, value: string) => {
        const oldQuery = Object.entries(Object.fromEntries(searchParams)).reduce((acc, [key, value]) => {
            if (key.includes('order')) return acc;
            return {
                ...acc,
                [key]: value,
            }
        }, {});
        setSearchParams({
            ...oldQuery,
            ...(!!key && !!value ? {[key]: value} : {}),
        })
    }

    const handleQueryPaginate = (page: number, limit: number) => {
        const oldQuery = Object.fromEntries(searchParams);
        setSearchParams({
            ...oldQuery,
            page: page.toString(),
            limit: limit.toString(),
        })
    }

    const handleChangeFilterCommand = (command: any) => {
        const limit = searchParams.get('limit') || '10';
        const oldQuery = Object.entries(Object.fromEntries(searchParams))
            .filter(([k]) => !(props?.filterKeys || []).includes(k)).reduce((acc, [key, value]) => {
                return {
                    ...acc,
                    [key]: value,
                }
            }, {});
        const newCommand = {
            ...oldQuery,
            ...command,
            page: 1,
            limit,
        }
        const filteredNewCommand = Object.fromEntries(Object.entries(newCommand).filter(([, value]) => value !== undefined))  as URLSearchParamsInit

        setSearchParams(filteredNewCommand);
    }
    const getItems =(name:string)=>searchParams.get(name)

    return {
        handleQueryFilter,
        handleQueryPaginate,
        handleChangeFilterCommand,
        getItems
    };
}
