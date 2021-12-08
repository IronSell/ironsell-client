import { Card } from 'antd';
const { Meta } = Card;


const CardCompanies = (props)=>{
    return(
        <div className="CardCompanies">  
        <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src="https://www.aial.es/wp-content/uploads/2018/11/Logo-Ironhack.jpg" />}
       >
       <Meta title="IronHack" description="www.ironhack.com" />
       </Card>
       </div>
    );
}

export default CardCompanies;