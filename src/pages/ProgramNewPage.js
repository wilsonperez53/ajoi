import React from "react";
import ProgramForm from "components/ProgramForm";

export default function Dashboard() {
       return (
              <>       
                     <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"> 
                            <h1 className="text-white text-3xl">Create new program </h1>
                     </div>
                            
                     <div class="mt-5 md:mt-0 md:col-span-2">
                            <ProgramForm></ProgramForm>
                     </div>
              </>
       )
}