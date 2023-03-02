import React from 'react';
import ReactDOM from 'react-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Debug from '@Debug/index';
import Env from '@Env/index';
import '@CSS/index.css';
import '@Plugin/index.js';

const nonce = 'template';

const DebugLog = new Debug();

async function renderMainApp() {
  const mainAppProvider = require('@Providers/index').default;
  const Provider = mainAppProvider();
  const cache = createCache({
    key: 'mew-prefix',
    nonce,
  });
  ReactDOM.render(
    <CacheProvider value={cache}>
      <Provider />
    </CacheProvider>,
    document.getElementById('root'),
  );
}

/* 渲染 APP */
renderMainApp();

/* 開啟 DEBUG */
if (Env.Debug) DebugLog.print();
