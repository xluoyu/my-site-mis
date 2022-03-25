import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link, useLocation  } from "react-router-dom";
function Bread() {
  const routes = useLocation();
  console.log(routes.pathname)
  return ( 
  <Breadcrumb className="m-16px">
    <Breadcrumb.Item>
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to="">Application Center</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
 );
}

export default Bread;