import type { ISampleProps } from './typed'

import style from './style.module.scss'

export const Sample = ({ text }: ISampleProps) => {
  return <div className={style.text}>{text}</div>
}

Sample.defaultProps = {
  text: 'Sample component',
}
