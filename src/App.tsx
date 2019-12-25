import React, {useState} from 'react';
import './App.css';
import {Button, Card, Col, Layout, message, Modal, Popover, Row, Tooltip} from "antd";
import imgURL from './image/icon.png';
import imgURL1 from './image/1.jpg';
import imgURL2 from './image/2.jpg';
import imgURL3 from './image/3.jpg';

const {Header, Footer, Content} = Layout;
const App: React.FC = () => {
    const {confirm} = Modal;
    const [onEarth, setOnEarth] = useState(true)
    const showConfirm = () => {
        confirm({
            title: '下载前提示',
            content: '请不要进行打包备份或者下载其他渠道的安装包，务必阅读完应用内的"请务必读完"与github内的readme，不是最新版或者非开发者提供的渠道安装出现问题，开发者是不管的哦(还是推荐去github或者google play下载安装)',
            onOk() {
                tryToDownLoad()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    const toGitHub = () => {
        window.open('https://github.com/Notsfsssf/Pix-EzViewer')
    }

    const toGooglePlay = () => {
        window.open('https://play.google.com/store/apps/details?id=com.perol.asdpl.play.pixivez')
    }
    const success = () => {
        message.success('下载已准备开始,请耐心等待', 5);
    };
    const tryToDownLoad = () => {
        success()
        window.open("http://github.com/Notsfsssf/Pix-EzViewer/releases/latest/download/app-release.apk")
    }
    const notOnEarth = () => {
        setOnEarth(false)
    }
    return (
        <div className="App">
            <Layout>
                <Header style={{backgroundColor: "white"}}></Header>
                <Content style={{backgroundColor: "white"}}> <Row type="flex" justify="center" className="main"
                                                                  gutter={[16, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                    <Col xs={24} xl={24}>
                        <Row type="flex" justify="center">
                            <Col span={8}></Col>
                            <Col span={8}></Col>

                            <Col span={4}>
                                <Tooltip placement="topLeft" title={"有可能会坏的国内镜像"}>
                                    <Button type={"primary"} onClick={showConfirm}>下载</Button>
                                </Tooltip>

                            </Col>

                        </Row>
                    </Col>
                    <Col xs={16} xl={4}>
                        <Row justify={"center"}>
                            <img src={imgURL} className="icon" alt={""}/>
                        </Row>
                        <Row className="head_text">
                            <h1> 一个支持<br/>免代理直连<br/>及查看动图的<br/>Pixiv android<br/>客户端
                            </h1>
                        </Row>
                        <Row>
                            <p>
                                <h2>Pix-EzViewer
                                </h2>
                            </p>
                        </Row>
                        <Row>
                            {
                                onEarth ?
                                    <img alt="Get it on Google Play"
                                         src="https://camo.githubusercontent.com/59c5c810fc8363f8488c3a36fc78f89990d13e99/68747470733a2f2f706c61792e676f6f676c652e636f6d2f696e746c2f656e5f75732f6261646765732f696d616765732f67656e657269632f656e5f62616467655f7765625f67656e657269632e706e67"
                                         width="175"
                                         onClick={toGooglePlay}
                                         onError={notOnEarth}
                                         data-canonical-src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                                         style={{maxWidth: "100%"}}/> :
                                    <Button
                                        type="default"
                                        icon="google"
                                        color={"green"}
                                        onClick={toGooglePlay}
                                    >
                                        Google play
                                    </Button>
                            }
                        </Row>
                        <Row>
                            <Tooltip placement="bottom" title={"推荐下载，有一定....难度？"}>
                                <Button
                                    type="default"
                                    icon="github"

                                    onClick={toGitHub}
                                >
                                    Github
                                </Button>
                            </Tooltip>

                        </Row>
                        <Row>
                            <Popover
                                content={<a href="https://sm.ms/image/gKatRbfSNrkv2Oz" target="_blank"><img
                                    src="https://i.loli.net/2019/12/24/gKatRbfSNrkv2Oz.gif"/></a>}
                                title="Asset"
                            >
                                <Button shape="circle" icon="question" style={{marginTop: 10}}/> Tip
                            </Popover>
                        </Row>
                    </Col>
                    <Col xs={16} xl={4}>
                        <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={imgURL1}/>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={16} xl={4}>
                        <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={imgURL2}/>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={16} xl={4}>
                        <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={imgURL3}/>
                            </div>
                        </Card>
                    </Col>

                </Row></Content>
                <Footer style={{backgroundColor: "white"}}><Row type="flex" justify={"center"}>
                    <Col span={2}>
                        {/*<div style={{marginTop:10}}>*/}
                        {/*    Version:  1.4.4W*/}
                        {/*</div>*/}
                    </Col>
                </Row></Footer>
            </Layout>
            {/*<div style={{height: 60}}>*/}

            {/*</div>*/}


        </div>
    );
}

export default App;
