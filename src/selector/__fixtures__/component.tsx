/**
 * title: 组件调用
 * desc: 普通组件。
 */

import React, { useState } from 'react'

import { Cell, Selector } from '@fruits-chain/react-native-xiaoshu'

const BasicSelectorComponent: React.FC = () => {
  const [state, setState] = useState({
    show: false,
    option: [
      { value: 1, label: '111111' },
      { value: 2, label: '2222222' },
      { value: 3, label: '3333333' },
    ],
    value: null,
  })

  return (
    <>
      <Cell.Group title="组件调用">
        <Cell
          title="组件调用"
          isLink
          onPress={() => {
            console.log('组件调用 -> show')
            setState(s => ({
              ...s,
              show: true,
            }))
          }}
        />
        <Cell
          title="组件调用:重置"
          isLink
          divider={false}
          onPress={() => {
            console.log('组件调用 -> rest')
            setState(s => ({
              ...s,
              value: null,
            }))
          }}
        />
      </Cell.Group>

      <Selector.Component
        title="这里应该有一个标题"
        visible={state.show}
        options={state.option}
        value={state.value}
        onClose={() => {
          console.log('组件调用 -> onClose')
          setState(s => ({
            ...s,
            show: false,
          }))
        }}
        onChange={(v, option) => {
          console.log(v)
          console.log(option)
          console.log('组件调用 -> onChange')
          setState(s => ({
            ...s,
            value: v,
            show: false,
          }))
        }}
      />
    </>
  )
}

export default BasicSelectorComponent
