import React, { FC } from 'react';
import Todo from './components/Todo'
const Page2: FC = () => {

    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Todo />
      </div>
    )
}
export default Page2