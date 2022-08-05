import DirectoryItem from "../category-item/directory-item.component";
import "./directory-container.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <DirectoryItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
};

export default Directory;
