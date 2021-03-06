import React, {Component, PropTypes} from 'react';
import {Icon, Button} from 'antd';
import {tr} from '../../lib/Utils'
export default class ExtraButton extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        tr: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props)
        // this.idxInterval = 0;
    }

    componentDidMount() {
        //初始化渲染执行之后立刻调用
        // console.log(232)
    }

    showInfo(e) {
        // console.log('show',this.idxInterval)
        // clearInterval(this.idxInterval)
        var trid = this.props.tr;
        var tip = document.getElementById('tip' + trid);
        tip.className = 'info-show';
        // tip.style.left = '160px';
        var rect = e.target.getBoundingClientRect();
        // console.log('rect',rect);
        // var top = rect.top+'px';
        // var left = rect.left+'px';
        // console.log('top:', e.target.getBoundingClientRect().top)
        tip.style.top = rect.bottom + 10 + 'px';
        // tip.style.top = '-8px';
        tip.style.left = rect.left-tip.getBoundingClientRect().width+44+'px';
        // tip.style.left = rect.left-tip.offsetWidth+rect.width+'px';
        // console.log('left:',rect.left,tip.offsetWidth)
        // console.log(12312,tip.offsetWidth,tip)
        // var id = e.target.id;
        // console.log('showInfo',id,this.arrInfos[id],tr(this.arrInfos[id]))
        // document.getElementById('tipContent'+this.props.tr).innerHTML = tr(trid);
    }

    hideInfo() {
        // this.idxInterval = setTimeout(()=> {
        //     clearInterval(this.idxInterval);
        //     // console.log('hide',this.idxInterval)
        //     var tip = document.getElementById('tip'+this.props.tr);
        //
        // }, 100);
        var tip = document.getElementById('tip' + this.props.tr);
        if (tip) {
            tip.className = 'info-hide';
        }

    }

    render() {
        var trid = this.props.tr;
        return (
            <div style={{display:'inline-block',marginRight:'2px'}}>
                <div id={"tip"+trid} className="info-hide" style={{lineHeight:"20px"}}>
                    <div className="arrowUp" style={{right:'16px',top: '-8px'}}/>
                    <div id={"tipContent"+trid} style={{display:'block',whiteSpace:'nowrap'}}>{tr(trid)}</div>
                </div>
                <Button onMouseOver={this.showInfo.bind(this)} onMouseOut={this.hideInfo.bind(this)}
                        onClick={this.props.onClick}><Icon style={{pointerEvents:"none"}}
                                                           type={this.props.iconName}/></Button>
            </div>
        )
    }
}
// ExtraButton.propTypes = {
//     iconName:PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//     tr: PropTypes.number.isRequired
// }