import { Card } from 'antd';





function CarOffers() {
const { Meta } = Card;
  return (
    <div className="App">  
     <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    </div>
  );
}

export default CarOffers;

