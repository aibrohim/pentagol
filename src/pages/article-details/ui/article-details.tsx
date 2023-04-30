import { clearArticleDetails } from "@/app/providers/store/config/slices";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Container } from "@/shared/ui/container";
import { FC, useEffect } from "react";
import { useParams } from "react-router";
import { selectArticleDetailsLoading } from "../model/selectors";
import { getArticleDetails } from "../model/services";
import { ArticleInfo } from "@/widgets/article-info";

const ArticleDetails: FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getArticleDetails(+id));
    }
    return () => {
      dispatch(clearArticleDetails());
    };
  }, []);

  const loading = useAppSelector(selectArticleDetailsLoading);

  if (loading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  return (
    <Container>
      <ArticleInfo />
    </Container>
  );
};

export default ArticleDetails;
