import {AlertType} from "@/shared/enums/AlertType.ts";
import {EventsKey} from "@/shared/enums/EventsKey.ts";
import notify from "@/lib/toast/Notify.ts";
import type {CustomEventData} from "@/shared/types/CustomEventData.ts";


export const handleCleanStoreAndNavigateToLogin = (message?: string) => {
    notify.alert({
        msg: message ?? "Vous n'avez pas le droit d'accéder à cette ressource, veuillez vous reconnecter s'il vous plait",
        type: AlertType.ERROR,
        toastId: "logout"
    });

    setTimeout(() => {
        localStorage.clear();
        dispatchLogoutEvent();
        window.open("/", "_self");
    }, 3000)
}

const dispatchLogoutEvent = () => {
    const event = new CustomEvent<CustomEventData<boolean>>(EventsKey.LOGOUT,
        {
            detail: {
                data: true,
            },
        });
    window.dispatchEvent(event);
}