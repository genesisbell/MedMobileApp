import React from 'react';
import { StyleSheet, View } from 'react-native';
import { bgSpace, mdSpace, smSpace, xbgSpace, xsmSpace } from 'styles';

interface BaseSpaceProps {
  xsm?: boolean;
  sm?: boolean;
  md?: boolean;
  bg?: boolean;
  xbg?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  size?: string | number;
}

export function BaseSpace(props: BaseSpaceProps) {
  const { xsm, sm, md, bg, xbg, vertical, horizontal, size } = props;
  let sz = smSpace;

  if (xsm) {
    sz = xsmSpace;
  } else if (sm) {
    sz = smSpace;
  } else if (md) {
    sz = mdSpace;
  } else if (bg) {
    sz = bgSpace;
  } else if (xbg) {
    sz = xbgSpace;
  }

  type styleType = {
    spaceHorizontal: {
      height: number | string;
      width: number | string;
    };
    spaceVertical: {
      height: number | string;
      width: number | string;
    };
  };

  const style: styleType = StyleSheet.create({
    spaceHorizontal: {
      height: 1,
      width: size || sz,
    },
    spaceVertical: {
      height: size || sz,
      width: 1,
    },
  });

  let spaceStyle = style.spaceVertical;

  if (vertical) {
    spaceStyle = style.spaceVertical;
  } else if (horizontal) {
    spaceStyle = style.spaceHorizontal;
  }

  return <View style={spaceStyle} />;
}
