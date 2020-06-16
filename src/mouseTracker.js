import React from 'react';
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div>
        <img src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2247692397,1189743173&fm=5" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        <div>{mouse.xjw}</div>
      </div>
    );
  }
}
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0, xjw: 'great' };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          使用 `render`prop 动态决定要渲染的内容，
          而不是给出一个 <Mouse> 渲染结果的静态表示
        */}
        {this.props.render11(this.state)}
        {/* {this.props.children} */}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render11={aaa => (
          <Cat mouse={aaa} />
        )}/>
        {/* <Mouse>
          {aaa => (
            <Cat mouse={aaa} />
          )}/>
        </Mouse>  */}
        
      </div>
    );
  }
}

export default MouseTracker