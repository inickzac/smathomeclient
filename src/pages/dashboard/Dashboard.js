
import './dashboard.css'
import ApexChart from '../../components/charts/line_chart/LineChart';
import SiteWrapper from '../../components/site-wrapper/SiteWrapper';

const dashboard = props => (
    <section className='content-container'>
        <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '100%', width: '100%' }}>
            <ApexChart />
        </div>
    </section>
)

function Dashboard() {
    return (
        <SiteWrapper>
            {dashboard()}
        </SiteWrapper>
    );
}

export default Dashboard;