import React from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';

export default function ProgramForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    fetch('https://localhost:44301/api/Program',{
      method:'POST',
      headers:{
             'Accept':'application/json',
             'Content-Type':'application/json'
      },
      body:JSON.stringify({
             OPSCodeName: inputs.OPSCodeName,
             DisplayName: inputs.DisplayName,
             Series: '4100i',
             Description: inputs.Description,
             ProductType: 'Switch',
             Flag: inputs.Flag,
             CheckpointPhase: 'Execution',
             State: 'Active',
             Category: 'Wired',
             ProductLine: '',
             Market: '',
             TotalBudget: '',
             SunkCost: '',
             HCCost: '',
             Manager: inputs.ProjectManager,
             Notes: 'Add your notes here (test)....',
             SWType: '',
             SWRelease: '',
             BusinessUnit: '',
             SupplierModel: '',
             SWCommitted: '',
             Modifier: '',
             ModificationDate: '2021-12-09T13:46:58.09',
             IsActive: true,
             Supplier: 'Accton'
      })
})
      .then(response => response.json())
      .then(
             (result) => {
                    alert(result);
                    this.refreshProgramsList();
             },
             (errors) => {
                    alert('Failed');
             }
      );
  }

  
  const handleUpdate = (id) => {
       fetch('https://localhost:44301/api/Program/' + id, {
         method:'PUT',
         headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
         },
         body:JSON.stringify({
                OPSCodeName: inputs.OPSCodeName,
                DisplayName: inputs.DisplayName,
                Series: '4100i',
                Description: 'Ruggedized Switch based on Bristol HW,  2 SKUS',
                ProductType: 'Switch',
                Flag: inputs.Flag,
                CheckpointPhase: 'Execution',
                State: 'Active',
                Category: 'Wired',
                ProductLine: '',
                Market: '',
                TotalBudget: '',
                SunkCost: '',
                HCCost: '',
                Manager: 'kendall.roth@hpe.com',
                Notes: 'Add your notes here (test)....',
                SWType: '',
                SWRelease: '',
                BusinessUnit: '',
                SupplierModel: '',
                SWCommitted: '',
                Modifier: '',
                ModificationDate: '2021-12-09T13:46:58.09',
                IsActive: true,
                Supplier: 'Accton'
         })
   })
         .then(response => response.json())
         .then(
                (result) => {
                       alert(result);
                       this.refreshProgramsList();
                },
                (errors) => {
                       alert('Failed');
                }
         );
     }

  return (
    <>

    <form onSubmit={handleSubmit}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-4 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">OpsCodeName</label>
                <input 
                     value={inputs.OPSCodeName} 
                     onChange={handleChange} 
                     type="text" 
                     name="OPSCodeName" 
                     id="OPSCodeName" 
                     autoComplete="OPSCodeName" 
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-4 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">DisplayName</label>
                <input 
                     value={inputs.DisplayName || ""} 
                     onChange={handleChange} 
                     type="text" 
                     name="DisplayName" 
                     id="DisplayName" 
                     autoComplete="DisplayName" 
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-4 sm:col-span-4">
                <label for="ProjectManager" class="block text-sm font-medium text-gray-700">Manager Email</label>
                <input 
                     value={inputs.DisplayName || ""} 
                     onChange={handleChange} 
                     type="text" 
                     name="ProjectManager" 
                     id="ProjectManager" 
                     autoComplete="ProjectManager" 
                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-3 sm:col-span-3">
                <label for="Flag" class="block text-sm font-medium text-gray-700">Flag</label>
                <select id="Flag" name="Flag" autocomplete="Flag" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Green</option>
                  <option>Yellow</option>
                  <option>Red</option>
                </select>
              </div>

              <div class="col-span-9">
                <label htmlFor="street_address" class="block text-sm font-medium text-gray-700">Description</label>
                <input 
                     value={inputs.Description || ""} 
                     onChange={handleChange} 
                     type="text" 
                     name="Description" 
                     id="Description" 
                     autoComplete="Description" 
                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-3 sm:col-span-3">
                <label for="State" class="block text-sm font-medium text-gray-700">State</label>
                <select id="State" name="State" autocomplete="State" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="state" id="state" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
ReactDOM.render(<ProgramForm />, document.getElementById('root'));
    