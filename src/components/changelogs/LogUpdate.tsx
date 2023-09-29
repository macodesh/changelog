interface ILogUpdateProps {
  label: string;
  title: string;
  topics: {
    title: string;
    text: string;
    id: string;
  }[];
}

export default function LogUpdate({ label, title, topics }: ILogUpdateProps) {
  const labelMap: { [key: string]: string } = {
    feature: '🚀',
    bug: '🐞'
  };

  return (
    <div className="update">
      <div className="update-top">
        <div className="update-top-icon">
          <span>{labelMap[label]}</span>
        </div>
        <h4 className="update-top-title">{title}</h4>
      </div>

      <ul className="update-list">
        {topics.map(({ title, text, id }) => (
          <li
            className="update-item"
            key={id}
          >
            <h5 className="update-item-title">{title}</h5>
            <p className="update-item-text">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
