import { Card } from 'antd';

function Test(props) {
    const { searchOffers } = props
    const { Meta } = Card;
    return (
        <div className="App">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <p>{searchOffers.experienceYears}</p>
                <Meta title={searchOffers.jobTitle} description={searchOffers.experienceYears} />
            </Card>
        </div>
    );
}

export default Test;