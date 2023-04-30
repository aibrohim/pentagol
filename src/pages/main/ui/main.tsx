import { Container } from "@/shared/ui/container";
import { ClubsScores } from "@/widgets/clubs-scores";
import { CurrentWeekMatches } from "@/widgets/current-week-matches";
import { LastWeekMatches } from "@/widgets/last-week-matches";
import { FC } from "react";

const Main: FC = () => {
  return (
    <Container>
      <h1>Main Page</h1>
      <CurrentWeekMatches />
      <LastWeekMatches />
      <ClubsScores />
    </Container>
  );
};

export default Main;
