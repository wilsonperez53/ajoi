import StatusCard from 'components/StatusCard';
import ProgramMilestonesCard from 'components/ProgramMilestonesCard';
import ProgramBudgetCard from 'components/ProgramBudgetCard';
import ProgramDetails from 'components/ProgramDetails/ProgramDetails';
import {
    useLocation, useParams
  } from "react-router-dom";

export default function Dashboard() {
    //let { id } = useParams();
    //let pid = useParams();
    let location = useLocation();
    let prog = location.aboutProps.selectedprogram;
    return (
        <>

            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"> 
                <h1 class="text-white text-3xl">{prog.DisplayName} </h1>
            </div>
            <div className="pt-14 pb-14 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Status"
                            amount={prog.Flag}
                            percentage=""
                            percentageIcon=""
                            percentageColor="green"
                            date=""
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="RC"
                            amount={prog.Checkpointphase}
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date=""
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="RC"
                            amount="02/02/2022"
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date=""
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="SA/GA"
                            amount="02/02/2022"
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date=""
                        />
                         <StatusCard
                            color="blue"
                            icon="poll"
                            title="FCS"
                            amount="02/02/2022"
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date=""
                        />
                         <StatusCard
                            color="blue"
                            icon="poll"
                            title="SW Release"
                            amount="12/02/2022"
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date=""
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ProgramDetails id={location.aboutProps.selectedid} />
                            <ProgramBudgetCard  id={location.aboutProps.selectedid}/>
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <ProgramMilestonesCard  id={location.aboutProps.selectedid}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
