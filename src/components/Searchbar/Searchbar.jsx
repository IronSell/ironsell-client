import "./Searchbar.css";
import { Input } from 'antd';

const { Search } = Input;

const Searchbar = () => {

return (
    <div className="Container">
            <Search placeholder="input search text" enterButton="Search" size="large" loading />
    </div>


)


}

export default Searchbar