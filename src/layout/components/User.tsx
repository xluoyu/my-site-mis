import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import menu from "antd/lib/menu";

const hoverMenu = () => {
  return (
    <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        设置
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        退出
      </a>
    </Menu.Item>
  </Menu>
  )
}

function User() {
  return (
    <Dropdown overlay={hoverMenu}>
      <div className="px-16px mr-4 flex items-center">
        <img src="http://api.btstu.cn/sjtx/api.php" alt="" className="w-10 h-10 rounded-full"/>
      </div>
    </Dropdown>
  );
}

export default User;