import Person from "./Person"

const List =({reset}) => {
    return (
        <section className="listMain">
            {reset.map((person) => {
            const {id, name, age, image} = person
                return(
                    <Person key={id} {...person} />
                );
            })}
        </section>
    );
};
export default List;
