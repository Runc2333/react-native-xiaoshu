import React, { useMemo } from 'react'
import { Text } from 'react-native'

import { ErrorBoundary } from 'react-native-xiaoshu'

const ErrorApp = () => {
  const randomData = useMemo(() => {
    if (Math.random() > 0.5) {
      return {
        text: '显示了内容',
      }
    }
    return null
  }, [])

  return <Text>{randomData.text}</Text>
}

const BasicResult: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorApp />
    </ErrorBoundary>
  )
}

export default BasicResult