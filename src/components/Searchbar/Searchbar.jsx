import "./Searchbar.css";
import { Input } from 'antd';

const { Search } = Input;

const Searchbar = () => {

return (

    <div className="container">
        <div className="ContainerSearbar">
            <Search placeholder="input search text" enterButton="Search" size="large" />
        </div>
            
    </div>


)


}

export default Searchbar

//usestate para guardar formulario
//onchange
//Handlesubmit-funcion que llame a el backend "axios" a una ruta con .params o .body
