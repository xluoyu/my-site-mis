import { Get } from './request'

export const GetHitokoto = () => {
  return Get({
    url: 'https://v1.hitokoto.cn',
  })
}