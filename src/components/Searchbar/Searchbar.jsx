import "./Searchbar.css";
import { Input } from 'antd';

const { Search } = Input;

const Searchbar = () => {

return (
    <div className="container">
            <Search placeholder="input search text" enterButton="Search" size="large" />
    </div>


)


}

export default Searchbar