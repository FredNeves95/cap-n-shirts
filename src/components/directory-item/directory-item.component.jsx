import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  DirectoryBodyContainer,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const handleNavigate = () => navigate(route);

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer onClick={handleNavigate}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
