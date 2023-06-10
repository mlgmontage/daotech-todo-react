type Props = {
  text: string;
};

const TodoCard: React.FC<Props> = ({ text }) => {
  return <div className="card">{text}</div>;
};

export default TodoCard;
