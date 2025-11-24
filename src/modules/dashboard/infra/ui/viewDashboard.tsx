import { DashboardInfo } from "./components/DashboardInfo";
import { useDashboard } from "./hooks/useDashbooard";

export const ViewDashboard = () => {
    const listinformation  = useDashboard();
    return (
    <div className="overflow-y-auto h-screen overflow-x-hidden">

        <DashboardInfo data={listinformation} />
    </div>
    );
};