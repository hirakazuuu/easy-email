import React from 'react';

import { classNames } from '../../utils/css';
import styles from '../../Stack.module.scss';

export interface ItemProps {
  /** Elements to display inside item */
  children?: React.ReactNode;
  /** Fill the remaining horizontal space in the stack with the item  */
  fill?: boolean;
  /**
   * @default false
   */
  key?: string | number;
}

export function Item({ children, fill }: ItemProps) {
  const className = classNames(styles.Item, fill && styles['Item-fill']);

  return <div className={className}>{children}</div>;
}