import { Card, Button } from 'antd'
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";

function CardCompanies(props) {
  const { companyLogo, name, province, companyUrl, _id } = props.searchCompany
  const { Meta } = Card
  return (
    <div className="App">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={companyLogo} />}
      >
        <Meta title={name} description={province} />
        
        <p>{companyUrl} </p>
        
        {/* <Button type="primary">Offers</Button> */}
      </Card>
      <Link to={PATHS.COMPANYPAGE+'?id='+_id}>MORE INFO</Link>
    </div>
  )
}

export default CardCompanies
