import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Progress from '@material-tailwind/react/Progress';
import { Component } from 'react';

export default function ProgramStatusCard(){
    this.state = {
        statuses: []
    };
    componentDidMount(){
        fetch('https://localhost:44301/api/Program')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        statuses: result
                    });
                }
            )
    };
    
    return(
        <Card>
                
        <CardHeader color="purple" contentPosition="left">
            <h2 className="text-white text-2xl">Programs </h2>
        </CardHeader>
        <CardBody>
     <div className="overflow-x-auto">
     <table className="items-center w-full bg-transparent border-collapse">
         <thead>
             <tr>
          
                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Program
                 </th>
                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Name
                 </th>
                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Manager
                 </th>
                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Email
                 </th>
                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Status
                 </th>
                 
             </tr>
         </thead>
         <tbody>
            
             {statuses.map(e => ( 
             <tr>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                     {e.ProgramId}
                 </th>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                     {e.DisplayName}
                 </th>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                     <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                     {e.Manager}
                 </th>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                     <div className="flex">
                        <p>{e.Manager}</p>
                     </div>
                 </th>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                     <Progress color="red" value="60" />
                 </th>
                
             </tr>
             ))}
         </tbody>
         </table>
     </div>
     </CardBody>
</Card>
    );
}