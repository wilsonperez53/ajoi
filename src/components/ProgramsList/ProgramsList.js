import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import Team1 from 'assets/img/team-1-800x800.jpg';
import { NavLink } from 'react-router-dom';

class ProgramsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            elements: [],

            ProgramIdFilter:"",
            ProgramNameFilter:"",
            programsWithoutFilter:[]
        };
    }
    
    filterFn(){
        var ProgramIdFilter = this.state.ProgramIdFilter;
        var ProgramNameFilter = this.state.ProgramNameFilter;
        var filteredData = this.state.programsWithoutFilter.filter(
            function(el){
                return el.ProgramId.toString().toLowerCase().includes(
                    ProgramIdFilter.toString().trim().toLowerCase()
                ) && 
                el.DisplayName.toString().toLowerCase().includes(
                    ProgramNameFilter.toString().trim().toLowerCase()
                )
            }
        );
        //alert(filteredData.length);
        this.setState({elements: filteredData});
    }

    refreshList(){
        fetch('https://localhost:44301/api/Program')
        .then(response => response.json())
        .then(
            
            (result) => {
                console.log(result);
                this.setState({
                    error: null,
                    loading: true,
                    elements: result,
                    programsWithoutFilter: result
                });
            },
            (errors) => {
                this.setState({
                    error: errors,
                    loading: true,
                    elements: []
                });
            }
        );
    }

    sortResult(prop, asc){
     alert(prop);
        var sortedData = this.state.elements.sort(function(a,b){
            if(asc){
                return (a[prop] > b[prop] ? 1 : ((a[prop] < b[prop])? -1 : 0));
            }
            else return (b[prop] > a[prop] ? 1 : ((b[prop] < a[prop])? -1 : 0));
        });
        this.setState({elements: sortedData});
    }
    changeProgramId = (e) => {
        this.state.ProgramIdFilter = e.target.value;
        this.filterFn();
    }
    changeProgramName = (e) => {
       
        this.state.ProgramNameFilter = e.target.value;
        this.filterFn();
    }

    componentDidMount(){
        
        fetch('https://localhost:44301/api/Program')
            .then(response => response.json())
            .then(
                
                (result) => {
                    console.log(result);
                    this.setState({
                        error: null,
                        loading: true,
                        elements: result,
                        programsWithoutFilter: result
                    });
                },
                (errors) => {
                    this.setState({
                        error: errors,
                        loading: true,
                        elements: []
                    });
                }
            );
    }

    render(){
        const { error, loading, elements, modalTitle, modalState, modalProgramName } = this.state;

        if(error){
            return <div>Error: {error.message}</div>
        } else if (!loading) {
            return <div>Loading...</div>
        } else {
            return (
                <Card>
                    
                <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Programs</h2>
                </CardHeader>
                <CardBody> 
   
             <div className="overflow-x-auto">
               
             <table className="items-center w-full bg-transparent border-collapse">
                 <thead>
                     <tr>
                  
                         <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            <div className="d-flex flex-row">
                                <input 
                                    onChange={this.changeProgramId} 
                                    placeholder="Search" 
                                    />
                                <button onClick={()=>this.sortResult('ProgramId',true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Sort
                                </button>
                                Program ID
                             </div>
                         </th>
                         <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            <input 
                                onChange={this.changeProgramName}  
                                placeholder="Search" />
                                <button onClick={()=>this.sortResult('DisplayName',true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Sort
                                </button>
                             Name
                         </th>
                         <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                             Program Manager
                         </th>
                         <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                             Program Manager
                         </th>
                         <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                             Status
                         </th>
                         <th>View</th>
                     </tr>
                 </thead>
                 <tbody>
                    
                     {elements.map(e => ( 
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
                                 <div className="w-10 h-10 rounded-full border-2 border-white">
                                     <Image
                                         src={Team1}
                                         rounded
                                         alt="..."
                                     />
                                 </div>
                                 <div><p>{e.Manager}</p></div>
                             </div>
                         </th>
                         <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                             <Progress color="red" value="60" />
                         </th>
                         <th>
                            <NavLink 
                                    to={{
                                        pathname:"/details",
                                        aboutProps:{
                                              selectedid:e.ProgramId,
                                              selectedprogram:e
                                             }
                                        }} 
                                    state= {{ id: "2"}}
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    +
                            </NavLink>
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
    }
}

export default ProgramsList;