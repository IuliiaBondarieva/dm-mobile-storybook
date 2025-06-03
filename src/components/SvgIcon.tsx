import React from 'react';
import { View } from 'react-native';
import HomeIconSvg from '@/assets/icons/home.svg';
import PrescriptionsIconSvg from '@/assets/icons/prescription.svg';
import CategoriesIconSvg from '@/assets/icons/overview.svg';
import CartIconSvg from '@/assets/icons/cart.svg';
import AccountIconSvg from '@/assets/icons/account.svg';
import DeliveryIconSvg from '@/assets/icons/delivery.svg';
import CloseIconSvg from '@/assets/icons/close.svg';
import CardIconSvg from '@/assets/icons/card.svg';
import AngleRightIconSvg from '@/assets/icons/angle-right.svg';

export interface SvgIconProps {
  name: 'home' | 'categories' | 'prescriptions' | 'cart' | 'account' | 'delivery' | 'close' | 'card' | 'angleRight';
  size?: number;
  color?: string;
  focused?: boolean;
  backgroundColor?: string;
  backgroundSize?: number;
}

const iconComponents = {
    home: HomeIconSvg,
    categories: CategoriesIconSvg,
    prescriptions: PrescriptionsIconSvg,
    cart: CartIconSvg,
    account: AccountIconSvg,
    delivery: DeliveryIconSvg,
    close: CloseIconSvg,
    card: CardIconSvg,
    angleRight: AngleRightIconSvg
  };

export const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  size = 24,
  color = '#666',
  backgroundColor,
  backgroundSize
}) => {
  const Icon = iconComponents[name];

  const iconElement = (
    <Icon
      width={size}
      height={size}
      color={color}
    />
  );

  if (backgroundColor) {
    const bgSize = backgroundSize || size * 1.5;
    return (
      <View
        style={{
          width: bgSize,
          height: bgSize,
          borderRadius: bgSize / 2,
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {iconElement}
      </View>
    );
  }

  return iconElement;
};