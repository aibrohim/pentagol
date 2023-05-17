import { Container } from "@/shared/ui/container";
import { ArticleInfo } from "@/widgets/article-info";
import { LatestNews } from "@/widgets/latest-articles";
import { FC, Suspense } from "react";
// import { getLatestNews } from "@/widgets/latest-articles/model/services";

import { MainArticles } from "@/widgets/main-articles";
import classes from "./article-details.module.scss";

const ArticleDetails: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Container>
        <div className={classes.TopContent}>
          <ArticleInfo className={classes.Info} />
          <MainArticles />
        </div>

        <LatestNews />
      </Container>
    </Suspense>
  );
};

export default ArticleDetails;
