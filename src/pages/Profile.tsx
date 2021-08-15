import { Typography } from "antd"
import Wrapper from "../components/Wrapper"

const Profile = () => {
  const jsx = (
    <div>
      <Typography.Title level={2} className='title'>
        Profile
      </Typography.Title>
      
    </div>
  )

  return <Wrapper component={jsx} />
}

export default Profile