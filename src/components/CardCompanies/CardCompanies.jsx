import { Card } from 'antd'

function CardCompanies(props) {
  const { searchCompany } = props
  console.log(searchCompany)
  const { Meta } = Card
  return (
    <div className="App">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={searchCompany.companyLogo} />}
      >
        <Meta title={searchCompany.name} description={searchCompany.province} />
        
        {/* <Button type="primary" > Offers </Button> */}
      </Card>
    </div>
  )
}

export default CardCompanies
