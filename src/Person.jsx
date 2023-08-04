const Person = ({name, image, age}) => {
  return(
    <article className="personMain">
        <img src={image} alt={name} />
        <div className="textArea">
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
    </article>
  );
};

export default Person;