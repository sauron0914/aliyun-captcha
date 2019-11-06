import { singletonObj } from '@livelybone/singleton'

export interface SuccData {
  sessionId?: string
  sig?: string
}

type Str = string | string[]

export interface AliyunCaptchaConfig {
  /**
   *  AliyunCaptcha 元素的 appkey 参数
   *
   *  应用类型标识。它和使用场景标识（scene字段）一起决定了智能验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
   *
   *  appkey attribute of AliyunCaptcha element
   * */
  appkey: string

  /**
   *  AliyunCaptcha 元素的 scene 参数
   *
   *  使用场景标识。它和应用类型标识（appkey字段）一起决定了智能验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的scene值，请务必正确填写。
   *
   *  scene attribute of AliyunCaptcha element
   * */
  scene: string

  /**
   *  前端智能验证通过时会触发该回调参数。您可以在该回调参数中将请求标识（token）、会话ID（sessionid）、签名串（sig）字段记录下来，随业务请求一同发送至您的服务端调用验签。
   * */
  success: (captcha: SuccData) => void
  /**
   *  声明智能验证参数列表
   * */
  smartCaptchaExtendConfig?: {
    /**
     *  声明智能验证需要渲染的目标元素ID。
     * */
    renderTo?: string
    /**
     *  智能验证组件的宽度。
     * */
    width?: number
    /**
     *  智能验证组件的高度。
     * */
    height?: number
    /**
     *  智能验证组件初始状态文案。
     * */
    default_txt?: string
    /**
     *  智能验证组件验证通过状态文案。
     * */
    success_txt?: string
    /**
     *  智能验证组件验证失败（拦截）状态文案。
     * */
    fail_txt?: string
    /**
     *  智能验证组件验证中状态文案。
     * */
    scaning_txt: string

    /**
     * 前端智能验证失败时会触发该回调参数。
     */
    fail?: () => void
  }
  NVC_Opt?: {
    /**
     * 声明二次验证需要渲染的目标元素ID。
     */
    renderTo?: string
    //业务键字段，可为空。该参数可用于上线前测试，请按照代码集成后测试部分中的方法配置该字段值。
    trans?: {
      [p in number | string]: string | number
    }
    //当唤醒刮刮卡验证作为二次验证时，配置需要刮出的两个elements的图片资源。
    elements: string[]
    //当唤醒刮刮卡验证作为二次验证时，配置刮动时的背景图像（自动应用平铺填充的方式）。
    bg_back_prepared?: string
    //当唤醒刮刮卡验证作为二次验证时，配置刮动时的前景图像（仅支持base64数据流）。
    bg_front?: string
    //当唤醒刮刮卡验证作为二次验证时，配置验证通过时显示的图标资源。
    obj_ok?: string
    //当唤醒刮刮卡验证作为二次验证时，配置验证通过时显示的背景图像（自动应用平铺填充的方式）。
    bg_back_pass?: string
    //当唤醒刮刮卡验证作为二次验证时，配置验证失败或异常时显示的图标资源。
    obj_error?: string
    //当唤醒刮刮卡验证作为二次验证时，配置验证失败或异常时显示的背景图像（自动应用平铺填充的方式）。
    bg_back_fail?: string
    //当唤醒刮刮卡验证作为二次验证时，用于自定义文案。详细配置方法请参见自定义文案文档。
    upLang?: {
      cn?: {
        _ggk_guide?: string
        _ggk_success?: string
        _ggk_loading?: string
        _ggk_fail?: Str
        _ggk_action_timeout?: Str
        _ggk_net_err?: Str
        _ggk_too_fast?: Str
      }
    }
  }
}

export function LoadAliyunCaptcha(name: string, src: string) {
  return singletonObj(name, () => {
    const dom = document.createElement('script')
    dom.type = 'text/javascript'
    dom.async = true
    dom.src = src
    document.head.appendChild(dom)
    return new Promise(res => (dom.onload = res))
  })
}

export function LoadAliyunCaptchas() {
  return LoadAliyunCaptcha(
    'smartCaptcha',
    '//g.alicdn.com/sd/smartCaptcha/0.0.4/index.js',
  ).then(() => {
    LoadAliyunCaptcha(
      'quizCaptcha',
      '//g.alicdn.com/sd/quizCaptcha/0.0.1/index.js',
    ).then(() => {
      LoadAliyunCaptcha(
        'guide',
        '//g.alicdn.com/sd/nvc/1.1.112/guide.js?t=2015052012',
      )
    })
  })
}

export function resetAliyunCaptcha(sc: any) {
  try {
    if (sc) sc.reset()
  } catch (error) {
    console.warn('AliyunCaptcha reset error', error)
  }
}
