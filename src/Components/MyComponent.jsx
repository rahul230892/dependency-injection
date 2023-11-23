import React, { useEffect } from 'react'
import { useDependency } from '../Contexts/DependencyProvider'


export const MyComponent = () => {
    const {myService, logger} = useDependency()
    myService.callMe()

    useEffect(() => {
        logger.log('This is a message')
    },[])
  return (
    <div>MyComponent</div>
  )
}

export default MyComponent