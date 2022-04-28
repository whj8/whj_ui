import React, {ChangeEvent, useState, useRef} from 'react';
import Button from "./components/Button/index";
import Menu from "./components/Menu";
import Alert from './components/Alert'
import Tabs from './components/Tabs'
import Icon from './components/Icon'
import Transition from "./components/Transition/transition";
import Input from "./components/Input/input";
import AutoComplete from "./components/AutoComplete/autoComplete";
import Upload from "./components/Upload";

function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Upload
        drag={false}
        accept='.png,.pdf'
        name='myFile'
        action='http://localhost:1299/whj'
        multiple={true}
        withCredentials={true}
        // onProgress={(p,f)=>console.log("->",p)}
        onError={(err)=>console.log("ERR:",err)}
        // beforeUpload={(file => {
        //   if(file.size>15162){
        //     alert(file.name + " 文件太大了")
        //     return false
        //   }else{
        //     return true
        //   }
        // })}
        onRemove={(file)=>console.log(file)}
      >
        <button>上传吧</button>
      </Upload>
      {/*<AutoComplete />*/}
      <Input prepend={"dd"} defaultValue={"3"} onChange={(e) => console.log(e.target.value)}/>
      <Icon icon={'arrow-down'} theme={'danger'}/>
      <Alert title={"dsda"} onClose={() => console.log("官彬了")}/>
      <Tabs>
        <Tabs.Item label={"dahiah "}>1</Tabs.Item>
        <Tabs.Item label={"dahiah "}>dd2d</Tabs.Item>
        <Tabs.Item label={"dahiah "}>33</Tabs.Item>
      </Tabs>
      <Menu defaultOpenSubMenus={["1"]} mode='horizontal' defaultIndex={"1"} onSelect={(index) => console.log(index)}>
        <Menu.Item disabled={true}>d</Menu.Item>
        <Menu.Item>
          222
        </Menu.Item>
        <Menu.SubMenu title={"d"}>
          <Menu.Item>e</Menu.Item>
          <Menu.Item>
            222
          </Menu.Item>
          <Menu.Item>
            222
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <Button autoFocus btnType='default' size='sm' className="dd" onClick={() => console.log(3)}>r</Button>
      <Button btnType='primary' size='lg' className="dd">r</Button>
      <Button btnType='danger' size='sm' className="dd">r</Button>
      <Button btnType='link' disabled href='https://www.baidu.com' size='lg' className="dd">r</Button>

      <br/>
      <Button btnType='primary' onClick={() => setShow(!show)}>TOGGLE</Button>
      <Transition in={show} animation={'zoom-in-left'} timeout={200}>
        <div>ssss</div>
      </Transition>

    </div>
  );
}

export default App;
