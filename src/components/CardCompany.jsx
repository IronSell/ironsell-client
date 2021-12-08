import { Card, Avatar } from 'antd';
const { Meta } = Card;

const CardCompany = () => {
    return (
      
        <Card style={{ width: 300, marginTop: 16 }} >

          <Meta
            avatar={<Avatar src="https://www.aial.es/wp-content/uploads/2018/11/Logo-Ironhack.jpg" />}
            title="IronHack"
            description="Cursos intensivos en Desarrollo Web, Diseño UX UI, Análisis de Datos y Ciberseguridad. Formatos diseñados para ti: remoto o presencial, full-time o part-time"
          />
          {/* <div>
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          </div> */}
        </Card>
        )
} 

export default CardCompany