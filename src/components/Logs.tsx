import LogContent from './LogContent';

export default function Logs() {
  return (
    <section className="log">
      <div className="log-tab">
        <div
          id="recent-updates"
          className="log-update log-update-active"
        >
          <span>Recentes</span>
        </div>
        <div
          id="all-updates"
          className="log-update"
        >
          <span>Todas</span>
        </div>
      </div>

      <LogContent />
    </section>
  );
}
