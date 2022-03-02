import { Tabs, Collapse } from 'antd';
import  '../css/tabs.css'
import 'antd/dist/antd.css';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;

const Tab = () => (
    <Tabs defaultActiveKey="1">
    <TabPane tab="Multi-Chain Live charting" key="1">
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    
    </TabPane>
    <TabPane tab="Protfolio Tracker"  key="2">
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    </TabPane>
    <TabPane tab="NTF Platform" key="3">
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority 1" key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1">
      <p>{text}</p>
    </Panel>
    </Collapse>
    </TabPane>
  </Tabs>
);

export default Tab