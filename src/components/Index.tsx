import React, { useEffect, forwardRef, useImperativeHandle } from 'react'
import { LoadAliyunCaptchas, AliyunCaptchaConfig, SuccData } from './utils'

declare class smartCaptcha {
  constructor(params: AliyunCaptchaConfig['smartCaptchaExtendConfig'])

  reset: () => void
  init: () => void
}

declare global {
  interface Window {
    NVC_Opt?: {
      appkey: string
      scene: string
    } & AliyunCaptchaConfig['NVC_Opt']
  }
}

const _smartCaptchaExtendConfig = {
  renderTo: 'sc',
  width: 280,
  height: 42,
  default_txt: '点击按钮开始智能验证',
  success_txt: '验证成功',
  fail_txt: '验证失败，请在此点击按钮刷新',
  scaning_txt: '智能检测中',
  fail: () => {},
}
const _NVC_Opt = {
  renderTo: 'captcha',
  trans: { key1: 'code0', nvcCode: 200 },
  elements: [
    '//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png',
    '//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png',
  ],
  bg_back_prepared:
    '//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png',
  bg_front:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC',
  obj_ok: '//img.alicdn.com/tfs/TB1rmyTltfJ8KJjy0FeXXXKEXXa-50-74.png',
  bg_back_pass: '//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png',
  obj_error: '//img.alicdn.com/tfs/TB1q9yTltfJ8KJjy0FeXXXKEXXa-50-74.png',
  bg_back_fail: '//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png',
  upLang: {
    cn: {
      _ggk_guide: '请摁住鼠标左键，刮出两面盾牌',
      _ggk_success: '恭喜您成功刮出盾牌<br/>继续下一步操作吧',
      _ggk_loading: '加载中',
      _ggk_fail: [
        '呀，盾牌不见了<br/>请',
        'javascript:noCaptcha.reset()',
        '再来一次',
        '或',
        'http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN',
        '反馈问题',
      ],
      _ggk_action_timeout: [
        '我等得太久啦<br/>请',
        'javascript:noCaptcha.reset()',
        '再来一次',
        '或',
        'http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN',
        '反馈问题',
      ],
      _ggk_net_err: [
        '网络实在不给力<br/>请',
        'javascript:noCaptcha.reset()',
        '再来一次',
        '或',
        'http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN',
        '反馈问题',
      ],
      _ggk_too_fast: [
        '您刮得太快啦<br/>请',
        'javascript:noCaptcha.reset()',
        '再来一次',
        '或',
        'http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN',
        '反馈问题',
      ],
    },
  },
}

const AliyunCaptcha: React.FC<AliyunCaptchaConfig> = forwardRef(
  ({ appkey, scene, success, NVC_Opt, smartCaptchaExtendConfig }, ref) => {
    let ic: smartCaptcha
    useImperativeHandle(ref, () => ({
      reset: () => {
        ic.reset()
      },
    }))
    const smartConfig = {
      ..._smartCaptchaExtendConfig,
      ...smartCaptchaExtendConfig,
    }
    const init = () => {
      window.NVC_Opt = {
        ..._NVC_Opt,
        ...NVC_Opt,
        appkey,
        scene,
      }
      ic = new smartCaptcha({
        ...smartConfig,
        ...success,
      })
      ic.init()
    }

    useEffect(() => {
      LoadAliyunCaptchas().then(() => {
        init()
      })
    }, [init])

    return <div id={smartConfig.renderTo}></div>
  },
)

export default AliyunCaptcha
