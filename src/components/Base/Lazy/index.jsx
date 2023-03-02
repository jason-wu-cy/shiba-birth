import React, { Suspense, useMemo, useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import loadable from '@loadable/component';
import Skeleton from '@mui/material/Skeleton';
import useTools from '@Hooks/useTools';

const Components = {};

const Lazy = props => {
  const { componentImport, componentChunkName, componentProps } = props;
  const { utility } = useTools();
  const [isRender, setIsRender] = useState(false);
  const RenderComponent = useMemo(() => {
    const Component = Components[componentChunkName];
    if (Component) {
      return <Component {...componentProps} />;
    }
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
      </div>
    );
  }, [componentChunkName, isRender, componentProps]);
  /* Views */
  const RenderSSR = () => {
    const isBot = utility.getIsBot();
    if (isBot && componentImport) {
      Components[componentChunkName] = require(`@Components/Pages/${componentImport}`).default;
      const Component = Components[componentChunkName];
      return <Component {...componentProps} />;
    }
    return (
      <Suspense fallback={<Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />}>
        {RenderComponent}
      </Suspense>
    );
  };
  /* Hooks */
  useEffect(() => {
    (async () => {
      if (!Components[componentChunkName] && componentImport) {
        Components[componentChunkName] = loadable(() => import(`@Components/Pages/${componentImport}`), {
          fallback: <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />,
        });
      }
      setIsRender(cloneDeep(!isRender));
    })();
  }, [componentChunkName]);
  /* Main */
  return <React.Fragment>{RenderSSR()}</React.Fragment>;
};

export default Lazy;
