type Props = {
  text: string;
};

const TodoRow: React.FC<Props> = ({ text }) => {
  return <div className="p-1 lined-red">{text}</div>;
};

export default TodoRow;
