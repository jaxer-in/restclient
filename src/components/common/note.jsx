const Note = (props) => {
  return (
    <div className="bg-light rounded p-4">
      <p className="text-center">{props.children}</p>
    </div>
  );
};

export default Note;
