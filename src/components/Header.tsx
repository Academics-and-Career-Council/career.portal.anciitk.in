import {useState} from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'

const {Item} = Menu

const Header = () => {
  const pathname = window.location.pathname
  const path = pathname === '/' ? 'home' : pathname.substr(1)
  const [current, setCurrent] = useState<string>(path)

  const handleClick = (e: any) => setCurrent(e.key)
  
  return (
    <Menu selectedKeys={[current]} onClick={handleClick}> 
      <Item key="home" >
        <Link to="/" />
      </Item>
      <Item key="login">
        <Link to="/login" />
      </Item>
    </Menu>
  )
}

export default Header