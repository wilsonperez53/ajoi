import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Settings from 'pages/Settings';
import Table from 'pages/ProgramDirectory';
import ProgramDetailsPage from 'pages/ProgramDetailsPage';
import ProgramNewPage from 'pages/ProgramNewPage'
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import ProgramsList from 'components/ProgramsList/ProgramsList';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Table} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/programs" component={Table} />
                    <Route exact path="/details/:id" component={ProgramDetailsPage} />
                    <Route exact path="/details" component={ProgramDetailsPage} />
                    <Route exact path="/new" component={ProgramNewPage} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
