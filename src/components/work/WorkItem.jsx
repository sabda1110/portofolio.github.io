const WorkItem = ({ key, item }) => {
  return (
    <div className="work__card" key={key}>
      <img src={item.image} className="work__img" alt="Gambar" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItem;
