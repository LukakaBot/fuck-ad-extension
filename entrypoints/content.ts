import ReactDOM from 'react-dom/client';
import HelloWorld from '@/components/HelloWorld/HelloWorld';
import React from 'react';

export default defineContentScript({
  // matches: ['*://*.google.com/*'],
  matches: ['<all_urls>'],
  main(ctx) {
    console.log('Hello content.');

    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'nodata ',
      onMount: (container) => {
        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(container);
        root.render(HelloWorld as unknown as React.ReactNode);
        return root;
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root && root.unmount();
      },
    });

    // Call mount to add the UI to the DOM
    ui.mount();
  },
});
