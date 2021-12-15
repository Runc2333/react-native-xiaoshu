import React from 'react'
import { ScrollView } from 'react-native'

import { Tag, Cell, CellGroup, Toast } from '@fruits-chain/react-native-xiaoshu'

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法" bordered={false}>
        <Cell title="default 类型" value={<Tag>标签 fill</Tag>} />
        <Cell
          title="primary 类型"
          value={
            <>
              <Tag type="primary">标签 fill</Tag>
              <Tag type="primary">标签 fill</Tag>
            </>
          }
        />
        <Cell
          title="success 类型"
          value={<Tag type="success">标签 fill</Tag>}
        />
        <Cell title="danger 类型" value={<Tag type="error">标签 fill</Tag>} />
        <Cell
          title="warning 类型"
          value={<Tag type="warning">标签 fill</Tag>}
          bordered={false}
        />
      </CellGroup>

      <CellGroup title="样式风格" bordered={false}>
        <Cell
          title="空心样式"
          value={
            <Tag type="primary" outward="ghost">
              标签 ghost
            </Tag>
          }
        />
        <Cell
          title="空心样式"
          value={
            <Tag type="success" outward="ghost">
              标签 ghost
            </Tag>
          }
        />
        <Cell
          title="空心样式"
          value={
            <Tag type="error" outward="ghost">
              标签 ghost
            </Tag>
          }
        />
        <Cell
          title="空心样式"
          value={
            <Tag type="warning" outward="ghost">
              标签 ghost
            </Tag>
          }
        />
        <Cell
          title="扁平样式"
          value={
            <Tag type="primary" outward="flat">
              标签 flat
            </Tag>
          }
        />
        <Cell
          title="扁平样式"
          value={
            <Tag type="success" outward="flat">
              标签 flat
            </Tag>
          }
        />
        <Cell
          title="扁平样式"
          value={
            <Tag type="error" outward="flat">
              标签 flat
            </Tag>
          }
        />
        <Cell
          title="扁平样式"
          value={
            <Tag type="warning" outward="flat">
              标签 flat
            </Tag>
          }
        />
        <Cell
          title="细边样式"
          value={
            <Tag type="primary" hairline outward="ghost">
              标签 ghost
            </Tag>
          }
        />
        <Cell
          title="圆角样式"
          value={
            <Tag type="primary" round>
              标签 round
            </Tag>
          }
        />
        <Cell
          title="标记样式"
          value={
            <Tag type="success" mark>
              标签
            </Tag>
          }
        />
        <Cell
          title="可关闭标签"
          value={
            <Tag
              type="error"
              closeable
              onPressClose={() => {
                Toast('点击了关闭按钮')
              }}>
              标签
            </Tag>
          }
          bordered={false}
        />
      </CellGroup>

      <CellGroup title="标签大小" bordered={false}>
        <Cell
          title="小号标签"
          value={
            <Tag type="primary" size="small">
              标签
            </Tag>
          }
        />
        <Cell
          title="中号标签"
          value={
            <Tag type="primary" size="medium">
              标签
            </Tag>
          }
        />
        <Cell
          title="大号标签"
          value={
            <Tag type="primary" size="large">
              标签
            </Tag>
          }
          bordered={false}
        />
      </CellGroup>

      <CellGroup title="自定义颜色" bordered={false}>
        <Cell title="背景颜色" value={<Tag color="#7232dd">标签</Tag>} />
        <Cell
          title="文字颜色"
          value={
            <Tag color="#ffe1e1" textColor="#ad0000">
              标签
            </Tag>
          }
        />
        <Cell
          title="空心颜色"
          value={
            <Tag color="#7232dd" textColor="#f30" outward="ghost">
              标签
            </Tag>
          }
        />
        <Cell
          title="空心颜色"
          value={
            <Tag color="#7232dd" textColor="#f30" outward="ghost" closeable>
              标签
            </Tag>
          }
        />
        <Cell
          title="空心颜色"
          value={
            <Tag color="#7232dd" outward="ghost">
              标签
            </Tag>
          }
          bordered={false}
        />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicTag
