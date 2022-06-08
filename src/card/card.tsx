import isBoolean from 'lodash/isBoolean'
import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'

import Divider from '../divider'
import { renderTextLikeJSX } from '../helpers'
import Skeleton from '../skeleton'
import Theme from '../theme'

import CardBody from './card-body'
import type { CardProps } from './interface'
import { varCreator, styleCreator } from './style'

const Card: React.FC<CardProps> = ({
  children,
  title,
  titleLeftExtra,
  extra,
  footer,
  headerStyle,
  titleStyle,
  titleTextStyle,
  bodyStyle,
  footerStyle,
  footerTextStyle,
  size = 'm',
  square = false,
  loading = false,
  headerDivider = true,
  footerDivider = true,
  bodyPadding = true,
  onPressHeader,
  onLayoutHeader,
  onLayoutBody,

  style,
  ...restProps
}) => {
  const isS = size === 's'

  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const hasTitleLeftExtra = !isNil(titleLeftExtra)
  const titleJSX = renderTextLikeJSX(
    title,
    [
      STYLES.title_text,
      isS ? STYLES.title_text_s : null,
      titleTextStyle,
      hasTitleLeftExtra ? STYLES.title_text_margin_left : null,
    ],
    {
      numberOfLines: 1,
    },
  )
  const footerJSX = renderTextLikeJSX(footer, [
    STYLES.footer_text,
    footerTextStyle,
  ])

  const showHeader = !isNil(titleJSX) || hasTitleLeftExtra || !isNil(extra)
  const headerJSX = (
    <View collapsable={false}>
      <View
        style={[STYLES.header, isS ? STYLES.header_s : null, headerStyle]}
        onLayout={onLayoutHeader}>
        <View style={[STYLES.title, titleStyle]}>
          {titleLeftExtra}
          {titleJSX}
        </View>
        {extra}
      </View>
      {headerDivider ? <Divider /> : null}
    </View>
  )

  return (
    <View
      {...restProps}
      style={[
        STYLES.card,
        square ? null : STYLES[`card_radius_${size}`],
        style,
      ]}>
      {showHeader ? (
        onPressHeader ? (
          <TouchableWithoutFeedback onPress={onPressHeader}>
            {headerJSX}
          </TouchableWithoutFeedback>
        ) : (
          headerJSX
        )
      ) : null}
      <CardBody
        style={bodyStyle}
        padding={
          isBoolean(bodyPadding) && bodyPadding ? CV.card_padding : bodyPadding
        }
        onLayout={onLayoutBody}>
        {loading ? <Skeleton loading /> : children}
      </CardBody>

      {!isNil(footerJSX) ? (
        <>
          {footerDivider ? <Divider /> : null}
          <View style={[STYLES.footer, footerStyle]}>{footerJSX}</View>
        </>
      ) : null}
    </View>
  )
}

export default memo<typeof Card>(Card)
