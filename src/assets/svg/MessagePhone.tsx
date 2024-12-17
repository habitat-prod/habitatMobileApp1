import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const MessagePhone = (props: SvgProps) => (
  <Svg width={80} height={80} fill="none" {...props}>
    <Rect width={80} height={80} rx={40} fill="#F15927" fillOpacity={0.08} />
    <Path
      d="M58.74 54.205c-1.515 1.835-2.514 2.995-2.966 3.447-1.14 1.14-2.636 1.625-5.002 1.625-2.759 0-13.02-5.063-18.888-11.185-6.098-5.844-11.161-16.106-11.161-18.866 0-2.364.486-3.86 1.625-5 .45-.45 1.609-1.448 3.447-2.967a2.322 2.322 0 0 1 1.75-.521 2.32 2.32 0 0 1 1.595.894l5.742 7.43a3.9 3.9 0 0 1 .296 4.346l-.793 1.371a2.36 2.36 0 0 0 .167 2.62c.834 1.085 2.156 2.704 3.718 4.268 1.571 1.57 3.222 2.92 4.33 3.773a2.36 2.36 0 0 0 2.625.172l1.365-.788a3.897 3.897 0 0 1 4.346.293l7.432 5.744c.506.392.823.956.894 1.592a2.329 2.329 0 0 1-.521 1.752Z"
      fill="url(#a)"
    />
    <Path
      d="M56.865 21.274H48.678c-3.95 0-7.232 3.214-7.232 7.164 0 3.603 2.742 6.593 6.209 7.09v3.144a1.022 1.022 0 0 0 1.747.723l3.37-3.37.423-.423h3.67c3.95 0 7.232-3.214 7.232-7.164 0-3.95-3.282-7.164-7.232-7.164Z"
      fill="url(#b)"
    />
    <Path
      d="M48.677 29.461a1.023 1.023 0 1 0 0-2.047 1.023 1.023 0 0 0 0 2.047ZM52.772 29.461a1.023 1.023 0 1 0 0-2.047 1.023 1.023 0 0 0 0 2.047Z"
      fill="#613D5C"
    />
    <Path
      d="M53.795 28.438c0-.565-.458-1.023-1.023-1.023v2.046c.565 0 1.023-.458 1.023-1.023ZM56.866 29.461a1.023 1.023 0 1 0 0-2.047 1.023 1.023 0 0 0 0 2.047Z"
      fill="#4B2746"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={40}
        y1={21.474}
        x2={40}
        y2={58.101}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF9400" />
        <Stop offset={1} stopColor="#FF5F39" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={64.097}
        y1={27.722}
        x2={42.401}
        y2={27.926}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FED843" />
        <Stop offset={1} stopColor="#FABE2C" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default MessagePhone;
