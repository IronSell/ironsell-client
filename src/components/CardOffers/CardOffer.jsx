import { List, Avatar } from 'antd'
import { Link } from 'react-router-dom';
import * as PATHS from '../../utils/paths';
import './CardOffers.css'

function CardOffer(props) {
  const { searchOffers } = props
  const data = [
    searchOffers];
  return (
    <div className="App">
      <Link to={PATHS.OFFERPAGE + '?id=' + searchOffers._id}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{searchOffers.experienceYears}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
        />
      </Link>
    </div>
  )
}

export default CardOffer
