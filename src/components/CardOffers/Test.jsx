import { Card } from 'antd';
import "./CardOffers.css";
function Test(props) {
    const { searchOffers } = props
    console.log(searchOffers)
    const { Meta } = Card;
    return (
        <div className="App">
            <Card
                className='cards'
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >

                <Meta title={searchOffers.jobTitle} description={searchOffers.province} />
                <p>{searchOffers.experienceYears}</p>
                <p>Salary: {searchOffers.salary}</p>
                <p>{searchOffers.schedule}</p>
                <p>{searchOffers.updatedAt}</p>
            </Card>
        </div>
    );
}

export default Test;