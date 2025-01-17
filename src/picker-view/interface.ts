import type { ViewProps } from 'react-native'

export type PickerOptionType = 'cascade' | 'multiple' | 'single'

export type PickerValue = string | number

/** 单列选择 */
export type PickerOption = {
  value: PickerValue
  label: PickerValue
  disabled?: boolean
  // for custom filed names
  [key: string]: any
}

export type PickerOptionMultipleWidthDefaultValue = {
  defaultValue?: PickerValue
  options: PickerOption[]
}

/** 多列选择 */
export type PickerOptionMultiple =
  | PickerOptionMultipleWidthDefaultValue
  | PickerOption[]

/** 联级选择 */
export type PickerOptionCascade = PickerOption & {
  children?: PickerOptionCascade[]
  // for custom filed names
  [key: string]: any
}

export type Column = PickerOption | PickerOptionMultiple | PickerOptionCascade

export interface PickerViewProps extends Pick<ViewProps, 'testID'> {
  value?: PickerValue[]

  defaultValue?: PickerValue[]

  /**
   * 选项改变时触发
   */
  onChange?: (values: PickerValue[], options: Column[]) => void

  /**
   * 对象数组，配置每一列显示的数据
   */
  columns: Column[]

  /**
   * 是否显示加载状态
   * @default false
   */
  loading?: boolean

  /**
   * 选项高度
   * @default 50
   */
  itemHeight?: number

  /**
   * 可见的选项个数
   * @default 5
   */
  visibleItemCount?: number
}

export interface PickerViewColumnProps {
  /**
   * 选项高度
   */
  itemHeight: number

  /**
   * 选项
   */
  options: PickerOption[]

  /**
   * 当前值
   */
  value?: PickerValue

  /**
   * 可见的选项个数
   */
  visibleItemCount?: number

  /**
   * 当值变化的时候
   */
  onChange?: (v: PickerOption) => void
}
