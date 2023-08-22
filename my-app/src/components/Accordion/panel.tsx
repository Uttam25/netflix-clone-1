'use client'

import * as React from 'react';

export interface PanelProps {
  index: number;
  title: React.ReactNode;
  duration: number;
  activeTab: number;
  activatePanel(index: number): void;
}

export const Panel: React.FunctionComponent<Readonly<PanelProps>> = ({
  index,
  title,
  duration,
  activeTab,
  activatePanel,
  children
}: PanelProps) => {
  const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  const isActive = activeTab === index;
  const style: React.CSSProperties = {
    height: `${isActive ? height : 0}px`,
    overflow: 'hidden', // Hide content by default
    transition: `height ${duration || 300}ms ease`,
    padding:'1rem',
    width:'90vh',
    marginLeft:'4rem',
    marginRight:'4rem'
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const el = ref.current;
      const newHeight = el?.querySelector('.faqBody')?.scrollHeight;

      setHeight(newHeight || height);
    }, duration || 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isActive, duration, height]);

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive} ref={ref}>
      <button
        role="tab"
        className="faqPanel"
        onClick={() => {
          activatePanel(index);
        }}
      >
        {title}
      </button>

      <div style={style} className="faqBody" aria-hidden={!isActive}>
        <div className="faqContent">{children}</div>
      </div>
    </div>
  );
};
