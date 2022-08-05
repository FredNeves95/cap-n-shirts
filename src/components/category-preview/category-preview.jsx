import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleNavigation = () => navigate(`/shop/${title}`);

  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle onClick={handleNavigation}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
