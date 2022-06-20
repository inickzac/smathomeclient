import { useSelector, useDispatch } from 'react-redux';

function Footer() {
    
    const count = useSelector((state) => state.counter.value);
    
    
    
    return (
        <footer className="bg-light text-center text-lg-start ">
            <div className="text-center p-3 " style={{ minHeight: '10vh' }}>
                {count}
                <a className="text-dark" href="https://mdbootstrap.com/">SmartHome</a>
            </div>
        </footer>
    )
}

export default Footer;