import * as React from "react"
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from "react-native-svg"

interface IUserProps {
  style?: StyleProp<ViewStyle>;
}

const UserOutlined: React.FC<IUserProps> = (props) => {
  return (
    <View style={props.style}>
      <Svg width={'100%'} height={'100%'} viewBox="0 0 20 20" fill="none">
        <Path
          d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM5.07 16.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78A7.893 7.893 0 0110 18c-1.86 0-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 012 10c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM10 4C8.06 4 6.5 5.56 6.5 7.5S8.06 11 10 11s3.5-1.56 3.5-3.5S11.94 4 10 4zm0 5c-.83 0-1.5-.67-1.5-1.5S9.17 6 10 6s1.5.67 1.5 1.5S10.83 9 10 9z"
          fill="#686868"
        />
      </Svg>
    </View>
  )
}

export default UserOutlined