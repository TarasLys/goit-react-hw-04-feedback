import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div className={css.cardbody}>
      <div>
        <h5 className="card">
          Good: <span>{good}</span>
        </h5>
      </div>
      <div>
        <h5 className="card">
          Neutral: <span>{neutral}</span>
        </h5>
      </div>
      <div>
        <h5 className="card">
          Bad: <span>{bad}</span>
        </h5>
      </div>
      <div>
        <h5 className="card">
          Total: <span>{total}</span>
        </h5>
      </div>
      <div>
        <h5 className="card">
          Positive feedback: <span>{positivePercentage}%</span>
        </h5>
      </div>
    </div>
  );
};
