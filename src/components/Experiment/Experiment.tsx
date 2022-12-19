import BasePropsType from '../../ts_define/BasePropsType'
import React, { ForwardedRef } from 'react'

export type ExperimentProps = BasePropsType & {}

const Experiment = React.forwardRef((props: ExperimentProps, ref: ForwardedRef<HTMLInputElement>) => {

  return (
    <div ref={ref}>实验</div>
  )
})

export default Experiment
