import React from 'react';
import { Text, View } from 'react-native';
import tw from '../lib/tailwind';
interface HeaderTitleProps {
  headerContainerStyle?: any,
  logo?: any;
  logoStyle?: any,
  title?: any,
  titleStyle?: any,

  notificationIcon?: any,
  onPressNotification?: () => void;
  chatIcon?: string;
  onPressChatIcon?: ()=> void;

  notificationBadge?: any,
  notificationBadgeStyle?: any,

  chatBadge?: any;
  chatBadgeStyle?: any;

  themeModeIcon?: any,
  themeModeIconStyle?: any
}

export default function HeaderTitle({
  headerContainerStyle,
  logo,
  logoStyle,
  title,
  titleStyle,

  notificationBadge,
  onPressNotification,
  notificationIcon,
  notificationBadgeStyle,

  chatBadge,
  chatBadgeStyle,
  chatIcon,
  onPressChatIcon,

  themeModeIcon,
  themeModeIconStyle,
}: HeaderTitleProps) {
  
  return (
    <View style={[tw` py-4 flex-row items-center justify-between `, headerContainerStyle]}>
      <View style={tw`items-center flex-row gap-2`}>
        {logo ?
        <View>
          {logo}
        </View>
        :
        <View>
          <Text>hi</Text>
        </View>
      }
      {title &&
        <View>
          {title}
        </View>

      }
      </View>

      <View>
        {notificationIcon && 
          <View>
            {notificationIcon}
            </View>
        }
      </View>
      
    </View>
  )
}