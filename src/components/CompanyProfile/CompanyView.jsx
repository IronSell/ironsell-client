import './CompanyProfile.css';
import { Image, Typography, Anchor } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';

function CompanyView(props) {
  const {
    name,
    email,
    professionalSector,
    cif,
    address,
    companyDescription,
    province,
    companyUrl,
    companyLogo,
    jobOffers,
  } = props.user;

  const { Title, Text } = Typography;
  const { Link } = Anchor;

  return (
    <main className='container'>
      <div className='CompanyView'>
        <div className='company-logo-container'>
          <img className='company-logo' src={companyLogo} alt={name} />
          <Title level={3}>{name}</Title>
          <div className='logo-container'>
            <Text>
              <span className='icon'>
                <EnvironmentOutlined />
              </span>{' '}
              {address}
            </Text>
            <Text>
              <span className='icon'>
                <MailOutlined />
              </span>{' '}
              <a href={companyUrl}>{companyUrl}</a>
            </Text>
            {/* <Anchor className='company-anchor'>
            <Link href={companyUrl} title={companyUrl}></Link>
            </Anchor> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CompanyView;
