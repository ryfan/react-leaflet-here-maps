import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { Card, Layout, Menu,  } from 'antd'
import { Map, TileLayer } from 'react-leaflet'
import { API_KEY } from './config/config'
import ReactLeafletSearch from "react-leaflet-search"
import L from 'leaflet'
import LocateControl from './component/LocateControl'
import icon from './assets/marker.svg'
const { Header, Content } = Layout

//Place your api key here maps in at config/config.jsx
const urlTile_HereMaps = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8
?apiKey=${API_KEY}`

const MarkerIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40],
  shadowSize: [29, 40],
  shadowAnchor: [7, 40],
})

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      zoom: 13,
    }
  }

  render() {
    const { zoom } = this.state
    const defaultLocation = [-6.178306, 106.631889]
    const locateOptions = {
      position: 'topleft',
      strings: {
        title: 'Get current location'
      },
      onActivate: () => { }
    }

    return (
      <>
        {/* Dynamic Title Page */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Leaflet with Here Maps</title>
        </Helmet>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">
                <a href='https://www.wenesia.com' target="_blank" rel="noopener noreferrer">WeNesia - Web Hosting Singapore</a>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Card>
                <Map center={defaultLocation} zoom={zoom} style={{ width: '100%', height: '587px' }}>
                  <LocateControl options={locateOptions} startDirectly />
                  <ReactLeafletSearch
                    position="topleft"
                    inputPlaceholder="Search place"
                    zoom={16}
                    showMarker={true}
                    showPopup={true}
                    openSearchOnLoad={false}
                    closeResultsOnClick={true}
                    className="custom-search-control-wrap"
                    markerIcon={MarkerIcon}
                  />
                  <TileLayer
                    attribution='&amp;copy <a href="http://developer.here.com">HERE Maps</a>'
                    url={urlTile_HereMaps}
                  />
                </Map>
                <div align="center" style={{marginTop: '10px', marginBottom: '-10px' }}>
                  <i className="fa fa-copyright"></i> 2020 <i className="fa fa-code"></i> with <i className="fa fa-heart"></i> By Ryfan Aditya Indra at Kabupaten Tangerang
                </div>
              </Card>
            </div>
          </Content>
        </Layout>
      </>
    )
  }
}

export default (App)
