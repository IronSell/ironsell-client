import './CompanyProfile.css';
import { Image, Typography, Anchor, Text, Descriptions, Collapse } from 'antd';
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
  const { Panel } = Collapse;
  const text = companyDescription;
  const { Link } = Anchor;

  return (
    <main className='container'>
      <div className='CompanyView'>
        <div className='company-logo-container'>
          <img className='company-logo' src={companyLogo} alt={name} />
          <h3>{name}</h3>
          <div className='logo-container'>
          </div>
        </div>
        <div className='info-container'>
          <Descriptions
            title='Company info'
            bordered
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label='Email'>{email}</Descriptions.Item>
            <Descriptions.Item label='CIF'>{cif}</Descriptions.Item>
            <Descriptions.Item label='Professional Sector'>
              {professionalSector}
            </Descriptions.Item>
            <Descriptions.Item label='Provice'>{province}</Descriptions.Item>
            <Descriptions.Item label='Address'>{address}</Descriptions.Item>
          </Descriptions>
          <Collapse className='company-description' defaultActiveKey={['1']}>
            <Panel header='Company description' key='1'>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
        <div className='media-container'>
          <Title level={2}>Published job offers:</Title>
        </div>
        <div className='offers-container'>
          <Title level={2}>Published job offers:</Title>
        </div>
      </div>
    </main>
  );
}

export default CompanyView;
