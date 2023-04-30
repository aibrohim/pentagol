import { FC } from "react";
import { Container } from "@/shared/ui/container";
import { CurrentWeekMatches } from "@/widgets/current-week-matches";
import { LastWeekMatches } from "@/widgets/last-week-matches";

const Main: FC = () => {
  return (
    <Container>
      <h1>Main Page</h1>
      <CurrentWeekMatches />
      <LastWeekMatches />
    </Container>
  );
};

export default Main;
