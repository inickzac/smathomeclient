
import SiteWrapper from '../../components/site-wrapper/SiteWrapper';
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment} from  '../../store/slices/CommonSlice';



function Management() {

    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Прибавить
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Отнять
                </button>
            </div>
        </div>
    )
}


function ManagementWithSiteWrapper() {
    return (
        <SiteWrapper>
            {Management()}
        </SiteWrapper>
    );
}

export default ManagementWithSiteWrapper;