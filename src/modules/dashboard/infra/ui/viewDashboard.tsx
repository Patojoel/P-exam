import { DashboardInfo } from "./components/DashboardInfo";
import { useDashboard } from "./hooks/useDashbooard";

export const ViewDashboard = () => {
    const listinformation  = useDashboard();
    return (
        <DashboardInfo data={listinformation} />
    );
};