import { Card } from 'antd';
import { Link } from 'react-router-dom';
import * as PATHS from '../../utils/paths';

function CardCompanies(props) {
  const { companyLogo, name, province, companyUrl, _id } = props.searchCompany;
  const { Meta } = Card;
  return (
    <div className='App'>
      <Link to={PATHS.COMPANYPAGE + '?id=' + _id}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt='example' src={companyLogo} />}
        >
          <Meta title={name} description={province} />
          <p>{companyUrl} </p>
        </Card>
      </Link>
    </div>
  );
}

export default CardCompanies;
