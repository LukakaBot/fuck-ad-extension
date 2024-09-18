import { useState } from "react";
import "./App.css";
import { Flex, Switch } from "antd";

function App() {
  const [isHideLoginModal, setIsHideLoginModal] = useState(false);

  function handleChangeLoginModalState(checked: boolean) {
    setIsHideLoginModal(checked);
    console.log(checked);
    console.log(isHideLoginModal);
  }

  return (
    <>
      <div>
        <Flex className="w-full" vertical>
          <Flex justify="space-between" align="center">
            <p>CSDN 登录弹窗隐藏</p>
            <Switch
              defaultChecked={isHideLoginModal}
              onChange={handleChangeLoginModalState}
            />
          </Flex>
        </Flex>
      </div>
    </>
  );
}

export default App;
