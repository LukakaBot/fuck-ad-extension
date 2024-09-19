import { useState } from "react";
import { Flex, Switch } from "antd";
import "./App.css";

function App() {
  const [isHideLoginModal, setIsHideLoginModal] = useState(false);
  const [isFullTextRead, setIsFullTextRead] = useState(false);

  function handleChangeLoginModalState(checked: boolean) {
    setIsHideLoginModal(checked);
    console.log(checked);
    console.log(isHideLoginModal);
  }

  function handleChangeFullTextReadState(checked: boolean) {
    setIsFullTextRead(checked);
    console.log(checked);
    console.log(isFullTextRead);
  }

  return (
    <>
      <div>
        <Flex className="w-full" vertical gap={'middle'}>
          <Flex justify="space-between" align="center">
            <p>CSDN 登录弹窗隐藏</p>
            <Switch
              defaultChecked={isHideLoginModal}
              onChange={handleChangeLoginModalState}
            />
          </Flex>
          <Flex justify="space-between" align="center">
            <p>CSDN 全文阅读</p>
            <Switch
              defaultChecked={isFullTextRead}
              onChange={handleChangeFullTextReadState}
            />
          </Flex>
        </Flex>
      </div>
    </>
  );
}

export default App;
