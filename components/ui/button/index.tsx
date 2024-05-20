import React, { forwardRef, useRef, ButtonHTMLAttributes } from 'react';
import { mergeRefs } from 'react-merge-refs';
import cn from 'classnames';
import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  loading?: boolean;
  width?: number | string;
  shape?: 'surface' | 'filled';
  Component?: React.ComponentType;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, buttonRef) => {
  const {
    // className,
    children,
    active,
    loading = false,
    disabled = false,
    shape,
    style = {},
    Component = 'button',
    ...rest
  } = props;

  const ref = useRef(null);

  const rootClassName = cn(styles.root, shape && styles[shape], {
    [styles.loading]: loading,
    [styles.disabled]: disabled
  });

  return (
    <Component
      aria-pressed={active}
      data-shape={shape}
      ref={mergeRefs([ref, buttonRef])}
      className={`${rootClassName}`}
      disabled={disabled}
      style={{
        // width: width ? width : 'auto',
        ...style
      }}
      {...rest}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
