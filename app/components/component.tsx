import React from 'react';

const New = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props} htmlFor="dad" className={className}>
      {children}
    </label>
  );
};

export default function Component() {
  return (
    <div>
      <New> hii there</New>
    </div>
  );
}
