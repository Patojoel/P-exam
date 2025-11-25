import type {CustomEventData} from "@/shared/types/CustomEventData.ts";

export default class EventDispatcher {
  static emit<T>(eventName: string, value: T) {
    window.dispatchEvent(new CustomEvent<CustomEventData<T>>(eventName, {
      detail: {
        data: value
      }
    }));
  }
}
