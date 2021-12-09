import { Card, Button } from 'antd'


function CardCompanies(props) {
  const { companyLogo, name, province, companyUrl } = props.searchCompany
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
        
        <Button type="primary" > Offers </Button>
      </Card>
    </div>
  )
}

export default CardCompanies
