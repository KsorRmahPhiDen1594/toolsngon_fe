import { ReactNode } from 'react';

interface NestedLayoutProps {
  children: ReactNode;
}

const NestedLayout: React.FC<NestedLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default NestedLayout;