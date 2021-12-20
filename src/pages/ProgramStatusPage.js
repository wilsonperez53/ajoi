import StatusCard from 'components/StatusCard';
import ProgramMilestonesCard from 'components/ProgramMilestonesCard';
import ProgramStatusCard from 'components/ProgramStatusCard';
import ProgramDetails from 'components/ProgramDetails/ProgramDetails';


import {
    BrowserRouter as Router,
    useLocation, useParams
  } from "react-router-dom";

export default function Dashboard() {
    let location = useLocation();
    let prog = location.aboutProps.selectedprogram;
    return(
        <>
         <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"> 
                <h1 class="text-white text-3xl">{prog.DisplayName} </h1>
            </div>
           
            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <ProgramStatusCard  id={location.aboutProps.selectedid}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}


