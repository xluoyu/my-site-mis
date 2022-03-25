import { Get } from './request'

export const GetTestDocs = () => {
  return Get({
    url: '/docs'
  })
}