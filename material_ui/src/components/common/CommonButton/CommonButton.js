import React from 'react'
import Button from '@mui/material/Button';

export const CommonButton = ({ children, color, disabled, size, sx, variant}) => {
  return (
    <div>
        <Button
          color={color}
          disabled={disabled}
          size={size}
          variant={variant}
          sx={sx}
        >
          {children}
        </Button>
    </div>
  )
}
