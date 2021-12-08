import { Card } from 'antd';





function CardOffers(props) {
  const {searchOffers}= props
const { Meta } = Card;
  return (
    <div className="App">  
     <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
    <Meta title={searchOffers} description="www.instagram.com" />
    </Card>
    </div>
  );
}

export default CardOffers;

