import './CompanyProfile.css';
import * as PATHS from '../../utils/paths';
import { Image } from 'antd';

function CompanyProfile(props) {
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
  } = props.showCompany;

  return (
    <div className='CompanyProfile'>
      <Image className='' width={250} src={showUser.profilePicture} />
    </div>
  );
}

export default CompanyProfile;
