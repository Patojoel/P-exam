import { InternetErrorException } from "@/shared/exceptions/InternetErrorException.ts";
import InternalServerException from "@/shared/exceptions/InternalServerException.ts";
import { handleCleanStoreAndNavigateToLogin } from "@/shared/gateways/handleCleanStoreAndNavigateToLogin.ts";
import { BASE_URL } from "@/lib/config/base.ts";
import { parseMessageResponse } from "@/shared/helpers/parseMessageResponse.ts";
import { AuthRoutes } from "@/modules/auth/infra/router/routes";

export abstract class HttpClient {
    public async post(
        url: string,
        data: object,
        signal?: AbortSignal
    ): Promise<Response> {
        const xcrf = this.getCookie("XSRF-TOKEN")
        const headers = xcrf? {
            "X-XSRF-TOKEN":xcrf
        }:{}
        return this.fetchData(url, {
            method: "POST",
            redirect: "error",
            headers: {
                "Content-Type": "application/json",
                ...headers as  HeadersInit
            },
            body: JSON.stringify(data),
            credentials: "include",
            signal,
        });
    }

    public async put(
        url: string,
        data: object,
        signal?: AbortSignal
    ): Promise<Response> {
        return this.fetchData(url, {
            method: "PUT",
            redirect: "error",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
            signal,
        });
    }

    public async patch(
        url: string,
        data: object,
        signal?: AbortSignal
    ): Promise<Response> {
        return this.fetchData(url, {
            method: "PATCH",
            redirect: "error",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
            signal,
        });
    }

    public async postFile(url: string, data: FormData): Promise<Response> {
        return this.fetchData(url, {
            method: "POST",
            redirect: "error",
            body: data,
        });
    }

    public async get(url: string, signal?: AbortSignal): Promise<Response> {
        return this.fetchData(url, {
            method: "GET",
            redirect: "error",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            signal,
        })
            .then((res) => res)
            .catch((err) => {
                if (err.name !== "AbortError") {
                    return err;
                }
            });
    }

    private async deleteMethod(url: string, signal?: AbortSignal) {
        return this.fetchData(url, {
            method: "DELETE",
            redirect: "error",
            signal,
        })
            .then((res) => res)
            .catch((err) => {
                if (err.name !== "AbortError") {
                    return err;
                }
            });
    }

    public async download(url: string): Promise<Response> {
        return this.fetchData(url, {
            method: "GET",
            mode: "no-cors",
            referrerPolicy: "no-referrer",
        })
            .then((res) => res.blob())
            .then((res) => res)
            .catch((err) => {
                if (err.name !== "AbortError") {
                    return err;
                }
            });
    }

    public async getWithResult({ url }: { url: string }) {
        let response: any;
        try {
            response = await this.get(url);
        } catch (error) {
            throw new InternetErrorException();
        }
        if (response.status === 500) {
            throw new InternalServerException();
        }
        try {
            return await response.json();
        } catch (error) {
            throw new InternalServerException();
        }
    }

    public async postWithResult({
                                    url,
                                    command,
                                }: {
        url: string;
        command: object;
    }) {
        let response: any;
        try {
            response = await this.post(url, command);
        } catch (error) {
            throw new InternetErrorException();
        }
        if (response.status === 400) {
            const json = await response.json();
            throw new InternalServerException(parseMessageResponse(json));
        }
        if (response.status === 500) {
            const json = await response.json();
            throw new InternalServerException(json.message);
        }
        try {
            return await response.json();
        } catch (error) {
            throw new InternalServerException();
        }
    }

    public async putWithResult({
                                   url,
                                   command,
                               }: {
        url: string;
        command: object;
    }) {
        let response: any;
        try {
            response = await this.put(url, command);
        } catch (error) {
            throw new InternetErrorException();
        }
        if (response.status === 400) {
            const json = await response.json();
            throw new InternalServerException(parseMessageResponse(json));
        }
        if (response.status === 500) {
            const json = await response.json();
            throw new InternalServerException(json.message);
        }
        try {
            return await response.json();
        } catch (error) {
            throw new InternalServerException();
        }
    }

    public async patchWithResult({
                                     url,
                                     command,
                                 }: {
        url: string;
        command: object;
    }) {
        let response: any;
        try {
            response = await this.patch(url, command);
        } catch (error) {
            throw new InternetErrorException();
        }
        if (response.status === 400) {
            const json = await response.json();
            throw new InternalServerException(parseMessageResponse(json));
        }
        if (response.status === 500) {
            const json = await response.json();
            throw new InternalServerException(json.message);
        }
        try {
            return await response.json();
        } catch (error) {
            throw new InternalServerException();
        }
    }

    public async deleteWithResult({ url }: { url: string }) {
        let response: any;
        try {
            response = await this.deleteMethod(url);
        } catch (error) {
            throw new InternetErrorException();
        }
        if (response.status === 500) {
            throw new InternalServerException();
        }
        try {
            return await response.json();
        } catch (error) {
            throw new InternalServerException();
        }
    }

    public async postFileWithResult({
                                        url,
                                        data,
                                    }: {
        url: string;
        data: FormData;
    }) {
        let response: any;
        try {
            response = await this.postFile(url, data);
        } catch (error) {
            throw new InternetErrorException();
        }
        if (response.status === 500) {
            throw new InternalServerException();
        }
        try {
            return await response.json();
        } catch (error) {
            throw new InternalServerException();
        }
    }

    private async fetchData(
        url: string,
        requestInit?: RequestInit
    ): Promise<Response> {
        let fetchUrl = url;
        if (!url.includes("http")) {
            fetchUrl = BASE_URL + url;
        }

        const mergedHeaders = {
            ...((requestInit?.headers as Record<string, string>) || {}),
        };

        return new Promise((resolve, reject) => {
            return fetch(fetchUrl, {
                ...requestInit,
                headers: mergedHeaders,
                credentials: "include",
                redirect: "manual",
                signal: requestInit?.signal,
            })
                .then(async (response) => {
                    if (
                        !response.status ||
                        response.status === 500 ||
                        response.status === 405
                    ) {
                        return resolve(response);
                    }

                    if (response.status === 419) {
                        window.location.reload();
                        return resolve(response);
                    }

                    if (response.status === 403) {
                        handleCleanStoreAndNavigateToLogin();
                        return resolve(response);
                    }
                    if (response.status === 401) {
                        const responseJson = await response.clone().json();
                        if (
                            !Object.values(AuthRoutes).includes(response.url) &&
                            responseJson.error === "unauthorized") {
                            handleCleanStoreAndNavigateToLogin();
                            return resolve(response);
                        }
                        return resolve(response);
                    }


                    return resolve(response);
                })
                .catch((value) => {
                    reject(value);
                });
        });
    }

    private  getCookie(name: string):string|null{
        return (document.cookie.match('(^|; )' + name + '=([^;]*)') || [])[2]??null;
    }
}