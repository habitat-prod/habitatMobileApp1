import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ITrafficConeProps {
  style?: StyleProp<ViewStyle>;
}

const TrafficCone: React.FC<ITrafficConeProps> = (props) => (
  <View style={props.style}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      fill="none"
    >
      <Path
        fill="#F2F4F7"
        d="M93.256 121.875c51.504 0 93.257-17.72 93.257-39.58s-41.753-39.58-93.257-39.58C41.752 42.715 0 60.435 0 82.295s41.752 39.58 93.256 39.58Z"
      />
      <Path
        fill="#2A3033"
        d="M35.608 89.59c2.134 2.667 5.096 4.12 8.147 4l87.929-3.176s14.979 11.21 17.336 12.771c2.357 1.561 4.634-.954 2.944-3.697-1.69-2.743-17.505-23.904-17.505-23.904L35.599 89.59h.009Z"
      />
      <Path
        fill="#E56915"
        d="M150.203 102.752c-2.197-2.136-15.104-20.88-15.104-20.88l-18.457-79.8c-.134-.585.444-1.019.809-.596l8.895 10.244c1.69 1.941 2.918 4.402 3.558 7.112 0 0 19.836 82.153 20.299 83.93v-.01Z"
      />
      <Path
        fill="#AF4E0B"
        d="M129.246 9.866s-5.826-6.168-8.014-8.358c-2.393-2.385-3.923-1.583-4.439-.054 2.66 2.775 9.624 10.331 9.624 10.331 1.646 1.897 2.838 4.293 3.47 6.938l19.489 82.64c.258 1.074 1.058 1.822 1.983 1.822 1.13 0 1.948-1.312 1.637-2.635l-18.635-80.59c-.899-3.882-2.669-7.373-5.106-10.083l-.009-.01Z"
      />
      <Path
        fill="#FF9146"
        d="M38.285 74.588c-7.58 5.258-6.138 17.497 3.53 17.497 2.705 0 6.2-.14 10.257-.39-1.984-7.1-4.154-15.242-6.067-22.386a774.854 774.854 0 0 0-7.73 5.268l.01.011Z"
      />
      <Path
        fill="#fff"
        d="M46.015 69.318c1.912 7.145 4.074 15.286 6.066 22.387 4.875-.293 10.567-.748 16.66-1.29-2.17-8.348-5.3-20.75-7.88-30.962-5.4 3.556-10.461 6.917-14.846 9.865Z"
      />
      <Path
        fill="#FF9146"
        d="M122.574 19.471A7862.633 7862.633 0 0 0 98.967 34.65c2.739 10.504 10.363 41.14 13.12 51.245 11.19-1.28 20.521-2.407 25.2-2.982 1.806-.217 3.087-2.222 2.829-4.401-.623-5.215-2.073-15.232-5.186-28.23-3.007-12.575-7.125-24.24-9.047-29.422-.569-1.54-2.081-2.18-3.309-1.388Z"
      />
      <Path
        fill="#fff"
        d="M83.836 44.438c2.58 8.878 7.979 30.083 11.866 43.277 5.675-.607 11.217-1.225 16.376-1.822-2.749-10.103-10.381-40.74-13.12-51.245-4.76 3.08-9.892 6.397-15.122 9.79Z"
      />
      <Path
        fill="#FF9146"
        d="M60.86 59.451c2.589 10.212 5.711 22.614 7.882 30.962 8.557-.77 17.914-1.713 26.96-2.689-3.887-13.204-9.286-34.398-11.865-43.277a3887.272 3887.272 0 0 0-22.985 15.015l.009-.01Z"
      />
    </Svg>
  </View>
);

export default TrafficCone;
