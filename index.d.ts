import React from 'react'

interface SuccData {
  sessionId?: string
  sig?: string
}
declare type Str = string | string[]
interface AliyunCaptchaConfig {
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
    trans?: {
      [p in number | string]: string | number
    }
    elements: string[]
    bg_back_prepared?: string
    bg_front?: string
    obj_ok?: string
    bg_back_pass?: string
    obj_error?: string
    bg_back_fail?: string
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
declare function LoadAliyunCaptcha(name: string, src: string): Promise<unknown>
declare function LoadAliyunCaptchas(): Promise<void>
declare function resetAliyunCaptcha(sc: any): void

declare global {
  interface Window {
    NVC_Opt?: {
      appkey: string
      scene: string
    } & AliyunCaptchaConfig['NVC_Opt']
  }
}
declare const AliyunCaptcha: React.FC<AliyunCaptchaConfig>

export default AliyunCaptcha
export {
  AliyunCaptchaConfig,
  LoadAliyunCaptcha,
  LoadAliyunCaptchas,
  SuccData,
  resetAliyunCaptcha,
}
