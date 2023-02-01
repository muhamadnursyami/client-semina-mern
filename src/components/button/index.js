import React from "react";
import Button from "react-bootstrap/Button";

function SButton({
  children,
  action,
  variant,
  size,
  loading,
  disabeld,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabeld={disabeld}
      size={size}
    >
      {/* loading disini berarti jika anda klik tonbolnya maka dia nggak bisa di click lagi
      ,karena jika tidak dilakukan itu, maka user bisa mengklik misalkan 5 kali, maka
      di backend nya ada dapat request sebanyak 5 kali */}
      {loading ? "Loading..." : children}
    </Button>
  );
}

export default SButton;
