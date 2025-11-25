import React from "react";
import { Bounce, toast, type ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {AlertType} from "@/shared/enums/AlertType.ts";
import CustomToast from "@/lib/toast/CustomToast.tsx";

const defaultOptions: ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Bounce,
    theme: "colored",
};

export type NotifyOptions = {
    title?: string,
    msg: string,
    canClose?:boolean,
    isTranslate?:boolean,
    type?: AlertType,
    toastId?: string,
    customOptions?: object,
    autoClose?: number | false
}


class Notify {
    alert(options: NotifyOptions): void {
        this._toast(options);
    }

    success(message: string, options?: Partial<NotifyOptions>) {
        this._toast({
            msg: message,
            type: AlertType.SUCCESS,
            ...options,
        });
    }

    error(message: string, options?: Partial<NotifyOptions>) {
        this._toast({
            msg: message,
            type: AlertType.ERROR,
            ...options,
        });
    }

    warning(message: string, options?: Partial<NotifyOptions>) {
        this._toast({
            msg: message,
            type: AlertType.WARNING,
            ...options,
        });
    }

    custom(options: NotifyOptions) {
        this._toast({
            ...options,
        });
    }

    private _toast(options: NotifyOptions) {
        const toastId = options.toastId || Math.random().toString(36).substring(2, 9);

        const toastOptions: ToastOptions = {
            ...defaultOptions,
            ...options.customOptions,
            toastId,
            autoClose: options.autoClose ?? defaultOptions.autoClose,
            closeButton: false,
            closeOnClick: false,
        };

        const renderToast = () =>
            React.createElement(CustomToast, {
                toastOptions: options,
                canClose:options?.canClose??false,
                close: () => toast.dismiss(toastId),
                // duration: typeof toastOptions.autoClose === "number" ? toastOptions.autoClose : undefined,
            });

        if (toast.isActive(toastId)) {
            toast.update(toastId, {
                ...toastOptions,
                render: renderToast,
            });
        } else {
            toast(renderToast, toastOptions);
        }

    }
}

export default new Notify();