import CategoryItem from "../category-item/category-item.component";
import "./directory-container.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
};

export default Directory;
