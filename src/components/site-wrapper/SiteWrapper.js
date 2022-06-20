
import Footer from '../../components/footer/Footer'
import './siteWrapper.css';
import Sidebar  from '../../components/sidebar/SideBar';
import  Navbar  from '../../components/navbar/Navbar';

function SiteWrapper({children}) {
    return (
        <>
            <div className ='site-container'>
                <Sidebar />
                <div className='site-content'>
                    <Navbar/>
                    <div style={{minHeight:'80vh'}}>
                        {children}
                    </div>
                   <Footer/>
                </div>
            </div>
        </>
    );
}

export default SiteWrapper;