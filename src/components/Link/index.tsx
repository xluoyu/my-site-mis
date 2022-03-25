function Link(props: {
  // 跳转链接
  href?: string
  // 是否打开新页面
  blank?: false
  children?: any
}) {
  console.log(props)
  const {
    href,
    blank
  } = props
  return ( 
    <a href={href} target={blank ? '_blank' : '_self'}>{props.children}</a>
   );
}

export default Link;