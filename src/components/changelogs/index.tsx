import { useState } from 'react';
import RecentUpdates from './RecentUpdates';
import data from '../../data';

export default function Logs() {
  const [activeTab, setActiveTab] = useState('recent-updates');

  return (
    <section className="log">
      <div className="log-tab">
        <div
          id="recent-updates"
          className={`log-update ${
            activeTab === 'recent-updates' ? 'log-update-active' : ''
          }`}
          onClick={() => setActiveTab('recent-updates')}
        >
          <span>Recentes</span>
        </div>
        <div
          id="all-updates"
          className={`log-update ${
            activeTab === 'all-updates' ? 'log-update-active' : ''
          }`}
          onClick={() => setActiveTab('all-updates')}
        >
          <span>Todas</span>
        </div>
      </div>

      <div className="log-content">
        {activeTab === 'recent-updates' ? (
          <div className="recent-updates">
            {data.map(({ preview, status, tag, text, title, updates, id }) => (
              <RecentUpdates
                preview={preview}
                status={status}
                tag={tag}
                text={text}
                title={title}
                updates={updates}
                key={id}
              />
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
