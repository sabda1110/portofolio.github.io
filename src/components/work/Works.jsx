import { projectNav, ProjectsData } from './Data1';
import WorkItem from './WorkItem';
import { useState, useEffect } from 'react';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProject(ProjectsData);
    } else {
      const newProject = ProjectsData.filter((projec) => {
        return projec.category === item.name;
      });
      setProject(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });

    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`work__item ${active === index ? 'work__active' : ''}`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {project.map((item) => {
          return <WorkItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Works;
