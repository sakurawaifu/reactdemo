import setTimeoutAsync from '../../utils/setTimeoutAsync'
import { LoaderFunction } from 'react-router-dom'

export type LoaderResult = string

const ExperimentLoader: LoaderFunction = async () => {
  console.log('experiment loader')
  await setTimeoutAsync(1000)
  const result: LoaderResult = 'loader complete'
  return result
}

export default ExperimentLoader
