import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Team1 from 'assets/img/team-1-800x800.jpg';

class ProgramDetails extends React.Component {
    constructor(props) {
       
        super(props);
        this.state = {
            error: null,
            loading: false,
            elements: []
        };
      
    }
    //fetch('http://jsonplaceholder.typicode.com/users')
    componentDidMount(){
        
        fetch('https://localhost:44301/api/Program?programId=' + this.props.id)
            .then(response => response.json())
            .then(
                
                (result) => {
                    console.log(result);
                    this.setState({
                        error: null,
                        loading: true,
                        elements: result
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
        const { error, loading, elements, programid2 } = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        } else if (!loading) {
            return <div>Loading...</div>
        } else {
            return (
                <Card>
                
                    <CardHeader color="purple" contentPosition="left">
                        <h2 className="text-white text-2xl">Program Details </h2>
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

export default ProgramDetails;