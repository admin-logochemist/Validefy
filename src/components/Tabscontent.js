import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css'
import wallet_icon from '../images/wallet-solid.svg'
import BitCoin from '../pages/BitCoin';
import bitcoin_icon from '../images/bitcoin.png'
import Ethcoin_icon from '../images/eth.svg'
import Tethercoin_icon from '../images/tether.png'
import Bnb_icon from '../images/bnb.svg'
import Usd_icon from '../images/usd-coin.png'
import '../css/tab_content.css'
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Tabscontent(){
  return(
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <div className='vollet_btn'><button><img src={wallet_icon}/>Connect Wallet</button></div>
              <Tabs defaultActiveKey="2">
                <TabPane
                  tab={
                    <span className='tabs'>
                    {/* <i class="fa fa-bitcoin"></i> */}
                    <img src={bitcoin_icon}/>
                      Bit Coin
                    </span>
                  }
                  key="1"
                >
                <BitCoin />
                </TabPane>

                  <TabPane
                    tab={
                      <span className='tabs'>
                       <img src={Ethcoin_icon}/>
                      ETH
                      </span>
                    }
                    key="2"
                  >
                    Tab 2

                  </TabPane>

                  <TabPane
                    tab={
                      <span className='tabs'>
                        <img src={Tethercoin_icon} />
                     Tether
                      </span>
                    }
                    key="3"
                  >
                    Tab 3
                  </TabPane>


                  <TabPane
                    tab={
                      <span className='tabs'>
                        <img src={Bnb_icon} />
                        Binance 
                      </span>
                    }
                    key="4"
                  >
                    Tab 4
                  </TabPane>
                  
                  <TabPane
                    tab={
                      <span className='tabs'>
                        <img src={Usd_icon} />
                     USD
                      </span>
                    }
                    key="5"
                  >
                    Tab 5
                  </TabPane>
              </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
// const Tabscontent = () => (

// );

export default Tabscontent